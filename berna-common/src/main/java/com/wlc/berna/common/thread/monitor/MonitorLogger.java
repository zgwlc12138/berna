package com.wlc.berna.common.thread.monitor;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class MonitorLogger  implements SnapshotNotifier
{

    public MonitorLogger()
    {
        open = true;
        period = 5000L;
        lastMonitorTimeMap = new ConcurrentHashMap();
    }

    public void notify(Snapshot snapshot)
    {
        if(open)
        {
            Long lastTime = (Long)lastMonitorTimeMap.get(snapshot);
            long now = System.currentTimeMillis();
            if(lastTime == null || now - lastTime.longValue() > period)
            {
                Log log = LogFactory.getLog((new StringBuilder(String.valueOf(snapshot.getSnapshotType()))).append(".Monitor").toString());
                StringBuffer buf = new StringBuffer();
                buf.append(snapshot.getSnapshotName());
                buf.append(":");
                buf.append(snapshot.getSnapshotData());
                log.info(buf.toString());
                lastTime = Long.valueOf(now);
                lastMonitorTimeMap.put(snapshot, lastTime);
            }
        }
    }

    public void setOpen(boolean open)
    {
        this.open = open;
    }

    public void setPeriod(long period)
    {
        this.period = period;
    }

    private boolean open;
    private long period;
    private Map lastMonitorTimeMap;
}


