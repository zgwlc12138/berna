package com.wlc.berna.web;

import com.wlc.berna.web.service.ApolloService;
import com.wlc.berna.web.utils.RedisUtil;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class GroovyTest {
    @Autowired
    private ApolloService apolloService;
    @Autowired
    private RedisUtil redisUtil;
    @Test
    public void test1(){
        String groovyValue=apolloService.getConfig("groovy01",String.class);
        Binding binding=new Binding();
        List<Integer> list=new ArrayList<>();
        for (int i=0;i<100;i++){
            list.add(i);
        }
        TestDemo demo=new TestDemo();
        demo.setAge(18);
        demo.setName("张弓");
        binding.setVariable("value1",redisUtil);
        binding.setVariable("value2",demo);
        GroovyShell shell=new GroovyShell(binding);
        String k=(String)shell.evaluate(groovyValue);
        log.info(k);
    }
    @Test
    public void apollo(){
        Integer value=apolloService.getConfig("test",Integer.class);
        log.info("输出值:{}",value);
    }
}
