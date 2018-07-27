package com.wlc.berna.core.mapper;


import com.wlc.berna.core.domain.PowerImgInfDO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("powerImgInfMapper")
public interface PowerImgInfMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(PowerImgInfDO record);

    int insertSelective(PowerImgInfDO record);

    PowerImgInfDO selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(PowerImgInfDO record);

    int updateByPrimaryKey(PowerImgInfDO record);
    PowerImgInfDO getRandomInf();
    List<PowerImgInfDO> findAllRandomInf();
}