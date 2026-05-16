"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[2528],{63365:function(D,v,n){n.r(v);var y=n(87247),j=n(54342),O=n(90854),T=n(41819),E=n(29899),C=n(15897),p=n(62858),g=n(92336),d=n(53159),m=n(63586),x=n(57393),s=n(29837),t=n(28047);function e(){return(0,t.jsx)(d.dY,{children:(0,t.jsx)(x.Suspense,{fallback:(0,t.jsx)(m.Z,{}),children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"themeprovider",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#themeprovider",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"ThemeProvider"]}),(0,t.jsxs)("p",{children:[s.texts[0].value,(0,t.jsx)("code",{children:s.texts[1].value}),s.texts[2].value,(0,t.jsx)("code",{children:s.texts[3].value}),s.texts[4].value,(0,t.jsx)("code",{children:s.texts[5].value}),s.texts[6].value]}),(0,t.jsxs)("h2",{id:"theme-customization",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#theme-customization",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"Theme Customization"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:s.texts[7].value}),s.texts[8].value,(0,t.jsx)(d.rU,{to:"/guide/theme",children:s.texts[9].value}),s.texts[10].value]}),(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:s.texts[11].value}),(0,t.jsx)("li",{children:s.texts[12].value})]}),(0,t.jsxs)("h3",{id:"browser",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#browser",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"Browser"]}),(0,t.jsx)("p",{children:s.texts[13].value})]}),(0,t.jsx)(d.Dl,{demo:{id:"packages-bui-core-src-theme-provider-demo-en-us-0"},previewerProps:{}}),(0,t.jsx)("div",{className:"markdown",children:(0,t.jsx)(C.Z,{children:s.texts[14].value})})]})})})}v.default=e},87247:function(D,v,n){var y=n(26068),j=n.n(y),O=n(48305),T=n.n(O),E=n(53159),C=n(57393),p=n(62858),g=n(28047),d={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var i=this,u=[];return Object.entries(e.properties||{}).forEach(function(a){var o,r=T()(a,2),l=r[0],c=r[1];u.push("".concat(l).concat((o=e.required)!==null&&o!==void 0&&o.includes(l)?"":"?",": ").concat(c.type==="object"?"object":i.toString(c)))}),u.length?"{ ".concat(u.join("; ")," }"):"{}"},array:function(e){if(e.items){var i=this.getValidClassName(e.items);return i?"".concat(i,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var i=this,u=e.signature,a="oneOf"in u?u.oneOf:[u];return a.map(function(o){return"".concat(o.isAsync?"async ":"","(").concat(o.arguments.map(function(r){return"".concat(r.key,": ").concat(i.toString(r))}).join(", "),") => ").concat(i.toString(o.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(i){return JSON.stringify(i)}).join(" | ")},oneOf:function(e){var i=this;return e.oneOf.map(function(u){return i.getValidClassName(u)||i.toString(u)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},m=function(e){var i=useState(function(){return d.toString(e)}),u=_slicedToArray(i,2),a=u[0],o=u[1];return useEffect(function(){o(d.toString(e))},[e]),_jsx("code",{children:a})},x=function(e){var i,u=useRouteMeta(),a=u.frontmatter,o=useAtomAssets(),r=o.components,l=e.id||a.atomId,c=useIntl();if(!l)throw new Error("`id` properties if required for API component!");var h=r==null?void 0:r[l];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:c.formatMessage({id:"api.component.name"})}),_jsx("th",{children:c.formatMessage({id:"api.component.description"})}),_jsx("th",{children:c.formatMessage({id:"api.component.type"})}),_jsx("th",{children:c.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:h&&(i=h.propsConfig)!==null&&i!==void 0&&i.properties?Object.entries(h.propsConfig.properties).map(function(P){var f,I=_slicedToArray(P,2),_=I[0],b=I[1];return _jsxs("tr",{children:[_jsx("td",{children:_}),_jsx("td",{children:b.description||"--"}),_jsx("td",{children:_jsx(m,_objectSpread({},b))}),_jsx("td",{children:_jsx("code",{children:(f=h.propsConfig.required)!==null&&f!==void 0&&f.includes(_)?c.formatMessage({id:"api.component.required"}):JSON.stringify(b.default)||"--"})})]},_)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:c.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:l})})})})]})})},s=null},54342:function(D,v,n){var y=n(26068),j=n(67825),O=n(57393),T=n(28047),E=null,C=function(d){var m=d,x=m.key,s=_objectWithoutProperties(m,E);return _jsx("span",_objectSpread({className:"dumi-default-badge"},s))},p=null},62858:function(D,v,n){n.d(v,{Z:function(){return s}});var y=n(26068),j=n.n(y),O=n(48305),T=n.n(O),E=n(67825),C=n.n(E),p=n(22238),g=n(57393),d=n(28047),m=["children"],x=function(e){var i=e.children,u=C()(e,m),a=(0,g.useRef)(null),o=(0,g.useState)(!1),r=T()(o,2),l=r[0],c=r[1],h=(0,g.useState)(!1),P=T()(h,2),f=P[0],I=P[1];return(0,g.useEffect)(function(){var _=a.current;if(_){var b=(0,p.Z)(function(){c(_.scrollLeft>0),I(_.scrollLeft<_.scrollWidth-_.offsetWidth)},100);return b(),_.addEventListener("scroll",b),window.addEventListener("resize",b),function(){_.removeEventListener("scroll",b),window.removeEventListener("resize",b)}}},[]),(0,d.jsx)("div",{className:"dumi-default-table",children:(0,d.jsx)("div",{className:"dumi-default-table-content",ref:a,"data-left-folded":l||void 0,"data-right-folded":f||void 0,children:(0,d.jsx)("table",j()(j()({},u),{},{children:i}))})})},s=x},92336:function(D,v,n){var y=n(26068),j=n(48305),O=n(15558),T=n(24238),E=n(57393),C=n(28047);function p(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(a).forEach(function(l,c){var h="".concat(o?"".concat(o,"-"):"").concat(c);switch(l==null?void 0:l.type){case"ul":{var P,f=((P=r[r.length-1])===null||P===void 0?void 0:P.children)||r,I=p(l.props.children||[],h);f.push.apply(f,_toConsumableArray(I));break}case"li":{var _=p(l.props.children,h);r.push({title:[].concat(l.props.children).filter(function(b){return b.type!=="ul"}),key:h,children:_,isLeaf:!_.length});break}default:}}),r}var g=function(o){var r=useState(p(o)),l=_slicedToArray(r,2),c=l[0],h=l[1];return useEffect(function(){h(p(o))},[o]),c},d=function(o){var r=o.isLeaf,l=o.expanded;return r?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):l?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},m=function(o){var r=o.isLeaf,l=o.expanded;return r?_jsx("span",{className:"tree-switcher-leaf-line"}):l?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},x=function(){return{height:0,opacity:0}},s=function(o){var r=o.scrollHeight;return{height:r,opacity:1}},t=function(o){return{height:o?o.offsetHeight:0}},e=function(o,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},i={motionName:"ant-motion-collapse",onAppearStart:x,onEnterStart:x,onAppearActive:s,onEnterActive:s,onLeaveStart:t,onLeaveActive:x,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},u=function(a){var o=a.children,r=a.title,l=g(o),c=createRef(),h=function(f,I){var _=I.isLeaf;_||f.shiftKey||f.metaKey||f.ctrlKey||c.current.onNodeExpand(f,I)};return _jsx(Tree,{className:"dumi-default-tree",icon:d,ref:c,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},i),{},{motionAppear:!1}),onClick:h,treeData:[{key:"0",title:r||"<root>",children:l}],defaultExpandAll:!0,switcherIcon:m})}},22238:function(D,v,n){n.d(v,{Z:function(){return y}});function y(j){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:200,T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{leading:!0,trailing:!1},E=T.leading,C=E===void 0?!0:E,p=T.trailing,g=p===void 0?!1:p,d=0,m=null,x=function(){for(var t=this,e=arguments.length,i=new Array(e),u=0;u<e;u++)i[u]=arguments[u];var a=new Date().getTime();!d&&!C&&(d=a);var o=O-(a-d);if(o<=0){m&&(clearTimeout(m),m=null),j.apply(this,i),d=a;return}g&&!m&&(m=setTimeout(function(){m=null,d=C?new Date().getTime():0,j.apply(t,i)},o))};return x}},29837:function(D,v,n){n.r(v),n.d(v,{texts:function(){return y}});const y=[{value:"The theme configuration can be used to specify component colors, sizes, language, etc. ",paraId:0,tocIndex:0},{value:"ThemeProvider",paraId:0,tocIndex:0},{value:" relies on React's ",paraId:0,tocIndex:0},{value:"context",paraId:0,tocIndex:0},{value:" to propagate theme and localization to the components, so you need to ensure that ",paraId:0,tocIndex:0},{value:"ThemeProvider",paraId:0,tocIndex:0},{value:" is the parent of the components you are attempting to customize.",paraId:0,tocIndex:0},{value:"There are two points developers should note when customizing Tokens.",paraId:1,tocIndex:1},{value:" For more detailed information on theme customization, please refer to ",paraId:1,tocIndex:1},{value:"Custom Theme",paraId:2,tocIndex:1},{value:".",paraId:1,tocIndex:1},{value:"Avoid confusion in definition: Different business scenarios should use the respective API to customize Tokens. For example, responsive layouts should use responsive attributes, dark mode should use defaultDarkToken, and built-in highlight mode Tokens should be overridden using defaultLightToken or dmLightToken.",paraId:3,tocIndex:1},{value:"Determine the priority: The priority of special scenarios always outweighs the global general scenarios.",paraId:3,tocIndex:1},{value:"In the browser, Design Tokens can be customized flexibly.",paraId:4,tocIndex:2},{value:`
### Local Theme (Nested Theme)

Design Tokens for components can be configured by nesting \`ThemeProvider\` components.

\`\`\`tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import * as React from 'react';

const token = {
  '--bui-btn-height': '40px',
};

const internalToken = {
  '--bui-btn-height': '28px',
};

export default () => {
  return (
    <ThemeProvider isRoot token={token}>
      <Button variant="contained" color="info" style={{ marginRight: '20px' }}>
        Outer Button
      </Button>
      <ThemeProvider token={internalToken}>
        <Button variant="contained" color="info">
          Inner Button
        </Button>
      </ThemeProvider>
    </ThemeProvider>
  );
};
\`\`\`

### Mini Programs

In mini programs, it is not possible to inject code dynamically or use the \`ThemeProvider\` component to dynamically configure themes and responsive-related Design Tokens. Currently, two methods are supported for modifying the themes of mini programs:

1. Write Tokens under the corresponding selectors in the styles file yourself; the theme configuration in the global styles file will be overridden by page-level styles files.
2. Local themes can only be passed in css variables in an inline manner when using components.

\`\`\`tsx
import { Button } from '@bifrostui/react';
import * as React from 'react';
/**
 * 1. Global or page-level theme for mini programs can be written by yourself in the entry or page-level styles files; page-level will override global styles
 * app.less
 * page { --bui-btn-height: 32px }
 */

// 2. Local theme for mini programs
export default () => {
  return (
    <Button
      variant="contained"
      color="info"
      style={{ '--bui-btn-height': '28px' }}
    >
      Custom Tokens
    </Button>
  );
};
\`\`\`

## Internationalization

BUI provides default languages: Simplified Chinese, Traditional Chinese, and English. If these do not meet your needs, customization at the component level is also supported. Below are the components involving internationalization; you can switch languages in the demos.

\`\`\`tsx
import {
  ThemeProvider,
  Button,
  Dialog,
  Stack,
  Picker,
  Calendar,
  Select,
  SelectOption,
  CitySelector,
  EN,
  CN,
  TW,
} from '@bifrostui/react';
import React, { useState } from 'react';
import dayjs from 'dayjs/esm/index';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

const hotCities = [
  {
    code: '110100',
    name: 'Beijing',
  },
  {
    code: '310100',
    name: 'Shanghai',
  },
  {
    code: '440100',
    name: 'Guangzhou',
  },
];

const cities = [
  {
    groupName: 'A',
    cities: [
      {
        code: '610900',
        name: 'Ankang',
      },
      {
        code: '210300',
        name: 'Anshan',
      },
    ],
  },
  {
    groupName: 'B',
    cities: [
      {
        code: '652800',
        name: 'Bayingol',
      },
      {
        code: '511900',
        name: 'Bazhong',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
      {
        code: '130900',
        name: 'Cangzhou',
      },
      {
        code: '220100',
        name: 'Changchun',
      },
    ],
  },
  {
    groupName: 'D',
    cities: [
      {
        code: '532900',
        name: 'Dali',
      },
      {
        code: '210200',
        name: 'Dalian',
      },
    ],
  },
];

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(dayjs().toDate());
  const [curValue, setCurValue] = useState(EN);
  const [dialog, contextHolder] = Dialog.useDialog();
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };
  const selectedCity = {
    code: '110100',
    name: 'Beijing',
  };
  const currentCity = {
    code: '310100',
    name: 'Shanghai',
  };
  const onSelect = (city) => {
    console.log(city);
  };

  const onHide = () => {
    console.log('onHide');
  };
  const optionInt = [
    {
      label: 'en-US',
      value: EN,
    },
    {
      label: 'zh-CN',
      value: CN,
    },
    {
      label: 'zh-TW',
      value: TW,
    },
  ];
  return (
    <ThemeProvider locale={curValue}>
      {contextHolder}
      <Stack spacing="10px">
        <div>Language Selection</div>
        <Select
          defaultValue={EN}
          onChange={(e, { value: locale }) => {
            setCurValue(locale);
          }}
        >
          {optionInt.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Button
          onClick={() => {
            dialog.confirm({
              message: 'Test',
            });
          }}
        >
          open Dialog
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          open Picker
        </Button>
        <Picker
          open={open}
          onClose={(e, data) => {
            setOpen(false);
            console.log('onClose', e, data);
          }}
          options={[
            [
              {
                value: 1,
                label: 'Monday',
              },
              {
                value: 2,
                label: 'Tuesday',
              },
              {
                value: 3,
                label: 'Wednesday',
              },
              {
                value: 4,
                label: 'Thursday',
              },
              {
                value: 5,
                label: 'Friday',
              },
              {
                value: 6,
                label: 'Saturday',
              },
              {
                value: 7,
                label: 'Sunday',
              },
            ],
          ]}
        />
        <Calendar value={value} onChange={handleChange} />
        <CitySelector
          cities={cities}
          onSelect={onSelect}
          selectedCity={selectedCity}
          currentCity={currentCity}
          hotCities={hotCities}
          onClose={onHide}
          style={{ height: '500px' }}
        />
      </Stack>
    </ThemeProvider>
  );
};
\`\`\`

## API

### ThemeProviderProps, ThemeProps

| Property          | Description                                                    | Type                   | Default |
| ----------------- | -------------------------------------------------------------- | ---------------------- | ------- |
| isRoot            | Whether the current ThemeProvider is mounted at the root level | boolean                | false   |
| container         | The container to mount                                         | ReactNode              | -       |
| containerId       | The id of the mount container                                  | string                 | -       |
| locale            | Language                                                       | BaseLang               | zh-CN   |
| responsive        | Configuration for responsive screen breakpoints                | ResponsiveTokenOptions | -       |
| defaultLightToken | Token for default light theme                                  | Record<string, string> | -       |
| defaultDarkToken  | Token for default dark theme                                   | Record<string, string> | -       |
| dmLightToken      | Token for Taobao dark theme                                    | Record<string, string> | -       |
| token             | Global Token for the component                                 | Record<string, string> | -       |

### ResponsiveTokenOptions

| Property | Description        | Type                   | Default  |
| -------- | ------------------ | ---------------------- | -------- |
| xs       | Extra small screen | Record<string, string> | 575.98px |
| sm       | Small screen       | Record<string, string> | 576px    |
| md       | Medium screen      | Record<string, string> | 768px    |
| lg       | Large screen       | Record<string, string> | 992px    |
| xl       | Extra large screen | Record<string, string> | 1200px   |

\`\`\`

\`\`\`
`,paraId:5}]}}]);
