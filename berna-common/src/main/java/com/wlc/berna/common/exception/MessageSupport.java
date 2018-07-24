package com.wlc.berna.common.exception;

public class MessageSupport implements Messageable {
	public MessageSupport() {
	}

	private String defaultMessage = null;

	private String messageKey = null;

	private Object[] args = new Object[0];

	public boolean hasDefaultMessage() {
		return this.defaultMessage != null;
	}

	public void setDefaultMessage(String message) {
		this.defaultMessage = message;
	}

	public String getDefaultMessage() {
		if (this.defaultMessage == null) {
			return null;
		}
		return this.defaultMessage;
	}

	public void setMessageKey(String key) {
		this.messageKey = key;
	}

	public String getMessageKey() {
		return this.messageKey;
	}

	public void setArgs(Object[] args) {
		this.args = args;
	}

	public Object[] getArgs() {
		return this.args;
	}
}
