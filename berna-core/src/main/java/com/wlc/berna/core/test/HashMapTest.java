package com.wlc.berna.core.test;

public class HashMapTest {
    public static void main(String[] args){

        System.out.println(getIndex("大萨达撒多"));
    }
    public static int getIndex(String s){
        int k=s.hashCode();
        return k&9;
    }
}

