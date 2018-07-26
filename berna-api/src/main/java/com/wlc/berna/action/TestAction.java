package com.wlc.berna.action;

import com.wlc.berna.common.annotation.Action;
import com.wlc.berna.common.annotation.RequestMapping;
import com.wlc.berna.common.context.Context;

import java.util.HashMap;
import java.util.Map;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 20:11 2018/7/25
 * @Modified by:
 */
@Action("test")
public class TestAction {
    @RequestMapping("msg")
    public Object msg(Context context){
        Map<String,Object> resMap=new HashMap<>(2);
        resMap.put("code",0);
        resMap.put("msg","成功");
        return resMap;
    }
}
