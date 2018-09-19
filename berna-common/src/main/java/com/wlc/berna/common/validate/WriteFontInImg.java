package com.wlc.berna.common.validate;

import com.alibaba.fastjson.JSONObject;
import com.wlc.berna.common.utils.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.swing.*;
import java.awt.*;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.*;
import java.util.List;

public class WriteFontInImg {
    private static final Logger logger= LoggerFactory.getLogger(WriteFontInImg.class);
    public static void main(String[] args) {
        for (int i=0;i<500;i++){
            sysOut(i);
        }
        //System.out.println(getRandomList(4,260,20));
    }
    public static void sysOut(int k){
        long h1=System.currentTimeMillis();
        String filePath = "D:\\Image\\test.png";
        String outPath = "D:\\Image\\test"+String.valueOf(k)+".png";
        StringBuffer sb=new StringBuffer();
        for (int i=0;i<4;i++){
            sb.append(getRandomChar());
        }
        drawTextInImg(filePath,outPath,"#262626", "宋体",30,sb.toString());
        long h2=System.currentTimeMillis();
        System.out.println("所花时间："+-(h1-h2)+"秒");
    }
    public static boolean validateTextImg(List<Integer[]> serviceList,List<Integer[]> pointList,int size){
        logger.info("服务器坐标：{}",JSONObject.toJSONString(serviceList));
        logger.info("客户端坐标：{}",JSONObject.toJSONString(pointList));
        for (int i=0;i<serviceList.size();i++){
            if (Math.abs(serviceList.get(i)[0]-pointList.get(i)[0])>size){
                return false;
            }
            if (Math.abs(serviceList.get(i)[1]-pointList.get(i)[1])>size){
                return false;
            }
        }

        return true;
    }
    public static Map drawTextInImg(String filePath, ServletOutputStream out, String color, String textFont, int textSize, String text){
        Map map=new HashMap(4);
        List<Integer[]> pointList=new ArrayList<>();
        long h1=System.currentTimeMillis();
        ImageIcon imgIcon = new ImageIcon(filePath);
        Image img = imgIcon.getImage();
        int width = img.getWidth(null);
        int height = img.getHeight(null);
        BufferedImage bimage = new BufferedImage(width, height,
                BufferedImage.TYPE_INT_RGB);

        Graphics2D g = bimage.createGraphics();
        g.setColor(getColor(color));
        g.setBackground(Color.white);
        g.drawImage(img, 0, 0, null);
        Font font = null;
        if (StringUtil.isNotBlank(textFont)
                && textSize!=0) {
            font = new Font(textFont, Font.BOLD,
                    textSize);
        } else {
            font = new Font(null, Font.BOLD, 15);
        }
        FontMetrics metrics = new FontMetrics(font){};
        g.setFont(font);
        String[] s=StringUtil.splitByNum(text);
        List<Integer> heightRandom=getRandomList(s.length,height,textSize);
        map.put("serviceY",heightRandom);
        logger.info("纵坐标："+heightRandom);
        List<Integer> widthRandom=getRandomList(s.length,width,textSize);
        map.put("serviceX",widthRandom);
        logger.info("横坐标："+widthRandom);
        for (int i=0;i<s.length;i++){
            //Rectangle2D bounds = metrics.getStringBounds(s[i], null);
            //int textWidth = (int) bounds.getWidth();
            //int textHeight = (int) bounds.getHeight();
            int left =widthRandom.get(i).intValue();
            int top = heightRandom.get(i).intValue();
            g.drawString(s[i], left, top);
            Integer[] points=new Integer[2];
            points[0]=left;
            points[1]=top;
            pointList.add(points);
        }
        map.put("PointList",pointList);
        g.dispose();
        try {
            ImageIO.write(bimage, "JPEG", out);
        } catch (FileNotFoundException e) {
            logger.error("生成文字验证码图片异常：",e);
        } catch (IOException e) {
            logger.error("生成文字验证码图片异常：",e);
        }finally {
            try {
                if (out != null) {
                    out.close();
                }
            }catch (IOException e){
                logger.error("生成文字验证码图片异常：",e);
            }
        }
        long h2=System.currentTimeMillis();
        logger.info("验证码生成所消耗时间"+(h2-h1)+"毫秒");
        return map;
    }

