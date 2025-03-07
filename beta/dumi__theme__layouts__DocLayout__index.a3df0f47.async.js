"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[367],{2136:function(K,x,n){n.r(x),n.d(x,{default:function(){return at}});var N=n(48305),m=n.n(N),U=n(73046),Y=n(94161),c=n(79201),u=n(75271),e=n(52676),F=function(t){var a=(0,c.tx)(),r=(0,c.WF)(),i=r.themeConfig;return(0,e.jsx)("div",{className:"dumi-default-content","data-no-sidebar":!a||void 0,"data-no-footer":i.footer===!1||void 0,children:t.children})},z=F,Q=function(){var t,a=(0,c.eL)(),r=a.frontmatter;return!((t=r.features)===null||t===void 0)&&t.length?(0,e.jsx)("div",{className:"dumi-default-features","data-cols":[3,2].find(function(i){return r.features.length%i===0})||3,children:r.features.map(function(i){var o=i.title,l=i.description,v=i.emoji,h=i.link,d;return h&&(d=/^(\w+:)\/\/|^(mailto|tel):/.test(h)?(0,e.jsx)("a",{href:h,target:"_blank",rel:"noreferrer",children:o}):(0,e.jsx)(c.rU,{to:h,children:o})),(0,e.jsxs)("div",{className:"dumi-default-features-item",children:[v&&(0,e.jsx)("i",{children:v}),o&&(0,e.jsx)("h3",{children:d||o}),l&&(0,e.jsx)("p",{dangerouslySetInnerHTML:{__html:l}})]},o)})}):null},p=Q,I=n(11890),S=n(70347),k=n(26523),M=n(96306),w=n(12224),g=function(){var t=(0,c.WF)(),a=t.themeConfig.prefersColor.default,r=(0,c.OI)(),i=m()(r,3),o=i[1],l=o===void 0?a:o,v=i[2],h=(0,u.useState)(l==="dark"),d=m()(h,2),f=d[0],C=d[1],T=function(j,A){var D,B;C(A==null?void 0:A.checked);var V=A!=null&&A.checked?"dark":"light";v(V),(D=document.querySelector("html"))===null||D===void 0||D.setAttribute("data-color-mode",V),(B=document.querySelector("html"))===null||B===void 0||B.setAttribute("data-theme","default"),y()};(0,u.useEffect)(function(){C(l==="dark"),y()},[l]);var y=function(){var j,A=(j=document.getElementsByClassName("dumi-default-logo"))===null||j===void 0?void 0:j[0];A&&(A.innerHTML=l==="dark"?'<img src="https://gw.alicdn.com/imgextra/i1/O1CN01LwDOxt1XDDBlZPZEd_!!6000000002889-2-tps-361-96.png">':'<img src="https://gw.alicdn.com/imgextra/i4/O1CN01XWp8e31QbIi5YgLUw_!!6000000001994-2-tps-362-96.png">')};return(0,e.jsx)("span",{className:"dumi-default-color-switch",children:(0,e.jsx)(w.Z,{checkedChildren:(0,e.jsx)(k.default,{}),unCheckedChildren:(0,e.jsx)(M.default,{}),checked:f,onChange:T,size:"large"})})},E=g,L=function(){return(0,e.jsx)(e.Fragment,{})},O=L,P=n(84135);function b(s){return/-en\/?$/.test(s)}function _(s,t,a,r){var i=s.startsWith("/")?s:"/".concat(s),o;if(t?i==="/"?o="/index-en":i.endsWith("/")?o=i.replace(/\/$/,"-en/"):(o="".concat(i,"-en"),o=o.replace(/(-en)+/,"-en")):o=/\/?index-en/.test(i)?"/":i.replace("-en",""),r){var l=r[t?"zhCN":"enUS"];o+="#".concat(l)}return{pathname:o,search:a}}function J(){var s="test",t=window.localStorage;try{return t.setItem(s,"1"),t.removeItem(s),!0}catch(a){return console.error("Your web browser does not support storing settings locally.",a),!1}}function Z(s){var t=s.pathname,a=s.current,r=s.target,i="base"in a?t.replace(a.base.replace(/\/$/,""),"")||"/":t.replace(new RegExp("".concat(a.suffix,"$")),"");return"base"in r?"".concat(r.base.replace(/\/$/,"")).concat(i).replace(/([^/])\/$/,"$1"):"".concat(i).concat(r.suffix)}var q=function(t){var a=t.locale,r=t.current,i=(0,c.TH)(),o=i.pathname,l=i.search,v="".concat(window.location.protocol,"//"),h=(0,u.useState)(function(){return Z({pathname:o,current:r,target:a})}),d=m()(h,2),f=d[0],C=d[1];return J()&&localStorage.setItem("locale",b(o)?"en-US":"zh-CN"),(0,u.useEffect)(function(){C(_(o,!b(o),l).pathname)},[r.id,a.id,o]),(0,e.jsx)(c.rU,{className:"dumi-default-lang-switch",to:f,children:a.name})},ae=function(){var t=(0,c.WF)(),a=t.locales,r=(0,c.YB)(),i=r.locale,o=(0,c.bU)();return a.length<=1?null:a.length>2?(0,e.jsxs)("div",{className:"dumi-default-lang-select",children:[(0,e.jsx)("select",{defaultValue:i,onChange:function(v){c.m8.push(Z({pathname:c.m8.location.pathname,current:o,target:a.find(function(h){var d=h.id;return d===v.target.value})}))},children:a.map(function(l){return(0,e.jsx)("option",{value:l.id,children:l.name},l.id)})}),(0,e.jsx)(P.r,{})]}):(0,e.jsx)(q,{locale:a.find(function(l){var v=l.id;return v===i}),current:o})},re=ae,oe=function(){var t=(0,c.WF)(),a=t.themeConfig,r=(window.localStorage&&localStorage.getItem("locale"))==="zh-CN"?"zh-CN":"en-US";return(0,e.jsxs)(c.rU,{className:"dumi-default-logo",to:r==="zh-CN"?"/":"/index-en",children:[a.logo!==!1&&(0,e.jsx)("img",{src:a.logo||"data:image/png;base64,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",alt:a.name}),a.name]})},te=oe,ce=function(){var t={label:"v1.x",publicPath:"/",rootPath:"/"},a=[{label:"beta",publicPath:"/beta/",rootPath:"/beta"}],r=[t].concat(a),i=(0,u.useState)({}),o=m()(i,2),l=o[0],v=o[1];(0,u.useEffect)(function(){var d=location.pathname||t.rootPath,f=d.length===1&&d===t.rootPath||d.length>1&&a.every(function(T){return!d.startsWith(T.rootPath)}),C=f?t:a.find(function(T){return d.startsWith(T.rootPath)});v(C)},[]);var h=function(f){v(f)};return l!=null&&l.rootPath?(0,e.jsxs)("div",{className:"version-select",onClick:function(){},children:[l.label,(0,e.jsx)("div",{className:"version-select-arrow"}),(0,e.jsx)("div",{className:"versions-container",children:r.map(function(d){return(0,e.jsx)("a",{className:"version-item ".concat(d.label===l.label?"version-item-active":""),onClick:function(){h(d)},href:d.publicPath,children:d.label},d.label)})})]}):null},se=ce,ie=n(26068),X=n.n(ie),ue=function(){return(0,e.jsx)(e.Fragment,{})},de=ue,he=function(t){var a=t.data,r=(0,c.TH)(),i=r.pathname,o=(0,u.useState)(function(){var y;return(y=a.children)===null||y===void 0?void 0:y.some(function(R){var j=R.activePath||R.link;return j&&i.startsWith(j)})}),l=m()(o,2),v=l[0],h=l[1],d=a.children&&(0,e.jsx)("button",{className:"dumi-default-navbar-collapse-btn",type:"button",onClick:function(R){R.stopPropagation(),h(function(j){return!j})},"data-collapsed":v||void 0,children:(0,e.jsx)(P.r,{})}),f=a.children&&(0,e.jsx)("ul",{className:"dumi-default-navbar-dropdown","data-collapsed":v||void 0,children:(0,e.jsx)(le,{data:a.children})}),C=a.activePath||a.link,T=C&&i.startsWith(C)?{className:"active"}:{};return a.link?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.rU,X()(X()({to:a.link},T),{},{children:a.title})),d,f]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",X()(X()({onClick:function(R){R.stopPropagation(),h(function(j){return!j})}},T),{},{children:a.title})),d,f]})},le=function(t){var a=t.data;return(0,e.jsx)(e.Fragment,{children:a.map(function(r){return(0,e.jsx)("li",{children:r.link&&/^(\w+:)\/\/|^(mailto|tel):/.test(r.link)?(0,e.jsx)("a",{href:r.link,target:"_blank",rel:"noreferrer",children:r.title}):(0,e.jsx)(he,{data:r})},r.activePath||r.link||r.title)})})},ne=function(){var t=(0,c.OK)();return(0,e.jsxs)("ul",{className:"dumi-default-navbar",children:[(0,e.jsx)(le,{data:t}),(0,e.jsx)(de,{})]})},$=ne,ve=function(){return(0,e.jsx)("svg",{viewBox:"0 0 14 16",children:(0,e.jsx)("path",{d:"M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847Zm7.988 11.332H2.73l.8-.674c.274-.2.324-.674.124-.923-.2-.275-.674-.325-.923-.125L.735 12.53c-.275.275-.4.525-.4.874 0 .325.125.674.4.874l1.997 1.597a.829.829 0 0 0 .4.125c.199 0 .398-.075.523-.275.2-.274.2-.723-.125-.923l-.998-.799h10.459c.399 0 .674-.274.674-.674 0-.424-.275-.674-.674-.674Z"})})},ke=function(){return(0,e.jsx)("svg",{viewBox:"0 0 14 16",children:(0,e.jsx)("path",{d:"M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847ZM1.01 12.655h10.26l-.8-.674c-.274-.2-.324-.674-.124-.923.2-.275.674-.325.923-.125l1.997 1.597c.275.275.4.525.4.874 0 .325-.125.674-.4.874l-1.997 1.597a.829.829 0 0 1-.399.125.59.59 0 0 1-.524-.275c-.2-.274-.2-.723.125-.923l.998-.799H1.009c-.399 0-.674-.274-.674-.674 0-.424.275-.674.674-.674Z"})})},fe="dumi:rtl",be=function(){var t=(0,u.useState)(!1),a=m()(t,2),r=a[0],i=a[1],o=(0,c.WF)(),l=o.themeConfig;return(0,u.useEffect)(function(){localStorage.getItem(fe)&&(i(!0),document.documentElement.setAttribute("data-direction","rtl"))},[]),l.rtl?(0,e.jsx)("button",{type:"button",className:"dumi-default-rtl-switch",onClick:function(){r?(document.documentElement.removeAttribute("data-direction"),localStorage.removeItem(fe)):(document.documentElement.setAttribute("data-direction","rtl"),localStorage.setItem(fe,"1")),i(!r)},"data-dumi-tooltip":r?"RTL":"LTR","data-dumi-tooltip-bottom":!0,children:r?(0,e.jsx)(ve,{}):(0,e.jsx)(ke,{})}):null},ye=be,Ne=n(47701),Ee=n(42119),xe=n(58372),Te=n(77093),Ie=function(){return(0,e.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"}),(0,e.jsx)("path",{d:"M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"}),(0,e.jsx)("path",{d:"M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"})]})},Me=function(){return(0,e.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"})})},Pe=function(){return(0,e.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"})})},we=function(){return(0,e.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"})})},Re={title:Ie,page:Me,content:Pe,demo:we},Ce=function(t){return(0,e.jsx)(e.Fragment,{children:t.texts.map(function(a,r){return(0,e.jsx)(u.Fragment,{children:a.highlighted?(0,e.jsx)("mark",{children:a.text}):a.text},r)})})},Le=function(t){var a=(0,u.useCallback)(function(){var v=0,h=[];return t.forEach(function(d){d.title&&h.push({type:"title",value:{title:d.title}}),d.hints.forEach(function(f){h.push({type:"hint",activeIndex:v++,value:f})})}),[h,v]},[t]),r=(0,u.useState)(a),i=m()(r,2),o=i[0],l=i[1];return(0,u.useEffect)(function(){l(a)},[t]),o},Oe=function(t){var a=Le(t.data),r=m()(a,2),i=r[0],o=r[1],l=(0,u.useState)(-1),v=m()(l,2),h=v[0],d=v[1];return(0,u.useEffect)(function(){var f=function(T){if(T.key==="ArrowDown")d((h+1)%o);else if(T.key==="ArrowUp")d((h+o-1)%o);else if(T.key==="Enter"&&h>=0){var y,R=i.find(function(j){return j.type==="hint"&&j.activeIndex===h}).value;c.m8.push(R.link),(y=t.onItemSelect)===null||y===void 0||y.call(t,R),document.activeElement.blur()}["Escape","Enter"].includes(T.key)&&d(-1)};return document.addEventListener("keydown",f),function(){return document.removeEventListener("keydown",f)}}),(0,e.jsx)("div",{className:"dumi-default-search-result",onMouseEnter:function(){return d(-1)},onMouseDownCapture:function(C){return C.preventDefault()},onMouseUpCapture:function(){document.activeElement.blur()},children:t.data.length||t.loading?(0,e.jsx)("dl",{children:i.map(function(f,C){return f.type==="title"?(0,e.jsx)("dt",{children:f.value.title},String(C)):(0,e.jsx)("dd",{children:(0,e.jsxs)(c.rU,{to:f.value.link,"data-active":h===f.activeIndex||void 0,onClick:function(){var y;return(y=t.onItemSelect)===null||y===void 0?void 0:y.call(t,f.value)},children:[u.createElement(Re[f.value.type]),(0,e.jsx)("h4",{children:(0,e.jsx)(Ce,{texts:f.value.highlightTitleTexts})}),(0,e.jsx)("p",{children:(0,e.jsx)(Ce,{texts:f.value.highlightTexts})})]})},String(C))})}):(0,e.jsxs)("div",{className:"dumi-default-search-empty",children:[(0,e.jsx)(Te.r,{}),(0,e.jsx)(c._H,{id:"search.not.found"})]})})},je=Oe,pe=(0,u.forwardRef)(function(s,t){var a=(0,c.YB)(),r=(0,u.useRef)(!1),i=(0,u.useRef)(null);return(0,u.useImperativeHandle)(t,function(){return i.current}),(0,e.jsx)("input",{className:"dumi-default-search-bar-input",onCompositionStart:function(){return r.current=!0},onCompositionEnd:function(l){r.current=!1,s.onChange(l.currentTarget.value)},onFocus:s.onFocus,onBlur:s.onBlur,onKeyDown:function(l){["ArrowDown","ArrowUp"].includes(l.key)&&l.preventDefault(),l.key==="Escape"&&!r.current&&l.currentTarget.blur()},onChange:function(l){var v=l.target.value;setTimeout(function(){r.current||s.onChange(v)},1)},placeholder:a.formatMessage({id:"header.search.placeholder"}),ref:i})}),De=function(t){return(0,u.useEffect)(function(){if(t.visible)document.body.style.overflow="hidden";else{var a;document.body.style.overflow="",(a=t.onClose)===null||a===void 0||a.call(t)}},[t.visible]),t.visible?(0,e.jsxs)("div",{className:"dumi-default-search-modal",children:[(0,e.jsx)("div",{className:"dumi-default-search-modal-mask",onClick:t.onMaskClick}),(0,e.jsx)("div",{className:"dumi-default-search-modal-content",children:t.children})]}):null},me,Se=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(me=navigator)===null||me===void 0?void 0:me.platform:""),Be=function(t){return["TEXTAREA","INPUT"].includes(t.tagName)||t.contentEditable==="true"},We=function(){var t=(0,u.useState)(!1),a=m()(t,2),r=a[0],i=a[1],o=(0,u.useRef)(null),l=(0,u.useRef)(null),v=(0,u.useState)("\u2318"),h=m()(v,2),d=h[0],f=h[1],C=(0,c.OO)(),T=C.keywords,y=C.setKeywords,R=C.result,j=C.loading,A=(0,u.useState)(!1),D=m()(A,2),B=D[0],V=D[1];return(0,u.useEffect)(function(){Se||f("Ctrl");var H=function(W){if(((Se?W.metaKey:W.ctrlKey)&&W.key==="k"||W.key==="/"&&!Be(W.target))&&(W.preventDefault(),o.current)){var G=o.current.getBoundingClientRect(),Ae=G.top,rt=G.bottom,ot=G.left,it=G.right,lt=Ae>=0&&ot>=0&&rt<=window.innerHeight&&it<=window.innerWidth;lt?o.current.focus():(y(""),V(!0),setTimeout(function(){var ge;(ge=l.current)===null||ge===void 0||ge.focus()}))}W.key==="Escape"&&(W.preventDefault(),V(!1))};return document.addEventListener("keydown",H),function(){return document.removeEventListener("keydown",H)}},[]),(0,e.jsxs)("div",{className:"dumi-default-search-bar",children:[(0,e.jsx)(xe.default,{className:"dumi-default-search-bar-svg"}),(0,e.jsx)(pe,{onFocus:function(){return i(!0)},onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(ee){return y(ee)},ref:o}),T.trim()&&r&&(R.length||!j)&&!B&&(0,e.jsx)("div",{className:"dumi-default-search-popover",children:(0,e.jsx)("section",{children:(0,e.jsx)(je,{data:R,loading:j})})}),(0,e.jsxs)(De,{visible:B,onMaskClick:function(){V(!1)},onClose:function(){return y("")},children:[(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(xe.default,{className:"dumi-default-search-bar-svg"}),(0,e.jsx)(pe,{onFocus:function(){return i(!0)},onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(ee){return y(ee)},ref:l})]}),(0,e.jsx)(je,{data:R,loading:j,onItemSelect:function(){V(!1)}}),(0,e.jsx)("footer",{children:(0,e.jsxs)("ul",{className:"dumi-default-search-modal-commands",children:[(0,e.jsxs)("li",{className:"dumi-default-search-modal-commands-arrow",children:[(0,e.jsx)("span",{className:"dumi-default-search-modal-shortcut",children:(0,e.jsx)(Ee.r,{width:"10px",height:"10px",fill:"rgba(0, 0, 0, 0.45)"})}),(0,e.jsx)("span",{className:"dumi-default-search-modal-shortcut",children:(0,e.jsx)(Ne.r,{width:"10px",height:"10px",fill:"rgba(0, 0, 0, 0.45)"})}),(0,e.jsx)("span",{className:"dumi-default-search-modal-commands-text",children:"to navigate"})]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("span",{className:"dumi-default-search-modal-shortcut",children:"esc"}),(0,e.jsx)("span",{className:"dumi-default-search-modal-commands-text",children:"to close"})]})]})})]})]})},He=We,Ue=function(){var t=(0,c.eL)(),a=t.frontmatter,r=(0,u.useState)(!1),i=m()(r,2),o=i[0],l=i[1],v=(0,c.WF)(),h=v.themeConfig,d=(0,u.useMemo)(function(){return h.socialLinks?Object.keys(h.socialLinks).slice(0,5).map(function(f){return{icon:f,link:h.socialLinks[f]}}):[]},[h.socialLinks]);return(0,e.jsx)("div",{className:"dumi-default-header","data-static":!!a.hero||void 0,"data-mobile-active":o||void 0,onClick:function(){return l(!1)},children:(0,e.jsxs)("div",{className:"dumi-default-header-content",children:[(0,e.jsxs)("section",{className:"dumi-default-header-left",children:[(0,e.jsx)(te,{}),(0,e.jsx)(se,{})]}),(0,e.jsxs)("section",{className:"dumi-default-header-right",children:[(0,e.jsx)(He,{}),(0,e.jsx)($,{}),(0,e.jsx)(re,{}),(0,e.jsx)(ye,{}),h.prefersColor.switch&&(0,e.jsx)(E,{}),(0,e.jsx)(O,{})]}),(0,e.jsx)("button",{type:"button",className:"dumi-default-header-menu-btn",onClick:function(C){C.stopPropagation(),l(function(T){return!T})},children:o?(0,e.jsx)(I.r,{}):(0,e.jsx)(S.r,{})})]})})},Ve=Ue,Fe=function(t){return(0,e.jsx)("h1",{className:"dumi-default-hero-title",children:(0,e.jsx)("span",{children:t.children})})},Ze=Fe,Ke=function(){var t,a=(0,c.eL)(),r=a.frontmatter;return"hero"in r?(0,e.jsxs)("div",{className:"dumi-default-hero",children:[r.hero.title&&(0,e.jsx)(Ze,{children:r.hero.title}),r.hero.description&&(0,e.jsx)("p",{dangerouslySetInnerHTML:{__html:r.hero.description}}),!!(!((t=r.hero.actions)===null||t===void 0)&&t.length)&&(0,e.jsx)("div",{className:"dumi-default-hero-actions",children:r.hero.actions.map(function(i){var o=i.text,l=i.link;return/^(\w+:)\/\/|^(mailto|tel):/.test(l)?(0,e.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:o},o):(0,e.jsx)(c.rU,{to:l,children:o},o)})})]}):null},Ye=Ke,ze=function(){var t=(0,c.TH)(),a=t.pathname,r=(0,c.eL)(),i=(0,c.tx)();return i?(0,e.jsx)("div",{className:"dumi-default-sidebar",children:i.map(function(o,l){return(0,e.jsxs)("dl",{className:"dumi-default-sidebar-group",children:[o.title&&(0,e.jsx)("dt",{children:o.title}),o.children.map(function(v){var h=v.title.split(" ");return(0,e.jsx)("dd",{children:(0,e.jsxs)(c.OL,{to:v.link,title:v.title,end:!0,children:[h[0]," ",(0,e.jsx)("span",{className:"dumi-default-sidebar-group-cn",children:h[1]})]})},v.link)})]},String(l))})}):null},Qe=ze,Je=n(77281),Xe=function(){var t=(0,c.TH)(),a=t.pathname,r=t.search,i=t.hash,o=(0,c.eL)(),l=(0,c.zh)(),v=(0,c.WF)(),h=v.loading,d=(0,u.useRef)(0),f=(0,u.useState)([]),C=m()(f,2),T=C[0],y=C[1],R=u.useMemo(function(){var j=o.toc;return l&&(j=l.toc),j.filter(function(A){var D=A.depth;return D>1&&D<4})},[o,l]);return(0,u.useEffect)(function(){if(!h){var j=R.map(function(A){var D=A.id;return{current:document.getElementById(D)}});y(j)}},[a,r,h]),T.length?(0,e.jsx)(Je.i,{sectionRefs:T,children:function(A){var D=A.currentElementIndexInViewport;return D>-1&&(d.current=D),(0,e.jsx)("ul",{className:"dumi-default-toc",children:R.filter(function(B){var V=B.depth;return V>1&&V<4}).map(function(B,V){var H="".concat(r,"#").concat(encodeURIComponent(B.id)),ee=D>-1?D:d.current;return(0,e.jsx)("li",{"data-depth":B.depth,children:(0,e.jsx)(c.rU,X()(X()({to:H,onClickCapture:function(){decodeURIComponent(i).slice(1)===B.id&&c.m8.replace(r)},title:B.title},ee===V?{className:"active"}:{}),{},{children:B.title}))},B.id)})})}}):null},_e=Xe,Ge=n(22693),qe=n(32538),$e=n(23368),et=n(82187),tt=n.n(et),nt=function(){var t=(0,c.YB)(),a=(0,c.pC)(),r=(0,c.tx)(),i=(0,c.TH)(),o=i.hash,l=i.pathname,v=(0,c.WF)(),h=v.loading,d=v.hostname,f=v.themeConfig,C=(0,u.useState)(!1),T=m()(C,2),y=T[0],R=T[1],j=(0,c.eL)(),A=j.frontmatter,D=(0,c.OI)(),B=m()(D,1),V=B[0];A.toc="content";var H=A.sidebar!==!1&&(r==null?void 0:r.length)>0,ee=A.title==="bifrostui"&&A.filename==="docs/index.md";return(0,u.useEffect)(function(){var W=o.replace("#","");W&&setTimeout(function(){var G=document.getElementById(decodeURIComponent(W));G&&(0,Y.Z)(G.offsetTop-80,{maxDuration:300})},1)},[h,o]),(0,e.jsxs)("div",{className:"dumi-default-doc-layout","data-mobile-sidebar-active":y||void 0,onClick:function(){return R(!1)},children:[(0,e.jsxs)(c.ql,{children:[(0,e.jsx)("html",{lang:t.locale.replace(/-.+$/,""),"data-color-mode":V,"data-theme":"default"}),A.title&&(0,e.jsx)("title",{children:A.title}),A.title&&(0,e.jsx)("meta",{property:"og:title",content:A.title}),A.description&&(0,e.jsx)("meta",{name:"description",content:A.description}),A.description&&(0,e.jsx)("meta",{property:"og:description",content:A.description}),A.keywords&&(0,e.jsx)("meta",{name:"keywords",content:A.keywords.join(",")}),A.keywords&&A.keywords.map(function(W){return(0,e.jsx)("meta",{property:"article:tag",content:W},W)}),d&&(0,e.jsx)("link",{rel:"canonical",href:d+l})]}),(0,e.jsxs)($e.Z,{locale:t.locale==="en-US"?Ge.Z:qe.Z,children:[(0,e.jsx)(Ve,{}),(0,e.jsx)(Ye,{}),(0,e.jsx)(p,{}),H&&(0,e.jsx)("div",{className:"dumi-default-doc-layout-mobile-bar",children:(0,e.jsxs)("button",{type:"button",className:"dumi-default-sidebar-btn",onClick:function(G){G.stopPropagation(),R(function(Ae){return!Ae})},children:[(0,e.jsx)(U.r,{}),t.formatMessage({id:"layout.sidebar.btn"})]})}),(0,e.jsxs)("main",{className:tt()("dumi-default-doc-layout-content",{"home-page":l==="/index-en"||l==="/"}),children:[(0,e.jsx)("div",{className:"left",children:H&&(0,e.jsx)(Qe,{})}),(0,e.jsx)("div",{className:"right",children:(0,e.jsxs)("div",{className:"top",children:[(0,e.jsx)("div",{className:"main",children:(0,e.jsx)(z,{children:a})}),!ee&&(0,e.jsx)("div",{className:"side",children:A.toc==="content"&&(0,e.jsx)("div",{className:"dumi-default-doc-layout-toc-wrapper",children:(0,e.jsx)(_e,{})})})]})})]})]})]})},at=nt},12224:function(K,x,n){n.d(x,{Z:function(){return w}});var N=n(26068),m=n.n(N),U=n(82092),Y=n.n(U),c=n(48305),u=n.n(c),e=n(67825),F=n.n(e),z=n(57615),Q=n(45924),p=n(75271),I=n(52676),S=["className","checked","defaultChecked","inputProps","inputRef","name","checkedChildren","unCheckedChildren","disabled","size","color","onChange"],k="bui-switch",M=(0,p.forwardRef)(function(g,E){var L=g.className,O=g.checked,P=g.defaultChecked,b=g.inputProps,_=g.inputRef,J=g.name,Z=g.checkedChildren,q=g.unCheckedChildren,ae=g.disabled,re=g.size,oe=g.color,te=g.onChange,ce=F()(g,S),se=(0,z.Z)({value:O,defaultValue:!!P}),ie=u()(se,2),X=ie[0],ue=ie[1],de=function(ne,$){ue(ne,$),te==null||te(ne,{checked:$})},he=function(ne){var $,ve=!X;de(ne,ve),b==null||($=b.onChange)===null||$===void 0||$.call(b,ne)};return(0,I.jsxs)("div",m()(m()({ref:E,className:(0,Q.default)("".concat(k),"".concat(k,"-").concat(re),"".concat(k,"-").concat(oe),Y()(Y()({},"".concat(k,"-checked"),X),"".concat(k,"-disabled"),ae),L)},ce),{},{children:[(0,I.jsx)("input",m()(m()({ref:_,type:"checkbox",name:J,checked:X,disabled:ae},b),{},{onChange:he,className:(0,Q.default)("".concat(k,"-input"),b==null?void 0:b.className)})),(Z||q)&&(0,I.jsx)("span",{className:"".concat(k,"-inner"),children:X?Z:q})]}))});M.displayName="BuiSwitch",M.defaultProps={disabled:!1,size:"medium",color:"primary"};var w=M},23368:function(K,x,n){n.d(x,{Z:function(){return Q}});var N=n(75271),m=0;function U(){var p=(0,N.useRef)();return p.current||(m+=1,p.current="b".concat(m.toString(32))),p.current}var Y=U,c=n(49004),u=n(81882),e=n(75479),F=n(52676),z=N.forwardRef(function(p,I){var S=p.isRoot,k=p.locale,M=p.responsive,w=p.defaultLightToken,g=p.defaultDarkToken,E=p.dmLightToken,L=p.dmDarkToken,O=p.token,P=p.children,b=Y();b="".concat(u.OV).concat(b);var _=(0,N.useMemo)(function(){return{locale:k}},[k]),J=P;if(!S&&N.isValidElement(P)){var Z;J=N.cloneElement(P,{className:"".concat(b," ").concat((P==null||(Z=P.props)===null||Z===void 0?void 0:Z.className)||"").trim()})}return(0,N.useEffect)(function(){(M||w||g||E||L||O)&&(0,e.S8)({isRoot:S,containerId:b,container:P,responsive:M,defaultLightToken:w,defaultDarkToken:g,dmLightToken:E,dmDarkToken:L,token:O})},[S,b,M,w,g,E,L,O]),(0,F.jsx)(c.Z.Provider,{value:_,children:J})});z.displayName="BuiThemeProvider";var Q=z},49004:function(K,x,n){var N=n(75271),m=N.createContext(null);x.Z=m},81882:function(K,x,n){n.d(x,{AV:function(){return N},Du:function(){return m},OV:function(){return U}});var N={xs:"575.98px",sm:"576px",md:"768px",lg:"992px",xl:"1200px"},m={defaultLight:[":root","page","xhs-page",".bui-default-light",'[data-color-mode="light"][data-theme="default"]'],defaultDark:[".bui-dark",'[data-color-mode="dark"][data-theme="default"]'],dmLight:[".bui-dm-light",'[data-color-mode="light"][data-theme="dm"]'],dmDark:[".bui-dm-dark",'[data-color-mode="dark"][data-theme="dm"]']},U="bui-var-"},75479:function(K,x,n){n.d(x,{S8:function(){return Q},ZN:function(){return e},iv:function(){return F}});var N=n(48305),m=n.n(N),U=n(75271),Y=n(76099),c=n(81882),u=function(I){var S=I||{},k=S.isRoot,M=S.rootString,w=S.container,g=S.containerId;if(!Y.eW){var E=document.createElement("style");E.type="text/css",E.appendChild(document.createTextNode(M));var L;k?L=document.head:g&&w&&U.isValidElement(w)&&(L=document.querySelector(".".concat(g))),L&&L.appendChild(E)}},e=function(I){var S=I||{},k=S.responsive,M=S.breakpoints,w=M===void 0?c.AV:M;if(k){var g=c.Du.defaultLight,E="".concat(g.join(",")," { ");Object.entries(k).forEach(function(L){var O=L||[],P=m()(O,2),b=P[0],_=P[1];if(!(!b||!_)){var J=Object.entries(_||{}).reduce(function(q,ae){var re=m()(ae,2),oe=re[0],te=re[1];return"".concat(q," ").concat(oe,": ").concat(te,";")},""),Z=b==="xs"?"max-width":"min-width";E+="@media (".concat(Z,": ").concat(w[b],") { ").concat(J," }")}}),E="".concat(E," }"),u({isRoot:!0,rootString:E})}},F=function(I){I&&Object.keys(c.Du).forEach(function(S){var k=c.Du[S],M=I["".concat(S,"Token")];if(M){var w="".concat(k.join(",")," { "),g=Object.entries(M).reduce(function(E,L){var O=m()(L,2),P=O[0],b=O[1];return"".concat(E," ").concat(P,": ").concat(b,";")},"");w="".concat(w," ").concat(g," }"),u({isRoot:!0,rootString:w})}})},z=function(I){var S=I||{},k=S.isRoot,M=k===void 0?!1:k,w=S.token,g=S.container,E=S.containerId;if(w){var L=M?c.Du.defaultLight:[".".concat(E)],O="".concat(L.join(",")," { "),P=Object.entries(w).reduce(function(b,_){var J=m()(_,2),Z=J[0],q=J[1];return"".concat(b," ").concat(Z,": ").concat(q,";")},"");O="".concat(O," ").concat(P," }"),u({isRoot:M,rootString:O,container:g,containerId:E})}},Q=function(I){Y.eW||(F(I),e(I),z(I))}},22693:function(K,x){var n={dialog:{cancel:"Cancel",confirm:"Confirm",placeholder:"Placeholder"},picker:{cancel:"Cancel",confirm:"Confirm"},calendar:{Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},input:{placeholder:"Placeholder"},textarea:{placeholder:"Placeholder"},selector:{select:"Please select"},citySelector:{selectedCityGroupName:"Selected City",currentCityGroupName:"Current City",hotCitiesGroupName:"Hot Cities",gpsType:{title:"Current",code:"GPS"},currentType:{title:"Selected",code:"CRRT"},hotCityType:{title:"Hot",code:"HOT"}},desktopDatePicker:{month:{1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}},datePicker:{year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",second:"Second"}};x.Z=n},32538:function(K,x){var n={dialog:{cancel:"\u53D6\u6D88",confirm:"\u786E\u5B9A",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},picker:{cancel:"\u53D6\u6D88",confirm:"\u786E\u8BA4"},calendar:{Monday:"\u4E00",Tuesday:"\u4E8C",Wednesday:"\u4E09",Thursday:"\u56DB",Friday:"\u4E94",Saturday:"\u516D",Sunday:"\u65E5"},citySelector:{selectedCityGroupName:"\u5F53\u524D\u57CE\u5E02",currentCityGroupName:"\u5B9A\u4F4D\u57CE\u5E02",hotCitiesGroupName:"\u70ED\u95E8\u57CE\u5E02",located:"\u5B9A\u4F4D",current:"\u5F53\u524D",hot:"\u70ED\u95E8"},desktopDatePicker:{month:{1:"1\u6708",2:"2\u6708",3:"3\u6708",4:"4\u6708",5:"5\u6708",6:"6\u6708",7:"7\u6708",8:"8\u6708",9:"9\u6708",10:"10\u6708",11:"11\u6708",12:"12\u6708"}},datePicker:{year:"\u5E74",month:"\u6708",day:"\u65E5",hour:"\u65F6",minute:"\u5206",second:"\u79D2"}};x.Z=n},26523:function(K,x,n){n.r(x);var N=n(30481);x.default=(0,N.default)('<path d="M55 10c.8 0 1.6 0 2.4.1C51 16.4 47 25.2 47 35c0 19.3 15.7 35 35 35 1.4 0 2.8-.1 4.2-.2C79.3 79.6 67.9 86 55 86c-21 0-38-17-38-38s17-38 38-38z"/>',"MoonOutlinedIcon")},58372:function(K,x,n){n.r(x);var N=n(30481);x.default=(0,N.default)('<path d="M46.3 8c21.2 0 38.3 17.1 38.3 38.3 0 9.7-3.6 18.5-9.5 25.2l12.1 12.1c1 1 1 2.6 0 3.6s-2.6 1-3.6 0l-12-12.1C64.8 81 56 84.6 46.3 84.6 25.1 84.6 8 67.5 8 46.3S25.1 8 46.3 8zm0 6C28.5 14 14 28.5 14 46.3s14.4 32.3 32.3 32.3 32.3-14.4 32.3-32.3S64.1 14 46.3 14z"/>',"SearchOutlinedIcon")},96306:function(K,x,n){n.r(x);var N=n(30481);x.default=(0,N.default)('<path d="m75.3 70.6 1.8 1.8c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0l-1.8-1.8c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.2 3-1.2 4.2 0zm-49.9 0c1.2 1.2 1.2 3.1 0 4.2l-1.8 1.8c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l1.8-1.8c1.2-1.2 3.1-1.2 4.2 0zM47.8 20c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28zm0 6c-12.2 0-22 9.8-22 22s9.8 22 22 22 22-9.8 22-22-9.9-22-22-22zM24 19.2l1.8 1.8c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0l-1.8-1.8c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.1 3-1.1 4.2 0zm52.8 0c1.2 1.2 1.2 3.1 0 4.2L75 25.2c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l1.8-1.8c1.1-1.1 3-1.1 4.2 0zM48.2 5c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3s-3-1.3-3-3V8c0-1.7 1.4-3 3-3zM91 47.8c0 1.7-1.3 3-3 3h-5c-1.7 0-3-1.3-3-3s1.3-3 3-3h5c1.7 0 3 1.3 3 3zm-75 0c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3s1.3-3 3-3h5c1.7 0 3 1.3 3 3zM48.2 80c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5c0-1.7 1.4-3 3-3z"/>',"SunOutlinedIcon")},57615:function(K,x,n){n.d(x,{Z:function(){return Y}});var N=n(48305),m=n.n(N),U=n(75271);function Y(c){var u=c.value,e=c.defaultValue,F=c.onChange,z=c.config,Q=z===void 0?{}:z,p=Q.state,I=Q.name,S=(0,U.useState)(e),k=m()(S,2),M=k[0],w=k[1],g=(0,U.useRef)(e),E=u!==void 0;(0,U.useEffect)(function(){!E&&JSON.stringify(e)!==JSON.stringify(g.current)&&p&&I&&console.error(["BUI: A component is changing the default ".concat(p," state of an uncontrolled ").concat(I," after being initialized. ")+"To suppress this warning opt to use a controlled ".concat(I,".")].join(`
`))},[e]);var L=(0,U.useCallback)(function(O,P){w(P),F==null||F(O,{value:P})},[F]);return[E?u:M,L]}}}]);
