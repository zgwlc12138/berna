package com.wlc.berna.test;
import com.wlc.berna.BernaApiApplication;
import com.wlc.berna.test.activemq.Producer;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 20:42 2018/7/9
 * @Modified by:
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = BernaApiApplication.class)
@WebAppConfiguration
public class ActivemqTest {

    @Autowired
    private Producer producer;

    @Test
    public void testActivemq() {
        producer.sendMessage("张弓-张弓-张弓");
        while (true) {
        }
    }
    @Test
    public void testTopic() {
        producer.sendTopicMessage("zhnaggggggggggggggggggggg");
        while (true) {
        }
    }
}