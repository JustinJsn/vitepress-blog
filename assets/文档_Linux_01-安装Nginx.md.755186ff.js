import{_ as s,c as a,o as n,a as e}from"./app.eee3fac5.js";const A=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76F8\u5173\u77E5\u8BC6","slug":"\u76F8\u5173\u77E5\u8BC6"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u542F\u52A8\u9519\u8BEF\u95EE\u9898","slug":"\u542F\u52A8\u9519\u8BEF\u95EE\u9898"},{"level":2,"title":"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6","slug":"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6"}],"relativePath":"\u6587\u6863/Linux/01-\u5B89\u88C5Nginx.md","lastUpdated":1657983894000}'),l={name:"\u6587\u6863/Linux/01-\u5B89\u88C5Nginx.md"},p=e(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><h2 id="\u76F8\u5173\u77E5\u8BC6" tabindex="-1">\u76F8\u5173\u77E5\u8BC6 <a class="header-anchor" href="#\u76F8\u5173\u77E5\u8BC6" aria-hidden="true">#</a></h2><p><a href="https://github.com/mqyqingfeng/Blog/issues/242" target="_blank" rel="noopener noreferrer">\u51B4\u7FBD\u535A\u5BA2 - \u4E00\u4EFD\u7B80\u5355\u591F\u7528\u7684 Nginx Location \u914D\u7F6E\u8BB2\u89E3</a></p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># Debian</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u542F\u7528 Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8BBE\u7F6E\u4E3A\u5728\u7CFB\u7EDF\u542F\u52A8\u65F6\u81EA\u52A8\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> nginx</span></span>
<span class="line"></span></code></pre></div><h2 id="\u542F\u52A8\u9519\u8BEF\u95EE\u9898" tabindex="-1">\u542F\u52A8\u9519\u8BEF\u95EE\u9898 <a class="header-anchor" href="#\u542F\u52A8\u9519\u8BEF\u95EE\u9898" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">nginx.service: Failed with result </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">exit-code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">Failed to start A high performance web server and a reverse proxy server.</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u542F\u52A8 nginx \u51FA\u73B0\u4EE5\u4E0A\u9519\u8BEF\uFF0C\u662F\u56E0\u4E3A apache \u670D\u52A1\u628A nginx \u7684\u7AEF\u53E3\u5360\u7528\u4E86\uFF0C\u505C\u6B62 apache \u5373\u53EF</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u505C\u6B62 apache \u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo /etc/init.d/apache2 stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u91CD\u542F Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart nginx</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u8FDB\u5165\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /etc/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4FEE\u6539\u914D\u7F6E\u5185\u5BB9</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> sites-available</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">vim default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4FEE\u6539\u914D\u7F6E\u540E\u9700\u8981\u91CD\u542F nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl reload nginx</span></span>
<span class="line"></span></code></pre></div>`,11),t=[p];function c(i,o,r,d,h,y){return n(),a("div",null,t)}var x=s(l,[["render",c]]);export{A as __pageData,x as default};
