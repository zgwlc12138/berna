package com.wlc.berna.handler.disruptor;

import io.netty.channel.ChannelHandlerContext;
import lombok.Getter;
import lombok.Setter;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 18:10 2018/9/13
 * @Modified by:
 */
@Getter
@Setter
public class HttpBean {
    private  ChannelHandlerContext ctx;
    private  Object msg;
    public HttpBean(ChannelHandlerContext ctx, Object msg) {
        this.ctx = ctx;
        this.msg = msg;
    }

}
