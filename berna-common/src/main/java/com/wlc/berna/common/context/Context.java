package com.wlc.berna.common.context;

import org.springframework.context.ApplicationContext;
import org.springframework.context.MessageSource;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Locale;
import java.util.Map;

public abstract interface Context {
    public abstract String getTransactionId();

    public abstract void setTransactionId(String s);

    public abstract User getUser();

    public abstract void setUser(User user);

    public abstract ClientInfo getClientInfo();

    public abstract Locale getLocale();

    public abstract TransactionConfig getTransactionConfig();

    public abstract Object getSessionAttribute(String s);

    public abstract String getSessionId();

    public abstract Object getRequestAttribute(String s);

    public abstract Object getData(String s);

    public abstract String getString(String s);

    public abstract Boolean getBoolean(String s);

    public abstract Integer getInteger(String s);

    public abstract Long getLong(String s);

    public abstract BigDecimal getBigDecimal(String s);

    public abstract String[] getStringArray(String s);

    public abstract Object[] getObjectArray(String s, Class class1);

    public abstract void setData(String s, Object obj);

    public abstract void setVariable(Object obj);

    public abstract Object getVariable();

    public abstract Map getDataMap();

    public abstract void setDataMap(Map map);

    public abstract int getState();

    public abstract void setState(int i);

    public abstract Timestamp getTimestamp();

    public abstract TrsFlowContext beginTrsFlow();

    public abstract TrsFlowContext getTrsFlowContext();

    public abstract void setTrsFlowContext(TrsFlowContext trsflowcontext);

    public abstract void endTrsFlow();

    public abstract void setApplicationContext(ApplicationContext applicationcontext);

    public abstract ApplicationContext getApplicationContext();

    public abstract MessageSource getMessageSource();
}
