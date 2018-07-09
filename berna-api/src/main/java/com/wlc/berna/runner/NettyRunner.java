package com.wlc.berna.runner;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 17:39 2018/7/6
 * @Modified by:
 */
@Component
public class NettyRunner {
    @Value("netty.port")
    private int port;
    public void innit(){

    }
}
