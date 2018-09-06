package com.wlc.berna.action;

import com.wlc.berna.common.annotation.Action;
import com.wlc.berna.common.annotation.RequestMapping;
import com.wlc.berna.common.context.Context;
import com.wlc.berna.common.response.BaseResponse;
import com.wlc.berna.common.response.PowerImgInfResponse;
import com.wlc.berna.common.utils.BeanUtil;
import com.wlc.berna.core.domain.PowerImgInfDO;
import com.wlc.berna.core.service.PowerImgInfService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Random;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 10:04 2018/9/6
 * @Modified by:
 */
@Action("powerImgInf")
public class PowerImgInfAction {
    @Autowired
    private PowerImgInfService powerImgInfService;
    @RequestMapping("getRandomInf")
    public BaseResponse<PowerImgInfResponse> getRandomInf(Context context){
        BaseResponse<PowerImgInfResponse> baseResponse=new BaseResponse<>();
        PowerImgInfResponse response=new PowerImgInfResponse();
        List<PowerImgInfDO> list=powerImgInfService.findAllRandomInf();
        Random random=new Random();
        BeanUtil.bean2Bean(list.get(random.nextInt(list.size())),response);
        baseResponse.markSuccess(response);
        return baseResponse;
    }

}
