package com.wlc.berna.model.bo;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 14:57 2018/7/25
 * @Modified by:
 */
public class LogBean {
    /**
     * 系统编号
     */
    private String sysNo ;
    /**
     *客户标识
     */
    private String uId ;
    /**
     *操作时间
     */
    private String oTime ;
    /**
     *操作渠道
     */
    private String oChannel ;
    /**
     *客户端ip
     */
    private String cIp ;
    /**
     *服务端ip
     */
    private String sIp ;
    /**
     *终端设备标识
     */
    private String derviceId ;
    /**
     *入参
     */
    private String inParam ;
    /**
     *出参
     */
    private String outParam ;
    /**
     *操作行为标识
     */
    private String action ;
    /**
     *日志类型
     */
    private String logType ;
    /**
     *事务流水号
     */
    private String tId ;
    /**
     *结果
     */
    private String result ;
    /**
     *错误编号
     */
    private String errorNo ;
    /**
     *错误说明
     */
    private String errorMsg ;
    /**
     *日志说明
     */
    private String remark ;
    /**
     *耗时
     */
    private String spentTime ;
    /**
     *操作人
     */
    private String operator ;

    public String getSysNo() {
        return sysNo;
    }

    public void setSysNo(String sysNo) {
        this.sysNo = sysNo;
    }

    public String getuId() {
        return uId;
    }

    public void setuId(String uId) {
        this.uId = uId;
    }

    public String getoTime() {
        return oTime;
    }

    public void setoTime(String oTime) {
        this.oTime = oTime;
    }

    public String getoChannel() {
        return oChannel;
    }

    public void setoChannel(String oChannel) {
        this.oChannel = oChannel;
    }

    public String getcIp() {
        return cIp;
    }

    public void setcIp(String cIp) {
        this.cIp = cIp;
    }

    public String getsIp() {
        return sIp;
    }

    public void setsIp(String sIp) {
        this.sIp = sIp;
    }

    public String getDerviceId() {
        return derviceId;
    }

    public void setDerviceId(String derviceId) {
        this.derviceId = derviceId;
    }

    public String getInParam() {
        return inParam;
    }

    public void setInParam(String inParam) {
        this.inParam = inParam;
    }

    public String getOutParam() {
        return outParam;
    }

    public void setOutParam(String outParam) {
        this.outParam = outParam;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getLogType() {
        return logType;
    }

    public void setLogType(String logType) {
        this.logType = logType;
    }

    public String gettId() {
        return tId;
    }

    public void settId(String tId) {
        this.tId = tId;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getErrorNo() {
        return errorNo;
    }

    public void setErrorNo(String errorNo) {
        this.errorNo = errorNo;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getSpentTime() {
        return spentTime;
    }

    public void setSpentTime(String spentTime) {
        this.spentTime = spentTime;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }
}
