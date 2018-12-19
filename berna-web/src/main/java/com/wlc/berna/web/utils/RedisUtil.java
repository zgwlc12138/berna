package com.wlc.berna.web.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

/**
 * @Author: zhanggong
 * @Description: redis工具类
 * @Date: Create in 10:56 2018/9/5
 * @Modified by:
 */
@Service
public class RedisUtil {
    private static final Logger logger=LoggerFactory.getLogger(RedisUtil.class);
    @Autowired
    private RedisTemplate redisTemplate;

    /**
     * redis加锁
     * @param key
     * @param expireSeconds
     * @return
     */
    public boolean lock(final String key, final int expireSeconds) {
        return key != null && !"".equals(key.trim()) ? (Boolean)this.redisTemplate.execute((RedisConnection connection)->{
            Boolean nx = connection.setNX(key.getBytes(), String.valueOf(System.currentTimeMillis()).getBytes());
            if (!nx) {
                try {
                    Thread.sleep(100L);
                } catch (InterruptedException e) {
                    logger.error("redis加锁异常：",e);
                }
                nx = connection.setNX(key.getBytes(), String.valueOf(System.currentTimeMillis()).getBytes());
            }
            if (nx) {
                connection.expire(key.getBytes(), (long)expireSeconds);
            }
            return nx;
        }):false;
    }

    /**
     * redis加锁
     * @param key
     * @return
     */
    public boolean lock(String key) {
        return this.lock(key, 300);
    }

    public void setValue(String key,Object value,int seconds){
        redisTemplate.opsForValue().set(key,value,seconds, TimeUnit.SECONDS);
    }

    public Object getValue(String key){
        return redisTemplate.opsForValue().get(key);
    }

    /**
     * redis解锁
     * @param key
     * @return
     */
    public boolean unLock(String key) {
        if (key != null && !"".equals(key.trim())) {
            try {
                this.redisTemplate.delete(key);
                return true;
            } catch (Exception e) {
                logger.error("redis解锁异常：",e);
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * redis自增
     * @param key
     * @return
     */
    public Long incr(final String key) {
        return key != null && !"".equals(key.trim()) ? (Long)this.redisTemplate.execute((RedisConnection connection)->{
            return connection.incr(key.getBytes());
        }):null;
    }

    /**
     * redis自增
     * @param key
     * @param step
     * @return
     */
    public Long incrBy(String key, int step) {
        return key != null && !"".equals(key.trim()) ? this.redisTemplate.opsForValue().increment(key, (long)step) : null;
    }

}
