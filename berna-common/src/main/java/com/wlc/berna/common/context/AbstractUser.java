package com.wlc.berna.common.context;

import java.util.*;

public abstract class AbstractUser
        implements User, TokenHolder
{
    private String uniqueId;
    private String userId;
    private String name;
    private String cifNo;
    private Locale locale;
    private Object clientCertificate;
    private boolean logoutFlag = false;
    private String password;
    private Role role;
    private TokenHolder tokenHolder = new TokenHolderImpl();

    public String getCifNo()
    {
        return this.cifNo;
    }

    public Object getClientCertificate()
    {
        return this.clientCertificate;
    }

    public Locale getLocale()
    {
        return this.locale;
    }

    public String getName()
    {
        return this.name;
    }

    public String getUniqueId()
    {
        return this.uniqueId;
    }

    public String getUserId()
    {
        return this.userId;
    }

    public void setCifNo(String string)
    {
        this.cifNo = string;
    }

    public void setClientCertificate(Object certificate)
    {
        this.clientCertificate = certificate;
    }

    public void setLocale(Locale locale)
    {
        this.locale = locale;
    }

    public void setName(String string)
    {
        this.name = string;
    }

    public void setUniqueId(String string)
    {
        this.uniqueId = string;
    }

    public void setUserId(String string)
    {
        this.userId = string;
    }

    public String getPassword()
    {
        return this.password;
    }

    public void setPassword(String string)
    {
        this.password = string;
    }

    public void logout()
    {
        this.logoutFlag = true;
    }

    public void setLogout(boolean flag)
    {
        this.logoutFlag = flag;
    }

    public boolean isLogout()
    {
        return this.logoutFlag;
    }

    public Role getRole()
    {
        return this.role;
    }

    public void setRole(Role role)
    {
        this.role = role;
    }

    public List getRoleList()
    {
        List roleList = new ArrayList();
        for (Iterator iterator = ((RoleGroup)getRole()).members(); iterator.hasNext(); )
        {
            Role role = (Role)iterator.next();
            roleList.add(role.getName());
        }

        return roleList;
    }

    public void setUser(User user0)
    {
        AbstractUser user = (AbstractUser)user0;
        this.cifNo = user.cifNo;
        this.name = user.name;
        this.password = user.password;
        this.role = user.role;
        if (this.userId == null)
            this.userId = user.userId;
        if (this.uniqueId == null)
            this.uniqueId = user.uniqueId;
        if (this.clientCertificate == null)
            this.clientCertificate = user.clientCertificate;
    }

    public String toString()
    {
        return super.getClass().getName() + " CifNo:" + this.cifNo + " UserId:" + this.userId + " logoutFlag:" + this.logoutFlag;
    }

    public void setToken(String tokenKey, Object token) {
        this.tokenHolder.setToken(tokenKey, token);
    }

    public Object getToken(String tokenKey) {
        return this.tokenHolder.getToken(tokenKey);
    }

    public Object getTrsKeyInfo(String tokenKey) {
        return this.tokenHolder.getTrsKeyInfo(tokenKey);
    }

    public void setTrsKeyInfo(String tokenKey, Object trsKeyInfo) {
        this.tokenHolder.setTrsKeyInfo(tokenKey, trsKeyInfo);
    }

    private static class TokenHolderImpl
            implements TokenHolder
    {
        private Map tokenMap = new HashMap(5);
        private Map trsKeyInfoMap = new HashMap(5);

        public void setToken(String tokenKey, Object token) {
            if (token == null)
                this.tokenMap.remove(tokenKey);
            else
                this.tokenMap.put(tokenKey, token);
        }

        public Object getToken(String tokenKey)
        {
            return this.tokenMap.get(tokenKey);
        }

        public Object getTrsKeyInfo(String tokenKey) {
            return this.trsKeyInfoMap.get(tokenKey);
        }

        public void setTrsKeyInfo(String tokenKey, Object trsKeyInfo) {
            if (trsKeyInfo == null)
                this.trsKeyInfoMap.remove(tokenKey);
            else
                this.trsKeyInfoMap.put(tokenKey, trsKeyInfo);
        }
    }
}
