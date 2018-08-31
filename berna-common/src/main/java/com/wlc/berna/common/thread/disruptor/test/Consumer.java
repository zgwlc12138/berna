package com.wlc.berna.common.thread.disruptor.test;

import com.lmax.disruptor.WorkHandler;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 15:28 2018/8/21
 * @Modified by:
 */
public class Consumer implements WorkHandler<Order> {
    private String consumerId;

    private static AtomicInteger count = new AtomicInteger(0);

    public Consumer(String consumerId){
        this.consumerId = consumerId;
    }
    @Override
    public void onEvent(Order order) throws Exception {
        System.out.println("当前消费者："+this.consumerId+"，消费信息："+order.getId());
        count.incrementAndGet();
    }

    public int getCount(){
        return count.get();
    }
}
