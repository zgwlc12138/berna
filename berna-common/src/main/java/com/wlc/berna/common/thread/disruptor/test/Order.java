package com.wlc.berna.common.thread.disruptor.test;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 15:27 2018/8/21
 * @Modified by:
 */
public class Order {
    private String id;//ID
    private String name;
    private double price;//金额

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
}
