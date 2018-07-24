package com.wlc.berna.common.context;

import java.io.Serializable;
import java.util.Locale;

public abstract interface User extends Serializable
{
    public static final long serialVersionUID = 8018926778930829936L;

    public abstract String getUniqueId();

    public abstract void setUniqueId(String paramString);

    public abstract String getUserId();

    public abstract void setUserId(String paramString);

    public abstract String getName();

    public abstract void setName(String paramString);

    public abstract String getCifNo();

    public abstract void setCifNo(String paramString);

    public abstract Locale getLocale();

    public abstract void setLocale(Locale paramLocale);

    public abstract Role getRole();

    public abstract void setRole(Role paramRole);

    public abstract Object getClientCertificate();

    public abstract void setClientCertificate(Object paramObject);

    public abstract String getPassword();

    public abstract void setPassword(String paramString);

    public abstract void logout();

    public abstract void setLogout(boolean paramBoolean);

    public abstract boolean isLogout();
}
