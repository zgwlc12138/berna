package com.wlc.berna.common.thread;

import com.wlc.berna.common.thread.monitor.Snapshot;
import com.wlc.berna.common.thread.monitor.SnapshotNotifier;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.concurrent.*;

@Component("pooledExecutor")
public class PooledExecutor implements Executor, Snapshot {
    private Log log = LogFactory.getLog(PooledExecutor.class);

    private static int DEFAULT_QUEUESIZE = 10;
    private static int DEFAULT_MINSIZE = 1;
    private static int DEFAULT_MAXSIZE = 20;
    private static int DEFAULT_INITSIZE = 5;
    private static int DEFAULT_KEEPALIVETIME = 300;

    private String name = "berna-thread-pool";

    @Value("${thread.queueSize}")
    private int queueSize = DEFAULT_QUEUESIZE;
    @Value("${thread.minSize}")
    private int minSize = DEFAULT_MINSIZE;
    @Value("${thread.maxSize}")
    private int maxSize = DEFAULT_MAXSIZE;
    @Value("${thread.initSize}")
    private int initSize = DEFAULT_INITSIZE;
    @Value("${thread.keepAliveTime}")
    private int keepAliveTime = DEFAULT_KEEPALIVETIME;
    private String blockedExecutionPolicy = "run";
    ThreadPoolExecutor executor;
    private int count;
    private boolean started;
    private ConcurrentHashMap<InnerRunnable, Long> runnableMap = new ConcurrentHashMap();
    private final List<SnapshotNotifier> notifiers = new ArrayList();
    private boolean openProfiler = true;
    private boolean monitorFlag = true;

    public void setSnapshotNotifier(List<SnapshotNotifier> sns) {
        synchronized (this.notifiers) {
            this.notifiers.addAll(sns);
        }
    }

    public void registerSnapshotNotifier(SnapshotNotifier notifier) {
        synchronized (this.notifiers) {
            this.notifiers.add(notifier);
        }
    }

    public void unregisterSnapshotNotifier(SnapshotNotifier notifier) {
        synchronized (this.notifiers) {
            this.notifiers.remove(notifier);
        }
    }

    public String getSnapshotName() {
        StringBuffer buf = new StringBuffer();
        buf.append(this.name).append("|")
                .append(Integer.toHexString(super.hashCode()));
        return buf.toString();
    }

    public String getSnapshotType() {
        return "ThreadPool";
    }

    public void setOpenSnapshot(boolean open) {
        this.openProfiler = open;
    }

    public boolean isOpenSnapshot() {
        return this.openProfiler;
    }

    public void setMonitor(boolean monitorFlag) {
        this.monitorFlag = monitorFlag;
    }

    public boolean isMonitor() {
        return this.monitorFlag;
    }

    public void setName(String string) {
        this.name = string;
    }

    public void setBlockedExecutionPolicy(String string) {
        this.blockedExecutionPolicy = string;
    }

    public void setInitSize(int i) {
        this.initSize = i;
    }

    public void setKeepAliveTime(int i) {
        this.keepAliveTime = i;
    }

    public void setMaxSize(int i) {
        this.maxSize = i;
    }

    public void setMinSize(int i) {
        this.minSize = i;
    }

    public void setQueueSize(int i) {
        this.queueSize = i;
    }

    public synchronized void start() {
        if (this.started) {
            return;
        }
        this.started = true;

        BlockingQueue queue = null;
        if (this.queueSize > 0)
            queue = new ArrayBlockingQueue(this.queueSize);
        else {
            queue = new SynchronousQueue();
        }

        ThreadFactory tf = new ThreadFactory() {
            public Thread newThread(Runnable run) {
                return new Thread(run, ((PooledExecutor.this.name == null)
                        ? "pooled"
                        : PooledExecutor.this.name)
                        + "-"
                        + (PooledExecutor.this.count++));
            }
        };
        RejectedExecutionHandler handler = null;
        if (this.blockedExecutionPolicy.length() > 0) {
            if ("run".equals(this.blockedExecutionPolicy))
                handler = new ThreadPoolExecutor.CallerRunsPolicy();
            else if ("abort".equals(this.blockedExecutionPolicy))
                handler = new ThreadPoolExecutor.AbortPolicy();
            else if ("discard".equals(this.blockedExecutionPolicy))
                handler = new ThreadPoolExecutor.DiscardPolicy();
            else if ("discardOldest".equals(this.blockedExecutionPolicy)) {
                handler = new ThreadPoolExecutor.DiscardOldestPolicy();
            }
        }
        this.executor = new ThreadPoolExecutor(this.minSize, this.maxSize,
                this.keepAliveTime, TimeUnit.SECONDS, queue, tf, handler);

        this.log.info("Initialize " + this);
    }

