package com.wlc.berna.config;

import com.wlc.berna.common.thread.Executor;
import com.wlc.berna.common.thread.PooledExecutor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 14:57 2018/7/25
 * @Modified by:
 */
@Configuration
@ConfigurationProperties(prefix = "executor")
public class ExecutorConfig {
    private static int DEFAULT_QUEUE_SIZE = 10;
    private static int DEFAULT_MIN_SIZE = 1;
    private static int DEFAULT_MAX_SIZE = 20;
    private static int DEFAULT_INIT_SIZE = 5;
    private static int DEFAULT_KEEP_ALIVE_TIME = 300;
    private int httpQueueSize = DEFAULT_QUEUE_SIZE;
    private int httpMinSize = DEFAULT_MIN_SIZE;
    private int httpMaxSize = DEFAULT_MAX_SIZE;
    private int httpInitSize = DEFAULT_INIT_SIZE;
    private int httpKeepAliveTime = DEFAULT_KEEP_ALIVE_TIME;

    /**
     *netty http 线程池
     * @return httpPooledExecutor
     */
    @Bean("httpPooledExecutor")
    public Executor httpPooledExecutor(){
        PooledExecutor httpPooledExecutor=new PooledExecutor();
        httpPooledExecutor.setQueueSize(httpQueueSize);
        httpPooledExecutor.setInitSize(httpInitSize);
        httpPooledExecutor.setKeepAliveTime(httpKeepAliveTime);
        httpPooledExecutor.setMinSize(httpMinSize);
        httpPooledExecutor.setMaxSize(httpMaxSize);
        return httpPooledExecutor;
    }

    public int getHttpQueueSize() {
        return httpQueueSize;
    }

    public void setHttpQueueSize(int httpQueueSize) {
        this.httpQueueSize = httpQueueSize;
    }

    public int getHttpMinSize() {
        return httpMinSize;
    }

    public void setHttpMinSize(int httpMinSize) {
        this.httpMinSize = httpMinSize;
    }

    public int getHttpMaxSize() {
        return httpMaxSize;
    }

    public void setHttpMaxSize(int httpMaxSize) {
        this.httpMaxSize = httpMaxSize;
    }

    public int getHttpInitSize() {
        return httpInitSize;
    }

    public void setHttpInitSize(int httpInitSize) {
        this.httpInitSize = httpInitSize;
    }

    public int getHttpKeepAliveTime() {
        return httpKeepAliveTime;
    }

    public void setHttpKeepAliveTime(int httpKeepAliveTime) {
        this.httpKeepAliveTime = httpKeepAliveTime;
    }
}
