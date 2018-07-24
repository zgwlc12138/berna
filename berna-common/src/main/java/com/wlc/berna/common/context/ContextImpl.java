package com.wlc.berna.common.context;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class ContextImpl extends AbstractContext
{
    private ClientInfo clientInfo;
    private TransactionConfig tc;

    public ContextImpl()
    {
        super(null);
    }

    public ContextImpl(String transactionId)
    {
        super(transactionId);
    }

    public ContextImpl(String transactionId, TransactionConfig tc) {
        super(transactionId);
        this.tc = tc;
    }

    public ContextImpl(String transactionId, ClientInfo clientInfo) {
        super(transactionId);
        this.clientInfo = clientInfo;
    }

    public ContextImpl(String transactionId, TransactionConfig tc, ClientInfo clientInfo) {
        super(transactionId);
        this.tc = tc;
        this.clientInfo = clientInfo;
    }

    public ClientInfo getClientInfo()
    {
        if (this.clientInfo == null)
            this.clientInfo = new ClientInfoImpl("INNER", "localhost", "PE");
        return this.clientInfo;
    }

    public TransactionConfig getTransactionConfig()
    {
        return this.tc;
    }

    public Object getSessionAttribute(String name)
    {
        return null;
    }

    public Object getRequestAttribute(String name)
    {
        return null;
    }

    public Locale getLocale()
    {
        return Locale.getDefault();
    }

    public String getSessionId()
    {
        return null;
    }

    public Map getDataMap()
    {
        return new HashMap(super.getDataMap());
    }

    public void setClientInfo(ClientInfo info)
    {
        this.clientInfo = info;
    }
}