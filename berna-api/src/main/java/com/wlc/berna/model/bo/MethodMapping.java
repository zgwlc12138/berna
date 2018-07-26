package com.wlc.berna.model.bo;

import java.lang.reflect.Method;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 10:24 2018/7/25
 * @Modified by:
 */
public class MethodMapping {
    private String requestPath;
    private Object actionBean;
    private Method method;

    public String getRequestPath() {
        return requestPath;
    }

    public void setRequestPath(String requestPath) {
        this.requestPath = requestPath;
    }

    public Object getActionBean() {
        return actionBean;
    }

    public void setActionBean(Object actionBean) {
        this.actionBean = actionBean;
    }

    public Method getMethod() {
        return method;
    }

    public void setMethod(Method method) {
        this.method = method;
    }

    @Override
    public String toString() {
        StringBuilder sb=new StringBuilder();
        sb.append("Path: ").append(requestPath).append(",").append("Bean: ").append(actionBean.getClass().getName()).append(",").append("Method: ").append(method.getName());
        return sb.toString();
    }
}
