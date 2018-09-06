package com.wlc.berna.core.service;


import com.wlc.berna.core.domain.PowerImgInfDO;

import java.util.List;

public interface PowerImgInfService {
    PowerImgInfDO getRandomInf();
    PowerImgInfDO getRandomInfByType();
    List<PowerImgInfDO> findAllRandomInf();
}
