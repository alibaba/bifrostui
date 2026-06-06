"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[4008],{1968:function(M,p,n){n.r(p);var E=n(87247),y=n(54342),P=n(14011),j=n(41819),T=n(29899),A=n(15897),v=n(62858),g=n(92336),l=n(9877),c=n(63586),x=n(57393),f=n(92462),t=n(28047);function e(){return(0,t.jsx)(l.dY,{children:(0,t.jsx)(x.Suspense,{fallback:(0,t.jsx)(c.Z,{}),children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"transition-basic-transition",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#transition-basic-transition",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"Transition Basic Transition"]}),(0,t.jsx)("p",{children:f.texts[0].value}),(0,t.jsx)("p",{children:f.texts[1].value}),(0,t.jsx)("p",{children:f.texts[2].value}),(0,t.jsxs)("h2",{id:"basic-usage",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"Basic Usage"]}),(0,t.jsx)("p",{children:f.texts[3].value})]}),(0,t.jsx)(l.Dl,{demo:{id:"packages-bui-core-src-transition-demo-en-us-0"},previewerProps:{}}),(0,t.jsx)("div",{className:"markdown",children:(0,t.jsx)(A.Z,{children:f.texts[4].value})})]})})})}p.default=e},87247:function(M,p,n){var E=n(26068),y=n.n(E),P=n(48305),j=n.n(P),T=n(9877),A=n(57393),v=n(62858),g=n(28047),l={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var a=this,u=[];return Object.entries(e.properties||{}).forEach(function(o){var r,i=j()(o,2),s=i[0],d=i[1];u.push("".concat(s).concat((r=e.required)!==null&&r!==void 0&&r.includes(s)?"":"?",": ").concat(d.type==="object"?"object":a.toString(d)))}),u.length?"{ ".concat(u.join("; ")," }"):"{}"},array:function(e){if(e.items){var a=this.getValidClassName(e.items);return a?"".concat(a,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var a=this,u=e.signature,o="oneOf"in u?u.oneOf:[u];return o.map(function(r){return"".concat(r.isAsync?"async ":"","(").concat(r.arguments.map(function(i){return"".concat(i.key,": ").concat(a.toString(i))}).join(", "),") => ").concat(a.toString(r.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(a){return JSON.stringify(a)}).join(" | ")},oneOf:function(e){var a=this;return e.oneOf.map(function(u){return a.getValidClassName(u)||a.toString(u)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},c=function(e){var a=useState(function(){return l.toString(e)}),u=_slicedToArray(a,2),o=u[0],r=u[1];return useEffect(function(){r(l.toString(e))},[e]),_jsx("code",{children:o})},x=function(e){var a,u=useRouteMeta(),o=u.frontmatter,r=useAtomAssets(),i=r.components,s=e.id||o.atomId,d=useIntl();if(!s)throw new Error("`id` properties if required for API component!");var m=i==null?void 0:i[s];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:d.formatMessage({id:"api.component.name"})}),_jsx("th",{children:d.formatMessage({id:"api.component.description"})}),_jsx("th",{children:d.formatMessage({id:"api.component.type"})}),_jsx("th",{children:d.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:m&&(a=m.propsConfig)!==null&&a!==void 0&&a.properties?Object.entries(m.propsConfig.properties).map(function(O){var h,C=_slicedToArray(O,2),_=C[0],b=C[1];return _jsxs("tr",{children:[_jsx("td",{children:_}),_jsx("td",{children:b.description||"--"}),_jsx("td",{children:_jsx(c,_objectSpread({},b))}),_jsx("td",{children:_jsx("code",{children:(h=m.propsConfig.required)!==null&&h!==void 0&&h.includes(_)?d.formatMessage({id:"api.component.required"}):JSON.stringify(b.default)||"--"})})]},_)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:d.formatMessage({id:"api.component.".concat(i?"not.found":"unavailable")},{id:s})})})})]})})},f=null},54342:function(M,p,n){var E=n(26068),y=n(67825),P=n(57393),j=n(28047),T=null,A=function(l){var c=l,x=c.key,f=_objectWithoutProperties(c,T);return _jsx("span",_objectSpread({className:"dumi-default-badge"},f))},v=null},62858:function(M,p,n){n.d(p,{Z:function(){return f}});var E=n(26068),y=n.n(E),P=n(48305),j=n.n(P),T=n(67825),A=n.n(T),v=n(22238),g=n(57393),l=n(28047),c=["children"],x=function(e){var a=e.children,u=A()(e,c),o=(0,g.useRef)(null),r=(0,g.useState)(!1),i=j()(r,2),s=i[0],d=i[1],m=(0,g.useState)(!1),O=j()(m,2),h=O[0],C=O[1];return(0,g.useEffect)(function(){var _=o.current;if(_){var b=(0,v.Z)(function(){d(_.scrollLeft>0),C(_.scrollLeft<_.scrollWidth-_.offsetWidth)},100);return b(),_.addEventListener("scroll",b),window.addEventListener("resize",b),function(){_.removeEventListener("scroll",b),window.removeEventListener("resize",b)}}},[]),(0,l.jsx)("div",{className:"dumi-default-table",children:(0,l.jsx)("div",{className:"dumi-default-table-content",ref:o,"data-left-folded":s||void 0,"data-right-folded":h||void 0,children:(0,l.jsx)("table",y()(y()({},u),{},{children:a}))})})},f=x},92336:function(M,p,n){var E=n(26068),y=n(48305),P=n(15558),j=n(24238),T=n(57393),A=n(28047);function v(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=[];return[].concat(o).forEach(function(s,d){var m="".concat(r?"".concat(r,"-"):"").concat(d);switch(s==null?void 0:s.type){case"ul":{var O,h=((O=i[i.length-1])===null||O===void 0?void 0:O.children)||i,C=v(s.props.children||[],m);h.push.apply(h,_toConsumableArray(C));break}case"li":{var _=v(s.props.children,m);i.push({title:[].concat(s.props.children).filter(function(b){return b.type!=="ul"}),key:m,children:_,isLeaf:!_.length});break}default:}}),i}var g=function(r){var i=useState(v(r)),s=_slicedToArray(i,2),d=s[0],m=s[1];return useEffect(function(){m(v(r))},[r]),d},l=function(r){var i=r.isLeaf,s=r.expanded;return i?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):s?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},c=function(r){var i=r.isLeaf,s=r.expanded;return i?_jsx("span",{className:"tree-switcher-leaf-line"}):s?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},x=function(){return{height:0,opacity:0}},f=function(r){var i=r.scrollHeight;return{height:i,opacity:1}},t=function(r){return{height:r?r.offsetHeight:0}},e=function(r,i){return(i==null?void 0:i.deadline)===!0||i.propertyName==="height"},a={motionName:"ant-motion-collapse",onAppearStart:x,onEnterStart:x,onAppearActive:f,onEnterActive:f,onLeaveStart:t,onLeaveActive:x,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},u=function(o){var r=o.children,i=o.title,s=g(r),d=createRef(),m=function(h,C){var _=C.isLeaf;_||h.shiftKey||h.metaKey||h.ctrlKey||d.current.onNodeExpand(h,C)};return _jsx(Tree,{className:"dumi-default-tree",icon:l,ref:d,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},a),{},{motionAppear:!1}),onClick:m,treeData:[{key:"0",title:i||"<root>",children:s}],defaultExpandAll:!0,switcherIcon:c})}},22238:function(M,p,n){n.d(p,{Z:function(){return E}});function E(y){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:200,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{leading:!0,trailing:!1},T=j.leading,A=T===void 0?!0:T,v=j.trailing,g=v===void 0?!1:v,l=0,c=null,x=function(){for(var t=this,e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];var o=new Date().getTime();!l&&!A&&(l=o);var r=P-(o-l);if(r<=0){c&&(clearTimeout(c),c=null),y.apply(this,a),l=o;return}g&&!c&&(c=setTimeout(function(){c=null,l=A?new Date().getTime():0,y.apply(t,a)},r))};return x}},92462:function(M,p,n){n.r(p),n.d(p,{texts:function(){return E}});const E=[{value:"The underlying component for all animations.",paraId:0,tocIndex:0},{value:"Responsible for maintaining the mapping of what a component's state input (enter, exit) should be to the current state output of the component (entering, entered, exiting, exited, unmounted).",paraId:1,tocIndex:0},{value:"The specific rendering is completed by the renderer function passed in by the user, which accepts the current state of the component.",paraId:2,tocIndex:0},{value:`The following code implements a simple Fade component. You can see that by passing a rendering function into the Transition, and then based on the status it maintains, you can easily implement a custom toggle animation. The meanings of the tenses correspond as follows:
enter, exit: Change after 'in', before the action is triggered
-ing: Action in progress
-ed: Action completed`,paraId:3,tocIndex:1},{value:`
## Events

The Transition component triggers the corresponding event every time the state changes and attempts to return the corresponding DOM node in the parameter. The timing of tenses corresponds specifically as follows:
enter, exit: Change after 'in', before the action is triggered
-ing: After the action starts (in progress)
-ed: After the action ends

\`\`\`tsx
import { Button, Transition, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  const [a, setA] = useState({});
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? 'OPEN' : 'CLOSE'}
      </Button>
      <Transition
        in={open}
        timeout={1000}
        onEnter={() => setA((a) => ({ ...a, enter: performance.now() }))}
        onEntering={() => setA((a) => ({ ...a, entering: performance.now() }))}
        onEntered={() => setA((a) => ({ ...a, entered: performance.now() }))}
        onExit={() => setA((a) => ({ ...a, exit: performance.now() }))}
        onExiting={() => setA((a) => ({ ...a, exiting: performance.now() }))}
        onExited={() => setA((a) => ({ ...a, exited: performance.now() }))}
      >
        {(status) => (
          <>
            <div>Status:{status}</div>
            <div
              style={{
                transition: \`opacity 1000ms linear\`,
                opacity: status.match(/exit/) ? 0 : 1,
              }}
            >
              FADE
            </div>
          </>
        )}
      </Transition>
      <style>
        {
          '@keyframes highlight{from{background-color:#FF8888}to{background:color:#FFFFFF}}'
        }
      </style>
      {['enter', 'entering', 'entered', 'exit', 'exiting', 'exited'].map(
        (s) => (
          <div key={a[s]} style={{ animation: 'highlight 1s' }}>
            {s}: {a[s]?.toFixed(1) || '- '}
          </div>
        ),
      )}
    </Stack>
  );
};
\`\`\`

## API

| Property      | Description                    | Type                            | Default |
| ------------- | ------------------------------ | ------------------------------- | ------- |
| in            | Whether to enter               | boolean                         | false   |
| appear        | Animate on mount               | boolean                         | false   |
| timeout       | Animation duration config      | number \\| {appear, enter, exit} | -       |
| delay         | Animation delay config         | number \\| {appear, enter, exit} | -       |
| enter         | Animate on enter               | boolean                         | true    |
| exit          | Animate on exit                | boolean                         | true    |
| mountOnEnter  | Mount children on first enter  | boolean                         | false   |
| unmountOnExit | Unmount children on exit       | boolean                         | false   |
| onEnter       | Callback before enter starts   | node=>void                      | -       |
| onEntering    | Callback after enter starts    | node=>void                      | -       |
| onEntered     | Callback after enter completes | node=>void                      | -       |
| onExit        | Callback before exit starts    | node=>void                      | -       |
| onExiting     | Callback after exit starts     | node=>void                      | -       |
| onExited      | Callback after exit completes  | node=>void                      | -       |

\`\`\`

\`\`\`
`,paraId:4}]}}]);
