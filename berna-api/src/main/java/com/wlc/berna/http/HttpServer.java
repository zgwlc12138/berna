package com.wlc.berna.http;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpRequestDecoder;
import io.netty.handler.codec.http.HttpResponseEncoder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HttpServer implements Runnable{
    private final static Logger logger= LoggerFactory.getLogger(HttpServer.class);
    private final int port;
    private volatile ServerBootstrap bootstrap;
    private volatile EventLoopGroup bossGroup;
    private volatile EventLoopGroup workGroup;
    public HttpServer(int port) {
        this.port = port;
    }
    private volatile boolean closed = false;
    public void innit(){
        closed=false;
        bossGroup=new NioEventLoopGroup();
        workGroup=new NioEventLoopGroup();
        bootstrap=new ServerBootstrap();
        bootstrap.group(bossGroup,workGroup);
        bootstrap.channel(NioServerSocketChannel.class)
                .option(ChannelOption.SO_BACKLOG, 1024*10)
                .option(ChannelOption.SO_SNDBUF,32*1024)
                .option(ChannelOption.SO_RCVBUF,32*1024)
                .childOption(ChannelOption.SO_KEEPALIVE, true)
                .childHandler(new ChannelInitializer<SocketChannel>() {
                    @Override
                    protected void initChannel(SocketChannel socketChannel) throws Exception {
                        socketChannel.pipeline().addLast(new HttpRequestDecoder());
                        socketChannel.pipeline().addLast(new HttpResponseEncoder());
                    }
                });
    }
    public void bind(){
        try {
            bootstrap.bind(port).sync();
        }catch (Exception e){

        }

    }
    @Override
    public void run() {

    }

}
