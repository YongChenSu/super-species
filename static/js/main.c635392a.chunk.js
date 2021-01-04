(this["webpackJsonpsuper-species"]=this["webpackJsonpsuper-species"]||[]).push([[0],{52:function(n,e,t){"use strict";t.d(e,"c",(function(){return c})),t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return i})),t.d(e,"d",(function(){return a}));var c="@media screen and (min-width: 576px)",r="@media screen and (min-width: 768px)",i="@media screen and (min-width: 992px)",a="80vh"},54:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"d",(function(){return d})),t.d(e,"b",(function(){return u}));var c=t(45),r=0,i=Object(c.b)({name:"posts",initialState:[],reducers:{addPost:{reducer:function(n,e){n.push(e.payload)},prepare:function(n){return{payload:{id:r++,comment:n,replies:[]}}}},deletePost:function(n,e){var t=n.findIndex((function(n){return n.id===e.payload}));n.splice(t,1)},addReply:function(n,e){var t=e.payload,c=t.id,r=t.text,i=n.find((function(n){return n.id===c}));i&&i.replies.push(r)}}}),a=i.actions,o=a.addPost,d=a.deletePost,u=a.addReply;e.c=i.reducer},88:function(n,e,t){"use strict";t.r(e);var c=t(4),r=t(0),i=t(5),a=t.n(i),o=t(30),d=t(31),u=t(7),s=Object(r.lazy)((function(){return Promise.all([t.e(3),t.e(6)]).then(t.bind(null,143))})),l=Object(r.lazy)((function(){return t.e(4).then(t.bind(null,144))})),j=Object(r.lazy)((function(){return t.e(5).then(t.bind(null,145))})),b=function(){return Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)("div",{}),children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",component:s}),Object(c.jsx)(u.a,{path:"/post/:id",children:Object(c.jsx)(l,{})}),Object(c.jsx)(u.a,{path:"/upload-img",children:Object(c.jsx)(j,{})})]})})},p=t(51),h=t(25),f=t(115),x=t(93),O=t(120),m=t(66),v=t.n(m),g=t(52);function y(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 160px;\n  box-sizing: border-box;\n  cursor: pointer;\n  padding: 0 24px;\n  text-decoration: none;\n  color: ",";\n\n  ","\n"]);return y=function(){return n},n}function k(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 64px;\n\n  "," {\n    justify-content: center;\n  }\n"]);return k=function(){return n},n}function w(){var n=Object(o.a)(["\n  height: 4rem;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n\n  border-bottom: 1px solid ",";\n  background-color: ",";\n  z-index: 100;\n"]);return w=function(){return n},n}var C=h.b.div(w(),(function(n){return n.theme.color.lightGray2}),(function(n){return n.theme.color.white})),$=h.b.div(k(),g.c),G=Object(h.b)(d.b)(y(),(function(n){return n.theme.color.darkGray}),(function(n){return n.$active&&"\n    background-color: ".concat(n.theme.color.lightGray,";\n  ")}));function z(){var n=Object(u.f)(),e=Object(r.useState)(null),t=Object(p.a)(e,2),i=t[0],a=t[1],o=Boolean(i),d=Object(r.useCallback)((function(n){a(n.currentTarget)}),[a]),s=Object(r.useCallback)((function(){a(null)}),[a]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(f.a,{"aria-label":"more","aria-controls":"nav-menu","aria-haspopup":"true",onClick:d,children:Object(c.jsx)(v.a,{})}),Object(c.jsxs)(x.a,{id:"nav-menu",anchorEl:i,keepMounted:!0,open:o,onClose:s,children:[Object(c.jsx)(G,{to:"/",onClick:s,$active:"/"===n.pathname,children:"\u7559\u8a00\u677f"}),Object(c.jsx)(G,{to:"/post/48",onClick:s,$active:n.pathname.includes("/post/48"),children:"\u8a0a\u606f"}),Object(c.jsx)(G,{to:"/upload-img",onClick:s,$active:"/upload-img"===n.pathname,children:"\u5716\u7247\u4e0a\u50b3"})]})]})}function P(){var n=Object(u.f)();return Object(c.jsx)(C,{children:Object(c.jsxs)($,{children:[Object(c.jsxs)(O.a,{only:"xs",children:[Object(c.jsx)(G,{to:"/",$active:"/"===n.pathname,children:"\u7559\u8a00\u677f"}),Object(c.jsx)(G,{to:"/post/48",$active:n.pathname.includes("/post/48"),children:"\u8a0a\u606f"}),Object(c.jsx)(G,{to:"/upload-img",$active:"/upload-img"===n.pathname,children:"\u5716\u7247\u4e0a\u50b3"})]}),Object(c.jsx)(O.a,{smUp:!0,children:Object(c.jsx)(z,{})})]})})}var S=Object(r.memo)(P),B=t(53),E={color:{darkGray:"#4a4a4a",lightGray:"#dddddd",lightGray2:"#9b9b9b",white:"#ffffff"}},I=t(45),J=t(54),R=Object(I.a)({reducer:{posts:J.c}});function M(){var n=Object(o.a)(["\n  margin-top: 4rem;\n"]);return M=function(){return n},n}var T=h.b.div(M()),U=function(){return Object(c.jsx)(h.a,{theme:E,children:Object(c.jsx)(B.a,{store:R,children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(S,{}),Object(c.jsx)(T,{children:Object(c.jsx)(b,{})})]})})})};a.a.render(Object(c.jsx)(U,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.c635392a.chunk.js.map