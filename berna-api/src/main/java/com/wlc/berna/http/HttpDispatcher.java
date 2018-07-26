package com.wlc.berna.http;

import com.wlc.berna.common.annotation.Action;
import com.wlc.berna.common.annotation.RequestMapping;
import com.wlc.berna.common.context.Context;
import com.wlc.berna.common.context.ContextImpl;
import com.wlc.berna.common.exception.TemplateRuntimeException;
import com.wlc.berna.model.bo.MethodMapping;
import com.wlc.berna.util.SpringContextUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 10:24 2018/7/25
 * @Modified by:
 */
public class HttpDispatcher {
    private final static Logger logger= LoggerFactory.getLogger(HttpDispatcher.class);
    public static final Map<String,MethodMapping> METHOD_MAPPING_MAP=new HashMap<>();
    /**
     * 服务执行
     * @param requestPath
     * @param params
     * @return
     * @throws Exception
     */
    public static Object invoke(String requestPath, Map<String, Object> params) throws Exception {
        MethodMapping methodMapping = METHOD_MAPPING_MAP.get(requestPath);
        if (methodMapping != null) {
            Context context=new ContextImpl(methodMapping.getMethod().getName());
            context.setApplicationContext(SpringContextUtil.getApplicationContext());
            context.setDataMap(params);
            return methodMapping.getMethod().invoke(methodMapping.getActionBean(), context);
        }
        //找不到方法
        throw new TemplateRuntimeException(String.format("找不到方法,requestPath=%s",requestPath),"404");
    }

    public static void init() {
        Map<String,Object> actionMap = SpringContextUtil.getBeansWithAnnotation(Action.class);
        for (Map.Entry entry : actionMap.entrySet()) {
            // 获取并遍历该 Action 类中所有的方法
            Object actionBean = entry.getValue();
            Method[] actionMethods = actionBean.getClass().getDeclaredMethods();
            String basePath = actionBean.getClass().getAnnotation(Action.class).value();
            if (actionBean.getClass().isAnnotationPresent(RequestMapping.class)) {
                basePath = actionBean.getClass().getAnnotation(RequestMapping.class).value();
            }
            for (Method actionMethod : actionMethods) {
                if (!actionMethod.isAnnotationPresent(RequestMapping.class)) {
                    continue;
                }
                MethodMapping methodMapping = new MethodMapping();
                methodMapping.setActionBean(actionBean);
                methodMapping.setMethod(actionMethod);
                if (!"".equals(basePath)&&!basePath.startsWith("/")){
                    StringBuilder sb=new StringBuilder();
                    basePath=sb.append("/").append(basePath).toString();
                }
                String otherPath=actionMethod.getAnnotation(RequestMapping.class).value();
                if (!otherPath.startsWith("/")){
                    StringBuilder sb=new StringBuilder();
                    otherPath=sb.append("/").append(otherPath).toString();
                }
                String requestPath = basePath +otherPath;
                methodMapping.setRequestPath(requestPath);
                METHOD_MAPPING_MAP.put(requestPath, methodMapping);
                logger.info("Action Request Mapping: {}",methodMapping.toString());
            }
        }
    }

}
