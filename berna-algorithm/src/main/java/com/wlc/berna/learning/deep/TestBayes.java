package com.wlc.berna.learning.deep;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

/**
 * @Author: zhanggong
 * @Description:贝叶斯公式测试
 * @Date: Create in 10:25 2018/9/17
 * @Modified by:
 */
public class TestBayes {
    /**
     * 读取测试元组
     * @return
     * @throws IOException
     */
    public ArrayList<String> readTestData() throws IOException{
        ArrayList<String> candAttr = new ArrayList<String>();
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String str = "";
        while (!(str = reader.readLine()).equals("")) {
            //string分析器
            String[] tokenizer = str.split(" ");
            for(int i=0;i<tokenizer.length;i++){
                candAttr.add(tokenizer[i]);
            }
        }
        return candAttr;
    }

    /**
     * 读取训练集
     * @return
     * @throws IOException
     */
    public ArrayList<ArrayList<String>> readData() throws IOException {
        ArrayList<ArrayList<String>> datas = new ArrayList<>();
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String str ;
        while (!(str = reader.readLine()).equals("")) {
            String[] tokenizer = str.split(" ");
            ArrayList<String> s = new ArrayList<String>();
            for(int i=0;i<tokenizer.length;i++){
                s.add(tokenizer[i]);
            }
            datas.add(s);
        }
        return datas;
    }

    public static void main(String[] args) {
        TestBayes tb = new TestBayes();
        ArrayList<ArrayList<String>> datas = null;
        ArrayList<String> testT = null;
        Bayes bayes = new Bayes();
        try {
            System.out.println("请输入训练数据");
            datas = tb.readData();
            while (true) {
                System.out.println("请输入测试元组");
                testT = tb.readTestData();
                String c = bayes.predictClass(datas, testT);
                System.out.println("The class is: " + c);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}