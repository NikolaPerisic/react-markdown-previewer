(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={logo:"main_logo__33L4x","App-logo-spin":"main_App-logo-spin__1z6id",header:"main_header__1I7sz",header_link:"main_header_link__3vRgh",Wrapper:"main_Wrapper__M-V5v",Editor_textarea:"main_Editor_textarea__dgVOb",PreviewBox:"main_PreviewBox__2oK1z",Output:"main_Output__3iAHL",Footer:"main_Footer__1E2F1"}},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),o=a.n(i),l=(a(35),a(7)),c=a(8),u=a(10),s=a(9),m=a(11),p=a(1),d=a.n(p),h=a(27),_=a.n(h),g=function(e){return r.a.createElement("header",{className:d.a.header},r.a.createElement("img",{src:_.a,className:d.a.logo,alt:"logo"}),r.a.createElement("p",null,e.title),r.a.createElement("a",{className:d.a.header_link,href:"https://github.github.com/gfm/",target:"_blank",rel:"noopener noreferrer"},"Github gfm spec"))},w=function(e){return r.a.createElement("div",null,r.a.createElement("textarea",{type:"text",id:"editor",className:d.a.Editor_textarea,defaultValue:e.text,onChange:e.editText}))},f=a(28),v=a.n(f),E=function(e){return r.a.createElement("div",{className:d.a.PreviewBox},r.a.createElement(v.a,{id:"preview",source:e.outputMarkup,className:d.a.Output}))},k=function(){return r.a.createElement("div",{className:d.a.Footer},r.a.createElement("p",null,"by NP \xa9 2019"))},b=function(e){return e.children},x='# H1\n## H2\nHorizontal line :\n- - - -\n[I\'m an inline-style link](https://www.google.com)\n\nInline `code` has `back-ticks around` it.\n\n```javascript\nvar s = "JavaScript syntax highlighting";\nalert(s);\n```\n> Blockquote\n>> Nested Blockquote\n\nImage with alt :\n\n![picture alt](http://www.brightlightpictures.com/assets/images/portfolio/thethaw_header.jpg "Title is optional")\n\n__Strong text__ or **Strong text**\n\n* Bullet list\n  * Nested bullet\n    * Sub-nested bullet etc\n* Bullet list item 2',O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={headerText:"React Markdown Previewer",markup:x},a.markupEditHandler=function(e){var t=e.target.value;return a.setState({markup:t}),t},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(g,{title:this.state.headerText}),r.a.createElement("div",{className:d.a.Wrapper},r.a.createElement(w,{text:this.state.markup,editText:this.markupEditHandler}),r.a.createElement(E,{outputMarkup:this.state.markup})),r.a.createElement(k,null))}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},29:function(e,t,a){e.exports=a(118)},35:function(e,t,a){}},[[29,1,2]]]);
//# sourceMappingURL=main.ff5f3865.chunk.js.map