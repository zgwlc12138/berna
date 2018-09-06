package com.wlc.berna.web.controller;

import com.alibaba.fastjson.JSONObject;
import com.wlc.berna.common.exception.TemplateRuntimeException;
import com.wlc.berna.common.response.PowerImgInfResponse;
import com.wlc.berna.web.otherservice.ApiService;
import com.wlc.berna.web.utils.RedisUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * @Author: zhanggong
 * @Description: 拼图验证码
 * @Date: Create in 12:23 2018/9/6
 * @Modified by:
 */
@Controller
@RequestMapping("/jigsaw")
public class JigsawController {
    private static final Logger logger=LoggerFactory.getLogger(JigsawController.class);
    @Autowired
    private ApiService apiService;
    @Autowired
    private RedisUtil redisUtil;
    @RequestMapping("index")
    public String index(){
        return "jigsaw";
    }
    @RequestMapping(value = "/getValidateImg",method = {RequestMethod.GET,RequestMethod.POST})
    public void getMasterAndSlaveImg(@Param(value = "type") String type, HttpServletRequest request, HttpServletResponse response) {
        response.setDateHeader("Expires", 0);
        response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
        response.addHeader("Cache-Control", "post-check=0, pre-check=0");
        response.setHeader("Pragma", "no-cache");
        response.setContentType("image/jpeg");
        ServletOutputStream out = null;
        String path;
        String lockKey="lock:"+request.getSession().getId()+":Jigsaw";
        PowerImgInfResponse inf=(PowerImgInfResponse)request.getSession().getAttribute("JigsawInf");
        if (inf==null){
            inf=apiService.getRandomPowerImgInf();
            request.getSession().setAttribute("JigsawInf",inf);
        }else{
            request.getSession().removeAttribute("JigsawInf");
            request.getSession().setAttribute("XDistance",inf.getxDistance());
        }
        if ("1".equals(type)){
            path=inf.getMasterPath();
        }else{
            path=inf.getSlavePath();
        }
        FileInputStream fis = null;
        try {
            out=response.getOutputStream();
            fis = new FileInputStream(path);
            int count = 0;
            byte[] buffer = new byte[1024 * 8];
            while ((count = fis.read(buffer)) != -1) {
                out.write(buffer, 0, count);
                out.flush();
            }
        }catch (IOException e){
            logger.error("验证码生成失败：",e);
            throw new TemplateRuntimeException("验证码生成失败：",e);
        }finally {
            if (out!=null) {
                try {
                    fis.close();
                    out.close();
                }catch (IOException e){
                    logger.error("IO流关闭异常：",e);
                    throw new TemplateRuntimeException("IO流关闭异常：",e);
                }
            }
        }
    }
    @ResponseBody
    @RequestMapping(value = "/validate/validateCode",method = {RequestMethod.GET,RequestMethod.POST})
    public String validateCode(@Param(value = "oX")String oX,HttpServletRequest request, HttpServletResponse response){
        JSONObject jsonObject=new JSONObject();
        if (oX==null){
            jsonObject.put("returnCode",1);
        }else{
            Integer xDistance=(Integer) request.getSession().getAttribute("XDistance");
            int grap=Math.abs(Integer.valueOf(oX).intValue()-xDistance.intValue());
            if (grap<10){
                jsonObject.put("returnCode",0);
            }else{
                jsonObject.put("returnCode",1);
            }
        }
        return jsonObject.toJSONString();
    }

}
