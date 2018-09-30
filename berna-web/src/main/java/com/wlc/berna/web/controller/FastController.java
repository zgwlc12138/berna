package com.wlc.berna.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 13:51 2018/9/21
 * @Modified by:
 */
@Controller
@RequestMapping("/fast")
public class FastController {
    @RequestMapping("/index")
    public String index(){
        return "fast";
    }
    @RequestMapping("/test")
    public String test(){
        return "soon";
    }
}
