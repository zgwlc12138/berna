package com.wlc.berna.common.context;

import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceResolvable;
import org.springframework.context.NoSuchMessageException;

import java.util.Locale;

public class MessageSourceWrapper
        implements MessageSource
{
    private MessageSource parent;
    private MessageSource module;

    public MessageSourceWrapper(MessageSource parent, MessageSource module)
    {
        this.parent = parent;
        this.module = module;
    }

    public String getMessage(String code, Object[] args, String defaultMessage, Locale locale)
    {
        String message = this.module.getMessage(code, args, null, locale);
        if (message != null) {
            return message;
        }
        return this.parent.getMessage(code, args, defaultMessage, locale);
    }

    public String getMessage(String code, Object[] args, Locale locale)
            throws NoSuchMessageException
    {
        String message = this.module.getMessage(code, args, null, locale);
        if (message != null) {
            return message;
        }
        return this.parent.getMessage(code, args, locale);
    }

    public String getMessage(MessageSourceResolvable resolvable, Locale locale)
            throws NoSuchMessageException
    {
        try
        {
            return this.module.getMessage(resolvable, locale);
        } catch (NoSuchMessageException e) {
        }
        return this.parent.getMessage(resolvable, locale);
    }
}
