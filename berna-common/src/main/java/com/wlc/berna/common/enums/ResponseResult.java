package com.wlc.berna.common.enums;

/**
 * 
 * API-响应枚举
 *
 * @author Ji.huazhen
 * 
 */
public enum ResponseResult {

	/**
	 * 系统与业务级别均正常响应
	 */
	SUCESS(0, "响应成功"),
	/**
	 * 系统级别正常响应,业务级别失败
	 */
	FAIL(1, "响应失败"),
	/**
	 * 系统级别响应错误
	 */
	ERROR(2, "响应错误");

	/** 错误码 */
	public Integer result;

	/** 错误描述 */
	public String resultMessage;

	private ResponseResult(Integer result, String resultMessage) {
		this.result = result;
		this.resultMessage = resultMessage;
	}

}