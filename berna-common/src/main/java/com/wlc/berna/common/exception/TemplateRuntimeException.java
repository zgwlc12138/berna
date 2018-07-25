package com.wlc.berna.common.exception;

public class TemplateRuntimeException extends RuntimeException implements Messageable {
	private static final long serialVersionUID = 3566124624869792895L;
	private MessageSupport msgSupport = new MessageSupport();
	private static final String DEFAULT_EX_KEY = "cup.error.undefined";
	private Object[] args;
    private String errorCode;
	public TemplateRuntimeException() {
		super("");
		this.msgSupport.setMessageKey("cup.error.undefined");
	}

	public TemplateRuntimeException(String arg0) {
		super(arg0);
		if ((arg0 == null) || (arg0.trim().length() == 0))
			this.msgSupport.setMessageKey("cup.error.undefined");
		else
			this.msgSupport.setMessageKey(arg0);
	}
	public TemplateRuntimeException(String arg0,String errorCode) {
		super(arg0);
		this.errorCode=errorCode;
		if ((arg0 == null) || (arg0.trim().length() == 0))
			this.msgSupport.setMessageKey("cup.error.undefined");
		else
			this.msgSupport.setMessageKey(arg0);
	}

	public TemplateRuntimeException(String arg0, Object[] args) {
		super(arg0);
		this.args = args;

		if ((arg0 == null) || (arg0.trim().length() == 0))
			this.msgSupport.setMessageKey("cup.error.undefined");
		else
			this.msgSupport.setMessageKey(arg0);
		this.msgSupport.setArgs(args);
	}

	public TemplateRuntimeException(String arg0, Throwable arg1) {
		super(arg0, arg1);
		if ((arg0 == null) || (arg0.trim().length() == 0))
			this.msgSupport.setMessageKey("cup.error.undefined");
		else
			this.msgSupport.setMessageKey(arg0);
	}
	public TemplateRuntimeException(String arg0,String errorCode, Throwable arg1) {
		super(arg0, arg1);
		this.errorCode=errorCode;
		if ((arg0 == null) || (arg0.trim().length() == 0))
			this.msgSupport.setMessageKey("cup.error.undefined");
		else
			this.msgSupport.setMessageKey(arg0);
	}

	public TemplateRuntimeException(String arg0, Throwable arg1, Object[] args) {
		super(arg0, arg1);
		this.args = args;

		if ((arg0 == null) || (arg0.trim().length() == 0))
			this.msgSupport.setMessageKey("cup.error.undefined");
		else
			this.msgSupport.setMessageKey(arg0);
		this.msgSupport.setArgs(args);
	}
	public TemplateRuntimeException(String arg0,String errorCode,Throwable arg1, Object[] args) {
		super(arg0, arg1);
		this.args = args;
		this.errorCode=errorCode;

		if ((arg0 == null) || (arg0.trim().length() == 0))
			this.msgSupport.setMessageKey("cup.error.undefined");
		else
			this.msgSupport.setMessageKey(arg0);
		this.msgSupport.setArgs(args);
	}

	public TemplateRuntimeException(Throwable arg0) {
		super("", arg0);
		this.msgSupport.setMessageKey("cup.error.undefined");
	}

	public boolean hasDefaultMessage() {
		return this.msgSupport.hasDefaultMessage();
	}

	public void setDefaultMessage(String message) {
		this.msgSupport.setDefaultMessage(message);
	}
	@Override
	public String getDefaultMessage() {
		String result = this.msgSupport.getDefaultMessage();
		if (result == null) {
			StringBuffer sb = new StringBuffer(super.getClass().getName()).append(" MessageCode: ")
					.append(getMessageKey());
			if (this.msgSupport.getArgs() != null) {
				sb.append(" Args: ");
				Object[] args = this.msgSupport.getArgs();
				for (int i = 0; i < args.length; ++i) {
					sb.append(args[i]).append(" ");
				}

			}

			if (getCause() != null) {
				sb.append(" nested exception is: ");
				sb.append(getCause());
			}

			return sb.toString();
		}

		return result;
	}
	@Override
	public String toString() {
		StringBuffer sb = new StringBuffer(super.toString());
		if (this.msgSupport.getArgs() != null) {
			sb.append(" args:");

			Object[] args = this.msgSupport.getArgs();
			for (int i = 0; i < args.length; ++i) {
				sb.append(args[i]).append(" ");
			}
		}
		return sb.toString();
	}

	public String getMessageKey() {
		return this.msgSupport.getMessageKey();
	}
	@Override
	public Object[] getArgs() {
		return this.msgSupport.getArgs();
	}

	public void setArgs(Object[] args) {
		this.args = args;

		this.msgSupport.setArgs(args);
	}
	@Override
	public String getMessage() {
		if (getCause() == null) {
			if (this.args == null) {
				return super.getMessage();
			}
			StringBuffer sb = new StringBuffer(super.toString());
			sb = new StringBuffer(super.getMessage());
			sb.append(" Args: ");
			int i = 0;
			while (true) {
				sb.append(this.args[i]).append(" ");

				++i;
				if (i >= this.args.length) {
					return sb.toString();
				}
			}
		}

		if (this.args == null) {
			return super.getMessage() + "; nested exception is " + getCause().getClass().getName() + ": "
					+ getCause().getMessage();
		}

		StringBuffer sb = new StringBuffer(super.getMessage());
		sb.append(" Args: ");
		for (int i = 0; i < this.args.length; ++i) {
			sb.append(this.args[i]).append(" ");
		}
		sb.append("; nested exception is ").append(getCause().getClass().getName()).append(": ")
				.append(getCause().getMessage());
		return sb.toString();
	}

	public String getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	
}