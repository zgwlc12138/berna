package com.wlc.berna.common.context;

public abstract class AbstractRole   implements Role
{

    public AbstractRole()
    {
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getName()
    {
        return name;
    }

    public boolean implies(Role role)
    {
        if(getClass().equals(role.getClass()))
            return getName().equals(role.getName());
        else
            return false;
    }

    public String toString()
    {
        StringBuffer sb = new StringBuffer();
        sb.append("Role ").append(getName());
        return sb.toString();
    }

    private String name;
}

