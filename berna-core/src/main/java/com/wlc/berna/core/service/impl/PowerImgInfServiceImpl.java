package com.wlc.berna.core.service.impl;


import com.wlc.berna.core.domain.PowerImgInfDO;
import com.wlc.berna.core.mapper.PowerImgInfMapper;
import com.wlc.berna.core.service.PowerImgInfService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service("powerImgInfService")
@Component
public class PowerImgInfServiceImpl implements PowerImgInfService {
    private static final Logger logger= LoggerFactory.getLogger(PowerImgInfServiceImpl.class);
    @Autowired
    private PowerImgInfMapper powerImgInfMapper;
    @Autowired
    private RedisTemplate redisTemplate;
    @Override
    public PowerImgInfDO getRandomInf() {
        return powerImgInfMapper.getRandomInf();
    }

    @Override
    public List<PowerImgInfDO> findAllRandomInf() {
        return powerImgInfMapper.findAllRandomInf();
    }

    @Override
    public synchronized PowerImgInfDO getRandomInfByType() {
        PowerImgInfDO powerImgInf=null;
        if (!redisTemplate.hasKey("ImgCount")){
            powerImgInf=randomInf();
            redisTemplate.opsForValue().set("XDistance",powerImgInf.getxDistance());
            redisTemplate.opsForValue().set("ImgCount","1");
            redisTemplate.opsForValue().set("PowerImgInf",powerImgInf);
        }else if (redisTemplate.opsForValue().get("ImgCount").equals("1")){
            powerImgInf=(PowerImgInfDO)redisTemplate.opsForValue().get("PowerImgInf");
            redisTemplate.opsForValue().set("ImgCount","2");
        }else if(redisTemplate.opsForValue().get("ImgCount").equals("2")){
            powerImgInf= randomInf();
            redisTemplate.opsForValue().set("XDistance",powerImgInf.getxDistance());
            redisTemplate.opsForValue().set("ImgCount","1");
            redisTemplate.opsForValue().set("PowerImgInf",powerImgInf);
        }
        return powerImgInf;
    }
    private PowerImgInfDO randomInf(){
        List<PowerImgInfDO> list=powerImgInfMapper.findAllRandomInf();
        Random random=new Random();
        random.nextInt();
        return list.get(random.nextInt(list.size()));
    }

    public static void main(String[] args){

    }
}
