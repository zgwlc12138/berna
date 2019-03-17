package com.wlc.berna.sort;


import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.TreeMap;

public class StudyTest {
    private static double[][] DATA = { { 5.1, 3.5, 1.4, 0.2},
            { 4.9, 3.0, 1.4, 0.2 },{ 4.7, 3.2, 1.3, 0.2 },
            { 4.6, 3.1, 1.5, 0.2 },{ 5.0, 3.6, 1.4, 0.2 },
            { 7.0, 3.2, 4.7, 1.4 },{ 6.4, 3.2, 4.5, 1.5 },
            { 6.9, 3.1, 4.9, 1.5 },{ 5.5, 2.3, 4.0, 1.3 },
            { 6.5, 2.8, 4.6, 1.5 },{ 5.7, 2.8, 4.5, 1.3 },
            { 6.5, 3.0, 5.8, 2.2 },{ 7.6, 3.0, 6.6, 2.1 },
            { 4.9, 2.5, 4.5, 1.7 },{ 7.3, 2.9, 6.3, 1.8 },
            { 6.7, 2.5, 5.8, 1.8 },{ 6.9, 3.1, 5.1, 2.3 } };
    public static void main(String[] args){
        System.out.println(1e-6);
        System.out.println(calc(2));
        double[] d={  5.5, 2.3, 4.0, 1.3 };
        System.out.println( Arrays.deepToString(classify0(DATA,d,2)));


        new HashMap<>();
        new LinkedHashMap<>();
        new TreeMap<>();
    }




    //计算根号a的值
    public static float calc(float a){
        if(a<1e-6){
            return 0;
        }
        float x=a/2;
        float t=a;
        while(java.lang.Math.abs(x-t)>1e-6){
            t=x;
            x=(x+a/x)/2;
        }
        return x;
    }

    /**
     * K-邻近算法--主要公式--∣P1 P2∣=√[（x1- x2）^2+（y1- y2）^2]
     * @param dataSet 样本数据
     * @param lables  参照数据向量
     * @param k   选择最临近数量
     * @return
     */
    public static double[][] classify0(double[][] dataSet,double[] lables,int k){
        double[][] length=new double[dataSet.length][2];
        double[][] lengths=new double[dataSet.length][2];
        for (Integer i=new Integer(0);i<dataSet.length;i++){
            Double n=new Double(0);
            double[] m=dataSet[i];
            if(m.length!=lables.length){
                return null;
            }
            for (int j=0;j<m.length;j++){
                //样本数据-参照数据 绝对值的平方   pow 平方   abs绝对值
                n=n+ java.lang.Math.pow(java.lang.Math.abs(m[j]-lables[j]),2);
            }
            //绝对值平方和开根号
            length[i][0]=calc(n.floatValue());
            length[i][1]=i.doubleValue();
        }
        //排序
        lengths=mergeSort(length,0,length.length-1);
        System.out.println(Arrays.deepToString(lengths));
        Double[] w=new Double[dataSet.length] ;
        for (int t=0;t<dataSet.length;t++){
            w[t]=lengths[t][1];
        }
        double[][] results=new double[k][dataSet[0].length];
        for (int l=0;l<k;l++){
            results[l]=dataSet[w[l].intValue()];
        }
        return results;
    }
    public static double[][] mergeSort(double[][] nums, int low, int high) {
        int mid = (low + high) / 2;
        if (low < high) {
            // 左边
            mergeSort(nums, low, mid);
            // 右边
            mergeSort(nums, mid + 1, high);
            // 左右归并
            merge(nums, low, mid, high);
        }
        return nums;
    }

    private static void merge(double[][] nums, int low, int mid, int high) {
        double[][] temp = new double[high - low + 1][2];
        int i = low;// 左指针
        int j = mid + 1;// 右指针
        int k = 0;
        // 把较小的数先移到新数组中
        while (i <= mid && j <= high) {
            if (nums[i][0] < nums[j][0]) {
                temp[k++] = nums[i++];
            } else {
                temp[k++] = nums[j++];
            }
        }
        // 把左边剩余的数移入数组
        while (i <= mid) {
            temp[k++] = nums[i++];
        }
        // 把右边边剩余的数移入数组
        while (j <= high) {
            temp[k++] = nums[j++];
        }
        // 把新数组中的数覆盖nums数组
        for (int k2 = 0; k2 < temp.length; k2++) {
            nums[k2 + low] = temp[k2];
        }
    }

}