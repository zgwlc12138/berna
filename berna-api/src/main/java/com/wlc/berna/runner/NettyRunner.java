package com.wlc.berna.runner;

import com.wlc.berna.http.HttpServer;
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
    private String port;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        new Thread(new HttpServer(Integer.valueOf(port).intValue())).start();
    }
}