    public synchronized void shutdown() throws InterruptedException {
        if (this.executor != null) {
            this.executor.shutdownNow();
        }
        this.started = false;
    }

    public boolean isAlive() {
        return this.started;
    }

    public void execute(Runnable runnable) throws InterruptedException {
        if (this.executor == null) {
            start();
        }

        this.executor.execute(new InnerRunnable(runnable));

        if (!(this.openProfiler))
            return;
        List<SnapshotNotifier> copied;
        synchronized (this.notifiers) {
            copied = new ArrayList(this.notifiers);
        }
        for (SnapshotNotifier notifier : copied)
            notifier.notify(this);
    }

    public Map getSnapshotData() {
        if (this.executor == null) {
            return null;
        }
        Map result = new LinkedHashMap();
        result.put("QueueCapacity", Integer.valueOf(this.queueSize));
        result.put("QueueSize",
                Integer.valueOf(this.executor.getQueue().size()));
        result.put("ActiveCount",
                Integer.valueOf(this.executor.getActiveCount()));
        result.put("PoolSize", Integer.valueOf(this.executor.getPoolSize()));
        result.put("LargestPoolSize",
                Integer.valueOf(this.executor.getLargestPoolSize()));
        result.put("CorePoolSize",
                Integer.valueOf(this.executor.getCorePoolSize()));
        result.put("MaximumPoolSize",
                Integer.valueOf(this.executor.getMaximumPoolSize()));
        result.put("CompletedTaskCount",
                Long.valueOf(this.executor.getCompletedTaskCount()));
        result.put("TaskCount", Long.valueOf(this.executor.getTaskCount()));
        result.put("KeepAliveTime", Long.valueOf(this.executor
                .getKeepAliveTime(TimeUnit.MILLISECONDS)));
        Map<InnerRunnable,Long> map = new HashMap(this.runnableMap);
        int count0 = 0;
        int count5 = 0;
        int count10 = 0;
        int countMax = 0;
        long now = System.currentTimeMillis();

        for (Map.Entry<InnerRunnable,Long> entry : map.entrySet()) {
            long runningTime = now - ((Long) entry.getValue()).longValue();
            if (runningTime < 5000L)
                ++count0;
            else if ((runningTime >= 5000L) && (runningTime < 10000L))
                ++count5;
            else if ((runningTime >= 10000L) && (runningTime < 20000L))
                ++count10;
            else if (runningTime >= 20000L) {
                ++countMax;
            }
        }

        result.put("RunningTime0", Integer.valueOf(count0));
        result.put("RunningTime5", Integer.valueOf(count5));
        result.put("RunningTime10", Integer.valueOf(count10));
        result.put("RunningTimeMax", Integer.valueOf(countMax));

        return result;
    }

    public String toString() {
        return ((this.name == null) ? "threadpool" : this.name) + "[queue="
                + this.queueSize + ",init=" + this.initSize + ",min="
                + this.minSize + ",max=" + this.maxSize + ",keepAlive="
                + this.keepAliveTime + "sec]";
    }

    private class InnerRunnable implements Runnable {
        private Runnable runnable;
        private Thread thread;

        public InnerRunnable(Runnable paramRunnable) {
            this.runnable = paramRunnable;
        }

        public Thread getThread() {
            return this.thread;
        }

        public void run() {
            this.thread = Thread.currentThread();
            PooledExecutor.this.runnableMap.put(this,
                    Long.valueOf(System.currentTimeMillis()));
            try {
                this.runnable.run();
            } finally {
                PooledExecutor.this.runnableMap.remove(this);
            }
        }
    }
}
