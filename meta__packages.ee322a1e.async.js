(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[56],{96929:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-action-sheet-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=f.sent,a=r.default,l=r.useState,f.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=f.sent,o=n.ActionSheet,t=n.ActionSheetItem,c=n.Button,i=n.Stack,f.abrupt("return",{default:function(){var y=l(!1),E=v()(y,2),O=E[0],L=E[1],C=function(){L(!0)},P=function(){L(!1)};return a.createElement(i,null,a.createElement(c,{onClick:C},"\u57FA\u7840\u4F7F\u7528"),a.createElement(o,{onClose:P,open:O},a.createElement(t,null,"\u590D\u5236"),a.createElement(t,null,"\u4FEE\u6539"),a.createElement(t,null,"\u5220\u9664")))}});case 13:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };

  return (
    <Stack>
      <Button onClick={openActionSheet}>\u57FA\u7840\u4F7F\u7528</Button>
      <ActionSheet onClose={closeActionSheet} open={isOpen}>
        <ActionSheetItem>\u590D\u5236</ActionSheetItem>
        <ActionSheetItem>\u4FEE\u6539</ActionSheetItem>
        <ActionSheetItem>\u5220\u9664</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-action-sheet-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=f.sent,a=r.default,l=r.useState,f.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=f.sent,o=n.ActionSheet,t=n.ActionSheetItem,c=n.Button,i=n.Stack,f.abrupt("return",{default:function(){var y=l(!1),E=v()(y,2),O=E[0],L=E[1],C=function(){L(!0)},P=function(){L(!1)};return a.createElement(i,null,a.createElement(c,{onClick:C},"\u53D6\u6D88\u6309\u94AE"),a.createElement(o,{onClose:P,cancelText:"\u53D6\u6D88",open:O},a.createElement(t,null,"\u590D\u5236"),a.createElement(t,null,"\u4FEE\u6539")))}});case 13:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };

  return (
    <Stack>
      <Button onClick={openActionSheet}>\u53D6\u6D88\u6309\u94AE</Button>
      <ActionSheet onClose={closeActionSheet} cancelText="\u53D6\u6D88" open={isOpen}>
        <ActionSheetItem>\u590D\u5236</ActionSheetItem>
        <ActionSheetItem>\u4FEE\u6539</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-action-sheet-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=f.sent,a=r.default,l=r.useState,f.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=f.sent,o=n.ActionSheet,t=n.ActionSheetItem,c=n.Button,i=n.Stack,f.abrupt("return",{default:function(){var y=l(!1),E=v()(y,2),O=E[0],L=E[1],C=function(){L(!0)},P=function(){L(!1)};return a.createElement(i,null,a.createElement(c,{onClick:C},"\u989D\u5916\u7684\u63CF\u8FF0"),a.createElement(o,{extra:"\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C",onClose:P,cancelText:"\u53D6\u6D88",open:O},a.createElement(t,null,"\u590D\u5236"),a.createElement(t,null,"\u4FEE\u6539")))}});case 13:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };

  return (
    <Stack>
      <Button onClick={openActionSheet}>\u989D\u5916\u7684\u63CF\u8FF0</Button>
      <ActionSheet
        extra="\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C"
        onClose={closeActionSheet}
        cancelText="\u53D6\u6D88"
        open={isOpen}
      >
        <ActionSheetItem>\u590D\u5236</ActionSheetItem>
        <ActionSheetItem>\u4FEE\u6539</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-action-sheet-demo-3":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=f.sent,a=r.default,l=r.useState,f.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=f.sent,o=n.ActionSheet,t=n.ActionSheetItem,c=n.Button,i=n.Stack,f.abrupt("return",{default:function(){var y=l(!1),E=v()(y,2),O=E[0],L=E[1],C=function(){L(!0)},P=function(){L(!1)};return a.createElement(i,null,a.createElement(c,{onClick:C},"\u7981\u7528\u548C\u5371\u9669\u6309\u94AE"),a.createElement(o,{onClose:P,extra:"\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C",open:O,cancelText:"\u53D6\u6D88"},a.createElement(t,null,"\u590D\u5236"),a.createElement(t,{disabled:!0},"\u4FEE\u6539"),a.createElement(t,{color:"danger"},"\u5220\u9664")))}});case 13:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };
  return (
    <Stack>
      <Button onClick={openActionSheet}>\u7981\u7528\u548C\u5371\u9669\u6309\u94AE</Button>
      <ActionSheet
        onClose={closeActionSheet}
        extra="\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C"
        open={isOpen}
        cancelText="\u53D6\u6D88"
      >
        <ActionSheetItem>\u590D\u5236</ActionSheetItem>
        <ActionSheetItem disabled>\u4FEE\u6539</ActionSheetItem>
        <ActionSheetItem color="danger">\u5220\u9664</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-action-sheet-demo-4":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=f.sent,a=r.default,l=r.useState,f.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=f.sent,o=n.ActionSheet,t=n.ActionSheetItem,c=n.Button,i=n.Stack,f.abrupt("return",{default:function(){var y=l(!1),E=v()(y,2),O=E[0],L=E[1],C=function(){L(!0)},P=function(){L(!1)};return a.createElement(i,null,a.createElement(c,{onClick:C},"\u9009\u9879\u63CF\u8FF0\u4FE1\u606F"),a.createElement(o,{onClose:P,open:O},a.createElement(t,null,"\u590D\u5236"),a.createElement(t,{disabled:!0},"\u4FEE\u6539"),a.createElement(t,{color:"danger",description:"\u5220\u9664\u540E\u6570\u636E\u4E0D\u53EF\u6062\u590D"},"\u5220\u9664")))}});case 13:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };
  return (
    <Stack>
      <Button onClick={openActionSheet}>\u9009\u9879\u63CF\u8FF0\u4FE1\u606F</Button>
      <ActionSheet onClose={closeActionSheet} open={isOpen}>
        <ActionSheetItem>\u590D\u5236</ActionSheetItem>
        <ActionSheetItem disabled>\u4FEE\u6539</ActionSheetItem>
        <ActionSheetItem color="danger" description="\u5220\u9664\u540E\u6570\u636E\u4E0D\u53EF\u6062\u590D">
          \u5220\u9664
        </ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},51375:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(5574),s=e.n(b),A=e(15009),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-alert-demo-0":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Alert,l=r.Stack,c.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=c.sent,o=n.default,c.abrupt("return",{default:function(){return o.createElement(l,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"}},o.createElement(a,null,"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack alignItems="stretch" style={{ maxWidth: 350, margin: '0 auto' }}>
      <Alert>\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-1":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Alert,l=r.Stack,I.next=7,e.e(3670).then(e.bind(e,83670));case 7:return n=I.sent,o=n.HelpCircleOutlinedIcon,I.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(l,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},c.createElement(a,null,"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),c.createElement(a,{icon:c.createElement(o,null)},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),c.createElement(a,{icon:!1},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 14:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert>\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert icon={<HelpCircleOutlinedIcon />}>
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert icon={false}>\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-2":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Alert,l=r.Stack,I.next=7,e.e(3670).then(e.bind(e,83670));case 7:return n=I.sent,o=n.HelpCircleOutlinedIcon,I.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(l,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},c.createElement(a,{icon:!1,marquee:!0},"\u3010\u5F00\u59CB\u3011\u9996\u90E8\u6D77\u5916\u7EF4\u548C\u9898\u6750\u5546\u4E1A\u5927\u7247\u9AD8\u71C3\u6765\u88AD\uFF0C\u805A\u7126\u4E2D\u56FD\u7EF4\u548C\u8B66\u5BDF\u9C9C\u4E3A\u4EBA\u77E5\u7684\u751F\u6B7B\u65F6\u523B\uFF01\u3010\u7ED3\u675F\u3011"),c.createElement(a,{marquee:!0,icon:c.createElement(o,null)},"\u3010\u5F00\u59CB\u3011\u9996\u90E8\u6D77\u5916\u7EF4\u548C\u9898\u6750\u5546\u4E1A\u5927\u7247\u9AD8\u71C3\u6765\u88AD\uFF0C\u805A\u7126\u4E2D\u56FD\u7EF4\u548C\u8B66\u5BDF\u9C9C\u4E3A\u4EBA\u77E5\u7684\u751F\u6B7B\u65F6\u523B\uFF01\u3010\u7ED3\u675F\u3011"))}});case 14:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert icon={false} marquee>
        \u3010\u5F00\u59CB\u3011\u9996\u90E8\u6D77\u5916\u7EF4\u548C\u9898\u6750\u5546\u4E1A\u5927\u7247\u9AD8\u71C3\u6765\u88AD\uFF0C\u805A\u7126\u4E2D\u56FD\u7EF4\u548C\u8B66\u5BDF\u9C9C\u4E3A\u4EBA\u77E5\u7684\u751F\u6B7B\u65F6\u523B\uFF01\u3010\u7ED3\u675F\u3011
      </Alert>
      <Alert marquee icon={<HelpCircleOutlinedIcon />}>
        \u3010\u5F00\u59CB\u3011\u9996\u90E8\u6D77\u5916\u7EF4\u548C\u9898\u6750\u5546\u4E1A\u5927\u7247\u9AD8\u71C3\u6765\u88AD\uFF0C\u805A\u7126\u4E2D\u56FD\u7EF4\u548C\u8B66\u5BDF\u9C9C\u4E3A\u4EBA\u77E5\u7684\u751F\u6B7B\u65F6\u523B\uFF01\u3010\u7ED3\u675F\u3011
      </Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-3":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Alert,l=r.Stack,c.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=c.sent,o=n.default,c.abrupt("return",{default:function(){return o.createElement(l,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},o.createElement(a,null,"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{color:"success"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{color:"danger"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{color:"info"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert>\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert color="warning">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert color="success">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert color="danger">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert color="info">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-4":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Alert,l=r.Stack,c.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=c.sent,o=n.default,c.abrupt("return",{default:function(){return o.createElement(l,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},o.createElement(a,{variant:"standard"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{variant:"standard",color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{variant:"standard",color:"danger"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{variant:"standard",color:"info"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{variant:"standard",color:"success"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert variant="standard">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert variant="standard" color="warning">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>

      <Alert variant="standard" color="danger">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert variant="standard" color="info">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert variant="standard" color="success">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-5":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Alert,l=r.Stack,c.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=c.sent,o=n.default,c.abrupt("return",{default:function(){return o.createElement(l,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},o.createElement(a,{variant:"outlined"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{variant:"outlined",color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{variant:"outlined",color:"danger"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{variant:"outlined",color:"info"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),o.createElement(a,{variant:"outlined",color:"success"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert variant="outlined">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert variant="outlined" color="warning">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert variant="outlined" color="danger">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert variant="outlined" color="info">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert variant="outlined" color="success">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-6":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Alert,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(!1),h=s()(f,2),y=h[0],E=h[1],O=t(!1),L=s()(O,2),C=L[0],P=L[1];return o.createElement(l,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},o.createElement(a,{color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),!y&&o.createElement(a,{color:"success",onClose:function(){E(!0)}},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),!C&&o.createElement(a,{action:o.createElement("div",null,"close"),onClose:function(){P(!0)}},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [closeOne, setCloseOne] = useState(false);
  const [closeTwo, setCloseTwo] = useState(false);
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert color="warning">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      {!closeOne && (
        <Alert
          color="success"
          onClose={() => {
            setCloseOne(true);
          }}
        >
          \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
        </Alert>
      )}
      {!closeTwo && (
        <Alert
          action={<div>close</div>}
          onClose={() => {
            setCloseTwo(true);
          }}
        >
          \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
        </Alert>
      )}
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},72272:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-avatar-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Avatar,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-avatar-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Avatar,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{direction:"row",spacing:"10px"},l.createElement(d,null,"UC"),l.createElement(d,null,"UFCEAEF"))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar>UC</Avatar>
      <Avatar>UFCEAEF</Avatar>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-avatar-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,d=m.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=c.sent,a=r.Avatar,l=r.Stack,c.next=11,e.e(3670).then(e.bind(e,83670));case 11:return n=c.sent,o=n.VipFilledIcon,c.abrupt("return",{default:function(){return d.createElement(l,{direction:"row",spacing:"10px"},d.createElement(a,null,d.createElement(o,null)))}});case 14:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Avatar, Stack } from '@bifrostui/react';
import { VipFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar>
        <VipFilledIcon />
      </Avatar>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-avatar-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Avatar,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{direction:"row",spacing:"10px"},l.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),l.createElement(d,{variant:"square",src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      <Avatar
        variant="square"
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-avatar-demo-4":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Avatar,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{direction:"row",spacing:"10px"},l.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"xsmall"}),l.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"small"}),l.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"medium"}),l.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"large"}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="xsmall"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="small"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="medium"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="large"
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-avatar-demo-5":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Avatar,r=m.AvatarGroup,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,null,n.createElement(r,null,n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-avatar-demo-6":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Avatar,r=m.AvatarGroup,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{direction:"column",spacing:"10px"},n.createElement(r,null,n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})),n.createElement(r,{variant:"square"},n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="column" spacing="10px">
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
      <AvatarGroup variant="square">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-avatar-demo-7":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Avatar,r=m.AvatarGroup,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,null,n.createElement(r,{maxCount:"2"},n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup maxCount="2">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-avatar-demo-8":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Avatar,r=m.AvatarGroup,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{direction:"column",spacing:"10px"},n.createElement(r,null,n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})),n.createElement(r,{orientation:"left"},n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="column" spacing="10px">
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
      <AvatarGroup orientation="left">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-avatar-demo-9":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Avatar,r=m.AvatarGroup,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,null,n.createElement(r,{maxCount:"2",spacing:"10px"},n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),n.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup maxCount="2" spacing="10px">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},47406:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-backdrop-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=I.sent,a=r.default,l=r.useState,I.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=I.sent,o=n.Backdrop,t=n.Button,c=n.Stack,I.abrupt("return",{default:function(){var h=l(!1),y=v()(h,2),E=y[0],O=y[1],L=function(){O(!1)};return a.createElement(c,null,a.createElement(t,{onClick:function(){O(!0)}},"\u6253\u5F00\u5F39\u7A97\u80CC\u666F"),a.createElement(o,{open:E,onClick:L,style:{zIndex:"var(--bui-z-index-modal-backdrop)"}}))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-backdrop-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Backdrop, Button, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u5F39\u7A97\u80CC\u666F
      </Button>
      <Backdrop
        open={open}
        onClick={handleClick}
        style={{ zIndex: 'var(--bui-z-index-modal-backdrop)' }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-backdrop-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=I.sent,a=r.default,l=r.useState,I.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=I.sent,o=n.Backdrop,t=n.Button,c=n.Stack,I.abrupt("return",{default:function(){var h=l(!1),y=v()(h,2),E=y[0],O=y[1],L=function(){O(!1)};return a.createElement(c,null,a.createElement(t,{onClick:function(){O(!0)}},E?"\u5F39\u7A97\u80CC\u666F\u5DF2\u6253\u5F00\uFF08\u4E0D\u53EF\u89C1\uFF09\uFF0C\u70B9\u51FB\u4EFB\u610F\u90E8\u5206\u5173\u95ED":"\u6253\u5F00\u5F39\u7A97\u80CC\u666F"),a.createElement(o,{open:E,onClick:L,invisible:!0,style:{zIndex:"var(--bui-z-index-modal-backdrop)"}}))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-backdrop-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Backdrop, Button, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        {open ? '\u5F39\u7A97\u80CC\u666F\u5DF2\u6253\u5F00\uFF08\u4E0D\u53EF\u89C1\uFF09\uFF0C\u70B9\u51FB\u4EFB\u610F\u90E8\u5206\u5173\u95ED' : '\u6253\u5F00\u5F39\u7A97\u80CC\u666F'}
      </Button>
      <Backdrop
        open={open}
        onClick={handleClick}
        invisible={true}
        style={{ zIndex: 'var(--bui-z-index-modal-backdrop)' }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-backdrop-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=I.sent,a=r.default,l=r.useState,I.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=I.sent,o=n.Backdrop,t=n.Button,c=n.Stack,I.abrupt("return",{default:function(){var h=l(!1),y=v()(h,2),E=y[0],O=y[1],L=function(){O(!1)};return a.createElement(c,null,a.createElement(t,{onClick:function(){O(!0)}},"2s\u6DE1\u5165\u6DE1\u51FA\u52A8\u6548\u6548\u679C"),a.createElement(o,{open:E,transitionDuration:2e3,onClick:L,style:{zIndex:"var(--bui-z-index-modal-backdrop)"}}))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-backdrop-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Backdrop, Button, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        2s\u6DE1\u5165\u6DE1\u51FA\u52A8\u6548\u6548\u679C
      </Button>
      <Backdrop
        open={open}
        transitionDuration={2000}
        onClick={handleClick}
        style={{ zIndex: 'var(--bui-z-index-modal-backdrop)' }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},696:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-badge-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Avatar,r=m.Badge,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{spacing:"20px",direction:"row"},n.createElement(r,{content:"12"},n.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="20px" direction="row">
      <Badge content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-badge-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Badge,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(d,{content:"1",type:"standard"}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Badge content="1" type="standard" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-badge-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Avatar,r=m.Badge,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{spacing:"10px",direction:"row"},n.createElement(r,{color:"primary",type:"dot"},n.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="primary" type="dot">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-badge-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Avatar,r=m.Badge,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{spacing:"10px",direction:"row"},n.createElement(r,{color:"primary",type:"bubble",content:"12"},n.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="primary" type="bubble" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-badge-demo-4":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Avatar,r=m.Badge,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{spacing:"10px",direction:"row"},n.createElement(r,{color:"primary",variant:"contained",content:"12"},n.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})),n.createElement(r,{color:"primary",type:"bubble",variant:"contained",content:"12"},n.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="primary" variant="contained" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge color="primary" type="bubble" variant="contained" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-badge-demo-5":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Avatar,r=m.Badge,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{spacing:"20",direction:"row"},n.createElement(r,{color:"primary",variant:"outlined",content:"12"},n.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})),n.createElement(r,{color:"primary",variant:"outlined",type:"bubble",content:"12"},n.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="20" direction="row">
      <Badge color="primary" variant="outlined" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge color="primary" variant="outlined" type="bubble" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-badge-demo-6":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Avatar,r=m.Badge,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,null,n.createElement(r,{content:100,maxCount:99},n.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Badge content={100} maxCount={99}>
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-badge-demo-7":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,d=m.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=c.sent,a=r.Badge,l=r.Stack,c.next=11,e.e(3670).then(e.bind(e,83670));case 11:return n=c.sent,o=n.PhoneFilledIcon,c.abrupt("return",{default:function(){return d.createElement(l,{spacing:"10px",direction:"row"},d.createElement(a,{color:"success",content:"5"},d.createElement(o,{color:"success",style:{fontSize:"38px"}})),d.createElement(a,{color:"warning",content:"5"},d.createElement(o,{color:"warning",style:{fontSize:"38px"}})),d.createElement(a,{color:"info",content:"5"},d.createElement(o,{color:"info",style:{fontSize:"38px"}})),d.createElement(a,{color:"primary",content:"5"},d.createElement(o,{color:"primary",style:{fontSize:"38px"}})),d.createElement(a,{color:"danger",content:"5"},d.createElement(o,{color:"danger",style:{fontSize:"38px"}})))}});case 14:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Badge, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="success" content="5">
        <PhoneFilledIcon color="success" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="warning" content="5">
        <PhoneFilledIcon color="warning" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="info" content="5">
        <PhoneFilledIcon color="info" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="primary" content="5">
        <PhoneFilledIcon color="primary" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="danger" content="5">
        <PhoneFilledIcon color="danger" style={{ fontSize: '38px' }} />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-badge-demo-8":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,d=m.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=c.sent,a=r.Badge,l=r.Stack,c.next=11,e.e(3670).then(e.bind(e,83670));case 11:return n=c.sent,o=n.PhoneFilledIcon,c.abrupt("return",{default:function(){return d.createElement(l,{spacing:"10px",direction:"row"},d.createElement(a,{color:"success",content:"5",variant:"outlined"},d.createElement(o,{color:"success",style:{fontSize:"38px"}})),d.createElement(a,{color:"warning",content:"5",variant:"outlined"},d.createElement(o,{color:"warning",style:{fontSize:"38px"}})),d.createElement(a,{color:"info",content:"5",variant:"outlined"},d.createElement(o,{color:"info",style:{fontSize:"38px"}})),d.createElement(a,{color:"primary",content:"5",variant:"outlined"},d.createElement(o,{color:"primary",style:{fontSize:"38px"}})),d.createElement(a,{color:"danger",content:"5",variant:"outlined"},d.createElement(o,{color:"danger",style:{fontSize:"38px"}})))}});case 14:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Badge, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="success" content="5" variant="outlined">
        <PhoneFilledIcon color="success" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="warning" content="5" variant="outlined">
        <PhoneFilledIcon color="warning" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="info" content="5" variant="outlined">
        <PhoneFilledIcon color="info" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="primary" content="5" variant="outlined">
        <PhoneFilledIcon color="primary" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="danger" content="5" variant="outlined">
        <PhoneFilledIcon color="danger" style={{ fontSize: '38px' }} />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},1835:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-button-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Button,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{direction:"row",spacing:"8px",flexWrap:"wrap"},l.createElement(d,{color:"primary",variant:"text"},"\u6587\u5B57\u6309\u94AE"),l.createElement(d,{color:"primary"},"\u63CF\u8FB9\u6309\u94AE"),l.createElement(d,{color:"primary",variant:"contained"},"\u586B\u5145\u6309\u94AE"),l.createElement(d,{color:"primary",variant:"light"},"\u6D45\u4EAE\u6309\u94AE"))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Button color="primary" variant="text">
        \u6587\u5B57\u6309\u94AE
      </Button>
      <Button color="primary">\u63CF\u8FB9\u6309\u94AE</Button>
      <Button color="primary" variant="contained">
        \u586B\u5145\u6309\u94AE
      </Button>
      <Button color="primary" variant="light">
        \u6D45\u4EAE\u6309\u94AE
      </Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-button-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Button,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{spacing:"8px"},l.createElement(r,{direction:"row",spacing:"8px"},l.createElement(d,{size:"small"},"\u5C0F\u53F7\u6309\u94AE"),l.createElement(d,{size:"medium"},"\u4E2D\u53F7\u6309\u94AE"),l.createElement(d,{size:"large"},"\u5927\u53F7\u6309\u94AE")),l.createElement(d,{size:"full"},"\u901A\u680F\u6309\u94AE"))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="8px">
      <Stack direction="row" spacing="8px">
        <Button size="small">\u5C0F\u53F7\u6309\u94AE</Button>
        <Button size="medium">\u4E2D\u53F7\u6309\u94AE</Button>
        <Button size="large">\u5927\u53F7\u6309\u94AE</Button>
      </Stack>
      <Button size="full">\u901A\u680F\u6309\u94AE</Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-button-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Button,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{direction:"row",spacing:"8px",flexWrap:"wrap"},l.createElement(d,{variant:"contained"},"\u53D6\u6D88"),l.createElement(d,{color:"primary",variant:"contained"},"\u8D2D\u7968"),l.createElement(d,{color:"success",variant:"contained"},"\u5F71\u57CE"),l.createElement(d,{color:"info",variant:"contained"},"\u7535\u5F71"),l.createElement(d,{color:"warning",variant:"contained"},"\u60F3\u770B"),l.createElement(d,{color:"danger",variant:"contained"},"\u7279\u60E0"),l.createElement(d,{color:"vip",variant:"contained"},"\u4F1A\u5458"))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Button variant="contained">\u53D6\u6D88</Button>
      <Button color="primary" variant="contained">
        \u8D2D\u7968
      </Button>
      <Button color="success" variant="contained">
        \u5F71\u57CE
      </Button>
      <Button color="info" variant="contained">
        \u7535\u5F71
      </Button>
      <Button color="warning" variant="contained">
        \u60F3\u770B
      </Button>
      <Button color="danger" variant="contained">
        \u7279\u60E0
      </Button>
      <Button color="vip" variant="contained">
        \u4F1A\u5458
      </Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-button-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Button,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{direction:"row",spacing:"8px"},l.createElement(d,{variant:"text",disabled:!0},"\u6587\u5B57\u7981\u7528"),l.createElement(d,{disabled:!0},"\u63CF\u8FB9\u7981\u7528"),l.createElement(d,{variant:"contained",disabled:!0},"\u586B\u5145\u7981\u7528"))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Button variant="text" disabled>
        \u6587\u5B57\u7981\u7528
      </Button>
      <Button disabled>\u63CF\u8FB9\u7981\u7528</Button>
      <Button variant="contained" disabled>
        \u586B\u5145\u7981\u7528
      </Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-button-demo-4":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=i.sent,d=m.default,i.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=i.sent,a=r.Button,l=r.Stack,i.next=11,e.e(3670).then(e.bind(e,83670));case 11:return n=i.sent,o=n.CalendarOutlinedIcon,t=n.HeartFilledIcon,i.abrupt("return",{default:function(){return d.createElement(l,{direction:"row",spacing:"8px"},d.createElement(a,{startIcon:d.createElement(t,{htmlColor:"linear-gradient(150deg, #FFFDFC 0%, #D5B198 100%)"})},"Heart"),d.createElement(a,{endIcon:d.createElement(o,null)},"Date"))}});case 15:case"end":return i.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Button, Stack } from '@bifrostui/react';
import { CalendarOutlinedIcon, HeartFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Button
        startIcon={
          <HeartFilledIcon htmlColor="linear-gradient(150deg, #FFFDFC 0%, #D5B198 100%)" />
        }
      >
        Heart
      </Button>
      <Button endIcon={<CalendarOutlinedIcon />}>Date</Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},75887:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-calendar-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=f.sent,a=r.Calendar,l=r.Stack,f.next=7,Promise.resolve().then(e.bind(e,61915));case 7:return n=f.sent,o=n.default,f.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return t=f.sent,c=t.default,i=t.useState,f.abrupt("return",{default:function(){var y=i(o().toDate()),E=v()(y,2),O=E[0],L=E[1],C=function(z,M){console.log("date change:",M),L(M.value)};return c.createElement(l,null,c.createElement("div",{style:{width:"320px"}},c.createElement(a,{value:O,onChange:C})))}});case 15:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":e(61915),react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=f.sent,a=r.Calendar,l=r.Stack,f.next=7,Promise.resolve().then(e.bind(e,61915));case 7:return n=f.sent,o=n.default,f.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return t=f.sent,c=t.default,i=t.useState,f.abrupt("return",{default:function(){var y=i(o().toDate()),E=v()(y,2),O=E[0],L=E[1];return c.createElement(l,null,c.createElement("div",{style:{width:"320px"}},c.createElement(a,{value:O,minDate:o().toDate(),maxDate:o().add(2,"month").toDate(),onChange:function(P,z){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",z),L(z.value)}})))}});case 15:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          value={value}
          minDate={dayjs().toDate()}
          maxDate={dayjs().add(2, 'month').toDate()}
          onChange={(e, res) => {
            console.log('\u65E5\u671F\u53D8\u5316\uFF1A', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":e(61915),react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=f.sent,a=r.Calendar,l=r.Stack,f.next=7,Promise.resolve().then(e.bind(e,61915));case 7:return n=f.sent,o=n.default,f.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return t=f.sent,c=t.default,i=t.useState,f.abrupt("return",{default:function(){var y=i(o().toDate()),E=v()(y,2),O=E[0],L=E[1],C=function(z,M){console.log("date change:",M),L(M.value)};return c.createElement(l,null,c.createElement("div",{style:{width:"320px"}},c.createElement(a,{hideDaysOutsideCurrentMonth:!0,value:O,onChange:C})))}});case 15:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          hideDaysOutsideCurrentMonth
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":e(61915),react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-3":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=f.sent,a=r.Calendar,l=r.Stack,f.next=7,Promise.resolve().then(e.bind(e,61915));case 7:return n=f.sent,o=n.default,f.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return t=f.sent,c=t.default,i=t.useState,f.abrupt("return",{default:function(){var y=i(o().toDate()),E=v()(y,2),O=E[0],L=E[1],C=function(z){return o(o(z).format("YYYYMMDD")).diff(o(o().format("YYYYMMDD")),"day")<0};return c.createElement(l,null,c.createElement("div",{style:{width:"320px"}},c.createElement(a,{value:O,disabledDate:C,onChange:function(z,M){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",M),L(M.value)}})))}});case 15:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const disabledDate = (current) => {
    return (
      // \u4E4B\u524D\u65E5\u671F\u4E0D\u53EF\u9009
      dayjs(dayjs(current).format('YYYYMMDD')).diff(
        dayjs(dayjs().format('YYYYMMDD')),
        'day',
      ) < 0
    );
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          value={value}
          disabledDate={disabledDate}
          onChange={(e, res) => {
            console.log('\u65E5\u671F\u53D8\u5316\uFF1A', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":e(61915),react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-4":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=f.sent,a=r.Calendar,l=r.Stack,f.next=7,Promise.resolve().then(e.bind(e,61915));case 7:return n=f.sent,o=n.default,f.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return t=f.sent,c=t.default,i=t.useState,f.abrupt("return",{default:function(){var y=i(o().toDate()),E=v()(y,2),O=E[0],L=E[1];return c.createElement(l,null,c.createElement("div",{style:{width:"320px"}},c.createElement(a,{value:O,highlightDate:"weekend",onChange:function(P,z){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",o(z.value).format("YYYY-MM-DD")),L(z.value)}})))}});case 15:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          value={value}
          highlightDate="weekend"
          onChange={(e, res) => {
            console.log('\u65E5\u671F\u53D8\u5316\uFF1A', dayjs(res.value).format('YYYY-MM-DD'));
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":e(61915),react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-5":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=f.sent,a=r.Calendar,l=r.Stack,f.next=7,Promise.resolve().then(e.bind(e,61915));case 7:return n=f.sent,o=n.default,f.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return t=f.sent,c=t.default,i=t.useState,f.abrupt("return",{default:function(){var y=i([o().add(1,"day").toDate(),o().add(5,"day").toDate()]),E=v()(y,2),O=E[0],L=E[1];return c.createElement(l,null,c.createElement("div",{style:{width:"320px"}},c.createElement(a,{mode:"range",value:O,onChange:function(P,z){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",z),L(z.value)}})))}});case 15:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs().add(1, 'day').toDate(),
    dayjs().add(5, 'day').toDate(),
  ]);

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          mode="range"
          value={value}
          onChange={(e, res) => {
            console.log('\u65E5\u671F\u53D8\u5316\uFF1A', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":e(61915),react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-6":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i,I;return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=h.sent,a=r.Button,l=r.Calendar,n=r.Stack,h.next=8,Promise.resolve().then(e.bind(e,61915));case 8:return o=h.sent,t=o.default,h.next=12,Promise.resolve().then(e.t.bind(e,67294,19));case 12:return c=h.sent,i=c.default,I=c.useState,h.abrupt("return",{default:function(){var E=I(t().add(1,"month").toDate()),O=v()(E,2),L=O[0],C=O[1],P=I([t().add(30,"day").toDate(),t().add(33,"day").toDate()]),z=v()(P,2),M=z[0],D=z[1],T=function(){C(t().toDate())},$=function(){D([t().toDate(),t().add(6,"day").toDate()])};return i.createElement(n,null,i.createElement("div",{style:{width:"320px"}},i.createElement(a,{onClick:T},"\u56DE\u5230\u4ECA\u5929"),i.createElement(l,{mode:"single",value:L}),i.createElement(a,{onClick:$},"\u9009\u4E2D\u6700\u8FD1\u4E00\u5468"),i.createElement(l,{mode:"range",value:M})))}});case 16:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().add(1, 'month').toDate());
  const [rangevalue, setRangeValue] = useState([
    dayjs().add(30, 'day').toDate(),
    dayjs().add(33, 'day').toDate(),
  ]);

  const onSingleClick = () => {
    setValue(dayjs().toDate());
  };

  const onRangeClick = () => {
    setRangeValue([dayjs().toDate(), dayjs().add(6, 'day').toDate()]);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Button onClick={onSingleClick}>\u56DE\u5230\u4ECA\u5929</Button>
        <Calendar mode="single" value={value} />
        <Button onClick={onRangeClick}>\u9009\u4E2D\u6700\u8FD1\u4E00\u5468</Button>
        <Calendar mode="range" value={rangevalue} />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":e(61915),react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-7":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Calendar,l=r.Stack,I.next=7,Promise.resolve().then(e.bind(e,61915));case 7:return n=I.sent,o=n.default,I.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(l,null,c.createElement("div",{style:{width:"320px"}},c.createElement(a,{mode:"range",defaultValue:[o().add(1,"day").toDate(),o().add(7,"day").toDate()]})))}});case 14:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          mode="range"
          defaultValue={[
            dayjs().add(1, 'day').toDate(),
            dayjs().add(7, 'day').toDate(),
          ]}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":e(61915),react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-8":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i,I,f;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=y.sent,a=r.Calendar,l=r.Stack,y.next=7,Promise.resolve().then(e.bind(e,86010));case 7:return n=y.sent,o=n.default,y.next=11,Promise.resolve().then(e.bind(e,61915));case 11:return t=y.sent,c=t.default,y.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return i=y.sent,I=i.default,f=i.useState,y.abrupt("return",{default:function(){var O=f(c().toDate()),L=v()(O,2),C=L[0],P=L[1],z=function(T){var $=T.day,j=T.disabled,Z=c($).isSame(c(),"day");return I.createElement("div",{className:o("bui-calendar-day",{disabled:j,today:Z}),style:{flexDirection:"column"}},I.createElement("div",null,$&&c($).format("D")),Z&&I.createElement("div",{style:{fontSize:"10px"}},"\u4ECA\u5929"))},M=function(T,$){return P($.value)};return I.createElement(l,null,I.createElement("div",{style:{width:"320px"}},I.createElement(a,{mode:"single",value:C,dateRender:z,onChange:M})))}});case 19:case"end":return y.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import clsx from 'clsx';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const dateRender = (dayInstance) => {
    const { day, disabled } = dayInstance;
    const isToday = dayjs(day).isSame(dayjs(), 'day');
    return (
      <div
        className={clsx('bui-calendar-day', {
          disabled,
          today: isToday,
        })}
        style={{ flexDirection: 'column' }}
      >
        <div>{day && dayjs(day).format('D')}</div>
        {isToday && <div style={{ fontSize: '10px' }}>\u4ECA\u5929</div>}
      </div>
    );
  };

  const onChange = (e, res) => setValue(res.value);

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          mode="single"
          value={value}
          dateRender={dateRender}
          onChange={onChange}
        />
      </div>
    </Stack>
  );
};`},clsx:{type:"NPM",value:"1.2.1"},dayjs:{type:"NPM",value:"1.11.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{clsx:e(86010),"dayjs/esm/index":e(61915),react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-9":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i,I,f;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=y.sent,a=r.Calendar,l=r.Stack,y.next=7,Promise.resolve().then(e.bind(e,86010));case 7:return n=y.sent,o=n.default,y.next=11,Promise.resolve().then(e.bind(e,61915));case 11:return t=y.sent,c=t.default,y.next=15,Promise.resolve().then(e.t.bind(e,67294,19));case 15:return i=y.sent,I=i.default,f=i.useState,y.abrupt("return",{default:function(){var O=f(c().toDate()),L=v()(O,2),C=L[0],P=L[1],z=function(T){var $=["\u65E5","\u516D"].includes(T);return I.createElement("div",{key:T,className:o("bui-calendar-day",{today:$}),style:{flexDirection:"column"}},I.createElement("div",null,T),I.createElement("div",{style:{fontSize:"10px"}},$?"\u4F11":I.createElement(I.Fragment,null,"\xA0")))},M=function(T,$){return P($.value)};return I.createElement(l,null,I.createElement("div",{style:{width:"320px"}},I.createElement(a,{mode:"single",value:C,weekRender:z,onChange:M})))}});case 19:case"end":return y.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import clsx from 'clsx';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const weekRender = (weekItem) => {
    const isWeekend = ['\u65E5', '\u516D'].includes(weekItem);
    return (
      <div
        key={weekItem}
        className={clsx('bui-calendar-day', {
          today: isWeekend,
        })}
        style={{ flexDirection: 'column' }}
      >
        <div>{weekItem}</div>
        <div style={{ fontSize: '10px' }}>{isWeekend ? '\u4F11' : <>&nbsp;</>}</div>
      </div>
    );
  };

  const onChange = (e, res) => setValue(res.value);

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          mode="single"
          value={value}
          weekRender={weekRender}
          onChange={onChange}
        />
      </div>
    </Stack>
  );
};`},clsx:{type:"NPM",value:"1.2.1"},dayjs:{type:"NPM",value:"1.11.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{clsx:e(86010),"dayjs/esm/index":e(61915),react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},23711:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-card-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Card,r=m.CardHeader,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{style:{background:"#eee",padding:"20px"}},n.createElement(a,{style:{width:"270px"}},n.createElement(d,{style:{width:"100%"}},n.createElement(r,{title:n.createElement("div",null,"\u7F8E\u5473\u5C0F\u98DF")}))))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title={<div>\u7F8E\u5473\u5C0F\u98DF</div>} />
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-card-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Card,r=m.CardHeader,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{style:{background:"#eee",padding:"20px"}},n.createElement(a,{style:{width:"270px"}},n.createElement(d,{style:{width:"100%"}},n.createElement(r,{subtitle:"\uFF08\u5927\u6876\u7206\u7C73\u82B11\u4EFD+300ml\u81EA\u5236\u5976\u83362\u676F\uFF09"}))))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader subtitle="\uFF08\u5927\u6876\u7206\u7C73\u82B11\u4EFD+300ml\u81EA\u5236\u5976\u83362\u676F\uFF09" />
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-card-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Card,r=m.CardHeader,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{style:{background:"#eee",padding:"20px"}},n.createElement(a,{style:{width:"270px"}},n.createElement(d,{style:{width:"100%"}},n.createElement(r,{title:"\u7F8E\u5473\u5C0F\u98DF",subtitle:"\uFF08\u5927\u6876\u7206\u7C73\u82B11\u4EFD+300ml\u81EA\u5236\u5976\u83362\u676F\uFF09"}))))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="\u7F8E\u5473\u5C0F\u98DF"
            subtitle="\uFF08\u5927\u6876\u7206\u7C73\u82B11\u4EFD+300ml\u81EA\u5236\u5976\u83362\u676F\uFF09"
          />
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-card-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Card,r=m.CardHeader,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{style:{background:"#eee",padding:"20px"}},n.createElement(a,{style:{width:"270px"}},n.createElement(d,{style:{width:"100%"}},n.createElement(r,{title:"\u8BA2\u5355",extra:"\u67E5\u770B\u66F4\u591A",onClick:function(I){console.log(I)}}))))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="\u8BA2\u5355"
            extra="\u67E5\u770B\u66F4\u591A"
            onClick={(e) => {
              console.log(e);
            }}
          />
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-card-demo-4":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Card,r=m.CardHeader,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{style:{background:"#eee",padding:"20px"}},n.createElement(a,{style:{width:"270px"}},n.createElement(d,{style:{width:"100%"}},n.createElement(r,{title:"\u8BA2\u5355",extra:"\u67E5\u770B\u66F4\u591A",endIcon:!1,onClick:function(I){console.log(I)}}))))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="\u8BA2\u5355"
            extra="\u67E5\u770B\u66F4\u591A"
            endIcon={false}
            onClick={(e) => {
              console.log(e);
            }}
          />
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-card-demo-5":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Card,r=m.CardContent,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{style:{background:"#eee",padding:"20px"}},n.createElement(a,{style:{width:"270px"}},n.createElement(d,{style:{width:"100%"}},n.createElement(r,null,n.createElement("div",null,"\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4"),n.createElement("div",null,"\u53D6\u9910\u7801\uFF1A235634"),n.createElement("div",null,"\u624B\u673A\u53F7: 134****5427")))))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardContent>
            <div>\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4</div>
            <div>\u53D6\u9910\u7801\uFF1A235634</div>
            <div>\u624B\u673A\u53F7: 134****5427</div>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-card-demo-6":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=I.sent,d=m.Button,r=m.Card,a=m.CardContent,l=m.CardFooter,n=m.CardHeader,o=m.Stack,I.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(o,{style:{background:"#eee",padding:"20px"}},c.createElement(o,{style:{width:"270px"}},c.createElement(r,{style:{width:"100%"}},c.createElement(n,{title:"\u8BA2\u5355"}),c.createElement(a,null,c.createElement("div",null,"\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4"),c.createElement("div",null,"\u53D6\u9910\u7801\uFF1A235634"),c.createElement("div",null,"\u624B\u673A\u53F7: 134****5427")),c.createElement(l,null,c.createElement(d,{color:"success"},"\u7B7E\u6536")))))}});case 14:case"end":return I.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Stack,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="\u8BA2\u5355" />
          <CardContent>
            <div>\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4</div>
            <div>\u53D6\u9910\u7801\uFF1A235634</div>
            <div>\u624B\u673A\u53F7: 134****5427</div>
          </CardContent>
          <CardFooter>
            <Button color="success">\u7B7E\u6536</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-card-demo-7":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=I.sent,d=m.Button,r=m.Card,a=m.CardContent,l=m.CardFooter,n=m.CardHeader,o=m.Stack,I.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(o,{style:{background:"#eee",padding:"20px"}},c.createElement(o,{style:{width:"270px"}},c.createElement(r,{style:{width:"100%"}},c.createElement(n,{title:"\u8BA2\u5355"}),c.createElement(a,null,c.createElement("div",null,"\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4"),c.createElement("div",null,"\u53D6\u9910\u7801\uFF1A235634"),c.createElement("div",null,"\u624B\u673A\u53F7: 134****5427")),c.createElement(l,null,c.createElement(d,{color:"success"},"\u7B7E\u6536")))))}});case 14:case"end":return I.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Stack,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="\u8BA2\u5355" />
          <CardContent>
            <div>\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4</div>
            <div>\u53D6\u9910\u7801\uFF1A235634</div>
            <div>\u624B\u673A\u53F7: 134****5427</div>
          </CardContent>
          <CardFooter>
            <Button color="success">\u7B7E\u6536</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-card-demo-8":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=c.sent,d=m.Card,r=m.CardContent,a=m.CardHeader,l=m.Stack,c.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return n=c.sent,o=n.default,c.abrupt("return",{default:function(){return o.createElement(l,{style:{background:"#eee",padding:"20px"}},o.createElement(l,{style:{width:"270px"}},o.createElement(d,{style:{width:"100%"}},o.createElement(a,{title:"\u8D2D\u4E70\u5546\u54C1"}),o.createElement(r,null,o.createElement(d,{style:{width:"100%"}},o.createElement(a,{title:"\u751F\u9C9C\u6C34\u679C",onClick:function(f){console.log(f)},extra:"\u51716\u4EF6"}),o.createElement(r,null,o.createElement("div",null,"\u82F9\u679C*2"),o.createElement("div",null,"\u6728\u74DC*1"),o.createElement("div",null,"\u83E0\u83DC*3"))),o.createElement(d,{className:"subCard"},o.createElement(a,{title:"\u96F6\u98DF\u996E\u6599",onClick:function(f){console.log(f)},extra:"\u517114\u4EF6"}),o.createElement(r,null,o.createElement("div",null,"\u85AF\u7247*2"),o.createElement("div",null,"\u6A59\u6C41*2"),o.createElement("div",null,"\u706B\u817F\u80A0*10")))))))}});case 12:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardContent, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="\u8D2D\u4E70\u5546\u54C1" />
          <CardContent>
            <Card style={{ width: '100%' }}>
              <CardHeader
                title="\u751F\u9C9C\u6C34\u679C"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="\u51716\u4EF6"
              />
              <CardContent>
                <div>\u82F9\u679C*2</div>
                <div>\u6728\u74DC*1</div>
                <div>\u83E0\u83DC*3</div>
              </CardContent>
            </Card>
            <Card className="subCard">
              <CardHeader
                title="\u96F6\u98DF\u996E\u6599"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="\u517114\u4EF6"
              />
              <CardContent>
                <div>\u85AF\u7247*2</div>
                <div>\u6A59\u6C41*2</div>
                <div>\u706B\u817F\u80A0*10</div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-card-demo-9":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Card,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{style:{background:"#eee",padding:"20px"}},l.createElement(r,{style:{width:"270px"}},l.createElement(d,{style:{padding:"10px"}},l.createElement("div",null,"\u914D\u6599\u8868"),l.createElement("div",null,"\u4E3B\u8981\u6210\u5206\uFF1A\u6C34\uFF0C\u751F\u725B\u4E73"),l.createElement("div",null,"\u4EA7\u54C1\u68C0\u9A8C\u5408\u683C"))))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ padding: '10px' }}>
          <div>\u914D\u6599\u8868</div>
          <div>\u4E3B\u8981\u6210\u5206\uFF1A\u6C34\uFF0C\u751F\u725B\u4E73</div>
          <div>\u4EA7\u54C1\u68C0\u9A8C\u5408\u683C</div>
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},76897:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-checkbox-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Checkbox,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(!1),h=v()(f,2),y=h[0],E=h[1];return o.createElement(l,null,o.createElement(a,{checked:y,onChange:function(L,C){E(C.checked)}},"Checkbox"))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Checkbox,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(!1),h=v()(f,2),y=h[0],E=h[1];return o.createElement(l,null,o.createElement(a,{checked:y,onChange:function(L,C){E(C.checked)},inputProps:{className:"my-input"}},"Checkbox"))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        inputProps={{
          className: 'my-input',
        }}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Checkbox,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(!1),h=v()(f,2),y=h[0],E=h[1];return o.createElement(l,null,o.createElement(a,{checked:y,onChange:function(L,C){E(C.checked)},name:"myCheckbox",value:"tpp"},"Checkbox"))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        name="myCheckbox"
        value="tpp"
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-3":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Checkbox,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(!1),h=v()(f,2),y=h[0],E=h[1],O=t(!1),L=v()(O,2),C=L[0],P=L[1],z=t(!1),M=v()(z,2),D=M[0],T=M[1],$=t(!1),j=v()($,2),Z=j[0],X=j[1];return o.createElement(l,null,o.createElement("div",{style:{width:"100px"}},o.createElement(a,{labelPlacement:"top",checked:y,onChange:function(_,K){var J=K.checked;E(J)}},"\u6587\u6848\u5728\u4E0A\u8FB9"),o.createElement(a,{labelPlacement:"right",checked:C,onChange:function(_,K){var J=K.checked;P(J)}},"\u6587\u6848\u5728\u53F3\u8FB9"),o.createElement(a,{labelPlacement:"bottom",checked:D,onChange:function(_,K){var J=K.checked;T(J)}},"\u6587\u6848\u5728\u4E0B\u8FB9"),o.createElement(a,{labelPlacement:"left",checked:Z,onChange:function(_,K){var J=K.checked;X(J)}},"\u6587\u6848\u5728\u5DE6\u8FB9")))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Checkbox
          labelPlacement="top"
          checked={checked1}
          onChange={(e, { checked }) => {
            setChecked1(checked);
          }}
        >
          \u6587\u6848\u5728\u4E0A\u8FB9
        </Checkbox>
        <Checkbox
          labelPlacement="right"
          checked={checked2}
          onChange={(e, { checked }) => {
            setChecked2(checked);
          }}
        >
          \u6587\u6848\u5728\u53F3\u8FB9
        </Checkbox>
        <Checkbox
          labelPlacement="bottom"
          checked={checked3}
          onChange={(e, { checked }) => {
            setChecked3(checked);
          }}
        >
          \u6587\u6848\u5728\u4E0B\u8FB9
        </Checkbox>
        <Checkbox
          labelPlacement="left"
          checked={checked4}
          onChange={(e, { checked }) => {
            setChecked4(checked);
          }}
        >
          \u6587\u6848\u5728\u5DE6\u8FB9
        </Checkbox>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-4":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i,I;return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=h.sent,a=r.default,l=r.useState,h.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=h.sent,o=n.Checkbox,t=n.Stack,h.next=12,e.e(3670).then(e.bind(e,83670));case 12:return c=h.sent,i=c.HeartFilledIcon,I=c.HeartOutlinedIcon,h.abrupt("return",{default:function(){var E=l(!1),O=v()(E,2),L=O[0],C=O[1];return a.createElement(t,null,a.createElement(o,{checked:L,onChange:function(z,M){C(M.checked)},icon:a.createElement(I,{htmlColor:"#ccc"}),checkedIcon:a.createElement(i,{color:"primary"})},"Checkbox"))}});case 16:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Checkbox, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        icon={<HeartOutlinedIcon htmlColor="#ccc" />}
        checkedIcon={<HeartFilledIcon color="primary" />}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-5":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Checkbox,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(!1),h=v()(f,1),y=h[0];return o.createElement(l,null,o.createElement(a,{checked:y,disabled:!0},"Checkbox"))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked] = useState(false);
  return (
    <Stack>
      <Checkbox checked={checked} disabled>
        Checkbox
      </Checkbox>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-6":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Checkbox,l=r.CheckboxGroup,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c([]),y=v()(h,2),E=y[0],O=y[1],L=function(P,z){console.log("handleGroupChange",P,z),O(z.value)};return t.createElement(n,null,t.createElement(l,{value:E,onChange:L},t.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),t.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),t.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B")))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState([]);
  const handleGroupChange = (e, data) => {
    console.log('handleGroupChange', e, data);
    setValue(data.value);
  };
  return (
    <Stack>
      <CheckboxGroup value={value} onChange={handleGroupChange}>
        <Checkbox value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Checkbox>
        <Checkbox value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Checkbox>
        <Checkbox value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Checkbox>
      </CheckboxGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-7":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=f.sent,a=r.Button,l=r.Checkbox,n=r.CheckboxGroup,o=r.Stack,f.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return t=f.sent,c=t.default,i=t.useState,f.abrupt("return",{default:function(){var y=i(["\u6C34\u95E8\u6865","\u6DD8\u7968\u7968","\u559C\u6D0B\u6D0B"]),E=v()(y,2),O=E[0],L=E[1],C=i(!0),P=v()(C,2),z=P[0],M=P[1];return c.createElement(o,null,c.createElement("div",{style:{width:"100px"}},c.createElement(a,{onClick:function(){var T=O.length?[]:["\u6C34\u95E8\u6865","\u6DD8\u7968\u7968","\u559C\u6D0B\u6D0B"];L(T)}},O.length?"Uncheck":"Check"," All"),c.createElement(n,{value:O},c.createElement(l,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),c.createElement(l,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),c.createElement(l,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),c.createElement("div",{style:{width:"100px"}},c.createElement(a,{onClick:function(){M(!z)}},z?"\u53D6\u6D88":"\u9009\u4E2D"),c.createElement(l,{checked:z},"\u6DD8\u7968\u7968")))}});case 13:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(['\u6C34\u95E8\u6865', '\u6DD8\u7968\u7968', '\u559C\u6D0B\u6D0B']);
  const [checked, setChecked] = useState(true);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            const data = value.length ? [] : ['\u6C34\u95E8\u6865', '\u6DD8\u7968\u7968', '\u559C\u6D0B\u6D0B'];
            setValue(data);
          }}
        >
          {value.length ? 'Uncheck' : 'Check'} All
        </Button>
        <CheckboxGroup value={value}>
          <Checkbox value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Checkbox>
          <Checkbox value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Checkbox>
          <Checkbox value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Checkbox>
        </CheckboxGroup>
      </div>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? '\u53D6\u6D88' : '\u9009\u4E2D'}
        </Button>
        <Checkbox checked={checked}>\u6DD8\u7968\u7968</Checkbox>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-8":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Checkbox,l=r.CheckboxGroup,n=r.Stack,i.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=i.sent,t=o.default,i.abrupt("return",{default:function(){return t.createElement(n,null,t.createElement("div",{style:{width:"100px"}},t.createElement("div",null,"CheckboxGroup\uFF1A"),t.createElement(l,{defaultValue:["\u6C34\u95E8\u6865","\u6DD8\u7968\u7968","\u559C\u6D0B\u6D0B"]},t.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),t.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),t.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),t.createElement("div",null,t.createElement("div",null,"Checkbox\uFF1A"),t.createElement(a,{defaultChecked:!0},"\u6DD8\u7968\u7968")))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>CheckboxGroup\uFF1A</div>
        <CheckboxGroup defaultValue={['\u6C34\u95E8\u6865', '\u6DD8\u7968\u7968', '\u559C\u6D0B\u6D0B']}>
          <Checkbox value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Checkbox>
          <Checkbox value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Checkbox>
          <Checkbox value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Checkbox>
        </CheckboxGroup>
      </div>

      <div>
        <div>Checkbox\uFF1A</div>
        <Checkbox defaultChecked>\u6DD8\u7968\u7968</Checkbox>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},46559:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-countdown-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Countdown,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(d,{remainingTime:24*60*60*1e3,format:"HH:mm:ss"}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown remainingTime={24 * 60 * 60 * 1000} format="HH:mm:ss" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-countdown-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Countdown,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(d,{endTimestamp:4102415999e3,format:"YY:MM:DD:HH:mm:ss"}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown endTimestamp={4102415999000} format="YY:MM:DD:HH:mm:ss" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-countdown-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Countdown,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(d,{serverTimestamp:Date.now()-10*1e3,endTimestamp:4102415999e3,format:"YY:MM:DD:HH:mm:ss"}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        serverTimestamp={Date.now() - 10 * 1000}
        endTimestamp={4102415999000}
        format="YY:MM:DD:HH:mm:ss"
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-countdown-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Countdown,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(d,{endTimestamp:4102415999e3,format:"YY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206ss\u79D2SSS\u6BEB\u79D2"}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        endTimestamp={4102415999000}
        format="YY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206ss\u79D2SSS\u6BEB\u79D2"
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-countdown-demo-4":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Countdown,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(d,{endTimestamp:4102415999e3,format:"YY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206ss\u79D2",unitStyle:{color:"var(--bui-color-primary)",fontWeight:600,fontSize:"16px"}}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        endTimestamp={4102415999000}
        format="YY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206ss\u79D2"
        unitStyle={{
          color: 'var(--bui-color-primary)',
          fontWeight: 600,
          fontSize: '16px',
        }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-countdown-demo-5":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Countdown,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(d,{remainingTime:24*60*60*1e3,valueStyle:[{color:"var(--bui-color-primary)",fontWeight:600,fontSize:"16px"},{color:"var(--bui-color-primary)",fontWeight:600,fontSize:"20px"}]}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        valueStyle={[
          {
            color: 'var(--bui-color-primary)',
            fontWeight: 600,
            fontSize: '16px',
          },
          {
            color: 'var(--bui-color-primary)',
            fontWeight: 600,
            fontSize: '20px',
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-countdown-demo-6":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Countdown,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(d,{remainingTime:24*60*60*1e3,format:"HH\u65F6mm\u5206ss\u79D2",timeSliceStyle:{backgroundColor:"var(--bui-color-bg-default)",padding:"4px",borderRadius:"4px",marginRight:"4px"}}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        format="HH\u65F6mm\u5206ss\u79D2"
        timeSliceStyle={{
          backgroundColor: 'var(--bui-color-bg-default)',
          padding: '4px',
          borderRadius: '4px',
          marginRight: '4px',
        }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-countdown-demo-7":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Countdown,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){var c=function(){console.log("\u5012\u8BA1\u65F6\u5DF2\u7ED3\u675F\uFF01")};return l.createElement(r,null,l.createElement(d,{remainingTime:10*1e3,onFinish:c}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  const finish = () => {
    console.log('\u5012\u8BA1\u65F6\u5DF2\u7ED3\u675F\uFF01');
  };

  return (
    <Stack>
      <Countdown remainingTime={10 * 1000} onFinish={finish} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-countdown-demo-8":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Countdown,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){var c=function(I){console.log("\u6B63\u5728\u5012\u8BA1\u65F6\uFF0C\u5F53\u524D\u6570\u636E",I)};return l.createElement(r,null,l.createElement(d,{remainingTime:10*1e3,onChange:c}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  const change = (data) => {
    console.log('\u6B63\u5728\u5012\u8BA1\u65F6\uFF0C\u5F53\u524D\u6570\u636E', data);
  };

  return (
    <Stack>
      <Countdown remainingTime={10 * 1000} onChange={change} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-countdown-demo-9":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Countdown,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(d,{remainingTime:24*60*60*1e3,renderContent:function(i){var I=i.hours,f=i.minutes,h=i.seconds;return l.createElement("span",null,"\u8DDD\u79BB\u5012\u8BA1\u65F6\u7ED3\u675F\u8FD8\u5269",I,"\u5C0F\u65F6",f,"\u5206\u949F",h,"\u79D2")}}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        renderContent={({ hours, minutes, seconds }) => {
          return (
            <span>
              \u8DDD\u79BB\u5012\u8BA1\u65F6\u7ED3\u675F\u8FD8\u5269{hours}\u5C0F\u65F6{minutes}\u5206\u949F{seconds}\u79D2
            </span>
          );
        }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},79467:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-divider-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Divider,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",l.createElement(d,{style:{margin:"0 6px"}}),"\u53F3\u8FB9")}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider style={{ margin: '0 6px' }} />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-divider-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Divider,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",l.createElement(d,{style:{margin:"0 6px"},dashed:!0}),"\u53F3\u8FB9")}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider style={{ margin: '0 6px' }} dashed />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-divider-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Divider,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",l.createElement(d,{style:{margin:"0 6px"}}),"\u53F3\u8FB9")}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider style={{ margin: '0 6px' }} />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-divider-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Divider,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",l.createElement(d,{direction:"horizontal"}),"\u4E0B\u8FB9")}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      \u4E0A\u8FB9
      <Divider direction="horizontal" />
      \u4E0B\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-divider-demo-4":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Divider,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",l.createElement(d,{size:"12px",style:{margin:"0 6px"}}),"\u53F3\u8FB9")}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider size="12px" style={{ margin: '0 6px' }} />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-divider-demo-5":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Divider,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",l.createElement(d,{direction:"horizontal",size:"100px"}),"\u4E0B\u8FB9")}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      \u4E0A\u8FB9
      <Divider direction="horizontal" size="100px" />
      \u4E0B\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-divider-demo-6":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Divider,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",l.createElement(d,{direction:"horizontal",size:"60px",style:{margin:"6px 0"}},"\u6211\u662F\u5206\u5272\u7EBF"),"\u4E0B\u8FB9")}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      \u4E0A\u8FB9
      <Divider direction="horizontal" size="60px" style={{ margin: '6px 0' }}>
        \u6211\u662F\u5206\u5272\u7EBF
      </Divider>
      \u4E0B\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-divider-demo-7":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Divider,r=m.Stack,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(r,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",l.createElement(d,{direction:"horizontal",style:{borderBottomWidth:"2px"}}),"\u4E0B\u8FB9")}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      \u4E0A\u8FB9
      <Divider direction="horizontal" style={{ borderBottomWidth: '2px' }} />
      \u4E0B\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},79119:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-drawer-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Button,l=r.Drawer,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c(!1),y=v()(h,2),E=y[0],O=y[1];return t.createElement(n,{direction:"row"},t.createElement(a,{onClick:function(){O(!0)}},"\u57FA\u7840\u7528\u6CD5"),t.createElement(l,{open:E,onClose:function(){O(!1)},contentProps:{style:{lineHeight:"20vh",textAlign:"center"}}},"\u62BD\u5C49\u6B63\u6587"))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u57FA\u7840\u7528\u6CD5
      </Button>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        contentProps={{ style: { lineHeight: '20vh', textAlign: 'center' } }}
      >
        \u62BD\u5C49\u6B63\u6587
      </Drawer>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-drawer-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Button,l=r.Drawer,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c(""),y=v()(h,2),E=y[0],O=y[1];return t.createElement(t.Fragment,null,t.createElement(n,{direction:"row",spacing:"8px"},t.createElement(a,{onClick:function(){return O("bottom")}},"\u5E95\u90E8\u5F39\u51FA"),t.createElement(a,{onClick:function(){return O("top")}},"\u9876\u90E8\u5F39\u51FA"),t.createElement(a,{onClick:function(){return O("left")}},"\u5DE6\u4FA7\u5F39\u51FA"),t.createElement(a,{onClick:function(){return O("right")}},"\u53F3\u4FA7\u5F39\u51FA")),t.createElement(l,{anchor:"bottom",open:E==="bottom",onClose:function(){return O("")},contentProps:{style:{lineHeight:"20vh",textAlign:"center"}}},"\u5E95\u90E8\u5F39\u51FA"),t.createElement(l,{anchor:"top",open:E==="top",onClose:function(){return O("")}},t.createElement("div",{style:{lineHeight:"20vh",textAlign:"center"}},"\u9876\u90E8\u5F39\u51FA")),t.createElement(l,{anchor:"left",open:E==="left",onClose:function(){return O("")},contentProps:{style:{width:"50vw",textAlign:"center",paddingTop:"50vh"}}},"\u5DE6\u4FA7\u5F39\u51FA"),t.createElement(l,{anchor:"right",open:E==="right",onClose:function(){return O("")}},t.createElement(n,{style:{width:"50vw",height:"100%"}},"right")))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [openDirection, setOpenDirection] = useState('');
  return (
    <>
      <Stack direction="row" spacing="8px">
        <Button onClick={() => setOpenDirection('bottom')}>\u5E95\u90E8\u5F39\u51FA</Button>
        <Button onClick={() => setOpenDirection('top')}>\u9876\u90E8\u5F39\u51FA</Button>
        <Button onClick={() => setOpenDirection('left')}>\u5DE6\u4FA7\u5F39\u51FA</Button>
        <Button onClick={() => setOpenDirection('right')}>\u53F3\u4FA7\u5F39\u51FA</Button>
      </Stack>
      <Drawer
        anchor="bottom"
        open={openDirection === 'bottom'}
        onClose={() => setOpenDirection('')}
        contentProps={{ style: { lineHeight: '20vh', textAlign: 'center' } }}
      >
        \u5E95\u90E8\u5F39\u51FA
      </Drawer>
      <Drawer
        anchor="top"
        open={openDirection === 'top'}
        onClose={() => setOpenDirection('')}
      >
        <div style={{ lineHeight: '20vh', textAlign: 'center' }}>\u9876\u90E8\u5F39\u51FA</div>
      </Drawer>
      <Drawer
        anchor="left"
        open={openDirection === 'left'}
        onClose={() => setOpenDirection('')}
        contentProps={{
          style: { width: '50vw', textAlign: 'center', paddingTop: '50vh' },
        }}
      >
        \u5DE6\u4FA7\u5F39\u51FA
      </Drawer>
      <Drawer
        anchor="right"
        open={openDirection === 'right'}
        onClose={() => setOpenDirection('')}
      >
        <Stack style={{ width: '50vw', height: '100%' }}>right</Stack>
      </Drawer>
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-drawer-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Button,l=r.Drawer,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c(!1),y=v()(h,2),E=y[0],O=y[1];return t.createElement(n,{direction:"row"},t.createElement(a,{onClick:function(){return O(!0)}},"\u52A8\u6001\u6548\u679C\u5EF6\u65F6"),t.createElement(l,{transitionDuration:1e3,open:E,onClose:function(){return O(!1)}},t.createElement("div",{style:{lineHeight:"20vh",textAlign:"center"}},"\u52A8\u6001\u6548\u679C\u5EF6\u65F6")))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';
export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button onClick={() => setOpen(true)}>\u52A8\u6001\u6548\u679C\u5EF6\u65F6</Button>
      <Drawer
        transitionDuration={1000}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={{ lineHeight: '20vh', textAlign: 'center' }}>
          \u52A8\u6001\u6548\u679C\u5EF6\u65F6
        </div>
      </Drawer>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-drawer-demo-3":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Button,l=r.Drawer,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c(!1),y=v()(h,2),E=y[0],O=y[1];return t.createElement(n,{id:"draw-container"},t.createElement(a,{onClick:function(){O(!0)}},"\u6307\u5B9A\u5BB9\u5668"),t.createElement(l,{container:document.getElementById("draw-container"),open:E,onClose:function(){O(!1)}},t.createElement("div",{className:"content",style:{lineHeight:"20vh",textAlign:"center"}},"\u6D6E\u5C42dom\u5728`draw-container`element\u4E2D\u6E32\u67D3")))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack id="draw-container">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6307\u5B9A\u5BB9\u5668
      </Button>
      <Drawer
        container={document.getElementById('draw-container')}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div
          className="content"
          style={{ lineHeight: '20vh', textAlign: 'center' }}
        >
          \u6D6E\u5C42dom\u5728\`draw-container\`element\u4E2D\u6E32\u67D3
        </div>
      </Drawer>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},88255:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-fade-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=f.sent,a=r.Button,l=r.Fade,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=f.sent,t=o.default,c=o.useRef,i=o.useState,f.abrupt("return",{default:function(){var y=i(!0),E=v()(y,2),O=E[0],L=E[1],C=c();return t.createElement(n,null,t.createElement(a,{onClick:function(){L(function(z){return!z}),console.log(C)}},"\u70B9\u51FB\u6539\u53D8in"),t.createElement(l,{appear:!1,in:O,timeout:{enter:2e3,exit:1e3},className:"test-clsnm"},t.createElement("div",{ref:C},"\u6DE1\u5165\u6DE1\u51FAIn")))}});case 13:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-fade-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Fade, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  const ref = useRef();
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
          console.log(ref);
        }}
      >
        \u70B9\u51FB\u6539\u53D8in
      </Button>
      <Fade
        appear={false}
        in={open}
        timeout={{
          enter: 2000,
          exit: 1000,
        }}
        className="test-clsnm"
      >
        <div ref={ref}>\u6DE1\u5165\u6DE1\u51FAIn</div>
      </Fade>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-fade-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Button,l=r.Fade,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c(!0),y=v()(h,2),E=y[0],O=y[1];return t.createElement(n,null,t.createElement(a,{onClick:function(){O(function(C){return!C})}},"\u70B9\u51FB\u6302\u8F7D/\u5378\u8F7D\u7EC4\u4EF6"),E&&t.createElement(l,{appear:!0,in:!0,timeout:1500},t.createElement("div",null,"\u6DE1\u5165\u6DE1\u51FAAppearTrue")))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-fade-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Fade, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        \u70B9\u51FB\u6302\u8F7D/\u5378\u8F7D\u7EC4\u4EF6
      </Button>
      {open && (
        <Fade appear in timeout={1500}>
          <div>\u6DE1\u5165\u6DE1\u51FAAppearTrue</div>
        </Fade>
      )}
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-fade-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Button,l=r.Fade,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c(!1),y=v()(h,2),E=y[0],O=y[1];return t.createElement(n,null,t.createElement(a,{onClick:function(){O(function(C){return!C})}},"\u70B9\u51FB\u6539\u53D8in"),t.createElement(l,{appear:!1,in:E,mountOnEnter:!0,timeout:{enter:2e3,exit:1e3}},t.createElement("div",null,"\u6DE1\u5165\u6DE1\u51FAmountOnEnter")),t.createElement(l,{appear:!1,in:E,unmountOnExit:!0,timeout:{enter:2e3,exit:1e3}},t.createElement("div",null,"\u6DE1\u5165\u6DE1\u51FAunmountOnExit")))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-fade-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Fade, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        \u70B9\u51FB\u6539\u53D8in
      </Button>
      <Fade
        appear={false}
        in={open}
        mountOnEnter
        timeout={{
          enter: 2000,
          exit: 1000,
        }}
      >
        <div>\u6DE1\u5165\u6DE1\u51FAmountOnEnter</div>
      </Fade>
      <Fade
        appear={false}
        in={open}
        unmountOnExit
        timeout={{
          enter: 2000,
          exit: 1000,
        }}
      >
        <div>\u6DE1\u5165\u6DE1\u51FAunmountOnExit</div>
      </Fade>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},72163:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-icon-button-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,d=m.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=c.sent,a=r.IconButton,l=r.Stack,c.next=11,e.e(3670).then(e.bind(e,83670));case 11:return n=c.sent,o=n.PhoneFilledIcon,c.abrupt("return",{default:function(){return d.createElement(l,{direction:"row",spacing:"8px"},d.createElement(a,null,d.createElement(o,null)),d.createElement(a,{variant:"outlined"},d.createElement(o,null)),d.createElement(a,{variant:"contained"},d.createElement(o,null)))}});case 14:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton>
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="outlined">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="contained">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-icon-button-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,d=m.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=c.sent,a=r.IconButton,l=r.Stack,c.next=11,e.e(3670).then(e.bind(e,83670));case 11:return n=c.sent,o=n.PhoneFilledIcon,c.abrupt("return",{default:function(){return d.createElement(l,{direction:"row",spacing:"8px"},d.createElement(a,{variant:"contained"},d.createElement(o,null)),d.createElement(a,{shape:"rounded",variant:"contained"},d.createElement(o,null)),d.createElement(a,{shape:"square",variant:"contained"},d.createElement(o,null)))}});case 14:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton variant="contained">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton shape="rounded" variant="contained">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton shape="square" variant="contained">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-icon-button-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,d=m.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=c.sent,a=r.IconButton,l=r.Stack,c.next=11,e.e(3670).then(e.bind(e,83670));case 11:return n=c.sent,o=n.PhoneFilledIcon,c.abrupt("return",{default:function(){return d.createElement(l,{direction:"row",spacing:"8px"},d.createElement(a,{size:"small"},d.createElement(o,null)),d.createElement(a,null,d.createElement(o,null)),d.createElement(a,{size:"large"},d.createElement(o,null)))}});case 14:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton size="small">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton>
        <PhoneFilledIcon />
      </IconButton>
      <IconButton size="large">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-icon-button-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,d=m.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=c.sent,a=r.IconButton,l=r.Stack,c.next=11,e.e(3670).then(e.bind(e,83670));case 11:return n=c.sent,o=n.PhoneFilledIcon,c.abrupt("return",{default:function(){return d.createElement(l,{spacing:"10px"},d.createElement(l,{direction:"row",spacing:"8px"},d.createElement(a,{color:"primary"},d.createElement(o,null)),d.createElement(a,{color:"success"},d.createElement(o,null)),d.createElement(a,{color:"info"},d.createElement(o,null)),d.createElement(a,{color:"warning"},d.createElement(o,null)),d.createElement(a,{color:"danger"},d.createElement(o,null))),d.createElement(l,{direction:"row",spacing:"8px"},d.createElement(a,{color:"primary",variant:"contained"},d.createElement(o,null)),d.createElement(a,{color:"success",variant:"contained"},d.createElement(o,null)),d.createElement(a,{color:"info",variant:"contained"},d.createElement(o,null)),d.createElement(a,{color:"warning",variant:"contained"},d.createElement(o,null)),d.createElement(a,{color:"danger",variant:"contained"},d.createElement(o,null))))}});case 14:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px">
      <Stack direction="row" spacing="8px">
        <IconButton color="primary">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="success">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="info">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="warning">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="danger">
          <PhoneFilledIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing="8px">
        <IconButton color="primary" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="success" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="info" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="warning" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="danger" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-icon-button-demo-4":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,d=m.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=c.sent,a=r.IconButton,l=r.Stack,c.next=11,e.e(3670).then(e.bind(e,83670));case 11:return n=c.sent,o=n.PhoneFilledIcon,c.abrupt("return",{default:function(){return d.createElement(l,{direction:"row",spacing:"8px"},d.createElement(a,{disabled:!0,color:"primary"},d.createElement(o,null)),d.createElement(a,{variant:"outlined",disabled:!0,color:"primary"},d.createElement(o,null)),d.createElement(a,{variant:"contained",disabled:!0,color:"primary"},d.createElement(o,null)))}});case 14:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton disabled color="primary">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="outlined" disabled color="primary">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="contained" disabled color="primary">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},60486:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(5574),s=e.n(b),A=e(15009),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"image-demo-0":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,i.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=i.sent,n=l.Image,o=l.Stack,t="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg",i.abrupt("return",{default:function(){return a.createElement(o,null,a.createElement(n,{width:100,height:100,src:t}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"image-demo-0",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Image, Stack } from '@bifrostui/react';

const src =
  'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

export default () => {
  return (
    <Stack>
      <Image width={100} height={100} src={src} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"image-demo-1":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,i.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=i.sent,n=l.Image,o=l.Stack,t="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg",i.abrupt("return",{default:function(){return a.createElement(o,{direction:"row",spacing:"8px",flexWrap:"wrap"},a.createElement(n,{src:t,fit:"contain",alt:"contain",width:100,height:100}),a.createElement(n,{src:t,fit:"cover",alt:"cover",width:100,height:100}),a.createElement(n,{src:t,fit:"fill",alt:"fill",width:100,height:100}),a.createElement(n,{src:t,fit:"none",alt:"none",width:100,height:100}),a.createElement(n,{src:t,fit:"scale-down",alt:"scale-down",width:100,height:100}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"image-demo-1",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Image, Stack } from '@bifrostui/react';

const src =
  'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Image src={src} fit="contain" alt="contain" width={100} height={100} />
      <Image src={src} fit="cover" alt="cover" width={100} height={100} />
      <Image src={src} fit="fill" alt="fill" width={100} height={100} />
      <Image src={src} fit="none" alt="none" width={100} height={100} />
      <Image
        src={src}
        fit="scale-down"
        alt="scale-down"
        width={100}
        height={100}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"image-demo-2":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,i.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=i.sent,n=l.Image,o=l.Stack,t="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg",i.abrupt("return",{default:function(){return a.createElement(o,{direction:"row",spacing:"8px"},a.createElement(n,{src:t,fit:"cover",width:100,height:100,style:{borderRadius:4}}),a.createElement(n,{src:t,fit:"cover",width:100,height:100,style:{borderRadius:8}}),a.createElement(n,{src:t,fit:"cover",width:100,height:100,style:{borderRadius:32}}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"image-demo-2",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Image, Stack } from '@bifrostui/react';

const src =
  'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Image
        src={src}
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 4 }}
      />
      <Image
        src={src}
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 8 }}
      />
      <Image
        src={src}
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 32 }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"image-demo-3":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=c.sent,a=r.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=c.sent,n=l.Image,o=l.Stack,c.abrupt("return",{default:function(){return a.createElement(o,{direction:"row",spacing:"8px"},a.createElement(n,{src:"https://localhost:3000/failed",fit:"cover",width:100,height:100,style:{borderRadius:4},placeholder:!0}),a.createElement(n,{src:"https://localhost:3000/failed",fit:"cover",width:100,height:100,style:{borderRadius:4},fallback:a.createElement(a.Fragment,null,"MY FALLBACK")}))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"image-demo-3",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Image, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Image
        src="https://localhost:3000/failed"
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 4 }}
        placeholder={true}
      />
      <Image
        src="https://localhost:3000/failed"
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 4 }}
        fallback={<>MY FALLBACK</>}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"image-demo-4":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=I.sent,a=r.default,l=r.useState,I.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=I.sent,o=n.Image,t=n.Button,c=n.Stack,I.abrupt("return",{default:function(){var h=l(0),y=s()(h,2),E=y[0],O=y[1],L="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg?t=".concat(E);return a.createElement(a.Fragment,null,a.createElement(t,{onClick:function(){O(function(){return Math.random()})}},"\u91CD\u65B0\u52A0\u8F7D"),a.createElement(c,{direction:"row",spacing:"8px"},a.createElement(o,{width:100,height:100,src:L}),a.createElement(o,{width:100,height:100,src:L,placeholder:!0}),a.createElement(o,{width:100,height:100,src:L,placeholder:a.createElement("div",{style:{background:"red",width:"100%",height:"100%"}})})))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"image-demo-4",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Image, Button, Stack } from '@bifrostui/react';

export default () => {
  const [random, setOpen] = useState(0);
  const src = \`https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg?t=\${random}\`;
  return (
    <>
      <Button
        onClick={() => {
          setOpen(() => Math.random());
        }}
      >
        \u91CD\u65B0\u52A0\u8F7D
      </Button>
      {
        <Stack direction="row" spacing="8px">
          <Image width={100} height={100} src={src} />
          <Image width={100} height={100} src={src} placeholder={true} />
          <Image
            width={100}
            height={100}
            src={src}
            placeholder={
              <div
                style={{ background: 'red', width: '100%', height: '100%' }}
              />
            }
          />
        </Stack>
      }
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},86413:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-input-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Input,c.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return l=c.sent,n=l.default,o=l.useState,c.abrupt("return",{default:function(){var I=o(""),f=v()(I,2),h=f[0],y=f[1],E=function(L,C){y(C==null?void 0:C.value),console.log("change",C==null?void 0:C.value)};return n.createElement(a,{value:h,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",onChange:E})}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };

  return (
    <Input value={value} placeholder="\u8BF7\u586B\u5199\u5185\u5BB9" onChange={handleChange} />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=I.sent,a=r.default,l=r.useState,I.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=I.sent,o=n.Input,I.next=11,e.e(3670).then(e.bind(e,83670));case 11:return t=I.sent,c=t.SearchOutlinedIcon,I.abrupt("return",{default:function(){var h=l(""),y=v()(h,2),E=y[0],O=y[1],L=function(P,z){O(z==null?void 0:z.value),console.log("change",z==null?void 0:z.value)};return a.createElement(o,{value:E,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",startIcon:a.createElement(c,{htmlColor:"#959aa5"}),onChange:L})}});case 14:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input } from '@bifrostui/react';
import { SearchOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };
  return (
    <Input
      value={value}
      placeholder="\u8BF7\u586B\u5199\u5185\u5BB9"
      startIcon={<SearchOutlinedIcon htmlColor="#959aa5" />}
      onChange={handleChange}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=I.sent,a=r.default,l=r.useState,I.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=I.sent,o=n.Input,I.next=11,e.e(3670).then(e.bind(e,83670));case 11:return t=I.sent,c=t.SearchOutlinedIcon,I.abrupt("return",{default:function(){var h=l(""),y=v()(h,2),E=y[0],O=y[1],L=function(P,z){O(z==null?void 0:z.value),console.log("change",z==null?void 0:z.value)};return a.createElement(o,{value:E,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",endIcon:a.createElement(c,{htmlColor:"#959aa5"}),onChange:L})}});case 14:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input } from '@bifrostui/react';
import { SearchOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };
  return (
    <Input
      value={value}
      placeholder="\u8BF7\u586B\u5199\u5185\u5BB9"
      endIcon={<SearchOutlinedIcon htmlColor="#959aa5" />}
      onChange={handleChange}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-3":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Input,c.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return l=c.sent,n=l.default,o=l.useState,c.abrupt("return",{default:function(){var I=o(""),f=v()(I,2),h=f[0],y=f[1],E=function(C,P){y(P==null?void 0:P.value),console.log("change",P==null?void 0:P.value)},O=function(C){console.log("clear:",C)};return n.createElement(n.Fragment,null,n.createElement(a,{value:h,clearable:!0,onClear:O,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",onChange:E}),n.createElement("div",{style:{margin:"20px 0 10px"}},"\u975E\u53D7\u63A7\u4E5F\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846\uFF1A"),n.createElement(a,{clearable:!0,defaultValue:"\u4F1A\u6E05\u7A7A\u5185\u5BB9"}))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };

  const handleClear = (e) => {
    console.log('clear:', e);
  };

  return (
    <>
      <Input
        value={value}
        clearable
        onClear={handleClear}
        placeholder="\u8BF7\u586B\u5199\u5185\u5BB9"
        onChange={handleChange}
      />
      <div style={{ margin: '20px 0 10px' }}>\u975E\u53D7\u63A7\u4E5F\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846\uFF1A</div>
      <Input clearable defaultValue="\u4F1A\u6E05\u7A7A\u5185\u5BB9" />
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-4":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=t.sent,a=r.Input,t.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,{disabled:!0,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9"})}});case 9:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
import React from 'react';

export default () => {
  return <Input disabled placeholder="\u8BF7\u586B\u5199\u5185\u5BB9" />;
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-5":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Button,l=r.Input,I.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=I.sent,o=n.default,t=n.useRef,c=n.useState,I.abrupt("return",{default:function(){var h=c("0"),y=v()(h,2),E=y[0],O=y[1],L=c("100"),C=v()(L,2),P=C[0],z=C[1],M=t(null),D=function(){O(function(Z){return"".concat(Number(Z)+10)})},T=function(){z(function(Z){return"".concat(Number(Z)-10)})},$=function(){var Z=M.current;Z.value=Number(Z.value)*2};return o.createElement("div",null,o.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:"40px"}},"\u53D7\u63A7\u7EC4\u4EF6\uFF1A",o.createElement(a,{onClick:D},"\u6570\u91CF\u52A010"),o.createElement("br",null),o.createElement(l,{value:E,onChange:function(Z,X){return O(X.value)}})),o.createElement("div",{style:{display:"flex",flexDirection:"column"}},"\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A",o.createElement("br",null),o.createElement(a,{onClick:T},"\u6570\u91CF\u51CF10(\u64CD\u4F5CdefaultValue\u65E0\u6548)"),o.createElement("br",null),o.createElement(a,{onClick:$},"\u6570\u91CF\u4E582(\u901A\u8FC7DOM\u64CD\u4F5Cvalue\u6709\u6548)"),o.createElement("br",null),o.createElement(l,{inputRef:M,defaultValue:P})))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Input } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [value, setValue] = useState('0');
  const [defaultValue, setDefaultValue] = useState('100');
  const reduceRef = useRef(null);

  const addTen = () => {
    setValue((prev) => \`\${Number(prev) + 10}\`);
  };

  const reduceTen = () => {
    setDefaultValue((prev) => \`\${Number(prev) - 10}\`);
  };

  const multiplyTwo = () => {
    const input = reduceRef.current;
    input.value = Number(input.value) * 2;
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '40px',
        }}
      >
        \u53D7\u63A7\u7EC4\u4EF6\uFF1A
        <Button onClick={addTen}>\u6570\u91CF\u52A010</Button>
        <br />
        <Input value={value} onChange={(e, data) => setValue(data.value)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        \u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A
        <br />
        <Button onClick={reduceTen}>\u6570\u91CF\u51CF10(\u64CD\u4F5CdefaultValue\u65E0\u6548)</Button>
        <br />
        <Button onClick={multiplyTwo}>\u6570\u91CF\u4E582(\u901A\u8FC7DOM\u64CD\u4F5Cvalue\u6709\u6548)</Button>
        <br />
        <Input inputRef={reduceRef} defaultValue={defaultValue} />
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-6":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Input,c.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return l=c.sent,n=l.default,o=l.useState,c.abrupt("return",{default:function(){var I=o(""),f=v()(I,2),h=f[0],y=f[1],E=function(L,C){y(C==null?void 0:C.value),console.log("change",C==null?void 0:C.value)};return n.createElement(a,{type:"number",placeholder:"number\u7C7B\u578B",value:h,onChange:E})}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };
  return (
    <Input
      type="number"
      placeholder="number\u7C7B\u578B"
      value={value}
      onChange={handleChange}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},75464:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(5574),s=e.n(b),A=e(15009),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-list-demo-0":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.List,l=r.ListItem,n=r.ListItemContent,o=r.Stack,I.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(o,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px 10px"}},c.createElement(o,{style:{width:"350px"}},c.createElement(a,{style:{width:"100%"}},c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:c.createElement("div",null,"\u56DE\u6536\u7AD9")})),c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:c.createElement("div",null,"\u8BBE\u7F6E"),secondary:c.createElement("div",null,"\u97F3\u91CF\u8BBE\u7F6E")})))))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>\u56DE\u6536\u7AD9</div>} />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary={<div>\u8BBE\u7F6E</div>}
              secondary={<div>\u97F3\u91CF\u8BBE\u7F6E</div>}
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-1":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i,I,f,h,y,E,O;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=C.sent,a=r.List,l=r.ListItem,n=r.ListItemContent,o=r.ListItemExtra,t=r.ListItemFooter,c=r.ListItemHeader,i=r.Stack,I=r.Switch,C.next=13,e.e(3670).then(e.bind(e,83670));case 13:return f=C.sent,h=f.PhoneFilledIcon,C.next=17,Promise.resolve().then(e.t.bind(e,67294,19));case 17:return y=C.sent,E=y.default,O=y.useState,C.abrupt("return",{default:function(){var z=O(!1),M=s()(z,2),D=M[0],T=M[1];return E.createElement(i,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},E.createElement(i,{style:{width:"350px"}},E.createElement(a,{style:{width:"100%"}},E.createElement(l,{onClick:function(j){console.log(j)}},E.createElement(c,null,E.createElement(h,null)),E.createElement(n,{primary:E.createElement("div",null,"\u98DE\u884C\u6A21\u5F0F")}),E.createElement(t,null,D?"\u5DF2\u5F00\u542F\u98DE\u884C\u6A21\u5F0F":""),E.createElement(o,{onClick:function(j){T(!D)}},E.createElement(I,{color:"primary",checked:D}))))))}});case 21:case"end":return C.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  List,
  ListItem,
  ListItemContent,
  ListItemExtra,
  ListItemFooter,
  ListItemHeader,
  Stack,
  Switch,
} from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';
import React, { useState } from 'react';

export default () => {
  const [check, setCheck] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <PhoneFilledIcon />
            </ListItemHeader>
            <ListItemContent primary={<div>\u98DE\u884C\u6A21\u5F0F</div>} />
            <ListItemFooter>{check ? '\u5DF2\u5F00\u542F\u98DE\u884C\u6A21\u5F0F' : ''}</ListItemFooter>
            <ListItemExtra
              onClick={(e) => {
                setCheck(!check);
              }}
            >
              <Switch color="primary" checked={check} />
            </ListItemExtra>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-2":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i,I;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=h.sent,a=r.Alert,l=r.List,n=r.ListItem,o=r.ListItemContent,t=r.Stack,h.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return c=h.sent,i=c.default,I=c.useState,h.abrupt("return",{default:function(){var E=I(!1),O=s()(E,2),L=O[0],C=O[1];return i.createElement(t,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},i.createElement(t,{style:{width:"350px"}},L&&i.createElement(a,null,"\u70B9\u51FB\u6E05\u9664\u56DE\u6536\u7AD9\u6210\u529F"),i.createElement(l,{style:{width:"100%"}},i.createElement(n,{disabled:!0,onClick:function(z){C(!0),setTimeout(function(){C(!1)},1e3)}},i.createElement(o,{primary:i.createElement("div",{onClick:function(){C(!0),setTimeout(function(){C(!1)},1e3)}},"\u56DE\u6536\u7AD9")})),i.createElement(n,{onClick:function(z){C(!0),setTimeout(function(){C(!1)},1e3)}},i.createElement(o,{primary:i.createElement("div",null,"\u8BBE\u7F6E"),secondary:i.createElement("div",null,"\u6E05\u9664\u56DE\u6536\u7AD9")})))))}});case 14:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Alert,
  List,
  ListItem,
  ListItemContent,
  Stack,
} from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        {isOpen && <Alert>\u70B9\u51FB\u6E05\u9664\u56DE\u6536\u7AD9\u6210\u529F</Alert>}
        <List style={{ width: '100%' }}>
          <ListItem
            disabled
            onClick={(e) => {
              setOpen(true);
              setTimeout(() => {
                setOpen(false);
              }, 1000);
            }}
          >
            <ListItemContent
              primary={
                <div
                  onClick={() => {
                    setOpen(true);
                    setTimeout(() => {
                      setOpen(false);
                    }, 1000);
                  }}
                >
                  \u56DE\u6536\u7AD9
                </div>
              }
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              setOpen(true);
              setTimeout(() => {
                setOpen(false);
              }, 1000);
            }}
          >
            <ListItemContent
              primary={<div>\u8BBE\u7F6E</div>}
              secondary={<div>\u6E05\u9664\u56DE\u6536\u7AD9</div>}
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-3":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.List,l=r.ListItem,n=r.ListItemContent,o=r.Stack,I.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(o,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},c.createElement(o,{style:{width:"350px"}},c.createElement(a,{header:c.createElement("div",null,"\u7CFB\u7EDF"),subheader:c.createElement("div",null,"\u7CFB\u7EDF\u8BBE\u7F6E"),style:{width:"100%"}},c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:c.createElement("div",null,"\u4E3B\u9898\u8BBE\u7F6E")})),c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:c.createElement("div",null,"\u97F3\u91CF\u8BBE\u7F6E")})))))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List
          header={<div>\u7CFB\u7EDF</div>}
          subheader={<div>\u7CFB\u7EDF\u8BBE\u7F6E</div>}
          style={{ width: '100%' }}
        >
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>\u4E3B\u9898\u8BBE\u7F6E</div>} />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>\u97F3\u91CF\u8BBE\u7F6E</div>} />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-4":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i,I,f,h;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=E.sent,a=r.default,E.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=E.sent,n=l.List,o=l.ListItem,t=l.ListItemContent,c=l.ListItemHeader,i=l.Stack,E.next=14,e.e(3670).then(e.bind(e,83670));case 14:return I=E.sent,f=I.LocationFilledIcon,h=I.PhoneFilledIcon,E.abrupt("return",{default:function(){return a.createElement(i,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},a.createElement(i,{style:{width:"350px"}},a.createElement(n,{style:{width:"100%"}},a.createElement(o,{onClick:function(C){console.log(C)}},a.createElement(c,null,a.createElement(h,null)),a.createElement(t,null,"\u7535\u8BDD")),a.createElement(o,{onClick:function(C){console.log(C)}},a.createElement(c,null,a.createElement(f,null)),a.createElement(t,null,"\u4F4F\u5740")))))}});case 18:case"end":return E.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import {
  List,
  ListItem,
  ListItemContent,
  ListItemHeader,
  Stack,
} from '@bifrostui/react';
import { LocationFilledIcon, PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <PhoneFilledIcon />
            </ListItemHeader>
            <ListItemContent>\u7535\u8BDD</ListItemContent>
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <LocationFilledIcon />
            </ListItemHeader>
            <ListItemContent>\u4F4F\u5740</ListItemContent>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-5":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.List,l=r.ListItem,n=r.ListItemContent,o=r.Stack,I.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(o,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},c.createElement(o,{style:{width:"350px"}},c.createElement(a,{style:{width:"100%"}},c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:"\u8BBE\u7F6E",secondary:"\u7CFB\u7EDF\u8BBE\u7F6E"})))))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="\u8BBE\u7F6E" secondary="\u7CFB\u7EDF\u8BBE\u7F6E" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-6":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i,I;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=h.sent,a=r.Avatar,l=r.List,n=r.ListItem,o=r.ListItemContent,t=r.ListItemFooter,c=r.Stack,h.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return i=h.sent,I=i.default,h.abrupt("return",{default:function(){return I.createElement(c,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},I.createElement(c,{style:{width:"350px"}},I.createElement(l,{style:{width:"100%"}},I.createElement(n,{onClick:function(O){console.log(O)}},I.createElement(o,null,"\u5934\u50CF"),I.createElement(t,null,I.createElement(a,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}))))))}});case 14:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Avatar,
  List,
  ListItem,
  ListItemContent,
  ListItemFooter,
  Stack,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent>\u5934\u50CF</ListItemContent>
            <ListItemFooter>
              <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
            </ListItemFooter>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-7":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i,I,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=y.sent,a=r.List,l=r.ListItem,n=r.ListItemContent,o=r.ListItemExtra,t=r.Stack,c=r.Switch,y.next=11,Promise.resolve().then(e.t.bind(e,67294,19));case 11:return i=y.sent,I=i.default,f=i.useState,y.abrupt("return",{default:function(){var O=f(!1),L=s()(O,2),C=L[0],P=L[1];return I.createElement(t,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},I.createElement(t,{style:{width:"350px"}},I.createElement(a,{style:{width:"100%"}},I.createElement(l,null,I.createElement(n,{primary:I.createElement("div",null,"\u5728\u4F18\u9177\u5C55\u793A\u60F3\u770B\u8BB0\u5F55"),secondary:I.createElement("div",null,"\u5F71\u7247\u53EF\u5728\u7EBF\u64AD\u653E\u65F6\u4F1A\u901A\u77E5\u63D0\u9192\u4F60")}),I.createElement(o,{onClick:function(M){P(!C)}},I.createElement(c,{color:"primary",checked:C}))))))}});case 15:case"end":return y.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  List,
  ListItem,
  ListItemContent,
  ListItemExtra,
  Stack,
  Switch,
} from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [check, setCheck] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem>
            <ListItemContent
              primary={<div>\u5728\u4F18\u9177\u5C55\u793A\u60F3\u770B\u8BB0\u5F55</div>}
              secondary={<div>\u5F71\u7247\u53EF\u5728\u7EBF\u64AD\u653E\u65F6\u4F1A\u901A\u77E5\u63D0\u9192\u4F60</div>}
            />
            <ListItemExtra
              onClick={(e) => {
                setCheck(!check);
              }}
            >
              <Switch color="primary" checked={check} />
            </ListItemExtra>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-8":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.List,l=r.ListItem,n=r.ListItemContent,o=r.Stack,I.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(o,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},c.createElement(o,{style:{width:"350px"}},c.createElement(a,{style:{width:"100%"}},c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:"\u84DD\u7259\u548C\u8BBE\u5907\u8FDE\u63A5",secondary:"NFC\u3001\u6295\u5C04\u5C4F\u5E55\u3001\u89E6\u78B0\u4ED8\u6B3E"})),c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:"\u663E\u793A",secondary:"\u72B6\u6001\u680F\u3001\u606F\u5C4F\u663E\u793A"})))))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="\u84DD\u7259\u548C\u8BBE\u5907\u8FDE\u63A5"
              secondary="NFC\u3001\u6295\u5C04\u5C4F\u5E55\u3001\u89E6\u78B0\u4ED8\u6B3E"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="\u663E\u793A" secondary="\u72B6\u6001\u680F\u3001\u606F\u5C4F\u663E\u793A" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-9":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.List,l=r.ListItem,n=r.ListItemContent,o=r.Stack,I.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(o,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},c.createElement(o,{style:{width:"350px"}},c.createElement(a,{hideDivider:!0,style:{width:"100%"}},c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:"\u84DD\u7259\u548C\u8BBE\u5907\u8FDE\u63A5",secondary:"NFC\u3001\u6295\u5C04\u5C4F\u5E55\u3001\u89E6\u78B0\u4ED8\u6B3E"})),c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:"\u663E\u793A",secondary:"\u72B6\u6001\u680F\u3001\u606F\u5C4F\u663E\u793A"})))))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List hideDivider style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="\u84DD\u7259\u548C\u8BBE\u5907\u8FDE\u63A5"
              secondary="NFC\u3001\u6295\u5C04\u5C4F\u5E55\u3001\u89E6\u78B0\u4ED8\u6B3E"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="\u663E\u793A" secondary="\u72B6\u6001\u680F\u3001\u606F\u5C4F\u663E\u793A" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-10":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.List,l=r.ListItem,n=r.ListItemContent,o=r.Stack,I.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(o,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"},spacing:"20px"},c.createElement(o,{style:{width:"350px"}},c.createElement("div",null," \u9ED8\u8BA4\u5927\u5C0F\uFF08medium\uFF09:"),c.createElement(a,{style:{width:"100%"}},c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:c.createElement("div",null,"\u7CFB\u7EDF")}))),c.createElement("div",null,"\u5C0F\u4E00\u53F7\uFF08small\uFF09\uFF1A"),c.createElement(a,{size:"small",style:{width:"100%"}},c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:c.createElement("div",null,"\u7CFB\u7EDF")}))),c.createElement("div",null,"\u5927\u4E00\u53F7\uFF08large\uFF09\uFF1A"),c.createElement(a,{size:"large",style:{width:"100%"}},c.createElement(l,{onClick:function(y){console.log(y)}},c.createElement(n,{primary:c.createElement("div",null,"\u7CFB\u7EDF")})))))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}
      spacing="20px"
    >
      <Stack style={{ width: '350px' }}>
        <div> \u9ED8\u8BA4\u5927\u5C0F\uFF08medium\uFF09:</div>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>\u7CFB\u7EDF</div>} />
          </ListItem>
        </List>
        <div>\u5C0F\u4E00\u53F7\uFF08small\uFF09\uFF1A</div>
        <List size="small" style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>\u7CFB\u7EDF</div>} />
          </ListItem>
        </List>
        <div>\u5927\u4E00\u53F7\uFF08large\uFF09\uFF1A</div>
        <List size="large" style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>\u7CFB\u7EDF</div>} />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},46337:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-loading-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Stack,l=r.Loading,o.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(l,null))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-loading-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Stack,l=r.Loading,o.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(l,null,"\u52A0\u8F7D\u4E2D..."))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading>\u52A0\u8F7D\u4E2D...</Loading>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-loading-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Stack,l=r.Loading,o.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(l,{direction:"horizontal"},"\u52A0\u8F7D\u4E2D..."))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading direction="horizontal">\u52A0\u8F7D\u4E2D...</Loading>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-loading-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Stack,l=r.Loading,o.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(l,{IconProps:{htmlColor:"#ff335c"}},"\u52A0\u8F7D\u4E2D..."))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading IconProps={{ htmlColor: '#ff335c' }}>\u52A0\u8F7D\u4E2D...</Loading>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},81036:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-modal-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Button,l=r.Modal,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c(!1),y=v()(h,2),E=y[0],O=y[1];return t.createElement(n,null,t.createElement(a,{onClick:function(){O(!0)}},"\u6253\u5F00\u5F39\u7A97"),t.createElement(l,{open:E,onClose:function(){O(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},t.createElement("div",{style:{textAlign:"center"}},"\u6D4B\u8BD5\u5F39\u7A97"))))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u5F39\u7A97
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '300px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            overflowY: 'auto',
          }}
        >
          <div style={{ textAlign: 'center' }}>\u6D4B\u8BD5\u5F39\u7A97</div>
        </div>
      </Modal>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-modal-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Button,l=r.Modal,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c(!1),y=v()(h,2),E=y[0],O=y[1],L=c(!1),C=v()(L,2),P=C[0],z=C[1];return t.createElement(n,null,t.createElement(a,{onClick:function(){O(!0)}},"\u6253\u5F00\u65E0\u906E\u7F69\u7684\u5F39\u7A97"),t.createElement(a,{onClick:function(){z(!0)}},"\u6253\u5F00\u9690\u85CF\u906E\u7F69\u7684\u5F39\u7A97"),t.createElement(l,{open:E,onClose:function(){O(!1)},hideBackdrop:!0,style:{display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"},onClick:function(){return O(!1)}},t.createElement("div",{style:{textAlign:"center"}},"\u65E0\u906E\u7F69\u7684\u5F39\u7A97\uFF08\u9700\u81EA\u884C\u5B9E\u73B0\u70B9\u51FB\u5173\u95ED\uFF09"))),t.createElement(l,{open:P,onClose:function(){z(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center"},BackdropProps:{invisible:!0}},t.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},t.createElement("div",{style:{textAlign:"center"}},"\u9690\u85CF\u906E\u7F69\u7684\u5F39\u7A97\uFF08\u70B9\u51FB\u5916\u90E8\u4EFB\u610F\u533A\u57DF\u5173\u95ED\uFF09"))))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u65E0\u906E\u7F69\u7684\u5F39\u7A97
      </Button>
      <Button
        onClick={() => {
          setOpen1(true);
        }}
      >
        \u6253\u5F00\u9690\u85CF\u906E\u7F69\u7684\u5F39\u7A97
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        hideBackdrop
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '300px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            overflowY: 'auto',
          }}
          onClick={() => setOpen(false)}
        >
          <div style={{ textAlign: 'center' }}>
            \u65E0\u906E\u7F69\u7684\u5F39\u7A97\uFF08\u9700\u81EA\u884C\u5B9E\u73B0\u70B9\u51FB\u5173\u95ED\uFF09
          </div>
        </div>
      </Modal>
      <Modal
        open={open1}
        onClose={() => {
          setOpen1(false);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        BackdropProps={{ invisible: true }}
      >
        <div
          style={{
            width: '80%',
            height: '300px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            overflowY: 'auto',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            \u9690\u85CF\u906E\u7F69\u7684\u5F39\u7A97\uFF08\u70B9\u51FB\u5916\u90E8\u4EFB\u610F\u533A\u57DF\u5173\u95ED\uFF09
          </div>
        </div>
      </Modal>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-modal-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Button,l=r.Modal,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c(!1),y=v()(h,2),E=y[0],O=y[1],L=c(!1),C=v()(L,2),P=C[0],z=C[1];return t.createElement(n,null,t.createElement(a,{onClick:function(){O(!0)}},"\u6253\u5F00\u5F39\u7A97"),t.createElement(a,{onClick:function(){z(function(D){return!D})}},"\u6ED1\u52A8/\u6EDA\u52A8\u7A7F\u900F\u4FDD\u62A4",P?"\u5173":"\u5F00"),t.createElement(l,{open:E,onClose:function(){O(!1)},disableScrollLock:P,style:{display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},t.createElement("div",{style:{textAlign:"center"}},"\u6D4B\u8BD5\u5F39\u7A97",t.createElement("br",null),"\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u7A97",t.createElement("br",null),t.createElement("br",null),"\u6EDA\u52A8\u7A7F\u900F\u963B\u6B62\u2193",t.createElement("br",null),"\uFF08\u76F4\u63A5\u4F7F\u7528\u6EDA\u8F6E\u6216\u8005\u5728\u79FB\u52A8\u7AEF\u89E6\u6478\u62D6\u52A8\u6D4B\u8BD5\uFF09",t.createElement("br",null),t.createElement("br",null),t.createElement("br",null),t.createElement("br",null),t.createElement("br",null),t.createElement("br",null),t.createElement("br",null),t.createElement("br",null),t.createElement("br",null),t.createElement("br",null),"\u6EDA\u52A8\u7A7F\u900F\u963B\u6B62\u2191"))))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [scrollLock, setScrollLock] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u5F39\u7A97
      </Button>
      <Button
        onClick={() => {
          setScrollLock((o) => !o);
        }}
      >
        \u6ED1\u52A8/\u6EDA\u52A8\u7A7F\u900F\u4FDD\u62A4{scrollLock ? '\u5173' : '\u5F00'}
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        disableScrollLock={scrollLock}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '300px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            overflowY: 'auto',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            \u6D4B\u8BD5\u5F39\u7A97
            <br />
            \u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u7A97
            <br />
            <br />
            \u6EDA\u52A8\u7A7F\u900F\u963B\u6B62\u2193
            <br />
            \uFF08\u76F4\u63A5\u4F7F\u7528\u6EDA\u8F6E\u6216\u8005\u5728\u79FB\u52A8\u7AEF\u89E6\u6478\u62D6\u52A8\u6D4B\u8BD5\uFF09
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            \u6EDA\u52A8\u7A7F\u900F\u963B\u6B62\u2191
          </div>
        </div>
      </Modal>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-modal-demo-3":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Button,l=r.Modal,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c(!1),y=v()(h,2),E=y[0],O=y[1],L=c(!1),C=v()(L,2),P=C[0],z=C[1];return t.createElement(n,null,t.createElement(a,{onClick:function(){O(!0),z(!0)}},"\u6253\u5F00\u5F39\u7A97"),t.createElement(l,{open:E,onClose:function(){O(!1)},keepMounted:P,style:{display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},t.createElement("p",null,"open:",E?"T":"F"),t.createElement("p",null,"keepMounted:",P?"T":"F"),t.createElement("p",null,"\u70B9\u51FB\u9000\u51FA\u540Eopen\u53D8\u4E3AFalse\uFF0C\u6B64\u65F6Backdrop\u5F00\u59CB\u6267\u884C\u9000\u51FA\u52A8\u6548"),t.createElement("p",null,"\u70B9\u51FB\u786E\u5B9A\u9000\u51FA\u540EkeepMounted\u53D8\u4E3AFalse"),t.createElement("p",null,"\u4E24\u8005\u5747\u4E3AFalse\u4E14Backdrop\u9000\u51FA\u52A8\u6548\u7ED3\u675F\u540E\u7EC4\u4EF6\u6574\u4F53\u5378\u8F7D"),t.createElement(a,{onClick:function(){O(!1)}},"\u9000\u51FA"),t.createElement(a,{onClick:function(){z(!1)}},"\u786E\u5B9A\u9000\u51FA"))))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [mount, setMount] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
          setMount(true);
        }}
      >
        \u6253\u5F00\u5F39\u7A97
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        keepMounted={mount}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '300px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            overflowY: 'auto',
          }}
        >
          <p>open:{open ? 'T' : 'F'}</p>
          <p>keepMounted:{mount ? 'T' : 'F'}</p>
          <p>\u70B9\u51FB\u9000\u51FA\u540Eopen\u53D8\u4E3AFalse\uFF0C\u6B64\u65F6Backdrop\u5F00\u59CB\u6267\u884C\u9000\u51FA\u52A8\u6548</p>
          <p>\u70B9\u51FB\u786E\u5B9A\u9000\u51FA\u540EkeepMounted\u53D8\u4E3AFalse</p>
          <p>\u4E24\u8005\u5747\u4E3AFalse\u4E14Backdrop\u9000\u51FA\u52A8\u6548\u7ED3\u675F\u540E\u7EC4\u4EF6\u6574\u4F53\u5378\u8F7D</p>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            \u9000\u51FA
          </Button>
          <Button
            onClick={() => {
              setMount(false);
            }}
          >
            \u786E\u5B9A\u9000\u51FA
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},21010:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-nav-bar-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Stack,l=r.NavBar,o.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(l,null))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-nav-bar-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,d=m.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=c.sent,a=r.Stack,l=r.NavBar,c.next=11,e.e(3670).then(e.bind(e,83670));case 11:return n=c.sent,o=n.CloseLargeIcon,c.abrupt("return",{default:function(){return d.createElement(a,{spacing:"50px"},d.createElement(l,{title:"\u6807\u9898\u6587\u6848",leftIcon:d.createElement(o,null)}),d.createElement(l,{title:"\u6807\u9898\u6587\u6848",leftIcon:!1}))}});case 14:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';
import { CloseLargeIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar title="\u6807\u9898\u6587\u6848" leftIcon={<CloseLargeIcon />} />
      <NavBar title="\u6807\u9898\u6587\u6848" leftIcon={false} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-nav-bar-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Stack,l=r.NavBar,o.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(l,{title:"\u6807\u9898\u6587\u6848",IconProps:{htmlColor:"#ff335c"}}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar title="\u6807\u9898\u6587\u6848" IconProps={{ htmlColor: '#ff335c' }} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-nav-bar-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Stack,l=r.NavBar,o.abrupt("return",{default:function(){return d.createElement(a,{spacing:"50px"},d.createElement(l,{left:"\u8FD4\u56DE"}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar left="\u8FD4\u56DE" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-nav-bar-demo-4":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Stack,l=r.NavBar,o.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(a,{spacing:"50px",style:{width:"375px"}},d.createElement(l,{title:"\u6807\u9898\u6587\u6848"}),d.createElement(l,{title:"\u8FD9\u4E2A\u6807\u9898\u6587\u6848\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F"})))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Stack spacing="50px" style={{ width: '375px' }}>
        <NavBar title="\u6807\u9898\u6587\u6848" />
        <NavBar title="\u8FD9\u4E2A\u6807\u9898\u6587\u6848\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F" />
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-nav-bar-demo-5":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=c.sent,d=m.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=c.sent,a=r.Stack,l=r.NavBar,c.next=11,e.e(3670).then(e.bind(e,83670));case 11:return n=c.sent,o=n.MoreIcon,c.abrupt("return",{default:function(){return d.createElement(a,{spacing:"50px"},d.createElement(l,{title:"\u6807\u9898\u6587\u6848",right:"\u6587\u6848"}),d.createElement(l,{title:"\u6807\u9898\u6587\u6848",right:d.createElement(o,{size:"large"})}))}});case 14:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';
import { MoreIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar title="\u6807\u9898\u6587\u6848" right="\u6587\u6848" />
      <NavBar title="\u6807\u9898\u6587\u6848" right={<MoreIcon size="large" />} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-nav-bar-demo-6":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Stack,l=r.NavBar,o.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(l,{title:"\u6807\u9898\u6587\u6848",fixed:!0,placeholder:!0}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar title="\u6807\u9898\u6587\u6848" fixed placeholder />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},35281:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-portal-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i,I;return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=h.sent,a=r.default,l=r.useState,n=r.useRef,o=r.useLayoutEffect,h.next=9,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 9:return t=h.sent,c=t.Portal,i=t.Button,I=t.Stack,h.abrupt("return",{default:function(){var E=n(null),O=n(null),L=l({current:null}),C=v()(L,2),P=C[0],z=C[1];return o(function(){z(E)},[]),a.createElement(I,null,a.createElement(i,{onClick:function(){return z(E)}},"\u8282\u70B91\u6E32\u67D3Portal\u5B50\u8282\u70B9"),a.createElement(i,{onClick:function(){return z(O)}},"\u8282\u70B92\u6E32\u67D3Portal\u5B50\u8282\u70B9"),a.createElement("div",{style:{width:200,height:100,background:"red",marginTop:10},ref:E},"\u8282\u70B91"),a.createElement("div",{style:{width:200,height:100,background:"green"},ref:O},"\u8282\u70B92"),a.createElement(c,{container:P.current},"\u6E32\u67D3Portal\u5B50\u8282\u70B9"))}});case 14:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-portal-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useRef, useLayoutEffect } from 'react';
import { Portal, Button, Stack } from '@bifrostui/react';

export default () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [container, setContainer] = useState({ current: null });
  useLayoutEffect(() => {
    setContainer(ref1);
  }, []);
  return (
    <Stack>
      <Button onClick={() => setContainer(ref1)}>\u8282\u70B91\u6E32\u67D3Portal\u5B50\u8282\u70B9</Button>
      <Button onClick={() => setContainer(ref2)}>\u8282\u70B92\u6E32\u67D3Portal\u5B50\u8282\u70B9</Button>
      <div
        style={{ width: 200, height: 100, background: 'red', marginTop: 10 }}
        ref={ref1}
      >
        \u8282\u70B91
      </div>
      <div style={{ width: 200, height: 100, background: 'green' }} ref={ref2}>
        \u8282\u70B92
      </div>
      <Portal container={container.current}>\u6E32\u67D3Portal\u5B50\u8282\u70B9</Portal>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-portal-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=c.sent,a=r.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=c.sent,n=l.Portal,o=l.Stack,c.abrupt("return",{default:function(){return a.createElement(o,null,a.createElement("div",{style:{width:200,height:100,background:"green",marginTop:10}},"Portal\u7236\u8282\u70B9",a.createElement(n,{disablePortal:!0},a.createElement("div",null,"Portal\u5B50\u8282\u70B9\u6302\u8F7D\u5728\u7236\u8282\u70B9\u4E0A"))))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-portal-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Portal, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <div
        style={{ width: 200, height: 100, background: 'green', marginTop: 10 }}
      >
        Portal\u7236\u8282\u70B9
        <Portal disablePortal>
          <div>Portal\u5B50\u8282\u70B9\u6302\u8F7D\u5728\u7236\u8282\u70B9\u4E0A</div>
        </Portal>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},88263:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-progress-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=n.sent,d=m.default,n.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=n.sent,a=r.Progress,n.abrupt("return",{default:function(){return d.createElement(a,{percent:40})}});case 9:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={40} />;
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-progress-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Progress,l=r.Stack,o.abrupt("return",{default:function(){return d.createElement(l,{direction:"column",spacing:"5px"},d.createElement(a,{percent:40,strokeColor:"var(--bui-color-primary)"}),d.createElement(a,{percent:50,strokeColor:"var(--bui-color-info)"}),d.createElement(a,{percent:30,strokeColor:"var(--bui-color-success)"}),d.createElement(a,{percent:80,strokeColor:"var(--bui-color-warning)"}),d.createElement(a,{percent:90,strokeColor:"var(--bui-color-vip)"}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" spacing="5px">
      <Progress percent={40} strokeColor="var(--bui-color-primary)" />
      <Progress percent={50} strokeColor="var(--bui-color-info)" />
      <Progress percent={30} strokeColor="var(--bui-color-success)" />
      <Progress percent={80} strokeColor="var(--bui-color-warning)" />
      <Progress percent={90} strokeColor="var(--bui-color-vip)" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-progress-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Progress,l=r.Stack,o.abrupt("return",{default:function(){return d.createElement(l,{direction:"column",alignItems:"flex-start",spacing:"10px"},d.createElement(a,{percent:60,strokeColor:"var(--bui-color-warning)",strokeWidth:10}),d.createElement(a,{percent:60,strokeColor:"var(--bui-color-warning)",strokeWidth:15}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing="10px">
      <Progress
        percent={60}
        strokeColor="var(--bui-color-warning)"
        strokeWidth={10}
      />
      <Progress
        percent={60}
        strokeColor="var(--bui-color-warning)"
        strokeWidth={15}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-progress-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Progress,l=r.Stack,o.abrupt("return",{default:function(){return d.createElement(l,{direction:"column",alignItems:"flex-start",spacing:"10px"},d.createElement(a,{percent:60,strokeColor:{from:"var(--bui-color-red)",to:"var(--bui-color-red-light)"}}),d.createElement(a,{percent:90,strokeColor:{"0%":"var(--bui-color-orange)","100%":"var(--bui-color-orange-light)"}}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing="10px">
      <Progress
        percent={60}
        strokeColor={{
          from: 'var(--bui-color-red)',
          to: 'var(--bui-color-red-light)',
        }}
      />
      <Progress
        percent={90}
        strokeColor={{
          '0%': 'var(--bui-color-orange)',
          '100%': 'var(--bui-color-orange-light)',
        }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-progress-demo-4":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=n.sent,d=m.default,n.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=n.sent,a=r.Progress,n.abrupt("return",{default:function(){return d.createElement(a,{percent:60,trailColor:"var(--bui-color-red-light)"})}});case 9:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={60} trailColor="var(--bui-color-red-light)" />;
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},32848:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-radio-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Radio,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(!1),h=v()(f,2),y=h[0],E=h[1];return o.createElement(l,null,o.createElement(a,{checked:y,onChange:function(L,C){E(C.checked)}},"Radio"))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
      >
        Radio
      </Radio>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Radio,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(!1),h=v()(f,2),y=h[0],E=h[1];return o.createElement(l,null,o.createElement(a,{checked:y,onChange:function(L,C){E(C.checked)},inputProps:{className:"my-input"}},"Radio"))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        inputProps={{
          className: 'my-input',
        }}
      >
        Radio
      </Radio>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Radio,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(!1),h=v()(f,2),y=h[0],E=h[1];return o.createElement(l,null,o.createElement(a,{checked:y,onChange:function(L,C){E(C.checked)},name:"myRadio",value:"tpp"},"Radio"))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        name="myRadio"
        value="tpp"
      >
        Radio
      </Radio>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-3":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Radio,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(!1),h=v()(f,2),y=h[0],E=h[1],O=t(!1),L=v()(O,2),C=L[0],P=L[1],z=t(!1),M=v()(z,2),D=M[0],T=M[1],$=t(!1),j=v()($,2),Z=j[0],X=j[1];return o.createElement(l,null,o.createElement("div",{style:{width:"100px"}},o.createElement(a,{labelPlacement:"top",checked:y,onChange:function(_,K){var J=K.checked;E(J)}},"\u6587\u6848\u5728\u4E0A\u8FB9"),o.createElement(a,{labelPlacement:"right",checked:C,onChange:function(_,K){var J=K.checked;P(J)}},"\u6587\u6848\u5728\u53F3\u8FB9"),o.createElement(a,{labelPlacement:"bottom",checked:D,onChange:function(_,K){var J=K.checked;T(J)}},"\u6587\u6848\u5728\u4E0B\u8FB9"),o.createElement(a,{labelPlacement:"left",checked:Z,onChange:function(_,K){var J=K.checked;X(J)}},"\u6587\u6848\u5728\u5DE6\u8FB9")))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Radio
          labelPlacement="top"
          checked={checked1}
          onChange={(e, { checked }) => {
            setChecked1(checked);
          }}
        >
          \u6587\u6848\u5728\u4E0A\u8FB9
        </Radio>
        <Radio
          labelPlacement="right"
          checked={checked2}
          onChange={(e, { checked }) => {
            setChecked2(checked);
          }}
        >
          \u6587\u6848\u5728\u53F3\u8FB9
        </Radio>
        <Radio
          labelPlacement="bottom"
          checked={checked3}
          onChange={(e, { checked }) => {
            setChecked3(checked);
          }}
        >
          \u6587\u6848\u5728\u4E0B\u8FB9
        </Radio>
        <Radio
          labelPlacement="left"
          checked={checked4}
          onChange={(e, { checked }) => {
            setChecked4(checked);
          }}
        >
          \u6587\u6848\u5728\u5DE6\u8FB9
        </Radio>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-4":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i,I;return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=h.sent,a=r.default,l=r.useState,h.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=h.sent,o=n.Radio,t=n.Stack,h.next=12,e.e(3670).then(e.bind(e,83670));case 12:return c=h.sent,i=c.HeartFilledIcon,I=c.HeartOutlinedIcon,h.abrupt("return",{default:function(){var E=l(!1),O=v()(E,2),L=O[0],C=O[1];return a.createElement(t,null,a.createElement(o,{checked:L,onChange:function(z,M){C(M.checked)},icon:a.createElement(I,{htmlColor:"#ccc"}),checkedIcon:a.createElement(i,{color:"primary"})},"Radio"))}});case 16:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Radio, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        icon={<HeartOutlinedIcon htmlColor="#ccc" />}
        checkedIcon={<HeartFilledIcon color="primary" />}
      >
        Radio
      </Radio>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-5":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Radio,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(!1),h=v()(f,1),y=h[0];return o.createElement(l,null,o.createElement(a,{checked:y,disabled:!0},"Radio"))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked] = useState(false);
  return (
    <Stack>
      <Radio checked={checked} disabled>
        Radio
      </Radio>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-6":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Radio,l=r.RadioGroup,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c(""),y=v()(h,2),E=y[0],O=y[1],L=function(P,z){console.log("handleGroupChange",P,z),O(z.value)};return t.createElement(n,null,t.createElement(l,{value:E,onChange:L},t.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),t.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),t.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B")))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, RadioGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');
  const handleGroupChange = (e, data) => {
    console.log('handleGroupChange', e, data);
    setValue(data.value);
  };
  return (
    <Stack>
      <RadioGroup value={value} onChange={handleGroupChange}>
        <Radio value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Radio>
        <Radio value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Radio>
        <Radio value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Radio>
      </RadioGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-7":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=f.sent,a=r.Button,l=r.Radio,n=r.RadioGroup,o=r.Stack,f.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return t=f.sent,c=t.default,i=t.useState,f.abrupt("return",{default:function(){var y=i("\u6DD8\u7968\u7968"),E=v()(y,2),O=E[0],L=E[1],C=i(!0),P=v()(C,2),z=P[0],M=P[1];return c.createElement(o,null,c.createElement("div",{style:{width:"100px"}},c.createElement(a,{onClick:function(){var T=O?"":"\u6DD8\u7968\u7968";L(T)}},O.length?"\u53D6\u6D88":"\u9009\u62E9"," \u6DD8\u7968\u7968"),c.createElement(n,{value:O},c.createElement(l,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),c.createElement(l,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),c.createElement(l,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),c.createElement("div",{style:{width:"100px"}},c.createElement(a,{onClick:function(){M(!z)}},z?"\u53D6\u6D88":"\u9009\u4E2D"),c.createElement(l,{checked:z},"\u6DD8\u7968\u7968")))}});case 13:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Radio, RadioGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('\u6DD8\u7968\u7968');
  const [checked, setChecked] = useState(true);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            const data = value ? '' : '\u6DD8\u7968\u7968';
            setValue(data);
          }}
        >
          {value.length ? '\u53D6\u6D88' : '\u9009\u62E9'} \u6DD8\u7968\u7968
        </Button>
        <RadioGroup value={value}>
          <Radio value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Radio>
          <Radio value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Radio>
          <Radio value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Radio>
        </RadioGroup>
      </div>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? '\u53D6\u6D88' : '\u9009\u4E2D'}
        </Button>
        <Radio checked={checked}>\u6DD8\u7968\u7968</Radio>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-8":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Radio,l=r.RadioGroup,n=r.Stack,i.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=i.sent,t=o.default,i.abrupt("return",{default:function(){return t.createElement(n,null,t.createElement("div",{style:{width:"100px"}},t.createElement("div",null,"RadioGroup\uFF1A"),t.createElement(l,{defaultValue:"\u6DD8\u7968\u7968"},t.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),t.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),t.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),t.createElement("div",null,t.createElement("div",null,"Radio\uFF1A"),t.createElement(a,{defaultChecked:!0},"\u6DD8\u7968\u7968")))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, RadioGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>RadioGroup\uFF1A</div>
        <RadioGroup defaultValue="\u6DD8\u7968\u7968">
          <Radio value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Radio>
          <Radio value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Radio>
          <Radio value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Radio>
        </RadioGroup>
      </div>

      <div>
        <div>Radio\uFF1A</div>
        <Radio defaultChecked>\u6DD8\u7968\u7968</Radio>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},2730:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(5574),s=e.n(b),A=e(15009),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-rating-demo-0":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Rating,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useRef,i.abrupt("return",{default:function(){var f=t(null);return o.createElement(l,{spacing:"8px"},o.createElement(a,null),o.createElement(a,{defaultValue:3,ref:f}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React, { useRef } from 'react';
export default () => {
  const ref = useRef(null);
  return (
    <Stack spacing="8px">
      <Rating />
      <Rating defaultValue={3} ref={ref} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-1":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Rating,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(3),h=s()(f,2),y=h[0],E=h[1];return o.createElement(l,null,o.createElement(a,{value:y,onChange:function(L,C){E(C.value)}}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState(3);
  return (
    <Stack>
      <Rating
        value={value}
        onChange={(_, data) => {
          setValue(data.value);
        }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-2":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Rating,l=r.Stack,c.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=c.sent,o=n.default,c.abrupt("return",{default:function(){return o.createElement(l,{spacing:"8px"},o.createElement(a,{allowHalf:!0}),o.createElement(a,{defaultValue:3,allowHalf:!0}))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating allowHalf />
      <Rating defaultValue={3} allowHalf />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-3":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Rating,l=r.Stack,c.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=c.sent,o=n.default,c.abrupt("return",{default:function(){return o.createElement(l,{spacing:"8px"},o.createElement(a,{readOnly:!0}),o.createElement(a,{defaultValue:3,readOnly:!0}))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating readOnly />
      <Rating defaultValue={3} readOnly />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-4":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Rating,l=r.Stack,c.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=c.sent,o=n.default,c.abrupt("return",{default:function(){return o.createElement(l,{spacing:"8px"},o.createElement(a,{size:"xsmall",defaultValue:3}),o.createElement(a,{size:"small",defaultValue:3}),o.createElement(a,{size:"medium",defaultValue:3}),o.createElement(a,{size:"large",defaultValue:3}))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating size="xsmall" defaultValue={3} />
      <Rating size="small" defaultValue={3} />
      <Rating size="medium" defaultValue={3} />
      <Rating size="large" defaultValue={3} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-5":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Rating,l=r.Stack,c.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=c.sent,o=n.default,c.abrupt("return",{default:function(){return o.createElement(l,null,o.createElement(a,{defaultValue:3,count:8}))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack>
      <Rating defaultValue={3} count={8} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-6":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Rating,l=r.Stack,c.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=c.sent,o=n.default,c.abrupt("return",{default:function(){return o.createElement(l,{spacing:"8px"},o.createElement(a,{defaultValue:3,disabled:!0}))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating defaultValue={3} disabled />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-7":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=f.sent,a=r.Rating,l=r.Stack,f.next=7,e.e(3670).then(e.bind(e,83670));case 7:return n=f.sent,o=n.HeartFilledIcon,t=n.HeartOutlinedIcon,f.next=12,Promise.resolve().then(e.t.bind(e,67294,19));case 12:return c=f.sent,i=c.default,f.abrupt("return",{default:function(){return i.createElement(l,{spacing:"8px"},i.createElement(a,{checkedIcon:i.createElement(o,{color:"info"}),defaultValue:3}),i.createElement(a,{checkedIcon:"A",icon:"B",defaultValue:3}),i.createElement(a,{checkedIcon:i.createElement(t,{color:"success"}),icon:i.createElement(o,{color:"primary"}),defaultValue:3}))}});case 15:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack spacing="8px">
      <Rating checkedIcon={<HeartFilledIcon color="info" />} defaultValue={3} />
      <Rating checkedIcon="A" icon="B" defaultValue={3} />
      <Rating
        checkedIcon={<HeartOutlinedIcon color="success" />}
        icon={<HeartFilledIcon color="primary" />}
        defaultValue={3}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},30895:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return r}});var b=e(5574),s=e.n(b),A=e(15009),v=e.n(A),S=e(19632),x=e.n(S),p=e(99289),m=e.n(p),d=e(67294),r={"packages-bui-core-src-scroll-view-demo-0":{component:d.memo(d.lazy(m()(v()().mark(function a(){var l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return l=I.sent,n=l.ScrollView,o=l.Stack,I.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return t=I.sent,c=t.default,I.abrupt("return",{default:function(){return c.createElement(o,null,c.createElement(n,{scrollY:!0,style:{width:"100%",height:"400px"}},x()(new Array(100)).map(function(h,y){return c.createElement("div",{className:"item",key:y},y)})))}});case 10:case"end":return I.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-scroll-view-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ScrollView, Button, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  return (
    <Stack>
      <ScrollView scrollY style={{ width: '100%', height: '400px' }}>
        {[...new Array(100)].map((_, index) => (
          <div className="item" key={index}>
            {index}
          </div>
        ))}
      </ScrollView>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var a=m()(v()().mark(function n(){var o,t=arguments;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(7335).then(e.bind(e,37335));case 2:return i.abrupt("return",(o=i.sent).default.apply(o,t));case 3:case"end":return i.stop()}},n)}));function l(){return a.apply(this,arguments)}return l}()}},"packages-bui-core-src-scroll-view-demo-1":{component:d.memo(d.lazy(m()(v()().mark(function a(){var l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=I.sent,n=l.default,I.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return o=I.sent,t=o.ScrollView,c=o.Stack,I.abrupt("return",{default:function(){return n.createElement(t,{scrollX:!0,style:{width:"50vw"}},n.createElement(c,{direction:"row",spacing:"8px",flexWrap:"nowrap",style:{width:"max-content"}},x()(new Array(100)).map(function(h,y){return n.createElement("div",{className:"item",style:{marginRight:"10px"},key:y},y)})))}});case 10:case"end":return I.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-scroll-view-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { ScrollView, Stack } from '@bifrostui/react';

export default () => {
  return (
    <ScrollView scrollX style={{ width: '50vw' }}>
      <Stack
        direction="row"
        spacing="8px"
        flexWrap="nowrap"
        style={{ width: 'max-content' }}
      >
        {[...new Array(100)].map((_, index) => (
          <div className="item" style={{ marginRight: '10px' }} key={index}>
            {index}
          </div>
        ))}
      </Stack>
    </ScrollView>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var a=m()(v()().mark(function n(){var o,t=arguments;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(7335).then(e.bind(e,37335));case 2:return i.abrupt("return",(o=i.sent).default.apply(o,t));case 3:case"end":return i.stop()}},n)}));function l(){return a.apply(this,arguments)}return l}()}},"packages-bui-core-src-scroll-view-demo-2":{component:d.memo(d.lazy(m()(v()().mark(function a(){var l,n,o,t,c,i,I;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return l=h.sent,n=l.ScrollView,o=l.Button,t=l.Stack,h.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return c=h.sent,i=c.default,I=c.useState,h.abrupt("return",{default:function(){var E=function(){console.log("\u6EDA\u52A8\u5230\u5E95\u90E8\u4E86")},O=function(){console.log("\u6EDA\u52A8\u5230\u9876\u90E8\u4E86")},L=I(void 0),C=s()(L,2),P=C[0],z=C[1],M=I(void 0),D=s()(M,2),T=D[0],$=D[1];return i.createElement(t,null,i.createElement(o,{onClick:function(){$(void 0),z(0)}},"\u56DE\u5230\u9876\u90E8"),i.createElement(o,{onClick:function(){$(void 0),z(200)}},"\u6EDA\u52A8\u5230200px"),i.createElement(o,{onClick:function(){$("d50"),z(void 0)}},"\u6EDA\u52A8\u5230[50]\u6587\u672C\u5904"),i.createElement(n,{scrollY:!0,scrollTop:P,scrollIntoView:T,scrollIntoViewAlignment:"nearest",onScrollToLower:E,onScrollToUpper:O,onScroll:function(Z){console.log(Z),$(void 0),z(void 0)},scrollWithAnimation:!0,style:{width:"100%",height:"400px"}},x()(new Array(100)).map(function(j,Z){return i.createElement("div",{className:"item",key:Z,id:"d".concat(Z)},Z)})))}});case 12:case"end":return h.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-scroll-view-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ScrollView, Button, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const onScrollToLower = () => {
    console.log('\u6EDA\u52A8\u5230\u5E95\u90E8\u4E86');
  };
  const onScrollToUpper = () => {
    console.log('\u6EDA\u52A8\u5230\u9876\u90E8\u4E86');
  };
  const [h, sH] = useState(undefined);
  const [id, sId] = useState(undefined);
  return (
    <Stack>
      <Button
        onClick={() => {
          sId(undefined);
          sH(0);
        }}
      >
        \u56DE\u5230\u9876\u90E8
      </Button>
      <Button
        onClick={() => {
          sId(undefined);
          sH(200);
        }}
      >
        \u6EDA\u52A8\u5230200px
      </Button>
      <Button
        onClick={() => {
          sId('d50');
          sH(undefined);
        }}
      >
        \u6EDA\u52A8\u5230[50]\u6587\u672C\u5904
      </Button>
      <ScrollView
        scrollY
        scrollTop={h}
        scrollIntoView={id}
        scrollIntoViewAlignment={'nearest'}
        onScrollToLower={onScrollToLower}
        onScrollToUpper={onScrollToUpper}
        onScroll={(e) => {
          console.log(e);
          sId(undefined);
          sH(undefined);
        }}
        scrollWithAnimation
        style={{ width: '100%', height: '400px' }}
      >
        {[...new Array(100)].map((_, index) => (
          <div className="item" key={index} id={\`d\${index}\`}>
            {index}
          </div>
        ))}
      </ScrollView>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var a=m()(v()().mark(function n(){var o,t=arguments;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(7335).then(e.bind(e,37335));case 2:return i.abrupt("return",(o=i.sent).default.apply(o,t));case 3:case"end":return i.stop()}},n)}));function l(){return a.apply(this,arguments)}return l}()}}}},6383:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(5574),s=e.n(b),A=e(15009),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-select-demo-0":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Select,l=r.SelectOption,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],I.abrupt("return",{default:function(){return t.createElement(n,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},t.createElement(a,null,c.map(function(h,y){return t.createElement(l,{key:y,value:h.value,label:h.label})})))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

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

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-1":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Select,l=r.SelectOption,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],I.abrupt("return",{default:function(){return t.createElement(n,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},t.createElement(a,{placeholder:"\u4E0B\u62C9\u9009\u62E9"},c.map(function(h,y){return t.createElement(l,{key:y,value:h.value,label:h.label})})))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

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

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select placeholder="\u4E0B\u62C9\u9009\u62E9">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-2":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Select,l=r.SelectOption,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],I.abrupt("return",{default:function(){return t.createElement(n,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},t.createElement(a,{defaultValue:2},c.map(function(h,y){return t.createElement(l,{key:y,value:h.value,label:h.label})})))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

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

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-3":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i,I,f,h;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=E.sent,a=r.Alert,l=r.Button,n=r.Select,o=r.SelectOption,t=r.Stack,E.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return c=E.sent,i=c.default,I=c.useRef,f=c.useState,h=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],E.abrupt("return",{default:function(){var L=f(""),C=s()(L,2),P=C[0],z=C[1],M=I(null),D=f(!1),T=s()(D,2),$=T[0],j=T[1];return i.createElement(i.Fragment,null,$&&i.createElement(a,{color:"success"},"\u9009\u62E9\u5668A\u503C\uFF1A".concat(P||"","; \u9009\u62E9\u5668B\u503C: ").concat(M.current.value)),i.createElement(t,{spacing:"20px",alignItems:"stretch",style:{background:"#eee",padding:"50px"}},i.createElement(n,{placeholder:"\u9009\u62E9\u5668A",value:P,onChange:function(X,q){var _=q.value,K=_===void 0?"":_;z(K)}},h.map(function(Z,X){return i.createElement(o,{key:X,value:Z.value,label:Z.label})})),i.createElement(n,{placeholder:"\u9009\u62E9\u5668B",inputRef:M},h.map(function(Z,X){return i.createElement(o,{key:X,value:Z.value,label:Z.label})})),i.createElement(l,{onClick:function(X){j(!0),setTimeout(function(){j(!1)},1e3)}},"\u63D0\u4EA4")))}});case 16:case"end":return E.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Button, Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

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

export default () => {
  const [curValue, setCurValue] = useState('');
  const selectRef = useRef(null);
  const [alert, setAlert] = useState(false);

  return (
    <>
      {alert && (
        <Alert color="success">{\`\u9009\u62E9\u5668A\u503C\uFF1A\${curValue || ''}; \u9009\u62E9\u5668B\u503C: \${
          selectRef.current.value
        }\`}</Alert>
      )}
      <Stack
        spacing="20px"
        alignItems="stretch"
        style={{ background: '#eee', padding: '50px' }}
      >
        <Select
          placeholder="\u9009\u62E9\u5668A"
          value={curValue}
          onChange={(e, { value = '' }) => {
            setCurValue(value);
          }}
        >
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Select placeholder="\u9009\u62E9\u5668B" inputRef={selectRef}>
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Button
          onClick={(e) => {
            setAlert(true);
            setTimeout(() => {
              setAlert(false);
            }, 1000);
          }}
        >
          \u63D0\u4EA4
        </Button>
      </Stack>
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-4":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Select,l=r.SelectOption,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],I.abrupt("return",{default:function(){return t.createElement(n,{spacing:"20px",alignItems:"stretch",style:{background:"#eee",padding:"50px"}},t.createElement(a,{disabled:!0,placeholder:"\u7981\u7528"},c.map(function(h,y){return t.createElement(l,{key:y,value:h.value,label:h.label})})),t.createElement(a,{defaultValue:1},c.map(function(h,y){return t.createElement(l,{key:y,value:h.value,label:h.label,disabled:y===2})})))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

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

export default () => {
  return (
    <Stack
      spacing="20px"
      alignItems="stretch"
      style={{ background: '#eee', padding: '50px' }}
    >
      <Select disabled placeholder="\u7981\u7528">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
      <Select defaultValue={1}>
        {options.map((item, index) => (
          <SelectOption
            key={index}
            value={item.value}
            label={item.label}
            disabled={index === 2}
          />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-5":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i,I;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=h.sent,a=r.default,h.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=h.sent,n=l.Select,o=l.SelectOption,t=l.Stack,h.next=12,e.e(3670).then(e.bind(e,83670));case 12:return c=h.sent,i=c.ArrowDownwardIcon,I=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],h.abrupt("return",{default:function(){return a.createElement(t,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},a.createElement(n,{icon:a.createElement(i,null),placeholder:"\u81EA\u5B9A\u4E49\u56FE\u6807"},I.map(function(E,O){return a.createElement(o,{key:O,value:E.value,label:E.label})})))}});case 16:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select, SelectOption, Stack } from '@bifrostui/react';
import { ArrowDownwardIcon } from '@bifrostui/icons';

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

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select icon={<ArrowDownwardIcon />} placeholder="\u81EA\u5B9A\u4E49\u56FE\u6807">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-6":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Select,l=r.SelectOption,n=r.Stack,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],I.abrupt("return",{default:function(){return t.createElement(n,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},t.createElement(a,{defaultValue:2},c.map(function(h,y){var E=h.value,O=h.label;return t.createElement(l,{value:E,label:O,key:y},"\u9009\u9879 - ",O)})))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

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

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((option, index) => {
          const { value, label } = option;

          return (
            <SelectOption value={value} label={label} key={index}>
              \u9009\u9879 - {label}
            </SelectOption>
          );
        })}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-7":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i,I;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=h.sent,a=r.default,h.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=h.sent,n=l.Select,o=l.SelectOption,t=l.Stack,h.next=12,e.e(3670).then(e.bind(e,83670));case 12:return c=h.sent,i=c.SettingsOutlinedIcon,I=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],h.abrupt("return",{default:function(){return a.createElement(t,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},a.createElement(n,{defaultValue:2},I.map(function(E,O){var L=E.value,C=E.label,P=a.createElement(t,{direction:"row",spacing:"10px"},a.createElement(i,null),C);return a.createElement(o,{label:P,value:L,key:O},"\u9009\u9879-",C)})))}});case 16:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select, SelectOption, Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

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

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((option, index) => {
          const { value, label } = option;
          const customLabel = (
            <Stack direction="row" spacing="10px">
              <SettingsOutlinedIcon />
              {label}
            </Stack>
          );

          return (
            <SelectOption label={customLabel} value={value} key={index}>
              \u9009\u9879-{label}
            </SelectOption>
          );
        })}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-8":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i,I;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=h.sent,a=r.Alert,l=r.Select,n=r.SelectOption,o=r.Stack,h.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return t=h.sent,c=t.default,i=t.useState,I=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],h.abrupt("return",{default:function(){var E=i("\u521D\u59CB\u5316"),O=s()(E,2),L=O[0],C=O[1];return c.createElement(o,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},c.createElement(a,{color:"info"},"\u5F53\u524D\u72B6\u6001\uFF1A",L),c.createElement(l,{onOpen:function(){C("\u6253\u5F00\u4E0B\u62C9\u9009\u62E9\u5668")},onClose:function(){C("\u5173\u95ED\u4E0B\u62C9\u9009\u62E9\u5668")},placeholder:"\u4E0B\u62C9\u9009\u62E9"},I.map(function(P,z){return c.createElement(n,{key:z,value:P.value,label:P.label})})))}});case 14:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

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

export default () => {
  const [curValue, setCurValue] = useState('\u521D\u59CB\u5316');

  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Alert color="info">\u5F53\u524D\u72B6\u6001\uFF1A{curValue}</Alert>
      <Select
        onOpen={() => {
          setCurValue('\u6253\u5F00\u4E0B\u62C9\u9009\u62E9\u5668');
        }}
        onClose={() => {
          setCurValue('\u5173\u95ED\u4E0B\u62C9\u9009\u62E9\u5668');
        }}
        placeholder="\u4E0B\u62C9\u9009\u62E9"
      >
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},28364:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-skeleton-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Skeleton,l=r.Stack,o.abrupt("return",{default:function(){return d.createElement(l,null,d.createElement(a,{width:210}),d.createElement(a,{width:240}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Skeleton width={210} />
      <Skeleton width={240} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-skeleton-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Skeleton,l=r.Stack,o.abrupt("return",{default:function(){return d.createElement(l,{spacing:"10px"},d.createElement(a,{variant:"text",width:210}),d.createElement(a,{variant:"circular",width:48,height:48}),d.createElement(a,{variant:"rectangular",width:210,height:40}),d.createElement(a,{variant:"rounded",width:210,height:40}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="10px">
      <Skeleton variant="text" width={210} />
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="rectangular" width={210} height={40} />
      <Skeleton variant="rounded" width={210} height={40} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-skeleton-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Skeleton,l=r.Stack,o.abrupt("return",{default:function(){return d.createElement(l,null,d.createElement(a,{width:210}),d.createElement(a,{animation:"pulse",width:210}),d.createElement(a,{animation:!1,width:210}))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Skeleton width={210} />
      <Skeleton animation="pulse" width={210} />
      <Skeleton animation={false} width={210} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-skeleton-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Skeleton,l=r.Stack,o.abrupt("return",{default:function(){return d.createElement(l,null,d.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"}},d.createElement(a,{variant:"circular",style:{margin:"0 6px 0 0",width:"48px",height:"48px"}}),d.createElement("div",null,d.createElement(a,{width:"50%",style:{width:"210px"}}),d.createElement(a,{width:"50%",style:{width:"210px"}}))))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
      >
        <Skeleton
          variant="circular"
          style={{ margin: '0 6px 0 0', width: '48px', height: '48px' }}
        />
        <div>
          <Skeleton width="50%" style={{ width: '210px' }} />
          <Skeleton width="50%" style={{ width: '210px' }} />
        </div>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-skeleton-demo-4":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=o.sent,d=m.default,o.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=o.sent,a=r.Skeleton,l=r.Stack,o.abrupt("return",{default:function(){return d.createElement(l,{spacing:"10px"},d.createElement(a,{variant:"circular"},d.createElement("div",{style:{height:"80px",width:"80px"}})),d.createElement(a,{variant:"circular"},d.createElement("div",{style:{height:"100px",width:"100px"}})))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="10px">
      <Skeleton variant="circular">
        <div style={{ height: '80px', width: '80px' }} />
      </Skeleton>
      <Skeleton variant="circular">
        <div style={{ height: '100px', width: '100px' }} />
      </Skeleton>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},75731:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-slide-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=I.sent,a=r.default,l=r.useState,I.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=I.sent,o=n.Button,t=n.Slide,c=n.Stack,I.abrupt("return",{default:function(){var h=l(!1),y=v()(h,2),E=y[0],O=y[1];return a.createElement(c,null,a.createElement(o,{onClick:function(){O(function(C){return!C})}},"\u70B9\u51FB\u6539\u53D8in\u5C5E\u6027"),a.createElement(c,null,["down","left","right","up"].map(function(L,C){return a.createElement("div",{style:{overflow:"hidden"}},a.createElement(t,{in:E,direction:L,timeout:{enter:800,exit:1e3},delay:200*C},a.createElement("div",null,"\u6ED1\u52A8\u6548\u679C",L)))})))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slide-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Slide, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        \u70B9\u51FB\u6539\u53D8in\u5C5E\u6027
      </Button>
      <Stack>
        {['down', 'left', 'right', 'up'].map((direction, index) => (
          <div style={{ overflow: 'hidden' }}>
            <Slide
              in={open}
              direction={direction}
              timeout={{
                enter: 800,
                exit: 1000,
              }}
              delay={200 * index}
            >
              <div>\u6ED1\u52A8\u6548\u679C{direction}</div>
            </Slide>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slide-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=I.sent,a=r.default,l=r.useState,I.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=I.sent,o=n.Button,t=n.Slide,c=n.Stack,I.abrupt("return",{default:function(){var h=l(!0),y=v()(h,2),E=y[0],O=y[1];return a.createElement(c,null,a.createElement(o,{onClick:function(){O(function(C){return!C})}},"\u70B9\u51FB\u6302\u8F7D/\u5378\u8F7D\u7EC4\u4EF6"),E&&a.createElement(t,{appear:!0,in:!0,direction:"up",timeout:{enter:2e3,exit:1e3}},a.createElement("div",null,"\u6ED1\u52A8\u6548\u679CAppear")))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slide-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Slide, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        \u70B9\u51FB\u6302\u8F7D/\u5378\u8F7D\u7EC4\u4EF6
      </Button>
      {open && (
        <Slide
          appear
          in
          direction="up"
          timeout={{
            enter: 2000,
            exit: 1000,
          }}
        >
          <div>\u6ED1\u52A8\u6548\u679CAppear</div>
        </Slide>
      )}
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},11605:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-slider-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Slider,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(18),h=v()(f,2),y=h[0],E=h[1],O=function(C,P){E(P.value)};return o.createElement(l,{style:{padding:"0 30px"}},o.createElement(a,{value:y,onChange:O}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(18);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Slider,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(29),h=v()(f,2),y=h[0],E=h[1],O=function(C,P){E(P.value)};return o.createElement(l,{style:{padding:"0 30px"}},o.createElement(a,{value:y,min:10,max:60,onChange:O}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(29);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} min={10} max={60} onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Slider,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(0),h=v()(f,2),y=h[0],E=h[1],O=function(C,P){E(P.value)};return o.createElement(l,{style:{padding:"0 30px"}},o.createElement(a,{value:y,step:10,onChange:O}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} step={10} onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-3":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Slider,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(29),h=v()(f,2),y=h[0],E=h[1],O=function(C,P){E(P.value)};return o.createElement(l,{style:{padding:"0 30px"}},o.createElement(a,{value:y,tipVisible:!0,onChange:O}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(29);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} tipVisible onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-4":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Slider,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t([0,20]),h=v()(f,2),y=h[0],E=h[1],O=function(C,P){E(P.value)};return o.createElement(l,{style:{padding:"0 30px"}},o.createElement(a,{value:y,onChange:O}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[number, number]>([0, 20]);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-5":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Slider,l=r.Stack,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t([0,20]),h=v()(f,2),y=h[0],E=h[1],O=function(C,P){console.log("123",P.value),E(P.value)};return o.createElement(l,{style:{padding:"0 30px"}},o.createElement(a,{value:y,disableSwap:!0,onChange:O}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[number, number]>([0, 20]);
  const handleChange = (e, data) => {
    console.log('123', data.value);
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} disableSwap onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-6":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=f.sent,a=r.default,f.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=f.sent,n=l.Slider,o=l.Stack,f.next=11,e.e(3670).then(e.bind(e,83670));case 11:return t=f.sent,c=t.StarFilledIcon,i=t.StarOutlinedIcon,f.abrupt("return",{default:function(){var y=[20,60];return a.createElement(o,{style:{padding:"0 30px"}},a.createElement(n,{startIcon:a.createElement(c,{htmlColor:"#ff335c"}),endIcon:a.createElement(i,{htmlColor:"#00d68f"}),defaultValue:y}))}});case 15:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Slider, SliderValue, Stack } from '@bifrostui/react';
import { StarFilledIcon, StarOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const defaultValue: SliderValue = [20, 60];
  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider
        startIcon={<StarFilledIcon htmlColor="#ff335c" />}
        endIcon={<StarOutlinedIcon htmlColor="#00d68f" />}
        defaultValue={defaultValue}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-7":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=c.sent,a=r.Slider,l=r.Stack,c.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=c.sent,o=n.default,c.abrupt("return",{default:function(){return o.createElement(l,{style:{padding:"0 30px"}},o.createElement(a,{defaultValue:50,disabled:!0}))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider defaultValue={50} disabled />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-8":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Slider,l=r.Stack,I.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=I.sent,o=n.default,t=n.useState,c=function(h){var y=Math.floor(h),E=y>=10?y:"0".concat(y),O=h%1===0?"00":"30";return"".concat(E,":").concat(O)},I.abrupt("return",{default:function(){var h=t(24),y=v()(h,2),E=y[0],O=y[1],L=function(P,z){O(z==null?void 0:z.value)};return o.createElement(l,{style:{padding:"0 30px"}},o.createElement(a,{min:0,max:24,step:.5,value:E,tooltipRender:c,onChange:L}))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

const tooltipRender = (value) => {
  const temp = Math.floor(value);
  const hour = temp >= 10 ? temp : \`0\${temp}\`;
  const min = value % 1 === 0 ? '00' : '30';
  return \`\${hour}:\${min}\`;
};

export default () => {
  const [value, setValue] = useState(24);
  const handleChange = (e, data) => {
    setValue(data?.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider
        min={0}
        max={24}
        step={0.5}
        value={value}
        tooltipRender={tooltipRender}
        onChange={handleChange}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},53731:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-stack-demo-stackdemo":{component:S.memo(S.lazy(function(){return Promise.all([e.e(4182),e.e(718),e.e(2433)]).then(e.bind(e,12354))})),asset:{type:"BLOCK",id:"packages-bui-core-src-stack-demo-stackdemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(26520).Z},react:{type:"NPM",value:"18.3.1"},"./index.less":{type:"FILE",value:e(10221).Z}},entry:"index.tsx"},context:{react:e(67294),"./index.less":e(32667)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-stack-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Button,r=m.Divider,a=m.Stack,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(a,null,n.createElement(a,{divider:n.createElement(r,{direction:"horizontal"}),spacing:"10px",style:{width:"100px"}},n.createElement(d,null,"\u6309\u94AE1"),n.createElement(d,null,"\u6309\u94AE2"),n.createElement(d,null,"\u6309\u94AE3")))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-stack-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Stack
        divider={<Divider direction="horizontal" />}
        spacing="10px"
        style={{ width: '100px' }}
      >
        <Button>\u6309\u94AE1</Button>
        <Button>\u6309\u94AE2</Button>
        <Button>\u6309\u94AE3</Button>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},52297:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-steps-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Stack,r=m.Step,a=m.Steps,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){var i=function(f,h){console.log(f,h)};return n.createElement(d,null,n.createElement("div",{style:{width:"120px"}},n.createElement(a,{onChange:i},n.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65"}),n.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65"}),n.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65"}))))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleChange = (e, data) => {
    console.log(e, data);
  };

  return (
    <Stack>
      <div style={{ width: '120px' }}>
        <Steps onChange={handleChange}>
          <Step key={1} title="\u7B2C\u4E00\u6B65" />
          <Step key={2} title="\u7B2C\u4E8C\u6B65" />
          <Step key={3} title="\u7B2C\u4E09\u6B65" />
        </Steps>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-steps-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Stack,r=m.Step,a=m.Steps,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(d,null,n.createElement(a,{direction:"horizontal"},n.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65"}),n.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65"}),n.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps direction="horizontal">
        <Step key={1} title="\u7B2C\u4E00\u6B65" />
        <Step key={2} title="\u7B2C\u4E8C\u6B65" />
        <Step key={3} title="\u7B2C\u4E09\u6B65" />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-steps-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Stack,r=m.Step,a=m.Steps,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(d,null,n.createElement(a,null,n.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65",subtitle:"\u526F\u6807\u9898 1"}),n.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65",subtitle:"\u526F\u6807\u9898 2"}),n.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65",subtitle:"\u526F\u6807\u9898 3"})),n.createElement(a,{labelPlacement:"vertical"},n.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65",subtitle:"\u526F\u6807\u9898 1"}),n.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65",subtitle:"\u526F\u6807\u9898 2"}),n.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65",subtitle:"\u526F\u6807\u9898 3"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step key={1} title="\u7B2C\u4E00\u6B65" subtitle="\u526F\u6807\u9898 1" />
        <Step key={2} title="\u7B2C\u4E8C\u6B65" subtitle="\u526F\u6807\u9898 2" />
        <Step key={3} title="\u7B2C\u4E09\u6B65" subtitle="\u526F\u6807\u9898 3" />
      </Steps>
      <Steps labelPlacement="vertical">
        <Step key={1} title="\u7B2C\u4E00\u6B65" subtitle="\u526F\u6807\u9898 1" />
        <Step key={2} title="\u7B2C\u4E8C\u6B65" subtitle="\u526F\u6807\u9898 2" />
        <Step key={3} title="\u7B2C\u4E09\u6B65" subtitle="\u526F\u6807\u9898 3" />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-steps-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Stack,r=m.Step,a=m.Steps,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(d,null,n.createElement(a,null,n.createElement(r,{key:1,title:"\u6807\u9898 1",subtitle:"\u526F\u6807\u9898 1",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),n.createElement(r,{key:2,title:"\u6807\u9898 2",subtitle:"\u526F\u6807\u9898 2",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),n.createElement(r,{key:3,title:"\u6807\u9898 3",subtitle:"\u526F\u6807\u9898 3",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),n.createElement(r,{key:4,title:"\u6807\u9898 4",subtitle:"\u526F\u6807\u9898 4",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="\u6807\u9898 1"
          subtitle="\u526F\u6807\u9898 1"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={2}
          title="\u6807\u9898 2"
          subtitle="\u526F\u6807\u9898 2"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={3}
          title="\u6807\u9898 3"
          subtitle="\u526F\u6807\u9898 3"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={4}
          title="\u6807\u9898 4"
          subtitle="\u526F\u6807\u9898 4"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-steps-demo-4":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Stack,r=m.Step,a=m.Steps,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(d,null,n.createElement(a,null,n.createElement(r,{key:1,title:"\u6807\u9898 1",subtitle:"\u526F\u6807\u9898 1",status:"error",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),n.createElement(r,{key:2,title:"\u6807\u9898 2",subtitle:"\u526F\u6807\u9898 2",status:"finish",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),n.createElement(r,{key:3,title:"\u6807\u9898 3",subtitle:"\u526F\u6807\u9898 3",status:"active",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),n.createElement(r,{key:4,title:"\u6807\u9898 4",subtitle:"\u526F\u6807\u9898 4",status:"wait",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="\u6807\u9898 1"
          subtitle="\u526F\u6807\u9898 1"
          status="error"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={2}
          title="\u6807\u9898 2"
          subtitle="\u526F\u6807\u9898 2"
          status="finish"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={3}
          title="\u6807\u9898 3"
          subtitle="\u526F\u6807\u9898 3"
          status="active"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={4}
          title="\u6807\u9898 4"
          subtitle="\u526F\u6807\u9898 4"
          status="wait"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-steps-demo-5":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o,t,c,i,I;return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=h.sent,d=m.default,h.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=h.sent,a=r.Stack,l=r.Step,n=r.Steps,h.next=12,e.e(3670).then(e.bind(e,83670));case 12:return o=h.sent,t=o.AccessTimeCircleFilledIcon,c=o.ErrorCircleOutlinedIcon,i=o.HeartFilledIcon,I=o.LocationFilledIcon,h.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(n,null,d.createElement(l,{key:1,title:"\u6807\u9898 1",subtitle:"\u526F\u6807\u9898 1",icon:d.createElement(i,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),d.createElement(l,{key:2,title:"\u6807\u9898 2",subtitle:"\u526F\u6807\u9898 2",status:"active",icon:d.createElement(I,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),d.createElement(l,{key:3,title:"\u6807\u9898 3",subtitle:"\u526F\u6807\u9898 3",status:"error",icon:d.createElement(c,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),d.createElement(l,{key:4,title:"\u6807\u9898 4",subtitle:"\u526F\u6807\u9898 4",status:"wait",icon:d.createElement(t,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"})))}});case 18:case"end":return h.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Step, Steps } from '@bifrostui/react';
import {
  AccessTimeCircleFilledIcon,
  ErrorCircleOutlinedIcon,
  HeartFilledIcon,
  LocationFilledIcon,
} from '@bifrostui/icons';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="\u6807\u9898 1"
          subtitle="\u526F\u6807\u9898 1"
          icon={<HeartFilledIcon color="primary" />}
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={2}
          title="\u6807\u9898 2"
          subtitle="\u526F\u6807\u9898 2"
          status="active"
          icon={<LocationFilledIcon color="primary" />}
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={3}
          title="\u6807\u9898 3"
          subtitle="\u526F\u6807\u9898 3"
          status="error"
          icon={<ErrorCircleOutlinedIcon color="primary" />}
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={4}
          title="\u6807\u9898 4"
          subtitle="\u526F\u6807\u9898 4"
          status="wait"
          icon={<AccessTimeCircleFilledIcon color="primary" />}
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-steps-demo-6":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Stack,r=m.Step,a=m.Steps,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){var i=function(f,h){console.log(f,h)};return n.createElement(d,null,n.createElement(a,{direction:"horizontal",current:1,onChange:i},n.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65",status:"error",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848",disabled:!0}),n.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65"}),n.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65",subtitle:"\u526F\u6807\u9898 3",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848",disabled:!0})))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleChange = (e, data) => {
    console.log(e, data);
  };

  return (
    <Stack>
      <Steps direction="horizontal" current={1} onChange={handleChange}>
        <Step
          key={1}
          title="\u7B2C\u4E00\u6B65"
          status="error"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
          disabled
        />
        <Step key={2} title="\u7B2C\u4E8C\u6B65" />
        <Step
          key={3}
          title="\u7B2C\u4E09\u6B65"
          subtitle="\u526F\u6807\u9898 3"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
          disabled
        />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-steps-demo-7":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n,o;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=c.sent,d=m.Stack,r=m.Step,a=m.Steps,c.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=c.sent,n=l.default,o=function(){return n.createElement(d,{style:{"--align-items":"flex-start"}},n.createElement("div",{style:{backgroundColor:"var(--bui-color-bg-view)",width:"220px",height:"80px",borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"space-around",padding:"5px 10px",margin:"5px 0 20px"}},n.createElement("div",null,n.createElement("span",{style:{color:"#5F6672"}},"\u9000\u7968\u7535\u5F71"),n.createElement("span",{style:{color:"#2E333E",paddingLeft:"20px"}},"\u590D\u4EC7\u8005\u8054\u76DF3\uFF083\u5F20\uFF09")),n.createElement("div",null,n.createElement("span",{style:{color:"#5F6672"}},"\u9000\u7968\u91D1\u989D"),n.createElement("span",{style:{color:"#2E333E",paddingLeft:"20px"}},"38.9\u5143")),n.createElement("div",null,n.createElement("span",{style:{color:"#5F6672"}},"\u670D\u52A1\u8D39"),n.createElement("span",{style:{color:"#2E333E",paddingLeft:"34px"}},"4\u5143\uFF08\u5F71\u9662\u3001\u6DD8\u7968\u7968\u6536\u53D6\uFF09"))))},c.abrupt("return",{default:function(){return n.createElement(a,{labelPlacement:"vertical"},n.createElement(r,{key:1,title:"\u9000\u6B3E\u7533\u8BF7 \u5DF2\u63D0\u4EA4",subtitle:"2021-03-30 19:00 ",description:o()}),n.createElement(r,{key:2,title:"\u9000\u6B3E\u7533\u8BF7 \u5DF2\u63D0\u4EA4",subtitle:"2021-03-30 19:08 ",description:"\u6B63\u5728\u5904\u7406\u9000\u6B3E\u7533\u8BF7\uFF0C\u9884\u8BA11-3\u5929\u539F\u8DEF\u8FD4\u56DE\u81F3\u4F60\u7684\u4ED8\u6B3E\u8D26\u6237\u3002"}),n.createElement(r,{key:3,title:"\u9000\u6B3E\u5B8C\u6210",subtitle:"2021-03-30 19:08 ",description:"\u9000\u6B3E\u5230\u8D26\u540E\uFF0C\u5C06\u7ED3\u675F\u672C\u6B21\u9000\u6B3E\u6D41\u7A0B\u3002"}))}});case 12:case"end":return c.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

const detail = () => {
  return (
    <Stack style={{ '--align-items': 'flex-start' }}>
      <div
        style={{
          backgroundColor: 'var(--bui-color-bg-view)',
          width: '220px',
          height: '80px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '5px 10px',
          margin: '5px 0 20px',
        }}
      >
        <div>
          <span style={{ color: '#5F6672' }}>\u9000\u7968\u7535\u5F71</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>
            \u590D\u4EC7\u8005\u8054\u76DF3\uFF083\u5F20\uFF09
          </span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>\u9000\u7968\u91D1\u989D</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>38.9\u5143</span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>\u670D\u52A1\u8D39</span>
          <span style={{ color: '#2E333E', paddingLeft: '34px' }}>
            4\u5143\uFF08\u5F71\u9662\u3001\u6DD8\u7968\u7968\u6536\u53D6\uFF09
          </span>
        </div>
      </div>
    </Stack>
  );
};

export default () => {
  return (
    <Steps labelPlacement="vertical">
      <Step
        key={1}
        title="\u9000\u6B3E\u7533\u8BF7 \u5DF2\u63D0\u4EA4"
        subtitle="2021-03-30 19:00 "
        description={detail()}
      />
      <Step
        key={2}
        title="\u9000\u6B3E\u7533\u8BF7 \u5DF2\u63D0\u4EA4"
        subtitle="2021-03-30 19:08 "
        description="\u6B63\u5728\u5904\u7406\u9000\u6B3E\u7533\u8BF7\uFF0C\u9884\u8BA11-3\u5929\u539F\u8DEF\u8FD4\u56DE\u81F3\u4F60\u7684\u4ED8\u6B3E\u8D26\u6237\u3002"
      />
      <Step
        key={3}
        title="\u9000\u6B3E\u5B8C\u6210"
        subtitle="2021-03-30 19:08 "
        description="\u9000\u6B3E\u5230\u8D26\u540E\uFF0C\u5C06\u7ED3\u675F\u672C\u6B21\u9000\u6B3E\u6D41\u7A0B\u3002"
      />
    </Steps>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-steps-demo-8":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Stack,r=m.Step,a=m.Steps,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(d,null,n.createElement("div",{style:{width:"176px"}},n.createElement(a,{style:{"--title-font-size":"30px","--step-icon-margin":"12px 4px 0 0","--step-line-padding":"36px 0 0 0"}},n.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65"}),n.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65"}),n.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65"}))))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '176px' }}>
        <Steps
          style={{
            '--title-font-size': '30px',
            '--step-icon-margin': '12px 4px 0 0',
            '--step-line-padding': '36px 0 0 0',
          }}
        >
          <Step key={1} title="\u7B2C\u4E00\u6B65" />
          <Step key={2} title="\u7B2C\u4E8C\u6B65" />
          <Step key={3} title="\u7B2C\u4E09\u6B65" />
        </Steps>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},28841:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(5574),s=e.n(b),A=e(15009),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-swiper-demo-0":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,i.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=i.sent,n=l.Swiper,o=l.SwiperItem,t=l.Stack,i.abrupt("return",{default:function(){return a.createElement(n,{style:{width:"300px",height:"200px"}},a.createElement(o,null,a.createElement(t,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(o,null,a.createElement(t,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(o,null,a.createElement(t,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper style={{ width: '300px', height: '200px' }}>
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-1":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=f.sent,a=r.default,l=r.useState,f.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=f.sent,o=n.Swiper,t=n.SwiperItem,c=n.Stack,i=n.Button,f.abrupt("return",{default:function(){var y=l(1),E=s()(y,2),O=E[0],L=E[1];return a.createElement(a.Fragment,null,a.createElement(c,{direction:"row",spacing:"8px"},a.createElement(i,{onClick:function(){return L(0)}},"\u5207\u6362\u52301"),a.createElement(i,{onClick:function(){return L(1)}},"\u5207\u6362\u52302"),a.createElement(i,{onClick:function(){return L(2)}},"\u5207\u6362\u52303")),a.createElement(o,{current:O,onChange:function(P){L(P.detail.current)},style:{width:"300px",height:"200px"}},a.createElement(t,null,a.createElement(c,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(t,null,a.createElement(c,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(t,null,a.createElement(c,{style:{background:"darkgray",width:"100%",height:"100%"}},"3"))))}});case 13:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Swiper, SwiperItem, Stack, Button } from '@bifrostui/react';

export default () => {
  const [cur, setCur] = useState(1);
  return (
    <>
      <Stack direction="row" spacing="8px">
        <Button onClick={() => setCur(0)}>\u5207\u6362\u52301</Button>
        <Button onClick={() => setCur(1)}>\u5207\u6362\u52302</Button>
        <Button onClick={() => setCur(2)}>\u5207\u6362\u52303</Button>
      </Stack>
      <Swiper
        current={cur}
        onChange={(e) => {
          setCur(e.detail.current);
        }}
        style={{ width: '300px', height: '200px' }}
      >
        <SwiperItem>
          <Stack
            style={{ background: 'lightgray', width: '100%', height: '100%' }}
          >
            1
          </Stack>
        </SwiperItem>
        <SwiperItem>
          <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
            2
          </Stack>
        </SwiperItem>
        <SwiperItem>
          <Stack
            style={{ background: 'darkgray', width: '100%', height: '100%' }}
          >
            3
          </Stack>
        </SwiperItem>
      </Swiper>
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-2":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,i.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=i.sent,n=l.Swiper,o=l.SwiperItem,t=l.Stack,i.abrupt("return",{default:function(){return a.createElement(n,{interval:500,autoplay:!0,style:{width:"300px",height:"200px"}},a.createElement(o,null,a.createElement(t,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(o,null,a.createElement(t,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(o,null,a.createElement(t,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper interval={500} autoplay style={{ width: '300px', height: '200px' }}>
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-3":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,i.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=i.sent,n=l.Swiper,o=l.SwiperItem,t=l.Stack,i.abrupt("return",{default:function(){return a.createElement(n,{circular:!0,interval:500,autoplay:!0,style:{width:"300px",height:"200px"}},a.createElement(o,null,a.createElement(t,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(o,null,a.createElement(t,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(o,null,a.createElement(t,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      circular
      interval={500}
      autoplay
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-4":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,i.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=i.sent,n=l.Swiper,o=l.SwiperItem,t=l.Stack,i.abrupt("return",{default:function(){return a.createElement(n,{circular:!0,interval:500,autoplay:!0,effect:"fade",style:{width:"300px",height:"200px"}},a.createElement(o,null,a.createElement(t,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(o,null,a.createElement(t,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(o,null,a.createElement(t,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      circular
      interval={500}
      autoplay
      effect={'fade'}
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-5":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,i.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=i.sent,n=l.Swiper,o=l.SwiperItem,t=l.Stack,i.abrupt("return",{default:function(){return a.createElement(n,{vertical:!0,interval:500,autoplay:!0,style:{width:"300px",height:"200px"}},a.createElement(o,null,a.createElement(t,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(o,null,a.createElement(t,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(o,null,a.createElement(t,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      vertical
      interval={500}
      autoplay
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-6":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,i.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=i.sent,n=l.Swiper,o=l.SwiperItem,t=l.Stack,i.abrupt("return",{default:function(){return a.createElement(n,{interval:500,autoplay:!0,indicatorDots:!0,indicatorColor:"#880000",indicatorActiveColor:"#FF0000",style:{width:"300px",height:"200px"}},a.createElement(o,null,a.createElement(t,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(o,null,a.createElement(t,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(o,null,a.createElement(t,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      interval={500}
      autoplay
      indicatorDots
      indicatorColor={'#880000'}
      indicatorActiveColor={'#FF0000'}
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-7":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,i.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=i.sent,n=l.Swiper,o=l.SwiperItem,t=l.Stack,i.abrupt("return",{default:function(){return a.createElement(n,{onChange:console.log,onAnimationFinish:console.log,style:{width:"300px",height:"200px"}},a.createElement(o,null,a.createElement(t,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(o,null,a.createElement(t,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(o,null,a.createElement(t,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      onChange={console.log}
      onAnimationFinish={console.log}
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},59923:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(5574),s=e.n(b),A=e(15009),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-switch-demo-0":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=c.sent,a=r.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=c.sent,n=l.Stack,o=l.Switch,c.abrupt("return",{default:function(){return a.createElement(n,null,a.createElement(o,null))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack>
      <Switch />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-1":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=c.sent,a=r.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=c.sent,n=l.Stack,o=l.Switch,c.abrupt("return",{default:function(){return a.createElement(n,{spacing:"5px"},a.createElement(o,{color:"primary",defaultChecked:!0}),a.createElement(o,{color:"info",defaultChecked:!0}),a.createElement(o,{color:"success",defaultChecked:!0}),a.createElement(o,{color:"warning",defaultChecked:!0}),a.createElement(o,{color:"danger",defaultChecked:!0}))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack spacing="5px">
      <Switch color="primary" defaultChecked />
      <Switch color="info" defaultChecked />
      <Switch color="success" defaultChecked />
      <Switch color="warning" defaultChecked />
      <Switch color="danger" defaultChecked />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-2":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=c.sent,a=r.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=c.sent,n=l.Stack,o=l.Switch,c.abrupt("return",{default:function(){return a.createElement(n,{spacing:"10px",direction:"row"},a.createElement(o,{size:"small"}),a.createElement(o,{size:"medium"}),a.createElement(o,{size:"large"}))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Switch size="small" />
      <Switch size="medium" />
      <Switch size="large" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-3":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t,c,i;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=f.sent,a=r.default,f.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=f.sent,n=l.Stack,o=l.Switch,f.next=11,e.e(3670).then(e.bind(e,83670));case 11:return t=f.sent,c=t.MoonOutlinedIcon,i=t.SunOutlinedIcon,f.abrupt("return",{default:function(){return a.createElement(n,{spacing:"10px",direction:"row"},a.createElement(o,{defaultChecked:!0,checkedChildren:"\u5F00",unCheckedChildren:"\u5173"}),a.createElement(o,{defaultChecked:!0,checkedChildren:a.createElement(c,{htmlColor:"#fff"}),unCheckedChildren:a.createElement(i,{htmlColor:"#fff"})}),a.createElement(o,{defaultChecked:!0,checkedChildren:a.createElement(c,{htmlColor:"#fff"}),unCheckedChildren:a.createElement(i,{htmlColor:"#fff"}),size:"large"}))}});case 15:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
import { MoonOutlinedIcon, SunOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Switch defaultChecked checkedChildren="\u5F00" unCheckedChildren="\u5173" />
      <Switch
        defaultChecked
        checkedChildren={<MoonOutlinedIcon htmlColor="#fff" />}
        unCheckedChildren={<SunOutlinedIcon htmlColor="#fff" />}
      />
      <Switch
        defaultChecked
        checkedChildren={<MoonOutlinedIcon htmlColor="#fff" />}
        unCheckedChildren={<SunOutlinedIcon htmlColor="#fff" />}
        size="large"
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-4":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,l=r.useState,i.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=i.sent,o=n.Stack,t=n.Switch,i.abrupt("return",{default:function(){var f=l(!0),h=s()(f,2),y=h[0],E=h[1],O=function(C,P){E(P==null?void 0:P.checked),console.log("onChange",P)};return a.createElement(o,null,a.createElement(t,{checked:y,onChange:O}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (e, data) => {
    setChecked(data?.checked);
    console.log('onChange', data);
  };
  return (
    <Stack>
      <Switch checked={checked} onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-5":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o,t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=i.sent,a=r.default,l=r.useState,i.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=i.sent,o=n.Stack,t=n.Switch,i.abrupt("return",{default:function(){var f=l(!0),h=s()(f,2),y=h[0],E=h[1],O=function(C,P){E(P==null?void 0:P.checked),console.log("onChange",P)};return a.createElement(o,null,a.createElement(t,{checked:y,onChange:O,inputProps:{className:"my-input"}}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (e, data) => {
    setChecked(data?.checked);
    console.log('onChange', data);
  };
  return (
    <Stack>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ className: 'my-input' }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-6":{component:p.memo(p.lazy(x()(v()().mark(function d(){var r,a,l,n,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=c.sent,a=r.default,c.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return l=c.sent,n=l.Stack,o=l.Switch,c.abrupt("return",{default:function(){return a.createElement(n,{spacing:"5px"},a.createElement(o,{disabled:!0}),a.createElement(o,{defaultChecked:!0,disabled:!0}))}});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="5px">
      <Switch disabled />
      <Switch defaultChecked disabled />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(v()().mark(function a(){var l,n=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},85096:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-tab-bar-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=I.sent,a=r.default,l=r.useState,I.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=I.sent,o=n.Stack,t=n.TabBar,c=n.TabBarItem,I.abrupt("return",{default:function(){var h=l(0),y=v()(h,2),E=y[0],O=y[1],L=function(P,z){var M=z.value;O(M)};return a.createElement(o,{style:{background:"#eee",padding:"20px 0 10px"}},a.createElement(t,{current:E,onChange:L},a.createElement(c,{title:"\u4E3B\u9875"}),a.createElement(c,{title:"\u5546\u5E97"}),a.createElement(c,{title:"\u5E2E\u52A9"})))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';

export default () => {
  const [active, setActive] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };
  return (
    <Stack style={{ background: '#eee', padding: '20px 0 10px' }}>
      <TabBar current={active} onChange={handleChange}>
        <TabBarItem title="\u4E3B\u9875" />
        <TabBarItem title="\u5546\u5E97" />
        <TabBarItem title="\u5E2E\u52A9" />
      </TabBar>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-tab-bar-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i,I,f,h;return s()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=E.sent,a=r.default,l=r.useState,E.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=E.sent,o=n.Stack,t=n.TabBar,c=n.TabBarItem,E.next=13,e.e(3670).then(e.bind(e,83670));case 13:return i=E.sent,I=i.PhoneFilledIcon,f=i.StoreFilledIcon,h=i.HomeFilledIcon,E.abrupt("return",{default:function(){var L=l(0),C=v()(L,2),P=C[0],z=C[1],M=function(T,$){var j=$.value;z(j)};return a.createElement(o,{style:{background:"#eee",padding:"20px 0 10px"}},a.createElement(t,{current:P,onChange:M},a.createElement(c,{title:"\u4E3B\u9875",icon:a.createElement(h,null),activeIcon:a.createElement(h,{color:"primary"})}),a.createElement(c,{title:"\u5546\u5E97",icon:a.createElement(f,null),activeIcon:a.createElement(f,{color:"primary"})}),a.createElement(c,{title:"\u5E2E\u52A9",icon:a.createElement(I,null),activeIcon:a.createElement(I,{color:"primary"})})))}});case 18:case"end":return E.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';
import {
  PhoneFilledIcon,
  StoreFilledIcon,
  HomeFilledIcon,
  HomeOutlinedIcon,
} from '@bifrostui/icons';

export default () => {
  const [active, setActive] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };

  return (
    <Stack style={{ background: '#eee', padding: '20px 0 10px' }}>
      <TabBar current={active} onChange={handleChange}>
        <TabBarItem
          title="\u4E3B\u9875"
          icon={<HomeFilledIcon />}
          activeIcon={<HomeFilledIcon color="primary" />}
        />
        <TabBarItem
          title="\u5546\u5E97"
          icon={<StoreFilledIcon />}
          activeIcon={<StoreFilledIcon color="primary" />}
        />
        <TabBarItem
          title="\u5E2E\u52A9"
          icon={<PhoneFilledIcon />}
          activeIcon={<PhoneFilledIcon color="primary" />}
        />
      </TabBar>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-tab-bar-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=I.sent,a=r.default,l=r.useState,I.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=I.sent,o=n.Stack,t=n.TabBar,c=n.TabBarItem,I.abrupt("return",{default:function(){var h=l(0),y=v()(h,2),E=y[0],O=y[1],L=l(0),C=v()(L,2),P=C[0],z=C[1],M=function($,j){var Z=j.value;O(Z)},D=function($,j){var Z=j.value;z(Z)};return a.createElement(a.Fragment,null,a.createElement(o,{style:{background:"#eee",padding:"20px 0 10px"},alignItems:"flex-start"},a.createElement("div",{style:{margin:"8px"}},"\u81EA\u5B9A\u4E49\u9009\u4E2D\u4E3B\u9898\u8272: "),a.createElement(t,{current:E,onChange:M},a.createElement(c,{title:"\u4E3B\u9875"}),a.createElement(c,{title:"\u5546\u5E97"}),a.createElement(c,{title:"\u5E2E\u52A9"}))),a.createElement(o,{style:{background:"#eee",padding:"20px 0 10px"},alignItems:"flex-start"},a.createElement("div",{style:{margin:"8px"}},"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u4E3B\u9898\u8272: "),a.createElement(t,{current:P,onChange:D,color:"info",activeColor:"primary"},a.createElement(c,{title:"\u4E3B\u9875"}),a.createElement(c,{title:"\u5546\u5E97"}),a.createElement(c,{title:"\u5E2E\u52A9"}))))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';

export default () => {
  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };
  const handleChange2 = (e, { value }) => {
    setActive2(value);
  };
  return (
    <>
      <Stack
        style={{ background: '#eee', padding: '20px 0 10px' }}
        alignItems="flex-start"
      >
        <div style={{ margin: '8px' }}>\u81EA\u5B9A\u4E49\u9009\u4E2D\u4E3B\u9898\u8272: </div>
        <TabBar current={active} onChange={handleChange}>
          <TabBarItem title="\u4E3B\u9875" />
          <TabBarItem title="\u5546\u5E97" />
          <TabBarItem title="\u5E2E\u52A9" />
        </TabBar>
      </Stack>
      <Stack
        style={{ background: '#eee', padding: '20px 0 10px' }}
        alignItems="flex-start"
      >
        <div style={{ margin: '8px' }}>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u4E3B\u9898\u8272: </div>
        <TabBar
          current={active2}
          onChange={handleChange2}
          color="info"
          activeColor="primary"
        >
          <TabBarItem title="\u4E3B\u9875" />
          <TabBarItem title="\u5546\u5E97" />
          <TabBarItem title="\u5E2E\u52A9" />
        </TabBar>
      </Stack>
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-tab-bar-demo-3":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i,I,f,h;return s()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=E.sent,a=r.default,l=r.useState,E.next=7,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 7:return n=E.sent,o=n.Stack,t=n.TabBar,c=n.TabBarItem,E.next=13,e.e(3670).then(e.bind(e,83670));case 13:return i=E.sent,I=i.PhoneFilledIcon,f=i.StoreFilledIcon,h=i.HomeFilledIcon,E.abrupt("return",{default:function(){var L=l(0),C=v()(L,2),P=C[0],z=C[1],M=function(T,$){var j=$.value;z(j)};return a.createElement(o,{style:{background:"#eee",padding:"20px 0 10px"}},a.createElement(t,{current:P,onChange:M},a.createElement(c,{title:"\u4E3B\u9875",icon:a.createElement(h,null),activeIcon:a.createElement(h,{color:"primary"})}),a.createElement(c,{title:"\u5546\u5E97",icon:a.createElement(f,null),activeIcon:a.createElement(f,{color:"primary"}),BadgeProps:{type:"dot"}}),a.createElement(c,{title:"\u5E2E\u52A9",icon:a.createElement(I,null),activeIcon:a.createElement(I,{color:"primary"}),BadgeProps:{content:"20"}})))}});case 18:case"end":return E.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';
import {
  PhoneFilledIcon,
  StoreFilledIcon,
  HomeFilledIcon,
} from '@bifrostui/icons';

export default () => {
  const [active, setActive] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };
  return (
    <Stack style={{ background: '#eee', padding: '20px 0 10px' }}>
      <TabBar current={active} onChange={handleChange}>
        <TabBarItem
          title="\u4E3B\u9875"
          icon={<HomeFilledIcon />}
          activeIcon={<HomeFilledIcon color="primary" />}
        />
        <TabBarItem
          title="\u5546\u5E97"
          icon={<StoreFilledIcon />}
          activeIcon={<StoreFilledIcon color="primary" />}
          BadgeProps={{ type: 'dot' }}
        />
        <TabBarItem
          title="\u5E2E\u52A9"
          icon={<PhoneFilledIcon />}
          activeIcon={<PhoneFilledIcon color="primary" />}
          BadgeProps={{ content: '20' }}
        />
      </TabBar>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},9119:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return r}});var b=e(97857),s=e.n(b),A=e(15009),v=e.n(A),S=e(5574),x=e.n(S),p=e(99289),m=e.n(p),d=e(67294),r={"packages-bui-core-src-tabs-demo-0":{component:d.memo(d.lazy(m()(v()().mark(function a(){var l,n,o,t,c,i,I,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return l=y.sent,n=l.Stack,o=l.Tab,t=l.TabPanel,c=l.Tabs,y.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return i=y.sent,I=i.default,f=i.useState,y.abrupt("return",{default:function(){var O=f("fruits"),L=x()(O,2),C=L[0],P=L[1],z=[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables"},{title:"\u52A8\u7269",index:"animals"}],M=function(T,$){var j=$.index;console.log("Click Tab, value index is: ".concat(j)),P(j)};return I.createElement(n,{alignItems:"stretch"},I.createElement(c,{style:{marginBottom:"12px"},value:C},z.map(function(D){return I.createElement(o,{key:D.index,index:D.index,onClick:M},D.title)})),I.createElement(t,{value:C,index:"fruits"},"\u83E0\u841D"),I.createElement(t,{value:C,index:"vegetables"},"\u897F\u7EA2\u67FF"),I.createElement(t,{value:C,index:"animals"},"\u8682\u8681"))}});case 13:case"end":return y.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: '\u6C34\u679C', index: 'fruits' },
    { title: '\u852C\u83DC', index: 'vegetables' },
    { title: '\u52A8\u7269', index: 'animals' },
  ];
  const handleClick = (e, { index }) => {
    console.log(\`Click Tab, value index is: \${index}\`);
    setValue(index);
  };

  return (
    <Stack alignItems="stretch">
      <Tabs style={{ marginBottom: '12px' }} value={value}>
        {tabList.map((item) => (
          <Tab key={item.index} index={item.index} onClick={handleClick}>
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index="fruits">
        \u83E0\u841D
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        \u897F\u7EA2\u67FF
      </TabPanel>
      <TabPanel value={value} index="animals">
        \u8682\u8681
      </TabPanel>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var a=m()(v()().mark(function n(){var o,t=arguments;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(7335).then(e.bind(e,37335));case 2:return i.abrupt("return",(o=i.sent).default.apply(o,t));case 3:case"end":return i.stop()}},n)}));function l(){return a.apply(this,arguments)}return l}()}},"packages-bui-core-src-tabs-demo-1":{component:d.memo(d.lazy(m()(v()().mark(function a(){var l,n,o,t,c,i,I;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return l=h.sent,n=l.Stack,o=l.TabPanel,t=l.Tabs,h.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return c=h.sent,i=c.default,I=c.useState,h.abrupt("return",{default:function(){var E=I("fruits"),O=x()(E,2),L=O[0],C=O[1],P=function(M,D){var T=D.index;console.log("Tabs change, value index is: ".concat(T)),C(T)};return i.createElement(n,null,i.createElement(t,{style:{marginBottom:"12px"},onChange:P,value:L,tabs:[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables",disabled:!0},{title:"\u52A8\u7269",index:"animals"}]}),i.createElement(o,{value:L,index:"fruits"},"\u83E0\u841D"),i.createElement(o,{value:L,index:"vegetables"},"\u897F\u7EA2\u67FF"),i.createElement(o,{value:L,index:"animals"},"\u8682\u8681"))}});case 12:case"end":return h.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const handleChange = (e, { index }) => {
    console.log(\`Tabs change, value index is: \${index}\`);
    setValue(index);
  };

  return (
    <Stack>
      <Tabs
        style={{ marginBottom: '12px' }}
        onChange={handleChange}
        value={value}
        tabs={[
          { title: '\u6C34\u679C', index: 'fruits' },
          { title: '\u852C\u83DC', index: 'vegetables', disabled: true },
          { title: '\u52A8\u7269', index: 'animals' },
        ]}
      />
      <TabPanel value={value} index="fruits">
        \u83E0\u841D
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        \u897F\u7EA2\u67FF
      </TabPanel>
      <TabPanel value={value} index="animals">
        \u8682\u8681
      </TabPanel>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var a=m()(v()().mark(function n(){var o,t=arguments;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(7335).then(e.bind(e,37335));case 2:return i.abrupt("return",(o=i.sent).default.apply(o,t));case 3:case"end":return i.stop()}},n)}));function l(){return a.apply(this,arguments)}return l}()}},"packages-bui-core-src-tabs-demo-2":{component:d.memo(d.lazy(m()(v()().mark(function a(){var l,n,o,t,c,i,I,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return l=y.sent,n=l.Stack,o=l.Tab,t=l.TabPanel,c=l.Tabs,y.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return i=y.sent,I=i.default,f=i.useState,y.abrupt("return",{default:function(){var O=f("fruits"),L=x()(O,2),C=L[0],P=L[1],z=[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables"},{title:"\u52A8\u7269",index:"animals"}],M=function(T,$){var j=$.index;console.log("Click Tab, value index is: ".concat(j)),P(j)};return I.createElement(n,null,I.createElement(c,{style:{marginBottom:"12px"},value:C},z.map(function(D){return I.createElement(o,{key:D.index,index:D.index,disabled:!0,onClick:M},D.title)})),I.createElement(t,{value:C,index:"fruits"},"\u83E0\u841D"),I.createElement(t,{value:C,index:"vegetables"},"\u897F\u7EA2\u67FF"),I.createElement(t,{value:C,index:"animals"},"\u8682\u8681"))}});case 13:case"end":return y.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: '\u6C34\u679C', index: 'fruits' },
    { title: '\u852C\u83DC', index: 'vegetables' },
    { title: '\u52A8\u7269', index: 'animals' },
  ];
  const handleClick = (e, { index }) => {
    console.log(\`Click Tab, value index is: \${index}\`);
    setValue(index);
  };

  return (
    <Stack>
      <Tabs style={{ marginBottom: '12px' }} value={value}>
        {tabList.map((item) => (
          <Tab
            key={item.index}
            index={item.index}
            disabled
            onClick={handleClick}
          >
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index="fruits">
        \u83E0\u841D
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        \u897F\u7EA2\u67FF
      </TabPanel>
      <TabPanel value={value} index="animals">
        \u8682\u8681
      </TabPanel>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var a=m()(v()().mark(function n(){var o,t=arguments;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(7335).then(e.bind(e,37335));case 2:return i.abrupt("return",(o=i.sent).default.apply(o,t));case 3:case"end":return i.stop()}},n)}));function l(){return a.apply(this,arguments)}return l}()}},"packages-bui-core-src-tabs-demo-3":{component:d.memo(d.lazy(m()(v()().mark(function a(){var l,n,o,t,c,i,I,f,h;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return l=E.sent,n=l.Button,o=l.Stack,t=l.Tab,c=l.TabPanel,i=l.Tabs,E.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return I=E.sent,f=I.default,h=I.useState,E.abrupt("return",{default:function(){var L=h("fruits"),C=x()(L,2),P=C[0],z=C[1],M=[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables"},{title:"\u52A8\u7269",index:"animals"}],D=function(j,Z){var X=Z.index;console.log(j,"Tab change, value index is: ".concat(X)),z(X)},T=function(j){z(j)};return f.createElement(o,null,f.createElement(i,{style:{marginBottom:"12px"},align:"start",onChange:D,value:P},M.map(function($){return f.createElement(t,s()({key:$.index},$),$.title)})),f.createElement(c,{value:P,index:"fruits"},f.createElement("div",null,"\u83E0\u841D"),f.createElement(n,{onClick:function(){T("animals")}},"\u6211\u8981\u8682\u8681"),f.createElement(n,{onClick:function(){T("vegetables")}},"\u6211\u8981\u897F\u7EA2\u67FF")),f.createElement(c,{value:P,index:"vegetables"},f.createElement("div",null,"\u897F\u7EA2\u67FF"),f.createElement(n,{onClick:function(){T("fruits")}},"\u6211\u8981\u83E0\u841D"),f.createElement(n,{onClick:function(){T("animals")}},"\u6211\u8981\u8682\u8681")),f.createElement(c,{value:P,index:"animals"},f.createElement("div",null,"\u8682\u8681"),f.createElement(n,{onClick:function(){T("fruits")}},"\u6211\u8981\u83E0\u841D"),f.createElement(n,{onClick:function(){T("vegetables")}},"\u6211\u8981\u897F\u7EA2\u67FF")))}});case 14:case"end":return E.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: '\u6C34\u679C', index: 'fruits' },
    { title: '\u852C\u83DC', index: 'vegetables' },
    { title: '\u52A8\u7269', index: 'animals' },
  ];
  const handleChange = (e, { index }) => {
    console.log(e, \`Tab change, value index is: \${index}\`);
    setValue(index);
  };

  const handleButton = (index) => {
    setValue(index);
  };

  return (
    <Stack>
      <Tabs
        style={{ marginBottom: '12px' }}
        align="start"
        onChange={handleChange}
        value={value}
      >
        {tabList.map((item) => (
          <Tab key={item.index} {...item}>
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index="fruits">
        <div>\u83E0\u841D</div>
        <Button
          onClick={() => {
            handleButton('animals');
          }}
        >
          \u6211\u8981\u8682\u8681
        </Button>
        <Button
          onClick={() => {
            handleButton('vegetables');
          }}
        >
          \u6211\u8981\u897F\u7EA2\u67FF
        </Button>
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        <div>\u897F\u7EA2\u67FF</div>
        <Button
          onClick={() => {
            handleButton('fruits');
          }}
        >
          \u6211\u8981\u83E0\u841D
        </Button>
        <Button
          onClick={() => {
            handleButton('animals');
          }}
        >
          \u6211\u8981\u8682\u8681
        </Button>
      </TabPanel>
      <TabPanel value={value} index="animals">
        <div>\u8682\u8681</div>
        <Button
          onClick={() => {
            handleButton('fruits');
          }}
        >
          \u6211\u8981\u83E0\u841D
        </Button>
        <Button
          onClick={() => {
            handleButton('vegetables');
          }}
        >
          \u6211\u8981\u897F\u7EA2\u67FF
        </Button>
      </TabPanel>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var a=m()(v()().mark(function n(){var o,t=arguments;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(7335).then(e.bind(e,37335));case 2:return i.abrupt("return",(o=i.sent).default.apply(o,t));case 3:case"end":return i.stop()}},n)}));function l(){return a.apply(this,arguments)}return l}()}},"packages-bui-core-src-tabs-demo-4":{component:d.memo(d.lazy(m()(v()().mark(function a(){var l,n,o,t,c,i,I,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return l=y.sent,n=l.Stack,o=l.Tab,t=l.TabPanel,c=l.Tabs,y.next=9,Promise.resolve().then(e.t.bind(e,67294,19));case 9:return i=y.sent,I=i.default,f=i.useState,y.abrupt("return",{default:function(){var O=f("2"),L=x()(O,2),C=L[0],P=L[1],z=[{title:"\u957F\u6D25\u6E56",index:"1"},{title:"\u6218\u72FC2",index:"2"},{title:"\u4F60\u597D\uFF0C\u674E\u7115\u82F1",index:"3"},{title:"\u54EA\u5412\u4E4B\u9B54\u7AE5\u964D\u4E16",index:"4"},{title:"\u6D41\u6D6A\u5730\u7403",index:"5"},{title:"\u5510\u4EBA\u8857\u63A2\u68483",index:"6"},{title:"\u590D\u4EC7\u8005\u8054\u76DF4\uFF1A\u7EC8\u5C40\u4E4B\u6218",index:"7"},{title:"\u957F\u6D25\u6E56\u4E4B\u6C34\u95E8\u6865",index:"8"},{title:"\u7EA2\u6D77\u884C\u52A8",index:"9"}],M=function(T,$){var j=$.index;console.log(T,"Tab Change, value index is: ".concat(j)),P(j)};return I.createElement(n,null,I.createElement("div",{style:{width:"325px"}},I.createElement(c,{style:{marginTop:"20px",marginBottom:"12px"},value:C,onChange:M},z.map(function(D){return I.createElement(o,s()({key:D.index},D),D.title)})),z.map(function(D){return I.createElement(t,{key:D.index,value:C,index:D.index},D.index)})))}});case 13:case"end":return y.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('2');
  const tabList = [
    { title: '\u957F\u6D25\u6E56', index: '1' },
    { title: '\u6218\u72FC2', index: '2' },
    { title: '\u4F60\u597D\uFF0C\u674E\u7115\u82F1', index: '3' },
    { title: '\u54EA\u5412\u4E4B\u9B54\u7AE5\u964D\u4E16', index: '4' },
    { title: '\u6D41\u6D6A\u5730\u7403', index: '5' },
    { title: '\u5510\u4EBA\u8857\u63A2\u68483', index: '6' },
    { title: '\u590D\u4EC7\u8005\u8054\u76DF4\uFF1A\u7EC8\u5C40\u4E4B\u6218', index: '7' },
    { title: '\u957F\u6D25\u6E56\u4E4B\u6C34\u95E8\u6865', index: '8' },
    { title: '\u7EA2\u6D77\u884C\u52A8', index: '9' },
  ];
  const handleChange = (e, { index }) => {
    console.log(e, \`Tab Change, value index is: \${index}\`);
    setValue(index);
  };

  return (
    <Stack>
      <div style={{ width: '325px' }}>
        <Tabs
          style={{ marginTop: '20px', marginBottom: '12px' }}
          value={value}
          onChange={handleChange}
        >
          {tabList.map((item) => (
            <Tab key={item.index} {...item}>
              {item.title}
            </Tab>
          ))}
        </Tabs>
        {tabList.map((item) => (
          <TabPanel key={item.index} value={value} index={item.index}>
            {item.index}
          </TabPanel>
        ))}
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var a=m()(v()().mark(function n(){var o,t=arguments;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(7335).then(e.bind(e,37335));case 2:return i.abrupt("return",(o=i.sent).default.apply(o,t));case 3:case"end":return i.stop()}},n)}));function l(){return a.apply(this,arguments)}return l}()}}}},42499:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-core-src-tag-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Stack,r=m.Tag,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(d,{direction:"row",spacing:"10px"},l.createElement(r,null,"\u9ED8\u8BA4\u6807\u7B7E"),l.createElement(r,{variant:"contained"},"\u586B\u5145\u6807\u7B7E"),l.createElement(r,{variant:"light"},"\u6D45\u4EAE\u6807\u7B7E"))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Tag>\u9ED8\u8BA4\u6807\u7B7E</Tag>
      <Tag variant="contained">\u586B\u5145\u6807\u7B7E</Tag>
      <Tag variant="light">\u6D45\u4EAE\u6807\u7B7E</Tag>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-tag-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Stack,r=m.Tag,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(d,{spacing:"10px"},l.createElement(d,{direction:"row",spacing:"10px"},l.createElement(r,{variant:"outlined",color:"primary"},"\u9650\u65F6\u7279\u4EF7"),l.createElement(r,{variant:"outlined",color:"info"},"\u97F3\u4E50\u5267"),l.createElement(r,{variant:"outlined",color:"success"},"\u97F3\u4E50\u5267"),l.createElement(r,{variant:"outlined",color:"warning"},"\u70B9\u6620"),l.createElement(r,{variant:"outlined",color:"danger"},"\u9650\u65F6\u4F18\u60E0"),l.createElement(r,{variant:"outlined",color:"vip"},"\u4F1A\u5458")),l.createElement(d,{direction:"row",spacing:"10px"},l.createElement(r,{variant:"contained",color:"primary"},"\u65E9\u9E1F\u4F18\u60E0"),l.createElement(r,{variant:"contained",color:"info"},"\u97F3\u4E50\u5267"),l.createElement(r,{variant:"contained",color:"success"},"\u5F71\u57CE\u5361"),l.createElement(r,{variant:"contained",color:"warning"},"\u70B9\u6620"),l.createElement(r,{variant:"contained",color:"danger"},"\u9650\u65F6\u4F18\u60E0"),l.createElement(r,{variant:"contained",color:"vip"},"\u4F1A\u5458")),l.createElement(d,{direction:"row",spacing:"10px"},l.createElement(r,{variant:"light",color:"primary"},"\u65E9\u9E1F\u4F18\u60E0"),l.createElement(r,{variant:"light",color:"info"},"\u97F3\u4E50\u5267"),l.createElement(r,{variant:"light",color:"success"},"\u5F71\u57CE\u5361"),l.createElement(r,{variant:"light",color:"warning"},"\u70B9\u6620"),l.createElement(r,{variant:"light",color:"danger"},"\u9650\u65F6\u4F18\u60E0"),l.createElement(r,{variant:"light",color:"vip"},"\u4F1A\u5458")))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px">
      <Stack direction="row" spacing="10px">
        <Tag variant="outlined" color="primary">
          \u9650\u65F6\u7279\u4EF7
        </Tag>
        <Tag variant="outlined" color="info">
          \u97F3\u4E50\u5267
        </Tag>
        <Tag variant="outlined" color="success">
          \u97F3\u4E50\u5267
        </Tag>
        <Tag variant="outlined" color="warning">
          \u70B9\u6620
        </Tag>
        <Tag variant="outlined" color="danger">
          \u9650\u65F6\u4F18\u60E0
        </Tag>
        <Tag variant="outlined" color="vip">
          \u4F1A\u5458
        </Tag>
      </Stack>
      <Stack direction="row" spacing="10px">
        <Tag variant="contained" color="primary">
          \u65E9\u9E1F\u4F18\u60E0
        </Tag>
        <Tag variant="contained" color="info">
          \u97F3\u4E50\u5267
        </Tag>
        <Tag variant="contained" color="success">
          \u5F71\u57CE\u5361
        </Tag>
        <Tag variant="contained" color="warning">
          \u70B9\u6620
        </Tag>
        <Tag variant="contained" color="danger">
          \u9650\u65F6\u4F18\u60E0
        </Tag>
        <Tag variant="contained" color="vip">
          \u4F1A\u5458
        </Tag>
      </Stack>
      <Stack direction="row" spacing="10px">
        <Tag variant="light" color="primary">
          \u65E9\u9E1F\u4F18\u60E0
        </Tag>
        <Tag variant="light" color="info">
          \u97F3\u4E50\u5267
        </Tag>
        <Tag variant="light" color="success">
          \u5F71\u57CE\u5361
        </Tag>
        <Tag variant="light" color="warning">
          \u70B9\u6620
        </Tag>
        <Tag variant="light" color="danger">
          \u9650\u65F6\u4F18\u60E0
        </Tag>
        <Tag variant="light" color="vip">
          \u4F1A\u5458
        </Tag>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-tag-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=o.sent,d=m.Stack,r=m.Tag,o.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return a=o.sent,l=a.default,o.abrupt("return",{default:function(){return l.createElement(d,{spacing:"10px"},l.createElement(r,{variant:"contained",htmlColor:"#69eeff"},"\u81EA\u5B9A\u4E49\u8272\u5F69"),l.createElement(r,{variant:"light",htmlColor:"#69eeff"},"\u81EA\u5B9A\u4E49\u8272\u5F69"),l.createElement(r,{variant:"outlined",htmlColor:"#69eeff"},"\u81EA\u5B9A\u4E49\u8272\u5F69"))}});case 10:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px">
      <Tag variant="contained" htmlColor="#69eeff">
        \u81EA\u5B9A\u4E49\u8272\u5F69
      </Tag>
      <Tag variant="light" htmlColor="#69eeff">
        \u81EA\u5B9A\u4E49\u8272\u5F69
      </Tag>
      <Tag variant="outlined" htmlColor="#69eeff">
        \u81EA\u5B9A\u4E49\u8272\u5F69
      </Tag>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-core-src-tag-demo-3":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return m=t.sent,d=m.Stack,r=m.Tag,a=m.TagGroup,t.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return l=t.sent,n=l.default,t.abrupt("return",{default:function(){return n.createElement(d,{direction:"row",spacing:"10px",flexWrap:"wrap"},n.createElement(a,null,n.createElement(r,{variant:"contained",color:"primary"},"primary"),n.createElement(r,{variant:"contained",color:"info"},"info")),n.createElement(a,null,n.createElement(r,{variant:"contained",color:"success"},"success"),n.createElement(r,{variant:"outlined",color:"warning"},"warning")),n.createElement(a,null,n.createElement(r,{variant:"outlined",color:"warning"},"warning"),n.createElement(r,{variant:"contained",color:"success"},"success")),n.createElement(a,null,n.createElement(r,{variant:"outlined",color:"primary"},"primary"),n.createElement(r,{variant:"outlined",color:"info"},"info")))}});case 11:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag, TagGroup } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px" flexWrap="wrap">
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="success">
          success
        </Tag>
        <Tag variant="outlined" color="warning">
          warning
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="warning">
          warning
        </Tag>
        <Tag variant="contained" color="success">
          success
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},1494:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return m}});var b=e(15009),s=e.n(b),A=e(5574),v=e.n(A),S=e(99289),x=e.n(S),p=e(67294),m={"packages-bui-core-src-text-area-demo-0":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Stack,l=r.TextArea,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(""),h=v()(f,2),y=h[0],E=h[1],O=function(C,P){E(P==null?void 0:P.value),console.log("change",P==null?void 0:P.value)};return o.createElement(a,{alignItems:"stretch"},o.createElement(l,{value:y,placeholder:"\u9ED8\u8BA4",onChange:O}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };

  return (
    <Stack alignItems="stretch">
      <TextArea value={value} placeholder="\u9ED8\u8BA4" onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-text-area-demo-1":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Stack,l=r.TextArea,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(""),h=v()(f,2),y=h[0],E=h[1];return o.createElement(a,{alignItems:"stretch"},o.createElement(l,{value:y,placeholder:"\u6700\u591A\u8F93\u516510\u4E2A\u5B57",onChange:function(L,C){return E(C==null?void 0:C.value)},maxLength:10,showCount:!0}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="\u6700\u591A\u8F93\u516510\u4E2A\u5B57"
        onChange={(e, data) => setValue(data?.value)}
        maxLength={10}
        showCount
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-text-area-demo-2":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c,i;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=f.sent,a=r.Button,l=r.Stack,n=r.TextArea,f.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=f.sent,t=o.default,c=o.useRef,i=o.useState,f.abrupt("return",{default:function(){var y=i("0"),E=v()(y,2),O=E[0],L=E[1],C=i("100"),P=v()(C,2),z=P[0],M=P[1],D=c(null),T=function(){L(function(X){return"".concat(Number(X)+10)})},$=function(){M(function(X){return"".concat(Number(X)-10)})},j=function(){var X=D.current;X.value=Number(X.value)*2};return t.createElement(l,{alignItems:"stretch"},t.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:"40px"}},"\u53D7\u63A7\u7EC4\u4EF6\uFF1A",t.createElement(a,{onClick:T},"\u6570\u91CF\u52A010"),t.createElement("br",null),t.createElement(n,{value:O,onChange:function(X,q){return L(q.value)}})),t.createElement("div",{style:{display:"flex",flexDirection:"column"}},"\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A",t.createElement("br",null),t.createElement(a,{onClick:$},"\u6570\u91CF\u51CF10(\u64CD\u4F5CdefaultValue\u65E0\u6548)"),t.createElement("br",null),t.createElement(a,{onClick:j},"\u6570\u91CF\u4E582(\u901A\u8FC7DOM\u64CD\u4F5Cvalue\u6709\u6548)"),t.createElement("br",null),t.createElement(n,{textareaRef:D,defaultValue:z})))}});case 13:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack, TextArea } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [value, setValue] = useState('0');
  const [defaultValue, setDefaultValue] = useState('100');
  const reduceRef = useRef(null);

  const addTen = () => {
    setValue((prev) => \`\${Number(prev) + 10}\`);
  };

  const reduceTen = () => {
    setDefaultValue((prev) => \`\${Number(prev) - 10}\`);
  };

  const multiplyTwo = () => {
    const textarea = reduceRef.current;
    textarea.value = Number(textarea.value) * 2;
  };

  return (
    <Stack alignItems="stretch">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '40px',
        }}
      >
        \u53D7\u63A7\u7EC4\u4EF6\uFF1A
        <Button onClick={addTen}>\u6570\u91CF\u52A010</Button>
        <br />
        <TextArea value={value} onChange={(e, data) => setValue(data.value)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        \u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A
        <br />
        <Button onClick={reduceTen}>\u6570\u91CF\u51CF10(\u64CD\u4F5CdefaultValue\u65E0\u6548)</Button>
        <br />
        <Button onClick={multiplyTwo}>\u6570\u91CF\u4E582(\u901A\u8FC7DOM\u64CD\u4F5Cvalue\u6709\u6548)</Button>
        <br />
        <TextArea textareaRef={reduceRef} defaultValue={defaultValue} />
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-text-area-demo-3":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t,c;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=I.sent,a=r.Stack,l=r.TextArea,n=r.Button,I.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return o=I.sent,t=o.default,c=o.useState,I.abrupt("return",{default:function(){var h=c("123"),y=v()(h,2),E=y[0],O=y[1],L=c(!1),C=v()(L,2),P=C[0],z=C[1];return t.createElement(a,{alignItems:"stretch"},t.createElement(n,{onClick:function(){z(!P)}},P?"\u5931":"\u805A","\u7126"),t.createElement(l,{value:E,autoFocus:P,onChange:function(D,T){return O(T==null?void 0:T.value)}}))}});case 12:case"end":return I.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('123');
  const [autoFocus, setAutoFocus] = useState(false);

  return (
    <Stack alignItems="stretch">
      <Button
        onClick={() => {
          setAutoFocus(!autoFocus);
        }}
      >
        {autoFocus ? '\u5931' : '\u805A'}\u7126
      </Button>
      <TextArea
        value={value}
        autoFocus={autoFocus}
        onChange={(e, data) => setValue(data?.value)}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-text-area-demo-4":{component:p.memo(p.lazy(x()(s()().mark(function d(){var r,a,l,n,o,t;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return r=i.sent,a=r.Stack,l=r.TextArea,i.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=i.sent,o=n.default,t=n.useState,i.abrupt("return",{default:function(){var f=t(""),h=v()(f,2),y=h[0],E=h[1];return o.createElement(a,{alignItems:"stretch"},o.createElement(l,{value:y,placeholder:"\u6587\u6848\u8FC7\u591A\u4F1A\u81EA\u52A8\u6491\u9AD8",onChange:function(L,C){return E(C==null?void 0:C.value)},autoSize:{minHeight:50,maxHeight:100}}))}});case 11:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="\u6587\u6848\u8FC7\u591A\u4F1A\u81EA\u52A8\u6491\u9AD8"
        onChange={(e, data) => setValue(data?.value)}
        autoSize={{ minHeight: 50, maxHeight: 100 }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var d=x()(s()().mark(function a(){var l,n=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},58545:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return r}});var b=e(97857),s=e.n(b),A=e(15009),v=e.n(A),S=e(5574),x=e.n(S),p=e(99289),m=e.n(p),d=e(67294),r={"packages-bui-core-src-transition-demo-0":{component:d.memo(d.lazy(m()(v()().mark(function a(){var l,n,o,t,c,i,I;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return l=h.sent,n=l.Button,o=l.Transition,t=l.Stack,h.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return c=h.sent,i=c.default,I=c.useState,h.abrupt("return",{default:function(){var E=I(!0),O=x()(E,2),L=O[0],C=O[1];return i.createElement(t,null,i.createElement(n,{onClick:function(){C(function(z){return!z})}},L?"OPEN":"CLOSE"),i.createElement(o,{in:L,timeout:1e3},function(P){return i.createElement(i.Fragment,null,i.createElement("div",null,"Status:",P),i.createElement("div",{style:{transition:"opacity 1000ms linear",opacity:P.match(/exit/)?0:1}},"FADE"))}))}});case 12:case"end":return h.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-transition-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Transition, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? 'OPEN' : 'CLOSE'}
      </Button>
      <Transition in={open} timeout={1000}>
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
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var a=m()(v()().mark(function n(){var o,t=arguments;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(7335).then(e.bind(e,37335));case 2:return i.abrupt("return",(o=i.sent).default.apply(o,t));case 3:case"end":return i.stop()}},n)}));function l(){return a.apply(this,arguments)}return l}()}},"packages-bui-core-src-transition-demo-1":{component:d.memo(d.lazy(m()(v()().mark(function a(){var l,n,o,t,c,i,I;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 2:return l=h.sent,n=l.Button,o=l.Transition,t=l.Stack,h.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return c=h.sent,i=c.default,I=c.useState,h.abrupt("return",{default:function(){var E=I(!0),O=x()(E,2),L=O[0],C=O[1],P=I({}),z=x()(P,2),M=z[0],D=z[1];return i.createElement(t,null,i.createElement(n,{onClick:function(){C(function($){return!$})}},L?"OPEN":"CLOSE"),i.createElement(o,{in:L,timeout:1e3,onEnter:function(){return D(function($){return s()(s()({},$),{},{enter:performance.now()})})},onEntering:function(){return D(function($){return s()(s()({},$),{},{entering:performance.now()})})},onEntered:function(){return D(function($){return s()(s()({},$),{},{entered:performance.now()})})},onExit:function(){return D(function($){return s()(s()({},$),{},{exit:performance.now()})})},onExiting:function(){return D(function($){return s()(s()({},$),{},{exiting:performance.now()})})},onExited:function(){return D(function($){return s()(s()({},$),{},{exited:performance.now()})})}},function(T){return i.createElement(i.Fragment,null,i.createElement("div",null,"Status:",T),i.createElement("div",{style:{transition:"opacity 1000ms linear",opacity:T.match(/exit/)?0:1}},"FADE"))}),i.createElement("style",null,"@keyframes highlight{from{background-color:#FF8888}to{background:color:#FFFFFF}}"),["enter","entering","entered","exit","exiting","exited"].map(function(T){var $;return i.createElement("div",{key:M[T],style:{animation:"highlight 1s"}},T,": ",(($=M[T])===null||$===void 0?void 0:$.toFixed(1))||"- ")}))}});case 12:case"end":return h.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-transition-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Transition, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var a=m()(v()().mark(function n(){var o,t=arguments;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(7335).then(e.bind(e,37335));case 2:return i.abrupt("return",(o=i.sent).default.apply(o,t));case 3:case"end":return i.stop()}},n)}));function l(){return a.apply(this,arguments)}return l}()}}}},31985:function(g,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return x}});var b=e(15009),s=e.n(b),A=e(99289),v=e.n(A),S=e(67294),x={"packages-bui-icons-src-demo-0":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=t.sent,d=m.default,t.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=t.sent,a=r.Stack,t.next=10,e.e(3670).then(e.bind(e,83670));case 10:return l=t.sent,n=l.SettingsOutlinedIcon,t.abrupt("return",{default:function(){return d.createElement(a,{direction:"row",spacing:"10px"},d.createElement(n,{size:"small"}),d.createElement(n,{size:"medium"}),d.createElement(n,{size:"large"}))}});case 13:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <SettingsOutlinedIcon size="small" />
      <SettingsOutlinedIcon size="medium" />
      <SettingsOutlinedIcon size="large" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-icons-src-demo-1":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=t.sent,d=m.default,t.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=t.sent,a=r.Stack,t.next=10,e.e(3670).then(e.bind(e,83670));case 10:return l=t.sent,n=l.SettingsOutlinedIcon,t.abrupt("return",{default:function(){return d.createElement(a,{direction:"row",spacing:"10px"},d.createElement(n,{size:"large"}),d.createElement(n,{color:"primary",size:"large"}),d.createElement(n,{color:"default",size:"large"}),d.createElement(n,{color:"info",size:"large"}),d.createElement(n,{color:"warning",size:"large"}),d.createElement(n,{color:"danger",size:"large"}),d.createElement(n,{color:"success",size:"large"}),d.createElement(n,{color:"disabled",size:"large"}))}});case 13:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <SettingsOutlinedIcon size="large" />
      <SettingsOutlinedIcon color="primary" size="large" />
      <SettingsOutlinedIcon color="default" size="large" />
      <SettingsOutlinedIcon color="info" size="large" />
      <SettingsOutlinedIcon color="warning" size="large" />
      <SettingsOutlinedIcon color="danger" size="large" />
      <SettingsOutlinedIcon color="success" size="large" />
      <SettingsOutlinedIcon color="disabled" size="large" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-icons-src-demo-2":{component:S.memo(S.lazy(v()(s()().mark(function p(){var m,d,r,a,l,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=t.sent,d=m.default,t.next=6,Promise.all([e.e(8939),e.e(718),e.e(109)]).then(e.bind(e,40634));case 6:return r=t.sent,a=r.Stack,t.next=10,e.e(3670).then(e.bind(e,83670));case 10:return l=t.sent,n=l.SettingsOutlinedIcon,t.abrupt("return",{default:function(){return d.createElement(a,{direction:"row"},d.createElement(n,{style:{fontSize:"48px",color:"#ad63f6"}}),d.createElement(n,{style:{fontSize:"48px"},htmlColor:"#ff866e"}))}});case 13:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row">
      <SettingsOutlinedIcon style={{ fontSize: '48px', color: '#ad63f6' }} />
      <SettingsOutlinedIcon style={{ fontSize: '48px' }} htmlColor="#ff866e" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:e(67294)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}},"packages-bui-icons-src-demo-demo":{component:S.memo(S.lazy(function(){return Promise.all([e.e(4182),e.e(718),e.e(2433)]).then(e.bind(e,11250))})),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91622).Z},react:{type:"NPM",value:"18.3.1"},"./index.less":{type:"FILE",value:e(9367).Z},"../components.ts":{type:"FILE",value:e(85095).Z},"./AccessTimeCircleFilled.tsx":{type:"FILE",value:e(52145).Z},"./AccessTimeCircleOutlined.tsx":{type:"FILE",value:e(38160).Z},"./AddCircleOutlined.tsx":{type:"FILE",value:e(70534).Z},"./AddCircleFilled.tsx":{type:"FILE",value:e(14019).Z},"./AddCircleFilledBold.tsx":{type:"FILE",value:e(96786).Z},"./Add.tsx":{type:"FILE",value:e(49379).Z},"./AlertCircleFilledBold.tsx":{type:"FILE",value:e(12414).Z},"./AccessTimeCircleFilledBold.tsx":{type:"FILE",value:e(19056).Z},"./AliFishOutlined.tsx":{type:"FILE",value:e(10827).Z},"./AlarmOutlined.tsx":{type:"FILE",value:e(81395).Z},"./ArrowUpCircleOutlined.tsx":{type:"FILE",value:e(40389).Z},"./BlockCircleFilled.tsx":{type:"FILE",value:e(2035).Z},"./ArrowUpward.tsx":{type:"FILE",value:e(37543).Z},"./AliSweetOutlined.tsx":{type:"FILE",value:e(7755).Z},"./ArrowUpwardLarge.tsx":{type:"FILE",value:e(68510).Z},"./AliWangWangFilled.tsx":{type:"FILE",value:e(75901).Z},"./AssessmentOutlined.tsx":{type:"FILE",value:e(78069).Z},"./AddCouponOutlined.tsx":{type:"FILE",value:e(55440).Z},"./AssignmentOutlined.tsx":{type:"FILE",value:e(79300).Z},"./AliWangWangOutlined.tsx":{type:"FILE",value:e(42659).Z},"./AddLarge.tsx":{type:"FILE",value:e(63619).Z},"./AlertCircleOutlined.tsx":{type:"FILE",value:e(36298).Z},"./AlignCenterFilled.tsx":{type:"FILE",value:e(905).Z},"./BabyOutlined.tsx":{type:"FILE",value:e(64545).Z},"./BankCardFilled.tsx":{type:"FILE",value:e(39193).Z},"./ArrowDownward.tsx":{type:"FILE",value:e(29671).Z},"./AlertCircleFilled.tsx":{type:"FILE",value:e(64466).Z},"./ArrowForward.tsx":{type:"FILE",value:e(21135).Z},"./CaretRight.tsx":{type:"FILE",value:e(8532).Z},"./BlockCircleOutlined.tsx":{type:"FILE",value:e(54080).Z},"./ArrowDownwardLarge.tsx":{type:"FILE",value:e(77871).Z},"./BlockCircleOutlinedThin.tsx":{type:"FILE",value:e(4881).Z},"./BankCardOutlined.tsx":{type:"FILE",value:e(72103).Z},"./ArrowBackwardLarge.tsx":{type:"FILE",value:e(53566).Z},"./BogoOutlined.tsx":{type:"FILE",value:e(79583).Z},"./ArrowForwardLarge.tsx":{type:"FILE",value:e(74462).Z},"./CaretUp.tsx":{type:"FILE",value:e(72877).Z},"./CinemaCardOutlined.tsx":{type:"FILE",value:e(71808).Z},"./CloseLarge.tsx":{type:"FILE",value:e(81097).Z},"./ChatFilled.tsx":{type:"FILE",value:e(49869).Z},"./AlignLeftFilled.tsx":{type:"FILE",value:e(47968).Z},"./DoubleArrowLeftTwoTone.tsx":{type:"FILE",value:e(57139).Z},"./CloudBBOutlined.tsx":{type:"FILE",value:e(42790).Z},"./BoltFilled.tsx":{type:"FILE",value:e(94568).Z},"./CloudDownloadOutlined.tsx":{type:"FILE",value:e(34277).Z},"./CloudUploadOutlined.tsx":{type:"FILE",value:e(10929).Z},"./BoltOutlined.tsx":{type:"FILE",value:e(3686).Z},"./ChatOutlined.tsx":{type:"FILE",value:e(10026).Z},"./CinemaFilled.tsx":{type:"FILE",value:e(6081).Z},"./BuildingOutlined.tsx":{type:"FILE",value:e(17737).Z},"./AlignRightFilled.tsx":{type:"FILE",value:e(23816).Z},"./CodeOutlined.tsx":{type:"FILE",value:e(69506).Z},"./CopyOutlined.tsx":{type:"FILE",value:e(11593).Z},"./CouponFilled.tsx":{type:"FILE",value:e(50202).Z},"./ArrowBackward.tsx":{type:"FILE",value:e(90730).Z},"./CheerOutlined.tsx":{type:"FILE",value:e(1868).Z},"./CouponOutlined.tsx":{type:"FILE",value:e(60455).Z},"./CinemaOutlined.tsx":{type:"FILE",value:e(31160).Z},"./GetTicketsOutlined.tsx":{type:"FILE",value:e(59981).Z},"./DoubleArrowRightTwoTone.tsx":{type:"FILE",value:e(9168).Z},"./CameraOutlined.tsx":{type:"FILE",value:e(67472).Z},"./CalendarInvisibleOutlined.tsx":{type:"FILE",value:e(58996).Z},"./CircleOutlined.tsx":{type:"FILE",value:e(64620).Z},"./CardPackageOutlined.tsx":{type:"FILE",value:e(93324).Z},"./CaretDown.tsx":{type:"FILE",value:e(45225).Z},"./DateOutlined.tsx":{type:"FILE",value:e(54564).Z},"./CaretLeft.tsx":{type:"FILE",value:e(29600).Z},"./CalendarOutlined.tsx":{type:"FILE",value:e(76483).Z},"./DoubleArrowUpTwoTone.tsx":{type:"FILE",value:e(21811).Z},"./DoubleCircleOutlined.tsx":{type:"FILE",value:e(30645).Z},"./InboxFilled.tsx":{type:"FILE",value:e(99274).Z},"./GiftCardOutlined.tsx":{type:"FILE",value:e(23683).Z},"./DeleteOutlined.tsx":{type:"FILE",value:e(56836).Z},"./DiscussOutlined.tsx":{type:"FILE",value:e(98967).Z},"./GiftOutlined.tsx":{type:"FILE",value:e(50079).Z},"./DoubleArrowDownTwoTone.tsx":{type:"FILE",value:e(29838).Z},"./MoreOutlined.tsx":{type:"FILE",value:e(14393).Z},"./MapFilled.tsx":{type:"FILE",value:e(27418).Z},"./Close.tsx":{type:"FILE",value:e(81815).Z},"./MapOutlined.tsx":{type:"FILE",value:e(54879).Z},"./GlassesOutlined.tsx":{type:"FILE",value:e(25526).Z},"./EyeFilled.tsx":{type:"FILE",value:e(47070).Z},"./FlashlightOnOutlined.tsx":{type:"FILE",value:e(82568).Z},"./Down.tsx":{type:"FILE",value:e(1122).Z},"./GppGoodFilled.tsx":{type:"FILE",value:e(15167).Z},"./EyeOutlined.tsx":{type:"FILE",value:e(36467).Z},"./MessageOutlined.tsx":{type:"FILE",value:e(68887).Z},"./FlashlightOutlined.tsx":{type:"FILE",value:e(50745).Z},"./FemaleOutlined.tsx":{type:"FILE",value:e(92482).Z},"./GppGoodOutlined.tsx":{type:"FILE",value:e(21324).Z},"./InboxFilledBold.tsx":{type:"FILE",value:e(91814).Z},"./FlipOutlined.tsx":{type:"FILE",value:e(65843).Z},"./FilterOutlined.tsx":{type:"FILE",value:e(66502).Z},"./MicOutlined.tsx":{type:"FILE",value:e(71305).Z},"./LightVipOutlined.tsx":{type:"FILE",value:e(67466).Z},"./GridViewOutlined.tsx":{type:"FILE",value:e(92217).Z},"./FollowOutlined.tsx":{type:"FILE",value:e(63567).Z},"./FingerprintOutlined.tsx":{type:"FILE",value:e(56699).Z},"./FireFilled.tsx":{type:"FILE",value:e(82702).Z},"./GripperBarHorizontal.tsx":{type:"FILE",value:e(11928).Z},"./FullScreenOutlined.tsx":{type:"FILE",value:e(13182).Z},"./MiniContractOutlined.tsx":{type:"FILE",value:e(57184).Z},"./ClockOutlined.tsx":{type:"FILE",value:e(66394).Z},"./CalendarVisibleOutlined.tsx":{type:"FILE",value:e(79050).Z},"./LinkOutlined.tsx":{type:"FILE",value:e(79420).Z},"./HeartBroken.tsx":{type:"FILE",value:e(52367).Z},"./HeartFilled.tsx":{type:"FILE",value:e(1700).Z},"./LuckyMoneyOutlined.tsx":{type:"FILE",value:e(37153).Z},"./HistoryOutlined.tsx":{type:"FILE",value:e(43021).Z},"./ErrorCircleOutlined.tsx":{type:"FILE",value:e(54273).Z},"./HashOutlined.tsx":{type:"FILE",value:e(44281).Z},"./Home.tsx":{type:"FILE",value:e(69412).Z},"./GripperBarVertical.tsx":{type:"FILE",value:e(61657).Z},"./MailOutlined.tsx":{type:"FILE",value:e(63026).Z},"./DrinkFilled.tsx":{type:"FILE",value:e(58358).Z},"./EditFilled.tsx":{type:"FILE",value:e(50026).Z},"./HomeOutlined.tsx":{type:"FILE",value:e(71924).Z},"./ExperimentOutlined.tsx":{type:"FILE",value:e(68339).Z},"./ExploreCircleFilled.tsx":{type:"FILE",value:e(40096).Z},"./ExploreCircleOutlined.tsx":{type:"FILE",value:e(91727).Z},"./HourglassOutlined.tsx":{type:"FILE",value:e(61309).Z},"./LoadingThreeQuartersOutlined.tsx":{type:"FILE",value:e(64941).Z},"./HeartAddOutlined.tsx":{type:"FILE",value:e(4448).Z},"./HomeFilled.tsx":{type:"FILE",value:e(88275).Z},"./EditOutlined.tsx":{type:"FILE",value:e(84265).Z},"./ErrorCircleFilledBold.tsx":{type:"FILE",value:e(21371).Z},"./LocationFilled.tsx":{type:"FILE",value:e(2417).Z},"./EggOutlined.tsx":{type:"FILE",value:e(63811).Z},"./MomentsOutlined.tsx":{type:"FILE",value:e(30004).Z},"./MobileOutlined.tsx":{type:"FILE",value:e(15749).Z},"./MaleOutlined.tsx":{type:"FILE",value:e(64828).Z},"./HeartAddOutlinedBold.tsx":{type:"FILE",value:e(26912).Z},"./HelpCircleOutlined.tsx":{type:"FILE",value:e(11382).Z},"./MobileFilled.tsx":{type:"FILE",value:e(15626).Z},"./ListOutlined.tsx":{type:"FILE",value:e(49872).Z},"./More.tsx":{type:"FILE",value:e(6633).Z},"./Minus.tsx":{type:"FILE",value:e(77970).Z},"./MoonOutlined.tsx":{type:"FILE",value:e(36081).Z},"./CameraFilled.tsx":{type:"FILE",value:e(74706).Z},"./DrinkOutlined.tsx":{type:"FILE",value:e(530).Z},"./ErrorCircleFilled.tsx":{type:"FILE",value:e(80800).Z},"./HeartOutlined.tsx":{type:"FILE",value:e(70250).Z},"./HelpCircleFilled.tsx":{type:"FILE",value:e(44446).Z},"./LocationOutlined.tsx":{type:"FILE",value:e(51093).Z},"./MoreVerticalOutlined.tsx":{type:"FILE",value:e(3102).Z},"./MovieAppointmentOutlined.tsx":{type:"FILE",value:e(559).Z},"./HeartMarkedOutlined.tsx":{type:"FILE",value:e(14586).Z},"./GetTicketsFilled.tsx":{type:"FILE",value:e(94681).Z},"./MovieFilled.tsx":{type:"FILE",value:e(47884).Z},"./MovieOutlined.tsx":{type:"FILE",value:e(28553).Z},"./NextFilled.tsx":{type:"FILE",value:e(29762).Z},"./NoticeOutlined.tsx":{type:"FILE",value:e(38261).Z},"./OrdersOutlined.tsx":{type:"FILE",value:e(43715).Z},"./NoteOutlined.tsx":{type:"FILE",value:e(41990).Z},"./OrderOutlined.tsx":{type:"FILE",value:e(91557).Z},"./PasswordOutlined.tsx":{type:"FILE",value:e(52031).Z},"./PaperOutlined.tsx":{type:"FILE",value:e(88003).Z},"./PageEditOutlined.tsx":{type:"FILE",value:e(90215).Z},"./PlayCircleOutlined.tsx":{type:"FILE",value:e(15013).Z},"./PhoneFilled.tsx":{type:"FILE",value:e(83758).Z},"./QRCodeOutlined.tsx":{type:"FILE",value:e(40197).Z},"./PhoneOutlined.tsx":{type:"FILE",value:e(32443).Z},"./ReportOutlined.tsx":{type:"FILE",value:e(87430).Z},"./PreferentialEventFilled.tsx":{type:"FILE",value:e(61782).Z},"./QAFilled.tsx":{type:"FILE",value:e(67632).Z},"./PublicWelfareOutlined.tsx":{type:"FILE",value:e(43636).Z},"./PictureOutlined.tsx":{type:"FILE",value:e(96837).Z},"./QuoteEnd.tsx":{type:"FILE",value:e(21093).Z},"./RadioCheckedFilled.tsx":{type:"FILE",value:e(90325).Z},"./PlayCircleOutlinedBold.tsx":{type:"FILE",value:e(14033).Z},"./ShoppingCartOutlined.tsx":{type:"FILE",value:e(39972).Z},"./RMBRefundOutlined.tsx":{type:"FILE",value:e(9982).Z},"./RankingOutlined.tsx":{type:"FILE",value:e(70545).Z},"./RefreshOutlined.tsx":{type:"FILE",value:e(24253).Z},"./Share.tsx":{type:"FILE",value:e(65109).Z},"./ShowFilled.tsx":{type:"FILE",value:e(34239).Z},"./RMBCircleOutlined.tsx":{type:"FILE",value:e(916).Z},"./StarFilled.tsx":{type:"FILE",value:e(55367).Z},"./StarFilledSharp.tsx":{type:"FILE",value:e(14318).Z},"./StarRoundedFilled.tsx":{type:"FILE",value:e(86547).Z},"./SmileOutlined.tsx":{type:"FILE",value:e(83829).Z},"./StarOutlined.tsx":{type:"FILE",value:e(25701).Z},"./ZoomInOutlined.tsx":{type:"FILE",value:e(19282).Z},"./SaveOutlined.tsx":{type:"FILE",value:e(6157).Z},"./SuccessCircleFilled.tsx":{type:"FILE",value:e(27607).Z},"./QuoteStart.tsx":{type:"FILE",value:e(89863).Z},"./SuccessCircleFilledBold.tsx":{type:"FILE",value:e(19698).Z},"./Sort.tsx":{type:"FILE",value:e(11634).Z},"./ScanOutlined.tsx":{type:"FILE",value:e(91492).Z},"./SmileFilled.tsx":{type:"FILE",value:e(24861).Z},"./VolumeMuteFilled.tsx":{type:"FILE",value:e(73146).Z},"./SearchGapOutlined.tsx":{type:"FILE",value:e(55988).Z},"./ShowOutlined.tsx":{type:"FILE",value:e(7839).Z},"./StoreFilled.tsx":{type:"FILE",value:e(48363).Z},"./UserFollowedOutlined.tsx":{type:"FILE",value:e(18110).Z},"./VipFilled.tsx":{type:"FILE",value:e(78461).Z},"./VipOutlined.tsx":{type:"FILE",value:e(14927).Z},"./VolumeDownFilled.tsx":{type:"FILE",value:e(51713).Z},"./SearchOutlined.tsx":{type:"FILE",value:e(74516).Z},"./VerifiedFilled.tsx":{type:"FILE",value:e(24088).Z},"./TripleVerticalLine.tsx":{type:"FILE",value:e(1621).Z},"./SettingsOutlined.tsx":{type:"FILE",value:e(40860).Z},"./VideoOutlined.tsx":{type:"FILE",value:e(98173).Z},"./SevenDayCalendar.tsx":{type:"FILE",value:e(75014).Z},"./TicketFilled.tsx":{type:"FILE",value:e(16576).Z},"./VipCardFilled.tsx":{type:"FILE",value:e(4151).Z},"./TaoTicketsLogo.tsx":{type:"FILE",value:e(17247).Z},"./StarCircleOutlined.tsx":{type:"FILE",value:e(73220).Z},"./Up.tsx":{type:"FILE",value:e(78922).Z},"./SuccessCircleOutlined.tsx":{type:"FILE",value:e(81061).Z},"./ThumbUpOutlined.tsx":{type:"FILE",value:e(78412).Z},"./VolumeUpFilled.tsx":{type:"FILE",value:e(22591).Z},"./TaoPiaoPiaoLogo.tsx":{type:"FILE",value:e(30227).Z},"./WeiBoOutlined.tsx":{type:"FILE",value:e(78542).Z},"./WeChatOutlined.tsx":{type:"FILE",value:e(59604).Z},"./VolumeMuteOutlined.tsx":{type:"FILE",value:e(74484).Z},"./TicketMachineOutlined.tsx":{type:"FILE",value:e(77890).Z},"./SunOutlined.tsx":{type:"FILE",value:e(17819).Z},"./SuccessFilledBold.tsx":{type:"FILE",value:e(887).Z},"./TicketOutlined.tsx":{type:"FILE",value:e(78204).Z},"./XiaMiCircleOutlined.tsx":{type:"FILE",value:e(69603).Z},"./TopicFilled.tsx":{type:"FILE",value:e(94053).Z},"./TrendingCircleFilled.tsx":{type:"FILE",value:e(37689).Z},"./TopicOutlined.tsx":{type:"FILE",value:e(47596).Z},"./YouKuVipCircleOutlined.tsx":{type:"FILE",value:e(83021).Z},"./WifiOutlined.tsx":{type:"FILE",value:e(90283).Z},"./VolumeUpOutlined.tsx":{type:"FILE",value:e(44367).Z},"./SuccessFilled.tsx":{type:"FILE",value:e(74703).Z},"./TipsOutlined.tsx":{type:"FILE",value:e(2924).Z},"./TrendingCircleOutlined.tsx":{type:"FILE",value:e(77369).Z},"./ToTopOutlined.tsx":{type:"FILE",value:e(76512).Z},"./ThumbUpFilled.tsx":{type:"FILE",value:e(61552).Z},"../utils/createSvgIcon.tsx":{type:"FILE",value:e(67183).Z},"../components/SvgIcon.tsx":{type:"FILE",value:e(49520).Z},"./SvgIcon.tsx":{type:"FILE",value:e(60882).Z},clsx:{type:"NPM",value:"1.2.1"},"./SvgIcon.less":{type:"FILE",value:e(31362).Z}},entry:"index.tsx"},context:{react:e(67294),"./index.less":e(82959),"../components.ts":e(62552),"./AccessTimeCircleFilled.tsx":e(71289),"./AccessTimeCircleOutlined.tsx":e(6282),"./AddCircleOutlined.tsx":e(49566),"./AddCircleFilled.tsx":e(21928),"./AddCircleFilledBold.tsx":e(14304),"./Add.tsx":e(87302),"./AlertCircleFilledBold.tsx":e(64161),"./AccessTimeCircleFilledBold.tsx":e(28507),"./AliFishOutlined.tsx":e(60817),"./AlarmOutlined.tsx":e(91376),"./ArrowUpCircleOutlined.tsx":e(63267),"./BlockCircleFilled.tsx":e(55455),"./ArrowUpward.tsx":e(21671),"./AliSweetOutlined.tsx":e(49007),"./ArrowUpwardLarge.tsx":e(92907),"./AliWangWangFilled.tsx":e(57943),"./AssessmentOutlined.tsx":e(89712),"./AddCouponOutlined.tsx":e(98013),"./AssignmentOutlined.tsx":e(37548),"./AliWangWangOutlined.tsx":e(40129),"./AddLarge.tsx":e(47446),"./AlertCircleOutlined.tsx":e(88906),"./AlignCenterFilled.tsx":e(32682),"./BabyOutlined.tsx":e(49326),"./BankCardFilled.tsx":e(18478),"./ArrowDownward.tsx":e(19301),"./AlertCircleFilled.tsx":e(28350),"./ArrowForward.tsx":e(8240),"./CaretRight.tsx":e(38906),"./BlockCircleOutlined.tsx":e(82130),"./ArrowDownwardLarge.tsx":e(31624),"./BlockCircleOutlinedThin.tsx":e(6274),"./BankCardOutlined.tsx":e(55151),"./ArrowBackwardLarge.tsx":e(92084),"./BogoOutlined.tsx":e(60916),"./ArrowForwardLarge.tsx":e(21910),"./CaretUp.tsx":e(38704),"./CinemaCardOutlined.tsx":e(54401),"./CloseLarge.tsx":e(26559),"./ChatFilled.tsx":e(49430),"./AlignLeftFilled.tsx":e(27776),"./DoubleArrowLeftTwoTone.tsx":e(68168),"./CloudBBOutlined.tsx":e(74367),"./BoltFilled.tsx":e(63783),"./CloudDownloadOutlined.tsx":e(4685),"./CloudUploadOutlined.tsx":e(58865),"./BoltOutlined.tsx":e(13513),"./ChatOutlined.tsx":e(29826),"./CinemaFilled.tsx":e(98518),"./BuildingOutlined.tsx":e(92423),"./AlignRightFilled.tsx":e(32365),"./CodeOutlined.tsx":e(28859),"./CopyOutlined.tsx":e(9414),"./CouponFilled.tsx":e(82362),"./ArrowBackward.tsx":e(84011),"./CheerOutlined.tsx":e(32318),"./CouponOutlined.tsx":e(48234),"./CinemaOutlined.tsx":e(32362),"./GetTicketsOutlined.tsx":e(41156),"./DoubleArrowRightTwoTone.tsx":e(73674),"./CameraOutlined.tsx":e(594),"./CalendarInvisibleOutlined.tsx":e(30214),"./CircleOutlined.tsx":e(26476),"./CardPackageOutlined.tsx":e(30867),"./CaretDown.tsx":e(75076),"./DateOutlined.tsx":e(94047),"./CaretLeft.tsx":e(79665),"./CalendarOutlined.tsx":e(53804),"./DoubleArrowUpTwoTone.tsx":e(18953),"./DoubleCircleOutlined.tsx":e(89957),"./InboxFilled.tsx":e(31384),"./GiftCardOutlined.tsx":e(36036),"./DeleteOutlined.tsx":e(2102),"./DiscussOutlined.tsx":e(19136),"./GiftOutlined.tsx":e(93505),"./DoubleArrowDownTwoTone.tsx":e(96337),"./MoreOutlined.tsx":e(35351),"./MapFilled.tsx":e(25310),"./Close.tsx":e(66114),"./MapOutlined.tsx":e(72431),"./GlassesOutlined.tsx":e(63998),"./EyeFilled.tsx":e(97672),"./FlashlightOnOutlined.tsx":e(66835),"./Down.tsx":e(87250),"./GppGoodFilled.tsx":e(68348),"./EyeOutlined.tsx":e(14762),"./MessageOutlined.tsx":e(35657),"./FlashlightOutlined.tsx":e(88500),"./FemaleOutlined.tsx":e(77115),"./GppGoodOutlined.tsx":e(94984),"./InboxFilledBold.tsx":e(49683),"./FlipOutlined.tsx":e(50568),"./FilterOutlined.tsx":e(87751),"./MicOutlined.tsx":e(54933),"./LightVipOutlined.tsx":e(94247),"./GridViewOutlined.tsx":e(69),"./FollowOutlined.tsx":e(87696),"./FingerprintOutlined.tsx":e(49175),"./FireFilled.tsx":e(10489),"./GripperBarHorizontal.tsx":e(19086),"./FullScreenOutlined.tsx":e(68045),"./MiniContractOutlined.tsx":e(85946),"./ClockOutlined.tsx":e(89577),"./CalendarVisibleOutlined.tsx":e(94079),"./LinkOutlined.tsx":e(59685),"./HeartBroken.tsx":e(81905),"./HeartFilled.tsx":e(45718),"./LuckyMoneyOutlined.tsx":e(20782),"./HistoryOutlined.tsx":e(45226),"./ErrorCircleOutlined.tsx":e(74715),"./HashOutlined.tsx":e(26153),"./Home.tsx":e(98080),"./GripperBarVertical.tsx":e(95157),"./MailOutlined.tsx":e(21808),"./DrinkFilled.tsx":e(44976),"./EditFilled.tsx":e(13793),"./HomeOutlined.tsx":e(52916),"./ExperimentOutlined.tsx":e(88450),"./ExploreCircleFilled.tsx":e(89914),"./ExploreCircleOutlined.tsx":e(34592),"./HourglassOutlined.tsx":e(42175),"./LoadingThreeQuartersOutlined.tsx":e(28169),"./HeartAddOutlined.tsx":e(93679),"./HomeFilled.tsx":e(39062),"./EditOutlined.tsx":e(45076),"./ErrorCircleFilledBold.tsx":e(82247),"./LocationFilled.tsx":e(49286),"./EggOutlined.tsx":e(92283),"./MomentsOutlined.tsx":e(6486),"./MobileOutlined.tsx":e(83038),"./MaleOutlined.tsx":e(2978),"./HeartAddOutlinedBold.tsx":e(15903),"./HelpCircleOutlined.tsx":e(12136),"./MobileFilled.tsx":e(4758),"./ListOutlined.tsx":e(14985),"./More.tsx":e(23677),"./Minus.tsx":e(49071),"./MoonOutlined.tsx":e(76423),"./CameraFilled.tsx":e(30844),"./DrinkOutlined.tsx":e(9794),"./ErrorCircleFilled.tsx":e(89114),"./HeartOutlined.tsx":e(51260),"./HelpCircleFilled.tsx":e(64159),"./LocationOutlined.tsx":e(26210),"./MoreVerticalOutlined.tsx":e(76878),"./MovieAppointmentOutlined.tsx":e(92012),"./HeartMarkedOutlined.tsx":e(66039),"./GetTicketsFilled.tsx":e(96052),"./MovieFilled.tsx":e(72645),"./MovieOutlined.tsx":e(90928),"./NextFilled.tsx":e(18025),"./NoticeOutlined.tsx":e(7076),"./OrdersOutlined.tsx":e(23022),"./NoteOutlined.tsx":e(73838),"./OrderOutlined.tsx":e(18128),"./PasswordOutlined.tsx":e(56464),"./PaperOutlined.tsx":e(72863),"./PageEditOutlined.tsx":e(60367),"./PlayCircleOutlined.tsx":e(11807),"./PhoneFilled.tsx":e(35643),"./QRCodeOutlined.tsx":e(12189),"./PhoneOutlined.tsx":e(33753),"./ReportOutlined.tsx":e(82100),"./PreferentialEventFilled.tsx":e(12867),"./QAFilled.tsx":e(56948),"./PublicWelfareOutlined.tsx":e(14733),"./PictureOutlined.tsx":e(21791),"./QuoteEnd.tsx":e(91737),"./RadioCheckedFilled.tsx":e(35847),"./PlayCircleOutlinedBold.tsx":e(11145),"./ShoppingCartOutlined.tsx":e(75859),"./RMBRefundOutlined.tsx":e(96201),"./RankingOutlined.tsx":e(32177),"./RefreshOutlined.tsx":e(22139),"./Share.tsx":e(84974),"./ShowFilled.tsx":e(22477),"./RMBCircleOutlined.tsx":e(522),"./StarFilled.tsx":e(71542),"./StarFilledSharp.tsx":e(50861),"./StarRoundedFilled.tsx":e(25492),"./SmileOutlined.tsx":e(89932),"./StarOutlined.tsx":e(33072),"./ZoomInOutlined.tsx":e(17008),"./SaveOutlined.tsx":e(81396),"./SuccessCircleFilled.tsx":e(76487),"./QuoteStart.tsx":e(42796),"./SuccessCircleFilledBold.tsx":e(18102),"./Sort.tsx":e(82085),"./ScanOutlined.tsx":e(35708),"./SmileFilled.tsx":e(81392),"./VolumeMuteFilled.tsx":e(53568),"./SearchGapOutlined.tsx":e(86019),"./ShowOutlined.tsx":e(29139),"./StoreFilled.tsx":e(53418),"./UserFollowedOutlined.tsx":e(40583),"./VipFilled.tsx":e(4228),"./VipOutlined.tsx":e(25662),"./VolumeDownFilled.tsx":e(80214),"./SearchOutlined.tsx":e(35511),"./VerifiedFilled.tsx":e(49423),"./TripleVerticalLine.tsx":e(80824),"./SettingsOutlined.tsx":e(82774),"./VideoOutlined.tsx":e(65965),"./SevenDayCalendar.tsx":e(26833),"./TicketFilled.tsx":e(72961),"./VipCardFilled.tsx":e(18521),"./TaoTicketsLogo.tsx":e(72764),"./StarCircleOutlined.tsx":e(99312),"./Up.tsx":e(64387),"./SuccessCircleOutlined.tsx":e(44274),"./ThumbUpOutlined.tsx":e(60823),"./VolumeUpFilled.tsx":e(8795),"./TaoPiaoPiaoLogo.tsx":e(76840),"./WeiBoOutlined.tsx":e(40308),"./WeChatOutlined.tsx":e(73533),"./VolumeMuteOutlined.tsx":e(75098),"./TicketMachineOutlined.tsx":e(9726),"./SunOutlined.tsx":e(72888),"./SuccessFilledBold.tsx":e(39674),"./TicketOutlined.tsx":e(41008),"./XiaMiCircleOutlined.tsx":e(19397),"./TopicFilled.tsx":e(23929),"./TrendingCircleFilled.tsx":e(94466),"./TopicOutlined.tsx":e(18790),"./YouKuVipCircleOutlined.tsx":e(30478),"./WifiOutlined.tsx":e(91174),"./VolumeUpOutlined.tsx":e(38989),"./SuccessFilled.tsx":e(26205),"./TipsOutlined.tsx":e(89787),"./TrendingCircleOutlined.tsx":e(21912),"./ToTopOutlined.tsx":e(73149),"./ThumbUpFilled.tsx":e(62251),"../utils/createSvgIcon.tsx":e(66206),"../components/SvgIcon.tsx":e(37104),"./SvgIcon.tsx":e(71661),clsx:e(86010),"./SvgIcon.less":e(75632)},renderOpts:{compile:function(){var p=v()(s()().mark(function d(){var r,a=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function m(){return p.apply(this,arguments)}return m}()}}}},37104:function(g,u,e){"use strict";e.r(u),e.d(u,{default:function(){return b.default}});var b=e(71661)},61915:function(g,u,e){"use strict";e.r(u),e.d(u,{default:function(){return me}});var b=60,s=b*60,A=s*24,v=A*7,S=1e3,x=b*S,p=s*S,m=A*S,d=v*S,r="millisecond",a="second",l="minute",n="hour",o="day",t="week",c="month",i="quarter",I="year",f="date",h="YYYY-MM-DDTHH:mm:ssZ",y="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,L={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var B=["th","st","nd","rd"],V=R%100;return"["+R+(B[(V-20)%10]||B[V]||B[0])+"]"}},C=function(R,B,V){var F=String(R);return!F||F.length>=B?R:""+Array(B+1-F.length).join(V)+R},P=function(R){var B=-R.utcOffset(),V=Math.abs(B),F=Math.floor(V/60),H=V%60;return(B<=0?"+":"-")+C(F,2,"0")+":"+C(H,2,"0")},z=function k(R,B){if(R.date()<B.date())return-k(B,R);var V=(B.year()-R.year())*12+(B.month()-R.month()),F=R.clone().add(V,c),H=B-F<0,U=R.clone().add(V+(H?-1:1),c);return+(-(V+(B-F)/(H?F-U:U-F))||0)},M=function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},D=function(R){var B={M:c,y:I,w:t,d:o,D:f,h:n,m:l,s:a,ms:r,Q:i};return B[R]||String(R||"").toLowerCase().replace(/s$/,"")},T=function(R){return R===void 0},$={s:C,z:P,m:z,a:M,p:D,u:T},j="en",Z={};Z[j]=L;var X="$isDayjsObject",q=function(R){return R instanceof ce||!!(R&&R[X])},_=function k(R,B,V){var F;if(!R)return j;if(typeof R=="string"){var H=R.toLowerCase();Z[H]&&(F=H),B&&(Z[H]=B,F=H);var U=R.split("-");if(!F&&U.length>1)return k(U[0])}else{var W=R.name;Z[W]=R,F=W}return!V&&F&&(j=F),F||!V&&j},K=function(R,B){if(q(R))return R.clone();var V=typeof B=="object"?B:{};return V.date=R,V.args=arguments,new ce(V)},J=function(R,B){return K(R,{locale:B.$L,utc:B.$u,x:B.$x,$offset:B.$offset})},N=$;N.l=_,N.i=q,N.w=J;var pe=function(R){var B=R.date,V=R.utc;if(B===null)return new Date(NaN);if(N.u(B))return new Date;if(B instanceof Date)return new Date(B);if(typeof B=="string"&&!/Z$/i.test(B)){var F=B.match(E);if(F){var H=F[2]-1||0,U=(F[7]||"0").substring(0,3);return V?new Date(Date.UTC(F[1],H,F[3]||1,F[4]||0,F[5]||0,F[6]||0,U)):new Date(F[1],H,F[3]||1,F[4]||0,F[5]||0,F[6]||0,U)}}return new Date(B)},ce=function(){function k(B){this.$L=_(B.locale,null,!0),this.parse(B),this.$x=this.$x||B.x||{},this[X]=!0}var R=k.prototype;return R.parse=function(V){this.$d=pe(V),this.init()},R.init=function(){var V=this.$d;this.$y=V.getFullYear(),this.$M=V.getMonth(),this.$D=V.getDate(),this.$W=V.getDay(),this.$H=V.getHours(),this.$m=V.getMinutes(),this.$s=V.getSeconds(),this.$ms=V.getMilliseconds()},R.$utils=function(){return N},R.isValid=function(){return this.$d.toString()!==y},R.isSame=function(V,F){var H=K(V);return this.startOf(F)<=H&&H<=this.endOf(F)},R.isAfter=function(V,F){return K(V)<this.startOf(F)},R.isBefore=function(V,F){return this.endOf(F)<K(V)},R.$g=function(V,F,H){return N.u(V)?this[F]:this.set(H,V)},R.unix=function(){return Math.floor(this.valueOf()/1e3)},R.valueOf=function(){return this.$d.getTime()},R.startOf=function(V,F){var H=this,U=N.u(F)?!0:F,W=N.p(V),G=function(le,ne){var ee=N.w(H.$u?Date.UTC(H.$y,ne,le):new Date(H.$y,ne,le),H);return U?ee:ee.endOf(o)},w=function(le,ne){var ee=[0,0,0,0],oe=[23,59,59,999];return N.w(H.toDate()[le].apply(H.toDate("s"),(U?ee:oe).slice(ne)),H)},Q=this.$W,te=this.$M,Y=this.$D,ae="set"+(this.$u?"UTC":"");switch(W){case I:return U?G(1,0):G(31,11);case c:return U?G(1,te):G(0,te+1);case t:{var re=this.$locale().weekStart||0,de=(Q<re?Q+7:Q)-re;return G(U?Y-de:Y+(6-de),te)}case o:case f:return w(ae+"Hours",0);case n:return w(ae+"Minutes",1);case l:return w(ae+"Seconds",2);case a:return w(ae+"Milliseconds",3);default:return this.clone()}},R.endOf=function(V){return this.startOf(V,!1)},R.$set=function(V,F){var H,U=N.p(V),W="set"+(this.$u?"UTC":""),G=(H={},H[o]=W+"Date",H[f]=W+"Date",H[c]=W+"Month",H[I]=W+"FullYear",H[n]=W+"Hours",H[l]=W+"Minutes",H[a]=W+"Seconds",H[r]=W+"Milliseconds",H)[U],w=U===o?this.$D+(F-this.$W):F;if(U===c||U===I){var Q=this.clone().set(f,1);Q.$d[G](w),Q.init(),this.$d=Q.set(f,Math.min(this.$D,Q.daysInMonth())).$d}else G&&this.$d[G](w);return this.init(),this},R.set=function(V,F){return this.clone().$set(V,F)},R.get=function(V){return this[N.p(V)]()},R.add=function(V,F){var H=this,U;V=Number(V);var W=N.p(F),G=function(Y){var ae=K(H);return N.w(ae.date(ae.date()+Math.round(Y*V)),H)};if(W===c)return this.set(c,this.$M+V);if(W===I)return this.set(I,this.$y+V);if(W===o)return G(1);if(W===t)return G(7);var w=(U={},U[l]=x,U[n]=p,U[a]=S,U)[W]||1,Q=this.$d.getTime()+V*w;return N.w(Q,this)},R.subtract=function(V,F){return this.add(V*-1,F)},R.format=function(V){var F=this,H=this.$locale();if(!this.isValid())return H.invalidDate||y;var U=V||h,W=N.z(this),G=this.$H,w=this.$m,Q=this.$M,te=H.weekdays,Y=H.months,ae=H.meridiem,re=function(ee,oe,ue,Ie){return ee&&(ee[oe]||ee(F,U))||ue[oe].slice(0,Ie)},de=function(ee){return N.s(G%12||12,ee,"0")},se=ae||function(ne,ee,oe){var ue=ne<12?"AM":"PM";return oe?ue.toLowerCase():ue},le=function(ee){switch(ee){case"YY":return String(F.$y).slice(-2);case"YYYY":return N.s(F.$y,4,"0");case"M":return Q+1;case"MM":return N.s(Q+1,2,"0");case"MMM":return re(H.monthsShort,Q,Y,3);case"MMMM":return re(Y,Q);case"D":return F.$D;case"DD":return N.s(F.$D,2,"0");case"d":return String(F.$W);case"dd":return re(H.weekdaysMin,F.$W,te,2);case"ddd":return re(H.weekdaysShort,F.$W,te,3);case"dddd":return te[F.$W];case"H":return String(G);case"HH":return N.s(G,2,"0");case"h":return de(1);case"hh":return de(2);case"a":return se(G,w,!0);case"A":return se(G,w,!1);case"m":return String(w);case"mm":return N.s(w,2,"0");case"s":return String(F.$s);case"ss":return N.s(F.$s,2,"0");case"SSS":return N.s(F.$ms,3,"0");case"Z":return W;default:break}return null};return U.replace(O,function(ne,ee){return ee||le(ne)||W.replace(":","")})},R.utcOffset=function(){return-Math.round(this.$d.getTimezoneOffset()/15)*15},R.diff=function(V,F,H){var U=this,W=N.p(F),G=K(V),w=(G.utcOffset()-this.utcOffset())*x,Q=this-G,te=function(){return N.m(U,G)},Y;switch(W){case I:Y=te()/12;break;case c:Y=te();break;case i:Y=te()/3;break;case t:Y=(Q-w)/d;break;case o:Y=(Q-w)/m;break;case n:Y=Q/p;break;case l:Y=Q/x;break;case a:Y=Q/S;break;default:Y=Q;break}return H?Y:N.a(Y)},R.daysInMonth=function(){return this.endOf(c).$D},R.$locale=function(){return Z[this.$L]},R.locale=function(V,F){if(!V)return this.$L;var H=this.clone(),U=_(V,F,!0);return U&&(H.$L=U),H},R.clone=function(){return N.w(this.$d,this)},R.toDate=function(){return new Date(this.valueOf())},R.toJSON=function(){return this.isValid()?this.toISOString():null},R.toISOString=function(){return this.$d.toISOString()},R.toString=function(){return this.$d.toUTCString()},k}(),ie=ce.prototype;K.prototype=ie,[["$ms",r],["$s",a],["$m",l],["$H",n],["$W",o],["$M",c],["$y",I],["$D",f]].forEach(function(k){ie[k[1]]=function(R){return this.$g(R,k[0],k[1])}}),K.extend=function(k,R){return k.$i||(k(R,ce,K),k.$i=!0),K},K.locale=_,K.isDayjs=q,K.unix=function(k){return K(k*1e3)},K.en=Z[j],K.Ls=Z,K.p={};var me=K},81997:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u4ECE\u5E95\u90E8\u5F39\u51FA\u7684\u52A8\u4F5C\u83DC\u5355\u9762\u677F\u3002\u5305\u542B\u4E0E\u5F53\u524D\u60C5\u5883\u76F8\u5173\u7684\u591A\u4E2A\u9009\u9879\uFF0C\u8BA9\u7528\u6237\u5728\u4E0D\u79BB\u573A\u7684\u60C5\u51B5\u4E0B\u5B8C\u6210\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"ActionSheet",paraId:1,tocIndex:2},{value:" \u9ED8\u8BA4\u5173\u95ED\uFF0C\u901A\u8FC7",paraId:1,tocIndex:2},{value:"open",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u4ECE\u5E95\u90E8\u5F39\u51FA\uFF0C\u901A\u8FC7\u5D4C\u5957",paraId:1,tocIndex:2},{value:"ActionSheetItem",paraId:1,tocIndex:2},{value:"\u5B8C\u6210\u6BCF\u4E2A\u9009\u9879\u7684\u6E32\u67D3\u3002",paraId:1,tocIndex:2},{value:"\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E",paraId:2,tocIndex:3},{value:"cancelText",paraId:2,tocIndex:3},{value:"\u589E\u52A0\u5E95\u90E8\u53D6\u6D88\u6309\u94AE\uFF0C\u70B9\u51FB\u4F1A\u89E6\u53D1 ",paraId:2,tocIndex:3},{value:"onClose",paraId:2,tocIndex:3},{value:" \u4E8B\u4EF6\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7\u8BBE\u7F6E",paraId:3,tocIndex:4},{value:"extra",paraId:3,tocIndex:4},{value:" \u53EF\u4EE5\u5728\u9876\u90E8\u589E\u52A0\u989D\u5916\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u4EC5\u5C55\u793A\u4E0D\u53EF\u70B9\u51FB",paraId:3,tocIndex:4},{value:"\u901A\u8FC7\u7ED9 ",paraId:4,tocIndex:5},{value:"ActionSheetItem",paraId:4,tocIndex:5},{value:" \u8BBE\u7F6E",paraId:4,tocIndex:5},{value:"disabled",paraId:4,tocIndex:5},{value:"\u53EF\u4EE5\u4F7F\u8BE5\u9009\u9879\u4E0D\u53EF\u70B9\u51FB\uFF0C\u8BBE\u7F6E",paraId:4,tocIndex:5},{value:"color",paraId:4,tocIndex:5},{value:"\u53EF\u4EE5\u8BBE\u7F6E\u8BE5\u9009\u62E9\u7684\u4E3B\u9898\uFF0C\u4F8B\u5982\u5371\u9669\u64CD\u4F5C\u901A\u8FC7 color=danger \u53EF\u4EE5\u63D0\u793A\u7528\u6237\u8C28\u614E\u64CD\u4F5C",paraId:4,tocIndex:5},{value:"\u901A\u8FC7\u7ED9 ",paraId:5,tocIndex:6},{value:"ActionSheetItem",paraId:5,tocIndex:6},{value:" \u8BBE\u7F6E",paraId:5,tocIndex:6},{value:"description",paraId:5,tocIndex:6},{value:"\u53EF\u4EE5\u589E\u52A0\u6BCF\u4E2A\u9009\u9879\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u4F5C\u4E3A\u8BE5\u9009\u9879\u7684\u989D\u5916\u8865\u5145\u4FE1\u606F",paraId:5,tocIndex:6},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"cancelText",paraId:6,tocIndex:8},{value:"\u53D6\u6D88\u6309\u94AE\u5185\u5BB9\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A\u7A7A\u5219\u4E0D\u663E\u793A\u53D6\u6D88\u6309\u94AE",paraId:6,tocIndex:8},{value:"React.ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"extra",paraId:6,tocIndex:8},{value:"\u9876\u90E8\u989D\u5916\u7684\u5185\u5BB9\u5C55\u793A",paraId:6,tocIndex:8},{value:"React.ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"onSelect",paraId:6,tocIndex:8},{value:"\u5B50\u9879\u7684\u70B9\u51FB\u9009\u62E9\u56DE\u8C03",paraId:6,tocIndex:8},{value:"(event: React.MouseEvent ,data?: { index: string | number }) => void;",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"onClose",paraId:6,tocIndex:8},{value:"\u5173\u95ED\u56DE\u8C03",paraId:6,tocIndex:8},{value:"ModalProps['onClose']",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"ActionSheet",paraId:7,tocIndex:8},{value:" \u7EE7\u627F\u81EA ",paraId:7,tocIndex:8},{value:"Drawer",paraId:7,tocIndex:8},{value:" \u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:7,tocIndex:8},{value:"Drawer API",paraId:8,tocIndex:8},{value:"\u5C5E\u6027",paraId:9,tocIndex:9},{value:"\u8BF4\u660E",paraId:9,tocIndex:9},{value:"\u7C7B\u578B",paraId:9,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:9},{value:"description",paraId:9,tocIndex:9},{value:"\u63CF\u8FF0\u5185\u5BB9",paraId:9,tocIndex:9},{value:"React.ReactNode",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"disabled",paraId:9,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"color",paraId:9,tocIndex:9},{value:"\u989C\u8272",paraId:9,tocIndex:9},{value:"primary",paraId:9,tocIndex:9},{value:" | ",paraId:9,tocIndex:9},{value:"info",paraId:9,tocIndex:9},{value:" | ",paraId:9,tocIndex:9},{value:"success",paraId:9,tocIndex:9},{value:" | ",paraId:9,tocIndex:9},{value:"warning",paraId:9,tocIndex:9},{value:" | ",paraId:9,tocIndex:9},{value:"danger",paraId:9,tocIndex:9},{value:" | ",paraId:9,tocIndex:9},{value:"default",paraId:9,tocIndex:9},{value:"default",paraId:9,tocIndex:9},{value:"bold",paraId:9,tocIndex:9},{value:"\u662F\u5426\u52A0\u7C97",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"index",paraId:9,tocIndex:9},{value:"\u7D22\u5F15\u6807\u8BB0",paraId:9,tocIndex:9},{value:"string | number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"onClick",paraId:9,tocIndex:9},{value:"\u70B9\u51FB\u9009\u62E9\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(event: React.MouseEvent ,data?: { index: string | number }) => void;",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"\u5C5E\u6027",paraId:10,tocIndex:10},{value:"\u8BF4\u660E",paraId:10,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:10},{value:"--font-size",paraId:10,tocIndex:10},{value:"ActionSheetItem \u5B57\u4F53\u5927\u5C0F",paraId:10,tocIndex:10},{value:"--bui-title-size-2",paraId:10,tocIndex:10},{value:"--color",paraId:10,tocIndex:10},{value:"ActionSheetItem \u5185\u5BB9\u989C\u8272",paraId:10,tocIndex:10},{value:"--bui-color-fg-default",paraId:10,tocIndex:10}]},60089:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"Alert \u7EC4\u4EF6\uFF0C\u5E38\u7528\u4E8E\u5C55\u793A\u7B80\u77ED\u7684\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\uFF0C\u5E38\u7528\u4E8E\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u63D0\u793A\u6216\u8005\u6210\u529F\u63D0\u793A\u7B49\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"Alert \u7EC4\u4EF6\u53EF\u901A\u8FC7\u4F7F\u7528 ",paraId:1,tocIndex:2},{value:"children",paraId:1,tocIndex:2},{value:" \u8BBE\u7F6E Alert \u7EC4\u4EF6\u5185\u5BB9\u3002",paraId:1,tocIndex:2},{value:"icon",paraId:2,tocIndex:3},{value:` \u5141\u8BB8\u60A8\u5C06\u56FE\u6807\u6DFB\u52A0\u5230 Alert \u7EC4\u4EF6\u5934\u90E8\uFF0C\u8FD9\u5C06\u8986\u76D6 Alert \u9ED8\u8BA4\u56FE\u6807\u3002
\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E `,paraId:2,tocIndex:3},{value:"icon",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:" \u6765\u5220\u9664 Alert \u9ED8\u8BA4\u56FE\u6807\u3002",paraId:2,tocIndex:3},{value:"Alert \u7EC4\u4EF6\u63D0\u4F9B\u4E86 5 \u79CD\u989C\u8272\u4E3B\u9898\uFF1A",paraId:3,tocIndex:5},{value:"warning",paraId:3,tocIndex:5},{value:"\u3001",paraId:3,tocIndex:5},{value:"success",paraId:3,tocIndex:5},{value:"\u3001 ",paraId:3,tocIndex:5},{value:"error",paraId:3,tocIndex:5},{value:"\u3001",paraId:3,tocIndex:5},{value:"info",paraId:3,tocIndex:5},{value:" \u3001",paraId:3,tocIndex:5},{value:"primary",paraId:3,tocIndex:5},{value:"\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7 ",paraId:3,tocIndex:5},{value:"color",paraId:3,tocIndex:5},{value:` \u5C5E\u6027\u8BBE\u7F6E\u7EC4\u4EF6\u4E3B\u9898\u8272\u3002
color \u5C5E\u6027\u9ED8\u8BA4\u503C\uFF1A`,paraId:3,tocIndex:5},{value:"primary",paraId:3,tocIndex:5},{value:"\u3002",paraId:3,tocIndex:5},{value:"Alert \u7EC4\u4EF6\u652F\u6301\u4E24\u79CD\u6A21\u5F0F\uFF1A\u586B\u5145",paraId:4,tocIndex:6},{value:"standard",paraId:4,tocIndex:6},{value:"\u3001\u8F6E\u5ED3",paraId:4,tocIndex:6},{value:"outlined",paraId:4,tocIndex:6},{value:`\u3002
\u60A8\u53EF\u4EE5\u901A\u8FC7 `,paraId:4,tocIndex:6},{value:"variant",paraId:4,tocIndex:6},{value:` \u5C5E\u6027\u8BBE\u7F6E\u7EC4\u4EF6\u6A21\u5F0F\u3002
`,paraId:4,tocIndex:6},{value:"variant",paraId:4,tocIndex:6},{value:" \u5C5E\u6027\u9ED8\u8BA4\u503C\uFF1A",paraId:4,tocIndex:6},{value:"standard",paraId:4,tocIndex:6},{value:"\u3002",paraId:4,tocIndex:6},{value:"Alert \u7EC4\u4EF6\u63D0\u4F9B\u4E86 ",paraId:5,tocIndex:9},{value:"action",paraId:5,tocIndex:9},{value:` \u5C5E\u6027\uFF0C\u7528\u4E8E\u5173\u95ED\u6216\u64A4\u9500 Alert\u3002
Alert \u63D0\u4F9B\u4E86 onClose \u56DE\u8C03\uFF0C\u5982\u679C\u4E1A\u52A1\u914D\u7F6E\u4E86 onClose \u5E76\u4E14 action \u6CA1\u6709\u8BBE\u7F6E\u5C5E\u6027\uFF0CAlert \u7EC4\u4EF6\u5C3E\u90E8\u4F1A\u663E\u793A\u4E00\u4E2A\u5173\u95ED\u56FE\u6807\u3002
`,paraId:5,tocIndex:9},{value:"action",paraId:5,tocIndex:9},{value:" \u5C5E\u6027\u53EF\u7528\u4E8E\u8986\u76D6\u8FD9\u4E2A\u5173\u95ED\u56FE\u6807\uFF0C\u81EA\u5B9A\u4E49\u64CD\u4F5C\u533A\u3002",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u8BF4\u660E",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"color",paraId:6,tocIndex:11},{value:"\u8B66\u544A\u6846\u4E3B\u9898\u8272",paraId:6,tocIndex:11},{value:"primary",paraId:6,tocIndex:11},{value:" \uFF5C ",paraId:6,tocIndex:11},{value:"info",paraId:6,tocIndex:11},{value:" \uFF5C ",paraId:6,tocIndex:11},{value:"success",paraId:6,tocIndex:11},{value:" \uFF5C ",paraId:6,tocIndex:11},{value:"warning",paraId:6,tocIndex:11},{value:" \uFF5C ",paraId:6,tocIndex:11},{value:"danger",paraId:6,tocIndex:11},{value:"primary",paraId:6,tocIndex:11},{value:"icon",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0Cicon \u4E3A false \u65F6\u9690\u85CF\u56FE\u6807",paraId:6,tocIndex:11},{value:"React.ReactNode \uFF5C boolean",paraId:6,tocIndex:11},{value:"true",paraId:6,tocIndex:11},{value:"action",paraId:6,tocIndex:11},{value:"\u8B66\u544A\u63D0\u793A\u64CD\u4F5C\u533A",paraId:6,tocIndex:11},{value:"React.ReactNode",paraId:6,tocIndex:11},{value:"-",paraId:6,tocIndex:11},{value:"variant",paraId:6,tocIndex:11},{value:"\u8B66\u544A\u6A21\u5F0F",paraId:6,tocIndex:11},{value:"standard",paraId:6,tocIndex:11},{value:"\uFF5C",paraId:6,tocIndex:11},{value:"outlined",paraId:6,tocIndex:11},{value:"standard",paraId:6,tocIndex:11},{value:"onClose",paraId:6,tocIndex:11},{value:"\u5173\u95ED\u56DE\u8C03",paraId:6,tocIndex:11},{value:"(e?: SyntheticEvent, data?: any) => void;",paraId:6,tocIndex:11},{value:"-",paraId:6,tocIndex:11}]},84526:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:`\u7528\u6765\u5C55\u793A\u7528\u6237\u5934\u50CF\u6216\u8005\u4E8B\u7269\uFF0C\u652F\u6301\u5C55\u793A\u56FE\u7247\u3001\u6587\u5B57\u3001\u56FE\u6807\u7B49\u3002
`,paraId:0,tocIndex:0},{value:"Avatar",paraId:0,tocIndex:0},{value:" \u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Image",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6\u8FDB\u884C\u5C01\u88C5\uFF0C",paraId:0,tocIndex:0},{value:"Image",paraId:0,tocIndex:0},{value:" \u5E38\u7528\u7684\u5C5E\u6027\uFF0CAvatar \u540C\u6837\u652F\u6301\u3002",paraId:0,tocIndex:0},{value:"\u5934\u50CF\u7EC4\u4EF6\u901A\u8FC7",paraId:1,tocIndex:2},{value:"src",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u4F20\u9012\u56FE\u7247\u5730\u5740\u6765\u521B\u5EFA\u56FE\u50CF\u5934\u50CF\u3002",paraId:1,tocIndex:2},{value:"\u9664\u4E86\u56FE\u7247\u5934\u50CF\u5916\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u521B\u5EFA\u7B80\u5355\u5B57\u7B26\u578B\u5934\u50CF\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7",paraId:3,tocIndex:4},{value:"children",paraId:3,tocIndex:4},{value:"\u8FD8\u53EF\u4EE5\u521B\u5EFA\u56FE\u6807\u7B49\u81EA\u5B9A\u4E49\u5934\u50CF\u3002",paraId:3,tocIndex:4},{value:"Avatar \u7EC4\u4EF6\u63D0\u4F9B\u4E24\u79CD\u5934\u50CF\u6A21\u5F0F\uFF1A\u5706\u5F62",paraId:4,tocIndex:5},{value:"rounded",paraId:4,tocIndex:5},{value:" \u3001\u65B9\u5F62",paraId:4,tocIndex:5},{value:"square",paraId:4,tocIndex:5},{value:"\uFF0C \u60A8\u53EF\u4EE5\u4F7F\u7528",paraId:4,tocIndex:5},{value:"variant",paraId:4,tocIndex:5},{value:`\u8BBE\u7F6E\u5BF9\u5E94\u7684\u6A21\u5F0F\u3002
variant \u9ED8\u8BA4\u503C\u4E3A\uFF1A`,paraId:4,tocIndex:5},{value:"rounded",paraId:4,tocIndex:5},{value:"\u3002",paraId:4,tocIndex:5},{value:"Avatar",paraId:5,tocIndex:6},{value:"\u63D0\u4F9B",paraId:5,tocIndex:6},{value:"xsmall",paraId:5,tocIndex:6},{value:"\u3001 ",paraId:5,tocIndex:6},{value:"small",paraId:5,tocIndex:6},{value:"\u3001 ",paraId:5,tocIndex:6},{value:"medium",paraId:5,tocIndex:6},{value:"\u3001 ",paraId:5,tocIndex:6},{value:"large",paraId:5,tocIndex:6},{value:" \u7B49 4 \u79CD\u5C3A\u5BF8\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:5,tocIndex:6},{value:"size",paraId:5,tocIndex:6},{value:`\u8BBE\u7F6E\u5BF9\u5E94\u5C3A\u5BF8\u3002
size \u9ED8\u8BA4\u5C3A\u5BF8\u4E3A\uFF1A `,paraId:5,tocIndex:6},{value:"medium",paraId:5,tocIndex:6},{value:"\u3002",paraId:5,tocIndex:6},{value:"\u9664\u4E86\u63D0\u4F9B\u5355\u4E2A\u5934\u50CF\uFF0C\u6211\u4EEC\u8FD8\u63D0\u4F9B\u7EC4\u5408\u5934\u50CF\uFF0C\u901A\u8FC7",paraId:6,tocIndex:7},{value:"AvatarGroup",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"Avatar",paraId:6,tocIndex:7},{value:"\u7EC4\u5408\u4F7F\u7528\u3002",paraId:6,tocIndex:7},{value:"AvatarGroup \u7EC4\u4EF6\u63D0\u4F9B\u4E24\u79CD\u5934\u50CF\u6A21\u5F0F\uFF1A\u5706\u5F62",paraId:7,tocIndex:8},{value:"rounded",paraId:7,tocIndex:8},{value:" \u3001\u65B9\u5F62",paraId:7,tocIndex:8},{value:"square",paraId:7,tocIndex:8},{value:"\uFF0C \u60A8\u53EF\u4EE5\u4F7F\u7528",paraId:7,tocIndex:8},{value:"variant",paraId:7,tocIndex:8},{value:`\u8BBE\u7F6E\u5BF9\u5E94\u7684\u6A21\u5F0F\u3002
variant \u9ED8\u8BA4\u503C\u4E3A\uFF1A`,paraId:7,tocIndex:8},{value:"rounded",paraId:7,tocIndex:8},{value:"\u3002",paraId:7,tocIndex:8},{value:"AvatarGroup \u7EC4\u4EF6\u63D0\u4F9B",paraId:8,tocIndex:9},{value:"maxCount",paraId:8,tocIndex:9},{value:"\u5C5E\u6027\u6765\u9650\u5236\u663E\u793A\u7684\u5934\u50CF\u6570\u91CF\uFF0C\u5E76\u81EA\u52A8\u8BA1\u7B97\u672A\u663E\u793A\u7684\u5934\u50CF\u6570\u91CF\u3002",paraId:8,tocIndex:9},{value:"AvatarGroup \u7EC4\u4EF6\u63D0\u4F9B",paraId:9,tocIndex:10},{value:"orientation",paraId:9,tocIndex:10},{value:`\u5C5E\u6027\u6765\u63A7\u5236\u5934\u50CF\u671D\u5411\u3002
orientation \u9ED8\u8BA4\u4E3A\uFF1A`,paraId:9,tocIndex:10},{value:"left",paraId:9,tocIndex:10},{value:"\u3002",paraId:9,tocIndex:10},{value:"AvatarGroup \u7EC4\u4EF6\u63D0\u4F9B",paraId:10,tocIndex:11},{value:"spacing",paraId:10,tocIndex:11},{value:"\u5C5E\u6027\u6765\u63A7\u5236\u5934\u50CF\u95F4\u8DDD\u3002",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"src",paraId:11,tocIndex:13},{value:"\u56FE\u50CF\u5730\u5740",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"alt",paraId:11,tocIndex:13},{value:"\u56FE\u50CF\u65E0\u6CD5\u663E\u793A\u65F6\u7684\u66FF\u4EE3\u6587\u672C",paraId:11,tocIndex:13},{value:"React.ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"lazy",paraId:11,tocIndex:13},{value:"\u61D2\u52A0\u8F7D",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"placeholder",paraId:11,tocIndex:13},{value:"\u52A0\u8F7D\u65F6\u5360\u4F4D",paraId:11,tocIndex:13},{value:"React.ReactNode \uFF5C boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"ImageProps",paraId:11,tocIndex:13},{value:"\u900F\u4F20 Image \u5C5E\u6027",paraId:11,tocIndex:13},{value:"ImageProps",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"variant",paraId:11,tocIndex:13},{value:"\u5934\u50CF\u5F62\u72B6",paraId:11,tocIndex:13},{value:"rounded",paraId:11,tocIndex:13},{value:"\uFF5C",paraId:11,tocIndex:13},{value:"square",paraId:11,tocIndex:13},{value:"rounded",paraId:11,tocIndex:13},{value:"size",paraId:11,tocIndex:13},{value:"\u5934\u50CF\u5927\u5C0F",paraId:11,tocIndex:13},{value:"large",paraId:11,tocIndex:13},{value:"\uFF5C",paraId:11,tocIndex:13},{value:"medium",paraId:11,tocIndex:13},{value:"\uFF5C",paraId:11,tocIndex:13},{value:"small",paraId:11,tocIndex:13},{value:" \uFF5C",paraId:11,tocIndex:13},{value:"xsmall",paraId:11,tocIndex:13},{value:"medium",paraId:11,tocIndex:13},{value:"onError",paraId:11,tocIndex:13},{value:"\u56FE\u50CF\u5934\u50CF\u52A0\u8F7D\u5931\u8D25\u56DE\u8C03",paraId:11,tocIndex:13},{value:"ReactEventHandler",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onLoad",paraId:11,tocIndex:13},{value:"\u56FE\u50CF\u5934\u50CF\u52A0\u8F7D\u56DE\u8C03",paraId:11,tocIndex:13},{value:"ReactEventHandler",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u5C5E\u6027",paraId:12,tocIndex:14},{value:"\u8BF4\u660E",paraId:12,tocIndex:14},{value:"\u7C7B\u578B",paraId:12,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:14},{value:"maxCount",paraId:12,tocIndex:14},{value:"\u6700\u591A\u53EF\u663E\u793A\u7684\u5934\u50CF\u4E2A\u6570",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"variant",paraId:12,tocIndex:14},{value:"\u5934\u50CF\u5F62\u72B6",paraId:12,tocIndex:14},{value:"rounded",paraId:12,tocIndex:14},{value:" \uFF5C",paraId:12,tocIndex:14},{value:"square",paraId:12,tocIndex:14},{value:"rounded",paraId:12,tocIndex:14},{value:"size",paraId:12,tocIndex:14},{value:"\u5934\u50CF\u5927\u5C0F",paraId:12,tocIndex:14},{value:"large",paraId:12,tocIndex:14},{value:"\uFF5C",paraId:12,tocIndex:14},{value:"medium",paraId:12,tocIndex:14},{value:"\uFF5C",paraId:12,tocIndex:14},{value:"small",paraId:12,tocIndex:14},{value:" \uFF5C",paraId:12,tocIndex:14},{value:"xsmall",paraId:12,tocIndex:14},{value:"medium",paraId:12,tocIndex:14},{value:"spacing",paraId:12,tocIndex:14},{value:"\u5934\u50CF\u95F4\u8DDD",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"orientation",paraId:12,tocIndex:14},{value:"\u5934\u50CF\u671D\u5411",paraId:12,tocIndex:14},{value:"left",paraId:12,tocIndex:14},{value:"\uFF5C",paraId:12,tocIndex:14},{value:"right",paraId:12,tocIndex:14},{value:"right",paraId:12,tocIndex:14}]},17964:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u4F5C\u4E3A",paraId:0,tocIndex:0},{value:"Modal \u5F39\u7A97",paraId:1,tocIndex:0},{value:`\u7684\u4E00\u90E8\u5206\u5B58\u5728\uFF0C\u4F7F\u7528Fade\u5B9E\u73B0\u7684\u5F39\u7A97\u80CC\u666F\u3002
\u901A\u5E38\u6765\u8BF4\uFF0C\u4F60\u5E94\u8BE5\u76F4\u63A5\u4F7F\u7528Modal\u800C\u4E0D\u662F\u8FD9\u4E2A\u7EC4\u4EF6\u3002`,paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"open",paraId:2,tocIndex:5},{value:"\u662F\u5426\u663E\u793A",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"false",paraId:2,tocIndex:5},{value:"invisible",paraId:2,tocIndex:5},{value:"\u662F\u5426\u900F\u660E\u4E0D\u53EF\u89C1\uFF08\u4ECD\u53EF\u70B9\u51FB\uFF09",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"false",paraId:2,tocIndex:5},{value:"transitionDuration",paraId:2,tocIndex:5},{value:"\u6DE1\u5165\u6DE1\u51FA\u65F6\u95F4",paraId:2,tocIndex:5},{value:"number | TransitionProps['timeout']",paraId:2,tocIndex:5}]},48024:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u5728\u5BB9\u5668\u67D0\u4E2A\u89D2\u4E0A\u7684\u4E00\u4E2A\u5FBD\u6807\uFF0C\u901A\u5E38\u7528\u4E8E\u901A\u77E5\u56FE\u6807\u6216\u8005\u5934\u50CF\u53F3\u4E0A\u89D2\u3002",paraId:0,tocIndex:0},{value:"\u7B80\u5355\u7684\u5FBD\u7AE0\uFF0C\u901A\u8FC7",paraId:1,tocIndex:2},{value:"content",paraId:1,tocIndex:2},{value:"\u8BBE\u7F6E\u5FBD\u7AE0\u5185\u5BB9\u3002",paraId:1,tocIndex:2},{value:"Badge",paraId:2,tocIndex:3},{value:"\u63D0\u4F9B 3 \u79CD\u5FBD\u7AE0\u5F62\u72B6\uFF1A",paraId:2,tocIndex:3},{value:"rounded",paraId:2,tocIndex:3},{value:" \u3001",paraId:2,tocIndex:3},{value:"dot",paraId:2,tocIndex:3},{value:"\u3001 ",paraId:2,tocIndex:3},{value:"bubble",paraId:2,tocIndex:3},{value:`\u3002
\u60A8\u53EF\u4EE5\u901A\u8FC7`,paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"\u5C5E\u6027\u6765\u63A7\u5236\u5FBD\u7AE0\u5F62\u72B6\u3002",paraId:2,tocIndex:3},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u5FBD\u7AE0\u8FD8\u63D0\u4F9B 2 \u79CD\u6A21\u5F0F\uFF1A",paraId:3,tocIndex:7},{value:"contained",paraId:3,tocIndex:7},{value:"\u3001",paraId:3,tocIndex:7},{value:"outlined",paraId:3,tocIndex:7},{value:"\u3002",paraId:3,tocIndex:7},{value:"\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:4,tocIndex:10},{value:"maxCount",paraId:4,tocIndex:10},{value:"\u5C5E\u6027\u6765\u9650\u5236\u5FBD\u7AE0\u6570\u503C\u3002",paraId:4,tocIndex:10},{value:"\u6211\u4EEC\u8FD8\u4E3A\u5FBD\u7AE0\u63D0\u4F9B 5 \u79CD\u4E3B\u9898\u8272\uFF1A",paraId:5,tocIndex:11},{value:"danger",paraId:5,tocIndex:11},{value:" \u3001",paraId:5,tocIndex:11},{value:"success",paraId:5,tocIndex:11},{value:"\u3001 ",paraId:5,tocIndex:11},{value:"warning",paraId:5,tocIndex:11},{value:"\u3001 ",paraId:5,tocIndex:11},{value:"info",paraId:5,tocIndex:11},{value:"\u3001 ",paraId:5,tocIndex:11},{value:"primary",paraId:5,tocIndex:11},{value:"\u3002",paraId:5,tocIndex:11},{value:"\u5C5E\u6027",paraId:6,tocIndex:13},{value:"\u8BF4\u660E",paraId:6,tocIndex:13},{value:"\u7C7B\u578B",paraId:6,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:13},{value:"content",paraId:6,tocIndex:13},{value:"\u5FBD\u7AE0\u5185\u5BB9",paraId:6,tocIndex:13},{value:"ReactNode",paraId:6,tocIndex:13},{value:"-",paraId:6,tocIndex:13},{value:"color",paraId:6,tocIndex:13},{value:"\u5FBD\u7AE0\u4E3B\u9898\u8272",paraId:6,tocIndex:13},{value:"primary",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"info",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"success",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"warning",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"danger",paraId:6,tocIndex:13},{value:"primary",paraId:6,tocIndex:13},{value:"maxCount",paraId:6,tocIndex:13},{value:"\u6570\u5B57\u5FBD\u7AE0\u6700\u5927\u503C",paraId:6,tocIndex:13},{value:"number",paraId:6,tocIndex:13},{value:"-",paraId:6,tocIndex:13},{value:"variant",paraId:6,tocIndex:13},{value:"\u5FBD\u7AE0\u7C7B\u578B",paraId:6,tocIndex:13},{value:"contained",paraId:6,tocIndex:13},{value:" \uFF5C",paraId:6,tocIndex:13},{value:"outlined",paraId:6,tocIndex:13},{value:"contained",paraId:6,tocIndex:13},{value:"type",paraId:6,tocIndex:13},{value:"\u5FBD\u7AE0\u5F62\u72B6",paraId:6,tocIndex:13},{value:"dot",paraId:6,tocIndex:13},{value:"\uFF5C",paraId:6,tocIndex:13},{value:"rounded",paraId:6,tocIndex:13},{value:"\uFF5C",paraId:6,tocIndex:13},{value:"bubble",paraId:6,tocIndex:13},{value:"rounded",paraId:6,tocIndex:13}]},75796:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u6309\u94AE\u7528\u4E8E\u89E6\u53D1\u4E00\u4E2A\u64CD\u4F5C\uFF0C\u505A\u51FA\u9009\u62E9\uFF0C\u4F8B\u5982\u63D0\u4EA4\u8868\u5355\uFF0C\u6253\u5F00\u5BF9\u8BDD\u6846\uFF0C\u53D6\u6D88\u64CD\u4F5C\u6216\u6267\u884C\u5220\u9664\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u6309\u94AE\u652F\u6301 ",paraId:1,tocIndex:2},{value:"\u6587\u5B57\u6309\u94AE",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u63CF\u8FB9\u6309\u94AE",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u586B\u5145\u6309\u94AE",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u6D45\u4EAE\u6309\u94AE",paraId:1,tocIndex:2},{value:" \u56DB\u79CD\u5C55\u793A\u5F62\u6001\uFF0C\u9ED8\u8BA4\u662F\u63CF\u8FB9\u6309\u94AE\u3002",paraId:1,tocIndex:2},{value:"\u6587\u5B57\u6309\u94AE",paraId:2,tocIndex:2},{value:": \u76F4\u63A5\u4F7F\u7528\u6587\u5B57\u4F5C\u4E3A\u6309\u94AE\u3002\u662F\u89C6\u89C9\u5438\u5F15\u529B\u6700\u5F31\u7684\u4E00\u4E2A\u6309\u94AE\uFF0C\u901A\u5E38\u51FA\u73B0\u5728\u8868\u683C\u64CD\u4F5C\u680F\u3001\u6807\u9898\u548C\u5B57\u6BB5\u65C1\u7B49\u3002",paraId:2,tocIndex:2},{value:"\u586B\u5145\u6309\u94AE",paraId:3,tocIndex:2},{value:": \u4E00\u822C\u7528\u4E8E\u4E3B\u6309\u94AE\uFF0C\u662F\u7528\u6237\u5728\u6574\u4E2A\u9875\u9762\u9700\u8981\u5173\u6CE8\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u64CD\u4F5C\uFF0C\u5F15\u5BFC\u7528\u6237\u5173\u6CE8\u5E76\u64CD\u4F5C\u3002",paraId:3,tocIndex:2},{value:"\u63CF\u8FB9\u6309\u94AE",paraId:4,tocIndex:2},{value:": \u5E38\u89C1\u767D\u5E95\u52A0\u6587\u5B57\u7684\u5F62\u5F0F\uFF0C\u5728\u89C6\u89C9\u5F3A\u8C03\u7A0B\u5EA6\u4E0A\u5F31\u4E8E\u586B\u5145\u6309\u94AE\uFF0C\u901A\u5E38\u4E0E\u586B\u5145\u6309\u94AE\u642D\u914D\u6210\u7EC4\u4F7F\u7528",paraId:4,tocIndex:2},{value:"\u6D45\u4EAE\u6309\u94AE",paraId:5,tocIndex:2},{value:": \u6D45\u4EAE\u72B6\u6001\u7684\u6587\u5B57\u4E3A\u6309\u94AE\u80CC\u666F\u989C\u8272\uFF0C\u80CC\u666F\u5219\u4E3A\u5BF9\u5E94\u7684\u6D45\u8272\u3002",paraId:5,tocIndex:2},{value:"\u6309\u94AE\u6709\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002",paraId:6,tocIndex:3},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:7,tocIndex:3},{value:"size",paraId:7,tocIndex:3},{value:" \u4E3A large small full \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5927\u3001\u5C0F\u3001\u901A\u680F\u5C3A\u5BF8\u3002\u82E5\u4E0D\u8BBE\u7F6E ",paraId:7,tocIndex:3},{value:"size",paraId:7,tocIndex:3},{value:"\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u4E2D\u7B49\u5C3A\u5BF8\u3002",paraId:7,tocIndex:3},{value:"\u6309\u94AE\u652F\u6301 ",paraId:8,tocIndex:4},{value:"primary",paraId:8,tocIndex:4},{value:"\u3001",paraId:8,tocIndex:4},{value:"success",paraId:8,tocIndex:4},{value:"\u3001",paraId:8,tocIndex:4},{value:"info",paraId:8,tocIndex:4},{value:"\u3001",paraId:8,tocIndex:4},{value:"warning",paraId:8,tocIndex:4},{value:"\u3001",paraId:8,tocIndex:4},{value:"danger",paraId:8,tocIndex:4},{value:"\u3001 ",paraId:8,tocIndex:4},{value:"vip",paraId:8,tocIndex:4},{value:" \u4E3B\u9898\u5B9A\u4E49\u3002\u82E5\u4E0D\u8BBE\u7F6Ecolor\uFF0C\u5219\u9ED8\u8BA4\u4E3A",paraId:8,tocIndex:4},{value:"default",paraId:8,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:9,tocIndex:5},{value:"disabled",paraId:9,tocIndex:5},{value:" \u5C5E\u6027\u6765\u7981\u7528\u6309\u94AE\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u6309\u94AE\u4E0D\u53EF\u70B9\u51FB\u3002",paraId:9,tocIndex:5},{value:"\u56E0\u4E3A\u76F8\u6BD4\u7EAF\u6587\u672C\u6765\u8BF4\u7528\u6237\u5BF9\u56FE\u6807\u66F4\u654F\u611F\uFF0C\u6240\u4EE5\u6709\u4E9B\u65F6\u5019\u4F60\u53EF\u80FD\u5E0C\u671B\u4E3A\u67D0\u4E9B\u6309\u94AE\u8BBE\u7F6E\u56FE\u6807\uFF0C\u4EE5\u589E\u5F3A\u5E94\u7528\u7A0B\u5E8F\u7684\u7528\u6237\u4F53\u9A8C\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u6709\u65E5\u671F\u6309\u94AE\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u65E5\u671F\u56FE\u6807\u5BF9\u5176\u8FDB\u884C\u6807\u8BB0\u3002",paraId:10,tocIndex:6},{value:"startIcon",paraId:10,tocIndex:6},{value:" \u4F4D\u4E8E\u5B50\u5143\u7D20\u7684\u524D\u9762\uFF0C",paraId:10,tocIndex:6},{value:"endIcon",paraId:10,tocIndex:6},{value:" \u4F4D\u4E8E\u5B50\u5143\u7D20\u7684\u540E\u9762\u3002",paraId:10,tocIndex:6},{value:"\u5C5E\u6027",paraId:11,tocIndex:7},{value:"\u8BF4\u660E",paraId:11,tocIndex:7},{value:"\u7C7B\u578B",paraId:11,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:7},{value:"variant",paraId:11,tocIndex:7},{value:"\u6309\u94AE\u7C7B\u578B",paraId:11,tocIndex:7},{value:"outlined",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"text",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"contained",paraId:11,tocIndex:7},{value:" | light",paraId:11,tocIndex:7},{value:"text",paraId:11,tocIndex:7},{value:"color",paraId:11,tocIndex:7},{value:"\u6309\u94AE\u989C\u8272",paraId:11,tocIndex:7},{value:"primary",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"info",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"success",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"warning",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"danger",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"vip",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"default",paraId:11,tocIndex:7},{value:"default",paraId:11,tocIndex:7},{value:"size",paraId:11,tocIndex:7},{value:"\u6309\u94AE\u5927\u5C0F",paraId:11,tocIndex:7},{value:"small",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"medium",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"large",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"full",paraId:11,tocIndex:7},{value:"medium",paraId:11,tocIndex:7},{value:"disabled",paraId:11,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:7},{value:"boolean",paraId:11,tocIndex:7},{value:"false",paraId:11,tocIndex:7},{value:"startIcon",paraId:11,tocIndex:7},{value:"\u5728\u5B50\u5143\u7D20\u524D\u653E\u5728\u7684\u5185\u5BB9",paraId:11,tocIndex:7},{value:"React.ReactNode",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"endIcon",paraId:11,tocIndex:7},{value:"\u5728\u5B50\u5143\u7D20\u540E\u653E\u5728\u7684\u5185\u5BB9",paraId:11,tocIndex:7},{value:"React.ReactNode",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"openType",paraId:11,tocIndex:7},{value:"\u5FAE\u4FE1\u5F00\u653E\u80FD\u529B",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"onClick",paraId:11,tocIndex:7},{value:"\u70B9\u51FB\u6309\u94AE\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:7},{value:"(event: MouseEvent) => void",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"\u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:12,tocIndex:7},{value:"button",paraId:12,tocIndex:7},{value:"\u5C5E\u6027",paraId:13,tocIndex:8},{value:"\u8BF4\u660E",paraId:13,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:8},{value:"\u5168\u5C40\u53D8\u91CF",paraId:13,tocIndex:8},{value:"--border-radius",paraId:13,tocIndex:8},{value:"\u5706\u89D2\u5927\u5C0F",paraId:13,tocIndex:8},{value:"100px",paraId:13,tocIndex:8},{value:"--bui-button-border-radius",paraId:13,tocIndex:8},{value:"--bg-color",paraId:13,tocIndex:8},{value:"\u80CC\u666F\u989C\u8272",paraId:13,tocIndex:8},{value:"--bui-color-neutral-5",paraId:13,tocIndex:8},{value:"--bui-button-default-bg-color",paraId:13,tocIndex:8},{value:"--text-color",paraId:13,tocIndex:8},{value:"\u6587\u5B57\u989C\u8272",paraId:13,tocIndex:8},{value:"--bui-color-fg-muted",paraId:13,tocIndex:8},{value:"--bui-button-text-color",paraId:13,tocIndex:8},{value:"--border-color",paraId:13,tocIndex:8},{value:"\u8FB9\u6846\u989C\u8272",paraId:13,tocIndex:8},{value:"--bui-color-border-default",paraId:13,tocIndex:8},{value:"--bui-button-border-color",paraId:13,tocIndex:8},{value:"--font-weight",paraId:13,tocIndex:8},{value:"\u5B57\u91CD",paraId:13,tocIndex:8},{value:"--bui-font-weight-medium",paraId:13,tocIndex:8},{value:"--bui-button-font-weight",paraId:13,tocIndex:8}]},70766:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u7528\u4E8E\u9009\u62E9\u65E5\u671F\u6216\u65E5\u671F\u533A\u95F4\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u4E3A\u5355\u9009\u6A21\u5F0F\uFF0C\u5BF9\u5E94 ",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:" \u5E94\u4F20\u5165\u5355\u4E2A ",paraId:1,tocIndex:2},{value:"Date",paraId:1,tocIndex:2},{value:"\uFF0C\u9ED8\u8BA4\u53EF\u9009\u8303\u56F4\u4E3A\u5305\u542B\u5F53\u524D\u6708\u4EFD\u5728\u5185\u7684\u4E00\u5E74\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"minDate",paraId:2,tocIndex:3},{value:" \u548C ",paraId:2,tocIndex:3},{value:"maxDate",paraId:2,tocIndex:3},{value:" \u6307\u5B9A\u53EF\u9009\u8303\u56F4\uFF0C\u6E32\u67D3\u6307\u5B9A\u6708\u65F6\uFF1Avalue=null \u5E76\u6307\u5B9A ",paraId:2,tocIndex:3},{value:"minDate",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u542F\u7528 ",paraId:3,tocIndex:4},{value:"hideDaysOutsideCurrentMonth",paraId:3,tocIndex:4},{value:" \u53EF\u9690\u85CF\u5F53\u524D\u6708\u4E4B\u5916\u7684\u65E5\u671F\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"disabledDate",paraId:4,tocIndex:5},{value:" \u53EF\u81EA\u5B9A\u4E49\u7981\u7528\u65E5\u671F\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"highlightDate",paraId:5,tocIndex:6},{value:" \u53EF\u9AD8\u4EAE\u67D0\u5929\u6216\u5468\u672B\u3002",paraId:5,tocIndex:6},{value:"mode",paraId:6,tocIndex:7},{value:" \u6307\u5B9A\u4E3A ",paraId:6,tocIndex:7},{value:"range",paraId:6,tocIndex:7},{value:"\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u9009\u62E9\u65E5\u671F\u8303\u56F4\u3002",paraId:6,tocIndex:7},{value:"\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"value",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u63A7\u5236\u65E5\u5386\u7EC4\u4EF6\u3002",paraId:7,tocIndex:8},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:9},{value:"defaultValue",paraId:8,tocIndex:9},{value:" \u5C5E\u6027\u6E32\u67D3\u7EC4\u4EF6\uFF0C\u65E5\u5386\u7684\u9009\u4E2D\u6001\u4F1A\u4F53\u73B0\u5728\u6700\u5916\u5C42 dom \u7684 ",paraId:8,tocIndex:9},{value:"data-selected",paraId:8,tocIndex:9},{value:" \u6216 ",paraId:8,tocIndex:9},{value:"data-start",paraId:8,tocIndex:9},{value:" \u548C ",paraId:8,tocIndex:9},{value:"data-end",paraId:8,tocIndex:9},{value:" \u5C5E\u6027\u4E2D\u3002",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"dateRender",paraId:9,tocIndex:10},{value:" \u53EF\u4EE5\u7ED8\u5236\u51FA\u81EA\u5B9A\u4E49\u65E5\u671F\u6837\u5F0F\u3002",paraId:9,tocIndex:10},{value:"\u4F7F\u7528 ",paraId:10,tocIndex:11},{value:"weekRender",paraId:10,tocIndex:11},{value:" \u53EF\u4EE5\u7ED8\u5236\u51FA\u81EA\u5B9A\u4E49\u5468\u5355\u5143\u683C\u6837\u5F0F\u3002",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u8BF4\u660E",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"defaultValue",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:11,tocIndex:12},{value:"Date | Date[] | null",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"value",paraId:11,tocIndex:12},{value:"\u9009\u4E2D\u7684\u503C\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:11,tocIndex:12},{value:"Date | Date[] | null",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"minDate",paraId:11,tocIndex:12},{value:"\u53EF\u9009\u62E9\u7684\u6700\u5C0F\u65E5\u671F",paraId:11,tocIndex:12},{value:"Date",paraId:11,tocIndex:12},{value:"\u5F53\u524D\u6708\u7B2C\u4E00\u5929",paraId:11,tocIndex:12},{value:"maxDate",paraId:11,tocIndex:12},{value:"\u53EF\u9009\u62E9\u7684\u6700\u5927\u65E5\u671F",paraId:11,tocIndex:12},{value:"Date",paraId:11,tocIndex:12},{value:"\u5F53\u524D\u65E5\u671F\u7684\u4E00\u5E74\u540E",paraId:11,tocIndex:12},{value:"mode",paraId:11,tocIndex:12},{value:"\u65E5\u5386\u9009\u62E9\u7C7B\u578B",paraId:11,tocIndex:12},{value:"single",paraId:11,tocIndex:12},{value:" | ",paraId:11,tocIndex:12},{value:"range",paraId:11,tocIndex:12},{value:"single",paraId:11,tocIndex:12},{value:"hideDaysOutsideCurrentMonth",paraId:11,tocIndex:12},{value:"\u662F\u5426\u9690\u85CF\u5F53\u524D\u6708\u4E4B\u5916\u7684\u65E5\u671F",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"disabledDate",paraId:11,tocIndex:12},{value:"\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F",paraId:11,tocIndex:12},{value:"(currentDate: Date) => boolean",paraId:11,tocIndex:12},{value:"\u5F53\u5929\u4E4B\u524D\u7684\u65E5\u671F",paraId:11,tocIndex:12},{value:"highlightDate",paraId:11,tocIndex:12},{value:"\u9AD8\u4EAE\u7684\u65E5\u671F",paraId:11,tocIndex:12},{value:"today",paraId:11,tocIndex:12},{value:" | ",paraId:11,tocIndex:12},{value:"weekend",paraId:11,tocIndex:12},{value:"today",paraId:11,tocIndex:12},{value:"dateRender",paraId:11,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9",paraId:11,tocIndex:12},{value:"(currentDate: ICalendarInstance) => React.ReactNode",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"weekRender",paraId:11,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u5468\u5355\u5143\u683C\u7684\u5185\u5BB9",paraId:11,tocIndex:12},{value:"(week: string) => React.ReactNode",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"onMonthChange",paraId:11,tocIndex:12},{value:"\u6708\u4EFD\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03",paraId:11,tocIndex:12},{value:"(e: React.SyntheticEvent,data: ICalendarMonthChangeData) => void",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"onChange",paraId:11,tocIndex:12},{value:"\u65E5\u671F\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03",paraId:11,tocIndex:12},{value:"(e: React.SyntheticEvent,data: { value: ICalendarValue }) => void",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:12,tocIndex:13},{value:"\u8BF4\u660E",paraId:12,tocIndex:13},{value:"\u7C7B\u578B",paraId:12,tocIndex:13},{value:"month",paraId:12,tocIndex:13},{value:"\u5207\u6362\u540E\u7684\u6708\u4EFD",paraId:12,tocIndex:13},{value:"string",paraId:12,tocIndex:13},{value:"type",paraId:12,tocIndex:13},{value:"\u64CD\u4F5C\u7C7B\u578B\uFF0Cprev: \u70B9\u51FB\u4E0A\u4E2A\u6708 next: \u70B9\u51FB\u4E0B\u4E2A\u6708",paraId:12,tocIndex:13},{value:"prev",paraId:12,tocIndex:13},{value:" | ",paraId:12,tocIndex:13},{value:"next",paraId:12,tocIndex:13},{value:"\u5C5E\u6027",paraId:13,tocIndex:14},{value:"\u8BF4\u660E",paraId:13,tocIndex:14},{value:"\u7C7B\u578B",paraId:13,tocIndex:14},{value:"month",paraId:13,tocIndex:14},{value:"\u65E5\u671F\u5BF9\u8C61",paraId:13,tocIndex:14},{value:"Date",paraId:13,tocIndex:14},{value:"type",paraId:13,tocIndex:14},{value:"\u662F\u5426\u7981\u7528",paraId:13,tocIndex:14},{value:"boolean",paraId:13,tocIndex:14}]},19170:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u901A\u7528\u5361\u7247\u5BB9\u5668\uFF0C\u6700\u57FA\u7840\u7684\u5361\u7247\u5BB9\u5668\uFF0C\u53EF\u7528\u4E8E\u627F\u8F7D\u6587\u5B57\u3001\u5217\u8868\u3001\u56FE\u7247\u3001\u6BB5\u843D\u3001\u5E38\u7528\u4E8E\u540E\u53F0\u6982\u89C8\u9875\u9762\u3002",paraId:0,tocIndex:0},{value:"Card",paraId:1,tocIndex:2},{value:"\u7EC4\u4EF6\u5206\u4E3A\uFF1A",paraId:1,tocIndex:2},{value:"CardHeader",paraId:1,tocIndex:2},{value:"\u3001 ",paraId:1,tocIndex:2},{value:"CardContent",paraId:1,tocIndex:2},{value:" \u3001",paraId:1,tocIndex:2},{value:"CardFooter",paraId:1,tocIndex:2},{value:" \u7B49 3 \u4E2A\u6A21\u5757\uFF0C\u4EE5\u4E0B\u662F\u793A\u4F8B\u6587\u6863\u3002",paraId:1,tocIndex:2},{value:"\u5361\u7247\u7EC4\u4EF6\u63D0\u4F9B ",paraId:2,tocIndex:3},{value:"CardHeader",paraId:2,tocIndex:3},{value:"\u5B50\u7EC4\u4EF6\u7528\u6765\u8BBE\u7F6E\u5361\u7247\u5934\u90E8\u6A21\u5757\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:2,tocIndex:3},{value:"title",paraId:2,tocIndex:3},{value:"\u8BBE\u7F6E\u5361\u7247\u5BB9\u5668\u7684\u6807\u9898\u3002",paraId:2,tocIndex:3},{value:"\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7",paraId:3,tocIndex:4},{value:"subtitle",paraId:3,tocIndex:4},{value:"\u8BBE\u7F6E\u5361\u7247\u5BB9\u5668\u7684\u5B50\u6807\u9898\u3002",paraId:3,tocIndex:4},{value:"title",paraId:4},{value:" \u3001",paraId:4},{value:"subtitle",paraId:4},{value:" \u7EC4\u5408\u4F7F\u7528.",paraId:4},{value:"CardHeader",paraId:5,tocIndex:5},{value:"\u5B50\u7EC4\u4EF6\u9664\u4E86\u63D0\u4F9B\u6807\u9898\u3001\u5B50\u6807\u9898\u5916\uFF0C\u8FD8\u63D0\u4F9B\u5361\u7247\u5934\u90E8\u64CD\u4F5C\u533A\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:5,tocIndex:5},{value:"extra",paraId:5,tocIndex:5},{value:`\u627F\u8F7D\u5361\u7247\u5934\u90E8\u64CD\u4F5C\u533A Action\u3002
\u5F53\u7ED1\u5B9A`,paraId:5,tocIndex:5},{value:"onClick",paraId:5,tocIndex:5},{value:"\u4E8B\u4EF6\u65F6\uFF0C",paraId:5,tocIndex:5},{value:"CardHeader",paraId:5,tocIndex:5},{value:"\u63D0\u4F9B\u9ED8\u8BA4\u7684\u53F3\u4FA7\u64CD\u4F5C icon\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E",paraId:5,tocIndex:5},{value:"endIcon",paraId:5,tocIndex:5},{value:"\u5C5E\u6027\u4E3A",paraId:5,tocIndex:5},{value:"true/false",paraId:5,tocIndex:5},{value:"\u6765\u663E\u793A\u6216\u8005\u9690\u85CF\u8FD9\u4E2A icon\u3002",paraId:5,tocIndex:5},{value:"\u8BBE\u7F6E",paraId:6},{value:"endIcon",paraId:6},{value:"\u4E3A",paraId:6},{value:"false",paraId:6},{value:"\u3002",paraId:6},{value:"Card",paraId:7,tocIndex:6},{value:"\u7EC4\u4EF6\u63D0\u4F9B",paraId:7,tocIndex:6},{value:"CardContent",paraId:7,tocIndex:6},{value:"\u5B50\u7EC4\u4EF6\uFF0C\u901A\u5E38\u7528\u6765\u627F\u8F7D\u5361\u7247\u5BB9\u5668\u4E3B\u8981\u5185\u5BB9\u3002",paraId:7,tocIndex:6},{value:"Card",paraId:8,tocIndex:7},{value:"\u7EC4\u4EF6\u63D0\u4F9B",paraId:8,tocIndex:7},{value:"CardFooter",paraId:8,tocIndex:7},{value:"\u5B50\u7EC4\u4EF6\uFF0C\u901A\u5E38\u7528\u6765\u627F\u8F7D\u5361\u7247\u5BB9\u5668\u5E95\u90E8\u64CD\u4F5C\u533A\u3002",paraId:8,tocIndex:7},{value:"\u914D\u5408",paraId:9,tocIndex:8},{value:"CardHeader",paraId:9,tocIndex:8},{value:"\u3001",paraId:9,tocIndex:8},{value:"CardContent",paraId:9,tocIndex:8},{value:"\u3001",paraId:9,tocIndex:8},{value:"CardFooter",paraId:9,tocIndex:8},{value:"\u5B50\u7EC4\u4EF6\u4F7F\u7528\u3002",paraId:9,tocIndex:8},{value:"Card",paraId:10,tocIndex:9},{value:"\u7EC4\u4EF6\u652F\u6301\u5D4C\u5957\u4F7F\u7528\u3002",paraId:10,tocIndex:9},{value:"\u9664\u4E86\u914D\u5408",paraId:11,tocIndex:10},{value:"CardHeader",paraId:11,tocIndex:10},{value:"\u3001",paraId:11,tocIndex:10},{value:"CardContent",paraId:11,tocIndex:10},{value:"\u3001",paraId:11,tocIndex:10},{value:"CardFooter",paraId:11,tocIndex:10},{value:"\u5B50\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u63D2\u5165 children\uFF0C\u5B9E\u73B0\u9AD8\u5EA6\u5B9A\u5236\u5316\u5361\u7247\u3002",paraId:11,tocIndex:10},{value:"\u5C5E\u6027",paraId:12,tocIndex:12},{value:"\u8BF4\u660E",paraId:12,tocIndex:12},{value:"\u7C7B\u578B",paraId:12,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:12},{value:"title",paraId:12,tocIndex:12},{value:"\u5361\u7247\u6807\u9898",paraId:12,tocIndex:12},{value:"ReactNode",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"subtitle",paraId:12,tocIndex:12},{value:"\u5B50\u6807\u9898",paraId:12,tocIndex:12},{value:"ReactNode",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"extra",paraId:12,tocIndex:12},{value:"\u5361\u7247\u53F3\u4FA7\u64CD\u4F5C\u533A",paraId:12,tocIndex:12},{value:"ReactNode",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"endIcon",paraId:12,tocIndex:12},{value:"\u5361\u7247\u53F3\u4FA7\u56FE\u6807",paraId:12,tocIndex:12},{value:"ReactNode \uFF5C boolean",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12}]},2469:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u590D\u9009\u6846\uFF0C\u5728\u5C55\u793A\u4E00\u7CFB\u5217\u9009\u9879\u65F6\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u53EF\u9009\u591A\u9879\u6216\u53D6\u6D88\u5DF2\u9009\u9879\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"checked",paraId:1,tocIndex:2},{value:" \u548C ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u63A7\u5236\u72B6\u6001\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"inputProps",paraId:2,tocIndex:3},{value:" \u4F20\u5165\u7684 input \u5C5E\u6027\u53EF\u900F\u4F20\u81F3\u5185\u90E8",paraId:2,tocIndex:3},{value:"input",paraId:2,tocIndex:3},{value:"\u6807\u7B7E\u3002",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:" \u548C ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:" \u53EF\u76F4\u63A5\u900F\u4F20\u81F3\u5185\u90E8",paraId:3,tocIndex:4},{value:"input",paraId:3,tocIndex:4},{value:"\u6807\u7B7E\uFF0C\u4E0D\u4F1A\u88AB ",paraId:3,tocIndex:4},{value:"inputProps",paraId:3,tocIndex:4},{value:" \u4F20\u5165\u7684\u540C\u540D\u5C5E\u6027\u8986\u76D6\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"labelPlacement",paraId:4,tocIndex:5},{value:" \u53EF\u63A7\u5236\u6587\u6848\u5728\u590D\u9009\u6846\u56FE\u6807\u7684\u4F4D\u7F6E\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"icon",paraId:5,tocIndex:6},{value:" \u53EF\u81EA\u5B9A\u4E49\u4E3A\u9009\u4E2D\u72B6\u6001\u56FE\u6807\uFF0C",paraId:5,tocIndex:6},{value:"checkedIcon",paraId:5,tocIndex:6},{value:" \u53EF\u81EA\u5B9A\u4E49\u9009\u4E2D\u72B6\u6001\u56FE\u6807\u3002",paraId:5,tocIndex:6},{value:"\u4F7F\u7528",paraId:6,tocIndex:7},{value:"disabled",paraId:6,tocIndex:7},{value:"\u7981\u7528\u7EC4\u4EF6\uFF0C",paraId:6,tocIndex:7},{value:"CheckboxGroup.disabled",paraId:6,tocIndex:7},{value:" \u53EF\u6574\u7EC4\u7981\u7528\u3002",paraId:6,tocIndex:7},{value:"CheckboxGroup",paraId:7,tocIndex:8},{value:" \u548C ",paraId:7,tocIndex:8},{value:"Checkbox",paraId:7,tocIndex:8},{value:" \u7EC4\u5408\uFF0C\u53EF\u5B9E\u73B0\u590D\u9009\u6846\u7EC4\uFF0C\u4E14\u6B64\u65F6\u7684 ",paraId:7,tocIndex:8},{value:"Checkbox",paraId:7,tocIndex:8},{value:" \u5E94\u8BE5\u4F20\u5165 ",paraId:7,tocIndex:8},{value:"value",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u3002",paraId:7,tocIndex:8},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:9},{value:"value",paraId:8,tocIndex:9},{value:" \u63A7\u5236 ",paraId:8,tocIndex:9},{value:"CheckboxGroup",paraId:8,tocIndex:9},{value:" \u7EC4\u4EF6\uFF0C\u901A\u8FC7 ",paraId:8,tocIndex:9},{value:"checked",paraId:8,tocIndex:9},{value:" \u63A7\u5236 ",paraId:8,tocIndex:9},{value:"Checkbox",paraId:8,tocIndex:9},{value:" \u7EC4\u4EF6\u3002",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"defaultValue",paraId:9,tocIndex:10},{value:" \u6307\u5B9A ",paraId:9,tocIndex:10},{value:"CheckboxGroup",paraId:9,tocIndex:10},{value:" \u7EC4\u4EF6\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"defaultChecked",paraId:9,tocIndex:10},{value:" \u6307\u5B9A ",paraId:9,tocIndex:10},{value:"Checkbox",paraId:9,tocIndex:10},{value:" \u7EC4\u4EF6\u9ED8\u8BA4\u503C\u3002",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:12},{value:"\u8BF4\u660E",paraId:10,tocIndex:12},{value:"\u7C7B\u578B",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:12},{value:"defaultValue",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:12},{value:"string[]",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"value",paraId:10,tocIndex:12},{value:"\u6307\u5B9A\u9009\u4E2D\u7684\u9009\u9879\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:12},{value:"string[]",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"\u6574\u7EC4\u662F\u5426\u7981\u7528",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:10,tocIndex:12},{value:"(e: React.SyntheticEvent,data: {value: string[]}) => void",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"\u5C5E\u6027",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"defaultChecked",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u662F\u5426\u9009\u4E2D\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checked",paraId:11,tocIndex:13},{value:"\u662F\u5426\u9009\u4E2D\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputProps",paraId:11,tocIndex:13},{value:"\u5185\u90E8",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u6807\u7B7E\u7684\u6807\u51C6\u5C5E\u6027",paraId:11,tocIndex:13},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputRef",paraId:11,tocIndex:13},{value:"\u5185\u90E8",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u6807\u7B7E\u7684 ref",paraId:11,tocIndex:13},{value:"React.Ref<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"name",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u540D\u79F0\u6807\u8BC6",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"value",paraId:11,tocIndex:13},{value:"\u7EC4\u4EF6\u7684\u503C\uFF0C\u82E5\u4F7F\u7528 CheckboxGroup \u5E94\u4F20\u5165\u8BE5\u5C5E\u6027",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"disabled",paraId:11,tocIndex:13},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"icon",paraId:11,tocIndex:13},{value:"\u672A\u9009\u4E2D\u72B6\u6001\u56FE\u6807",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checkedIcon",paraId:11,tocIndex:13},{value:"\u9009\u4E2D\u72B6\u6001\u56FE\u6807",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"labelPlacement",paraId:11,tocIndex:13},{value:"\u6587\u6848\u4F4D\u7F6E",paraId:11,tocIndex:13},{value:"left",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"top",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"bottom",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:11,tocIndex:13},{value:"(e: React.SyntheticEvent,data: {checked:boolean}) => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u5C5E\u6027",paraId:12,tocIndex:14},{value:"\u8BF4\u660E",paraId:12,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:14},{value:"\u5168\u5C40\u53D8\u91CF",paraId:12,tocIndex:14},{value:"--label-color",paraId:12,tocIndex:14},{value:"\u6587\u6848\u5B57\u4F53\u989C\u8272",paraId:12,tocIndex:14},{value:"--bui-color-fg-default",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"--label-font-size",paraId:12,tocIndex:14},{value:"\u6587\u6848\u5B57\u4F53\u5927\u5C0F",paraId:12,tocIndex:14},{value:"--bui-text-size-1",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"--icon-font-size",paraId:12,tocIndex:14},{value:"\u56FE\u6807\u5B57\u4F53\u5927\u5C0F",paraId:12,tocIndex:14},{value:"--bui-title-size-2",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14}]},59420:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u7528\u4E8E\u5B9E\u65F6\u5C55\u793A\u5012\u8BA1\u65F6\u6570\u503C\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"remainingTime",paraId:1,tocIndex:2},{value:" \u63A7\u5236\u5012\u8BA1\u65F6\u5269\u4F59\u65F6\u957F\uFF0C\u4E0E ",paraId:1,tocIndex:2},{value:"endTimestamp",paraId:1,tocIndex:2},{value:" \u5B57\u6BB5\u4E8C\u9009\u4E00\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"endTimestamp",paraId:2,tocIndex:3},{value:" \u6307\u5B9A\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u95F4\u70B9\uFF0C\u4E0E ",paraId:2,tocIndex:3},{value:"remainingTime",paraId:2,tocIndex:3},{value:" \u5B57\u6BB5\u4E8C\u9009\u4E00\uFF0C\u4F18\u5148\u7EA7\u6BD4 ",paraId:2,tocIndex:3},{value:"remainingTime",paraId:2,tocIndex:3},{value:" \u9AD8\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"serverTimestamp",paraId:3,tocIndex:4},{value:" \u8BBE\u7F6E\u670D\u52A1\u5668\u65F6\u95F4\u6233\uFF0C\u53EF\u4E0E ",paraId:3,tocIndex:4},{value:"endTimestamp",paraId:3,tocIndex:4},{value:" \u914D\u5408\u4F7F\u7528\uFF0C\u8BE5\u5C5E\u6027\u53EF\u7528\u6765\u9632\u6B62\u672C\u5730\u65F6\u95F4\u88AB\u4FEE\u6539\u800C\u5BFC\u81F4\u5012\u8BA1\u65F6\u9519\u8BEF\u7684\u573A\u666F\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"format",paraId:4,tocIndex:5},{value:" \u53EF\u8BBE\u7F6E\u5012\u8BA1\u65F6\u683C\u5F0F\u5316\u540E\u7684\u5F62\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:4,tocIndex:5},{value:"HH:mm:ss",paraId:4,tocIndex:5},{value:"\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"unitStyle",paraId:5,tocIndex:6},{value:" \u53EF\u8BBE\u7F6E\u5012\u8BA1\u65F6\u5355\u4F4D\u6837\u5F0F\u3002",paraId:5,tocIndex:6},{value:"\u53EF\u901A\u8FC7 ",paraId:6,tocIndex:7},{value:"valueStyle",paraId:6,tocIndex:7},{value:" \u5B9A\u5236\u5012\u8BA1\u65F6\u7B2C\u4E00\u3001\u4E8C\u4F4D\u6570\u503C\u7684\u6837\u5F0F\u3002",paraId:6,tocIndex:7},{value:"\u53EF\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"timeSliceStyle",paraId:7,tocIndex:8},{value:" \u5B9A\u5236\u5012\u8BA1\u65F6\u6BCF\u4E2A\u65F6\u95F4\u7247\u7684\u6837\u5F0F\u3002",paraId:7,tocIndex:8},{value:"\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u4F1A\u89E6\u53D1 ",paraId:8,tocIndex:9},{value:"onFinish",paraId:8,tocIndex:9},{value:" \u4E8B\u4EF6\u3002",paraId:8,tocIndex:9},{value:"\u5012\u8BA1\u65F6\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1 ",paraId:9,tocIndex:10},{value:"onChange",paraId:9,tocIndex:10},{value:" \u4E8B\u4EF6\u3002",paraId:9,tocIndex:10},{value:"\u53EF\u901A\u8FC7 ",paraId:10,tocIndex:11},{value:"renderContent",paraId:10,tocIndex:11},{value:" \u81EA\u5B9A\u4E49\u6E32\u67D3\u5012\u8BA1\u65F6\u7EC4\u4EF6\u5185\u5BB9\u3002",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"remainingTime",paraId:11,tocIndex:13},{value:"\u5012\u8BA1\u65F6\u5269\u4F59\u65F6\u95F4\uFF0C\u662F\u4E00\u4E2A\u65F6\u95F4\u6BB5\uFF08\u5355\u4F4D\u6BEB\u79D2\uFF09\uFF0C\u4E0EendTimestamp\u4E92\u65A5",paraId:11,tocIndex:13},{value:"number",paraId:11,tocIndex:13},{value:"0",paraId:11,tocIndex:13},{value:"endTimestamp",paraId:11,tocIndex:13},{value:"\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u95F4\u6233\uFF0C\u662F\u4E00\u4E2A\u65F6\u95F4\u70B9\uFF0C\u4E0EremainingTime\u4E92\u65A5\uFF0C\u4F18\u5148\u7EA7\u6BD4remainingTime\u9AD8",paraId:11,tocIndex:13},{value:"number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"serverTimestamp",paraId:11,tocIndex:13},{value:"\u670D\u52A1\u5668\u65F6\u95F4\u6233\uFF0C\u662F\u4E00\u4E2A\u65F6\u95F4\u70B9\uFF0C\u53EF\u4E0EendTimestamp\u914D\u5408\u4F7F\u7528",paraId:11,tocIndex:13},{value:"number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"format",paraId:11,tocIndex:13},{value:"\u683C\u5F0F\u5316\u5012\u8BA1\u65F6\u5C55\u793A\uFF0C\u53C2\u8003 dayjs",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"HH:mm:ss",paraId:11,tocIndex:13},{value:"unitStyle",paraId:11,tocIndex:13},{value:"\u65F6\u95F4\u5355\u4F4D\u7684\u6837\u5F0F",paraId:11,tocIndex:13},{value:"CSSProperties",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"valueStyle",paraId:11,tocIndex:13},{value:"\u5012\u8BA1\u65F6\u4F4D\u6570\u7684\u6837\u5F0F\uFF0C\u7528\u4E8E\u5B9A\u5236\u7B2C\u4E00\u3001\u7B2C\u4E8C\u4F4D\u6570\u5B57\u7684\u6837\u5F0F",paraId:11,tocIndex:13},{value:"CSSProperties[]",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"timeSliceStyle",paraId:11,tocIndex:13},{value:"\u5404\u65F6\u95F4\u533A\u5757\u7684\u6837\u5F0F\uFF0C\u7528\u4E8E\u5B9A\u5236\u5404\u4E2A\u65F6\u95F4\u5757\u7684\u6837\u5F0F\uFF0C\u82E5\u7B2C\u4E00\u3001\u7B2C\u4E8C\u4F4D\u6570\u5B57\u7684\u6837\u5F0F\u76F8\u540C\uFF0C\u5219\u53EF\u66FF\u4EE3valueStyle",paraId:11,tocIndex:13},{value:"CSSProperties",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onFinish",paraId:11,tocIndex:13},{value:"\u5012\u8BA1\u65F6\u5B8C\u6210\u65F6\u89E6\u53D1",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"\u5012\u8BA1\u65F6\u65F6\u95F4\u53D8\u5316\u65F6\u89E6\u53D1",paraId:11,tocIndex:13},{value:"(data: { value: CurrentTime }) => void;",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"renderContent",paraId:11,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9",paraId:11,tocIndex:13},{value:"(data: CurrentTime) => React.ReactNode;",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u5C5E\u6027",paraId:12,tocIndex:14},{value:"\u8BF4\u660E",paraId:12,tocIndex:14},{value:"\u7C7B\u578B",paraId:12,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:14},{value:"total",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u603B\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2",paraId:12,tocIndex:14},{value:"number",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"years",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u5E74\u6570",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"months",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u6708\u6570",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"days",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u5929\u6570",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"hours",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u5C0F\u65F6",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"minutes",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u5206\u949F",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"seconds",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u79D2\u6570",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"hoursWithDays",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u6574\u6570\u5929\u4F59\u4E0B\u7684\u5C0F\u65F6",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"\u5C5E\u6027",paraId:13,tocIndex:15},{value:"\u8BF4\u660E",paraId:13,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:15},{value:"\u5168\u5C40\u53D8\u91CF",paraId:13,tocIndex:15},{value:"--font-size",paraId:13,tocIndex:15},{value:"\u6587\u6848\u5B57\u4F53\u5927\u5C0F",paraId:13,tocIndex:15},{value:"--bui-text-size-1",paraId:13,tocIndex:15},{value:"--bui-countdown-font-size",paraId:13,tocIndex:15},{value:"--font-weight",paraId:13,tocIndex:15},{value:"\u6587\u6848\u5B57\u4F53\u5B57\u91CD",paraId:13,tocIndex:15},{value:"--bui-font-weight-normal",paraId:13,tocIndex:15},{value:"--bui-countdown-color",paraId:13,tocIndex:15},{value:"--color",paraId:13,tocIndex:15},{value:"\u6587\u6848\u5B57\u4F53\u989C\u8272",paraId:13,tocIndex:15},{value:"--bui-color-fg-default",paraId:13,tocIndex:15},{value:"--bui-countdown-font-weight",paraId:13,tocIndex:15}]},32303:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u5206\u5272\u7EBF\uFF0C\u5E38\u7528\u4E8E\u5BF9\u5217\u8868\u6216\u8005\u5E03\u5C40\u4E2D\u7684\u7EC4\u4EF6\u5185\u5BB9\u8FDB\u884C\u5206\u7EC4\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u7684\u5206\u5272\u7EBF\u662F\u4E00\u6761\u7EC6\u7EBF\u3002",paraId:1,tocIndex:2},{value:"\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7",paraId:2,tocIndex:3},{value:"dashed",paraId:2,tocIndex:3},{value:"\u5C5E\u6027\u6765\u63A7\u5236\u5206\u5272\u7EBF\u4E3A\u865A\u7EBF\u8FD8\u662F\u5B9E\u7EBF\u3002",paraId:2,tocIndex:3},{value:`\u9ED8\u8BA4\u7684\u5206\u5272\u7EBF\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u6211\u4EEC\u4E5F\u63D0\u4F9B\u6C34\u5E73\u65B9\u5411\u5206\u5272\u7EBF\u3002
\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7`,paraId:3,tocIndex:4},{value:"direction",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u6765\u63A7\u5236\u5206\u5272\u7EBF\u7684\u65B9\u5411\u3002",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u5206\u5272\u7EBF\u6491\u6EE1\u7236\u5143\u7D20\u5BBD\u5EA6/\u9AD8\u5EA6\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7",paraId:4,tocIndex:7},{value:"size",paraId:4,tocIndex:7},{value:"\u6765\u5B9A\u5236\u5206\u5272\u7EBF\u5C3A\u5BF8\u3002",paraId:4,tocIndex:7},{value:"\u60A8\u8FD8\u53EF\u4EE5\u6E32\u67D3\u5E26\u6709\u5185\u5BB9\u7684\u5206\u5272\u7EBF\u3002\u901A\u8FC7",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:`\u900F\u4F20\u6587\u6848\u3002
\u76EE\u524D\u4EC5`,paraId:5,tocIndex:10},{value:"direction",paraId:5,tocIndex:10},{value:"\u4E3A",paraId:5,tocIndex:10},{value:"horizontal",paraId:5,tocIndex:10},{value:"\u65F6\u652F\u6301\u3002",paraId:5,tocIndex:10},{value:"\u5BF9\u4E8E\u5176\u4ED6\u7279\u6B8A\u6837\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u884C\u5B9A\u5236\uFF0C\u4F8B\u5982\u5B9A\u5236\u5206\u5272\u7EBF\u7C97\u7EC6\u3002",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:13},{value:"\u8BF4\u660E",paraId:7,tocIndex:13},{value:"\u7C7B\u578B",paraId:7,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:13},{value:"direction",paraId:7,tocIndex:13},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:7,tocIndex:13},{value:"horizontal",paraId:7,tocIndex:13},{value:" \uFF5C ",paraId:7,tocIndex:13},{value:"vertical",paraId:7,tocIndex:13},{value:"vertical",paraId:7,tocIndex:13},{value:"size",paraId:7,tocIndex:13},{value:"\u5206\u5272\u7EBF\u5C3A\u5BF8",paraId:7,tocIndex:13},{value:"string",paraId:7,tocIndex:13},{value:"-",paraId:7,tocIndex:13},{value:"dashed",paraId:7,tocIndex:13},{value:"\u662F\u5426\u4E3A\u865A\u7EBF",paraId:7,tocIndex:13},{value:"boolean",paraId:7,tocIndex:13},{value:"false",paraId:7,tocIndex:13},{value:"\u5C5E\u6027",paraId:8,tocIndex:14},{value:"\u8BF4\u660E",paraId:8,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:14},{value:"\u5168\u5C40\u53D8\u91CF",paraId:8,tocIndex:14},{value:"--height",paraId:8,tocIndex:14},{value:"\u5206\u5272\u7EBF\u9AD8\u5EA6",paraId:8,tocIndex:14},{value:"100%",paraId:8,tocIndex:14},{value:"--bui-divider-height",paraId:8,tocIndex:14},{value:"--width",paraId:8,tocIndex:14},{value:"\u5206\u5272\u7EBF\u5BBD\u5EA6",paraId:8,tocIndex:14},{value:"100%",paraId:8,tocIndex:14},{value:"--bui-divider-width",paraId:8,tocIndex:14}]},72647:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u5C4F\u5E55\u8FB9\u7F18\u6ED1\u51FA\u7684\u6D6E\u5C42\u9762\u677F\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"open",paraId:1,tocIndex:2},{value:" \u4EE5\u53CA ",paraId:1,tocIndex:2},{value:"onClose",paraId:1,tocIndex:2},{value:" \u63A7\u5236\u62BD\u5C49\u662F\u5426\u5C55\u793A",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u4ECE\u5E95\u90E8\u51FA\u73B0\u3001\u652F\u6301\u901A\u8FC7\u8BBE\u7F6E ",paraId:2,tocIndex:3},{value:"anchor",paraId:2,tocIndex:3},{value:" \u63A7\u5236\u51FA\u73B0\u65B9\u5411\uFF0C\u9ED8\u8BA4\u662F\u4ECE\u5E95\u90E8\u51FA\u73B0",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u5C06 Drawer \u6E32\u67D3\u5230\u9875\u9762\u7684\u6839\u8282\u70B9\u4E2D\uFF0CH5\u662F",paraId:3,tocIndex:5},{value:"document.body",paraId:3,tocIndex:5},{value:", \u5C0F\u7A0B\u5E8F\u662F",paraId:3,tocIndex:5},{value:"page\u8282\u70B9",paraId:3,tocIndex:5},{value:"\u3002",paraId:3,tocIndex:5},{value:"\u5C5E\u6027",paraId:4},{value:"\u8BF4\u660E",paraId:4},{value:"\u7C7B\u578B",paraId:4},{value:"\u9ED8\u8BA4\u503C",paraId:4},{value:"anchor",paraId:4},{value:"Drawer \u51FA\u73B0\u7684\u4F4D\u7F6E",paraId:4},{value:"left",paraId:4},{value:" | ",paraId:4},{value:"top",paraId:4},{value:" | ",paraId:4},{value:"right",paraId:4},{value:" | ",paraId:4},{value:"bottom",paraId:4},{value:"text",paraId:4},{value:"open",paraId:4},{value:"\u662F\u5426\u663E\u793A",paraId:4},{value:"boolean",paraId:4},{value:"false",paraId:4},{value:"hideBackdrop",paraId:4},{value:"\u662F\u5426\u9690\u85CF\u906E\u7F69\u5C42",paraId:4},{value:"boolean",paraId:4},{value:"false",paraId:4},{value:"container",paraId:4},{value:"\u62BD\u5C49\u6302\u8F7D\u7684\u5143\u7D20\u8282\u70B9",paraId:4},{value:"ModalProps['container']",paraId:4},{value:"\u9875\u9762\u8DDF\u8282\u70B9",paraId:4},{value:"SlideProps",paraId:4},{value:"Slide \u52A8\u753B\u7684 props",paraId:4},{value:"Partial<SlideProps>",paraId:4},{value:"-",paraId:4},{value:"transitionDuration",paraId:4},{value:"\u52A8\u753B\u6267\u884C\u65F6\u95F4",paraId:4},{value:"number | { appear?: number, enter?: number, exit?: number }",paraId:4},{value:"-",paraId:4},{value:"onClose",paraId:4},{value:"\u5173\u95ED\u62BD\u5C49\u56DE\u8C03",paraId:4},{value:"ModalProps['onClose']",paraId:4},{value:"-",paraId:4},{value:"disablePortal",paraId:4},{value:"\u7981\u6B62 Portal\u80FD\u529B",paraId:4},{value:"boolean",paraId:4},{value:"false",paraId:4},{value:"contentProps",paraId:4},{value:"\u62BD\u5C49\u5185\u5BB9\u5143\u7D20\u8282\u70B9\u7684 props",paraId:4},{value:"React.HTMLAttributes<HTMLDivElement>",paraId:4},{value:"-",paraId:4},{value:"Drawer",paraId:5},{value:" \u7EE7\u627F\u81EA ",paraId:5},{value:"Modal",paraId:5},{value:" \u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:5},{value:"Modal API",paraId:6}]},78881:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u4F7F\u7528Transition\u5C01\u88C5\u7684\u57FA\u7840\u6DE1\u5165\u6DE1\u51FA\u52A8\u753B",paraId:0,tocIndex:0},{value:"\u5F53",paraId:1,tocIndex:3},{value:"appear",paraId:1,tocIndex:3},{value:"\u548C",paraId:1,tocIndex:3},{value:"in",paraId:1,tocIndex:3},{value:"\u90FD\u4E3A",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:`\u65F6
\u7EC4\u4EF6\u4F1A\u5728\u6302\u8F7D\u65F6\u7ACB\u5373\u64AD\u653E\u52A8\u753B`,paraId:1,tocIndex:3},{value:"\u4F7F\u7528",paraId:2,tocIndex:4},{value:"mountOnEnter",paraId:2,tocIndex:4},{value:`\u4F7F\u5F97\u9996\u6B21in\u65F6\u624D\u6302\u8F7D\u7EC4\u4EF6
\u4F7F\u7528`,paraId:2,tocIndex:4},{value:"unmountOnExit",paraId:2,tocIndex:4},{value:"\u4F7F\u5F97\u6BCF\u6B21\u9000\u51FA\u65F6\u90FD\u5378\u8F7D\u7EC4\u4EF6",paraId:2,tocIndex:4},{value:"Fade",paraId:3,tocIndex:5},{value:" \u7EE7\u627F\u81EA ",paraId:3,tocIndex:5},{value:"Transition",paraId:3,tocIndex:5},{value:" \u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:3,tocIndex:5},{value:"Transition",paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"in",paraId:5,tocIndex:6},{value:"\u662F\u5426\u8FDB\u5165",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"appear",paraId:5,tocIndex:6},{value:"\u6302\u8F7D\u65F6\u662F\u5426\u64AD\u653E\u52A8\u753B",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"timeout",paraId:5,tocIndex:6},{value:"\u52A8\u753B\u65F6\u95F4\u914D\u7F6E",paraId:5,tocIndex:6},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"delay",paraId:5,tocIndex:6},{value:"\u52A8\u753B\u5EF6\u8FDF\u914D\u7F6E",paraId:5,tocIndex:6},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"enter",paraId:5,tocIndex:6},{value:"\u662F\u5426\u64AD\u653E\u8FDB\u5165\u52A8\u753B",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"true",paraId:5,tocIndex:6},{value:"exit",paraId:5,tocIndex:6},{value:"\u662F\u5426\u64AD\u653E\u9000\u51FA\u52A8\u753B",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"true",paraId:5,tocIndex:6},{value:"mountOnEnter",paraId:5,tocIndex:6},{value:"\u9996\u6B21\u8FDB\u5165\u65F6\u518D\u6302\u8F7Dchildren",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"unmountOnExit",paraId:5,tocIndex:6},{value:"\u9000\u51FA\u65F6\u5378\u8F7Dchildren",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"onEnter",paraId:5,tocIndex:6},{value:"\u8FDB\u5165\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onEntering",paraId:5,tocIndex:6},{value:"\u8FDB\u5165\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onEntered",paraId:5,tocIndex:6},{value:"\u8FDB\u5165\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onExit",paraId:5,tocIndex:6},{value:"\u9000\u51FA\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onExiting",paraId:5,tocIndex:6},{value:"\u9000\u51FA\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onExited",paraId:5,tocIndex:6},{value:"\u9000\u51FA\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"easing",paraId:5,tocIndex:6},{value:"\u8865\u95F4\uFF0C\u5373transition-timing-function",paraId:5,tocIndex:6},{value:"string | {enter, exit}",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6}]},9405:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u56FE\u6807\u6309\u94AE\u662F\u4E00\u79CD\u53EA\u663E\u793A\u4E00\u4E2A\u56FE\u6807\u800C\u4E0D\u663E\u793A\u6587\u672C\u6807\u7B7E\u7684\u6309\u94AE\u3002\u4E3B\u8981\u7528\u4E8E\u63A7\u5236\u680F\u3001\u5DE5\u5177\u680F\uFF0C\u5F53\u9700\u8981\u4E00\u4E2A\u7D27\u51D1\u7684\u6309\u94AE\u65F6\u5B83\u4EEC\u4E5F\u5341\u5206\u6709\u7528",paraId:0,tocIndex:0},{value:"\u6309\u94AE\u652F\u6301 ",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u6309\u94AE",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u63CF\u8FB9\u6309\u94AE",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u586B\u5145\u6309\u94AE",paraId:1,tocIndex:2},{value:" \u4E09\u79CD\u5C55\u793A\u5F62\u6001",paraId:1,tocIndex:2},{value:"\u6309\u94AE\u652F\u6301 ",paraId:2,tocIndex:3},{value:"\u5706\u5F62",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"\u5706\u89D2",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"\u6B63\u65B9\u5F62",paraId:2,tocIndex:3},{value:" \u4E09\u79CD\u5F62\u72B6",paraId:2,tocIndex:3},{value:"\u6309\u94AE\u6709\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:4,tocIndex:4},{value:"size",paraId:4,tocIndex:4},{value:" \u4E3A large small \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5927\u3001\u5C0F\u3002\u82E5\u4E0D\u8BBE\u7F6E ",paraId:4,tocIndex:4},{value:"size",paraId:4,tocIndex:4},{value:"\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u4E2D\u7B49\u5C3A\u5BF8\u3002",paraId:4,tocIndex:4},{value:"\u6309\u94AE\u652F\u6301 ",paraId:5,tocIndex:5},{value:"primary",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"success",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"info",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"warning",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"danger",paraId:5,tocIndex:5},{value:" \u4E3B\u9898\u5B9A\u4E49\u3002\u82E5\u4E0D\u8BBE\u7F6Ecolor\uFF0C\u5219\u9ED8\u8BA4\u4E3A",paraId:5,tocIndex:5},{value:"default",paraId:5,tocIndex:5},{value:"\u901A\u8FC7 disabled \u5C5E\u6027\u6765\u7981\u7528\u6309\u94AE\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u6309\u94AE\u4E0D\u53EF\u70B9\u51FB\u3002",paraId:6,tocIndex:6},{value:"\u5C5E\u6027",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"variant",paraId:7,tocIndex:7},{value:"\u6309\u94AE\u7C7B\u578B",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"text",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"contained",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:"color",paraId:7,tocIndex:7},{value:"\u6309\u94AE\u989C\u8272",paraId:7,tocIndex:7},{value:"primary",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"info",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"success",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"warning",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"danger",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:"size",paraId:7,tocIndex:7},{value:"\u6309\u94AE\u5927\u5C0F",paraId:7,tocIndex:7},{value:"small",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"medium",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"large",paraId:7,tocIndex:7},{value:"medium",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"false",paraId:7,tocIndex:7},{value:"startIcon",paraId:7,tocIndex:7},{value:"\u5728\u5B50\u5143\u7D20\u524D\u653E\u5728\u7684\u5185\u5BB9",paraId:7,tocIndex:7},{value:"React.ReactNode",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"openType",paraId:7,tocIndex:7},{value:"\u5FAE\u4FE1\u5F00\u653E\u80FD\u529B",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"onClick",paraId:7,tocIndex:7},{value:"\u70B9\u51FB\u6309\u94AE\u65F6\u7684\u56DE\u8C03",paraId:7,tocIndex:7},{value:"(event: MouseEvent) => void",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"\u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:8,tocIndex:7},{value:"button",paraId:8,tocIndex:7},{value:"\u5C5E\u6027",paraId:9,tocIndex:8},{value:"\u8BF4\u660E",paraId:9,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:8},{value:"--bg-color",paraId:9,tocIndex:8},{value:"\u56FE\u6807\u6309\u94AE\u80CC\u666F\u989C\u8272",paraId:9,tocIndex:8},{value:"--bui-color-neutral-5",paraId:9,tocIndex:8},{value:"--color",paraId:9,tocIndex:8},{value:"\u56FE\u6807\u989C\u8272",paraId:9,tocIndex:8},{value:"--bui-color-fg-muted",paraId:9,tocIndex:8},{value:"--icon-size",paraId:9,tocIndex:8},{value:"\u56FE\u6807\u5927\u5C0F",paraId:9,tocIndex:8},{value:"17px",paraId:9,tocIndex:8},{value:"--user-area",paraId:9,tocIndex:8},{value:"\u6309\u94AE\u70B9\u51FB\u5B89\u5168\u533A\u57DF\u5927\u5C0F",paraId:9,tocIndex:8},{value:"5px",paraId:9,tocIndex:8}]},29579:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u5728img\u6807\u7B7E\u7684\u57FA\u7840\u4E0A\u589E\u52A0\u4E86Placeholder\u548CFallback\u80FD\u529B\uFF0C\u517C\u5BB9\u591A\u7AEF\u539F\u751F\u61D2\u52A0\u8F7D\uFF0C\u66F4\u5B8C\u5584\u7684\u56FE\u7247\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:`\u901A\u8FC7fit\u53C2\u6570\u81EA\u5B9A\u4E49\u586B\u5145\u6A21\u5F0F
`,paraId:1,tocIndex:3},{value:"widthFix",paraId:1,tocIndex:3},{value:"\u548C",paraId:1,tocIndex:3},{value:"heightFix",paraId:1,tocIndex:3},{value:"\u4EC5\u5C0F\u7A0B\u5E8F\u53EF\u7528",paraId:1,tocIndex:3},{value:`\u76F4\u63A5\u4F20\u7ED9Image\u7684\u5C5E\u6027\u4F1A\u51FA\u73B0\u5728\u9876\u5C42\u7684div\u4E0A
\u5982\u679C\u9700\u8981\u4F20\u5230img\u4E0A\uFF0C\u53EF\u4EE5\u4F7F\u7528`,paraId:2,tocIndex:4},{value:"imgProps",paraId:2,tocIndex:4},{value:`\u5F53\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\uFF0C\u4F1A\u5C55\u793Afallback
\u9ED8\u8BA4fallback\u4E0Eplaceholder\u76F8\u540C\uFF0C\u5982\u679C\u5747\u672A\u4F20\u5165\u5219\u6CA1\u6709fallback\u80FD\u529B\u3002
\u4E5F\u53EF\u4EE5\u5355\u72EC\u4F20\u5165fallback\u5BF9\u8C61\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002`,paraId:3,tocIndex:5},{value:`\u5F53\u56FE\u7247\u8FD8\u5728\u52A0\u8F7D\u4E2D\u65F6\uFF0C\u901A\u8FC7placeholder\u53C2\u6570\u4F1A\u5C55\u793A\u5360\u4F4D
\u4F20true\u5219\u5C55\u793A\u4E00\u4E2A\u7070\u5E95\uFF0C\u4E5F\u53EF\u4F20\u5165\u81EA\u5B9A\u4E49\u7684\u5360\u4F4D\u5143\u7D20`,paraId:4,tocIndex:6},{value:"\u5C5E\u6027",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"src",paraId:5,tocIndex:7},{value:"\u56FE\u7247\u5730\u5740",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"lazy",paraId:5,tocIndex:7},{value:"\u4F7F\u7528\u539F\u751F\u61D2\u52A0\u8F7D",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"alt",paraId:5,tocIndex:7},{value:"\u66FF\u4EE3\u6587\u672C",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"fallback",paraId:5,tocIndex:7},{value:"\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u5360\u4F4D",paraId:5,tocIndex:7},{value:"ReactNode",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"placeholder",paraId:5,tocIndex:7},{value:"\u52A0\u8F7D\u4E2D\u7684\u5360\u4F4D",paraId:5,tocIndex:7},{value:"ReactNode | boolean",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"width",paraId:5,tocIndex:7},{value:"\u56FE\u7247\u5BBD\u5EA6",paraId:5,tocIndex:7},{value:"string | number",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"height",paraId:5,tocIndex:7},{value:"\u56FE\u7247\u9AD8\u5EA6",paraId:5,tocIndex:7},{value:"string | number",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"fit",paraId:5,tocIndex:7},{value:"\u5BBD\u9AD8\u9002\u914D\u65B9\u5F0F",paraId:5,tocIndex:7},{value:"contain",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"cover",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"fill",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"none",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"scale-down",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"widthFix",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"heightFix",paraId:5,tocIndex:7},{value:"fill",paraId:5,tocIndex:7},{value:"webp",paraId:5,tocIndex:7},{value:"\u89E3\u6790webp",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"showMenu",paraId:5,tocIndex:7},{value:"\uFF08\u5C0F\u7A0B\u5E8F\uFF09\u957F\u6309\u83DC\u5355\u914D\u7F6E",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"imgProps",paraId:5,tocIndex:7},{value:"\u900F\u4F20\u5230img\u7684\u53C2\u6570",paraId:5,tocIndex:7},{value:"React.HTMLAttributes<HTMLImageElement>",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7}]},50243:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u7528\u6237\u8F93\u5165\u5185\u5BB9\uFF0C\u662F\u5BF9\u57FA\u7840\u8F93\u5165\u6846\u7684\u5C01\u88C5\u3002",paraId:0,tocIndex:0},{value:"\u652F\u6301",paraId:1,tocIndex:2},{value:"input",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u7684\u57FA\u7840\u5C5E\u6027\u900F\u4F20\uFF0C\u82E5\u8981\u900F\u4F20\u7684\u5C5E\u6027\u4E0D\u5728\u8BE5\u6587\u6863\u4E2D\uFF0C\u653E\u5165",paraId:1,tocIndex:2},{value:"inputProps",paraId:1,tocIndex:2},{value:"\u5B57\u6BB5\u4E2D\u624D\u4F1A\u900F\u4F20\u81F3\u5185\u90E8",paraId:1,tocIndex:2},{value:"input",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"startIcon",paraId:2,tocIndex:3},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5F00\u59CB\u56FE\u6807\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"endIcon",paraId:3,tocIndex:4},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u7ED3\u675F\u56FE\u6807\u3002",paraId:3,tocIndex:4},{value:"\u542F\u7528 ",paraId:4,tocIndex:5},{value:"clearable",paraId:4,tocIndex:5},{value:" \u540E\uFF0C\u5F53\u8F93\u5165\u6846\u6709\u8F93\u5165\u5185\u5BB9\u4E14\u805A\u7126\u72B6\u6001\u4E0B\u4F1A\u5C55\u793A\u6E05\u9664\u6309\u94AE\uFF0C\u975E\u53D7\u63A7\u72B6\u6001\u4E5F\u4F1A\u6E05\u9664\u8F93\u5165\u6846\u5185\u5BB9\u3002",paraId:4,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:6},{value:"disabled",paraId:5,tocIndex:6},{value:" \u53EF\u7981\u7528\u8F93\u5165\u6846\u3002",paraId:5,tocIndex:6},{value:"\u6839\u636E\u662F\u5426\u4F20\u5165 ",paraId:6,tocIndex:7},{value:"value",paraId:6,tocIndex:7},{value:" \u6765\u5224\u65AD\u662F\u5426\u4E3A\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u975E\u53D7\u63A7\u7EC4\u4EF6\u53EF\u901A\u8FC7 ",paraId:6,tocIndex:7},{value:"inputRef",paraId:6,tocIndex:7},{value:" \u83B7\u53D6\u5143\u7D20\u6765\u63A7\u5236 ",paraId:6,tocIndex:7},{value:"input",paraId:6,tocIndex:7},{value:" \u7684 value\u3002",paraId:6,tocIndex:7},{value:"H5\uFF1A\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"type",paraId:7,tocIndex:8},{value:" \u53EF\u6307\u5B9A\u8F93\u5165\u6846\u7C7B\u578B\uFF0C",paraId:7,tocIndex:8},{value:"type",paraId:7,tocIndex:8},{value:" \u7684\u503C\u5E94\u4E3A\u6807\u51C6 ",paraId:7,tocIndex:8},{value:"HTML5 input type",paraId:7,tocIndex:8},{value:"\u5C0F\u7A0B\u5E8F\uFF1A",paraId:8,tocIndex:8},{value:"type",paraId:8,tocIndex:8},{value:" \u503C\u5728\u4E0D\u540C\u6E20\u9053\u5B9E\u73B0\u6709\u6240\u4E0D\u540C\uFF0C\u53EF\u53C2\u8003",paraId:8,tocIndex:8},{value:"\u5C0F\u7A0B\u5E8F input type",paraId:8,tocIndex:8},{value:"\u5C5E\u6027",paraId:9,tocIndex:9},{value:"\u8BF4\u660E",paraId:9,tocIndex:9},{value:"\u7C7B\u578B",paraId:9,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:9},{value:"defaultValue",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u9ED8\u8BA4\u5185\u5BB9\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"value",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u5185\u5BB9\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"inputProps",paraId:9,tocIndex:9},{value:"\u5185\u90E8",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:"\u6807\u7B7E\u7684\u6807\u51C6\u5C5E\u6027",paraId:9,tocIndex:9},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"inputRef",paraId:9,tocIndex:9},{value:"\u5185\u90E8",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:"\u6807\u7B7E\u7684 ref",paraId:9,tocIndex:9},{value:"React.Ref<HTMLInputElement>",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"name",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:"\u540D\u79F0\u6807\u8BC6",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"type",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:"\u7C7B\u578B\u6807\u8BC6\uFF0C\u5E94\u8BE5\u4E3A\u6709\u6548\u7684 HTML5 input type \u503C \u6216 \u5C0F\u7A0B\u5E8F\u652F\u6301\u7684 type \u503C",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"text",paraId:9,tocIndex:9},{value:"clearable",paraId:9,tocIndex:9},{value:"\u662F\u5426\u5C55\u793A\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"startIcon",paraId:9,tocIndex:9},{value:"\u5E26\u56FE\u6807\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u56FE\u6807",paraId:9,tocIndex:9},{value:"ReactNode",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"endIcon",paraId:9,tocIndex:9},{value:"\u5E26\u56FE\u6807\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u56FE\u6807\uFF0C\u82E5 clearable=true\uFF0C\u5219\u4E24\u4E2A\u56FE\u6807\u90FD\u4F1A\u5C55\u793A",paraId:9,tocIndex:9},{value:"ReactNode",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"placeholder",paraId:9,tocIndex:9},{value:"\u5360\u4F4D\u5185\u5BB9",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"disabled",paraId:9,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"onClear",paraId:9,tocIndex:9},{value:"\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u7684\u56DE\u8C03\uFF0C\u975E\u53D7\u63A7\u72B6\u6001\u4E5F\u4F1A\u6E05\u9664\u8F93\u5165\u6846\u5185\u5BB9",paraId:9,tocIndex:9},{value:"(e: React.SyntheticEvent) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"onChange",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(e: React.ChangeEvent<HTMLInputElement>,data: {value:string}) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"onFocus",paraId:9,tocIndex:9},{value:"\u805A\u7126\u65F6\u7684\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(e: React.SyntheticEvent) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"onBlur",paraId:9,tocIndex:9},{value:"\u5931\u7126\u65F6\u7684\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(e: React.SyntheticEvent) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9}]},49363:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u5217\u8868\u65F6\u4E00\u7EC4\u8FDE\u7EED\u7684\u6587\u672C\u6216\u8005\u56FE\u50CF\uFF0C\u7531\u4E3B\u8981\u64CD\u4F5C\u8DDF\u8865\u5145\u64CD\u4F5C\u7684\u9879\u76EE\u7EC4\u5408\u6210\uFF0C\u5E38\u7528\u4E8E\u6570\u636E\u5C55\u793A\u3002",paraId:0,tocIndex:0},{value:"\u6700\u57FA\u7840\u7684\u5217\u8868\u5C55\u793A\uFF0C\u53EF\u7528\u4E8E\u627F\u8F7D\u6587\u5B57\u3001\u56FE\u7247\u3001\u6BB5\u843D\u7B49\u3002",paraId:1,tocIndex:2},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:2},{value:"ListItem",paraId:2},{value:`\u7EC4\u4EF6\uFF0C\u7528\u6765\u627F\u8F7D\u5217\u8868\u5B50\u9879\u3002
`,paraId:2},{value:"ListItem",paraId:2},{value:"\u7EC4\u4EF6\u5212\u5206\u6210 4 \u4E2A\u533A\u57DF\uFF1A",paraId:2},{value:"ListItemHeader",paraId:2},{value:"\u3001",paraId:2},{value:"ListItemContent",paraId:2},{value:"\u3001",paraId:2},{value:"ListItemExtra",paraId:2},{value:"\u3001",paraId:2},{value:"ListItemFooter",paraId:2},{value:"\u3002",paraId:2},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:3,tocIndex:3},{value:"disabled",paraId:3,tocIndex:3},{value:`\u5C5E\u6027\u6765\u63A7\u5236\u5217\u8868\u7684\u53EF\u70B9\u51FB\u6001\u3002
\u60A8\u53EF\u4EE5\u901A\u8FC7`,paraId:3,tocIndex:3},{value:"ListItem",paraId:3,tocIndex:3},{value:"\u7EC4\u4EF6\u4F20\u9012",paraId:3,tocIndex:3},{value:"disabled",paraId:3,tocIndex:3},{value:"\u5355\u72EC\u63A7\u5236\u5B50\u9879\u7981\u6B62\u70B9\u51FB\u3002",paraId:3,tocIndex:3},{value:"\u5217\u8868\u7EC4\u4EF6\u53EF\u901A\u8FC7",paraId:4,tocIndex:4},{value:"header",paraId:4,tocIndex:4},{value:"\u3001",paraId:4,tocIndex:4},{value:"subheader",paraId:4,tocIndex:4},{value:"\u8BBE\u7F6E\u5217\u8868\u5934\u90E8\u3002",paraId:4,tocIndex:4},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:5,tocIndex:5},{value:"ListItemHeader",paraId:5,tocIndex:5},{value:"\u5B50\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u5236\u5217\u8868\u9879\u5934\u90E8\u64CD\u4F5C\u533A\uFF0C\u5E38\u7528\u4E8E\u5B9A\u5236\u5217\u8868\u9879\u5934\u90E8\u56FE\u6807\u3002",paraId:5,tocIndex:5},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:6,tocIndex:6},{value:"ListItemContent",paraId:6,tocIndex:6},{value:`\u5B50\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u5236\u5217\u8868\u5B50\u9879\u5185\u5BB9\u533A\u57DF\u3002
\u60A8\u53EF\u4EE5\u901A\u8FC7`,paraId:6,tocIndex:6},{value:"primary",paraId:6,tocIndex:6},{value:"\u3001",paraId:6,tocIndex:6},{value:"secondary",paraId:6,tocIndex:6},{value:"\u5C5E\u6027\u8BBE\u7F6E\u5217\u8868\u5B50\u9879\u4E3B\u5185\u5BB9\u533A\u57DF\u4E0E\u526F\u5185\u5BB9\u533A\u57DF\u3002",paraId:6,tocIndex:6},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:7,tocIndex:7},{value:"ListItemFooter",paraId:7,tocIndex:7},{value:"\u5B50\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u5236\u5217\u8868\u9879\u5C3E\u90E8\u533A\u57DF\u3002",paraId:7,tocIndex:7},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:8,tocIndex:8},{value:"ListItemExtra",paraId:8,tocIndex:8},{value:`\u5B50\u7EC4\u4EF6\uFF0C\u7528\u6765\u5B9A\u5236\u5217\u8868\u9879\u53F3\u4FA7\u64CD\u4F5C\u533A\u3002
`,paraId:8,tocIndex:8},{value:"ListItemExtra",paraId:8,tocIndex:8},{value:"\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u7528\u6765\u914D\u7F6E\u5F00\u5173\u3001\u7528\u6765\u5355\u72EC\u63A7\u5236\u5217\u8868\u5B50\u9879\u3002",paraId:8,tocIndex:8},{value:"\u5217\u8868\u7EC4\u4EF6\u9ED8\u8BA4\u5B50\u9879\u4E4B\u524D\u6709\u5206\u5272\u7EBF\uFF0C\u901A\u8FC7\u63D0\u4F9B",paraId:9,tocIndex:9},{value:"dividerProp",paraId:9,tocIndex:9},{value:`\u5C5E\u6027\u900F\u4F20\u5206\u5272\u7EBF\u7EC4\u4EF6\u5C5E\u6027\u3002
\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7`,paraId:9,tocIndex:9},{value:"hideDivider",paraId:9,tocIndex:9},{value:"\u9690\u85CF\u5206\u5272\u7EBF\u3002",paraId:9,tocIndex:9},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:10,tocIndex:10},{value:"3",paraId:10,tocIndex:10},{value:"\u79CD\u5927\u5C0F\u5C3A\u5BF8\uFF1A",paraId:10,tocIndex:10},{value:"small",paraId:10,tocIndex:10},{value:"\u3001",paraId:10,tocIndex:10},{value:"medium",paraId:10,tocIndex:10},{value:"\u3001",paraId:10,tocIndex:10},{value:"large",paraId:10,tocIndex:10},{value:"\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:10,tocIndex:10},{value:"size",paraId:10,tocIndex:10},{value:"\u5C5E\u6027\u5B9A\u5236\u8FD9 3 \u79CD\u5C3A\u5BF8\u3002",paraId:10,tocIndex:10},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u8BF4\u660E",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"header",paraId:11,tocIndex:12},{value:"\u5217\u8868\u5934\u90E8\u5185\u5BB9",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"subheader",paraId:11,tocIndex:12},{value:"\u5217\u8868\u5B50\u5934\u90E8\u5185\u5BB9",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"hideDivider",paraId:11,tocIndex:12},{value:"\u662F\u5426\u9690\u85CF\u5206\u5272\u7EBF",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"size",paraId:11,tocIndex:12},{value:"\u5217\u8868\u5C3A\u5BF8",paraId:11,tocIndex:12},{value:"small",paraId:11,tocIndex:12},{value:"\uFF5C",paraId:11,tocIndex:12},{value:"medium",paraId:11,tocIndex:12},{value:"\uFF5C",paraId:11,tocIndex:12},{value:"large",paraId:11,tocIndex:12},{value:"medium",paraId:11,tocIndex:12},{value:"component",paraId:11,tocIndex:12},{value:"\u5217\u8868\u8282\u70B9\u6807\u7B7E",paraId:11,tocIndex:12},{value:"React.ElementType",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:12,tocIndex:13},{value:"\u8BF4\u660E",paraId:12,tocIndex:13},{value:"\u7C7B\u578B",paraId:12,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:13},{value:"endIcon",paraId:12,tocIndex:13},{value:"\u5217\u8868\u5B50\u9879\u53F3\u4FA7\u64CD\u4F5C\u56FE\u6807",paraId:12,tocIndex:13},{value:"ReactNode \uFF5Cboolean",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"disabled",paraId:12,tocIndex:13},{value:"\u5217\u8868\u662F\u5426\u4E0D\u53EF\u70B9\u51FB",paraId:12,tocIndex:13},{value:"boolean",paraId:12,tocIndex:13},{value:"false",paraId:12,tocIndex:13},{value:"hideDivider",paraId:12,tocIndex:13},{value:"\u662F\u5426\u9690\u85CF\u5206\u5272\u7EBF",paraId:12,tocIndex:13},{value:"boolean",paraId:12,tocIndex:13},{value:"false",paraId:12,tocIndex:13},{value:"component",paraId:12,tocIndex:13},{value:"\u6839\u8282\u70B9\u6807\u7B7E",paraId:12,tocIndex:13},{value:"React.ElementType",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u5C5E\u6027",paraId:13,tocIndex:14},{value:"\u8BF4\u660E",paraId:13,tocIndex:14},{value:"\u7C7B\u578B",paraId:13,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:14},{value:"primary",paraId:13,tocIndex:14},{value:"\u4E3B\u8981\u5185\u5BB9",paraId:13,tocIndex:14},{value:"ReactNode",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"secondary",paraId:13,tocIndex:14},{value:"\u6B21\u8981\u5185\u5BB9",paraId:13,tocIndex:14},{value:"ReactNode",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"component",paraId:13,tocIndex:14},{value:"\u6839\u8282\u70B9\u6807\u7B7E",paraId:13,tocIndex:14},{value:"React.ElementType",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"\u5C5E\u6027",paraId:14,tocIndex:15},{value:"\u8BF4\u660E",paraId:14,tocIndex:15},{value:"\u7C7B\u578B",paraId:14,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:15},{value:"component",paraId:14,tocIndex:15},{value:"\u6839\u8282\u70B9\u6807\u7B7E",paraId:14,tocIndex:15},{value:"React.ElementType",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15}]},8706:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u5C55\u793A\u4E00\u4E2A\u52A0\u8F7D\u4E2D\u7684\u56FE\u6807",paraId:0,tocIndex:2},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:1,tocIndex:3},{value:"children",paraId:1,tocIndex:3},{value:"\u5C5E\u6027\u4F20\u9012\u6587\u6848\uFF0C\u975E",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"\u7C7B\u578B\u7684\u5185\u5BB9\u4F1A\u9ED8\u8BA4\u6DFB\u52A0\u4E00\u5C42DOM\u7ED3\u6784\u6765\u63A7\u5236\u6837\u5F0F\u3002",paraId:1,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:2,tocIndex:4},{value:"direction",paraId:2,tocIndex:4},{value:"\u4F20\u9012",paraId:2,tocIndex:4},{value:"vertical",paraId:2,tocIndex:4},{value:" \uFF5C ",paraId:2,tocIndex:4},{value:"horizontal",paraId:2,tocIndex:4},{value:"\u6765\u63A7\u5236\u884C\u5217\u5C55\u793A\u5F62\u5F0F\u3002",paraId:2,tocIndex:4},{value:"\u901A\u8FC7\u8BBE\u7F6E",paraId:3,tocIndex:5},{value:"IconProps",paraId:3,tocIndex:5},{value:"\u6765\u63A7\u5236\u5185\u90E8\u56FE\u6807",paraId:3,tocIndex:5},{value:"\u5C5E\u6027",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"className",paraId:4,tocIndex:7},{value:"\u7EC4\u4EF6\u7C7B\u540D",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"icon",paraId:4,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807",paraId:4,tocIndex:7},{value:"ReactNode",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"IconProps",paraId:4,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u56FE\u6807",paraId:4,tocIndex:7},{value:"ISvgIconProps",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"direction",paraId:4,tocIndex:7},{value:"\u52A0\u8F7D\u56FE\u6807\u548C\u52A0\u8F7D\u6587\u6848\u7684\u6392\u5217\u65B9\u5F0F",paraId:4,tocIndex:7},{value:"'vertical' | 'horizontal'",paraId:4,tocIndex:7},{value:"'vertical'",paraId:4,tocIndex:7},{value:"children",paraId:4,tocIndex:7},{value:"\u63A7\u5236\u52A0\u8F7D\u6587\u6848\u5185\u5BB9",paraId:4,tocIndex:7},{value:"ReactNode",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"\u5C5E\u6027",paraId:5,tocIndex:8},{value:"\u8BF4\u660E",paraId:5,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:8},{value:"\u5168\u5C40\u53D8\u91CF",paraId:5,tocIndex:8},{value:"--animation-duration",paraId:5,tocIndex:8},{value:"\u52A0\u8F7D\u52A8\u753B\u64AD\u653E\u5468\u671F",paraId:5,tocIndex:8},{value:"1.6s",paraId:5,tocIndex:8},{value:"--bui-loading-animation-duration",paraId:5,tocIndex:8}]},40261:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:`\u57FA\u7840\u7684\u6D6E\u5C42\u7EC4\u4EF6\u3002
\u63D0\u4F9B\u4E86\u5728\u4E3B\u89C6\u56FE\u9876\u90E8\u7ED8\u5236\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u5E76\u9694\u7EDD\u4E0B\u5C42\u5185\u5BB9\u4EA4\u4E92\u7684\u80FD\u529B\u3002`,paraId:0,tocIndex:0},{value:`\u4F7F\u7528open\u63A7\u5236\u5F39\u7A97\u7684\u6253\u5F00/\u5173\u95ED
\u70B9\u51FB\u5F39\u7A97\u906E\u7F69\u5C42\u7B49\u5173\u95ED\u7684\u4E8B\u4EF6\u4F1A\u901A\u8FC7onClose\u56DE\u8C03\u8FD4\u56DE`,paraId:1,tocIndex:2},{value:"\u4F7F\u7528",paraId:2,tocIndex:3},{value:"hideBackdrop",paraId:2,tocIndex:3},{value:`\u4E0D\u6E32\u67D3\u5E95\u90E8\u906E\u7F69\uFF08\u4E0D\u89E6\u53D1\u70B9\u51FB\uFF0C\u9700\u81EA\u884C\u5B9E\u73B0\u5173\u95ED\u903B\u8F91\uFF09
\u4F7F\u7528`,paraId:2,tocIndex:3},{value:"BackdropProps",paraId:2,tocIndex:3},{value:"\u7684",paraId:2,tocIndex:3},{value:"invisible",paraId:2,tocIndex:3},{value:"\u4F7F\u5F97\u906E\u7F69\u5C42\u4E0D\u53EF\u89C1\uFF08\u4ECD\u89E6\u53D1\u70B9\u51FB\uFF09",paraId:2,tocIndex:3},{value:`Modal\u4F1A\u533A\u5206\u6BCF\u4E2A\u6ED1\u52A8/\u6EDA\u52A8\u4E8B\u4EF6\u7684\u76EE\u6807\u5E76\u9632\u6B62\u5F39\u5C42\u5C55\u793A\u65F6\u5BF9\u5F39\u5C42\u4E0B\u65B9\u7684\u9875\u9762\u8FDB\u884C\u64CD\u4F5C\u3002
\u5982\u679C\u8FD9\u4E00\u884C\u4E3A\u5E26\u6765\u4E86\u56F0\u6270\uFF0C\u4F7F\u7528`,paraId:3,tocIndex:4},{value:"disableScrollLock",paraId:3,tocIndex:4},{value:"\u5173\u95ED\u8FD9\u4E00\u7279\u6027",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"keepMounted",paraId:4,tocIndex:5},{value:" \u63A7\u5236",paraId:4,tocIndex:5},{value:"open",paraId:4,tocIndex:5},{value:"\u53D8\u4E3A false \u540E\u7EC4\u4EF6\u7684\u6574\u4F53\u5378\u8F7D\u65F6\u673A\u4EE5\u5904\u7406\u53EF\u80FD\u7684\u52A8\u753B\u573A\u666F\uFF08\u4F8B\uFF1A",paraId:4,tocIndex:5},{value:"Drawer\u7EC4\u4EF6",paraId:5,tocIndex:5},{value:`\u62BD\u5C49\u90E8\u5206\u7684\u6ED1\u51FA\u52A8\u6548\uFF09\u3002
\u4F20\u5165 true \u8868\u793A\u73B0\u5728\u8FD8\u4E0D\u5E94\u5378\u8F7D modal\uFF08eg.\u5185\u90E8\u5143\u7D20\u7684\u9000\u51FA\u52A8\u753B\u8FD8\u5728\u8FDB\u884C\u4E2D\uFF09\u3002`,paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:6,tocIndex:6},{value:"\u8BF4\u660E",paraId:6,tocIndex:6},{value:"\u7C7B\u578B",paraId:6,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:6},{value:"open",paraId:6,tocIndex:6},{value:"\u5F39\u5C42\u663E\u793A",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6},{value:"container",paraId:6,tocIndex:6},{value:"Portal\u76EE\u6807\u5BB9\u5668",paraId:6,tocIndex:6},{value:"PortalProps['container']",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"hideBackdrop",paraId:6,tocIndex:6},{value:"\u4E0D\u6E32\u67D3Backdrop",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6},{value:"BackdropProps",paraId:6,tocIndex:6},{value:"\u900F\u4F20\u7ED9Backdrop\u7684\u53C2\u6570",paraId:6,tocIndex:6},{value:"BackdropProps",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"onClose",paraId:6,tocIndex:6},{value:"\u5173\u95ED\u56DE\u8C03",paraId:6,tocIndex:6},{value:"(event, reason) => void",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"disableScrollLock",paraId:6,tocIndex:6},{value:"\u7981\u7528\u6EDA\u52A8\u7A7F\u900F\u9632\u62A4",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6},{value:"disablePortal",paraId:6,tocIndex:6},{value:"\u7981\u7528Portal",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6},{value:"keepMounted",paraId:6,tocIndex:6},{value:"\u4FDD\u6301\u7EC4\u4EF6\u6302\u8F7D",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6}]},73897:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u63D0\u4F9B\u9875\u9762\u7684\u5BFC\u822A\u7EC4\u4EF6\uFF0C\u5E38\u89C1\u4E8E\u79FB\u52A8\u7AEF\u9875\u9762\u7684\u9876\u90E8",paraId:0,tocIndex:0},{value:"\u76F4\u63A5\u5F15\u5165\u7EC4\u4EF6\u5373\u53EF\u5728\u9875\u9762\u5934\u90E8\u6DFB\u52A0\u5BFC\u822A\u680F",paraId:1,tocIndex:2},{value:"\u7EC4\u4EF6\u652F\u6301\u4FEE\u6539\u5DE6\u4FA7\u8FD4\u56DE\u7BAD\u5934\u7684\u6837\u5F0F\uFF0C\u901A\u8FC7\u5411",paraId:2,tocIndex:3},{value:"leftIcon",paraId:2,tocIndex:3},{value:"\u4F20\u9012",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3},{value:"\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4FEE\u6539\u5DE6\u4FA7\u8FD4\u56DE\u7BAD\u5934\u3002\u5F53\u4F20\u53C2\u6570\u4E3A",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"\u7684\u60C5\u51B5\uFF0C\u9690\u85CF\u56FE\u6807\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7\u8BBE\u7F6E",paraId:3,tocIndex:4},{value:"IconProps",paraId:3,tocIndex:4},{value:"\u6765\u63A7\u5236\u5185\u90E8\u56FE\u6807",paraId:3,tocIndex:4},{value:"\u901A\u8FC7\u5411",paraId:4,tocIndex:5},{value:"left",paraId:4,tocIndex:5},{value:"\u5C5E\u6027\u4F20\u9012",paraId:4,tocIndex:5},{value:"ReactNode",paraId:4,tocIndex:5},{value:"\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4FEE\u6539\u8FD4\u56DE\u7BAD\u5934\u5DE6\u4FA7\u7684\u6587\u6848\u5185\u5BB9\u3002",paraId:4,tocIndex:5},{value:"\u7EC4\u4EF6\u652F\u6301\u81EA\u5B9A\u4E49\u6807\u9898\uFF0C\u901A\u8FC7\u5411",paraId:5,tocIndex:6},{value:"title",paraId:5,tocIndex:6},{value:"\u5C5E\u6027\u4F20\u9012",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u5B8C\u6210\u6807\u9898\u7684\u4FEE\u6539\u3002",paraId:5,tocIndex:6},{value:"string",paraId:5,tocIndex:6},{value:"\u7C7B\u578B\u7684\u6807\u9898\u652F\u6301\u8D85\u51FA\u90E8\u5206\u7701\u7565\u5C55\u793A\uFF0C",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u3002",paraId:5,tocIndex:6},{value:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u5411",paraId:6,tocIndex:7},{value:"right",paraId:6,tocIndex:7},{value:"\u5C5E\u6027\u4F20\u9012",paraId:6,tocIndex:7},{value:"ReactNode",paraId:6,tocIndex:7},{value:"\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u6765\u5B8C\u6210\u53F3\u4FA7\u533A\u57DF\u5185\u5BB9\u7684\u81EA\u5B9A\u4E49\uFF0C\u53C2\u8003",paraId:6,tocIndex:7},{value:"@bifrostui/icons",paraId:6,tocIndex:7},{value:"\u4E2D\u7684\u56FE\u6807\u5185\u5BB9\u3002",paraId:6,tocIndex:7},{value:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u5411",paraId:7,tocIndex:8},{value:"fixed",paraId:7,tocIndex:8},{value:"\u5C5E\u6027\u4F20\u9012",paraId:7,tocIndex:8},{value:"true",paraId:7,tocIndex:8},{value:"\u5C06\u5BFC\u822A\u680F\u56FA\u5B9A\u5728\u9875\u9762\u9876\u90E8\uFF0C\u540C\u65F6\u53EF\u4EE5\u8BBE\u7F6E",paraId:7,tocIndex:8},{value:"placeholder",paraId:7,tocIndex:8},{value:"\u5C5E\u6027\u4F20\u9012",paraId:7,tocIndex:8},{value:"true",paraId:7,tocIndex:8},{value:"\u5728\u539F\u6709\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u5360\u4F4D\u5757\u3002",paraId:7,tocIndex:8},{value:"\u5C5E\u6027",paraId:8,tocIndex:10},{value:"\u8BF4\u660E",paraId:8,tocIndex:10},{value:"\u7C7B\u578B",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:10},{value:"className",paraId:8,tocIndex:10},{value:"\u7EC4\u4EF6\u7C7B\u540D",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"title",paraId:8,tocIndex:10},{value:"\u6807\u9898",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"left",paraId:8,tocIndex:10},{value:"\u5BFC\u822A\u680F\u5DE6\u4FA7\u5185\u5BB9\u81EA\u5B9A\u4E49",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"leftIcon",paraId:8,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u7BAD\u5934\uFF0Cfalse\u63A7\u5236\u9690\u85CF",paraId:8,tocIndex:10},{value:"ReactNode | boolean",paraId:8,tocIndex:10},{value:"<ArrowBackwardLargeIcon />",paraId:8,tocIndex:10},{value:"IconProps",paraId:8,tocIndex:10},{value:"\u900F\u4F20\u7ED9\u5185\u90E8\u56FE\u6807\u7684\u5C5E\u6027",paraId:8,tocIndex:10},{value:"ISvgIconProps",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"right",paraId:8,tocIndex:10},{value:"\u5BFC\u822A\u680F\u53F3\u4FA7\u5185\u5BB9\u81EA\u5B9A\u4E49",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"fixed",paraId:8,tocIndex:10},{value:"\u662F\u5426\u56FA\u5B9A\u5728\u9876\u90E8",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"placeholder",paraId:8,tocIndex:10},{value:"\u56FA\u5B9A\u5728\u9876\u90E8\u65F6\uFF0C\u662F\u5426\u5728\u6807\u7B7E\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u7B49\u9AD8\u7684\u5360\u4F4D\u5143\u7D20\uFF08\u6C89\u6D78\u5F0F\u6548\u679C\u573A\u666F\u8003\u8651\u5173\u95ED\uFF09",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"onClickLeft",paraId:8,tocIndex:10},{value:"\u70B9\u51FB\u8FD4\u56DE\u6309\u94AE\u56DE\u8C03\u4E8B\u4EF6",paraId:8,tocIndex:10},{value:"(e: SyntheticEvent<HTMLDivElement) => void",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"\u5C5E\u6027",paraId:9,tocIndex:11},{value:"\u8BF4\u660E",paraId:9,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:11},{value:"\u5168\u5C40\u53D8\u91CF",paraId:9,tocIndex:11},{value:"--height",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u9AD8\u5EA6",paraId:9,tocIndex:11},{value:"45px",paraId:9,tocIndex:11},{value:"--bui-navbar-height",paraId:9,tocIndex:11},{value:"--icon-size",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u56FE\u6807\u5927\u5C0F",paraId:9,tocIndex:11},{value:"30px",paraId:9,tocIndex:11},{value:"--bui-navbar-icon-size",paraId:9,tocIndex:11},{value:"--background-color",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u80CC\u666F\u8272",paraId:9,tocIndex:11},{value:"var(--bui-color-white)",paraId:9,tocIndex:11},{value:"--bui-navbar-background-color",paraId:9,tocIndex:11},{value:"--border-bottom",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u5E95\u90E8\u8FB9\u6846\u6837\u5F0F",paraId:9,tocIndex:11},{value:"none",paraId:9,tocIndex:11},{value:"--bui-navbar-border-bottom",paraId:9,tocIndex:11},{value:"--z-index",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u9ED8\u8BA4\u5C42\u7EA7",paraId:9,tocIndex:11},{value:"auto",paraId:9,tocIndex:11},{value:"--bui-navbar-z-index",paraId:9,tocIndex:11}]},86600:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"Portal\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u5C06\u5176\u5B50\u8282\u70B9\u6E32\u67D3\u5230\u5F53\u524D DOM \u7ED3\u6784\u4E4B\u5916\u7684DOM\u8282\u70B9\u4E2D\u3002\u7EC4\u4EF6\u5E95\u5C42\u4F7F\u7528\u7684\u662F",paraId:0,tocIndex:0},{value:"React createPortal",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u60C5\u51B5Portal\u7EC4\u4EF6\u4F1A\u5C06\u5B50\u7EC4\u4EF6\u6302\u8F7D\u5230\u9875\u9762\u7684\u6839\u8282\u70B9\u4E0A\uFF0CH5\u662F",paraId:1,tocIndex:2},{value:"document.body",paraId:1,tocIndex:2},{value:", \u5C0F\u7A0B\u5E8F\u662F",paraId:1,tocIndex:2},{value:"page\u8282\u70B9",paraId:1,tocIndex:2},{value:`import React from 'react';
import { Portal } from '@bifrostui/react';

export default () => {
  return (
    <Portal>
      <div>\u6302\u8F7D\u5728\u9875\u9762\u6839\u8282\u70B9\u4E0A</div>
    </Portal>
  );
};
`,paraId:2,tocIndex:2},{value:"\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528",paraId:3,tocIndex:3},{value:"container",paraId:3,tocIndex:3},{value:"\u6765\u6307\u5B9APortal\u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6\u6302\u8F7D\u7684\u8282\u70B9",paraId:3,tocIndex:3},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:4,tocIndex:4},{value:"disablePortal",paraId:4,tocIndex:4},{value:"\u4F7Fchildren\u88AB\u6E32\u67D3\u5728\u7236\u8282\u70B9\u4E2D\uFF0C\u800C\u975Econtainer\u4E2D",paraId:4,tocIndex:4},{value:"\u5C5E\u6027",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"children",paraId:5,tocIndex:5},{value:"Portal\u7EC4\u4EF6\u7684\u5B50\u5143\u7D20",paraId:5,tocIndex:5},{value:"React.ReactNode",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"container",paraId:5,tocIndex:5},{value:"children\u5185\u5BB9\u5C06\u4F1A\u88ABappend\u5230container\u4E2D",paraId:5,tocIndex:5},{value:"Element | (() => Element | null) | null",paraId:5,tocIndex:5},{value:"\u9875\u9762\u8DDF\u8282\u70B9",paraId:5,tocIndex:5},{value:"disablePortal",paraId:5,tocIndex:5},{value:"\u7981\u6B62Portal\uFF0Cchildren\u5C06\u88AB\u6E32\u67D3\u5728\u7236\u8282\u70B9\u4E2D",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5}]},17731:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:2},{value:"percent",paraId:1,tocIndex:2},{value:"\u8BBE\u7F6E\u64CD\u4F5C\u8FDB\u5EA6\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7",paraId:2,tocIndex:3},{value:"strokeColor",paraId:2,tocIndex:3},{value:"\u8BBE\u7F6E\u7EBF\u6761\u989C\u8272\uFF0C\u5176\u9ED8\u8BA4\u503C\u4E3A",paraId:2,tocIndex:3},{value:"--bui-color-primary",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:3,tocIndex:4},{value:"strokeWidth",paraId:3,tocIndex:4},{value:"\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u5BBD\u5EA6\u3002",paraId:3,tocIndex:4},{value:"linear-gradient",paraId:4,tocIndex:5},{value:"\u7684\u5C01\u88C5\u3002\u63A8\u8350\u53EA\u4F20\u4E24\u79CD\u989C\u8272\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7",paraId:5,tocIndex:6},{value:"trailColor",paraId:5,tocIndex:6},{value:"\u6307\u5B9A\u672A\u5B8C\u6210\u7684\u5206\u6BB5\u7684\u989C\u8272\u3002",paraId:5,tocIndex:6},{value:"\u5C5E\u6027",paraId:6,tocIndex:7},{value:"\u8BF4\u660E",paraId:6,tocIndex:7},{value:"\u7C7B\u578B",paraId:6,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:7},{value:"percent",paraId:6,tocIndex:7},{value:"\u767E\u5206\u6BD4",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"strokeColor",paraId:6,tocIndex:7},{value:"\u8FDB\u5EA6\u6761\u7684\u8272\u5F69\uFF0C\u4F20\u5165 object \u65F6\u4E3A\u6E10\u53D8",paraId:6,tocIndex:7},{value:"string | { from: string; to: string; direction?: string } | { [percentage: string]: string; direction?: string }",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"trailColor",paraId:6,tocIndex:7},{value:"\u672A\u586B\u5145\u8FDB\u5EA6\u6761\u7684\u8272\u5F69",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"strokeWidth",paraId:6,tocIndex:7},{value:"\u8FDB\u5EA6\u6761\u7EBF\u7684\u5BBD\u5EA6",paraId:6,tocIndex:7},{value:"number | string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"\u5C5E\u6027",paraId:7,tocIndex:8},{value:"\u8BF4\u660E",paraId:7,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:8},{value:"--fill-color",paraId:7,tocIndex:8},{value:"\u8FDB\u5EA6\u6761\u7684\u8272\u5F69",paraId:7,tocIndex:8},{value:"--bui-color-primary",paraId:7,tocIndex:8},{value:"--trail-color",paraId:7,tocIndex:8},{value:"\u672A\u586B\u5145\u8FDB\u5EA6\u6761\u7684\u8272\u5F69",paraId:7,tocIndex:8},{value:"rgba(156, 156, 165, 0.2)",paraId:7,tocIndex:8},{value:"--stroke-width",paraId:7,tocIndex:8},{value:"\u8FDB\u5EA6\u6761\u5BBD\u5EA6",paraId:7,tocIndex:8},{value:"8px",paraId:7,tocIndex:8}]},79175:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u5355\u9009\u6846\uFF0C\u4F7F\u7528\u6237\u80FD\u591F\u4ECE\u4E00\u7EC4\u9009\u9879\u4E2D\u9009\u62E9\u4E00\u4E2A\u9009\u9879\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"checked",paraId:1,tocIndex:2},{value:" \u548C ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u63A7\u5236\u72B6\u6001\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"inputProps",paraId:2,tocIndex:3},{value:" \u4F20\u5165\u7684 input \u5C5E\u6027\u53EF\u900F\u4F20\u81F3\u5185\u90E8",paraId:2,tocIndex:3},{value:"input",paraId:2,tocIndex:3},{value:"\u6807\u7B7E\u3002",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:" \u548C ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:" \u53EF\u76F4\u63A5\u900F\u4F20\u81F3\u5185\u90E8",paraId:3,tocIndex:4},{value:"input",paraId:3,tocIndex:4},{value:"\u6807\u7B7E\uFF0C\u4E0D\u4F1A\u88AB ",paraId:3,tocIndex:4},{value:"inputProps",paraId:3,tocIndex:4},{value:" \u4F20\u5165\u7684\u540C\u540D\u5C5E\u6027\u8986\u76D6\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"labelPlacement",paraId:4,tocIndex:5},{value:" \u53EF\u63A7\u5236\u6587\u6848\u5728\u590D\u9009\u6846\u56FE\u6807\u7684\u4F4D\u7F6E\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"icon",paraId:5,tocIndex:6},{value:" \u53EF\u81EA\u5B9A\u4E49\u4E3A\u9009\u4E2D\u72B6\u6001\u56FE\u6807\uFF0C",paraId:5,tocIndex:6},{value:"checkedIcon",paraId:5,tocIndex:6},{value:" \u53EF\u81EA\u5B9A\u4E49\u9009\u4E2D\u72B6\u6001\u56FE\u6807\u3002",paraId:5,tocIndex:6},{value:"\u4F7F\u7528",paraId:6,tocIndex:7},{value:"disabled",paraId:6,tocIndex:7},{value:"\u7981\u7528\u7EC4\u4EF6\uFF0C",paraId:6,tocIndex:7},{value:"RadioGroup.disabled",paraId:6,tocIndex:7},{value:" \u53EF\u6574\u7EC4\u7981\u7528\u3002",paraId:6,tocIndex:7},{value:"RadioGroup",paraId:7,tocIndex:8},{value:" \u548C ",paraId:7,tocIndex:8},{value:"Radio",paraId:7,tocIndex:8},{value:" \u7EC4\u5408\uFF0C\u53EF\u5B9E\u73B0\u590D\u9009\u6846\u7EC4\uFF0C\u4E14\u6B64\u65F6\u7684 ",paraId:7,tocIndex:8},{value:"Radio",paraId:7,tocIndex:8},{value:" \u5E94\u8BE5\u4F20\u5165 ",paraId:7,tocIndex:8},{value:"value",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u3002",paraId:7,tocIndex:8},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:9},{value:"value",paraId:8,tocIndex:9},{value:" \u63A7\u5236 ",paraId:8,tocIndex:9},{value:"RadioGroup",paraId:8,tocIndex:9},{value:" \u7EC4\u4EF6\uFF0C\u901A\u8FC7 ",paraId:8,tocIndex:9},{value:"checked",paraId:8,tocIndex:9},{value:" \u63A7\u5236 ",paraId:8,tocIndex:9},{value:"Radio",paraId:8,tocIndex:9},{value:" \u7EC4\u4EF6\u3002",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"defaultValue",paraId:9,tocIndex:10},{value:" \u6307\u5B9A ",paraId:9,tocIndex:10},{value:"RadioGroup",paraId:9,tocIndex:10},{value:" \u7EC4\u4EF6\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"defaultChecked",paraId:9,tocIndex:10},{value:" \u6307\u5B9A ",paraId:9,tocIndex:10},{value:"Radio",paraId:9,tocIndex:10},{value:" \u7EC4\u4EF6\u9ED8\u8BA4\u503C\u3002",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:12},{value:"\u8BF4\u660E",paraId:10,tocIndex:12},{value:"\u7C7B\u578B",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:12},{value:"defaultValue",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"value",paraId:10,tocIndex:12},{value:"\u6307\u5B9A\u9009\u4E2D\u7684\u9009\u9879\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"\u6574\u7EC4\u662F\u5426\u7981\u7528",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:10,tocIndex:12},{value:"(e: React.SyntheticEvent,data: {value: string}) => void",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"\u5C5E\u6027",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"defaultChecked",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u662F\u5426\u9009\u4E2D\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checked",paraId:11,tocIndex:13},{value:"\u662F\u5426\u9009\u4E2D\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputProps",paraId:11,tocIndex:13},{value:"\u5185\u90E8",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u6807\u7B7E\u7684\u6807\u51C6\u5C5E\u6027",paraId:11,tocIndex:13},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputRef",paraId:11,tocIndex:13},{value:"\u5185\u90E8",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u6807\u7B7E\u7684 ref",paraId:11,tocIndex:13},{value:"React.Ref<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"name",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u540D\u79F0\u6807\u8BC6",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"value",paraId:11,tocIndex:13},{value:"\u7EC4\u4EF6\u7684\u503C\uFF0C\u82E5\u4F7F\u7528 RadioGroup \u5E94\u4F20\u5165\u8BE5\u5C5E\u6027",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"disabled",paraId:11,tocIndex:13},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"icon",paraId:11,tocIndex:13},{value:"\u672A\u9009\u4E2D\u72B6\u6001\u56FE\u6807",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checkedIcon",paraId:11,tocIndex:13},{value:"\u9009\u4E2D\u72B6\u6001\u56FE\u6807",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"labelPlacement",paraId:11,tocIndex:13},{value:"\u6587\u6848\u4F4D\u7F6E",paraId:11,tocIndex:13},{value:"left",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"top",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"bottom",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:11,tocIndex:13},{value:"(e: React.SyntheticEvent,data: {checked: boolean}) => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u5C5E\u6027",paraId:12,tocIndex:14},{value:"\u8BF4\u660E",paraId:12,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:14},{value:"\u5168\u5C40\u53D8\u91CF",paraId:12,tocIndex:14},{value:"--label-color",paraId:12,tocIndex:14},{value:"\u6587\u6848\u5B57\u4F53\u989C\u8272",paraId:12,tocIndex:14},{value:"--bui-color-fg-default",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"--label-font-size",paraId:12,tocIndex:14},{value:"\u6587\u6848\u5B57\u4F53\u5927\u5C0F",paraId:12,tocIndex:14},{value:"--bui-text-size-1",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"--icon-font-size",paraId:12,tocIndex:14},{value:"\u56FE\u6807\u5B57\u4F53\u5927\u5C0F",paraId:12,tocIndex:14},{value:"--bui-title-size-2",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14}]},38554:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u8BC4\u5206\u7EC4\u4EF6\u63D0\u4F9B\u5BF9\u8BC4\u4EF7\u8FDB\u884C\u5C55\u793A\u3002\u4E5F\u5141\u8BB8\u7528\u6237\u5FEB\u901F\u7684\u8BC4\u5206\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:3},{value:"value",paraId:1,tocIndex:3},{value:" \u548C ",paraId:1,tocIndex:3},{value:"onChange",paraId:1,tocIndex:3},{value:" \u81EA\u5B9A\u4E49\u8BC4\u5206\u9009\u4E2D\u503C",paraId:1,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:4},{value:"allowHalf",paraId:2,tocIndex:4},{value:" \u6307\u5B9A ",paraId:2,tocIndex:4},{value:"Rating",paraId:2,tocIndex:4},{value:" \u652F\u6301\u534A\u9009\u72B6\u6001\u3002",paraId:2,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:5},{value:"readOnly",paraId:3,tocIndex:5},{value:" \u6307\u5B9A ",paraId:3,tocIndex:5},{value:"Rating",paraId:3,tocIndex:5},{value:" \u4E3A\u53EA\u8BFB\u3002",paraId:3,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:6},{value:"size",paraId:4,tocIndex:6},{value:" \u6307\u5B9A ",paraId:4,tocIndex:6},{value:"Rating",paraId:4,tocIndex:6},{value:" \u7684\u5927\u5C0F",paraId:4,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:7},{value:"count",paraId:5,tocIndex:7},{value:" \u6307\u5B9A ",paraId:5,tocIndex:7},{value:"Rating",paraId:5,tocIndex:7},{value:" \u7684\u5C55\u793A\u56FE\u6807\u4E2A\u6570",paraId:5,tocIndex:7},{value:"\u901A\u8FC7 ",paraId:6,tocIndex:8},{value:"disabled",paraId:6,tocIndex:8},{value:" \u6307\u5B9A ",paraId:6,tocIndex:8},{value:"Rating",paraId:6,tocIndex:8},{value:" \u4E3A\u7981\u7528\u72B6\u6001",paraId:6,tocIndex:8},{value:"\u901A\u8FC7",paraId:7,tocIndex:9},{value:"icon",paraId:7,tocIndex:9},{value:" \u548C ",paraId:7,tocIndex:9},{value:"emptyIcon",paraId:7,tocIndex:9},{value:" \u53EF\u4EE5\u5C06\u661F\u661F\u66FF\u6362\u4E3A\u5176\u4ED6\u5B57\u7B26\uFF0C\u6BD4\u5982\u8868\u60C5\u3001\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u5B57\u4F53\u56FE\u6807\u751A\u81F3\u4E2D\u6587\uFF0C",paraId:7,tocIndex:9},{value:"icon",paraId:7,tocIndex:9},{value:"\u4E3A\u9009\u4E2D\u6001\u56FE\u6807\uFF0C",paraId:7,tocIndex:9},{value:"emptyIcon",paraId:7,tocIndex:9},{value:"\u4E3A\u672A\u9009\u4E2D\u6001\u56FE\u6807",paraId:7,tocIndex:9},{value:"\u5C5E\u6027",paraId:8,tocIndex:10},{value:"\u8BF4\u660E",paraId:8,tocIndex:10},{value:"\u7C7B\u578B",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:10},{value:"count",paraId:8,tocIndex:10},{value:"\u8BC4\u5206\u603B\u6570",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"5",paraId:8,tocIndex:10},{value:"value",paraId:8,tocIndex:10},{value:"\u5F53\u524D\u8BC4\u5206",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"defaultValue",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u8BC4\u5206 \u975E\u53D7\u63A7\u72B6\u6001\u4F7F\u7528",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"size",paraId:8,tocIndex:10},{value:"\u5927\u5C0F",paraId:8,tocIndex:10},{value:"xsmall",paraId:8,tocIndex:10},{value:"| ",paraId:8,tocIndex:10},{value:"small",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"large",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:"disabled",paraId:8,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"readOnly",paraId:8,tocIndex:10},{value:"\u662F\u5426\u53EA\u8BFB",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"allowHalf",paraId:8,tocIndex:10},{value:"\u662F\u5426\u5141\u8BB8\u534A\u9009",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"icon",paraId:8,tocIndex:10},{value:"\u672A\u9009\u4E2D\u6001\u56FE\u6807",paraId:8,tocIndex:10},{value:"React.ReactNode",paraId:8,tocIndex:10},{value:'<StarFilledIcon htmlColor="#ced1d6" />',paraId:8,tocIndex:10},{value:"checkedIcon",paraId:8,tocIndex:10},{value:"\u9009\u4E2D\u6001\u56FE\u6807",paraId:8,tocIndex:10},{value:"React.ReactNode",paraId:8,tocIndex:10},{value:'<StarFilledIcon color="warning" />',paraId:8,tocIndex:10},{value:"disableClear",paraId:8,tocIndex:10},{value:"\u662F\u5426\u7981\u6B62\u70B9\u51FB\u540E\u6E05\u7A7A",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"name",paraId:8,tocIndex:10},{value:"\u5355\u9009\u8F93\u5165\u5143\u7D20\u7684name\u5C5E\u6027",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"onChange",paraId:8,tocIndex:10},{value:"\u9009\u62E9\u8BC4\u5206\u7684\u56DE\u8C03",paraId:8,tocIndex:10},{value:"(ev?: React.ChangeEvent<HTMLInputElement>,data?: { value: number }) => void",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10}]},51187:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:`\u7528\u4E8E\u5904\u7406\u5143\u7D20\u5185\u90E8\u6EDA\u52A8\u7684\u573A\u666F\uFF0C\u5E76\u5C01\u88C5\u4E86\u6EDA\u52A8\u4EE5\u53CA\u6EDA\u52A8\u5230\u9996\u5C3E\u7684\u4E8B\u4EF6\u56DE\u8C03\uFF0C\u4E5F\u53EF\u4E3B\u52A8\u63A7\u5236\u5176\u6EDA\u52A8\u4F4D\u7F6E
\u5C0F\u7A0B\u5E8F\u7AEF\u76F4\u63A5\u4F7F\u7528\u4E86Taro\u7684ScrollView\u7EC4\u4EF6\uFF0CH5\u7AEF\u5219\u4F7F\u7528React\u76F4\u63A5\u5B9E\u73B0\u5E76\u62C9\u9F50\u4E86\u5165\u53C2\u3002`,paraId:0,tocIndex:0},{value:"\u5C0F\u7A0B\u5E8F\u6587\u6863\u53C2\u8003\uFF1A",paraId:1,tocIndex:0},{value:"https://docs.taro.zone/docs/components/viewContainer/scroll-view",paraId:1,tocIndex:0},{value:"\u4F20\u5165scrollX\u4EE5\u8FDB\u884C\u6A2A\u5411\u6EDA\u52A8",paraId:2,tocIndex:3},{value:"\u4F7F\u7528",paraId:3,tocIndex:4},{value:"onScrollToLower",paraId:3,tocIndex:4},{value:", ",paraId:3,tocIndex:4},{value:"onScrollToUpper",paraId:3,tocIndex:4},{value:`\u63A5\u6536\u6EDA\u52A8\u5230\u5934\u5C3E\u7684\u56DE\u8C03
\u4F20\u5165`,paraId:3,tocIndex:4},{value:"scrollTop",paraId:3,tocIndex:4},{value:"/",paraId:3,tocIndex:4},{value:"scrollLeft",paraId:3,tocIndex:4},{value:",",paraId:3,tocIndex:4},{value:"scrollIntoView",paraId:3,tocIndex:4},{value:"\u4EE5\u6EDA\u52A8\u5230\u5BF9\u5E94\u5750\u6807/\u5BF9\u5E94id\u7684\u5143\u7D20\u5904",paraId:3,tocIndex:4},{value:"\u5C5E\u6027",paraId:4,tocIndex:5},{value:"\u8BF4\u660E",paraId:4,tocIndex:5},{value:"\u7C7B\u578B",paraId:4,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:5},{value:"scrollX",paraId:4,tocIndex:5},{value:"\u6A2A\u5411\u6EDA\u52A8",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"scrollY",paraId:4,tocIndex:5},{value:"\u7EB5\u5411\u6EDA\u52A8",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"upperThreshold",paraId:4,tocIndex:5},{value:"\u89E6\u53D1onScrollToUpper\u7684\u9608\u503C",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"50",paraId:4,tocIndex:5},{value:"lowerThreshold",paraId:4,tocIndex:5},{value:"\u89E6\u53D1onScrollToLower\u7684\u9608\u503C",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"50",paraId:4,tocIndex:5},{value:"scrollTop",paraId:4,tocIndex:5},{value:"\u8BBE\u7F6E\u7EB5\u5411\u6EDA\u52A8\u4F4D\u7F6E",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"scrollLeft",paraId:4,tocIndex:5},{value:"\u8BBE\u7F6E\u6A2A\u5411\u6EDA\u52A8\u4F4D\u7F6E",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"scrollIntoView",paraId:4,tocIndex:5},{value:"\u5C06\u5BF9\u5E94Id\u7684\u5143\u7D20\u6EDA\u52A8\u5230\u89C6\u53E3\u4E2D",paraId:4,tocIndex:5},{value:"string",paraId:4,tocIndex:5},{value:"scrollWithAnimation",paraId:4,tocIndex:5},{value:"\u542F\u7528\u5E73\u6ED1\u6EDA\u52A8",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"onScrollToUpper",paraId:4,tocIndex:5},{value:"\u6EDA\u52A8\u5230\u9876\u90E8\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5},{value:"onScrollToLower",paraId:4,tocIndex:5},{value:"\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5},{value:"onScroll",paraId:4,tocIndex:5},{value:"\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5},{value:"onTouchMove",paraId:4,tocIndex:5},{value:"\u89E6\u6478\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5}]},73360:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:`Select \u7EC4\u4EF6\u7528\u4E8E\u4ECE\u9009\u9879\u5217\u8868\u6536\u96C6\u7528\u6237\u63D0\u4F9B\u7684\u4FE1\u606F\u3002
\u76EE\u524D Select \u7EC4\u4EF6\u4EC5\u652F\u6301`,paraId:0,tocIndex:0},{value:"\u5355\u9879\u9009\u62E9",paraId:0,tocIndex:0},{value:"\uFF0C\u66F4\u591A\u529F\u80FD\u656C\u8BF7\u671F\u5F85\u6211\u4EEC\u89E3\u9501\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u7EC4\u5408",paraId:1,tocIndex:2},{value:"SelectOption",paraId:1,tocIndex:2},{value:"\u7EC4\u4EF6\uFF0C\u8FBE\u5230\u4E0B\u62C9\u9009\u62E9\u6548\u679C\u3002",paraId:1,tocIndex:2},{value:"\u652F\u6301\u901A\u8FC7",paraId:2,tocIndex:3},{value:"placeholder",paraId:2,tocIndex:3},{value:"\u914D\u7F6E\u9009\u62E9\u6846\u9ED8\u8BA4\u5C55\u793A\u5185\u5BB9\u3002",paraId:2,tocIndex:3},{value:"\u652F\u6301\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"defaultValue",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\uFF0C\u521D\u59CB\u9009\u4E2D\u503C\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7\u662F\u5426\u4F20\u5165",paraId:4,tocIndex:5},{value:"value",paraId:4,tocIndex:5},{value:`\u6765\u533A\u5206\u662F\u5426\u4E3A\u53D7\u63A7\u7EC4\u4EF6:
\u53D7\u63A7\u60C5\u51B5\u4E1A\u52A1\u901A\u8FC7 `,paraId:4,tocIndex:5},{value:"onChange",paraId:4,tocIndex:5},{value:` \u56DE\u8C03\u63A7\u5236\u7EC4\u4EF6 value;
\u975E\u53D7\u63A7\u60C5\u51B5\u53EF\u901A\u8FC7 `,paraId:4,tocIndex:5},{value:"inputRef",paraId:4,tocIndex:5},{value:"\u83B7\u53D6\u7EC4\u4EF6 value;",paraId:4,tocIndex:5},{value:"\u63D0\u4F9B ",paraId:5,tocIndex:6},{value:"disabled",paraId:5,tocIndex:6},{value:` \u5C5E\u6027\u6765\u7981\u6B62\u7528\u6237\u64CD\u4F5C\u3002
\u60A8\u53EF\u4EE5\u901A\u8FC7\u5728`,paraId:5,tocIndex:6},{value:"Select",paraId:5,tocIndex:6},{value:"\u4E0A\u8BBE\u7F6E",paraId:5,tocIndex:6},{value:"disabled",paraId:5,tocIndex:6},{value:" \u5168\u90E8\u7981\u6B62\u64CD\u4F5C\uFF0C\u4E5F\u53EF\u4EE5\u5728",paraId:5,tocIndex:6},{value:"SelectOption",paraId:5,tocIndex:6},{value:"\u4E0A\u8BBE\u7F6E",paraId:5,tocIndex:6},{value:"disabled",paraId:5,tocIndex:6},{value:"\u5BF9\u67D0\u4E2A\u9009\u9879\u7981\u6B62\u64CD\u4F5C\u3002",paraId:5,tocIndex:6},{value:"\u4EE5\u4E0B\u662F\u5B9A\u5236 Select \u7EC4\u4EF6\u793A\u4F8B\u3002",paraId:6,tocIndex:7},{value:"\u63D0\u4F9B\u81EA\u5B9A\u4E49\u56FE\u6807\u80FD\u529B\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:7,tocIndex:8},{value:"icon",paraId:7,tocIndex:8},{value:"\u5C5E\u6027\u6765\u5B9A\u5236\u56FE\u6807\u3002",paraId:7,tocIndex:8},{value:"\u5F53\u60A8\u4E0D\u60F3\u4F7F\u7528",paraId:8,tocIndex:9},{value:"label",paraId:8,tocIndex:9},{value:"\u505A\u4E3A\u9009\u9879",paraId:8,tocIndex:9},{value:"SelectOptions",paraId:8,tocIndex:9},{value:"\u5C55\u793A\u5185\u5BB9\u65F6\uFF0C\u53EF\u901A\u8FC7",paraId:8,tocIndex:9},{value:"children",paraId:8,tocIndex:9},{value:"\u6765\u5B9A\u5236\u9009\u9879\u5C55\u793A\u5185\u5BB9\u3002",paraId:8,tocIndex:9},{value:"label",paraId:9,tocIndex:10},{value:"\u652F\u6301 ",paraId:9,tocIndex:10},{value:"ReactNode",paraId:9,tocIndex:10},{value:"\u7C7B\u578B\uFF0C\u5F53\u60A8\u60F3\u5B9A\u5236\u9009\u62E9\u5668",paraId:9,tocIndex:10},{value:"Select",paraId:9,tocIndex:10},{value:"\u5C55\u793A\u5185\u5BB9\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:9,tocIndex:10},{value:"SelectOption",paraId:9,tocIndex:10},{value:"\u7EC4\u4EF6\u5C5E\u6027\uFF1A",paraId:9,tocIndex:10},{value:"label",paraId:9,tocIndex:10},{value:"\u4E0E",paraId:9,tocIndex:10},{value:"children",paraId:9,tocIndex:10},{value:"\uFF0C\u4E24\u8005\u914D\u5408\u4F7F\u7528\u5B9E\u73B0\u5B9A\u5236\u5316\u3002",paraId:9,tocIndex:10},{value:"Select \u7EC4\u4EF6\u9664\u4E86\u63D0\u4F9B\u57FA\u7840\u7684",paraId:10,tocIndex:11},{value:"onChange",paraId:10,tocIndex:11},{value:"\u56DE\u8C03\uFF0C\u8FD8\u63D0\u4F9B\u9009\u9879",paraId:10,tocIndex:11},{value:"\u5C55\u5F00",paraId:10,tocIndex:11},{value:"\u3001",paraId:10,tocIndex:11},{value:"\u6298\u53E0",paraId:10,tocIndex:11},{value:"\u65F6\u7684\u4E8B\u4EF6\u56DE\u8C03\u3002",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"inputRef",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668 inputRef",paraId:11,tocIndex:13},{value:"Ref",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputProps",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668 ",paraId:11,tocIndex:13},{value:"<input/>",paraId:11,tocIndex:13},{value:" \u6807\u7B7E\u900F\u4F20\u5C5E\u6027",paraId:11,tocIndex:13},{value:"React.InputHTMLAttributes",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"BackdropProps",paraId:11,tocIndex:13},{value:"\u8499\u5C42 ",paraId:11,tocIndex:13},{value:"<Backdrop/>",paraId:11,tocIndex:13},{value:" \u6807\u7B7E\u900F\u4F20\u5C5E\u6027",paraId:11,tocIndex:13},{value:"React.DivHTMLAttributes",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"name",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668 ",paraId:11,tocIndex:13},{value:"<input/>",paraId:11,tocIndex:13},{value:" \u6807\u7B7E\u540D\u79F0\u6807\u8BC6",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"value",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u9009\u4E2D\u503C",paraId:11,tocIndex:13},{value:"string \uFF5C number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"defaultValue",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"string \uFF5C number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"placeholder",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u5360\u4F4D\u5185\u5BB9",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"icon",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u56FE\u6807",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"disabled",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u662F\u5426\u4E0D\u53EF\u70B9\u51FB",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"open",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u4E0B\u62C9\u9009\u9879\u662F\u5426\u6253\u5F00",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"\u9009\u4E2D\u67D0\u4E00\u9879\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:13},{value:"(e:SyntheticEvent, data:{value:string}) => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onOpen",paraId:11,tocIndex:13},{value:"\u5C55\u5F00\u4E0B\u62C9\u6846\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onClose",paraId:11,tocIndex:13},{value:"\u6298\u53E0\u4E0B\u62C9\u6846\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u5C5E\u6027",paraId:12,tocIndex:14},{value:"\u8BF4\u660E",paraId:12,tocIndex:14},{value:"\u7C7B\u578B",paraId:12,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:14},{value:"label",paraId:12,tocIndex:14},{value:"\u9009\u9879\u56DE\u586B\u5185\u5BB9",paraId:12,tocIndex:14},{value:"ReactNode",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"value",paraId:12,tocIndex:14},{value:"\u9009\u9879\u503C",paraId:12,tocIndex:14},{value:"string \uFF5C number",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"disabled",paraId:12,tocIndex:14},{value:"\u9009\u9879\u53EF\u70B9\u51FB\u6001",paraId:12,tocIndex:14},{value:"boolean",paraId:12,tocIndex:14},{value:"false",paraId:12,tocIndex:14}]},65053:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u5728\u9700\u8981\u7B49\u5F85\u52A0\u8F7D\u5185\u5BB9\u7684\u4F4D\u7F6E\u63D0\u4F9B\u4E00\u4E2A\u5360\u4F4D\u56FE\u5F62\u7EC4\u5408\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528",paraId:1,tocIndex:2},{value:"width",paraId:1,tocIndex:2},{value:"\u548C",paraId:1,tocIndex:2},{value:"height",paraId:1,tocIndex:2},{value:"\u8BBE\u7F6E\u5BBD\u9AD8\u3002",paraId:1,tocIndex:2},{value:"\u7EC4\u4EF6\u652F\u6301 4 \u79CD\u53D8\u4F53",paraId:2,tocIndex:3},{value:"variant",paraId:2,tocIndex:3},{value:":",paraId:2,tocIndex:3},{value:"text",paraId:3,tocIndex:3},{value:"(\u9ED8\u8BA4): \u53EF\u4EE5\u6839\u636E",paraId:3,tocIndex:3},{value:"font-size",paraId:3,tocIndex:3},{value:"\u81EA\u52A8\u8C03\u6574\u5927\u5C0F\u3002",paraId:3,tocIndex:3},{value:"circular",paraId:4,tocIndex:3},{value:", ",paraId:4,tocIndex:3},{value:"rectangular",paraId:4,tocIndex:3},{value:", ",paraId:4,tocIndex:3},{value:"rounded",paraId:4,tocIndex:3},{value:": \u53EF\u4EE5\u6839\u636E",paraId:4,tocIndex:3},{value:"width",paraId:4,tocIndex:3},{value:"\u548C",paraId:4,tocIndex:3},{value:"height",paraId:4,tocIndex:3},{value:"\u6765\u8C03\u6574\u5927\u5C0F\u3002",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u662F",paraId:5,tocIndex:4},{value:"wave",paraId:5,tocIndex:4},{value:"\u3002\u4F60\u53EF\u4EE5\u6839\u636E",paraId:5,tocIndex:4},{value:"animation",paraId:5,tocIndex:4},{value:"\u6765\u8BBE\u7F6E\u4E0D\u540C\u7684\u52A8\u753B\u6216\u8005\u5B8C\u5168\u7981\u7528\u5B83\u3002",paraId:5,tocIndex:4},{value:"\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u56FE\u5F62\u7EC4\u5408\u3002",paraId:6,tocIndex:5},{value:"\u53EF\u4EE5\u6839\u636E",paraId:7,tocIndex:6},{value:"style",paraId:7,tocIndex:6},{value:"\u7684",paraId:7,tocIndex:6},{value:"height",paraId:7,tocIndex:6},{value:"\u548C",paraId:7,tocIndex:6},{value:"width",paraId:7,tocIndex:6},{value:"\u5C5E\u6027\u6765\u8BBE\u7F6E\u5C3A\u5BF8\u3002",paraId:7,tocIndex:6},{value:"\u5C5E\u6027",paraId:8,tocIndex:7},{value:"\u8BF4\u660E",paraId:8,tocIndex:7},{value:"\u7C7B\u578B",paraId:8,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:7},{value:"animation",paraId:8,tocIndex:7},{value:"\u52A8\u753B\u6548\u679C",paraId:8,tocIndex:7},{value:"wave",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"pulse",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"false",paraId:8,tocIndex:7},{value:"wave",paraId:8,tocIndex:7},{value:"variant",paraId:8,tocIndex:7},{value:"\u5C55\u73B0\u5F62\u5F0F",paraId:8,tocIndex:7},{value:"text",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"circular",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"rectangular",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"rounded",paraId:8,tocIndex:7},{value:"text",paraId:8,tocIndex:7},{value:"width",paraId:8,tocIndex:7},{value:"\u5360\u4F4D\u5BBD\u5EA6",paraId:8,tocIndex:7},{value:"string",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"number",paraId:8,tocIndex:7},{value:"100%",paraId:8,tocIndex:7},{value:"height",paraId:8,tocIndex:7},{value:"\u5360\u4F4D\u9AD8\u5EA6",paraId:8,tocIndex:7},{value:"string",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"number ",paraId:8,tocIndex:7},{value:"16px",paraId:8,tocIndex:7},{value:"\u5C5E\u6027",paraId:9,tocIndex:8},{value:"\u8BF4\u660E",paraId:9,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:8},{value:"--border-radius",paraId:9,tocIndex:8},{value:"\u9AA8\u67B6\u5C4F\u5706\u89D2\u5927\u5C0F",paraId:9,tocIndex:8},{value:"--bui-shape-radius-label",paraId:9,tocIndex:8}]},27812:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:`\u4F7F\u7528Transition\u5C01\u88C5\u7684\u57FA\u7840\u6ED1\u5165\u6ED1\u51FA\u52A8\u753B\u3002
\u8003\u8651\u5230\u5C0F\u7A0B\u5E8F\u517C\u5BB9\u6027\uFF0C\u4EE5\u5143\u7D20\u81EA\u8EAB\u7684\u4E00\u6761\u8FB9\u800C\u975E\u5C4F\u5E55\u8FB9\u7F18\u8FDB\u884C\u6ED1\u52A8\u3002`,paraId:0,tocIndex:0},{value:"Slide\u7EC4\u4EF6\u652F\u6301\u56DB\u4E2A\u6ED1\u5165\u65B9\u5411\uFF0C\u901A\u8FC7",paraId:1,tocIndex:2},{value:"direction",paraId:1,tocIndex:2},{value:`\u53C2\u6570\u4F20\u5165
\u7EC4\u4EF6\u672C\u8EAB\u53EA\u5904\u7406\u5185\u90E8\u5143\u7D20\u7684\u4F4D\u79FB\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u81EA\u884C\u589E\u52A0`,paraId:1,tocIndex:2},{value:"overflow:hidden",paraId:1,tocIndex:2},{value:"\u7B49\u5916\u90E8\u6837\u5F0F",paraId:1,tocIndex:2},{value:"\u5F53",paraId:2,tocIndex:3},{value:"appear",paraId:2,tocIndex:3},{value:"\u548C",paraId:2,tocIndex:3},{value:"in",paraId:2,tocIndex:3},{value:"\u90FD\u4E3A",paraId:2,tocIndex:3},{value:"true",paraId:2,tocIndex:3},{value:`\u65F6
\u7EC4\u4EF6\u4F1A\u5728\u6302\u8F7D\u65F6\u7ACB\u5373\u64AD\u653E\u52A8\u753B`,paraId:2,tocIndex:3},{value:"Slide",paraId:3,tocIndex:4},{value:" \u7EE7\u627F\u81EA ",paraId:3,tocIndex:4},{value:"Transition",paraId:3,tocIndex:4},{value:" \u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:3,tocIndex:4},{value:"Transition",paraId:4,tocIndex:4},{value:"\u5C5E\u6027",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"in",paraId:5,tocIndex:5},{value:"\u662F\u5426\u8FDB\u5165",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5},{value:"appear",paraId:5,tocIndex:5},{value:"\u6302\u8F7D\u65F6\u662F\u5426\u64AD\u653E\u52A8\u753B",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5},{value:"direction",paraId:5,tocIndex:5},{value:"\u6ED1\u52A8\u65B9\u5411",paraId:5,tocIndex:5},{value:'"up"|"down"|"left"|"right"',paraId:5,tocIndex:5},{value:"timeout",paraId:5,tocIndex:5},{value:"\u52A8\u753B\u65F6\u95F4\u914D\u7F6E",paraId:5,tocIndex:5},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"delay",paraId:5,tocIndex:5},{value:"\u52A8\u753B\u5EF6\u8FDF\u914D\u7F6E",paraId:5,tocIndex:5},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"enter",paraId:5,tocIndex:5},{value:"\u662F\u5426\u64AD\u653E\u8FDB\u5165\u52A8\u753B",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"true",paraId:5,tocIndex:5},{value:"exit",paraId:5,tocIndex:5},{value:"\u662F\u5426\u64AD\u653E\u9000\u51FA\u52A8\u753B",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"true",paraId:5,tocIndex:5},{value:"mountOnEnter",paraId:5,tocIndex:5},{value:"\u9996\u6B21\u8FDB\u5165\u65F6\u518D\u6302\u8F7Dchildren",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5},{value:"unmountOnExit",paraId:5,tocIndex:5},{value:"\u9000\u51FA\u65F6\u5378\u8F7Dchildren",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5},{value:"onEnter",paraId:5,tocIndex:5},{value:"\u8FDB\u5165\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onEntering",paraId:5,tocIndex:5},{value:"\u8FDB\u5165\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onEntered",paraId:5,tocIndex:5},{value:"\u8FDB\u5165\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onExit",paraId:5,tocIndex:5},{value:"\u9000\u51FA\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onExiting",paraId:5,tocIndex:5},{value:"\u9000\u51FA\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onExited",paraId:5,tocIndex:5},{value:"\u9000\u51FA\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"easing",paraId:5,tocIndex:5},{value:"\u8865\u95F4\uFF0C\u5373transition-timing-function",paraId:5,tocIndex:5},{value:"string | {enter, exit}",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5}]},96445:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u6ED1\u52A8\u8F93\u5165\u6761\uFF0C\u7528\u4E8E\u5728\u7ED9\u5B9A\u7684\u8303\u56F4\u5185\u9009\u62E9\u4E00\u4E2A\u503C\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:" \u548C ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u63A7\u5236\u6ED1\u52A8\u8F93\u5165\u6761\u3002",paraId:1,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:3},{value:"min",paraId:2,tocIndex:3},{value:" \u548C ",paraId:2,tocIndex:3},{value:"max",paraId:2,tocIndex:3},{value:" \u6ED1\u52A8\u9650\u5236\u8F93\u5165\u6761\u7684\u503C\u8303\u56F4\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"step",paraId:3,tocIndex:4},{value:" \u53EF\u81EA\u5B9A\u4E49\u6B65\u957F\uFF0C",paraId:3,tocIndex:4},{value:"step",paraId:3,tocIndex:4},{value:" \u5E94\u662F max-min \u7684\u6574\u6570\u500D\u3002",paraId:3,tocIndex:4},{value:"\u542F\u7528 ",paraId:4,tocIndex:5},{value:"tipVisible",paraId:4,tocIndex:5},{value:"\uFF0C\u63D0\u793A\u6C14\u6CE1\u5C06\u603B\u662F\u5C55\u793A\uFF0C\u5426\u5219\u53EA\u6709\u6ED1\u52A8\u65F6\u5C55\u793A\u3002",paraId:4,tocIndex:5},{value:"\u5F53 ",paraId:5,tocIndex:6},{value:"value",paraId:5,tocIndex:6},{value:" \u6216 ",paraId:5,tocIndex:6},{value:"defaultValue",paraId:5,tocIndex:6},{value:" \u7C7B\u578B\u4E3A",paraId:5,tocIndex:6},{value:"[number, number]",paraId:5,tocIndex:6},{value:"\u65F6\uFF0C\u4F1A\u542F\u7528\u53CC\u6ED1\u5757\u6A21\u5F0F\u3002",paraId:5,tocIndex:6},{value:"\u53CC\u6ED1\u5757\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:6,tocIndex:7},{value:"disableSwap",paraId:6,tocIndex:7},{value:" \u7981\u6B62\u524D\u540E\u6309\u94AE\u4EA4\u9519\u3002",paraId:6,tocIndex:7},{value:"\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"startIcon",paraId:7,tocIndex:8},{value:" \u53EF\u81EA\u5B9A\u4E49\u524D\u6309\u94AE\u56FE\u6807\uFF0C\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"endIcon",paraId:7,tocIndex:8},{value:" \u53EF\u81EA\u5B9A\u4E49\u540E\u6309\u94AE\u56FE\u6807\u3002",paraId:7,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"disabled",paraId:8,tocIndex:9},{value:" \u7981\u7528\u7EC4\u4EF6\u3002",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"tooltipRender",paraId:9,tocIndex:10},{value:" \u53EF\u81EA\u5B9A\u4E49\u63D0\u793A\u6C14\u6CE1\u3002",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:11},{value:"\u8BF4\u660E",paraId:10,tocIndex:11},{value:"\u7C7B\u578B",paraId:10,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:11},{value:"defaultValue",paraId:10,tocIndex:11},{value:"\u8BBE\u7F6E\u521D\u59CB\u53D6\u503C\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:11},{value:"number | [number, number]",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"value",paraId:10,tocIndex:11},{value:"\u8BBE\u7F6E\u5F53\u524D\u503C,\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:11},{value:"number | [number, number]",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"min",paraId:10,tocIndex:11},{value:"\u6700\u5C0F\u503C",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"0",paraId:10,tocIndex:11},{value:"max",paraId:10,tocIndex:11},{value:"\u6700\u5927\u503C",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"100",paraId:10,tocIndex:11},{value:"step",paraId:10,tocIndex:11},{value:"\u6B65\u957F\uFF0C\u53D6\u503C\u5FC5\u987B\u5927\u4E8E 0\uFF0C\u5E76\u4E14\u53EF\u88AB (max - min) \u6574\u9664",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"1",paraId:10,tocIndex:11},{value:"tipVisible",paraId:10,tocIndex:11},{value:"\u63D0\u793A\u6C14\u6CE1\u662F\u5426\u603B\u662F\u53EF\u89C1",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"tooltipRender",paraId:10,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u63D0\u793A\u6C14\u6CE1",paraId:10,tocIndex:11},{value:"(value: number) => React.ReactNode",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"disabled",paraId:10,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"startIcon",paraId:10,tocIndex:11},{value:"\u5F00\u59CB\u56FE\u6807",paraId:10,tocIndex:11},{value:"React.ReactNode",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"endIcon",paraId:10,tocIndex:11},{value:"\u7ED3\u675F\u56FE\u6807",paraId:10,tocIndex:11},{value:"React.ReactNode",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"disableSwap",paraId:10,tocIndex:11},{value:"\u7981\u6B62\u5F00\u59CB\u56FE\u6807\u548C\u7ED3\u675F\u56FE\u6807\u4EA4\u9519",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"onChange",paraId:10,tocIndex:11},{value:"\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:10,tocIndex:11},{value:"(event: React.SyntheticEvent,data: {value: SliderValue;buttonIndex: number}) => void",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u8BF4\u660E",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"\u5168\u5C40\u53D8\u91CF",paraId:11,tocIndex:12},{value:"--line-color",paraId:11,tocIndex:12},{value:"\u7EBF\u6761\u524D\u666F\u8272",paraId:11,tocIndex:12},{value:"--bui-color-primary",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"--line-bg-color",paraId:11,tocIndex:12},{value:"\u7EBF\u6761\u80CC\u666F\u8272",paraId:11,tocIndex:12},{value:"--bui-color-border-default",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"--tooltip-font-size",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u6C14\u6CE1\u5B57\u4F53\u5927\u5C0F",paraId:11,tocIndex:12},{value:"--bui-text-size-3",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"--tooltip-color",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u6C14\u6CE1\u5B57\u4F53\u989C\u8272",paraId:11,tocIndex:12},{value:"--bui-color-white",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"--tooltip-bg-color",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u6C14\u6CE1\u80CC\u666F\u989C\u8272",paraId:11,tocIndex:12},{value:"--line-color",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12}]},28653:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"Stack \u662F\u7528\u6765\u63A7\u5236\u5782\u76F4\u6216\u8005\u6C34\u5E73\u6392\u5217\u5143\u7D20\u7684\u5BB9\u5668\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:1,tocIndex:2},{value:"direction",paraId:1,tocIndex:2},{value:`\u5C5E\u6027\u6765\u63A7\u5236\u5B50\u8282\u70B9\u5782\u76F4/\u6C34\u5E73\u5206\u5E03\u3002
\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7`,paraId:1,tocIndex:2},{value:"alignItem",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"justifyContent",paraId:1,tocIndex:2},{value:`\u6765\u63A7\u5236\u5B50\u8282\u70B9\u5728\u4E3B\u8F74/\u4EA4\u53C9\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002
\u9664\u6B64\u4E4B\u5916\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7`,paraId:1,tocIndex:2},{value:"spacing",paraId:1,tocIndex:2},{value:`\u63A7\u5236\u5B50\u8282\u70B9\u4E4B\u95F4\u95F4\u8DDD\u3002
\u793A\u4F8B\u6587\u6863\u5982\u4E0B\uFF1A`,paraId:1,tocIndex:2},{value:"\u4F7F\u7528",paraId:2,tocIndex:4},{value:"divider",paraId:2,tocIndex:4},{value:"\u5C5E\u6027\uFF0C\u60A8\u53EF\u4EE5\u5728\u6BCF\u4E2A\u5B50\u5143\u7D20\u4E4B\u95F4\u63D2\u5165\u4E00\u4E2A\u5143\u7D20\u3002",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"direction",paraId:3,tocIndex:6},{value:"\u8BBE\u7F6E\u5B50\u8282\u70B9\u5782\u76F4/\u6C34\u5E73\u5206\u5E03",paraId:3,tocIndex:6},{value:"row",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"row-reverse",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"column",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"column-reverse",paraId:3,tocIndex:6},{value:"column",paraId:3,tocIndex:6},{value:"alignItems",paraId:3,tocIndex:6},{value:"\u4EA4\u53C9\u8F74\u8F74\u4E0A\u5BF9\u9F50\u65B9\u5F0F",paraId:3,tocIndex:6},{value:"flex-start",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:"\uFF5C ",paraId:3,tocIndex:6},{value:"flex-end",paraId:3,tocIndex:6},{value:"\uFF5C ",paraId:3,tocIndex:6},{value:"stretch",paraId:3,tocIndex:6},{value:" \uFF5C",paraId:3,tocIndex:6},{value:"baseline",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:"justifyContent",paraId:3,tocIndex:6},{value:"\u4E3B\u8F74\u4E0A\u5BF9\u9F50\u65B9\u5F0F",paraId:3,tocIndex:6},{value:"flex-start",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"flex-end",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"space-between",paraId:3,tocIndex:6},{value:" \uFF5C",paraId:3,tocIndex:6},{value:"space-around",paraId:3,tocIndex:6},{value:" \uFF5C",paraId:3,tocIndex:6},{value:"space-evenly",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:"flexWrap",paraId:3,tocIndex:6},{value:"\u8D85\u51FA\u6362\u884C",paraId:3,tocIndex:6},{value:"wrap",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"nowrap",paraId:3,tocIndex:6},{value:"\uFF5C ",paraId:3,tocIndex:6},{value:"wrap-reverse",paraId:3,tocIndex:6},{value:"nowrap",paraId:3,tocIndex:6},{value:"spacing",paraId:3,tocIndex:6},{value:"\u8BBE\u7F6E\u5B50\u8282\u70B9\u4E4B\u95F4\u95F4\u8DDD",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"divider",paraId:3,tocIndex:6},{value:"\u5206\u5272\u7EBF\uFF0C\u5141\u8BB8\u5728\u6BCF\u4E2A\u5B50\u8282\u70B9\u4E4B\u95F4\u63D2\u5165\u4E00\u4E2A\u5143\u7D20",paraId:3,tocIndex:6},{value:"ReactNode \uFF5C boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6}]},4388:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u6B65\u9AA4\u6D41\u7A0B\u5BFC\u822A\u6761\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u65B9\u5411\u4E3A\u7EB5\u5411\uFF0C\u82E5\u672A\u6307\u5B9A current\uFF0C\u5219\u9ED8\u8BA4\u4E3A 0\uFF0C\u5373\u7B2C\u4E00\u6B65",paraId:1,tocIndex:2},{value:"\u901A\u8FC7",paraId:2,tocIndex:3},{value:"direction",paraId:2,tocIndex:3},{value:"\u6539\u53D8\u6B65\u9AA4\u6761\u65B9\u5411",paraId:2,tocIndex:3},{value:"\u82E5\u6709\u526F\u6807\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:3,tocIndex:4},{value:"labelPlacement",paraId:3,tocIndex:4},{value:"\u6539\u53D8\u5176\u5C55\u793A\u4F4D\u7F6E",paraId:3,tocIndex:4},{value:"\u4F20\u5165",paraId:4,tocIndex:5},{value:"description",paraId:4,tocIndex:5},{value:"\u53EF\u6DFB\u52A0\u63CF\u8FF0\u8BF4\u660E\u3002",paraId:4,tocIndex:5},{value:"\u53EF\u901A\u8FC7 status \u63A7\u5236\u6B65\u9AA4\u72B6\u6001\uFF0C",paraId:5,tocIndex:6},{value:"wait",paraId:5,tocIndex:6},{value:"\u4E3A\u7B49\u5F85\u4E2D\uFF0C ",paraId:5,tocIndex:6},{value:"active",paraId:5,tocIndex:6},{value:"\u4E3A\u5F53\u524D\u6FC0\u6D3B\uFF0C ",paraId:5,tocIndex:6},{value:"finish",paraId:5,tocIndex:6},{value:"\u4E3A\u5DF2\u5B8C\u6210\uFF0C ",paraId:5,tocIndex:6},{value:"error",paraId:5,tocIndex:6},{value:"\u4E3A\u5931\u8D25\u5DF2\u5B8C\u6210",paraId:5,tocIndex:6},{value:"\u901A\u8FC7",paraId:6,tocIndex:7},{value:"icon",paraId:6,tocIndex:7},{value:"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5404\u4E2A\u72B6\u6001\u7684\u56FE\u6807\u3002",paraId:6,tocIndex:7},{value:"\u901A\u8FC7",paraId:7,tocIndex:8},{value:"disabled",paraId:7,tocIndex:8},{value:"\u4F7F\u6B65\u9AA4\u53F0\u4E0D\u53EF\u70B9\u51FB",paraId:7,tocIndex:8},{value:"\u53EF\u901A\u8FC7\u5E38\u7528\u7684 css \u53D8\u91CF\u6539\u53D8\u7EC4\u4EF6\u6837\u5F0F",paraId:8,tocIndex:10},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u8BF4\u660E",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"current",paraId:9,tocIndex:12},{value:"\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\uFF0C\u4ECE 0 \u5F00\u59CB\u8BB0\u6570\uFF0C\u5728\u5B50 Step \u5143\u7D20\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 status \u5C5E\u6027\u8986\u76D6\u8BE5\u72B6\u6001",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"0",paraId:9,tocIndex:12},{value:"direction",paraId:9,tocIndex:12},{value:"\u6B65\u9AA4\u6761\u65B9\u5411",paraId:9,tocIndex:12},{value:"horizontal",paraId:9,tocIndex:12},{value:" | ",paraId:9,tocIndex:12},{value:"vertical",paraId:9,tocIndex:12},{value:"vertical",paraId:9,tocIndex:12},{value:"labelPlacement",paraId:9,tocIndex:12},{value:"\u6307\u5B9A\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E",paraId:9,tocIndex:12},{value:"horizontal",paraId:9,tocIndex:12},{value:" | ",paraId:9,tocIndex:12},{value:"vertical",paraId:9,tocIndex:12},{value:"horizontal",paraId:9,tocIndex:12},{value:"onChange",paraId:9,tocIndex:12},{value:"\u70B9\u51FB\u5207\u6362\u6B65\u9AA4\u65F6\u89E6\u53D1",paraId:9,tocIndex:12},{value:"(ev?: SyntheticEvent,data?: { current: number }) =>void",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"\u5C5E\u6027",paraId:10,tocIndex:13},{value:"\u8BF4\u660E",paraId:10,tocIndex:13},{value:"\u7C7B\u578B",paraId:10,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:13},{value:"title",paraId:10,tocIndex:13},{value:"\u6807\u9898",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"subtitle",paraId:10,tocIndex:13},{value:"\u526F\u6807\u9898",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"description",paraId:10,tocIndex:13},{value:"\u6B65\u9AA4\u7684\u8BE6\u60C5\u63CF\u8FF0",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"icon",paraId:10,tocIndex:13},{value:"\u6B65\u9AA4\u56FE\u6807",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"status",paraId:10,tocIndex:13},{value:"\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001",paraId:10,tocIndex:13},{value:"wait",paraId:10,tocIndex:13},{value:" | ",paraId:10,tocIndex:13},{value:"active",paraId:10,tocIndex:13},{value:" | ",paraId:10,tocIndex:13},{value:"finish",paraId:10,tocIndex:13},{value:" | ",paraId:10,tocIndex:13},{value:"error",paraId:10,tocIndex:13},{value:"active",paraId:10,tocIndex:13},{value:"disabled",paraId:10,tocIndex:13},{value:"\u662F\u5426\u7981\u6B62\u70B9\u51FB",paraId:10,tocIndex:13},{value:"boolean",paraId:10,tocIndex:13},{value:"false",paraId:10,tocIndex:13},{value:"onClick",paraId:10,tocIndex:13},{value:"\u6B65\u9AA4\u56FE\u6807",paraId:10,tocIndex:13},{value:"(ev?: SyntheticEvent,data?: { current: number }) =>void",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"\u5C5E\u6027",paraId:11,tocIndex:14},{value:"\u8BF4\u660E",paraId:11,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:14},{value:"\u5168\u5C40\u53D8\u91CF",paraId:11,tocIndex:14},{value:"--title-font-size",paraId:11,tocIndex:14},{value:"\u4E3B\u6807\u9898\u5B57\u4F53\u5927\u5C0F",paraId:11,tocIndex:14},{value:"--bui-title-size-4",paraId:11,tocIndex:14},{value:"-",paraId:11,tocIndex:14},{value:"--title-font-weight",paraId:11,tocIndex:14},{value:"\u4E3B\u6807\u9898\u5B57\u91CD",paraId:11,tocIndex:14},{value:"--bui-font-weight-medium",paraId:11,tocIndex:14},{value:"-",paraId:11,tocIndex:14},{value:"--subtitle-font-size",paraId:11,tocIndex:14},{value:"\u526F\u6807\u9898\u5B57\u4F53\u5927\u5C0F",paraId:11,tocIndex:14},{value:"--bui-text-size-2",paraId:11,tocIndex:14},{value:"-",paraId:11,tocIndex:14},{value:"--description-font-size",paraId:11,tocIndex:14},{value:"\u63CF\u8FF0\u6587\u6848\u5B57\u4F53\u5927\u5C0F",paraId:11,tocIndex:14},{value:"--bui-text-size-3",paraId:11,tocIndex:14},{value:"-",paraId:11,tocIndex:14},{value:"--step-icon-margin",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u56FE\u6807\u5916\u8FB9\u8DDD",paraId:11,tocIndex:14},{value:"--bui-spacing-xs --bui-spacing-xs 0 0",paraId:11,tocIndex:14},{value:"-",paraId:11,tocIndex:14},{value:"--step-line-padding",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u8FDE\u7EBF\u5185\u8FB9\u8DDD",paraId:11,tocIndex:14},{value:"20px 0 3px 0",paraId:11,tocIndex:14},{value:"-",paraId:11,tocIndex:14}]},23960:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:`\u6ED1\u5757\u89C6\u56FE\u5BB9\u5668\uFF0C\u7528\u4E8E\u5236\u4F5C\u8F6E\u64AD\u3001\u5206\u9875\u5C55\u793A\u7B49\u5E38\u7528\u5E03\u5C40\u3002
\u5C0F\u7A0B\u5E8F\u7AEF\u76F4\u63A5\u4F7F\u7528\u4E86Taro\u7684Swiper\u7EC4\u4EF6\uFF0CH5\u7AEF\u5219\u4F7F\u7528Swiper/react\u5E76\u62C9\u9F50\u4E86\u5165\u53C2\u3002`,paraId:0,tocIndex:0},{value:"\u5C0F\u7A0B\u5E8F\u6587\u6863\u53C2\u8003\uFF1A",paraId:1,tocIndex:0},{value:"https://taro-docs.jd.com/docs/components/viewContainer/swiper",paraId:1,tocIndex:0},{value:"Swiper\u5185\u5D4C\u5957SwiperItem\u5373\u53EF\u6784\u5EFA\u4E00\u4E2A\u57FA\u7840\u7684\u6ED1\u5757\u89C6\u56FE\u5BB9\u5668\u3002",paraId:2,tocIndex:2},{value:`\u4F20\u5165current\u4EE5\u8BBE\u7F6E\u5F53\u524D\u9875\u9762\uFF0C\u5F53\u6570\u636E\u53D8\u66F4\u65F6\u4F1A\u89E6\u53D1\u9875\u9762\u5207\u6362\u3002
\u5982\u679C\u9700\u8981\u540C\u65F6\u517C\u5BB9\u6ED1\u52A8\u548Ccurrent\u63A7\u5236\uFF0C\u5219\u8FD8\u9700\u8981\u4F7F\u7528onChange\u4E8B\u4EF6\u540C\u6B65\u5F53\u524D\u9875\u9762\u4F4D\u7F6E\u3002`,paraId:3,tocIndex:3},{value:`\u4F20\u5165autoplay\u4EE5\u542F\u7528\u81EA\u52A8\u5207\u6362\u3002
\u4F7F\u7528interval\u63A7\u5236\u4E24\u6B21\u81EA\u52A8\u5207\u6362\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u5355\u4F4D\u4E3A\u6BEB\u79D2\uFF09\u3002`,paraId:4,tocIndex:4},{value:"\u4F20\u5165circular\u4F7F\u5F97\u8BE5\u5BB9\u5668\u80FD\u591F\u5411\u540C\u4E00\u65B9\u5411\u65E0\u9650\u5FAA\u73AF\u6EDA\u52A8\u3002",paraId:5,tocIndex:5},{value:"\u4F20\u5165effect\u53C2\u6570\u9009\u62E9\u5207\u6362\u6548\u679C\u3002",paraId:6,tocIndex:6},{value:"\u4F20\u5165vertical\u4F7F\u5F97\u8BE5\u5BB9\u5668\u5782\u76F4\uFF08\u800C\u975E\u6C34\u5E73\uFF09\u6EDA\u52A8\u3002",paraId:7,tocIndex:7},{value:`\u4F20\u5165indicatorDots\u542F\u7528\u9875\u9762\u6307\u793A\u5668\uFF08\u5C0F\u5706\u70B9\uFF09\u3002
\u4F7F\u7528indicatorColor\u548CindicatorActiveColor\u8BBE\u7F6E\u5C0F\u5706\u70B9\u7684\u989C\u8272\u3002`,paraId:8,tocIndex:8},{value:`\u652F\u6301onChange\u548ConAnimationFinish\u4E8B\u4EF6\u3002
\u5177\u4F53\u8FD4\u56DE\u503C\u5728\u5BF9\u5E94\u4E8B\u4EF6\u5BF9\u8C61\u7684detail\u4E2D\u3002`,paraId:9,tocIndex:9},{value:"\u5C5E\u6027",paraId:10,tocIndex:10},{value:"\u8BF4\u660E",paraId:10,tocIndex:10},{value:"\u7C7B\u578B",paraId:10,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:10},{value:"current",paraId:10,tocIndex:10},{value:"\u5F53\u524D\u7684\u9875\u9762\u4E0B\u6807",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"autoplay",paraId:10,tocIndex:10},{value:"\u81EA\u52A8\u5207\u6362",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"interval",paraId:10,tocIndex:10},{value:"\u81EA\u52A8\u5207\u6362\u7684\u95F4\u9694\u65F6\u95F4",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"5000",paraId:10,tocIndex:10},{value:"duration",paraId:10,tocIndex:10},{value:"\u5207\u6362\u52A8\u753B\u65F6\u95F4",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"500",paraId:10,tocIndex:10},{value:"displayMultipleItems",paraId:10,tocIndex:10},{value:"\u6BCF\u5C4F\u5C55\u793A\u7684\u5F20\u6570",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"1",paraId:10,tocIndex:10},{value:"circular",paraId:10,tocIndex:10},{value:"\u5FAA\u73AF\u5C55\u793A",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"vertical",paraId:10,tocIndex:10},{value:"\u5782\u76F4\u6A21\u5F0F",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"spaceBetween",paraId:10,tocIndex:10},{value:"\u4E24\u5F20\u4E4B\u95F4\u7684\u95F4\u8DDD",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"previousMargin",paraId:10,tocIndex:10},{value:"\u6F0F\u51FA\u4E0A\u4E00\u5F20\u7684\u5BBD\u5EA6\uFF08\u9AD8\u5EA6\uFF09",paraId:10,tocIndex:10},{value:"number | string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"nextMargin",paraId:10,tocIndex:10},{value:"\u6F0F\u51FA\u4E0B\u4E00\u5F20\u7684\u5BBD\u5EA6\uFF08\u9AD8\u5EA6\uFF09",paraId:10,tocIndex:10},{value:"number | string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"indicatorDots",paraId:10,tocIndex:10},{value:"\u9875\u9762\u6307\u793A\u5668\uFF08\u5C0F\u5706\u70B9\uFF09",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"indicatorColor",paraId:10,tocIndex:10},{value:"\u9875\u9762\u6307\u793A\u5668\u975E\u5F53\u524D\u9875\u7684\u989C\u8272",paraId:10,tocIndex:10},{value:"string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"indicatorActiveColor",paraId:10,tocIndex:10},{value:"\u9875\u9762\u6307\u793A\u5668\u5F53\u524D\u9875\u7684\u989C\u8272",paraId:10,tocIndex:10},{value:"string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"onChange",paraId:10,tocIndex:10},{value:"\u5207\u6362\u56DE\u8C03\uFF08\u677E\u624B\u548C\u5207\u6362\u65F6\u89E6\u53D1\uFF09",paraId:10,tocIndex:10},{value:"event=>void",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"onAnimationFinish",paraId:10,tocIndex:10},{value:"\u52A8\u753B\u7ED3\u675F\u56DE\u8C03\uFF08\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1\uFF09",paraId:10,tocIndex:10},{value:"event=>void",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10}]},98160:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u53EA\u9700\u8F7B\u70B9\u6309\u94AE\uFF0C\u7528\u6237\u5C31\u53EF\u4EE5\u89E6\u53D1\u52A8\u4F5C\u6216\u505A\u51FA\u9009\u62E9\u3002",paraId:0,tocIndex:0},{value:"Switch",paraId:1,tocIndex:2},{value:"\u57FA\u7840\u7528\u6CD5\u3002Switch \u9ED8\u8BA4\u989C\u8272\u4E3A",paraId:1,tocIndex:2},{value:"primary",paraId:1,tocIndex:2},{value:"\uFF0C\u9ED8\u8BA4\u5927\u5C0F\u4E3A",paraId:1,tocIndex:2},{value:"medium",paraId:1,tocIndex:2},{value:"\u3002",paraId:1,tocIndex:2},{value:"Switch",paraId:2,tocIndex:4},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86 5 \u79CD\u4E3B\u9898\u989C\u8272\uFF1A",paraId:2,tocIndex:4},{value:"primary",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"info",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"success",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"warning",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"danger",paraId:2,tocIndex:4},{value:"\uFF0C\u53EF\u901A\u8FC7",paraId:2,tocIndex:4},{value:"color",paraId:2,tocIndex:4},{value:"\u6765\u8BBE\u7F6E\u7EC4\u4EF6\u4E3B\u9898\u8272\u3002",paraId:2,tocIndex:4},{value:"color",paraId:2,tocIndex:4},{value:"\u5C5E\u6027\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"primary",paraId:2,tocIndex:4},{value:"\u3002",paraId:2,tocIndex:4},{value:"\u53EF\u901A\u8FC7",paraId:3,tocIndex:5},{value:"size",paraId:3,tocIndex:5},{value:"\u6765\u89C4\u5B9A\u7EC4\u4EF6\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u6709",paraId:3,tocIndex:5},{value:"small",paraId:3,tocIndex:5},{value:"\u3001",paraId:3,tocIndex:5},{value:"medium",paraId:3,tocIndex:5},{value:"\u3001",paraId:3,tocIndex:5},{value:"large",paraId:3,tocIndex:5},{value:"\u3002\u9ED8\u8BA4\u4E3A",paraId:3,tocIndex:5},{value:"medium",paraId:3,tocIndex:5},{value:"\u3002",paraId:3,tocIndex:5},{value:"\u901A\u8FC7",paraId:4,tocIndex:6},{value:"checkedChildren",paraId:4,tocIndex:6},{value:"\u548C",paraId:4,tocIndex:6},{value:"unCheckedChildren",paraId:4,tocIndex:6},{value:"\u6765\u81EA\u5B9A\u4E49\u72B6\u6001\u6587\u5B57\u6216\u56FE\u6807\u3002",paraId:4,tocIndex:6},{value:"\u901A\u8FC7",paraId:5,tocIndex:7},{value:"checked",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"onChange",paraId:5,tocIndex:7},{value:" \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u9009\u4E2D\u72B6\u6001\u3002",paraId:5,tocIndex:7},{value:"\u901A\u8FC7",paraId:6,tocIndex:8},{value:"inputProps",paraId:6,tocIndex:8},{value:"\u4F20\u5165\u7684 input \u5C5E\u6027\u53EF\u900F\u4F20\u81F3\u5185\u90E8",paraId:6,tocIndex:8},{value:"input",paraId:6,tocIndex:8},{value:"\u6807\u7B7E\u3002",paraId:6,tocIndex:8},{value:"\u901A\u8FC7",paraId:7,tocIndex:9},{value:"disabled",paraId:7,tocIndex:9},{value:"\u6307\u5B9A ",paraId:7,tocIndex:9},{value:"Switch",paraId:7,tocIndex:9},{value:"\u4E3A\u7981\u7528\u72B6\u6001\u3002",paraId:7,tocIndex:9},{value:"\u5C5E\u6027",paraId:8,tocIndex:10},{value:"\u8BF4\u660E",paraId:8,tocIndex:10},{value:"\u7C7B\u578B",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:10},{value:"checked",paraId:8,tocIndex:10},{value:"\u662F\u5426\u9009\u4E2D",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"defaultChecked",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u662F\u5426\u9009\u4E2D\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"inputRef",paraId:8,tocIndex:10},{value:"\u5185\u90E8",paraId:8,tocIndex:10},{value:"<input>",paraId:8,tocIndex:10},{value:"\u6807\u7B7E\u7684 ref",paraId:8,tocIndex:10},{value:"React.Ref<HTMLInputElement>",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"inputProps",paraId:8,tocIndex:10},{value:"\u5185\u90E8",paraId:8,tocIndex:10},{value:"<input>",paraId:8,tocIndex:10},{value:"\u6807\u7B7E\u7684\u6807\u51C6\u5C5E\u6027",paraId:8,tocIndex:10},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"name",paraId:8,tocIndex:10},{value:"\u5185\u90E8",paraId:8,tocIndex:10},{value:"<input>",paraId:8,tocIndex:10},{value:"\u540D\u79F0\u6807\u8BC6",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"checkedChildren",paraId:8,tocIndex:10},{value:"\u9009\u4E2D\u65F6\u7684\u5185\u5BB9",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"unCheckedChildren",paraId:8,tocIndex:10},{value:"\u9009\u672A\u4E2D\u65F6\u7684\u5185\u5BB9",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"disabled",paraId:8,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"size",paraId:8,tocIndex:10},{value:"\u5927\u5C0F",paraId:8,tocIndex:10},{value:"small",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"large",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:"color",paraId:8,tocIndex:10},{value:"\u989C\u8272",paraId:8,tocIndex:10},{value:"info",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"primary",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"success",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"warning",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"danger",paraId:8,tocIndex:10},{value:"primary",paraId:8,tocIndex:10},{value:"onChange",paraId:8,tocIndex:10},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:8,tocIndex:10},{value:"(e: React.SyntheticEvent,data: { checked: boolean;},) => void",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"\u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:9,tocIndex:10},{value:"label",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:11},{value:"\u8BF4\u660E",paraId:10,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:11},{value:"--bg-color",paraId:10,tocIndex:11},{value:"\u80CC\u666F\u989C\u8272",paraId:10,tocIndex:11},{value:"#ccc",paraId:10,tocIndex:11}]},54402:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u5E95\u90E8\u5BFC\u822A\u680F\uFF0C\u7528\u4E8E\u5207\u6362\u4E0D\u540C\u9875\u9762",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u76D1\u542C",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:"\u4E8B\u4EF6\u6765\u66F4\u65B0",paraId:1,tocIndex:2},{value:"current",paraId:1,tocIndex:2},{value:"\u503C\u53D8\u5316\uFF0C",paraId:1,tocIndex:2},{value:"current",paraId:1,tocIndex:2},{value:"\u503C\u5FC5\u586B\uFF0C \u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002",paraId:1,tocIndex:2},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:2,tocIndex:3},{value:"icon",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"activeIcon",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49",paraId:2,tocIndex:3},{value:"TabBarItem",paraId:2,tocIndex:3},{value:"\u7684\u9ED8\u8BA4\u56FE\u6807\u3001\u9009\u4E2D\u56FE\u6807",paraId:2,tocIndex:3},{value:"\u652F\u6301\u901A\u8FC7",paraId:3,tocIndex:4},{value:"color",paraId:3,tocIndex:4},{value:"\u3001",paraId:3,tocIndex:4},{value:"activeColor",paraId:3,tocIndex:4},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u4E3B\u9898\u8272\u3001\u9009\u4E2D\u4E3B\u9898\u8272\uFF0C\u4EE5\u6B64\u5B9E\u73B0\u81EA\u5B9A\u4E49\u56FE\u6807\u3001\u5B57\u4F53\u989C\u8272",paraId:3,tocIndex:4},{value:"\u652F\u6301\u901A\u8FC7BadgeProps\u5C5E\u6027\uFF0C\u8BBE\u7F6E",paraId:4,tocIndex:5},{value:"TabBarItem",paraId:4,tocIndex:5},{value:"\u76F8\u5E94\u7684\u5FBD\u6807\u5185\u5BB9",paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"current",paraId:5,tocIndex:7},{value:"\u5F53\u524D\u9009\u4E2D\u7684\u6807\u7B7E\u7D22\u5F15\u503C",paraId:5,tocIndex:7},{value:"number",paraId:5,tocIndex:7},{value:"0",paraId:5,tocIndex:7},{value:"color",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u4E3B\u9898\u8272",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"info",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"success",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"warning",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"danger",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"vip",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:"activeColor",paraId:5,tocIndex:7},{value:"\u9009\u4E2D\u4E3B\u9898\u8272",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"info",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"success",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"warning",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"danger",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"vip",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:"onChange",paraId:5,tocIndex:7},{value:"\u9009\u4E2D\u67D0\u4E00\u9879\u65F6\u7684\u56DE\u8C03",paraId:5,tocIndex:7},{value:"(e:SyntheticEvent, data:{value:number}) => void",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"title",paraId:6,tocIndex:8},{value:"\u6807\u9898",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"icon",paraId:6,tocIndex:8},{value:"\u56FE\u6807",paraId:6,tocIndex:8},{value:"ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"activeIcon",paraId:6,tocIndex:8},{value:"\u9009\u4E2D\u56FE\u6807",paraId:6,tocIndex:8},{value:"ReactNode",paraId:6,tocIndex:8},{value:"BadgeProps",paraId:6,tocIndex:8},{value:"\u5FBD\u6807",paraId:6,tocIndex:8},{value:"BadgeProps",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"\u5C5E\u6027",paraId:7,tocIndex:9},{value:"\u8BF4\u660E",paraId:7,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:9},{value:"\u5168\u5C40\u53D8\u91CF",paraId:7,tocIndex:9},{value:"--tab-color",paraId:7,tocIndex:9},{value:"\u6587\u5B57\u989C\u8272",paraId:7,tocIndex:9},{value:"--bui-color-fg-default",paraId:7,tocIndex:9},{value:"--bui-tab-bar-default-color",paraId:7,tocIndex:9}]},41235:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u6807\u7B7E\u9875\u5207\u6362\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u5C0F\u7A0B\u5E8F\u5207\u6362 Tab \u5E95\u90E8 Line \u4F7F\u7528\u6E10\u53D8\u52A8\u753B\uFF0CH5 \u4F7F\u7528\u4F4D\u79FB\u52A8\u753B;",paraId:1,tocIndex:1},{value:"\u5C0F\u7A0B\u5E8F\u5BF9\u4E8E\u8D85\u51FA\u53EF\u6EDA\u52A8\u7684 Tabs\uFF0C\u70B9\u51FB\u6FC0\u6D3B\u65E0\u6CD5\u79FB\u52A8\u5230\u89C6\u56FE\u4E2D\u95F4\u4F4D\u7F6E\u3002",paraId:1,tocIndex:1},{value:"\u642D\u914D Tab \u7EC4\u4EF6\u5B8C\u6210\u5E03\u5C40",paraId:2,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:4},{value:"tabs",paraId:3,tocIndex:4},{value:" \u751F\u6210 Tab\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"disabled",paraId:4,tocIndex:5},{value:" \u7981\u6B62 Tab \u89E6\u53D1\u70B9\u51FB\u3002",paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:5,tocIndex:9},{value:"\u8BF4\u660E",paraId:5,tocIndex:9},{value:"\u7C7B\u578B",paraId:5,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:9},{value:"value",paraId:5,tocIndex:9},{value:"\u5F53\u524D\u9009\u4E2D\u9762\u677F\u7684\u7D22\u5F15\u503C\uFF0C\u4E0E tabs.index \u5BF9\u5E94",paraId:5,tocIndex:9},{value:"string",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"tabs",paraId:5,tocIndex:9},{value:"\u5207\u6362\u9762\u677F\u7684\u6570\u636E",paraId:5,tocIndex:9},{value:"ITabItem[]",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"align",paraId:5,tocIndex:9},{value:"\u5BF9\u9F50\u65B9\u5F0F",paraId:5,tocIndex:9},{value:"start",paraId:5,tocIndex:9},{value:" | ",paraId:5,tocIndex:9},{value:"center",paraId:5,tocIndex:9},{value:"center",paraId:5,tocIndex:9},{value:"onChange",paraId:5,tocIndex:9},{value:"\u5207\u6362\u9762\u677F\u7684\u56DE\u8C03",paraId:5,tocIndex:9},{value:"(e?: SyntheticEvent,data?:{index: string}) => void",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u8BF4\u660E",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"title",paraId:6,tocIndex:10},{value:"\u9762\u677F\u6807\u9898",paraId:6,tocIndex:10},{value:"React.ReactNode",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"index",paraId:6,tocIndex:10},{value:"\u9762\u677F\u7684\u7D22\u5F15\u503C",paraId:6,tocIndex:10},{value:"string",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"disabled",paraId:6,tocIndex:10},{value:"\u9762\u677F\u662F\u5426\u7981\u7528",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"false",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:7,tocIndex:11},{value:"\u8BF4\u660E",paraId:7,tocIndex:11},{value:"\u7C7B\u578B",paraId:7,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:11},{value:"index",paraId:7,tocIndex:11},{value:"\u9762\u677F\u7684\u7D22\u5F15\u503C",paraId:7,tocIndex:11},{value:"string",paraId:7,tocIndex:11},{value:"-",paraId:7,tocIndex:11},{value:"disabled",paraId:7,tocIndex:11},{value:"\u9762\u677F\u662F\u5426\u7981\u7528",paraId:7,tocIndex:11},{value:"boolean",paraId:7,tocIndex:11},{value:"false",paraId:7,tocIndex:11},{value:"onClick",paraId:7,tocIndex:11},{value:"\u70B9\u51FB Tab \u7684\u56DE\u8C03",paraId:7,tocIndex:11},{value:"(e?: SyntheticEvent,data?:{index: string}) => void",paraId:7,tocIndex:11},{value:"-",paraId:7,tocIndex:11},{value:"\u5C5E\u6027",paraId:8,tocIndex:12},{value:"\u8BF4\u660E",paraId:8,tocIndex:12},{value:"\u7C7B\u578B",paraId:8,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:12},{value:"value",paraId:8,tocIndex:12},{value:"\u5F53\u524D\u9009\u4E2D\u9762\u677F\u7684 value",paraId:8,tocIndex:12},{value:"string",paraId:8,tocIndex:12},{value:"-",paraId:8,tocIndex:12},{value:"index",paraId:8,tocIndex:12},{value:"\u5BF9\u5E94 tabs \u5207\u6362\u9762\u677F\u7684\u6570\u636E\u4E2D\u7684 index",paraId:8,tocIndex:12},{value:"string",paraId:8,tocIndex:12},{value:"-",paraId:8,tocIndex:12},{value:"keepMounted",paraId:8,tocIndex:12},{value:"\u5F53 TabPanel \u88AB\u9690\u85CF\u65F6\u662F\u5426\u6E32\u67D3 DOM \u7ED3\u6784",paraId:8,tocIndex:12},{value:"boolean",paraId:8,tocIndex:12},{value:"false",paraId:8,tocIndex:12},{value:"\u5C5E\u6027",paraId:9,tocIndex:13},{value:"\u8BF4\u660E",paraId:9,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:13},{value:"\u5168\u5C40\u53D8\u91CF",paraId:9,tocIndex:13},{value:"--height",paraId:9,tocIndex:13},{value:"Tabs \u9AD8\u5EA6",paraId:9,tocIndex:13},{value:"39px",paraId:9,tocIndex:13},{value:"-",paraId:9,tocIndex:13},{value:"--font-size",paraId:9,tocIndex:13},{value:"\u5B57\u4F53\u5927\u5C0F",paraId:9,tocIndex:13},{value:"--bui-text-size-1",paraId:9,tocIndex:13},{value:"-",paraId:9,tocIndex:13},{value:"--color",paraId:9,tocIndex:13},{value:"\u5B57\u4F53\u989C\u8272",paraId:9,tocIndex:13},{value:"--bui-color-fg-subtle",paraId:9,tocIndex:13},{value:"-",paraId:9,tocIndex:13},{value:"--active-color",paraId:9,tocIndex:13},{value:"\u6FC0\u6D3B Tab \u5B57\u4F53\u989C\u8272",paraId:9,tocIndex:13},{value:"--bui-color-fg-default",paraId:9,tocIndex:13},{value:"-",paraId:9,tocIndex:13},{value:"--line-color",paraId:9,tocIndex:13},{value:"\u4E0B\u6807\u7EBF\u989C\u8272",paraId:9,tocIndex:13},{value:"--bui-color-primary",paraId:9,tocIndex:13},{value:"-",paraId:9,tocIndex:13}]},58978:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u6807\u7B7E\u901A\u5E38\u662F\u5BF9\u4E00\u5757\u89C6\u89C9\u5143\u7D20\u8FDB\u884C\u6807\u8BB0\u6216\u8005\u8865\u5145\u8BF4\u660E\u3002",paraId:0,tocIndex:0},{value:"\u6807\u7B7E\u652F\u6301 ",paraId:1,tocIndex:2},{value:"\u63CF\u8FB9",paraId:1,tocIndex:2},{value:"\u3001 ",paraId:1,tocIndex:2},{value:"\u586B\u5145",paraId:1,tocIndex:2},{value:"\u3001 ",paraId:1,tocIndex:2},{value:"\u6D45\u4EAE",paraId:1,tocIndex:2},{value:` \u4E09\u79CD\u5C55\u793A\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u662F\u63CF\u8FB9\u6807\u7B7E\u3002
`,paraId:1,tocIndex:2},{value:"\u63CF\u8FB9\u6807\u7B7E",paraId:1,tocIndex:2},{value:`\uFF1A\u5E38\u89C1\u767D\u5E95\u80CC\u666F\u52A0\u8FB9\u6846\u5F62\u5F0F\uFF0C\u53EF\u4E0E\u586B\u5145\u6309\u94AE\u642D\u914D\u6210\u7EC4\u4F7F\u7528\u3002
`,paraId:1,tocIndex:2},{value:"\u586B\u5145\u6807\u7B7E",paraId:1,tocIndex:2},{value:`\uFF1A\u7528\u6237\u5728\u6574\u4E2A\u9875\u9762\u9700\u8981\u5173\u6CE8\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u6807\u7B7E\uFF0C\u5F15\u5BFC\u7528\u6237\u5173\u6CE8\u3002
`,paraId:1,tocIndex:2},{value:"\u6D45\u4EAE\u6807\u7B7E",paraId:1,tocIndex:2},{value:"\uFF1A\u6D45\u4EAE\u6A21\u5F0F\u5728\u89C6\u89C9\u5F3A\u8C03\u7A0B\u5EA6\u4E0A\u5F31\u4E8E\u586B\u5145\u6807\u7B7E\uFF0C\u80CC\u666F\u4E0E\u6587\u6848\u4E3A\u540C\u4E00\u4E3B\u9898\u8272\u3002",paraId:1,tocIndex:2},{value:"Tag \u6807\u7B7E\u652F\u6301 ",paraId:2,tocIndex:3},{value:"primary",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"success",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"info",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"warning",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"danger",paraId:2,tocIndex:3},{value:" \u4E3B\u9898\u5B9A\u4E49\u3002\u82E5\u4E0D\u8BBE\u7F6Ecolor\uFF0C\u5219\u9ED8\u8BA4\u4E3A",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"\u9664\u4E86\u53EF\u4EE5\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684\u4E3B\u9898\u8272\u5916\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7",paraId:3,tocIndex:4},{value:"htmlColor",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u81EA\u5B9A\u4E49\u8272\u5F69\u3002",paraId:3,tocIndex:4},{value:"\u9664\u4E86\u5355\u4E2A\u6807\u7B7E Tag\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u7ED3\u5408",paraId:4,tocIndex:5},{value:"TagGroup",paraId:4,tocIndex:5},{value:"\u7EC4\u4EF6\u5B9E\u73B0\u7EC4\u5408\u6807\u7B7E\u3002",paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"color",paraId:5,tocIndex:7},{value:"\u6807\u7B7E\u4E3B\u9898\u8272",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"info",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"success",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"warning",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"danger",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"vip",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:"htmlColor",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6807\u7B7E\u989C\u8272",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"variant",paraId:5,tocIndex:7},{value:"\u6807\u7B7E\u7C7B\u578B",paraId:5,tocIndex:7},{value:"contained",paraId:5,tocIndex:7},{value:" \uFF5C",paraId:5,tocIndex:7},{value:"outlined",paraId:5,tocIndex:7},{value:"\uFF5C",paraId:5,tocIndex:7},{value:"light",paraId:5,tocIndex:7},{value:"contained",paraId:5,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"\u5168\u5C40\u53D8\u91CF",paraId:6,tocIndex:8},{value:"--bg-color",paraId:6,tocIndex:8},{value:"Tag \u80CC\u666F\u8272",paraId:6,tocIndex:8},{value:"--bui-color-gay",paraId:6,tocIndex:8},{value:"--bui-tag-bg-color",paraId:6,tocIndex:8},{value:"--border-color",paraId:6,tocIndex:8},{value:"Tag \u8FB9\u6846\u8272",paraId:6,tocIndex:8},{value:"--bui-color-border-gay",paraId:6,tocIndex:8},{value:"--bui-tag-border-color",paraId:6,tocIndex:8},{value:"--color",paraId:6,tocIndex:8},{value:"Tag \u6587\u6848\u989C\u8272",paraId:6,tocIndex:8},{value:"--bui-color-gay",paraId:6,tocIndex:8},{value:"--bui-tag-color",paraId:6,tocIndex:8}]},956:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u6587\u672C\u8F93\u5165\u6846\uFF0C\u7528\u4E8E\u8F93\u5165\u8F83\u957F\u5185\u5BB9\u65F6\u4F7F\u7528\u3002",paraId:0,tocIndex:0},{value:"\u652F\u6301",paraId:1,tocIndex:2},{value:"textarea",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u7684\u57FA\u7840\u5C5E\u6027\u900F\u4F20\uFF0C\u82E5\u8981\u900F\u4F20\u7684\u5C5E\u6027\u4E0D\u5728\u8BE5\u6587\u6863\u4E2D\uFF0C\u653E\u5165",paraId:1,tocIndex:2},{value:"textareaProps",paraId:1,tocIndex:2},{value:"\u5B57\u6BB5\u4E2D\u624D\u4F1A\u900F\u4F20\u81F3\u5185\u90E8",paraId:1,tocIndex:2},{value:"textarea",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u3002",paraId:1,tocIndex:2},{value:"showCount",paraId:2,tocIndex:3},{value:"\u4F1A\u63A7\u5236\u5C55\u793A\u8F93\u5165\u7684\u5B57\u6570\uFF0C\u4E00\u822C\u53EF\u642D\u914D",paraId:2,tocIndex:3},{value:"maxLength",paraId:2,tocIndex:3},{value:"\u4F7F\u7528\u3002",paraId:2,tocIndex:3},{value:"\u6839\u636E\u662F\u5426\u4F20\u5165 ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:" \u6765\u5224\u65AD\u662F\u5426\u4E3A\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u975E\u53D7\u63A7\u7EC4\u4EF6\u53EF\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"textareaRef",paraId:3,tocIndex:4},{value:" \u83B7\u53D6\u5143\u7D20\u6765\u63A7\u5236 ",paraId:3,tocIndex:4},{value:"textarea",paraId:3,tocIndex:4},{value:" \u7684 value\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"autoFocus",paraId:4,tocIndex:5},{value:" \u5B57\u6BB5\u63A7\u5236\u662F\u5426\u81EA\u52A8\u805A\u7126\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"autoSize",paraId:5,tocIndex:6},{value:" \u5B57\u6BB5\u63A7\u5236\u662F\u5426\u81EA\u52A8\u6491\u9AD8\uFF0C\u8BE5\u5B57\u6BB5\u4F20\u5165 ",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:" \u65F6\u4E0D\u9650\u5236\u9AD8\u5EA6\u5927\u5C0F\uFF0C\u4F20\u5165 ",paraId:5,tocIndex:6},{value:"object",paraId:5,tocIndex:6},{value:" \u65F6\u53EF\u63A7\u5236\u9AD8\u5EA6\u5927\u5C0F\uFF0C\u8D85\u51FA\u6700\u5927\u503C\u53EF\u6EDA\u52A8\u3002\u8BE5\u529F\u80FD\u4E0D\u652F\u6301\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u3002",paraId:5,tocIndex:6},{value:"\u5C5E\u6027",paraId:6,tocIndex:7},{value:"\u8BF4\u660E",paraId:6,tocIndex:7},{value:"\u7C7B\u578B",paraId:6,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:7},{value:"value",paraId:6,tocIndex:7},{value:"\u8F93\u5165\u6846\u5185\u5BB9\uFF0C\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"defaultValue",paraId:6,tocIndex:7},{value:"\u9ED8\u8BA4\u8F93\u5165\u6846\u5185\u5BB9\uFF0C\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"textareaProps",paraId:6,tocIndex:7},{value:"\u5185\u90E8",paraId:6,tocIndex:7},{value:"<textarea>",paraId:6,tocIndex:7},{value:"\u6807\u7B7E\u7684\u6807\u51C6\u5C5E\u6027",paraId:6,tocIndex:7},{value:"TextareaHTMLAttributes<HTMLTextAreaElement>",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"textareaRef",paraId:6,tocIndex:7},{value:"\u5185\u90E8",paraId:6,tocIndex:7},{value:"<textarea>",paraId:6,tocIndex:7},{value:"\u6807\u7B7E\u7684 ref",paraId:6,tocIndex:7},{value:"React.Ref<HTMLTextAreaElement>",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"name",paraId:6,tocIndex:7},{value:"\u5185\u90E8",paraId:6,tocIndex:7},{value:"<textarea>",paraId:6,tocIndex:7},{value:"\u540D\u79F0\u6807\u8BC6",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"placeholder",paraId:6,tocIndex:7},{value:"\u5360\u4F4D\u5185\u5BB9",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"disabled",paraId:6,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"rows",paraId:6,tocIndex:7},{value:"\u6587\u672C\u6846\u884C\u6570",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"2",paraId:6,tocIndex:7},{value:"maxLength",paraId:6,tocIndex:7},{value:"\u5185\u5BB9\u6700\u5927\u957F\u5EA6",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"autoSize",paraId:6,tocIndex:7},{value:"\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u4E3A true | false \u6216\u5BF9\u8C61\uFF1A{minHeight?: number;maxHeight?: number}",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"autoFocus",paraId:6,tocIndex:7},{value:"\u662F\u5426\u81EA\u52A8\u805A\u7126",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"showCount",paraId:6,tocIndex:7},{value:"\u5C55\u793A\u5B57\u6570",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"onChange",paraId:6,tocIndex:7},{value:"\u6587\u672C\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:6,tocIndex:7},{value:"(e: React.ChangeEvent<HTMLTextAreaElement>,data: {value: string}) => void",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"\u5C5E\u6027",paraId:7,tocIndex:8},{value:"\u8BF4\u660E",paraId:7,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:8},{value:"\u5168\u5C40\u53D8\u91CF",paraId:7,tocIndex:8},{value:"--bg-color",paraId:7,tocIndex:8},{value:"\u8F93\u5165\u6846\u5E95\u8272",paraId:7,tocIndex:8},{value:"--bui-color-bg-default",paraId:7,tocIndex:8},{value:"-",paraId:7,tocIndex:8},{value:"--text-color",paraId:7,tocIndex:8},{value:"\u8F93\u5165\u6846\u5B57\u4F53\u989C\u8272",paraId:7,tocIndex:8},{value:"--bui-color-fg-subtle",paraId:7,tocIndex:8},{value:"-",paraId:7,tocIndex:8},{value:"--count-bg-color",paraId:7,tocIndex:8},{value:"\u8BA1\u6570\u680F\u5E95\u8272",paraId:7,tocIndex:8},{value:"--bg-color",paraId:7,tocIndex:8},{value:"-",paraId:7,tocIndex:8},{value:"--count-text-color",paraId:7,tocIndex:8},{value:"\u8BA1\u6570\u680F\u5B57\u4F53\u989C\u8272",paraId:7,tocIndex:8},{value:"--bui-color-fg-subtle",paraId:7,tocIndex:8},{value:"-",paraId:7,tocIndex:8}]},59111:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u6240\u6709\u52A8\u6548\u7684\u5E95\u5C42\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u8D1F\u8D23\u7EF4\u62A4\u4E00\u4E2A\u7EC4\u4EF6\u5E94\u5F53\u662F\u4EC0\u4E48\u72B6\u6001\u7684\u8F93\u5165\uFF08\u8FDB\u5165\uFF0C\u9000\u51FA\uFF09\u5230\u7EC4\u4EF6\u73B0\u5728\u662F\u4EC0\u4E48\u72B6\u6001\u7684\u8F93\u51FA\uFF08\u8FDB\u5165\u4E2D\uFF0C\u5DF2\u8FDB\u5165\uFF0C\u9000\u51FA\u4E2D\uFF0C\u5DF2\u9000\u51FA\uFF0C\u5378\u8F7D\uFF09\u7684\u6620\u5C04\u3002",paraId:1,tocIndex:0},{value:"\u5177\u4F53\u6E32\u67D3\u7531\u4F7F\u7528\u65B9\u4F20\u5165 render \u51FD\u6570\u63A5\u53D7\u7EC4\u4EF6\u5F53\u524D\u72B6\u6001\u540E\u81EA\u884C\u5B8C\u6210\u3002",paraId:2,tocIndex:0},{value:`\u5982\u4E0B\u4EE3\u7801\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u6613\u7684Fade\u7EC4\u4EF6\u3002
\u53EF\u4EE5\u770B\u5230\uFF0C\u5411Transition\u4E2D\u4F20\u5165\u4E00\u4E2A\u6E32\u67D3\u51FD\u6570\uFF0C\u7136\u540E\u57FA\u4E8E\u5B83\u7EF4\u62A4\u7684status\u5373\u53EF\u8F7B\u677E\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5207\u6362\u52A8\u6548\u3002
\u65F6\u6001\u5BF9\u5E94\u7684\u542B\u4E49\u5177\u4F53\u5982\u4E0B\uFF1A
enter, exit: in\u6539\u53D8\u540E\u3001\u52A8\u4F5C\u89E6\u53D1\u524D
-ing: \u52A8\u4F5C\u8FDB\u884C\u4E2D
-ed: \u52A8\u4F5C\u7ED3\u675F`,paraId:3,tocIndex:2},{value:`Transition\u7EC4\u4EF6\u4F1A\u5728\u6BCF\u6B21\u72B6\u6001\u53D8\u66F4\u65F6\u89E6\u53D1\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF0C\u5E76\u5728\u5165\u53C2\u4E2D\u5C3D\u53EF\u80FD\u8FD4\u56DE\u5BF9\u5E94\u7684DOM\u8282\u70B9\u3002
\u65F6\u6001\u5BF9\u5E94\u7684\u89E6\u53D1\u65F6\u673A\u5177\u4F53\u5982\u4E0B\uFF1A
enter, exit: in\u6539\u53D8\u540E\u3001\u52A8\u4F5C\u89E6\u53D1\u524D
-ing: \u52A8\u4F5C\u5F00\u59CB\u540E\uFF08\u52A8\u4F5C\u8FDB\u884C\u4E2D\uFF09
-ed: \u52A8\u4F5C\u7ED3\u675F\u540E`,paraId:4,tocIndex:3},{value:"\u5C5E\u6027",paraId:5,tocIndex:4},{value:"\u8BF4\u660E",paraId:5,tocIndex:4},{value:"\u7C7B\u578B",paraId:5,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:4},{value:"in",paraId:5,tocIndex:4},{value:"\u662F\u5426\u8FDB\u5165",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"appear",paraId:5,tocIndex:4},{value:"\u6302\u8F7D\u65F6\u662F\u5426\u64AD\u653E\u52A8\u753B",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"timeout",paraId:5,tocIndex:4},{value:"\u52A8\u753B\u65F6\u95F4\u914D\u7F6E",paraId:5,tocIndex:4},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"delay",paraId:5,tocIndex:4},{value:"\u52A8\u753B\u5EF6\u8FDF\u914D\u7F6E",paraId:5,tocIndex:4},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"enter",paraId:5,tocIndex:4},{value:"\u662F\u5426\u64AD\u653E\u8FDB\u5165\u52A8\u753B",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"true",paraId:5,tocIndex:4},{value:"exit",paraId:5,tocIndex:4},{value:"\u662F\u5426\u64AD\u653E\u9000\u51FA\u52A8\u753B",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"true",paraId:5,tocIndex:4},{value:"mountOnEnter",paraId:5,tocIndex:4},{value:"\u9996\u6B21\u8FDB\u5165\u65F6\u518D\u6302\u8F7Dchildren",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"unmountOnExit",paraId:5,tocIndex:4},{value:"\u9000\u51FA\u65F6\u5378\u8F7Dchildren",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"onEnter",paraId:5,tocIndex:4},{value:"\u8FDB\u5165\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onEntering",paraId:5,tocIndex:4},{value:"\u8FDB\u5165\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onEntered",paraId:5,tocIndex:4},{value:"\u8FDB\u5165\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onExit",paraId:5,tocIndex:4},{value:"\u9000\u51FA\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onExiting",paraId:5,tocIndex:4},{value:"\u9000\u51FA\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onExited",paraId:5,tocIndex:4},{value:"\u9000\u51FA\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4}]},10562:function(g,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return b}});const b=[{value:"\u9700\u8981\u5B89\u88C5 @bifrostui/icons \u56FE\u6807\u7EC4\u4EF6\u5305\u3002",paraId:0,tocIndex:0},{value:`$ npm install --save @bifrostui/icons
# or
$ yarn add @bifrostui/icons
# or
$ pnpm add @bifrostui/icons
`,paraId:1,tocIndex:0},{value:"\u5B89\u88C5\u5B8C\u5305\u540E\uFF0C\u76F4\u63A5\u5F15\u7528\u6240\u9700\u56FE\u6807",paraId:2,tocIndex:1},{value:`import { SettingsOutlinedIcon } from '@bifrostui/icons';
`,paraId:3,tocIndex:1},{value:"\u901A\u8FC7",paraId:4,tocIndex:3},{value:"size",paraId:4,tocIndex:3},{value:"\u5C5E\u6027\u8BBE\u7F6E\u56FE\u6807\u5927\u5C0F\u3002",paraId:4,tocIndex:3},{value:"\u901A\u8FC7",paraId:5,tocIndex:4},{value:"color",paraId:5,tocIndex:4},{value:"\u5C5E\u6027\u8BBE\u7F6E\u56FE\u6807\u8272\u5F69\u3002",paraId:5,tocIndex:4},{value:"\u5982\u679C\u9884\u5B9A\u4E49\u7684\u56FE\u6807\u5927\u5C0F\u3001\u8272\u5F69\u4E0D\u80FD\u6EE1\u8DB3\u9700\u8981\u7684\u8BDD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u901A\u8FC7",paraId:6,tocIndex:5},{value:"htmlColor",paraId:6,tocIndex:5},{value:"\u5C5E\u6027\u5B9A\u5236\u989C\u8272, \u6216\u8005",paraId:6,tocIndex:5},{value:"style",paraId:6,tocIndex:5},{value:"\u5C5E\u6027\u81EA\u5B9A\u4E49\u3002",paraId:6,tocIndex:5},{value:"\u5C5E\u6027",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"color",paraId:7,tocIndex:7},{value:"\u56FE\u6807\u4E3B\u9898\u989C",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"primary",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"info",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"success",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"warning",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"danger",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"htmlColor",paraId:7,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"size",paraId:7,tocIndex:7},{value:"\u9884\u7F6E\u7684\u56FE\u6807\u5927\u5C0F\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5143\u7D20\u7684font-size\u6765\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7684\u56FE\u6807\u5927\u5C0F",paraId:7,tocIndex:7},{value:"small",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"medium",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"large",paraId:7,tocIndex:7},{value:"\u7EE7\u627F\u7236\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F",paraId:7,tocIndex:7},{value:"viewBox",paraId:7,tocIndex:7},{value:"SVG\u7684viewBox\u5C5E\u6027",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"'0 0 96 96'",paraId:7,tocIndex:7}]},26520:function(g,u){"use strict";u.Z=`import React, { useState } from 'react';
import { Button, Radio, RadioGroup, Stack } from '@bifrostui/react';
import './index.less';

const StackDemo = () => {
  const [stackState, setStackState] = useState({
    direction: '',
    alignItems: '',
    justifyContent: '',
    spacing: '',
    wrap: '',
  } as any);

  return (
    <Stack>
      <Stack
        style={{
          width: '150px',
          height: '150px',
        }}
        {...stackState}
      >
        <Button>\u6309\u94AE1</Button>
        <Button>\u6309\u94AE2</Button>
        <Button>\u6309\u94AE3</Button>
      </Stack>
      <div className="bui-stack-demo-options">
        <RadioGroup
          value={stackState.direction}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              direction: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title">direction</div>
          <Radio value="row"> row</Radio>
          <Radio value="row-reverse"> row-reverse</Radio>
          <Radio value="column">column</Radio>
          <Radio value="column-reverse">column-reverse</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.justifyContent}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              justifyContent: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> justifyContent</div>
          <Radio value="flex-start"> flex-start</Radio>
          <Radio value="flex-end"> flex-end</Radio>
          <Radio value="center">center</Radio>
          <Radio value="space-between">space-between</Radio>
          <Radio value="space-around">space-around</Radio>
          <Radio value="space-evenly">space-evenly</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.alignItems}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              alignItems: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> alignItems</div>
          <Radio value="flex-start"> flex-start</Radio>
          <Radio value="flex-end"> flex-end</Radio>
          <Radio value="center">center</Radio>
          <Radio value="stretch">stretch</Radio>
          <Radio value="baseline"> baseline</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.flexWrap}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              flexWrap: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> flexWrap</div>
          <Radio value="wrap"> wrap</Radio>
          <Radio value="no-wrap"> no-wrap</Radio>
          <Radio value="wrap-reverse">wrap-reverse</Radio>
        </RadioGroup>
        <RadioGroup
          value={stackState.spacing}
          onChange={(e, data) => {
            setStackState({
              ...stackState,
              spacing: data.value,
            });
          }}
        >
          <div className="bui-stack-demo-options-title"> spacing</div>
          <Radio value="10px">10px</Radio>
          <Radio value="20px"> 20px</Radio>
          <Radio value="30px">30px</Radio>
          <Radio value="40px">40px</Radio>
          <Radio value="50px"> 50px</Radio>
        </RadioGroup>
      </div>
    </Stack>
  );
};

export default StackDemo;
`},10221:function(g,u){"use strict";u.Z=`.bui-stack-demo-options {
  display: flex;
  column-gap: 30px;

  &-title {
    font-weight: 500;
  }
}

@media all and (max-width: 570px) {
  .bui-stack-demo-options {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    &-title {
      width: 100%;
      font-size: 16px;
    }

    .bui-radio-group {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }
}
`},52145:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88c22.1 0 40-17.9 40-40S70.1 8 48 8 8 25.9 8 48s17.9 40 40 40zM30.9 60.9 45 46.8V30c0-1.7 1.3-3 3-3s3 1.3 3 3v18c0 .8-.3 1.6-.9 2.1l-15 15c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3 0-4.2z"/>',
  'AccessTimeCircleFilledIcon',
);
`},19056:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88c22.1 0 40-17.9 40-40S70.1 8 48 8 8 25.9 8 48s17.9 40 40 40zm0-65c2.8 0 5 2.2 5 5v20c0 1-.3 1.8-.7 2.6-.2.7-.6 1.3-1.2 1.9L35.5 68c-2 2-5.1 2-7.1 0s-2-5.1 0-7.1L43 46.4V28c0-2.8 2.2-5 5-5z"/>',
  'AccessTimeCircleFilledBoldIcon',
);
`},38160:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm16.1 46.9L50 46.8V30c0-1.7-1.3-3-3-3s-3 1.3-3 3v18c0 .8.3 1.6.9 2.1l15 15c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3 0-4.2z"/>',
  'AccessTimeCircleOutlinedIcon',
);
`},49379:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 20c2.2 0 4 1.8 4 4v20h20c2.2 0 4 1.8 4 4s-1.8 4-4 4H52v20c0 2.2-1.8 4-4 4s-4-1.8-4-4V52H24c-2.2 0-4-1.8-4-4s1.8-4 4-4h20V24c0-2.2 1.8-4 4-4z"/>',
  'AddIcon',
);
`},14019:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 22c-1.7 0-3 1.3-3 3v12H33c-1.7 0-3 1.3-3 3s1.3 3 3 3h12v12c0 1.7 1.3 3 3 3s3-1.3 3-3V51h12c1.7 0 3-1.3 3-3s-1.3-3-3-3H51V33c0-1.7-1.3-3-3-3z"/>',
  'AddCircleFilledIcon',
);
`},96786:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88c22.1 0 40-17.9 40-40S70.1 8 48 8 8 25.9 8 48s17.9 40 40 40zm3.3-43.3h13.3c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3H51.3v13.3c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3V51.3H31.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h13.3V31.3c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v13.4z"/>',
  'AddCircleFilledBoldIcon',
);
`},70534:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40zm0-6c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48s15.2 34 34 34zm3-37h12c1.7 0 3 1.3 3 3s-1.3 3-3 3H51v12c0 1.7-1.3 3-3 3s-3-1.3-3-3V51H33c-1.7 0-3-1.3-3-3s1.3-3 3-3h12V33c0-1.7 1.3-3 3-3s3 1.3 3 3v12z"/>',
  'AddCircleOutlinedIcon',
);
`},55440:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c6.1 0 11 4.9 11 11v14c0 1.7-1.3 3-3 3-3.9 0-7 3.1-7 7s3.1 7 7 7c1.7 0 3 1.3 3 3v14c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V58c0-1.7 1.3-3 3-3 3.9 0 7-3.1 7-7s-3.1-7-7-7c-1.7 0-3-1.3-3-3V24c0-6.1 4.9-11 11-11h58zm0 6H19c-2.8 0-5 2.2-5 5v11.3c5.7 1.4 10 6.5 10 12.7s-4.3 11.3-10 12.7V72c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V60.7c-5.7-1.4-10-6.5-10-12.7s4.3-11.3 10-12.7V24c0-2.8-2.2-5-5-5zM48 35.5c1.7 0 3 1.3 3 3v7h7c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-7v7c0 1.6-1.2 2.9-2.8 3H48c-1.7 0-3-1.3-3-3v-7h-7c-1.6 0-2.9-1.2-3-2.8v-.2c0-1.7 1.3-3 3-3h7v-7c0-1.6 1.2-2.9 2.8-3h.2z"/>',
  'AddCouponOutlinedIcon',
);
`},63619:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 10c2.2 0 4 1.8 4 4v30h30c2.2 0 4 1.8 4 4s-1.8 4-4 4H52v30c0 2.2-1.8 4-4 4s-4-1.8-4-4V52H14c-2.2 0-4-1.8-4-4s1.8-4 4-4h30V14c0-2.2 1.8-4 4-4z"/>',
  'AddLargeIcon',
);
`},81395:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M18 59.2V37.9C18 21.4 31.4 8 48 8s30 13.4 30 29.9v21.3l5.7 11.3c1 2-.5 4.3-2.7 4.3H15c-2.2 0-3.7-2.3-2.7-4.3L18 59.2zm58.1 9.7-3.8-7.6c-.2-.4-.3-.9-.3-1.3V38c0-13.2-10.7-24-24-24S24 24.7 24 38v22c0 .5-.1.9-.3 1.3l-3.8 7.6h56.2zM34.6 83.2c-1.3-1.1-1.4-2.9-.4-4.2 1.1-1.3 3-1.4 4.2-.4 2.7 2.2 6 3.5 9.6 3.5 3.6 0 6.9-1.2 9.6-3.5 1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2C57.7 86.3 53 88 48 88s-9.7-1.7-13.4-4.8z"/>',
  'AlarmOutlinedIcon',
);
`},64466:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 51c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0-34c-2.2 0-4 1.8-4 4v22c0 2.2 1.8 4 4 4s4-1.8 4-4V29c0-2.2-1.8-4-4-4z"/>',
  'AlertCircleFilledIcon',
);
`},12414:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path class="st0" d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 50c-2.7 0-4.9 2.1-5 4.8V65c0 2.8 2.2 5 5 5 2.7 0 4.9-2.1 5-4.8V63c0-2.8-2.2-5-5-5zm0-33c-2.7 0-4.9 2.1-5 4.8V50c0 2.8 2.2 5 5 5 2.7 0 4.9-2.1 5-4.8V30c0-2.8-2.2-5-5-5z"/>',
  'AlertCircleFilledBoldIcon',
);
`},36298:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm0 47c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0-34c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4s-4-1.8-4-4V31c0-2.2 1.8-4 4-4z"/>',
  'AlertCircleOutlinedIcon',
);
`},10827:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M31.9 19c11.7 0 23.6 8.1 36 23.9 4-5.2 8.3-7.9 12.9-7.9C87.6 35 93 40.9 93 48s-5.4 13-12.2 13c-4.6 0-8.9-2.7-12.9-7.9C55.5 68.9 43.6 77 31.9 77 15.9 77 3 64 3 48s12.9-29 28.9-29zm0 6C19.3 25 9 35.3 9 48s10.3 23 22.9 23c9.7 0 20.6-7.6 32.3-23-11.7-15.4-22.5-23-32.3-23zm4.2 24.7c1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2L36.7 57l3.2 2.7c1.3 1.1 1.4 3 .4 4.2-1.1 1.3-3 1.4-4.2.4l-6-5c-1.4-1.2-1.4-3.4 0-4.6l6-5zm-13-9c1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2L23.7 48l3.2 2.7c1.3 1.1 1.4 3 .4 4.2-1.1 1.3-3 1.4-4.2.4l-6-5c-1.4-1.2-1.4-3.4 0-4.6l6-5zm57.7.3c-2.8 0-5.9 2.2-9.1 6.9l.1.1-.1.1c3.3 4.7 6.4 6.9 9.1 6.9 3.4 0 6.2-3.1 6.2-7s-2.8-7-6.2-7zm-44.7-9.3c1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2L36.7 39l3.2 2.7c1.3 1.1 1.4 3 .4 4.2-1.1 1.3-3 1.4-4.2.4l-6-5c-1.4-1.2-1.4-3.4 0-4.6l6-5z"/>',
  'AliFishOutlinedIcon',
);
`},7755:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 81c-18.2 0-33-14.8-33-33s14.8-33 33-33 33 14.8 33 33-14.8 33-33 33zm0-6c14.9 0 27-12.1 27-27S62.9 21 48 21 21 33.1 21 48s12.1 27 27 27zM34.6 64.2c-1.3-1.1-1.4-3-.4-4.2 1.1-1.3 3-1.4 4.2-.4 2.7 2.2 6 3.5 9.6 3.5 3.6 0 6.9-1.2 9.6-3.5 1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2C57.7 67.3 53 69 48 69s-9.7-1.7-13.4-4.8zM7.1 36c.6-1.6 2.3-2.4 3.8-1.8s2.4 2.3 1.8 3.8c-1.1 3.2-1.7 6.6-1.7 10 0 3.4.6 6.8 1.7 10 .6 1.6-.3 3.3-1.8 3.8s-3.3-.2-3.8-1.8C5.7 56.1 5 52.1 5 48s.7-8.1 2.1-12zm81.8 0c1.4 3.9 2.1 7.9 2.1 12s-.7 8.1-2.1 12c-.6 1.6-2.3 2.4-3.8 1.8s-2.4-2.3-1.8-3.8c1.2-3.2 1.7-6.6 1.7-10 0-3.4-.6-6.8-1.7-10-.6-1.6.3-3.3 1.8-3.8s3.3.2 3.8 1.8zM59 34c1.7 0 3 1.3 3 3v4c0 1.7-1.3 3-3 3s-3-1.3-3-3v-4c0-1.7 1.4-3 3-3zm-22 0c1.7 0 3 1.3 3 3v4c0 1.7-1.3 3-3 3s-3-1.3-3-3v-4c0-1.7 1.3-3 3-3z"/>',
  'AliSweetOutlinedIcon',
);
`},75901:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 7.8c6.5 0 12.8 1.6 18.4 4.5C71.5 10.1 77 9 83 9c2.2 0 3.7 2.3 2.7 4.3-2 4-3.8 7.6-5.3 10.9 4.9 6.8 7.6 15 7.6 23.6 0 22.1-17.9 40-40 40S8 69.9 8 47.8s17.9-40 40-40zM31 34c-2.2 0-4 1.8-4 4v6c0 2.2 1.8 4 4 4s4-1.8 4-4v-6c0-2.2-1.8-4-4-4zm16 0c-2.2 0-4 1.8-4 4v6c0 2.2 1.8 4 4 4s4-1.8 4-4v-6c0-2.2-1.8-4-4-4z"/>',
  'AliWangWangFilledIcon',
);
`},42659:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M83 9c2.2 0 3.7 2.3 2.7 4.3-2 4-3.8 7.6-5.3 10.9 4.9 6.8 7.6 15 7.6 23.6 0 22.1-17.9 40-40 40S8 69.9 8 47.8s17.9-40 40-40c6.5 0 12.8 1.6 18.4 4.5C71.5 10.1 77 9 83 9zm-15.4 9.3c-.9.4-1.9.4-2.8-.1-5.1-2.9-10.8-4.4-16.8-4.4-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34c0-7.9-2.7-15.3-7.5-21.3-.7-.9-.9-2.1-.4-3.2 1.2-2.4 2.4-5.1 3.9-8-3.7.5-7.2 1.5-10.4 3zM31 34c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4s-4-1.8-4-4v-6c0-2.2 1.8-4 4-4zm16 0c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4s-4-1.8-4-4v-6c0-2.2 1.8-4 4-4z"/>',
  'AliWangWangOutlinedIcon',
);
`},905:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M79 37c3.9 0 7 3.1 7 7v8c0 3.9-3.1 7-7 7H17c-3.9 0-7-3.1-7-7v-8c0-3.9 3.1-7 7-7h62zm0 6H17c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h62c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM48 14c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3s-3-1.3-3-3V17c0-1.7 1.3-3 3-3zm0 49c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3s-3-1.3-3-3V66c0-1.7 1.3-3 3-3z"/>',
  'AlignCenterFilledIcon',
);
`},47968:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M79 51c3.9 0 7 3.1 7 7v8c0 3.9-3.1 7-7 7H31c-3.9 0-7-3.1-7-7v-8c0-3.9 3.1-7 7-7h48zm0 6H31c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h48c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM62 23c3.9 0 7 3.1 7 7v8c0 3.9-3.1 7-7 7H31c-3.9 0-7-3.1-7-7v-8c0-3.9 3.1-7 7-7h31zm0 6H31c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h31c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM13 14c1.7 0 3 1.3 3 3v62c0 1.7-1.3 3-3 3s-3-1.3-3-3V17c0-1.7 1.3-3 3-3z"/>',
  'AlignLeftFilledIcon',
);
`},23816:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M65 51c3.9 0 7 3.1 7 7v8c0 3.9-3.1 7-7 7H17c-3.9 0-7-3.1-7-7v-8c0-3.9 3.1-7 7-7h48zm0 6H17c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h48c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm0-34c3.9 0 7 3.1 7 7v8c0 3.9-3.1 7-7 7H34c-3.9 0-7-3.1-7-7v-8c0-3.9 3.1-7 7-7h31zm0 6H34c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h31c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm18-15c1.7 0 3 1.3 3 3v62c0 1.7-1.3 3-3 3s-3-1.3-3-3V17c0-1.7 1.3-3 3-3z"/>',
  'AlignRightFilledIcon',
);
`},90730:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m40.9 48 22.8-21.1c1.6-1.5 1.7-4 .2-5.7-1.5-1.6-4-1.7-5.7-.2l-26 24a4.05 4.05 0 0 0 0 5.9l26 24c1.6 1.5 4.2 1.4 5.7-.2 1.5-1.6 1.4-4.2-.2-5.7L40.9 48z"/>',
  'ArrowBackwardIcon',
);
`},53566:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M16.4 48 50 17.2c1.2-1.1 1.3-3 .2-4.2-1.1-1.2-3-1.3-4.2-.2l-36 33a2.97 2.97 0 0 0 0 4.4l36 33c1.2 1.1 3.1 1 4.2-.2s1-3.1-.2-4.2L16.4 48z"/>',
  'ArrowBackwardLargeIcon',
);
`},29671:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m48 55.1 21.1-22.8c1.5-1.6 4-1.7 5.7-.2 1.6 1.5 1.7 4 .2 5.7l-24 26a4.05 4.05 0 0 1-5.9 0l-24-26c-1.5-1.6-1.4-4.2.2-5.7 1.6-1.5 4.2-1.4 5.7.2l21 22.8z"/>',
  'ArrowDownwardIcon',
);
`},77871:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 61.6 78.8 28c1.1-1.2 3-1.3 4.2-.2 1.2 1.1 1.3 3 .2 4.2l-33 36a2.97 2.97 0 0 1-4.4 0l-33-36c-1.1-1.2-1-3.1.2-4.2s3.1-1 4.2.2L48 61.6z"/>',
  'ArrowDownwardLargeIcon',
);
`},21135:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M55.1 48 32.3 26.9c-1.6-1.5-1.7-4-.2-5.7 1.5-1.6 4-1.7 5.7-.2l26 24c1.7 1.6 1.7 4.3 0 5.9l-26 24c-1.6 1.5-4.2 1.4-5.7-.2-1.5-1.6-1.4-4.2.2-5.7l22.8-21z"/>',
  'ArrowForwardIcon',
);
`},74462:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M76.6 48 43 17.2c-1.2-1.1-1.3-3-.2-4.2s3-1.3 4.2-.2l36 33c1.3 1.2 1.3 3.2 0 4.4l-36 33c-1.2 1.1-3.1 1-4.2-.2s-1-3.1.2-4.2L76.6 48z"/>',
  'ArrowForwardLargeIcon',
);
`},40389:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm2.3 15.1 11.1 11.1c1.1 1.1 1.1 3-.1 4.2-1.2 1.2-3.1 1.2-4.2.1l-6.2-6.2v26.8c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9V38.6l-6.3 6.3c-1.1 1.1-2.9 1.2-4.1.2l-.1-.1c-1.1-1.1-1.1-3 .1-4.2l11.5-11.5c1.1-1.3 3-1.4 4.1-.2z"/>',
  'ArrowUpCircleOutlinedIcon',
);
`},37543:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m48 40.9 21.1 22.8c1.5 1.6 4 1.7 5.7.2 1.6-1.5 1.7-4 .2-5.7l-24-26a4.05 4.05 0 0 0-5.9 0l-24 26c-1.5 1.6-1.4 4.2.2 5.7 1.6 1.5 4.2 1.4 5.7-.2l21-22.8z"/>',
  'ArrowUpwardIcon',
);
`},68510:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 34.4 17.2 68c-1.1 1.2-3 1.3-4.2.2-1.2-1.1-1.3-3-.2-4.2l33-36c1.2-1.3 3.2-1.3 4.4 0l33 36c1.1 1.2 1 3.1-.2 4.2s-3.1 1-4.2-.2L48 34.4z"/>',
  'ArrowUpwardLargeIcon',
);
`},78069:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M51 62c0 1.7-1.3 3-3 3s-3-1.3-3-3V34c0-1.7 1.3-3 3-3s3 1.3 3 3v28zm15 0c0 1.7-1.3 3-3 3s-3-1.3-3-3V46c0-1.7 1.3-3 3-3s3 1.3 3 3v16zm-30 0c0 1.7-1.3 3-3 3s-3-1.3-3-3V42c0-1.7 1.3-3 3-3s3 1.3 3 3v20zM19 13h58c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11zm0 6c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V24c0-2.8-2.2-5-5-5H19z"/>',
  'AssessmentOutlinedIcon',
);
`},79300:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M58 8c3.5 0 6.4 2.6 6.9 6H72c6.1 0 11 4.9 11 11v52c0 6.1-4.9 11-11 11H24c-6.1 0-11-4.9-11-11V25c0-6.1 4.9-11 11-11h7.1c.5-3.4 3.4-6 6.9-6h20zm14 12h-7.1c-.5 3.4-3.4 6-6.9 6H38c-3.5 0-6.4-2.6-6.9-6H24c-2.8 0-5 2.2-5 5v52c0 2.8 2.2 5 5 5h48c2.8 0 5-2.2 5-5V25c0-2.8-2.2-5-5-5zM44 65c1.7 0 3 1.3 3 3s-1.3 3-3 3H32c-1.7 0-3-1.3-3-3s1.3-3 3-3h12zm10-14c1.7 0 3 1.3 3 3s-1.3 3-3 3H32c-1.7 0-3-1.3-3-3s1.3-3 3-3h22zm10-14c1.7 0 3 1.3 3 3s-1.3 3-3 3H32c-1.7 0-3-1.3-3-3s1.3-3 3-3h32zm-6-23H38c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h20c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1z"/>',
  'AssignmentOutlinedIcon',
);
`},64545:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 12c15.3 0 28.6 9.6 33.8 23.6C87.2 37.2 91 42.2 91 48s-3.8 10.8-9.2 12.4C76.6 74.4 63.3 84 48 84s-28.6-9.6-33.8-23.6C8.8 58.8 5 53.8 5 48s3.8-10.8 9.2-12.4C19.4 21.6 32.7 12 48 12zm0 6c-13.2 0-24.7 8.6-28.6 21-.3 1.1-1.3 1.9-2.4 2.1-3.4.5-6 3.4-6 6.9s2.6 6.4 6 6.9c1.1.2 2.1 1 2.4 2.1C23.3 69.4 34.8 78 48 78s24.7-8.6 28.6-21c.3-1.1 1.3-1.9 2.4-2.1 3.4-.5 6-3.4 6-6.9s-2.6-6.4-6-6.9c-1.1-.2-2.1-1-2.4-2.1-2.1-6.7-6.4-12.3-12.1-16-1.6 6.5-7.3 9.3-16 8-1.6-.3-2.8-1.8-2.5-3.4.3-1.6 1.8-2.8 3.4-2.5 6.5 1 9.2-.5 9.5-5C55.5 18.7 51.8 18 48 18zM34.2 59.9c1.1-1.3 3-1.4 4.2-.4 2.7 2.2 6 3.5 9.6 3.5 3.6 0 6.9-1.2 9.6-3.5 1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2C57.7 67.3 53 69 48 69s-9.7-1.7-13.4-4.8c-1.3-1.1-1.5-3-.4-4.3zM36 38c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4s-4-1.8-4-4v-4c0-2.2 1.8-4 4-4zm24 0c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4s-4-1.8-4-4v-4c0-2.2 1.8-4 4-4z"/>',
  'BabyOutlinedIcon',
);
`},39193:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M88 31H8v-7c0-6.1 4.9-11 11-11h58c6.1 0 11 4.9 11 11v7zm0 6v35c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V37h80zM71 63H61c-1.7 0-3 1.3-3 3s1.3 3 3 3h10c1.7 0 3-1.3 3-3s-1.3-3-3-3z"/>',
  'BankCardFilledIcon',
);
`},72103:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M82 37H14v35c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V37zm-68-6h68v-7c0-2.8-2.2-5-5-5H19c-2.8 0-5 2.2-5 5v7zm57 32c1.7 0 3 1.3 3 3s-1.3 3-3 3H61c-1.7 0-3-1.3-3-3s1.3-3 3-3h10zM19 13h58c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11z"/>',
  'BankCardOutlinedIcon',
);
`},2035:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88c22.1 0 40-17.9 40-40S70.1 8 48 8 8 25.9 8 48s17.9 40 40 40zM33 45h30c1.7 0 3 1.3 3 3s-1.3 3-3 3H33c-1.7 0-3-1.3-3-3s1.3-3 3-3z"/>',
  'BlockCircleFilledIcon',
);
`},54080:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40zm0-6c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48s15.2 34 34 34zM33 45h30c1.7 0 3 1.3 3 3s-1.3 3-3 3H33c-1.7 0-3-1.3-3-3s1.3-3 3-3z"/>',
  'BlockCircleOutlinedIcon',
);
`},4881:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 3.3c-20.3 0-36.7 16.4-36.7 36.7S27.7 84.7 48 84.7 84.7 68.3 84.7 48 68.3 11.3 48 11.3zm16.7 33.4c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3H31.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h33.4z"/>',
  'BlockCircleOutlinedThinIcon',
);
`},79583:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M20.7 18.2c2.1-5.9 9.3-8.3 15.8-6L74.1 26H77c6.1 0 11 4.9 11 11v11c0 1.7-1.3 3-3 3-3.3 0-6 2.7-6 6s2.7 6 6 6c1.7 0 3 1.3 3 3v11c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V66c0-1.7 1.3-3 3-3 3.3 0 6-2.7 6-6s-2.7-6-6-6c-1.7 0-3-1.3-3-3V37c0-5.7 4.3-10.4 9.8-10.9l2.9-7.9zM77 32H19c-2.8 0-5 2.2-5 5v8.4c5.2 1.3 9 6 9 11.6s-3.8 10.3-9 11.6V77c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5v-8.4c-5.2-1.3-9-6-9-11.6s3.8-10.3 9-11.6V37c0-2.8-2.2-5-5-5zM60 60.6c1.7 0 3 1.3 3 3s-1.3 3-3 3H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h24zm0-14c1.7 0 3 1.3 3 3s-1.3 3-3 3H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h24zM34.4 17.9c-3.7-1.3-7.2-.1-8.1 2.4L24.2 26h32.4l-22.2-8.1z"/>',
  'BogoOutlinedIcon',
);
`},94568:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M37.1 55H21c-2.1 0-3.6-2.1-2.8-4.1l16-42C34.6 7.8 35.8 7 37 7h27c2.1 0 3.6 2.2 2.8 4.1L57.5 34H75c2.6 0 4 3 2.3 5l-43 49c-2.1 2.4-6 .3-5.2-2.7l8-30.3z"/>',
  'BoltFilledIcon',
);
`},3686:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M37.1 55H21c-2.1 0-3.6-2.1-2.8-4.1l16-42C34.6 7.8 35.8 7 37 7h27c2.1 0 3.6 2.2 2.8 4.1L57.5 34H75c2.6 0 4 3 2.3 5l-43 49c-2.1 2.4-6 .3-5.2-2.7l8-30.3zm2-42L25.4 49H41c2 0 3.4 1.9 2.9 3.8l-5.7 21.7L68.4 40H53c-2.1 0-3.6-2.2-2.8-4.1L59.5 13H39.1z"/>',
  'BoltOutlinedIcon',
);
`},17737:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M14 82V19c0-6.1 4.9-11 11-11h26c6.1 0 11 4.9 11 11v6.2l14.1 7.3c3.6 1.9 5.9 5.7 5.9 9.8V82h3c1.7 0 3 1.3 3 3s-1.3 3-3 3H11c-1.7 0-3-1.3-3-3s1.3-3 3-3h3zm48 0h14V42.2c0-1.9-1-3.6-2.7-4.4L62 31.9V82zm-42 0h36V19c0-2.8-2.2-5-5-5H25c-2.8 0-5 2.2-5 5v63z"/>',
  'BuildingOutlinedIcon',
);
`},58996:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M65 10c1.7 0 3 1.3 3 3v3h7c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V27c0-6.1 4.9-11 11-11h7v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3h28v-3c0-1.7 1.3-3 3-3zM28 22h-7c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V27c0-2.8-2.2-5-5-5h-7v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3H34v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3zm39.1 11.9c1.1 1.1 1.2 2.9.1 4.1l-.1.1-3.2 3.2c4 3 7.1 7 9 11.7-4 10-13.7 17-25.1 17-3.7 0-7.2-.7-10.5-2.1l-4.2 4.2c-1.2 1.2-3.1 1.2-4.2 0-1.1-1.1-1.2-2.9-.1-4.1l.1-.1 3-3c-4.1-3-7.3-7.1-9.2-11.8 4-10 13.7-17 25.1-17 3.8 0 7.4.8 10.7 2.2l4.3-4.3c1.3-1.3 3.1-1.3 4.3-.1zm-7.5 11.7L42 63.2c1.7.5 3.5.8 5.4.8h.4c7.7 0 14.7-4.2 18.3-10.8l.1-.2-.1-.2c-1.6-2.9-3.8-5.4-6.5-7.2zM47.8 42c-7.7 0-14.7 4.2-18.3 10.8l-.2.2.1.2c1.7 3 4 5.5 6.8 7.3l17.6-17.6c-1.8-.5-3.7-.9-5.7-.9h-.3z"/>',
  'CalendarInvisibleOutlinedIcon',
);
`},76483:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M68 16h7c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V27c0-6.1 4.9-11 11-11h7v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3h28v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3zm0 6v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3H34v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3h-7c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V27c0-2.8-2.2-5-5-5h-7zm-1 21c1.7 0 3 1.3 3 3s-1.3 3-3 3H29c-1.7 0-3-1.3-3-3s1.3-3 3-3h38zM55 58c1.7 0 3 1.3 3 3s-1.3 3-3 3H29c-1.7 0-3-1.3-3-3s1.3-3 3-3h26z"/>',
  'CalendarOutlinedIcon',
);
`},79050:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M65 10c1.7 0 3 1.3 3 3v3h7c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V27c0-6.1 4.9-11 11-11h7v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3h28v-3c0-1.7 1.3-3 3-3zM28 22h-7c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V27c0-2.8-2.2-5-5-5h-7v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3H34v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3zm19.8 14c11.4 0 21.1 7 25.1 17-4 10-13.7 17-25.1 17s-21.1-7-25.1-17c4-10 13.7-17 25.1-17zm0 6c-7.7 0-14.7 4.2-18.3 10.8l-.2.2.1.2C33 59.6 39.8 63.8 47.3 64h.4c7.7 0 14.7-4.2 18.3-10.8l.1-.2-.1-.2C62.6 46.3 55.8 42.1 48.2 42h-.4zm.2 5c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z"/>',
  'CalendarVisibleOutlinedIcon',
);
`},74706:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M61.9 12c3.1 0 5.8 2 6.7 4.9l2.2 7.1H77c6.1 0 11 4.9 11 11v40c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V35c0-6.1 4.9-11 11-11h6.3l2.2-7.1c.9-2.9 3.6-4.9 6.7-4.9h27.7zM48 38c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 24c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"/>',
  'CameraFilledIcon',
);
`},67472:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m25.3 24 2.2-7.1c.9-2.9 3.6-4.9 6.7-4.9h27.7c3.1 0 5.8 2 6.7 4.9l2.2 7.1H77c6.1 0 11 4.9 11 11v40c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V35c0-6.1 4.9-11 11-11h6.3zm2.2 6H19c-2.8 0-5 2.2-5 5v40c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V35c0-2.8-2.2-5-5-5h-8.5c-1.3 0-2.5-.9-2.9-2.1l-2.8-9.2c-.1-.4-.5-.7-1-.7H34.1c-.4 0-.8.3-1 .7l-2.8 9.2c-.3 1.2-1.5 2.1-2.8 2.1zM48 68c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm0-6c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"/>',
  'CameraOutlinedIcon',
);
`},93324:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M78 37H18v15h20c1.7 0 3 1.3 3 3 0 3.9 3.1 7 7 7s7-3.1 7-7c0-1.7 1.3-3 3-3h20V37zm0-6V21c0-2.8-2.2-5-5-5H23c-2.8 0-5 2.2-5 5v10h60zm0 27H60.7c-1.4 5.7-6.5 10-12.7 10s-11.3-4.3-12.7-10H18v17c0 2.8 2.2 5 5 5h50c2.8 0 5-2.2 5-5V58zM23 10h50c6.1 0 11 4.9 11 11v54c0 6.1-4.9 11-11 11H23c-6.1 0-11-4.9-11-11V21c0-6.1 4.9-11 11-11z"/>',
  'CardPackageOutlinedIcon',
);
`},45225:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M50 58.1c-.1.2-.3.3-.5.5-1.1.8-2.6.6-3.4-.5L32.5 40.8c-.3-.4-.5-.9-.5-1.4 0-1.3 1.1-2.4 2.5-2.4h27.1c.5 0 1.1.2 1.5.5 1.1.8 1.3 2.3.5 3.3L50 58.1z"/>',
  'CaretDownIcon',
);
`},29600:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M37.9 46c-.2.1-.3.3-.5.5-.8 1.1-.6 2.6.5 3.4l17.3 13.5c.4.3.9.5 1.4.5 1.3 0 2.4-1.1 2.4-2.5V34.5c0-.5-.2-1.1-.5-1.5-.8-1.1-2.3-1.3-3.3-.5L37.9 46z"/>',
  'CaretLeftIcon',
);
`},8532:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M58.1 46c.2.1.3.3.5.5.8 1.1.6 2.6-.5 3.4L40.8 63.5c-.4.3-.9.5-1.4.5-1.3 0-2.4-1.1-2.4-2.5v-27c0-.5.2-1.1.5-1.5.8-1.1 2.3-1.3 3.3-.5L58.1 46z"/>',
  'CaretRightIcon',
);
`},72877:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M50 37.9c-.1-.2-.3-.3-.5-.5-1.1-.8-2.6-.6-3.4.5L32.5 55.2c-.3.4-.5.9-.5 1.4 0 1.3 1.1 2.4 2.5 2.4h27.1c.5 0 1.1-.2 1.5-.5 1.1-.8 1.3-2.3.5-3.3L50 37.9z"/>',
  'CaretUpIcon',
);
`},49869:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8C25.9 8 8 25.9 8 48s17.9 40 40 40c7.3 0 14.4-2 20.5-5.7.2-.1.9-.5 1.9-1.1l9.8 2.7c2.2.6 4.3-1.4 3.7-3.7l-2.7-9.8c1-1.8 1.7-2.9 2-3.6C86.4 61.1 88 54.7 88 48 88 25.9 70.1 8 48 8zm9.6 51.5c1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2C57.7 67.3 53 69 48 69s-9.7-1.7-13.4-4.8c-1.3-1.1-1.4-3-.4-4.2 1.1-1.3 3-1.4 4.2-.4 2.7 2.2 6 3.5 9.6 3.5 3.6-.1 6.9-1.3 9.6-3.6z"/>',
  'ChatFilledIcon',
);
`},10026:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M81.2 70.4c1-1.8 1.7-2.9 2-3.6C86.4 61.1 88 54.7 88 48 88 25.9 70.1 8 48 8S8 25.9 8 48s17.9 40 40 40c7.3 0 14.4-2 20.5-5.7.2-.1.9-.5 1.9-1.1l9.8 2.7c2.2.6 4.3-1.4 3.7-3.7l-2.7-9.8zm-6.1.4 1.6 5.9-5.9-1.6c-.8-.2-1.6-.1-2.3.3-1.7 1-2.7 1.6-3 1.8C60.2 80.3 54.2 82 48 82c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34c0 5.7-1.4 11.2-4 16-.3.6-1.2 2.1-2.6 4.4-.4.8-.5 1.6-.3 2.4z"/>',
  'ChatOutlinedIcon',
);
`},1868:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m30.2 43.1 22.6 22.6c1.5 1.5 1 4-.9 4.9l-39.6 17c-2.5 1.1-5-1.5-3.9-3.9l17-39.6c.8-2 3.3-2.5 4.8-1zm-8.2 24-5.1 12 5.1-2.2v-9.8zm7.1-16.6L28 53.1v21.2l5-2.1V54.4l-3.9-3.9zm9.9 9.9v9.3l6.5-2.8-6.5-6.5zm50.2-7.3c.1.3.1.5 0 .8l-1.3 2.9c-.1.3-.1.5 0 .8l1.3 2.9c.2.5 0 1.1-.5 1.3-.3.1-.5.1-.8 0L85 60.6c-.3-.1-.5-.1-.8 0l-2.9 1.3c-.5.2-1.1 0-1.3-.5-.1-.3-.1-.5 0-.8l1.3-2.9c.1-.3.1-.5 0-.8L80 54c-.2-.5 0-1.1.5-1.3.3-.1.5-.1.8 0l2.9 1.3c.3.1.5.1.8 0l2.9-1.3c.5-.4 1.1-.1 1.3.4zm-14.6 0c1.5.7 2.1 2.5 1.3 4-.7 1.5-2.5 2.1-4 1.3-2.8-1.4-5.8-2-9.1-1.7-3 .3-5.2 1.5-6.9 3.7-1 1.3-2.9 1.6-4.2.6-1.3-1-1.6-2.9-.6-4.2 2.7-3.6 6.5-5.6 11.1-6.1 4.4-.3 8.6.5 12.4 2.4zm-9.8-21.4c1.1 1.1 1.2 2.9.1 4.1l-.1.2-17 17c-1.2 1.2-3.1 1.2-4.2 0-1.1-1.1-1.2-2.9-.1-4.1l.1-.1 17-17c1.1-1.2 3-1.2 4.2-.1zm-21.4-9.8c1.9 3.8 2.7 8 2.3 12.3-.4 4.6-2.5 8.4-6.1 11.1-1.3 1-3.2.7-4.2-.6-1-1.3-.7-3.2.6-4.2 2.2-1.7 3.4-3.9 3.7-6.9.3-3.2-.2-6.2-1.7-9.1-.7-1.5-.2-3.3 1.3-4 1.6-.7 3.4-.1 4.1 1.4zm32.5 18.7c.4 1.5-.5 3.1-2 3.6l-.2.1-3.9 1c-1.6.4-3.2-.5-3.7-2.1-.4-1.5.5-3.1 2-3.6l.2-.1 3.9-1c1.6-.4 3.2.5 3.7 2.1zm7.7-2.1c.4 1.5-.5 3.1-2 3.6l-.2.1-.4.1c-1.6.4-3.2-.5-3.7-2.1-.4-1.5.5-3.1 2-3.6l.2-.1.5-.1c1.5-.4 3.2.5 3.6 2.1zM55.9 20.6c1.5.4 2.5 2 2.2 3.5v.2l-1 3.9-.1.2c-.5 1.5-2.1 2.4-3.6 2-1.5-.4-2.5-2-2.2-3.5v-.2l1-3.9.1-.2c.5-1.5 2.1-2.4 3.6-2zm20.6-.1c.1.3.1.5 0 .8l-1.3 2.9c-.1.3-.1.5 0 .8l1.3 2.9c.2.5 0 1.1-.5 1.3-.3.1-.5.1-.8 0l-3-1.2c-.3-.1-.5-.1-.8 0l-2.9 1.3c-.5.2-1.1 0-1.3-.5-.1-.3-.1-.5 0-.8l1.3-2.9c.1-.3.1-.5 0-.8l-1.3-2.9c-.2-.5 0-1.1.5-1.3.3-.1.5-.1.8 0l2.9 1.3c.3.1.5.1.8 0l2.9-1.3c.6-.3 1.2-.1 1.4.4zM58 12.9c1.5.4 2.5 2 2.2 3.5v.2l-.2.5-.1.2c-.5 1.5-2.1 2.4-3.6 2-1.5-.4-2.5-2-2.2-3.5v-.2l.1-.5.1-.2c.5-1.5 2.1-2.4 3.7-2zM36 7.3l2.9 1.3c.3.1.5.1.8 0l2.9-1.3c.5-.2 1.1 0 1.3.5.1.3.1.5 0 .8l-1.3 2.9c-.1.3-.1.5 0 .8l1.3 2.9c.2.5 0 1.1-.5 1.3-.3.1-.5.1-.8 0l-2.9-1.3c-.3-.1-.5-.1-.8 0L36 16.6c-.5.2-1.1 0-1.3-.5-.1-.3-.1-.5 0-.8l1.3-2.9c.1-.3.1-.5 0-.8l-1.3-2.9c-.2-.5 0-1.1.5-1.3.2-.2.5-.2.8-.1z"/>',
  'CheerOutlinedIcon',
);
`},71808:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M19 13h58c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11zm0 6c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V24c0-2.8-2.2-5-5-5H19zm15 26.9 2.1-6.8a3.037 3.037 0 0 1 5.8 1.8l-5 16c-.9 2.8-4.8 2.8-5.7 0l-5-16a3.037 3.037 0 0 1 5.8-1.8l2 6.8zM45 40c0-1.7 1.3-3 3-3s3 1.3 3 3v16c0 1.7-1.3 3-3 3s-3-1.3-3-3V40zm15 11v5c0 1.7-1.3 3-3 3s-3-1.3-3-3V40c0-1.7 1.3-3 3-3h6c3.9 0 7 3.1 7 7s-3.1 7-7 7h-3zm0-6h3c.6 0 1-.4 1-1s-.4-1-1-1h-3v2z"/>',
  'CinemaCardOutlinedIcon',
);
`},6081:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M81 80c1.7 0 3 1.3 3 3s-1.3 3-3 3H15c-1.7 0-3-1.3-3-3s1.3-3 3-3h66zm-4-70c6.1 0 11 4.9 11 11v50.7c0 2.2-1.8 4-4 4-1.3 0-2.6-.7-3.3-1.8L63 47c-4.1 2-9.1 3-15 3s-10.9-1-15-3L15.3 73.8c-1.2 1.8-3.7 2.4-5.5 1.1C8.7 74.3 8 73 8 71.7V21c0-6.1 4.9-11 11-11h58z"/>',
  'CinemaFilledIcon',
);
`},31160:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M81 80c1.7 0 3 1.3 3 3s-1.3 3-3 3H15c-1.7 0-3-1.3-3-3s1.3-3 3-3h66zm-4-70c6.1 0 11 4.9 11 11v50.7c0 2.2-1.8 4-4 4-1.3 0-2.6-.7-3.3-1.8L63 47c-4.1 2-9.1 3-15 3s-10.9-1-15-3L15.3 73.8c-1.2 1.8-3.7 2.4-5.5 1.1C8.7 74.3 8 73 8 71.7V21c0-6.1 4.9-11 11-11h58zm0 6H19c-2.8 0-5 2.2-5 5v44l15.5-23.6c.9-1.4 2.8-1.8 4.2-.9C37.1 42.8 41.9 44 48 44s10.9-1.2 14.3-3.5c1.4-.9 3.3-.5 4.2.9L82 65V21c0-2.8-2.2-5-5-5z"/>',
  'CinemaOutlinedIcon',
);
`},64620:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40zm0-6c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48s15.2 34 34 34z"/>',
  'CircleOutlinedIcon',
);
`},66394:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<g fill-rule="nonzero"><path d="M48.28 21.078c-11.934 0-22.961 6.248-28.93 16.389a32.247 32.247 0 0 0 0 32.78c5.966 10.14 16.996 16.388 28.93 16.388 18.445 0 33.4-14.677 33.4-32.78 0-18.1-14.955-32.777-33.4-32.777ZM5.331 53.855c0-15.052 8.187-28.966 21.472-36.497a43.657 43.657 0 0 1 42.948 0C83.04 24.888 91.224 38.8 91.224 53.855 91.227 77.135 72 96 48.28 96 24.56 96 5.332 77.132 5.332 53.855ZM68.544 1.607a4.83 4.83 0 0 1 6.739-.445l19.085 16.39a4.623 4.623 0 0 1 .454 6.609c-1.736 1.946-4.752 2.146-6.736.442L68.997 8.217a4.621 4.621 0 0 1-.453-6.607v-.003Z"/><path d="M27.396 1.578a4.827 4.827 0 0 0-3.27-1.563 4.868 4.868 0 0 0-3.453 1.128L1.625 17.23a4.49 4.49 0 0 0-.448 6.488 4.88 4.88 0 0 0 6.72.435l19.046-16.09a4.488 4.488 0 0 0 .453-6.488v.003Zm20.222 28.31c2.63 0 4.763 2.059 4.763 4.597v15.93l12.165 7.83c2.187 1.41 2.78 4.266 1.32 6.375-1.46 2.115-4.418 2.683-6.605 1.275L44.975 56.7a4.557 4.557 0 0 1-2.117-3.826V34.485c0-2.538 2.133-4.597 4.76-4.597Z"/></g>',
  'ClockOutlinedIcon',
);
`},81815:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m53.6 48 21.2 21.2c1.6 1.6 1.6 4.1 0 5.6-1.6 1.6-4.1 1.6-5.6 0L48 53.6 26.8 74.8c-1.6 1.6-4.1 1.6-5.6 0-1.6-1.6-1.6-4.1 0-5.6L42.4 48 21.2 26.8c-1.6-1.6-1.6-4.1 0-5.6s4.1-1.6 5.6 0L48 42.4l21.2-21.2c1.6-1.6 4.1-1.6 5.6 0 1.6 1.6 1.6 4.1 0 5.6L53.6 48z"/>',
  'CloseIcon',
);
`},81097:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m48 43.7 25.8-25.8c1.2-1.2 3.1-1.2 4.3 0 1.2 1.2 1.2 3.1 0 4.3L52.3 48l25.8 25.8c1.2 1.2 1.2 3.1 0 4.3s-3.1 1.2-4.3 0L48 52.3 22.2 78.1c-1.2 1.2-3.1 1.2-4.3 0-1.2-1.2-1.2-3.1 0-4.3L43.7 48 17.9 22.2c-1.2-1.2-1.2-3.1 0-4.3 1.2-1.2 3.1-1.2 4.3 0L48 43.7z"/>',
  'CloseLargeIcon',
);
`},42790:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M78.5 69c4.1 0 7.5 3.4 7.5 7.5v4c1.4.2 2.5 1.5 2.5 3 0 1.6-1.2 2.9-2.8 3H11.5c-1.7 0-3-1.3-3-3 0-1.5 1.1-2.7 2.5-3v-4c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5v4h5v-4c0-4.1 3.2-7.4 7.3-7.5h.2c4.1 0 7.5 3.4 7.5 7.5v4h5v-4c0-4.1 3.2-7.4 7.3-7.5h.2c4.1 0 7.5 3.4 7.5 7.5v4h5v-4c0-4.1 3.2-7.4 7.3-7.5h.2zm-40 6c-.8 0-1.5.7-1.5 1.5V80h3v-3.5c0-.8-.6-1.4-1.4-1.5h-.1zm-20 0c-.8 0-1.5.7-1.5 1.5V80h3v-3.5c0-.8-.6-1.4-1.4-1.5h-.1zm40 0c-.8 0-1.5.7-1.5 1.5V80h3v-3.5c0-.8-.6-1.4-1.4-1.5h-.1zm20 0c-.8 0-1.5.7-1.5 1.5V80h3v-3.5c0-.8-.6-1.4-1.4-1.5h-.1zm.5-64c4.9 0 8.9 3.9 9 8.7V62c0 1.7-1.3 3-3 3-1.6 0-2.9-1.2-3-2.8V20c0-1.6-1.2-2.9-2.8-3H17c-1.6 0-2.9 1.2-3 2.8V62c0 1.7-1.3 3-3 3-1.6 0-2.9-1.2-3-2.8V20c0-4.9 3.9-8.9 8.7-9H79zM42.8 28.5c.7 0 1.5.2 2.1.6l16.5 10.3c1.9 1.2 2.4 3.6 1.3 5.5-.3.5-.8 1-1.3 1.3L44.9 56.4c-1.9 1.2-4.3.6-5.5-1.3-.4-.6-.6-1.4-.6-2.1V32.5c0-2.2 1.8-4 4-4zm2 7.6v13.4l10.7-6.7-10.7-6.7z"/>',
  'CloudBBOutlinedIcon',
);
`},34277:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m53 73.1 4.8-5.1c1.1-1.2 3-1.3 4.2-.1s1.3 3.1.1 4.3L53 81.9c-1.3 1.4-3.6 1.5-5 .1l-10.2-9.8c-1.2-1.2-1.2-3.1-.1-4.3 1.1-1.2 3-1.3 4.2-.1l4.9 4.7V48c0-1.7 1.3-3 3-3s3 1.4 3 3v25.1h.2zM48 13c11.5 0 21.4 8.1 24.3 19.4C81 32.5 88 39.9 88 49c0 9.1-7.1 16.6-15.9 16.6-1.7 0-3-1.4-3-3 0-1.7 1.3-3 3-3 5.5 0 9.9-4.7 9.9-10.5s-4.5-10.5-9.9-10.5c-.5 0-1.1 0-1.6.1-1.7.3-3.2-.9-3.5-2.5-1.5-9.8-9.5-17-19-17-6.9 0-13.2 3.9-16.6 10.1-.6 1-1.7 1.6-2.8 1.6h-.9c-7.5 0-13.6 6.4-13.6 14.4s6.1 14.4 13.7 14.4c1.7 0 3 1.4 3 3 0 1.7-1.3 3-3 3C16.8 65.6 8 56.4 8 45.1 8 34 16.5 25 27.1 24.6 31.7 17.5 39.5 13 48 13z"/>',
  'CloudDownloadOutlinedIcon',
);
`},10929:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47.5 48.3c.3-.4.7-.7 1.1-1 1.4-.8 3.2-.6 4.4.6l9.1 9.6c1.1 1.2 1.1 3.1-.1 4.2s-3.1 1.1-4.2-.1l-4.8-5V80c0 1.7-1.3 3-3 3s-3-1.3-3-3V57.1l-4.9 4.7c-1.2 1.1-3.1 1.1-4.2-.1s-1.1-3.1.1-4.2l9.5-9.2zM48 13c11.5 0 21.4 8 24.3 19.2C81 32.3 88 39.6 88 48.6c0 9-7.1 16.4-15.9 16.4-1.7 0-3-1.3-3-3s1.3-3 3-3c5.5 0 9.9-4.6 9.9-10.4s-4.5-10.4-9.9-10.4c-.5 0-1.1 0-1.6.1-1.7.3-3.2-.8-3.5-2.5C65.5 26.2 57.4 19 48 19c-6.9 0-13.2 3.8-16.6 10-.6 1-1.7 1.6-2.8 1.5h-.9c-7.5 0-13.6 6.4-13.6 14.2S20.1 59 27.7 59c1.7 0 3 1.3 3 3s-1.3 3-3 3C16.8 65 8 55.9 8 44.8c0-11 8.5-19.9 19.1-20.2C31.7 17.4 39.5 13 48 13z"/>',
  'CloudUploadOutlinedIcon',
);
`},69506:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 12c6.1 0 11 4.9 11 11v50c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V23c0-6.1 4.9-11 11-11h58zm5 26H14v35c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V38zm-47.9 9c1.3-1.1 3.2-.9 4.2.4l.1.2c.9 1.3.7 3.1-.5 4.1l-8.1 6.7 8.1 6.7c1.3 1.1 1.5 2.9.4 4.2-1.1 1.3-2.9 1.5-4.2.4L24.7 62c-2.3-1.9-2.3-5.3 0-7.2l9.4-7.8zm27.8 0 9.4 7.7c2.3 1.9 2.3 5.3 0 7.2l-9.4 7.7c-1.3 1.1-3.2.9-4.2-.4-1.1-1.3-.9-3.2.4-4.2l8.1-6.7-8.1-6.7c-1.2-1-1.4-2.8-.5-4.1l.1-.2c1-1.1 2.9-1.3 4.2-.3zm-12.6-1c1.6.2 2.8 1.7 2.7 3.3l-2 18c-.2 1.6-1.7 2.8-3.3 2.7s-2.8-1.7-2.7-3.3l2-18c.2-1.7 1.7-2.9 3.3-2.7zM77 18H19c-2.8 0-5 2.2-5 5v9h68v-9c0-2.8-2.2-5-5-5z"/>',
  'CodeOutlinedIcon',
);
`},11593:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M37 10h42c3.9 0 7 3.1 7 7v42c0 3.9-3.1 7-7 7H37c-3.9 0-7-3.1-7-7V17c0-3.9 3.1-7 7-7zm0 6c-.6 0-1 .4-1 1v42c0 .6.4 1 1 1h42c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1H37zm23 56c0-1.7 1.3-3 3-3s3 1.3 3 3v7c0 3.9-3.1 7-7 7H17c-3.9 0-7-3.1-7-7V37c0-3.9 3.1-7 7-7h7c1.7 0 3 1.3 3 3s-1.3 3-3 3h-7c-.6 0-1 .4-1 1v42c0 .6.4 1 1 1h42c.6 0 1-.4 1-1v-7z"/>',
  'CopyOutlinedIcon',
);
`},50202:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c6.1 0 11 4.9 11 11v14c0 1.7-1.3 3-3 3-3.9 0-7 3.1-7 7s3.1 7 7 7c1.7 0 3 1.3 3 3v14c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V58c0-1.7 1.3-3 3-3 3.9 0 7-3.1 7-7s-3.1-7-7-7c-1.7 0-3-1.3-3-3V24c0-6.1 4.9-11 11-11h58zM40.2 30.9c-1.1-1.1-2.9-1.3-4.1-.2l-.1.1c-1.1 1.1-1.3 2.9-.2 4.1l6.7 8.1h-4.7c-1.6.1-2.8 1.4-2.8 3v.2c.1 1.6 1.4 2.8 3 2.8h7.5v4h-7.7c-1.6.1-2.8 1.4-2.8 3v.2c.1 1.6 1.4 2.8 3 2.8h7.5v4.2c.1 1.6 1.4 2.8 3 2.8h.2c1.6-.1 2.8-1.4 2.8-3v-4h6.7c1.6-.1 2.8-1.4 2.8-3v-.2c-.1-1.6-1.4-2.8-3-2.8h-6.5v-4h6.7c1.6-.1 2.8-1.4 2.8-3v-.2c-.1-1.6-1.4-2.8-3-2.8h-4.4l6.7-8.1.1-.1c.9-1.3.7-3.1-.5-4.1-1.3-1.1-3.2-.9-4.2.4L48 40.3l-7.7-9.2-.1-.2z"/>',
  'CouponFilledIcon',
);
`},60455:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c6.1 0 11 4.9 11 11v14c0 1.7-1.3 3-3 3-3.9 0-7 3.1-7 7s3.1 7 7 7c1.7 0 3 1.3 3 3v14c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V58c0-1.7 1.3-3 3-3 3.9 0 7-3.1 7-7s-3.1-7-7-7c-1.7 0-3-1.3-3-3V24c0-6.1 4.9-11 11-11h58zm0 6H19c-2.8 0-5 2.2-5 5v11.3c5.7 1.4 10 6.5 10 12.7s-4.3 11.3-10 12.7V72c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V60.7c-5.7-1.4-10-6.5-10-12.7s4.3-11.3 10-12.7V24c0-2.8-2.2-5-5-5zM36.1 30.7c1.3-1.1 3.2-.9 4.2.4l7.7 9.2 7.7-9.2c1.1-1.3 3-1.4 4.2-.4 1.3 1.1 1.4 3 .4 4.2L53.6 43H58c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-6.5v4H58c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-6.5v4c0 1.6-1.2 2.9-2.8 3h-.2c-1.7 0-3-1.3-3-3v-4H38c-1.6 0-2.9-1.2-3-2.8V56c0-1.7 1.3-3 3-3h7.5v-4H38c-1.6 0-2.9-1.2-3-2.8V46c0-1.7 1.3-3 3-3h4.4l-6.7-8.1c-1-1.2-.9-3 .2-4.1l.2-.1z"/>',
  'CouponOutlinedIcon',
);
`},54564:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M72.707 5.75A13.533 13.533 0 0 1 86.25 19.304v53.404A13.514 13.514 0 0 1 72.71 86.25h-53.4A13.535 13.535 0 0 1 5.75 72.708V19.304A13.556 13.556 0 0 1 19.31 5.753h.02l3.697.025a2.873 2.873 0 0 1-.02 5.746h-.02l-3.686-.027a7.814 7.814 0 0 0-7.805 7.807v9.454l.01.003 68.999.002v-9.46a7.774 7.774 0 0 0-2.278-5.524 7.743 7.743 0 0 0-5.515-2.289h-3.605a2.869 2.869 0 1 1-.003-5.737ZM11.506 34.507h-.01v38.2c0 2.086.815 4.041 2.29 5.516a7.76 7.76 0 0 0 5.525 2.281h53.4a7.737 7.737 0 0 0 5.513-2.281 7.74 7.74 0 0 0 2.28-5.515V34.509l-68.998-.002Zm46.955 6.205c1.094 0 2.092.613 2.576 1.58a2.805 2.805 0 0 1-.296 2.98c-.014.016-.715.927-1.755 2.477l-.256.384a72.424 72.424 0 0 0-3.528 5.927c-1.583 2.98-2.84 5.884-3.736 8.633-1.09 3.341-1.642 6.444-1.642 9.222 0 1.566-1.286 2.835-2.872 2.835-1.586 0-2.871-1.27-2.871-2.835 0-3.386.652-7.093 1.937-11.019 1.005-3.068 2.4-6.286 4.148-9.564a77.957 77.957 0 0 1 2.88-4.95h-17.59c-1.587 0-2.873-1.27-2.873-2.835 0-1.566 1.286-2.835 2.872-2.835ZM38.327 3.833c1.586 0 2.872 1.27 2.872 2.835v5.675c0 .752-.303 1.473-.842 2.004a2.89 2.89 0 0 1-2.03.83c-1.586 0-2.872-1.269-2.872-2.834V6.668c0-1.565 1.286-2.835 2.872-2.835Zm17.263 0c1.586 0 2.871 1.27 2.871 2.835v5.675c0 .752-.302 1.473-.84 2.004a2.89 2.89 0 0 1-2.031.83c-1.586 0-2.872-1.269-2.872-2.834V6.668c0-1.565 1.286-2.835 2.872-2.835Z"/>',
  'DateOutlinedIcon',
);
`},56836:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M19 24h-4c-1.7 0-3-1.3-3-3s1.3-3 3-3h66c1.7 0 3 1.3 3 3s-1.3 3-3 3H25v53c0 2.8 2.2 5 5 5h36c2.8 0 5-2.2 5-5V22.8c0-1.7 1.3-3 3-3s3 1.3 3 3V77c0 6.1-4.9 11-11 11H30c-6.1 0-11-4.9-11-11V24zm21-10c-1.7 0-3-1.3-3-3s1.3-3 3-3h16c1.7 0 3 1.3 3 3s-1.3 3-3 3H40zm-3 27c0-1.7 1.3-3 3-3s3 1.3 3 3v24c0 1.7-1.3 3-3 3s-3-1.3-3-3V41zm16 0c0-1.7 1.3-3 3-3s3 1.3 3 3v24c0 1.7-1.3 3-3 3s-3-1.3-3-3V41z"/>',
  'DeleteOutlinedIcon',
);
`},98967:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48.7 79.5c-2 .4-4.1.5-6.2.5-6.3 0-12.4-1.7-17.7-4.9-.2-.1-.7-.4-1.4-.8l-8.2 2.2c-2.2.6-4.3-1.4-3.7-3.7l2.2-8.1c-.8-1.4-1.4-2.4-1.7-2.9-2.6-5-4-10.5-4-16.3C8 26.4 23.4 11 42.5 11c17.4 0 31.8 12.9 34.2 29.6 7 4.3 11.3 12 11.3 20.4 0 4-1 7.9-2.8 11.3-.2.3-.5.8-.9 1.6l1.4 5c.6 2.2-1.4 4.3-3.7 3.7l-5-1.4c-.3.2-.5.3-.6.3-3.8 2.3-8 3.5-12.4 3.5-5.7 0-11.1-2-15.3-5.5zm7.4-2.3c2.4 1.2 5.1 1.8 7.9 1.8 3.3 0 6.5-.9 9.2-2.5.2-.1.8-.5 1.7-1 .7-.4 1.5-.5 2.3-.3l1.2.3-.3-1.2c-.2-.8-.1-1.6.3-2.3.8-1.3 1.2-2.1 1.4-2.5C81.3 66.9 82 64 82 61c0-4.8-1.9-9.3-5.1-12.6-1.1 13-9.3 23.9-20.8 28.8zM19.9 65l-1.2 4.3 4.3-1.2c.8-.2 1.6-.1 2.3.3 1.4.8 2.3 1.3 2.6 1.5 4.4 2.6 9.4 4 14.6 4C58.2 74 71 61.2 71 45.5S58.2 17 42.5 17 14 29.8 14 45.5c0 4.8 1.2 9.3 3.4 13.4.3.5 1 1.8 2.2 3.8.4.7.5 1.5.3 2.3zM55 35c1.7 0 3 1.3 3 3s-1.3 3-3 3H30c-1.7 0-3-1.3-3-3s1.3-3 3-3h25zM43 50c1.7 0 3 1.3 3 3s-1.3 3-3 3H30c-1.7 0-3-1.3-3-3s1.3-3 3-3h13z"/>',
  'DiscussOutlinedIcon',
);
`},29838:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m48 70.1 21.1-22.8c1.5-1.6 4-1.7 5.7-.2 1.6 1.5 1.7 4 .2 5.7l-24 26a4.05 4.05 0 0 1-5.9 0l-24-26c-1.5-1.6-1.4-4.2.2-5.7 1.6-1.5 4.2-1.4 5.7.2l21 22.8z"/><path d="m48 40.1 21.1-22.8c1.5-1.6 4-1.7 5.7-.2s1.7 4 .2 5.7l-24 26a4.05 4.05 0 0 1-5.9 0l-24-26c-1.5-1.6-1.4-4.2.2-5.7s4.2-1.4 5.7.2l21 22.8z" opacity=".6"/>',
  'DoubleArrowDownTwoToneIcon',
);
`},57139:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m26 48 22.8 21.1c1.6 1.5 1.7 4 .2 5.7-1.5 1.6-4 1.7-5.7.2l-26-24a4.05 4.05 0 0 1 0-5.9l26-24c1.6-1.5 4.2-1.4 5.7.2 1.5 1.6 1.4 4.2-.2 5.7L26 48z"/><path d="m56 48 22.8 21.1c1.6 1.5 1.7 4 .2 5.7-1.5 1.7-4 1.7-5.7.2l-26-24a4.05 4.05 0 0 1 0-5.9l26-24c1.6-1.5 4.2-1.4 5.7.2 1.5 1.6 1.4 4.2-.2 5.7L56 48z" opacity=".6"/>',
  'DoubleArrowLeftTwoToneIcon',
);
`},9168:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M70.1 48.1 47.3 27c-1.6-1.5-1.7-4-.2-5.7 1.5-1.6 4-1.7 5.7-.2l26 24c1.7 1.6 1.7 4.3 0 5.9l-26 24c-1.6 1.5-4.2 1.4-5.7-.2s-1.4-4.2.2-5.7l22.8-21z"/><path d="M40.1 48.1 17.3 27c-1.6-1.5-1.7-4-.2-5.7s4-1.7 5.7-.2l26 24c1.7 1.6 1.7 4.3 0 5.9l-26 24c-1.6 1.5-4.2 1.4-5.7-.2s-1.4-4.2.2-5.7l22.8-21z" opacity=".6"/>',
  'DoubleArrowRightTwoToneIcon',
);
`},21811:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48.1 26 27 48.8c-1.5 1.6-4 1.7-5.7.2-1.6-1.5-1.7-4-.2-5.7l24-26c1.6-1.7 4.3-1.7 5.9 0l24 26c1.5 1.6 1.4 4.2-.2 5.7s-4.2 1.4-5.7-.2L48.1 26z"/><path d="M48.1 56 27 78.8c-1.5 1.6-4 1.7-5.7.2s-1.7-4-.2-5.7l24-26c1.6-1.7 4.3-1.7 5.9 0l24 26c1.5 1.6 1.4 4.2-.2 5.7s-4.2 1.4-5.7-.2L48.1 56z" opacity=".6"/>',
  'DoubleArrowUpTwoToneIcon',
);
`},30645:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm11 19c5.5 0 10 4.5 10 10 0 2.8-1.3 5.5-3.5 7.2l-6 4.8H67c1.7 0 3 1.3 3 3s-1.3 3-3 3H51c-2.8 0-4.1-3.6-1.9-5.3l12.7-10.1c.8-.7 1.2-1.6 1.2-2.6 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-5.5 4.5-10 10-10zM26.9 43.9c1.2-1.2 3.1-1.2 4.2 0l3.9 3.9 3.9-3.9c1.1-1.1 2.9-1.2 4.1-.1l.1.1c1.2 1.2 1.2 3.1 0 4.2L39.2 52l3.9 3.9c1.1 1.1 1.2 2.9.1 4.1l-.1.1c-1.2 1.2-3.1 1.2-4.2 0L35 56.2l-3.9 3.9c-1.1 1.1-2.9 1.2-4.1.1l-.1-.1c-1.2-1.2-1.2-3.1 0-4.2l3.9-3.9-3.9-3.9c-1.1-1.1-1.2-2.9-.1-4.1l.1-.1z"/>',
  'DoubleCircleOutlinedIcon',
);
`},1122:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m27.3 49.2 19.1 26.6c.6.9 1.9 1.1 2.8.5.2-.1.3-.3.5-.5l19.1-26.6c.6-.9.4-2.1-.5-2.8-.3-.2-.7-.4-1.2-.4H54V20c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v26H28.9c-1.1 0-2 .9-2 2 0 .4.1.8.4 1.2z"/>',
  'DownIcon',
);
`},58358:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M69.3 8c2.8 0 5.1 2.2 5.1 5 0 1.7 1.3 3 3 3h.4c2.8 0 5.1 2.2 5.1 5v8c0 2.8-2.3 5-5.1 5h-1.1l-3.2 43.8c-.4 5.7-5.2 10.2-11 10.2H33.4c-5.8 0-10.5-4.4-11-10.2L19.2 34h-1.1c-2.8 0-5.1-2.2-5.1-5v-8c0-2.8 2.3-5 5.1-5h.4c1.7 0 3-1.3 3-3 0-2.8 2.3-5 5.1-5h42.7zM48 43c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z"/>',
  'DrinkFilledIcon',
);
`},530:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M69 8c2.7 0 4.9 2.1 5 4.8v.4c.1 1.6 1.4 2.8 3 2.8h1c2.8 0 5 2.2 5 5v8c0 2.8-2.2 5-5 5h-1.2l-3.2 43.8c-.4 5.6-5 10-10.7 10.2H33.4c-5.8 0-10.5-4.4-11-10.2L19.2 34H18c-2.7 0-4.9-2.1-5-4.8V21c0-2.8 2.2-5 5-5h1c1.6 0 2.9-1.3 3-2.8v-.4c.1-2.7 2.3-4.8 5-4.8h42zm1.8 26H25.2l3.2 43.4c.2 2.5 2.2 4.5 4.8 4.6h29.3c2.6 0 4.8-2 5-4.6L70.8 34zM77 22c-4.5 0-8.3-3.3-8.9-7.7V14H27.9v.1c-.5 4.4-4.2 7.8-8.7 7.9H19v6h58v-6z"/>',
  'DrinkOutlinedIcon',
);
`},50026:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M84 82c1.7 0 3 1.4 3 3 0 1.7-1.3 3-3 3H12c-1.7 0-3-1.4-3-3 0-1.7 1.3-3 3-3h72zM56.1 22.3l14.2 14.3c.8.8.8 2 0 2.8L39.8 70.1c-2 2-4.5 3.4-7.3 4.1l-14.3 3.2c-2.2.5-4.2-1.6-3.5-3.8l4.1-13.9c.7-2.4 2-4.6 3.8-6.4l30.7-30.9c.7-.8 2-.8 2.8-.1zm22.7-10.1 1.4 1.4c4.3 4.3 4.3 11.3 0 15.7l-3 3c-.8.8-2 .8-2.8 0L60.3 18.1c-.8-.8-.8-2 0-2.8l3-3c4.3-4.4 11.2-4.4 15.5-.1z"/>',
  'EditFilledIcon',
);
`},84265:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M84 81c1.7 0 3 1.3 3 3s-1.3 3-3 3H12c-1.7 0-3-1.3-3-3s1.3-3 3-3h72zm-5.6-68.8 1.4 1.4c4.3 4.3 4.3 11.3 0 15.6L39.3 69.7c-2 2-4.6 3.4-7.3 4l-14.3 3.2c-2.2.5-4.2-1.6-3.5-3.8l4.1-13.8c.7-2.4 2-4.6 3.8-6.4l40.8-40.8c4.2-4.2 11.2-4.2 15.5.1zM59.7 23.8 26.2 57.3c-1.1 1.1-1.8 2.4-2.3 3.8L21.3 70l9.3-2.1c1.7-.4 3.2-1.2 4.4-2.4l33.1-33.1-8.4-8.6zm7.3-7.3-3.1 3.1 8.5 8.5 3.1-3.1c2-2 2-5.1 0-7.1l-1.4-1.4c-1.9-2-5.1-2-7.1 0z"/>',
  'EditOutlinedIcon',
);
`},63811:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c6.7 0 15 5.4 21.5 13.8C76.7 31 81 42.7 81 55c0 19.9-13.9 33-33 33S15 74.9 15 55c0-12.3 4.3-24 11.5-33.2C33 13.4 41.3 8 48 8zm0 6c-4.5 0-11.3 4.4-16.8 11.5C24.9 33.7 21 44.1 21 55c0 16.5 11.2 27 27 27s27-10.5 27-27c0-10.9-3.9-21.3-10.2-29.5C59.3 18.4 52.5 14 48 14zm-7 49c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm-9-12c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"/>',
  'EggOutlinedIcon',
);
`},80800:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm-8.1 27.8c-1.1-1.1-2.9-1.1-4.1 0s-1.1 2.9 0 4.1l8.1 8.1-8.1 8.1c-1.1 1.1-1.1 2.9 0 4.1s2.9 1.1 4.1 0l8.1-8.1 8.1 8.1c1.1 1.1 2.9 1.1 4.1 0s1.1-2.9 0-4.1L52.1 48l8.1-8.1c1.1-1.1 1.1-2.9 0-4.1s-2.9-1.1-4.1 0L48 43.9l-8.1-8.1z"/>',
  'ErrorCircleFilledIcon',
);
`},21371:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88c22.1 0 40-17.9 40-40S70.1 8 48 8 8 25.9 8 48s17.9 40 40 40zm16.3-56.3c2 2 2 5.1 0 7.1L55.1 48l9.2 9.2c2 2 2 5.1 0 7.1s-5.1 2-7.1 0L48 55.1l-9.2 9.2c-2 2-5.1 2-7.1 0s-2-5.1 0-7.1l9.2-9.2-9.2-9.2c-2-2-2-5.1 0-7.1s5.1-2 7.1 0l9.2 9.2 9.2-9.2c1.9-1.9 5.1-1.9 7.1 0z"/>',
  'ErrorCircleFilledBoldIcon',
);
`},54273:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm4.1 34 8.1 8.1c1.1 1.1 1.1 2.9 0 4.1s-2.9 1.1-4.1 0L48 52.1l-8.1 8.1c-1.1 1.1-2.9 1.1-4.1 0s-1.1-2.9 0-4.1l8.1-8.1-8.1-8.1c-1.1-1.1-1.1-2.9 0-4.1s2.9-1.1 4.1 0l8.1 8.1 8.1-8.1c1.1-1.1 2.9-1.1 4.1 0s1.1 2.9 0 4.1L52.1 48z"/>',
  'ErrorCircleOutlinedIcon',
);
`},68339:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M66 12c1.7 0 3 1.3 3 3s-1.3 3-3 3h-2v15.1c0 .2 0 .3.1.4l17 34.7c2.7 5.5.4 12-5 14.7-1.5.7-3.2 1.1-4.8 1.1H24.8c-6.1 0-11-4.9-11-11 0-1.7.4-3.3 1.1-4.8l17-34.7c.1-.1.1-.3.1-.4V18h-2c-1.6 0-2.9-1.2-3-2.8V15c0-1.7 1.3-3 3-3h36zm4.9 49H25.1l-4.8 9.8c-.3.7-.5 1.4-.5 2.2 0 2.8 2.2 5 5 5h46.4c.8 0 1.5-.2 2.2-.5 2.5-1.2 3.5-4.2 2.3-6.7L70.9 61zM58 18H38v15.1c0 1.1-.2 2.1-.7 3.1L28.1 55H68l-9.2-18.8c-.5-1-.7-2-.7-3.1V18z"/>',
  'ExperimentOutlinedIcon',
);
`},40096:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm14 20.9-20.3 7.3c-2.5.9-4.5 2.9-5.4 5.4L28.9 62c-.7 2.1.3 4.4 2.4 5.1.9.3 1.8.3 2.7 0l20.3-7.3c2.5-.9 4.5-2.9 5.4-5.4L67.1 34c.7-2.1-.3-4.4-2.4-5.1-.9-.3-1.8-.3-2.7 0zM48 53c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z"/>',
  'ExploreCircleFilledIcon',
);
`},91727:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm14 14.9c.9-.3 1.8-.3 2.7 0 2.1.7 3.2 3 2.4 5.1l-7.3 20.3c-.9 2.5-2.9 4.5-5.4 5.4L34 67.1c-.9.3-1.8.3-2.7 0-2.1-.7-3.2-3-2.4-5.1l7.3-20.3c.9-2.5 2.9-4.5 5.4-5.4L62 28.9zM60 36l-16.3 5.9c-.8.3-1.5 1-1.8 1.8L36 60l16.3-5.9c.8-.3 1.5-1 1.8-1.8L60 36z"/>',
  'ExploreCircleOutlinedIcon',
);
`},47070:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 18c14.7 0 27.8 9.3 39.2 27.3 1 1.6 1 3.7 0 5.3C75.8 68.7 62.7 78 48 78S20.2 68.7 8.8 50.7c-1-1.6-1-3.7 0-5.3C20.2 27.3 33.3 18 48 18zm0 12c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18zm0 28c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z"/>',
  'EyeFilledIcon',
);
`},36467:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 78c-14.7 0-27.8-9.3-39.2-27.3-1-1.6-1-3.7 0-5.3C20.2 27.3 33.3 18 48 18s27.8 9.3 39.2 27.3c1 1.6 1 3.7 0 5.3C75.8 68.7 62.7 78 48 78zm0-54c-12.1 0-23.4 7.9-33.8 24C24.6 64.1 35.9 72 48 72c12.1 0 23.4-7.9 33.8-24C71.4 31.9 60.1 24 48 24zm0 38c-7.8 0-14.1-6.3-14.1-14S40.2 34 48 34s14.1 6.3 14.1 14S55.8 62 48 62zm0-6c4.5 0 8.1-3.6 8.1-8s-3.6-8-8.1-8-8.1 3.6-8.1 8 3.6 8 8.1 8z"/>',
  'EyeOutlinedIcon',
);
`},92482:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M45.5 72v-4.1C30.1 66.6 18 53.7 18 38 18 21.4 31.4 8 48 8s30 13.4 30 30c0 15.4-11.6 28.1-26.5 29.8V72H60c1.7 0 3 1.3 3 3s-1.3 3-3 3h-8.5v7.2c0 1.7-1.3 3-3 3s-3-1.3-3-3V78H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h9.5zM48 62c13.3 0 24-10.7 24-24S61.3 14 48 14 24 24.7 24 38s10.7 24 24 24z"/>',
  'FemaleOutlinedIcon',
);
`},66502:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m60.6 48 21.1-28.8c2.3-3.1 1.6-7.5-1.5-9.8C78.9 8.5 77.5 8 76 8H20c-3.9 0-7 3.1-7 7 0 1.5.5 2.9 1.4 4.1l21 28.9v37c0 1.7 1.3 3 3 3s3-1.3 3-3V47c0-.6-.2-1.3-.6-1.8L19.2 15.6c-.1-.2-.2-.4-.2-.6 0-.6.4-1 1-1h56c.2 0 .4.1.6.2.4.3.5 1 .2 1.4L55.2 45.2c-.4.5-.6 1.1-.6 1.8v29.6c0 1.7 1.3 3 3 3s3-1.3 3-3V48z"/>',
  'FilterOutlinedIcon',
);
`},56699:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M70.2 73.2c0 1.7-1.3 3-3 3s-3-1.3-3-3V60.6c0-9.3-7.5-16.8-16.8-16.8s-16.8 7.5-16.8 16.8v10.8c0 1.7-1.3 3-3 3s-3-1.3-3-3V60.6c0-12.6 10.2-22.8 22.8-22.8S70.2 48 70.2 60.6v12.6zm14.1-47c1.1 1.3.9 3.2-.4 4.2-1.3 1.1-3.2.9-4.2-.4-7.9-9.4-19.6-15-32.3-15-12.1 0-23.3 5.1-31.2 13.9-1.1 1.2-3 1.3-4.2.2s-1.3-3-.2-4.2C20.8 14.8 33.7 9 47.4 9c14.5 0 27.8 6.4 36.9 17.2zm-1.4 32.6c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-12.2-7.5-23-18.7-27.4-1.5-.6-2.3-2.3-1.7-3.9s2.3-2.3 3.9-1.7c13.4 5.3 22.5 18.3 22.5 33zM47.4 23.4c1.7 0 3 1.3 3 3s-1.3 3-3 3C31.2 29.4 18 42.6 18 58.8c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-19.6 15.9-35.4 35.4-35.4zm0 34.8c-1.3 0-2.4 1-2.4 2.4v1.9c0 1.5.1 3 .1 4.3 0 1.9 0 3.4-.1 4.6-.3 3.9-1.4 7.4-3 10.3-.7 1.3-1.4 2.4-2.2 3.3-.5.6-.9 1-1.2 1.2-1.2 1.1-3.1 1-4.2-.2s-1-3.1.2-4.2l.1-.1.5-.5c.5-.6 1.1-1.4 1.6-2.3 1.2-2.2 2-4.8 2.3-7.9.1-1 .1-2.4.1-4.1 0-1.3 0-2.8-.1-4.2v-2c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4v16c0 1.7-1.3 3-3 3s-3-1.3-3-3v-16c-.1-1.4-1.1-2.5-2.5-2.5z"/>',
  'FingerprintOutlinedIcon',
);
`},82702:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M39.7 88S4.2 80.2 20.1 41.5c0 0 3.6 4.3 3.1 6.4 0 0 2.8-9.8 8.9-15.6 5.2-5 10.5-19.1 5.6-24.2 0 0 24.3 5.1 27 30.6 0 0 3.1-8.1 9.5-8.9 0 0-2 4.5 0 11.2 0 0 20.1 34.4-14.5 46.1 0 0 10.4-11.8-11.6-32 0 0-5.2 10.8-8.3 14.7-.1-.3-8.8 9.4-.1 18.2z"/>',
  'FireFilledIcon',
);
`},82568:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m33 59.4-11.6-9.9c-1.6-1.3-2.4-3.3-2.4-5.3V30c0-3.9 3.1-7 7-7h44c3.9 0 7 3.1 7 7v14.2c0 2-.9 4-2.4 5.3L63 59.4V84c0 3.9-3.1 7-7 7H40c-3.9 0-7-3.1-7-7V59.4zM26 29c-.6 0-1 .4-1 1v14.2c0 .3.1.6.3.8l11.9 10.2c1.1.9 1.7 2.3 1.7 3.8v25c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V58.9c0-1.5.6-2.8 1.7-3.8l11.9-10.2c.2-.2.3-.5.3-.8V30c0-.6-.4-1-1-1H26zm19 30c0-1.7 1.3-3 3-3s3 1.3 3 3v8c0 1.7-1.3 3-3 3s-3-1.3-3-3v-8zm0-51c0-1.7 1.3-3 3-3s3 1.3 3 3v8c0 1.7-1.3 3-3 3s-3-1.3-3-3V8zm24.4 1c.8-1.4 2.7-1.9 4.1-1.1s1.9 2.7 1.1 4.1l-4 6.9c-.8 1.4-2.7 1.9-4.1 1.1-1.4-.8-1.9-2.7-1.1-4.1l4-6.9zM26.6 9l4 6.9c.8 1.4.3 3.3-1.1 4.1-1.4.8-3.3.3-4.1-1.1l-4-6.9c-.8-1.4-.3-3.3 1.1-4.1s3.3-.3 4.1 1.1z"/>',
  'FlashlightOnOutlinedIcon',
);
`},50745:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m33 59.4-11.6-9.9c-1.6-1.3-2.4-3.3-2.4-5.3V30c0-3.9 3.1-7 7-7h44c3.9 0 7 3.1 7 7v14.2c0 2-.9 4-2.4 5.3L63 59.4V84c0 3.9-3.1 7-7 7H40c-3.9 0-7-3.1-7-7V59.4zM26 29c-.6 0-1 .4-1 1v14.2c0 .3.1.6.3.8l11.9 10.2c1.1.9 1.7 2.3 1.7 3.8v25c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V58.9c0-1.5.6-2.8 1.7-3.8l11.9-10.2c.2-.2.3-.5.3-.8V30c0-.6-.4-1-1-1H26zm19 30c0-1.7 1.3-3 3-3s3 1.3 3 3v8c0 1.7-1.3 3-3 3s-3-1.3-3-3v-8z"/>',
  'FlashlightOutlinedIcon',
);
`},65843:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M85.3 35.6c1.8 3.4 2.7 7.1 2.7 11 0 13.6-11.5 24.5-25.6 24.7H33.5l5.8 6.7c1 1.2.9 3-.2 4.1l-.1.2c-1.2 1-3 .9-4.1-.2l-.1-.1-10-11.7c-1.6-1.9-.3-4.8 2.1-5h35.2c11.1 0 20-8.4 20-18.7 0-2.9-.7-5.6-2-8.2-.8-1.5-.2-3.3 1.3-4 1.4-.8 3.2-.3 3.9 1.2zM61 10.8l.1.1 10 11c1.7 1.9.5 4.9-2 5l-.1.1H34c-11.1 0-20 8.6-20 19.2 0 3 .7 5.8 2 8.4.8 1.5.2 3.3-1.3 4-1.5.8-3.3.2-4-1.3C8.9 53.9 8 50.1 8 46.2c0-13.8 11.4-25 25.6-25.2h28.6l-5.5-6c-1.1-1.2-1-3 .1-4.1l.1-.1c1.1-1 2.8-1 4-.1l.1.1z"/>',
  'FlipOutlinedIcon',
);
`},63567:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M74.2 17.9c1.2-1.2 3.1-1.2 4.2 0 8 8 12.6 18.9 12.6 30.4 0 11.6-4.6 22.4-12.6 30.4-1.2 1.2-3.1 1.2-4.2 0s-1.2-3.1 0-4.2C81.1 67.6 85 58.2 85 48.3c0-10-3.9-19.3-10.8-26.2-1.2-1.1-1.2-3 0-4.2zm-56.6 0c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2C14.9 29 11 38.3 11 48.3c0 9.9 3.9 19.3 10.8 26.2 1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0C9.6 70.7 5 59.8 5 48.3c0-11.6 4.6-22.4 12.6-30.4zM31 26.8c1.2 1.2 1.2 3.1 0 4.2-4.5 4.5-7 10.5-7 17s2.6 12.5 7 17c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0C21.2 63.6 18 56.1 18 48s3.2-15.6 8.8-21.2c1.1-1.2 3-1.2 4.2 0zm38.2 0C74.8 32.4 78 39.9 78 48s-3.2 15.6-8.8 21.2c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2 4.5-4.5 7-10.5 7-17s-2.6-12.5-7-17c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.2 3-1.2 4.2 0zM53.1 36C59.8 36 64 41.4 64 48.3c0 5.4-4.5 10.9-13.1 17-1.7 1.2-4 1.2-5.7 0-8.6-6-13.1-11.6-13.1-17C32 41.4 36.2 36 42.9 36c2 0 3.5.6 5.1 1.7 1.6-1.1 3.1-1.7 5.1-1.7zm0 6c-.8 0-1.4.3-2.6 1.4-.1.1-.5.4-.6.5-1.1 1-2.8 1-3.9 0-.1-.1-.5-.5-.6-.5-1.2-1.1-1.8-1.4-2.6-1.4-3 0-4.9 2.4-4.9 6.3 0 2.8 3.2 6.8 10 11.7 6.8-4.8 10-8.9 10-11.7.1-3.9-1.8-6.3-4.8-6.3z"/>',
  'FollowOutlinedIcon',
);
`},13182:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M76 13c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H22c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11h54zm0 6H22c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V24c0-2.8-2.2-5-5-5zM58.6 50.3 69 60.8v-2.5c0-1.6 1.2-2.9 2.8-3h.2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H62c-1.7 0-3-1.3-3-3s1.3-3 3-3h3L54.3 54.6c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.3-.1zM36.4 24.4c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3l10.7 10.7c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0L29.4 34.9v2.5c0 1.6-1.2 2.9-2.8 3h-.2c-1.7 0-3-1.3-3-3v-10c0-1.7 1.3-3 3-3h10z"/>',
  'FullScreenOutlinedIcon',
);
`},94681:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M67 22c4.4 0 8 3.6 8 8v55c0 2.5-2.8 3.9-4.8 2.4L64 82.8 58.4 87c-1.4 1-3.4 1-4.8-.1L48 82.8 42.4 87c-1.4 1-3.4 1-4.8-.1L32 82.8l-6.2 4.7c-2 1.5-4.8.1-4.8-2.4V30c0-4.4 3.6-8 8-8h38zM51 55.2H39c-1.7 0-3 1.3-3 3s1.3 3 3 3h12c1.7 0 3-1.3 3-3 0-1.6-1.3-3-3-3zm6-13H39c-1.7 0-3 1.3-3 3s1.3 3 3 3h18c1.7 0 3-1.3 3-3 0-1.6-1.3-3-3-3zM78 8c5.5 0 10 4.5 10 10v20c0 3.3-2.7 6-6 6h-3V28c0-5.4-4.3-9.8-9.7-10H27c-5.4 0-9.8 4.3-10 9.7V44h-3c-3.3 0-6-2.7-6-6V18c0-5.5 4.5-10 10-10h60z"/>',
  'GetTicketsFilledIcon',
);
`},59981:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 8c6.1 0 11 4.9 11 11v14c0 6.1-4.9 11-11 11h-2v41c0 2.5-2.8 3.9-4.8 2.4L64 82.8 58.4 87c-1.4 1-3.4 1-4.8-.1L48 82.8 42.4 87c-1.4 1-3.4 1-4.8-.1L32 82.8l-6.2 4.7c-2 1.5-4.8.1-4.8-2.4V44h-2c-6 0-10.8-4.8-11-10.7V19c0-6.1 4.9-11 11-11h58zm-9 20H28c-.6 0-1 .4-1 1v50l2.6-1.9c1.4-1.1 3.4-1.1 4.8 0l5.6 4.2 5.6-4.2c1.4-1.1 3.4-1.1 4.8 0l5.6 4.2 5.6-4.2c1.4-1.1 3.4-1.1 4.8 0L69 79V29c0-.6-.4-1-1-1zM51 55.2c1.7 0 3 1.3 3 3s-1.3 3-3 3H39c-1.7 0-3-1.3-3-3s1.3-3 3-3h12zm6-13c1.7 0 3 1.3 3 3s-1.3 3-3 3H39c-1.7 0-3-1.3-3-3s1.3-3 3-3h18zM77 14H19c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h2v-9c0-3.9 3.1-7 7-7h40c3.9 0 7 3.1 7 7v9h2c2.7 0 4.9-2.1 5-4.8V19c0-2.8-2.2-5-5-5z"/>',
  'GetTicketsOutlinedIcon',
);
`},23683:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M36 55.5c-1.4 1.5-3.5 3.2-6 5-1.4.9-3.2.6-4.2-.8s-.6-3.2.8-4.2c2.2-1.6 3.9-2.9 4.9-4-2.1-.4-4-1.1-5.4-1.9-5.4-3.3-5.3-10.5-.4-13.5 3.2-2 6.8-1.4 10.4 1.4V19H19c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h17V55.5zm6-1.2V77h35c2.8 0 5-2.2 5-5V24c0-2.8-2.2-5-5-5H42v17.6c3.7-2.2 7.8-1.7 10.7 1.2l.2.2.1.2c2.2 3.1 2.1 6.5-.3 9.1-1.3 1.5-3.3 2.6-5.8 3.4 1.9 1.4 4.3 2.7 7.1 3.8 1.5.6 2.3 2.4 1.7 3.9-.6 1.5-2.4 2.3-3.9 1.7-3.9-1.7-7.2-3.6-9.8-5.8zm0-9.4c.1.2.3.5.4.7.3-.1.7-.1 1-.2 2.4-.6 4.2-1.4 4.9-2.2.4-.4.4-.6 0-1.3-1.6-1.4-3.9-.6-6.3 2.7v.3zM19 13h58c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11zm10.2 31.5c1.2.7 3.1 1.2 5.2 1.4.2-.3.3-.7.5-1-2.7-3.6-4.9-4.5-6.1-3.7-1.1.7-1.1 2.4.4 3.3z"/>',
  'GiftCardOutlinedIcon',
);
`},50079:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M52.4 14.8c2.6-4.5 8.4-6.1 13-3.5s6.1 8.4 3.5 13l-1.8 3.1H81c3.8 0 6.9 3 7 6.8v8.2c0 3.9-3.1 7-7 7h-1v27c0 6.1-4.9 11-11 11H29c-6.1 0-11-4.9-11-11v-27h-1c-3.8 0-6.9-3-7-6.8v-8.2c0-3.9 3.1-7 7-7h13.3l-1.8-3.1c-2.6-4.5-1.1-10.4 3.5-13s10.4-1.1 13 3.5l3.7 6.4 3.7-6.4zM74 49.3H24v27c0 2.8 2.2 5 5 5h40c2.8 0 5-2.2 5-5v-27zm7-16H17c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h64c.6 0 1-.4 1-1v-8c0-.5-.4-1-1-1zM35 16.5c-1.7 1-2.2 3.1-1.3 4.8l3.5 6.1h7.9l.1-.2-5.4-9.4c-1-1.7-3.1-2.3-4.8-1.3zm27.4 0c-1.7-1-3.8-.4-4.8 1.3l-5.4 9.4.1.2h7.9l3.5-6.1c.9-1.6.4-3.7-1.1-4.7l-.2-.1z"/>',
  'GiftOutlinedIcon',
);
`},25526:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m66.2 16.2 7 3c.7.3 1.2.8 1.5 1.5l15 31c0 .1.1.1.1.2.5.9.7 2 .7 3.1v.8l-2.1 18c-.4 3.5-3.4 6.2-7 6.2H58.6c-3.6 0-6.5-2.7-7-6.2l-.7-5.8H45l-.7 5.8C44 77.3 41 80 37.4 80H14.6c-3.6 0-6.5-2.7-7-6.2l-2.1-18c-.2-1.4.1-2.7.7-3.9v-.1l.1-.2 15-31c.3-.6.7-1.1 1.3-1.4l.2-.1 7-3c1.5-.7 3.3.1 3.9 1.6.6 1.5 0 3.2-1.4 3.9l-.2.1-6 2.6L14.8 48h24.8c3.9 0 7 3.1 7 7v.8l-.8 6.2h4.5l-.7-6.2c-.4-3.8 2.3-7.3 6.2-7.8h25.6L69.8 24.3l-6-2.6c-1.5-.7-2.2-2.4-1.6-3.9.7-1.5 2.5-2.2 4-1.6zM39.5 54H12.4c-.5.1-.9.6-.9 1.1l2.1 18c.1.5.5.9 1 .9h22.9c.5 0 .9-.4 1-.9l2.1-18V55c-.1-.6-.5-1-1.1-1zm44 0H56.4c-.5.1-.9.6-.9 1.1l2.1 18c.1.5.5.9 1 .9h22.9c.5 0 .9-.4 1-.9l2.1-18V55c-.1-.6-.5-1-1.1-1z"/>',
  'GlassesOutlinedIcon',
);
`},15167:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c6.8 0 13.1.8 18.8 2.1 2 .5 3.8 1 5.3 1.5.9.3 1.5.5 1.9.7 4 1.4 7 5.8 7 10.2v36.1c0 4.1-2.4 9-5.5 11.4L54.1 86c-3.5 2.6-8.8 2.6-12.3 0L20.5 69.8c-3.1-2.4-5.5-7.3-5.5-11.4v-36c0-4.4 3-8.8 7-10.2.4-.2 1-.4 1.9-.7 1.5-.5 3.3-1 5.3-1.5 5.7-1.2 12-2 18.8-2zm12.9 23.9L43 49.8l-7.9-7.9c-1.2-1.2-3.1-1.2-4.2 0s-1.2 3.1 0 4.2l10 10c1.2 1.2 3.1 1.2 4.2 0l20-20c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0z"/>',
  'GppGoodFilledIcon',
);
`},21324:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c6.8 0 13.1.8 18.8 2.1 2 .5 3.8 1 5.3 1.5.9.3 1.5.5 1.9.7 4 1.4 7 5.8 7 10.2v36.1c0 4.1-2.4 9-5.5 11.4L54.1 86c-3.5 2.6-8.8 2.6-12.3 0L20.5 69.8c-3.1-2.4-5.5-7.3-5.5-11.4v-36c0-4.4 3-8.8 7-10.2.4-.2 1-.4 1.9-.7 1.5-.5 3.3-1 5.3-1.5 5.7-1.2 12-2 18.8-2zm0 6c-6.3 0-12.2.7-17.4 1.9-1.8.4-3.4.9-4.8 1.3-.5.2-.9.3-1.2.4-.2.1-.3.1-.4.1-.1 0-.2.1-.2.1-1.5.5-3 2.6-3 4.5v36.1c0 2.2 1.5 5.3 3.1 6.6l21.3 16.2c1.3 1 3.7 1 5 0L71.9 65c1.6-1.2 3.1-4.4 3.1-6.6v-36c0-1.9-1.5-4-3-4.5l-.2-.1s-.2-.1-.4-.1c-.3-.1-.8-.3-1.2-.4-1.4-.4-3-.9-4.8-1.3-5.2-1.3-11.1-2-17.4-2zm12.9 17.9c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-20 20c-1.2 1.2-3.1 1.2-4.2 0l-10-10c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.2 0l7.9 7.9 17.9-17.9z"/>',
  'GppGoodOutlinedIcon',
);
`},92217:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M36 13H22c-5 0-9 4-9 9v14c0 5 4 9 9 9h14c5 0 9-4 9-9V22c0-5-4-9-9-9zm-14 6h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H22c-1.7 0-3-1.3-3-3V22c0-1.7 1.3-3 3-3zm14 32H22c-5 0-9 4-9 9v14c0 5 4 9 9 9h14c5 0 9-4 9-9V60c0-5-4-9-9-9zm-14 6h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H22c-1.7 0-3-1.3-3-3V60c0-1.7 1.3-3 3-3zm52-44H60c-5 0-9 4-9 9v14c0 5 4 9 9 9h14c5 0 9-4 9-9V22c0-5-4-9-9-9zm-14 6h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H60c-1.7 0-3-1.3-3-3V22c0-1.7 1.3-3 3-3zm14 32H60c-5 0-9 4-9 9v14c0 5 4 9 9 9h14c5 0 9-4 9-9V60c0-5-4-9-9-9zm-14 6h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H60c-1.7 0-3-1.3-3-3V60c0-1.7 1.3-3 3-3z"/>',
  'GridViewOutlinedIcon',
);
`},11928:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M32.4 36h32c1.2 0 2-.8 2-2s-.8-2-2-2h-32c-1.2 0-2 .8-2 2s.8 2 2 2zm32 10h-32c-1.2 0-2 .8-2 2s.8 2 2 2h32c1.2 0 2-.8 2-2s-.8-2-2-2zm0 14h-32c-1.2 0-2 .8-2 2s.8 2 2 2h32c1.2 0 2-.8 2-2s-.8-2-2-2z"/>',
  'GripperBarHorizontalIcon',
);
`},61657:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M34.4 30c1.2 0 2 .8 2 2v32c0 1.2-.8 2-2 2s-2-.8-2-2V32c0-1.2.8-2 2-2zm28 0c1.2 0 2 .8 2 2v32c0 1.2-.8 2-2 2s-2-.8-2-2V32c0-1.2.8-2 2-2zm-14 0c1.2 0 2 .8 2 2v32c0 1.2-.8 2-2 2s-2-.8-2-2V32c0-1.2.8-2 2-2z"/>',
  'GripperBarVerticalIcon',
);
`},44281:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M61.1 20.3c.4-1.6 2-2.6 3.6-2.3 1.6.4 2.6 2 2.3 3.6L64 35h11c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3H62.6l-3.1 14H75c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3H58.2l-3.3 14.7c-.3 1.6-1.8 2.6-3.4 2.3h-.2c-1.6-.4-2.6-2-2.3-3.6L52 61H38.2l-3.3 14.7c-.3 1.6-1.8 2.6-3.4 2.3h-.2c-1.6-.4-2.6-2-2.3-3.6L32 61H21c-1.6 0-2.9-1.2-3-2.8V58c0-1.7 1.3-3 3-3h12.4l3.1-14H21c-1.6 0-2.9-1.2-3-2.8V38c0-1.7 1.3-3 3-3h16.8l3.3-14.7c.3-1.6 1.8-2.6 3.4-2.3h.2c1.6.4 2.6 2 2.3 3.6L44 35h13.9l3.2-14.7zM56.5 41H42.6l-3.1 14h13.9l3.1-14z"/>',
  'HashOutlinedIcon',
);
`},4448:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 17.4C53.2 13 57 11 62.6 11c11.8 0 19.9 7.2 23.3 19 .5 1.6-.5 3.3-2.1 3.7-1.6.5-3.3-.5-3.7-2.1C77.5 22.2 71.5 17 62.6 17c-3.9 0-6.6 1.4-11 5.2-.2.2-1.4 1.2-1.7 1.4-1.1 1-2.8 1-3.9 0-.3-.3-1.5-1.3-1.7-1.4-4.4-3.7-7.1-5.2-11-5.2C21.6 17 14 26.5 14 40.1c0 10.4 10.6 23.3 32.2 38.3 1 .7 2.4.7 3.5 0 4.4-3.1 7.4-5.3 8.8-6.4 1.3-1 3.2-.8 4.2.5s.8 3.2-.5 4.2c-1.5 1.2-4.5 3.4-9.1 6.6-3.1 2.2-7.3 2.2-10.4 0C19.7 67.4 8 53.1 8 40.1 8 23.4 17.9 11 33.4 11c5.6 0 9.4 2 14.6 6.4zM77 52h8c1.7 0 3 1.3 3 3s-1.3 3-3 3h-8v8c0 1.7-1.3 3-3 3s-3-1.3-3-3v-8h-8c-1.7 0-3-1.3-3-3s1.3-3 3-3h8v-8c0-1.7 1.3-3 3-3s3 1.3 3 3v8z"/>',
  'HeartAddOutlinedIcon',
);
`},26912:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M46.469 7.426C52.544 2.27 56.948 0 63.436 0c13.748 0 23.167 8.36 27.047 22.1a3.485 3.485 0 1 1-6.708 1.896C80.69 13.071 73.82 6.973 63.436 6.973c-4.522 0-7.663 1.662-12.751 6.02-.236.202-1.569 1.352-1.955 1.682a3.484 3.484 0 0 1-4.522 0c-.386-.33-1.719-1.48-1.955-1.682-5.088-4.358-8.23-6.02-12.751-6.02-13.734 0-22.532 11.008-22.532 26.886 0 12.09 12.337 27.116 37.419 44.54a3.54 3.54 0 0 0 4.052-.018c5.168-3.654 8.604-6.148 10.269-7.45a3.484 3.484 0 0 1 4.892.6 3.487 3.487 0 0 1-.6 4.895c-1.781 1.392-5.28 3.931-10.537 7.65a10.509 10.509 0 0 1-12.052.05C13.607 65.506 0 48.93 0 33.859 0 14.429 11.532 0 29.502 0c6.488 0 10.892 2.271 16.967 7.426Zm33.416 39.157h9.538A3.58 3.58 0 0 1 93 50.167a3.58 3.58 0 0 1-3.577 3.583h-9.538v9.556a3.58 3.58 0 0 1-3.577 3.583 3.58 3.58 0 0 1-3.577-3.583V53.75h-9.539a3.58 3.58 0 0 1-3.577-3.583 3.58 3.58 0 0 1 3.577-3.584h9.539v-9.555a3.58 3.58 0 0 1 3.577-3.584 3.58 3.58 0 0 1 3.577 3.584v9.555Z"/>',
  'HeartAddOutlinedBoldIcon',
);
`},52367:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M38.8 53c-1.1 1.2-1 3.1.2 4.2s3.1 1 4.2-.2l9.9-10.7c1.6-1.8 1.8-4.5.3-6.4-2.2-2.8-4.1-5.6-5.8-8.4-1.6-2.7.1-6.9 3.5-10.3 1-1 1.6-1.6 2.4-2.2 2.5-1.9 5.3-2.9 9.1-2.9C74.4 16 82 25.6 82 39.4 82 49.9 71.4 63 49.7 78.2c-1 .7-2.4.7-3.4 0C24.6 63 14 49.9 14 39.4 14 25.6 21.6 16 33.4 16c1.3 0 2.5.2 3.6.6a3.037 3.037 0 0 0 1.8-5.8c-1.7-.6-3.6-.8-5.5-.8C17.9 10 8 22.5 8 39.4c0 13.1 11.7 27.5 34.8 43.7 3.1 2.2 7.2 2.2 10.3 0C76.3 66.9 88 52.5 88 39.4 88 22.5 78.1 10 62.6 10c-5.1 0-9.2 1.5-12.7 4.2-1.1.8-1.8 1.5-3 2.7-5.2 5.2-7.9 11.9-4.5 17.7 1.7 2.8 3.5 5.5 5.6 8.3L38.8 53z"/>',
  'HeartBrokenIcon',
);
`},1700:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M62.6 11C78.1 11 88 23.4 88 40.1c0 13-11.7 27.2-34.8 43.3-3.1 2.2-7.2 2.2-10.3 0C19.7 67.3 8 53.1 8 40.1 8 23.4 17.9 11 33.4 11c5.6 0 9.4 2 14.6 6.4C53.2 13 57 11 62.6 11z"/>',
  'HeartFilledIcon',
);
`},14586:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M33.4 11c5.6 0 9.4 2 14.6 6.4C53.2 13 57 11 62.6 11c11.8 0 19.9 7.2 23.3 19 .5 1.6-.5 3.3-2.1 3.7-1.6.5-3.3-.5-3.7-2.1C77.5 22.2 71.6 17 62.6 17c-3.9 0-6.6 1.4-11 5.2-.2.2-1.4 1.2-1.7 1.4-1.1 1-2.8 1-3.9 0-.3-.3-1.5-1.3-1.7-1.4-4.4-3.7-7.1-5.2-11-5.2C21.6 17 14 26.5 14 40.1c0 10.4 10.6 23.3 32.2 38.3 1 .7 2.4.7 3.5 0 4.4-3.1 7.4-5.3 8.8-6.4 1.3-1 3.2-.8 4.2.5s.8 3.2-.5 4.2c-1.5 1.2-4.5 3.4-9.1 6.6-3.1 2.2-7.3 2.2-10.4 0C19.7 67.4 8 53.1 8 40.1 8 23.4 17.9 11 33.4 11zm36.4 52.1c-.8 0-1.5-.3-2.1-.8L58.9 54l-.1-.1c-1.1-1.1-1-2.9.1-4l.1-.1c1.2-1.1 3-1.1 4.1 0l6.7 6.3 13.1-12.4c1.2-1.1 3-1.1 4.1 0l.1.1c1.1 1.1 1.2 2.8.1 4l-.1.1-15.2 14.4c-.6.5-1.4.8-2.1.8z"/>',
  'HeartMarkedOutlinedIcon',
);
`},70250:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M62.6 11C78.1 11 88 23.4 88 40.1c0 13-11.7 27.2-34.8 43.3-3.1 2.2-7.2 2.2-10.3 0C19.7 67.3 8 53.1 8 40.1 8 23.4 17.9 11 33.4 11c5.6 0 9.4 2 14.6 6.4C53.2 13 57 11 62.6 11zm0 5.9c-3.9 0-6.6 1.4-11 5.2-.2.2-1.4 1.2-1.7 1.4-1.1 1-2.8 1-3.9 0-.3-.3-1.5-1.3-1.7-1.4-4.4-3.7-7.1-5.2-11-5.2C21.6 16.9 14 26.4 14 40c0 10.4 10.6 23.3 32.3 38.3 1 .7 2.4.7 3.4 0C71.4 63.3 82 50.4 82 40c0-13.6-7.6-23.1-19.4-23.1z"/>',
  'HeartOutlinedIcon',
);
`},44446:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 55c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-.2-35c-4.5 0-8.7 2.3-11.1 5.9-.6 1-1.1 2-1.5 3.1-.5 1.6.4 3.3 1.9 3.8 1.6.5 3.3-.4 3.8-1.9.2-.6.5-1.1.8-1.7 1.3-2 3.6-3.2 6.1-3.2 4 0 7.2 3.1 7.2 7s-3.2 7-7.2 7c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3s3-1.3 3-3v-3.3C56.6 52.3 61 47.2 61 41c0-7.2-5.9-13-13.2-13z"/>',
  'HelpCircleFilledIcon',
);
`},11382:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm13 27c0 6.2-4.4 11.3-10.2 12.7V57c0 1.7-1.3 3-3 3s-3-1.3-3-3v-6c0-1.7 1.3-3 3-3 4 0 7.2-3.1 7.2-7s-3.2-7-7.2-7c-2.5 0-4.8 1.2-6.1 3.2-.3.5-.6 1.1-.8 1.7-.5 1.6-2.2 2.4-3.8 1.9-1.6-.5-2.4-2.2-1.9-3.8.4-1.1.9-2.1 1.5-3.1 2.4-3.7 6.6-5.9 11.1-5.9C55.1 28 61 33.8 61 41zM48 69c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>',
  'HelpCircleOutlinedIcon',
);
`},43021:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m77.1 44.4 4.9 2.7C81.5 28.7 66.5 14 48 14c-18.8 0-34 15.2-34 34s15.2 34 34 34c11.5 0 22-5.7 28.3-15.1.9-1.4 2.8-1.7 4.2-.8 1.4.9 1.7 2.8.8 4.2C73.9 81.2 61.5 88 48 88 25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40c0 1-.1 2.5-.2 4.4-.2 2.2-2.6 3.4-4.5 2.4l-9.1-5.1c-1.4-.8-2-2.6-1.1-4.1.7-1.5 2.6-2.1 4-1.2zM30.9 60.9 45 46.8V30c0-1.7 1.3-3 3-3s3 1.3 3 3v18c0 .8-.3 1.6-.9 2.1l-15 15c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3 0-4.2z"/>',
  'HistoryOutlinedIcon',
);
`},69412:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m56.7 10.4 28.7 24.2.5.4c3.5 3.3 3.9 8.7 1 12.4-.3.4-.7.8-1.2 1.1l-1 .6c-2.1 1.5-3.4 3.9-3.4 6.6v14.8c0 7.8-5.3 13.8-12.7 13.8H29.5c-7.6 0-14.5-6.2-14.5-13.8V54c0-2-1.2-3.8-3-4.6-1.1-.5-1.9-1-2.6-1.9-3-3.8-2.5-9.2.9-12.4l29-24.7c5-4 12.4-4 17.4 0zm-12.6 5.9L15.6 40.7c-.5.4-.7 1.2-.5 1.8 4.5 2 7.5 6.6 7.5 11.6v16.6c0 3.1 3.3 6.1 6.9 6.1h38.9c3.1 0 5.1-2.3 5.1-6.1V55.9c0-5.2 2.5-10 6.7-12.9l.7-.5.1-.3c.1-.6-.1-1.2-.5-1.6L51.9 16.4c-2.2-1.8-5.7-1.8-7.8-.1zm4 28c3 0 6.7 2.2 11.9 6.6 3 2.5 4.7 6.2 4.7 10.1v3.7c0 1.4-.7 2.6-1.9 3.3-1.2.7-2.6.7-3.8 0-1.2-.7-1.9-1.9-1.9-3.3V61c0-1.6-.7-3.2-2-4.2-2.1-1.8-3.9-3.1-5.3-3.9-.4-.2-.8-.5-1.3-.7l-.2-.2h-.2l-.3.1-.7.4-.7.4c-1.4.8-3.2 2.2-5.4 4-1.3 1-2 2.6-2 4.2v3.7c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8V61c0-3.9 1.7-7.6 4.8-10.1 5.4-4.4 9-6.6 11.9-6.6z" style="fill:#3c3f44"/>',
  'HomeIcon',
);
`},88275:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m52.1 11.1 29.3 21.1c2.9 2.1 4.6 5.4 4.6 8.9V75c0 6.1-4.9 11-11 11H60V70c0-6.6-5.4-12-12-12s-12 5.4-12 12v16H21c-6.1 0-11-4.9-11-11V41.1c0-3.5 1.7-6.9 4.6-8.9l29.3-21.1c2.5-1.8 5.7-1.8 8.2 0z"/>',
  'HomeFilledIcon',
);
`},71924:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M14.6 32.1 43.9 11c2.4-1.8 5.7-1.8 8.2 0l29.3 21.1c2.9 2.1 4.6 5.4 4.6 8.9v34c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V41.1c0-3.6 1.7-6.9 4.6-9zm3.5 4.9c-1.3.9-2.1 2.5-2.1 4.1V75c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V41.1c0-1.6-.8-3.1-2.1-4.1L48.6 15.9c-.3-.3-.8-.3-1.2 0L18.1 37z"/>',
  'HomeOutlinedIcon',
);
`},61309:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M71 7c3.9 0 7 3.1 7 7v7.1c0 6-2.2 11.7-6.1 16.2L62.7 48l9.5 11c3.6 4.3 5.7 9.7 5.8 15.4V82c0 3.9-3.1 7-7 7H25c-3.9 0-7-3.1-7-7v-7.3c0-6 2.2-11.8 6.1-16.3L33.2 48l-9.1-10.4c-3.8-4.4-6-10-6.1-15.8V14c0-3.9 3.1-7 7-7h46zm0 6H25c-.6 0-1 .4-1 1v7.3c0 4.6 1.7 8.9 4.7 12.4L38 44.3c1.9 2.2 1.9 5.4 0 7.5l-9.3 10.6c-3 3.4-4.6 7.8-4.7 12.4V82c0 .6.4 1 1 1h46c.6 0 1-.4 1-1v-7.1c0-4.5-1.7-8.9-4.7-12.3L58 51.7c-1.9-2.2-1.9-5.4 0-7.5L67.6 33c2.8-3.4 4.4-7.6 4.4-12v-7c0-.6-.4-1-1-1zM60 72c1.7 0 3 1.3 3 3s-1.3 3-3 3H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h24z"/>',
  'HourglassOutlinedIcon',
);
`},99274:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M66 10a12 12 0 0 1 11.5 8.6L88 54v20c0 6.6-5.4 12-12 12H20c-6.6 0-12-5.4-12-12V54l10.5-35.4C20 13.5 24.6 10 30 10h36zm0 6H30c-2.6 0-4.9 1.6-5.7 4.1l-.1.2L14.3 54h11.5c1.3 0 2.5.9 2.9 2.2l2 6.9c.5 1.6 1.9 2.8 3.6 2.9h27.2c1.7 0 3.2-1.1 3.8-2.7l.1-.2 2-6.9c.4-1.3 1.5-2.2 2.9-2.2h11.5l-10-33.7c-.7-2.5-3-4.2-5.5-4.3H66z"/>',
  'InboxFilledIcon',
);
`},91814:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M70.28 80H9.37C5.922 80 0 73.934 0 70.393v-35.19c0-3.53 2.79-6.4 6.244-6.4h6.243c3.45 0 6.244 2.856 6.244 6.4V56.68a4.117 4.117 0 0 0 4.115 4.121h43.308a4.117 4.117 0 0 0 4.115-4.12v-21.48c0-3.529 2.79-6.4 6.244-6.4h6.243c3.45 0 6.244 2.857 6.244 6.4V70.41C89.023 73.94 83.103 80 79.65 80h-9.37Zm-6.246-47.998V52.11a2.288 2.288 0 0 1-2.284 2.29H27.268a2.288 2.288 0 0 1-2.286-2.29V32c0-5.303-4.195-9.605-9.368-9.605-3.131 0-3.131-1.76-3.131-1.76V9.605C12.487 4.304 16.682 0 21.862 0h45.292c5.18 0 9.37 4.304 9.37 9.605v11.033s0 1.76-3.117 1.76c-5.176.002-9.37 4.306-9.37 9.607l-.003-.003Z"/>',
  'InboxFilledBoldIcon',
);
`},67466:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M25.1 15.5c3-5.2 9.7-7 14.9-4.1l31.3 14.7H77c6.1 0 11 4.9 11 11V75c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V37.1c0-6 4.9-10.9 10.9-11l6.2-10.6zM77 32.1H19c-2.8 0-5 2.2-5 5V75c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V37.1c0-2.8-2.2-5-5-5zM55.3 44.8c.7-1.5 2.5-2.2 4-1.5 1.5.7 2.2 2.5 1.5 4l-10 22c-1.1 2.3-4.4 2.3-5.5 0l-10-22c-.7-1.5 0-3.3 1.5-4 1.5-.7 3.3 0 4 1.5l7.3 16 7.2-16zM37.1 16.6c-2.4-1.4-5.4-.6-6.8 1.8L25.9 26h31.4l-19.9-9.3s-.1 0-.1-.1h-.2z"/>',
  'LightVipOutlinedIcon',
);
`},79420:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M55.8 39.8c6.9 6.9 7 18.1.3 25.2l-.3.3-15.6 15.5c-7 7-18.4 7-25.5 0-7-7-7-18.4 0-25.5l7.4-7.4c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2L19 59.6c-4.7 4.7-4.7 12.3 0 17 4.6 4.6 12 4.7 16.7.2l.2-.2L51.6 61c4.7-4.7 4.7-12.3 0-17-1.2-1.2-1.2-3.1 0-4.2 1.1-1.2 3-1.2 4.2 0zm25-25c6.9 6.9 7 18.1.3 25.2l-.6.6-7.6 7.6c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l7.9-7.9c4.7-4.7 4.7-12.3 0-17-4.6-4.6-12-4.7-16.7-.2l-.3.1L44 34.6c-4.7 4.7-4.7 12.3 0 17 1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0-6.9-6.9-7-18.1-.3-25.2l.3-.3 15.6-15.6c7-6.9 18.4-6.9 25.4.1z"/>',
  'LinkOutlinedIcon',
);
`},49872:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M20 66c3.3 0 6 2.7 6 6v4c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6v-4c0-3.3 2.7-6 6-6h4zm63 5c1.7 0 3 1.3 3 3s-1.3 3-3 3H37c-1.7 0-3-1.3-3-3s1.3-3 3-3h46zm-63 1h-4v4h4v-4zm0-32c3.3 0 6 2.7 6 6v4c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6v-4c0-3.3 2.7-6 6-6h4zm63 5c1.7 0 3 1.3 3 3s-1.3 3-3 3H37c-1.7 0-3-1.3-3-3s1.3-3 3-3h46zm-63 1h-4v4h4v-4zm0-32c3.3 0 6 2.7 6 6v4c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6v-4c0-3.3 2.7-6 6-6h4zm63 5c1.7 0 3 1.3 3 3s-1.3 3-3 3H37c-1.7 0-3-1.3-3-3s1.3-3 3-3h46zm-63 1h-4v4h4v-4z"/>',
  'ListOutlinedIcon',
);
`},64941:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 0c26.5 0 48 21.5 48 48 0 2.2-.1 4.4-.4 6.6-.3 2-2.1 3.4-4 3.1-2-.3-3.4-2.1-3.1-4 .2-1.8.4-3.7.4-5.6C88.8 25.5 70.5 7.2 48 7.2S7.2 25.5 7.2 48 25.5 88.8 48 88.8c1.9 0 3.7-.1 5.6-.4 2-.3 3.8 1.1 4 3.1.3 2-1.1 3.8-3.1 4-2.1.3-4.3.5-6.5.5C21.5 96 0 74.5 0 48S21.5 0 48 0z"/>',
  'LoadingThreeQuartersOutlinedIcon',
);
`},2417:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 91C42.6 91 9 65.1 9 43.7S26.5 5 48 5s39 17.3 39 38.7S53.4 91 48 91zm0-35c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12z"/>',
  'LocationFilledIcon',
);
`},51093:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8C28.7 8 13 23.7 13 43c0 13 11.2 27.7 33.2 44.4 1.1.8 2.6.8 3.6 0l1.3-1 1.3-1C72.7 69.5 83 55.5 83 43 83 23.7 67.3 8 48 8zm0 6c16 0 29 13 29 29v.3c-.2 10.1-9.6 22.7-28.4 37.5l-.6.4C28.6 66.1 19 53.3 19 43c0-16 13-29 29-29zm0 15c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14zm0 6c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/>',
  'LocationOutlinedIcon',
);
`},37153:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M35.7 52.9C37.4 47.7 42.3 44 48 44s10.6 3.7 12.3 8.9c5.8-1.1 11.4-2.9 16.7-5.5V19c0-2.8-2.2-5-5-5H24c-2.8 0-5 2.2-5 5v28.4c5.3 2.6 10.9 4.4 16.7 5.5zm25.2 6C60 65.2 54.5 70 48 70s-12-4.8-12.9-11.1c-5.6-1-11-2.6-16.1-4.9v23c0 2.8 2.2 5 5 5h48c2.8 0 5-2.2 5-5V54c-5.2 2.2-10.6 3.9-16.1 4.9zM24 8h48c6.1 0 11 4.9 11 11v58c0 6.1-4.9 11-11 11H24c-6.1 0-11-4.9-11-11V19c0-6.1 4.9-11 11-11zm24 56c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7z"/>',
  'LuckyMoneyOutlinedIcon',
);
`},63026:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c5 0 9.3 3.4 10.6 8l.3.4-.2.1c.2.8.3 1.7.3 2.5v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-.9.1-1.7.3-2.5l-.2-.1.3-.4c1.3-4.6 5.6-8 10.6-8h58zm5 13L54.7 47.7c-3.9 3-9.2 3.1-13.2.2l-.3-.2L14 26v46c0 2.7 2.1 4.9 4.8 5H77c2.8 0 5-2.2 5-5V26zm-5-7H19c-1.1 0-2.1.4-3 1l29 23c1.7 1.3 4.1 1.4 5.9.2l.1-.2 29-23c-.9-.6-1.9-1-3-1z"/>',
  'MailOutlinedIcon',
);
`},64828:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M74.5 16.6H64c-1.7 0-3-1.3-3-3s1.3-3 3-3h18c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3s-3-1.3-3-3v-11l-9.9 9.9C74 36.3 77 43.8 77 52c0 18.2-14.8 33-33 33S11 70.2 11 52s14.8-33 33-33c7.9 0 15.1 2.8 20.8 7.4l9.7-9.8zM44 79c14.9 0 27-12.1 27-27S58.9 25 44 25 17 37.1 17 52s12.1 27 27 27z"/>',
  'MaleOutlinedIcon',
);
`},27418:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<ellipse cx="48" cy="78" rx="25" ry="12" style="opacity:.3;fill-rule:evenodd;clip-rule:evenodd;enable-background:new"/><path d="M48 78c-4.4 0-32-21.4-32-39S30.3 7 48 7s32 14.3 32 32-27.6 39-32 39zm0-29.3c5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8-9.8 4.4-9.8 9.8 4.4 9.8 9.8 9.8z"/>',
  'MapFilledIcon',
);
`},54879:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M8 44c0-1.7 1.3-3 3-3s3 1.4 3 3v29.7c0 .6.4 1 1 1 .2 0 .3 0 .5-.1L30 66.7c2.1-1.2 4.7-1.1 6.8.1l23.7 14c.3.2.6.2.9 0l20-10.1c.3-.2.6-.5.6-.9V44c0-1.7 1.3-3 3-3s3 1.4 3 3v25.8c0 2.7-1.5 5.1-3.9 6.3l-20 10.1c-2.1 1.1-4.6 1-6.6-.2L33.8 72c-.3-.2-.7-.2-1 0l-14.5 7.9c-1 .6-2.2.8-3.3.8-3.9 0-7-3.2-7-7.1V44zm63-12.4c0 8.2-6.9 18.1-20.3 30-1.5 1.3-3.8 1.3-5.3 0C31.9 49.7 25 39.9 25 31.6 25 19.1 35.3 9 48 9s23 10.1 23 22.6zm-40 0c0 5.8 5.6 14 17 24.3 11.4-10.3 17-18.6 17-24.3C65 22.5 57.4 15 48 15s-17 7.5-17 16.6zM48 38c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>',
  'MapOutlinedIcon',
);
`},68887:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 75H51.3l-8.1 9c-1.1 1.2-3 1.3-4.2.2s-1.3-3-.2-4.2l9-10c.6-.6 1.4-1 2.2-1h27c2.8 0 5-2.2 5-5V22c0-2.8-2.2-5-5-5H19c-2.8 0-5 2.2-5 5v42c0 2.8 2.2 5 5 5h13c1.7 0 3 1.3 3 3s-1.3 3-3 3H19c-6.1 0-11-4.9-11-11V22c0-6.1 4.9-11 11-11h58c6.1 0 11 4.9 11 11v42c0 6.1-4.9 11-11 11zM66 32c1.7 0 3 1.3 3 3s-1.3 3-3 3H30c-1.7 0-3-1.3-3-3s1.3-3 3-3h36zM48 48c1.7 0 3 1.3 3 3s-1.3 3-3 3H30c-1.7 0-3-1.3-3-3s1.3-3 3-3h18z"/>',
  'MessageOutlinedIcon',
);
`},71305:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M51 79.9V85c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5.1C27.6 78.4 14 63.8 14 46v-2c0-1.7 1.3-3 3-3s3 1.3 3 3v2c0 15.5 12.5 28 28 28s28-12.5 28-28v-2c0-1.7 1.3-3 3-3s3 1.3 3 3v2c0 17.8-13.6 32.4-31 33.9zM28 28c0-11 9-20 20-20s20 9 20 20v18c0 11-9 20-20 20s-20-9-20-20V28zm6 0v18c0 7.7 6.3 14 14 14s14-6.3 14-14V28c0-7.7-6.3-14-14-14s-14 6.3-14 14z"/>',
  'MicOutlinedIcon',
);
`},57184:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M75 13c6.1 0 11 4.9 11 11v24c0 1.7-1.3 3-3 3s-3-1.3-3-3V24c0-2.8-2.2-5-5-5H21c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h21c1.7 0 3 1.3 3 3s-1.3 3-3 3H21c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11h54zm5 44c3.3 0 6 2.7 6 6v14c0 3.3-2.7 6-6 6H58c-3.3 0-6-2.7-6-6V63c0-3.3 2.7-6 6-6h22zm0 6H58v14h22V63zM32.2 29.8 45 42.6V40c0-1.6 1.2-2.9 2.8-3h.2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H38c-1.7 0-3-1.3-3-3v-.2c.1-1.6 1.4-2.8 3-2.8h2.9l-13-13c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.3 0z"/>',
  'MiniContractOutlinedIcon',
);
`},77970:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M29 42h38c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H29c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2z"/>',
  'MinusIcon',
);
`},15626:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M70 8c6.1 0 11 4.9 11 11v58c0 6.1-4.9 11-11 11H26c-6.1 0-11-4.9-11-11V19c0-6.1 4.9-11 11-11h44zM56 73H40c-1.7 0-3 1.3-3 3s1.3 3 3 3h16c1.7 0 3-1.3 3-3s-1.3-3-3-3zm14-59H26c-2.8 0-5 2.2-5 5v45h54V19c0-2.8-2.2-5-5-5z"/>',
  'MobileFilledIcon',
);
`},15749:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M24 8h48c6.1 0 11 4.9 11 11v58c0 6.1-4.9 11-11 11H24c-6.1 0-11-4.9-11-11V19c0-6.1 4.9-11 11-11zm0 6c-2.8 0-5 2.2-5 5v58c0 2.8 2.2 5 5 5h48c2.8 0 5-2.2 5-5V19c0-2.8-2.2-5-5-5H24zm16 58c-1.7 0-3-1.3-3-3s1.3-3 3-3h16c1.7 0 3 1.3 3 3s-1.3 3-3 3H40z"/>',
  'MobileOutlinedIcon',
);
`},30004:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M16.7 61.2c2.9 6.9 8 12.6 14.4 16.3V48.3L18 60.5c-.4.4-.8.6-1.3.7zm-1.9-5.9L34.4 37H15.8c-1.2 3.5-1.8 7.2-1.8 11 0 2.5.3 5 .8 7.3zM43.1 37c-.1.2-.3.4-.5.6L36.8 43c.2.4.3.8.3 1.2v7.5c.3.2.6.4.9.7l6.3 6.6h8.5l6.4-6.8v-9l-6.4-6.3c-.2 0-.5.1-.8.1h-8.9zm-6 43.2C40.5 81.4 44.2 82 48 82c3.1 0 6-.4 8.9-1.2L37.1 60v20.2zm25.8-1.6c6.1-3 11.2-7.7 14.6-13.6H50l12.4 13c.2.1.4.3.5.6zM80.2 59c1.2-3.4 1.8-7.1 1.8-11 0-3.4-.5-6.8-1.5-9.9L61 59h19.2zM18.6 31h28.2L33.7 18.1c-.2-.2-.4-.5-.6-.7C27 20.4 22 25.1 18.6 31zm20.6-15.9 20 19.6V15.9C55.7 14.7 51.9 14 48 14c-3 0-6 .4-8.8 1.1zm26 26.8v3.8l12.6-13.5.2-.2c-3-5.6-7.4-10.2-12.8-13.4v23.3zM48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40z"/>',
  'MomentsOutlinedIcon',
);
`},36081:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M55 10c.8 0 1.6 0 2.4.1C51 16.4 47 25.2 47 35c0 19.3 15.7 35 35 35 1.4 0 2.8-.1 4.2-.2C79.3 79.6 67.9 86 55 86c-21 0-38-17-38-38s17-38 38-38z"/>',
  'MoonOutlinedIcon',
);
`},6633:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M22 40c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm26 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm26 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"/>',
  'MoreIcon',
);
`},14393:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M28 55c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm20 0c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm20 0c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>',
  'MoreOutlinedIcon',
);
`},3102:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path class="st0" d="M48 26.7c2.9 0 5.3-2.4 5.3-5.3S50.9 16 48 16s-5.3 2.4-5.3 5.3 2.4 5.4 5.3 5.4zm0 26.6c2.9 0 5.3-2.4 5.3-5.3s-2.4-5.3-5.3-5.3-5.3 2.4-5.3 5.3 2.4 5.3 5.3 5.3zM48 80c2.9 0 5.3-2.4 5.3-5.3s-2.4-5.3-5.3-5.3-5.3 2.4-5.3 5.3S45.1 80 48 80z"/>',
  'MoreVerticalOutlinedIcon',
);
`},559:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M34.9 15.4c1.5-.6 3.3.2 3.9 1.7s-.2 3.3-1.8 3.9c-12 4.5-20 16-20 29 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-15.5 9.6-29.2 23.9-34.6zM21.8 76.1c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.2 0c5.8 5.8 13.6 9.1 22 9.1 8.3 0 16.2-3.3 21.9-9.1 1.2-1.2 3.1-1.2 4.2 0s1.2 3.1 0 4.2C67.3 83 58 87 48 87s-19.3-4-26.2-10.9zM85 50c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-13-8.1-24.5-20-29-1.5-.6-2.3-2.3-1.7-3.9.6-1.5 2.3-2.3 3.9-1.7C75.4 20.8 85 34.5 85 50zM48 22c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm32 47c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm-64 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>',
  'MovieAppointmentOutlinedIcon',
);
`},47884:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40 0 .9 0 1.8-.1 2.6-.1 1-.2 1.9-.3 2.9v.3c-.2 1.4-.5 2.8-.8 4.1v.3l-.1.5v.1c-.3.9-.5 1.8-.9 2.7 0 .1-.1.2-.1.3-1.9 5.3-5 10.1-8.8 14.1 2.2.3 4.1 1 5.9 2.2 1.4.9 1.7 2.8.8 4.2-.9 1.4-2.8 1.7-4.2.8-2.9-1.9-7.3-1.8-13.5.9-.2.1-.4.2-.5.3-.1 0-.1.1-.2.1-.1.1-.3.1-.4.2h-.1c-.2.1-.3.2-.5.2h-.1c-.2.1-.3.1-.5.2 0 0-.1 0-.1.1-.3.1-.7.3-1 .4-.1 0-.1.1-.2.1s-.2.1-.4.1c-.1 0-.2.1-.2.1-.2.1-.3.1-.5.2h-.1c-.2.1-.3.1-.5.2-.1 0-.1 0-.2.1-.2.1-.3.1-.5.2h-.1c-.2 0-.3.1-.5.1-.1 0-.1 0-.2.1-.1 0-.2.1-.4.1-.1 0-.2.1-.3.1-.1 0-.2.1-.3.1-.1 0-.2 0-.3.1-.2 0-.3.1-.5.1h-.1c-1 .2-2 .4-2.9.6h-.9c-.8.1-1.6.2-2.3.2h-2.9C25.9 88 8 70.1 8 48S25.9 8 48 8zm0 49c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm15-15c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-30 0c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm15-15c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/>',
  'MovieFilledIcon',
);
`},28553:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M79.2 83c-2.9-1.9-7.3-1.8-13.5.9C60.2 86.6 54.2 88 48 88 25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40c0 6.3-1.4 12.3-4.2 17.8-.7 1.5-2.5 2.1-4 1.4-1.5-.7-2.1-2.5-1.4-4C80.8 58.5 82 53.3 82 48c0-18.8-15.2-34-34-34S14 29.2 14 48s15.2 34 34 34c5.3 0 10.5-1.2 15.1-3.5l.1-.1c7.9-3.4 14.5-3.7 19.3-.4 1.4.9 1.7 2.8.8 4.2-.9 1.4-2.7 1.7-4.1.8zM48 39c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm15 15c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM48 69c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM33 54c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>',
  'MovieOutlinedIcon',
);
`},29762:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M78.9 11.4c1.9 0 3.4 1.5 3.4 3.4v66.3c0 1.9-1.5 3.4-3.4 3.4s-3.4-1.5-3.4-3.4v-28L22.9 83.9c-2.1 1.3-4.9.6-6.2-1.4-.5-.7-.7-1.5-.7-2.3V15.8c0-2.4 2-4.3 4.5-4.3.8 0 1.7.2 2.4.6l52.5 30.8v-28c0-1.9 1.6-3.5 3.5-3.5z"/>',
  'NextFilledIcon',
);
`},41990:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M68 16h7c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V27c0-6.1 4.9-11 11-11h7v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3h28v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3zm0 6v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3H34v3c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3h-7c-2.8 0-5 2.2-5 5v48c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V27c0-2.8-2.2-5-5-5h-7z"/>',
  'NoteOutlinedIcon',
);
`},38261:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M512 981.333a412.444 412.444 0 1 1 0-824.889 412.444 412.444 0 0 1 0 824.89zM512 896a327.111 327.111 0 1 0 0-654.222A327.111 327.111 0 0 0 512 896zM98.133 228.238a42.667 42.667 0 0 1-48.924-69.973L235.52 27.819a42.667 42.667 0 0 1 48.924 69.973l-186.31 130.39zm830.578 0L742.286 97.678a42.667 42.667 0 1 1 48.925-69.916l186.425 130.56a42.667 42.667 0 1 1-48.925 69.916zM682.667 526.222a42.667 42.667 0 1 1 0 85.334H469.333V398.222a42.667 42.667 0 0 1 85.334 0v128h128z"/>',
  'NoticeOutlinedIcon',
);
`},91557:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M72 8H24c-6.1 0-11 4.9-11 11v58c0 6.1 4.9 11 11 11h48c6.1 0 11-4.9 11-11V19c0-6.1-4.9-11-11-11zm0 6c2.8 0 5 2.2 5 5v58c0 2.8-2.2 5-5 5H24c-2.8 0-5-2.2-5-5V19c0-2.8 2.2-5 5-5h48zM32 41c-1.7 0-3-1.3-3-3s1.3-3 3-3h32c1.7 0 3 1.3 3 3s-1.3 3-3 3H32zm0 16c-1.7 0-3-1.3-3-3s1.3-3 3-3h20c1.7 0 3 1.3 3 3s-1.3 3-3 3H32z"/>',
  'OrderOutlinedIcon',
);
`},43715:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M63.6 8.4c10.5 0 19.1 8.1 19.5 18.4v39.3c0 10.3-8.2 18.8-18.7 19.2h-32c-10.5 0-19.1-8.1-19.5-18.4V27.6c0-10.3 8.2-18.8 18.7-19.2h1.1c2.1 0 3.8 1.6 3.9 3.6s-1.4 3.8-3.4 4h-1.4c-5.9.3-10.7 5-11 10.9v39.2c0 6.1 4.8 11.2 11 11.5h32c6.2 0 11.3-4.8 11.7-10.9V27.6c0-6.4-5.3-11.5-11.7-11.5-2.2 0-3.9-1.7-3.9-3.9s1.6-3.8 3.7-3.8zm-1.8 45.1c1.4 0 2.7.7 3.4 1.9.7 1.2.7 2.7 0 3.9-.7 1.2-2 1.9-3.4 1.9H34.5c-2.2 0-3.9-1.7-3.9-3.8 0-2.1 1.8-3.8 3.9-3.9h27.3zM34.5 32.4h27.4c2.1 0 3.8 1.6 3.9 3.6.1 2-1.4 3.8-3.5 4.1H34.5c-2.1 0-3.8-1.6-3.9-3.6-.1-2 1.4-3.8 3.4-4.1h27.9-27.4zM52 8.4c2.1 0 3.8 1.6 3.9 3.6s-1.4 3.8-3.4 4h-8.4c-2.1 0-3.8-1.6-3.9-3.6s1.4-3.8 3.4-4H52z" style="fill:#3c3f44"/>',
  'OrdersOutlinedIcon',
);
`},90215:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M80.9 10.9c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2L42.7 57.5c-1.2 1.2-3.1 1.2-4.2 0s-1.2-3.1 0-4.2l42.4-42.4zM80 42c0-1.7 1.3-3 3-3s3 1.3 3 3v33c0 6.1-4.9 11-11 11H21c-6.1 0-11-4.9-11-11V21c0-6.1 4.9-11 11-11h32c1.7 0 3 1.3 3 3s-1.3 3-3 3H21c-2.8 0-5 2.2-5 5v54c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V42z"/>',
  'PageEditOutlinedIcon',
);
`},88003:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M73 11c6.1 0 11 4.9 11 11v60c0 2.4-2.7 3.8-4.7 2.5l-7.2-4.8-5.7 4.3c-1.4 1-3.4 1-4.8-.1L56 79.8 50.4 84c-1.4 1-3.4 1-4.8-.1L40 79.8 34.4 84c-1.4 1-3.4 1-4.8-.1l-5.7-4.3-7.2 4.8c-2 1.3-4.7-.1-4.7-2.5V22c0-6.1 4.9-11 11-11h50zm0 6H23c-2.8 0-5 2.2-5 5v54.4l3.7-2.5c1.5-.9 3.3-.9 4.7.1l5.6 4.2 5.6-4.2c1.4-1.1 3.4-1.1 4.8 0l5.6 4.2 5.6-4.2c1.4-1.1 3.4-1.1 4.8 0l5.6 4.2 5.6-4.2c1.4-1 3.2-1.1 4.6-.1l3.7 2.5V22c.1-2.8-2.1-5-4.9-5zM53 49c1.7 0 3 1.3 3 3s-1.3 3-3 3H33c-1.7 0-3-1.3-3-3s1.3-3 3-3h20zm10-16c1.7 0 3 1.3 3 3s-1.3 3-3 3H33c-1.7 0-3-1.3-3-3s1.3-3 3-3h30z"/>',
  'PaperOutlinedIcon',
);
`},52031:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M27 36v-7c0-11.6 9.4-21 21-21s21 9.4 21 21v7h1c6.1 0 11 4.9 11 11v30c0 6.1-4.9 11-11 11H26c-6.1 0-11-4.9-11-11V47c0-6.1 4.9-11 11-11h1zm6 0h30v-7c0-8.3-6.7-15-15-15s-15 6.7-15 15v7zM21 47v30c0 2.8 2.2 5 5 5h44c2.8 0 5-2.2 5-5V47c0-2.8-2.2-5-5-5H26c-2.8 0-5 2.2-5 5z"/>',
  'PasswordOutlinedIcon',
);
`},83758:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M68.3 56.5c9.1 3.3 13.8 13.2 10.8 22.3l-.3.8C75.6 88.5 64.8 93 56.4 90l-4-1.5h-.1c-12.8-5.9-24.4-16.6-30-27.8-6.7-13.2-8.4-30.3-3.5-43.9C22.4 7.1 32.2 2.7 41.7 6.2c9.3 3.4 14 13.6 10.6 22.9-2.4 6.5-8.2 10.5-14.9 11 .8 3.8 2.1 7.6 3.9 11.2C43.4 55.4 46 59 49 62c4.7-5.7 12.1-8.1 19.3-5.5z"/>',
  'PhoneFilledIcon',
);
`},32443:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M42.7 9.1c8.5 3.1 12.9 12.7 9.8 21.3-2.2 6.1-7.5 9.8-13.7 10.3.7 3.5 1.9 7.1 3.6 10.4 1.9 3.8 4.3 7.2 7.1 10 4.3-5.3 11.2-7.5 17.7-5.1 8.4 3.1 12.7 12.3 10 20.8l-.3.8c-3 8.2-12.9 12.5-20.6 9.7l-3.7-1.4h-.1c-11.9-5.7-22.5-15.7-27.7-26-6.1-12.3-7.8-28.2-3.2-40.8 3.3-9.1 12.3-13.2 21.1-10zm-2.1 5.6c-5.7-2.1-11.3.5-13.4 6.4-3.9 10.7-2.6 24.9 2.9 36.1 4.5 9 13.9 17.9 24.3 22.9l.4.2 3.5 1.3c4.7 1.7 10.9-1.1 12.8-5.8l.1-.2.2-.7.1-.2c1.6-5.3-1.1-10.9-6.2-12.9l-.3-.1c-3.9-1.4-8-.3-10.8 3l-.2.2c-2.2 2.8-6.4 3-8.9.5-3.2-3.2-6-7.2-8.2-11.6C35 50 33.7 46 32.8 42c-.7-3.5 1.7-6.8 5.2-7.2h.2c4-.3 7.2-2.6 8.5-6.3 2-5.4-.7-11.4-6-13.5l-.1-.3z"/>',
  'PhoneOutlinedIcon',
);
`},96837:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M88 51.9V72c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11h58c6.1 0 11 4.9 11 11v27.9zm-6-7V24c0-2.8-2.2-5-5-5H19c-2.8 0-5 2.2-5 5v32.3c1.3-.2 2.7-.3 4-.3 6.2 0 12.1 2.1 16.9 5.9.1.1.2.2.3.2C40 49.5 52.2 41 66 41c6.2 0 11.9 1.6 16 3.9zm0 7.7c-.5-.8-2-2-4.1-3.1C74.7 48 70.6 47 66 47c-11.4 0-21.5 7.2-25.4 17.7-.3.7-.7 1.9-1.3 3.6-.7 2-3.2 2.6-4.8 1.2-1.5-1.4-2.7-2.3-3.4-2.9-3.7-3-8.3-4.6-13.1-4.6-1.4 0-2.7.1-4 .4V72c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V52.6zM30 45c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-6c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z"/>',
  'PictureOutlinedIcon',
);
`},15013:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm-7.7 17c.6 0 1.2.2 1.7.5l23.4 13.8c1.6.9 2.1 2.9 1.1 4.5-.3.5-.7.8-1.1 1.1L42 64.5c-1.6.9-3.6.4-4.5-1.1-.3-.5-.5-1.1-.5-1.7V34.2c0-1.7 1.5-3.2 3.3-3.2z"/>',
  'PlayCircleOutlinedIcon',
);
`},14033:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 9c21.5 0 39 17.5 39 39S69.5 87 48 87 9 69.5 9 48 26.5 9 48 9zm0 9c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm-8.7 14c.6 0 1.2.2 1.7.4l23.4 13.3c1.6.9 2.1 2.8 1.1 4.3-.3.4-.7.8-1.1 1.1L41 64.6c-1.6.9-3.6.4-4.5-1.1-.3-.5-.5-1.1-.5-1.7V35.2c0-1.8 1.5-3.2 3.3-3.2z"/>',
  'PlayCircleOutlinedBoldIcon',
);
`},61782:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M61.2 11.6c.1.1.1.2.2.3l2.7 5.3c.7 1.4 2.2 2.2 3.7 2.2l5.9-.3c2.2-.1 4.1 1.6 4.2 3.8v.4l-.3 5.9c-.1 1.6.8 3 2.2 3.7l5.3 2.7c2 1 2.7 3.4 1.7 5.4-.1.1-.1.2-.2.3l-3.2 5c-.8 1.3-.8 3 0 4.3l3.2 5c1.2 1.9.7 4.3-1.2 5.5-.1.1-.2.1-.3.2L79.8 64c-1.4.7-2.2 2.2-2.2 3.7l.3 5.9c.1 2.2-1.6 4.1-3.8 4.2h-.4l-5.9-.3c-1.6-.1-3 .8-3.7 2.2L61.4 85c-1 2-3.4 2.7-5.4 1.7-.1-.1-.2-.1-.3-.2l-5-3.2c-1.3-.8-3-.8-4.3 0l-5 3.2c-1.9 1.2-4.3.7-5.5-1.2-.1-.1-.1-.2-.2-.3L33 79.7c-.7-1.4-2.2-2.2-3.7-2.2l-5.9.3c-2.2.1-4.1-1.6-4.2-3.8v-.4l.3-5.9c.1-1.6-.8-3-2.2-3.7L12 61.4c-2-1-2.7-3.4-1.7-5.4.1-.1.1-.2.2-.3l3.2-5c.8-1.3.8-3 0-4.3l-3.2-5c-1.2-1.9-.7-4.3 1.2-5.5.1-.1.2-.1.3-.2l5.3-2.7c1.4-.7 2.2-2.2 2.2-3.7l-.3-5.9c-.1-2.2 1.6-4.1 3.8-4.2h.4l5.9.3c1.6.1 3-.8 3.7-2.2l2.7-5.3c1-2 3.4-2.7 5.4-1.7.1.1.2.1.3.2l5 3.2c1.3.8 3 .8 4.3 0l5-3.2c1.8-1.3 4.3-.7 5.5 1.1zm-3.7 40.9c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.3-5-5-5zm3-16C59 35 56.6 35 55 36.4l-.2.2-18.3 18.2c-1.6 1.6-1.6 4.1 0 5.6 1.5 1.6 3.9 1.6 5.5.2l.2-.2 18.3-18.3c1.5-1.5 1.5-4 0-5.6zm-21-2c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"/>',
  'PreferentialEventFilledIcon',
);
`},43636:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M34.4 11c11.2 0 20.3 9.1 20.4 20.3.8-.1 1.7-.1 2.5-.1C72 31.2 84 43.3 84 58.1S72 85 57.2 85h-7.3c-1.7 0-3-1.3-3-3s1.3-3 3-3h7.3C68.7 79 78 69.6 78 58.1s-9.3-20.9-20.8-20.9c-1.7 0-3.4.2-5.1.6-2.1.5-4.1-1.3-3.7-3.5.2-.9.3-1.9.3-2.9 0-8-6.4-14.5-14.4-14.5S20 23.5 20 31.5V49c0 1.7-1.3 3-3 3s-3-1.3-3-3V31.5C14 20.2 23.1 11 34.4 11zM17 60c1.7 0 3 1.3 3 3l.2 16H36c1.7 0 3 1.3 3 3s-1.3 3-3 3H17.2c-1.6 0-3-1.3-3-3L14 63c0-1.6 1.3-3 3-3z"/>',
  'PublicWelfareOutlinedIcon',
);
`},67632:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88c-7.3 0-14.4-2-20.5-5.7-.2-.1-.9-.5-1.9-1.1l-9.8 2.7c-2.2.6-4.3-1.4-3.7-3.7l2.7-9.8c-1-1.8-1.7-2.9-2-3.6C9.6 61.1 8 54.7 8 48 8 25.9 25.9 8 48 8zm0 55c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-.2-35c-4.5 0-8.7 2.3-11.1 5.9-.6 1-1.1 2-1.5 3.1-.5 1.6.4 3.3 1.9 3.8 1.6.5 3.3-.4 3.8-1.9.2-.6.5-1.1.8-1.7 1.3-2 3.6-3.2 6.1-3.2 4 0 7.2 3.1 7.2 7s-3.2 7-7.2 7c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3s3-1.3 3-3v-3.3C56.6 52.3 61 47.2 61 41c0-7.2-5.9-13-13.2-13z"/>',
  'QAFilledIcon',
);
`},40197:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M85 62c1.7 0 3 1.3 3 3v12c0 6.1-4.9 11-11 11H66c-1.7 0-3-1.3-3-3s1.3-3 3-3h11c2.8 0 5-2.2 5-5V65c0-1.7 1.3-3 3-3zm-74 0c1.7 0 3 1.3 3 3v12c0 2.8 2.2 5 5 5h11c1.7 0 3 1.3 3 3s-1.3 3-3 3H19c-6.1 0-11-4.9-11-11V65c0-1.7 1.3-3 3-3zm51-2c1.7 0 3 1.3 3 3v5h5c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3zm-36 0c1.7 0 3 1.3 3 3v5h5c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3zm22 0c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5h-5c-1.6 0-2.9-1.2-3-2.8V63c0-1.7 1.3-3 3-3h8zm22-18c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5h-5c-1.6 0-2.9-1.2-3-2.8V45c0-1.7 1.3-3 3-3h8zM44 22c3.9 0 7 3.1 7 7v14c0 3.9-3.1 7-7 7H30c-3.9 0-7-3.1-7-7V29c0-3.9 3.1-7 7-7h14zm0 6H30c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V29c0-.6-.4-1-1-1zm18-6c1.7 0 3 1.3 3 3v5h5c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3zM77 8c6.1 0 11 4.9 11 11v12c0 1.7-1.3 3-3 3s-3-1.3-3-3V19c0-2.8-2.2-5-5-5H66c-1.7 0-3-1.3-3-3s1.3-3 3-3h11zM30 8c1.7 0 3 1.3 3 3s-1.3 3-3 3H19c-2.8 0-5 2.2-5 5v12c0 1.7-1.3 3-3 3s-3-1.3-3-3V19c0-6.1 4.9-11 11-11h11z"/>',
  'QRCodeOutlinedIcon',
);
`},21093:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M29.4 20c-3.4 0-6.2 1.2-8.6 3.1-2.2 2.1-3.4 5.1-3.4 8.6s1.2 6.2 3.4 8.2C23.2 42 26 43 29.6 43h.6c1.1 0 1.9-.1 2.6-.4-.8 10.3-6.4 18.6-16.8 25l5.2 8.4C36.4 68.2 44 55.8 44 38.9 44 26.4 39.2 20 29.4 20zm36.2 0c-3.4 0-6.4 1.2-8.8 3.1-2.2 2.1-3.4 5.1-3.4 8.6s1.2 6.2 3.4 8.2c2.4 2.1 5.4 3.1 8.8 3.1h.6c1.1 0 1.9-.1 2.6-.4-.6 10.3-6.2 18.6-16.8 25l5.4 8.4C72.6 68.2 80 55.8 80 38.9 80 26.4 75.2 20 65.6 20z"/>',
  'QuoteEndIcon',
);
`},89863:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M66.6 76c3.4 0 6.2-1.2 8.6-3.1 2.2-2.1 3.4-5.1 3.4-8.6s-1.2-6.2-3.4-8.2C72.8 54 70 53 66.4 53c-1.4 0-2.4 0-3.2.4.8-10.3 6.4-18.6 16.8-25L74.8 20C59.6 27.8 52 40.2 52 57.1 52 69.6 56.8 76 66.6 76zm-36.2 0c3.4 0 6.4-1.2 8.8-3.1 2.2-2.1 3.4-5.1 3.4-8.6s-1.2-6.2-3.4-8.2C36.8 54 33.8 53 30.4 53c-1.4 0-2.4 0-3.2.4.6-10.3 6.2-18.7 16.8-25.1L38.6 20C23.4 27.8 16 40.2 16 57.1 16 69.6 20.8 76 30.4 76z"/>',
  'QuoteStartIcon',
);
`},916:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zM36.1 31.7c1.3-1.1 3.2-.9 4.2.4l7.7 9.2 7.7-9.2c1.1-1.3 3-1.4 4.2-.4 1.3 1.1 1.4 3 .4 4.2L53.6 44H58c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-6.5v4H58c1.6 0 2.9 1.2 3 2.8v.2c0 1.7-1.3 3-3 3h-6.5v4c0 1.6-1.2 2.9-2.8 3h-.2c-1.7 0-3-1.3-3-3v-4H38c-1.6 0-2.9-1.2-3-2.8V57c0-1.7 1.3-3 3-3h7.5v-4H38c-1.6 0-2.9-1.2-3-2.8V47c0-1.7 1.3-3 3-3h4.4l-6.7-8.1c-1-1.2-.9-3 .2-4.1l.2-.1z"/>',
  'RMBCircleOutlinedIcon',
);
`},9982:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M45.5 53v-4H38c-1.7 0-3-1.3-3-3s1.3-3 3-3h4.4l-6.7-8.1c-1.1-1.3-.9-3.2.4-4.2 1.3-1.1 3.2-.9 4.2.4l7.7 9.2 7.7-9.2c1.1-1.3 3-1.4 4.2-.4 1.3 1.1 1.4 3 .4 4.2L53.6 43H58c1.7 0 3 1.3 3 3s-1.3 3-3 3h-6.5v4H58c1.7 0 3 1.3 3 3s-1.3 3-3 3h-6.5v4c0 1.7-1.3 3-3 3s-3-1.3-3-3v-4H38c-1.7 0-3-1.3-3-3s1.3-3 3-3h7.5zm31.6-8.6 4.9 2.7C81.5 28.7 66.5 14 48 14c-18.8 0-34 15.2-34 34s15.2 34 34 34c11.5 0 22-5.7 28.3-15.1.9-1.4 2.8-1.7 4.2-.8 1.4.9 1.7 2.8.8 4.2C73.9 81.2 61.5 88 48 88 25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40c0 1-.1 2.5-.2 4.4-.2 2.2-2.6 3.4-4.5 2.4l-9.1-5.1c-1.4-.8-2-2.6-1.1-4.1.7-1.5 2.6-2.1 4-1.2z"/>',
  'RMBRefundOutlinedIcon',
);
`},90325:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M28 48a20 20 0 1 0 40 0 20 20 0 1 0-40 0"/>',
  'RadioCheckedFilledIcon',
);
`},70545:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M58.2 13c4.3 0 7.8 3.5 7.8 7.8v.4l-.5 9.6h14.7c.3 0 .7 0 1 .1l.3.1c4.2.7 7 4.7 6.2 9l-7.1 36.9c-.6 3.5-3.8 6.1-7.4 6.1H22.8c-3.8 0-7.1-2.8-7.7-6.6L8.7 33.3c-.6-4.2 2.3-8.2 6.5-8.8.4-.1.8-.1 1.2-.1h13.9l-.3-3.2c-.2-4.2 3-7.8 7.2-8.2h21zm-28 17.4H16.1c-1 .1-1.6 1-1.5 2l6.5 43.1c.1.9.9 1.5 1.7 1.5h10l-.7-14.2-1.9-32.4zm28-11.4H37.7c-1 0-1.7.8-1.7 1.7v.1l2.1 41.4L39 77h18.2L60 20.9v-.1c0-1-.8-1.8-1.8-1.8zm22 17.8H65.8L63.2 77h9.9c.8 0 1.5-.6 1.6-1.5l7-36.7c.2-1-.5-1.9-1.4-2h-.1z"/>',
  'RankingOutlinedIcon',
);
`},24253:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77.1 44.4c-1.4-.8-3.3-.3-4.1 1.1-.8 1.4-.3 3.3 1.1 4.1l9.1 5.1c1.9 1.1 4.3-.2 4.5-2.4.2-1.8.3-3.3.3-4.3C88 25.9 70.1 8 48 8S8 25.9 8 48s17.9 40 40 40c13.5 0 25.9-6.8 33.3-17.8.9-1.4.6-3.2-.8-4.2-1.4-.9-3.2-.6-4.2.8C70 76.3 59.5 82 48 82c-18.8 0-34-15.2-34-34s15.2-34 34-34c18.5 0 33.5 14.7 34 33.1l-4.9-2.7z"/>',
  'RefreshOutlinedIcon',
);
`},87430:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M14 87c-1.7 0-3-1.3-3-3 0-1.6 1.2-2.9 2.8-3H17V54c0-16.9 13.6-30.7 30.5-31h.5c16.9 0 30.7 13.6 31 30.5V81h3c1.7 0 3 1.3 3 3 0 1.6-1.2 2.9-2.8 3H14zm34-58c-13.7 0-24.8 11-25 24.6V81h50V54c0-13.5-10.8-24.6-24.2-25H48zm21.1-18.3c1.2-1 3-1 4.1.1 1.1 1.1 1.2 2.9.1 4.1l-.1.1-4.2 4.3-.1.1c-1.2 1-3 1-4.1-.1-1.1-1.1-1.2-2.9-.1-4.1l.1-.1 4.2-4.2.1-.2zm-42.2 0 .1.1 4.2 4.2c1.2 1.2 1.2 3.1 0 4.2-1.1 1.1-2.9 1.2-4.1.1H27L22.8 15c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.2 2.9-1.2 4.1-.1zm21-4.7c1.6 0 2.9 1.2 3 2.8l.1.2.1 6c0 1.7-1.3 3-3 3-1.6 0-2.9-1.2-3-2.8V15L45 9c0-1.6 1.3-3 2.9-3z"/>',
  'ReportOutlinedIcon',
);
`},6157:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M28 10c1.7 0 3 1.3 3 3 0 1.6-1.2 2.9-2.8 3H21c-2.7 0-4.9 2.1-5 4.8V75c0 2.7 2.1 4.9 4.8 5H75c2.7 0 4.9-2.1 5-4.8V21c0-2.7-2.1-4.9-4.8-5H68c-1.7 0-3-1.3-3-3 0-1.6 1.2-2.9 2.8-3H75c6 0 10.8 4.8 11 10.7V75c0 6-4.8 10.8-10.7 11H21c-6 0-10.8-4.8-11-10.7V21c0-6 4.8-10.8 10.7-11H28zm20.3 0c1.6 0 2.9 1.3 3 2.8v.2L51 56.9l9-9c1.1-1.1 2.9-1.2 4.1-.1l.1.1c1.1 1.1 1.2 2.9.1 4.1l-.1.1-14.1 14.2c-1.1 1.1-2.9 1.2-4.1.1l-.1-.1-14.2-14.2c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.1 2.9-1.2 4.1-.1l.1.1 9 9 .4-43.9c0-1.7 1.3-3 3-3z"/>',
  'SaveOutlinedIcon',
);
`},91492:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M65 16c-1.7 0-3-1.3-3-3s1.3-3 3-3h14c3.9 0 7 3.1 7 7v14c0 1.7-1.3 3-3 3s-3-1.3-3-3V17c0-.6-.4-1-1-1H65zm15 49c0-1.7 1.3-3 3-3s3 1.3 3 3v14c0 3.9-3.1 7-7 7H65c-1.7 0-3-1.3-3-3s1.3-3 3-3h14c.6 0 1-.4 1-1V65zM31 80c1.7 0 3 1.3 3 3s-1.3 3-3 3H17c-3.9 0-7-3.1-7-7V65c0-1.7 1.3-3 3-3s3 1.3 3 3v14c0 .6.4 1 1 1h14zM16 31c0 1.7-1.3 3-3 3s-3-1.3-3-3V17c0-3.9 3.1-7 7-7h14c1.7 0 3 1.3 3 3s-1.3 3-3 3H17c-.6 0-1 .4-1 1v14zm59 14c1.7 0 3 1.3 3 3s-1.3 3-3 3H21c-1.7 0-3-1.3-3-3s1.3-3 3-3h54z"/>',
  'ScanOutlinedIcon',
);
`},55988:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M46.629 3c24.095 0 43.628 19.5 43.628 43.555a43.352 43.352 0 0 1-9.952 27.693l11.406 11.306a4.35 4.35 0 0 1 .022 6.16 4.368 4.368 0 0 1-6.17.021L71.816 78.108a4.343 4.343 0 0 1-1.263-3.567 4.36 4.36 0 0 1 1.168-3.766c6.256-6.458 9.81-15.054 9.81-24.22 0-19.244-15.626-34.844-34.902-34.844-19.277 0-34.903 15.6-34.903 34.844S27.352 81.4 46.629 81.4c3.98 0 7.862-.664 11.535-1.947a4.365 4.365 0 0 1 5.559 2.672 4.354 4.354 0 0 1-2.677 5.55 43.634 43.634 0 0 1-14.417 2.436C22.533 90.11 3 70.61 3 46.555 3 22.5 22.533 3 46.629 3Z"/>',
  'SearchGapOutlinedIcon',
);
`},74516:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M46.3 8c21.2 0 38.3 17.1 38.3 38.3 0 9.7-3.6 18.5-9.5 25.2l12.1 12.1c1 1 1 2.6 0 3.6s-2.6 1-3.6 0l-12-12.1C64.8 81 56 84.6 46.3 84.6 25.1 84.6 8 67.5 8 46.3S25.1 8 46.3 8zm0 6C28.5 14 14 28.5 14 46.3s14.4 32.3 32.3 32.3 32.3-14.4 32.3-32.3S64.1 14 46.3 14z"/>',
  'SearchOutlinedIcon',
);
`},40860:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m88.5 51.8-17.1 31c-1.2 2.2-3.5 3.6-6.1 3.6h-34c-2.5 0-4.8-1.4-6.1-3.6l-17.1-31c-1.2-2.1-1.2-4.7 0-6.8l17.1-31c1.2-2.2 3.5-3.6 6.1-3.6h34c2.5 0 4.8 1.4 6.1 3.6l17.1 31c1.2 2.1 1.2 4.7 0 6.8zm-5.2-2.9c.2-.3.2-.7 0-1l-17.1-31c-.2-.3-.5-.5-.9-.5H31.5c-.4 0-.7.2-.9.5l-17.1 31c-.2.3-.2.7 0 1l17.1 31c.2.3.5.5.9.5h33.9c.4 0 .7-.2.9-.5l17-31zM48.2 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-6c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.4 10 10 10z"/>',
  'SettingsOutlinedIcon',
);
`},75014:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M74.707 7.75A13.533 13.533 0 0 1 88.25 21.304v53.404A13.514 13.514 0 0 1 74.71 88.25h-53.4A13.535 13.535 0 0 1 7.75 74.708V21.304A13.556 13.556 0 0 1 21.31 7.753h.02l3.697.025a2.873 2.873 0 0 1-.02 5.746h-.02l-3.686-.027a7.814 7.814 0 0 0-7.805 7.807v9.454l.01.003 68.999.002v-9.46a7.774 7.774 0 0 0-2.278-5.524 7.743 7.743 0 0 0-5.515-2.289h-3.605a2.869 2.869 0 1 1-.003-5.737ZM13.506 36.507h-.01v38.2c0 2.086.815 4.041 2.29 5.516a7.76 7.76 0 0 0 5.525 2.281h53.4a7.737 7.737 0 0 0 5.513-2.281 7.74 7.74 0 0 0 2.28-5.515V36.509l-68.998-.002Zm46.955 6.205c1.094 0 2.092.613 2.576 1.58a2.805 2.805 0 0 1-.296 2.98c-.014.016-.715.927-1.755 2.477l-.256.384a72.424 72.424 0 0 0-3.528 5.927c-1.583 2.98-2.84 5.884-3.736 8.633-1.09 3.341-1.642 6.444-1.642 9.222 0 1.566-1.286 2.835-2.872 2.835-1.586 0-2.871-1.27-2.871-2.835 0-3.386.652-7.093 1.937-11.019 1.005-3.068 2.4-6.286 4.148-9.564a77.957 77.957 0 0 1 2.88-4.95h-17.59c-1.587 0-2.873-1.27-2.873-2.835 0-1.566 1.286-2.835 2.872-2.835ZM40.327 5.833c1.586 0 2.872 1.27 2.872 2.835v5.675c0 .752-.303 1.473-.842 2.004a2.89 2.89 0 0 1-2.03.83c-1.586 0-2.872-1.269-2.872-2.834V8.668c0-1.565 1.286-2.835 2.872-2.835Zm17.263 0c1.586 0 2.871 1.27 2.871 2.835v5.675c0 .752-.302 1.473-.84 2.004a2.89 2.89 0 0 1-2.031.83c-1.586 0-2.872-1.269-2.872-2.834V8.668c0-1.565 1.286-2.835 2.872-2.835Z"/>',
  'SevenDayCalendarIcon',
);
`},65109:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47 12c1.7 0 3 1.3 3 3s-1.3 3-3 3H24c-5 0-9 4-9 9v42c0 5 4 9 9 9h48c5 0 9-4 9-9V49c0-1.7 1.3-3 3-3s3 1.3 3 3v20c0 8.3-6.7 15-15 15H24c-8.3 0-15-6.7-15-15V27c0-8.3 6.7-15 15-15h23zm27.1.9 12 12c1.9 1.9.6 5.1-2.1 5.1h-7.9C61.8 30 50 41 49 55.2c-.1 1.7-1.6 2.9-3.2 2.8-1.7-.1-2.9-1.6-2.8-3.2C44.2 37.4 58.7 24 76.1 24h.7l-6.9-6.9c-1.1-1.1-1.2-2.9-.1-4.1l.1-.1c1.1-1.2 3-1.2 4.2 0z"/>',
  'ShareIcon',
);
`},39972:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M34 76c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm32 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zM13.8 11l.1.2 3.3 11.5c.4-.2.8-.3 1.2-.5.6-.2 1.2-.2 1.8-.2h59.5c3.9 0 7 3.1 7 7 0 .6-.1 1.2-.2 1.8l-9.8 36c-.8 3-3.6 5.2-6.8 5.2H30.1c-3.2 0-5.9-2.1-6.8-5.2l-6.9-25.4c-.1-.1-.2-.3-.2-.5l-.1-.2-8-28c-.5-1.6.5-3.3 2.1-3.7 1.5-.3 3.1.5 3.6 2zm66 17H19.9c-.5.1-.8.7-.7 1.2l9.8 36c.1.4.5.7 1 .7h39.9c.5 0 .8-.3 1-.7l9.8-36v-.3c.1-.5-.4-.9-.9-.9zM63 52c1.7 0 3 1.3 3 3 0 1.6-1.2 2.9-2.8 3H37c-1.7 0-3-1.3-3-3 0-1.6 1.2-2.9 2.8-3H63z"/>',
  'ShoppingCartOutlinedIcon',
);
`},34239:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c3.1 0 6.1.4 9 1v27c-2.5-1.9-5.6-3-9-3-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15V11c14.7 5.8 25 20.2 25 37 0 22.1-17.9 40-40 40S8 70.1 8 48 25.9 8 48 8z"/>',
  'ShowFilledIcon',
);
`},7839:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M57 36c3.6 2.7 6 7.1 6 12 0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15c3.4 0 6.5 1.1 9 3V17c0-1.7 1.3-3 3-3s3 1.3 3 3v31c0 1.7-1.3 3-3 3s-3-1.3-3-3V36zM48 8c1.7 0 3 1.3 3 3s-1.3 3-3 3c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34c0-5.5-1.3-10.8-3.8-15.6-.8-1.5-.2-3.3 1.3-4 1.5-.8 3.3-.2 4 1.3 3 5.6 4.5 11.8 4.5 18.3 0 22.1-17.9 40-40 40S8 70.1 8 48 25.9 8 48 8zm0 49c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9zm20-31c-5.8 0-11-4-11-9s5.2-9 11-9c5.9 0 11 3.8 11 9s-5.1 9-11 9zm0-6c2.9 0 5-1.6 5-3s-2.1-3-5-3c-2.8 0-5 1.7-5 3s2.2 3 5 3z"/>',
  'ShowOutlinedIcon',
);
`},24861:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm13.4 46.7c-2.5 5-7.6 8.3-13.4 8.3-5.8 0-10.9-3.3-13.4-8.3-.7-1.5-2.5-2.1-4-1.4-1.5.7-2.1 2.5-1.4 4C32.7 64.4 39.9 69 48 69c8.1 0 15.3-4.6 18.8-11.7.7-1.5.1-3.3-1.4-4-1.4-.7-3.2-.1-4 1.4z"/>',
  'SmileFilledIcon',
);
`},83829:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40zm0-6c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48s15.2 34 34 34zM34.6 64.2c-1.3-1.1-1.4-3-.4-4.2 1.1-1.3 3-1.4 4.2-.4 2.7 2.2 6 3.5 9.6 3.5 3.6 0 6.9-1.2 9.6-3.5 1.3-1.1 3.2-.9 4.2.4 1.1 1.3.9 3.2-.4 4.2C57.7 67.3 53 69 48 69s-9.7-1.7-13.4-4.8z"/>',
  'SmileOutlinedIcon',
);
`},11634:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M54.39 79.455V2.27a2.27 2.27 0 0 1 .634-1.615c.415-.427.98-.663 1.567-.654h5.224a2.16 2.16 0 0 1 1.573.65c.418.424.654 1.005.654 1.61v54.877c0 1.245.976 2.26 2.184 2.26h9.635c.795.02 1.518.483 1.888 1.209a2.32 2.32 0 0 1-.106 2.288L58.372 90.208a2.132 2.132 0 0 1-2.44.841c-.905-.302-1.513-1.176-1.5-2.156l-.034-9.438h-.009Zm-12.762-62.91V93.74c0 .6-.231 1.174-.642 1.598a2.16 2.16 0 0 1-1.55.662h-5.157a2.135 2.135 0 0 1-1.558-.654 2.27 2.27 0 0 1-.634-1.606V38.863c0-1.248-.982-2.26-2.193-2.26H20.26a2.18 2.18 0 0 1-1.979-1.154 2.32 2.32 0 0 1 .078-2.342l19.27-27.315a2.157 2.157 0 0 1 2.452-.835c.906.3 1.521 1.169 1.522 2.15l.026 9.438Z"/>',
  'SortIcon',
);
`},73220:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm2 12.4c1.2.5 2.2 1.5 2.7 2.8l3.5 8.6 9.1.7c2.8.2 4.9 2.7 4.7 5.5-.1 1.3-.7 2.6-1.8 3.5l-6.9 6.1 2.1 9.1c.6 2.8-1 5.5-3.8 6.2-1.3.3-2.7.1-3.9-.6L48 63.4l-7.7 4.8c-2.4 1.5-5.6.7-7.1-1.7-.7-1.2-.9-2.5-.6-3.8l2.1-9.1-6.9-6.1c-2.1-1.8-2.4-5.1-.6-7.2.9-1 2.1-1.7 3.5-1.8l9.1-.7 3.5-8.6c1-2.6 4.1-3.9 6.7-2.8zm-2 7.1-2.9 7c-.7 1.8-2.4 3-4.3 3.2l-7.6.6 5.8 5.1c1.4 1.3 2.1 3.2 1.6 5.1L38.9 62l6.4-4c1.6-1 3.7-1 5.4 0l6.4 4-1.8-7.5c-.4-1.9.2-3.8 1.6-5.1l5.8-5.1-7.6-.6c-1.9-.2-3.6-1.4-4.3-3.2l-2.8-7z"/>',
  'StarCircleOutlinedIcon',
);
`},55367:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M31.4 85.9c-3.4 2.1-7.8 1-9.8-2.4-1-1.6-1.3-3.5-.8-5.4l4.4-18.6c.1-.4 0-.9-.4-1.2L10.5 45.9c-3-2.6-3.3-7.1-.8-10.1 1.2-1.5 3-2.4 4.8-2.5l18.7-1.5c.4 0 .8-.3.9-.7l7.2-17.6c1.5-3.7 5.7-5.4 9.3-3.9 1.7.7 3.1 2.1 3.8 3.9l7.2 17.6c.2.4.5.7.9.7l18.7 1.5c3.9.3 6.8 3.8 6.5 7.7-.1 1.9-1 3.6-2.4 4.9l-14 12.5c-.3.3-.5.8-.4 1.2l4.4 18.6c.9 3.8-1.4 7.7-5.3 8.6-1.8.4-3.8.1-5.4-.9l-16-10c-.3-.2-.8-.2-1.1 0l-16.1 10z"/>',
  'StarFilledIcon',
);
`},14318:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47.4 70 26.3 84.6c-.9.6-2.2.4-2.8-.5-.3-.5-.4-1.1-.3-1.7l7.5-24.5c.1-.4 0-.8-.4-1.1L9.8 41.3c-.9-.7-1.1-1.9-.4-2.8.4-.5.9-.8 1.6-.8l25.8-.5c.4 0 .8-.3.9-.7l8.5-24.2c.4-1 1.5-1.6 2.5-1.2.6.2 1 .7 1.2 1.2l8.5 24.2c.1.4.5.7.9.7l25.7.5c1.1 0 2 .9 2 2 0 .6-.3 1.2-.8 1.5L65.7 56.8c-.3.3-.5.7-.4 1.1l7.5 24.5c.3 1.1-.3 2.2-1.3 2.5-.6.2-1.2.1-1.7-.3L48.6 70c-.4-.2-.8-.2-1.2 0z"/>',
  'StarFilledSharpIcon',
);
`},25701:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M31.4 85.9c-3.4 2.1-7.8 1-9.8-2.4-1-1.6-1.3-3.5-.8-5.4l4.4-18.6c.1-.4 0-.9-.4-1.2L10.5 45.9c-3-2.6-3.3-7.1-.8-10.1 1.2-1.5 3-2.4 4.8-2.5l18.7-1.5c.4 0 .8-.3.9-.7l7.2-17.6c1.5-3.7 5.7-5.4 9.3-3.9 1.7.7 3.1 2.1 3.8 3.9l7.2 17.6c.2.4.5.7.9.7l18.7 1.5c3.9.3 6.8 3.8 6.5 7.7-.1 1.9-1 3.6-2.4 4.9l-14 12.5c-.3.3-.5.8-.4 1.2l4.4 18.6c.9 3.8-1.4 7.7-5.3 8.6-1.8.4-3.8.1-5.4-.9l-16-10c-.3-.2-.8-.2-1.1 0l-16.1 10zm20.3-15 16 10c.3.1.6.1.9.1.6-.1 1-.8.8-1.4L65 60.9c-.6-2.6.3-5.3 2.3-7.1l14.3-12.4c.2-.2.4-.5.4-.8.1-.7-.4-1.2-1-1.3l-18.7-1.5c-2.7-.2-5-1.9-6-4.4L49 15.7c-.1-.3-.3-.5-.6-.6-.6-.2-1.2 0-1.4.6l-7.2 17.6c-1 2.5-3.3 4.2-6 4.4L15 39.3c-.3 0-.6.2-.7.4-.4.5-.4 1.3.1 1.7l14.3 12.4c2 1.8 2.9 4.5 2.3 7.1l-4.4 18.6c-.1.3 0 .7.1.9.3.5 1 .7 1.5.4l16-10c2.4-1.3 5.2-1.3 7.5.1z"/>',
  'StarOutlinedIcon',
);
`},86547:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M72 0c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H24C10.745 96 0 85.255 0 72V24C0 10.745 10.745 0 24 0h48ZM50.17 11.417a5.04 5.04 0 0 0-6.462 1.966l-.242.455-7.274 15.497a5.04 5.04 0 0 1-3.257 2.726l-.544.114-16.667 2.547a5.04 5.04 0 0 0-3.208 8.088l.362.414 12.374 12.682a5.04 5.04 0 0 1 1.428 3.739l-.061.592-2.877 17.638a5.04 5.04 0 0 0 6.917 5.462l.495-.24 14.436-7.98a5.04 5.04 0 0 1 4.36-.248l.516.248 14.436 7.98a5.04 5.04 0 0 0 7.47-4.71l-.057-.512-2.877-17.638a5.04 5.04 0 0 1 .976-3.88l.39-.45 12.374-12.683a5.04 5.04 0 0 0-2.34-8.399l-.506-.103-16.667-2.547a5.04 5.04 0 0 1-3.537-2.35l-.264-.49-7.273-15.497a5.04 5.04 0 0 0-2.421-2.42Z"/>',
  'StarRoundedFilledIcon',
);
`},48363:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M68.7 80H27.3c-1.8 0-3.3-1.8-3.3-4s1.5-4 3.3-4h41.4c1.8 0 3.3 1.8 3.3 4s-1.5 4-3.3 4m15.4-26.7c-1 .1-1.9.2-2.9.2-5.2 0-10.3-1.7-14.4-4.7-1.3-1-3.1-1-4.4 0-4.1 3.1-9.2 4.8-14.4 4.7-5.2 0-10.3-1.7-14.4-4.7-1.3-1-3.1-1-4.4 0-4.9 3.6-11.2 5.2-17.3 4.5-1-.1-2 .2-2.7.8S8 55.7 8 56.6v28.6C8 89 11.1 92 14.9 92h66.3c3.8 0 6.9-3 6.9-6.8V56.6c-.1-2-1.9-3.5-4-3.3m10.6-28L87.1 9.9C85.2 6.3 81.6 4 77.7 4H18.3c-3.9 0-7.6 2.3-9.4 5.9L1.3 25.3c-4.2 10 2 21.8 12.6 22.7 5.9.5 11.6-2.3 14.9-7.3.6-1 1.7-1.5 2.8-1.5 1.1 0 2.2.6 2.8 1.5C37.5 45.2 42.6 48 48 48s10.5-2.8 13.5-7.4c.6-1 1.7-1.6 2.8-1.6s2.2.6 2.8 1.6c3.3 5 9 7.8 14.9 7.3 10.6-.8 16.9-12.6 12.7-22.6"/>',
  'StoreFilledIcon',
);
`},27607:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm17.1 27.9c-1.2-1.2-3.1-1.2-4.2 0L43 53.8l-7.9-7.9c-1.2-1.2-3.1-1.2-4.2 0s-1.2 3.1 0 4.2l10 10c1.2 1.2 3.1 1.2 4.2 0l20-20c1.2-1.2 1.2-3.1 0-4.2z"/>',
  'SuccessCircleFilledIcon',
);
`},19698:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm20.5 26.3c-1.9-1.8-5-1.7-6.9.1l-20 20-7.2-7.2c-1.9-1.9-5-1.9-6.9-.1s-2 4.8-.1 6.7l10.7 10.7c1.9 1.9 5.1 1.9 7 0L68.6 41c1.9-1.9 1.8-4.9-.1-6.7z"/>',
  'SuccessCircleFilledBoldIcon',
);
`},81061:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm17.1 21.9c1.2 1.2 1.2 3.1 0 4.2l-20 20c-1.2 1.2-3.1 1.2-4.2 0l-10-10c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.2 0l7.9 7.9 17.9-17.9c1.1-1.2 3-1.2 4.2 0z"/>',
  'SuccessCircleOutlinedIcon',
);
`},74703:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M21.1 43.9 39 61.8l34.9-34.9c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-37 37c-1.2 1.2-3.1 1.2-4.2 0l-20-20c-1.2-1.2-1.2-3.1 0-4.2s3-1.2 4.2 0z"/>',
  'SuccessFilledIcon',
);
`},887:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m28 44.7 12.3 12.1L68 29.4c1.8-1.8 4.8-1.8 6.6 0 1.8 1.8 1.8 4.7 0 6.5l-31 30.7c-1.8 1.8-4.8 1.8-6.6 0L21.4 51.3c-1.8-1.8-1.8-4.7 0-6.5 1.8-1.8 4.7-1.9 6.6-.1z"/>',
  'SuccessFilledBoldIcon',
);
`},17819:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m75.3 70.6 1.8 1.8c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0l-1.8-1.8c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.2 3-1.2 4.2 0zm-49.9 0c1.2 1.2 1.2 3.1 0 4.2l-1.8 1.8c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l1.8-1.8c1.2-1.2 3.1-1.2 4.2 0zM47.8 20c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28zm0 6c-12.2 0-22 9.8-22 22s9.8 22 22 22 22-9.8 22-22-9.9-22-22-22zM24 19.2l1.8 1.8c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0l-1.8-1.8c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.1 3-1.1 4.2 0zm52.8 0c1.2 1.2 1.2 3.1 0 4.2L75 25.2c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l1.8-1.8c1.1-1.1 3-1.1 4.2 0zM48.2 5c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3s-3-1.3-3-3V8c0-1.7 1.4-3 3-3zM91 47.8c0 1.7-1.3 3-3 3h-5c-1.7 0-3-1.3-3-3s1.3-3 3-3h5c1.7 0 3 1.3 3 3zm-75 0c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3s1.3-3 3-3h5c1.7 0 3 1.3 3 3zM48.2 80c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5c0-1.7 1.4-3 3-3z"/>',
  'SunOutlinedIcon',
);
`},31362:function(g,u){"use strict";u.Z=`.bui-svg-icon {
  display: inline-flex;
  flex-shrink: 0;
  user-select: none;
  width: 1em;
  height: 1em;
  background-size: cover;

  &.icon-size-small {
    font-size: 16px;
  }

  &.icon-size-medium {
    font-size: 20px;
  }

  &.icon-size-large {
    font-size: 24px;
  }
}

svg.bui-svg-icon {
  fill: currentcolor;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
`},60882:function(g,u){"use strict";u.Z=`import clsx from 'clsx';
import React from 'react';
import { ISvgIconProps } from '../../SvgIcon.types';
import './SvgIcon.less';

const classes = {
  root: 'bui-svg-icon',
};

export default function SvgIcon(props: ISvgIconProps) {
  const {
    className,
    children,
    component: Component = 'div',
    color,
    htmlColor,
    size,
    viewBox = '0 0 96 96',
    style,
    ...rest
  } = props;

  const colorMap = {
    default: '#959aa5',
    primary: '#ff335c',
    info: '#148aff',
    danger: '#ff335c',
    success: '#00d68f',
    warning: '#ff8533',
    disabled: '#ced1d6',
  };

  const svgColor = colorMap[color] || htmlColor || style?.color;

  if (
    Component !== 'svg' &&
    !svgColor &&
    typeof children === 'string' &&
    !/fill/.test(children)
  ) {
    console.warn(
      'Inherit Bui icon color is not available in Miniapp(<div>). You may need to specify one.',
    );
  }

  if (Component === 'svg') {
    if (typeof children === 'string') {
      // \u4F20\u5165string\uFF0Csvg dom\u6A21\u5F0F\uFF0C\u4F7F\u7528dangerouslySetInnerHTML
      return (
        <Component
          className={clsx(classes.root, className, {
            [\`icon-size-\${size}\`]: size,
          })}
          focusable="false"
          viewBox={viewBox}
          color={svgColor}
          dangerouslySetInnerHTML={{
            __html: children,
          }}
          style={style}
          {...rest}
        />
      );
    }
    // \u4F20\u5165ReactNode\uFF0C\u76F4\u63A5\u4E22\u8FDBchildren
    return (
      <Component
        className={clsx(classes.root, className, {
          [\`icon-size-\${size}\`]: size,
        })}
        focusable="false"
        viewBox={viewBox}
        color={svgColor || htmlColor}
        style={style}
        {...rest}
      >
        {children}
      </Component>
    );
  }
  if (typeof children === 'string') {
    // div\u80CC\u666F\u8272\u6A21\u5F0F\uFF0C\u7EC4\u88C5data:image/svg+xml\u585E\u8FDB\u5185\u8054\u6837\u5F0F
    return (
      <Component
        className={clsx(classes.root, className, {
          [\`icon-size-\${size}\`]: size,
        })}
        style={{
          ...style,
          backgroundImage: \`url("data:image/svg+xml,\${encodeURIComponent(
            \`<svg viewBox='\${viewBox}' xmlns='http://www.w3.org/2000/svg' \${
              svgColor ? \`fill='\${svgColor}'\` : ''
            }>\${children}</svg>\`,
          )}")\`,
        }}
        {...rest}
      />
    );
  }
  return null;
}
`},49520:function(g,u){"use strict";u.Z=`export { default } from './SvgIcon';
`},30227:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M73.1 53v1.8h-8.2v3.6c0 1.4-.7 1.6-5.3 1.6 0 0-.2-.4-.3-.9l-.4-1.4H60c1 0 1.6-.1 1.6-.3v-2.7h-9.1V53h20.6zm-18 2.3 3.5 1.1c-.9 1.2-2.3 2.6-3.3 3.5l-2.8-.9c.7-.7 1.9-2.3 2.6-3.7zm12.3 1 2.7-.9.6.7c.8.9 1.7 1.9 2.4 2.9l-3.5 1-.2-.5c-.5-1.1-1.2-2.4-2-3.2zm-13.7-6.1h18.2V52H53.7v-1.8zm4.9-7h-5.4v6.1h19.2v-6.1H67V42h6.1v-2H52.5v2h6.1v1.2zM56.2 45h2.4v2.4h-2.4V45zm5.5 0H64v2.4h-2.4V45zm7.8 2.4H67V45h2.4v2.4zM64 43.1h-2.4v-1.2H64v1.2zM96 53v1.8h-8.2v3.6c0 1.4-.7 1.6-5.3 1.6-.1-.1-.7-2.2-.7-2.2h1.1c1 0 1.6-.1 1.6-.3v-2.7h-9.1V53H96zm-18.1 2.3 3.5 1.1c-.9 1.2-2.3 2.6-3.3 3.5l-2.8-.9c.8-.7 1.9-2.3 2.6-3.7zm12.3 1 2.7-.9.6.7c.9.9 1.8 1.9 2.5 2.9l-3.5 1c-.6-1.2-1.3-2.8-2.3-3.7zm-13.7-6.1h18.2V52H76.5v-1.8zm4.9-7H76v6.1h19.2v-6.1h-5.4V42h6.1v-2H75.3v2h6.1v1.2zM79 45h2.4v2.4H79V45zm5.5 0h2.4v2.4h-2.4V45zm7.8 2.4h-2.4V45h2.4v2.4zm-5.4-4.3h-2.4v-1.2h2.4v1.2zm-46.4-3.9c-.1.4-.3 1-.7 1.6h10.4v17.9c0 1.2-3 1.4-7.9 1.4 0 0-.2-.5-.3-1l-.3-1.2h.4c1.8 0 5.1.2 5.1-.8v-14H38c-.7.7-1.4 1.2-2.1 1.4l-1.2-1.7c1.4-1.2 2.1-2 2.2-3.7h3.6zm-7.6 11.9 2.4 1c-.7 2.5-2.1 5.9-3.4 7.9l-2.7-2.8.3-.3c1.6-1.7 2.6-3.6 3.3-5.5l.1-.3zM40 44c0 .2-.1.5-.3.8h5.7v1.8h-3V49H46v2h-3.6v3.5h1.2v-2.1h2.2v4.3l-9.4-.1v-4.2h2v2.1h1.3V51h-3.6v-2h3.6v-2.4h-1.3c-.6.7-1.4 1.3-2 1.5l-.8-1.2c1.1-.9 1.6-1.6 1.6-2.8H40zm-10.6 3.1 1.7-1.9.7.3c1 .4 2.4 1 3.3 1.6L33.3 50c-1.4-1.2-2.5-2-3.9-2.9zm.3-5.4 1.6-1.8.7.3c1 .4 2.3 1 3.1 1.5l-1.7 2.8c-1.3-1.3-2.4-2-3.7-2.8zM9.8 35c4.2 0 4.9 2.9 7.1 3.5 5.7 1.4 10 6.1 9.7 12.6-.3 6.6-6 10.9-13.3 10.9S.3 57.7 0 51.1c-.3-6.4 3.9-11 9.4-12.5 1.2-.4 1.9-1.9.4-3.6zM2.1 45.8c-.1 0-.3.1-.3.4v.3c0 .4.1.9.1 1.1v.1c0 .1.1.2.2.2.2.1.5.4.7 1.1 0 .3.1.7.2 1.1l.1.3c.2 1 .5 1.8 1 2.4.6 1 1.5 1.5 2.5 1.6h1.9c1.6-.1 2.5-.5 3.1-1.4.8-1.2 1.2-3.2 1.7-3.4.5.1.8 2.1 1.6 3.2l.1.1c.6.9 1.5 1.3 3.1 1.4H20c1-.1 1.9-.6 2.5-1.6.5-.7.8-1.6 1-2.7l.1-.3c.1-.3.1-.5.1-.8.1-.8.4-1 .7-1.1.1 0 .2-.2.2-.2v-.3c0-.3.1-.8.1-1.2 0-.3-.2-.4-.3-.4l-1-.1c-2-.1-5.2-.2-6.9.2l-.3.2c-.7.2-2.1.4-2.9.4-.8 0-2.3-.3-3-.4h-.1c-1.9-.6-6.2-.3-8.1-.2zm4.3 1.4c1.1-.1 2.5.1 3.2.2h.1c1.7.4 2.4 2 .7 4.6-.3.4-.8.8-2 .9H6.9c-1.3-.1-1.9-1.6-2.2-3l-.1-.5v-.2c-.1-.8-.1-1.4.6-1.7.3-.2.7-.3 1.2-.3zm13.9 0c.5 0 .9.1 1.2.3.7.4.7 1 .6 1.7 0 .2-.1.5-.1.7-.3 1.4-.9 2.9-2.2 3h-1.5c-1.2-.1-1.7-.4-2-.9-1.7-2.6-1.1-4.3.7-4.6h.1l.3-.1c.7-.1 1.9-.2 2.9-.1z"/>',
  'TaoPiaoPiaoLogoIcon',
);
`},17247:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M37.7 8C50 8 52 16.7 58.5 18.4c16.7 4.1 29.2 18 28.5 37.3C86.2 75.3 69.5 88 48 88S9.8 75.3 9 55.7c-.7-19 11.5-32.7 27.7-37.1 3.3-1 5.4-5.5 1-10.6zm43.1 32.1c-5.4-.3-18-1-23.7.5-1.7.4-6.6 1.4-9.2 1.4s-7.5-.9-9.2-1.4c-5.7-1.5-18.2-.8-23.7-.5-.1 0-.9.1-.9 1.1 0 .4.1.9.1 1.4l.1.6c.1.8.2 1.6.2 2.1 0 .1.1.6.6.7h.1c.6.3 1.6 1.1 1.9 3.3.1 1 .3 2.1.5 3.2.6 3.2 1.6 5.9 3 8 1.9 2.9 4.5 4.5 7.4 4.7 2.2.1 4 .1 5.6 0 4.6-.3 7.2-1.5 9.1-4.1 2.5-3.5 3.7-10 5.1-10 1.5 0 2.6 6.4 5.1 10 1.9 2.6 4.5 3.8 9.1 4.1 1.6.1 3.4.1 5.6 0 3-.2 5.6-1.8 7.4-4.7 1.4-2.1 2.4-4.8 3-8 .2-1.1.4-2.2.5-3.2.3-2.2 1.3-3 1.9-3.3h.1c.5-.1.6-.6.6-.7 0-.5.1-1.3.2-2.1l.1-.6c0-.5.1-1 .1-1.4.2-1-.6-1.1-.7-1.1zm-53.2 4.1c3.2-.2 7.4.3 9.4.7.1 0 .3.1.4.1 5 1 7.1 6.1 1.9 13.7-.9 1.3-2.2 2.3-5.8 2.5-1.2.1-2.6.1-4.3 0-3.8-.2-5.7-4.7-6.5-8.8-.1-.8-.3-1.5-.4-2.2-.3-2.3-.2-4.1 1.8-5.2.8-.5 2-.7 3.5-.8zm31.3.7c2-.4 6.2-.9 9.4-.7 1.4.1 2.6.3 3.4.8 2 1.1 2.1 2.9 1.8 5.2-.1.7-.2 1.4-.4 2.2-.8 4.2-2.6 8.6-6.5 8.8-1.7.1-3.1.1-4.3 0-3.6-.2-4.9-1.2-5.8-2.5-5.1-7.6-3.1-12.7 1.9-13.7.2 0 .3-.1.5-.1z"/>',
  'TaoTicketsLogoIcon',
);
`},61552:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M58.3 38.3c1.6-7 2.6-12 3.3-15.1C63.1 15.3 59.1 8 51 8c-7.2 0-10.9 3.6-13 10.8v.2c-1.3 5.8-3.3 10.3-5.9 13.6-2.8 3.4-6.9 5.4-11.2 5.5h-2.1c-4.9.1-8.8 4.1-8.8 9.1V77c0 6.1 4.9 11 10.9 11h38.7c7.9 0 15-5 17.7-12.6l8-22.5c2-5.7-.9-12-6.6-14.1-1.2-.4-2.4-.7-3.7-.7H58.3z"/>',
  'ThumbUpFilledIcon',
);
`},78412:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M58.3 38.3c1.6-7 2.6-12 3.3-15.1C63.1 15.3 59.1 8 51 8c-7.2 0-10.9 3.6-13 10.8v.2c-1.3 5.8-3.3 10.3-5.9 13.6-2.8 3.4-6.9 5.4-11.2 5.5h-2.1c-4.9.1-8.8 4.1-8.8 9.1V77c0 6.1 4.9 11 10.9 11h38.7c7.9 0 15-5 17.7-12.6l8-22.5c2-5.7-.9-12-6.6-14.1-1.2-.4-2.4-.7-3.7-.7H58.3zM51 14c3.7 0 5.6 3.4 4.7 8-.7 3.6-2.1 9.8-4.1 18.6-.4 1.9 1 3.7 2.9 3.7H75c.6 0 1.1.1 1.7.3 2.6.9 3.9 3.8 3 6.4l-8 22.5C69.8 78.6 65 82 59.6 82H21c-2.7 0-5-2.2-5-5V47.2c0-1.7 1.3-3 3-3.1h2.1c6.1-.1 11.8-3 15.7-7.7 3.2-4 5.5-9.3 7-15.9 1.4-4.9 3-6.5 7.2-6.5z"/>',
  'ThumbUpOutlinedIcon',
);
`},16576:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c6.1 0 11 4.9 11 11v14c0 1.7-1.3 3-3 3-3.9 0-7 3.1-7 7s3.1 7 7 7c1.7 0 3 1.3 3 3v14c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V58c0-1.7 1.3-3 3-3 3.9 0 7-3.1 7-7s-3.1-7-7-7c-1.7 0-3-1.3-3-3V24c0-6.1 4.9-11 11-11h58zM60 53H36c-1.7 0-3 1.3-3 3s1.3 3 3 3h24c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0-16H36c-1.7 0-3 1.3-3 3s1.3 3 3 3h24c1.7 0 3-1.3 3-3s-1.3-3-3-3z"/>',
  'TicketFilledIcon',
);
`},77890:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M72 8c6.1 0 11 4.9 11 11v58c0 6.1-4.9 11-11 11H24c-6.1 0-11-4.9-11-11V19c0-6.1 4.9-11 11-11h48zm0 6H24c-2.8 0-5 2.2-5 5v58c0 2.8 2.2 5 5 5h48c2.8 0 5-2.2 5-5V19c0-2.8-2.2-5-5-5zM57 68c1.7 0 3 1.3 3 3s-1.3 3-3 3H39c-1.7 0-3-1.3-3-3s1.3-3 3-3h18zm7-48c3.9 0 7 3.1 7 7v26c0 3.9-3.1 7-7 7H32c-3.9 0-7-3.1-7-7V27c0-3.9 3.1-7 7-7h32zm0 6H32c-.6 0-1 .4-1 1v26c0 .6.4 1 1 1h32c.6 0 1-.4 1-1V27c0-.6-.4-1-1-1z"/>',
  'TicketMachineOutlinedIcon',
);
`},78204:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M60 37c1.7 0 3 1.3 3 3s-1.3 3-3 3H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h24zm0 16c1.7 0 3 1.3 3 3s-1.3 3-3 3H36c-1.7 0-3-1.3-3-3s1.3-3 3-3h24zM11 41c-1.7 0-3-1.3-3-3V24c0-6.1 4.9-11 11-11h58c6.1 0 11 4.9 11 11v14c0 1.7-1.3 3-3 3-3.9 0-7 3.1-7 7s3.1 7 7 7c1.7 0 3 1.3 3 3v14c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V58c0-1.7 1.3-3 3-3 3.9 0 7-3.1 7-7s-3.1-7-7-7zm13 7c0 6.1-4.3 11.3-10 12.7V72c0 2.8 2.2 5 5 5h58c2.8 0 5-2.2 5-5V60.7c-5.7-1.4-10-6.5-10-12.7s4.3-11.3 10-12.7V24c0-2.8-2.2-5-5-5H19c-2.8 0-5 2.2-5 5v11.3c5.7 1.4 10 6.6 10 12.7z"/>',
  'TicketOutlinedIcon',
);
`},2924:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M51 74h9.9c.6 0 1-.4 1-1l-.3-8.8c0-1 .5-2 1.3-2.6C70.4 56.5 75 48.2 75 39c0-14.9-12.1-27-27-27S21 24.1 21 39c0 9.2 4.6 17.6 12.1 22.5.8.5 1.3 1.4 1.3 2.4l.3 9.1c0 .5.5 1 1 1H45V53.7l-7.2-7.6c-1.1-1.2-1.1-3.1.1-4.2 1.2-1.1 3.1-1.1 4.2.1l5.9 6.3 6.8-6.4c1.2-1.1 3.1-1.1 4.2.1 1.1 1.2 1.1 3.1-.1 4.2L51 53.8V74zm30-35c0 10.6-5.1 20.4-13.4 26.5l.2 7.2v.2c0 3.9-3.1 7-7 7h-25c-3.8 0-6.9-3-7-6.8l-.3-7.6C20.1 59.5 15 49.7 15 39 15 20.8 29.8 6 48 6s33 14.8 33 33zM39 90c-1.7 0-3-1.3-3-3s1.3-3 3-3h18c1.7 0 3 1.3 3 3s-1.3 3-3 3H39z"/>',
  'TipsOutlinedIcon',
);
`},76512:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm2.3 15.1 11.1 11.1c1.1 1.1 1.1 3-.1 4.2-1.2 1.2-3.1 1.2-4.2.1l-6.2-6.2v26.8c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9V38.6l-6.3 6.3c-1.1 1.1-2.9 1.2-4.1.2l-.1-.1c-1.1-1.1-1.1-3 .1-4.2l11.5-11.5c1.1-1.3 3-1.4 4.1-.2z"/>',
  'ToTopOutlinedIcon',
);
`},94053:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M44.6 51h5.9l.8-6h-5.9l-.8 6zM48 8c22.1 0 40 17.9 40 40S70.1 88 48 88c-7.3 0-14.4-2-20.5-5.7-.2-.1-.9-.5-1.9-1.1l-9.8 2.7c-2.2.6-4.3-1.4-3.7-3.7l2.7-9.8c-1-1.8-1.7-2.9-2-3.6C9.6 61.1 8 54.7 8 48 8 25.9 25.9 8 48 8zm8.4 22c-1.6-.2-3.2.9-3.4 2.6l-.8 6.4h-5.9l.7-5.6c.2-1.6-.9-3.2-2.6-3.4-1.6-.2-3.2.9-3.4 2.6l-.8 6.4H33c-1.7 0-3 1.3-3 3s1.3 3 3 3h6.4l-.8 6H33c-1.7 0-3 1.3-3 3s1.3 3 3 3h4.8l-.8 5.6c-.2 1.6.9 3.2 2.6 3.4 1.6.2 3.2-.9 3.4-2.6l.9-6.4h5.9l-.8 5.6c-.2 1.6.9 3.2 2.6 3.4 1.6.2 3.2-.9 3.4-2.6l.9-6.4H63c1.7 0 3-1.3 3-3s-1.3-3-3-3h-6.4l.8-6H63c1.7 0 3-1.3 3-3s-1.3-3-3-3h-4.8l.7-5.6c.3-1.6-.9-3.2-2.5-3.4z"/>',
  'TopicFilledIcon',
);
`},47596:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M44.6 51h5.9l.8-6h-5.9l-.8 6zm-.8 6-.8 6.4c-.2 1.6-1.7 2.8-3.4 2.6-1.6-.2-2.8-1.7-2.6-3.4l.7-5.6H33c-1.7 0-3-1.3-3-3s1.3-3 3-3h5.6l.8-6H33c-1.7 0-3-1.3-3-3s1.3-3 3-3h7.2l.9-6.4c.2-1.6 1.7-2.8 3.4-2.6 1.6.2 2.8 1.7 2.6 3.4l-.9 5.6h5.9l.9-6.4c.2-1.6 1.7-2.8 3.4-2.6 1.6.2 2.8 1.7 2.6 3.4l-.8 5.6H63c1.7 0 3 1.3 3 3s-1.3 3-3 3h-5.6l-.8 6H63c1.7 0 3 1.3 3 3s-1.3 3-3 3h-7.2l-.8 6.4c-.2 1.6-1.7 2.8-3.4 2.6-1.6-.2-2.8-1.7-2.6-3.4l.7-5.6h-5.9zm-29 13.4c-1-1.8-1.7-2.9-2-3.6C9.6 61.1 8 54.7 8 48 8 25.9 25.9 8 48 8s40 17.9 40 40-17.9 40-40 40c-7.3 0-14.4-2-20.5-5.7-.2-.1-.9-.5-1.9-1.1l-9.8 2.7c-2.2.6-4.3-1.4-3.7-3.7l2.7-9.8zm6.1.4-1.6 5.9 5.9-1.6c.8-.2 1.6-.1 2.3.3 1.7 1 2.7 1.6 3 1.8C35.8 80.3 41.8 82 48 82c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48c0 5.7 1.4 11.2 4 16 .3.6 1.2 2.1 2.6 4.4.4.8.5 1.6.3 2.4z"/>',
  'TopicOutlinedIcon',
);
`},37689:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm20.1 29.9c-1.2-1.2-3.1-1.2-4.2 0L51.1 50.7l-7.7-8.4c-1.2-1.3-3.2-1.3-4.4-.1L27.8 53.9c-1.2 1.2-1.1 3.1.1 4.2 1.2 1.2 3.1 1.1 4.2-.1l9-9.3 7.6 8.3c1.2 1.3 3.1 1.3 4.3.1L68 42c1.3-1.1 1.3-3 .1-4.1z"/>',
  'TrendingCircleFilledIcon',
);
`},77369:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 88C25.9 88 8 70.1 8 48S25.9 8 48 8s40 17.9 40 40-17.9 40-40 40zm0-6c18.8 0 34-15.2 34-34S66.8 14 48 14 14 29.2 14 48s15.2 34 34 34zm.8-24.9-7.6-8.3-9 9.3c-1.2 1.2-3 1.2-4.2.1-1.2-1.2-1.2-3-.1-4.2L39 42.3c1.2-1.2 3.2-1.2 4.4.1l7.7 8.4L63.9 38c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-15 15.1c-1.2 1.1-3.2 1.1-4.3-.2z"/>',
  'TrendingCircleOutlinedIcon',
);
`},1621:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M17 15c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1s-1-.4-1-1V16c0-.6.4-1 1-1zm14 0c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1s-1-.4-1-1V16c0-.6.4-1 1-1zm-7 0c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1s-1-.4-1-1V16c0-.6.4-1 1-1z"/>',
  'TripleVerticalLineIcon',
);
`},78922:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m27.3 46.8 19.1-26.6c.6-.9 1.9-1.1 2.8-.5.2.1.3.3.5.5l19.1 26.6c.6.9.4 2.1-.5 2.8-.3.2-.7.4-1.2.4H54v26c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2V50H28.9c-1.1 0-2-.9-2-2 0-.4.1-.8.4-1.2z"/>',
  'UpIcon',
);
`},18110:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M46 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S54.8 8 46 8zm0 6c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm0 29c7.1 0 13.9 2.3 19.5 6.4 1.3 1 1.6 2.9.6 4.2-1 1.3-2.9 1.6-4.2.6C57.4 50.8 51.8 49 46 49c-14.9 0-27 12.1-27 27v6l27 .2c1.6 0 2.9 1.3 3 2.8v.2c0 1.7-1.4 3-3 3L16 88c-1.6 0-3-1.4-3-3v-9c0-18.2 14.8-33 33-33zm33.5 11c.8-1.4 2.6-1.8 4-1s2 2.6 1.2 4L68.6 85c-.8 1.4-2.6 1.8-4 1l-12.1-7c-1.4-.8-2-2.6-1.2-4l.1-.1c.8-1.3 2.6-1.6 3.9-.8l9.5 5.5L79.5 54z"/>',
  'UserFollowedOutlinedIcon',
);
`},24088:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M51 15c18.2 0 33 14.8 33 33S69.2 81 51 81H16c-2.2 0-4-1.8-4-4V48c0-18.2 14.8-33 33-33h6zm11.2 16.3c-1.5-.7-3.3 0-4 1.5l-9.9 22.1-10.6-22.2c-.7-1.5-2.5-2.1-4-1.4-1.5.7-2.1 2.5-1.4 4l13.5 28c1.1 2.3 4.4 2.3 5.4-.1l12.5-28c.7-1.5 0-3.3-1.5-3.9z"/>',
  'VerifiedFilledIcon',
);
`},98173:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m68 34.2 9.9-4.9c3.5-1.7 7.7-.3 9.4 3.1.5 1 .7 2 .7 3.1v25.3c0 3.9-3.1 7-7 7-1.1 0-2.2-.3-3.2-.8L68 61.9V66c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V30c0-6.1 4.9-11 11-11h38c6.1 0 11 4.9 11 11v4.2zm0 6.7v14.3l12.5 6.5c.1.1.3.1.5.1.6 0 1-.4 1-1V35.5c0-.2 0-.3-.1-.4-.2-.5-.8-.7-1.3-.4L68 40.9zM62 66V30c0-2.8-2.2-5-5-5H19c-2.8 0-5 2.2-5 5v36c0 2.8 2.2 5 5 5h38c2.8 0 5-2.2 5-5zM27 44c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>',
  'VideoOutlinedIcon',
);
`},4151:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M77 13c6.1 0 11 4.9 11 11v48c0 6.1-4.9 11-11 11H19c-6.1 0-11-4.9-11-11V24c0-6.1 4.9-11 11-11h58zM39.9 37.1c-1.6-.5-3.3.4-3.8 2L34 45.9l-2.1-6.8a3.037 3.037 0 0 0-5.8 1.8l5 16c.9 2.8 4.8 2.8 5.7 0l5-16c.6-1.6-.3-3.3-1.9-3.8zM48 37c-1.7 0-3 1.3-3 3v16c0 1.7 1.3 3 3 3s3-1.3 3-3V40c0-1.7-1.3-3-3-3zm15 0h-6c-1.7 0-3 1.3-3 3v16c0 1.7 1.3 3 3 3s3-1.3 3-3v-5h3c3.9 0 7-3.1 7-7s-3.1-7-7-7zm0 6c.6 0 1 .4 1 1s-.4 1-1 1h-3v-2h3z"/>',
  'VipCardFilledIcon',
);
`},78461:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m46.4 16 .3-.3c.9-.7 2.1-.5 2.8.3L66 36.8c.6.7 1.5 1 2.4.6l16.1-6.9c.4-.2.8-.2 1.2-.1 1.1.2 1.8 1.3 1.6 2.4l-8.9 42.9c-.8 3.7-4 6.4-7.8 6.4h-45c-3.8 0-7.1-2.7-7.8-6.4l-9-42.9c-.1-.4 0-.8.1-1.2.4-1 1.6-1.5 2.6-1.1l16.1 6.9c.8.4 1.8.1 2.4-.6L46.4 16z"/>',
  'VipFilledIcon',
);
`},14927:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m29.2 34.8 15-19c.2-.3.5-.6.8-.8 2.1-1.7 5.2-1.3 6.9.8l15 19 14.4-6.2c.9-.4 1.9-.5 2.9-.3 2.6.5 4.3 3.1 3.8 5.8l-8.4 40.4c-1 4.9-5.3 8.4-10.3 8.4H26.8c-5 0-9.3-3.5-10.3-8.4L8.1 34.1c-.2-1-.1-2 .3-2.9 1.1-2.5 3.9-3.6 6.4-2.6l14.4 6.2zM48 20.7 33.3 39.2c-1.4 1.7-3.7 2.3-5.8 1.5L14.4 35l8 38.3c.4 2.1 2.3 3.6 4.4 3.6h42.4c2.2 0 4-1.5 4.4-3.6l8-38.3-13.2 5.6c-2 .9-4.4.3-5.8-1.5L48 20.7z"/>',
  'VipOutlinedIcon',
);
`},51713:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M65.1 11c.6 1 1 2.2 1 3.4v67.3c0 3.5-2.9 6.4-6.4 6.4-1.2 0-2.4-.3-3.4-1L30.6 70.9H16.9C12 70.9 8 66.9 8 62V34c0-4.9 4-8.9 8.9-8.9h13.6L56.3 9c3-1.9 6.9-1 8.8 2zm11.3 12.5c1.4-.9 3.2-.6 4.2.8 9.9 14.3 9.9 33.1 0 47.4-.9 1.4-2.8 1.7-4.2.8-1.4-.9-1.7-2.8-.8-4.2 8.5-12.3 8.5-28.4 0-40.6-.9-1.4-.6-3.2.8-4.2z"/>',
  'VolumeDownFilledIcon',
);
`},73146:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47.6 10.1c.3.4.4.8.4 1.3v73.2c0 1.1-.9 2-2 2-.5 0-.9-.2-1.3-.4L19.2 65.6 3.8 60.5c-.8-.3-1.4-1-1.4-1.9V37.4c0-.9.6-1.6 1.4-1.9l15.4-5.1L44.7 9.8c.9-.7 2.2-.5 2.9.3zm37.1 25.2c1.3 1.3 1.4 3.4.2 4.8l-.2.3-7.6 7.6 7.6 7.6c1.4 1.4 1.4 3.7 0 5.1-1.3 1.3-3.4 1.4-4.8.2l-.3-.2-7.6-7.6-7.6 7.6c-1.4 1.4-3.7 1.4-5.1 0-1.3-1.3-1.4-3.4-.2-4.8l.2-.3 7.6-7.6-7.6-7.6c-1.4-1.4-1.4-3.7 0-5.1 1.3-1.3 3.4-1.4 4.8-.2l.3.2 7.6 7.6 7.6-7.6c1.4-1.4 3.7-1.4 5.1 0z"/>',
  'VolumeMuteFilledIcon',
);
`},74484:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m24.1 30.2 20.2-12.5c2.3-1.4 5.4-.7 6.9 1.6.5.8.8 1.7.8 2.6V74c0 2.7-2.2 4.9-5 4.9-.9 0-1.9-.3-2.6-.8L24.1 65.8H15c-3.9 0-7-3.1-7-6.9V37.1c0-3.8 3.1-6.9 7-6.9h9.1zm2.5 5.5c-.5.3-1 .5-1.6.5H15c-.6 0-1 .4-1 1v21.7c0 .5.4 1 1 1h10c.6 0 1.1.2 1.6.5l19.4 12V23.7l-19.4 12zm51.5 12.9 8.1 8.1c1.1 1.1 1.1 2.9 0 4.1-1.1 1.1-2.9 1.1-4.1 0L74 52.7l-8.1 8.1c-1.1 1.1-2.9 1.1-4.1 0s-1.1-2.9 0-4.1l8.1-8.1-8.1-8.1c-1.1-1.1-1.1-2.9 0-4.1s2.9-1.1 4.1 0l8.1 8.1 8.1-8.1c1.1-1.1 2.9-1.1 4.1 0 1.1 1.1 1.1 2.9 0 4.1l-8.1 8.1z"/>',
  'VolumeMuteOutlinedIcon',
);
`},22591:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47.6 10.1c.3.4.4.8.4 1.3v73.2c0 1.1-.9 2-2 2-.5 0-.9-.2-1.3-.4L19.2 65.6 3.8 60.5c-.8-.3-1.4-1-1.4-1.9V37.4c0-.9.6-1.6 1.4-1.9l15.4-5.1L44.7 9.8c.9-.7 2.2-.5 2.9.3zM78 11.6C85.8 22.1 90 34.7 90 48c0 13.3-4.2 25.9-12 36.3-1.2 1.6-3.4 1.9-5 .8-1.6-1.2-1.9-3.4-.8-5C79 70.9 82.7 59.7 82.7 48c0-11.7-3.7-22.9-10.6-32.1-1.2-1.6-.8-3.9.8-5s4-.9 5.1.7zM63 24.3c5.1 6.8 7.9 15 7.9 23.7S68.1 65 63 71.8c-1.2 1.6-3.5 1.9-5 .7s-1.9-3.5-.7-5c4.2-5.6 6.5-12.3 6.5-19.5 0-7.1-2.3-13.8-6.4-19.4-1.2-1.6-.9-3.8.7-5 1.4-1.2 3.7-.9 4.9.7z"/>',
  'VolumeUpFilledIcon',
);
`},44367:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="m24.1 30.2 20.2-12.5c2.3-1.4 5.4-.7 6.9 1.6.5.8.8 1.7.8 2.6V74c0 2.7-2.2 4.9-5 4.9-.9 0-1.9-.3-2.6-.8L24.1 65.8H15c-3.9 0-7-3.1-7-6.9V37.1c0-3.8 3.1-6.9 7-6.9h9.1zm2.5 5.5c-.5.3-1 .5-1.6.5H15c-.6 0-1 .4-1 1v21.7c0 .5.4 1 1 1h10c.6 0 1.1.2 1.6.5l19.4 12V23.7l-19.4 12zm48.5 42.1c-1.2 1.1-3.1 1.1-4.2-.1-1.2-1.2-1.1-3.1.1-4.2 14.8-14.1 14.8-36.9 0-51-1.2-1.1-1.2-3-.1-4.2 1.2-1.2 3.1-1.2 4.2-.1 17.2 16.5 17.2 43.1 0 59.6zM65.1 66c-1.2 1.1-3.1 1.1-4.2-.1-1.1-1.2-1.1-3.1.1-4.2 8.1-7.6 8.1-19.7 0-27.3-1.2-1.1-1.3-3-.1-4.2 1.1-1.2 3-1.2 4.2-.1 10.5 9.8 10.5 26 0 35.9z"/>',
  'VolumeUpOutlinedIcon',
);
`},59604:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M72 38.4c9.3 3.3 16 12.2 16 22.6 0 4-1 7.9-2.8 11.3-.2.3-.5.8-.9 1.6l1.4 5c.6 2.2-1.4 4.3-3.7 3.7l-5-1.4c-.3.2-.5.3-.6.3-3.8 2.3-8 3.5-12.4 3.5-7.3 0-13.9-3.3-18.3-8.4-1.7.3-3.5.4-5.3.4-5.9 0-11.6-1.6-16.6-4.5-.2-.1-.6-.4-1.3-.7l-7.6 2c-2.2.6-4.3-1.5-3.7-3.7l2-7.4c-.7-1.2-1.2-2.1-1.5-2.6C9.3 55.5 8 50.3 8 45c0-17.7 14.5-32 32.4-32 15 0 27.9 10.1 31.5 24.3.1.4.1.7.1 1.1zm-6.4-1.3C62.1 26.4 52 19 40.4 19 25.8 19 14 30.7 14 45c0 4.3 1.1 8.5 3.1 12.3.3.5 1 1.7 2 3.4.4.7.5 1.6.3 2.3l-1 3.6 3.7-1c.8-.2 1.6-.1 2.3.3 1.3.8 2.1 1.2 2.4 1.4 4.1 2.4 8.7 3.7 13.6 3.7.6 0 1.2 0 1.7-.1-1.4-3-2.2-6.4-2.2-9.9 0-13.3 10.7-24 24-24 .6 0 1.2 0 1.7.1zm12.5 37.2c-.2-.8-.1-1.6.3-2.3.8-1.3 1.2-2.1 1.4-2.5C81.3 66.9 82 64 82 61c0-9.9-8.1-18-18-18s-18 8.1-18 18 8.1 18 18 18c3.3 0 6.5-.9 9.2-2.5.2-.1.8-.5 1.7-1 .7-.4 1.5-.5 2.3-.3l1.2.3-.3-1.2zM31 40c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm18 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm8 19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm14 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>',
  'WeChatOutlinedIcon',
);
`},78542:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M47.6 36.9c.3 0 .5-.1.7-.1 1.5-1.2 4.5-2.7 7.2-3.5C60 31.9 64 32.1 66.6 35c.8.9 1.3 1.8 1.6 2.9.6 2.2.2 3.5-1.1 6.5-1 2.2-1 2.8-.4 3.7.5.6 1 .8 2.1 1 .3 0 .5.1 1.2.1 5.4.3 8 2.5 8 9.2 0 8.1-5.7 14.8-15 19.6-7.4 3.7-16.9 6-24.1 6-8.5 0-16.5-1.7-22.2-5.6C8.8 73 6 64.1 9.5 51.9c2.8-9.7 14.8-23.1 26.2-28 2.5-1.1 5.8-1.3 8.1-.2 3.6 1.8 4.2 5.7 1.9 10.5-.9 1.8-.8 2.1 0 2.4.5.2 1.2.3 1.9.3zm-7.3-5.3c.6-1.2.8-2.1.8-2.5-.6-.2-2-.1-3 .3-9.7 4.1-20.4 16.2-22.8 24.1-2.8 9.8-.9 16 4.8 19.9C24.7 76.5 31.6 78 39 78c6.2 0 14.8-2.1 21.3-5.4C67.8 68.7 72 63.8 72 58.4c0-1.1-.1-2-.3-2.5-.1-.3-.2-.4-.2-.4-.1-.1-.5-.2-1.9-.3-.7 0-1-.1-1.5-.1-2.6-.3-4.6-1.2-6.2-3.3-2.4-3.2-2.1-5.7-.4-9.8.7-1.7.9-2.2.8-2.5 0-.1-.1-.2-.3-.4-.7-.7-2.4-.8-4.9-.1-1.2.4-2.4.9-3.5 1.4-.9.4-1.6.9-1.8 1.1-1.8 1.6-5.7 1.8-8.5.7-3.9-1.6-5.4-5.6-3-10.6zm47.4 8.1c-.3 1.6-1.8 2.8-3.4 2.5s-2.8-1.8-2.5-3.4c.1-.9.2-1.8.2-2.8 0-9.9-8.1-18-18-18h-.8c-1.7.1-3.1-1.2-3.1-2.9S61.3 12 63 12h1c13.3 0 24 10.7 24 24 0 1.2-.1 2.5-.3 3.7zm-9.8-1.4c-.1 1.7-1.6 2.9-3.3 2.7s-2.9-1.6-2.7-3.3V37c0-4.4-3.6-8-8-8-1.7 0-3-1.3-3-3s1.3-3 3-3c7.7 0 14 6.3 14 14 .1.4.1.8 0 1.3z"/>',
  'WeiBoOutlinedIcon',
);
`},90283:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M86.9 27.6c1.3 1 1.5 2.9.5 4.2s-2.9 1.5-4.2.5C73.2 24.4 60.9 20 48 20c-12.9 0-25.2 4.4-35.1 12.3-1.3 1-3.2.8-4.2-.5s-.8-3.2.5-4.2C20.1 18.9 33.7 14 48 14c14.3 0 27.9 4.9 38.9 13.6zm-22.1 28c1.3 1 1.6 2.9.6 4.2s-2.9 1.6-4.2.6C57.4 57.6 52.8 56 48 56c-4.8 0-9.4 1.6-13.2 4.4-1.3 1-3.2.7-4.2-.6s-.7-3.2.6-4.2C36 52 41.9 50 48 50c6.1 0 12 2 16.8 5.6zm12-14c1.3 1 1.6 2.9.6 4.2s-2.9 1.6-4.2.6C66 41 57.2 38 48 38s-18 3-25.2 8.4c-1.3 1-3.2.7-4.2-.6s-.7-3.2.6-4.2C27.4 35.4 37.5 32 48 32s20.6 3.4 28.8 9.6zM48 80c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>',
  'WifiOutlinedIcon',
);
`},69603:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm-6.7 10.6 7.4 5.6c1.3 1 1.6 2.9.6 4.2-1 1.3-2.9 1.6-4.2.6l-2.5-1.9v3.7c3.6.3 6.4 3.3 6.4 7v8.4c0 3.7-2.8 6.7-6.4 7v3.7L45 61c1.3-1 3.2-.7 4.2.6 1 1.3.7 3.2-.6 4.2l-7.4 5.6c-2 1.5-4.8.1-4.8-2.4v-9.8c-3.6-.3-6.4-3.3-6.4-7v-8.4c0-3.7 2.8-6.7 6.4-7V27c0-2.5 2.9-3.9 4.9-2.4zm9.9 13.6c0-2.5 2.8-3.9 4.8-2.4l12.8 9.8a3 3 0 0 1 0 4.8L56 60.2c-2 1.5-4.8.1-4.8-2.4V38.2zm-9.3 4.6H37c-.6 0-1 .4-1 1v8.4c0 .6.4 1 1 1h4.9c.6 0 1-.4 1-1v-8.4c0-.6-.5-1-1-1zm15.3 1.5v7.5L62 48l-4.8-3.7z"/>',
  'XiaMiCircleOutlinedIcon',
);
`},83021:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M48 8c22.1 0 40 17.9 40 40S70.1 88 48 88 8 70.1 8 48 25.9 8 48 8zm0 6c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm17.2 47.2h.1c.4 0 .7.4.7.8v3.8c-.1 1.8-1.5 3.2-3.2 3.3h-.4c-1.7-.1-3.1-1.5-3.2-3.3V62c0-.4.4-.7.7-.8h.2c.4 0 .7.4.7.8v3.7c.1.8.7 1.5 1.5 1.6h.2c.8-.1 1.5-.7 1.5-1.6v-3.6c.3-.5.7-.9 1.2-.9zm-14.8 0h.1c.4 0 .7.4.7.8v3.8c-.1 1.8-1.5 3.2-3.2 3.3h-.4c-1.7-.1-3.1-1.5-3.2-3.3V62c0-.4.4-.7.7-.8h.2c.4 0 .7.4.7.8v3.7c.1.8.7 1.5 1.5 1.6h.2c.8-.1 1.5-.7 1.5-1.6v-3.6c.3-.5.7-.9 1.2-.9zm-19.5 0h.1c.1 0 .3.1.4.2l.1.1 2.2 2.2 2.2-2.2.1-.1c.3-.2.7-.2 1 0l.1.1.1.1c.2.3.2.7 0 1l-.2.1-2.5 2.6v3c0 .4-.4.7-.7.8h-.2c-.4 0-.7-.4-.7-.8v-3l-2.5-2.6-.1-.1c-.3-.2-.3-.4-.3-.7v-.2c.1-.2.3-.4.6-.5h.3zm9.7 0h.2c1.7.1 3.1 1.5 3.2 3.3v1.3c-.1 1.8-1.5 3.2-3.2 3.3h-.4c-1.7-.1-3.1-1.5-3.2-3.3v-1.1c0-2 1.5-3.5 3.4-3.5zm12.3 0h.1c.4 0 .7.4.7.8v6.3c0 .4-.4.7-.7.8h-.2c-.4 0-.7-.4-.7-.8v-6.2c0-.5.4-.9.8-.9zm4.9 0h.1c.2 0 .3.1.5.2l.1.1.1.1c.2.3.1.7-.1 1l-.1.1-2.4 2.4 2.4 2.4.1.1.1.1v.2c.1.3 0 .6-.1.8l-.1.1-.1.1c-.2.2-.5.2-.8.1h-.2l-.1-.1-.1-.1-2.6-2.8-.1-.1c-.4-.5-.4-1.1 0-1.6l.1-.1 2.7-2.7c.2-.2.4-.3.6-.3zm-17.2 1.7h-.1c-.8.1-1.5.7-1.5 1.6v1c0 .9.7 1.7 1.6 1.7h.2c.8-.1 1.5-.7 1.5-1.6v-1.1c-.1-.9-.8-1.6-1.7-1.6zm4.6-35.2.2.1 12.8 7.5c5.2 3.1 5.3 10.6.2 13.8l-.2.1-.5-.2.5.3-12.8 7.5c-2.8 1.7-6.5.7-8.1-2.2-1.6-2.8-.7-6.4 2-8.1l.2-.1 5.3-3.1 10.4 4.3-8.9-5.2-6.9-4.1c-2.8-1.7-3.8-5.4-2.2-8.3 1.7-2.8 5.2-3.8 8-2.3z"/>',
  'YouKuVipCircleOutlinedIcon',
);
`},19282:function(g,u){"use strict";u.Z=`// Automatically generated by cli tools, please do not modify this file directly
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  '<path d="M75 10c6 0 10.8 4.8 11 10.7V75c0 6-4.8 10.8-10.7 11H21c-6 0-10.8-4.8-11-10.7V21c0-6 4.8-10.8 10.7-11H75zm0 6H21c-2.7 0-4.9 2.1-5 4.8V75c0 2.7 2.1 4.9 4.8 5H75c2.7 0 4.9-2.1 5-4.8V21c0-2.7-2.1-4.9-4.8-5H75zm-8.6 33.4c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3l10.7 10.7c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0L59.4 59.9v2.5c0 1.6-1.2 2.9-2.8 3h-.2c-1.7 0-3-1.3-3-3v-10c0-1.7 1.3-3 3-3h10zM28.6 25.3 39 35.8v-2.5c0-1.6 1.2-2.9 2.8-3h.2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H32c-1.7 0-3-1.3-3-3s1.3-3 3-3h3L24.3 29.6c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.3-.1z"/>',
  'ZoomInOutlinedIcon',
);
`},85095:function(g,u){"use strict";u.Z=`export { default as AccessTimeCircleFilledIcon } from './AccessTimeCircleFilled';
export { default as AccessTimeCircleFilledBoldIcon } from './AccessTimeCircleFilledBold';
export { default as AccessTimeCircleOutlinedIcon } from './AccessTimeCircleOutlined';
export { default as AddIcon } from './Add';
export { default as AddCircleFilledIcon } from './AddCircleFilled';
export { default as AddCircleFilledBoldIcon } from './AddCircleFilledBold';
export { default as AddCircleOutlinedIcon } from './AddCircleOutlined';
export { default as AddCouponOutlinedIcon } from './AddCouponOutlined';
export { default as AddLargeIcon } from './AddLarge';
export { default as AlarmOutlinedIcon } from './AlarmOutlined';
export { default as AlertCircleFilledIcon } from './AlertCircleFilled';
export { default as AlertCircleFilledBoldIcon } from './AlertCircleFilledBold';
export { default as AlertCircleOutlinedIcon } from './AlertCircleOutlined';
export { default as AliFishOutlinedIcon } from './AliFishOutlined';
export { default as AliSweetOutlinedIcon } from './AliSweetOutlined';
export { default as AliWangWangFilledIcon } from './AliWangWangFilled';
export { default as AliWangWangOutlinedIcon } from './AliWangWangOutlined';
export { default as AlignCenterFilledIcon } from './AlignCenterFilled';
export { default as AlignLeftFilledIcon } from './AlignLeftFilled';
export { default as AlignRightFilledIcon } from './AlignRightFilled';
export { default as ArrowBackwardIcon } from './ArrowBackward';
export { default as ArrowBackwardLargeIcon } from './ArrowBackwardLarge';
export { default as ArrowDownwardIcon } from './ArrowDownward';
export { default as ArrowDownwardLargeIcon } from './ArrowDownwardLarge';
export { default as ArrowForwardIcon } from './ArrowForward';
export { default as ArrowForwardLargeIcon } from './ArrowForwardLarge';
export { default as ArrowUpCircleOutlinedIcon } from './ArrowUpCircleOutlined';
export { default as ArrowUpwardIcon } from './ArrowUpward';
export { default as ArrowUpwardLargeIcon } from './ArrowUpwardLarge';
export { default as AssessmentOutlinedIcon } from './AssessmentOutlined';
export { default as AssignmentOutlinedIcon } from './AssignmentOutlined';
export { default as BabyOutlinedIcon } from './BabyOutlined';
export { default as BankCardFilledIcon } from './BankCardFilled';
export { default as BankCardOutlinedIcon } from './BankCardOutlined';
export { default as BlockCircleFilledIcon } from './BlockCircleFilled';
export { default as BlockCircleOutlinedIcon } from './BlockCircleOutlined';
export { default as BlockCircleOutlinedThinIcon } from './BlockCircleOutlinedThin';
export { default as BogoOutlinedIcon } from './BogoOutlined';
export { default as BoltFilledIcon } from './BoltFilled';
export { default as BoltOutlinedIcon } from './BoltOutlined';
export { default as BuildingOutlinedIcon } from './BuildingOutlined';
export { default as CalendarInvisibleOutlinedIcon } from './CalendarInvisibleOutlined';
export { default as CalendarOutlinedIcon } from './CalendarOutlined';
export { default as CalendarVisibleOutlinedIcon } from './CalendarVisibleOutlined';
export { default as CameraFilledIcon } from './CameraFilled';
export { default as CameraOutlinedIcon } from './CameraOutlined';
export { default as CardPackageOutlinedIcon } from './CardPackageOutlined';
export { default as CaretDownIcon } from './CaretDown';
export { default as CaretLeftIcon } from './CaretLeft';
export { default as CaretRightIcon } from './CaretRight';
export { default as CaretUpIcon } from './CaretUp';
export { default as ChatFilledIcon } from './ChatFilled';
export { default as ChatOutlinedIcon } from './ChatOutlined';
export { default as CheerOutlinedIcon } from './CheerOutlined';
export { default as CinemaCardOutlinedIcon } from './CinemaCardOutlined';
export { default as CinemaFilledIcon } from './CinemaFilled';
export { default as CinemaOutlinedIcon } from './CinemaOutlined';
export { default as CircleOutlinedIcon } from './CircleOutlined';
export { default as ClockOutlinedIcon } from './ClockOutlined';
export { default as CloseIcon } from './Close';
export { default as CloseLargeIcon } from './CloseLarge';
export { default as CloudBBOutlinedIcon } from './CloudBBOutlined';
export { default as CloudDownloadOutlinedIcon } from './CloudDownloadOutlined';
export { default as CloudUploadOutlinedIcon } from './CloudUploadOutlined';
export { default as CodeOutlinedIcon } from './CodeOutlined';
export { default as CopyOutlinedIcon } from './CopyOutlined';
export { default as CouponFilledIcon } from './CouponFilled';
export { default as CouponOutlinedIcon } from './CouponOutlined';
export { default as DateOutlinedIcon } from './DateOutlined';
export { default as DeleteOutlinedIcon } from './DeleteOutlined';
export { default as DiscussOutlinedIcon } from './DiscussOutlined';
export { default as DoubleArrowDownTwoToneIcon } from './DoubleArrowDownTwoTone';
export { default as DoubleArrowLeftTwoToneIcon } from './DoubleArrowLeftTwoTone';
export { default as DoubleArrowRightTwoToneIcon } from './DoubleArrowRightTwoTone';
export { default as DoubleArrowUpTwoToneIcon } from './DoubleArrowUpTwoTone';
export { default as DoubleCircleOutlinedIcon } from './DoubleCircleOutlined';
export { default as DownIcon } from './Down';
export { default as DrinkFilledIcon } from './DrinkFilled';
export { default as DrinkOutlinedIcon } from './DrinkOutlined';
export { default as EditFilledIcon } from './EditFilled';
export { default as EditOutlinedIcon } from './EditOutlined';
export { default as EggOutlinedIcon } from './EggOutlined';
export { default as ErrorCircleFilledIcon } from './ErrorCircleFilled';
export { default as ErrorCircleFilledBoldIcon } from './ErrorCircleFilledBold';
export { default as ErrorCircleOutlinedIcon } from './ErrorCircleOutlined';
export { default as ExperimentOutlinedIcon } from './ExperimentOutlined';
export { default as ExploreCircleFilledIcon } from './ExploreCircleFilled';
export { default as ExploreCircleOutlinedIcon } from './ExploreCircleOutlined';
export { default as EyeFilledIcon } from './EyeFilled';
export { default as EyeOutlinedIcon } from './EyeOutlined';
export { default as FemaleOutlinedIcon } from './FemaleOutlined';
export { default as FilterOutlinedIcon } from './FilterOutlined';
export { default as FingerprintOutlinedIcon } from './FingerprintOutlined';
export { default as FireFilledIcon } from './FireFilled';
export { default as FlashlightOnOutlinedIcon } from './FlashlightOnOutlined';
export { default as FlashlightOutlinedIcon } from './FlashlightOutlined';
export { default as FlipOutlinedIcon } from './FlipOutlined';
export { default as FollowOutlinedIcon } from './FollowOutlined';
export { default as FullScreenOutlinedIcon } from './FullScreenOutlined';
export { default as GetTicketsFilledIcon } from './GetTicketsFilled';
export { default as GetTicketsOutlinedIcon } from './GetTicketsOutlined';
export { default as GiftCardOutlinedIcon } from './GiftCardOutlined';
export { default as GiftOutlinedIcon } from './GiftOutlined';
export { default as GlassesOutlinedIcon } from './GlassesOutlined';
export { default as GppGoodFilledIcon } from './GppGoodFilled';
export { default as GppGoodOutlinedIcon } from './GppGoodOutlined';
export { default as GridViewOutlinedIcon } from './GridViewOutlined';
export { default as GripperBarHorizontalIcon } from './GripperBarHorizontal';
export { default as GripperBarVerticalIcon } from './GripperBarVertical';
export { default as HashOutlinedIcon } from './HashOutlined';
export { default as HeartAddOutlinedIcon } from './HeartAddOutlined';
export { default as HeartAddOutlinedBoldIcon } from './HeartAddOutlinedBold';
export { default as HeartBrokenIcon } from './HeartBroken';
export { default as HeartFilledIcon } from './HeartFilled';
export { default as HeartMarkedOutlinedIcon } from './HeartMarkedOutlined';
export { default as HeartOutlinedIcon } from './HeartOutlined';
export { default as HelpCircleFilledIcon } from './HelpCircleFilled';
export { default as HelpCircleOutlinedIcon } from './HelpCircleOutlined';
export { default as HistoryOutlinedIcon } from './HistoryOutlined';
export { default as HomeIcon } from './Home';
export { default as HomeFilledIcon } from './HomeFilled';
export { default as HomeOutlinedIcon } from './HomeOutlined';
export { default as HourglassOutlinedIcon } from './HourglassOutlined';
export { default as InboxFilledIcon } from './InboxFilled';
export { default as InboxFilledBoldIcon } from './InboxFilledBold';
export { default as LightVipOutlinedIcon } from './LightVipOutlined';
export { default as LinkOutlinedIcon } from './LinkOutlined';
export { default as ListOutlinedIcon } from './ListOutlined';
export { default as LoadingThreeQuartersOutlinedIcon } from './LoadingThreeQuartersOutlined';
export { default as LocationFilledIcon } from './LocationFilled';
export { default as LocationOutlinedIcon } from './LocationOutlined';
export { default as LuckyMoneyOutlinedIcon } from './LuckyMoneyOutlined';
export { default as MailOutlinedIcon } from './MailOutlined';
export { default as MaleOutlinedIcon } from './MaleOutlined';
export { default as MapFilledIcon } from './MapFilled';
export { default as MapOutlinedIcon } from './MapOutlined';
export { default as MessageOutlinedIcon } from './MessageOutlined';
export { default as MicOutlinedIcon } from './MicOutlined';
export { default as MiniContractOutlinedIcon } from './MiniContractOutlined';
export { default as MinusIcon } from './Minus';
export { default as MobileFilledIcon } from './MobileFilled';
export { default as MobileOutlinedIcon } from './MobileOutlined';
export { default as MomentsOutlinedIcon } from './MomentsOutlined';
export { default as MoonOutlinedIcon } from './MoonOutlined';
export { default as MoreIcon } from './More';
export { default as MoreOutlinedIcon } from './MoreOutlined';
export { default as MoreVerticalOutlinedIcon } from './MoreVerticalOutlined';
export { default as MovieAppointmentOutlinedIcon } from './MovieAppointmentOutlined';
export { default as MovieFilledIcon } from './MovieFilled';
export { default as MovieOutlinedIcon } from './MovieOutlined';
export { default as NextFilledIcon } from './NextFilled';
export { default as NoteOutlinedIcon } from './NoteOutlined';
export { default as NoticeOutlinedIcon } from './NoticeOutlined';
export { default as OrderOutlinedIcon } from './OrderOutlined';
export { default as OrdersOutlinedIcon } from './OrdersOutlined';
export { default as PageEditOutlinedIcon } from './PageEditOutlined';
export { default as PaperOutlinedIcon } from './PaperOutlined';
export { default as PasswordOutlinedIcon } from './PasswordOutlined';
export { default as PhoneFilledIcon } from './PhoneFilled';
export { default as PhoneOutlinedIcon } from './PhoneOutlined';
export { default as PictureOutlinedIcon } from './PictureOutlined';
export { default as PlayCircleOutlinedIcon } from './PlayCircleOutlined';
export { default as PlayCircleOutlinedBoldIcon } from './PlayCircleOutlinedBold';
export { default as PreferentialEventFilledIcon } from './PreferentialEventFilled';
export { default as PublicWelfareOutlinedIcon } from './PublicWelfareOutlined';
export { default as QAFilledIcon } from './QAFilled';
export { default as QRCodeOutlinedIcon } from './QRCodeOutlined';
export { default as QuoteEndIcon } from './QuoteEnd';
export { default as QuoteStartIcon } from './QuoteStart';
export { default as RMBCircleOutlinedIcon } from './RMBCircleOutlined';
export { default as RMBRefundOutlinedIcon } from './RMBRefundOutlined';
export { default as RadioCheckedFilledIcon } from './RadioCheckedFilled';
export { default as RankingOutlinedIcon } from './RankingOutlined';
export { default as RefreshOutlinedIcon } from './RefreshOutlined';
export { default as ReportOutlinedIcon } from './ReportOutlined';
export { default as SaveOutlinedIcon } from './SaveOutlined';
export { default as ScanOutlinedIcon } from './ScanOutlined';
export { default as SearchGapOutlinedIcon } from './SearchGapOutlined';
export { default as SearchOutlinedIcon } from './SearchOutlined';
export { default as SettingsOutlinedIcon } from './SettingsOutlined';
export { default as SevenDayCalendarIcon } from './SevenDayCalendar';
export { default as ShareIcon } from './Share';
export { default as ShoppingCartOutlinedIcon } from './ShoppingCartOutlined';
export { default as ShowFilledIcon } from './ShowFilled';
export { default as ShowOutlinedIcon } from './ShowOutlined';
export { default as SmileFilledIcon } from './SmileFilled';
export { default as SmileOutlinedIcon } from './SmileOutlined';
export { default as SortIcon } from './Sort';
export { default as StarCircleOutlinedIcon } from './StarCircleOutlined';
export { default as StarFilledIcon } from './StarFilled';
export { default as StarFilledSharpIcon } from './StarFilledSharp';
export { default as StarOutlinedIcon } from './StarOutlined';
export { default as StarRoundedFilledIcon } from './StarRoundedFilled';
export { default as StoreFilledIcon } from './StoreFilled';
export { default as SuccessCircleFilledIcon } from './SuccessCircleFilled';
export { default as SuccessCircleFilledBoldIcon } from './SuccessCircleFilledBold';
export { default as SuccessCircleOutlinedIcon } from './SuccessCircleOutlined';
export { default as SuccessFilledIcon } from './SuccessFilled';
export { default as SuccessFilledBoldIcon } from './SuccessFilledBold';
export { default as SunOutlinedIcon } from './SunOutlined';
export { default as TaoPiaoPiaoLogoIcon } from './TaoPiaoPiaoLogo';
export { default as TaoTicketsLogoIcon } from './TaoTicketsLogo';
export { default as ThumbUpFilledIcon } from './ThumbUpFilled';
export { default as ThumbUpOutlinedIcon } from './ThumbUpOutlined';
export { default as TicketFilledIcon } from './TicketFilled';
export { default as TicketMachineOutlinedIcon } from './TicketMachineOutlined';
export { default as TicketOutlinedIcon } from './TicketOutlined';
export { default as TipsOutlinedIcon } from './TipsOutlined';
export { default as ToTopOutlinedIcon } from './ToTopOutlined';
export { default as TopicFilledIcon } from './TopicFilled';
export { default as TopicOutlinedIcon } from './TopicOutlined';
export { default as TrendingCircleFilledIcon } from './TrendingCircleFilled';
export { default as TrendingCircleOutlinedIcon } from './TrendingCircleOutlined';
export { default as TripleVerticalLineIcon } from './TripleVerticalLine';
export { default as UpIcon } from './Up';
export { default as UserFollowedOutlinedIcon } from './UserFollowedOutlined';
export { default as VerifiedFilledIcon } from './VerifiedFilled';
export { default as VideoOutlinedIcon } from './VideoOutlined';
export { default as VipCardFilledIcon } from './VipCardFilled';
export { default as VipFilledIcon } from './VipFilled';
export { default as VipOutlinedIcon } from './VipOutlined';
export { default as VolumeDownFilledIcon } from './VolumeDownFilled';
export { default as VolumeMuteFilledIcon } from './VolumeMuteFilled';
export { default as VolumeMuteOutlinedIcon } from './VolumeMuteOutlined';
export { default as VolumeUpFilledIcon } from './VolumeUpFilled';
export { default as VolumeUpOutlinedIcon } from './VolumeUpOutlined';
export { default as WeChatOutlinedIcon } from './WeChatOutlined';
export { default as WeiBoOutlinedIcon } from './WeiBoOutlined';
export { default as WifiOutlinedIcon } from './WifiOutlined';
export { default as XiaMiCircleOutlinedIcon } from './XiaMiCircleOutlined';
export { default as YouKuVipCircleOutlinedIcon } from './YouKuVipCircleOutlined';
export { default as ZoomInOutlinedIcon } from './ZoomInOutlined';
`},9367:function(g,u){"use strict";u.Z=`.icon-container {
  display: flex;
  color: #2e333e;
  font-size: 15px;
  width: 100%;

  .bui-radio-group {
    width: 80px;
    flex: 0 0 auto;
    margin-right: 12px;
  }

  .icon-panel {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }

  .bui-input-wrapper {
    width: 70%;
    background: var(--bui-color-bg-default);
    margin-bottom: 9px;
  }
}

.icon-container-hint {
  font-size: 13px;
  color: var(--bui-color-success);
  padding: 0 12px 9px;
}

.icon-container-content {
  overflow: auto;
}

.icon-container-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  align-items: center;
  border-radius: 10px;
  background-color: var(--bui-color-bg-view);
}

.modal-content div:first-child {
  font-weight: bolder;
  font-size: 20px;
}

.modal-content div:nth-child(n + 2) {
  user-select: all;
}

.modal-content div:nth-child(n + 2)::selection {
  background-color: rgba(0, 0, 0, 0.2);
}

.icon-item {
  width: 128px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--bui-color-fg-default);
  background: var(--bui-color-bg-default);
  flex-direction: column;
  border-radius: 6px;
  margin: 5px;
  padding: 9px;
  cursor: pointer;
}

.icon-name {
  font-size: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 5px 3px;
  text-align: center;
  width: 100%;
  color: var(--bui-color-fg-default);
}
`},91622:function(g,u){"use strict";u.Z=`import React, { useEffect, useState } from 'react';
import { Input, Modal, Radio, RadioGroup } from '@bifrostui/react';
import * as iconComponents from '../components';
import './index.less';

const allIconsMap = {};
const allIcons = Object.keys(iconComponents)
  .sort()
  .map((importName) => {
    let theme;
    if (importName.indexOf('Outlined') !== -1) {
      theme = 'Outlined';
    } else {
      theme = 'Filled';
    }

    const name = importName.replace(/(Outlined|Filled|)$/, '');
    const icon = {
      importName,
      name,
      theme,
      Component: iconComponents[importName],
    };
    allIconsMap[importName] = icon;
    return icon;
  });

const IconDemo = () => {
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('');
  const [icons, setIcons] = useState(allIcons);
  const [open, setOpen] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(null);

  useEffect(() => {
    setIcons(
      allIcons.filter((item) => {
        const category = theme?.toLowerCase() || '';
        const componentName = item.importName?.toLowerCase() || '';

        if (category === 'all') {
          return item;
        }

        if (
          category === 'others' &&
          componentName.indexOf('filled') === -1 &&
          componentName.indexOf('outlined') === -1
        ) {
          return item;
        }

        if (componentName.indexOf(category) !== -1) {
          return item;
        }
        return false;
      }),
    );
  }, [theme]);

  useEffect(() => {
    setIcons(
      allIcons.filter((item) => {
        if (
          item.importName?.toLowerCase().indexOf(search.toLowerCase()) !== -1
        ) {
          return item;
        }
        return false;
      }),
    );
  }, [search]);

  return (
    <div className="icon-container">
      <RadioGroup
        value={theme}
        onChange={(_, data) => {
          setTheme(data.value);
        }}
      >
        <Radio value="All">All</Radio>
        <Radio value="Filled">Filled</Radio>
        <Radio value="Outlined">Outlined</Radio>
        <Radio value="Others">Others</Radio>
      </RadioGroup>
      <div className="icon-panel">
        <Input
          placeholder="Search icons"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {search ? (
          <div className="icon-container-hint">
            {icons.length} matching results
          </div>
        ) : null}
        <div className="icon-container-content">
          {icons.map((icon) => {
            return (
              <div
                className="icon-item"
                key={icon.importName}
                title={icon.importName}
                onClick={() => {
                  setCurrentIcon(icon);
                  setOpen(true);
                }}
              >
                <icon.Component size="large" />
                <div className="icon-name">{icon.importName}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        className="icon-container-modal"
        open={open}
        onClose={() => {
          setOpen(false);
          setCurrentIcon(null);
        }}
      >
        <div className="modal-content">
          <div> {currentIcon?.importName}</div>
          <div>
            import {\`{ \${currentIcon?.importName} }\`} from
            &apos;@bifrostui/react&apos;;
          </div>
          {currentIcon ? (
            <currentIcon.Component style={{ fontSize: '100px' }} />
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default IconDemo;
`},67183:function(g,u){"use strict";u.Z=`import { isMini } from '@bifrostui/utils';
import React from 'react';
import SvgIcon from '../components/SvgIcon';

export default function createSvgIcon(
  path: React.ReactNode | string,
  displayName: string,
): typeof SvgIcon {
  const Component = (props, ref) => (
    <SvgIcon ref={ref} component={isMini ? 'div' : 'svg'} {...props}>
      {path}
    </SvgIcon>
  );

  Component.displayName = \`\${displayName}Icon\`;

  // @ts-ignore internal component
  return React.memo(React.forwardRef(Component));
}
`},96446:function(g,u,e){var b=e(37923);function s(A){if(Array.isArray(A))return b(A)}g.exports=s,g.exports.__esModule=!0,g.exports.default=g.exports},96936:function(g){function u(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}g.exports=u,g.exports.__esModule=!0,g.exports.default=g.exports},88619:function(g){function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}g.exports=u,g.exports.__esModule=!0,g.exports.default=g.exports},19632:function(g,u,e){var b=e(96446),s=e(96936),A=e(96263),v=e(88619);function S(x){return b(x)||s(x)||A(x)||v()}g.exports=S,g.exports.__esModule=!0,g.exports.default=g.exports}}]);
