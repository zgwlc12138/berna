package com.wlc.berna.handler.disruptor;

import com.alibaba.fastjson.JSON;
import com.lmax.disruptor.WorkHandler;
import com.wlc.berna.common.exception.TemplateRuntimeException;
import com.wlc.berna.common.response.BaseResponse;
import com.wlc.berna.http.HttpDispatcher;
import com.wlc.berna.util.BeanUtils;
import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.*;
import io.netty.util.CharsetUtil;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.InvocationTargetException;
import java.util.*;

import static io.netty.handler.codec.http.HttpHeaders.Names.*;
import static io.netty.handler.codec.http.HttpResponseStatus.OK;
import static io.netty.handler.codec.http.HttpVersion.HTTP_1_1;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 18:04 2018/9/13
 * @Modified by:
 */
public class HttpConsumer implements WorkHandler<RingData<HttpBean>> {
    private final static Logger logger=LoggerFactory.getLogger(HttpConsumer.class);
    @Override
    public void onEvent(RingData<HttpBean> event) throws Exception {
        HttpBean bean=event.getData();
        BaseResponse baseResponse=new BaseResponse();
        ChannelHandlerContext ctx = bean.getCtx();
        boolean keepAlive = false;
        Map<String, Object> params = new HashMap<>(1);
        String uri = "";
        try {
            Object msg = bean.getMsg();
            if (msg instanceof HttpRequest) {
                HttpRequest req = (HttpRequest) msg;
                if (HttpHeaders.is100ContinueExpected(req)) {
                    ctx.write(new DefaultFullHttpResponse(HTTP_1_1, HttpResponseStatus.CONTINUE));
                }
                keepAlive = HttpHeaders.isKeepAlive(req);
                // 解析http头部
                for (Map.Entry<String, String> h : req.headers()) {
                    logger.debug("HEADER: " + h.getKey() + " = " + h.getValue());
                }
                uri = req.getUri();
                if (req.getUri().endsWith("/favicon.ico")) {
                    return;
                }
                if (uri.startsWith("http")) {
                    uri = uri.replaceAll("http://[^/]+", "");
                }
                params = convertToMap(uri, req);
                //解析请求的token,以便获取登录信息
                Set<Cookie> cookies;
                String value = req.headers().get(COOKIE);
                if (value == null) {
                    cookies = Collections.emptySet();
                } else {
                    cookies = CookieDecoder.decode(value);
                }
                for (Cookie cookie : cookies) {
                    if ("token".equals(cookie.getName())) {
                        params.put("token", cookie.getValue());
                    }
                }
                String requestPath = uri.trim().split("\\?")[0];
                logger.info("Request DATA: {},Request Path: {}",params,requestPath);
                baseResponse = (BaseResponse) service(requestPath, params);
            }
        } catch (Exception e) {
            if (e instanceof TemplateRuntimeException){
                baseResponse.markError(Integer.valueOf(((TemplateRuntimeException)e).getErrorCode()),null,((TemplateRuntimeException)e).getMessageKey());
            }else{
                baseResponse.markError(-1,null,"系统异常!" + ((InvocationTargetException) e).getTargetException().getMessage() + ":" + e.getMessage());
            }
            e.printStackTrace();
            String requestPath = uri.trim().split("\\?")[0].replaceAll("/", ".");
            logger.error(String.format("系统异常，异常方法名:%s,异常信息:%s,堆栈", requestPath, e.getMessage()), e);
        } finally {
            logger.info("Response DATA: {}",JSON.toJSONString(baseResponse));
            FullHttpResponse response;
            try {
                response = new DefaultFullHttpResponse(HTTP_1_1, OK, Unpooled.wrappedBuffer(JSON.toJSONString(baseResponse).getBytes("UTF-8")));
                response.headers().set(CONTENT_TYPE, "application/json;charset=UTF-8");
                response.headers().set(CONTENT_LENGTH, response.content().readableBytes());
                if (!keepAlive) {
                    ctx.writeAndFlush(response).addListener(ChannelFutureListener.CLOSE);
                } else {
                    response.headers().set(CONNECTION, HttpHeaders.Values.KEEP_ALIVE);
                    ctx.writeAndFlush(response);
                }
            } catch (UnsupportedEncodingException e) {
                logger.error("System error",e);
            }
        }
    }
    private Map<String, Object> convertToMap(String uri, HttpRequest req) {
        Map<String, Object> params = new HashMap<>(16);
        String jsonStr = "";
        try {
            // 是GET请求 参数解析
            if (HttpMethod.GET.equals(req.getMethod())) {
                QueryStringDecoder queryStringDecoder = new QueryStringDecoder(uri);
                Map<String, List<String>> paramMap = queryStringDecoder.parameters();
                for (Map.Entry<String, List<String>> entry : paramMap.entrySet()) {
                    String value = BeanUtils.convert(entry.getValue().get(0), String.class);
                    if (StringUtils.isNotBlank(value)) {
                        params.put(entry.getKey(), entry.getValue().get(0));
                    }
                }
            }
            // 是POST请求
            if (HttpMethod.POST.equals(req.getMethod())) {
                FullHttpRequest request = (FullHttpRequest) req;
                ByteBuf jsonBuf = request.content();
                jsonStr = jsonBuf.toString(CharsetUtil.UTF_8);
                if (jsonStr != null && !jsonStr.equals("")) {
                    params = JSON.parseObject(jsonStr, Map.class);
                }
            }
        } catch (Exception e) {
            logger.error("参数解析异常,请求参数：" + jsonStr, e);
        }
        return params;
    }

    private Object service(String requestPath, Map<String, Object> params) throws Exception {
        return HttpDispatcher.invoke(requestPath, params);
    }
}
