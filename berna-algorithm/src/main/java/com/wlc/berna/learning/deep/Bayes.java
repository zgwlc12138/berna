package com.wlc.berna.learning.deep;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * @Author: zhanggong
 * @Description: 贝叶斯公式
 * @Formula: P(Bi|A)=P(A|Bi)P(Bi)/(P(A|B1)P(B1)+P(A|B2)P(B2)+..P(A|Bn)P(Bn))
 * @Date: Create in 10:19 2018/9/17
 * @Modified by:
 */
public class Bayes {

    /**
     * 将训练集按巡逻集合的最后一个值进行分类
     * @param datas
     * @return
     */
    Map<String, ArrayList<ArrayList<String>>> datasOfClass(ArrayList<ArrayList<String>> datas){
        Map<String, ArrayList<ArrayList<String>>> map = new HashMap<>(16);
        ArrayList<String> t;
        String c ;
        for (int i = 0; i < datas.size(); i++) {
            t = datas.get(i);
            c = t.get(t.size() - 1);
            if (map.containsKey(c)) {
                map.get(c).add(t);
            } else {
                ArrayList<ArrayList<String>> nt = new ArrayList<>();
                nt.add(t);
                map.put(c, nt);
            }
        }
        return map;
    }

    /**
     * 在训练数据的基础上预测测试元组的类别 ，testT的各个属性在结果集里面出现的概率相乘最高的，即是结果
     * @param datas
     * @param testT
     * @return
     */
    public String predictClass(ArrayList<ArrayList<String>> datas, ArrayList<String> testT) {
        Map<String, ArrayList<ArrayList<String>>> doc = this.datasOfClass(datas);
        //将训练集元素划分保存在数据里
        Object classes[] = doc.keySet().toArray();
        double maxP = 0.00;
        int maxPIndex = -1;
        //testT的各个属性在结果集里面出现的概率相乘最高的，即使结果集
        for (int i = 0; i < doc.size(); i++) {
            String c = classes[i].toString();
            ArrayList<ArrayList<String>> d = doc.get(c);
            BigDecimal b1 = new BigDecimal(Double.toString(d.size()));
            BigDecimal b2 = new BigDecimal(Double.toString(datas.size()));
            //b1除以b2得到一个精度为3的双浮点数
            double pOfC = b1.divide(b2,3,BigDecimal.ROUND_HALF_UP).doubleValue();
            for (int j = 0; j < testT.size(); j++) {
                double pv = this.pOfV(d, testT.get(j), j);
                BigDecimal b3 = new BigDecimal(Double.toString(pOfC));
                BigDecimal b4 = new BigDecimal(Double.toString(pv));
                //b3乘以b4得到一个浮点数
                pOfC=b3.multiply(b4).doubleValue();
            }
            if(pOfC > maxP){
                maxP = pOfC;
                maxPIndex = i;
            }
        }
        return classes[maxPIndex].toString();
    }

    /**
     * 计算指定属性到训练集出现的频率
     * @param d
     * @param value
     * @param index
     * @return
     */
    private double pOfV(ArrayList<ArrayList<String>> d, String value, int index) {
        double p ;
        int count = 0;
        int total = d.size();
        for (int i = 0; i < total; i++) {
            if(d.get(i).get(index).equals(value)){
                count++;
            }
        }
        BigDecimal b1 = new BigDecimal(Double.toString(count));
        BigDecimal b2 = new BigDecimal(Double.toString(total));
        //b1除以b2得到一个精度为3的双浮点数
        p = b1.divide(b2,3,BigDecimal.ROUND_HALF_UP).doubleValue();
        return p;
    }
}
