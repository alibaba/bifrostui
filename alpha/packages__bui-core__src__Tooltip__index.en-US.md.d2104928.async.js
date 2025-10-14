"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[4726],{95223:function(A,h,n){n.r(h);var T=n(46557),E=n(24152),C=n(5009),y=n(47039),O=n(82966),I=n(57390),_=n(25514),g=n(97962),c=n(3862),d=n(91155),v=n(75271),r=n(12510),e=n(52676);function t(){return(0,e.jsx)(c.dY,{children:(0,e.jsx)(v.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"tooltip",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tooltip",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Tooltip"]}),(0,e.jsx)("p",{children:r.texts[0].value}),(0,e.jsxs)("h2",{id:"features",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#features",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Features"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[r.texts[1].value,(0,e.jsx)("strong",{children:r.texts[2].value}),r.texts[3].value]}),(0,e.jsxs)("li",{children:[r.texts[4].value,(0,e.jsx)("strong",{children:r.texts[5].value}),r.texts[6].value]}),(0,e.jsxs)("li",{children:[r.texts[7].value,(0,e.jsx)("strong",{children:r.texts[8].value}),r.texts[9].value]}),(0,e.jsxs)("li",{children:[r.texts[10].value,(0,e.jsx)("strong",{children:r.texts[11].value}),r.texts[12].value]}),(0,e.jsxs)("li",{children:[r.texts[13].value,(0,e.jsx)("strong",{children:r.texts[14].value}),r.texts[15].value]})]}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When to Use"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:r.texts[16].value}),(0,e.jsx)("li",{children:r.texts[17].value}),(0,e.jsx)("li",{children:r.texts[18].value}),(0,e.jsx)("li",{children:r.texts[19].value})]}),(0,e.jsxs)("h2",{id:"basic-usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Basic Usage"]}),(0,e.jsx)("p",{children:r.texts[20].value})]}),(0,e.jsx)(c.Dl,{demo:{id:"packages-bui-core-src-tooltip-demo-en-us-0"},previewerProps:{}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsx)(I.Z,{children:r.texts[21].value})})]})})})}h.default=t},46557:function(A,h,n){var T=n(26068),E=n.n(T),C=n(48305),y=n.n(C),O=n(3862),I=n(75271),_=n(25514),g=n(52676),c={toString:function(t){return typeof t.type=="string"&&t.type in this?"enum"in t?this.enum(t):this[t.type](t):t.type?this.getValidClassName(t)||t.type:"const"in t?"".concat(t.const):"oneOf"in t?this.oneOf(t):"unknown"},string:function(t){return t.type},number:function(t){return t.type},boolean:function(t){return t.type},any:function(t){return t.type},object:function(t){var a=this,u=[];return Object.entries(t.properties||{}).forEach(function(l){var i,o=y()(l,2),s=o[0],f=o[1];u.push("".concat(s).concat((i=t.required)!==null&&i!==void 0&&i.includes(s)?"":"?",": ").concat(f.type==="object"?"object":a.toString(f)))}),u.length?"{ ".concat(u.join("; ")," }"):"{}"},array:function(t){if(t.items){var a=this.getValidClassName(t.items);return a?"".concat(a,"[]"):"".concat(this.toString(t.items),"[]")}return"any[]"},element:function(t){return"<".concat(t.componentName," />")},function:function(t){var a=this,u=t.signature,l="oneOf"in u?u.oneOf:[u];return l.map(function(i){return"".concat(i.isAsync?"async ":"","(").concat(i.arguments.map(function(o){return"".concat(o.key,": ").concat(a.toString(o))}).join(", "),") => ").concat(a.toString(i.returnType))}).join(" | ")},dom:function(t){return t.className||"DOM"},enum:function(t){return t.enum.map(function(a){return JSON.stringify(a)}).join(" | ")},oneOf:function(t){var a=this;return t.oneOf.map(function(u){return a.getValidClassName(u)||a.toString(u)}).join(" | ")},getValidClassName:function(t){return"className"in t&&typeof t.className=="string"&&t.className!=="__type"?t.className:null}},d=function(t){var a=useState(function(){return c.toString(t)}),u=_slicedToArray(a,2),l=u[0],i=u[1];return useEffect(function(){i(c.toString(t))},[t]),_jsx("code",{children:l})},v=function(t){var a,u=useRouteMeta(),l=u.frontmatter,i=useAtomAssets(),o=i.components,s=t.id||l.atomId,f=useIntl();if(!s)throw new Error("`id` properties if required for API component!");var p=o==null?void 0:o[s];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:f.formatMessage({id:"api.component.name"})}),_jsx("th",{children:f.formatMessage({id:"api.component.description"})}),_jsx("th",{children:f.formatMessage({id:"api.component.type"})}),_jsx("th",{children:f.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:p&&(a=p.propsConfig)!==null&&a!==void 0&&a.properties?Object.entries(p.propsConfig.properties).map(function(x){var j,P=_slicedToArray(x,2),m=P[0],b=P[1];return _jsxs("tr",{children:[_jsx("td",{children:m}),_jsx("td",{children:b.description||"--"}),_jsx("td",{children:_jsx(d,_objectSpread({},b))}),_jsx("td",{children:_jsx("code",{children:(j=p.propsConfig.required)!==null&&j!==void 0&&j.includes(m)?f.formatMessage({id:"api.component.required"}):JSON.stringify(b.default)||"--"})})]},m)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:f.formatMessage({id:"api.component.".concat(o?"not.found":"unavailable")},{id:s})})})})]})})},r=null},24152:function(A,h,n){var T=n(26068),E=n(67825),C=n(75271),y=n(52676),O=null,I=function(c){var d=c,v=d.key,r=_objectWithoutProperties(d,O);return _jsx("span",_objectSpread({className:"dumi-default-badge"},r))},_=null},25514:function(A,h,n){n.d(h,{Z:function(){return r}});var T=n(26068),E=n.n(T),C=n(48305),y=n.n(C),O=n(67825),I=n.n(O),_=n(31984),g=n(75271),c=n(52676),d=["children"],v=function(t){var a=t.children,u=I()(t,d),l=(0,g.useRef)(null),i=(0,g.useState)(!1),o=y()(i,2),s=o[0],f=o[1],p=(0,g.useState)(!1),x=y()(p,2),j=x[0],P=x[1];return(0,g.useEffect)(function(){var m=l.current;if(m){var b=(0,_.Z)(function(){f(m.scrollLeft>0),P(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return b(),m.addEventListener("scroll",b),window.addEventListener("resize",b),function(){m.removeEventListener("scroll",b),window.removeEventListener("resize",b)}}},[]),(0,c.jsx)("div",{className:"dumi-default-table",children:(0,c.jsx)("div",{className:"dumi-default-table-content",ref:l,"data-left-folded":s||void 0,"data-right-folded":j||void 0,children:(0,c.jsx)("table",E()(E()({},u),{},{children:a}))})})},r=v},97962:function(A,h,n){var T=n(26068),E=n(48305),C=n(15558),y=n(10893),O=n(75271),I=n(52676);function _(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=[];return[].concat(l).forEach(function(s,f){var p="".concat(i?"".concat(i,"-"):"").concat(f);switch(s==null?void 0:s.type){case"ul":{var x,j=((x=o[o.length-1])===null||x===void 0?void 0:x.children)||o,P=_(s.props.children||[],p);j.push.apply(j,_toConsumableArray(P));break}case"li":{var m=_(s.props.children,p);o.push({title:[].concat(s.props.children).filter(function(b){return b.type!=="ul"}),key:p,children:m,isLeaf:!m.length});break}default:}}),o}var g=function(i){var o=useState(_(i)),s=_slicedToArray(o,2),f=s[0],p=s[1];return useEffect(function(){p(_(i))},[i]),f},c=function(i){var o=i.isLeaf,s=i.expanded;return o?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):s?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},d=function(i){var o=i.isLeaf,s=i.expanded;return o?_jsx("span",{className:"tree-switcher-leaf-line"}):s?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},v=function(){return{height:0,opacity:0}},r=function(i){var o=i.scrollHeight;return{height:o,opacity:1}},e=function(i){return{height:i?i.offsetHeight:0}},t=function(i,o){return(o==null?void 0:o.deadline)===!0||o.propertyName==="height"},a={motionName:"ant-motion-collapse",onAppearStart:v,onEnterStart:v,onAppearActive:r,onEnterActive:r,onLeaveStart:e,onLeaveActive:v,onAppearEnd:t,onEnterEnd:t,onLeaveEnd:t,motionDeadline:500},u=function(l){var i=g(l.children),o=createRef(),s=function(p,x){var j=x.isLeaf;j||p.shiftKey||p.metaKey||p.ctrlKey||o.current.onNodeExpand(p,x)};return _jsx(Tree,{className:"dumi-default-tree",icon:c,ref:o,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},a),{},{motionAppear:!1}),onClick:s,treeData:[{key:"0",title:l.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:d})}},31984:function(A,h,n){n.d(h,{Z:function(){return T}});function T(E){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:200,y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{leading:!0,trailing:!1},O=y.leading,I=O===void 0?!0:O,_=y.trailing,g=_===void 0?!1:_,c=0,d=null,v=function(){for(var e=this,t=arguments.length,a=new Array(t),u=0;u<t;u++)a[u]=arguments[u];var l=new Date().getTime();!c&&!I&&(c=l);var i=C-(l-c);if(i<=0){d&&(clearTimeout(d),d=null),E.apply(this,a),c=l;return}g&&!d&&(d=setTimeout(function(){d=null,c=I?new Date().getTime():0,E.apply(e,a)},i))};return v}},12510:function(A,h,n){n.r(h),n.d(h,{texts:function(){return T}});const T=[{value:"The Tooltip component provides a concise text hint bubble for users, suitable for supplementing explanations of page elements.",paraId:0,tocIndex:0},{value:"\u{1F3AF} ",paraId:1,tocIndex:1},{value:"Flexible Trigger",paraId:1,tocIndex:1},{value:" - Supports multiple trigger methods including click, hover, etc.",paraId:1,tocIndex:1},{value:"\u{1F4CD} ",paraId:1,tocIndex:1},{value:"Smart Positioning",paraId:1,tocIndex:1},{value:" - 12 position options with automatic adjustment to avoid boundary overflow",paraId:1,tocIndex:1},{value:"\u267F ",paraId:1,tocIndex:1},{value:"Accessibility Support",paraId:1,tocIndex:1},{value:" - Full ARIA support and keyboard navigation",paraId:1,tocIndex:1},{value:"\u{1F3A8} ",paraId:1,tocIndex:1},{value:"Highly Customizable",paraId:1,tocIndex:1},{value:" - Allows custom content, styles, and behavior",paraId:1,tocIndex:1},{value:"\u{1F4F1} ",paraId:1,tocIndex:1},{value:"Cross-platform Compatibility",paraId:1,tocIndex:1},{value:" - Compatible with both H5 and mini program platforms",paraId:1,tocIndex:1},{value:"When a brief explanation or hint for page elements is needed",paraId:2,tocIndex:2},{value:"When space is limited and complete information cannot be displayed",paraId:2,tocIndex:2},{value:"When additional explanation for action buttons or form fields is needed",paraId:2,tocIndex:2},{value:"To replace the traditional title attribute for better user experience",paraId:2,tocIndex:2},{value:"The simplest Tooltip usage, with default click trigger for display/hide toggling.",paraId:3,tocIndex:3},{value:`
## Controlled Mode

Control the visibility of the Tooltip externally using the \`open\` prop.

\`\`\`tsx
import { Tooltip, Button, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Hide' : 'Show'} Tooltip
      </Button>
      <Tooltip title="Controlled Tooltip" open={open}>
        <span>Target Element</span>
      </Tooltip>
    </Stack>
  );
};
\`\`\`

## Default Display

Set \`defaultOpen\` to \`true\` to display the Tooltip by default.

\`\`\`tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" defaultOpen>
      <span>Default display with defaultOpen</span>
    </Tooltip>
  );
};
\`\`\`

### Offset Distance Between Tooltip and Target Element

You can set the offset to control the distance from the target element.

\`\`\`tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" offset={20} defaultOpen>
      <span>Offset control (set to 20 for observation)</span>
    </Tooltip>
  );
};
\`\`\`

### Placement of the Tooltip

Placement sets the position of the tooltip bubble layer, options are top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom.

\`\`\`tsx
import { Tooltip, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  const packageButton = (inner) => {
    return (
      <Button style={{ borderRadius: 0, marginTop: '4px', width: '80px' }}>
        {inner}
      </Button>
    );
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          marginLeft: '100px',
          justifyContent: 'space-between',
        }}
      >
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="topLeft"
        >
          {packageButton(<span>topLeft</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="top"
        >
          {packageButton(<span>top</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="topRight"
        >
          {packageButton(<span>topRight</span>)}
        </Tooltip>
      </div>
      <div
        style={{
          marginTop: '20px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="leftTop"
        >
          {packageButton(<span>leftTop</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="left"
        >
          {packageButton(<span>left</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="leftBottom"
        >
          {packageButton(<span>leftBottom</span>)}
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: '300px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="rightTop"
        >
          {packageButton(<span>rightTop</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="right"
        >
          {packageButton(<span>right</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="rightBottom"
        >
          {packageButton(<span>rightBottom</span>)}
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: '100px',
          marginTop: '20px',
          display: 'flex',
          width: '300px',
          justifyContent: 'space-between',
        }}
      >
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="bottomLeft"
        >
          {packageButton(<span>bottomLeft</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="bottom"
        >
          {packageButton(<span>bottom</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="bottomRight"
        >
          {packageButton(<span>bottomRight</span>)}
        </Tooltip>
      </div>
    </div>
  );
};
\`\`\`

### Trigger Method

The trigger method for displaying the bubble, "click" or "hover", default is click.

\`\`\`tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" trigger={['hover']}>
      <span>Hover trigger method</span>
    </Tooltip>
  );
};
\`\`\`

### onOpenChange Callback Method

\`\`\`tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  const onOpenChange = (event, data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Tooltip
      title="This is a tooltip"
      trigger="click"
      onOpenChange={onOpenChange}
      placement="bottom"
    >
      <span>onOpenChange Callback Method</span>
    </Tooltip>
  );
};
\`\`\`

## Accessibility

The Tooltip component is equipped with complete accessibility support to ensure it is usable by both screen reader users and keyboard users.

### Keyboard Navigation

\`\`\`tsx
import { Tooltip, Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing={2}>
      <Tooltip title="Close with Esc key support" closeOnEscape>
        <Button>Press Esc key to close after opening</Button>
      </Tooltip>
    </Stack>
  );
};
\`\`\`

### Focus Management

\`\`\`tsx
import { Tooltip, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="Tooltip content will auto-focus" autoFocus role="dialog">
      <Button>Automatic Focus Management</Button>
    </Tooltip>
  );
};
\`\`\`

## API

### Tooltip Props

| Attribute    | Description                                                   | Type                                       | Default |
| ------------ | ------------------------------------------------------------- | ------------------------------------------ | ------- |
| title        | Content of the bubble                                         | React.ReactNode                            | -       |
| defaultOpen  | Whether the bubble is visible by default                      | boolean                                    | false   |
| open         | Manually controls bubble visibility                           | boolean                                    | -       |
| offset       | Offset distance (pixels) between the layer and target element | number                                     | 0       |
| placement    | Bubble position                                               | TooltipPlacement                           | 'top'   |
| trigger      | Trigger actions                                               | TooltipTriggerType \\| TooltipTriggerType[] | 'click' |
| onOpenChange | Callback method for bubble visibility change                  | (event, data) => void                      | -       |

### Accessibility Attributes

| Attribute       | Description                       | Type                                         | Default   |
| --------------- | --------------------------------- | -------------------------------------------- | --------- |
| role            | ARIA role                         | 'tooltip' \\| 'dialog' \\| 'status' \\| 'alert' | 'tooltip' |
| aria-label      | Accessibility label               | string                                       | -         |
| aria-labelledby | Reference ID of described element | string                                       | -         |
| aria-hidden     | Whether hidden for screen readers | boolean                                      | false     |
| autoFocus       | Whether to automatically focus    | boolean                                      | false     |
| closeOnEscape   | Whether to close with Esc key     | boolean                                      | false     |

### TooltipPlacement

\`\`\`typescript
type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';
\`\`\`

### TooltipTriggerType

\`\`\`typescript
type TooltipTriggerType = 'click' | 'hover';
\`\`\`

### OnOpenChange Callback

\`\`\`typescript
interface TooltipOpenChangeData {
  open: boolean;
}

type OnOpenChange = (
  event: React.SyntheticEvent,
  data: TooltipOpenChangeData,
) => void;
\`\`\`

## Style Variables

| Global Variable                  | Description            | Default   |
| -------------------------------- | ---------------------- | --------- |
| --bui-tooltip-arrow-size         | Arrow size             | \`8PX\`     |
| --bui-tooltip-location-position  | Location offset        | \`8PX\`     |
| --bui-tooltip-max-width          | Maximum width          | \`350px\`   |
| --bui-tooltip-content-min-width  | Minimum content width  | \`30px\`    |
| --bui-tooltip-content-min-height | Minimum content height | \`32px\`    |
| --bui-tooltip-content-padding    | Content padding        | \`6px 8px\` |

\`\`\`

\`\`\`
`,paraId:4}]}}]);
