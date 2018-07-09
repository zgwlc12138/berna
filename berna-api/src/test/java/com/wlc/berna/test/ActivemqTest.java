package com.wlc.berna.test;
import com.wlc.berna.BernaApiApplication;
import com.wlc.berna.test.activemq.Producer;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 20:42 2018/7/9
 * @Modified by:
 */

@RunWith(SpringRunner.class)
@SpringBootTest(classes = BernaApiApplication.class)
public class ActivemqTest {

    @Autowired
    private Producer producer;

    @Test
    public void testActivemq() {
        producer.sendMessage("look this is a message==zycc==");
        while (true) {
        }
    }
}