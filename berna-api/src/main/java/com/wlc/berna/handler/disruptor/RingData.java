package com.wlc.berna.handler.disruptor;


import lombok.Getter;
import lombok.Setter;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 19:08 2018/9/3
 * @Modified by:
 */
@Getter
@Setter
public class RingData<T> {
    private T data;
}
