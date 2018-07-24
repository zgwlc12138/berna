package com.wlc.berna.common.context;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.LinkedBlockingQueue;

public class TrsFlowManagerImpl  implements TrsFlowManager
{

    public void setPeriod(long period)
    {
        this.period = period;
    }

    public void setTimeout(long timeout)
    {
        this.timeout = timeout;
    }

    public TrsFlowManagerImpl()
    {
        log = LogFactory.getLog(getClass());
        cachedTrsFlowContexts = new ConcurrentHashMap();
        queue = new LinkedBlockingQueue();
        period = 300000L;
        timeout = 1800000L;
    }

    public boolean isDirty()
    {
        long current = System.currentTimeMillis();
        return current - lastCleanTime >= period;
    }

    public TrsFlowContext beginFlow()
    {
        String id = trsFlowIdGenerator.generate();
        TrsFlowContextImpl context = new TrsFlowContextImpl();
        context.setTrsFlowId(id);
        cachedTrsFlowContexts.put(id, context);
        try
        {
            if(isDirty())
                synchronized(this)
                {
                    if(isDirty())
                    {
                        lastCleanTime = System.currentTimeMillis();
                        do
                        {
                            TrsFlowContext c = (TrsFlowContext)queue.peek();
                            if(c == null || lastCleanTime - c.getTimestamp() <= timeout)
                                break;
                            queue.poll();
                            cachedTrsFlowContexts.remove(c.getTrsFlowId());
                            if(log.isDebugEnabled())
                                log.debug((new StringBuilder("clear:")).append(c.getTrsFlowId()).toString());
                        } while(true);
                    }
                }
            queue.put(context);
        }
        catch(InterruptedException e)
        {
            throw new RuntimeException("pe.core.begin_flow_error", e);
        }
        return context;
    }

    public void endFlow(String trsFlowId)
    {
        cachedTrsFlowContexts.remove(trsFlowId);
    }

    public void passiveFlow(String trsFlowId)
    {
        throw new RuntimeException("pe.core.unsupported_method");
    }

    public TrsFlowContext activate(String trsFlowId)
    {
        throw new RuntimeException("pe.core.unsupported_method");
    }

    public void setTrsFlowIdGenerator(TrsFlowIdGenerator trsFlowIdGenerator)
    {
        this.trsFlowIdGenerator = trsFlowIdGenerator;
    }

    public TrsFlowContext getTrsFlowContext(String trsFlowId)
    {
        return (TrsFlowContext)cachedTrsFlowContexts.get(trsFlowId);
    }

    protected Log log;
    private TrsFlowIdGenerator trsFlowIdGenerator;
    private Map cachedTrsFlowContexts;
    protected LinkedBlockingQueue queue;
    private long lastCleanTime;
    private long period;
    private long timeout;
}