package com.wlc.berna;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@MapperScan("com.wlc.berna.core.mapper")
@EnableTransactionManagement(proxyTargetClass = true)
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
public class BernaApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BernaApiApplication.class, args);
	}
}
