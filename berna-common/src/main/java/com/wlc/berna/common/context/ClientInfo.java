package com.wlc.berna.common.context;

import java.util.Locale;
import java.util.Map;

public abstract interface ClientInfo {
    public static final String CHANNEL_ID_HTTP_PREFIX = "HTTP";
    public static final String CHANNEL_ID_TCP = "TCP";
    public static final String CHANNEL_ID_MQ = "MQ";
    public static final String CHANNEL_ID_INNER = "INNER";
    public static final String ClientInfoName = "_CSIIClientInfo";
    public static final String CHANNEL_ID_HTTP_WEB = "HTTP.WEB";
    public static final String CHANNEL_ID_HTTP_WAP = "HTTP.WAP";
    public static final String CHANNEL_ID_HTTP_STREAM = "HTTP.STREAM";
    public static final String HTTP_SUB_WEB = "WEB";
    public static final String HTTP_SUB_WAP = "WAP";
    public static final String HTTP_SUB_STREAM = "STREAM";

    public abstract String getRemoteAddr();

    public abstract String getRemoteHost();

    public abstract Locale getLocale();

    public abstract String getCharacterEncoding();

    public abstract String getProtocol();

    public abstract String getLanguages();

    public abstract String getClientType();

    public abstract Map getAttributes();

    public abstract String getChannelId();
}
