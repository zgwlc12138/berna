package com.wlc.berna.common.context;

import java.util.Map;

public abstract interface  TrsFlowContext {
    public abstract String getTrsFlowId();

    public abstract long getTimestamp();

    public abstract Object getData(String paramString);

    public abstract void setData(String paramString, Object paramObject);

    public abstract Map getDataMap();

    public abstract void setDataMap(Map paramMap);

    public abstract void clear();
}
