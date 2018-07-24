package com.wlc.berna.common.context;

public abstract interface TokenHolder
{
    public static final String SECURITY_TOKEN_KEY = "Security_Token";
    public static final String RESUBMIT_TOKEN_KEY = "Resubmit_Token";
    public static final String OTP_TOKEN_KEY = "OTP_Token";
    public static final String MOBILE_TOKEN_KEY = "Mobile_Token";
    public static final String LOGIN_TOKEN = "Login_Token";

    public abstract void setToken(String paramString, Object paramObject);

    public abstract Object getToken(String paramString);

    public abstract Object getTrsKeyInfo(String paramString);

    public abstract void setTrsKeyInfo(String paramString, Object paramObject);
}