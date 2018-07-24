package com.wlc.berna.common.context;

import java.util.HashMap;
import java.util.Map;

public class TrsFlowContextImpl  implements TrsFlowContext
{

    public TrsFlowContextImpl()
    {
        dataMap = new HashMap();
        timestamp = System.currentTimeMillis();
    }

    public long getTimestamp()
    {
        return timestamp;
    }

    public String getTrsFlowId()
    {
        return trsFlowId;
    }

    public void setTrsFlowId(String trsFlowId)
    {
        this.trsFlowId = trsFlowId;
    }

    public Object getData(String name)
    {
        return null;
    }

    public Map getDataMap()
    {
        return dataMap;
    }

    public void setData(String name, Object data)
    {
        if(data == null)
            dataMap.remove(name);
        else
            dataMap.put(name, data);
    }

    public void setDataMap(Map data)
    {
        dataMap.putAll(data);
    }

    public void clear()
    {
        dataMap.clear();
    }

    private Map dataMap;
    private String trsFlowId;
    private long timestamp;
}

