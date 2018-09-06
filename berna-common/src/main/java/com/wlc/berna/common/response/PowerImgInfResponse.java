package com.wlc.berna.common.response;

import com.alibaba.fastjson.annotation.JSONField;

import javax.xml.bind.annotation.XmlAttribute;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 10:26 2018/9/6
 * @Modified by:
 */
public class PowerImgInfResponse {
    @XmlAttribute(name = "id")
    @JSONField(name = "id")
    private Integer id;
    @XmlAttribute(name = "imgIndex")
    @JSONField(name = "imgIndex")
    private Integer imgIndex;
    @XmlAttribute(name = "imgType")
    @JSONField(name = "imgType")
    private String imgType;
    @XmlAttribute(name = "masterPath")
    @JSONField(name = "masterPath")
    private String masterPath;
    @XmlAttribute(name = "remarks1")
    @JSONField(name = "remarks1")
    private String remarks1;
    @XmlAttribute(name = "remarks2")
    @JSONField(name = "remarks2")
    private String remarks2;
    @XmlAttribute(name = "remarks3")
    @JSONField(name = "remarks3")
    private String remarks3;
    @XmlAttribute(name = "slavePath")
    @JSONField(name = "slavePath")
    private String slavePath;
    @XmlAttribute(name = "xDistance")
    @JSONField(name = "xDistance")
    private Integer xDistance;
    @XmlAttribute(name = "yDistance")
    @JSONField(name = "yDistance")
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
        this.imgType = imgType;
    }

    public String getMasterPath() {
        return masterPath;
    }

    public void setMasterPath(String masterPath) {
        this.masterPath = masterPath;
    }

    public String getRemarks1() {
        return remarks1;
    }

    public void setRemarks1(String remarks1) {
        this.remarks1 = remarks1;
    }

    public String getRemarks2() {
        return remarks2;
    }

    public void setRemarks2(String remarks2) {
        this.remarks2 = remarks2;
    }

    public String getRemarks3() {
        return remarks3;
    }

    public void setRemarks3(String remarks3) {
        this.remarks3 = remarks3;
    }

    public String getSlavePath() {
        return slavePath;
    }

    public void setSlavePath(String slavePath) {
        this.slavePath = slavePath;
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
