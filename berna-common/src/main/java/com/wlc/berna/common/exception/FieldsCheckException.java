package com.wlc.berna.common.exception;
/**
 * 域校验异常类
 * @author 张弓
 *
 */
public class FieldsCheckException extends TemplateRuntimeException{
	private static final long serialVersionUID = 3566124624869792897L;
	public FieldsCheckException(String message,String errorCode){
		super(message);
		setErrorCode(errorCode);
	}

}
