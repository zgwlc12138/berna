package com.wlc.berna.handler.disruptor;


/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 19:08 2018/9/3
 * @Modified by:
 */
public class RingData<T> {
    private T data;
    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

}
