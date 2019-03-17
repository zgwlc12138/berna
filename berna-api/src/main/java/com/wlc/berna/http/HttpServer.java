package com.wlc.berna.http;

import com.wlc.berna.handler.HttpServerHandler;
import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
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
    private void innit(){
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
                        // 把多个消息转换为一个单一的FullHttpRequest或是FullHttpResponse,解决Post请求参数解析
                        socketChannel.pipeline().addLast(new HttpObjectAggregator(1024*64));
                        socketChannel.pipeline().addLast(new HttpServerHandler());
                    }
                });
    }
    private void close(){
        bossGroup.shutdownGracefully();
        workGroup.shutdownGracefully();
    }
    private void bind(){
        try {
            ChannelFuture f=bootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }catch (Exception e){
            logger.error("Netty 服务启动 error ：{}",e);
        }finally {
            close();
        }

    }
    @Override
    public void run() {
        logger.info("Netty 项目 开始启动 端口为：{}",this.port);
        innit();
        bind();
        logger.info("Netty 项目 启动完成 端口为：{}",this.port);
    }

}
