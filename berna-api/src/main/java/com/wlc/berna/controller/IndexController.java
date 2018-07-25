package com.wlc.berna.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 20:09 2018/7/25
 * @Modified by:
 */
@Controller
public class IndexController {
    @RequestMapping("hs")
    public String hs(){
        return "OK";
    }
}
