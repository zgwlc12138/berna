package com.wlc.berna.handler.disruptor;

import com.lmax.disruptor.*;
import com.lmax.disruptor.dsl.ProducerType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 18:17 2018/9/13
 * @Modified by:
 */
public  class DisruptorService {
    private static final Logger logger=LoggerFactory.getLogger(DisruptorService.class);
    private static RingBuffer<RingData<HttpBean>>  ringBuffer;
    static {
        ringBuffer = RingBuffer.create(ProducerType.MULTI,()->{
                    return new RingData<>();
                },
                1024*1024,
                new SleepingWaitStrategy());
        SequenceBarrier barrier = ringBuffer.newBarrier();
        HttpConsumer[] consumers = new HttpConsumer[10];
        for(int i=0;i<consumers.length;i++){
            consumers[i]=new HttpConsumer();
        }
        WorkerPool<RingData<HttpBean>> workerPool =
                new WorkerPool<RingData<HttpBean>>(ringBuffer,
                        barrier,
                        new IntEventExceptionHandler(),
                        consumers);
        ringBuffer.addGatingSequences(workerPool.getWorkerSequences());
        ExecutorService executorService=Executors.newFixedThreadPool(10);
        workerPool.start(executorService);

    }
    public static void onData(HttpBean bean){
        long seq=ringBuffer.next();
        try {
            RingData<HttpBean> data=ringBuffer.get(seq);
            data.setData(bean);
        }catch (Exception e){
            logger.error("Disruptor 数据发布异常",e);
        }finally {
            ringBuffer.publish(seq);
        }
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
