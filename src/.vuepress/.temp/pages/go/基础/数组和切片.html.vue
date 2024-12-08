<template><div><!-- more -->
<h1 id="_1-数组简介" tabindex="-1"><a class="header-anchor" href="#_1-数组简介"><span>1.数组简介</span></a></h1>
<p>Go 语言提供了数组类型的数据结构，数组是一种具有固定长度的序列，所有元素都必须是相同类型的。这种类型可以是基本类型，例如整型、浮点型、字符串，或者自定义类型。</p>
<p>数组的基本特点包括：</p>
<ul>
<li>固定长度：</li>
</ul>
<p>数组在定义时必须指定长度，且一旦定义，长度不可更改。</p>
<ul>
<li>元素访问：</li>
</ul>
<p>数组元素可以通过索引（位置）进行读取和修改，索引从 0 开始。例如，第一个元素的索引为 0，第二个元素的索引为 1，依此类推。因此，数组的下标范围是从 0 到长度减 1。</p>
<ul>
<li>内存分配：</li>
</ul>
<p>数组在内存中是连续存储的，这使得随机访问效率很高。由于数组的大小在编译时就确定，因此编译器可以优化内存分配。</p>
<ul>
<li>值类型：</li>
</ul>
<p>在 Go 中，数组是值类型。这意味着当数组作为参数传递给函数时，实际是传递的数组的副本，而不是引用。这可能导致性能问题，尤其是在数组较大时。</p>
<div class="language-package line-numbers-mode" data-highlighter="shiki" data-ext="package" data-title="package" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>import "fmt"</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    // 定义一个长度为 5 的整型数组</span></span>
<span class="line"><span>    var arr [5]int</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 使用索引赋值</span></span>
<span class="line"><span>    arr[0] = 10</span></span>
<span class="line"><span>    arr[1] = 20</span></span>
<span class="line"><span>    arr[2] = 30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 打印数组元素</span></span>
<span class="line"><span>    for i := 0; i &#x3C; len(arr); i++ {</span></span>
<span class="line"><span>        fmt.Printf("Element at index %d: %d\n", i, arr[i])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-数组声明与初始化" tabindex="-1"><a class="header-anchor" href="#_2-数组声明与初始化"><span>2. 数组声明与初始化</span></a></h1>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>var arr [5]int</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>声明（Declaration）
<ul>
<li>声明是指告诉计算机你要创建一个变量，但不一定给它赋值。</li>
<li>在这个例子中，var arr [5]int 是声明了一个名为 arr 的数组，长度为 5，类型为整型（int）。</li>
<li>这行代码只是告诉计算机：“我要一个可以存放 5 个整数的数组。”此时，数组里的元素都是默认值（整型的默认值是 0）。</li>
</ul>
</li>
<li>初始化（Initialization）
<ul>
<li>初始化是指在声明的同时给变量赋一个初始值。</li>
<li>如果我们要初始化这个数组，可以这样做：</li>
</ul>
</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>arr := [5]int{10, 20, 30, 40, 50}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在这个例子中，我们在声明的同时给数组 arr 赋了具体的值,数组现在包含了 10、20、30、40 和 50。这样我们就不再只有一个空的数组，而是一个具体的、已经填满了值的数组。</p>
<h1 id="_3-初始化的方式" tabindex="-1"><a class="header-anchor" href="#_3-初始化的方式"><span>3. 初始化的方式</span></a></h1>
<ul>
<li>显式</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>var arr1 = [5]int{1, 2, 3, 4, 5}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>省略长度</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>arr2 := [...]int{10, 20, 30, 40, 50}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>部分初始化</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>arr3 := [5]int{1: 100, 3: 300} // arr3[1] = 100, arr3[3] = 300, 其他位置为 0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>使用循环初始化</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>var arr4 [5]int</span></span>
<span class="line"><span>for i := 0; i &#x3C; len(arr4); i++ {</span></span>
<span class="line"><span>    arr4[i] = i * 10 // arr4 = {0, 10, 20, 30, 40}</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4" tabindex="-1"><a class="header-anchor" href="#_4"><span>4.</span></a></h1>
</div></template>


