package com.wlc.berna.common.context;

import java.util.Locale;
import java.util.Map;

public class ClientInfoImpl
        implements ClientInfo
{
    private String channelId;
    private String remoteAddr;
    private String clientType;

    public ClientInfoImpl()
    {
    }

    public ClientInfoImpl(String channelId, String remoteAddr, String clientType)
    {
        this.channelId = channelId;
        this.remoteAddr = remoteAddr;
        this.clientType = clientType;
    }

    public String getRemoteAddr()
    {
        return this.remoteAddr;
    }

    public String getRemoteHost()
    {
        return this.remoteAddr;
    }

    public Locale getLocale()
    {
        return null;
    }

    public String getCharacterEncoding()
    {
        return null;
    }

    public String getProtocol()
    {
        return null;
    }

    public String getLanguages()
    {
        return null;
    }

    public String getClientType()
    {
        return this.clientType;
    }

    public Map getAttributes()
    {
        return null;
    }

    public String getChannelId()
    {
        return this.channelId;
    }

    public void setChannelId(String string)
    {
        this.channelId = string;
    }

    public void setClientType(String string)
    {
        this.clientType = string;
    }

    public void setRemoteAddr(String string)
    {
        this.remoteAddr = string;
    }
}