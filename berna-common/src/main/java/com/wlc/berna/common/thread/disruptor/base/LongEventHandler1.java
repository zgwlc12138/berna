package com.wlc.berna.common.thread.disruptor.base;

import com.lmax.disruptor.EventHandler;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 11:39 2018/8/21
 * @Modified by:
 */
public class LongEventHandler1 implements EventHandler<LongEvent>{
    @Override
    public void onEvent(LongEvent longEvent, long l, boolean b) throws Exception {
        System.out.println(this.getClass().getName()+"****"+longEvent.getValue());
    }
}
