(this.webpackJsonpemoji_search_app=this.webpackJsonpemoji_search_app||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(11),i=c.n(r),s=(c(46),c(47),c(12)),o=(c(48),c(38)),j=c.n(o),l=c(41),d=c(77),u=c(78),h=c(79),b=c(76),O=c(80),p=c(81),f=c(4);var m=function(e){var t=e.emojiSearchQuery,c=e.setEmojiSearchQuery;return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)(b.a,{children:Object(f.jsx)(d.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)(h.a,{className:"text-center",children:Object(f.jsx)("h2",{children:"Emoji Search Application"})})})})}),Object(f.jsx)(d.a,{children:Object(f.jsxs)(u.a,{className:"p-4",children:[Object(f.jsx)(h.a,{md:"9",children:Object(f.jsx)(O.a,{type:"text",placeholder:"Search for a keyword..",id:"search",value:t,onChange:function(e){return c(e.target.value)}})}),Object(f.jsx)(h.a,{md:"3",className:"py-3 py-md-0",children:Object(f.jsx)(p.a,{outline:!0,color:"primary",block:!0,onClick:function(){return c("")},children:"Clear Search"})})]})})]})},x=c(82),y=function(e){var t=e.emoji,c=e.description,a=e.keywords,r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],j=i[1],l=Object(n.useState)(!1),d=Object(s.a)(l,2),u=d[0],h=d[1];return Object(f.jsxs)("div",{className:"emoji",id:t,onClick:function(e){j(!0),setTimeout((function(){return j(!1)}),3e3)},"data-clipboard-text":t,"data-keywords":a,children:[Object(f.jsx)(x.a,{placement:"right",isOpen:u,target:t,toggle:function(){return h(!u)},children:o?Object(f.jsx)("span",{className:"text-success",children:"Copied To Clipoard ! \ud83d\udccb"}):Object(f.jsx)("span",{className:"text-light",children:"Copy To Clipboard! \ud83d\udccb"})}),Object(f.jsx)("span",{role:"img","aria-label":c,children:t})]})};var v=function(){var e=l.a(),t=Object(n.useState)(e),c=Object(s.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),b=o[0],O=o[1];Object(n.useEffect)((function(){var e=new j.a(".emoji");return function(){e.destroy()}})),Object(n.useEffect)((function(){p()}),[b]);var p=function(){if(""===b)r(e);else{var t=[],c=[];c=b.toLowerCase().trim().split(" "),console.clear(),e.forEach((function(e){e.keywords.forEach((function(n){c.forEach((function(c){n.toLowerCase().indexOf(c)>=0&&t.push(e)}))}))})),r(t)}};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(m,{emojiSearchQuery:b,setEmojiSearchQuery:O}),Object(f.jsx)(d.a,{children:Object(f.jsx)(u.a,{children:a.slice(0,100).map((function(e){return Object(f.jsx)(h.a,{xs:"6",md:"2",className:"py-4 d-flex justify-content-center",children:Object(f.jsx)(y,{emoji:e.emoji,description:e.description},e.emoji)})}))})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),g()}},[[74,1,2]]]);
//# sourceMappingURL=main.785cb411.chunk.js.map