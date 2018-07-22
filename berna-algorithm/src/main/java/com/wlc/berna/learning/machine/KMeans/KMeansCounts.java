package com.wlc.berna.learning.machine.KMeans;

import java.util.Random;

/**
 * @author 张弓
 * 首先 就是KMeans算法类，在这里写成了通用类的形式输入参数：k（最终聚类的数目），
 * sourceData[][]（输入的样本数据，其一维长度len_1代表样本数据的数量，二维长度len_2代表每个样本数据所包含的数据个数）
 * MAX_Its（迭代次数，迭代次数越多应该说明分类越精确吧？）。
 * 输出参数：label[] ，其长度和sourceData相同，存储了每个样本数据的类标记，如label[2]=0,表示第三个样本数据被分配到第1类。
 */
public class KMeansCounts {
    //由于这三个数据总是共用不变的因此在这里声明
    static int k=0;
    static int len_1=0;       //源数据数组的长度，即样本数目
    static int len_2=0;       //源数组二维长度，及每个样本包含数据的数目
    double[][] center=new double[k][len_2];//各簇初始中心
    public static void main(String[] args){
        double[][] DATA = { { 5.1, 3.5, 1.4, 0.2},
                { 4.9, 3.0, 1.4, 0.2 },{ 4.7, 3.2, 1.3, 0.2 },
                { 4.6, 3.1, 1.5, 0.2 },{ 5.0, 3.6, 1.4, 0.2 },
                { 7.0, 3.2, 4.7, 1.4 },{ 6.4, 3.2, 4.5, 1.5 },
                { 6.9, 3.1, 4.9, 1.5 },{ 5.5, 2.3, 4.0, 1.3 },
                { 6.5, 2.8, 4.6, 1.5 },{ 5.7, 2.8, 4.5, 1.3 },
                { 6.5, 3.0, 5.8, 2.2 },{ 7.6, 3.0, 6.6, 2.1 },
                { 4.9, 2.5, 4.5, 1.7 },{ 7.3, 2.9, 6.3, 1.8 },
                { 6.7, 2.5, 5.8, 1.8 },{ 6.9, 3.1, 5.1, 2.3 },
                { 4.5, 3.1, 1.4, 0.2 },{ 4.8, 3.2, 1.4, 0.2 } };
        double[][][] DATA1={{{1,1,1}}};
        KMeansCounts kMeans=new KMeansCounts();
        kMeans.KMeans(2,DATA,DATA.length*10);
    }
    public int[] KMeans(int k,double[][] sourceData,int MAX_Its){
        KMeansCounts.k=k;
        KMeansCounts.len_1= sourceData.length;        //源数据数组的长度  也就是多少个像素点
        KMeansCounts.len_2=sourceData[0].length;     //每个数据的维度   三个像素值  3
        int[] label=new int[len_1];                          //最终输出，存储了每个样本数据的类标记
        center=initcenter(k,sourceData);
        for(int i=0;i<MAX_Its;i++){
            System.out.println("第   "+i+"  次分类");
            label=classify(sourceData,center,k);         //分类
            center=changecenter(sourceData,label,center,k); //改变中心值
        }
        for(int i =0;i<label.length;i++)
            System.out.println(i+"  被分到第"+label[i]+"类");
        return label;
    }
    //初始化中心值
    static public double[][] initcenter(int k,double[][] sourceData){
        int[] eachlabel_num=new int[k];
        double[][] center=new double[k][];//各簇初始中心
        Random random=new Random(System.currentTimeMillis());//生成随机数
        //初始化中心值
        for(int i=0;i<k;i++){
            int ran= random.nextInt(len_1);
            System.out.println(i+"  random is :  "+ran);
            center[i]=sourceData[ran];
        }
        int[] label=classify(sourceData,center,k);
        for (int i=0;i<len_1;i++){
            for(int j=0;j<k;j++){
                if(label[i]==j){
                    eachlabel_num[j]++;
                } else continue;
            }
        }
        int repeat=0;
        for(int j=0;j<k;j++){
            System.out.println("label "+j+"  num is  "+eachlabel_num[j]);
            if(eachlabel_num[j]==0){
                initcenter(k,sourceData);
                repeat++;
                System.out.println("初始化中心第      "+repeat+"  次");
                break;
            }else continue;
        }
        return center;
    }
    //把每个数据样本分配到距离最小的中心簇
    static public int[] classify(double[][] sourceData,double[][] center,int k){

        int[] label=new int[len_1];
        for(int i=0;i<len_1;i++){
            double neardist=Double.MAX_VALUE;//定义最小欧式距离，最初赋予最大值
            for(int j=0;j<k;j++){
                double dist=calEuraDist(sourceData[i], center[j],len_2); //计算欧式距离
                if(dist<neardist){
                    neardist=dist;
                    label[i]=j;// 记录每个元素所在分组
                }
            }
        }
        return label;
    }
    //重新计算簇中心
    static public double[][] changecenter(double[][] sourceData,int[] label,double[][] center,int k){
        int[] eachlabel_num=new int[k];
        for (int i=0;i<len_1;i++){
            for(int j=0;j<k;j++){
                if(label[i]==j){
                    eachlabel_num[j]++;
                } else{
                    continue;
                }
            }
        }
        int[][] sum=new int[k][len_2];
        for(int i=0;i<label.length;i++){
            for(int j=0;j<len_2;j++){
                sum[label[i]][j]+=sourceData[i][j];
            }
        }
        for(int i=0;i<k;i++){
            for(int j=0;j<len_2;j++){
                center[i][j]=sum[i][j]/eachlabel_num[i];
            }
        }
        return center;
    }
    //计算欧式距离
    static public double calEuraDist(double[] vector,double[] center,int len){
        double sum=0;
        for(int i=0;i<len;i++){
            sum+=Math.pow(vector[i]-center[i],2);
        }
        sum=Math.sqrt(sum);
        return sum;
    }

}
