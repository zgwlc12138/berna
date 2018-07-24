package com.wlc.berna.common.context;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

import java.util.List;
import java.util.Map;

public abstract interface TransactionConfig extends ApplicationContextAware {
    public abstract ApplicationContext getApplicationContext();


    public abstract void setActions(Map paramMap);

    public abstract Map getActions();

    public abstract void setFields(Map paramMap);

    public abstract Map getFields();

    public abstract void setRules(List paramList);

    public abstract List getRules();

    public abstract void setSetting(Map paramMap);

    public abstract Map getSetting();

    public abstract void setChannels(Map paramMap);

    public abstract Map getChannels();
}
