package com.wlc.berna.web.controller;

import com.alibaba.fastjson.JSONObject;
import com.wlc.berna.common.exception.TemplateRuntimeException;
import com.wlc.berna.common.validate.WriteFontInImg;
import com.wlc.berna.web.service.CharacterService;
import com.wlc.berna.web.utils.RedisUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @Author: zhanggong
 * @Description: 文字验证码
 * @Date: Create in 17:22 2018/9/4
 * @Modified by:
 */
@Controller
@RequestMapping("/fontImg")
public class FontImgController {
    private static final String LOCK_KEY="FontImg:lock:";
    private static final String KEY="FontImg:";
    private static final Logger logger=LoggerFactory.getLogger(FontImgController.class);
    @Autowired
    private CharacterService characterService;
    @Autowired
    private RedisUtil redisUtil;
    @RequestMapping(value = "/index",method = {RequestMethod.GET,RequestMethod.POST})
    public String index(){
        return "sense";
    }

    /**
     * 获取文字验证码
     * @param request
     * @param response
     */
    @RequestMapping(value = "/getFontImg",method = {RequestMethod.GET,RequestMethod.POST})
    public void getFontImg(HttpServletRequest request, HttpServletResponse response){
        response.setDateHeader("Expires", 0);
        response.setHeader("Cache-Control",	"no-store, no-cache, must-revalidate");
        response.addHeader("Cache-Control", "post-check=0, pre-check=0");
        response.setHeader("Pragma", "no-cache");
        response.setContentType("image/jpeg");
        ServletOutputStream out  = null;
        try {
            out = response.getOutputStream();
            while(!redisUtil.lock(LOCK_KEY+request.getSession().getId())){
                logger.info("Key:{}，已锁住",LOCK_KEY+request.getSession().getId());
            }
            String code;
            if (request.getSession().getAttribute("FontCode")!=null){
                code=request.getSession().getAttribute("FontCode").toString();
                request.getSession().removeAttribute("FontCode");
            }else{
                code=characterService.getCode();
                request.getSession().setAttribute("FontCode",code);
            }
            redisUtil.unLock(LOCK_KEY+request.getSession().getId());
            logger.info("锁已释放:{}",LOCK_KEY+request.getSession().getId());
            Map map=WriteFontInImg.drawTextInImg("D:\\TestImg\\end.jpg",out,"#262626","宋体",30,code);
            map.put("Size",0.1);
            map.put("code",code);
            request.getSession().setAttribute("ValidateMap",map);
        }catch (IOException e){
            logger.error("验证码生成失败：",e);
            throw new TemplateRuntimeException("验证码生成失败：",e);
        }finally {
            try {
                out.flush();
            } catch (IOException e) {
                logger.error("IO流异常：",e);
                throw new TemplateRuntimeException("IO流异常：",e);
            } finally {
                if(out!=null){
                    try {
                        out.close();
                    }catch(IOException e){
                        logger.error("IO流关闭异常：",e);
                        throw new TemplateRuntimeException("IO流关闭异常：",e);
                    }
                }
            }
        }
    }

    /**
     * 获取文字验证码文字
     * @param request
     * @return
     */
    @RequestMapping(value = "/getFontImgChar",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String getFontImgChar(HttpServletRequest request){
        while(!redisUtil.lock(LOCK_KEY+request.getSession().getId())){
            logger.info("Key:{}，已锁住",LOCK_KEY+request.getSession().getId());
        }
        String code;
        if (request.getSession().getAttribute("FontCode")!=null){
            code=request.getSession().getAttribute("FontCode").toString();
            request.getSession().removeAttribute("FontCode");
        }else{
            code=characterService.getCode();
            request.getSession().setAttribute("FontCode",code);
        }
        redisUtil.unLock(LOCK_KEY+request.getSession().getId());
        logger.info("锁已释放:{}",LOCK_KEY+request.getSession().getId());
        StringBuffer bf=new StringBuffer();
        for (int i=0;i<4;i++){
            if (i!=3) {
                bf.append("\"").append(code.substring(i, i + 1)).append("\"，");
            }else{
                bf.append("\"").append(code.substring(i, i + 1)).append("\"");
            }
        }
        JSONObject jsonObject=new JSONObject();
        jsonObject.put("code","请依次点击："+bf.toString());
        return jsonObject.toJSONString();
    }
    /**
     * 验证文字验证码
     * @param request
     * @param pointList
     * @return
     */
    @RequestMapping(value = "/validateImageCode",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public Integer validateImageCode(HttpServletRequest request, @RequestBody(required = false) String  pointList){
        if (pointList==null){
            return 1;
        }
        JSONObject jsonObject=JSONObject.parseObject(pointList);
        List<JSONObject> list=jsonObject.getObject("pointList",List.class);
        List<Float[]> ls=new ArrayList<>();
        list.stream().forEach(model->{
            Float[] arrays=new Float[2];
            arrays[0]=model.getObject("x",Float.class);
            arrays[1]=model.getObject("y",Float.class);
            ls.add(arrays);
        });
        Map map = (Map)request.getSession().getAttribute("ValidateMap");
        boolean b=false;
        List<Float[]> serverList=(List<Float[]>)map.get("PointList");
        if(pointList!=null&&list.size()>0){
            b=WriteFontInImg.validateTextImg(serverList,ls,(Double) map.get("Size"));
        }
        if(b){
            return 0;
        }else{
            return 1;
        }

    }

}
