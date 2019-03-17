package com.wlc.berna.web;

import com.google.common.collect.Lists;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.springframework.util.CollectionUtils;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Slf4j
public class GuavaTest {
    @Test
    public void test(){
        List<Object> objects= Lists.newArrayList(1,2,3,4,5);
        List<Long> o1= new ArrayList<>();
        o1.add(1l);
        o1.add(2l);
        List<Long> o2= new ArrayList<>();
        o2.add(1l);
        List<Long> longs=objects.stream().map(model->Long.parseLong(model.toString())).collect(Collectors.toList());
        Boolean k = longs.remove(objects);
        Boolean b = o1.remove(o2);
        o1= o1.stream().filter(model-> !CollectionUtils.contains(o2.iterator(),model)).collect(Collectors.toList());
        log.info(o1.size()+"");
        Optional.ofNullable(null).orElse(f1());
        Optional.ofNullable(null).orElseGet(()->f2());
    }
    public static String f1(){
        log.info("test1");
        return "0";
    }
    public static String f2(){
        log.info("test2");
        return "1";
    }
    @FunctionalInterface
    interface In{
        String test1(String s);
        default String test2(String s){
            return this.test1(s)+":"+"最帅";
        }
    }
    @Test
    public void test1(){
        In in=s->s+":"+"大人";
        log.info(in.test2("张弓"));
    }
}
