package com.wlc.berna.web.otherservice;

import com.alibaba.fastjson.JSONObject;
import com.wlc.berna.common.response.BaseResponse;
import com.wlc.berna.common.response.PowerImgInfResponse;
import com.wlc.berna.common.utils.BeanUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;


/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 11:10 2018/9/6
 * @Modified by:
 */
@Service
public class ApiService {
    private static final Logger logger=LoggerFactory.getLogger(ApiService.class);
    private static final String POWER_IMG_INF_URL="http://127.0.0.1:9099/powerImgInf/getRandomInf";
    @Autowired
    private RestTemplate restTemplate;

    /**
     * 获取随机拼图信息
     * @return
     */
    public PowerImgInfResponse getRandomPowerImgInf(){
        try {
            Map result=restTemplate.getForObject(POWER_IMG_INF_URL,Map.class);

            if (result.get("Content")!=null){
                PowerImgInfResponse response=(PowerImgInfResponse)BeanUtil.mapToObject((Map)result.get("Content"),PowerImgInfResponse.class);
                return response;
            }
        }catch (Exception e){
            logger.error("获取随机拼图信息异常：",e);
        }
        return null;
    }

}
