package com.wlc.berna.service.impl;

import com.wlc.berna.service.CityService;
import com.wlc.berna.vo.City;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CityServiceImpl implements CityService {

    // 模拟数据库，存储 City 信息
    private static Map<Long, City> CITY_DB = new HashMap<>();
    public  CityServiceImpl(){
        for (int i=0;i<100;i++){
            City city=new City();
            city.setId(Long.valueOf(i));
            city.setCityName("城市"+i);
            city.setDescription("除外");
            city.setProvinceId(Long.valueOf(i));
            CITY_DB.put(Long.valueOf(i),city);
        }
    }
    @Override
    public List<City> findAllCity() {
        return new ArrayList<>(CITY_DB.values());
    }

    @Override
    public City findCityById(Long id) {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.err.println("findOneCity 2");
        return CITY_DB.get(id);
    }

    @Override
    public Long saveCity(City city) {
        city.setId(CITY_DB.size() + 1L);
        CITY_DB.put(city.getId(), city);
        return city.getId();
    }

    @Override
    public Long updateCity(City city) {
        CITY_DB.put(city.getId(), city);
        return city.getId();
    }

    @Override
    public Long deleteCity(Long id) {
        CITY_DB.remove(id);
        return id;
    }
}
