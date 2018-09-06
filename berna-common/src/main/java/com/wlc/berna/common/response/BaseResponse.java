package com.wlc.berna.common.response;

import com.alibaba.fastjson.annotation.JSONField;
import com.wlc.berna.common.enums.ResponseCodeMsg;
import com.wlc.berna.common.enums.ResponseResult;
import com.wlc.berna.common.utils.StringUtil;


import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;

/**
 *
 * @param <T>
 */
@XmlRootElement(name = "BaseResponse")
public class BaseResponse<T> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2870677647593028758L;

	/**
	 * 通用结果 0-正常;其他-失败
	 */
	@XmlAttribute(name = "Result")
	@JSONField(name = "Result")
	private Integer result;

	/**
	 * 业务返回代码
	 */
	@XmlAttribute(name = "CodeMsg")
	@JSONField(name = "CodeMsg")
	private String codeMsg;

	/**
	 * 通用结果消息
	 */
	@XmlAttribute(name = "ResultMessage")
	@JSONField(name = "ResultMessage")
	private String resultMessage;

	/**
	 * 返回结果内容
	 */
	@XmlAttribute(name = "Content")
	@JSONField(name = "Content")
	private T content;

	/**
	 * 
	 */
	public BaseResponse() {

	}

	/**
	 * 构造器处理方式
	 * 
	 * @param responseResult
	 */
	public BaseResponse(ResponseResult responseResult) {
		this.setResult(responseResult.result);
		this.setResultMessage(responseResult.resultMessage);
	}

	public Integer getResult() {
		return result;
	}

	public void setResult(Integer result) {
		this.result = result;
	}

	public String getCodeMsg() {
		return codeMsg;
	}

	public void setCodeMsg(String codeMsg) {
		this.codeMsg = codeMsg;
	}

	public String getResultMessage() {
		return resultMessage;
	}

	public void setResultMessage(String resultMessage) {
		this.resultMessage = resultMessage;
	}

	public T getContent() {
		return content;
	}

	public void setContent(T content) {
		this.content = content;
	}

	/**
	 * 标记 成功的响应
	 */
	public void markSuccess() {
		markSuccess(ResponseResult.SUCESS.resultMessage);
	}

	/**
	 * 标记 成功的响应
	 * 
	 * @param message
	 */
	public void markSuccess(String message) {
		if (StringUtil.isNotBlank(message)) {
			setResultMessage(message);
		}
		setResult(ResponseResult.SUCESS.result);
	}

	/**
	 * 标记 成功的响应
	 * 
	 * @param message
	 * @param content
	 */
	public void markSuccess(String message, T content) {
		if (StringUtil.isNotBlank(message)) {
			setResultMessage(message);
		}
		if (null != content) {
			setContent(content);
		}
		setResult(ResponseResult.SUCESS.result);
	}

	/**
	 * 标记 成功的响应
	 */
	public void markSuccess(T content) {
		markSuccess(ResponseResult.SUCESS.resultMessage, content);
	}

	/**
	 * 标记 失败的响应
	 */
	public void markFail() {
		markFail(ResponseResult.FAIL.resultMessage);
	}

	/**
	 * 
	 * 标记 失败的响应
	 *
	 * @param message
	 */
	public void markFail(String message) {
		if (StringUtil.isNotBlank(message)) {
			setResultMessage(message);
		}
		setResult(ResponseResult.FAIL.result);
	}

	/**
	 * 基于枚举 错误的响应
	 * 
	 * @param codeMsg
	 */
	public void markFail(ResponseCodeMsg codeMsg) {
		this.setCodeMsg(codeMsg.code);
		this.markFail(codeMsg.value);
	}

	/**
	 * 基于枚举 错误消息 错误的响应
	 * 
	 * @param codeMsg
	 * @param resultMessage
	 */
	public void markFailed(ResponseCodeMsg codeMsg, String resultMessage) {
		if (StringUtil.isNotBlank(resultMessage)) {
			this.setResultMessage(resultMessage);
		} else {
			this.setResultMessage(codeMsg.value);
		}
		this.setCodeMsg(codeMsg.code);
		setResult(ResponseResult.FAIL.result);
	}

	/**
	 * 标记 错误的响应
	 */
	public void markError() {
		markError(ResponseResult.ERROR.resultMessage);
	}

	/**
	 * 标记 错误的响应
	 * 
	 * @param message
	 */
	public void markError(String message) {
		if (StringUtil.isNotBlank(message)) {
			setResultMessage(message);
		}
		setResult(ResponseResult.ERROR.result);
	}

	/**
	 * 基于枚举 错误的响应
	 * 
	 * @param codeMsg
	 */
	public void markError(ResponseCodeMsg codeMsg) {
		this.setCodeMsg(codeMsg.code);
		this.markError(codeMsg.value);
	}

	/**
	 * 基于枚举 错误消息 错误的响应
	 * 
	 * @param codeMsg
	 * @param resultMessage
	 */
	public void markError(ResponseCodeMsg codeMsg, String resultMessage) {
		if (StringUtil.isNotBlank(resultMessage)) {
			this.setResultMessage(resultMessage);
		} else {
			this.setResultMessage(codeMsg.value);
		}
		this.setCodeMsg(codeMsg.code);
		setResult(ResponseResult.ERROR.result);
	}
	/**
	 * 基于枚举 错误消息 错误的响应
	 *
	 * @param code
	 * @param resultMessage
	 */
	public void markError(Integer  code,String codeMsg,String resultMessage) {
		this.setResultMessage(resultMessage);
		this.setCodeMsg(codeMsg);
		setResult(code);
	}

}
