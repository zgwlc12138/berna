package com.wlc.berna.core.test;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 19:58 2018/7/5
 * @Modified by:
 */
public class TestClientHandler extends ChannelInboundHandlerAdapter {
    private static final Logger logger=LoggerFactory.getLogger(TestClientHandler.class);
    @Override
    public void channelRegistered(ChannelHandlerContext ctx) throws Exception {
        super.channelRegistered(ctx);
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        logger.info("收到信息：{}",msg);
        super.channelRead(ctx, msg);
    }

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        ctx.writeAndFlush("张弓");
        super.channelActive(ctx);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        logger.error(cause.getMessage());
        ctx.close();
        super.exceptionCaught(ctx, cause);
    }
}
