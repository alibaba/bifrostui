"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[4008],{96287:function(P,h,n){n.r(h);var E=n(46557),T=n(24152),C=n(5009),j=n(47039),A=n(82966),O=n(57390),p=n(25514),v=n(97962),l=n(3862),d=n(91155),g=n(75271),f=n(40227),t=n(52676);function e(){return(0,t.jsx)(l.dY,{children:(0,t.jsx)(g.Suspense,{fallback:(0,t.jsx)(d.Z,{}),children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"transition-basic-transition",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#transition-basic-transition",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"Transition Basic Transition"]}),(0,t.jsx)("p",{children:f.texts[0].value}),(0,t.jsx)("p",{children:f.texts[1].value}),(0,t.jsx)("p",{children:f.texts[2].value}),(0,t.jsxs)("h2",{id:"basic-usage",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"Basic Usage"]}),(0,t.jsx)("p",{children:f.texts[3].value})]}),(0,t.jsx)(l.Dl,{demo:{id:"packages-bui-core-src-transition-demo-en-us-0"},previewerProps:{}}),(0,t.jsx)("div",{className:"markdown",children:(0,t.jsx)(O.Z,{children:f.texts[4].value})})]})})})}h.default=e},46557:function(P,h,n){var E=n(26068),T=n.n(E),C=n(48305),j=n.n(C),A=n(3862),O=n(75271),p=n(25514),v=n(52676),l={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var a=this,u=[];return Object.entries(e.properties||{}).forEach(function(o){var r,i=j()(o,2),s=i[0],_=i[1];u.push("".concat(s).concat((r=e.required)!==null&&r!==void 0&&r.includes(s)?"":"?",": ").concat(_.type==="object"?"object":a.toString(_)))}),u.length?"{ ".concat(u.join("; ")," }"):"{}"},array:function(e){if(e.items){var a=this.getValidClassName(e.items);return a?"".concat(a,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var a=this,u=e.signature,o="oneOf"in u?u.oneOf:[u];return o.map(function(r){return"".concat(r.isAsync?"async ":"","(").concat(r.arguments.map(function(i){return"".concat(i.key,": ").concat(a.toString(i))}).join(", "),") => ").concat(a.toString(r.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(a){return JSON.stringify(a)}).join(" | ")},oneOf:function(e){var a=this;return e.oneOf.map(function(u){return a.getValidClassName(u)||a.toString(u)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},d=function(e){var a=useState(function(){return l.toString(e)}),u=_slicedToArray(a,2),o=u[0],r=u[1];return useEffect(function(){r(l.toString(e))},[e]),_jsx("code",{children:o})},g=function(e){var a,u=useRouteMeta(),o=u.frontmatter,r=useAtomAssets(),i=r.components,s=e.id||o.atomId,_=useIntl();if(!s)throw new Error("`id` properties if required for API component!");var c=i==null?void 0:i[s];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:c&&(a=c.propsConfig)!==null&&a!==void 0&&a.properties?Object.entries(c.propsConfig.properties).map(function(x){var y,M=_slicedToArray(x,2),m=M[0],b=M[1];return _jsxs("tr",{children:[_jsx("td",{children:m}),_jsx("td",{children:b.description||"--"}),_jsx("td",{children:_jsx(d,_objectSpread({},b))}),_jsx("td",{children:_jsx("code",{children:(y=c.propsConfig.required)!==null&&y!==void 0&&y.includes(m)?_.formatMessage({id:"api.component.required"}):JSON.stringify(b.default)||"--"})})]},m)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(i?"not.found":"unavailable")},{id:s})})})})]})})},f=null},24152:function(P,h,n){var E=n(26068),T=n(67825),C=n(75271),j=n(52676),A=null,O=function(l){var d=l,g=d.key,f=_objectWithoutProperties(d,A);return _jsx("span",_objectSpread({className:"dumi-default-badge"},f))},p=null},25514:function(P,h,n){n.d(h,{Z:function(){return f}});var E=n(26068),T=n.n(E),C=n(48305),j=n.n(C),A=n(67825),O=n.n(A),p=n(31984),v=n(75271),l=n(52676),d=["children"],g=function(e){var a=e.children,u=O()(e,d),o=(0,v.useRef)(null),r=(0,v.useState)(!1),i=j()(r,2),s=i[0],_=i[1],c=(0,v.useState)(!1),x=j()(c,2),y=x[0],M=x[1];return(0,v.useEffect)(function(){var m=o.current;if(m){var b=(0,p.Z)(function(){_(m.scrollLeft>0),M(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return b(),m.addEventListener("scroll",b),window.addEventListener("resize",b),function(){m.removeEventListener("scroll",b),window.removeEventListener("resize",b)}}},[]),(0,l.jsx)("div",{className:"dumi-default-table",children:(0,l.jsx)("div",{className:"dumi-default-table-content",ref:o,"data-left-folded":s||void 0,"data-right-folded":y||void 0,children:(0,l.jsx)("table",T()(T()({},u),{},{children:a}))})})},f=g},97962:function(P,h,n){var E=n(26068),T=n(48305),C=n(15558),j=n(10893),A=n(75271),O=n(52676);function p(o){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=[];return[].concat(o).forEach(function(s,_){var c="".concat(r?"".concat(r,"-"):"").concat(_);switch(s==null?void 0:s.type){case"ul":{var x,y=((x=i[i.length-1])===null||x===void 0?void 0:x.children)||i,M=p(s.props.children||[],c);y.push.apply(y,_toConsumableArray(M));break}case"li":{var m=p(s.props.children,c);i.push({title:[].concat(s.props.children).filter(function(b){return b.type!=="ul"}),key:c,children:m,isLeaf:!m.length});break}default:}}),i}var v=function(r){var i=useState(p(r)),s=_slicedToArray(i,2),_=s[0],c=s[1];return useEffect(function(){c(p(r))},[r]),_},l=function(r){var i=r.isLeaf,s=r.expanded;return i?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):s?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},d=function(r){var i=r.isLeaf,s=r.expanded;return i?_jsx("span",{className:"tree-switcher-leaf-line"}):s?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},g=function(){return{height:0,opacity:0}},f=function(r){var i=r.scrollHeight;return{height:i,opacity:1}},t=function(r){return{height:r?r.offsetHeight:0}},e=function(r,i){return(i==null?void 0:i.deadline)===!0||i.propertyName==="height"},a={motionName:"ant-motion-collapse",onAppearStart:g,onEnterStart:g,onAppearActive:f,onEnterActive:f,onLeaveStart:t,onLeaveActive:g,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},u=function(o){var r=v(o.children),i=createRef(),s=function(c,x){var y=x.isLeaf;y||c.shiftKey||c.metaKey||c.ctrlKey||i.current.onNodeExpand(c,x)};return _jsx(Tree,{className:"dumi-default-tree",icon:l,ref:i,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},a),{},{motionAppear:!1}),onClick:s,treeData:[{key:"0",title:o.title||"<root>",children:r}],defaultExpandAll:!0,switcherIcon:d})}},31984:function(P,h,n){n.d(h,{Z:function(){return E}});function E(T){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:200,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{leading:!0,trailing:!1},A=j.leading,O=A===void 0?!0:A,p=j.trailing,v=p===void 0?!1:p,l=0,d=null,g=function(){for(var t=this,e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];var o=new Date().getTime();!l&&!O&&(l=o);var r=C-(o-l);if(r<=0){d&&(clearTimeout(d),d=null),T.apply(this,a),l=o;return}v&&!d&&(d=setTimeout(function(){d=null,l=O?new Date().getTime():0,T.apply(t,a)},r))};return g}},40227:function(P,h,n){n.r(h),n.d(h,{texts:function(){return E}});const E=[{value:"The underlying component for all animations.",paraId:0,tocIndex:0},{value:"Responsible for maintaining the mapping of what a component's state input (enter, exit) should be to the current state output of the component (entering, entered, exiting, exited, unmounted).",paraId:1,tocIndex:0},{value:"The specific rendering is completed by the renderer function passed in by the user, which accepts the current state of the component.",paraId:2,tocIndex:0},{value:`The following code implements a simple Fade component. You can see that by passing a rendering function into the Transition, and then based on the status it maintains, you can easily implement a custom toggle animation. The meanings of the tenses correspond as follows:
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
