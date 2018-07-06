package com.wlc.berna.core.test;


import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;

import java.nio.charset.Charset;

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
        serverBootstrap.channel(NioServerSocketChannel.class)
                .option(ChannelOption.SO_BACKLOG, 1024*10)
                .option(ChannelOption.SO_SNDBUF,32*1024)
                .option(ChannelOption.SO_RCVBUF,32*1024)
                .childOption(ChannelOption.SO_KEEPALIVE, true)
                .childHandler(new ChannelInitializer<SocketChannel>(){
            @Override
            protected void initChannel(SocketChannel channel) throws Exception {
                channel.pipeline().addLast(new StringDecoder(Charset.forName("UTF-8")));
                channel.pipeline().addLast(new StringEncoder(Charset.forName("UTF-8")));
                channel.pipeline().addLast(new TestServerHandler());
            }
        });
        ChannelFuture f= serverBootstrap.bind(9090);
        try{
            f.channel().closeFuture().sync();
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }

    }
}
