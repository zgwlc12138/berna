package com.wlc.berna.common.thread.disruptor.test;

import com.lmax.disruptor.RingBuffer;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 15:28 2018/8/21
 * @Modified by:
 */
public class Producer {
    private final RingBuffer<Order> ringBuffer;

    public Producer(RingBuffer<Order> ringBuffer){
        this.ringBuffer=ringBuffer;
    }

    /**
     * onData用来发布事件，每调用一次就发布一次事件
     * 它的参数会通过事件传递给消费者
     * @param data
     */
    public void onData(String data){
        //可以把ringBuffer看作是一个事件队列，那么next就是得到下一个事件槽
        long sequence = ringBuffer.next();
        try {
            Order order = ringBuffer.get(sequence);
            order.setId(data);
        } catch (Exception e) {
            e.printStackTrace();
        } finally{
            //发布事件
            ringBuffer.publish(sequence);
        }
    }
}
