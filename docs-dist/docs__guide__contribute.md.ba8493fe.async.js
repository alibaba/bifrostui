"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[3956],{77864:function(P,D,i){i.r(D);var T=i(39502),O=i(98738),A=i(22390),j=i(32465),C=i(68535),v=i(64149),m=i(30888),p=i(10504),d=i(35185),h=i(44735),E=i(67294),n=i(85893);function o(){var s=(0,d.eL)(),t=s.texts;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"\u5F00\u53D1\u6307\u5357",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5F00\u53D1\u6307\u5357",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5F00\u53D1\u6307\u5357"]}),(0,n.jsx)("p",{children:t[0].value}),(0,n.jsxs)("h2",{id:"\u53C2\u4E0E\u5F00\u53D1",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u53C2\u4E0E\u5F00\u53D1",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u53C2\u4E0E\u5F00\u53D1"]}),(0,n.jsxs)("h3",{id:"\u672C\u5730\u5F00\u53D1",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u672C\u5730\u5F00\u53D1",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u672C\u5730\u5F00\u53D1"]}),(0,n.jsx)("p",{children:t[1].value}),(0,n.jsxs)("p",{children:[t[2].value,(0,n.jsx)("a",{href:"https://pnpm.io/",children:t[3].value}),t[4].value]}),(0,n.jsx)(v.Z,{lang:"bash",children:t[5].value}),(0,n.jsxs)("h3",{id:"\u76EE\u5F55\u7ED3\u6784",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u76EE\u5F55\u7ED3\u6784",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u76EE\u5F55\u7ED3\u6784"]}),(0,n.jsx)("p",{children:t[6].value}),(0,n.jsx)(v.Z,{children:t[7].value}),(0,n.jsx)("p",{children:t[8].value}),(0,n.jsx)(v.Z,{children:t[9].value}),(0,n.jsxs)("h2",{id:"\u63D0\u4EA4-pr",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u63D0\u4EA4-pr",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u63D0\u4EA4 PR"]}),(0,n.jsxs)("h3",{id:"pull-request-\u6D41\u7A0B",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#pull-request-\u6D41\u7A0B",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Pull Request \u6D41\u7A0B"]}),(0,n.jsxs)("p",{children:[t[10].value,(0,n.jsx)("a",{href:"https://github.com/firstcontributions/first-contributions",children:t[11].value}),t[12].value]}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:t[13].value}),(0,n.jsxs)("li",{children:[t[14].value,(0,n.jsx)("code",{children:t[15].value}),t[16].value,(0,n.jsx)("code",{children:t[17].value})]}),(0,n.jsxs)("li",{children:[t[18].value,(0,n.jsx)("code",{children:t[19].value}),t[20].value,(0,n.jsx)("code",{children:t[21].value}),t[22].value]}),(0,n.jsx)("li",{children:t[23].value}),(0,n.jsx)("li",{children:t[24].value})]}),(0,n.jsxs)("h3",{id:"\u540C\u6B65\u6700\u65B0\u4EE3\u7801",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u540C\u6B65\u6700\u65B0\u4EE3\u7801",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u540C\u6B65\u6700\u65B0\u4EE3\u7801"]}),(0,n.jsx)("p",{children:t[25].value}),(0,n.jsx)(v.Z,{lang:"bash",children:t[26].value})]})})}function e(){return(0,n.jsx)(d.dY,{children:(0,n.jsx)(E.Suspense,{fallback:(0,n.jsx)(h.Z,{}),children:(0,n.jsx)(o,{})})})}D.default=e},39502:function(P,D,i){var T=i(97857),O=i.n(T),A=i(5574),j=i.n(A),C=i(35185),v=i(67294),m=i(30888),p=i(85893),d={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var s=this,t=[];return Object.entries(e.properties||{}).forEach(function(u){var r,a=j()(u,2),l=a[0],_=a[1];t.push("".concat(l).concat((r=e.required)!==null&&r!==void 0&&r.includes(l)?"":"?",": ").concat(_.type==="object"?"object":s.toString(_)))}),t.length?"{ ".concat(t.join("; ")," }"):"{}"},array:function(e){if(e.items){var s=this.getValidClassName(e.items);return s?"".concat(s,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var s=this,t=e.signature,u="oneOf"in t?t.oneOf:[t];return u.map(function(r){return"".concat(r.isAsync?"async ":"","(").concat(r.arguments.map(function(a){return"".concat(a.key,": ").concat(s.toString(a))}).join(", "),") => ").concat(s.toString(r.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(s){return JSON.stringify(s)}).join(" | ")},oneOf:function(e){var s=this;return e.oneOf.map(function(t){return s.getValidClassName(t)||s.toString(t)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},h=function(e){var s=useState(function(){return d.toString(e)}),t=_slicedToArray(s,2),u=t[0],r=t[1];return useEffect(function(){r(d.toString(e))},[e]),_jsx("code",{children:u})},E=function(e){var s,t=useRouteMeta(),u=t.frontmatter,r=useAtomAssets(),a=r.components,l=e.id||u.atomId,_=useIntl();if(!l)throw new Error("`id` properties if required for API component!");var c=a==null?void 0:a[l];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:c&&(s=c.propsConfig)!==null&&s!==void 0&&s.properties?Object.entries(c.propsConfig.properties).map(function(g){var b,y=_slicedToArray(g,2),f=y[0],x=y[1];return _jsxs("tr",{children:[_jsx("td",{children:f}),_jsx("td",{children:x.description||"--"}),_jsx("td",{children:_jsx(h,_objectSpread({},x))}),_jsx("td",{children:_jsx("code",{children:(b=c.propsConfig.required)!==null&&b!==void 0&&b.includes(f)?_.formatMessage({id:"api.component.required"}):JSON.stringify(x.default)||"--"})})]},f)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(a?"not.found":"unavailable")},{id:l})})})})]})})},n=null},98738:function(P,D,i){var T=i(97857),O=i(67294),A=i(85893),j=function(m){return _jsx("span",_objectSpread({className:"dumi-default-badge"},m))},C=null},30888:function(P,D,i){i.d(D,{Z:function(){return n}});var T=i(97857),O=i.n(T),A=i(5574),j=i.n(A),C=i(13769),v=i.n(C),m=i(62697),p=i(67294),d=i(85893),h=["children"],E=function(e){var s=e.children,t=v()(e,h),u=(0,p.useRef)(null),r=(0,p.useState)(!1),a=j()(r,2),l=a[0],_=a[1],c=(0,p.useState)(!1),g=j()(c,2),b=g[0],y=g[1];return(0,p.useEffect)(function(){var f=u.current;if(f){var x=(0,m.Z)(function(){_(f.scrollLeft>0),y(f.scrollLeft<f.scrollWidth-f.offsetWidth)},100);return x(),f.addEventListener("scroll",x),window.addEventListener("resize",x),function(){f.removeEventListener("scroll",x),window.removeEventListener("resize",x)}}},[]),(0,d.jsx)("div",{className:"dumi-default-table",children:(0,d.jsx)("div",{className:"dumi-default-table-content",ref:u,"data-left-folded":l||void 0,"data-right-folded":b||void 0,children:(0,d.jsx)("table",O()(O()({},t),{},{children:s}))})})},n=E},10504:function(P,D,i){var T=i(97857),O=i(5574),A=i(19632),j=i(15092),C=i(67294),v=i(85893);function m(u){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=[];return[].concat(u).forEach(function(l,_){var c="".concat(r?"".concat(r,"-"):"").concat(_);switch(l==null?void 0:l.type){case"ul":{var g,b=((g=a[a.length-1])===null||g===void 0?void 0:g.children)||a,y=m(l.props.children||[],c);b.push.apply(b,_toConsumableArray(y));break}case"li":{var f=m(l.props.children,c);a.push({title:[].concat(l.props.children).filter(function(x){return x.type!=="ul"}),key:c,children:f,isLeaf:!f.length});break}default:}}),a}var p=function(r){var a=useState(m(r)),l=_slicedToArray(a,2),_=l[0],c=l[1];return useEffect(function(){c(m(r))},[r]),_},d=function(r){var a=r.isLeaf,l=r.expanded;return a?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):l?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},h=function(r){var a=r.isLeaf,l=r.expanded;return a?_jsx("span",{className:"tree-switcher-leaf-line"}):l?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},E=function(){return{height:0,opacity:0}},n=function(r){var a=r.scrollHeight;return{height:a,opacity:1}},o=function(r){return{height:r?r.offsetHeight:0}},e=function(r,a){return(a==null?void 0:a.deadline)===!0||a.propertyName==="height"},s={motionName:"ant-motion-collapse",onAppearStart:E,onEnterStart:E,onAppearActive:n,onEnterActive:n,onLeaveStart:o,onLeaveActive:E,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},t=function(u){var r=p(u.children),a=createRef(),l=function(c,g){var b=g.isLeaf;b||c.shiftKey||c.metaKey||c.ctrlKey||a.current.onNodeExpand(c,g)};return _jsx(Tree,{className:"dumi-default-tree",icon:d,ref:a,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},s),{},{motionAppear:!1}),onClick:l,treeData:[{key:"0",title:u.title||"<root>",children:r}],defaultExpandAll:!0,switcherIcon:h})}},62697:function(P,D,i){i.d(D,{Z:function(){return T}});function T(O){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:200,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{leading:!0,trailing:!1},C=j.leading,v=C===void 0?!0:C,m=j.trailing,p=m===void 0?!1:m,d=0,h=null,E=function(){for(var o=this,e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];var u=new Date().getTime();!d&&!v&&(d=u);var r=A-(u-d);if(r<=0){h&&(clearTimeout(h),h=null),O.apply(this,s),d=u;return}p&&!h&&(h=setTimeout(function(){h=null,d=v?new Date().getTime():0,O.apply(o,s)},r))};return E}}}]);
