package com.wlc.berna.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 16:38 2018/9/19
 * @Modified by:
 */
@Controller
@RequestMapping("/device")
public class DeviceController {
    /**
     * 设备指纹首页
     * @return
     */
    @RequestMapping("/index")
    public String index(){
        return "device";
    }

    /**
     * 获取设备指纹信息
     * @param request
     * @return
     */
    public Integer receiveMsg(HttpServletRequest request){
        
        return 0;
    }
}
