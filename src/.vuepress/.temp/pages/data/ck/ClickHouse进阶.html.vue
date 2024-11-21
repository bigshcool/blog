<template><div><!-- more -->
<h2 id="_1-explain查看执行计划" tabindex="-1"><a class="header-anchor" href="#_1-explain查看执行计划"><span>1. EXPLAIN查看执行计划</span></a></h2>
<h3 id="_1-1-基本语法" tabindex="-1"><a class="header-anchor" href="#_1-1-基本语法"><span>1.1 基本语法</span></a></h3>
<p>EXPLAIN 用于查看查询的执行计划，帮助用户理解查询是如何被优化和执行的。这对性能调优非常有帮助。</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EXPLAIN </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[SYNTAX | PLAN | PIPELINE]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ...;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>参数说明</strong></p>
<ul>
<li>SYNTAX: 显示查询语法的解析结果，帮助验证查询是否被正确解析。</li>
<li>PLAN: 显示查询的逻辑执行计划，包含数据处理步骤和优化器如何安排这些步骤。</li>
<li>PIPELINE: 显示查询的物理执行计划，包含执行管道的细节，适合排查性能问题。</li>
</ul>
<h2 id="_2-建表优化" tabindex="-1"><a class="header-anchor" href="#_2-建表优化"><span>2. 建表优化</span></a></h2>
<h3 id="_2-1-数据类型" tabindex="-1"><a class="header-anchor" href="#_2-1-数据类型"><span>2.1 数据类型</span></a></h3>
<h4 id="_2-1-1-时间字段的类型" tabindex="-1"><a class="header-anchor" href="#_2-1-1-时间字段的类型"><span>2.1.1 时间字段的类型</span></a></h4>
<p>建表时能用数值型或者日期时间型表示的字段就不要用字符串，全String类型在以Hive为中心的数仓建设中很常见，但是ClickHouse环境不应受此影响。</p>
<p>虽然ClickHouse底层将DateTime存储为时间戳Long类型，但是不建议存储Long类型，<font color = 'red' >因为DateTime不需要经过函数转化处理，执行效率高、可读性好。</font></p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"># 推荐设计</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> TABLE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> example</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    id UInt32,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> String,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    created_at </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">DateTime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    status</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> UInt8</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) ENGINE </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> MergeTree()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">PARTITION</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> toYYYYMM(created_at)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (id, created_at);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-空值存储类型" tabindex="-1"><a class="header-anchor" href="#_2-1-2-空值存储类型"><span>2.1.2 空值存储类型</span></a></h4>
<p>官方已经指出Nullable类型总会拖累性能，因为存储Nullable列无法被索引。因此除非特殊情况，应该直接使用字段默认值表示空，或者自行指定一个业务上无意义的值(例如用-1表示没有商品ID)。</p>
<div class="hint-container tip">
<p class="hint-container-title">Nullable 类型的性能问题</p>
<ul>
<li>存储开销
<ul>
<li>Nullable 类型的额外成本：
<ul>
<li>每个 Nullable 列都会额外存储一个位图（Null Bitmap），用于标识每一行是否为空值。这增加了存储空间的占用和 I/O 成本。</li>
</ul>
</li>
<li>在查询时，ClickHouse 需要检查该位图是否存在有效值，额外的步骤会拖慢查询速度。</li>
</ul>
</li>
<li>无法被索引
<ul>
<li>Nullable 列不能直接用于索引或主键的定义。这会限制查询性能的优化，尤其是在需要依赖索引加速查询的场景中。</li>
</ul>
</li>
<li>函数处理成本
<ul>
<li>在查询中对 Nullable 列的操作（如比较或聚合）会导致 ClickHouse 额外处理 null 值逻辑。例如：</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> AVG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(column) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> example </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> column </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">IS NOT NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</div>
<h3 id="_2-2-分区和索引" tabindex="-1"><a class="header-anchor" href="#_2-2-分区和索引"><span>2.2 分区和索引</span></a></h3>
<h3 id="_2-3-表参数" tabindex="-1"><a class="header-anchor" href="#_2-3-表参数"><span>2.3 表参数</span></a></h3>
<h3 id="_2-4-写入和删除优化" tabindex="-1"><a class="header-anchor" href="#_2-4-写入和删除优化"><span>2.4 写入和删除优化</span></a></h3>
<h2 id="_3-clickhouse语法优化规则" tabindex="-1"><a class="header-anchor" href="#_3-clickhouse语法优化规则"><span>3. ClickHouse语法优化规则</span></a></h2>
<h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4"><span>4.</span></a></h2>
</div></template>


