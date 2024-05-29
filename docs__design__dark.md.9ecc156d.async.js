"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[8381],{77099:function(C,b,n){n.r(b);var T=n(39502),O=n(98738),A=n(22390),j=n(32465),y=n(68535),M=n(64149),m=n(30888),x=n(10504),d=n(35185),f=n(44735),p=n(67294),t=n(85893);function l(){var s=(0,d.eL)(),a=s.texts;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"\u6697\u9ED1\u6A21\u5F0F",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6697\u9ED1\u6A21\u5F0F",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u6697\u9ED1\u6A21\u5F0F"]}),(0,t.jsx)("p",{children:a[0].value}),(0,t.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("p",{children:a[1].value})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{children:a[2].value})})]}),(0,t.jsxs)("h2",{id:"\u8BBE\u8BA1\u539F\u5219",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8BBE\u8BA1\u539F\u5219",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u8BBE\u8BA1\u539F\u5219"]}),(0,t.jsxs)("ol",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:a[3].value})}),(0,t.jsx)("p",{children:a[4].value})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:a[5].value})}),(0,t.jsx)("p",{children:a[6].value})]})]}),(0,t.jsxs)("h2",{id:"\u8272\u5F69",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8272\u5F69",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u8272\u5F69"]}),(0,t.jsx)("p",{children:a[7].value})]}),(0,t.jsx)(d.Dl,{demo:{id:"docs-design-dark-demo-dark",inline:!0},previewerProps:{}})]})}function e(){return(0,t.jsx)(d.dY,{children:(0,t.jsx)(p.Suspense,{fallback:(0,t.jsx)(f.Z,{}),children:(0,t.jsx)(l,{})})})}b.default=e},39502:function(C,b,n){var T=n(97857),O=n.n(T),A=n(5574),j=n.n(A),y=n(35185),M=n(67294),m=n(30888),x=n(85893),d={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var s=this,a=[];return Object.entries(e.properties||{}).forEach(function(u){var i,r=j()(u,2),o=r[0],_=r[1];a.push("".concat(o).concat((i=e.required)!==null&&i!==void 0&&i.includes(o)?"":"?",": ").concat(_.type==="object"?"object":s.toString(_)))}),a.length?"{ ".concat(a.join("; ")," }"):"{}"},array:function(e){if(e.items){var s=this.getValidClassName(e.items);return s?"".concat(s,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var s=this,a=e.signature,u="oneOf"in a?a.oneOf:[a];return u.map(function(i){return"".concat(i.isAsync?"async ":"","(").concat(i.arguments.map(function(r){return"".concat(r.key,": ").concat(s.toString(r))}).join(", "),") => ").concat(s.toString(i.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(s){return JSON.stringify(s)}).join(" | ")},oneOf:function(e){var s=this;return e.oneOf.map(function(a){return s.getValidClassName(a)||s.toString(a)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},f=function(e){var s=useState(function(){return d.toString(e)}),a=_slicedToArray(s,2),u=a[0],i=a[1];return useEffect(function(){i(d.toString(e))},[e]),_jsx("code",{children:u})},p=function(e){var s,a=useRouteMeta(),u=a.frontmatter,i=useAtomAssets(),r=i.components,o=e.id||u.atomId,_=useIntl();if(!o)throw new Error("`id` properties if required for API component!");var c=r==null?void 0:r[o];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:c&&(s=c.propsConfig)!==null&&s!==void 0&&s.properties?Object.entries(c.propsConfig.properties).map(function(v){var E,P=_slicedToArray(v,2),h=P[0],g=P[1];return _jsxs("tr",{children:[_jsx("td",{children:h}),_jsx("td",{children:g.description||"--"}),_jsx("td",{children:_jsx(f,_objectSpread({},g))}),_jsx("td",{children:_jsx("code",{children:(E=c.propsConfig.required)!==null&&E!==void 0&&E.includes(h)?_.formatMessage({id:"api.component.required"}):JSON.stringify(g.default)||"--"})})]},h)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:o})})})})]})})},t=null},98738:function(C,b,n){var T=n(97857),O=n(67294),A=n(85893),j=function(m){return _jsx("span",_objectSpread({className:"dumi-default-badge"},m))},y=null},30888:function(C,b,n){n.d(b,{Z:function(){return t}});var T=n(97857),O=n.n(T),A=n(5574),j=n.n(A),y=n(13769),M=n.n(y),m=n(62697),x=n(67294),d=n(85893),f=["children"],p=function(e){var s=e.children,a=M()(e,f),u=(0,x.useRef)(null),i=(0,x.useState)(!1),r=j()(i,2),o=r[0],_=r[1],c=(0,x.useState)(!1),v=j()(c,2),E=v[0],P=v[1];return(0,x.useEffect)(function(){var h=u.current;if(h){var g=(0,m.Z)(function(){_(h.scrollLeft>0),P(h.scrollLeft<h.scrollWidth-h.offsetWidth)},100);return g(),h.addEventListener("scroll",g),window.addEventListener("resize",g),function(){h.removeEventListener("scroll",g),window.removeEventListener("resize",g)}}},[]),(0,d.jsx)("div",{className:"dumi-default-table",children:(0,d.jsx)("div",{className:"dumi-default-table-content",ref:u,"data-left-folded":o||void 0,"data-right-folded":E||void 0,children:(0,d.jsx)("table",O()(O()({},a),{},{children:s}))})})},t=p},10504:function(C,b,n){var T=n(97857),O=n(5574),A=n(19632),j=n(15092),y=n(67294),M=n(85893);function m(u){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(u).forEach(function(o,_){var c="".concat(i?"".concat(i,"-"):"").concat(_);switch(o==null?void 0:o.type){case"ul":{var v,E=((v=r[r.length-1])===null||v===void 0?void 0:v.children)||r,P=m(o.props.children||[],c);E.push.apply(E,_toConsumableArray(P));break}case"li":{var h=m(o.props.children,c);r.push({title:[].concat(o.props.children).filter(function(g){return g.type!=="ul"}),key:c,children:h,isLeaf:!h.length});break}default:}}),r}var x=function(i){var r=useState(m(i)),o=_slicedToArray(r,2),_=o[0],c=o[1];return useEffect(function(){c(m(i))},[i]),_},d=function(i){var r=i.isLeaf,o=i.expanded;return r?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):o?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},f=function(i){var r=i.isLeaf,o=i.expanded;return r?_jsx("span",{className:"tree-switcher-leaf-line"}):o?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},p=function(){return{height:0,opacity:0}},t=function(i){var r=i.scrollHeight;return{height:r,opacity:1}},l=function(i){return{height:i?i.offsetHeight:0}},e=function(i,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},s={motionName:"ant-motion-collapse",onAppearStart:p,onEnterStart:p,onAppearActive:t,onEnterActive:t,onLeaveStart:l,onLeaveActive:p,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},a=function(u){var i=x(u.children),r=createRef(),o=function(c,v){var E=v.isLeaf;E||c.shiftKey||c.metaKey||c.ctrlKey||r.current.onNodeExpand(c,v)};return _jsx(Tree,{className:"dumi-default-tree",icon:d,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},s),{},{motionAppear:!1}),onClick:o,treeData:[{key:"0",title:u.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:f})}},62697:function(C,b,n){n.d(b,{Z:function(){return T}});function T(O){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:200,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{leading:!0,trailing:!1},y=j.leading,M=y===void 0?!0:y,m=j.trailing,x=m===void 0?!1:m,d=0,f=null,p=function(){for(var l=this,e=arguments.length,s=new Array(e),a=0;a<e;a++)s[a]=arguments[a];var u=new Date().getTime();!d&&!M&&(d=u);var i=A-(u-d);if(i<=0){f&&(clearTimeout(f),f=null),O.apply(this,s),d=u;return}x&&!f&&(f=setTimeout(function(){f=null,d=M?new Date().getTime():0,O.apply(l,s)},i))};return p}}}]);