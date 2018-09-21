package com.wlc.berna.common.utils;

import javax.servlet.http.HttpServletRequest;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 10:15 2018/9/20
 * @Modified by:
 */
public class NetUtil {
    /**
     * 获取真实IP
     * @param request
     * @return
     */
    public static String getRealIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if(StringUtil.notBlank(ip) && !"unKnown".equalsIgnoreCase(ip)){
            //多次反向代理后会有多个ip值，第一个ip才是真实ip
            int index = ip.indexOf(",");
            if(index != -1){
                return ip.substring(0,index);
            }else{
                return ip;
            }
        }
        ip = request.getHeader("X-Real-IP");
        if(StringUtil.notBlank(ip) && !"unKnown".equalsIgnoreCase(ip)){
            return ip;
        }
        return request.getRemoteAddr();
    }
}
