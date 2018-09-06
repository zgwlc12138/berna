package com.wlc.berna.web.service.impl;

import com.wlc.berna.common.validate.WriteFontInImg;
import com.wlc.berna.web.service.CharacterService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service("characterService")
public class CharacterServiceImpl implements CharacterService {
    private static final Logger log= LoggerFactory.getLogger(CharacterServiceImpl.class);
    @Override
    public String getCode() {
        StringBuffer sb=new StringBuffer();
        for (int i=0;i<4;i++){
            sb.append(WriteFontInImg.getRandomChar());
        }
        return sb.toString();
    }

}
