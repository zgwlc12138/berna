package com.wlc.berna.web.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 17:47 2018/9/12
 * @Modified by:
 */
public class ContextInterceptorHandler implements HandlerInterceptor {
    private static final Logger log = LoggerFactory.getLogger(ContextInterceptorHandler.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        request.getSession();
        String basePath = request.getRequestURL().toString();
        log.info("RequestPath：" + basePath);
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        request.getSession();
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        if (ex!=null){
            log.error("Exception：", ex.getMessage());
        }
    }
}