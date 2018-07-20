package com.wlc.berna.test.activemq;

import javax.jms.Destination;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;
/**
 * @Author: zhanggong
 * @Description:
 * @Date: Create in 20:41 2018/7/9
 * @Modified by:
 */
@Component
public class Producer {
    private final static Logger logger = LoggerFactory.getLogger(Producer.class);

    @Autowired
    private JmsTemplate jmsTemplate;

    /**
     * 发送消息，estination是发送到的队列，message是待发送的消息
     *
     * @param destination
     * @param message
     */
    public void sendMessage(Destination destination, final String message) {
        logger.info(String.valueOf(jmsTemplate.getDeliveryMode()));
        jmsTemplate.convertAndSend(destination, message);
    }

    /**
     * 发送消息，message是待发送的消息
     *
     * @param message
     */
    public void sendMessage(final String message) {
        logger.info(String.valueOf(jmsTemplate.getDeliveryMode()));
        jmsTemplate.convertAndSend("sample.queue", message);
    }
    public void sendTopicMessage(final String message) {
        logger.info(String.valueOf(jmsTemplate.getDeliveryMode()));
        jmsTemplate.convertAndSend("sample.topic", message);
    }
}

