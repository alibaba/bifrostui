"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[7568],{61241:function(P,O,n){n.r(O);var A=n(39502),T=n(98738),C=n(22390),x=n(32465),y=n(68535),f=n(64149),v=n(30888),p=n(10504),d=n(35185),h=n(44735),E=n(67294),t=n(85893);function l(){var s=(0,d.eL)(),i=s.texts;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"\u5FEB\u901F\u4E0A\u624B",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5FEB\u901F\u4E0A\u624B",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u5FEB\u901F\u4E0A\u624B"]}),(0,t.jsxs)("h2",{id:"\u5B89\u88C5",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B89\u88C5",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u5B89\u88C5"]}),(0,t.jsx)(f.Z,{lang:"bash",children:i[0].value}),(0,t.jsxs)("h2",{id:"\u4F7F\u7528",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),(0,t.jsxs)("p",{children:[i[1].value,(0,t.jsx)("code",{children:i[2].value})]}),(0,t.jsx)("p",{children:i[3].value}),(0,t.jsx)(f.Z,{lang:"js",children:i[4].value}),(0,t.jsx)("p",{children:i[5].value}),(0,t.jsx)(f.Z,{lang:"less",children:i[6].value}),(0,t.jsx)("p",{children:i[7].value}),(0,t.jsx)(f.Z,{lang:"js",children:i[8].value}),(0,t.jsxs)("h2",{id:"\u5C0F\u7A0B\u5E8F\u914D\u7F6E",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5C0F\u7A0B\u5E8F\u914D\u7F6E",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u5C0F\u7A0B\u5E8F\u914D\u7F6E"]}),(0,t.jsxs)("p",{children:[i[9].value,(0,t.jsx)("a",{href:"https://taro-docs.jd.com/docs/",children:i[10].value}),i[11].value,(0,t.jsx)("code",{children:i[12].value}),i[13].value]}),(0,t.jsx)(f.Z,{lang:"js",children:i[14].value}),(0,t.jsxs)("h2",{id:"\u6309\u9700\u5F15\u5165",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6309\u9700\u5F15\u5165",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u6309\u9700\u5F15\u5165"]}),(0,t.jsx)("p",{children:i[15].value}),(0,t.jsx)(f.Z,{lang:"js",children:i[16].value})]})})}function e(){return(0,t.jsx)(d.dY,{children:(0,t.jsx)(E.Suspense,{fallback:(0,t.jsx)(h.Z,{}),children:(0,t.jsx)(l,{})})})}O.default=e},39502:function(P,O,n){var A=n(97857),T=n.n(A),C=n(5574),x=n.n(C),y=n(35185),f=n(67294),v=n(30888),p=n(85893),d={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var s=this,i=[];return Object.entries(e.properties||{}).forEach(function(u){var r,a=x()(u,2),o=a[0],_=a[1];i.push("".concat(o).concat((r=e.required)!==null&&r!==void 0&&r.includes(o)?"":"?",": ").concat(_.type==="object"?"object":s.toString(_)))}),i.length?"{ ".concat(i.join("; ")," }"):"{}"},array:function(e){if(e.items){var s=this.getValidClassName(e.items);return s?"".concat(s,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var s=this,i=e.signature,u="oneOf"in i?i.oneOf:[i];return u.map(function(r){return"".concat(r.isAsync?"async ":"","(").concat(r.arguments.map(function(a){return"".concat(a.key,": ").concat(s.toString(a))}).join(", "),") => ").concat(s.toString(r.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(s){return JSON.stringify(s)}).join(" | ")},oneOf:function(e){var s=this;return e.oneOf.map(function(i){return s.getValidClassName(i)||s.toString(i)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},h=function(e){var s=useState(function(){return d.toString(e)}),i=_slicedToArray(s,2),u=i[0],r=i[1];return useEffect(function(){r(d.toString(e))},[e]),_jsx("code",{children:u})},E=function(e){var s,i=useRouteMeta(),u=i.frontmatter,r=useAtomAssets(),a=r.components,o=e.id||u.atomId,_=useIntl();if(!o)throw new Error("`id` properties if required for API component!");var c=a==null?void 0:a[o];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:c&&(s=c.propsConfig)!==null&&s!==void 0&&s.properties?Object.entries(c.propsConfig.properties).map(function(g){var b,M=_slicedToArray(g,2),m=M[0],j=M[1];return _jsxs("tr",{children:[_jsx("td",{children:m}),_jsx("td",{children:j.description||"--"}),_jsx("td",{children:_jsx(h,_objectSpread({},j))}),_jsx("td",{children:_jsx("code",{children:(b=c.propsConfig.required)!==null&&b!==void 0&&b.includes(m)?_.formatMessage({id:"api.component.required"}):JSON.stringify(j.default)||"--"})})]},m)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(a?"not.found":"unavailable")},{id:o})})})})]})})},t=null},98738:function(P,O,n){var A=n(97857),T=n(67294),C=n(85893),x=function(v){return _jsx("span",_objectSpread({className:"dumi-default-badge"},v))},y=null},30888:function(P,O,n){n.d(O,{Z:function(){return t}});var A=n(97857),T=n.n(A),C=n(5574),x=n.n(C),y=n(13769),f=n.n(y),v=n(62697),p=n(67294),d=n(85893),h=["children"],E=function(e){var s=e.children,i=f()(e,h),u=(0,p.useRef)(null),r=(0,p.useState)(!1),a=x()(r,2),o=a[0],_=a[1],c=(0,p.useState)(!1),g=x()(c,2),b=g[0],M=g[1];return(0,p.useEffect)(function(){var m=u.current;if(m){var j=(0,v.Z)(function(){_(m.scrollLeft>0),M(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return j(),m.addEventListener("scroll",j),window.addEventListener("resize",j),function(){m.removeEventListener("scroll",j),window.removeEventListener("resize",j)}}},[]),(0,d.jsx)("div",{className:"dumi-default-table",children:(0,d.jsx)("div",{className:"dumi-default-table-content",ref:u,"data-left-folded":o||void 0,"data-right-folded":b||void 0,children:(0,d.jsx)("table",T()(T()({},i),{},{children:s}))})})},t=E},10504:function(P,O,n){var A=n(97857),T=n(5574),C=n(19632),x=n(15092),y=n(67294),f=n(85893);function v(u){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=[];return[].concat(u).forEach(function(o,_){var c="".concat(r?"".concat(r,"-"):"").concat(_);switch(o==null?void 0:o.type){case"ul":{var g,b=((g=a[a.length-1])===null||g===void 0?void 0:g.children)||a,M=v(o.props.children||[],c);b.push.apply(b,_toConsumableArray(M));break}case"li":{var m=v(o.props.children,c);a.push({title:[].concat(o.props.children).filter(function(j){return j.type!=="ul"}),key:c,children:m,isLeaf:!m.length});break}default:}}),a}var p=function(r){var a=useState(v(r)),o=_slicedToArray(a,2),_=o[0],c=o[1];return useEffect(function(){c(v(r))},[r]),_},d=function(r){var a=r.isLeaf,o=r.expanded;return a?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):o?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},h=function(r){var a=r.isLeaf,o=r.expanded;return a?_jsx("span",{className:"tree-switcher-leaf-line"}):o?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},E=function(){return{height:0,opacity:0}},t=function(r){var a=r.scrollHeight;return{height:a,opacity:1}},l=function(r){return{height:r?r.offsetHeight:0}},e=function(r,a){return(a==null?void 0:a.deadline)===!0||a.propertyName==="height"},s={motionName:"ant-motion-collapse",onAppearStart:E,onEnterStart:E,onAppearActive:t,onEnterActive:t,onLeaveStart:l,onLeaveActive:E,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},i=function(u){var r=p(u.children),a=createRef(),o=function(c,g){var b=g.isLeaf;b||c.shiftKey||c.metaKey||c.ctrlKey||a.current.onNodeExpand(c,g)};return _jsx(Tree,{className:"dumi-default-tree",icon:d,ref:a,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},s),{},{motionAppear:!1}),onClick:o,treeData:[{key:"0",title:u.title||"<root>",children:r}],defaultExpandAll:!0,switcherIcon:h})}},62697:function(P,O,n){n.d(O,{Z:function(){return A}});function A(T){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:200,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{leading:!0,trailing:!1},y=x.leading,f=y===void 0?!0:y,v=x.trailing,p=v===void 0?!1:v,d=0,h=null,E=function(){for(var l=this,e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];var u=new Date().getTime();!d&&!f&&(d=u);var r=C-(u-d);if(r<=0){h&&(clearTimeout(h),h=null),T.apply(this,s),d=u;return}p&&!h&&(h=setTimeout(function(){h=null,d=f?new Date().getTime():0,T.apply(l,s)},r))};return E}}}]);