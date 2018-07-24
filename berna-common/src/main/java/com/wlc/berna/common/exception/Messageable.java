package com.wlc.berna.common.exception;

import java.io.Serializable;

public abstract interface Messageable  extends Serializable
{
	  public abstract String getDefaultMessage();
	  
	  public abstract boolean hasDefaultMessage();
	  
	  public abstract String getMessageKey();
	  
	  public abstract Object[] getArgs();
	}
