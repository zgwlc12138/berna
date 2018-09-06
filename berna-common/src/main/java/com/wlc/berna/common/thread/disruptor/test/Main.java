package com.wlc.berna.common.thread.disruptor.test;

import com.lmax.disruptor.*;
import com.lmax.disruptor.dsl.ProducerType;

import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 15:29 2018/8/21
 * @Modified by:
 */
public class Main {
    public static void main(String[] args) throws InterruptedException {
        //创建ringBuffer
        RingBuffer<Order> ringBuffer = RingBuffer.create(ProducerType.MULTI,new EventFactory<Order>() {
            @Override public Order newInstance() {
                return new Order(); }
                },
                1024*1024,
                new YieldingWaitStrategy());

        SequenceBarrier barrier = ringBuffer.newBarrier();

        Consumer[] consumers = new Consumer[10];
        for(int i=0;i<consumers.length;i++){
            consumers[i]=new Consumer("c"+i);
        }

        WorkerPool<Order> workerPool =
                new WorkerPool<Order>(ringBuffer,
                        barrier,
                        new IntEventExceptionHandler(),
                        consumers);
        ringBuffer.addGatingSequences(workerPool.getWorkerSequences());
        ExecutorService executorService=Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());
        workerPool.start(executorService);

        final CountDownLatch latch = new CountDownLatch(1);
        for(int i=0;i<10000;i++){
            final Producer p = new Producer(ringBuffer);
            new Thread(new Runnable(){
                @Override
                public void run() {
                    try {
                        latch.await();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    for(int j=0;j<100;j++){
                        p.onData(UUID.randomUUID().toString());
                    }
                }
            }).start();
        }
        Thread.sleep(2000);
        System.out.println("------------开始生产-------------");
        latch.countDown();
        Thread.sleep(10000);
        workerPool.halt();
        executorService.shutdown();
        System.out.println(workerPool.isRunning());
        System.out.println("总数："+consumers[0].getCount());

    }

    static class IntEventExceptionHandler implements ExceptionHandler {
        @Override
        public void handleEventException(Throwable arg0, long arg1, Object arg2) {}

        @Override
        public void handleOnShutdownException(Throwable arg0) {}

        @Override
        public void handleOnStartException(Throwable arg0) {}
    }
}
