"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[7378],{6262:(i,s)=>{s.A=(i,s)=>{const l=i.__vccOpts||i;for(const[i,e]of s)l[i]=e;return l}},3492:(i,s,l)=>{l.r(s),l.d(s,{comp:()=>t,data:()=>n});var e=l(641);const a={},t=(0,l(6262).A)(a,[["render",function(i,s){const l=(0,e.g2)("font");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Q3)(" more "),s[4]||(s[4]=(0,e.Fv)('<h2 id="_1-clickhouse入门" tabindex="-1"><a class="header-anchor" href="#_1-clickhouse入门"><span>1. ClickHouse入门</span></a></h2><p>ClickHouse 是一个由俄罗斯公司 Yandex 开发的高性能<strong>列式</strong>数据库管理系统，最初于 2016 年开源。ClickHouse 专为<strong>实时分析</strong>和<strong>OLAP</strong>（联机分析处理）场景设计，具备极高的查询速度，适合处理大规模数据，尤其是在日志、用户行为数据分析等场景中表现优异。</p><div class="hint-container tip"><p class="hint-container-title">注意</p><p>OLTP（联机事务处理）系统主要用于支持日常的业务操作，比如订单处理、银行交易等。它侧重于处理频繁的小型事务性操作，数据更新频繁且对一致性要求高。OLTP 数据库采用行式存储，设计时往往采用规范化结构，以减少数据冗余并确保事务的快速响应和高并发性。</p><p>OLAP（联机分析处理）系统主要用于复杂的分析查询，适合用于数据仓库和商业智能等场景，帮助进行趋势分析、报表生成等。OLAP 数据库通常采用列式存储和非规范化的结构来提高聚合查询效率，数据量大且更新频率较低。相比 OLTP，OLAP 更注重查询速度，而非实时一致性，因此允许一定的最终一致性来提升分析性能。</p></div><h3 id="_1-1-clickhouse特点" tabindex="-1"><a class="header-anchor" href="#_1-1-clickhouse特点"><span>1.1 ClickHouse特点</span></a></h3><h4 id="_1-1-1-列式存储" tabindex="-1"><a class="header-anchor" href="#_1-1-1-列式存储"><span>1.1.1 列式存储</span></a></h4><p>列存储将数据按列进行存储，即将同一列的数据存放在一起。在列存储中，每一列都有自己的存储空间，并且只存储该列的数值，而不是整行的数据。</p><ul><li>数据压缩率高： 由于每列存放相同类型的数据，这些数据在存储时可以采用更高效的压缩算法，从而节省存储空间。</li><li>查询速度快： 列存储适合于针对某些特定列的查询，因为它只需要加载和处理相关的列数据，比行存储更高效。特别对于大量数据进行聚合运算（如SUM、AVG）的查询，列存储通常更快。</li><li>支持高并发： 列存储在读取数据时可以仅加载需要的列，提供了更好的并发性能，更适合处理大规模数据查询</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>行存储方式将整行数据一起存放，每行独立拥有自己的存储空间，包含行内所有字段的值。</p><p>适合事务处理：行存储便于整行的读写操作，适用于频繁的增、删、改事务。</p><p>数据插入速度快：按行存储的插入操作简单，通常只需在末尾追加数据，因此插入新行效率高。此外，读取单行数据时性能更优。</p></div><h4 id="_1-1-2-dbms功能" tabindex="-1"><a class="header-anchor" href="#_1-1-2-dbms功能"><span>1.1.2 DBMS功能</span></a></h4><p>ClickHouse 被称为包含数据库管理系统（DBMS）绝大多数功能，指的是它具备了现代关系型数据库系统的大部分核心功能，尽管它是一个专注于分析型查询（OLAP）的列式数据库。</p><p>具体来说，这些功能包括但不限于：</p><ul><li><p>数据存储与管理：ClickHouse 提供数据的持久化存储，支持数据表、索引等结构来存储和组织数据。</p></li><li><p>SQL查询支持：ClickHouse 支持 SQL 语言，用户可以使用 SQL 语法进行数据查询、插入、更新和删除等操作。</p></li><li><p>事务管理：虽然 ClickHouse 主要用于分析型工作负载，不支持传统的事务（如 ACID），但它支持类似的“批量”数据写入和部分更新操作。</p></li><li><p>并发控制与锁机制：ClickHouse 支持多线程并发执行查询，能够在大规模数据集上实现高效的查询处理，同时管理并发访问。</p></li><li><p>备份与恢复：ClickHouse 提供了备份和恢复机制，可以保证数据的安全性和持久性。</p></li><li><p>用户与权限管理：支持不同用户的权限管理，可以控制谁能执行哪些操作。</p></li><li><p>索引与查询优化：支持各种索引（如主键索引）和查询优化策略，以提高查询效率。</p></li><li><p>数据压缩与存储优化：ClickHouse 提供了高效的数据压缩机制，使得大规模数据的存储和处理变得高效。</p></li><li><p>数据分区与分布式支持：ClickHouse 支持数据分区，可以将数据分散到多个节点进行存储和处理，提升查询性能和可扩展性。</p></li></ul><p>这些功能使得 ClickHouse 具备了现代 DBMS 的大部分功能，虽然它的核心定位是高性能的分析查询（OLAP），但在很多传统的 DBMS 功能上也有很好的支持。</p><h4 id="_1-1-3-多样化引擎" tabindex="-1"><a class="header-anchor" href="#_1-1-3-多样化引擎"><span>1.1.3 多样化引擎</span></a></h4><p>ClickHouse 提供了多种存储引擎，可以根据不同的使用场景选择最适合的引擎。为了方便理解，可以将这些引擎分为四大类：合并树引擎、日志引擎、接口引擎和其他引擎。下面是对这四大类引擎的介绍：</p><ul><li>合并树引擎（如 MergeTree 系列）是 ClickHouse 中最常用的引擎，适用于大规模数据存储和复杂查询。</li><li>日志引擎（如 Log 系列）适合快速写入数据，但查询能力较弱，适用于实时数据流和日志数据。</li><li>接口引擎（如 Kafka、ODBC）用于与外部系统进行集成，支持数据导入导出。</li><li>其他引擎（如 Distributed、HDFS、Graphite）针对特殊场景（如分布式存储、时序数据）提供支持。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>合并树引擎是 ClickHouse 中最重要的一类引擎，主要用于存储大规模数据，提供高效的查询性能。它基于列式存储和数据合并的思想，支持高效的查询、聚合和压缩。以下是常见的合并树引擎：</p><ul><li>MergeTree：最基础的引擎，支持数据按时间戳、ID 等字段进行排序并分区。适合大多数 OLAP 查询。</li><li>ReplacingMergeTree：用于基于主键进行数据去重，可以用于处理重复数据（如日志数据的去重）。</li><li>SummingMergeTree：适用于对同一主键的多个行进行求和操作，适合做统计分析和聚合。</li><li>AggregatingMergeTree：支持复杂的聚合操作，如计数、求和、平均值等。通常用于大规模的分析型查询。</li><li>VersionedCollapsingMergeTree：用于处理有版本控制和冲突解决的场景，适合存储历史记录和版本数据。</li></ul><p>特点：支持数据分区、索引和压缩。 适用于大规模数据存储和查询，尤其是需要进行复杂聚合的 OLAP 查询。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>日志引擎主要用于快速插入数据，但不需要复杂的查询处理。它们适合实时数据流、日志记录或对查询要求不高的场景。日志引擎的数据结构较简单，查询性能较弱，但插入速度较快。</p><ul><li>Log：基础的日志引擎，数据存储简单，适合高写入操作，但不支持复杂查询优化。</li><li>TinyLog：用于小数据集的存储，通常用于测试或小型应用场景。</li></ul><p>特点：</p><ul><li>高效的插入性能，适合日志数据和实时流数据。</li><li>不支持复杂的查询和索引，适合对查询性能要求不高的场景。</li></ul></div><h4 id="_1-1-4-高吞吐写入能力" tabindex="-1"><a class="header-anchor" href="#_1-1-4-高吞吐写入能力"><span>1.1.4 高吞吐写入能力</span></a></h4><p>ClickHouse 通过借鉴 LSM Tree 的思想，结合列式存储、分区合并和内存优化的设计，实现了高吞吐量的数据写入能力。其通过缓冲区和批量插入操作减少了磁盘写入的频率，通过后台合并和压缩优化了存储和查询性能，同时提供了高并发的写入支持，适用于大规模实时数据处理和高频数据写入的场景。</p><ul><li>日志结构化写入</li></ul><p>LSM Tree 的核心思想是将写操作首先记录到内存中，然后周期性地将这些数据批量地写入磁盘。ClickHouse 在写入数据时，先将数据写入内存中的一个“缓冲区”（称为 MemTable）。当 MemTable 达到一定大小时，数据会被刷新到磁盘上，并且写入一个有序的 SSTable（Sorted String Table）文件。</p><p>这种日志结构化的方式确保了写操作的高效性，减少了磁盘的频繁随机写入，从而大大提高了写入吞吐量。这种机制类似于 LSM Tree 中的日志写入（Write-Ahead Log）和内存层次（MemTable）组合。</p><ul><li>合并操作（Merge）</li></ul><p>LSM Tree 中的核心特性之一是数据合并（Merge）。数据初始时存储在 MemTable 和多个磁盘上的 SSTable 文件中。随着时间推移，系统会定期合并这些 SSTable 文件，以减少数据重复并优化查询性能。</p><p>在 ClickHouse 中，类似的机制存在于其 MergeTree 引擎中。ClickHouse 将数据写入磁盘后，会定期将小的磁盘数据文件合并成更大的数据文件，这个过程类似于 LSM Tree 中的 compaction（压缩）。合并操作通过将多个数据块合并为一个数据块，优化了存储空间和查询性能，同时减少了存储碎片。这些合并操作是后台异步进行的，不会阻塞写入操作。</p><ul><li>内存优化和延迟写入</li></ul><p>LSM Tree 在高吞吐量写入的另一个重要特点是延迟写入。当数据写入时，首先会存储在内存中的 MemTable 中，只有当 MemTable 满时，才会将数据刷写到磁盘。这减少了频繁的磁盘 I/O 操作，提高了写入吞吐量。</p><p>ClickHouse 采用了类似的设计。它使用内存中的缓冲区（如 Write Ahead Log (WAL) 或 MemTable）来缓存数据，直到内存中的数据达到一定量，然后才进行磁盘写入操作。这种内存缓存机制确保了高频数据的快速写入，同时通过合并操作进行异步写入，从而避免了频繁的随机写入磁盘。</p><ul><li>数据分区和写入批量化</li></ul><p>在 LSM Tree 中，数据存储是分层的，新的数据写入时首先存储在内存中的 MemTable，之后会进入磁盘的层次结构中，分成不同的存储文件。随着写入量增加，数据会被逐步合并并优化存储，减少查询时的磁盘扫描范围。</p><p>在 ClickHouse 中，数据被分为多个 分区（Partition） 和 部分（Part）。当新的数据写入时，它会被存储为一个小的部分，随着数据量的增长，这些部分会被合并成更大的文件。这类似于 LSM Tree 中的多个层次结构，在数据增量不断增加的情况下，通过分区和合并机制优化存储和查询效率。</p><ul><li>高并发写入支持</li></ul><p>LSM Tree 通过无锁的设计支持高并发写入操作，这也是它在处理大规模数据写入时的一个显著优势。ClickHouse 也采用了类似的设计，支持高并发的写入操作。特别是在 MergeTree 引擎中，它通过将数据分为多个分区和部分，在并发写入时能够有效地减少竞争和锁的开销，从而提升写入吞吐量。</p><ul><li>批量插入和高效数据加载</li></ul><p>ClickHouse 还提供了批量插入的机制，使得写入数据时能够最大化地提高吞吐量。在 LSM Tree 中，由于写入时采用批量操作，能够减少频繁的磁盘写入和合并操作，ClickHouse 也通过批量插入接口来实现这一点。这使得 ClickHouse 在处理大规模数据写入时，能够做到更高效的资源利用和更低的延迟。</p><h4 id="_1-1-5-数据分区和线程级并行" tabindex="-1"><a class="header-anchor" href="#_1-1-5-数据分区和线程级并行"><span>1.1.5 数据分区和线程级并行</span></a></h4><h5 id="数据分区" tabindex="-1"><a class="header-anchor" href="#数据分区"><span><strong>数据分区</strong></span></a></h5><p>数据分区是指将数据根据某些特征（如时间、ID 或其他字段）划分为多个独立的存储单元，这样可以提高查询和写入的效率。ClickHouse 通过将数据分成多个分区来优化存储和查询，尤其是在处理大规模数据时。</p><p>数据分区是指将数据根据某些特征（如时间、ID 或其他字段）划分为多个独立的存储单元，这样可以提高查询和写入的效率。ClickHouse 通过将数据分成多个分区来优化存储和查询，尤其是在处理大规模数据时。</p><p>如何进行数据分区：</p><ul><li><p>分区字段：在创建表时，用户可以指定一个字段作为分区字段（例如，日期字段）。ClickHouse 会根据该字段的值自动将数据分到不同的分区中。</p></li><li><p>按时间分区：对于时序数据，通常使用时间字段进行分区，例如按天、月或年进行分区。这样，查询时可以限制只扫描相关的分区，避免扫描整个表，提高查询效率。</p></li></ul><p>数据分区的优势：</p><ul><li>提高查询效率：当执行查询时，<strong>ClickHouse 可以跳过不相关的分区，从而减少磁盘读取和查询时间</strong>。这种方式特别适用于大规模数据集中的范围查询，如时间区间查询。</li><li>提高并发写入能力：<strong>由于数据被分区存储，每个分区都可以独立进行数据写入</strong>。这样，不同的写入操作可以同时进行，从而提高整体吞吐量。 更好的数据管理：通过分区，用户可以方便地对数据进行管理，如按时间删除过期数据或重组分区中的数据。</li></ul><h5 id="线程并行" tabindex="-1"><a class="header-anchor" href="#线程并行"><span><strong>线程并行</strong></span></a></h5><p>线程级并行指的是在查询执行过程中，ClickHouse 可以在多个 CPU 核心上并行处理不同的任务，从而加速查询操作，尤其是在大数据量查询时。</p><p>线程级并行的工作方式：</p><ul><li><p>查询分解：ClickHouse 会将一个查询任务分解成多个子任务，每个子任务可以在不同的线程或 CPU 核心上并行执行。这些子任务可以是数据的读取、过滤、计算等操作。</p></li><li><p>分区级并行：对于按分区存储的数据，ClickHouse 可以在每个分区内并行处理查询请求，多个线程可以同时读取不同的分区数据。</p></li><li><p>MergeTree 合并优化：在 MergeTree 引擎中，合并操作本身也可以并行执行。每个合并操作可以分配给不同的线程，在后台进行并行合并，避免了合并过程中的瓶颈。</p></li></ul><p>线程级并行的优势：</p><ul><li>提升查询性能：通过并行执行查询任务，ClickHouse 能够显著减少查询时间，特别是在大规模数据集的情况下。多个线程同时处理查询中的不同部分，可以加快结果的生成速度。</li><li>资源利用最大化：充分利用多核 CPU 的计算资源，使得数据库能够在高负载的情况下提供更好的性能。</li><li>并行插入：在写入数据时，ClickHouse 也使用并行线程来处理数据的插入，这使得它能够支持更高的写入吞吐量。例如，对于一个批量插入的请求，ClickHouse 可以将数据划分成多个块并在多个线程中并行处理。</li></ul><div class="hint-container tip"><p class="hint-container-title">IO密集与CPU密集</p><p>在大多数数据库操作中，I/O 确实通常是瓶颈，因为访问磁盘、网络等 I/O 设备的速度远低于 CPU 处理速度。然而，CPU 成为瓶颈的情况也可能发生，尤其是在处理计算密集型查询或复杂的数据处理任务时。下面我会分几个常见场景说明：</p><ol><li>I/O 密集型任务</li></ol><p>I/O 密集型任务，如读取和写入大量数据、加载数据文件、网络通信等操作，通常确实是由磁盘 I/O 和网络带宽限制的。由于硬盘和网络 I/O 的延迟通常比 CPU 的处理速度慢几个数量级，数据库会花更多时间等待 I/O 操作完成。</p><p>在这些场景中，即便是更高的 max_threads 值，也不会明显提升性能，因为大部分时间被耗费在等待 I/O 上，而非 CPU 处理。</p><p>例如，当查询主要涉及简单的过滤和聚合操作时，CPU 处理通常很快，而等待磁盘读取数据可能占据大部分时间。这种情况下，I/O 是明显的瓶颈。</p><ol start="2"><li>CPU 密集型任务</li></ol><p>尽管 I/O 可能是瓶颈，但在处理 CPU 密集型任务时，CPU 也会成为限制因素。例如：</p><p>复杂计算：在需要大量计算的情况下，比如进行复杂的数学运算、数据解码、加密/解密、聚合运算（如 SUM、AVG）、分组（GROUP BY）、排序等操作时，CPU 的计算能力会直接影响性能。</p><p>数据压缩和解压缩：列式数据库（如 ClickHouse）往往在存储数据时进行压缩，而在查询时解压。这些操作虽然节省了 I/O，但需要 CPU 解压数据，尤其是高压缩率算法，这会增加 CPU 的负担。</p><p>并行计算：在并行计算中，CPU 密集型查询（比如 JOIN、复杂嵌套查询等）通常依赖多核 CPU 的并行计算能力。这种情况下，CPU 可能会成为瓶颈，因为所有线程都在进行计算而非等待 I/O。</p></div><div class="hint-container warning"><p class="hint-container-title">那是不是我分区建的越多越好或者max-thread越大越好呢，io压力就越小呢？</p><ul><li><p>IO分区</p><ul><li><p>元数据开销：每个分区都会有自己的元数据，包括索引、存储位置等信息。当分区数量过多时，ClickHouse 需要管理大量的元数据，这会增加系统的开销。特别是在查询时，系统需要处理大量的分区元数据，可能导致性能下降。</p></li><li><p>合并和压缩操作的开销：ClickHouse 使用 MergeTree 引擎进行数据的合并和压缩。每个分区的数据都会定期进行合并（如合并小文件、删除过期数据等），如果分区数过多，合并操作的调度和资源分配会变得更复杂，导致系统的负担增加。</p></li><li><p>文件系统负载：过多的分区意味着会有更多的文件和目录需要管理，这会增加磁盘的 I/O 操作。在某些情况下，这种增加的文件系统操作可能会成为瓶颈，尤其是在文件系统没有针对大量小文件优化的情况下。</p></li></ul></li><li><p>CPU密集型</p></li></ul><p>max_threads 设置太高时，超出 CPU 核心数的线程会被迫频繁地切换，带来上下文切换的开销。这种切换会占用 CPU 时间，影响整体效率：</p><p><strong>建议</strong>：一般设置为略高于 CPU 核心数的值，或与核心数相同。对于 I/O 密集型任务，可以适当增加一些线程以利用 I/O 等待时间。</p></div>',52)),(0,e.Lk)("p",null,[(0,e.Lk)("strong",null,[s[2]||(s[2]=(0,e.eW)("但是ClickHouse有一个弊端对于单条查询使用多CPU")),(0,e.bF)(l,{color:"#00bfff"},{default:(0,e.k6)((()=>s[0]||(s[0]=[(0,e.eW)("(甚至是整机CPU)")]))),_:1}),s[3]||(s[3]=(0,e.eW)(" ,就不利于同时并发多条查询。所以对于高QPS查询业务，ClickHouse并不是强项，也许就可以推测，他其实适合放在APP层，作为宽表，")),(0,e.bF)(l,{color:"red"},{default:(0,e.k6)((()=>s[1]||(s[1]=[(0,e.eW)("同时clickhouse并不适合做JOIN操作。")]))),_:1})])]),s[5]||(s[5]=(0,e.Fv)('<h2 id="_2-clickhouse数据类型" tabindex="-1"><a class="header-anchor" href="#_2-clickhouse数据类型"><span>2. ClickHouse数据类型</span></a></h2><h3 id="_2-1基本数据类型" tabindex="-1"><a class="header-anchor" href="#_2-1基本数据类型"><span>2.1基本数据类型</span></a></h3><p>基本数据类型主要包含数值类型和字符串类型，用于存储常见的基本数据。</p><ul><li><p>数值类型</p><ul><li><p>整数</p><ul><li>Int8, Int16, Int32, Int64, Int128, Int256：有符号整数，支持 8 到 256 位大小。</li><li>UInt8, UInt16, UInt32, UInt64, UInt128, UInt256：无符号整数，支持 8 到 256 位大小。</li></ul></li><li><p>浮点数：</p><ul><li>Float32, Float64：32 位和 64 位浮点数。</li><li>Decimal：Decimal32, Decimal64,Decimal128，支持高精度的定点数，适用于货币等精确数值的存储。</li></ul></li><li><p>字符串类型</p><ul><li>String：可变长度字符串，用于存储任意字符数据。</li><li>FixedString(N)：固定长度字符串，适用于长度一致的字符串存储，提高存储效率。</li></ul></li></ul></li><li><p>日期和时间类型</p><ul><li>Date：存储日期（无时间），精度为天，范围从 1970-01-01 到 2149-06-06。</li><li>Date32：与 Date 相似，但范围从 -2149-06-06 到 2149-06-06。</li><li>DateTime：存储日期和时间，精度为秒，默认采用 UTC 时区。</li><li>DateTime64：支持亚秒级的精度，最多支持到微秒（小数点后 6 位）。</li><li>Time：存储时间，ClickHouse 中不直接支持独立的时间类型，可以通过 DateTime 或 DateTime64 达到相似的效果。</li></ul></li><li><p>复合数据类型</p><ul><li>Array(T)：数组类型，可存储任意数量的相同数据类型元素（如 Array(Int32) 表示一个整型数组）。</li><li>Tuple(T1, T2, …, Tn)：元组类型，可存储不同数据类型的多个元素，例如 Tuple(Int32, String)。</li><li>Map(KeyType, ValueType)：键值对类型，适合存储字典格式数据。</li><li>Nested：嵌套类型，是结构化数据的高级表示形式，类似于多维数组，便于对嵌套数据结构进行建模和分析。</li><li>Enum8 / Enum16：枚举类型，Enum8 和 Enum16 分别支持最多 256 和 65536 个枚举值，可以将字符串映射为数值类型存储。</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> orders</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    order_id UInt64,</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    status</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Enum8(</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &#39;pending&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &#39;processed&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &#39;shipped&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &#39;delivered&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &#39;canceled&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    )</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) ENGINE </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> MergeTree()</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> order_id;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>专用数据类型 这些数据类型通常用于特殊用途和优化查询性能。</p><ul><li>UUID：存储唯一标识符，适合用于存储 UUID 格式的数据。</li><li>IPv4 / IPv6：专门存储 IPv4 或 IPv6 地址的类型，便于对网络数据进行查询和分析。</li><li>LowCardinality(T)：低基数数据类型，适合存储基数较小的字符串或整数，可以节省存储空间，提升查询性能。</li><li>Nullable(T)：可空类型，允许字段存储 NULL 值，例如 Nullable(Int32) 表示可以存储 NULL 或 Int32 类型值。<strong>使用Nullable会对系统性能产生影响，期望你采取业务上没有业务意义的数据进行存储</strong></li><li>AggregateFunction：支持存储聚合函数的中间结果，用于复杂数据聚合操作，如 AggregateFunction(avg, UInt64) 表示计算 UInt64 类型的平均值。</li></ul></li><li><p>实验性或特定用途的数据类型</p><ul><li>Object：用于存储未解析的数据，例如 JSON 或 XML 格式的数据，目前在 ClickHouse 中为实验性数据类型。</li><li>Interval：用于时间间隔操作（如 INTERVAL DAY），可以与日期和时间数据类型进行操作。</li><li>UUID_v4（实验性）和 UUID_v5（实验性）：为支持更灵活的 UUID 数据操作而设计。</li></ul></li></ul><p>ClickHouse 提供了多种字段类型扩展，例如 Array、Tuple 等结合基本数据类型，使得字段具有更多结构化和多维的数据表现形式。例如，使用 Array(Tuple(String, Int32)) 可以定义一个包含元组的数组，每个元组包含字符串和整数数据。</p><h2 id="_3-表引擎的作用" tabindex="-1"><a class="header-anchor" href="#_3-表引擎的作用"><span>3. 表引擎的作用</span></a></h2><p>表引擎（即表的类型）决定了：数据的存储方式和位置，写到哪里以及从哪里读取数据</p><ul><li>支持哪些查询以及如何支持。</li><li>并发数据访问。</li><li>索引的使用（如果存在）。</li><li>是否可以执行多线程请求。</li><li>数据复制参数。</li></ul><p><strong>创建表的时候大小写敏感</strong></p><h3 id="_3-1-日志引擎" tabindex="-1"><a class="header-anchor" href="#_3-1-日志引擎"><span>3.1 日志引擎</span></a></h3><h4 id="_3-1-1-tinylog" tabindex="-1"><a class="header-anchor" href="#_3-1-1-tinylog"><span>3.1.1 TinyLog</span></a></h4><p>最简单的表引擎，用于将数据存储在磁盘上。每列都存储在单独的压缩文件中。写入时，数据将附加到文件末尾。</p><p>并发数据访问不受任何限制：</p><ul><li>如果同时从表中读取并在不同的查询中写入，则读取操作将抛出异常</li><li>如果同时写入多个查询中的表，则数据将被破坏。</li></ul><p>这种表引擎的典型用法是 write-once：首先只写入一次数据，然后根据需要多次读取。查询在单个流中执行。换句话说，此引擎适用于相对较小的表（建议最多1,000,000行）。如果您有许多小表，则使用此表引擎是适合的，因为它比Log引擎更简单（需要打开的文件更少）。当您拥有大量小表时，可能会导致性能低下，但在可能已经在其它 DBMS 时使用过，则您可能会发现切换使用 TinyLog 类型的表更容易。不支持索引。</p><h4 id="_3-1-2-log" tabindex="-1"><a class="header-anchor" href="#_3-1-2-log"><span>3.1.2 LOG</span></a></h4><p>Log 与 TinyLog 的不同之处在于，«标记» 的小文件与列文件存在一起。这些标记写在每个数据块上，并且包含偏移量，这些偏移量指示从哪里开始读取文件以便跳过指定的行数。这使得可以在多个线程中读取表数据。对于并发数据访问，可以同时执行读取操作，而写入操作则阻塞读取和其它写入。Log引擎不支持索引。同样，如果写入表失败，则该表将被破坏，并且从该表读取将返回错误。Log引擎适用于临时数据，write-once 表以及测试或演示目的。</p><h3 id="_3-2-合并树引擎-mergetree" tabindex="-1"><a class="header-anchor" href="#_3-2-合并树引擎-mergetree"><span>3.2 <strong>合并树引擎(MergeTree)</strong></span></a></h3><p>Clickhouse 中最强大的表引擎当属 MergeTree （合并树）引擎及该系列（*MergeTree）中的其他引擎。</p><p>MergeTree 系列的引擎被设计用于插入极大量的数据到一张表当中。数据可以以数据片段的形式一个接着一个的快速写入，数据片段在后台按照一定的规则进行合并。相比在插入时不断修改（重写）已存储的数据，这种策略会高效很多。</p><p>主要特点:</p><ul><li>存储的数据按主键排序。</li></ul><p>这使得您能够创建一个小型的稀疏索引来加快数据检索。</p><ul><li>如果指定了 分区键 的话，可以使用分区。</li></ul><p>在相同数据集和相同结果集的情况下 ClickHouse 中某些带分区的操作会比普通操作更快。查询中指定了分区键时 ClickHouse 会自动截取分区数据。这也有效增加了查询性能。</p><ul><li>支持数据副本。</li></ul><p>ReplicatedMergeTree 系列的表提供了数据副本功能。</p><h4 id="_3-2-1-mergetree概要" tabindex="-1"><a class="header-anchor" href="#_3-2-1-mergetree概要"><span>3.2.1 MergeTree概要</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> orders</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    order_id UInt64,                </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 订单ID</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    user_id UInt32,                 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 用户ID</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    order_date </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,                </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 订单日期</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    total_amount </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Decimal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),    </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 订单总金额</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    status</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> String,                  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 订单状态</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    created_at </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DateTime</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">             -- 创建时间</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ENGINE </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> MergeTree() </span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">PARTITION</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> toYYYYMM(order_date)    </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 按订单日期的年月进行分区</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">PRIMARY KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (order_id)               </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 订单ID作为主键</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (order_date, created_at);   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 按订单日期和创建时间排序</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>PARTITION BY toYYYYMM(order_date)：将数据按订单日期的年月进行分区。这样每个月的数据会被存储在一个独立的分区中，有利于提高查询性能，尤其是针对某个月的订单查询。</p></li><li><p>PRIMARY KEY (order_id)：使用 order_id 作为主键，确保每个订单都是唯一的，并加速基于订单ID的查询。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">PRIMARY KEY在ck里面能保证唯一吗？</p><p>在 ClickHouse 中，PRIMARY KEY 并不像传统的关系型数据库那样能够严格保证数据的唯一性。它更多的是用于定义数据的排序顺序和加速查询（<strong>索引</strong>），而 <strong>ClickHouse 并不会对 PRIMARY KEY 做强制的唯一性检查</strong>。</p></div><ul><li>ORDER BY (order_date, created_at)：数据根据订单日期和创建时间进行排序。这有助于加速基于时间范围的查询，比如查询某段时间内的订单数据。</li></ul><div class="hint-container tip"><p class="hint-container-title">PRIMARY KEY 和 ORDER BY 的区别</p><p>PRIMARY KEY：</p><p>影响稀疏索引：PRIMARY KEY 会影响 稀疏索引 的构建，ClickHouse 会为每个数据块存储 PRIMARY KEY 列的部分值，以加速查找操作。每个数据块会保存该列的某些索引值，并指向包含这些值的具体位置。索引是基于数据块的级别，而不是单个行级别。每个数据块内只存储一部分的索引数据。</p><p>ORDER BY： 影响数据的物理顺序：ORDER BY 决定了数据如何在磁盘 上按顺序存储，这不仅影响磁盘的存储布局，还影响查询时的读取效率。数据在存储时是按照 ORDER BY 的列排序的。在查询时，ClickHouse可以利用数据的物理顺序进行范围查询（如 BETWEEN、&gt;、&lt; 等）时提高效率，因为数据已经按 ORDER BY 列的顺序存储。</p></div><h4 id="_3-2-2-详解partition-by" tabindex="-1"><a class="header-anchor" href="#_3-2-2-详解partition-by"><span>3.2.2 详解PARTITION BY</span></a></h4><p>在 ClickHouse 中，表数据会按照指定的 PARTITION BY 列值进行分区，每个分区对应一个物理文件。PARTITION BY 列并不会影响数据的排序顺序（这由 ORDER BY 决定），而是决定了数据如何在磁盘上被组织成不同的分区，从而达到优化查询速度的效果。</p><ul><li>如果不填写，就会共用all分区</li><li>分区目录 MergeTree是以列文件 + 索引文件 + 表定义文件组成，但是如果设定了分区那么这些文件就会保存到不同的分区目录中去。</li><li>并行 分区后，面对涉及跨分区的查询统计，ClickHouse会以分区为单位并行处理</li><li>数据写入与分区合并</li></ul>',36))])}]]),n=JSON.parse('{"path":"/data/ck/ClickHouse%E5%9F%BA%E7%A1%80.html","title":"ClickHouse基础","lang":"zh-CN","frontmatter":{"title":"ClickHouse基础","cover":"/assets/images/cover1.jpg","icon":"file","order":1,"author":"CodeLong","date":"2024-10-23T00:00:00.000Z","category":["Data","ClickHouse"],"tag":["基础","使用指南"],"sticky":true,"star":true,"footer":"这是测试显示的页脚","copyright":"无版权","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/data/ck/ClickHouse%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"ClickHouse基础"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-13T02:06:10.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mister-hope.github.io/blog/assets/images/cover1.jpg"}],["meta",{"name":"twitter:image:alt","content":"ClickHouse基础"}],["meta",{"property":"article:author","content":"CodeLong"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:tag","content":"使用指南"}],["meta",{"property":"article:published_time","content":"2024-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-13T02:06:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ClickHouse基础\\",\\"image\\":[\\"https://mister-hope.github.io/blog/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2024-10-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-13T02:06:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CodeLong\\"}]}"]]},"headers":[{"level":2,"title":"1. ClickHouse入门","slug":"_1-clickhouse入门","link":"#_1-clickhouse入门","children":[{"level":3,"title":"1.1 ClickHouse特点","slug":"_1-1-clickhouse特点","link":"#_1-1-clickhouse特点","children":[]}]},{"level":2,"title":"2. ClickHouse数据类型","slug":"_2-clickhouse数据类型","link":"#_2-clickhouse数据类型","children":[{"level":3,"title":"2.1基本数据类型","slug":"_2-1基本数据类型","link":"#_2-1基本数据类型","children":[]}]},{"level":2,"title":"3. 表引擎的作用","slug":"_3-表引擎的作用","link":"#_3-表引擎的作用","children":[{"level":3,"title":"3.1 日志引擎","slug":"_3-1-日志引擎","link":"#_3-1-日志引擎","children":[]},{"level":3,"title":"3.2 合并树引擎(MergeTree)","slug":"_3-2-合并树引擎-mergetree","link":"#_3-2-合并树引擎-mergetree","children":[]}]}],"git":{"createdTime":1731463570000,"updatedTime":1731463570000,"contributors":[{"name":"bigshcool","email":"990194923@qq.com","commits":1}]},"readingTime":{"minutes":24.86,"words":7459},"filePathRelative":"data/ck/ClickHouse基础.md","localizedDate":"2024年10月23日","excerpt":""}')}}]);