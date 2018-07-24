package com.wlc.berna.common.context;

import java.io.Serializable;

public abstract interface Role extends Serializable
{
    public static final long serialVersionUID = -1142489549428962905L;

    public abstract boolean implies(Role paramRole);

    public abstract String getName();
}