package com.wlc.berna.core.jdbc;

import com.dangdang.ddframe.rdb.sharding.api.ShardingValue;
import com.dangdang.ddframe.rdb.sharding.api.strategy.database.SingleKeyDatabaseShardingAlgorithm;
import com.google.common.collect.Range;

import java.util.Collection;
import java.util.LinkedHashSet;

/**
 * @Author: zhanggong
 * @Description: 分库策略的简单实现
 * @Date: Create in 20:11 2018/7/25
 * @Modified by:
 */
public class ModuloDatabaseShardingAlgorithm implements SingleKeyDatabaseShardingAlgorithm<String> {

    @Override
    public String doEqualSharding(Collection<String> databaseNames, ShardingValue<String> shardingValue) {
        Long value=Long.valueOf(shardingValue.getValue())% 2;
        for (String each : databaseNames) {
            if (each.endsWith(value.toString()+ "")) {
                return each;
            }
        }
        throw new IllegalArgumentException();
    }

    @Override
    public Collection<String> doInSharding(Collection<String> databaseNames, ShardingValue<String> shardingValue) {
        Collection<String> result = new LinkedHashSet<>(databaseNames.size());
        for (String value : shardingValue.getValues()) {
            Long val=Long.valueOf(value) % 2;
            for (String tableName : databaseNames) {
                if (tableName.endsWith(val.toString() + "")) {
                    result.add(tableName);
                }
            }
        }
        return result;
    }

    @Override
    public Collection<String> doBetweenSharding(Collection<String> databaseNames, ShardingValue<String> shardingValue) {
        Collection<String> result = new LinkedHashSet<>(databaseNames.size());
        Range<String> range = shardingValue.getValueRange();
        for (Long i = Long.valueOf(range.lowerEndpoint()); i <= Long.valueOf(range.upperEndpoint()); i++) {
            Long val=i % 2;
            for (String each : databaseNames) {
                if (each.endsWith(val.toString() + "")) {
                    result.add(each);
                }
            }
        }
        return result;
    }
}