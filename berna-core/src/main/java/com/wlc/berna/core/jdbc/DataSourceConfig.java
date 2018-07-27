package com.wlc.berna.core.jdbc;

import com.alibaba.druid.pool.DruidDataSource;
import com.dangdang.ddframe.rdb.sharding.api.ShardingDataSourceFactory;
import com.dangdang.ddframe.rdb.sharding.api.rule.BindingTableRule;
import com.dangdang.ddframe.rdb.sharding.api.rule.DataSourceRule;
import com.dangdang.ddframe.rdb.sharding.api.rule.ShardingRule;
import com.dangdang.ddframe.rdb.sharding.api.rule.TableRule;
import com.dangdang.ddframe.rdb.sharding.api.strategy.database.DatabaseShardingStrategy;
import com.dangdang.ddframe.rdb.sharding.api.strategy.table.TableShardingStrategy;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.*;

/**
 * @Author: zhanggong
 * @Description: 数据源及分表配置
 * @Date: Create in 20:11 2018/7/25
 * @Modified by:
 */
@Configuration
@MapperScan(basePackages = "com.wlc.berna.core.mapper", sqlSessionTemplateRef  = "sqlSessionTemplate")
public class DataSourceConfig {
    /**
     * 配置数据源0，数据源的名称最好要有一定的规则，方便配置分库的计算规则
     *
     * @return
     */
    @Bean(initMethod = "init",destroyMethod = "close",name = "dataSource0")
    @ConfigurationProperties(prefix = "spring.datasource.berna1")
    public DataSource dataSource0() {
        return new DruidDataSource();
    }

    /**
     * 配置数据源1，数据源的名称最好要有一定的规则，方便配置分库的计算规则
     *
     * @return
     */
    @Bean(initMethod = "init",destroyMethod = "close",name = "dataSource1")
    @ConfigurationProperties(prefix = "spring.datasource.berna2")
    public DataSource dataSource1() {
        return new DruidDataSource();
    }

    /**
     * 配置数据源规则，即将多个数据源交给sharding-jdbc管理，并且可以设置默认的数据源，
     * 当表没有配置分库规则时会使用默认的数据源
     *
     * @param dataSource0
     * @param dataSource1
     * @return
     */
    @Bean
    public DataSourceRule dataSourceRule(@Qualifier("dataSource0") DataSource dataSource0,
                                         @Qualifier("dataSource1") DataSource dataSource1) {
        //设置分库映射
        Map<String, DataSource> dataSourceMap = new HashMap<>(2);
        dataSourceMap.put("dataSource0", dataSource0);
        dataSourceMap.put("dataSource1", dataSource1);
        //设置默认库，两个库以上时必须设置默认库。默认库的数据源名称必须是dataSourceMap的key之一
        return new DataSourceRule(dataSourceMap, "dataSource0");
    }

    /**
     * 配置数据源策略和表策略，具体策略需要自己实现
     *
     * @param dataSourceRule
     * @return
     */
    @Bean(name = "shardingRule")
    public ShardingRule shardingRule(DataSourceRule dataSourceRule) {
        //具体分库分表策略
        TableRule orderTableRule = TableRule.builder("sample_log")
                .actualTables(Arrays.asList("sample_log_0", "sample_log_1"))
                .tableShardingStrategy(new TableShardingStrategy("sample_id", new ModuloTableShardingAlgorithm()))
                .dataSourceRule(dataSourceRule)
                .build();




        //绑定表策略，在查询时会使用主表策略计算路由的数据源，因此需要约定绑定表策略的表的规则需要一致，可以一定程度提高效率
        List<BindingTableRule> bindingTableRules = new ArrayList<>();
        bindingTableRules.add(new BindingTableRule(Arrays.asList(orderTableRule)));
        return ShardingRule.builder()
                .dataSourceRule(dataSourceRule)
                .tableRules(Arrays.asList(orderTableRule))
                .bindingTableRules(bindingTableRules)
                .databaseShardingStrategy(new DatabaseShardingStrategy("user_unicode", new ModuloDatabaseShardingAlgorithm()))
                .tableShardingStrategy(new TableShardingStrategy("sample_id", new ModuloTableShardingAlgorithm()))
                .build();
    }

    /**
     * 创建sharding-jdbc的数据源DataSource，MybatisAutoConfiguration会使用此数据源
     *
     * @param shardingRule
     * @return
     * @throws SQLException
     */
    @Bean(name = "dataSource")
    public DataSource shardingDataSource(@Qualifier("shardingRule")ShardingRule shardingRule) throws SQLException {
        return ShardingDataSourceFactory.createDataSource(shardingRule);
    }

    /**
     * 需要手动配置事务管理器
     *
     * @param dataSource
     * @return
     */
    @Bean
    public DataSourceTransactionManager transactitonManager(@Qualifier("dataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean(name = "sqlSessionFactory")
    @Primary
    public SqlSessionFactory sqlSessionFactory(@Qualifier("dataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mapping/*.xml"));
        return bean.getObject();
    }

    @Bean(name = "sqlSessionTemplate")
    @Primary
    public SqlSessionTemplate sqlSessionTemplate(@Qualifier("sqlSessionFactory") SqlSessionFactory sqlSessionFactory) throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory);
    }

}