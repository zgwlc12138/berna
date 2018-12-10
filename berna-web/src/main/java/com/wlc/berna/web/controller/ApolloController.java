package com.wlc.berna.web.controller;


import com.wlc.berna.web.service.ApolloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/apollo")
public class ApolloController {
  @Autowired
  private ApolloService apolloService;
    @RequestMapping("/test")
    public Map test(){
        Map map= apolloService.getConfig("test",Map.class);
        return map;
    }
}
