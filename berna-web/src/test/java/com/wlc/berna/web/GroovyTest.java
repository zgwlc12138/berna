package com.wlc.berna.web;

import com.wlc.berna.web.service.ApolloService;
import com.wlc.berna.web.utils.RedisUtil;
import groovy.lang.Binding;
import groovy.lang.GroovyShell;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
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
        binding.setVariable("value2","yy");
        GroovyShell shell=new GroovyShell(binding);
        String k=(String)shell.evaluate(groovyValue);
        System.out.println(k);
    }
}
