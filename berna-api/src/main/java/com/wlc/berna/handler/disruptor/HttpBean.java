package com.wlc.berna.handler.disruptor;

import io.netty.channel.ChannelHandlerContext;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 18:10 2018/9/13
 * @Modified by:
 */
public class HttpBean {
    private  ChannelHandlerContext ctx;
    private  Object msg;
    public HttpBean(ChannelHandlerContext ctx, Object msg) {
        this.ctx = ctx;
        this.msg = msg;
    }

    public ChannelHandlerContext getCtx() {
        return ctx;
    }

    public void setCtx(ChannelHandlerContext ctx) {
        this.ctx = ctx;
    }

    public Object getMsg() {
        return msg;
    }

    public void setMsg(Object msg) {
        this.msg = msg;
    }
}
