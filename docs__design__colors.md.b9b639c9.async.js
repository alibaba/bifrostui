"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[7297],{56420:function(C,b,t){t.r(b);var T=t(39502),O=t(98738),A=t(22390),j=t(32465),y=t(68535),M=t(64149),h=t(30888),x=t(10504),d=t(35185),f=t(44735),p=t(67294),a=t(85893);function l(){var s=(0,d.eL)(),r=s.texts;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"markdown",children:[(0,a.jsxs)("h1",{id:"\u8272\u5F69",children:[(0,a.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8272\u5F69",children:(0,a.jsx)("span",{className:"icon icon-link"})}),"\u8272\u5F69"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("em",{children:r[0].value}),r[1].value,(0,a.jsx)("em",{children:r[2].value}),r[3].value]}),(0,a.jsxs)("h2",{id:"\u8272\u5F69\u6A21\u578B",children:[(0,a.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8272\u5F69\u6A21\u578B",children:(0,a.jsx)("span",{className:"icon icon-link"})}),"\u8272\u5F69\u6A21\u578B"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("em",{children:r[4].value}),r[5].value]}),(0,a.jsxs)("h2",{id:"\u8272\u677F",children:[(0,a.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8272\u677F",children:(0,a.jsx)("span",{className:"icon icon-link"})}),"\u8272\u677F"]})]}),(0,a.jsx)(d.Dl,{demo:{id:"docs-design-colors-demo-colors",inline:!0},previewerProps:{}})]})}function e(){return(0,a.jsx)(d.dY,{children:(0,a.jsx)(p.Suspense,{fallback:(0,a.jsx)(f.Z,{}),children:(0,a.jsx)(l,{})})})}b.default=e},39502:function(C,b,t){var T=t(97857),O=t.n(T),A=t(5574),j=t.n(A),y=t(35185),M=t(67294),h=t(30888),x=t(85893),d={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var s=this,r=[];return Object.entries(e.properties||{}).forEach(function(o){var n,i=j()(o,2),u=i[0],_=i[1];r.push("".concat(u).concat((n=e.required)!==null&&n!==void 0&&n.includes(u)?"":"?",": ").concat(_.type==="object"?"object":s.toString(_)))}),r.length?"{ ".concat(r.join("; ")," }"):"{}"},array:function(e){if(e.items){var s=this.getValidClassName(e.items);return s?"".concat(s,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var s=this,r=e.signature,o="oneOf"in r?r.oneOf:[r];return o.map(function(n){return"".concat(n.isAsync?"async ":"","(").concat(n.arguments.map(function(i){return"".concat(i.key,": ").concat(s.toString(i))}).join(", "),") => ").concat(s.toString(n.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(s){return JSON.stringify(s)}).join(" | ")},oneOf:function(e){var s=this;return e.oneOf.map(function(r){return s.getValidClassName(r)||s.toString(r)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},f=function(e){var s=useState(function(){return d.toString(e)}),r=_slicedToArray(s,2),o=r[0],n=r[1];return useEffect(function(){n(d.toString(e))},[e]),_jsx("code",{children:o})},p=function(e){var s,r=useRouteMeta(),o=r.frontmatter,n=useAtomAssets(),i=n.components,u=e.id||o.atomId,_=useIntl();if(!u)throw new Error("`id` properties if required for API component!");var c=i==null?void 0:i[u];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:c&&(s=c.propsConfig)!==null&&s!==void 0&&s.properties?Object.entries(c.propsConfig.properties).map(function(v){var E,P=_slicedToArray(v,2),m=P[0],g=P[1];return _jsxs("tr",{children:[_jsx("td",{children:m}),_jsx("td",{children:g.description||"--"}),_jsx("td",{children:_jsx(f,_objectSpread({},g))}),_jsx("td",{children:_jsx("code",{children:(E=c.propsConfig.required)!==null&&E!==void 0&&E.includes(m)?_.formatMessage({id:"api.component.required"}):JSON.stringify(g.default)||"--"})})]},m)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(i?"not.found":"unavailable")},{id:u})})})})]})})},a=null},98738:function(C,b,t){var T=t(97857),O=t(67294),A=t(85893),j=function(h){return _jsx("span",_objectSpread({className:"dumi-default-badge"},h))},y=null},30888:function(C,b,t){t.d(b,{Z:function(){return a}});var T=t(97857),O=t.n(T),A=t(5574),j=t.n(A),y=t(13769),M=t.n(y),h=t(62697),x=t(67294),d=t(85893),f=["children"],p=function(e){var s=e.children,r=M()(e,f),o=(0,x.useRef)(null),n=(0,x.useState)(!1),i=j()(n,2),u=i[0],_=i[1],c=(0,x.useState)(!1),v=j()(c,2),E=v[0],P=v[1];return(0,x.useEffect)(function(){var m=o.current;if(m){var g=(0,h.Z)(function(){_(m.scrollLeft>0),P(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return g(),m.addEventListener("scroll",g),window.addEventListener("resize",g),function(){m.removeEventListener("scroll",g),window.removeEventListener("resize",g)}}},[]),(0,d.jsx)("div",{className:"dumi-default-table",children:(0,d.jsx)("div",{className:"dumi-default-table-content",ref:o,"data-left-folded":u||void 0,"data-right-folded":E||void 0,children:(0,d.jsx)("table",O()(O()({},r),{},{children:s}))})})},a=p},10504:function(C,b,t){var T=t(97857),O=t(5574),A=t(19632),j=t(15092),y=t(67294),M=t(85893);function h(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=[];return[].concat(o).forEach(function(u,_){var c="".concat(n?"".concat(n,"-"):"").concat(_);switch(u==null?void 0:u.type){case"ul":{var v,E=((v=i[i.length-1])===null||v===void 0?void 0:v.children)||i,P=h(u.props.children||[],c);E.push.apply(E,_toConsumableArray(P));break}case"li":{var m=h(u.props.children,c);i.push({title:[].concat(u.props.children).filter(function(g){return g.type!=="ul"}),key:c,children:m,isLeaf:!m.length});break}default:}}),i}var x=function(n){var i=useState(h(n)),u=_slicedToArray(i,2),_=u[0],c=u[1];return useEffect(function(){c(h(n))},[n]),_},d=function(n){var i=n.isLeaf,u=n.expanded;return i?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):u?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},f=function(n){var i=n.isLeaf,u=n.expanded;return i?_jsx("span",{className:"tree-switcher-leaf-line"}):u?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},p=function(){return{height:0,opacity:0}},a=function(n){var i=n.scrollHeight;return{height:i,opacity:1}},l=function(n){return{height:n?n.offsetHeight:0}},e=function(n,i){return(i==null?void 0:i.deadline)===!0||i.propertyName==="height"},s={motionName:"ant-motion-collapse",onAppearStart:p,onEnterStart:p,onAppearActive:a,onEnterActive:a,onLeaveStart:l,onLeaveActive:p,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},r=function(o){var n=x(o.children),i=createRef(),u=function(c,v){var E=v.isLeaf;E||c.shiftKey||c.metaKey||c.ctrlKey||i.current.onNodeExpand(c,v)};return _jsx(Tree,{className:"dumi-default-tree",icon:d,ref:i,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},s),{},{motionAppear:!1}),onClick:u,treeData:[{key:"0",title:o.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:f})}},62697:function(C,b,t){t.d(b,{Z:function(){return T}});function T(O){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:200,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{leading:!0,trailing:!1},y=j.leading,M=y===void 0?!0:y,h=j.trailing,x=h===void 0?!1:h,d=0,f=null,p=function(){for(var l=this,e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];var o=new Date().getTime();!d&&!M&&(d=o);var n=A-(o-d);if(n<=0){f&&(clearTimeout(f),f=null),O.apply(this,s),d=o;return}x&&!f&&(f=setTimeout(function(){f=null,d=M?new Date().getTime():0,O.apply(l,s)},n))};return p}}}]);