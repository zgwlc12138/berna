package com.wlc.berna.core.domain;

import java.io.Serializable;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 14:45 2018/7/27
 * @Modified by:
 */
public class PowerImgInfDO implements Serializable {
    private Integer id;

    private Integer imgIndex;

    private String imgType;

    private String masterPath;

    private String remarks1;

    private String remarks2;

    private String remarks3;

    private String slavePath;

    private Integer xDistance;

    private Integer yDistance;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getImgIndex() {
        return imgIndex;
    }

    public void setImgIndex(Integer imgIndex) {
        this.imgIndex = imgIndex;
    }

    public String getImgType() {
        return imgType;
    }

    public void setImgType(String imgType) {
        this.imgType = imgType == null ? null : imgType.trim();
    }

    public String getMasterPath() {
        return masterPath;
    }

    public void setMasterPath(String masterPath) {
        this.masterPath = masterPath == null ? null : masterPath.trim();
    }

    public String getRemarks1() {
        return remarks1;
    }

    public void setRemarks1(String remarks1) {
        this.remarks1 = remarks1 == null ? null : remarks1.trim();
    }

    public String getRemarks2() {
        return remarks2;
    }

    public void setRemarks2(String remarks2) {
        this.remarks2 = remarks2 == null ? null : remarks2.trim();
    }

    public String getRemarks3() {
        return remarks3;
    }

    public void setRemarks3(String remarks3) {
        this.remarks3 = remarks3 == null ? null : remarks3.trim();
    }

    public String getSlavePath() {
        return slavePath;
    }

    public void setSlavePath(String slavePath) {
        this.slavePath = slavePath == null ? null : slavePath.trim();
    }

    public Integer getxDistance() {
        return xDistance;
    }

    public void setxDistance(Integer xDistance) {
        this.xDistance = xDistance;
    }

    public Integer getyDistance() {
        return yDistance;
    }

    public void setyDistance(Integer yDistance) {
        this.yDistance = yDistance;
    }
}
