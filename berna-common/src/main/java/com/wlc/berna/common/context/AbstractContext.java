package com.wlc.berna.common.context;

import com.wlc.berna.common.exception.TemplateRuntimeException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.MessageSource;

import java.lang.reflect.Array;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public abstract class AbstractContext
        implements Context
{
    private int state;
    private Timestamp timestamp;
    private User user;
    private String transactionId;
    private Map data;
    private Object variable;
    protected Log log;
    private TrsFlowContext trsFlowContext;
    private ApplicationContext applicationContext;
    private TrsFlowManager trsFlowManager;
    private MessageSource messageSource;

    public void setTrsFlowContext(TrsFlowContext trsFlowContext)
    {
        this.trsFlowContext = trsFlowContext;
    }

    public AbstractContext(String transactionId)
    {
        this.state = 0;

        this.log = LogFactory.getLog(super.getClass());

        this.transactionId = transactionId;

        this.timestamp = new Timestamp(System.currentTimeMillis());

        this.data = new HashMap();
    }

    public AbstractContext(String transactionId, Map dataMap)
    {
        this.state = 0;

        this.log = LogFactory.getLog(super.getClass());

        this.transactionId = transactionId;

        this.timestamp = new Timestamp(System.currentTimeMillis());

        this.data = dataMap;
    }

    public AbstractContext(String transactionId, TrsFlowManager trsFlowManager)
    {
        this(transactionId);

        this.trsFlowManager = trsFlowManager;
    }

    public AbstractContext(String transactionId, Map dataMap, TrsFlowManager trsFlowManager)
    {
        this(transactionId, dataMap);

        this.trsFlowManager = trsFlowManager;
    }

    public User getUser()
    {
        return this.user;
    }

    public void setUser(User user)
    {
        this.user = user;
    }

    public Object getData(String name)
    {
        Object object = this.data.get(name);

        return object;
    }

    public void setData(String name, Object data)
    {
        if (data == null)
        {
            this.data.remove(name);
        }
        else
            this.data.put(name, data);
    }

    public Map getDataMap()
    {
        return this.data;
    }

    public final Map getInnerMap()
    {
        return this.data;
    }

    public void setDataMap(Map map)
    {
        this.data.putAll(map);
    }

    public int getState()
    {
        return this.state;
    }

    public void setState(int i)
    {
        this.state = i;
    }

    public String getTransactionId()
    {
        return this.transactionId;
    }

    public void setTransactionId(String string)
    {
        this.transactionId = string;
    }

    public void setVariable(Object variable)
    {
        this.variable = variable;
    }

    public Object getVariable()
    {
        return this.variable;
    }

    public Locale getLocale()
    {
        return Locale.getDefault();
    }

    public Boolean getBoolean(String name)
    {
        Object object = getData(name);
        if (object == null) return null;

        if (object instanceof Boolean)
            return ((Boolean)object);
        if (object instanceof String) {
            if (((String)object).equals(""))
                return null;
            if (((String)object).length() == 1)
            {
                char ch = ((String)object).charAt(0);
                switch (ch)
                {
                    case '1':
                    case 'T':
                    case 'Y':
                    case 't':
                    case 'y':
                        return Boolean.TRUE;
                    case '0':
                    case 'F':
                    case 'N':
                    case 'f':
                    case 'n':
                        return Boolean.FALSE;
                }

                throw new TemplateRuntimeException(
                        "unsupported_boolean_convert",
                        new Object[] { object });
            }

            return new Boolean((String)object);
        }
        throw new TemplateRuntimeException(
                "unsupported_boolean_convert",
                new Object[] { object });
    }

    public Integer getInteger(String name)
    {
        Object object = getData(name);
        if (object == null) return null;

        if (object instanceof Integer)
            return ((Integer)object);
        if (object instanceof String) {
            if (((String)object).equals("")) {
                return null;
            }
            return new Integer((String)object); }
        if (object instanceof Number) {
            return new Integer(((Number)object).intValue());
        }
        throw new TemplateRuntimeException(
                "unsupported_integer_convert",
                new Object[] { object });
    }

    public Long getLong(String name)
    {
        Object object = getData(name);
        if (object == null) return null;

        if (object instanceof Long)
            return ((Long)object);
        if (object instanceof String) {
            if (((String)object).equals("")) {
                return null;
            }
            return new Long((String)object); }
        if (object instanceof Number) {
            return new Long(((Number)object).longValue());
        }
        throw new TemplateRuntimeException(
                "unsupported_long_convert",
                new Object[] { object });
    }

    public String getString(String name)
    {
        Object object = getData(name);
        if (object == null) return null;

        if (object instanceof String) {
            return ((String)object);
        }
        return object.toString();
    }

    public BigDecimal getBigDecimal(String name)
    {
        Object object = getData(name);
        if (object == null) return null;

        if (object instanceof BigDecimal)
            return ((BigDecimal)object);
        if (object instanceof String)
            return new BigDecimal((String)object);
        if (object instanceof Number) {
            return new BigDecimal(((Number)object).doubleValue());
        }
        throw new TemplateRuntimeException(
                "unsupported_bigdecimal_convert",
                new Object[] { object });
    }

    public String[] getStringArray(String name)
    {
        Object object = getData(name);
        if (object == null)
            return new String[0];
        if (object.getClass().isArray()) {
            if (object.getClass().getComponentType() == String.class) {
                return ((String[])object);
            }
            int length = Array.getLength(object);
            String[] newArray = new String[length];
            int i = 0;
            while (true) { Object subObject = Array.get(object, i);
                if (subObject == null)
                    newArray[i] = null;
                else
                    newArray[i] = String.valueOf(Array.get(object, i));
                ++i; if (i >= length)
                {
                 return newArray; }
            }
        }
        return new String[] { (String)object };
    }

    public Object[] getObjectArray(String name, Class class0)
    {
        Object object = getData(name);
        if (object == null)
        {
            return ((Object[])Array.newInstance(class0, 0));
        }
        if (object.getClass().isArray()) {
            if (object.getClass().getComponentType() == class0) {
                return ((Object[])object);
            }
            throw new TemplateRuntimeException(
                    "unsupported_array_convert",
                    new Object[] { object });
        }
        if (class0.isAssignableFrom(object.getClass()))
        {
            Object[] result = (Object[])Array.newInstance(class0, 1);
            result[0] = object;
            return result;
        }

        throw new TemplateRuntimeException(
                "unsupported_array_convert",
                new Object[] { object });
    }

    public Timestamp getTimestamp()
    {
        return this.timestamp;
    }

    public void setTimestamp(Timestamp timestamp)
    {
        this.timestamp = timestamp;
    }

    public TrsFlowContext beginTrsFlow()
    {
        if (this.trsFlowManager == null) {
            throw new RuntimeException("pe.core.trsflowmanager_is_null");
        }
        if (this.trsFlowContext != null)
        {
            this.trsFlowManager.endFlow(this.trsFlowContext.getTrsFlowId());
        }

        this.trsFlowContext = this.trsFlowManager.beginFlow();

        return this.trsFlowContext;
    }

    public void endTrsFlow()
    {
        if (this.trsFlowContext == null)
            return;
        if (this.trsFlowManager == null)
            throw new RuntimeException("pe.core.trsflowmanager_is_null");
        this.trsFlowManager.endFlow(this.trsFlowContext.getTrsFlowId());
        this.trsFlowContext = null;
    }

    public TrsFlowContext getTrsFlowContext()
    {
        return this.trsFlowContext;
    }

    @Override
    public ApplicationContext getApplicationContext() {
        return applicationContext;
    }

    public void setApplicationContext(ApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }

    public MessageSource getMessageSource()
    {
        if (this.messageSource != null) {
            return this.messageSource;
        }
        if ((this.applicationContext != null) &&
                (getTransactionConfig() != null))
        {
            ApplicationContext bc = getTransactionConfig().getApplicationContext();
            if ((bc != null) &&
                    (bc != this.applicationContext))
            {
                this.messageSource = new MessageSourceWrapper(this.applicationContext, bc);
                return this.messageSource;
            }

        }

        this.messageSource = this.applicationContext;

        return this.messageSource;
    }

    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    public String toString()
    {
        return super.getClass().getName() + " TransactionId:" + getTransactionId() + " User:" + this.user + " Timestamp:" + this.timestamp + " Inner dataMap:" + this.data;
    }
}
