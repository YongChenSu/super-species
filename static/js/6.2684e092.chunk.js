(this["webpackJsonpsuper-species"]=this["webpackJsonpsuper-species"]||[]).push([[6],{73:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"c",(function(){return c})),t.d(n,"b",(function(){return o}));var r="https://student-json-api.lidemy.me",i=function(){return fetch("https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc").then((function(e){return e.json()}))},c=function(){return fetch("".concat(r,"/posts?_sort=createdAt&_order=desc")).then((function(e){return e.json()}))},o=function(e){return fetch("".concat(r,"/posts?id=").concat(e)).then((function(e){return e.json()}))}},92:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return je}));var r=t(2),i=t(68),c=t(13),o=t(0),a=t(14),s=t(91),u=t(4),l=t(1),d=(t(11),t(28)),f=t(29),b=[0,1,2,3,4,5,6,7,8,9,10],m=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function j(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var h=o.forwardRef((function(e,n){var t=e.alignContent,r=void 0===t?"stretch":t,i=e.alignItems,c=void 0===i?"stretch":i,a=e.classes,s=e.className,f=e.component,b=void 0===f?"div":f,m=e.container,j=void 0!==m&&m,h=e.direction,g=void 0===h?"row":h,x=e.item,p=void 0!==x&&x,v=e.justify,O=void 0===v?"flex-start":v,w=e.lg,y=void 0!==w&&w,S=e.md,C=void 0!==S&&S,E=e.sm,M=void 0!==E&&E,k=e.spacing,z=void 0===k?0:k,I=e.wrap,D=void 0===I?"wrap":I,W=e.xl,N=void 0!==W&&W,A=e.xs,F=void 0!==A&&A,L=e.zeroMinWidth,R=void 0!==L&&L,_=Object(u.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),H=Object(d.a)(a.root,s,j&&[a.container,0!==z&&a["spacing-xs-".concat(String(z))]],p&&a.item,R&&a.zeroMinWidth,"row"!==g&&a["direction-xs-".concat(String(g))],"wrap"!==D&&a["wrap-xs-".concat(String(D))],"stretch"!==c&&a["align-items-xs-".concat(String(c))],"stretch"!==r&&a["align-content-xs-".concat(String(r))],"flex-start"!==O&&a["justify-xs-".concat(String(O))],!1!==F&&a["grid-xs-".concat(String(F))],!1!==M&&a["grid-sm-".concat(String(M))],!1!==C&&a["grid-md-".concat(String(C))],!1!==y&&a["grid-lg-".concat(String(y))],!1!==N&&a["grid-xl-".concat(String(N))]);return o.createElement(b,Object(l.a)({className:H,ref:n},_))})),g=Object(f.a)((function(e){return Object(l.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return b.forEach((function(r){var i=e.spacing(r);0!==i&&(t["spacing-".concat(n,"-").concat(r)]={margin:"-".concat(j(i,2)),width:"calc(100% + ".concat(j(i),")"),"& > $item":{padding:j(i,2)}})})),t}(e,"xs"),e.breakpoints.keys.reduce((function(n,t){return function(e,n,t){var r={};m.forEach((function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");r[n]={flexBasis:i,flexGrow:0,maxWidth:i}}else r[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?Object(l.a)(e,r):e[n.breakpoints.up(t)]=r}(n,e,t),n}),{}))}),{name:"MuiGrid"})(h),x=t(75),p=t(71);function v(e,n){return parseInt(e[n],10)||0}var O="undefined"!==typeof window?o.useLayoutEffect:o.useEffect,w={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},y=o.forwardRef((function(e,n){var t=e.onChange,r=e.rows,i=e.rowsMax,c=e.rowsMin,a=void 0===c?1:c,s=e.style,d=e.value,f=Object(u.a)(e,["onChange","rows","rowsMax","rowsMin","style","value"]),b=r||a,m=o.useRef(null!=d).current,j=o.useRef(null),h=Object(p.a)(n,j),g=o.useRef(null),y=o.useRef(0),S=o.useState({}),C=S[0],E=S[1],M=o.useCallback((function(){var n=j.current,t=window.getComputedStyle(n),r=g.current;r.style.width=t.width,r.value=n.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");var c=t["box-sizing"],o=v(t,"padding-bottom")+v(t,"padding-top"),a=v(t,"border-bottom-width")+v(t,"border-top-width"),s=r.scrollHeight-o;r.value="x";var u=r.scrollHeight-o,l=s;b&&(l=Math.max(Number(b)*u,l)),i&&(l=Math.min(Number(i)*u,l));var d=(l=Math.max(l,u))+("border-box"===c?o+a:0),f=Math.abs(l-s)<=1;E((function(e){return y.current<20&&(d>0&&Math.abs((e.outerHeightStyle||0)-d)>1||e.overflow!==f)?(y.current+=1,{overflow:f,outerHeightStyle:d}):e}))}),[i,b,e.placeholder]);o.useEffect((function(){var e=Object(x.a)((function(){y.current=0,M()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[M]),O((function(){M()})),o.useEffect((function(){y.current=0}),[d]);return o.createElement(o.Fragment,null,o.createElement("textarea",Object(l.a)({value:d,onChange:function(e){y.current=0,m||M(),t&&t(e)},ref:h,rows:b,style:Object(l.a)({height:C.outerHeightStyle,overflow:C.overflow?"hidden":null},s)},f)),o.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:g,tabIndex:-1,style:Object(l.a)({},w,s)}))})),S=t(70);var C=t(69);function E(e){return function(e){if(Array.isArray(e))return Object(S.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(C.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=t(73);function k(){var e=Object(c.a)(["\n  margin: 0 0 0 0.5rem;\n"]);return k=function(){return e},e}function z(){var e=Object(c.a)(["\n  color: rgba(23, 33, 44, 0.5);\n  font-size: 1rem;\n"]);return z=function(){return e},e}function I(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.25rem 0;\n  border-bottom: 2px solid rgba(32, 208, 170, 0.5);\n"]);return I=function(){return e},e}var D=a.a.div(I()),W=a.a.div(z()),N=a.a.div(k()),A=function(e){var n=e.latestComments;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(D,{children:[Object(r.jsx)(W,{children:n.author}),Object(r.jsx)(N,{children:n.time})]}),Object(r.jsx)("div",{children:n.body})]})};function F(){var e=Object(c.a)(["\n  font-size: 1.25rem;\n  padding: 0.25rem 0;\n"]);return F=function(){return e},e}function L(){var e=Object(c.a)(["\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n  color: #eee;\n  background-color: rgb(105, 156, 154, 0.6);\n  border: 2px solid rgb(105, 156, 154);\n  cursor: pointer;\n  &:hover {\n    background-color: rgb(105, 156, 154, 1);\n  }\n  &:focus {\n    outline: 0;\n  }\n"]);return L=function(){return e},e}function R(){var e=Object(c.a)(["\n  margin: 0 0 0 0.5rem;\n"]);return R=function(){return e},e}function _(){var e=Object(c.a)(["\n  color: rgba(23, 33, 44, 0.5);\n  font-size: 1rem;\n"]);return _=function(){return e},e}function H(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.25rem 0;\n  border-bottom: 2px solid rgba(32, 208, 170, 0.5);\n"]);return H=function(){return e},e}function G(){var e=Object(c.a)(["\n  background-color: rgb(32, 178, 170, 0.3);\n  padding: 1rem;\n  margin: 0 0 1rem 0;\n  border-radius: 0.5rem;\n"]);return G=function(){return e},e}function J(){var e=Object(c.a)([""]);return J=function(){return e},e}function T(){var e=Object(c.a)(["\n  box-sizing: border-box;\n  width: 100%;\n"]);return T=function(){return e},e}function B(){var e=Object(c.a)(["\n  width: 100%;\n  margin: 1rem 0 0 0;\n"]);return B=function(){return e},e}var P=a.a.form(B()),Z=Object(a.a)(y)(T()),$=Object(a.a)(s.a)(J()),q=a.a.div(G()),K=a.a.div(H()),Q=a.a.div(_()),U=a.a.div(R()),V=Object(a.a)(s.a)(L()),X=a.a.div(F()),Y=function(e){var n=e.handleDeleteData,t=e.id,c=e.author,a=e.time,s=e.children,u=Object(o.useState)(null),l=Object(i.a)(u,2),d=(l[0],l[1]),f=Object(o.useState)(null),b=Object(i.a)(f,2),m=(b[0],b[1]),j=Object(o.useState)(),h=Object(i.a)(j,2),x=h[0],p=h[1],v=Object(o.useState)(),O=Object(i.a)(v,2),w=(O[0],O[1]),y=Object(o.useState)(!1),S=Object(i.a)(y,2),C=S[0],k=S[1],z=Object(o.useState)([]),I=Object(i.a)(z,2),D=I[0],W=I[1];return Object(o.useEffect)((function(){Object(M.a)().then((function(e){d(e)})).catch((function(e){m(e.message)}))}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(q,{children:[Object(r.jsxs)(K,{children:[Object(r.jsx)(Q,{children:c}),Object(r.jsx)(U,{children:a})]}),Object(r.jsxs)(X,{children:[s,Object(r.jsx)(V,{onClick:function(){return n(t)},children:"\u522a\u9664"}),Object(r.jsxs)(P,{onSubmit:function(e){e.preventDefault(),C||(k(!0),fetch("https://student-json-api.lidemy.me/comments",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:"yongchen",body:x})}).then((function(e){return e.json()})).then((function(e){k(!1),0===e.ok?w(e.message):(p(""),Object(M.a)(),W([].concat(E(D),[e])))})).catch((function(e){k(!1),w(e.message)})))},children:[Object(r.jsx)(Z,{"aria-label":"minimum height",rowsMin:2,placeholder:"\u56de\u8986\u7559\u8a00",value:x,onFocus:function(e){w(null)},onChange:function(e){p(e.target.value)}}),Object(r.jsx)(g,{container:!0,direction:"row",justify:"flex-end",alignItems:"stretch",children:Object(r.jsx)($,{type:"submit",variant:"outlined",color:"primary",children:"\u56de\u8986"})})]}),console.log("Comment"),""!==D&&D.map((function(e){return Object(r.jsx)(A,{latestComments:e})}))]})]})})};function ee(){var e=Object(c.a)(["\n  margin: 1rem 0 0 0;\n"]);return ee=function(){return e},e}function ne(){var e=Object(c.a)([""]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n  box-sizing: border-box;\n  width: 100%;\n"]);return te=function(){return e},e}function re(){var e=Object(c.a)(["\n  width: 100%;\n  margin: 1rem 0 0 0;\n"]);return re=function(){return e},e}function ie(){var e=Object(c.a)(["\n  color: #333;\n"]);return ie=function(){return e},e}function ce(){var e=Object(c.a)(["\n  color: lightsalmon;\n  font-size: 2rem;\n  font-weight: bold;\n  padding: 1rem 0;\n"]);return ce=function(){return e},e}function oe(){var e=Object(c.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #ddd;\n  font-size: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return oe=function(){return e},e}var ae=a.a.div(oe()),se=a.a.div(ce()),ue=a.a.h1(ie()),le=a.a.form(re()),de=Object(a.a)(y)(te()),fe=Object(a.a)(s.a)(ne()),be=a.a.div(ee()),me=function(){var e=Object(o.useState)(null),n=Object(i.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(null),s=Object(i.a)(a,2),u=s[0],l=s[1],d=Object(o.useState)(),f=Object(i.a)(d,2),b=f[0],m=f[1],j=Object(o.useState)(),h=Object(i.a)(j,2),x=h[0],p=h[1],v=Object(o.useState)(!1),O=Object(i.a)(v,2),w=O[0],y=O[1],S=function(){return fetch("https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc").then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){l(e.message)}))},C=function(e){fetch("https://student-json-api.lidemy.me/comments/".concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(){return S()}))};return Object(o.useEffect)(S,[]),Object(r.jsxs)(r.Fragment,{children:[w&&Object(r.jsx)(ae,{children:"Loading ..."}),Object(r.jsx)(ue,{children:"\u7559\u8a00\u677f"}),Object(r.jsxs)(le,{onSubmit:function(e){e.preventDefault(),w||(y(!0),fetch("https://student-json-api.lidemy.me/comments",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:"yongchen",body:b})}).then((function(e){return e.json()})).then((function(e){y(!1),0===e.ok?p(e.message):(m(""),S())})).catch((function(e){y(!1),p(e.message)})))},children:[Object(r.jsx)(de,{"aria-label":"minimum height",rowsMin:10,placeholder:"Minimum 3 rows",value:b,onFocus:function(e){p(null)},onChange:function(e){m(e.target.value)}}),Object(r.jsx)(g,{container:!0,direction:"row",justify:"flex-end",alignItems:"stretch",children:Object(r.jsx)(fe,{type:"submit",variant:"outlined",color:"primary",children:"\u9001\u51fa"})}),x&&Object(r.jsx)(se,{children:x})]}),u&&Object(r.jsxs)(se,{children:["Something went wrong!",Object(r.jsx)("br",{}),u.toString()]}),t&&0===t.length&&Object(r.jsx)("div",{children:"No message"}),Object(r.jsx)(be,{children:t&&t.map((function(e){return Object(r.jsx)(Y,{id:e.id,author:e.nickname,time:new Date(e.createdAt).toLocaleString(),children:e.body,handleDeleteData:C},e.id)}))})]})},je=Object(o.memo)(me)}}]);
//# sourceMappingURL=6.2684e092.chunk.js.map