    public static void  drawTextInImg(String filePath,String outPath,String color,String textFont,int textSize,String text){
        ImageIcon imgIcon = new ImageIcon(filePath);
        Image img = imgIcon.getImage();
        int width = img.getWidth(null);
        int height = img.getHeight(null);
        BufferedImage bimage = new BufferedImage(width, height,
                BufferedImage.TYPE_INT_RGB);

        Graphics2D g = bimage.createGraphics();
        g.setColor(getColor(color));
        g.setBackground(Color.white);
        g.drawImage(img, 0, 0, null);
        Font font = null;
        if (StringUtil.isNotBlank(textFont)
                && textSize!=0) {
            font = new Font(textFont, Font.BOLD,
                    textSize);
        } else {
            font = new Font(null, Font.BOLD, 15);
        }
        FontMetrics metrics = new FontMetrics(font){};
        g.setFont(font);
        String[] s=StringUtil.splitByNum(text);
        List<Integer> heightRandom=getRandomList(s.length,height,textSize);
        logger.info("验证码纵坐标："+heightRandom);
        List<Integer> widthRandom=getRandomList(s.length,width,textSize);
        logger.info("验证码横坐标："+widthRandom);
        for (int i=0;i<s.length;i++){
            Rectangle2D bounds = metrics.getStringBounds(s[i], null);
            int textWidth = (int) bounds.getWidth();
            int textHeight = (int) bounds.getHeight();
            int left =widthRandom.get(i).intValue();
            int top = heightRandom.get(i).intValue();
            g.drawString(s[i], left, top);

        }
        g.dispose();
        FileOutputStream out=null;
        try {
            out = new FileOutputStream(outPath);
            ImageIO.write(bimage, "JPEG", out);

        } catch (FileNotFoundException e) {
            logger.error("生成文字验证码图片异常：",e);
        } catch (IOException e) {
            logger.error("生成文字验证码图片异常：",e);
        }finally {
            try {
                if (out != null) {
                    out.close();
                }

            }catch (IOException e){
                e.printStackTrace();
            }
        }

    }
    private static Color getColor(String color) {
        if (color.charAt(0) == '#') {
            color = color.substring(1);
        }
        if (color.length() != 6) {
            return null;
        }
        try {
            int r = Integer.parseInt(color.substring(0, 2), 16);
            int g = Integer.parseInt(color.substring(2, 4), 16);
            int b = Integer.parseInt(color.substring(4), 16);
            return new Color(r, g, b);
        } catch (NumberFormatException nfe) {
            logger.error("生成文字验证码图片异常：",nfe);
            return null;
        }
    }

    /**
     * 分段获取随机数
     * @param count
     * @param lengthVal
     * @param size
     * @return
     */
    private static List<Integer> getRandomList(int count,int lengthVal,int size){
        if (count > lengthVal) {
            return null;
        } else {
            // 生成数据集，用来保存随即生成数，并用于判断
            List<Integer> list = new ArrayList<>();
            Random rd = new Random();
            int myLength=(lengthVal-count*size-size)/count;
            int length=0;
            int random;
            int max;
            int min;
            int[] arrays=new int[count];
            for (int i=1;i<=count;i++){
                if (i==1){
                    max=size+myLength;
                    min=size;
                    random=rd.nextInt(max-min+1)+min;
                    arrays[i-1]=random;
                    length=max;
                }else if (i>1&&i<count){
                    max=length+size+myLength;
                    min=length+size;
                    random=rd.nextInt(max-min+1)+min;
                    arrays[i-1]=random;
                    length=max;
                }else if (i==count){
                    max=lengthVal-size;
                    min=length+size;
                    random=rd.nextInt(max-min+1)+min;
                    arrays[i-1]=random;
                    length=max;
                }
            }
            while (list.size() < count) {
                int num=arrays[rd.nextInt(arrays.length)];
                if (!list.contains(num)) {
                    list.add(num);
                }
            }
            return list;
        }
    }
    public static char getRandomChar() {
        String str = "";
        int hightPos;
        int lowPos;
        Random random = new Random();
        hightPos = (176 + Math.abs(random.nextInt(39)));
        lowPos = (161 + Math.abs(random.nextInt(93)));
        byte[] b = new byte[2];
        b[0] = (Integer.valueOf(hightPos)).byteValue();
        b[1] = (Integer.valueOf(lowPos)).byteValue();
        try {
            str = new String(b, "GBK");
        } catch (UnsupportedEncodingException e) {
            logger.error("生成文字验证码图片异常：",e);
        }
        return str.charAt(0);
    }
}