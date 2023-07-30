import{_ as a,v as s,b as e,R as o}from"./chunks/framework.435485db.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"column/css/003_盒子边框透明.md","filePath":"column/css/003_盒子边框透明.md"}'),t={name:"column/css/003_盒子边框透明.md"},n=o('<h3 id="让盒子的边框变透明" tabindex="-1">让盒子的边框变透明 <a class="header-anchor" href="#让盒子的边框变透明" aria-label="Permalink to &quot;让盒子的边框变透明&quot;">​</a></h3><hr><p><strong>场景</strong>：制作一个半透明的边框，显示父级元素的背景</p><h4 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">background-clip</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">padding-box</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><h4 id="备注" tabindex="-1">备注 <a class="header-anchor" href="#备注" aria-label="Permalink to &quot;备注&quot;">​</a></h4><ul><li><code>background-clip</code>：设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面</li><li>属性设置为<code>padding-box</code>，可以使边框透明，但是只有在单独设置边框 rgba 时才有作用</li></ul>',7),l=[n];function c(r,i,d,p,_,h){return s(),e("div",null,l)}const b=a(t,[["render",c]]);export{m as __pageData,b as default};
