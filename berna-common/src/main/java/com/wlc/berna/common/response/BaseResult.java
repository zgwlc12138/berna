package com.wlc.berna.common.response;


/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 14:57 2018/7/25
 * @Modified by:
 */
public class BaseResult {
    private int errCode = 0;
    private String msg = "";
    private Object data = new Object();

    public BaseResult() {

    }

    public int getErrCode() {
        return errCode;
    }

    public void setErrCode(int errCode) {
        this.errCode = errCode;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
