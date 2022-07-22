import{_ as s,c as a,o as n,a as l}from"./app.3d079396.js";const C=JSON.parse('{"title":"\u9759\u6001\u4F5C\u7528\u57DF\u548C\u52A8\u6001\u4F5C\u7528\u57DF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u51B4\u7FBD\u5927\u4F6C\u535A\u5BA2\u7684\u6DF1\u5165\u7CFB\u5217","slug":"\u51B4\u7FBD\u5927\u4F6C\u535A\u5BA2\u7684\u6DF1\u5165\u7CFB\u5217"}],"relativePath":"\u524D\u7AEF\u57FA\u7840/JavaScript/02-\u8BCD\u6CD5\u4F5C\u7528\u57DF.md","lastUpdated":1658457636000}'),p={name:"\u524D\u7AEF\u57FA\u7840/JavaScript/02-\u8BCD\u6CD5\u4F5C\u7528\u57DF.md"},o=l(`<h1 id="\u9759\u6001\u4F5C\u7528\u57DF\u548C\u52A8\u6001\u4F5C\u7528\u57DF" tabindex="-1">\u9759\u6001\u4F5C\u7528\u57DF\u548C\u52A8\u6001\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u9759\u6001\u4F5C\u7528\u57DF\u548C\u52A8\u6001\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h1><h2 id="\u51B4\u7FBD\u5927\u4F6C\u535A\u5BA2\u7684\u6DF1\u5165\u7CFB\u5217" tabindex="-1">\u51B4\u7FBD\u5927\u4F6C\u535A\u5BA2\u7684\u6DF1\u5165\u7CFB\u5217 <a class="header-anchor" href="#\u51B4\u7FBD\u5927\u4F6C\u535A\u5BA2\u7684\u6DF1\u5165\u7CFB\u5217" aria-hidden="true">#</a></h2><p><a href="https://github.com/mqyqingfeng/Blog/issues/3" target="_blank" rel="noopener noreferrer">JavaScript \u6DF1\u5165\u4E4B\u8BCD\u6CD5\u4F5C\u7528\u57DF\u548C\u52A8\u6001\u4F5C\u7528\u57DF</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4F5C\u7528\u57DF\u6307\u5F53\u524D\u6267\u884C\u4E0A\u4E0B\u6587\u5BF9\u53D8\u91CF\u7684\u8BBF\u95EE\u6743\u9650\u3002\u4F8B\u5982\u5168\u5C40\u53D8\u91CF <code>foo</code>\uFF0C\u5728\u5168\u5C40\u4E0B\u4EFB\u610F\u4E00\u4E2A\u5B50\u4F5C\u7528\u57DF\u90FD\u80FD\u591F\u8BBF\u95EE\u5230 <code>foo</code> \u53D8\u91CF\u3002</p></div><p>\u9759\u6001\u4F5C\u7528\u57DF\u4E0B\uFF0C\u51FD\u6570\u5728\u521B\u5EFA\u65F6\u5C31\u786E\u5B9A\u4E86\u4F5C\u7528\u57DF\uFF0C\u4E0E\u6267\u884C\u73AF\u5883\u65E0\u5173\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> global </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">global</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">global</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bar</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">global</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">foo</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">bar</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u2728global</span></span>
<span class="line"></span></code></pre></div><p>\u52A8\u6001\u4F5C\u7528\u57DF\u4E0B\uFF0C\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u548C\u6267\u884C\u73AF\u5883\u76F8\u5173\u3002</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">val=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">global</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bar()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">local</span><span style="color:#A6ACCD;"> val=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  foo</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">bar </span><span style="color:#676E95;font-style:italic;"># \u2728bar</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function c(t,r,y,D,F,A){return n(),a("div",null,e)}var d=s(p,[["render",c]]);export{C as __pageData,d as default};
