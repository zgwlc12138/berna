package com.wlc.berna.core.jdbc;

import com.dangdang.ddframe.rdb.sharding.api.ShardingValue;
import com.dangdang.ddframe.rdb.sharding.api.strategy.table.SingleKeyTableShardingAlgorithm;
import com.google.common.collect.Range;

import java.util.Collection;
import java.util.LinkedHashSet;

/**
 * @Author: zhanggong
 * @Description: 分表策略的基本实现
 * @Date: Create in 20:11 2018/7/25
 * @Modified by:
 */
public class ModuloTableShardingAlgorithm implements SingleKeyTableShardingAlgorithm<String> {

    @Override
    public String doEqualSharding(Collection<String> tableNames, ShardingValue<String> shardingValue) {
        Long value=Long.valueOf(shardingValue.getValue())% 2;
        for (String each : tableNames) {
            if (each.endsWith(value.toString() + "")) {
                return each;
            }
        }
        throw new IllegalArgumentException();
    }

    @Override
    public Collection<String> doInSharding(Collection<String> tableNames, ShardingValue<String> shardingValue) {
        Collection<String> result = new LinkedHashSet<>(tableNames.size());
        for (String value : shardingValue.getValues()) {
            Long val=Long.valueOf(value) % 2;
            for (String tableName : tableNames) {
                if (tableName.endsWith(val.toString() + "")) {
                    result.add(tableName);
                }
            }
        }
        return result;
    }

    @Override
    public Collection<String> doBetweenSharding(Collection<String> tableNames, ShardingValue<String> shardingValue) {
        Collection<String> result = new LinkedHashSet<>(tableNames.size());
        Range<String> range = (Range<String>) shardingValue.getValueRange();
        for (Long i = Long.valueOf(range.lowerEndpoint()); i <= Long.valueOf(range.upperEndpoint()); i++) {
            Long val=i % 2;
            for (String each : tableNames) {
                if (each.endsWith(val.toString() + "")) {
                    result.add(each);
                }
            }
        }
        return result;
    }
}
