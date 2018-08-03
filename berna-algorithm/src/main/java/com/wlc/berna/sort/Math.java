package com.wlc.berna.sort;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 19:34 2018/8/1
 * @Modified by:
 */
public class Math {
    /**
     * 欧几里得算法-计算最大公因数
     * @param m
     * @param n
     * @return
     */
    public static long gcd(long m,long n){
        while (n!=0){
            long temp=m%n;
            m=n;
            n=temp;
        }
        return m;
    }

    /**
     * 幂运算
     * @param x
     * @param n
     * @return
     */
    public static long pow(long x,int n){
        if (n==0){
            return 1;
        }
        if (n==1){
            return x;
        }
        if(n%2==0){
            return pow(x*x,n/2);
        }else{
            return pow(x*x,n/2)*x;
        }
    }
    public static void main(String[] args){
        //System.out.println(gcd(200,100));
        System.out.println(pow(2,3));
    }
}
