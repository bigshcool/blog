---
# 这是文章的标题
title: ClickHouse进阶
# 你可以自定义封面图片
cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 2
# 设置作者
author: CodeLong
# 设置写作时间
date: 2024-10-23
# 一个页面可以有多个分类
category:
  - Data
  - ClickHouse
# 一个页面可以有多个标签
tag:
  - 基础
  - 使用指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在星标文章中
star: true
# 你可以自定义页脚
footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: 无版权
---

<!-- more -->
## 1. EXPLAIN查看执行计划
### 1.1 基本语法
EXPLAIN 用于查看查询的执行计划，帮助用户理解查询是如何被优化和执行的。这对性能调优非常有帮助。

``` sql 
EXPLAIN [SYNTAX | PLAN | PIPELINE] SELECT ...;
```

**参数说明**
- SYNTAX: 显示查询语法的解析结果，帮助验证查询是否被正确解析。
- PLAN: 显示查询的逻辑执行计划，包含数据处理步骤和优化器如何安排这些步骤。
- PIPELINE: 显示查询的物理执行计划，包含执行管道的细节，适合排查性能问题。
## 2. 建表优化
### 2.1 数据类型
#### 2.1.1 时间字段的类型
建表时能用数值型或者日期时间型表示的字段就不要用字符串，全String类型在以Hive为中心的数仓建设中很常见，但是ClickHouse环境不应受此影响。

虽然ClickHouse底层将DateTime存储为时间戳Long类型，但是不建议存储Long类型，<font color = 'red' >因为DateTime不需要经过函数转化处理，执行效率高、可读性好。</font>
``` sql
# 推荐设计

CREATE TABLE example (
    id UInt32,
    name String,
    created_at DateTime,
    status UInt8
) ENGINE = MergeTree()
PARTITION BY toYYYYMM(created_at)
ORDER BY (id, created_at);

```
#### 2.1.2 空值存储类型
官方已经指出Nullable类型总会拖累性能，因为存储Nullable列无法被索引。因此除非特殊情况，应该直接使用字段默认值表示空，或者自行指定一个业务上无意义的值(例如用-1表示没有商品ID)。
::: tip Nullable 类型的性能问题
- 存储开销
  - Nullable 类型的额外成本：
    - 每个 Nullable 列都会额外存储一个位图（Null Bitmap），用于标识每一行是否为空值。这增加了存储空间的占用和 I/O 成本。
  - 在查询时，ClickHouse 需要检查该位图是否存在有效值，额外的步骤会拖慢查询速度。
- 无法被索引
  - Nullable 列不能直接用于索引或主键的定义。这会限制查询性能的优化，尤其是在需要依赖索引加速查询的场景中。
- 函数处理成本
  - 在查询中对 Nullable 列的操作（如比较或聚合）会导致 ClickHouse 额外处理 null 值逻辑。例如：
  ``` sql
  SELECT AVG(column) FROM example WHERE column IS NOT NULL;
  ```

:::
### 2.2 分区和索引
### 2.3 表参数
### 2.4 写入和删除优化
## 3. ClickHouse语法优化规则
## 4. 
