package com.wlc.berna.web.interceptor;
import com.wlc.berna.web.handler.ContextInterceptorHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 自定义拦截器配置类
 */
@Configuration
public class MyWebAppConfigurer extends WebMvcConfigurerAdapter {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new ContextInterceptorHandler()).addPathPatterns("/**");
        super.addInterceptors(registry);
    }
}
