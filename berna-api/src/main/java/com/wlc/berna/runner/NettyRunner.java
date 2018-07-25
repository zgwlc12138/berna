package com.wlc.berna.runner;

import com.wlc.berna.common.thread.Executor;
import com.wlc.berna.http.HttpDispatcher;
import com.wlc.berna.http.HttpServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 17:39 2018/7/6
 * @Modified by:
 */
@Component
public class NettyRunner  implements ApplicationRunner {
    @Value("${netty.port}")
    private int port;
    @Autowired
    private Executor httpPooledExecutor;
    @Override
    public void run(ApplicationArguments args) throws Exception {
        HttpDispatcher.init();
        httpPooledExecutor.execute(new HttpServer(port));
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }
}
