package com.wlc.berna.core.service;

import com.ctrip.framework.apollo.Config;
import com.ctrip.framework.apollo.spring.annotation.ApolloConfig;
import com.google.gson.Gson;
import org.springframework.stereotype.Service;

@Service
public class ApolloService {
    @ApolloConfig
    private Config config;
    private Gson gson=new Gson();
    public <T> T getConfig(String key,Class<T> clazz){
        String value=config.getProperty(key,null);
        return gson.fromJson(value,clazz);
    }
}
