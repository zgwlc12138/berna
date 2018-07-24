package com.wlc.berna.common.context;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

public abstract interface RoleGroup extends Role
{
    public abstract void addMember(Role paramRole);

    public abstract Iterator members();

    public abstract void removeMember(Role paramRole);

    public abstract Role getRole(String paramString);

    public abstract void setRoles(List paramList);

    public abstract List getRoles();

    public abstract Map getRolesMap();
}

