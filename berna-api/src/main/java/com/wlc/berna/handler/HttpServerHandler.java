package com.wlc.berna.handler;


import com.wlc.berna.handler.disruptor.DisruptorService;
import com.wlc.berna.handler.disruptor.HttpBean;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.net.InetSocketAddress;


/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 10:57 2018/7/9
 * @Modified by:
 */
public class HttpServerHandler extends ChannelInboundHandlerAdapter {
    private final static Logger logger=LoggerFactory.getLogger(HttpServerHandler.class);
    private static volatile String serverIp = null;
    @Override
    public void channelRegistered(ChannelHandlerContext ctx) throws Exception {
        super.channelRegistered(ctx);
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        if (serverIp == null) {
            serverIp = ((InetSocketAddress) ctx.channel().localAddress()).getAddress().getHostAddress();
        }
        DisruptorService.onData(new HttpBean(ctx,msg));
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        super.exceptionCaught(ctx, cause);
    }
}
