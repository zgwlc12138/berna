package com.wlc.berna.common.context;

public abstract interface TrsFlowManager
{
    public abstract TrsFlowContext beginFlow();

    public abstract TrsFlowContext getTrsFlowContext(String paramString);

    public abstract void passiveFlow(String paramString);

    public abstract TrsFlowContext activate(String paramString);

    public abstract void endFlow(String paramString);
}
