package com.wlc.berna.sort;

import java.util.Arrays;

/**
 * java 排序算法
 */
public class SortUtil {
    /**
     * 归并排序
     * 简介:将两个（或两个以上）有序表合并成一个新的有序表 即把待排序序列分为若干个子序列，每个子序列是有序的。然后再把有序子序列合并为整体有序序列
     * 时间复杂度为O(nlogn)
     * 稳定排序方式
     * @param nums 待排序数组
     * @return 输出有序数组
     */
    public static int[] mergeSort(int[] nums, int low, int high) {
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

    private static void merge(int[] nums, int low, int mid, int high) {
        int[] temp = new int[high - low + 1];
        int i = low;// 左指针
        int j = mid + 1;// 右指针
        int k = 0;
        // 把较小的数先移到新数组中
        while (i <= mid && j <= high) {
            if (nums[i] < nums[j]) {
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

    /**
     * 冒泡排序O（n^2）
     * @param nums
     */
    public static void buddleSort(int[] nums){

        for (int i=nums.length-1;i>1;i--){
            for (int j=0;j<i;j++){
                if(nums[j]>nums[j+1]){
                    int temp=nums[j];
                    nums[j]=nums[j+1];
                    nums[j+1]=temp;
                }
            }
        }
    }

    /**
     * 选择排序O（n）
     * @param nums
     */
    public static void selectionSort(int[] nums){

        for (int i=0;i<nums.length-1;i++){
            int min=i;
            for (int j=i+1;j<nums.length;j++){
                if (nums[j]<nums[min]){
                    int temp=nums[j];
                    nums[j]=nums[min];
                    nums[min]=temp;
                }
            }
        }
    }

    /**
     * 插入排序
     * @param nums
     */
    public static void insertionSort(int[] nums){
        for (int i=1;i<nums.length;i++){
            int temp=nums[i];
            int j=i;
            while(j>0&&nums[j-1]>=temp){
                nums[j]=nums[j-1];
                --j;
            }
            nums[j]=temp;
        }
    }


    public static void main(String[] args) {

        int[] nums = { 2, 7, 8, 3, 1, 6, 9, 0, 5, 4 };
        // 归并排序的实现
       // SortUtil.mergeSort(nums, 0, nums.length-1);
        SortUtil.insertionSort(nums);
        System.out.println(Arrays.toString(nums));
    }
}
