package com.wlc.berna.core.algorithm.watershed;

import java.io.File;
import java.io.IOException;


public class TestMain {


    public static String path;/////软件路径
    static{
        //URL url=new Main().getClass().getProtectionDomain().getCodeSource().getLocation();
        //path=url.getPath();///System.getProperty("user.dir");
        //path=path.substring(1, path.lastIndexOf("bin/"));
    }
    /**
     * @param args
     * @throws IOException
     */
    public static void main(String[] args) throws IOException {
        // TODO Auto-generated method stub
        WaterShed waterShed=new WaterShed();
        waterShed.startWatering(new File("D:\\Image\\card.png"));
        waterShed.showWatershededImage(new File("D:\\Image\\card1.png"));

        System.out.println("done!");
    }

}
