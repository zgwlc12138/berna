package com.wlc.berna.core.test;


import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.Channel;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;

import java.nio.charset.Charset;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 15:33 2018/7/4
 * @Modified by:
 */
public class ServerTest {
    public static void main(String[] args){
        ServerBootstrap serverBootstrap=new ServerBootstrap();
        EventLoopGroup bossGroup=new NioEventLoopGroup();
        EventLoopGroup workerGroup=new NioEventLoopGroup();
        serverBootstrap.group(bossGroup,workerGroup);
        serverBootstrap.channel(NioServerSocketChannel.class).childHandler(new ChannelInitializer<SocketChannel>(){
            @Override
            protected void initChannel(SocketChannel channel) throws Exception {
                channel.pipeline().addLast(new StringDecoder(Charset.forName("UTF-8")));
                channel.pipeline().addLast(new StringEncoder(Charset.forName("UTF-8")));
                channel.pipeline().addLast(new TestHandler());
            }
        }).option(ChannelOption.SO_BACKLOG, 1024*10).childOption(ChannelOption.SO_KEEPALIVE, true);
        serverBootstrap.bind(9090);
    }
}
