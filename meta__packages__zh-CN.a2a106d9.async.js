"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[3866],{74734:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-action-sheet-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=h.sent,a=r.default,o=r.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.ActionSheet,n=t.ActionSheetItem,u=t.Button,s=t.Stack,h.abrupt("return",{default:function(){var x=o(!1),E=p()(x,2),b=E[0],C=E[1],S=function(){C(!0)},P=function(){C(!1)};return a.createElement(s,null,a.createElement(u,{onClick:S},"\u57FA\u7840\u4F7F\u7528"),a.createElement(l,{onClose:P,open:b},a.createElement(n,null,"\u590D\u5236"),a.createElement(n,null,"\u4FEE\u6539"),a.createElement(n,null,"\u5220\u9664")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-action-sheet-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=h.sent,a=r.default,o=r.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.ActionSheet,n=t.ActionSheetItem,u=t.Button,s=t.Stack,h.abrupt("return",{default:function(){var x=o(!1),E=p()(x,2),b=E[0],C=E[1],S=function(){C(!0)},P=function(){C(!1)};return a.createElement(s,null,a.createElement(u,{onClick:S},"\u53D6\u6D88\u6309\u94AE"),a.createElement(l,{onClose:P,cancelText:"\u53D6\u6D88",open:b},a.createElement(n,null,"\u590D\u5236"),a.createElement(n,null,"\u4FEE\u6539")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-action-sheet-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=h.sent,a=r.default,o=r.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.ActionSheet,n=t.ActionSheetItem,u=t.Button,s=t.Stack,h.abrupt("return",{default:function(){var x=o(!1),E=p()(x,2),b=E[0],C=E[1],S=function(){C(!0)},P=function(){C(!1)};return a.createElement(s,null,a.createElement(u,{onClick:S},"\u989D\u5916\u7684\u63CF\u8FF0"),a.createElement(l,{extra:"\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C",onClose:P,cancelText:"\u53D6\u6D88",open:b},a.createElement(n,null,"\u590D\u5236"),a.createElement(n,null,"\u4FEE\u6539")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-action-sheet-demo-zh-cn-3":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=h.sent,a=r.default,o=r.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.ActionSheet,n=t.ActionSheetItem,u=t.Button,s=t.Stack,h.abrupt("return",{default:function(){var x=o(!1),E=p()(x,2),b=E[0],C=E[1],S=function(){C(!0)},P=function(){C(!1)};return a.createElement(s,null,a.createElement(u,{onClick:S},"\u7981\u7528\u548C\u5371\u9669\u6309\u94AE"),a.createElement(l,{onClose:P,extra:"\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C",open:b,cancelText:"\u53D6\u6D88"},a.createElement(n,null,"\u590D\u5236"),a.createElement(n,{disabled:!0},"\u4FEE\u6539"),a.createElement(n,{color:"danger"},"\u5220\u9664")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-action-sheet-demo-zh-cn-4":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=h.sent,a=r.default,o=r.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.ActionSheet,n=t.ActionSheetItem,u=t.Button,s=t.Stack,h.abrupt("return",{default:function(){var x=o(!1),E=p()(x,2),b=E[0],C=E[1],S=function(){C(!0)},P=function(){C(!1)};return a.createElement(s,null,a.createElement(u,{onClick:S},"\u9009\u9879\u63CF\u8FF0\u4FE1\u606F"),a.createElement(l,{onClose:P,open:b},a.createElement(n,null,"\u590D\u5236"),a.createElement(n,{disabled:!0},"\u4FEE\u6539"),a.createElement(n,{color:"danger",description:"\u5220\u9664\u540E\u6570\u636E\u4E0D\u53EF\u6062\u590D"},"\u5220\u9664")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},70648:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(48305),c=e.n($),k=e(90228),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-alert-demo-zh-cn-0":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Alert,o=r.Stack,u.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"}},l.createElement(a,null,"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack alignItems="stretch" style={{ maxWidth: 350, margin: '0 auto' }}>
      <Alert>\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-zh-cn-1":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Alert,o=r.Stack,m.next=7,e.e(9975).then(e.bind(e,29975));case 7:return t=m.sent,l=t.HelpCircleOutlinedIcon,m.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){return u.createElement(o,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},u.createElement(a,null,"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),u.createElement(a,{icon:u.createElement(l,null)},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),u.createElement(a,{icon:!1},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 14:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-zh-cn-2":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Alert,o=r.Stack,m.next=7,e.e(9975).then(e.bind(e,29975));case 7:return t=m.sent,l=t.HelpCircleOutlinedIcon,m.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){return u.createElement(o,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},u.createElement(a,{icon:!1,marquee:!0},"\u3010\u5F00\u59CB\u3011\u9996\u90E8\u6D77\u5916\u7EF4\u548C\u9898\u6750\u5546\u4E1A\u5927\u7247\u9AD8\u71C3\u6765\u88AD\uFF0C\u805A\u7126\u4E2D\u56FD\u7EF4\u548C\u8B66\u5BDF\u9C9C\u4E3A\u4EBA\u77E5\u7684\u751F\u6B7B\u65F6\u523B\uFF01\u3010\u7ED3\u675F\u3011"),u.createElement(a,{marquee:!0,icon:u.createElement(l,null)},"\u3010\u5F00\u59CB\u3011\u9996\u90E8\u6D77\u5916\u7EF4\u548C\u9898\u6750\u5546\u4E1A\u5927\u7247\u9AD8\u71C3\u6765\u88AD\uFF0C\u805A\u7126\u4E2D\u56FD\u7EF4\u548C\u8B66\u5BDF\u9C9C\u4E3A\u4EBA\u77E5\u7684\u751F\u6B7B\u65F6\u523B\uFF01\u3010\u7ED3\u675F\u3011"))}});case 14:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-zh-cn-3":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Alert,o=r.Stack,u.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},l.createElement(a,null,"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{color:"success"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{color:"danger"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{color:"info"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-zh-cn-4":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Alert,o=r.Stack,u.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},l.createElement(a,{variant:"standard"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"standard",color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"standard",color:"danger"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"standard",color:"info"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"standard",color:"success"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-zh-cn-5":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Alert,o=r.Stack,u.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},l.createElement(a,{variant:"outlined"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"outlined",color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"outlined",color:"danger"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"outlined",color:"info"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"outlined",color:"success"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-alert-demo-zh-cn-6":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Alert,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=c()(h,2),x=f[0],E=f[1],b=n(!1),C=c()(b,2),S=C[0],P=C[1];return l.createElement(o,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},l.createElement(a,{color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),!x&&l.createElement(a,{color:"success",onClose:function(){E(!0)}},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),!S&&l.createElement(a,{action:l.createElement("div",null,"close"),onClose:function(){P(!0)}},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},50421:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-avatar-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Avatar,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,null,o.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-avatar-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Avatar,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{direction:"row",spacing:"10px"},o.createElement(d,null,"UC"),o.createElement(d,null,"UFCEAEF"))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar>UC</Avatar>
      <Avatar>UFCEAEF</Avatar>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-avatar-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=u.sent,d=v.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=u.sent,a=r.Avatar,o=r.Stack,u.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=u.sent,l=t.VipFilledIcon,u.abrupt("return",{default:function(){return d.createElement(o,{direction:"row",spacing:"10px"},d.createElement(a,null,d.createElement(l,null)))}});case 14:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-avatar-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Avatar,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{direction:"row",spacing:"10px"},o.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),o.createElement(d,{variant:"square",src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-avatar-demo-zh-cn-4":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Avatar,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{direction:"row",spacing:"10px"},o.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"xsmall"}),o.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"small"}),o.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"medium"}),o.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"large"}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-avatar-demo-zh-cn-5":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Avatar,r=v.AvatarGroup,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,null,t.createElement(r,null,t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-avatar-demo-zh-cn-6":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Avatar,r=v.AvatarGroup,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{direction:"column",spacing:"10px"},t.createElement(r,null,t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})),t.createElement(r,{variant:"square"},t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-avatar-demo-zh-cn-7":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Avatar,r=v.AvatarGroup,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,null,t.createElement(r,{maxCount:"2"},t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-avatar-demo-zh-cn-8":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Avatar,r=v.AvatarGroup,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{direction:"column",spacing:"10px"},t.createElement(r,null,t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})),t.createElement(r,{orientation:"left"},t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-avatar-demo-zh-cn-9":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Avatar,r=v.AvatarGroup,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,null,t.createElement(r,{maxCount:"2",spacing:"10px"},t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(d,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-zh-cn-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},85481:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-backdrop-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=m.sent,a=r.default,o=r.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Backdrop,n=t.Button,u=t.Stack,m.abrupt("return",{default:function(){var f=o(!1),x=p()(f,2),E=x[0],b=x[1],C=function(){b(!1)};return a.createElement(u,null,a.createElement(n,{onClick:function(){b(!0)}},"\u6253\u5F00\u5F39\u7A97\u80CC\u666F"),a.createElement(l,{open:E,onClick:C,style:{zIndex:"var(--bui-z-index-modal-backdrop)"}}))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-backdrop-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-backdrop-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=m.sent,a=r.default,o=r.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Backdrop,n=t.Button,u=t.Stack,m.abrupt("return",{default:function(){var f=o(!1),x=p()(f,2),E=x[0],b=x[1],C=function(){b(!1)};return a.createElement(u,null,a.createElement(n,{onClick:function(){b(!0)}},E?"\u5F39\u7A97\u80CC\u666F\u5DF2\u6253\u5F00\uFF08\u4E0D\u53EF\u89C1\uFF09\uFF0C\u70B9\u51FB\u4EFB\u610F\u90E8\u5206\u5173\u95ED":"\u6253\u5F00\u5F39\u7A97\u80CC\u666F"),a.createElement(l,{open:E,onClick:C,invisible:!0,style:{zIndex:"var(--bui-z-index-modal-backdrop)"}}))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-backdrop-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-backdrop-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=m.sent,a=r.default,o=r.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Backdrop,n=t.Button,u=t.Stack,m.abrupt("return",{default:function(){var f=o(!1),x=p()(f,2),E=x[0],b=x[1],C=function(){b(!1)};return a.createElement(u,null,a.createElement(n,{onClick:function(){b(!0)}},"2s\u6DE1\u5165\u6DE1\u51FA\u52A8\u6548\u6548\u679C"),a.createElement(l,{open:E,transitionDuration:2e3,onClick:C,style:{zIndex:"var(--bui-z-index-modal-backdrop)"}}))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-backdrop-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},76528:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-badge-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Avatar,r=v.Badge,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{spacing:"20px",direction:"row"},t.createElement(r,{content:"12"},t.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="20px" direction="row">
      <Badge content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-badge-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Badge,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,null,o.createElement(d,{content:"1",type:"standard"}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Badge content="1" type="standard" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-badge-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Avatar,r=v.Badge,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{spacing:"10px",direction:"row"},t.createElement(r,{color:"primary",type:"dot"},t.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="primary" type="dot">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-badge-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Avatar,r=v.Badge,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{spacing:"10px",direction:"row"},t.createElement(r,{color:"primary",type:"bubble",content:"12"},t.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="primary" type="bubble" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-badge-demo-zh-cn-4":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Avatar,r=v.Badge,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{spacing:"10px",direction:"row"},t.createElement(r,{color:"primary",variant:"contained",content:"12"},t.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})),t.createElement(r,{color:"primary",type:"bubble",variant:"contained",content:"12"},t.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-badge-demo-zh-cn-5":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Avatar,r=v.Badge,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{spacing:"20",direction:"row"},t.createElement(r,{color:"primary",variant:"outlined",content:"12"},t.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})),t.createElement(r,{color:"primary",variant:"outlined",type:"bubble",content:"12"},t.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-badge-demo-zh-cn-6":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Avatar,r=v.Badge,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,null,t.createElement(r,{content:100,maxCount:99},t.createElement(d,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Badge content={100} maxCount={99}>
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-badge-demo-zh-cn-7":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=u.sent,d=v.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=u.sent,a=r.Badge,o=r.Stack,u.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=u.sent,l=t.PhoneFilledIcon,u.abrupt("return",{default:function(){return d.createElement(o,{spacing:"10px",direction:"row"},d.createElement(a,{color:"success",content:"5"},d.createElement(l,{color:"success",style:{fontSize:"38px"}})),d.createElement(a,{color:"warning",content:"5"},d.createElement(l,{color:"warning",style:{fontSize:"38px"}})),d.createElement(a,{color:"info",content:"5"},d.createElement(l,{color:"info",style:{fontSize:"38px"}})),d.createElement(a,{color:"primary",content:"5"},d.createElement(l,{color:"primary",style:{fontSize:"38px"}})),d.createElement(a,{color:"danger",content:"5"},d.createElement(l,{color:"danger",style:{fontSize:"38px"}})))}});case 14:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-badge-demo-zh-cn-8":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=u.sent,d=v.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=u.sent,a=r.Badge,o=r.Stack,u.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=u.sent,l=t.PhoneFilledIcon,u.abrupt("return",{default:function(){return d.createElement(o,{spacing:"10px",direction:"row"},d.createElement(a,{color:"success",content:"5",variant:"outlined"},d.createElement(l,{color:"success",style:{fontSize:"38px"}})),d.createElement(a,{color:"warning",content:"5",variant:"outlined"},d.createElement(l,{color:"warning",style:{fontSize:"38px"}})),d.createElement(a,{color:"info",content:"5",variant:"outlined"},d.createElement(l,{color:"info",style:{fontSize:"38px"}})),d.createElement(a,{color:"primary",content:"5",variant:"outlined"},d.createElement(l,{color:"primary",style:{fontSize:"38px"}})),d.createElement(a,{color:"danger",content:"5",variant:"outlined"},d.createElement(l,{color:"danger",style:{fontSize:"38px"}})))}});case 14:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},94233:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-button-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Button,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{direction:"row",spacing:"8px",flexWrap:"wrap"},o.createElement(d,{color:"primary",variant:"text"},"\u6587\u5B57\u6309\u94AE"),o.createElement(d,{color:"primary"},"\u63CF\u8FB9\u6309\u94AE"),o.createElement(d,{color:"primary",variant:"contained"},"\u586B\u5145\u6309\u94AE"),o.createElement(d,{color:"primary",variant:"light"},"\u6D45\u4EAE\u6309\u94AE"))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-button-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Button,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{spacing:"8px"},o.createElement(r,{direction:"row",spacing:"8px"},o.createElement(d,{size:"small"},"\u5C0F\u53F7\u6309\u94AE"),o.createElement(d,{size:"medium"},"\u4E2D\u53F7\u6309\u94AE"),o.createElement(d,{size:"large"},"\u5927\u53F7\u6309\u94AE")),o.createElement(d,{size:"full"},"\u901A\u680F\u6309\u94AE"))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-button-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Button,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{direction:"row",spacing:"8px",flexWrap:"wrap"},o.createElement(d,{variant:"contained"},"\u53D6\u6D88"),o.createElement(d,{color:"primary",variant:"contained"},"\u8D2D\u7968"),o.createElement(d,{color:"success",variant:"contained"},"\u5F71\u57CE"),o.createElement(d,{color:"info",variant:"contained"},"\u7535\u5F71"),o.createElement(d,{color:"warning",variant:"contained"},"\u60F3\u770B"),o.createElement(d,{color:"danger",variant:"contained"},"\u7279\u60E0"),o.createElement(d,{color:"vip",variant:"contained"},"\u4F1A\u5458"))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-button-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Button,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{direction:"row",spacing:"8px"},o.createElement(d,{variant:"text",disabled:!0},"\u6587\u5B57\u7981\u7528"),o.createElement(d,{disabled:!0},"\u63CF\u8FB9\u7981\u7528"),o.createElement(d,{variant:"contained",disabled:!0},"\u586B\u5145\u7981\u7528"))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-button-demo-zh-cn-4":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=s.sent,d=v.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=s.sent,a=r.Button,o=r.Stack,s.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=s.sent,l=t.CalendarOutlinedIcon,n=t.HeartFilledIcon,s.abrupt("return",{default:function(){return d.createElement(o,{direction:"row",spacing:"8px"},d.createElement(a,{startIcon:d.createElement(n,{htmlColor:"linear-gradient(150deg, #FFFDFC 0%, #D5B198 100%)"})},"Heart"),d.createElement(a,{endIcon:d.createElement(l,null)},"Date"))}});case 15:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},7722:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return r}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v=e(40129),d=e(45924),r={"packages-bui-core-src-calendar-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h;return c()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Calendar,l=o.Stack,x.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=x.sent,u=n.default,x.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h(u().toDate()),C=p()(b,2),S=C[0],P=C[1],L=function(B,R){console.log("date change:",R),P(R.value)};return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{value:S,onChange:L})))}});case 15:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
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
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h;return c()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Calendar,l=o.Stack,x.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=x.sent,u=n.default,x.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h(u().toDate()),C=p()(b,2),S=C[0],P=C[1];return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{value:S,minDate:u().toDate(),maxDate:u().add(2,"month").toDate(),onChange:function(T,B){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",B),P(B.value)}})))}});case 15:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
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
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h;return c()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Calendar,l=o.Stack,x.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=x.sent,u=n.default,x.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h(u().toDate()),C=p()(b,2),S=C[0],P=C[1],L=function(B,R){console.log("date change:",R),P(R.value)};return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{hideDaysOutsideCurrentMonth:!0,value:S,onChange:L})))}});case 15:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
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
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-3":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h;return c()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Calendar,l=o.Stack,x.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=x.sent,u=n.default,x.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h(u().toDate()),C=p()(b,2),S=C[0],P=C[1],L=function(B,R){console.log("date change:",R),P(R.value)};return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{style:{"--handler-text-width":"90px"},onMonthChange:function(B,R){console.log("\u6708\u4EFD\u53D8\u5316\uFF1A",R)},headerBarFormat:"YYYY\u5E74MM\u6708",value:S,onChange:L})))}});case 15:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
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
          style={{ '--handler-text-width': '90px' }}
          onMonthChange={(e, res) => {
            console.log('\u6708\u4EFD\u53D8\u5316\uFF1A', res);
          }}
          headerBarFormat="YYYY\u5E74MM\u6708"
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-4":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h,f,x,E;return c()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=C.sent,t=o.Calendar,l=o.Stack,C.next=7,e.e(9975).then(e.bind(e,29975));case 7:return n=C.sent,u=n.DoubleArrowLeftTwoToneIcon,s=n.DoubleArrowRightTwoToneIcon,C.next=12,Promise.resolve().then(e.bind(e,40129));case 12:return m=C.sent,h=m.default,C.next=16,Promise.resolve().then(e.t.bind(e,75271,19));case 16:return f=C.sent,x=f.default,E=f.useState,C.abrupt("return",{default:function(){var P=E(h().toDate()),L=p()(P,2),T=L[0],B=L[1],R=function(M,z){console.log("date change:",z),B(z.value)};return x.createElement(l,null,x.createElement("div",{style:{width:"320px"}},x.createElement(t,{headerBarLeftIcon:function(M){var z=M.isMinMonth;return x.createElement(u,{htmlColor:z&&"#cccccc"})},headerBarRightIcon:function(M){var z=M.isMaxMonth;return x.createElement(s,{htmlColor:z&&"#cccccc"})},value:T,onChange:R})))}});case 20:case"end":return C.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import {
  DoubleArrowLeftTwoToneIcon,
  DoubleArrowRightTwoToneIcon,
} from '@bifrostui/icons';
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
          headerBarLeftIcon={({ isMinMonth }) => {
            return (
              <DoubleArrowLeftTwoToneIcon htmlColor={isMinMonth && '#cccccc'} />
            );
          }}
          headerBarRightIcon={({ isMaxMonth }) => {
            return (
              <DoubleArrowRightTwoToneIcon
                htmlColor={isMaxMonth && '#cccccc'}
              />
            );
          }}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-5":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h;return c()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Calendar,l=o.Stack,x.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=x.sent,u=n.default,x.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h(u().toDate()),C=p()(b,2),S=C[0],P=C[1],L=function(B,R){console.log("date change:",R),P(R.value)};return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{minDate:u().subtract(5,"year").toDate(),maxDate:u().add(5,"year").toDate(),enableSelectYear:!0,value:S,onChange:L})))}});case 15:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
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
          minDate={dayjs().subtract(5, 'year').toDate()}
          maxDate={dayjs().add(5, 'year').toDate()}
          enableSelectYear
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-6":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h;return c()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Calendar,l=o.Stack,x.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=x.sent,u=n.default,x.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h(u().toDate()),C=p()(b,2),S=C[0],P=C[1],L=function(B){return u(u(B).format("YYYYMMDD")).diff(u(u().format("YYYYMMDD")),"day")<0};return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{value:S,disabledDate:L,onChange:function(B,R){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",R),P(R.value)}})))}});case 15:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
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
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-7":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h;return c()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Calendar,l=o.Stack,x.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=x.sent,u=n.default,x.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h(u().toDate()),C=p()(b,2),S=C[0],P=C[1];return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{value:S,highlightDate:"weekend",onChange:function(T,B){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",u(B.value).format("YYYY-MM-DD")),P(B.value)}})))}});case 15:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
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
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-8":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h;return c()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Calendar,l=o.Stack,x.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=x.sent,u=n.default,x.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h([u().add(1,"day").toDate(),u().add(5,"day").toDate()]),C=p()(b,2),S=C[0],P=C[1];return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{mode:"range",value:S,onChange:function(T,B){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",B),P(B.value)}})))}});case 15:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
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
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-9":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h,f;return c()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=E.sent,t=o.Button,l=o.Calendar,n=o.Stack,E.next=8,Promise.resolve().then(e.bind(e,40129));case 8:return u=E.sent,s=u.default,E.next=12,Promise.resolve().then(e.t.bind(e,75271,19));case 12:return m=E.sent,h=m.default,f=m.useState,E.abrupt("return",{default:function(){var C=f(s().add(1,"month").toDate()),S=p()(C,2),P=S[0],L=S[1],T=f([s().add(30,"day").toDate(),s().add(33,"day").toDate()]),B=p()(T,2),R=B[0],D=B[1],M=function(){L(s().toDate())},z=function(){D([s().toDate(),s().add(6,"day").toDate()])};return h.createElement(n,null,h.createElement("div",{style:{width:"320px"}},h.createElement(t,{onClick:M},"\u56DE\u5230\u4ECA\u5929"),h.createElement(l,{mode:"single",value:P}),h.createElement(t,{onClick:z},"\u9009\u4E2D\u6700\u8FD1\u4E00\u5468"),h.createElement(l,{mode:"range",value:R})))}});case 16:case"end":return E.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Calendar, Stack } from '@bifrostui/react';
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
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-10":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Calendar,l=o.Stack,f.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=f.sent,u=n.default,f.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=f.sent,m=s.default,f.abrupt("return",{default:function(){return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{mode:"range",defaultValue:[u().add(1,"day").toDate(),u().add(7,"day").toDate()]})))}});case 14:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
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
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-11":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h,f,x;return c()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=b.sent,t=o.Calendar,l=o.Stack,b.next=7,Promise.resolve().then(e.bind(e,45924));case 7:return n=b.sent,u=n.default,b.next=11,Promise.resolve().then(e.bind(e,40129));case 11:return s=b.sent,m=s.default,b.next=15,Promise.resolve().then(e.t.bind(e,75271,19));case 15:return h=b.sent,f=h.default,x=h.useState,b.abrupt("return",{default:function(){var S=x(m().toDate()),P=p()(S,2),L=P[0],T=P[1],B=function(M){var z=M.day,K=M.disabled,j=m(z).isSame(m(),"day");return f.createElement("div",{className:u("bui-calendar-day",{disabled:K,today:j}),style:{flexDirection:"column"}},f.createElement("div",null,z&&m(z).format("D")),j&&f.createElement("div",{style:{fontSize:"10px"}},"\u4ECA\u5929"))},R=function(M,z){return T(z.value)};return f.createElement(l,null,f.createElement("div",{style:{width:"320px"}},f.createElement(t,{mode:"single",value:L,dateRender:B,onChange:R})))}});case 19:case"end":return b.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-11",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
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
};`},clsx:{type:"NPM",value:"1.2.1"},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{clsx:d,"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-calendar-demo-zh-cn-12":{component:i.memo(i.lazy(g()(c()().mark(function a(){var o,t,l,n,u,s,m,h,f,x;return c()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=b.sent,t=o.Calendar,l=o.Stack,b.next=7,Promise.resolve().then(e.bind(e,45924));case 7:return n=b.sent,u=n.default,b.next=11,Promise.resolve().then(e.bind(e,40129));case 11:return s=b.sent,m=s.default,b.next=15,Promise.resolve().then(e.t.bind(e,75271,19));case 15:return h=b.sent,f=h.default,x=h.useState,b.abrupt("return",{default:function(){var S=x(m().toDate()),P=p()(S,2),L=P[0],T=P[1],B=function(M){var z=["\u65E5","\u516D"].includes(M);return f.createElement("div",{key:M,className:u("bui-calendar-day",{today:z}),style:{flexDirection:"column"}},f.createElement("div",null,M),f.createElement("div",{style:{fontSize:"10px"}},z?"\u4F11":f.createElement(f.Fragment,null,"\xA0")))},R=function(M,z){return T(z.value)};return f.createElement(l,null,f.createElement("div",{style:{width:"320px"}},f.createElement(t,{mode:"single",value:L,weekRender:B,onChange:R})))}});case 19:case"end":return b.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-zh-cn-12",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
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
};`},clsx:{type:"NPM",value:"1.2.1"},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{clsx:d,"dayjs/esm/index":v,react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var a=g()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}}}},99600:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-card-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Card,r=v.CardHeader,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(d,{style:{width:"100%"}},t.createElement(r,{title:t.createElement("div",null,"\u7F8E\u5473\u5C0F\u98DF")}))))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-card-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Card,r=v.CardHeader,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(d,{style:{width:"100%"}},t.createElement(r,{subtitle:"\uFF08\u5927\u6876\u7206\u7C73\u82B11\u4EFD+300ml\u81EA\u5236\u5976\u83362\u676F\uFF09"}))))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-card-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Card,r=v.CardHeader,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(d,{style:{width:"100%"}},t.createElement(r,{title:"\u7F8E\u5473\u5C0F\u98DF",subtitle:"\uFF08\u5927\u6876\u7206\u7C73\u82B11\u4EFD+300ml\u81EA\u5236\u5976\u83362\u676F\uFF09"}))))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-card-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Card,r=v.CardHeader,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(d,{style:{width:"100%"}},t.createElement(r,{title:"\u8BA2\u5355",extra:"\u67E5\u770B\u66F4\u591A",onClick:function(m){console.log(m)}}))))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-card-demo-zh-cn-4":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Card,r=v.CardHeader,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(d,{style:{width:"100%"}},t.createElement(r,{title:"\u8BA2\u5355",extra:"\u67E5\u770B\u66F4\u591A",endIcon:!1,onClick:function(m){console.log(m)}}))))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-card-demo-zh-cn-5":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Card,r=v.CardContent,a=v.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(d,{style:{width:"100%"}},t.createElement(r,null,t.createElement("div",null,"\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4"),t.createElement("div",null,"\u53D6\u9910\u7801\uFF1A235634"),t.createElement("div",null,"\u624B\u673A\u53F7: 134****5427")))))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardContent, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-card-demo-zh-cn-6":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=m.sent,d=v.Button,r=v.Card,a=v.CardContent,o=v.CardFooter,t=v.CardHeader,l=v.Stack,m.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){return u.createElement(l,{style:{background:"#eee",padding:"20px"}},u.createElement(l,{style:{width:"270px"}},u.createElement(r,{style:{width:"100%"}},u.createElement(t,{title:"\u8BA2\u5355"}),u.createElement(a,null,u.createElement("div",null,"\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4"),u.createElement("div",null,"\u53D6\u9910\u7801\uFF1A235634"),u.createElement("div",null,"\u624B\u673A\u53F7: 134****5427")),u.createElement(o,null,u.createElement(d,{color:"success"},"\u7B7E\u6536")))))}});case 14:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-card-demo-zh-cn-7":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=m.sent,d=v.Button,r=v.Card,a=v.CardContent,o=v.CardFooter,t=v.CardHeader,l=v.Stack,m.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){return u.createElement(l,{style:{background:"#eee",padding:"20px"}},u.createElement(l,{style:{width:"270px"}},u.createElement(r,{style:{width:"100%"}},u.createElement(t,{title:"\u8BA2\u5355"}),u.createElement(a,null,u.createElement("div",null,"\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4"),u.createElement("div",null,"\u53D6\u9910\u7801\uFF1A235634"),u.createElement("div",null,"\u624B\u673A\u53F7: 134****5427")),u.createElement(o,null,u.createElement(d,{color:"success"},"\u7B7E\u6536")))))}});case 14:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-card-demo-zh-cn-8":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=u.sent,d=v.Card,r=v.CardContent,a=v.CardHeader,o=v.Stack,u.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,{style:{background:"#eee",padding:"20px"}},l.createElement(o,{style:{width:"270px"}},l.createElement(d,{style:{width:"100%"}},l.createElement(a,{title:"\u8D2D\u4E70\u5546\u54C1"}),l.createElement(r,null,l.createElement(d,{style:{width:"100%"}},l.createElement(a,{title:"\u751F\u9C9C\u6C34\u679C",onClick:function(h){console.log(h)},extra:"\u51716\u4EF6"}),l.createElement(r,null,l.createElement("div",null,"\u82F9\u679C*2"),l.createElement("div",null,"\u6728\u74DC*1"),l.createElement("div",null,"\u83E0\u83DC*3"))),l.createElement(d,{className:"subCard"},l.createElement(a,{title:"\u96F6\u98DF\u996E\u6599",onClick:function(h){console.log(h)},extra:"\u517114\u4EF6"}),l.createElement(r,null,l.createElement("div",null,"\u85AF\u7247*2"),l.createElement("div",null,"\u6A59\u6C41*2"),l.createElement("div",null,"\u706B\u817F\u80A0*10")))))))}});case 12:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardContent, CardHeader, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-card-demo-zh-cn-9":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Card,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{style:{background:"#eee",padding:"20px"}},o.createElement(r,{style:{width:"270px"}},o.createElement(d,{style:{padding:"10px"}},o.createElement("div",null,"\u914D\u6599\u8868"),o.createElement("div",null,"\u4E3B\u8981\u6210\u5206\uFF1A\u6C34\uFF0C\u751F\u725B\u4E73"),o.createElement("div",null,"\u4EA7\u54C1\u68C0\u9A8C\u5408\u683C"))))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-zh-cn-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},94120:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-checkbox-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Checkbox,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),x=f[0],E=f[1];return l.createElement(o,null,l.createElement(a,{checked:x,onChange:function(C,S){E(S.checked)}},"Checkbox"))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Checkbox,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),x=f[0],E=f[1];return l.createElement(o,null,l.createElement(a,{checked:x,onChange:function(C,S){E(S.checked)},inputProps:{className:"my-input"}},"Checkbox"))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Checkbox,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),x=f[0],E=f[1];return l.createElement(o,null,l.createElement(a,{checked:x,onChange:function(C,S){E(S.checked)},name:"myCheckbox",value:"tpp"},"Checkbox"))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-zh-cn-3":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Checkbox,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),x=f[0],E=f[1],b=n(!1),C=p()(b,2),S=C[0],P=C[1],L=n(!1),T=p()(L,2),B=T[0],R=T[1],D=n(!1),M=p()(D,2),z=M[0],K=M[1];return l.createElement(o,null,l.createElement("div",{style:{width:"100px"}},l.createElement(a,{labelPlacement:"top",checked:x,onChange:function(V,N){var X=N.checked;E(X)}},"\u6587\u6848\u5728\u4E0A\u8FB9"),l.createElement(a,{labelPlacement:"right",checked:S,onChange:function(V,N){var X=N.checked;P(X)}},"\u6587\u6848\u5728\u53F3\u8FB9"),l.createElement(a,{labelPlacement:"bottom",checked:B,onChange:function(V,N){var X=N.checked;R(X)}},"\u6587\u6848\u5728\u4E0B\u8FB9"),l.createElement(a,{labelPlacement:"left",checked:z,onChange:function(V,N){var X=N.checked;K(X)}},"\u6587\u6848\u5728\u5DE6\u8FB9")))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-zh-cn-4":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s,m;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=f.sent,a=r.default,o=r.useState,f.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=f.sent,l=t.Checkbox,n=t.Stack,f.next=12,e.e(9975).then(e.bind(e,29975));case 12:return u=f.sent,s=u.HeartFilledIcon,m=u.HeartOutlinedIcon,f.abrupt("return",{default:function(){var E=o(!1),b=p()(E,2),C=b[0],S=b[1];return a.createElement(n,null,a.createElement(l,{checked:C,onChange:function(L,T){S(T.checked)},icon:a.createElement(m,{htmlColor:"#ccc"}),checkedIcon:a.createElement(s,{color:"primary"})},"Checkbox"))}});case 16:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-zh-cn-5":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Checkbox,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,1),x=f[0];return l.createElement(o,null,l.createElement(a,{checked:x,disabled:!0},"Checkbox"))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-zh-cn-6":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Checkbox,o=r.CheckboxGroup,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u([]),x=p()(f,2),E=x[0],b=x[1],C=function(P,L){console.log("handleGroupChange",P,L),b(L.value)};return n.createElement(t,null,n.createElement(o,{value:E,onChange:C},n.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),n.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),n.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B")))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-zh-cn-7":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Button,o=r.Checkbox,t=r.CheckboxGroup,l=r.Stack,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=h.sent,u=n.default,s=n.useState,h.abrupt("return",{default:function(){var x=s(["\u6C34\u95E8\u6865","\u6DD8\u7968\u7968","\u559C\u6D0B\u6D0B"]),E=p()(x,2),b=E[0],C=E[1],S=s(!0),P=p()(S,2),L=P[0],T=P[1];return u.createElement(l,null,u.createElement("div",{style:{width:"100px"}},u.createElement(a,{onClick:function(){var R=b.length?[]:["\u6C34\u95E8\u6865","\u6DD8\u7968\u7968","\u559C\u6D0B\u6D0B"];C(R)}},b.length?"Uncheck":"Check"," All"),u.createElement(t,{value:b},u.createElement(o,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),u.createElement(o,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),u.createElement(o,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),u.createElement("div",{style:{width:"100px"}},u.createElement(a,{onClick:function(){T(!L)}},L?"\u53D6\u6D88":"\u9009\u4E2D"),u.createElement(o,{checked:L},"\u6DD8\u7968\u7968")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-checkbox-demo-zh-cn-8":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Checkbox,o=r.CheckboxGroup,t=r.Stack,s.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=s.sent,n=l.default,s.abrupt("return",{default:function(){return n.createElement(t,null,n.createElement("div",{style:{width:"100px"}},n.createElement("div",null,"CheckboxGroup\uFF1A"),n.createElement(o,{defaultValue:["\u6C34\u95E8\u6865","\u6DD8\u7968\u7968","\u559C\u6D0B\u6D0B"]},n.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),n.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),n.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),n.createElement("div",null,n.createElement("div",null,"Checkbox\uFF1A"),n.createElement(a,{defaultChecked:!0},"\u6DD8\u7968\u7968")))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},6:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-city-selector-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=n.sent,d=v.default,n.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=n.sent,a=r.CitySelector,o=[{code:"110100",name:"\u5317\u4EAC"},{code:"310100",name:"\u4E0A\u6D77"},{code:"440100",name:"\u5E7F\u5DDE"}],t=[{groupName:"A",cities:[{code:"610900",name:"\u5B89\u5EB7"},{code:"210300",name:"\u978D\u5C71"}]},{groupName:"B",cities:[{code:"652800",name:"\u5DF4\u97F3\u90ED\u695E"},{code:"511900",name:"\u5DF4\u4E2D"}]},{groupName:"C",cities:[{code:"130900",name:"\u6CA7\u5DDE"},{code:"220100",name:"\u957F\u6625"}]},{groupName:"D",cities:[{code:"532900",name:"\u5927\u7406"},{code:"210200",name:"\u5927\u8FDE"}]}],n.abrupt("return",{default:function(){var s={code:"110100",name:"\u5317\u4EAC"},m={code:"310100",name:"\u4E0A\u6D77"},h=function(E){console.log(E)},f=function(){console.log("onHide")};return d.createElement(a,{cities:t,onSelect:h,selectedCity:s,selectedCityGroupName:"\u5F53\u524D\u57CE\u5E02",currentCity:m,currentCityGroupName:"\u5B9A\u4F4D\u57CE\u5E02",hotCities:o,hotCitiesGroupName:"\u70ED\u95E8\u57CE\u5E02",onClose:f,style:{height:"500px"}})}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-city-selector-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { CitySelector } from '@bifrostui/react';

const hotCities = [
  {
    code: '110100',
    name: '\u5317\u4EAC',
  },
  {
    code: '310100',
    name: '\u4E0A\u6D77',
  },
  {
    code: '440100',
    name: '\u5E7F\u5DDE',
  },
];

const cities = [
  {
    groupName: 'A',
    cities: [
      {
        code: '610900',
        name: '\u5B89\u5EB7',
      },
      {
        code: '210300',
        name: '\u978D\u5C71',
      },
    ],
  },
  {
    groupName: 'B',
    cities: [
      {
        code: '652800',
        name: '\u5DF4\u97F3\u90ED\u695E',
      },
      {
        code: '511900',
        name: '\u5DF4\u4E2D',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
      {
        code: '130900',
        name: '\u6CA7\u5DDE',
      },
      {
        code: '220100',
        name: '\u957F\u6625',
      },
    ],
  },
  {
    groupName: 'D',
    cities: [
      {
        code: '532900',
        name: '\u5927\u7406',
      },
      {
        code: '210200',
        name: '\u5927\u8FDE',
      },
    ],
  },
];

export default () => {
  const selectedCity = {
    code: '110100',
    name: '\u5317\u4EAC',
  };
  const currentCity = {
    code: '310100',
    name: '\u4E0A\u6D77',
  };
  const onSelect = (city) => {
    console.log(city);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <CitySelector
      cities={cities}
      onSelect={onSelect}
      selectedCity={selectedCity}
      selectedCityGroupName="\u5F53\u524D\u57CE\u5E02"
      currentCity={currentCity}
      currentCityGroupName="\u5B9A\u4F4D\u57CE\u5E02"
      hotCities={hotCities}
      hotCitiesGroupName="\u70ED\u95E8\u57CE\u5E02"
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-city-selector-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=n.sent,d=v.default,n.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=n.sent,a=r.CitySelector,o=[{code:"110100",name:"\u5317\u4EAC"},{code:"310100",name:"\u4E0A\u6D77"},{code:"440100",name:"\u5E7F\u5DDE"}],t=[{groupName:"A",cities:[{code:"610900",name:"\u5B89\u5EB7"},{code:"210300",name:"\u978D\u5C71"}]},{groupName:"B",cities:[{code:"652800",name:"\u5DF4\u97F3\u90ED\u695E"},{code:"511900",name:"\u5DF4\u4E2D"}]},{groupName:"C",cities:[{code:"130900",name:"\u6CA7\u5DDE"},{code:"220100",name:"\u957F\u6625"}]},{groupName:"D",cities:[{code:"532900",name:"\u5927\u7406"},{code:"210200",name:"\u5927\u8FDE"}]}],n.abrupt("return",{default:function(){var s={code:"110100",name:"\u5317\u4EAC"},m={code:"310100",name:"\u4E0A\u6D77"},h=function(E){console.log(E)},f=function(){console.log("onHide")};return d.createElement(a,{cities:t,onSelect:h,selectedCity:s,selectedCityGroupName:"\u5F53\u524D\u57CE\u5E02",currentCity:m,currentCityGroupName:"\u5B9A\u4F4D\u57CE\u5E02",hotCities:o,hotCitiesGroupName:"\u70ED\u95E8\u57CE\u5E02",title:"\u9009\u62E9\u57CE\u5E02",disableIndex:!0,onClose:f,style:{height:"500px"}})}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-city-selector-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { CitySelector } from '@bifrostui/react';

const hotCities = [
  {
    code: '110100',
    name: '\u5317\u4EAC',
  },
  {
    code: '310100',
    name: '\u4E0A\u6D77',
  },
  {
    code: '440100',
    name: '\u5E7F\u5DDE',
  },
];

const cities = [
  {
    groupName: 'A',
    cities: [
      {
        code: '610900',
        name: '\u5B89\u5EB7',
      },
      {
        code: '210300',
        name: '\u978D\u5C71',
      },
    ],
  },
  {
    groupName: 'B',
    cities: [
      {
        code: '652800',
        name: '\u5DF4\u97F3\u90ED\u695E',
      },
      {
        code: '511900',
        name: '\u5DF4\u4E2D',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
      {
        code: '130900',
        name: '\u6CA7\u5DDE',
      },
      {
        code: '220100',
        name: '\u957F\u6625',
      },
    ],
  },
  {
    groupName: 'D',
    cities: [
      {
        code: '532900',
        name: '\u5927\u7406',
      },
      {
        code: '210200',
        name: '\u5927\u8FDE',
      },
    ],
  },
];

export default () => {
  const selectedCity = {
    code: '110100',
    name: '\u5317\u4EAC',
  };
  const currentCity = {
    code: '310100',
    name: '\u4E0A\u6D77',
  };

  const onSelect = (city) => {
    console.log(city);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <CitySelector
      cities={cities}
      onSelect={onSelect}
      selectedCity={selectedCity}
      selectedCityGroupName="\u5F53\u524D\u57CE\u5E02"
      currentCity={currentCity}
      currentCityGroupName="\u5B9A\u4F4D\u57CE\u5E02"
      hotCities={hotCities}
      hotCitiesGroupName="\u70ED\u95E8\u57CE\u5E02"
      title="\u9009\u62E9\u57CE\u5E02"
      disableIndex
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-city-selector-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=n.sent,d=v.default,n.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=n.sent,a=r.CitySelector,o=[{code:"110100",name:"\u5317\u4EAC"},{code:"310100",name:"\u4E0A\u6D77"},{code:"440100",name:"\u5E7F\u5DDE"}],t=[{groupName:"A",cities:[{code:"610900",name:"\u5B89\u5EB7"},{code:"210300",name:"\u978D\u5C71"}]},{groupName:"B",cities:[{code:"652800",name:"\u5DF4\u97F3\u90ED\u695E"},{code:"511900",name:"\u5DF4\u4E2D"}]},{groupName:"C",cities:[{code:"130900",name:"\u6CA7\u5DDE"},{code:"220100",name:"\u957F\u6625"}]},{groupName:"D",cities:[{code:"532900",name:"\u5927\u7406"},{code:"210200",name:"\u5927\u8FDE"}]}],n.abrupt("return",{default:function(){var s={code:"110100",name:"\u5317\u4EAC"},m={code:"310100",name:"\u4E0A\u6D77"},h=function(E){console.log(E)},f=function(){console.log("onHide")};return d.createElement(a,{cities:t,onSelect:h,selectedCity:s,selectedCityGroupName:"\u5F53\u524D\u57CE\u5E02",currentCity:m,currentCityGroupName:"\u5B9A\u4F4D\u57CE\u5E02",hotCities:o,hotCitiesGroupName:"\u70ED\u95E8\u57CE\u5E02",onClose:f,disableIndex:!0,style:{height:"500px"}})}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-city-selector-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { CitySelector } from '@bifrostui/react';

const hotCities = [
  {
    code: '110100',
    name: '\u5317\u4EAC',
  },
  {
    code: '310100',
    name: '\u4E0A\u6D77',
  },
  {
    code: '440100',
    name: '\u5E7F\u5DDE',
  },
];

const cities = [
  {
    groupName: 'A',
    cities: [
      {
        code: '610900',
        name: '\u5B89\u5EB7',
      },
      {
        code: '210300',
        name: '\u978D\u5C71',
      },
    ],
  },
  {
    groupName: 'B',
    cities: [
      {
        code: '652800',
        name: '\u5DF4\u97F3\u90ED\u695E',
      },
      {
        code: '511900',
        name: '\u5DF4\u4E2D',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
      {
        code: '130900',
        name: '\u6CA7\u5DDE',
      },
      {
        code: '220100',
        name: '\u957F\u6625',
      },
    ],
  },
  {
    groupName: 'D',
    cities: [
      {
        code: '532900',
        name: '\u5927\u7406',
      },
      {
        code: '210200',
        name: '\u5927\u8FDE',
      },
    ],
  },
];

export default () => {
  const selectedCity = {
    code: '110100',
    name: '\u5317\u4EAC',
  };
  const currentCity = {
    code: '310100',
    name: '\u4E0A\u6D77',
  };

  const onSelect = (city) => {
    console.log(city);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <CitySelector
      cities={cities}
      onSelect={onSelect}
      selectedCity={selectedCity}
      selectedCityGroupName="\u5F53\u524D\u57CE\u5E02"
      currentCity={currentCity}
      currentCityGroupName="\u5B9A\u4F4D\u57CE\u5E02"
      hotCities={hotCities}
      hotCitiesGroupName="\u70ED\u95E8\u57CE\u5E02"
      onClose={onHide}
      disableIndex
      style={{ height: '500px' }}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},47149:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-countdown-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Countdown,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,null,o.createElement(d,{remainingTime:24*60*60*1e3,format:"HH:mm:ss"}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown remainingTime={24 * 60 * 60 * 1000} format="HH:mm:ss" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-countdown-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Countdown,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,null,o.createElement(d,{endTimestamp:4102415999e3,format:"YY:MM:DD:HH:mm:ss"}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown endTimestamp={4102415999000} format="YY:MM:DD:HH:mm:ss" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-countdown-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Countdown,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,null,o.createElement(d,{serverTimestamp:Date.now()-10*1e3,endTimestamp:4102415999e3,format:"YY:MM:DD:HH:mm:ss"}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-countdown-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Countdown,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,null,o.createElement(d,{endTimestamp:4102415999e3,format:"YY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206ss\u79D2SSS\u6BEB\u79D2"}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-countdown-demo-zh-cn-4":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Countdown,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,null,o.createElement(d,{endTimestamp:4102415999e3,format:"YY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206ss\u79D2",unitStyle:{color:"var(--bui-color-primary)",fontWeight:600,fontSize:"16px"}}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-countdown-demo-zh-cn-5":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Countdown,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,null,o.createElement(d,{remainingTime:24*60*60*1e3,valueStyle:[{color:"var(--bui-color-primary)",fontWeight:600,fontSize:"16px"},{color:"var(--bui-color-primary)",fontWeight:600,fontSize:"20px"}]}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-countdown-demo-zh-cn-6":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Countdown,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,null,o.createElement(d,{remainingTime:24*60*60*1e3,format:"HH\u65F6mm\u5206ss\u79D2",timeSliceStyle:{backgroundColor:"var(--bui-color-bg-default)",padding:"4px",borderRadius:"4px",marginRight:"4px"}}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-countdown-demo-zh-cn-7":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Countdown,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){var u=function(){console.log("\u5012\u8BA1\u65F6\u5DF2\u7ED3\u675F\uFF01")};return o.createElement(r,null,o.createElement(d,{remainingTime:10*1e3,onFinish:u}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-countdown-demo-zh-cn-8":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Countdown,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){var u=function(m){console.log("\u6B63\u5728\u5012\u8BA1\u65F6\uFF0C\u5F53\u524D\u6570\u636E",m)};return o.createElement(r,null,o.createElement(d,{remainingTime:10*1e3,onChange:u}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-countdown-demo-zh-cn-9":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Countdown,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,null,o.createElement(d,{remainingTime:24*60*60*1e3,renderContent:function(s){var m=s.hours,h=s.minutes,f=s.seconds;return o.createElement("span",null,"\u8DDD\u79BB\u5012\u8BA1\u65F6\u7ED3\u675F\u8FD8\u5269",m,"\u5C0F\u65F6",h,"\u5206\u949F",f,"\u79D2")}}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-zh-cn-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},61286:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(48305),c=e.n($),k=e(90228),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-dialog-demo-zh-cn-0":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Stack,o=r.Button,t=r.Dialog,l=r.Toast,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){var f=function(){var x=g()(p()().mark(function E(){var b;return p()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,t({header:"\u6807\u9898",message:"\u8FD9\u662F\u63CF\u8FF0\u5185\u5BB9"});case 2:b=S.sent,l(b?{message:"\u70B9\u51FB\u4E86\u786E\u8BA4",position:"bottom"}:{message:"\u70B9\u51FB\u4E86\u53D6\u6D88",position:"bottom"});case 4:case"end":return S.stop()}},E)}));return function(){return x.apply(this,arguments)}}();return u.createElement(a,{direction:"row",spacing:"10px"},u.createElement(o,{onClick:function(){return t("\u662F\u5426\u63D0\u4EA4\u7533\u8BF7")}},"\u9ED8\u8BA4\u4E3Aconfirm"),u.createElement(o,{onClick:function(){return t.confirm({header:"\u6807\u9898",message:"\u8BE6\u7EC6\u63CF\u8FF0"})}},"confirm"),u.createElement(o,{onClick:f},"\u7B49\u5F85confirm\u5B8C\u6210"))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-dialog-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickConfirm = async () => {
    const res = await Dialog({
      header: '\u6807\u9898',
      message: '\u8FD9\u662F\u63CF\u8FF0\u5185\u5BB9',
    });
    if (res) {
      Toast({ message: '\u70B9\u51FB\u4E86\u786E\u8BA4', position: 'bottom' });
    } else {
      Toast({ message: '\u70B9\u51FB\u4E86\u53D6\u6D88', position: 'bottom' });
    }
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={() => Dialog('\u662F\u5426\u63D0\u4EA4\u7533\u8BF7')}>\u9ED8\u8BA4\u4E3Aconfirm</Button>
      <Button
        onClick={() =>
          Dialog.confirm({
            header: '\u6807\u9898',
            message: '\u8BE6\u7EC6\u63CF\u8FF0',
          })
        }
      >
        confirm
      </Button>
      <Button onClick={handleClickConfirm}>\u7B49\u5F85confirm\u5B8C\u6210</Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-dialog-demo-zh-cn-1":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,a=r.Stack,o=r.Button,t=r.Dialog,l=r.Toast,n=r.useTheme,u=r.ThemeProvider,f.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=f.sent,m=s.default,f.abrupt("return",{default:function(){var E=n(),b=t.useDialog(),C=c()(b,2),S=C[0],P=C[1],L=function(){var T=g()(p()().mark(function B(){var R;return p()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,S({header:"\u6807\u9898",message:"\u8FD9\u662F\u63CF\u8FF0\u5185\u5BB9"});case 2:R=M.sent,l(R?{message:"\u70B9\u51FB\u4E86\u786E\u8BA4",position:"bottom"}:{message:"\u70B9\u51FB\u4E86\u53D6\u6D88",position:"bottom"});case 4:case"end":return M.stop()}},B)}));return function(){return T.apply(this,arguments)}}();return m.createElement(u,{locale:E.locale},P,m.createElement(a,{direction:"row",spacing:"10px"},m.createElement(o,{onClick:function(){return S("\u662F\u5426\u63D0\u4EA4\u7533\u8BF7")}},"\u9ED8\u8BA4\u4E3Aconfirm"),m.createElement(o,{onClick:function(){return S.confirm({header:"\u6807\u9898",message:"\u8BE6\u7EC6\u63CF\u8FF0"})}},"confirm"),m.createElement(o,{onClick:L},"\u7B49\u5F85confirm\u5B8C\u6210")))}});case 14:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-dialog-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  const handleClickConfirm = async () => {
    const res = await dialog({
      header: '\u6807\u9898',
      message: '\u8FD9\u662F\u63CF\u8FF0\u5185\u5BB9',
    });
    if (res) {
      Toast({ message: '\u70B9\u51FB\u4E86\u786E\u8BA4', position: 'bottom' });
    } else {
      Toast({ message: '\u70B9\u51FB\u4E86\u53D6\u6D88', position: 'bottom' });
    }
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={() => dialog('\u662F\u5426\u63D0\u4EA4\u7533\u8BF7')}>\u9ED8\u8BA4\u4E3Aconfirm</Button>
        <Button
          onClick={() =>
            dialog.confirm({
              header: '\u6807\u9898',
              message: '\u8BE6\u7EC6\u63CF\u8FF0',
            })
          }
        >
          confirm
        </Button>
        <Button onClick={handleClickConfirm}>\u7B49\u5F85confirm\u5B8C\u6210</Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-dialog-demo-zh-cn-2":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m,h;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=x.sent,a=r.Stack,o=r.Button,t=r.Dialog,l=r.Toast,n=r.useTheme,u=r.ThemeProvider,x.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=x.sent,m=s.default,h=function(b){return new Promise(function(C){return setTimeout(C,b)})},x.abrupt("return",{default:function(){var b=n(),C=t.useDialog(),S=c()(C,2),P=S[0],L=S[1],T=function(){var R=g()(p()().mark(function D(){var M;return p()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,P.confirm({message:"\u662F\u5426\u63D0\u4EA4\u7533\u8BF7",onConfirm:function(){var j=g()(p()().mark(function N(){return p()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,h(3e3);case 2:l({icon:"success",content:"\u63D0\u4EA4\u6210\u529F",position:"bottom"});case 3:case"end":return H.stop()}},N)}));function V(){return j.apply(this,arguments)}return V}()});case 2:M=K.sent,console.log("res",M);case 4:case"end":return K.stop()}},D)}));return function(){return R.apply(this,arguments)}}(),B=function(){var R=g()(p()().mark(function D(){var M;return p()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,P.confirm({message:"\u662F\u5426\u63D0\u4EA4\u7533\u8BF7",onConfirm:function(){var j=g()(p()().mark(function N(){return p()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,h(3e3);case 2:throw l({icon:"fail",content:"\u63D0\u4EA4\u5931\u8D25",position:"bottom"}),new Error;case 4:case"end":return H.stop()}},N)}));function V(){return j.apply(this,arguments)}return V}()});case 2:M=K.sent,console.log("res",M);case 4:case"end":return K.stop()}},D)}));return function(){return R.apply(this,arguments)}}();return m.createElement(u,{locale:b},L,m.createElement(a,{direction:"row",spacing:"10px"},m.createElement(o,{onClick:T},"\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u6210\u529F"),m.createElement(o,{onClick:B},"\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u5931\u8D25")))}});case 15:case"end":return x.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-dialog-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

const sleep = (time: number) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, time));

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  const handleClickConfirm = async () => {
    const res = await dialog.confirm({
      message: '\u662F\u5426\u63D0\u4EA4\u7533\u8BF7',
      onConfirm: async () => {
        await sleep(3000);
        Toast({
          icon: 'success',
          content: '\u63D0\u4EA4\u6210\u529F',
          position: 'bottom',
        });
      },
    });
    console.log('res', res);
  };

  const handleClickConfirmError = async () => {
    const res = await dialog.confirm({
      message: '\u662F\u5426\u63D0\u4EA4\u7533\u8BF7',
      onConfirm: async () => {
        await sleep(3000);
        Toast({
          icon: 'fail',
          content: '\u63D0\u4EA4\u5931\u8D25',
          position: 'bottom',
        });
        throw new Error();
      },
    });
    console.log('res', res);
  };

  return (
    <ThemeProvider locale={theme}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={handleClickConfirm}>\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u6210\u529F</Button>
        <Button onClick={handleClickConfirmError}>\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u5931\u8D25</Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-dialog-demo-zh-cn-3":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Stack,o=r.Button,t=r.Dialog,l=r.useTheme,n=r.ThemeProvider,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=h.sent,s=u.default,h.abrupt("return",{default:function(){var x=l(),E=t.useDialog(),b=c()(E,2),C=b[0],S=b[1];return s.createElement(n,{locale:x},S,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(o,{onClick:function(){C.confirm({header:"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u6D88\u606F",message:s.createElement(s.Fragment,null,s.createElement("div",null,"\u8BF7\u53C2\u8003\u5982\u4E0B\u8BF4\u660E"),s.createElement("div",null,"\u8BE6\u60C5\u8BF4\u660E\u8BF7\u67E5\u9605",s.createElement("span",null,"\u64CD\u4F5C\u6307\u5F15")))})}},"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u6D88\u606F"),s.createElement(o,{onClick:function(){C.confirm({header:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u6587\u672C",confirmText:"\u5220\u9664"})}},"\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u6587\u672C")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-dialog-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Dialog,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  return (
    <ThemeProvider locale={theme}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            dialog.confirm({
              header: '\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u6D88\u606F',
              message: (
                <>
                  <div>\u8BF7\u53C2\u8003\u5982\u4E0B\u8BF4\u660E</div>
                  <div>
                    \u8BE6\u60C5\u8BF4\u660E\u8BF7\u67E5\u9605<span>\u64CD\u4F5C\u6307\u5F15</span>
                  </div>
                </>
              ),
            });
          }}
        >
          \u81EA\u5B9A\u4E49\u6807\u9898\u548C\u6D88\u606F
        </Button>
        <Button
          onClick={() => {
            dialog.confirm({
              header: '\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u6587\u672C',
              confirmText: '\u5220\u9664',
            });
          }}
        >
          \u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u6587\u672C
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-dialog-demo-zh-cn-4":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,a=r.Stack,o=r.Button,t=r.Dialog,l=r.Toast,n=r.useTheme,u=r.ThemeProvider,f.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=f.sent,m=s.default,f.abrupt("return",{default:function(){var E=n(),b=t.useDialog(),C=c()(b,2),S=C[0],P=C[1],L=function(){var T=g()(p()().mark(function B(){var R;return p()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,S.prompt({header:"\u6807\u9898",placeholder:"\u81EA\u5B9A\u4E49\u5360\u4F4D\u6587\u672C"});case 2:R=M.sent,R&&l("\u8F93\u5165\u503C\u4E3A".concat(R));case 4:case"end":return M.stop()}},B)}));return function(){return T.apply(this,arguments)}}();return m.createElement(u,{locale:E},P,m.createElement(a,{direction:"row",spacing:"10px"},m.createElement(o,{onClick:L},"prompt"),m.createElement(o,{onClick:function(){S.prompt({header:"\u6807\u9898",placeholder:"\u81EA\u5B9A\u4E49\u5360\u4F4D\u6587\u672C",InputProps:{clearable:!0}})}},"\u4F20\u5165InputProps")))}});case 14:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-dialog-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();
  const handleClickPrompt = async () => {
    const res = await dialog.prompt({
      header: '\u6807\u9898',
      placeholder: '\u81EA\u5B9A\u4E49\u5360\u4F4D\u6587\u672C',
    });
    res && Toast(\`\u8F93\u5165\u503C\u4E3A\${res}\`);
  };

  return (
    <ThemeProvider locale={theme}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={handleClickPrompt}>prompt</Button>
        <Button
          onClick={() => {
            dialog.prompt({
              header: '\u6807\u9898',
              placeholder: '\u81EA\u5B9A\u4E49\u5360\u4F4D\u6587\u672C',
              InputProps: {
                clearable: true,
              },
            });
          }}
        >
          \u4F20\u5165InputProps
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},68293:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-divider-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Divider,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",o.createElement(d,{style:{margin:"0 6px"}}),"\u53F3\u8FB9")}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider style={{ margin: '0 6px' }} />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-divider-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Divider,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",o.createElement(d,{style:{margin:"0 6px"},dashed:!0}),"\u53F3\u8FB9")}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider style={{ margin: '0 6px' }} dashed />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-divider-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Divider,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",o.createElement(d,{style:{margin:"0 6px"}}),"\u53F3\u8FB9")}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider style={{ margin: '0 6px' }} />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-divider-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Divider,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",o.createElement(d,{direction:"horizontal"}),"\u4E0B\u8FB9")}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      \u4E0A\u8FB9
      <Divider direction="horizontal" />
      \u4E0B\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-divider-demo-zh-cn-4":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Divider,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",o.createElement(d,{size:"12px",style:{margin:"0 6px"}}),"\u53F3\u8FB9")}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider size="12px" style={{ margin: '0 6px' }} />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-divider-demo-zh-cn-5":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Divider,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",o.createElement(d,{direction:"horizontal",size:"100px"}),"\u4E0B\u8FB9")}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      \u4E0A\u8FB9
      <Divider direction="horizontal" size="100px" />
      \u4E0B\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-divider-demo-zh-cn-6":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Divider,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",o.createElement(d,{direction:"horizontal",size:"60px",style:{margin:"6px 0"}},"\u6211\u662F\u5206\u5272\u7EBF"),"\u4E0B\u8FB9")}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-divider-demo-zh-cn-7":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Divider,r=v.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(r,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",o.createElement(d,{direction:"horizontal",style:{borderBottomWidth:"2px"}}),"\u4E0B\u8FB9")}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      \u4E0A\u8FB9
      <Divider direction="horizontal" style={{ borderBottomWidth: '2px' }} />
      \u4E0B\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},446:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-drawer-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Button,o=r.Drawer,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u(!1),x=p()(f,2),E=x[0],b=x[1];return n.createElement(t,{direction:"row"},n.createElement(a,{onClick:function(){b(!0)}},"\u57FA\u7840\u7528\u6CD5"),n.createElement(o,{open:E,onClose:function(){b(!1)},contentProps:{style:{lineHeight:"20vh",textAlign:"center"}}},"\u62BD\u5C49\u6B63\u6587"))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-drawer-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Button,o=r.Drawer,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u(""),x=p()(f,2),E=x[0],b=x[1];return n.createElement(n.Fragment,null,n.createElement(t,{direction:"row",spacing:"8px"},n.createElement(a,{onClick:function(){return b("bottom")}},"\u5E95\u90E8\u5F39\u51FA"),n.createElement(a,{onClick:function(){return b("top")}},"\u9876\u90E8\u5F39\u51FA"),n.createElement(a,{onClick:function(){return b("left")}},"\u5DE6\u4FA7\u5F39\u51FA"),n.createElement(a,{onClick:function(){return b("right")}},"\u53F3\u4FA7\u5F39\u51FA")),n.createElement(o,{anchor:"bottom",open:E==="bottom",onClose:function(){return b("")},contentProps:{style:{lineHeight:"20vh",textAlign:"center"}}},"\u5E95\u90E8\u5F39\u51FA"),n.createElement(o,{anchor:"top",open:E==="top",onClose:function(){return b("")}},n.createElement("div",{style:{lineHeight:"20vh",textAlign:"center"}},"\u9876\u90E8\u5F39\u51FA")),n.createElement(o,{anchor:"left",open:E==="left",onClose:function(){return b("")},contentProps:{style:{width:"50vw",textAlign:"center",paddingTop:"50vh"}}},"\u5DE6\u4FA7\u5F39\u51FA"),n.createElement(o,{anchor:"right",open:E==="right",onClose:function(){return b("")}},n.createElement(t,{style:{width:"50vw",height:"100%"}},"right")))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-drawer-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Button,o=r.Drawer,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u(!1),x=p()(f,2),E=x[0],b=x[1];return n.createElement(t,{direction:"row"},n.createElement(a,{onClick:function(){return b(!0)}},"\u52A8\u6001\u6548\u679C\u5EF6\u65F6"),n.createElement(o,{transitionDuration:1e3,open:E,onClose:function(){return b(!1)}},n.createElement("div",{style:{lineHeight:"20vh",textAlign:"center"}},"\u52A8\u6001\u6548\u679C\u5EF6\u65F6")))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-drawer-demo-zh-cn-3":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Button,o=r.Drawer,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u(!1),x=p()(f,2),E=x[0],b=x[1];return n.createElement(t,{id:"draw-container"},n.createElement(a,{onClick:function(){b(!0)}},"\u6307\u5B9A\u5BB9\u5668"),n.createElement(o,{container:document.getElementById("draw-container"),open:E,onClose:function(){b(!1)}},n.createElement("div",{className:"content",style:{lineHeight:"20vh",textAlign:"center"}},"\u6D6E\u5C42dom\u5728`draw-container`element\u4E2D\u6E32\u67D3")))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},53904:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-fade-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Button,o=r.Fade,t=r.Stack,h.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=h.sent,n=l.default,u=l.useRef,s=l.useState,h.abrupt("return",{default:function(){var x=s(!0),E=p()(x,2),b=E[0],C=E[1],S=u();return n.createElement(t,null,n.createElement(a,{onClick:function(){C(function(L){return!L}),console.log(S)}},"\u70B9\u51FB\u6539\u53D8in"),n.createElement(o,{appear:!1,in:b,timeout:{enter:2e3,exit:1e3},className:"test-clsnm"},n.createElement("div",{ref:S},"\u6DE1\u5165\u6DE1\u51FAIn")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-fade-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Fade, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-fade-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Button,o=r.Fade,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u(!0),x=p()(f,2),E=x[0],b=x[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){b(function(S){return!S})}},"\u70B9\u51FB\u6302\u8F7D/\u5378\u8F7D\u7EC4\u4EF6"),E&&n.createElement(o,{appear:!0,in:!0,timeout:1500},n.createElement("div",null,"\u6DE1\u5165\u6DE1\u51FAAppearTrue")))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-fade-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Fade, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-fade-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Button,o=r.Fade,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u(!1),x=p()(f,2),E=x[0],b=x[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){b(function(S){return!S})}},"\u70B9\u51FB\u6539\u53D8in"),n.createElement(o,{appear:!1,in:E,mountOnEnter:!0,timeout:{enter:2e3,exit:1e3}},n.createElement("div",null,"\u6DE1\u5165\u6DE1\u51FAmountOnEnter")),n.createElement(o,{appear:!1,in:E,unmountOnExit:!0,timeout:{enter:2e3,exit:1e3}},n.createElement("div",null,"\u6DE1\u5165\u6DE1\u51FAunmountOnExit")))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-fade-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Fade, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},1689:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-icon-button-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=u.sent,d=v.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=u.sent,a=r.IconButton,o=r.Stack,u.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=u.sent,l=t.PhoneFilledIcon,u.abrupt("return",{default:function(){return d.createElement(o,{direction:"row",spacing:"8px"},d.createElement(a,null,d.createElement(l,null)),d.createElement(a,{variant:"outlined"},d.createElement(l,null)),d.createElement(a,{variant:"contained"},d.createElement(l,null)))}});case 14:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-icon-button-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=u.sent,d=v.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=u.sent,a=r.IconButton,o=r.Stack,u.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=u.sent,l=t.PhoneFilledIcon,u.abrupt("return",{default:function(){return d.createElement(o,{direction:"row",spacing:"8px"},d.createElement(a,{variant:"contained"},d.createElement(l,null)),d.createElement(a,{shape:"rounded",variant:"contained"},d.createElement(l,null)),d.createElement(a,{shape:"square",variant:"contained"},d.createElement(l,null)))}});case 14:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-icon-button-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=u.sent,d=v.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=u.sent,a=r.IconButton,o=r.Stack,u.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=u.sent,l=t.PhoneFilledIcon,u.abrupt("return",{default:function(){return d.createElement(o,{direction:"row",spacing:"8px"},d.createElement(a,{size:"small"},d.createElement(l,null)),d.createElement(a,null,d.createElement(l,null)),d.createElement(a,{size:"large"},d.createElement(l,null)))}});case 14:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-icon-button-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=u.sent,d=v.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=u.sent,a=r.IconButton,o=r.Stack,u.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=u.sent,l=t.PhoneFilledIcon,u.abrupt("return",{default:function(){return d.createElement(o,{spacing:"10px"},d.createElement(o,{direction:"row",spacing:"8px"},d.createElement(a,{color:"primary"},d.createElement(l,null)),d.createElement(a,{color:"success"},d.createElement(l,null)),d.createElement(a,{color:"info"},d.createElement(l,null)),d.createElement(a,{color:"warning"},d.createElement(l,null)),d.createElement(a,{color:"danger"},d.createElement(l,null))),d.createElement(o,{direction:"row",spacing:"8px"},d.createElement(a,{color:"primary",variant:"contained"},d.createElement(l,null)),d.createElement(a,{color:"success",variant:"contained"},d.createElement(l,null)),d.createElement(a,{color:"info",variant:"contained"},d.createElement(l,null)),d.createElement(a,{color:"warning",variant:"contained"},d.createElement(l,null)),d.createElement(a,{color:"danger",variant:"contained"},d.createElement(l,null))))}});case 14:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-icon-button-demo-zh-cn-4":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=u.sent,d=v.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=u.sent,a=r.IconButton,o=r.Stack,u.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=u.sent,l=t.PhoneFilledIcon,u.abrupt("return",{default:function(){return d.createElement(o,{direction:"row",spacing:"8px"},d.createElement(a,{disabled:!0,color:"primary"},d.createElement(l,null)),d.createElement(a,{variant:"outlined",disabled:!0,color:"primary"},d.createElement(l,null)),d.createElement(a,{variant:"contained",disabled:!0,color:"primary"},d.createElement(l,null)))}});case 14:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},34695:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(48305),c=e.n($),k=e(90228),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"image-demo-zh-cn-0":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=s.sent,t=o.Image,l=o.Stack,n="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg",s.abrupt("return",{default:function(){return a.createElement(l,null,a.createElement(t,{width:100,height:100,src:n}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"image-demo-zh-cn-0",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Image, Stack } from '@bifrostui/react';

const src =
  'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

export default () => {
  return (
    <Stack>
      <Image width={100} height={100} src={src} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"image-demo-zh-cn-1":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=s.sent,t=o.Image,l=o.Stack,n="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg",s.abrupt("return",{default:function(){return a.createElement(l,{direction:"row",spacing:"8px",flexWrap:"wrap"},a.createElement(t,{src:n,fit:"contain",alt:"contain",width:100,height:100}),a.createElement(t,{src:n,fit:"cover",alt:"cover",width:100,height:100}),a.createElement(t,{src:n,fit:"fill",alt:"fill",width:100,height:100}),a.createElement(t,{src:n,fit:"none",alt:"none",width:100,height:100}),a.createElement(t,{src:n,fit:"scale-down",alt:"scale-down",width:100,height:100}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"image-demo-zh-cn-1",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"image-demo-zh-cn-2":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=s.sent,t=o.Image,l=o.Stack,n="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg",s.abrupt("return",{default:function(){return a.createElement(l,{direction:"row",spacing:"8px"},a.createElement(t,{src:n,fit:"cover",width:100,height:100,style:{borderRadius:4}}),a.createElement(t,{src:n,fit:"cover",width:100,height:100,style:{borderRadius:8}}),a.createElement(t,{src:n,fit:"cover",width:100,height:100,style:{borderRadius:32}}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"image-demo-zh-cn-2",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"image-demo-zh-cn-3":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=u.sent,a=r.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=u.sent,t=o.Image,l=o.Stack,u.abrupt("return",{default:function(){return a.createElement(l,{direction:"row",spacing:"8px"},a.createElement(t,{src:"https://localhost:3000/failed",fit:"cover",width:100,height:100,style:{borderRadius:4},placeholder:!0}),a.createElement(t,{src:"https://localhost:3000/failed",fit:"cover",width:100,height:100,style:{borderRadius:4},fallback:a.createElement(a.Fragment,null,"MY FALLBACK")}))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"image-demo-zh-cn-3",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"image-demo-zh-cn-4":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=m.sent,a=r.default,o=r.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Image,n=t.Button,u=t.Stack,m.abrupt("return",{default:function(){var f=o(0),x=c()(f,2),E=x[0],b=x[1],C="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg?t=".concat(E);return a.createElement(a.Fragment,null,a.createElement(n,{onClick:function(){b(function(){return Math.random()})}},"\u91CD\u65B0\u52A0\u8F7D"),a.createElement(u,{direction:"row",spacing:"8px"},a.createElement(l,{width:100,height:100,src:C}),a.createElement(l,{width:100,height:100,src:C,placeholder:!0}),a.createElement(l,{width:100,height:100,src:C,placeholder:a.createElement("div",{style:{background:"red",width:"100%",height:"100%"}})})))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"image-demo-zh-cn-4",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},76318:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-input-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Input,u.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return o=u.sent,t=o.default,l=o.useState,u.abrupt("return",{default:function(){var m=l(""),h=p()(m,2),f=h[0],x=h[1],E=function(C,S){x(S==null?void 0:S.value),console.log("change",S==null?void 0:S.value)};return t.createElement(a,{value:f,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",onChange:E})}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=m.sent,a=r.default,o=r.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Input,m.next=11,e.e(9975).then(e.bind(e,29975));case 11:return n=m.sent,u=n.SearchOutlinedIcon,m.abrupt("return",{default:function(){var f=o(""),x=p()(f,2),E=x[0],b=x[1],C=function(P,L){b(L==null?void 0:L.value),console.log("change",L==null?void 0:L.value)};return a.createElement(l,{value:E,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",startIcon:a.createElement(u,{htmlColor:"#959aa5"}),onChange:C})}});case 14:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=m.sent,a=r.default,o=r.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Input,m.next=11,e.e(9975).then(e.bind(e,29975));case 11:return n=m.sent,u=n.SearchOutlinedIcon,m.abrupt("return",{default:function(){var f=o(""),x=p()(f,2),E=x[0],b=x[1],C=function(P,L){b(L==null?void 0:L.value),console.log("change",L==null?void 0:L.value)};return a.createElement(l,{value:E,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",endIcon:a.createElement(u,{htmlColor:"#959aa5"}),onChange:C})}});case 14:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-zh-cn-3":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Input,u.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return o=u.sent,t=o.default,l=o.useState,u.abrupt("return",{default:function(){var m=l(""),h=p()(m,2),f=h[0],x=h[1],E=function(S,P){x(P==null?void 0:P.value),console.log("change",P==null?void 0:P.value)},b=function(S){console.log("clear:",S)};return t.createElement(t.Fragment,null,t.createElement(a,{value:f,clearable:!0,onClear:b,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",onChange:E}),t.createElement("div",{style:{margin:"20px 0 10px"}},"\u975E\u53D7\u63A7\u4E5F\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846\uFF1A"),t.createElement(a,{clearable:!0,defaultValue:"\u4F1A\u6E05\u7A7A\u5185\u5BB9"}))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-zh-cn-4":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=n.sent,a=r.Input,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(a,{disabled:!0,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9"})}});case 9:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
import React from 'react';

export default () => {
  return <Input disabled placeholder="\u8BF7\u586B\u5199\u5185\u5BB9" />;
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-zh-cn-5":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Button,o=r.Input,m.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=m.sent,l=t.default,n=t.useRef,u=t.useState,m.abrupt("return",{default:function(){var f=u("0"),x=p()(f,2),E=x[0],b=x[1],C=u("100"),S=p()(C,2),P=S[0],L=S[1],T=n(null),B=function(){b(function(z){return"".concat(Number(z)+10)})},R=function(){L(function(z){return"".concat(Number(z)-10)})},D=function(){var z=T.current;z.value=Number(z.value)*2};return l.createElement("div",null,l.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:"40px"}},"\u53D7\u63A7\u7EC4\u4EF6\uFF1A",l.createElement(a,{onClick:B},"\u6570\u91CF\u52A010"),l.createElement("br",null),l.createElement(o,{value:E,onChange:function(z,K){return b(K.value)}})),l.createElement("div",{style:{display:"flex",flexDirection:"column"}},"\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A",l.createElement("br",null),l.createElement(a,{onClick:R},"\u6570\u91CF\u51CF10(\u64CD\u4F5CdefaultValue\u65E0\u6548)"),l.createElement("br",null),l.createElement(a,{onClick:D},"\u6570\u91CF\u4E582(\u901A\u8FC7DOM\u64CD\u4F5Cvalue\u6709\u6548)"),l.createElement("br",null),l.createElement(o,{inputRef:T,defaultValue:P})))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Input } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-input-demo-zh-cn-6":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Input,u.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return o=u.sent,t=o.default,l=o.useState,u.abrupt("return",{default:function(){var m=l(""),h=p()(m,2),f=h[0],x=h[1],E=function(C,S){x(S==null?void 0:S.value),console.log("change",S==null?void 0:S.value)};return t.createElement(a,{type:"number",placeholder:"number\u7C7B\u578B",value:f,onChange:E})}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},7279:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(48305),c=e.n($),k=e(90228),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-list-demo-zh-cn-0":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.List,o=r.ListItem,t=r.ListItemContent,l=r.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){return u.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px 10px"}},u.createElement(l,{style:{width:"350px"}},u.createElement(a,{style:{width:"100%"}},u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:u.createElement("div",null,"\u56DE\u6536\u7AD9")})),u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:u.createElement("div",null,"\u8BBE\u7F6E"),secondary:u.createElement("div",null,"\u97F3\u91CF\u8BBE\u7F6E")})))))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-zh-cn-1":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m,h,f,x,E,b;return p()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=S.sent,a=r.List,o=r.ListItem,t=r.ListItemContent,l=r.ListItemExtra,n=r.ListItemFooter,u=r.ListItemHeader,s=r.Stack,m=r.Switch,S.next=13,e.e(9975).then(e.bind(e,29975));case 13:return h=S.sent,f=h.PhoneFilledIcon,S.next=17,Promise.resolve().then(e.t.bind(e,75271,19));case 17:return x=S.sent,E=x.default,b=x.useState,S.abrupt("return",{default:function(){var L=b(!1),T=c()(L,2),B=T[0],R=T[1];return E.createElement(s,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},E.createElement(s,{style:{width:"350px"}},E.createElement(a,{style:{width:"100%"}},E.createElement(o,{onClick:function(M){console.log(M)}},E.createElement(u,null,E.createElement(f,null)),E.createElement(t,{primary:E.createElement("div",null,"\u98DE\u884C\u6A21\u5F0F")}),E.createElement(n,null,B?"\u5DF2\u5F00\u542F\u98DE\u884C\u6A21\u5F0F":""),E.createElement(l,{onClick:function(M){R(!B)}},E.createElement(m,{color:"primary",checked:B}))))))}});case 21:case"end":return S.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-zh-cn-2":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,a=r.Alert,o=r.List,t=r.ListItem,l=r.ListItemContent,n=r.Stack,f.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!1),b=c()(E,2),C=b[0],S=b[1];return s.createElement(n,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},s.createElement(n,{style:{width:"350px"}},C&&s.createElement(a,null,"\u70B9\u51FB\u6E05\u9664\u56DE\u6536\u7AD9\u6210\u529F"),s.createElement(o,{style:{width:"100%"}},s.createElement(t,{disabled:!0,onClick:function(L){S(!0),setTimeout(function(){S(!1)},1e3)}},s.createElement(l,{primary:s.createElement("div",{onClick:function(){S(!0),setTimeout(function(){S(!1)},1e3)}},"\u56DE\u6536\u7AD9")})),s.createElement(t,{onClick:function(L){S(!0),setTimeout(function(){S(!1)},1e3)}},s.createElement(l,{primary:s.createElement("div",null,"\u8BBE\u7F6E"),secondary:s.createElement("div",null,"\u6E05\u9664\u56DE\u6536\u7AD9")})))))}});case 14:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-zh-cn-3":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.List,o=r.ListItem,t=r.ListItemContent,l=r.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){return u.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},u.createElement(l,{style:{width:"350px"}},u.createElement(a,{header:u.createElement("div",null,"\u7CFB\u7EDF"),subheader:u.createElement("div",null,"\u7CFB\u7EDF\u8BBE\u7F6E"),style:{width:"100%"}},u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:u.createElement("div",null,"\u4E3B\u9898\u8BBE\u7F6E")})),u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:u.createElement("div",null,"\u97F3\u91CF\u8BBE\u7F6E")})))))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-zh-cn-4":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m,h,f;return p()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=E.sent,a=r.default,E.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=E.sent,t=o.List,l=o.ListItem,n=o.ListItemContent,u=o.ListItemHeader,s=o.Stack,E.next=14,e.e(9975).then(e.bind(e,29975));case 14:return m=E.sent,h=m.LocationFilledIcon,f=m.PhoneFilledIcon,E.abrupt("return",{default:function(){return a.createElement(s,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},a.createElement(s,{style:{width:"350px"}},a.createElement(t,{style:{width:"100%"}},a.createElement(l,{onClick:function(S){console.log(S)}},a.createElement(u,null,a.createElement(f,null)),a.createElement(n,null,"\u7535\u8BDD")),a.createElement(l,{onClick:function(S){console.log(S)}},a.createElement(u,null,a.createElement(h,null)),a.createElement(n,null,"\u4F4F\u5740")))))}});case 18:case"end":return E.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-zh-cn-5":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.List,o=r.ListItem,t=r.ListItemContent,l=r.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){return u.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},u.createElement(l,{style:{width:"350px"}},u.createElement(a,{style:{width:"100%"}},u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:"\u8BBE\u7F6E",secondary:"\u7CFB\u7EDF\u8BBE\u7F6E"})))))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-zh-cn-6":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,a=r.Avatar,o=r.List,t=r.ListItem,l=r.ListItemContent,n=r.ListItemFooter,u=r.Stack,f.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=f.sent,m=s.default,f.abrupt("return",{default:function(){return m.createElement(u,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},m.createElement(u,{style:{width:"350px"}},m.createElement(o,{style:{width:"100%"}},m.createElement(t,{onClick:function(b){console.log(b)}},m.createElement(l,null,"\u5934\u50CF"),m.createElement(n,null,m.createElement(a,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}))))))}});case 14:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-zh-cn-7":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m,h;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=x.sent,a=r.List,o=r.ListItem,t=r.ListItemContent,l=r.ListItemExtra,n=r.Stack,u=r.Switch,x.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h(!1),C=c()(b,2),S=C[0],P=C[1];return m.createElement(n,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},m.createElement(n,{style:{width:"350px"}},m.createElement(a,{style:{width:"100%"}},m.createElement(o,null,m.createElement(t,{primary:m.createElement("div",null,"\u5728\u4F18\u9177\u5C55\u793A\u60F3\u770B\u8BB0\u5F55"),secondary:m.createElement("div",null,"\u5F71\u7247\u53EF\u5728\u7EBF\u64AD\u653E\u65F6\u4F1A\u901A\u77E5\u63D0\u9192\u4F60")}),m.createElement(l,{onClick:function(T){P(!S)}},m.createElement(u,{color:"primary",checked:S}))))))}});case 15:case"end":return x.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-zh-cn-8":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.List,o=r.ListItem,t=r.ListItemContent,l=r.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){return u.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},u.createElement(l,{style:{width:"350px"}},u.createElement(a,{style:{width:"100%"}},u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:"\u84DD\u7259\u548C\u8BBE\u5907\u8FDE\u63A5",secondary:"NFC\u3001\u6295\u5C04\u5C4F\u5E55\u3001\u89E6\u78B0\u4ED8\u6B3E"})),u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:"\u663E\u793A",secondary:"\u72B6\u6001\u680F\u3001\u606F\u5C4F\u663E\u793A"})))))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-zh-cn-9":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.List,o=r.ListItem,t=r.ListItemContent,l=r.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){return u.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},u.createElement(l,{style:{width:"350px"}},u.createElement(a,{hideDivider:!0,style:{width:"100%"}},u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:"\u84DD\u7259\u548C\u8BBE\u5907\u8FDE\u63A5",secondary:"NFC\u3001\u6295\u5C04\u5C4F\u5E55\u3001\u89E6\u78B0\u4ED8\u6B3E"})),u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:"\u663E\u793A",secondary:"\u72B6\u6001\u680F\u3001\u606F\u5C4F\u663E\u793A"})))))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-zh-cn-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-list-demo-zh-cn-10":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.List,o=r.ListItem,t=r.ListItemContent,l=r.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){return u.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"},spacing:"20px"},u.createElement(l,{style:{width:"350px"}},u.createElement("div",null," \u9ED8\u8BA4\u5927\u5C0F\uFF08medium\uFF09:"),u.createElement(a,{style:{width:"100%"}},u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:u.createElement("div",null,"\u7CFB\u7EDF")}))),u.createElement("div",null,"\u5C0F\u4E00\u53F7\uFF08small\uFF09\uFF1A"),u.createElement(a,{size:"small",style:{width:"100%"}},u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:u.createElement("div",null,"\u7CFB\u7EDF")}))),u.createElement("div",null,"\u5927\u4E00\u53F7\uFF08large\uFF09\uFF1A"),u.createElement(a,{size:"large",style:{width:"100%"}},u.createElement(o,{onClick:function(x){console.log(x)}},u.createElement(t,{primary:u.createElement("div",null,"\u7CFB\u7EDF")})))))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-zh-cn-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},58355:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-loading-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Stack,o=r.Loading,l.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(o,null))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-loading-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Stack,o=r.Loading,l.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(o,null,"\u52A0\u8F7D\u4E2D..."))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading>\u52A0\u8F7D\u4E2D...</Loading>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-loading-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Stack,o=r.Loading,l.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(o,{direction:"horizontal"},"\u52A0\u8F7D\u4E2D..."))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading direction="horizontal">\u52A0\u8F7D\u4E2D...</Loading>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-loading-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Stack,o=r.Loading,l.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(o,{IconProps:{htmlColor:"#ff335c"}},"\u52A0\u8F7D\u4E2D..."))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading IconProps={{ htmlColor: '#ff335c' }}>\u52A0\u8F7D\u4E2D...</Loading>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},25548:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-modal-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Button,o=r.Modal,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u(!1),x=p()(f,2),E=x[0],b=x[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){b(!0)}},"\u6253\u5F00\u5F39\u7A97"),n.createElement(o,{open:E,onClose:function(){b(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},n.createElement("div",{style:{textAlign:"center"}},"\u6D4B\u8BD5\u5F39\u7A97"))))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-modal-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Button,o=r.Modal,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u(!1),x=p()(f,2),E=x[0],b=x[1],C=u(!1),S=p()(C,2),P=S[0],L=S[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){b(!0)}},"\u6253\u5F00\u65E0\u906E\u7F69\u7684\u5F39\u7A97"),n.createElement(a,{onClick:function(){L(!0)}},"\u6253\u5F00\u9690\u85CF\u906E\u7F69\u7684\u5F39\u7A97"),n.createElement(o,{open:E,onClose:function(){b(!1)},hideBackdrop:!0,style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"},onClick:function(){return b(!1)}},n.createElement("div",{style:{textAlign:"center"}},"\u65E0\u906E\u7F69\u7684\u5F39\u7A97\uFF08\u9700\u81EA\u884C\u5B9E\u73B0\u70B9\u51FB\u5173\u95ED\uFF09"))),n.createElement(o,{open:P,onClose:function(){L(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center"},BackdropProps:{invisible:!0}},n.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},n.createElement("div",{style:{textAlign:"center"}},"\u9690\u85CF\u906E\u7F69\u7684\u5F39\u7A97\uFF08\u70B9\u51FB\u5916\u90E8\u4EFB\u610F\u533A\u57DF\u5173\u95ED\uFF09"))))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-modal-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Button,o=r.Modal,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u(!1),x=p()(f,2),E=x[0],b=x[1],C=u(!1),S=p()(C,2),P=S[0],L=S[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){b(!0)}},"\u6253\u5F00\u5F39\u7A97"),n.createElement(a,{onClick:function(){L(function(B){return!B})}},"\u6ED1\u52A8/\u6EDA\u52A8\u7A7F\u900F\u4FDD\u62A4",P?"\u5173":"\u5F00"),n.createElement(o,{open:E,onClose:function(){b(!1)},disableScrollLock:P,style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},n.createElement("div",{style:{textAlign:"center"}},"\u6D4B\u8BD5\u5F39\u7A97",n.createElement("br",null),"\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u7A97",n.createElement("br",null),n.createElement("br",null),"\u6EDA\u52A8\u7A7F\u900F\u963B\u6B62\u2193",n.createElement("br",null),"\uFF08\u76F4\u63A5\u4F7F\u7528\u6EDA\u8F6E\u6216\u8005\u5728\u79FB\u52A8\u7AEF\u89E6\u6478\u62D6\u52A8\u6D4B\u8BD5\uFF09",n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),"\u6EDA\u52A8\u7A7F\u900F\u963B\u6B62\u2191"))))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-modal-demo-zh-cn-3":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Button,o=r.Modal,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u(!1),x=p()(f,2),E=x[0],b=x[1],C=u(!1),S=p()(C,2),P=S[0],L=S[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){b(!0),L(!0)}},"\u6253\u5F00\u5F39\u7A97"),n.createElement(o,{open:E,onClose:function(){b(!1)},keepMounted:P,style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},n.createElement("p",null,"open:",E?"T":"F"),n.createElement("p",null,"keepMounted:",P?"T":"F"),n.createElement("p",null,"\u70B9\u51FB\u9000\u51FA\u540Eopen\u53D8\u4E3AFalse\uFF0C\u6B64\u65F6Backdrop\u5F00\u59CB\u6267\u884C\u9000\u51FA\u52A8\u6548"),n.createElement("p",null,"\u70B9\u51FB\u786E\u5B9A\u9000\u51FA\u540EkeepMounted\u53D8\u4E3AFalse"),n.createElement("p",null,"\u4E24\u8005\u5747\u4E3AFalse\u4E14Backdrop\u9000\u51FA\u52A8\u6548\u7ED3\u675F\u540E\u7EC4\u4EF6\u6574\u4F53\u5378\u8F7D"),n.createElement(a,{onClick:function(){b(!1)}},"\u9000\u51FA"),n.createElement(a,{onClick:function(){L(!1)}},"\u786E\u5B9A\u9000\u51FA"))))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},58910:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-nav-bar-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Stack,o=r.NavBar,l.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(o,null))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-nav-bar-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=u.sent,d=v.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=u.sent,a=r.Stack,o=r.NavBar,u.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=u.sent,l=t.CloseLargeIcon,u.abrupt("return",{default:function(){return d.createElement(a,{spacing:"50px"},d.createElement(o,{title:"\u6807\u9898\u6587\u6848",leftIcon:d.createElement(l,null)}),d.createElement(o,{title:"\u6807\u9898\u6587\u6848",leftIcon:!1}))}});case 14:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';
import { CloseLargeIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar title="\u6807\u9898\u6587\u6848" leftIcon={<CloseLargeIcon />} />
      <NavBar title="\u6807\u9898\u6587\u6848" leftIcon={false} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-nav-bar-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Stack,o=r.NavBar,l.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(o,{title:"\u6807\u9898\u6587\u6848",IconProps:{htmlColor:"#ff335c"}}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar title="\u6807\u9898\u6587\u6848" IconProps={{ htmlColor: '#ff335c' }} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-nav-bar-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Stack,o=r.NavBar,l.abrupt("return",{default:function(){return d.createElement(a,{spacing:"50px"},d.createElement(o,{left:"\u8FD4\u56DE"}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar left="\u8FD4\u56DE" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-nav-bar-demo-zh-cn-4":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Stack,o=r.NavBar,l.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(a,{spacing:"50px",style:{width:"375px"}},d.createElement(o,{title:"\u6807\u9898\u6587\u6848"}),d.createElement(o,{title:"\u8FD9\u4E2A\u6807\u9898\u6587\u6848\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F"})))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-nav-bar-demo-zh-cn-5":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=u.sent,d=v.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=u.sent,a=r.Stack,o=r.NavBar,u.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=u.sent,l=t.MoreIcon,u.abrupt("return",{default:function(){return d.createElement(a,{spacing:"50px"},d.createElement(o,{title:"\u6807\u9898\u6587\u6848",right:"\u6587\u6848"}),d.createElement(o,{title:"\u6807\u9898\u6587\u6848",right:d.createElement(l,{size:"large"})}))}});case 14:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';
import { MoreIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar title="\u6807\u9898\u6587\u6848" right="\u6587\u6848" />
      <NavBar title="\u6807\u9898\u6587\u6848" right={<MoreIcon size="large" />} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-nav-bar-demo-zh-cn-6":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Stack,o=r.NavBar,l.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(o,{title:"\u6807\u9898\u6587\u6848",fixed:!0,placeholder:!0}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar title="\u6807\u9898\u6587\u6848" fixed placeholder />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},12985:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return r}});var $=e(15558),c=e.n($),k=e(90228),p=e.n(k),y=e(48305),g=e.n(y),i=e(87999),v=e.n(i),d=e(75271),r={"packages-bui-core-src-picker-demo-zh-cn-0":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m,h;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Button,l=o.Picker,n=o.Stack,x.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=x.sent,s=u.default,m=u.useState,h=u.useEffect,x.abrupt("return",{default:function(){var b=m(!1),C=g()(b,2),S=C[0],P=C[1],L=m([2]),T=g()(L,2),B=T[0],R=T[1];return h(function(){console.log(B)},[B]),s.createElement(n,null,s.createElement(t,{onClick:function(){P(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:S,value:B,onClose:function(M,z){P(!1),console.log("onClose",M,z)},options:[[{value:1,label:"\u5468\u4E00"},{value:2,label:"\u5468\u4E8C"},{value:3,label:"\u5468\u4E09"},{value:4,label:"\u5468\u56DB"},{value:5,label:"\u5468\u4E94"},{value:6,label:"\u5468\u516D"},{value:7,label:"\u5468\u65E5"}]]}))}});case 13:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState, useEffect } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState<(string | number)[]>([2]);

  useEffect(() => {
    console.log(val);
  }, [val]);

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        value={val}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: '\u5468\u4E00',
            },
            {
              value: 2,
              label: '\u5468\u4E8C',
            },
            {
              value: 3,
              label: '\u5468\u4E09',
            },
            {
              value: 4,
              label: '\u5468\u56DB',
            },
            {
              value: 5,
              label: '\u5468\u4E94',
            },
            {
              value: 6,
              label: '\u5468\u516D',
            },
            {
              value: 7,
              label: '\u5468\u65E5',
            },
          ],
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-picker-demo-zh-cn-1":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Picker,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!1),b=g()(E,2),C=b[0],S=b[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:C,title:"\u8BF7\u9009\u62E9",onClose:function(L,T){S(!1),console.log("onClose",L,T)},options:[[{value:1,label:"\u5468\u4E00"},{value:2,label:"\u5468\u4E8C"},{value:3,label:"\u5468\u4E09"},{value:4,label:"\u5468\u56DB"},{value:5,label:"\u5468\u4E94"},{value:6,label:"\u5468\u516D"},{value:7,label:"\u5468\u65E5"}]]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
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
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        title="\u8BF7\u9009\u62E9"
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: '\u5468\u4E00',
            },
            {
              value: 2,
              label: '\u5468\u4E8C',
            },
            {
              value: 3,
              label: '\u5468\u4E09',
            },
            {
              value: 4,
              label: '\u5468\u56DB',
            },
            {
              value: 5,
              label: '\u5468\u4E94',
            },
            {
              value: 6,
              label: '\u5468\u516D',
            },
            {
              value: 7,
              label: '\u5468\u65E5',
            },
          ],
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-picker-demo-zh-cn-2":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Picker,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!1),b=g()(E,2),C=b[0],S=b[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:C,onClose:function(L,T){S(!1),console.log("onClose",L,T)},options:[[{value:1,label:"\u5468\u4E00"},{value:2,label:"\u5468\u4E8C"},{value:3,label:"\u5468\u4E09"},{value:4,label:"\u5468\u56DB"},{value:5,label:"\u5468\u4E94"},{value:6,label:"\u5468\u516D"},{value:7,label:"\u5468\u65E5"}],[{value:1,label:"\u4E0A\u5348"},{value:2,label:"\u4E2D\u5348"},{value:3,label:"\u4E0B\u5348"}]]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
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
        \u6253\u5F00\u9009\u62E9\u5668
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
              label: '\u5468\u4E00',
            },
            {
              value: 2,
              label: '\u5468\u4E8C',
            },
            {
              value: 3,
              label: '\u5468\u4E09',
            },
            {
              value: 4,
              label: '\u5468\u56DB',
            },
            {
              value: 5,
              label: '\u5468\u4E94',
            },
            {
              value: 6,
              label: '\u5468\u516D',
            },
            {
              value: 7,
              label: '\u5468\u65E5',
            },
          ],
          [
            {
              value: 1,
              label: '\u4E0A\u5348',
            },
            {
              value: 2,
              label: '\u4E2D\u5348',
            },
            {
              value: 3,
              label: '\u4E0B\u5348',
            },
          ],
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-picker-demo-zh-cn-3":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Picker,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!1),b=g()(E,2),C=b[0],S=b[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:C,onClose:function(L,T){S(!1),console.log("onClose",L,T)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
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
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-picker-demo-zh-cn-4":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m,h;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Button,l=o.Picker,n=o.Stack,x.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=x.sent,s=u.default,m=u.useState,h=u.useEffect,x.abrupt("return",{default:function(){var b=[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77"}],C=m([]),S=g()(C,2),P=S[0],L=S[1],T=m(!1),B=g()(T,2),R=B[0],D=B[1],M=m([]),z=g()(M,2),K=z[0],j=z[1];h(function(){setTimeout(function(){j(b)},1e3)},[]);var V=function(X,H){var q=H.value,te=[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}];(q==null?void 0:q[0])===2&&setTimeout(function(){j(function(ae){var ne=ae;return ne[1].children=te,c()(ne)})},50),L(q)};return s.createElement(n,null,s.createElement(t,{onClick:function(){D(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:R,onClose:function(X,H){D(!1),console.log("onClose",X,H)},value:P,onOptionChange:V,options:K}))}});case 13:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState, useEffect } from 'react';

export default () => {
  const mockData = [
    {
      value: 1,
      label: '\u5317\u4EAC',
      children: [
        {
          value: 1,
          label: '\u671D\u9633\u533A',
          children: [
            {
              value: 1,
              label: '\u671D\u9633\u8857',
            },
          ],
        },
        {
          value: 2,
          label: '\u6D77\u6DC0\u533A',
        },
        {
          value: 3,
          label: '\u5927\u5174\u533A',
        },
        {
          value: 4,
          label: '\u4E1C\u57CE\u533A',
        },
        {
          value: 5,
          label: '\u897F\u57CE\u533A',
        },
        {
          value: 6,
          label: '\u4E30\u53F0\u533A',
        },
      ],
    },
    {
      value: 2,
      label: '\u4E0A\u6D77',
    },
  ];
  const [val, setVal] = useState<(string | number)[]>([]);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setOptions(mockData);
    }, 1000);
  }, []);

  const handleChange = (e, { value }) => {
    const shanghai = [
      {
        value: 1,
        label: '\u9EC4\u57D4\u533A',
      },
      {
        value: 2,
        label: '\u957F\u5B81\u533A',
      },
      {
        value: 3,
        label: '\u666E\u9640\u533A',
      },
      {
        value: 4,
        label: '\u6768\u6D66\u533A',
      },
      {
        value: 5,
        label: '\u6D66\u4E1C\u65B0\u533A',
      },
      {
        value: 6,
        label: '\u5F90\u6C47\u533A',
        children: [
          {
            value: 1,
            label: '\u9F99\u8000\u8DEF',
          },
          {
            value: 2,
            label: '\u4E91\u9526\u8DEF',
          },
        ],
      },
    ];
    if (value?.[0] === 2) {
      setTimeout(() => {
        setOptions((prev) => {
          const data = prev;
          data[1].children = shanghai;
          return [...data];
        });
      }, 50);
    }
    setVal(value);
  };

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        value={val}
        onOptionChange={handleChange}
        options={options}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-picker-demo-zh-cn-5":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Picker,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!1),b=g()(E,2),C=b[0],S=b[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:C,value:[2,6,2],onClose:function(L,T){S(!1),console.log("onClose",L,T)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
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
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        value={[2, 6, 2]}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-picker-demo-zh-cn-6":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Picker,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!1),b=g()(E,2),C=b[0],S=b[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:C,contentProps:{style:{height:"400px"}},onClose:function(L,T){S(!1),console.log("onClose",L,T)},options:[[{value:1,label:"\u5468\u4E00"},{value:2,label:"\u5468\u4E8C"},{value:3,label:"\u5468\u4E09"},{value:4,label:"\u5468\u56DB"},{value:5,label:"\u5468\u4E94"},{value:6,label:"\u5468\u516D"},{value:7,label:"\u5468\u65E5"}]]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
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
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        contentProps={{
          style: {
            height: '400px',
          },
        }}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: '\u5468\u4E00',
            },
            {
              value: 2,
              label: '\u5468\u4E8C',
            },
            {
              value: 3,
              label: '\u5468\u4E09',
            },
            {
              value: 4,
              label: '\u5468\u56DB',
            },
            {
              value: 5,
              label: '\u5468\u4E94',
            },
            {
              value: 6,
              label: '\u5468\u516D',
            },
            {
              value: 7,
              label: '\u5468\u65E5',
            },
          ],
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-picker-demo-zh-cn-7":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Picker,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!1),b=g()(E,2),C=b[0],S=b[1],P=m([]),L=g()(P,2),T=L[0],B=L[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:C,onConfirm:function(D,M){console.log("onConfirm",D,M);var z=M.value;B(z)},value:T,onClose:function(D,M){S(!1)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState<(string | number)[]>([]);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onConfirm={(e, data) => {
          console.log('onConfirm', e, data);
          const { value } = data;
          setVal(value);
        }}
        value={val}
        onClose={(e, data) => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-picker-demo-zh-cn-8":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Picker,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!1),b=g()(E,2),C=b[0],S=b[1],P=m([2,100]),L=g()(P,2),T=L[0],B=L[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:C,onConfirm:function(D,M){console.log("onConfirm",D,M);var z=M.value;B(z)},value:T,onClose:function(D,M){S(!1)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState<(string | number)[]>([2, 100]);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onConfirm={(e, data) => {
          console.log('onConfirm', e, data);
          const { value } = data;
          setVal(value);
        }}
        value={val}
        onClose={(e, data) => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-picker-demo-zh-cn-9":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Picker,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!1),b=g()(E,2),C=b[0],S=b[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:C,onClose:function(L,T){S(!1)},onOptionChange:function(L,T){console.log("onOptionChange",L,T)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
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
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onClose={(e, data) => {
          setOpen(false);
        }}
        onOptionChange={(e, data) => {
          console.log('onOptionChange', e, data);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-picker-demo-zh-cn-10":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Picker,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!1),b=g()(E,2),C=b[0],S=b[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:C,onCancel:function(L){console.log("onCancel",L)},onClose:function(){S(!1)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
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
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onCancel={(e) => {
          console.log('onCancel', e);
        }}
        onClose={() => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-picker-demo-zh-cn-11":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Picker,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!1),b=g()(E,2),C=b[0],S=b[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{style:{"--panel-container-height":"500px","--indicator-top":"207px","--option-height":"70px"},open:C,onClose:function(){S(!1)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-zh-cn-11",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
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
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        style={{
          '--panel-container-height': '500px',
          '--indicator-top': '207px',
          '--option-height': '70px',
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}}}},21322:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-portal-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s,m;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=f.sent,a=r.default,o=r.useState,t=r.useRef,l=r.useLayoutEffect,f.next=9,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 9:return n=f.sent,u=n.Portal,s=n.Button,m=n.Stack,f.abrupt("return",{default:function(){var E=t(null),b=t(null),C=o({current:null}),S=p()(C,2),P=S[0],L=S[1];return l(function(){L(E)},[]),a.createElement(m,null,a.createElement(s,{onClick:function(){return L(E)}},"\u8282\u70B91\u6E32\u67D3Portal\u5B50\u8282\u70B9"),a.createElement(s,{onClick:function(){return L(b)}},"\u8282\u70B92\u6E32\u67D3Portal\u5B50\u8282\u70B9"),a.createElement("div",{style:{width:200,height:100,background:"red",marginTop:10},ref:E},"\u8282\u70B91"),a.createElement("div",{style:{width:200,height:100,background:"green"},ref:b},"\u8282\u70B92"),a.createElement(u,{container:P.current},"\u6E32\u67D3Portal\u5B50\u8282\u70B9"))}});case 14:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-portal-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useRef, useLayoutEffect } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-portal-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=u.sent,a=r.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=u.sent,t=o.Portal,l=o.Stack,u.abrupt("return",{default:function(){return a.createElement(l,null,a.createElement("div",{style:{width:200,height:100,background:"green",marginTop:10}},"Portal\u7236\u8282\u70B9",a.createElement(t,{disablePortal:!0},a.createElement("div",null,"Portal\u5B50\u8282\u70B9\u6302\u8F7D\u5728\u7236\u8282\u70B9\u4E0A"))))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-portal-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},86229:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-progress-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=t.sent,d=v.default,t.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=t.sent,a=r.Progress,t.abrupt("return",{default:function(){return d.createElement(a,{percent:40})}});case 9:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={40} />;
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-progress-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Progress,o=r.Stack,l.abrupt("return",{default:function(){return d.createElement(o,{direction:"column",spacing:"5px"},d.createElement(a,{percent:40,strokeColor:"var(--bui-color-primary)"}),d.createElement(a,{percent:50,strokeColor:"var(--bui-color-info)"}),d.createElement(a,{percent:30,strokeColor:"var(--bui-color-success)"}),d.createElement(a,{percent:80,strokeColor:"var(--bui-color-warning)"}),d.createElement(a,{percent:90,strokeColor:"var(--bui-color-vip)"}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-progress-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Progress,o=r.Stack,l.abrupt("return",{default:function(){return d.createElement(o,{direction:"column",alignItems:"flex-start",spacing:"10px"},d.createElement(a,{percent:60,strokeColor:"var(--bui-color-warning)",strokeWidth:10}),d.createElement(a,{percent:60,strokeColor:"var(--bui-color-warning)",strokeWidth:15}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-progress-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Progress,o=r.Stack,l.abrupt("return",{default:function(){return d.createElement(o,{direction:"column",alignItems:"flex-start",spacing:"10px"},d.createElement(a,{percent:60,strokeColor:{from:"var(--bui-color-red)",to:"var(--bui-color-red-light)"}}),d.createElement(a,{percent:90,strokeColor:{"0%":"var(--bui-color-orange)","100%":"var(--bui-color-orange-light)"}}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-progress-demo-zh-cn-4":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=t.sent,d=v.default,t.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=t.sent,a=r.Progress,t.abrupt("return",{default:function(){return d.createElement(a,{percent:60,trailColor:"var(--bui-color-red-light)"})}});case 9:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={60} trailColor="var(--bui-color-red-light)" />;
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},4666:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-radio-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Radio,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),x=f[0],E=f[1];return l.createElement(o,null,l.createElement(a,{checked:x,onChange:function(C,S){E(S.checked)}},"Radio"))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Radio,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),x=f[0],E=f[1];return l.createElement(o,null,l.createElement(a,{checked:x,onChange:function(C,S){E(S.checked)},inputProps:{className:"my-input"}},"Radio"))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Radio,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),x=f[0],E=f[1];return l.createElement(o,null,l.createElement(a,{checked:x,onChange:function(C,S){E(S.checked)},name:"myRadio",value:"tpp"},"Radio"))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-zh-cn-3":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Radio,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),x=f[0],E=f[1],b=n(!1),C=p()(b,2),S=C[0],P=C[1],L=n(!1),T=p()(L,2),B=T[0],R=T[1],D=n(!1),M=p()(D,2),z=M[0],K=M[1];return l.createElement(o,null,l.createElement("div",{style:{width:"100px"}},l.createElement(a,{labelPlacement:"top",checked:x,onChange:function(V,N){var X=N.checked;E(X)}},"\u6587\u6848\u5728\u4E0A\u8FB9"),l.createElement(a,{labelPlacement:"right",checked:S,onChange:function(V,N){var X=N.checked;P(X)}},"\u6587\u6848\u5728\u53F3\u8FB9"),l.createElement(a,{labelPlacement:"bottom",checked:B,onChange:function(V,N){var X=N.checked;R(X)}},"\u6587\u6848\u5728\u4E0B\u8FB9"),l.createElement(a,{labelPlacement:"left",checked:z,onChange:function(V,N){var X=N.checked;K(X)}},"\u6587\u6848\u5728\u5DE6\u8FB9")))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-zh-cn-4":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s,m;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=f.sent,a=r.default,o=r.useState,f.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=f.sent,l=t.Radio,n=t.Stack,f.next=12,e.e(9975).then(e.bind(e,29975));case 12:return u=f.sent,s=u.HeartFilledIcon,m=u.HeartOutlinedIcon,f.abrupt("return",{default:function(){var E=o(!1),b=p()(E,2),C=b[0],S=b[1];return a.createElement(n,null,a.createElement(l,{checked:C,onChange:function(L,T){S(T.checked)},icon:a.createElement(m,{htmlColor:"#ccc"}),checkedIcon:a.createElement(s,{color:"primary"})},"Radio"))}});case 16:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-zh-cn-5":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Radio,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,1),x=f[0];return l.createElement(o,null,l.createElement(a,{checked:x,disabled:!0},"Radio"))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-zh-cn-6":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Radio,o=r.RadioGroup,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u(""),x=p()(f,2),E=x[0],b=x[1],C=function(P,L){console.log("handleGroupChange",P,L),b(L.value)};return n.createElement(t,null,n.createElement(o,{value:E,onChange:C},n.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),n.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),n.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B")))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, RadioGroup, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-zh-cn-7":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Button,o=r.Radio,t=r.RadioGroup,l=r.Stack,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=h.sent,u=n.default,s=n.useState,h.abrupt("return",{default:function(){var x=s("\u6DD8\u7968\u7968"),E=p()(x,2),b=E[0],C=E[1],S=s(!0),P=p()(S,2),L=P[0],T=P[1];return u.createElement(l,null,u.createElement("div",{style:{width:"100px"}},u.createElement(a,{onClick:function(){var R=b?"":"\u6DD8\u7968\u7968";C(R)}},b.length?"\u53D6\u6D88":"\u9009\u62E9"," \u6DD8\u7968\u7968"),u.createElement(t,{value:b},u.createElement(o,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),u.createElement(o,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),u.createElement(o,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),u.createElement("div",{style:{width:"100px"}},u.createElement(a,{onClick:function(){T(!L)}},L?"\u53D6\u6D88":"\u9009\u4E2D"),u.createElement(o,{checked:L},"\u6DD8\u7968\u7968")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Radio, RadioGroup, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-radio-demo-zh-cn-8":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Radio,o=r.RadioGroup,t=r.Stack,s.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=s.sent,n=l.default,s.abrupt("return",{default:function(){return n.createElement(t,null,n.createElement("div",{style:{width:"100px"}},n.createElement("div",null,"RadioGroup\uFF1A"),n.createElement(o,{defaultValue:"\u6DD8\u7968\u7968"},n.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),n.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),n.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),n.createElement("div",null,n.createElement("div",null,"Radio\uFF1A"),n.createElement(a,{defaultChecked:!0},"\u6DD8\u7968\u7968")))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, RadioGroup, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},70280:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(48305),c=e.n($),k=e(90228),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-rating-demo-zh-cn-0":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Rating,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useRef,s.abrupt("return",{default:function(){var h=n(null);return l.createElement(o,{spacing:"8px"},l.createElement(a,null),l.createElement(a,{defaultValue:3,ref:h}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React, { useRef } from 'react';
export default () => {
  const ref = useRef(null);
  return (
    <Stack spacing="8px">
      <Rating />
      <Rating defaultValue={3} ref={ref} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-zh-cn-1":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Rating,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(3),f=c()(h,2),x=f[0],E=f[1];return l.createElement(o,null,l.createElement(a,{value:x,onChange:function(C,S){E(S.value)}}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-zh-cn-2":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Rating,o=r.Stack,u.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,{spacing:"8px"},l.createElement(a,{allowHalf:!0}),l.createElement(a,{defaultValue:3,allowHalf:!0}))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating allowHalf />
      <Rating defaultValue={3} allowHalf />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-zh-cn-3":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Rating,o=r.Stack,u.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,{spacing:"8px"},l.createElement(a,{readOnly:!0}),l.createElement(a,{defaultValue:3,readOnly:!0}))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating readOnly />
      <Rating defaultValue={3} readOnly />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-zh-cn-4":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Rating,o=r.Stack,u.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,{spacing:"8px"},l.createElement(a,{size:"xsmall",defaultValue:3}),l.createElement(a,{size:"small",defaultValue:3}),l.createElement(a,{size:"medium",defaultValue:3}),l.createElement(a,{size:"large",defaultValue:3}))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-zh-cn-5":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Rating,o=r.Stack,u.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,null,l.createElement(a,{defaultValue:3,count:8}))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack>
      <Rating defaultValue={3} count={8} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-zh-cn-6":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Rating,o=r.Stack,u.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,{spacing:"8px"},l.createElement(a,{defaultValue:3,disabled:!0}))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating defaultValue={3} disabled />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-rating-demo-zh-cn-7":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Rating,o=r.Stack,h.next=7,e.e(9975).then(e.bind(e,29975));case 7:return t=h.sent,l=t.HeartFilledIcon,n=t.HeartOutlinedIcon,h.next=12,Promise.resolve().then(e.t.bind(e,75271,19));case 12:return u=h.sent,s=u.default,h.abrupt("return",{default:function(){return s.createElement(o,{spacing:"8px"},s.createElement(a,{checkedIcon:s.createElement(l,{color:"info"}),defaultValue:3}),s.createElement(a,{checkedIcon:"A",icon:"B",defaultValue:3}),s.createElement(a,{checkedIcon:s.createElement(n,{color:"success"}),icon:s.createElement(l,{color:"primary"}),defaultValue:3}))}});case 15:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},97017:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return r}});var $=e(48305),c=e.n($),k=e(90228),p=e.n(k),y=e(15558),g=e.n(y),i=e(87999),v=e.n(i),d=e(75271),r={"packages-bui-core-src-scroll-view-demo-zh-cn-0":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,t=o.ScrollView,l=o.Stack,m.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return n=m.sent,u=n.default,m.abrupt("return",{default:function(){return u.createElement(l,null,u.createElement(t,{scrollY:!0,style:{width:"100%",height:"400px"}},g()(new Array(100)).map(function(f,x){return u.createElement("div",{className:"item",key:x},x)})))}});case 10:case"end":return m.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-scroll-view-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ScrollView, Button, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-scroll-view-demo-zh-cn-1":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=m.sent,t=o.default,m.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return l=m.sent,n=l.ScrollView,u=l.Stack,m.abrupt("return",{default:function(){return t.createElement(n,{scrollX:!0,style:{width:"50vw"}},t.createElement(u,{direction:"row",spacing:"8px",flexWrap:"nowrap",style:{width:"max-content"}},g()(new Array(100)).map(function(f,x){return t.createElement("div",{className:"item",style:{marginRight:"10px"},key:x},x)})))}});case 10:case"end":return m.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-scroll-view-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-scroll-view-demo-zh-cn-2":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.ScrollView,l=o.Button,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=function(){console.log("\u6EDA\u52A8\u5230\u5E95\u90E8\u4E86")},b=function(){console.log("\u6EDA\u52A8\u5230\u9876\u90E8\u4E86")},C=m(void 0),S=c()(C,2),P=S[0],L=S[1],T=m(void 0),B=c()(T,2),R=B[0],D=B[1];return s.createElement(n,null,s.createElement(l,{onClick:function(){D(void 0),L(0)}},"\u56DE\u5230\u9876\u90E8"),s.createElement(l,{onClick:function(){D(void 0),L(200)}},"\u6EDA\u52A8\u5230200px"),s.createElement(l,{onClick:function(){D("d50"),L(void 0)}},"\u6EDA\u52A8\u5230[50]\u6587\u672C\u5904"),s.createElement(t,{scrollY:!0,scrollTop:P,scrollIntoView:R,scrollIntoViewAlignment:"nearest",onScrollToLower:E,onScrollToUpper:b,onScroll:function(z){console.log(z),D(void 0),L(void 0)},scrollWithAnimation:!0,style:{width:"100%",height:"400px"}},g()(new Array(100)).map(function(M,z){return s.createElement("div",{className:"item",key:z,id:"d".concat(z)},z)})))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-scroll-view-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ScrollView, Button, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}}}},2156:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(48305),c=e.n($),k=e(90228),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-select-demo-zh-cn-0":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Select,o=r.SelectOption,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],m.abrupt("return",{default:function(){return n.createElement(t,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},n.createElement(a,null,u.map(function(f,x){return n.createElement(o,{key:x,value:f.value,label:f.label})})))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-zh-cn-1":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Select,o=r.SelectOption,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],m.abrupt("return",{default:function(){return n.createElement(t,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},n.createElement(a,{placeholder:"\u4E0B\u62C9\u9009\u62E9"},u.map(function(f,x){return n.createElement(o,{key:x,value:f.value,label:f.label})})))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-zh-cn-2":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Select,o=r.SelectOption,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],m.abrupt("return",{default:function(){return n.createElement(t,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},n.createElement(a,{defaultValue:2},u.map(function(f,x){return n.createElement(o,{key:x,value:f.value,label:f.label})})))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-zh-cn-3":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m,h,f;return p()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=E.sent,a=r.Alert,o=r.Button,t=r.Select,l=r.SelectOption,n=r.Stack,E.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=E.sent,s=u.default,m=u.useRef,h=u.useState,f=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],E.abrupt("return",{default:function(){var C=h(""),S=c()(C,2),P=S[0],L=S[1],T=m(null),B=h(!1),R=c()(B,2),D=R[0],M=R[1];return s.createElement(s.Fragment,null,D&&s.createElement(a,{color:"success"},"\u9009\u62E9\u5668A\u503C\uFF1A".concat(P||"","; \u9009\u62E9\u5668B\u503C: ").concat(T.current.value)),s.createElement(n,{spacing:"20px",alignItems:"stretch",style:{background:"#eee",padding:"50px"}},s.createElement(t,{placeholder:"\u9009\u62E9\u5668A",value:P,onChange:function(K,j){var V=j.value,N=V===void 0?"":V;L(N)}},f.map(function(z,K){return s.createElement(l,{key:K,value:z.value,label:z.label})})),s.createElement(t,{placeholder:"\u9009\u62E9\u5668B",inputRef:T},f.map(function(z,K){return s.createElement(l,{key:K,value:z.value,label:z.label})})),s.createElement(o,{onClick:function(K){M(!0),setTimeout(function(){M(!1)},1e3)}},"\u63D0\u4EA4")))}});case 16:case"end":return E.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Button, Select, SelectOption, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-zh-cn-4":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Select,o=r.SelectOption,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],m.abrupt("return",{default:function(){return n.createElement(t,{spacing:"20px",alignItems:"stretch",style:{background:"#eee",padding:"50px"}},n.createElement(a,{disabled:!0,placeholder:"\u7981\u7528"},u.map(function(f,x){return n.createElement(o,{key:x,value:f.value,label:f.label})})),n.createElement(a,{defaultValue:1},u.map(function(f,x){return n.createElement(o,{key:x,value:f.value,label:f.label,disabled:x===2})})))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-zh-cn-5":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=f.sent,a=r.default,f.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=f.sent,t=o.Select,l=o.SelectOption,n=o.Stack,f.next=12,e.e(9975).then(e.bind(e,29975));case 12:return u=f.sent,s=u.ArrowDownwardIcon,m=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],f.abrupt("return",{default:function(){return a.createElement(n,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},a.createElement(t,{icon:a.createElement(s,null),placeholder:"\u81EA\u5B9A\u4E49\u56FE\u6807"},m.map(function(E,b){return a.createElement(l,{key:b,value:E.value,label:E.label})})))}});case 16:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-zh-cn-6":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Select,o=r.SelectOption,t=r.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],m.abrupt("return",{default:function(){return n.createElement(t,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},n.createElement(a,{defaultValue:2},u.map(function(f,x){var E=f.value,b=f.label;return n.createElement(o,{value:E,label:b,key:x},"\u9009\u9879 - ",b)})))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-zh-cn-7":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=f.sent,a=r.default,f.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=f.sent,t=o.Select,l=o.SelectOption,n=o.Stack,f.next=12,e.e(9975).then(e.bind(e,29975));case 12:return u=f.sent,s=u.SettingsOutlinedIcon,m=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],f.abrupt("return",{default:function(){return a.createElement(n,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},a.createElement(t,{defaultValue:2},m.map(function(E,b){var C=E.value,S=E.label,P=a.createElement(n,{direction:"row",spacing:"10px"},a.createElement(s,null),S);return a.createElement(l,{label:P,value:C,key:b},"\u9009\u9879-",S)})))}});case 16:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-select-demo-zh-cn-8":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,a=r.Alert,o=r.Select,t=r.SelectOption,l=r.Stack,f.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=f.sent,u=n.default,s=n.useState,m=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],f.abrupt("return",{default:function(){var E=s("\u521D\u59CB\u5316"),b=c()(E,2),C=b[0],S=b[1];return u.createElement(l,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},u.createElement(a,{color:"info"},"\u5F53\u524D\u72B6\u6001\uFF1A",C),u.createElement(o,{onOpen:function(){S("\u6253\u5F00\u4E0B\u62C9\u9009\u62E9\u5668")},onClose:function(){S("\u5173\u95ED\u4E0B\u62C9\u9009\u62E9\u5668")},placeholder:"\u4E0B\u62C9\u9009\u62E9"},m.map(function(P,L){return u.createElement(t,{key:L,value:P.value,label:P.label})})))}});case 14:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Select, SelectOption, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},99488:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-skeleton-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Skeleton,o=r.Stack,l.abrupt("return",{default:function(){return d.createElement(o,null,d.createElement(a,{width:210}),d.createElement(a,{width:240}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Skeleton width={210} />
      <Skeleton width={240} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-skeleton-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Skeleton,o=r.Stack,l.abrupt("return",{default:function(){return d.createElement(o,{spacing:"10px"},d.createElement(a,{variant:"text",width:210}),d.createElement(a,{variant:"circular",width:48,height:48}),d.createElement(a,{variant:"rectangular",width:210,height:40}),d.createElement(a,{variant:"rounded",width:210,height:40}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-skeleton-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Skeleton,o=r.Stack,l.abrupt("return",{default:function(){return d.createElement(o,null,d.createElement(a,{width:210}),d.createElement(a,{animation:"pulse",width:210}),d.createElement(a,{animation:!1,width:210}))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Skeleton width={210} />
      <Skeleton animation="pulse" width={210} />
      <Skeleton animation={false} width={210} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-skeleton-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Skeleton,o=r.Stack,l.abrupt("return",{default:function(){return d.createElement(o,null,d.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"}},d.createElement(a,{variant:"circular",style:{margin:"0 6px 0 0",width:"48px",height:"48px"}}),d.createElement("div",null,d.createElement(a,{width:"50%",style:{width:"210px"}}),d.createElement(a,{width:"50%",style:{width:"210px"}}))))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-skeleton-demo-zh-cn-4":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=l.sent,d=v.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=l.sent,a=r.Skeleton,o=r.Stack,l.abrupt("return",{default:function(){return d.createElement(o,{spacing:"10px"},d.createElement(a,{variant:"circular"},d.createElement("div",{style:{height:"80px",width:"80px"}})),d.createElement(a,{variant:"circular"},d.createElement("div",{style:{height:"100px",width:"100px"}})))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},85918:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-slide-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=m.sent,a=r.default,o=r.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Button,n=t.Slide,u=t.Stack,m.abrupt("return",{default:function(){var f=o(!1),x=p()(f,2),E=x[0],b=x[1];return a.createElement(u,null,a.createElement(l,{onClick:function(){b(function(S){return!S})}},"\u70B9\u51FB\u6539\u53D8in\u5C5E\u6027"),a.createElement(u,null,["down","left","right","up"].map(function(C,S){return a.createElement("div",{style:{overflow:"hidden"}},a.createElement(n,{in:E,direction:C,timeout:{enter:800,exit:1e3},delay:200*S},a.createElement("div",null,"\u6ED1\u52A8\u6548\u679C",C)))})))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slide-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slide-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=m.sent,a=r.default,o=r.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Button,n=t.Slide,u=t.Stack,m.abrupt("return",{default:function(){var f=o(!0),x=p()(f,2),E=x[0],b=x[1];return a.createElement(u,null,a.createElement(l,{onClick:function(){b(function(S){return!S})}},"\u70B9\u51FB\u6302\u8F7D/\u5378\u8F7D\u7EC4\u4EF6"),E&&a.createElement(n,{appear:!0,in:!0,direction:"up",timeout:{enter:2e3,exit:1e3}},a.createElement("div",null,"\u6ED1\u52A8\u6548\u679CAppear")))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slide-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},26951:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-slider-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Slider,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(18),f=p()(h,2),x=f[0],E=f[1],b=function(S,P){E(P.value)};return l.createElement(o,{style:{padding:"0 30px"}},l.createElement(a,{value:x,onChange:b}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Slider,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(29),f=p()(h,2),x=f[0],E=f[1],b=function(S,P){E(P.value)};return l.createElement(o,{style:{padding:"0 30px"}},l.createElement(a,{value:x,min:10,max:60,onChange:b}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Slider,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(0),f=p()(h,2),x=f[0],E=f[1],b=function(S,P){E(P.value)};return l.createElement(o,{style:{padding:"0 30px"}},l.createElement(a,{value:x,step:10,onChange:b}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-zh-cn-3":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Slider,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(29),f=p()(h,2),x=f[0],E=f[1],b=function(S,P){E(P.value)};return l.createElement(o,{style:{padding:"0 30px"}},l.createElement(a,{value:x,tipVisible:!0,onChange:b}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-zh-cn-4":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Slider,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n([0,20]),f=p()(h,2),x=f[0],E=f[1],b=function(S,P){E(P.value)};return l.createElement(o,{style:{padding:"0 30px"}},l.createElement(a,{value:x,onChange:b}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-zh-cn-5":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Slider,o=r.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n([0,20]),f=p()(h,2),x=f[0],E=f[1],b=function(S,P){console.log("123",P.value),E(P.value)};return l.createElement(o,{style:{padding:"0 30px"}},l.createElement(a,{value:x,disableSwap:!0,onChange:b}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-zh-cn-6":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=h.sent,a=r.default,h.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=h.sent,t=o.Slider,l=o.Stack,h.next=11,e.e(9975).then(e.bind(e,29975));case 11:return n=h.sent,u=n.StarFilledIcon,s=n.StarOutlinedIcon,h.abrupt("return",{default:function(){var x=[20,60];return a.createElement(l,{style:{padding:"0 30px"}},a.createElement(t,{startIcon:a.createElement(u,{htmlColor:"#ff335c"}),endIcon:a.createElement(s,{htmlColor:"#00d68f"}),defaultValue:x}))}});case 15:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-zh-cn-7":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=u.sent,a=r.Slider,o=r.Stack,u.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,{style:{padding:"0 30px"}},l.createElement(a,{defaultValue:50,disabled:!0}))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider defaultValue={50} disabled />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-slider-demo-zh-cn-8":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Slider,o=r.Stack,m.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=m.sent,l=t.default,n=t.useState,u=function(f){var x=Math.floor(f),E=x>=10?x:"0".concat(x),b=f%1===0?"00":"30";return"".concat(E,":").concat(b)},m.abrupt("return",{default:function(){var f=n(24),x=p()(f,2),E=x[0],b=x[1],C=function(P,L){b(L==null?void 0:L.value)};return l.createElement(o,{style:{padding:"0 30px"}},l.createElement(a,{min:0,max:24,step:.5,value:E,tooltipRender:u,onChange:C}))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},65554:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return i}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g=e(22100),i={"packages-bui-core-src-stack-demo-stackdemo":{component:y.memo(y.lazy(function(){return Promise.all([e.e(3605),e.e(7040),e.e(2433)]).then(e.bind(e,74558))})),asset:{type:"BLOCK",id:"packages-bui-core-src-stack-demo-stackdemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37794).Z},react:{type:"NPM",value:"18.3.1"},"./index.less":{type:"FILE",value:e(72483).Z}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2)),"/home/runner/work/bifrostui/bifrostui/packages/bui-core/src/Stack/demo/index.less":g},renderOpts:{compile:function(){var v=p()(c()().mark(function r(){var a,o=arguments;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1212).then(e.bind(e,61212));case 2:return l.abrupt("return",(a=l.sent).default.apply(a,o));case 3:case"end":return l.stop()}},r)}));function d(){return v.apply(this,arguments)}return d}()}},"packages-bui-core-src-stack-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function v(){var d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return d=u.sent,r=d.Button,a=d.Divider,o=d.Stack,u.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,null,l.createElement(o,{divider:l.createElement(a,{direction:"horizontal"}),spacing:"10px",style:{width:"100px"}},l.createElement(r,null,"\u6309\u94AE1"),l.createElement(r,null,"\u6309\u94AE2"),l.createElement(r,null,"\u6309\u94AE3")))}});case 11:case"end":return u.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-stack-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Divider, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var v=p()(c()().mark(function r(){var a,o=arguments;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1212).then(e.bind(e,61212));case 2:return l.abrupt("return",(a=l.sent).default.apply(a,o));case 3:case"end":return l.stop()}},r)}));function d(){return v.apply(this,arguments)}return d}()}}}},6662:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-steps-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Stack,r=v.Step,a=v.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){var s=function(h,f){console.log(h,f)};return t.createElement(d,null,t.createElement("div",{style:{width:"120px"}},t.createElement(a,{onChange:s},t.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65"}),t.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65"}),t.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65"}))))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-steps-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Stack,r=v.Step,a=v.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(d,null,t.createElement(a,{direction:"horizontal"},t.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65"}),t.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65"}),t.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-steps-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Stack,r=v.Step,a=v.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(d,null,t.createElement(a,null,t.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65",subtitle:"\u526F\u6807\u9898 1"}),t.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65",subtitle:"\u526F\u6807\u9898 2"}),t.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65",subtitle:"\u526F\u6807\u9898 3"})),t.createElement(a,{labelPlacement:"vertical"},t.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65",subtitle:"\u526F\u6807\u9898 1"}),t.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65",subtitle:"\u526F\u6807\u9898 2"}),t.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65",subtitle:"\u526F\u6807\u9898 3"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-steps-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Stack,r=v.Step,a=v.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(d,null,t.createElement(a,null,t.createElement(r,{key:1,title:"\u6807\u9898 1",subtitle:"\u526F\u6807\u9898 1",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(r,{key:2,title:"\u6807\u9898 2",subtitle:"\u526F\u6807\u9898 2",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(r,{key:3,title:"\u6807\u9898 3",subtitle:"\u526F\u6807\u9898 3",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(r,{key:4,title:"\u6807\u9898 4",subtitle:"\u526F\u6807\u9898 4",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-steps-demo-zh-cn-4":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Stack,r=v.Step,a=v.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(d,null,t.createElement(a,null,t.createElement(r,{key:1,title:"\u6807\u9898 1",subtitle:"\u526F\u6807\u9898 1",status:"error",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(r,{key:2,title:"\u6807\u9898 2",subtitle:"\u526F\u6807\u9898 2",status:"finish",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(r,{key:3,title:"\u6807\u9898 3",subtitle:"\u526F\u6807\u9898 3",status:"active",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(r,{key:4,title:"\u6807\u9898 4",subtitle:"\u526F\u6807\u9898 4",status:"wait",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-steps-demo-zh-cn-5":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l,n,u,s,m;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return v=f.sent,d=v.default,f.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=f.sent,a=r.Stack,o=r.Step,t=r.Steps,f.next=12,e.e(9975).then(e.bind(e,29975));case 12:return l=f.sent,n=l.AccessTimeCircleFilledIcon,u=l.ErrorCircleOutlinedIcon,s=l.HeartFilledIcon,m=l.LocationFilledIcon,f.abrupt("return",{default:function(){return d.createElement(a,null,d.createElement(t,null,d.createElement(o,{key:1,title:"\u6807\u9898 1",subtitle:"\u526F\u6807\u9898 1",icon:d.createElement(s,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),d.createElement(o,{key:2,title:"\u6807\u9898 2",subtitle:"\u526F\u6807\u9898 2",status:"active",icon:d.createElement(m,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),d.createElement(o,{key:3,title:"\u6807\u9898 3",subtitle:"\u526F\u6807\u9898 3",status:"error",icon:d.createElement(u,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),d.createElement(o,{key:4,title:"\u6807\u9898 4",subtitle:"\u526F\u6807\u9898 4",status:"wait",icon:d.createElement(n,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"})))}});case 18:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-steps-demo-zh-cn-6":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Stack,r=v.Step,a=v.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){var s=function(h,f){console.log(h,f)};return t.createElement(d,null,t.createElement(a,{direction:"horizontal",current:1,onChange:s},t.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65",status:"error",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848",disabled:!0}),t.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65"}),t.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65",subtitle:"\u526F\u6807\u9898 3",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848",disabled:!0})))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-steps-demo-zh-cn-7":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t,l;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=u.sent,d=v.Stack,r=v.Step,a=v.Steps,u.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=u.sent,t=o.default,l=function(){return t.createElement(d,{style:{"--align-items":"flex-start"}},t.createElement("div",{style:{backgroundColor:"var(--bui-color-bg-view)",width:"220px",height:"80px",borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"space-around",padding:"5px 10px",margin:"5px 0 20px"}},t.createElement("div",null,t.createElement("span",{style:{color:"#5F6672"}},"\u9000\u7968\u7535\u5F71"),t.createElement("span",{style:{color:"#2E333E",paddingLeft:"20px"}},"\u590D\u4EC7\u8005\u8054\u76DF3\uFF083\u5F20\uFF09")),t.createElement("div",null,t.createElement("span",{style:{color:"#5F6672"}},"\u9000\u7968\u91D1\u989D"),t.createElement("span",{style:{color:"#2E333E",paddingLeft:"20px"}},"38.9\u5143")),t.createElement("div",null,t.createElement("span",{style:{color:"#5F6672"}},"\u670D\u52A1\u8D39"),t.createElement("span",{style:{color:"#2E333E",paddingLeft:"34px"}},"4\u5143\uFF08\u5F71\u9662\u3001\u6DD8\u7968\u7968\u6536\u53D6\uFF09"))))},u.abrupt("return",{default:function(){return t.createElement(a,{labelPlacement:"vertical"},t.createElement(r,{key:1,title:"\u9000\u6B3E\u7533\u8BF7 \u5DF2\u63D0\u4EA4",subtitle:"2021-03-30 19:00 ",description:l()}),t.createElement(r,{key:2,title:"\u9000\u6B3E\u7533\u8BF7 \u5DF2\u63D0\u4EA4",subtitle:"2021-03-30 19:08 ",description:"\u6B63\u5728\u5904\u7406\u9000\u6B3E\u7533\u8BF7\uFF0C\u9884\u8BA11-3\u5929\u539F\u8DEF\u8FD4\u56DE\u81F3\u4F60\u7684\u4ED8\u6B3E\u8D26\u6237\u3002"}),t.createElement(r,{key:3,title:"\u9000\u6B3E\u5B8C\u6210",subtitle:"2021-03-30 19:08 ",description:"\u9000\u6B3E\u5230\u8D26\u540E\uFF0C\u5C06\u7ED3\u675F\u672C\u6B21\u9000\u6B3E\u6D41\u7A0B\u3002"}))}});case 12:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-steps-demo-zh-cn-8":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Stack,r=v.Step,a=v.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(d,null,t.createElement("div",{style:{width:"176px"}},t.createElement(a,{style:{"--title-font-size":"30px","--step-icon-margin":"12px 4px 0 0","--step-line-padding":"36px 0 0 0"}},t.createElement(r,{key:1,title:"\u7B2C\u4E00\u6B65"}),t.createElement(r,{key:2,title:"\u7B2C\u4E8C\u6B65"}),t.createElement(r,{key:3,title:"\u7B2C\u4E09\u6B65"}))))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},35117:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(48305),c=e.n($),k=e(90228),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-swiper-demo-zh-cn-0":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=s.sent,t=o.Swiper,l=o.SwiperItem,n=o.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-zh-cn-1":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=h.sent,a=r.default,o=r.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.Swiper,n=t.SwiperItem,u=t.Stack,s=t.Button,h.abrupt("return",{default:function(){var x=o(1),E=c()(x,2),b=E[0],C=E[1];return a.createElement(a.Fragment,null,a.createElement(u,{direction:"row",spacing:"8px"},a.createElement(s,{onClick:function(){return C(0)}},"\u5207\u6362\u52301"),a.createElement(s,{onClick:function(){return C(1)}},"\u5207\u6362\u52302"),a.createElement(s,{onClick:function(){return C(2)}},"\u5207\u6362\u52303")),a.createElement(l,{current:b,onChange:function(P){C(P.detail.current)},style:{width:"300px",height:"200px"}},a.createElement(n,null,a.createElement(u,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(n,null,a.createElement(u,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(n,null,a.createElement(u,{style:{background:"darkgray",width:"100%",height:"100%"}},"3"))))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-zh-cn-2":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=s.sent,t=o.Swiper,l=o.SwiperItem,n=o.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{interval:500,autoplay:!0,style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-zh-cn-3":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=s.sent,t=o.Swiper,l=o.SwiperItem,n=o.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{circular:!0,interval:500,autoplay:!0,style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-zh-cn-4":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=s.sent,t=o.Swiper,l=o.SwiperItem,n=o.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{circular:!0,interval:500,autoplay:!0,effect:"fade",style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-zh-cn-5":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=s.sent,t=o.Swiper,l=o.SwiperItem,n=o.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{vertical:!0,interval:500,autoplay:!0,style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-zh-cn-6":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=s.sent,t=o.Swiper,l=o.SwiperItem,n=o.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{interval:500,autoplay:!0,indicatorDots:!0,indicatorColor:"#880000",indicatorActiveColor:"#FF0000",style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-swiper-demo-zh-cn-7":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=s.sent,t=o.Swiper,l=o.SwiperItem,n=o.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{onChange:console.log,onAnimationFinish:console.log,style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},81698:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(48305),c=e.n($),k=e(90228),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-switch-demo-zh-cn-0":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=u.sent,a=r.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=u.sent,t=o.Stack,l=o.Switch,u.abrupt("return",{default:function(){return a.createElement(t,null,a.createElement(l,null))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack>
      <Switch />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-zh-cn-1":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=u.sent,a=r.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=u.sent,t=o.Stack,l=o.Switch,u.abrupt("return",{default:function(){return a.createElement(t,{spacing:"5px"},a.createElement(l,{color:"primary",defaultChecked:!0}),a.createElement(l,{color:"info",defaultChecked:!0}),a.createElement(l,{color:"success",defaultChecked:!0}),a.createElement(l,{color:"warning",defaultChecked:!0}),a.createElement(l,{color:"danger",defaultChecked:!0}))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-zh-cn-2":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=u.sent,a=r.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=u.sent,t=o.Stack,l=o.Switch,u.abrupt("return",{default:function(){return a.createElement(t,{spacing:"10px",direction:"row"},a.createElement(l,{size:"small"}),a.createElement(l,{size:"medium"}),a.createElement(l,{size:"large"}))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Switch size="small" />
      <Switch size="medium" />
      <Switch size="large" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-zh-cn-3":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=h.sent,a=r.default,h.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=h.sent,t=o.Stack,l=o.Switch,h.next=11,e.e(9975).then(e.bind(e,29975));case 11:return n=h.sent,u=n.MoonOutlinedIcon,s=n.SunOutlinedIcon,h.abrupt("return",{default:function(){return a.createElement(t,{spacing:"10px",direction:"row"},a.createElement(l,{defaultChecked:!0,checkedChildren:"\u5F00",unCheckedChildren:"\u5173"}),a.createElement(l,{defaultChecked:!0,checkedChildren:a.createElement(u,{htmlColor:"#fff"}),unCheckedChildren:a.createElement(s,{htmlColor:"#fff"})}),a.createElement(l,{defaultChecked:!0,checkedChildren:a.createElement(u,{htmlColor:"#fff"}),unCheckedChildren:a.createElement(s,{htmlColor:"#fff"}),size:"large"}))}});case 15:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-zh-cn-4":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,o=r.useState,s.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=s.sent,l=t.Stack,n=t.Switch,s.abrupt("return",{default:function(){var h=o(!0),f=c()(h,2),x=f[0],E=f[1],b=function(S,P){E(P==null?void 0:P.checked),console.log("onChange",P)};return a.createElement(l,null,a.createElement(n,{checked:x,onChange:b}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-zh-cn-5":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=s.sent,a=r.default,o=r.useState,s.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=s.sent,l=t.Stack,n=t.Switch,s.abrupt("return",{default:function(){var h=o(!0),f=c()(h,2),x=f[0],E=f[1],b=function(S,P){E(P==null?void 0:P.checked),console.log("onChange",P)};return a.createElement(l,null,a.createElement(n,{checked:x,onChange:b,inputProps:{className:"my-input"}}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-switch-demo-zh-cn-6":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=u.sent,a=r.default,u.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=u.sent,t=o.Stack,l=o.Switch,u.abrupt("return",{default:function(){return a.createElement(t,{spacing:"5px"},a.createElement(l,{disabled:!0}),a.createElement(l,{defaultChecked:!0,disabled:!0}))}});case 10:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="5px">
      <Switch disabled />
      <Switch defaultChecked disabled />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},91760:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-tab-bar-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=m.sent,a=r.default,o=r.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Stack,n=t.TabBar,u=t.TabBarItem,m.abrupt("return",{default:function(){var f=o(0),x=p()(f,2),E=x[0],b=x[1],C=function(P,L){var T=L.value;b(T)};return a.createElement(l,{style:{background:"#eee",padding:"20px 0 10px"}},a.createElement(n,{current:E,onChange:C},a.createElement(u,{title:"\u4E3B\u9875"}),a.createElement(u,{title:"\u5546\u5E97"}),a.createElement(u,{title:"\u5E2E\u52A9"})))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-tab-bar-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s,m,h,f;return c()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=E.sent,a=r.default,o=r.useState,E.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=E.sent,l=t.Stack,n=t.TabBar,u=t.TabBarItem,E.next=13,e.e(9975).then(e.bind(e,29975));case 13:return s=E.sent,m=s.PhoneFilledIcon,h=s.StoreFilledIcon,f=s.HomeFilledIcon,E.abrupt("return",{default:function(){var C=o(0),S=p()(C,2),P=S[0],L=S[1],T=function(R,D){var M=D.value;L(M)};return a.createElement(l,{style:{background:"#eee",padding:"20px 0 10px"}},a.createElement(n,{current:P,onChange:T},a.createElement(u,{title:"\u4E3B\u9875",icon:a.createElement(f,null),activeIcon:a.createElement(f,{color:"primary"})}),a.createElement(u,{title:"\u5546\u5E97",icon:a.createElement(h,null),activeIcon:a.createElement(h,{color:"primary"})}),a.createElement(u,{title:"\u5E2E\u52A9",icon:a.createElement(m,null),activeIcon:a.createElement(m,{color:"primary"})})))}});case 18:case"end":return E.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-tab-bar-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=m.sent,a=r.default,o=r.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Stack,n=t.TabBar,u=t.TabBarItem,m.abrupt("return",{default:function(){var f=o(0),x=p()(f,2),E=x[0],b=x[1],C=o(0),S=p()(C,2),P=S[0],L=S[1],T=function(D,M){var z=M.value;b(z)},B=function(D,M){var z=M.value;L(z)};return a.createElement(a.Fragment,null,a.createElement(l,{style:{background:"#eee",padding:"20px 0 10px"},alignItems:"flex-start"},a.createElement("div",{style:{margin:"8px"}},"\u81EA\u5B9A\u4E49\u9009\u4E2D\u4E3B\u9898\u8272: "),a.createElement(n,{current:E,onChange:T},a.createElement(u,{title:"\u4E3B\u9875"}),a.createElement(u,{title:"\u5546\u5E97"}),a.createElement(u,{title:"\u5E2E\u52A9"}))),a.createElement(l,{style:{background:"#eee",padding:"20px 0 10px"},alignItems:"flex-start"},a.createElement("div",{style:{margin:"8px"}},"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u4E3B\u9898\u8272: "),a.createElement(n,{current:P,onChange:B,color:"info",activeColor:"primary"},a.createElement(u,{title:"\u4E3B\u9875"}),a.createElement(u,{title:"\u5546\u5E97"}),a.createElement(u,{title:"\u5E2E\u52A9"}))))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-tab-bar-demo-zh-cn-3":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s,m,h,f;return c()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=E.sent,a=r.default,o=r.useState,E.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=E.sent,l=t.Stack,n=t.TabBar,u=t.TabBarItem,E.next=13,e.e(9975).then(e.bind(e,29975));case 13:return s=E.sent,m=s.PhoneFilledIcon,h=s.StoreFilledIcon,f=s.HomeFilledIcon,E.abrupt("return",{default:function(){var C=o(0),S=p()(C,2),P=S[0],L=S[1],T=function(R,D){var M=D.value;L(M)};return a.createElement(l,{style:{background:"#eee",padding:"20px 0 10px"}},a.createElement(n,{current:P,onChange:T},a.createElement(u,{title:"\u4E3B\u9875",icon:a.createElement(f,null),activeIcon:a.createElement(f,{color:"primary"})}),a.createElement(u,{title:"\u5546\u5E97",icon:a.createElement(h,null),activeIcon:a.createElement(h,{color:"primary"}),BadgeProps:{type:"dot"}}),a.createElement(u,{title:"\u5E2E\u52A9",icon:a.createElement(m,null),activeIcon:a.createElement(m,{color:"primary"}),BadgeProps:{content:"20"}})))}});case 18:case"end":return E.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},25489:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return r}});var $=e(26068),c=e.n($),k=e(90228),p=e.n(k),y=e(48305),g=e.n(y),i=e(87999),v=e.n(i),d=e(75271),r={"packages-bui-core-src-tabs-demo-zh-cn-0":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m,h;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Stack,l=o.Tab,n=o.TabPanel,u=o.Tabs,x.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h("fruits"),C=g()(b,2),S=C[0],P=C[1],L=[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables"},{title:"\u52A8\u7269",index:"animals"}],T=function(R,D){var M=D.index;console.log("Click Tab, value index is: ".concat(M)),P(M)};return m.createElement(t,{alignItems:"stretch"},m.createElement(u,{style:{marginBottom:"12px"},value:S},L.map(function(B){return m.createElement(l,{key:B.index,index:B.index,onClick:T},B.title)})),m.createElement(n,{value:S,index:"fruits"},"\u83E0\u841D"),m.createElement(n,{value:S,index:"vegetables"},"\u897F\u7EA2\u67FF"),m.createElement(n,{value:S,index:"animals"},"\u8682\u8681"))}});case 13:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-tabs-demo-zh-cn-1":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Stack,l=o.TabPanel,n=o.Tabs,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m("fruits"),b=g()(E,2),C=b[0],S=b[1],P=function(T,B){var R=B.index;console.log("Tabs change, value index is: ".concat(R)),S(R)};return s.createElement(t,null,s.createElement(n,{style:{marginBottom:"12px"},onChange:P,value:C,tabs:[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables",disabled:!0},{title:"\u52A8\u7269",index:"animals"}]}),s.createElement(l,{value:C,index:"fruits"},"\u83E0\u841D"),s.createElement(l,{value:C,index:"vegetables"},"\u897F\u7EA2\u67FF"),s.createElement(l,{value:C,index:"animals"},"\u8682\u8681"))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TabPanel, Tabs } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-tabs-demo-zh-cn-2":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m,h;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Stack,l=o.Tab,n=o.TabPanel,u=o.Tabs,x.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h("fruits"),C=g()(b,2),S=C[0],P=C[1],L=[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables"},{title:"\u52A8\u7269",index:"animals"}],T=function(R,D){var M=D.index;console.log("Click Tab, value index is: ".concat(M)),P(M)};return m.createElement(t,null,m.createElement(u,{style:{marginBottom:"12px"},value:S},L.map(function(B){return m.createElement(l,{key:B.index,index:B.index,disabled:!0,onClick:T},B.title)})),m.createElement(n,{value:S,index:"fruits"},"\u83E0\u841D"),m.createElement(n,{value:S,index:"vegetables"},"\u897F\u7EA2\u67FF"),m.createElement(n,{value:S,index:"animals"},"\u8682\u8681"))}});case 13:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-tabs-demo-zh-cn-3":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m,h,f;return p()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=E.sent,t=o.Button,l=o.Stack,n=o.Tab,u=o.TabPanel,s=o.Tabs,E.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return m=E.sent,h=m.default,f=m.useState,E.abrupt("return",{default:function(){var C=f("fruits"),S=g()(C,2),P=S[0],L=S[1],T=[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables"},{title:"\u52A8\u7269",index:"animals"}],B=function(M,z){var K=z.index;console.log(M,"Tab change, value index is: ".concat(K)),L(K)},R=function(M){L(M)};return h.createElement(l,null,h.createElement(s,{style:{marginBottom:"12px"},align:"start",onChange:B,value:P},T.map(function(D){return h.createElement(n,c()({key:D.index},D),D.title)})),h.createElement(u,{value:P,index:"fruits"},h.createElement("div",null,"\u83E0\u841D"),h.createElement(t,{onClick:function(){R("animals")}},"\u6211\u8981\u8682\u8681"),h.createElement(t,{onClick:function(){R("vegetables")}},"\u6211\u8981\u897F\u7EA2\u67FF")),h.createElement(u,{value:P,index:"vegetables"},h.createElement("div",null,"\u897F\u7EA2\u67FF"),h.createElement(t,{onClick:function(){R("fruits")}},"\u6211\u8981\u83E0\u841D"),h.createElement(t,{onClick:function(){R("animals")}},"\u6211\u8981\u8682\u8681")),h.createElement(u,{value:P,index:"animals"},h.createElement("div",null,"\u8682\u8681"),h.createElement(t,{onClick:function(){R("fruits")}},"\u6211\u8981\u83E0\u841D"),h.createElement(t,{onClick:function(){R("vegetables")}},"\u6211\u8981\u897F\u7EA2\u67FF")))}});case 14:case"end":return E.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-tabs-demo-zh-cn-4":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m,h;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=x.sent,t=o.Stack,l=o.Tab,n=o.TabPanel,u=o.Tabs,x.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return s=x.sent,m=s.default,h=s.useState,x.abrupt("return",{default:function(){var b=h("2"),C=g()(b,2),S=C[0],P=C[1],L=[{title:"\u957F\u6D25\u6E56",index:"1"},{title:"\u6218\u72FC2",index:"2"},{title:"\u4F60\u597D\uFF0C\u674E\u7115\u82F1",index:"3"},{title:"\u54EA\u5412\u4E4B\u9B54\u7AE5\u964D\u4E16",index:"4"},{title:"\u6D41\u6D6A\u5730\u7403",index:"5"},{title:"\u5510\u4EBA\u8857\u63A2\u68483",index:"6"},{title:"\u590D\u4EC7\u8005\u8054\u76DF4\uFF1A\u7EC8\u5C40\u4E4B\u6218",index:"7"},{title:"\u957F\u6D25\u6E56\u4E4B\u6C34\u95E8\u6865",index:"8"},{title:"\u7EA2\u6D77\u884C\u52A8",index:"9"}],T=function(R,D){var M=D.index;console.log(R,"Tab Change, value index is: ".concat(M)),P(M)};return m.createElement(t,null,m.createElement("div",{style:{width:"325px"}},m.createElement(u,{style:{marginTop:"20px",marginBottom:"12px"},value:S,onChange:T},L.map(function(B){return m.createElement(l,c()({key:B.index},B),B.title)})),L.map(function(B){return m.createElement(n,{key:B.index,value:S,index:B.index},B.index)})))}});case 13:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}}}},70165:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return g}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g={"packages-bui-core-src-tag-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Stack,r=v.Tag,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(d,{direction:"row",spacing:"10px"},o.createElement(r,null,"\u9ED8\u8BA4\u6807\u7B7E"),o.createElement(r,{variant:"contained"},"\u586B\u5145\u6807\u7B7E"),o.createElement(r,{variant:"light"},"\u6D45\u4EAE\u6807\u7B7E"))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Tag>\u9ED8\u8BA4\u6807\u7B7E</Tag>
      <Tag variant="contained">\u586B\u5145\u6807\u7B7E</Tag>
      <Tag variant="light">\u6D45\u4EAE\u6807\u7B7E</Tag>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-tag-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Stack,r=v.Tag,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(d,{spacing:"10px"},o.createElement(d,{direction:"row",spacing:"10px"},o.createElement(r,{variant:"outlined",color:"primary"},"\u9650\u65F6\u7279\u4EF7"),o.createElement(r,{variant:"outlined",color:"info"},"\u97F3\u4E50\u5267"),o.createElement(r,{variant:"outlined",color:"success"},"\u97F3\u4E50\u5267"),o.createElement(r,{variant:"outlined",color:"warning"},"\u70B9\u6620"),o.createElement(r,{variant:"outlined",color:"danger"},"\u9650\u65F6\u4F18\u60E0"),o.createElement(r,{variant:"outlined",color:"vip"},"\u4F1A\u5458")),o.createElement(d,{direction:"row",spacing:"10px"},o.createElement(r,{variant:"contained",color:"primary"},"\u65E9\u9E1F\u4F18\u60E0"),o.createElement(r,{variant:"contained",color:"info"},"\u97F3\u4E50\u5267"),o.createElement(r,{variant:"contained",color:"success"},"\u5F71\u57CE\u5361"),o.createElement(r,{variant:"contained",color:"warning"},"\u70B9\u6620"),o.createElement(r,{variant:"contained",color:"danger"},"\u9650\u65F6\u4F18\u60E0"),o.createElement(r,{variant:"contained",color:"vip"},"\u4F1A\u5458")),o.createElement(d,{direction:"row",spacing:"10px"},o.createElement(r,{variant:"light",color:"primary"},"\u65E9\u9E1F\u4F18\u60E0"),o.createElement(r,{variant:"light",color:"info"},"\u97F3\u4E50\u5267"),o.createElement(r,{variant:"light",color:"success"},"\u5F71\u57CE\u5361"),o.createElement(r,{variant:"light",color:"warning"},"\u70B9\u6620"),o.createElement(r,{variant:"light",color:"danger"},"\u9650\u65F6\u4F18\u60E0"),o.createElement(r,{variant:"light",color:"vip"},"\u4F1A\u5458")))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-tag-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=l.sent,d=v.Stack,r=v.Tag,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,o=a.default,l.abrupt("return",{default:function(){return o.createElement(d,{spacing:"10px"},o.createElement(r,{variant:"contained",htmlColor:"#69eeff"},"\u81EA\u5B9A\u4E49\u8272\u5F69"),o.createElement(r,{variant:"light",htmlColor:"#69eeff"},"\u81EA\u5B9A\u4E49\u8272\u5F69"),o.createElement(r,{variant:"outlined",htmlColor:"#69eeff"},"\u81EA\u5B9A\u4E49\u8272\u5F69"))}});case 10:case"end":return l.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}},"packages-bui-core-src-tag-demo-zh-cn-3":{component:y.memo(y.lazy(p()(c()().mark(function i(){var v,d,r,a,o,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return v=n.sent,d=v.Stack,r=v.Tag,a=v.TagGroup,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return o=n.sent,t=o.default,n.abrupt("return",{default:function(){return t.createElement(d,{direction:"row",spacing:"10px",flexWrap:"wrap"},t.createElement(a,null,t.createElement(r,{variant:"contained",color:"primary"},"primary"),t.createElement(r,{variant:"contained",color:"info"},"info")),t.createElement(a,null,t.createElement(r,{variant:"contained",color:"success"},"success"),t.createElement(r,{variant:"outlined",color:"warning"},"warning")),t.createElement(a,null,t.createElement(r,{variant:"outlined",color:"warning"},"warning"),t.createElement(r,{variant:"contained",color:"success"},"success")),t.createElement(a,null,t.createElement(r,{variant:"outlined",color:"primary"},"primary"),t.createElement(r,{variant:"outlined",color:"info"},"info")),t.createElement(a,null,t.createElement(r,{variant:"contained",color:"primary"},"primary"),t.createElement(r,{variant:"outlined",color:"info"},"info"),t.createElement(r,{variant:"outlined",color:"info"},"info")),t.createElement(a,null,t.createElement(r,{variant:"outlined",color:"primary"},"primary"),t.createElement(r,{variant:"contained",color:"info"},"info"),t.createElement(r,{variant:"outlined",color:"info"},"info")),t.createElement(a,null,t.createElement(r,{variant:"outlined",color:"primary"},"primary"),t.createElement(r,{variant:"outlined",color:"info"},"info"),t.createElement(r,{variant:"contained",color:"info"},"info")),t.createElement(a,null,t.createElement(r,{variant:"outlined",color:"primary"},"primary"),t.createElement(r,{variant:"outlined",color:"info"},"info"),t.createElement(r,{variant:"outlined",color:"info"},"info")),t.createElement(a,null,t.createElement(r,{variant:"contained",color:"primary"},"primary"),t.createElement(r,{variant:"outlined",color:"info"},"info"),t.createElement(r,{variant:"contained",color:"info"},"info")),t.createElement(a,null,t.createElement(r,{variant:"contained",color:"primary"},"primary"),t.createElement(r,{variant:"contained",color:"info"},"info"),t.createElement(r,{variant:"contained",color:"info"},"info")),t.createElement(a,null,t.createElement(r,{variant:"contained",color:"primary"},"primary"),t.createElement(r,{variant:"contained",color:"info"},"info"),t.createElement(r,{variant:"outlined",color:"info"},"info")),t.createElement(a,null,t.createElement(r,{variant:"outlined",color:"primary"},"primary"),t.createElement(r,{variant:"contained",color:"info"},"info"),t.createElement(r,{variant:"contained",color:"info"},"info")),t.createElement(a,null,t.createElement(r,{variant:"outlined",color:"warning"},"warning")))}});case 11:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag, TagGroup } from '@bifrostui/react';
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
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>

      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>

      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="warning">
          warning
        </Tag>
      </TagGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var i=p()(c()().mark(function d(){var r,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},d)}));function v(){return i.apply(this,arguments)}return v}()}}}},63875:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(90228),c=e.n($),k=e(48305),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-text-area-demo-zh-cn-0":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Stack,o=r.TextArea,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(""),f=p()(h,2),x=f[0],E=f[1],b=function(S,P){E(P==null?void 0:P.value),console.log("change",P==null?void 0:P.value)};return l.createElement(a,{alignItems:"stretch"},l.createElement(o,{value:x,placeholder:"\u9ED8\u8BA4",onChange:b}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-text-area-demo-zh-cn-1":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Stack,o=r.TextArea,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(""),f=p()(h,2),x=f[0],E=f[1];return l.createElement(a,{alignItems:"stretch"},l.createElement(o,{value:x,placeholder:"\u6700\u591A\u8F93\u516510\u4E2A\u5B57",onChange:function(C,S){return E(S==null?void 0:S.value)},maxLength:10,showCount:!0}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-text-area-demo-zh-cn-2":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Button,o=r.Stack,t=r.TextArea,h.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=h.sent,n=l.default,u=l.useRef,s=l.useState,h.abrupt("return",{default:function(){var x=s("0"),E=p()(x,2),b=E[0],C=E[1],S=s("100"),P=p()(S,2),L=P[0],T=P[1],B=u(null),R=function(){C(function(K){return"".concat(Number(K)+10)})},D=function(){T(function(K){return"".concat(Number(K)-10)})},M=function(){var K=B.current;K.value=Number(K.value)*2};return n.createElement(o,{alignItems:"stretch"},n.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:"40px"}},"\u53D7\u63A7\u7EC4\u4EF6\uFF1A",n.createElement(a,{onClick:R},"\u6570\u91CF\u52A010"),n.createElement("br",null),n.createElement(t,{value:b,onChange:function(K,j){return C(j.value)}})),n.createElement("div",{style:{display:"flex",flexDirection:"column"}},"\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A",n.createElement("br",null),n.createElement(a,{onClick:D},"\u6570\u91CF\u51CF10(\u64CD\u4F5CdefaultValue\u65E0\u6548)"),n.createElement("br",null),n.createElement(a,{onClick:M},"\u6570\u91CF\u4E582(\u901A\u8FC7DOM\u64CD\u4F5Cvalue\u6709\u6548)"),n.createElement("br",null),n.createElement(t,{textareaRef:B,defaultValue:L})))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack, TextArea } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-text-area-demo-zh-cn-3":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,a=r.Stack,o=r.TextArea,t=r.Button,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,u=l.useState,m.abrupt("return",{default:function(){var f=u("123"),x=p()(f,2),E=x[0],b=x[1],C=u(!1),S=p()(C,2),P=S[0],L=S[1];return n.createElement(a,{alignItems:"stretch"},n.createElement(t,{onClick:function(){L(!P)}},P?"\u5931":"\u805A","\u7126"),n.createElement(o,{value:E,autoFocus:P,onChange:function(B,R){return b(R==null?void 0:R.value)}}))}});case 12:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea, Button } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-text-area-demo-zh-cn-4":{component:i.memo(i.lazy(g()(c()().mark(function d(){var r,a,o,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Stack,o=r.TextArea,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(""),f=p()(h,2),x=f[0],E=f[1];return l.createElement(a,{alignItems:"stretch"},l.createElement(o,{value:x,placeholder:"\u6587\u6848\u8FC7\u591A\u4F1A\u81EA\u52A8\u6491\u9AD8",onChange:function(C,S){return E(S==null?void 0:S.value)},autoSize:{minHeight:50,maxHeight:100}}))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(c()().mark(function a(){var o,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},81579:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return d}});var $=e(48305),c=e.n($),k=e(90228),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v=e(40129),d={"packages-bui-core-src-theme-provider-demo-zh-cn-0":{component:i.memo(i.lazy(g()(p()().mark(function r(){var a,o,t,l,n,u,s,m,h;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return a=x.sent,o=a.ThemeProvider,t=a.Button,x.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return l=x.sent,n=l.default,u={xs:{"--bui-button-border-radius":"2px"},sm:{"--bui-button-border-radius":"6px"},md:{"--bui-button-border-radius":"10px"},lg:{"--bui-button-border-radius":"14px"},xl:{"--bui-button-border-radius":"16px"}},s={"--bui-color-info-start":"#33a7ff","--bui-color-info-end":"#148aff"},m={"--bui-color-info-start":"#11caee","--bui-color-info-end":"#47bfbb"},h={"--bui-button-height":"34px"},x.abrupt("return",{default:function(){return n.createElement(o,{isRoot:!0,token:h,responsive:u,defaultLightToken:s,defaultDarkToken:m},n.createElement(t,{variant:"contained",color:"info"},"\u81EA\u5B9A\u4E49Tokens"))}});case 14:case"end":return x.stop()}},r)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-theme-provider-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

/**
 * \u54CD\u5E94\u5F0F\uFF1A\u4E0D\u540C\u5C4F\u5E55\u5C3A\u5BF8\u4E0B\u81EA\u5B9A\u4E49Tokens
 * \u53EF\u914D\u7F6E\u54CD\u5E94\u5F0F\u573A\u666F\u4E0B\u7684\u5185\u7F6ETokens\u548C\u7EC4\u4EF6\u7684\u5168\u5C40Tokens
 */
const responsive = {
  xs: {
    '--bui-button-border-radius': '2px',
  },
  sm: {
    '--bui-button-border-radius': '6px',
  },
  md: {
    '--bui-button-border-radius': '10px',
  },
  lg: {
    '--bui-button-border-radius': '14px',
  },
  xl: {
    '--bui-button-border-radius': '16px',
  },
};

/**
 * \u9ED8\u8BA4\u9AD8\u4EAE\u6A21\u5F0F\u81EA\u5B9A\u4E49Tokens
 * \u5E94\u914D\u7F6EBUI\u5185\u7F6E\u9ED8\u8BA4\u9AD8\u4EAE\u6A21\u5F0F\u5168\u5C40Tokens
 */
const defaultLightToken = {
  '--bui-color-info-start': '#33a7ff',
  '--bui-color-info-end': '#148aff',
};

/**
 * \u9ED8\u8BA4\u6697\u9ED1\u6A21\u5F0F\u81EA\u5B9A\u4E49Tokens
 * \u5E94\u914D\u7F6EBUI\u5185\u9ED8\u8BA4\u7F6E\u6697\u9ED1\u6A21\u5F0F\u5168\u5C40Tokens
 */
const defaultDarkToken = {
  '--bui-color-info-start': '#11caee',
  '--bui-color-info-end': '#47bfbb',
};

/**
 * \u81EA\u5B9A\u4E49\u7EC4\u4EF6Tokens
 * \u5E94\u914D\u7F6E\u7EC4\u4EF6\u7EA7\u522B\u7684\u5168\u5C40Tokens
 */
const token = {
  '--bui-button-height': '34px',
};

export default () => {
  return (
    <ThemeProvider
      isRoot
      token={token}
      responsive={responsive}
      defaultLightToken={defaultLightToken}
      defaultDarkToken={defaultDarkToken}
    >
      <Button variant="contained" color="info">
        \u81EA\u5B9A\u4E49Tokens
      </Button>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var r=g()(p()().mark(function o(){var t,l=arguments;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(1212).then(e.bind(e,61212));case 2:return u.abrupt("return",(t=u.sent).default.apply(t,l));case 3:case"end":return u.stop()}},o)}));function a(){return r.apply(this,arguments)}return a}()}},"packages-bui-core-src-theme-provider-demo-zh-cn-1":{component:i.memo(i.lazy(g()(p()().mark(function r(){var a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return a=h.sent,o=a.ThemeProvider,t=a.Button,h.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return l=h.sent,n=l.default,u={"--bui-button-height":"34px"},s={"--bui-button-height":"28px"},h.abrupt("return",{default:function(){return n.createElement(o,{isRoot:!0,token:u},n.createElement(t,{variant:"contained",color:"info",style:{marginRight:"20px"}},"\u81EA\u5B9A\u4E49Tokens"),n.createElement(o,{token:s},n.createElement(t,{variant:"contained",color:"info",className:"test"},"\u5D4C\u5957\u7684Tokens")))}});case 12:case"end":return h.stop()}},r)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-theme-provider-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

const token = {
  '--bui-button-height': '34px',
};

const internalToken = {
  '--bui-button-height': '28px',
  // \u4E0D\u63A8\u8350\u5728token\u4E2D\u590D\u5199\u5185\u7F6EToken\uFF0C\u5C3D\u91CF\u4F7F\u7528\u7EC4\u4EF6\u7684\u5168\u5C40\u53D8\u91CF\u6765\u5B9A\u5236\u6837\u5F0F
  // '--bui-color-info-end': '#148a00',
};

export default () => {
  return (
    <ThemeProvider isRoot token={token}>
      <Button variant="contained" color="info" style={{ marginRight: '20px' }}>
        \u81EA\u5B9A\u4E49Tokens
      </Button>
      <ThemeProvider token={internalToken}>
        <Button variant="contained" color="info" className="test">
          \u5D4C\u5957\u7684Tokens
        </Button>
      </ThemeProvider>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var r=g()(p()().mark(function o(){var t,l=arguments;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(1212).then(e.bind(e,61212));case 2:return u.abrupt("return",(t=u.sent).default.apply(t,l));case 3:case"end":return u.stop()}},o)}));function a(){return r.apply(this,arguments)}return a}()}},"packages-bui-core-src-theme-provider-demo-zh-cn-2":{component:i.memo(i.lazy(g()(p()().mark(function r(){var a,o,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return a=u.sent,o=a.Button,u.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return t=u.sent,l=t.default,u.abrupt("return",{default:function(){return l.createElement(o,{variant:"contained",color:"info",style:{"--bui-button-height":"28px"}},"\u81EA\u5B9A\u4E49Tokens")}});case 9:case"end":return u.stop()}},r)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-theme-provider-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from '@bifrostui/react';
import React from 'react';
/**
 * 1.\u5C0F\u7A0B\u5E8F\u5168\u5C40\u6216\u9875\u9762\u7EA7\u4E3B\u9898\uFF0C\u53EF\u5728\u5165\u53E3\u6216\u9875\u9762\u7EA7\u6837\u5F0F\u6587\u4EF6\u4E2D\u81EA\u884C\u4E66\u5199\u9009\u62E9\u5668\u5BF9\u5E94\u7684\u6837\u5F0F\u53D8\u91CF\uFF0C\u9875\u9762\u7EA7\u4F1A\u8986\u76D6\u5168\u5C40\u6837\u5F0F
 * app.less
 * page { --bui-button-height: 32px }
 */

// 2.\u5C0F\u7A0B\u5E8F\u5C40\u90E8\u4E3B\u9898
export default () => {
  return (
    <Button
      variant="contained"
      color="info"
      style={{ '--bui-button-height': '28px' }}
    >
      \u81EA\u5B9A\u4E49Tokens
    </Button>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var r=g()(p()().mark(function o(){var t,l=arguments;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(1212).then(e.bind(e,61212));case 2:return u.abrupt("return",(t=u.sent).default.apply(t,l));case 3:case"end":return u.stop()}},o)}));function a(){return r.apply(this,arguments)}return a}()}},"packages-bui-core-src-theme-provider-demo-zh-cn-3":{component:i.memo(i.lazy(g()(p()().mark(function r(){var a,o,t,l,n,u,s,m,h,f,x,E,b,C,S,P,L,T,B,R,D;return p()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return a=z.sent,o=a.ThemeProvider,t=a.Button,l=a.Dialog,n=a.Stack,u=a.Picker,s=a.Calendar,m=a.Select,h=a.SelectOption,f=a.CitySelector,x=a.EN,E=a.CN,b=a.TW,z.next=17,Promise.resolve().then(e.t.bind(e,75271,19));case 17:return C=z.sent,S=C.default,P=C.useState,z.next=22,Promise.resolve().then(e.bind(e,40129));case 22:return L=z.sent,T=L.default,B=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],R=[{code:"110100",name:"\u5317\u4EAC"},{code:"310100",name:"\u4E0A\u6D77"},{code:"440100",name:"\u5E7F\u5DDE"}],D=[{groupName:"A",cities:[{code:"610900",name:"\u5B89\u5EB7"},{code:"210300",name:"\u978D\u5C71"}]},{groupName:"B",cities:[{code:"652800",name:"\u5DF4\u97F3\u90ED\u695E"},{code:"511900",name:"\u5DF4\u4E2D"}]},{groupName:"C",cities:[{code:"130900",name:"\u6CA7\u5DDE"},{code:"220100",name:"\u957F\u6625"}]},{groupName:"D",cities:[{code:"532900",name:"\u5927\u7406"},{code:"210200",name:"\u5927\u8FDE"}]}],z.abrupt("return",{default:function(){var j=P(!1),V=c()(j,2),N=V[0],X=V[1],H=P(T().toDate()),q=c()(H,2),te=q[0],ae=q[1],ne=P(x),re=c()(ne,2),le=re[0],de=re[1],se=l.useDialog(),oe=c()(se,2),ue=oe[0],ie=oe[1],ce=function(_,ee){console.log("date change:",ee),ae(ee.value)},pe={code:"110100",name:"\u5317\u4EAC"},me={code:"310100",name:"\u4E0A\u6D77"},Ie=function(_){console.log(_)},ve=function(){console.log("onHide")},fe=[{label:"en-US",value:x},{label:"zh-CN",value:E},{label:"zh-TW",value:b}];return S.createElement(o,{locale:le},ie,S.createElement(n,{spacing:"10px"},S.createElement("div",null,"\u8BED\u8A00\u9009\u62E9"),S.createElement(m,{defaultValue:x,onChange:function(_,ee){var he=ee.value;de(he)}},fe.map(function(w,_){return S.createElement(h,{key:_,value:w.value,label:w.label})})),S.createElement(t,{onClick:function(){ue.confirm({message:"\u6D4B\u8BD5"})}},"open Dialog"),S.createElement(t,{onClick:function(){X(!0)}},"open Picker"),S.createElement(u,{open:N,onClose:function(_,ee){X(!1),console.log("onClose",_,ee)},options:[[{value:1,label:"\u5468\u4E00"},{value:2,label:"\u5468\u4E8C"},{value:3,label:"\u5468\u4E09"},{value:4,label:"\u5468\u56DB"},{value:5,label:"\u5468\u4E94"},{value:6,label:"\u5468\u516D"},{value:7,label:"\u5468\u65E5"}]]}),S.createElement(s,{value:te,onChange:ce}),S.createElement(f,{cities:D,onSelect:Ie,selectedCity:pe,currentCity:me,hotCities:R,onClose:ve,style:{height:"500px"}})))}});case 28:case"end":return z.stop()}},r)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-theme-provider-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
    name: '\u5317\u4EAC',
  },
  {
    code: '310100',
    name: '\u4E0A\u6D77',
  },
  {
    code: '440100',
    name: '\u5E7F\u5DDE',
  },
];

const cities = [
  {
    groupName: 'A',
    cities: [
      {
        code: '610900',
        name: '\u5B89\u5EB7',
      },
      {
        code: '210300',
        name: '\u978D\u5C71',
      },
    ],
  },
  {
    groupName: 'B',
    cities: [
      {
        code: '652800',
        name: '\u5DF4\u97F3\u90ED\u695E',
      },
      {
        code: '511900',
        name: '\u5DF4\u4E2D',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
      {
        code: '130900',
        name: '\u6CA7\u5DDE',
      },
      {
        code: '220100',
        name: '\u957F\u6625',
      },
    ],
  },
  {
    groupName: 'D',
    cities: [
      {
        code: '532900',
        name: '\u5927\u7406',
      },
      {
        code: '210200',
        name: '\u5927\u8FDE',
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
    name: '\u5317\u4EAC',
  };
  const currentCity = {
    code: '310100',
    name: '\u4E0A\u6D77',
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
        <div>\u8BED\u8A00\u9009\u62E9</div>
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
              message: '\u6D4B\u8BD5',
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
                label: '\u5468\u4E00',
              },
              {
                value: 2,
                label: '\u5468\u4E8C',
              },
              {
                value: 3,
                label: '\u5468\u4E09',
              },
              {
                value: 4,
                label: '\u5468\u56DB',
              },
              {
                value: 5,
                label: '\u5468\u4E94',
              },
              {
                value: 6,
                label: '\u5468\u516D',
              },
              {
                value: 7,
                label: '\u5468\u65E5',
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
};`},react:{type:"NPM",value:"18.3.1"},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2)),"dayjs/esm/index":v},renderOpts:{compile:function(){var r=g()(p()().mark(function o(){var t,l=arguments;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(1212).then(e.bind(e,61212));case 2:return u.abrupt("return",(t=u.sent).default.apply(t,l));case 3:case"end":return u.stop()}},o)}));function a(){return r.apply(this,arguments)}return a}()}}}},32240:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return v}});var $=e(48305),c=e.n($),k=e(90228),p=e.n(k),y=e(87999),g=e.n(y),i=e(75271),v={"packages-bui-core-src-toast-demo-zh-cn-0":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=s.sent,a=r.Stack,o=r.Button,t=r.Toast,s.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=s.sent,n=l.default,s.abrupt("return",{default:function(){return n.createElement(a,{direction:"row",spacing:"10px"},n.createElement(o,{onClick:function(){t("\u63D0\u793A\u5185\u5BB9")}},"toast"))}});case 11:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast('\u63D0\u793A\u5185\u5BB9');
        }}
      >
        toast
      </Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-toast-demo-zh-cn-1":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Stack,o=r.Button,t=r.Toast,l=r.ThemeProvider,n=r.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=h.sent,s=u.default,h.abrupt("return",{default:function(){var x=t.useToast(),E=c()(x,2),b=E[0],C=E[1],S=n();return s.createElement(l,{locale:S.locale},C,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(o,{onClick:function(){b("\u63D0\u793A\u5185\u5BB9")}},"toast")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast('\u63D0\u793A\u5185\u5BB9');
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-toast-demo-zh-cn-2":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Stack,o=r.Button,t=r.Toast,l=r.ThemeProvider,n=r.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=h.sent,s=u.default,h.abrupt("return",{default:function(){var x=t.useToast(),E=c()(x,2),b=E[0],C=E[1],S=n();return s.createElement(l,{locale:S},C,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(o,{onClick:function(){b.warning("\u6821\u9A8C\u4E0D\u901A\u8FC7\uFF0C\u8BF7\u91CD\u8BD5")}},"warning"),s.createElement(o,{onClick:function(){b.loading("\u6B63\u5728\u52A0\u8F7D")}},"loading"),s.createElement(o,{onClick:function(){b.success("\u64CD\u4F5C\u6210\u529F")}},"success"),s.createElement(o,{onClick:function(){b.fail("\u64CD\u4F5C\u5931\u8D25")}},"fail")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast.warning('\u6821\u9A8C\u4E0D\u901A\u8FC7\uFF0C\u8BF7\u91CD\u8BD5');
          }}
        >
          warning
        </Button>
        <Button
          onClick={() => {
            toast.loading('\u6B63\u5728\u52A0\u8F7D');
          }}
        >
          loading
        </Button>
        <Button
          onClick={() => {
            toast.success('\u64CD\u4F5C\u6210\u529F');
          }}
        >
          success
        </Button>
        <Button
          onClick={() => {
            toast.fail('\u64CD\u4F5C\u5931\u8D25');
          }}
        >
          fail
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-toast-demo-zh-cn-3":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Stack,o=r.Button,t=r.Toast,l=r.ThemeProvider,n=r.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=h.sent,s=u.default,h.abrupt("return",{default:function(){var x=t.useToast(),E=c()(x,2),b=E[0],C=E[1],S=n();return s.createElement(l,{locale:S.locale},C,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(o,{onClick:function(){b(`\u5C0F\u4E8C\u5F88\u5FD9
\u7CFB\u7EDF\u5F88\u7D2F\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF5E`)}},"toast")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();
  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast('\u5C0F\u4E8C\u5F88\u5FD9\\n\u7CFB\u7EDF\u5F88\u7D2F\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF5E');
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-toast-demo-zh-cn-4":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Stack,o=r.Button,t=r.Toast,l=r.ThemeProvider,n=r.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=h.sent,s=u.default,h.abrupt("return",{default:function(){var x=t.useToast(),E=c()(x,2),b=E[0],C=E[1],S=n(),P,L=function(){P=b({message:"\u6211\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED",duration:0})},T=function(){var R;(R=P)===null||R===void 0||R.close()};return s.createElement(l,{locale:S.locale},C,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(o,{onClick:function(){b({message:"\u6211\u4F1A\u5C55\u793A4\u79D2",duration:4e3})}},"\u5C55\u793A4\u79D2"),s.createElement(o,{onClick:L},"\u4E0D\u81EA\u52A8\u5173\u95ED(ToastA)"),s.createElement(o,{onClick:T},"\u624B\u52A8\u5173\u95EDToastA")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  let toastA;
  const showToastA = () => {
    toastA = toast({
      message: '\u6211\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED',
      duration: 0,
    });
  };

  const closeToastA = () => {
    toastA?.close();
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u6211\u4F1A\u5C55\u793A4\u79D2',
              duration: 4000,
            });
          }}
        >
          \u5C55\u793A4\u79D2
        </Button>

        <Button onClick={showToastA}>\u4E0D\u81EA\u52A8\u5173\u95ED(ToastA)</Button>

        <Button onClick={closeToastA}>\u624B\u52A8\u5173\u95EDToastA</Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-toast-demo-zh-cn-5":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Stack,o=r.Button,t=r.Toast,l=r.ThemeProvider,n=r.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=h.sent,s=u.default,h.abrupt("return",{default:function(){var x=t.useToast(),E=c()(x,2),b=E[0],C=E[1],S=n();return s.createElement(l,{locale:S.locale},C,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(o,{onClick:function(){b({message:"\u9876\u90E8\u5C55\u793A",position:"top"})}},"\u9876\u90E8\u5C55\u793A"),s.createElement(o,{onClick:function(){b({message:"\u5C45\u4E2D\u5C55\u793A",position:"center"})}},"\u5C45\u4E2D\u5C55\u793A"),s.createElement(o,{onClick:function(){b({message:"\u5E95\u90E8\u5C55\u793A",position:"bottom"})}},"\u5E95\u90E8\u5C55\u793A")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u9876\u90E8\u5C55\u793A',
              position: 'top',
            });
          }}
        >
          \u9876\u90E8\u5C55\u793A
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '\u5C45\u4E2D\u5C55\u793A',
              position: 'center',
            });
          }}
        >
          \u5C45\u4E2D\u5C55\u793A
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '\u5E95\u90E8\u5C55\u793A',
              position: 'bottom',
            });
          }}
        >
          \u5E95\u90E8\u5C55\u793A
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-toast-demo-zh-cn-6":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Stack,o=r.Button,t=r.Toast,l=r.ThemeProvider,n=r.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=h.sent,s=u.default,h.abrupt("return",{default:function(){var x=t.useToast(),E=c()(x,2),b=E[0],C=E[1],S=n();return s.createElement(l,{locale:S.locale},C,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(o,{onClick:function(){b({message:"\u9876\u90E8\u5C55\u793A",position:"top",allowMultiple:!0})}},"\u5141\u8BB8\u5B58\u5728\u5176\u4ED6Toast"),s.createElement(o,{onClick:function(){b({message:"\u5C45\u4E2D\u5C55\u793A",position:"center",allowMultiple:!0})}},"\u5141\u8BB8\u5B58\u5728\u5176\u4ED6Toast"),s.createElement(o,{onClick:function(){b({message:"\u5E95\u90E8\u5C55\u793A",position:"bottom",allowMultiple:!1})}},"\u4F1A\u6E05\u9664\u5176\u4ED6Toast")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u9876\u90E8\u5C55\u793A',
              position: 'top',
              allowMultiple: true,
            });
          }}
        >
          \u5141\u8BB8\u5B58\u5728\u5176\u4ED6Toast
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '\u5C45\u4E2D\u5C55\u793A',
              position: 'center',
              allowMultiple: true,
            });
          }}
        >
          \u5141\u8BB8\u5B58\u5728\u5176\u4ED6Toast
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '\u5E95\u90E8\u5C55\u793A',
              position: 'bottom',
              allowMultiple: false,
            });
          }}
        >
          \u4F1A\u6E05\u9664\u5176\u4ED6Toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-toast-demo-zh-cn-7":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m,h;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=x.sent,a=r.Stack,o=r.Button,t=r.Toast,l=r.ThemeProvider,n=r.useTheme,x.next=10,e.e(9975).then(e.bind(e,29975));case 10:return u=x.sent,s=u.LocationFilledIcon,x.next=14,Promise.resolve().then(e.t.bind(e,75271,19));case 14:return m=x.sent,h=m.default,x.abrupt("return",{default:function(){var b=t.useToast(),C=c()(b,2),S=C[0],P=C[1],L=n();return h.createElement(l,{locale:L.locale},P,h.createElement(a,{direction:"row",spacing:"10px"},h.createElement(o,{onClick:function(){S({message:"\u6211\u5728\u4E0A\u6D77",icon:h.createElement(s,{size:"large",htmlColor:"#fee01e"})})}},"\u5B9A\u5236\u56FE\u6807")))}});case 17:case"end":return x.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import { LocationFilledIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u6211\u5728\u4E0A\u6D77',
              icon: <LocationFilledIcon size="large" htmlColor="#fee01e" />,
            });
          }}
        >
          \u5B9A\u5236\u56FE\u6807
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-toast-demo-zh-cn-8":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Stack,o=r.Button,t=r.Toast,l=r.ThemeProvider,n=r.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=h.sent,s=u.default,h.abrupt("return",{default:function(){var x=t.useToast(),E=c()(x,2),b=E[0],C=E[1],S=n();return s.createElement(l,{locale:S.locale},C,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(o,{onClick:function(){b({message:"\u63D0\u793A\u5185\u5BB9",disableClick:!0,duration:3e3})}},"\u5C55\u793AToast\u7981\u6B62\u9875\u9762\u5185\u5BB9\u70B9\u51FB")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u63D0\u793A\u5185\u5BB9',
              disableClick: true,
              duration: 3000,
            });
          }}
        >
          \u5C55\u793AToast\u7981\u6B62\u9875\u9762\u5185\u5BB9\u70B9\u51FB
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-toast-demo-zh-cn-9":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Stack,o=r.Button,t=r.Toast,l=r.ThemeProvider,n=r.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=h.sent,s=u.default,h.abrupt("return",{default:function(){var x=t.useToast(),E=c()(x,2),b=E[0],C=E[1],S=n();return s.createElement(l,{locale:S.locale},C,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(o,{onClick:function(){b({message:"\u63D0\u793A\u5185\u5BB9",onClose:function(){b("\u5DF2\u5173\u95ED")}})}},"\u5173\u95ED\u56DE\u8C03")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u63D0\u793A\u5185\u5BB9',
              onClose: () => {
                toast('\u5DF2\u5173\u95ED');
              },
            });
          }}
        >
          \u5173\u95ED\u56DE\u8C03
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-toast-demo-zh-cn-10":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=h.sent,a=r.Stack,o=r.Button,t=r.Toast,l=r.ThemeProvider,n=r.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=h.sent,s=u.default,h.abrupt("return",{default:function(){var x=t.useToast(),E=c()(x,2),b=E[0],C=E[1],S=n();return s.createElement(l,{locale:S},C,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(o,{onClick:function(){b({message:"\u63D0\u793A\u5185\u5BB91",position:"top",allowMultiple:!0,duration:0})}},"\u4E0D\u6D88\u59311"),s.createElement(o,{onClick:function(){b({message:"\u63D0\u793A\u5185\u5BB92",position:"center",allowMultiple:!0,duration:0})}},"\u4E0D\u6D88\u59312"),s.createElement(o,{onClick:function(){b.clear()}},"\u5173\u95ED\u6240\u6709Toast")))}});case 13:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u63D0\u793A\u5185\u5BB91',
              position: 'top',
              allowMultiple: true,
              duration: 0,
            });
          }}
        >
          \u4E0D\u6D88\u59311
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '\u63D0\u793A\u5185\u5BB92',
              position: 'center',
              allowMultiple: true,
              duration: 0,
            });
          }}
        >
          \u4E0D\u6D88\u59312
        </Button>
        <Button
          onClick={() => {
            toast.clear();
          }}
        >
          \u5173\u95ED\u6240\u6709Toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"packages-bui-core-src-toast-demo-zh-cn-11":{component:i.memo(i.lazy(g()(p()().mark(function d(){var r,a,o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,a=r.Stack,o=r.Button,t=r.Toast,l=r.ThemeProvider,n=r.useTheme,f.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return u=f.sent,s=u.default,m=u.useRef,f.abrupt("return",{default:function(){var E=m(),b=t.useToast(),C=c()(b,2),S=C[0],P=C[1],L=n();return s.createElement(l,{locale:L},P,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(o,{onClick:function(){S({ref:E,message:"\u63D0\u793A\u5185\u5BB9",className:"my-toast",style:{"--color":"red","--border-radius":"30px","--font-size":"16px"},onEntered:function(){console.log("ref",E)}})}},"toast")))}});case 14:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-zh-cn-11",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React, { useRef } from 'react';

export default () => {
  const ref = useRef();
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              ref,
              message: '\u63D0\u793A\u5185\u5BB9',
              className: 'my-toast',
              style: {
                '--color': 'red',
                '--border-radius': '30px',
                '--font-size': '16px',
              },
              onEntered: () => {
                console.log('ref', ref);
              },
            });
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2))},renderOpts:{compile:function(){var d=g()(p()().mark(function a(){var o,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},7009:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return r}});var $=e(26068),c=e.n($),k=e(90228),p=e.n(k),y=e(48305),g=e.n(y),i=e(87999),v=e.n(i),d=e(75271),r={"packages-bui-core-src-transition-demo-zh-cn-0":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Transition,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!0),b=g()(E,2),C=b[0],S=b[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(function(L){return!L})}},C?"OPEN":"CLOSE"),s.createElement(l,{in:C,timeout:1e3},function(P){return s.createElement(s.Fragment,null,s.createElement("div",null,"Status:",P),s.createElement("div",{style:{transition:"opacity 1000ms linear",opacity:P.match(/exit/)?0:1}},"FADE"))}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-transition-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Transition, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}},"packages-bui-core-src-transition-demo-zh-cn-1":{component:d.memo(d.lazy(v()(p()().mark(function a(){var o,t,l,n,u,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,t=o.Button,l=o.Transition,n=o.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return u=f.sent,s=u.default,m=u.useState,f.abrupt("return",{default:function(){var E=m(!0),b=g()(E,2),C=b[0],S=b[1],P=m({}),L=g()(P,2),T=L[0],B=L[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){S(function(D){return!D})}},C?"OPEN":"CLOSE"),s.createElement(l,{in:C,timeout:1e3,onEnter:function(){return B(function(D){return c()(c()({},D),{},{enter:performance.now()})})},onEntering:function(){return B(function(D){return c()(c()({},D),{},{entering:performance.now()})})},onEntered:function(){return B(function(D){return c()(c()({},D),{},{entered:performance.now()})})},onExit:function(){return B(function(D){return c()(c()({},D),{},{exit:performance.now()})})},onExiting:function(){return B(function(D){return c()(c()({},D),{},{exiting:performance.now()})})},onExited:function(){return B(function(D){return c()(c()({},D),{},{exited:performance.now()})})}},function(R){return s.createElement(s.Fragment,null,s.createElement("div",null,"Status:",R),s.createElement("div",{style:{transition:"opacity 1000ms linear",opacity:R.match(/exit/)?0:1}},"FADE"))}),s.createElement("style",null,"@keyframes highlight{from{background-color:#FF8888}to{background:color:#FFFFFF}}"),["enter","entering","entered","exit","exiting","exited"].map(function(R){var D;return s.createElement("div",{key:T[R],style:{animation:"highlight 1s"}},R,": ",((D=T[R])===null||D===void 0?void 0:D.toFixed(1))||"- ")}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-transition-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Transition, Stack } from '@bifrostui/react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(d,2))},renderOpts:{compile:function(){var a=v()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function o(){return a.apply(this,arguments)}return o}()}}}},30510:function(A,O,e){var I;e.r(O),e.d(O,{demos:function(){return Ha}});var $=e(90228),c=e.n($),k=e(87999),p=e.n(k),y=e(75271),g=e(89081),i=e(11125),v=e(12890),d=e(54456),r=e(93595),a=e(5766),o=e(52917),t=e(95430),l=e(80176),n=e(58914),u=e(49136),s=e(56604),m=e(50554),h=e(47273),f=e(86104),x=e(85e3),E=e(79279),b=e(93939),C=e(62121),S=e(32672),P=e(64841),L=e(80361),T=e(1560),B=e(99721),R=e(15455),D=e(31293),M=e(57482),z=e(94949),K=e(53833),j=e(56204),V=e(88460),N=e(493),X=e(56799),H=e(8024),q=e(76373),te=e(58400),ae=e(20543),ne=e(99068),re=e(34543),le=e(75803),de=e(99849),se=e(80034),oe=e(84336),ue=e(3106),ie=e(98557),ce=e(40178),pe=e(85202),me=e(64366),Ie=e(7887),ve=e(17131),fe=e(62306),w=e(61324),_=e(48923),ee=e(42583),he=e(77133),ye=e(13432),Ee=e(88646),be=e(59376),Se=e(31662),Ce=e(71582),Oe=e(66143),Pe=e(26523),Le=e(57909),Te=e(45760),Be=e(28727),Re=e(68477),Me=e(75071),De=e(78264),Ae=e(43036),$e=e(97589),ke=e(30784),ze=e(37107),Fe=e(76554),Ke=e(20572),We=e(53985),Ue=e(36880),Ne=e(95052),je=e(49829),Xe=e(42822),Ve=e(11765),Ze=e(59947),He=e(77665),Ge=e(81672),Qe=e(36501),Ye=e(98851),Je=e(12413),we=e(16546),qe=e(59674),_e=e(20235),en=e(71114),nn=e(83585),tn=e(52626),an=e(16535),rn=e(27550),on=e(29542),ln=e(42442),dn=e(92417),sn=e(53373),un=e(24357),cn=e(11278),pn=e(21455),mn=e(95001),In=e(89443),vn=e(96786),fn=e(96245),hn=e(46609),xn=e(90123),gn=e(21436),yn=e(17952),En=e(70375),bn=e(56714),Sn=e(69883),Cn=e(27889),On=e(97572),Pn=e(50088),Ln=e(25732),Tn=e(46994),Bn=e(83282),Rn=e(23304),Mn=e(58372),Dn=e(64210),An=e(67677),$n=e(84521),kn=e(65001),zn=e(74044),Fn=e(7032),Kn=e(61168),Wn=e(98989),Un=e(60492),Nn=e(13923),jn=e(1026),Xn=e(15877),Vn=e(37194),Zn=e(45947),Hn=e(1025),Gn=e(89395),Qn=e(12588),Yn=e(95060),Jn=e(84649),wn=e(7978),qn=e(79963),_n=e(71474),et=e(72066),nt=e(18191),tt=e(22751),at=e(19307),rt=e(4671),ot=e(60272),lt=e(17364),dt=e(95555),st=e(66261),ut=e(48477),it=e(98618),ct=e(17819),pt=e(60654),mt=e(96306),It=e(33628),vt=e(78412),ft=e(97196),ht=e(70503),xt=e(7024),gt=e(21282),yt=e(79433),Et=e(47860),bt=e(36823),St=e(72990),Ct=e(76561),Ot=e(4278),Pt=e(58572),Lt=e(11436),Tt=e(59351),Bt=e(3252),Rt=e(2436),Mt=e(11853),Dt=e(89428),At=e(21065),$t=e(48374),kt=e(76350),zt=e(29538),Ft=e(40751),Kt=e(76120),Wt=e(95961),Ut=e(48891),Nt=e(96267),jt=e(41062),Xt=e(64269),Vt=e(1981),Zt=e(53587),Ht=e(80229),Gt=e(5147),Qt=e(93096),Yt=e(7797),Jt=e(14969),wt=e(93082),qt=e(9509),_t=e(94452),ea=e(29043),na=e(56996),ta=e(20619),aa=e(47709),ra=e(28604),oa=e(33531),la=e(37343),da=e(73446),sa=e(52638),ua=e(42823),ia=e(37375),ca=e(88837),pa=e(5628),ma=e(50634),Ia=e(71898),va=e(26662),fa=e(24183),ha=e(64516),xa=e(1451),ga=e(65614),ya=e(2341),Ea=e(95655),ba=e(55449),Sa=e(43038),Ca=e(94579),Oa=e(7329),Pa=e(91873),La=e(98364),Ta=e(99655),Ba=e(38232),Ra=e(97672),Ma=e(84902),Da=e(45656),Aa=e(28012),$a=e(38303),ka=e(32906),za=e(17633),Fa=e(21873),Ka=e(98e3),Wa=e(92908),Ua=e(39554),Na=e(30481),ja=e(94604),Xa=e(32468),Va=e(45924),Za=e(72090),Ha={"packages-bui-icons-src-demo-zh-cn-0":{component:y.memo(y.lazy(p()(c()().mark(function Y(){var G,U,Z,Q,J,F;return c()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return G=W.sent,U=G.default,W.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return Z=W.sent,Q=Z.Stack,W.next=10,e.e(9975).then(e.bind(e,29975));case 10:return J=W.sent,F=J.SettingsOutlinedIcon,W.abrupt("return",{default:function(){return U.createElement(Q,{direction:"row",spacing:"10px"},U.createElement(F,{size:"small"}),U.createElement(F,{size:"medium"}),U.createElement(F,{size:"large"}))}});case 13:case"end":return W.stop()}},Y)})))),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var Y=p()(c()().mark(function U(){var Z,Q=arguments;return c()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,e.e(1212).then(e.bind(e,61212));case 2:return F.abrupt("return",(Z=F.sent).default.apply(Z,Q));case 3:case"end":return F.stop()}},U)}));function G(){return Y.apply(this,arguments)}return G}()}},"packages-bui-icons-src-demo-zh-cn-1":{component:y.memo(y.lazy(p()(c()().mark(function Y(){var G,U,Z,Q,J,F;return c()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return G=W.sent,U=G.default,W.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return Z=W.sent,Q=Z.Stack,W.next=10,e.e(9975).then(e.bind(e,29975));case 10:return J=W.sent,F=J.SettingsOutlinedIcon,W.abrupt("return",{default:function(){return U.createElement(Q,{direction:"row",spacing:"10px"},U.createElement(F,{size:"large"}),U.createElement(F,{color:"primary",size:"large"}),U.createElement(F,{color:"default",size:"large"}),U.createElement(F,{color:"info",size:"large"}),U.createElement(F,{color:"warning",size:"large"}),U.createElement(F,{color:"danger",size:"large"}),U.createElement(F,{color:"success",size:"large"}),U.createElement(F,{color:"disabled",size:"large"}))}});case 13:case"end":return W.stop()}},Y)})))),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-zh-cn-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var Y=p()(c()().mark(function U(){var Z,Q=arguments;return c()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,e.e(1212).then(e.bind(e,61212));case 2:return F.abrupt("return",(Z=F.sent).default.apply(Z,Q));case 3:case"end":return F.stop()}},U)}));function G(){return Y.apply(this,arguments)}return G}()}},"packages-bui-icons-src-demo-zh-cn-2":{component:y.memo(y.lazy(p()(c()().mark(function Y(){var G,U,Z,Q,J,F;return c()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return G=W.sent,U=G.default,W.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return Z=W.sent,Q=Z.Stack,W.next=10,e.e(9975).then(e.bind(e,29975));case 10:return J=W.sent,F=J.SettingsOutlinedIcon,W.abrupt("return",{default:function(){return U.createElement(Q,{direction:"row"},U.createElement(F,{style:{fontSize:"48px",color:"#ad63f6"}}),U.createElement(F,{style:{fontSize:"48px"},htmlColor:"#ff866e"}))}});case 13:case"end":return W.stop()}},Y)})))),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-zh-cn-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row">
      <SettingsOutlinedIcon style={{ fontSize: '48px', color: '#ad63f6' }} />
      <SettingsOutlinedIcon style={{ fontSize: '48px' }} htmlColor="#ff866e" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2))},renderOpts:{compile:function(){var Y=p()(c()().mark(function U(){var Z,Q=arguments;return c()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,e.e(1212).then(e.bind(e,61212));case 2:return F.abrupt("return",(Z=F.sent).default.apply(Z,Q));case 3:case"end":return F.stop()}},U)}));function G(){return Y.apply(this,arguments)}return G}()}},"packages-bui-icons-src-demo-demo":{component:y.memo(y.lazy(function(){return Promise.all([e.e(3605),e.e(7040),e.e(2433)]).then(e.bind(e,69982))})),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(62845).Z},react:{type:"NPM",value:"18.3.1"},"../components.ts":{type:"FILE",value:e(90282).Z},"./index.less":{type:"FILE",value:e(65227).Z},"./ZoomInOutlined.tsx":{type:"FILE",value:e(64492).Z},"./AccessTimeCircleFilled.tsx":{type:"FILE",value:e(59725).Z},"./HelpCircleOutlined.tsx":{type:"FILE",value:e(19421).Z},"./AccessTimeCircleFilledBold.tsx":{type:"FILE",value:e(19306).Z},"./AccessTimeCircleOutlined.tsx":{type:"FILE",value:e(92821).Z},"./HistoryOutlined.tsx":{type:"FILE",value:e(7998).Z},"./Add.tsx":{type:"FILE",value:e(70873).Z},"./Home.tsx":{type:"FILE",value:e(49949).Z},"./AddCircleFilled.tsx":{type:"FILE",value:e(48326).Z},"./HomeFilled.tsx":{type:"FILE",value:e(84756).Z},"./AddCircleFilledBold.tsx":{type:"FILE",value:e(82755).Z},"./HomeOutlined.tsx":{type:"FILE",value:e(89965).Z},"./AddCircleOutlined.tsx":{type:"FILE",value:e(71498).Z},"./HourglassOutlined.tsx":{type:"FILE",value:e(67127).Z},"./AddCouponOutlined.tsx":{type:"FILE",value:e(1452).Z},"./InboxFilled.tsx":{type:"FILE",value:e(55201).Z},"./AddLarge.tsx":{type:"FILE",value:e(13020).Z},"./InboxFilledBold.tsx":{type:"FILE",value:e(72645).Z},"./AlarmOutlined.tsx":{type:"FILE",value:e(33619).Z},"./LightVipOutlined.tsx":{type:"FILE",value:e(68080).Z},"./AlertCircleFilled.tsx":{type:"FILE",value:e(26982).Z},"./LinkOutlined.tsx":{type:"FILE",value:e(46235).Z},"./AlertCircleFilledBold.tsx":{type:"FILE",value:e(36945).Z},"./ListOutlined.tsx":{type:"FILE",value:e(19244).Z},"./AlertCircleOutlined.tsx":{type:"FILE",value:e(19093).Z},"./LoadingThreeQuartersOutlined.tsx":{type:"FILE",value:e(76852).Z},"./AliFishOutlined.tsx":{type:"FILE",value:e(90407).Z},"./LocationFilled.tsx":{type:"FILE",value:e(38692).Z},"./AliSweetOutlined.tsx":{type:"FILE",value:e(59186).Z},"./LocationOutlined.tsx":{type:"FILE",value:e(9090).Z},"./AliWangWangFilled.tsx":{type:"FILE",value:e(24420).Z},"./LuckyMoneyOutlined.tsx":{type:"FILE",value:e(69669).Z},"./AliWangWangOutlined.tsx":{type:"FILE",value:e(85778).Z},"./MaiSuiLeft.tsx":{type:"FILE",value:e(85100).Z},"./AlignCenterFilled.tsx":{type:"FILE",value:e(81560).Z},"./MaiSuiRight.tsx":{type:"FILE",value:e(14158).Z},"./AlignLeftFilled.tsx":{type:"FILE",value:e(34278).Z},"./MailOutlined.tsx":{type:"FILE",value:e(13504).Z},"./AlignRightFilled.tsx":{type:"FILE",value:e(81781).Z},"./MaleOutlined.tsx":{type:"FILE",value:e(71297).Z},"./ArrowBackward.tsx":{type:"FILE",value:e(96210).Z},"./ArrowBackwardLarge.tsx":{type:"FILE",value:e(28987).Z},"./MapFilled.tsx":{type:"FILE",value:e(66483).Z},"./ArrowDownward.tsx":{type:"FILE",value:e(52006).Z},"./MapOutlined.tsx":{type:"FILE",value:e(11487).Z},"./ArrowDownwardLarge.tsx":{type:"FILE",value:e(92319).Z},"./MessageOutlined.tsx":{type:"FILE",value:e(77922).Z},"./ArrowForward.tsx":{type:"FILE",value:e(84491).Z},"./MicOutlined.tsx":{type:"FILE",value:e(46234).Z},"./ArrowForwardLarge.tsx":{type:"FILE",value:e(57).Z},"./MiniContractOutlined.tsx":{type:"FILE",value:e(77634).Z},"./Minus.tsx":{type:"FILE",value:e(13048).Z},"./ArrowUpCircleOutlined.tsx":{type:"FILE",value:e(15581).Z},"./MobileFilled.tsx":{type:"FILE",value:e(24831).Z},"./ArrowUpward.tsx":{type:"FILE",value:e(74668).Z},"./MobileOutlined.tsx":{type:"FILE",value:e(4413).Z},"./ArrowUpwardLarge.tsx":{type:"FILE",value:e(7107).Z},"./MomentsOutlined.tsx":{type:"FILE",value:e(18886).Z},"./AssessmentOutlined.tsx":{type:"FILE",value:e(2906).Z},"./MoonOutlined.tsx":{type:"FILE",value:e(20455).Z},"./AssignmentOutlined.tsx":{type:"FILE",value:e(90655).Z},"./More.tsx":{type:"FILE",value:e(51031).Z},"./BabyOutlined.tsx":{type:"FILE",value:e(3121).Z},"./MoreOutlined.tsx":{type:"FILE",value:e(21789).Z},"./BankCardFilled.tsx":{type:"FILE",value:e(257).Z},"./MoreVerticalOutlined.tsx":{type:"FILE",value:e(10301).Z},"./BankCardOutlined.tsx":{type:"FILE",value:e(86759).Z},"./MovieAppointmentOutlined.tsx":{type:"FILE",value:e(53095).Z},"./BlockCircleFilled.tsx":{type:"FILE",value:e(83049).Z},"./MovieFilled.tsx":{type:"FILE",value:e(9518).Z},"./BlockCircleOutlined.tsx":{type:"FILE",value:e(41139).Z},"./MovieOutlined.tsx":{type:"FILE",value:e(81386).Z},"./BlockCircleOutlinedThin.tsx":{type:"FILE",value:e(93997).Z},"./NearMe.tsx":{type:"FILE",value:e(30206).Z},"./BogoOutlined.tsx":{type:"FILE",value:e(26386).Z},"./NextFilled.tsx":{type:"FILE",value:e(44546).Z},"./BoltFilled.tsx":{type:"FILE",value:e(96718).Z},"./NoteOutlined.tsx":{type:"FILE",value:e(25430).Z},"./BoltOutlined.tsx":{type:"FILE",value:e(28942).Z},"./NoticeOutlined.tsx":{type:"FILE",value:e(46507).Z},"./BuildingOutlined.tsx":{type:"FILE",value:e(21590).Z},"./OrderOutlined.tsx":{type:"FILE",value:e(13422).Z},"./CalendarInvisibleOutlined.tsx":{type:"FILE",value:e(69839).Z},"./OrdersOutlined.tsx":{type:"FILE",value:e(13614).Z},"./CalendarOutlined.tsx":{type:"FILE",value:e(17330).Z},"./PageEditOutlined.tsx":{type:"FILE",value:e(72272).Z},"./CalendarVisibleOutlined.tsx":{type:"FILE",value:e(24676).Z},"./PaperOutlined.tsx":{type:"FILE",value:e(40781).Z},"./CameraFilled.tsx":{type:"FILE",value:e(55512).Z},"./PasswordOutlined.tsx":{type:"FILE",value:e(89984).Z},"./CameraOutlined.tsx":{type:"FILE",value:e(94121).Z},"./PhoneFilled.tsx":{type:"FILE",value:e(51793).Z},"./CardPackageOutlined.tsx":{type:"FILE",value:e(13191).Z},"./PhoneOutlined.tsx":{type:"FILE",value:e(89571).Z},"./CaretDown.tsx":{type:"FILE",value:e(69292).Z},"./PictureOutlined.tsx":{type:"FILE",value:e(78479).Z},"./CaretLeft.tsx":{type:"FILE",value:e(56678).Z},"./PlayCircleOutlined.tsx":{type:"FILE",value:e(38879).Z},"./CaretRight.tsx":{type:"FILE",value:e(43363).Z},"./PlayCircleOutlinedBold.tsx":{type:"FILE",value:e(39082).Z},"./CaretUp.tsx":{type:"FILE",value:e(10283).Z},"./PreferentialEventFilled.tsx":{type:"FILE",value:e(83970).Z},"./PublicWelfareOutlined.tsx":{type:"FILE",value:e(50505).Z},"./ChatFilled.tsx":{type:"FILE",value:e(8402).Z},"./QAFilled.tsx":{type:"FILE",value:e(76436).Z},"./QRCodeOutlined.tsx":{type:"FILE",value:e(77140).Z},"./QuoteEnd.tsx":{type:"FILE",value:e(35276).Z},"./QuoteStart.tsx":{type:"FILE",value:e(90389).Z},"./RMBCircleOutlined.tsx":{type:"FILE",value:e(52177).Z},"./RMBRefundOutlined.tsx":{type:"FILE",value:e(96858).Z},"./RadioCheckedFilled.tsx":{type:"FILE",value:e(13821).Z},"./RankingOutlined.tsx":{type:"FILE",value:e(65488).Z},"./RefreshOutlined.tsx":{type:"FILE",value:e(58245).Z},"./ReportOutlined.tsx":{type:"FILE",value:e(52341).Z},"./SaveOutlined.tsx":{type:"FILE",value:e(53020).Z},"./ScanOutlined.tsx":{type:"FILE",value:e(86211).Z},"./SearchGapOutlined.tsx":{type:"FILE",value:e(52295).Z},"./SearchOutlined.tsx":{type:"FILE",value:e(8173).Z},"./SettingsOutlined.tsx":{type:"FILE",value:e(67176).Z},"./SevenDayCalendar.tsx":{type:"FILE",value:e(63769).Z},"./ChatOutlined.tsx":{type:"FILE",value:e(1786).Z},"./CheerOutlined.tsx":{type:"FILE",value:e(75820).Z},"./Share.tsx":{type:"FILE",value:e(87612).Z},"./ShoppingCartOutlined.tsx":{type:"FILE",value:e(17321).Z},"./CinemaCardOutlined.tsx":{type:"FILE",value:e(24991).Z},"./ShowFilled.tsx":{type:"FILE",value:e(22409).Z},"./CinemaFilled.tsx":{type:"FILE",value:e(1331).Z},"./ShowOutlined.tsx":{type:"FILE",value:e(24924).Z},"./CinemaOutlined.tsx":{type:"FILE",value:e(61290).Z},"./SmileFilled.tsx":{type:"FILE",value:e(1509).Z},"./CircleOutlined.tsx":{type:"FILE",value:e(93998).Z},"./SmileOutlined.tsx":{type:"FILE",value:e(4520).Z},"./ClockOutlined.tsx":{type:"FILE",value:e(17875).Z},"./Sort.tsx":{type:"FILE",value:e(74771).Z},"./Close.tsx":{type:"FILE",value:e(30254).Z},"./CloseLarge.tsx":{type:"FILE",value:e(62175).Z},"./StarCircleOutlined.tsx":{type:"FILE",value:e(43899).Z},"./CloudBBOutlined.tsx":{type:"FILE",value:e(48901).Z},"./StarFilled.tsx":{type:"FILE",value:e(70592).Z},"./CloudDownloadOutlined.tsx":{type:"FILE",value:e(11868).Z},"./StarFilledSharp.tsx":{type:"FILE",value:e(91293).Z},"./StarOutlined.tsx":{type:"FILE",value:e(5757).Z},"./CloudUploadOutlined.tsx":{type:"FILE",value:e(15994).Z},"./StarRoundedFilled.tsx":{type:"FILE",value:e(69831).Z},"./CodeOutlined.tsx":{type:"FILE",value:e(59337).Z},"./StoreFilled.tsx":{type:"FILE",value:e(52929).Z},"./CopyOutlined.tsx":{type:"FILE",value:e(85490).Z},"./SuccessCircleFilled.tsx":{type:"FILE",value:e(59051).Z},"./CouponFilled.tsx":{type:"FILE",value:e(95503).Z},"./SuccessCircleFilledBold.tsx":{type:"FILE",value:e(56223).Z},"./SuccessCircleOutlined.tsx":{type:"FILE",value:e(31547).Z},"./SuccessFilled.tsx":{type:"FILE",value:e(26740).Z},"./SuccessFilledBold.tsx":{type:"FILE",value:e(9567).Z},"./SunOutlined.tsx":{type:"FILE",value:e(41074).Z},"./TaoPiaoPiaoLogo.tsx":{type:"FILE",value:e(38595).Z},"./TaoTicketsLogo.tsx":{type:"FILE",value:e(87827).Z},"./ThumbUpFilled.tsx":{type:"FILE",value:e(49760).Z},"./ThumbUpOutlined.tsx":{type:"FILE",value:e(63176).Z},"./TicketFilled.tsx":{type:"FILE",value:e(74999).Z},"./FingerprintOutlined.tsx":{type:"FILE",value:e(98228).Z},"./TicketMachineOutlined.tsx":{type:"FILE",value:e(90254).Z},"./DateOutlined.tsx":{type:"FILE",value:e(60237).Z},"./TicketOutlined.tsx":{type:"FILE",value:e(72190).Z},"./DeleteOutlined.tsx":{type:"FILE",value:e(79402).Z},"./TipsOutlined.tsx":{type:"FILE",value:e(57481).Z},"./DiscussOutlined.tsx":{type:"FILE",value:e(43879).Z},"./ToTopOutlined.tsx":{type:"FILE",value:e(89971).Z},"./DoubleArrowDownTwoTone.tsx":{type:"FILE",value:e(96015).Z},"./TopicFilled.tsx":{type:"FILE",value:e(68866).Z},"./DoubleArrowLeftTwoTone.tsx":{type:"FILE",value:e(33678).Z},"./TopicOutlined.tsx":{type:"FILE",value:e(95930).Z},"./DoubleArrowRightTwoTone.tsx":{type:"FILE",value:e(29327).Z},"./TrendingCircleFilled.tsx":{type:"FILE",value:e(95031).Z},"./DoubleArrowUpTwoTone.tsx":{type:"FILE",value:e(38100).Z},"./TrendingCircleOutlined.tsx":{type:"FILE",value:e(54165).Z},"./DoubleCircleOutlined.tsx":{type:"FILE",value:e(98455).Z},"./TripleVerticalLine.tsx":{type:"FILE",value:e(17036).Z},"./Down.tsx":{type:"FILE",value:e(91354).Z},"./Up.tsx":{type:"FILE",value:e(19803).Z},"./DrinkFilled.tsx":{type:"FILE",value:e(26132).Z},"./DrinkOutlined.tsx":{type:"FILE",value:e(31508).Z},"./UserFollowedOutlined.tsx":{type:"FILE",value:e(81117).Z},"./EditFilled.tsx":{type:"FILE",value:e(61760).Z},"./VerifiedFilled.tsx":{type:"FILE",value:e(29077).Z},"./EditOutlined.tsx":{type:"FILE",value:e(86382).Z},"./VideoOutlined.tsx":{type:"FILE",value:e(17343).Z},"./EggOutlined.tsx":{type:"FILE",value:e(50968).Z},"./VipCardFilled.tsx":{type:"FILE",value:e(82752).Z},"./ErrorCircleFilled.tsx":{type:"FILE",value:e(87629).Z},"./CouponOutlined.tsx":{type:"FILE",value:e(31961).Z},"./ErrorCircleFilledBold.tsx":{type:"FILE",value:e(24620).Z},"./FireFilled.tsx":{type:"FILE",value:e(42578).Z},"./ErrorCircleOutlined.tsx":{type:"FILE",value:e(79833).Z},"./FlashlightOnOutlined.tsx":{type:"FILE",value:e(93114).Z},"./ExperimentOutlined.tsx":{type:"FILE",value:e(99958).Z},"./FlashlightOutlined.tsx":{type:"FILE",value:e(33110).Z},"./ExploreCircleFilled.tsx":{type:"FILE",value:e(58793).Z},"./FlipOutlined.tsx":{type:"FILE",value:e(47354).Z},"./ExploreCircleOutlined.tsx":{type:"FILE",value:e(95196).Z},"./EyeFilled.tsx":{type:"FILE",value:e(23491).Z},"./VolumeUpOutlined.tsx":{type:"FILE",value:e(72519).Z},"./FollowOutlined.tsx":{type:"FILE",value:e(3929).Z},"./FullScreenOutlined.tsx":{type:"FILE",value:e(22348).Z},"./EyeOutlined.tsx":{type:"FILE",value:e(99870).Z},"./VipOutlined.tsx":{type:"FILE",value:e(47436).Z},"./GetTicketsFilled.tsx":{type:"FILE",value:e(234).Z},"./FemaleOutlined.tsx":{type:"FILE",value:e(97007).Z},"./VolumeDownFilled.tsx":{type:"FILE",value:e(35564).Z},"./GetTicketsOutlined.tsx":{type:"FILE",value:e(52335).Z},"./FilterOutlined.tsx":{type:"FILE",value:e(6221).Z},"./GiftCardOutlined.tsx":{type:"FILE",value:e(2868).Z},"./VolumeMuteFilled.tsx":{type:"FILE",value:e(17507).Z},"./VolumeMuteOutlined.tsx":{type:"FILE",value:e(88448).Z},"./GiftOutlined.tsx":{type:"FILE",value:e(38117).Z},"./WifiOutlined.tsx":{type:"FILE",value:e(62502).Z},"./GlassesOutlined.tsx":{type:"FILE",value:e(52463).Z},"./VolumeUpFilled.tsx":{type:"FILE",value:e(6185).Z},"./GppGoodFilled.tsx":{type:"FILE",value:e(45106).Z},"./WeChatOutlined.tsx":{type:"FILE",value:e(22463).Z},"./WeiBoOutlined.tsx":{type:"FILE",value:e(23913).Z},"./GppGoodOutlined.tsx":{type:"FILE",value:e(50343).Z},"./XiaMiCircleOutlined.tsx":{type:"FILE",value:e(51347).Z},"./GridViewOutlined.tsx":{type:"FILE",value:e(54260).Z},"./HeartAddOutlinedBold.tsx":{type:"FILE",value:e(57643).Z},"./YouKuVipCircleOutlined.tsx":{type:"FILE",value:e(52961).Z},"./HeartBroken.tsx":{type:"FILE",value:e(12137).Z},"./HeartMarkedOutlined.tsx":{type:"FILE",value:e(21477).Z},"./GripperBarHorizontal.tsx":{type:"FILE",value:e(34926).Z},"./HeartOutlined.tsx":{type:"FILE",value:e(47983).Z},"./GripperBarVertical.tsx":{type:"FILE",value:e(93237).Z},"./HeartFilled.tsx":{type:"FILE",value:e(12599).Z},"./HelpCircleFilled.tsx":{type:"FILE",value:e(42895).Z},"./HashOutlined.tsx":{type:"FILE",value:e(18884).Z},"./VipFilled.tsx":{type:"FILE",value:e(3677).Z},"./HeartAddOutlined.tsx":{type:"FILE",value:e(23374).Z},"../utils/createSvgIcon.tsx":{type:"FILE",value:e(66381).Z},"../components/SvgIcon.tsx":{type:"FILE",value:e(2005).Z},"./SvgIcon.tsx":{type:"FILE",value:e(73738).Z},clsx:{type:"NPM",value:"1.2.1"},"./SvgIcon.less":{type:"FILE",value:e(7539).Z}},entry:"index.tsx"},context:{react:I||(I=e.t(y,2)),"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/index.ts":g,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/demo/index.less":i,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ZoomInOutlined.tsx":v,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AccessTimeCircleFilled.tsx":d,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HelpCircleOutlined.tsx":r,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AccessTimeCircleFilledBold.tsx":a,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AccessTimeCircleOutlined.tsx":o,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HistoryOutlined.tsx":t,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Add.tsx":l,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Home.tsx":n,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AddCircleFilled.tsx":u,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HomeFilled.tsx":s,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AddCircleFilledBold.tsx":m,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HomeOutlined.tsx":h,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AddCircleOutlined.tsx":f,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HourglassOutlined.tsx":x,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AddCouponOutlined.tsx":E,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/InboxFilled.tsx":b,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AddLarge.tsx":C,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/InboxFilledBold.tsx":S,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlarmOutlined.tsx":P,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LightVipOutlined.tsx":L,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlertCircleFilled.tsx":T,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LinkOutlined.tsx":B,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlertCircleFilledBold.tsx":R,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ListOutlined.tsx":D,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlertCircleOutlined.tsx":M,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LoadingThreeQuartersOutlined.tsx":z,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AliFishOutlined.tsx":K,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LocationFilled.tsx":j,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AliSweetOutlined.tsx":V,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LocationOutlined.tsx":N,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AliWangWangFilled.tsx":X,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LuckyMoneyOutlined.tsx":H,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AliWangWangOutlined.tsx":q,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MaiSuiLeft.tsx":te,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlignCenterFilled.tsx":ae,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MaiSuiRight.tsx":ne,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlignLeftFilled.tsx":re,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MailOutlined.tsx":le,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlignRightFilled.tsx":de,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MaleOutlined.tsx":se,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowBackward.tsx":oe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowBackwardLarge.tsx":ue,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MapFilled.tsx":ie,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowDownward.tsx":ce,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MapOutlined.tsx":pe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowDownwardLarge.tsx":me,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MessageOutlined.tsx":Ie,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowForward.tsx":ve,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MicOutlined.tsx":fe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowForwardLarge.tsx":w,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MiniContractOutlined.tsx":_,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Minus.tsx":ee,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowUpCircleOutlined.tsx":he,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MobileFilled.tsx":ye,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowUpward.tsx":Ee,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MobileOutlined.tsx":be,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowUpwardLarge.tsx":Se,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MomentsOutlined.tsx":Ce,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AssessmentOutlined.tsx":Oe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MoonOutlined.tsx":Pe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AssignmentOutlined.tsx":Le,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/More.tsx":Te,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BabyOutlined.tsx":Be,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MoreOutlined.tsx":Re,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BankCardFilled.tsx":Me,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MoreVerticalOutlined.tsx":De,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BankCardOutlined.tsx":Ae,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MovieAppointmentOutlined.tsx":$e,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BlockCircleFilled.tsx":ke,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MovieFilled.tsx":ze,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BlockCircleOutlined.tsx":Fe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MovieOutlined.tsx":Ke,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BlockCircleOutlinedThin.tsx":We,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/NearMe.tsx":Ue,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BogoOutlined.tsx":Ne,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/NextFilled.tsx":je,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BoltFilled.tsx":Xe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/NoteOutlined.tsx":Ve,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BoltOutlined.tsx":Ze,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/NoticeOutlined.tsx":He,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BuildingOutlined.tsx":Ge,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/OrderOutlined.tsx":Qe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CalendarInvisibleOutlined.tsx":Ye,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/OrdersOutlined.tsx":Je,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CalendarOutlined.tsx":we,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PageEditOutlined.tsx":qe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CalendarVisibleOutlined.tsx":_e,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PaperOutlined.tsx":en,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CameraFilled.tsx":nn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PasswordOutlined.tsx":tn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CameraOutlined.tsx":an,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PhoneFilled.tsx":rn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CardPackageOutlined.tsx":on,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PhoneOutlined.tsx":ln,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CaretDown.tsx":dn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PictureOutlined.tsx":sn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CaretLeft.tsx":un,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PlayCircleOutlined.tsx":cn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CaretRight.tsx":pn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PlayCircleOutlinedBold.tsx":mn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CaretUp.tsx":In,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PreferentialEventFilled.tsx":vn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PublicWelfareOutlined.tsx":fn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ChatFilled.tsx":hn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/QAFilled.tsx":xn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/QRCodeOutlined.tsx":gn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/QuoteEnd.tsx":yn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/QuoteStart.tsx":En,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/RMBCircleOutlined.tsx":bn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/RMBRefundOutlined.tsx":Sn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/RadioCheckedFilled.tsx":Cn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/RankingOutlined.tsx":On,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/RefreshOutlined.tsx":Pn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ReportOutlined.tsx":Ln,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SaveOutlined.tsx":Tn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ScanOutlined.tsx":Bn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SearchGapOutlined.tsx":Rn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SearchOutlined.tsx":Mn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SettingsOutlined.tsx":Dn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SevenDayCalendar.tsx":An,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ChatOutlined.tsx":$n,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CheerOutlined.tsx":kn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Share.tsx":zn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ShoppingCartOutlined.tsx":Fn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CinemaCardOutlined.tsx":Kn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ShowFilled.tsx":Wn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CinemaFilled.tsx":Un,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ShowOutlined.tsx":Nn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CinemaOutlined.tsx":jn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SmileFilled.tsx":Xn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CircleOutlined.tsx":Vn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SmileOutlined.tsx":Zn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ClockOutlined.tsx":Hn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Sort.tsx":Gn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Close.tsx":Qn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CloseLarge.tsx":Yn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StarCircleOutlined.tsx":Jn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CloudBBOutlined.tsx":wn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StarFilled.tsx":qn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CloudDownloadOutlined.tsx":_n,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StarFilledSharp.tsx":et,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StarOutlined.tsx":nt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CloudUploadOutlined.tsx":tt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StarRoundedFilled.tsx":at,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CodeOutlined.tsx":rt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StoreFilled.tsx":ot,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CopyOutlined.tsx":lt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SuccessCircleFilled.tsx":dt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CouponFilled.tsx":st,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SuccessCircleFilledBold.tsx":ut,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SuccessCircleOutlined.tsx":it,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SuccessFilled.tsx":ct,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SuccessFilledBold.tsx":pt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SunOutlined.tsx":mt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TaoPiaoPiaoLogo.tsx":It,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TaoTicketsLogo.tsx":vt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ThumbUpFilled.tsx":ft,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ThumbUpOutlined.tsx":ht,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TicketFilled.tsx":xt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FingerprintOutlined.tsx":gt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TicketMachineOutlined.tsx":yt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DateOutlined.tsx":Et,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TicketOutlined.tsx":bt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DeleteOutlined.tsx":St,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TipsOutlined.tsx":Ct,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DiscussOutlined.tsx":Ot,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ToTopOutlined.tsx":Pt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DoubleArrowDownTwoTone.tsx":Lt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TopicFilled.tsx":Tt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DoubleArrowLeftTwoTone.tsx":Bt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TopicOutlined.tsx":Rt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DoubleArrowRightTwoTone.tsx":Mt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TrendingCircleFilled.tsx":Dt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DoubleArrowUpTwoTone.tsx":At,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TrendingCircleOutlined.tsx":$t,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DoubleCircleOutlined.tsx":kt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TripleVerticalLine.tsx":zt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Down.tsx":Ft,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Up.tsx":Kt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DrinkFilled.tsx":Wt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DrinkOutlined.tsx":Ut,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/UserFollowedOutlined.tsx":Nt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/EditFilled.tsx":jt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VerifiedFilled.tsx":Xt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/EditOutlined.tsx":Vt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VideoOutlined.tsx":Zt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/EggOutlined.tsx":Ht,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VipCardFilled.tsx":Gt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ErrorCircleFilled.tsx":Qt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CouponOutlined.tsx":Yt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ErrorCircleFilledBold.tsx":Jt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FireFilled.tsx":wt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ErrorCircleOutlined.tsx":qt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FlashlightOnOutlined.tsx":_t,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ExperimentOutlined.tsx":ea,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FlashlightOutlined.tsx":na,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ExploreCircleFilled.tsx":ta,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FlipOutlined.tsx":aa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ExploreCircleOutlined.tsx":ra,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/EyeFilled.tsx":oa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VolumeUpOutlined.tsx":la,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FollowOutlined.tsx":da,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FullScreenOutlined.tsx":sa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/EyeOutlined.tsx":ua,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VipOutlined.tsx":ia,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GetTicketsFilled.tsx":ca,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FemaleOutlined.tsx":pa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VolumeDownFilled.tsx":ma,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GetTicketsOutlined.tsx":Ia,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FilterOutlined.tsx":va,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GiftCardOutlined.tsx":fa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VolumeMuteFilled.tsx":ha,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VolumeMuteOutlined.tsx":xa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GiftOutlined.tsx":ga,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/WifiOutlined.tsx":ya,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GlassesOutlined.tsx":Ea,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VolumeUpFilled.tsx":ba,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GppGoodFilled.tsx":Sa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/WeChatOutlined.tsx":Ca,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/WeiBoOutlined.tsx":Oa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GppGoodOutlined.tsx":Pa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/XiaMiCircleOutlined.tsx":La,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GridViewOutlined.tsx":Ta,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartAddOutlinedBold.tsx":Ba,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/YouKuVipCircleOutlined.tsx":Ra,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartBroken.tsx":Ma,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartMarkedOutlined.tsx":Da,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GripperBarHorizontal.tsx":Aa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartOutlined.tsx":$a,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GripperBarVertical.tsx":ka,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartFilled.tsx":za,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HelpCircleFilled.tsx":Fa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HashOutlined.tsx":Ka,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VipFilled.tsx":Wa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartAddOutlined.tsx":Ua,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/utils/createSvgIcon.tsx":Na,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SvgIcon/index.tsx":ja,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SvgIcon/SvgIcon.tsx":Xa,clsx:Va,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SvgIcon/SvgIcon.less":Za},renderOpts:{compile:function(){var Y=p()(c()().mark(function U(){var Z,Q=arguments;return c()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,e.e(1212).then(e.bind(e,61212));case 2:return F.abrupt("return",(Z=F.sent).default.apply(Z,Q));case 3:case"end":return F.stop()}},U)}));function G(){return Y.apply(this,arguments)}return G}()}}}},91198:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u4ECE\u5E95\u90E8\u5F39\u51FA\u7684\u52A8\u4F5C\u83DC\u5355\u9762\u677F\u3002\u5305\u542B\u4E0E\u5F53\u524D\u60C5\u5883\u76F8\u5173\u7684\u591A\u4E2A\u9009\u9879\uFF0C\u8BA9\u7528\u6237\u5728\u4E0D\u79BB\u573A\u7684\u60C5\u51B5\u4E0B\u5B8C\u6210\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"ActionSheet",paraId:1,tocIndex:2},{value:" \u9ED8\u8BA4\u5173\u95ED\uFF0C\u901A\u8FC7",paraId:1,tocIndex:2},{value:"open",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u4ECE\u5E95\u90E8\u5F39\u51FA\uFF0C\u901A\u8FC7\u5D4C\u5957",paraId:1,tocIndex:2},{value:"ActionSheetItem",paraId:1,tocIndex:2},{value:"\u5B8C\u6210\u6BCF\u4E2A\u9009\u9879\u7684\u6E32\u67D3\u3002",paraId:1,tocIndex:2},{value:"\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E",paraId:2,tocIndex:3},{value:"cancelText",paraId:2,tocIndex:3},{value:"\u589E\u52A0\u5E95\u90E8\u53D6\u6D88\u6309\u94AE\uFF0C\u70B9\u51FB\u4F1A\u89E6\u53D1 ",paraId:2,tocIndex:3},{value:"onClose",paraId:2,tocIndex:3},{value:" \u4E8B\u4EF6\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7\u8BBE\u7F6E",paraId:3,tocIndex:4},{value:"extra",paraId:3,tocIndex:4},{value:" \u53EF\u4EE5\u5728\u9876\u90E8\u589E\u52A0\u989D\u5916\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u4EC5\u5C55\u793A\u4E0D\u53EF\u70B9\u51FB",paraId:3,tocIndex:4},{value:"\u901A\u8FC7\u7ED9 ",paraId:4,tocIndex:5},{value:"ActionSheetItem",paraId:4,tocIndex:5},{value:" \u8BBE\u7F6E",paraId:4,tocIndex:5},{value:"disabled",paraId:4,tocIndex:5},{value:"\u53EF\u4EE5\u4F7F\u8BE5\u9009\u9879\u4E0D\u53EF\u70B9\u51FB\uFF0C\u8BBE\u7F6E",paraId:4,tocIndex:5},{value:"color",paraId:4,tocIndex:5},{value:"\u53EF\u4EE5\u8BBE\u7F6E\u8BE5\u9009\u62E9\u7684\u4E3B\u9898\uFF0C\u4F8B\u5982\u5371\u9669\u64CD\u4F5C\u901A\u8FC7 color=danger \u53EF\u4EE5\u63D0\u793A\u7528\u6237\u8C28\u614E\u64CD\u4F5C",paraId:4,tocIndex:5},{value:"\u901A\u8FC7\u7ED9 ",paraId:5,tocIndex:6},{value:"ActionSheetItem",paraId:5,tocIndex:6},{value:" \u8BBE\u7F6E",paraId:5,tocIndex:6},{value:"description",paraId:5,tocIndex:6},{value:"\u53EF\u4EE5\u589E\u52A0\u6BCF\u4E2A\u9009\u9879\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u4F5C\u4E3A\u8BE5\u9009\u9879\u7684\u989D\u5916\u8865\u5145\u4FE1\u606F",paraId:5,tocIndex:6},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"cancelText",paraId:6,tocIndex:8},{value:"\u53D6\u6D88\u6309\u94AE\u5185\u5BB9\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A\u7A7A\u5219\u4E0D\u663E\u793A\u53D6\u6D88\u6309\u94AE",paraId:6,tocIndex:8},{value:"React.ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"extra",paraId:6,tocIndex:8},{value:"\u9876\u90E8\u989D\u5916\u7684\u5185\u5BB9\u5C55\u793A",paraId:6,tocIndex:8},{value:"React.ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"onSelect",paraId:6,tocIndex:8},{value:"\u5B50\u9879\u7684\u70B9\u51FB\u9009\u62E9\u56DE\u8C03",paraId:6,tocIndex:8},{value:"(event: React.MouseEvent ,data?: { index: string | number }) => void;",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"onClose",paraId:6,tocIndex:8},{value:"\u5173\u95ED\u56DE\u8C03",paraId:6,tocIndex:8},{value:"ModalProps['onClose']",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"ActionSheet",paraId:7,tocIndex:8},{value:" \u7EE7\u627F\u81EA ",paraId:7,tocIndex:8},{value:"Drawer",paraId:7,tocIndex:8},{value:" \u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:7,tocIndex:8},{value:"Drawer API",paraId:8,tocIndex:8},{value:"\u5C5E\u6027",paraId:9,tocIndex:9},{value:"\u8BF4\u660E",paraId:9,tocIndex:9},{value:"\u7C7B\u578B",paraId:9,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:9},{value:"description",paraId:9,tocIndex:9},{value:"\u63CF\u8FF0\u5185\u5BB9",paraId:9,tocIndex:9},{value:"React.ReactNode",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"disabled",paraId:9,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"color",paraId:9,tocIndex:9},{value:"\u989C\u8272",paraId:9,tocIndex:9},{value:"primary",paraId:9,tocIndex:9},{value:" | ",paraId:9,tocIndex:9},{value:"info",paraId:9,tocIndex:9},{value:" | ",paraId:9,tocIndex:9},{value:"success",paraId:9,tocIndex:9},{value:" | ",paraId:9,tocIndex:9},{value:"warning",paraId:9,tocIndex:9},{value:" | ",paraId:9,tocIndex:9},{value:"danger",paraId:9,tocIndex:9},{value:" | ",paraId:9,tocIndex:9},{value:"default",paraId:9,tocIndex:9},{value:"default",paraId:9,tocIndex:9},{value:"bold",paraId:9,tocIndex:9},{value:"\u662F\u5426\u52A0\u7C97",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"index",paraId:9,tocIndex:9},{value:"\u7D22\u5F15\u6807\u8BB0",paraId:9,tocIndex:9},{value:"string | number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"onClick",paraId:9,tocIndex:9},{value:"\u70B9\u51FB\u9009\u62E9\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(event: React.MouseEvent ,data?: { index: string | number }) => void;",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"\u5C5E\u6027",paraId:10,tocIndex:11},{value:"\u8BF4\u660E",paraId:10,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:11},{value:"\u5168\u5C40\u53D8\u91CF",paraId:10,tocIndex:11},{value:"--extra-line-height",paraId:10,tocIndex:11},{value:"\u9876\u90E8\u989D\u5916\u5185\u5BB9\u884C\u9AD8",paraId:10,tocIndex:11},{value:"23px",paraId:10,tocIndex:11},{value:"--bui-action-sheet-extra-line-height",paraId:10,tocIndex:11},{value:"--extra-padding",paraId:10,tocIndex:11},{value:"\u9876\u90E8\u989D\u5916\u5185\u5BB9\u5185\u8FB9\u8DDD",paraId:10,tocIndex:11},{value:"--bui-spacing-xl",paraId:10,tocIndex:11},{value:"--bui-action-sheet-extra-padding",paraId:10,tocIndex:11},{value:"--extra-magin",paraId:10,tocIndex:11},{value:"\u9876\u90E8\u989D\u5916\u5185\u5BB9\u5185\u8FB9\u8DDD",paraId:10,tocIndex:11},{value:"0 --bui-spacing-xl",paraId:10,tocIndex:11},{value:"--bui-action-sheet-extra-magin",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u8BF4\u660E",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"\u5168\u5C40\u53D8\u91CF",paraId:11,tocIndex:12},{value:"--padding",paraId:11,tocIndex:12},{value:"\u5B50\u9879\u5185\u8FB9\u8DDD",paraId:11,tocIndex:12},{value:"--bui-spacing-xl",paraId:11,tocIndex:12},{value:"--bui-action-sheet-item-padding",paraId:11,tocIndex:12},{value:"--font-size",paraId:11,tocIndex:12},{value:"\u5B50\u9879\u5B57\u4F53\u5927\u5C0F",paraId:11,tocIndex:12},{value:"--bui-title-size-2",paraId:11,tocIndex:12},{value:"--bui-action-sheet-item-font-size",paraId:11,tocIndex:12},{value:"--line-height",paraId:11,tocIndex:12},{value:"\u5B50\u9879\u5B57\u4F53\u884C\u9AD8",paraId:11,tocIndex:12},{value:"24px",paraId:11,tocIndex:12},{value:"--bui-action-sheet-item-line-height",paraId:11,tocIndex:12},{value:"--color",paraId:11,tocIndex:12},{value:"\u5B50\u9879\u5B57\u4F53\u989C\u8272",paraId:11,tocIndex:12},{value:"--bui-color-fg-default",paraId:11,tocIndex:12},{value:"--bui-action-sheet-item-color",paraId:11,tocIndex:12},{value:"--margin",paraId:11,tocIndex:12},{value:"\u5B50\u9879\u5B57\u4F53",paraId:11,tocIndex:12},{value:"0 --bui-spacing-xl",paraId:11,tocIndex:12},{value:"--bui-action-sheet-item-margin",paraId:11,tocIndex:12},{value:"--description-line-height",paraId:11,tocIndex:12},{value:"\u5B50\u9879\u63CF\u8FF0\u6587\u6848\u884C\u9AD8",paraId:11,tocIndex:12},{value:"19px",paraId:11,tocIndex:12},{value:"--bui-action-sheet-item-description-line-height",paraId:11,tocIndex:12}]},22290:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"Alert \u7EC4\u4EF6\uFF0C\u5E38\u7528\u4E8E\u5C55\u793A\u7B80\u77ED\u7684\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\uFF0C\u5E38\u7528\u4E8E\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u63D0\u793A\u6216\u8005\u6210\u529F\u63D0\u793A\u7B49\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"Alert \u7EC4\u4EF6\u53EF\u901A\u8FC7\u4F7F\u7528 ",paraId:1,tocIndex:2},{value:"children",paraId:1,tocIndex:2},{value:" \u8BBE\u7F6E Alert \u7EC4\u4EF6\u5185\u5BB9\u3002",paraId:1,tocIndex:2},{value:"icon",paraId:2,tocIndex:3},{value:` \u5141\u8BB8\u60A8\u5C06\u56FE\u6807\u6DFB\u52A0\u5230 Alert \u7EC4\u4EF6\u5934\u90E8\uFF0C\u8FD9\u5C06\u8986\u76D6 Alert \u9ED8\u8BA4\u56FE\u6807\u3002
\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E `,paraId:2,tocIndex:3},{value:"icon",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:" \u6765\u5220\u9664 Alert \u9ED8\u8BA4\u56FE\u6807\u3002",paraId:2,tocIndex:3},{value:"marquee",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u5141\u8BB8\u60A8\u5C06 Alert \u7EC4\u4EF6\u5185\u5BB9\u6EDA\u52A8\u3002",paraId:3,tocIndex:4},{value:"Alert \u7EC4\u4EF6\u63D0\u4F9B\u4E86 5 \u79CD\u989C\u8272\u4E3B\u9898\uFF1A",paraId:4,tocIndex:5},{value:"warning",paraId:4,tocIndex:5},{value:"\u3001",paraId:4,tocIndex:5},{value:"success",paraId:4,tocIndex:5},{value:"\u3001 ",paraId:4,tocIndex:5},{value:"error",paraId:4,tocIndex:5},{value:"\u3001",paraId:4,tocIndex:5},{value:"info",paraId:4,tocIndex:5},{value:" \u3001",paraId:4,tocIndex:5},{value:"primary",paraId:4,tocIndex:5},{value:"\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"color",paraId:4,tocIndex:5},{value:` \u5C5E\u6027\u8BBE\u7F6E\u7EC4\u4EF6\u4E3B\u9898\u8272\u3002
color \u5C5E\u6027\u9ED8\u8BA4\u503C\uFF1A`,paraId:4,tocIndex:5},{value:"primary",paraId:4,tocIndex:5},{value:"\u3002",paraId:4,tocIndex:5},{value:"Alert \u7EC4\u4EF6\u652F\u6301\u4E24\u79CD\u6A21\u5F0F\uFF1A\u586B\u5145",paraId:5,tocIndex:6},{value:"standard",paraId:5,tocIndex:6},{value:"\u3001\u8F6E\u5ED3",paraId:5,tocIndex:6},{value:"outlined",paraId:5,tocIndex:6},{value:`\u3002
\u60A8\u53EF\u4EE5\u901A\u8FC7 `,paraId:5,tocIndex:6},{value:"variant",paraId:5,tocIndex:6},{value:` \u5C5E\u6027\u8BBE\u7F6E\u7EC4\u4EF6\u6A21\u5F0F\u3002
`,paraId:5,tocIndex:6},{value:"variant",paraId:5,tocIndex:6},{value:" \u5C5E\u6027\u9ED8\u8BA4\u503C\uFF1A",paraId:5,tocIndex:6},{value:"standard",paraId:5,tocIndex:6},{value:"\u3002",paraId:5,tocIndex:6},{value:"Alert \u7EC4\u4EF6\u63D0\u4F9B\u4E86 ",paraId:6,tocIndex:9},{value:"action",paraId:6,tocIndex:9},{value:` \u5C5E\u6027\uFF0C\u7528\u4E8E\u5173\u95ED\u6216\u64A4\u9500 Alert\u3002
Alert \u63D0\u4F9B\u4E86 onClose \u56DE\u8C03\uFF0C\u5982\u679C\u4E1A\u52A1\u914D\u7F6E\u4E86 onClose \u5E76\u4E14 action \u6CA1\u6709\u8BBE\u7F6E\u5C5E\u6027\uFF0CAlert \u7EC4\u4EF6\u5C3E\u90E8\u4F1A\u663E\u793A\u4E00\u4E2A\u5173\u95ED\u56FE\u6807\u3002
`,paraId:6,tocIndex:9},{value:"action",paraId:6,tocIndex:9},{value:" \u5C5E\u6027\u53EF\u7528\u4E8E\u8986\u76D6\u8FD9\u4E2A\u5173\u95ED\u56FE\u6807\uFF0C\u81EA\u5B9A\u4E49\u64CD\u4F5C\u533A\u3002",paraId:6,tocIndex:9},{value:"\u5C5E\u6027",paraId:7,tocIndex:11},{value:"\u8BF4\u660E",paraId:7,tocIndex:11},{value:"\u7C7B\u578B",paraId:7,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:11},{value:"color",paraId:7,tocIndex:11},{value:"\u8B66\u544A\u6846\u4E3B\u9898\u8272",paraId:7,tocIndex:11},{value:"primary",paraId:7,tocIndex:11},{value:" \uFF5C ",paraId:7,tocIndex:11},{value:"info",paraId:7,tocIndex:11},{value:" \uFF5C ",paraId:7,tocIndex:11},{value:"success",paraId:7,tocIndex:11},{value:" \uFF5C ",paraId:7,tocIndex:11},{value:"warning",paraId:7,tocIndex:11},{value:" \uFF5C ",paraId:7,tocIndex:11},{value:"danger",paraId:7,tocIndex:11},{value:"primary",paraId:7,tocIndex:11},{value:"icon",paraId:7,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0Cicon \u4E3A false \u65F6\u9690\u85CF\u56FE\u6807",paraId:7,tocIndex:11},{value:"React.ReactNode \uFF5C boolean",paraId:7,tocIndex:11},{value:"true",paraId:7,tocIndex:11},{value:"action",paraId:7,tocIndex:11},{value:"\u8B66\u544A\u63D0\u793A\u64CD\u4F5C\u533A",paraId:7,tocIndex:11},{value:"React.ReactNode",paraId:7,tocIndex:11},{value:"-",paraId:7,tocIndex:11},{value:"variant",paraId:7,tocIndex:11},{value:"\u8B66\u544A\u6A21\u5F0F",paraId:7,tocIndex:11},{value:"standard",paraId:7,tocIndex:11},{value:"\uFF5C",paraId:7,tocIndex:11},{value:"outlined",paraId:7,tocIndex:11},{value:"standard",paraId:7,tocIndex:11},{value:"onClose",paraId:7,tocIndex:11},{value:"\u5173\u95ED\u56DE\u8C03",paraId:7,tocIndex:11},{value:"(e?: SyntheticEvent, data?: any) => void;",paraId:7,tocIndex:11},{value:"-",paraId:7,tocIndex:11},{value:"\u5C5E\u6027",paraId:8,tocIndex:12},{value:"\u8BF4\u660E",paraId:8,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:12},{value:"\u5168\u5C40\u53D8\u91CF",paraId:8,tocIndex:12},{value:"--content-marquee-speed",paraId:8,tocIndex:12},{value:"\u5185\u5BB9\u6EDA\u52A8\u901F\u5EA6",paraId:8,tocIndex:12},{value:"10s",paraId:8,tocIndex:12},{value:"--bui-alert-content-marquee-speed",paraId:8,tocIndex:12},{value:"--padding",paraId:8,tocIndex:12},{value:"\u5185\u8FB9\u8DDD",paraId:8,tocIndex:12},{value:"8px",paraId:8,tocIndex:12},{value:"--bui-alert-padding",paraId:8,tocIndex:12},{value:"--line-height",paraId:8,tocIndex:12},{value:"\u884C\u9AD8",paraId:8,tocIndex:12},{value:"16px",paraId:8,tocIndex:12},{value:"--bui-alert-line-height",paraId:8,tocIndex:12},{value:"--default-icon-font-size",paraId:8,tocIndex:12},{value:"\u9ED8\u8BA4\u56FE\u6807\u5B57\u53F7",paraId:8,tocIndex:12},{value:"15px",paraId:8,tocIndex:12},{value:"--bui-alert-default-icon-font-size",paraId:8,tocIndex:12},{value:"--action-margin-left",paraId:8,tocIndex:12},{value:"\u64CD\u4F5C\u533A\u5DE6\u5916\u8FB9\u8DDD",paraId:8,tocIndex:12},{value:"16px",paraId:8,tocIndex:12},{value:"--bui-alert-action-margin-left",paraId:8,tocIndex:12},{value:"--icon-margin-right",paraId:8,tocIndex:12},{value:"\u56FE\u6807\u53F3\u5916\u8FB9\u8DDD",paraId:8,tocIndex:12},{value:"--bui-spacing-xs",paraId:8,tocIndex:12},{value:"--bui-alert-icon-margin-right",paraId:8,tocIndex:12},{value:"--icon-font-size",paraId:8,tocIndex:12},{value:"\u56FE\u6807\u5B57\u53F7",paraId:8,tocIndex:12},{value:"--bui-title-size-4",paraId:8,tocIndex:12},{value:"--bui-alert-icon-font-size",paraId:8,tocIndex:12}]},83722:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:`\u7528\u6765\u5C55\u793A\u7528\u6237\u5934\u50CF\u6216\u8005\u4E8B\u7269\uFF0C\u652F\u6301\u5C55\u793A\u56FE\u7247\u3001\u6587\u5B57\u3001\u56FE\u6807\u7B49\u3002
`,paraId:0,tocIndex:0},{value:"Avatar",paraId:0,tocIndex:0},{value:" \u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Image",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6\u8FDB\u884C\u5C01\u88C5\uFF0C",paraId:0,tocIndex:0},{value:"Image",paraId:0,tocIndex:0},{value:" \u5E38\u7528\u7684\u5C5E\u6027\uFF0CAvatar \u540C\u6837\u652F\u6301\u3002",paraId:0,tocIndex:0},{value:"\u5934\u50CF\u7EC4\u4EF6\u901A\u8FC7",paraId:1,tocIndex:2},{value:"src",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u4F20\u9012\u56FE\u7247\u5730\u5740\u6765\u521B\u5EFA\u56FE\u50CF\u5934\u50CF\u3002",paraId:1,tocIndex:2},{value:"\u9664\u4E86\u56FE\u7247\u5934\u50CF\u5916\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u521B\u5EFA\u7B80\u5355\u5B57\u7B26\u578B\u5934\u50CF\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7",paraId:3,tocIndex:4},{value:"children",paraId:3,tocIndex:4},{value:"\u8FD8\u53EF\u4EE5\u521B\u5EFA\u56FE\u6807\u7B49\u81EA\u5B9A\u4E49\u5934\u50CF\u3002",paraId:3,tocIndex:4},{value:"Avatar \u7EC4\u4EF6\u63D0\u4F9B\u4E24\u79CD\u5934\u50CF\u6A21\u5F0F\uFF1A\u5706\u5F62",paraId:4,tocIndex:5},{value:"rounded",paraId:4,tocIndex:5},{value:" \u3001\u65B9\u5F62",paraId:4,tocIndex:5},{value:"square",paraId:4,tocIndex:5},{value:"\uFF0C \u60A8\u53EF\u4EE5\u4F7F\u7528",paraId:4,tocIndex:5},{value:"variant",paraId:4,tocIndex:5},{value:`\u8BBE\u7F6E\u5BF9\u5E94\u7684\u6A21\u5F0F\u3002
variant \u9ED8\u8BA4\u503C\u4E3A\uFF1A`,paraId:4,tocIndex:5},{value:"rounded",paraId:4,tocIndex:5},{value:"\u3002",paraId:4,tocIndex:5},{value:"Avatar",paraId:5,tocIndex:6},{value:"\u63D0\u4F9B",paraId:5,tocIndex:6},{value:"xsmall",paraId:5,tocIndex:6},{value:"\u3001 ",paraId:5,tocIndex:6},{value:"small",paraId:5,tocIndex:6},{value:"\u3001 ",paraId:5,tocIndex:6},{value:"medium",paraId:5,tocIndex:6},{value:"\u3001 ",paraId:5,tocIndex:6},{value:"large",paraId:5,tocIndex:6},{value:" \u7B49 4 \u79CD\u5C3A\u5BF8\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:5,tocIndex:6},{value:"size",paraId:5,tocIndex:6},{value:`\u8BBE\u7F6E\u5BF9\u5E94\u5C3A\u5BF8\u3002
size \u9ED8\u8BA4\u5C3A\u5BF8\u4E3A\uFF1A `,paraId:5,tocIndex:6},{value:"medium",paraId:5,tocIndex:6},{value:"\u3002",paraId:5,tocIndex:6},{value:"\u9664\u4E86\u63D0\u4F9B\u5355\u4E2A\u5934\u50CF\uFF0C\u6211\u4EEC\u8FD8\u63D0\u4F9B\u7EC4\u5408\u5934\u50CF\uFF0C\u901A\u8FC7",paraId:6,tocIndex:7},{value:"AvatarGroup",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"Avatar",paraId:6,tocIndex:7},{value:"\u7EC4\u5408\u4F7F\u7528\u3002",paraId:6,tocIndex:7},{value:"AvatarGroup \u7EC4\u4EF6\u63D0\u4F9B\u4E24\u79CD\u5934\u50CF\u6A21\u5F0F\uFF1A\u5706\u5F62",paraId:7,tocIndex:8},{value:"rounded",paraId:7,tocIndex:8},{value:" \u3001\u65B9\u5F62",paraId:7,tocIndex:8},{value:"square",paraId:7,tocIndex:8},{value:"\uFF0C \u60A8\u53EF\u4EE5\u4F7F\u7528",paraId:7,tocIndex:8},{value:"variant",paraId:7,tocIndex:8},{value:`\u8BBE\u7F6E\u5BF9\u5E94\u7684\u6A21\u5F0F\u3002
variant \u9ED8\u8BA4\u503C\u4E3A\uFF1A`,paraId:7,tocIndex:8},{value:"rounded",paraId:7,tocIndex:8},{value:"\u3002",paraId:7,tocIndex:8},{value:"AvatarGroup \u7EC4\u4EF6\u63D0\u4F9B",paraId:8,tocIndex:9},{value:"maxCount",paraId:8,tocIndex:9},{value:"\u5C5E\u6027\u6765\u9650\u5236\u663E\u793A\u7684\u5934\u50CF\u6570\u91CF\uFF0C\u5E76\u81EA\u52A8\u8BA1\u7B97\u672A\u663E\u793A\u7684\u5934\u50CF\u6570\u91CF\u3002",paraId:8,tocIndex:9},{value:"AvatarGroup \u7EC4\u4EF6\u63D0\u4F9B",paraId:9,tocIndex:10},{value:"orientation",paraId:9,tocIndex:10},{value:`\u5C5E\u6027\u6765\u63A7\u5236\u5934\u50CF\u671D\u5411\u3002
orientation \u9ED8\u8BA4\u4E3A\uFF1A`,paraId:9,tocIndex:10},{value:"left",paraId:9,tocIndex:10},{value:"\u3002",paraId:9,tocIndex:10},{value:"AvatarGroup \u7EC4\u4EF6\u63D0\u4F9B",paraId:10,tocIndex:11},{value:"spacing",paraId:10,tocIndex:11},{value:"\u5C5E\u6027\u6765\u63A7\u5236\u5934\u50CF\u95F4\u8DDD\u3002",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"src",paraId:11,tocIndex:13},{value:"\u56FE\u50CF\u5730\u5740",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"alt",paraId:11,tocIndex:13},{value:"\u56FE\u50CF\u65E0\u6CD5\u663E\u793A\u65F6\u7684\u66FF\u4EE3\u6587\u672C",paraId:11,tocIndex:13},{value:"React.ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"lazy",paraId:11,tocIndex:13},{value:"\u61D2\u52A0\u8F7D",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"placeholder",paraId:11,tocIndex:13},{value:"\u52A0\u8F7D\u65F6\u5360\u4F4D",paraId:11,tocIndex:13},{value:"React.ReactNode \uFF5C boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"ImageProps",paraId:11,tocIndex:13},{value:"\u900F\u4F20 Image \u5C5E\u6027",paraId:11,tocIndex:13},{value:"ImageProps",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"variant",paraId:11,tocIndex:13},{value:"\u5934\u50CF\u5F62\u72B6",paraId:11,tocIndex:13},{value:"rounded",paraId:11,tocIndex:13},{value:"\uFF5C",paraId:11,tocIndex:13},{value:"square",paraId:11,tocIndex:13},{value:"rounded",paraId:11,tocIndex:13},{value:"size",paraId:11,tocIndex:13},{value:"\u5934\u50CF\u5927\u5C0F",paraId:11,tocIndex:13},{value:"large",paraId:11,tocIndex:13},{value:"\uFF5C",paraId:11,tocIndex:13},{value:"medium",paraId:11,tocIndex:13},{value:"\uFF5C",paraId:11,tocIndex:13},{value:"small",paraId:11,tocIndex:13},{value:" \uFF5C",paraId:11,tocIndex:13},{value:"xsmall",paraId:11,tocIndex:13},{value:"medium",paraId:11,tocIndex:13},{value:"onError",paraId:11,tocIndex:13},{value:"\u56FE\u50CF\u5934\u50CF\u52A0\u8F7D\u5931\u8D25\u56DE\u8C03",paraId:11,tocIndex:13},{value:"ReactEventHandler",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onLoad",paraId:11,tocIndex:13},{value:"\u56FE\u50CF\u5934\u50CF\u52A0\u8F7D\u56DE\u8C03",paraId:11,tocIndex:13},{value:"ReactEventHandler",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u5C5E\u6027",paraId:12,tocIndex:14},{value:"\u8BF4\u660E",paraId:12,tocIndex:14},{value:"\u7C7B\u578B",paraId:12,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:14},{value:"maxCount",paraId:12,tocIndex:14},{value:"\u6700\u591A\u53EF\u663E\u793A\u7684\u5934\u50CF\u4E2A\u6570",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"variant",paraId:12,tocIndex:14},{value:"\u5934\u50CF\u5F62\u72B6",paraId:12,tocIndex:14},{value:"rounded",paraId:12,tocIndex:14},{value:" \uFF5C",paraId:12,tocIndex:14},{value:"square",paraId:12,tocIndex:14},{value:"rounded",paraId:12,tocIndex:14},{value:"size",paraId:12,tocIndex:14},{value:"\u5934\u50CF\u5927\u5C0F",paraId:12,tocIndex:14},{value:"large",paraId:12,tocIndex:14},{value:"\uFF5C",paraId:12,tocIndex:14},{value:"medium",paraId:12,tocIndex:14},{value:"\uFF5C",paraId:12,tocIndex:14},{value:"small",paraId:12,tocIndex:14},{value:" \uFF5C",paraId:12,tocIndex:14},{value:"xsmall",paraId:12,tocIndex:14},{value:"medium",paraId:12,tocIndex:14},{value:"spacing",paraId:12,tocIndex:14},{value:"\u5934\u50CF\u95F4\u8DDD",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"orientation",paraId:12,tocIndex:14},{value:"\u5934\u50CF\u671D\u5411",paraId:12,tocIndex:14},{value:"left",paraId:12,tocIndex:14},{value:"\uFF5C",paraId:12,tocIndex:14},{value:"right",paraId:12,tocIndex:14},{value:"right",paraId:12,tocIndex:14},{value:"\u5C5E\u6027",paraId:13,tocIndex:16},{value:"\u8BF4\u660E",paraId:13,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:16},{value:"\u5168\u5C40\u53D8\u91CF",paraId:13,tocIndex:16},{value:"--large-size",paraId:13,tocIndex:16},{value:"\u5927\u5C3A\u5BF8\u5934\u50CF\u5BBD\u9AD8",paraId:13,tocIndex:16},{value:"60px",paraId:13,tocIndex:16},{value:"--bui-avatar-large-size",paraId:13,tocIndex:16},{value:"--medium-size",paraId:13,tocIndex:16},{value:"\u4E2D\u7B49\u5C3A\u5BF8\u5934\u50CF\u5BBD\u9AD8",paraId:13,tocIndex:16},{value:"42px",paraId:13,tocIndex:16},{value:"--bui-avatar-medium-size",paraId:13,tocIndex:16},{value:"--small-size",paraId:13,tocIndex:16},{value:"\u5C0F\u5C3A\u5BF8\u5934\u50CF\u5BBD\u9AD8",paraId:13,tocIndex:16},{value:"30px",paraId:13,tocIndex:16},{value:"--bui-avatar-small-size",paraId:13,tocIndex:16},{value:"--xsmall-size",paraId:13,tocIndex:16},{value:"\u8D85\u5C0F\u5C3A\u5BF8\u5934\u50CF\u5BBD\u9AD8",paraId:13,tocIndex:16},{value:"24px",paraId:13,tocIndex:16},{value:"--bui-avatar-xsmall-size",paraId:13,tocIndex:16},{value:"\u5C5E\u6027",paraId:14,tocIndex:17},{value:"\u8BF4\u660E",paraId:14,tocIndex:17},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:17},{value:"\u5168\u5C40\u53D8\u91CF",paraId:14,tocIndex:17},{value:"--xsmall-margin-left",paraId:14,tocIndex:17},{value:"\u8D85\u5C0F\u5C3A\u5BF8\u5934\u50CF\u5DE6\u8FB9\u8DDD",paraId:14,tocIndex:17},{value:"-5px",paraId:14,tocIndex:17},{value:"--bui-avatar-group-xsmall-margin-left",paraId:14,tocIndex:17},{value:"--small-margin-left",paraId:14,tocIndex:17},{value:"\u5C0F\u5C3A\u5BF8\u5934\u5DE6\u8FB9\u8DDD",paraId:14,tocIndex:17},{value:"-9px",paraId:14,tocIndex:17},{value:"--bui-avatar-group-small-margin-left",paraId:14,tocIndex:17},{value:"--small-box-shadow",paraId:14,tocIndex:17},{value:"\u5C0F\u5C3A\u5BF8\u5934\u50CF\u9634\u5F71",paraId:14,tocIndex:17},{value:"0 0 0 1px --bui-color-bg-view",paraId:14,tocIndex:17},{value:"--bui-avatar-group-small-box-shadow",paraId:14,tocIndex:17},{value:"--medium-margin-left",paraId:14,tocIndex:17},{value:"\u4E2D\u7B49\u5C3A\u5BF8\u5934\u5DE6\u8FB9\u8DDD",paraId:14,tocIndex:17},{value:"-13px",paraId:14,tocIndex:17},{value:"--bui-avatar-group-medium-margin-left",paraId:14,tocIndex:17},{value:"--medium-box-shadow",paraId:14,tocIndex:17},{value:"\u4E2D\u7B49\u5C3A\u5BF8\u5934\u50CF\u9634\u5F71",paraId:14,tocIndex:17},{value:"0 0 0 2px --bui-color-bg-view",paraId:14,tocIndex:17},{value:"--bui-avatar-group-medium-box-shadow",paraId:14,tocIndex:17},{value:"--large-margin-left",paraId:14,tocIndex:17},{value:"\u5927\u5C3A\u5BF8\u5934\u5DE6\u8FB9\u8DDD",paraId:14,tocIndex:17},{value:"-21px",paraId:14,tocIndex:17},{value:"--bui-avatar-group-large-margin-left",paraId:14,tocIndex:17},{value:"--large-box-shadow",paraId:14,tocIndex:17},{value:"\u5927\u5C3A\u5BF8\u5934\u50CF\u9634\u5F71",paraId:14,tocIndex:17},{value:"0 0 0 3px --bui-color-bg-view",paraId:14,tocIndex:17},{value:"--bui-avatar-group-large-box-shadow",paraId:14,tocIndex:17}]},58496:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u4F5C\u4E3A",paraId:0,tocIndex:0},{value:"Modal \u5F39\u7A97",paraId:1,tocIndex:0},{value:`\u7684\u4E00\u90E8\u5206\u5B58\u5728\uFF0C\u4F7F\u7528Fade\u5B9E\u73B0\u7684\u5F39\u7A97\u80CC\u666F\u3002
\u901A\u5E38\u6765\u8BF4\uFF0C\u4F60\u5E94\u8BE5\u76F4\u63A5\u4F7F\u7528Modal\u800C\u4E0D\u662F\u8FD9\u4E2A\u7EC4\u4EF6\u3002`,paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"open",paraId:2,tocIndex:5},{value:"\u662F\u5426\u663E\u793A",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"false",paraId:2,tocIndex:5},{value:"invisible",paraId:2,tocIndex:5},{value:"\u662F\u5426\u900F\u660E\u4E0D\u53EF\u89C1\uFF08\u4ECD\u53EF\u70B9\u51FB\uFF09",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"false",paraId:2,tocIndex:5},{value:"transitionDuration",paraId:2,tocIndex:5},{value:"\u6DE1\u5165\u6DE1\u51FA\u65F6\u95F4",paraId:2,tocIndex:5},{value:"number | TransitionProps['timeout']",paraId:2,tocIndex:5},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"\u5168\u5C40\u53D8\u91CF",paraId:3,tocIndex:6},{value:"--background-color",paraId:3,tocIndex:6},{value:"\u80CC\u666F\u8272",paraId:3,tocIndex:6},{value:"rgba(0, 0, 0, 0.68)",paraId:3,tocIndex:6},{value:"--bui-backdrop-background-color",paraId:3,tocIndex:6}]},27047:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u5728\u5BB9\u5668\u67D0\u4E2A\u89D2\u4E0A\u7684\u4E00\u4E2A\u5FBD\u6807\uFF0C\u901A\u5E38\u7528\u4E8E\u901A\u77E5\u56FE\u6807\u6216\u8005\u5934\u50CF\u53F3\u4E0A\u89D2\u3002",paraId:0,tocIndex:0},{value:"\u7B80\u5355\u7684\u5FBD\u7AE0\uFF0C\u901A\u8FC7",paraId:1,tocIndex:2},{value:"content",paraId:1,tocIndex:2},{value:"\u8BBE\u7F6E\u5FBD\u7AE0\u5185\u5BB9\u3002",paraId:1,tocIndex:2},{value:"Badge",paraId:2,tocIndex:3},{value:"\u63D0\u4F9B 3 \u79CD\u5FBD\u7AE0\u5F62\u72B6\uFF1A",paraId:2,tocIndex:3},{value:"rounded",paraId:2,tocIndex:3},{value:" \u3001",paraId:2,tocIndex:3},{value:"dot",paraId:2,tocIndex:3},{value:"\u3001 ",paraId:2,tocIndex:3},{value:"bubble",paraId:2,tocIndex:3},{value:`\u3002
\u60A8\u53EF\u4EE5\u901A\u8FC7`,paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:"\u5C5E\u6027\u6765\u63A7\u5236\u5FBD\u7AE0\u5F62\u72B6\u3002",paraId:2,tocIndex:3},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u5FBD\u7AE0\u8FD8\u63D0\u4F9B 2 \u79CD\u6A21\u5F0F\uFF1A",paraId:3,tocIndex:7},{value:"contained",paraId:3,tocIndex:7},{value:"\u3001",paraId:3,tocIndex:7},{value:"outlined",paraId:3,tocIndex:7},{value:"\u3002",paraId:3,tocIndex:7},{value:"\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:4,tocIndex:10},{value:"maxCount",paraId:4,tocIndex:10},{value:"\u5C5E\u6027\u6765\u9650\u5236\u5FBD\u7AE0\u6570\u503C\u3002",paraId:4,tocIndex:10},{value:"\u6211\u4EEC\u8FD8\u4E3A\u5FBD\u7AE0\u63D0\u4F9B 5 \u79CD\u4E3B\u9898\u8272\uFF1A",paraId:5,tocIndex:11},{value:"danger",paraId:5,tocIndex:11},{value:" \u3001",paraId:5,tocIndex:11},{value:"success",paraId:5,tocIndex:11},{value:"\u3001 ",paraId:5,tocIndex:11},{value:"warning",paraId:5,tocIndex:11},{value:"\u3001 ",paraId:5,tocIndex:11},{value:"info",paraId:5,tocIndex:11},{value:"\u3001 ",paraId:5,tocIndex:11},{value:"primary",paraId:5,tocIndex:11},{value:"\u3002",paraId:5,tocIndex:11},{value:"\u5C5E\u6027",paraId:6,tocIndex:13},{value:"\u8BF4\u660E",paraId:6,tocIndex:13},{value:"\u7C7B\u578B",paraId:6,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:13},{value:"content",paraId:6,tocIndex:13},{value:"\u5FBD\u7AE0\u5185\u5BB9",paraId:6,tocIndex:13},{value:"ReactNode",paraId:6,tocIndex:13},{value:"-",paraId:6,tocIndex:13},{value:"color",paraId:6,tocIndex:13},{value:"\u5FBD\u7AE0\u4E3B\u9898\u8272",paraId:6,tocIndex:13},{value:"primary",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"info",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"success",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"warning",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"danger",paraId:6,tocIndex:13},{value:"primary",paraId:6,tocIndex:13},{value:"maxCount",paraId:6,tocIndex:13},{value:"\u6570\u5B57\u5FBD\u7AE0\u6700\u5927\u503C",paraId:6,tocIndex:13},{value:"number",paraId:6,tocIndex:13},{value:"-",paraId:6,tocIndex:13},{value:"variant",paraId:6,tocIndex:13},{value:"\u5FBD\u7AE0\u7C7B\u578B",paraId:6,tocIndex:13},{value:"contained",paraId:6,tocIndex:13},{value:" \uFF5C",paraId:6,tocIndex:13},{value:"outlined",paraId:6,tocIndex:13},{value:"contained",paraId:6,tocIndex:13},{value:"type",paraId:6,tocIndex:13},{value:"\u5FBD\u7AE0\u5F62\u72B6",paraId:6,tocIndex:13},{value:"dot",paraId:6,tocIndex:13},{value:"\uFF5C",paraId:6,tocIndex:13},{value:"rounded",paraId:6,tocIndex:13},{value:"\uFF5C",paraId:6,tocIndex:13},{value:"bubble",paraId:6,tocIndex:13},{value:"rounded",paraId:6,tocIndex:13},{value:"\u5C5E\u6027",paraId:7,tocIndex:14},{value:"\u8BF4\u660E",paraId:7,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:14},{value:"\u5168\u5C40\u53D8\u91CF",paraId:7,tocIndex:14},{value:"--badge-position",paraId:7,tocIndex:14},{value:"\u5FBD\u7AE0\u8DDD\u79BB\u9876\u90E8\u548C\u53F3\u90E8\u7684\u4F4D\u7F6E",paraId:7,tocIndex:14},{value:"14%",paraId:7,tocIndex:14},{value:"--bui-badge-position",paraId:7,tocIndex:14},{value:"--min-width",paraId:7,tocIndex:14},{value:"\u5FBD\u7AE0\u6700\u5C0F\u5BBD\u5EA6",paraId:7,tocIndex:14},{value:"15px",paraId:7,tocIndex:14},{value:"--bui-badge-min-width",paraId:7,tocIndex:14},{value:"--height",paraId:7,tocIndex:14},{value:"\u5FBD\u7AE0\u9AD8\u5EA6",paraId:7,tocIndex:14},{value:"15px",paraId:7,tocIndex:14},{value:"--bui-badge-height",paraId:7,tocIndex:14},{value:"--line-height",paraId:7,tocIndex:14},{value:"\u5B57\u4F53\u884C\u9AD8",paraId:7,tocIndex:14},{value:"15px",paraId:7,tocIndex:14},{value:"--bui-badge-line-height",paraId:7,tocIndex:14},{value:"--padding",paraId:7,tocIndex:14},{value:"\u5185\u8FB9\u8DDD",paraId:7,tocIndex:14},{value:"0 3px",paraId:7,tocIndex:14},{value:"--bui-badge-padding",paraId:7,tocIndex:14},{value:"--border-radius",paraId:7,tocIndex:14},{value:"\u5706\u89D2",paraId:7,tocIndex:14},{value:"8px",paraId:7,tocIndex:14},{value:"--bui-badge-border-radius",paraId:7,tocIndex:14},{value:"--outlined-padding",paraId:7,tocIndex:14},{value:"\u63CF\u8FB9\u573A\u666F\u5185\u8FB9\u8DDD",paraId:7,tocIndex:14},{value:"0 2px",paraId:7,tocIndex:14},{value:"--bui-badge-outlined-padding",paraId:7,tocIndex:14},{value:"--dot-size",paraId:7,tocIndex:14},{value:"\u70B9\u72B6\u573A\u666F\u5BBD\u9AD8",paraId:7,tocIndex:14},{value:"9px",paraId:7,tocIndex:14},{value:"--bui-badge-dot-size",paraId:7,tocIndex:14},{value:"--bubble-padding",paraId:7,tocIndex:14},{value:"\u6C14\u6CE1\u573A\u666F\u5185\u8FB9\u8DDD",paraId:7,tocIndex:14},{value:"9px",paraId:7,tocIndex:14},{value:"--bui-badge-dot-size",paraId:7,tocIndex:14},{value:"--bubble-border-radius",paraId:7,tocIndex:14},{value:"\u6C14\u6CE1\u573A\u666F\u5706\u89D2",paraId:7,tocIndex:14},{value:"6px 6px 6px 0",paraId:7,tocIndex:14},{value:"--bui-badge-bubble-border-radius",paraId:7,tocIndex:14}]},62305:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u6309\u94AE\u7528\u4E8E\u89E6\u53D1\u4E00\u4E2A\u64CD\u4F5C\uFF0C\u505A\u51FA\u9009\u62E9\uFF0C\u4F8B\u5982\u63D0\u4EA4\u8868\u5355\uFF0C\u6253\u5F00\u5BF9\u8BDD\u6846\uFF0C\u53D6\u6D88\u64CD\u4F5C\u6216\u6267\u884C\u5220\u9664\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u6309\u94AE\u652F\u6301 ",paraId:1,tocIndex:2},{value:"\u6587\u5B57\u6309\u94AE",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u63CF\u8FB9\u6309\u94AE",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u586B\u5145\u6309\u94AE",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u6D45\u4EAE\u6309\u94AE",paraId:1,tocIndex:2},{value:" \u56DB\u79CD\u5C55\u793A\u5F62\u6001\uFF0C\u9ED8\u8BA4\u662F\u63CF\u8FB9\u6309\u94AE\u3002",paraId:1,tocIndex:2},{value:"\u6587\u5B57\u6309\u94AE",paraId:2,tocIndex:2},{value:": \u76F4\u63A5\u4F7F\u7528\u6587\u5B57\u4F5C\u4E3A\u6309\u94AE\u3002\u662F\u89C6\u89C9\u5438\u5F15\u529B\u6700\u5F31\u7684\u4E00\u4E2A\u6309\u94AE\uFF0C\u901A\u5E38\u51FA\u73B0\u5728\u8868\u683C\u64CD\u4F5C\u680F\u3001\u6807\u9898\u548C\u5B57\u6BB5\u65C1\u7B49\u3002",paraId:2,tocIndex:2},{value:"\u586B\u5145\u6309\u94AE",paraId:3,tocIndex:2},{value:": \u4E00\u822C\u7528\u4E8E\u4E3B\u6309\u94AE\uFF0C\u662F\u7528\u6237\u5728\u6574\u4E2A\u9875\u9762\u9700\u8981\u5173\u6CE8\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u64CD\u4F5C\uFF0C\u5F15\u5BFC\u7528\u6237\u5173\u6CE8\u5E76\u64CD\u4F5C\u3002",paraId:3,tocIndex:2},{value:"\u63CF\u8FB9\u6309\u94AE",paraId:4,tocIndex:2},{value:": \u5E38\u89C1\u767D\u5E95\u52A0\u6587\u5B57\u7684\u5F62\u5F0F\uFF0C\u5728\u89C6\u89C9\u5F3A\u8C03\u7A0B\u5EA6\u4E0A\u5F31\u4E8E\u586B\u5145\u6309\u94AE\uFF0C\u901A\u5E38\u4E0E\u586B\u5145\u6309\u94AE\u642D\u914D\u6210\u7EC4\u4F7F\u7528",paraId:4,tocIndex:2},{value:"\u6D45\u4EAE\u6309\u94AE",paraId:5,tocIndex:2},{value:": \u6D45\u4EAE\u72B6\u6001\u7684\u6587\u5B57\u4E3A\u6309\u94AE\u80CC\u666F\u989C\u8272\uFF0C\u80CC\u666F\u5219\u4E3A\u5BF9\u5E94\u7684\u6D45\u8272\u3002",paraId:5,tocIndex:2},{value:"\u6309\u94AE\u6709\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002",paraId:6,tocIndex:3},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:7,tocIndex:3},{value:"size",paraId:7,tocIndex:3},{value:" \u4E3A large small full \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5927\u3001\u5C0F\u3001\u901A\u680F\u5C3A\u5BF8\u3002\u82E5\u4E0D\u8BBE\u7F6E ",paraId:7,tocIndex:3},{value:"size",paraId:7,tocIndex:3},{value:"\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u4E2D\u7B49\u5C3A\u5BF8\u3002",paraId:7,tocIndex:3},{value:"\u6309\u94AE\u652F\u6301 ",paraId:8,tocIndex:4},{value:"primary",paraId:8,tocIndex:4},{value:"\u3001",paraId:8,tocIndex:4},{value:"success",paraId:8,tocIndex:4},{value:"\u3001",paraId:8,tocIndex:4},{value:"info",paraId:8,tocIndex:4},{value:"\u3001",paraId:8,tocIndex:4},{value:"warning",paraId:8,tocIndex:4},{value:"\u3001",paraId:8,tocIndex:4},{value:"danger",paraId:8,tocIndex:4},{value:"\u3001 ",paraId:8,tocIndex:4},{value:"vip",paraId:8,tocIndex:4},{value:" \u4E3B\u9898\u5B9A\u4E49\u3002\u82E5\u4E0D\u8BBE\u7F6Ecolor\uFF0C\u5219\u9ED8\u8BA4\u4E3A",paraId:8,tocIndex:4},{value:"default",paraId:8,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:9,tocIndex:5},{value:"disabled",paraId:9,tocIndex:5},{value:" \u5C5E\u6027\u6765\u7981\u7528\u6309\u94AE\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u6309\u94AE\u4E0D\u53EF\u70B9\u51FB\u3002",paraId:9,tocIndex:5},{value:"\u56E0\u4E3A\u76F8\u6BD4\u7EAF\u6587\u672C\u6765\u8BF4\u7528\u6237\u5BF9\u56FE\u6807\u66F4\u654F\u611F\uFF0C\u6240\u4EE5\u6709\u4E9B\u65F6\u5019\u4F60\u53EF\u80FD\u5E0C\u671B\u4E3A\u67D0\u4E9B\u6309\u94AE\u8BBE\u7F6E\u56FE\u6807\uFF0C\u4EE5\u589E\u5F3A\u5E94\u7528\u7A0B\u5E8F\u7684\u7528\u6237\u4F53\u9A8C\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u6709\u65E5\u671F\u6309\u94AE\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u65E5\u671F\u56FE\u6807\u5BF9\u5176\u8FDB\u884C\u6807\u8BB0\u3002",paraId:10,tocIndex:6},{value:"startIcon",paraId:10,tocIndex:6},{value:" \u4F4D\u4E8E\u5B50\u5143\u7D20\u7684\u524D\u9762\uFF0C",paraId:10,tocIndex:6},{value:"endIcon",paraId:10,tocIndex:6},{value:" \u4F4D\u4E8E\u5B50\u5143\u7D20\u7684\u540E\u9762\u3002",paraId:10,tocIndex:6},{value:"\u5C5E\u6027",paraId:11,tocIndex:7},{value:"\u8BF4\u660E",paraId:11,tocIndex:7},{value:"\u7C7B\u578B",paraId:11,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:7},{value:"variant",paraId:11,tocIndex:7},{value:"\u6309\u94AE\u7C7B\u578B",paraId:11,tocIndex:7},{value:"outlined",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"text",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"contained",paraId:11,tocIndex:7},{value:" | light",paraId:11,tocIndex:7},{value:"text",paraId:11,tocIndex:7},{value:"color",paraId:11,tocIndex:7},{value:"\u6309\u94AE\u989C\u8272",paraId:11,tocIndex:7},{value:"primary",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"info",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"success",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"warning",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"danger",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"vip",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"default",paraId:11,tocIndex:7},{value:"default",paraId:11,tocIndex:7},{value:"size",paraId:11,tocIndex:7},{value:"\u6309\u94AE\u5927\u5C0F",paraId:11,tocIndex:7},{value:"small",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"medium",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"large",paraId:11,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"full",paraId:11,tocIndex:7},{value:"medium",paraId:11,tocIndex:7},{value:"disabled",paraId:11,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:7},{value:"boolean",paraId:11,tocIndex:7},{value:"false",paraId:11,tocIndex:7},{value:"startIcon",paraId:11,tocIndex:7},{value:"\u5728\u5B50\u5143\u7D20\u524D\u653E\u5728\u7684\u5185\u5BB9",paraId:11,tocIndex:7},{value:"React.ReactNode",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"endIcon",paraId:11,tocIndex:7},{value:"\u5728\u5B50\u5143\u7D20\u540E\u653E\u5728\u7684\u5185\u5BB9",paraId:11,tocIndex:7},{value:"React.ReactNode",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"openType",paraId:11,tocIndex:7},{value:"\u5FAE\u4FE1\u5F00\u653E\u80FD\u529B",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"onClick",paraId:11,tocIndex:7},{value:"\u70B9\u51FB\u6309\u94AE\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:7},{value:"(event: MouseEvent) => void",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"\u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:12,tocIndex:7},{value:"button",paraId:12,tocIndex:7},{value:"\u5C5E\u6027",paraId:13,tocIndex:8},{value:"\u8BF4\u660E",paraId:13,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:8},{value:"\u5168\u5C40\u53D8\u91CF",paraId:13,tocIndex:8},{value:"--border-radius",paraId:13,tocIndex:8},{value:"\u5706\u89D2\u5927\u5C0F",paraId:13,tocIndex:8},{value:"100px",paraId:13,tocIndex:8},{value:"--bui-button-border-radius",paraId:13,tocIndex:8},{value:"--bg-color",paraId:13,tocIndex:8},{value:"\u80CC\u666F\u989C\u8272",paraId:13,tocIndex:8},{value:"--bui-color-neutral-5",paraId:13,tocIndex:8},{value:"--bui-button-default-bg-color",paraId:13,tocIndex:8},{value:"--border-color",paraId:13,tocIndex:8},{value:"\u8FB9\u6846\u989C\u8272",paraId:13,tocIndex:8},{value:"--bui-color-border-default",paraId:13,tocIndex:8},{value:"--bui-button-border-color",paraId:13,tocIndex:8},{value:"--height",paraId:13,tocIndex:8},{value:"\u6309\u94AE\u9ED8\u8BA4\u9AD8\u5EA6",paraId:13,tocIndex:8},{value:"27px",paraId:13,tocIndex:8},{value:"--bui-button-height",paraId:13,tocIndex:8},{value:"--icon-start-margin-right",paraId:13,tocIndex:8},{value:"\u524D\u7F6E\u6807\u7B7E\u53F3\u8FB9\u8DDD",paraId:13,tocIndex:8},{value:"--bui-spacing-xs",paraId:13,tocIndex:8},{value:"--bui-button-icon-start-margin-right",paraId:13,tocIndex:8},{value:"--icon-end-margin-left",paraId:13,tocIndex:8},{value:"\u524D\u7F6E\u6807\u7B7E\u5DE6\u8FB9\u8DDD",paraId:13,tocIndex:8},{value:"--bui-spacing-xs",paraId:13,tocIndex:8},{value:"--bui-button-icon-end-margin-left",paraId:13,tocIndex:8},{value:"--disabled-opacity",paraId:13,tocIndex:8},{value:"\u7981\u7528\u72B6\u6001\u900F\u660E\u5EA6",paraId:13,tocIndex:8},{value:"0.5",paraId:13,tocIndex:8},{value:"--bui-button-disabled-opacity",paraId:13,tocIndex:8},{value:"--small-padding",paraId:13,tocIndex:8},{value:"\u5C0F\u6309\u94AE\u5185\u8FB9\u8DDD",paraId:13,tocIndex:8},{value:"0 11px",paraId:13,tocIndex:8},{value:"--bui-button-small-padding",paraId:13,tocIndex:8},{value:"--small-height",paraId:13,tocIndex:8},{value:"\u5C0F\u6309\u94AE\u9AD8\u5EA6",paraId:13,tocIndex:8},{value:"24px",paraId:13,tocIndex:8},{value:"--bui-button-small-height",paraId:13,tocIndex:8},{value:"--medium-padding",paraId:13,tocIndex:8},{value:"\u4E2D\u6309\u94AE\u5185\u8FB9\u8DDD",paraId:13,tocIndex:8},{value:"0 14px",paraId:13,tocIndex:8},{value:"--bui-button-medium-padding",paraId:13,tocIndex:8},{value:"--large-padding",paraId:13,tocIndex:8},{value:"\u5927\u6309\u94AE\u5185\u8FB9\u8DDD",paraId:13,tocIndex:8},{value:"0 14px",paraId:13,tocIndex:8},{value:"--bui-button-large-padding",paraId:13,tocIndex:8},{value:"--large-height",paraId:13,tocIndex:8},{value:"\u5927\u6309\u94AE\u9AD8\u5EA6",paraId:13,tocIndex:8},{value:"33px",paraId:13,tocIndex:8},{value:"--bui-button-large-height",paraId:13,tocIndex:8},{value:"--full-font-size",paraId:13,tocIndex:8},{value:"\u6EE1\u5C4F\u6309\u94AE\u5B57\u53F7",paraId:13,tocIndex:8},{value:"--bui-title-size-4",paraId:13,tocIndex:8},{value:"--bui-button-full-font-size",paraId:13,tocIndex:8},{value:"--full-height",paraId:13,tocIndex:8},{value:"\u6EE1\u5C4F\u6309\u94AE\u9AD8\u5EA6",paraId:13,tocIndex:8},{value:"42px",paraId:13,tocIndex:8},{value:"--bui-button-full-height",paraId:13,tocIndex:8}]},99095:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u7528\u4E8E\u9009\u62E9\u65E5\u671F\u6216\u65E5\u671F\u533A\u95F4\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u4E3A\u5355\u9009\u6A21\u5F0F\uFF0C\u5BF9\u5E94 ",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:" \u5E94\u4F20\u5165\u5355\u4E2A ",paraId:1,tocIndex:2},{value:"Date",paraId:1,tocIndex:2},{value:"\uFF0C\u9ED8\u8BA4\u53EF\u9009\u8303\u56F4\u4E3A\u5305\u542B\u5F53\u524D\u6708\u4EFD\u5728\u5185\u7684\u4E00\u5E74\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"minDate",paraId:2,tocIndex:3},{value:" \u548C ",paraId:2,tocIndex:3},{value:"maxDate",paraId:2,tocIndex:3},{value:" \u6307\u5B9A\u53EF\u9009\u8303\u56F4\uFF0C\u6E32\u67D3\u6307\u5B9A\u6708\u65F6\uFF1Avalue=null \u5E76\u6307\u5B9A ",paraId:2,tocIndex:3},{value:"minDate",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u542F\u7528 ",paraId:3,tocIndex:4},{value:"hideDaysOutsideCurrentMonth",paraId:3,tocIndex:4},{value:" \u53EF\u9690\u85CF\u5F53\u524D\u6708\u4E4B\u5916\u7684\u65E5\u671F\u3002",paraId:3,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:5},{value:"headerBarFormat",paraId:4,tocIndex:5},{value:" \u53EF\u81EA\u5B9A\u4E49\u5934\u90E8\u680F\u65E5\u671F\u683C\u5F0F\uFF0C\u9ED8\u8BA4\u683C\u5F0F\u4E3A ",paraId:4,tocIndex:5},{value:"YYYY/MM",paraId:4,tocIndex:5},{value:"\u3002",paraId:4,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:6},{value:"headerBarLeftIcon",paraId:5,tocIndex:6},{value:" \u548C ",paraId:5,tocIndex:6},{value:"headerBarRightIcon",paraId:5,tocIndex:6},{value:" \u53EF\u81EA\u5B9A\u4E49\u5934\u90E8\u680F\u5DE6\u53F3\u56FE\u6807\u3002",paraId:5,tocIndex:6},{value:"\u542F\u7528 ",paraId:6,tocIndex:7},{value:"enableSelectYear",paraId:6,tocIndex:7},{value:" \u901A\u8FC7\u70B9\u51FB\u65E5\u671F\u6587\u672C\u533A\u57DF\u6253\u5F00\u5E74\u4EFD\u6D6E\u5C42\u5207\u6362\u5E74\u4EFD\u3002",paraId:6,tocIndex:7},{value:"\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"disabledDate",paraId:7,tocIndex:8},{value:" \u53EF\u81EA\u5B9A\u4E49\u7981\u7528\u65E5\u671F\u3002",paraId:7,tocIndex:8},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:9},{value:"highlightDate",paraId:8,tocIndex:9},{value:" \u53EF\u9AD8\u4EAE\u67D0\u5929\u6216\u5468\u672B\u3002",paraId:8,tocIndex:9},{value:"mode",paraId:9,tocIndex:10},{value:" \u6307\u5B9A\u4E3A ",paraId:9,tocIndex:10},{value:"range",paraId:9,tocIndex:10},{value:"\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u9009\u62E9\u65E5\u671F\u8303\u56F4\u3002",paraId:9,tocIndex:10},{value:"\u901A\u8FC7 ",paraId:10,tocIndex:11},{value:"value",paraId:10,tocIndex:11},{value:" \u5C5E\u6027\u63A7\u5236\u65E5\u5386\u7EC4\u4EF6\u3002",paraId:10,tocIndex:11},{value:"\u901A\u8FC7 ",paraId:11,tocIndex:12},{value:"defaultValue",paraId:11,tocIndex:12},{value:" \u5C5E\u6027\u6E32\u67D3\u7EC4\u4EF6\uFF0C\u65E5\u5386\u7684\u9009\u4E2D\u6001\u4F1A\u4F53\u73B0\u5728\u6700\u5916\u5C42 dom \u7684 ",paraId:11,tocIndex:12},{value:"data-selected",paraId:11,tocIndex:12},{value:" \u6216 ",paraId:11,tocIndex:12},{value:"data-start",paraId:11,tocIndex:12},{value:" \u548C ",paraId:11,tocIndex:12},{value:"data-end",paraId:11,tocIndex:12},{value:" \u5C5E\u6027\u4E2D\u3002",paraId:11,tocIndex:12},{value:"\u4F7F\u7528 ",paraId:12,tocIndex:13},{value:"dateRender",paraId:12,tocIndex:13},{value:" \u53EF\u4EE5\u7ED8\u5236\u51FA\u81EA\u5B9A\u4E49\u65E5\u671F\u6837\u5F0F\u3002",paraId:12,tocIndex:13},{value:"\u4F7F\u7528 ",paraId:13,tocIndex:14},{value:"weekRender",paraId:13,tocIndex:14},{value:" \u53EF\u4EE5\u7ED8\u5236\u51FA\u81EA\u5B9A\u4E49\u5468\u5355\u5143\u683C\u6837\u5F0F\u3002",paraId:13,tocIndex:14},{value:"\u5C5E\u6027",paraId:14,tocIndex:15},{value:"\u8BF4\u660E",paraId:14,tocIndex:15},{value:"\u7C7B\u578B",paraId:14,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:15},{value:"defaultValue",paraId:14,tocIndex:15},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:14,tocIndex:15},{value:"Date | Date[] | null",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"value",paraId:14,tocIndex:15},{value:"\u9009\u4E2D\u7684\u503C\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:14,tocIndex:15},{value:"Date | Date[] | null",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"minDate",paraId:14,tocIndex:15},{value:"\u53EF\u9009\u62E9\u7684\u6700\u5C0F\u65E5\u671F",paraId:14,tocIndex:15},{value:"Date",paraId:14,tocIndex:15},{value:"\u5F53\u524D\u6708\u7B2C\u4E00\u5929",paraId:14,tocIndex:15},{value:"maxDate",paraId:14,tocIndex:15},{value:"\u53EF\u9009\u62E9\u7684\u6700\u5927\u65E5\u671F",paraId:14,tocIndex:15},{value:"Date",paraId:14,tocIndex:15},{value:"\u5F53\u524D\u65E5\u671F\u7684\u4E00\u5E74\u540E",paraId:14,tocIndex:15},{value:"mode",paraId:14,tocIndex:15},{value:"\u65E5\u5386\u9009\u62E9\u7C7B\u578B",paraId:14,tocIndex:15},{value:"single",paraId:14,tocIndex:15},{value:" | ",paraId:14,tocIndex:15},{value:"range",paraId:14,tocIndex:15},{value:"single",paraId:14,tocIndex:15},{value:"hideDaysOutsideCurrentMonth",paraId:14,tocIndex:15},{value:"\u662F\u5426\u9690\u85CF\u5F53\u524D\u6708\u4E4B\u5916\u7684\u65E5\u671F",paraId:14,tocIndex:15},{value:"boolean",paraId:14,tocIndex:15},{value:"false",paraId:14,tocIndex:15},{value:"headerBarFormat",paraId:14,tocIndex:15},{value:"\u5934\u90E8\u64CD\u4F5C\u680F\u65E5\u671F\u663E\u793A\u683C\u5F0F",paraId:14,tocIndex:15},{value:"string",paraId:14,tocIndex:15},{value:"YYYY/MM",paraId:14,tocIndex:15},{value:"headerBarLeftIcon",paraId:14,tocIndex:15},{value:"\u5934\u90E8\u64CD\u4F5C\u680F\u5DE6\u8FB9\u56FE\u6807",paraId:14,tocIndex:15},{value:"(options: ICustomIconProps) => React.ReactNode",paraId:14,tocIndex:15},{value:"<CaretLeftIcon />",paraId:14,tocIndex:15},{value:"headerBarRightIcon",paraId:14,tocIndex:15},{value:"\u5934\u90E8\u64CD\u4F5C\u680F\u53F3\u8FB9\u56FE\u6807",paraId:14,tocIndex:15},{value:"(options: ICustomIconProps) => React.ReactNode",paraId:14,tocIndex:15},{value:"<CaretRightIcon />",paraId:14,tocIndex:15},{value:"disabledDate",paraId:14,tocIndex:15},{value:"\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F",paraId:14,tocIndex:15},{value:"(currentDate: Date) => boolean",paraId:14,tocIndex:15},{value:"\u5F53\u5929\u4E4B\u524D\u7684\u65E5\u671F",paraId:14,tocIndex:15},{value:"highlightDate",paraId:14,tocIndex:15},{value:"\u9AD8\u4EAE\u7684\u65E5\u671F",paraId:14,tocIndex:15},{value:"today",paraId:14,tocIndex:15},{value:" | ",paraId:14,tocIndex:15},{value:"weekend",paraId:14,tocIndex:15},{value:"today",paraId:14,tocIndex:15},{value:"dateRender",paraId:14,tocIndex:15},{value:"\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9",paraId:14,tocIndex:15},{value:"(currentDate: ICalendarInstance) => React.ReactNode",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"weekRender",paraId:14,tocIndex:15},{value:"\u81EA\u5B9A\u4E49\u5468\u5355\u5143\u683C\u7684\u5185\u5BB9",paraId:14,tocIndex:15},{value:"(week: string) => React.ReactNode",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"onMonthChange",paraId:14,tocIndex:15},{value:"\u6708\u4EFD\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03",paraId:14,tocIndex:15},{value:"(e: React.SyntheticEvent,data: ICalendarMonthChangeData) => void",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"onChange",paraId:14,tocIndex:15},{value:"\u65E5\u671F\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03",paraId:14,tocIndex:15},{value:"(e: React.SyntheticEvent,data: { value: ICalendarValue }) => void",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"\u5C5E\u6027",paraId:15,tocIndex:16},{value:"\u8BF4\u660E",paraId:15,tocIndex:16},{value:"\u7C7B\u578B",paraId:15,tocIndex:16},{value:"month",paraId:15,tocIndex:16},{value:"\u5207\u6362\u540E\u7684\u6708\u4EFD",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"type",paraId:15,tocIndex:16},{value:"\u64CD\u4F5C\u7C7B\u578B\uFF0Cprev: \u70B9\u51FB\u4E0A\u4E2A\u6708 next: \u70B9\u51FB\u4E0B\u4E2A\u6708",paraId:15,tocIndex:16},{value:"prev",paraId:15,tocIndex:16},{value:" | ",paraId:15,tocIndex:16},{value:"next",paraId:15,tocIndex:16},{value:"\u5C5E\u6027",paraId:16,tocIndex:17},{value:"\u8BF4\u660E",paraId:16,tocIndex:17},{value:"\u7C7B\u578B",paraId:16,tocIndex:17},{value:"month",paraId:16,tocIndex:17},{value:"\u65E5\u671F\u5BF9\u8C61",paraId:16,tocIndex:17},{value:"Date",paraId:16,tocIndex:17},{value:"type",paraId:16,tocIndex:17},{value:"\u662F\u5426\u7981\u7528",paraId:16,tocIndex:17},{value:"boolean",paraId:16,tocIndex:17},{value:"\u5C5E\u6027",paraId:17,tocIndex:18},{value:"\u8BF4\u660E",paraId:17,tocIndex:18},{value:"\u7C7B\u578B",paraId:17,tocIndex:18},{value:"isMinMonth",paraId:17,tocIndex:18},{value:"\u662F\u5426\u4E3A\u53EF\u9009\u8303\u56F4\u5185\u7684\u6700\u5C0F\u6708\u4EFD",paraId:17,tocIndex:18},{value:"boolean",paraId:17,tocIndex:18},{value:"isMaxMonth",paraId:17,tocIndex:18},{value:"\u662F\u5426\u4E3A\u53EF\u9009\u8303\u56F4\u5185\u7684\u6700\u5927\u6708\u4EFD",paraId:17,tocIndex:18},{value:"boolean",paraId:17,tocIndex:18},{value:"\u5C5E\u6027",paraId:18,tocIndex:19},{value:"\u8BF4\u660E",paraId:18,tocIndex:19},{value:"\u9ED8\u8BA4\u503C",paraId:18,tocIndex:19},{value:"\u5168\u5C40\u53D8\u91CF",paraId:18,tocIndex:19},{value:"--padding",paraId:18,tocIndex:19},{value:"\u5185\u8FB9\u8DDD",paraId:18,tocIndex:19},{value:"6px 12px 7px",paraId:18,tocIndex:19},{value:"--bui-calendar-padding",paraId:18,tocIndex:19},{value:"--week-height",paraId:18,tocIndex:19},{value:"\u5468\u51E0\u663E\u793A\u680F\u9AD8\u5EA6",paraId:18,tocIndex:19},{value:"30px",paraId:18,tocIndex:19},{value:"--bui-calendar-week-height",paraId:18,tocIndex:19},{value:"--handler-height",paraId:18,tocIndex:19},{value:"\u64CD\u4F5C\u680F\u9AD8\u5EA6",paraId:18,tocIndex:19},{value:"28px",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-height",paraId:18,tocIndex:19},{value:"--handler-margin-bottom",paraId:18,tocIndex:19},{value:"\u64CD\u4F5C\u680F\u5E95\u90E8\u5916\u8FB9\u8DDD",paraId:18,tocIndex:19},{value:"7px",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-margin-bottom",paraId:18,tocIndex:19},{value:"--handler-text-width",paraId:18,tocIndex:19},{value:"\u64CD\u4F5C\u680F\u6587\u6848\u5BB9\u5668\u5BBD\u5EA6",paraId:18,tocIndex:19},{value:"80px",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-text-width",paraId:18,tocIndex:19},{value:"--handler-btn-width",paraId:18,tocIndex:19},{value:"\u64CD\u4F5C\u680F\u6309\u94AE\u5BBD\u5EA6",paraId:18,tocIndex:19},{value:"46px",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-btn-width",paraId:18,tocIndex:19},{value:"--handler-btn-height",paraId:18,tocIndex:19},{value:"\u64CD\u4F5C\u680F\u6309\u94AE\u9AD8\u5EA6",paraId:18,tocIndex:19},{value:"100%",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-btn-height",paraId:18,tocIndex:19},{value:"--handler-btn-icon-font-size",paraId:18,tocIndex:19},{value:"\u64CD\u4F5C\u680F\u6309\u94AE\u56FE\u6807\u5B57\u53F7",paraId:18,tocIndex:19},{value:"28px",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-btn-icon-font-size",paraId:18,tocIndex:19},{value:"--day-box-height",paraId:18,tocIndex:19},{value:"\u65E5\u671F\u6846\u9AD8\u5EA6",paraId:18,tocIndex:19},{value:"30px",paraId:18,tocIndex:19},{value:"--bui-calendar-day-box-height",paraId:18,tocIndex:19},{value:"--day-box-margin-bottom",paraId:18,tocIndex:19},{value:"\u65E5\u671F\u6846\u5E95\u90E8\u5916\u8FB9\u8DDD",paraId:18,tocIndex:19},{value:"7px",paraId:18,tocIndex:19},{value:"--bui-calendar-day-box-margin-bottom",paraId:18,tocIndex:19},{value:"--day-disabled-color",paraId:18,tocIndex:19},{value:"\u65E5\u671F\u7981\u7528\u5B57\u4F53\u989C\u8272",paraId:18,tocIndex:19},{value:"#9c9ca5",paraId:18,tocIndex:19},{value:"--bui-calendar-day-disabled-color",paraId:18,tocIndex:19},{value:"--middle-color",paraId:18,tocIndex:19},{value:"\u8303\u56F4\u9009\u62E9\u4E2D\u95F4\u90E8\u5206\u5B57\u4F53\u989C\u8272",paraId:18,tocIndex:19},{value:"#000",paraId:18,tocIndex:19},{value:"--bui-calendar-middle-color",paraId:18,tocIndex:19},{value:"--middle-background-color",paraId:18,tocIndex:19},{value:"\u8303\u56F4\u9009\u62E9\u4E2D\u95F4\u90E8\u5206\u80CC\u666F\u989C\u8272",paraId:18,tocIndex:19},{value:"#ffeaf1",paraId:18,tocIndex:19},{value:"--bui-calendar-middle-background-color",paraId:18,tocIndex:19},{value:"--range-both-ends-color",paraId:18,tocIndex:19},{value:"\u8303\u56F4\u9009\u62E9\u4E24\u7AEF\u5B57\u4F53\u989C\u8272",paraId:18,tocIndex:19},{value:"#000",paraId:18,tocIndex:19},{value:"--bui-calendar-range-both-ends-color",paraId:18,tocIndex:19},{value:"--range-both-ends-background-color",paraId:18,tocIndex:19},{value:"\u8303\u56F4\u9009\u62E9\u4E24\u7AEF\u80CC\u666F\u989C\u8272",paraId:18,tocIndex:19},{value:"#ffc7da",paraId:18,tocIndex:19},{value:"--bui-calendar-range-both-ends-background-color",paraId:18,tocIndex:19}]},4923:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u901A\u7528\u5361\u7247\u5BB9\u5668\uFF0C\u6700\u57FA\u7840\u7684\u5361\u7247\u5BB9\u5668\uFF0C\u53EF\u7528\u4E8E\u627F\u8F7D\u6587\u5B57\u3001\u5217\u8868\u3001\u56FE\u7247\u3001\u6BB5\u843D\u3001\u5E38\u7528\u4E8E\u540E\u53F0\u6982\u89C8\u9875\u9762\u3002",paraId:0,tocIndex:0},{value:"Card",paraId:1,tocIndex:2},{value:"\u7EC4\u4EF6\u5206\u4E3A\uFF1A",paraId:1,tocIndex:2},{value:"CardHeader",paraId:1,tocIndex:2},{value:"\u3001 ",paraId:1,tocIndex:2},{value:"CardContent",paraId:1,tocIndex:2},{value:" \u3001",paraId:1,tocIndex:2},{value:"CardFooter",paraId:1,tocIndex:2},{value:" \u7B49 3 \u4E2A\u6A21\u5757\uFF0C\u4EE5\u4E0B\u662F\u793A\u4F8B\u6587\u6863\u3002",paraId:1,tocIndex:2},{value:"\u5361\u7247\u7EC4\u4EF6\u63D0\u4F9B ",paraId:2,tocIndex:3},{value:"CardHeader",paraId:2,tocIndex:3},{value:"\u5B50\u7EC4\u4EF6\u7528\u6765\u8BBE\u7F6E\u5361\u7247\u5934\u90E8\u6A21\u5757\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:2,tocIndex:3},{value:"title",paraId:2,tocIndex:3},{value:"\u8BBE\u7F6E\u5361\u7247\u5BB9\u5668\u7684\u6807\u9898\u3002",paraId:2,tocIndex:3},{value:"\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7",paraId:3,tocIndex:4},{value:"subtitle",paraId:3,tocIndex:4},{value:"\u8BBE\u7F6E\u5361\u7247\u5BB9\u5668\u7684\u5B50\u6807\u9898\u3002",paraId:3,tocIndex:4},{value:"title",paraId:4},{value:" \u3001",paraId:4},{value:"subtitle",paraId:4},{value:" \u7EC4\u5408\u4F7F\u7528.",paraId:4},{value:"CardHeader",paraId:5,tocIndex:5},{value:"\u5B50\u7EC4\u4EF6\u9664\u4E86\u63D0\u4F9B\u6807\u9898\u3001\u5B50\u6807\u9898\u5916\uFF0C\u8FD8\u63D0\u4F9B\u5361\u7247\u5934\u90E8\u64CD\u4F5C\u533A\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:5,tocIndex:5},{value:"extra",paraId:5,tocIndex:5},{value:`\u627F\u8F7D\u5361\u7247\u5934\u90E8\u64CD\u4F5C\u533A Action\u3002
\u5F53\u7ED1\u5B9A`,paraId:5,tocIndex:5},{value:"onClick",paraId:5,tocIndex:5},{value:"\u4E8B\u4EF6\u65F6\uFF0C",paraId:5,tocIndex:5},{value:"CardHeader",paraId:5,tocIndex:5},{value:"\u63D0\u4F9B\u9ED8\u8BA4\u7684\u53F3\u4FA7\u64CD\u4F5C icon\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E",paraId:5,tocIndex:5},{value:"endIcon",paraId:5,tocIndex:5},{value:"\u5C5E\u6027\u4E3A",paraId:5,tocIndex:5},{value:"true/false",paraId:5,tocIndex:5},{value:"\u6765\u663E\u793A\u6216\u8005\u9690\u85CF\u8FD9\u4E2A icon\u3002",paraId:5,tocIndex:5},{value:"\u8BBE\u7F6E",paraId:6},{value:"endIcon",paraId:6},{value:"\u4E3A",paraId:6},{value:"false",paraId:6},{value:"\u3002",paraId:6},{value:"Card",paraId:7,tocIndex:6},{value:"\u7EC4\u4EF6\u63D0\u4F9B",paraId:7,tocIndex:6},{value:"CardContent",paraId:7,tocIndex:6},{value:"\u5B50\u7EC4\u4EF6\uFF0C\u901A\u5E38\u7528\u6765\u627F\u8F7D\u5361\u7247\u5BB9\u5668\u4E3B\u8981\u5185\u5BB9\u3002",paraId:7,tocIndex:6},{value:"Card",paraId:8,tocIndex:7},{value:"\u7EC4\u4EF6\u63D0\u4F9B",paraId:8,tocIndex:7},{value:"CardFooter",paraId:8,tocIndex:7},{value:"\u5B50\u7EC4\u4EF6\uFF0C\u901A\u5E38\u7528\u6765\u627F\u8F7D\u5361\u7247\u5BB9\u5668\u5E95\u90E8\u64CD\u4F5C\u533A\u3002",paraId:8,tocIndex:7},{value:"\u914D\u5408",paraId:9,tocIndex:8},{value:"CardHeader",paraId:9,tocIndex:8},{value:"\u3001",paraId:9,tocIndex:8},{value:"CardContent",paraId:9,tocIndex:8},{value:"\u3001",paraId:9,tocIndex:8},{value:"CardFooter",paraId:9,tocIndex:8},{value:"\u5B50\u7EC4\u4EF6\u4F7F\u7528\u3002",paraId:9,tocIndex:8},{value:"Card",paraId:10,tocIndex:9},{value:"\u7EC4\u4EF6\u652F\u6301\u5D4C\u5957\u4F7F\u7528\u3002",paraId:10,tocIndex:9},{value:"\u9664\u4E86\u914D\u5408",paraId:11,tocIndex:10},{value:"CardHeader",paraId:11,tocIndex:10},{value:"\u3001",paraId:11,tocIndex:10},{value:"CardContent",paraId:11,tocIndex:10},{value:"\u3001",paraId:11,tocIndex:10},{value:"CardFooter",paraId:11,tocIndex:10},{value:"\u5B50\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u63D2\u5165 children\uFF0C\u5B9E\u73B0\u9AD8\u5EA6\u5B9A\u5236\u5316\u5361\u7247\u3002",paraId:11,tocIndex:10},{value:"\u5C5E\u6027",paraId:12,tocIndex:12},{value:"\u8BF4\u660E",paraId:12,tocIndex:12},{value:"\u7C7B\u578B",paraId:12,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:12},{value:"title",paraId:12,tocIndex:12},{value:"\u5361\u7247\u6807\u9898",paraId:12,tocIndex:12},{value:"ReactNode",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"subtitle",paraId:12,tocIndex:12},{value:"\u5B50\u6807\u9898",paraId:12,tocIndex:12},{value:"ReactNode",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"extra",paraId:12,tocIndex:12},{value:"\u5361\u7247\u53F3\u4FA7\u64CD\u4F5C\u533A",paraId:12,tocIndex:12},{value:"ReactNode",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"endIcon",paraId:12,tocIndex:12},{value:"\u5361\u7247\u53F3\u4FA7\u56FE\u6807",paraId:12,tocIndex:12},{value:"ReactNode \uFF5C boolean",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"\u5C5E\u6027",paraId:13,tocIndex:14},{value:"\u8BF4\u660E",paraId:13,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:14},{value:"\u5168\u5C40\u53D8\u91CF",paraId:13,tocIndex:14},{value:"--padding",paraId:13,tocIndex:14},{value:"\u5185\u8FB9\u8DDD",paraId:13,tocIndex:14},{value:"--bui-spacing-md --bui-spacing-lg",paraId:13,tocIndex:14},{value:"--bui-card-header-padding",paraId:13,tocIndex:14},{value:"--end-icon-margin-left",paraId:13,tocIndex:14},{value:"\u5C3E\u90E8\u56FE\u6807\u5DE6\u8FB9\u8DDD",paraId:13,tocIndex:14},{value:"2px",paraId:13,tocIndex:14},{value:"--bui-card-header-end-icon-margin-left",paraId:13,tocIndex:14},{value:"\u5C5E\u6027",paraId:14,tocIndex:15},{value:"\u8BF4\u660E",paraId:14,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:15},{value:"\u5168\u5C40\u53D8\u91CF",paraId:14,tocIndex:15},{value:"--padding",paraId:14,tocIndex:15},{value:"\u5185\u8FB9\u8DDD",paraId:14,tocIndex:15},{value:"--bui-spacing-md --bui-spacing-lg",paraId:14,tocIndex:15},{value:"--bui-card-footer-padding",paraId:14,tocIndex:15}]},29657:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u590D\u9009\u6846\uFF0C\u5728\u5C55\u793A\u4E00\u7CFB\u5217\u9009\u9879\u65F6\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u53EF\u9009\u591A\u9879\u6216\u53D6\u6D88\u5DF2\u9009\u9879\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"checked",paraId:1,tocIndex:2},{value:" \u548C ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u63A7\u5236\u72B6\u6001\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"inputProps",paraId:2,tocIndex:3},{value:" \u4F20\u5165\u7684 input \u5C5E\u6027\u53EF\u900F\u4F20\u81F3\u5185\u90E8",paraId:2,tocIndex:3},{value:"input",paraId:2,tocIndex:3},{value:"\u6807\u7B7E\u3002",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:" \u548C ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:" \u53EF\u76F4\u63A5\u900F\u4F20\u81F3\u5185\u90E8",paraId:3,tocIndex:4},{value:"input",paraId:3,tocIndex:4},{value:"\u6807\u7B7E\uFF0C\u4E0D\u4F1A\u88AB ",paraId:3,tocIndex:4},{value:"inputProps",paraId:3,tocIndex:4},{value:" \u4F20\u5165\u7684\u540C\u540D\u5C5E\u6027\u8986\u76D6\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"labelPlacement",paraId:4,tocIndex:5},{value:" \u53EF\u63A7\u5236\u6587\u6848\u5728\u590D\u9009\u6846\u56FE\u6807\u7684\u4F4D\u7F6E\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"icon",paraId:5,tocIndex:6},{value:" \u53EF\u81EA\u5B9A\u4E49\u4E3A\u9009\u4E2D\u72B6\u6001\u56FE\u6807\uFF0C",paraId:5,tocIndex:6},{value:"checkedIcon",paraId:5,tocIndex:6},{value:" \u53EF\u81EA\u5B9A\u4E49\u9009\u4E2D\u72B6\u6001\u56FE\u6807\u3002",paraId:5,tocIndex:6},{value:"\u4F7F\u7528",paraId:6,tocIndex:7},{value:"disabled",paraId:6,tocIndex:7},{value:"\u7981\u7528\u7EC4\u4EF6\uFF0C",paraId:6,tocIndex:7},{value:"CheckboxGroup.disabled",paraId:6,tocIndex:7},{value:" \u53EF\u6574\u7EC4\u7981\u7528\u3002",paraId:6,tocIndex:7},{value:"CheckboxGroup",paraId:7,tocIndex:8},{value:" \u548C ",paraId:7,tocIndex:8},{value:"Checkbox",paraId:7,tocIndex:8},{value:" \u7EC4\u5408\uFF0C\u53EF\u5B9E\u73B0\u590D\u9009\u6846\u7EC4\uFF0C\u4E14\u6B64\u65F6\u7684 ",paraId:7,tocIndex:8},{value:"Checkbox",paraId:7,tocIndex:8},{value:" \u5E94\u8BE5\u4F20\u5165 ",paraId:7,tocIndex:8},{value:"value",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u3002",paraId:7,tocIndex:8},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:9},{value:"value",paraId:8,tocIndex:9},{value:" \u63A7\u5236 ",paraId:8,tocIndex:9},{value:"CheckboxGroup",paraId:8,tocIndex:9},{value:" \u7EC4\u4EF6\uFF0C\u901A\u8FC7 ",paraId:8,tocIndex:9},{value:"checked",paraId:8,tocIndex:9},{value:" \u63A7\u5236 ",paraId:8,tocIndex:9},{value:"Checkbox",paraId:8,tocIndex:9},{value:" \u7EC4\u4EF6\u3002",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"defaultValue",paraId:9,tocIndex:10},{value:" \u6307\u5B9A ",paraId:9,tocIndex:10},{value:"CheckboxGroup",paraId:9,tocIndex:10},{value:" \u7EC4\u4EF6\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"defaultChecked",paraId:9,tocIndex:10},{value:" \u6307\u5B9A ",paraId:9,tocIndex:10},{value:"Checkbox",paraId:9,tocIndex:10},{value:" \u7EC4\u4EF6\u9ED8\u8BA4\u503C\u3002",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:12},{value:"\u8BF4\u660E",paraId:10,tocIndex:12},{value:"\u7C7B\u578B",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:12},{value:"defaultValue",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:12},{value:"string[]",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"value",paraId:10,tocIndex:12},{value:"\u6307\u5B9A\u9009\u4E2D\u7684\u9009\u9879\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:12},{value:"string[]",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"\u6574\u7EC4\u662F\u5426\u7981\u7528",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:10,tocIndex:12},{value:"(e: React.SyntheticEvent,data: {value: string[]}) => void",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"\u5C5E\u6027",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"defaultChecked",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u662F\u5426\u9009\u4E2D\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checked",paraId:11,tocIndex:13},{value:"\u662F\u5426\u9009\u4E2D\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputProps",paraId:11,tocIndex:13},{value:"\u5185\u90E8",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u6807\u7B7E\u7684\u6807\u51C6\u5C5E\u6027",paraId:11,tocIndex:13},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputRef",paraId:11,tocIndex:13},{value:"\u5185\u90E8",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u6807\u7B7E\u7684 ref",paraId:11,tocIndex:13},{value:"React.Ref<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"name",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u540D\u79F0\u6807\u8BC6",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"value",paraId:11,tocIndex:13},{value:"\u7EC4\u4EF6\u7684\u503C\uFF0C\u82E5\u4F7F\u7528 CheckboxGroup \u5E94\u4F20\u5165\u8BE5\u5C5E\u6027",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"disabled",paraId:11,tocIndex:13},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"icon",paraId:11,tocIndex:13},{value:"\u672A\u9009\u4E2D\u72B6\u6001\u56FE\u6807",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checkedIcon",paraId:11,tocIndex:13},{value:"\u9009\u4E2D\u72B6\u6001\u56FE\u6807",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"labelPlacement",paraId:11,tocIndex:13},{value:"\u6587\u6848\u4F4D\u7F6E",paraId:11,tocIndex:13},{value:"left",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"top",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"bottom",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:11,tocIndex:13},{value:"(e: React.SyntheticEvent,data: {checked:boolean}) => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u5C5E\u6027",paraId:12,tocIndex:14},{value:"\u8BF4\u660E",paraId:12,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:14},{value:"\u5168\u5C40\u53D8\u91CF",paraId:12,tocIndex:14},{value:"--label-color",paraId:12,tocIndex:14},{value:"\u6587\u6848\u5B57\u4F53\u989C\u8272",paraId:12,tocIndex:14},{value:"--bui-color-fg-default",paraId:12,tocIndex:14},{value:"--bui-checkbox-label-color",paraId:12,tocIndex:14},{value:"--label-font-size",paraId:12,tocIndex:14},{value:"\u6587\u6848\u5B57\u4F53\u5927\u5C0F",paraId:12,tocIndex:14},{value:"--bui-text-size-1",paraId:12,tocIndex:14},{value:"--bui-checkbox-label-font-size",paraId:12,tocIndex:14},{value:"--icon-font-size",paraId:12,tocIndex:14},{value:"\u56FE\u6807\u5B57\u4F53\u5927\u5C0F",paraId:12,tocIndex:14},{value:"--bui-title-size-2",paraId:12,tocIndex:14},{value:"--bui-checkbox-icon-font-size",paraId:12,tocIndex:14},{value:"--disabled-opacity",paraId:12,tocIndex:14},{value:"\u7981\u7528\u72B6\u6001\u900F\u660E\u5EA6",paraId:12,tocIndex:14},{value:"0.5",paraId:12,tocIndex:14},{value:"--bui-checkbox-disabled-opacity",paraId:12,tocIndex:14},{value:"--icon-padding",paraId:12,tocIndex:14},{value:"\u56FE\u6807\u5185\u8FB9\u8DDD",paraId:12,tocIndex:14},{value:"5px",paraId:12,tocIndex:14},{value:"--bui-checkbox-icon-padding",paraId:12,tocIndex:14}]},41771:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u57CE\u5E02\u9009\u62E9",paraId:0,tocIndex:0},{value:"\u57CE\u5E02\u9009\u62E9\u5C55\u793A\u5F53\u524D\u57CE\u5E02\u3001\u5B9A\u4F4D\u57CE\u5E02\u3001\u70ED\u95E8\u57CE\u5E02\u53CA\u6240\u6709\u57CE\u5E02\uFF0C\u652F\u6301\u53F3\u4FA7\u5B57\u6BCD\u5BFC\u822A",paraId:1,tocIndex:2},{value:"\u7528\u6237\u53EF\u4EE5\u8BBE\u7F6EdisableIndex\u63A7\u5236\u53F3\u4FA7\u5B57\u6BCD\u5BFC\u822A\u7684\u5C55\u793A\uFF0C\u9ED8\u8BA4\u4E3Afalse\uFF0C\u5373\u5C55\u793A\u5B57\u6BCD\u5BFC\u822A",paraId:2,tocIndex:3},{value:"\u7528\u6237\u53EF\u4EE5\u8BBE\u7F6Etitle\u6765\u63A7\u5236\u5934\u90E8\u7684\u5C55\u793A",paraId:3,tocIndex:4},{value:"\u5C5E\u6027",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"cities",paraId:4,tocIndex:6},{value:"\u57CE\u5E02\u5217\u8868",paraId:4,tocIndex:6},{value:"CityGroup[]",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"onSelect",paraId:4,tocIndex:6},{value:"\u9009\u62E9\u57CE\u5E02\u56DE\u8C03",paraId:4,tocIndex:6},{value:"(e: React.SyntheticEvent,data: {city: City}) => void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"selectedCity",paraId:4,tocIndex:6},{value:"\u5F53\u524D\u57CE\u5E02\u4FE1\u606F",paraId:4,tocIndex:6},{value:"City",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"selectedCityGroupName",paraId:4,tocIndex:6},{value:"\u5F53\u524D\u57CE\u5E02\u680F\u7684title",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"'\u5F53\u524D\u57CE\u5E02'",paraId:4,tocIndex:6},{value:"currentCity",paraId:4,tocIndex:6},{value:"\u5B9A\u4F4D\u57CE\u5E02\u4FE1\u606F",paraId:4,tocIndex:6},{value:"City",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"currentCityGroupName",paraId:4,tocIndex:6},{value:"\u5B9A\u4F4D\u57CE\u5E02\u680F\u7684title",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"'\u5B9A\u4F4D\u57CE\u5E02'",paraId:4,tocIndex:6},{value:"hotCities",paraId:4,tocIndex:6},{value:"\u70ED\u95E8\u57CE\u5E02\u4FE1\u606F",paraId:4,tocIndex:6},{value:"City[]",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"hotCitiesGroupName",paraId:4,tocIndex:6},{value:"\u70ED\u95E8\u57CE\u5E02\u680F\u7684title",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"'\u70ED\u95E8\u57CE\u5E02'",paraId:4,tocIndex:6},{value:"disableIndex",paraId:4,tocIndex:6},{value:"\u7981\u7528\u5C55\u793A\u7D22\u5F15 \u9ED8\u8BA4false \u5373\u5C55\u793A\u7D22\u5F15",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"title",paraId:4,tocIndex:6},{value:"\u5934\u90E8title\uFF0C\u975E\u5FC5\u4F20",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"onClose",paraId:4,tocIndex:6},{value:"\u548Ctitle\u914D\u5408\u4F7F\u7528\uFF0C\u5934\u90E8\u53F3\u4FA7\u7684\u5173\u95ED\u56DE\u8C03",paraId:4,tocIndex:6},{value:"(e: React.SyntheticEvent) => void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"\u5C5E\u6027",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"groupName",paraId:5,tocIndex:7},{value:"\u5206\u7EC4\u540D",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"cities",paraId:5,tocIndex:7},{value:"\u57CE\u5E02\u5217\u8868",paraId:5,tocIndex:7},{value:"City[]",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"code",paraId:6,tocIndex:8},{value:"\u57CE\u5E02id",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"name",paraId:6,tocIndex:8},{value:"\u57CE\u5E02\u540D",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"\u5C5E\u6027",paraId:7,tocIndex:9},{value:"\u8BF4\u660E",paraId:7,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:9},{value:"\u5168\u5C40\u53D8\u91CF",paraId:7,tocIndex:9},{value:"--select-item-width",paraId:7,tocIndex:9},{value:"\u6A2A\u6392\u9009\u9879\u5BBD\u5EA6",paraId:7,tocIndex:9},{value:"111px",paraId:7,tocIndex:9},{value:"--bui-city-selector-item-width",paraId:7,tocIndex:9},{value:"--select-item-height",paraId:7,tocIndex:9},{value:"\u6A2A\u6392\u9009\u9879\u9AD8\u5EA6",paraId:7,tocIndex:9},{value:"36px",paraId:7,tocIndex:9},{value:"--bui-city-selector-item-height",paraId:7,tocIndex:9},{value:"--select-item-border-radius",paraId:7,tocIndex:9},{value:"\u6A2A\u6392\u9009\u9879\u5706\u89D2",paraId:7,tocIndex:9},{value:"20px",paraId:7,tocIndex:9},{value:"--bui-city-selector-item-border-radius",paraId:7,tocIndex:9},{value:"--select-item-margin",paraId:7,tocIndex:9},{value:"\u6A2A\u6392\u9009\u9879\u5916\u8FB9\u8DDD",paraId:7,tocIndex:9},{value:"4.5px 0 4.5px 9px",paraId:7,tocIndex:9},{value:"--bui-city-selector-item-margin",paraId:7,tocIndex:9},{value:"--title-height",paraId:7,tocIndex:9},{value:"\u6807\u9898\u9AD8\u5EA6",paraId:7,tocIndex:9},{value:"45px",paraId:7,tocIndex:9},{value:"--bui-city-selector-title-height",paraId:7,tocIndex:9},{value:"--title-line-height",paraId:7,tocIndex:9},{value:"\u6807\u9898\u884C\u9AD8",paraId:7,tocIndex:9},{value:"45px",paraId:7,tocIndex:9},{value:"--bui-city-selector-title-line-height",paraId:7,tocIndex:9},{value:"--btn-close-size",paraId:7,tocIndex:9},{value:"\u5173\u95ED\u6309\u94AE\u5BB9\u5668\u5BBD\u9AD8",paraId:7,tocIndex:9},{value:"45px",paraId:7,tocIndex:9},{value:"--bui-city-selector-btn-close-size",paraId:7,tocIndex:9},{value:"--btn-close-font-size",paraId:7,tocIndex:9},{value:"\u5173\u95ED\u6309\u94AE\u5B57\u53F7",paraId:7,tocIndex:9},{value:"20px",paraId:7,tocIndex:9},{value:"--bui-city-selector-btn-close-font-size",paraId:7,tocIndex:9},{value:"--container-with-title-height",paraId:7,tocIndex:9},{value:"\u5E26\u6807\u9898\u7684\u57CE\u5E02\u5BB9\u5668\u9AD8\u5EA6",paraId:7,tocIndex:9},{value:"calc(100% - --title-height)",paraId:7,tocIndex:9},{value:"--bui-city-selector-container-with-title-height",paraId:7,tocIndex:9},{value:"--city-container-min-height",paraId:7,tocIndex:9},{value:"\u57CE\u5E02\u5BB9\u5668\u6700\u5C0F\u9AD8\u5EA6",paraId:7,tocIndex:9},{value:"500px",paraId:7,tocIndex:9},{value:"--bui-city-selector-city-container-min-height",paraId:7,tocIndex:9},{value:"--select-city-buttons-padding",paraId:7,tocIndex:9},{value:"\u6A2A\u6392\u6309\u94AE\u5BB9\u5668\u5185\u8FB9\u8DDD",paraId:7,tocIndex:9},{value:"7.5px 0 0 3px",paraId:7,tocIndex:9},{value:"--bui-city-selector-select-city-buttons-padding",paraId:7,tocIndex:9},{value:"--select-city-title-line-height",paraId:7,tocIndex:9},{value:"\u57CE\u5E02\u7D22\u5F15\u6807\u9898\u680F\u884C\u9AD8",paraId:7,tocIndex:9},{value:"15px",paraId:7,tocIndex:9},{value:"--bui-city-selector-select-city-title-line-height",paraId:7,tocIndex:9},{value:"--list-item-height",paraId:7,tocIndex:9},{value:"\u57CE\u5E02\u9879\u9AD8\u5EA6",paraId:7,tocIndex:9},{value:"45px",paraId:7,tocIndex:9},{value:"--bui-city-selector-list-item-height",paraId:7,tocIndex:9},{value:"--city-index-has-title-top",paraId:7,tocIndex:9},{value:"\u57CE\u5E02\u7D22\u5F15\u5BB9\u5668\u8DDD\u9876\u8DDD\u79BB",paraId:7,tocIndex:9},{value:"calc(50% + --title-height / 2)",paraId:7,tocIndex:9},{value:"--bui-city-selector-city-index-has-title-top",paraId:7,tocIndex:9},{value:"--index-item-height",paraId:7,tocIndex:9},{value:"\u57CE\u5E02\u7D22\u5F15\u9879\u9AD8\u5EA6",paraId:7,tocIndex:9},{value:"20px",paraId:7,tocIndex:9},{value:"--bui-city-selector-index-item-height",paraId:7,tocIndex:9}]},30823:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u7528\u4E8E\u5B9E\u65F6\u5C55\u793A\u5012\u8BA1\u65F6\u6570\u503C\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"remainingTime",paraId:1,tocIndex:2},{value:" \u63A7\u5236\u5012\u8BA1\u65F6\u5269\u4F59\u65F6\u957F\uFF0C\u4E0E ",paraId:1,tocIndex:2},{value:"endTimestamp",paraId:1,tocIndex:2},{value:" \u5B57\u6BB5\u4E8C\u9009\u4E00\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"endTimestamp",paraId:2,tocIndex:3},{value:" \u6307\u5B9A\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u95F4\u70B9\uFF0C\u4E0E ",paraId:2,tocIndex:3},{value:"remainingTime",paraId:2,tocIndex:3},{value:" \u5B57\u6BB5\u4E8C\u9009\u4E00\uFF0C\u4F18\u5148\u7EA7\u6BD4 ",paraId:2,tocIndex:3},{value:"remainingTime",paraId:2,tocIndex:3},{value:" \u9AD8\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"serverTimestamp",paraId:3,tocIndex:4},{value:" \u8BBE\u7F6E\u670D\u52A1\u5668\u65F6\u95F4\u6233\uFF0C\u53EF\u4E0E ",paraId:3,tocIndex:4},{value:"endTimestamp",paraId:3,tocIndex:4},{value:" \u914D\u5408\u4F7F\u7528\uFF0C\u8BE5\u5C5E\u6027\u53EF\u7528\u6765\u9632\u6B62\u672C\u5730\u65F6\u95F4\u88AB\u4FEE\u6539\u800C\u5BFC\u81F4\u5012\u8BA1\u65F6\u9519\u8BEF\u7684\u573A\u666F\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"format",paraId:4,tocIndex:5},{value:" \u53EF\u8BBE\u7F6E\u5012\u8BA1\u65F6\u683C\u5F0F\u5316\u540E\u7684\u5F62\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:4,tocIndex:5},{value:"HH:mm:ss",paraId:4,tocIndex:5},{value:"\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"unitStyle",paraId:5,tocIndex:6},{value:" \u53EF\u8BBE\u7F6E\u5012\u8BA1\u65F6\u5355\u4F4D\u6837\u5F0F\u3002",paraId:5,tocIndex:6},{value:"\u53EF\u901A\u8FC7 ",paraId:6,tocIndex:7},{value:"valueStyle",paraId:6,tocIndex:7},{value:" \u5B9A\u5236\u5012\u8BA1\u65F6\u7B2C\u4E00\u3001\u4E8C\u4F4D\u6570\u503C\u7684\u6837\u5F0F\u3002",paraId:6,tocIndex:7},{value:"\u53EF\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"timeSliceStyle",paraId:7,tocIndex:8},{value:" \u5B9A\u5236\u5012\u8BA1\u65F6\u6BCF\u4E2A\u65F6\u95F4\u7247\u7684\u6837\u5F0F\u3002",paraId:7,tocIndex:8},{value:"\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u4F1A\u89E6\u53D1 ",paraId:8,tocIndex:9},{value:"onFinish",paraId:8,tocIndex:9},{value:" \u4E8B\u4EF6\u3002",paraId:8,tocIndex:9},{value:"\u5012\u8BA1\u65F6\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1 ",paraId:9,tocIndex:10},{value:"onChange",paraId:9,tocIndex:10},{value:" \u4E8B\u4EF6\u3002",paraId:9,tocIndex:10},{value:"\u53EF\u901A\u8FC7 ",paraId:10,tocIndex:11},{value:"renderContent",paraId:10,tocIndex:11},{value:" \u81EA\u5B9A\u4E49\u6E32\u67D3\u5012\u8BA1\u65F6\u7EC4\u4EF6\u5185\u5BB9\u3002",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"remainingTime",paraId:11,tocIndex:13},{value:"\u5012\u8BA1\u65F6\u5269\u4F59\u65F6\u95F4\uFF0C\u662F\u4E00\u4E2A\u65F6\u95F4\u6BB5\uFF08\u5355\u4F4D\u6BEB\u79D2\uFF09\uFF0C\u4E0EendTimestamp\u4E92\u65A5",paraId:11,tocIndex:13},{value:"number",paraId:11,tocIndex:13},{value:"0",paraId:11,tocIndex:13},{value:"endTimestamp",paraId:11,tocIndex:13},{value:"\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u95F4\u6233\uFF0C\u662F\u4E00\u4E2A\u65F6\u95F4\u70B9\uFF0C\u4E0EremainingTime\u4E92\u65A5\uFF0C\u4F18\u5148\u7EA7\u6BD4remainingTime\u9AD8",paraId:11,tocIndex:13},{value:"number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"serverTimestamp",paraId:11,tocIndex:13},{value:"\u670D\u52A1\u5668\u65F6\u95F4\u6233\uFF0C\u662F\u4E00\u4E2A\u65F6\u95F4\u70B9\uFF0C\u53EF\u4E0EendTimestamp\u914D\u5408\u4F7F\u7528",paraId:11,tocIndex:13},{value:"number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"format",paraId:11,tocIndex:13},{value:"\u683C\u5F0F\u5316\u5012\u8BA1\u65F6\u5C55\u793A\uFF0C\u53C2\u8003 dayjs",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"HH:mm:ss",paraId:11,tocIndex:13},{value:"unitStyle",paraId:11,tocIndex:13},{value:"\u65F6\u95F4\u5355\u4F4D\u7684\u6837\u5F0F",paraId:11,tocIndex:13},{value:"CSSProperties",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"valueStyle",paraId:11,tocIndex:13},{value:"\u5012\u8BA1\u65F6\u4F4D\u6570\u7684\u6837\u5F0F\uFF0C\u7528\u4E8E\u5B9A\u5236\u7B2C\u4E00\u3001\u7B2C\u4E8C\u4F4D\u6570\u5B57\u7684\u6837\u5F0F",paraId:11,tocIndex:13},{value:"CSSProperties[]",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"timeSliceStyle",paraId:11,tocIndex:13},{value:"\u5404\u65F6\u95F4\u533A\u5757\u7684\u6837\u5F0F\uFF0C\u7528\u4E8E\u5B9A\u5236\u5404\u4E2A\u65F6\u95F4\u5757\u7684\u6837\u5F0F\uFF0C\u82E5\u7B2C\u4E00\u3001\u7B2C\u4E8C\u4F4D\u6570\u5B57\u7684\u6837\u5F0F\u76F8\u540C\uFF0C\u5219\u53EF\u66FF\u4EE3valueStyle",paraId:11,tocIndex:13},{value:"CSSProperties",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onFinish",paraId:11,tocIndex:13},{value:"\u5012\u8BA1\u65F6\u5B8C\u6210\u65F6\u89E6\u53D1",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"\u5012\u8BA1\u65F6\u65F6\u95F4\u53D8\u5316\u65F6\u89E6\u53D1",paraId:11,tocIndex:13},{value:"(data: { value: CurrentTime }) => void;",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"renderContent",paraId:11,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9",paraId:11,tocIndex:13},{value:"(data: CurrentTime) => React.ReactNode;",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u5C5E\u6027",paraId:12,tocIndex:14},{value:"\u8BF4\u660E",paraId:12,tocIndex:14},{value:"\u7C7B\u578B",paraId:12,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:14},{value:"total",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u603B\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2",paraId:12,tocIndex:14},{value:"number",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"years",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u5E74\u6570",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"months",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u6708\u6570",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"days",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u5929\u6570",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"hours",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u5C0F\u65F6",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"minutes",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u5206\u949F",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"seconds",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u79D2\u6570",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"hoursWithDays",paraId:12,tocIndex:14},{value:"\u5269\u4F59\u6574\u6570\u5929\u4F59\u4E0B\u7684\u5C0F\u65F6",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"\u5C5E\u6027",paraId:13,tocIndex:15},{value:"\u8BF4\u660E",paraId:13,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:15},{value:"\u5168\u5C40\u53D8\u91CF",paraId:13,tocIndex:15},{value:"--font-size",paraId:13,tocIndex:15},{value:"\u6587\u6848\u5B57\u4F53\u5927\u5C0F",paraId:13,tocIndex:15},{value:"--bui-text-size-1",paraId:13,tocIndex:15},{value:"--bui-countdown-font-size",paraId:13,tocIndex:15},{value:"--color",paraId:13,tocIndex:15},{value:"\u6587\u6848\u5B57\u4F53\u989C\u8272",paraId:13,tocIndex:15},{value:"--bui-color-fg-default",paraId:13,tocIndex:15},{value:"--bui-countdown-color",paraId:13,tocIndex:15},{value:"--font-weight",paraId:13,tocIndex:15},{value:"\u6587\u6848\u5B57\u4F53\u5B57\u91CD",paraId:13,tocIndex:15},{value:"--bui-font-weight-normal",paraId:13,tocIndex:15},{value:"--bui-countdown-font-weight",paraId:13,tocIndex:15},{value:"--slice-unit-margin",paraId:13,tocIndex:15},{value:"\u5206\u9694\u7B26\u95F4\u8DDD",paraId:13,tocIndex:15},{value:"0 2px",paraId:13,tocIndex:15},{value:"--bui-countdown-slice-unit-margin",paraId:13,tocIndex:15}]},547:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u7528\u4E8E\u91CD\u8981\u4FE1\u606F\u7684\u544A\u77E5\u6216\u64CD\u4F5C\u7684\u53CD\u9988\uFF0C\u652F\u6301",paraId:0,tocIndex:0},{value:"Dialog",paraId:0,tocIndex:0},{value:",",paraId:0,tocIndex:0},{value:"Dialog.confirm",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"Dialog.prompt",paraId:0,tocIndex:0},{value:`\u3002
\u63A8\u8350Hooks\u8C03\u7528\u65B9\u5F0F\uFF0C\u9759\u6001\u65B9\u6CD5\u65E0\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\uFF0CThemeProvider\u6570\u636E\u4E0D\u4F1A\u751F\u6548\uFF0C\u56E0\u6B64\u63A8\u8350`,paraId:0,tocIndex:0},{value:"Dialog.useDialog",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u652F\u6301\u8BFB\u53D6context\u7684contextHolder\uFF0C\u901A\u8FC7\u9876\u5C42\u6CE8\u518C\u65B9\u6CD5\u4EE3\u66FF",paraId:0,tocIndex:0},{value:"Dialog",paraId:0,tocIndex:0},{value:"\u9759\u6001\u65B9\u6CD5\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528",paraId:1,tocIndex:3},{value:"Dialog",paraId:1,tocIndex:3},{value:"\uFF08\u9ED8\u8BA4\u7C7B\u578B\u662Fconfirm\uFF09\u6216",paraId:1,tocIndex:3},{value:"Dialog.confirm",paraId:1,tocIndex:3},{value:"\u6765\u5C55\u793A\u786E\u8BA4\u6846\u3002",paraId:1,tocIndex:3},{value:"Dialog.confirm",paraId:1,tocIndex:3},{value:" \u8FD4\u56DE",paraId:1,tocIndex:3},{value:"Promise",paraId:1,tocIndex:3},{value:"\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8FD4\u56DE\u503C\u6765\u5224\u65AD\u7528\u6237\u662F\u70B9\u51FB\u7684\u786E\u8BA4\u8FD8\u662F\u53D6\u6D88",paraId:1,tocIndex:3},{value:"\u4F7F\u7528",paraId:2,tocIndex:5},{value:"onConfirm",paraId:2,tocIndex:5},{value:"\u6765\u5B9A\u4E49\u70B9\u51FB\u786E\u8BA4\u65F6\u56DE\u8C03\u3002",paraId:2,tocIndex:5},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:3,tocIndex:6},{value:"header",paraId:3,tocIndex:6},{value:", ",paraId:3,tocIndex:6},{value:"message",paraId:3,tocIndex:6},{value:"\u6765\u5206\u522B\u81EA\u5B9A\u4E49\u6807\u9898\u3001\u5185\u5BB9\u533A\u57DF\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528",paraId:3,tocIndex:6},{value:"confirmText",paraId:3,tocIndex:6},{value:"\u548C",paraId:3,tocIndex:6},{value:"cancelText",paraId:3,tocIndex:6},{value:"\u6765\u81EA\u5B9A\u4E49\u53D6\u6D88\u548C\u786E\u5B9A\u6309\u94AE\u5185\u5BB9\u3002",paraId:3,tocIndex:6},{value:"\u4F7F\u7528",paraId:4,tocIndex:7},{value:"dialog.prompt",paraId:4,tocIndex:7},{value:"\u6765\u5C55\u793A\u63D0\u793A\u5BF9\u8BDD\u6846\u3002\u53EF\u4EE5\u4F7F\u7528",paraId:4,tocIndex:7},{value:"placeholder",paraId:4,tocIndex:7},{value:"\u6765\u81EA\u5B9A\u4E49\u5360\u4F4D\u6587\u672C\u3002\u540C\u65F6\u652F\u6301",paraId:4,tocIndex:7},{value:"InputProps",paraId:4,tocIndex:7},{value:"\u900F\u4F20\u5230\u5185\u90E8",paraId:4,tocIndex:7},{value:"Input",paraId:4,tocIndex:7},{value:"\u7EC4\u4EF6\u4E2D\uFF0C\u53C2\u8003",paraId:4,tocIndex:7},{value:"Input",paraId:5,tocIndex:7},{value:"\u3002",paraId:4,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:9},{value:"\u8BF4\u660E",paraId:6,tocIndex:9},{value:"\u7C7B\u578B",paraId:6,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:9},{value:"header",paraId:6,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u9875\u5934",paraId:6,tocIndex:9},{value:"React.ReactNode",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"message",paraId:6,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6D88\u606F",paraId:6,tocIndex:9},{value:"React.ReactNode",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"confirmText",paraId:6,tocIndex:9},{value:"\u786E\u8BA4\u6309\u94AE\u6587\u6848",paraId:6,tocIndex:9},{value:"React.ReactNode",paraId:6,tocIndex:9},{value:"\u786E\u8BA4",paraId:6,tocIndex:9},{value:"cancelText",paraId:6,tocIndex:9},{value:"\u53D6\u6D88\u6309\u94AE\u6587\u6848",paraId:6,tocIndex:9},{value:"React.ReactNode",paraId:6,tocIndex:9},{value:"\u53D6\u6D88",paraId:6,tocIndex:9},{value:"onConfirm",paraId:6,tocIndex:9},{value:"\u786E\u5B9A\u6309\u94AE\u56DE\u8C03",paraId:6,tocIndex:9},{value:"(val?: string) => void | Promise<void>;",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"onCancel",paraId:6,tocIndex:9},{value:"\u53D6\u6D88\u6309\u94AE\u56DE\u8C03",paraId:6,tocIndex:9},{value:"() =>void | Promise<void>",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"ConfirmOptions",paraId:7,tocIndex:9},{value:"\u7684\u53D6\u503C\u540C",paraId:7,tocIndex:9},{value:"DialogOptions",paraId:7,tocIndex:9},{value:"DialogOptions",paraId:8,tocIndex:9},{value:" \u7EE7\u627F\u81EA ",paraId:8,tocIndex:9},{value:"ModalProps",paraId:8,tocIndex:9},{value:", \u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:8,tocIndex:9},{value:"Modal API",paraId:9,tocIndex:9},{value:"Dialog.prompt",paraId:10,tocIndex:10},{value:" \u63A5\u53D7\u7684\u53C2\u6570\u540C ",paraId:10,tocIndex:10},{value:"Dialog.confirm",paraId:10,tocIndex:10},{value:", \u6B64\u5916\uFF0C\u5B83\u8FD8\u989D\u5916\u652F\u6301\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:10,tocIndex:10},{value:"\u5C5E\u6027",paraId:11,tocIndex:10},{value:"\u8BF4\u660E",paraId:11,tocIndex:10},{value:"\u7C7B\u578B",paraId:11,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:10},{value:"placeholder",paraId:11,tocIndex:10},{value:"\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C",paraId:11,tocIndex:10},{value:"string",paraId:11,tocIndex:10},{value:"\u8BF7\u5728\u6B64\u5904\u8F93\u5165",paraId:11,tocIndex:10},{value:"InputProps",paraId:11,tocIndex:10},{value:"\u900F\u4F20\u7ED9\u5185\u90E8",paraId:11,tocIndex:10},{value:"Input",paraId:11,tocIndex:10},{value:"\u7EC4\u4EF6\u7684\u5C5E\u6027",paraId:11,tocIndex:10},{value:"Partial<InputProps>",paraId:11,tocIndex:10},{value:"-",paraId:11,tocIndex:10},{value:"\u65B9\u6CD5\u540D",paraId:12,tocIndex:11},{value:"\u8BF4\u660E",paraId:12,tocIndex:11},{value:"\u53C2\u6570",paraId:12,tocIndex:11},{value:"\u8FD4\u56DE\u503C",paraId:12,tocIndex:11},{value:"Dialog",paraId:12,tocIndex:11},{value:"\u5C55\u793A\u786E\u8BA4\u6846",paraId:12,tocIndex:11},{value:"DialogOptions | string",paraId:12,tocIndex:11},{value:"DialogPromise",paraId:12,tocIndex:11},{value:"Dialog.confirm",paraId:12,tocIndex:11},{value:"\u5C55\u793A\u786E\u8BA4\u6846",paraId:12,tocIndex:11},{value:"ConfirmOptions | string",paraId:12,tocIndex:11},{value:"DialogPromise",paraId:12,tocIndex:11},{value:"Dialog.prompt",paraId:12,tocIndex:11},{value:"\u5C55\u793A\u63D0\u793A\u5BF9\u8BDD\u6846",paraId:12,tocIndex:11},{value:"PromptOptions | string",paraId:12,tocIndex:11},{value:"DialogPromise",paraId:12,tocIndex:11},{value:"\u5C5E\u6027",paraId:13,tocIndex:12},{value:"\u8BF4\u660E",paraId:13,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:12},{value:"\u5168\u5C40\u53D8\u91CF",paraId:13,tocIndex:12},{value:"--max-width",paraId:13,tocIndex:12},{value:"\u5BF9\u8BDD\u6846\u6700\u5927\u5BBD\u5EA6",paraId:13,tocIndex:12},{value:"300px",paraId:13,tocIndex:12},{value:"--bui-dialog-max-width",paraId:13,tocIndex:12},{value:"--border-radius",paraId:13,tocIndex:12},{value:"\u5BF9\u8BDD\u6846\u5706\u89D2",paraId:13,tocIndex:12},{value:"--bui-shape-radius-drawer",paraId:13,tocIndex:12},{value:"--bui-dialog-border-radius",paraId:13,tocIndex:12},{value:"--title-padding",paraId:13,tocIndex:12},{value:"\u6807\u9898\u680F\u5185\u8FB9\u8DDD",paraId:13,tocIndex:12},{value:"0 40px 9px",paraId:13,tocIndex:12},{value:"--bui-dialog-title-padding",paraId:13,tocIndex:12},{value:"--desc-padding",paraId:13,tocIndex:12},{value:"\u63CF\u8FF0\u6587\u6848\u5185\u8FB9\u8DDD",paraId:13,tocIndex:12},{value:"0 24px",paraId:13,tocIndex:12},{value:"--bui-dialog-desc-padding",paraId:13,tocIndex:12},{value:"--footer-margin-top",paraId:13,tocIndex:12},{value:"\u5E95\u90E8\u4E0A\u8FB9\u8DDD",paraId:13,tocIndex:12},{value:"15px",paraId:13,tocIndex:12},{value:"--bui-dialog-footer-margin-top",paraId:13,tocIndex:12},{value:"--button-height",paraId:13,tocIndex:12},{value:"\u6309\u94AE\u9AD8\u5EA6",paraId:13,tocIndex:12},{value:"53px",paraId:13,tocIndex:12},{value:"--bui-dialog-button-height",paraId:13,tocIndex:12},{value:"--button-line-height",paraId:13,tocIndex:12},{value:"\u6309\u94AE\u884C\u9AD8",paraId:13,tocIndex:12},{value:"25px",paraId:13,tocIndex:12},{value:"--bui-dialog-button-line-height",paraId:13,tocIndex:12},{value:"--button-padding",paraId:13,tocIndex:12},{value:"\u6309\u94AE\u5185\u8FB9\u8DDD",paraId:13,tocIndex:12},{value:"12px 0 13px",paraId:13,tocIndex:12},{value:"--bui-dialog-button-padding",paraId:13,tocIndex:12},{value:"--button-font-size",paraId:13,tocIndex:12},{value:"\u6309\u94AE\u5B57\u53F7",paraId:13,tocIndex:12},{value:"17px",paraId:13,tocIndex:12},{value:"--bui-dialog-button-font-size",paraId:13,tocIndex:12},{value:"--button-border-left",paraId:13,tocIndex:12},{value:"\u6309\u94AE\u5DE6\u8FB9\u6846",paraId:13,tocIndex:12},{value:"1px solid rgba(0, 0, 0, 0.05)",paraId:13,tocIndex:12},{value:"--bui-dialog-button-border-left",paraId:13,tocIndex:12},{value:"--button-active-background-color",paraId:13,tocIndex:12},{value:"\u6309\u94AE\u6FC0\u6D3B\u72B6\u6001\u80CC\u666F\u8272",paraId:13,tocIndex:12},{value:"rgba(54, 57, 64, 0.05)",paraId:13,tocIndex:12},{value:"--bui-dialog-button-active-background-color",paraId:13,tocIndex:12}]},68664:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u5206\u5272\u7EBF\uFF0C\u5E38\u7528\u4E8E\u5BF9\u5217\u8868\u6216\u8005\u5E03\u5C40\u4E2D\u7684\u7EC4\u4EF6\u5185\u5BB9\u8FDB\u884C\u5206\u7EC4\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u7684\u5206\u5272\u7EBF\u662F\u4E00\u6761\u7EC6\u7EBF\u3002",paraId:1,tocIndex:2},{value:"\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7",paraId:2,tocIndex:3},{value:"dashed",paraId:2,tocIndex:3},{value:"\u5C5E\u6027\u6765\u63A7\u5236\u5206\u5272\u7EBF\u4E3A\u865A\u7EBF\u8FD8\u662F\u5B9E\u7EBF\u3002",paraId:2,tocIndex:3},{value:`\u9ED8\u8BA4\u7684\u5206\u5272\u7EBF\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u6211\u4EEC\u4E5F\u63D0\u4F9B\u6C34\u5E73\u65B9\u5411\u5206\u5272\u7EBF\u3002
\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7`,paraId:3,tocIndex:4},{value:"direction",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u6765\u63A7\u5236\u5206\u5272\u7EBF\u7684\u65B9\u5411\u3002",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u5206\u5272\u7EBF\u6491\u6EE1\u7236\u5143\u7D20\u5BBD\u5EA6/\u9AD8\u5EA6\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7",paraId:4,tocIndex:7},{value:"size",paraId:4,tocIndex:7},{value:"\u6765\u5B9A\u5236\u5206\u5272\u7EBF\u5C3A\u5BF8\u3002",paraId:4,tocIndex:7},{value:"\u60A8\u8FD8\u53EF\u4EE5\u6E32\u67D3\u5E26\u6709\u5185\u5BB9\u7684\u5206\u5272\u7EBF\u3002\u901A\u8FC7",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:`\u900F\u4F20\u6587\u6848\u3002
\u76EE\u524D\u4EC5`,paraId:5,tocIndex:10},{value:"direction",paraId:5,tocIndex:10},{value:"\u4E3A",paraId:5,tocIndex:10},{value:"horizontal",paraId:5,tocIndex:10},{value:"\u65F6\u652F\u6301\u3002",paraId:5,tocIndex:10},{value:"\u5BF9\u4E8E\u5176\u4ED6\u7279\u6B8A\u6837\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u884C\u5B9A\u5236\uFF0C\u4F8B\u5982\u5B9A\u5236\u5206\u5272\u7EBF\u7C97\u7EC6\u3002",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:13},{value:"\u8BF4\u660E",paraId:7,tocIndex:13},{value:"\u7C7B\u578B",paraId:7,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:13},{value:"direction",paraId:7,tocIndex:13},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:7,tocIndex:13},{value:"horizontal",paraId:7,tocIndex:13},{value:" \uFF5C ",paraId:7,tocIndex:13},{value:"vertical",paraId:7,tocIndex:13},{value:"vertical",paraId:7,tocIndex:13},{value:"size",paraId:7,tocIndex:13},{value:"\u5206\u5272\u7EBF\u5C3A\u5BF8",paraId:7,tocIndex:13},{value:"string",paraId:7,tocIndex:13},{value:"-",paraId:7,tocIndex:13},{value:"dashed",paraId:7,tocIndex:13},{value:"\u662F\u5426\u4E3A\u865A\u7EBF",paraId:7,tocIndex:13},{value:"boolean",paraId:7,tocIndex:13},{value:"false",paraId:7,tocIndex:13},{value:"\u5C5E\u6027",paraId:8,tocIndex:14},{value:"\u8BF4\u660E",paraId:8,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:14},{value:"\u5168\u5C40\u53D8\u91CF",paraId:8,tocIndex:14},{value:"--height",paraId:8,tocIndex:14},{value:"\u5206\u5272\u7EBF\u9AD8\u5EA6",paraId:8,tocIndex:14},{value:"100%",paraId:8,tocIndex:14},{value:"--bui-divider-height",paraId:8,tocIndex:14},{value:"--width",paraId:8,tocIndex:14},{value:"\u5206\u5272\u7EBF\u5BBD\u5EA6",paraId:8,tocIndex:14},{value:"100%",paraId:8,tocIndex:14},{value:"--bui-divider-width",paraId:8,tocIndex:14},{value:"--border-width",paraId:8,tocIndex:14},{value:"\u5206\u5272\u7EBF\u7C97\u7EC6(\u6240\u6709\u5F62\u5F0F\u7684\u5206\u5272\u7EBF\u5747\u53D7\u6B64\u63A7\u5236)",paraId:8,tocIndex:14},{value:"1px",paraId:8,tocIndex:14},{value:"--bui-divider-border-width",paraId:8,tocIndex:14},{value:"--line-width",paraId:8,tocIndex:14},{value:"\u53EF\u63D2\u5165\u6587\u6848\u7684\u5206\u5272\u7EBF\u957F\u5EA6",paraId:8,tocIndex:14},{value:"40px",paraId:8,tocIndex:14},{value:"--bui-divider-line-width",paraId:8,tocIndex:14}]},63118:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u5C4F\u5E55\u8FB9\u7F18\u6ED1\u51FA\u7684\u6D6E\u5C42\u9762\u677F\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"open",paraId:1,tocIndex:2},{value:" \u4EE5\u53CA ",paraId:1,tocIndex:2},{value:"onClose",paraId:1,tocIndex:2},{value:" \u63A7\u5236\u62BD\u5C49\u662F\u5426\u5C55\u793A",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u4ECE\u5E95\u90E8\u51FA\u73B0\u3001\u652F\u6301\u901A\u8FC7\u8BBE\u7F6E ",paraId:2,tocIndex:3},{value:"anchor",paraId:2,tocIndex:3},{value:" \u63A7\u5236\u51FA\u73B0\u65B9\u5411\uFF0C\u9ED8\u8BA4\u662F\u4ECE\u5E95\u90E8\u51FA\u73B0",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u5C06 Drawer \u6E32\u67D3\u5230\u9875\u9762\u7684\u6839\u8282\u70B9\u4E2D\uFF0CH5\u662F",paraId:3,tocIndex:5},{value:"document.body",paraId:3,tocIndex:5},{value:", \u5C0F\u7A0B\u5E8F\u662F",paraId:3,tocIndex:5},{value:"page\u8282\u70B9",paraId:3,tocIndex:5},{value:"\u3002",paraId:3,tocIndex:5},{value:"\u5C5E\u6027",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"anchor",paraId:4,tocIndex:6},{value:"Drawer \u51FA\u73B0\u7684\u4F4D\u7F6E",paraId:4,tocIndex:6},{value:"left",paraId:4,tocIndex:6},{value:" | ",paraId:4,tocIndex:6},{value:"top",paraId:4,tocIndex:6},{value:" | ",paraId:4,tocIndex:6},{value:"right",paraId:4,tocIndex:6},{value:" | ",paraId:4,tocIndex:6},{value:"bottom",paraId:4,tocIndex:6},{value:"text",paraId:4,tocIndex:6},{value:"open",paraId:4,tocIndex:6},{value:"\u662F\u5426\u663E\u793A",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"hideBackdrop",paraId:4,tocIndex:6},{value:"\u662F\u5426\u9690\u85CF\u906E\u7F69\u5C42",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"container",paraId:4,tocIndex:6},{value:"\u62BD\u5C49\u6302\u8F7D\u7684\u5143\u7D20\u8282\u70B9",paraId:4,tocIndex:6},{value:"ModalProps['container']",paraId:4,tocIndex:6},{value:"\u9875\u9762\u8DDF\u8282\u70B9",paraId:4,tocIndex:6},{value:"SlideProps",paraId:4,tocIndex:6},{value:"Slide \u52A8\u753B\u7684 props",paraId:4,tocIndex:6},{value:"Partial<SlideProps>",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"transitionDuration",paraId:4,tocIndex:6},{value:"\u52A8\u753B\u6267\u884C\u65F6\u95F4",paraId:4,tocIndex:6},{value:"number | { appear?: number, enter?: number, exit?: number }",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"onClose",paraId:4,tocIndex:6},{value:"\u5173\u95ED\u62BD\u5C49\u56DE\u8C03",paraId:4,tocIndex:6},{value:"ModalProps['onClose']",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"disablePortal",paraId:4,tocIndex:6},{value:"\u7981\u6B62 Portal\u80FD\u529B",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"contentProps",paraId:4,tocIndex:6},{value:"\u62BD\u5C49\u5185\u5BB9\u5143\u7D20\u8282\u70B9\u7684 props",paraId:4,tocIndex:6},{value:"React.HTMLAttributes<HTMLDivElement>",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"Drawer",paraId:5,tocIndex:6},{value:" \u7EE7\u627F\u81EA ",paraId:5,tocIndex:6},{value:"Modal",paraId:5,tocIndex:6},{value:" \u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:5,tocIndex:6},{value:"Modal API",paraId:6,tocIndex:6}]},98583:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u4F7F\u7528Transition\u5C01\u88C5\u7684\u57FA\u7840\u6DE1\u5165\u6DE1\u51FA\u52A8\u753B",paraId:0,tocIndex:0},{value:"\u5F53",paraId:1,tocIndex:3},{value:"appear",paraId:1,tocIndex:3},{value:"\u548C",paraId:1,tocIndex:3},{value:"in",paraId:1,tocIndex:3},{value:"\u90FD\u4E3A",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:`\u65F6
\u7EC4\u4EF6\u4F1A\u5728\u6302\u8F7D\u65F6\u7ACB\u5373\u64AD\u653E\u52A8\u753B`,paraId:1,tocIndex:3},{value:"\u4F7F\u7528",paraId:2,tocIndex:4},{value:"mountOnEnter",paraId:2,tocIndex:4},{value:`\u4F7F\u5F97\u9996\u6B21in\u65F6\u624D\u6302\u8F7D\u7EC4\u4EF6
\u4F7F\u7528`,paraId:2,tocIndex:4},{value:"unmountOnExit",paraId:2,tocIndex:4},{value:"\u4F7F\u5F97\u6BCF\u6B21\u9000\u51FA\u65F6\u90FD\u5378\u8F7D\u7EC4\u4EF6",paraId:2,tocIndex:4},{value:"Fade",paraId:3,tocIndex:5},{value:" \u7EE7\u627F\u81EA ",paraId:3,tocIndex:5},{value:"Transition",paraId:3,tocIndex:5},{value:" \u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:3,tocIndex:5},{value:"Transition",paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"in",paraId:5,tocIndex:6},{value:"\u662F\u5426\u8FDB\u5165",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"appear",paraId:5,tocIndex:6},{value:"\u6302\u8F7D\u65F6\u662F\u5426\u64AD\u653E\u52A8\u753B",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"timeout",paraId:5,tocIndex:6},{value:"\u52A8\u753B\u65F6\u95F4\u914D\u7F6E",paraId:5,tocIndex:6},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"delay",paraId:5,tocIndex:6},{value:"\u52A8\u753B\u5EF6\u8FDF\u914D\u7F6E",paraId:5,tocIndex:6},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"enter",paraId:5,tocIndex:6},{value:"\u662F\u5426\u64AD\u653E\u8FDB\u5165\u52A8\u753B",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"true",paraId:5,tocIndex:6},{value:"exit",paraId:5,tocIndex:6},{value:"\u662F\u5426\u64AD\u653E\u9000\u51FA\u52A8\u753B",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"true",paraId:5,tocIndex:6},{value:"mountOnEnter",paraId:5,tocIndex:6},{value:"\u9996\u6B21\u8FDB\u5165\u65F6\u518D\u6302\u8F7Dchildren",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"unmountOnExit",paraId:5,tocIndex:6},{value:"\u9000\u51FA\u65F6\u5378\u8F7Dchildren",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"onEnter",paraId:5,tocIndex:6},{value:"\u8FDB\u5165\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onEntering",paraId:5,tocIndex:6},{value:"\u8FDB\u5165\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onEntered",paraId:5,tocIndex:6},{value:"\u8FDB\u5165\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onExit",paraId:5,tocIndex:6},{value:"\u9000\u51FA\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onExiting",paraId:5,tocIndex:6},{value:"\u9000\u51FA\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onExited",paraId:5,tocIndex:6},{value:"\u9000\u51FA\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:6},{value:"node=>void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"easing",paraId:5,tocIndex:6},{value:"\u8865\u95F4\uFF0C\u5373transition-timing-function",paraId:5,tocIndex:6},{value:"string | {enter, exit}",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6}]},96947:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u56FE\u6807\u6309\u94AE\u662F\u4E00\u79CD\u53EA\u663E\u793A\u4E00\u4E2A\u56FE\u6807\u800C\u4E0D\u663E\u793A\u6587\u672C\u6807\u7B7E\u7684\u6309\u94AE\u3002\u4E3B\u8981\u7528\u4E8E\u63A7\u5236\u680F\u3001\u5DE5\u5177\u680F\uFF0C\u5F53\u9700\u8981\u4E00\u4E2A\u7D27\u51D1\u7684\u6309\u94AE\u65F6\u5B83\u4EEC\u4E5F\u5341\u5206\u6709\u7528",paraId:0,tocIndex:0},{value:"\u6309\u94AE\u652F\u6301 ",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u6309\u94AE",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u63CF\u8FB9\u6309\u94AE",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"\u586B\u5145\u6309\u94AE",paraId:1,tocIndex:2},{value:" \u4E09\u79CD\u5C55\u793A\u5F62\u6001",paraId:1,tocIndex:2},{value:"\u6309\u94AE\u652F\u6301 ",paraId:2,tocIndex:3},{value:"\u5706\u5F62",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"\u5706\u89D2",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"\u6B63\u65B9\u5F62",paraId:2,tocIndex:3},{value:" \u4E09\u79CD\u5F62\u72B6",paraId:2,tocIndex:3},{value:"\u6309\u94AE\u6709\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:4,tocIndex:4},{value:"size",paraId:4,tocIndex:4},{value:" \u4E3A large small \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5927\u3001\u5C0F\u3002\u82E5\u4E0D\u8BBE\u7F6E ",paraId:4,tocIndex:4},{value:"size",paraId:4,tocIndex:4},{value:"\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u4E2D\u7B49\u5C3A\u5BF8\u3002",paraId:4,tocIndex:4},{value:"\u6309\u94AE\u652F\u6301 ",paraId:5,tocIndex:5},{value:"primary",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"success",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"info",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"warning",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"danger",paraId:5,tocIndex:5},{value:" \u4E3B\u9898\u5B9A\u4E49\u3002\u82E5\u4E0D\u8BBE\u7F6Ecolor\uFF0C\u5219\u9ED8\u8BA4\u4E3A",paraId:5,tocIndex:5},{value:"default",paraId:5,tocIndex:5},{value:"\u901A\u8FC7 disabled \u5C5E\u6027\u6765\u7981\u7528\u6309\u94AE\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u6309\u94AE\u4E0D\u53EF\u70B9\u51FB\u3002",paraId:6,tocIndex:6},{value:"\u5C5E\u6027",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"variant",paraId:7,tocIndex:7},{value:"\u6309\u94AE\u7C7B\u578B",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"text",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"contained",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:"color",paraId:7,tocIndex:7},{value:"\u6309\u94AE\u989C\u8272",paraId:7,tocIndex:7},{value:"primary",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"info",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"success",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"warning",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"danger",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:"size",paraId:7,tocIndex:7},{value:"\u6309\u94AE\u5927\u5C0F",paraId:7,tocIndex:7},{value:"small",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"medium",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"large",paraId:7,tocIndex:7},{value:"medium",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"false",paraId:7,tocIndex:7},{value:"startIcon",paraId:7,tocIndex:7},{value:"\u5728\u5B50\u5143\u7D20\u524D\u653E\u5728\u7684\u5185\u5BB9",paraId:7,tocIndex:7},{value:"React.ReactNode",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"openType",paraId:7,tocIndex:7},{value:"\u5FAE\u4FE1\u5F00\u653E\u80FD\u529B",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"onClick",paraId:7,tocIndex:7},{value:"\u70B9\u51FB\u6309\u94AE\u65F6\u7684\u56DE\u8C03",paraId:7,tocIndex:7},{value:"(event: MouseEvent) => void",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"\u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:8,tocIndex:7},{value:"button",paraId:8,tocIndex:7},{value:"\u5C5E\u6027",paraId:9,tocIndex:8},{value:"\u8BF4\u660E",paraId:9,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:8},{value:"\u5168\u5C40\u53D8\u91CF",paraId:9,tocIndex:8},{value:"--bg-color",paraId:9,tocIndex:8},{value:"\u56FE\u6807\u6309\u94AE\u80CC\u666F\u989C\u8272",paraId:9,tocIndex:8},{value:"--bui-color-neutral-5",paraId:9,tocIndex:8},{value:"--bui-icon-btn-bg-color",paraId:9,tocIndex:8},{value:"--color",paraId:9,tocIndex:8},{value:"\u56FE\u6807\u989C\u8272",paraId:9,tocIndex:8},{value:"--bui-color-fg-muted",paraId:9,tocIndex:8},{value:"--bui-icon-btn-color",paraId:9,tocIndex:8},{value:"--icon-size",paraId:9,tocIndex:8},{value:"\u56FE\u6807\u5927\u5C0F",paraId:9,tocIndex:8},{value:"17px",paraId:9,tocIndex:8},{value:"--bui-icon-btn-font-size",paraId:9,tocIndex:8},{value:"--user-area",paraId:9,tocIndex:8},{value:"\u6309\u94AE\u70B9\u51FB\u5B89\u5168\u533A\u57DF\u5927\u5C0F(\u9ED8\u8BA4medium\u5927\u5C0F\u60C5\u51B5\u4E0B)",paraId:9,tocIndex:8},{value:"5px",paraId:9,tocIndex:8},{value:"--bui-icon-btn-padding",paraId:9,tocIndex:8},{value:"--large-font-size",paraId:9,tocIndex:8},{value:"\u5927\u53F7\u6309\u94AE\u5B57\u53F7",paraId:9,tocIndex:8},{value:"23px",paraId:9,tocIndex:8},{value:"--bui-icon-btn-large-font-size",paraId:9,tocIndex:8},{value:"--disabled-opacity",paraId:9,tocIndex:8},{value:"\u7981\u7528\u72B6\u6001\u900F\u660E\u5EA6",paraId:9,tocIndex:8},{value:"0.5",paraId:9,tocIndex:8},{value:"--bui-icon-btn-disabled-opacity",paraId:9,tocIndex:8}]},31053:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u5728img\u6807\u7B7E\u7684\u57FA\u7840\u4E0A\u589E\u52A0\u4E86Placeholder\u548CFallback\u80FD\u529B\uFF0C\u517C\u5BB9\u591A\u7AEF\u539F\u751F\u61D2\u52A0\u8F7D\uFF0C\u66F4\u5B8C\u5584\u7684\u56FE\u7247\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:`\u901A\u8FC7fit\u53C2\u6570\u81EA\u5B9A\u4E49\u586B\u5145\u6A21\u5F0F
`,paraId:1,tocIndex:3},{value:"widthFix",paraId:1,tocIndex:3},{value:"\u548C",paraId:1,tocIndex:3},{value:"heightFix",paraId:1,tocIndex:3},{value:"\u4EC5\u5C0F\u7A0B\u5E8F\u53EF\u7528",paraId:1,tocIndex:3},{value:`\u76F4\u63A5\u4F20\u7ED9Image\u7684\u5C5E\u6027\u4F1A\u51FA\u73B0\u5728\u9876\u5C42\u7684div\u4E0A
\u5982\u679C\u9700\u8981\u4F20\u5230img\u4E0A\uFF0C\u53EF\u4EE5\u4F7F\u7528`,paraId:2,tocIndex:4},{value:"imgProps",paraId:2,tocIndex:4},{value:`\u5F53\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\uFF0C\u4F1A\u5C55\u793Afallback
\u9ED8\u8BA4fallback\u4E0Eplaceholder\u76F8\u540C\uFF0C\u5982\u679C\u5747\u672A\u4F20\u5165\u5219\u6CA1\u6709fallback\u80FD\u529B\u3002
\u4E5F\u53EF\u4EE5\u5355\u72EC\u4F20\u5165fallback\u5BF9\u8C61\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002`,paraId:3,tocIndex:5},{value:`\u5F53\u56FE\u7247\u8FD8\u5728\u52A0\u8F7D\u4E2D\u65F6\uFF0C\u901A\u8FC7placeholder\u53C2\u6570\u4F1A\u5C55\u793A\u5360\u4F4D
\u4F20true\u5219\u5C55\u793A\u4E00\u4E2A\u7070\u5E95\uFF0C\u4E5F\u53EF\u4F20\u5165\u81EA\u5B9A\u4E49\u7684\u5360\u4F4D\u5143\u7D20`,paraId:4,tocIndex:6},{value:"\u5C5E\u6027",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"src",paraId:5,tocIndex:7},{value:"\u56FE\u7247\u5730\u5740",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"lazy",paraId:5,tocIndex:7},{value:"\u4F7F\u7528\u539F\u751F\u61D2\u52A0\u8F7D",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"alt",paraId:5,tocIndex:7},{value:"\u66FF\u4EE3\u6587\u672C",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"fallback",paraId:5,tocIndex:7},{value:"\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u5360\u4F4D",paraId:5,tocIndex:7},{value:"ReactNode",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"placeholder",paraId:5,tocIndex:7},{value:"\u52A0\u8F7D\u4E2D\u7684\u5360\u4F4D",paraId:5,tocIndex:7},{value:"ReactNode | boolean",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"width",paraId:5,tocIndex:7},{value:"\u56FE\u7247\u5BBD\u5EA6",paraId:5,tocIndex:7},{value:"string | number",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"height",paraId:5,tocIndex:7},{value:"\u56FE\u7247\u9AD8\u5EA6",paraId:5,tocIndex:7},{value:"string | number",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"fit",paraId:5,tocIndex:7},{value:"\u5BBD\u9AD8\u9002\u914D\u65B9\u5F0F",paraId:5,tocIndex:7},{value:"contain",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"cover",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"fill",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"none",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"scale-down",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"widthFix",paraId:5,tocIndex:7},{value:"| ",paraId:5,tocIndex:7},{value:"heightFix",paraId:5,tocIndex:7},{value:"fill",paraId:5,tocIndex:7},{value:"webp",paraId:5,tocIndex:7},{value:"\u89E3\u6790webp",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"showMenu",paraId:5,tocIndex:7},{value:"\uFF08\u5C0F\u7A0B\u5E8F\uFF09\u957F\u6309\u83DC\u5355\u914D\u7F6E",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"imgProps",paraId:5,tocIndex:7},{value:"\u900F\u4F20\u5230img\u7684\u53C2\u6570",paraId:5,tocIndex:7},{value:"React.HTMLAttributes<HTMLImageElement>",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"\u5168\u5C40\u53D8\u91CF",paraId:6,tocIndex:8},{value:"--default-background-color",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u5360\u4F4D\u80CC\u666F\u8272",paraId:6,tocIndex:8},{value:"rgba(127, 127, 127, 0.2)",paraId:6,tocIndex:8},{value:"--bui-image-default-background-color",paraId:6,tocIndex:8}]},43460:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u7528\u6237\u8F93\u5165\u5185\u5BB9\uFF0C\u662F\u5BF9\u57FA\u7840\u8F93\u5165\u6846\u7684\u5C01\u88C5\u3002",paraId:0,tocIndex:0},{value:"\u652F\u6301",paraId:1,tocIndex:2},{value:"input",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u7684\u57FA\u7840\u5C5E\u6027\u900F\u4F20\uFF0C\u82E5\u8981\u900F\u4F20\u7684\u5C5E\u6027\u4E0D\u5728\u8BE5\u6587\u6863\u4E2D\uFF0C\u653E\u5165",paraId:1,tocIndex:2},{value:"inputProps",paraId:1,tocIndex:2},{value:"\u5B57\u6BB5\u4E2D\u624D\u4F1A\u900F\u4F20\u81F3\u5185\u90E8",paraId:1,tocIndex:2},{value:"input",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"startIcon",paraId:2,tocIndex:3},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5F00\u59CB\u56FE\u6807\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"endIcon",paraId:3,tocIndex:4},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u7ED3\u675F\u56FE\u6807\u3002",paraId:3,tocIndex:4},{value:"\u542F\u7528 ",paraId:4,tocIndex:5},{value:"clearable",paraId:4,tocIndex:5},{value:" \u540E\uFF0C\u5F53\u8F93\u5165\u6846\u6709\u8F93\u5165\u5185\u5BB9\u4E14\u805A\u7126\u72B6\u6001\u4E0B\u4F1A\u5C55\u793A\u6E05\u9664\u6309\u94AE\uFF0C\u975E\u53D7\u63A7\u72B6\u6001\u4E5F\u4F1A\u6E05\u9664\u8F93\u5165\u6846\u5185\u5BB9\u3002",paraId:4,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:6},{value:"disabled",paraId:5,tocIndex:6},{value:" \u53EF\u7981\u7528\u8F93\u5165\u6846\u3002",paraId:5,tocIndex:6},{value:"\u6839\u636E\u662F\u5426\u4F20\u5165 ",paraId:6,tocIndex:7},{value:"value",paraId:6,tocIndex:7},{value:" \u6765\u5224\u65AD\u662F\u5426\u4E3A\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u975E\u53D7\u63A7\u7EC4\u4EF6\u53EF\u901A\u8FC7 ",paraId:6,tocIndex:7},{value:"inputRef",paraId:6,tocIndex:7},{value:" \u83B7\u53D6\u5143\u7D20\u6765\u63A7\u5236 ",paraId:6,tocIndex:7},{value:"input",paraId:6,tocIndex:7},{value:" \u7684 value\u3002",paraId:6,tocIndex:7},{value:"H5\uFF1A\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"type",paraId:7,tocIndex:8},{value:" \u53EF\u6307\u5B9A\u8F93\u5165\u6846\u7C7B\u578B\uFF0C",paraId:7,tocIndex:8},{value:"type",paraId:7,tocIndex:8},{value:" \u7684\u503C\u5E94\u4E3A\u6807\u51C6 ",paraId:7,tocIndex:8},{value:"HTML5 input type",paraId:7,tocIndex:8},{value:"\u5C0F\u7A0B\u5E8F\uFF1A",paraId:8,tocIndex:8},{value:"type",paraId:8,tocIndex:8},{value:" \u503C\u5728\u4E0D\u540C\u6E20\u9053\u5B9E\u73B0\u6709\u6240\u4E0D\u540C\uFF0C\u53EF\u53C2\u8003",paraId:8,tocIndex:8},{value:"\u5C0F\u7A0B\u5E8F input type",paraId:8,tocIndex:8},{value:"\u5C5E\u6027",paraId:9,tocIndex:9},{value:"\u8BF4\u660E",paraId:9,tocIndex:9},{value:"\u7C7B\u578B",paraId:9,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:9},{value:"defaultValue",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u9ED8\u8BA4\u5185\u5BB9\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"value",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u5185\u5BB9\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"inputProps",paraId:9,tocIndex:9},{value:"\u5185\u90E8",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:"\u6807\u7B7E\u7684\u6807\u51C6\u5C5E\u6027",paraId:9,tocIndex:9},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"inputRef",paraId:9,tocIndex:9},{value:"\u5185\u90E8",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:"\u6807\u7B7E\u7684 ref",paraId:9,tocIndex:9},{value:"React.Ref<HTMLInputElement>",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"name",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:"\u540D\u79F0\u6807\u8BC6",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"type",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:"\u7C7B\u578B\u6807\u8BC6\uFF0C\u5E94\u8BE5\u4E3A\u6709\u6548\u7684 HTML5 input type \u503C \u6216 \u5C0F\u7A0B\u5E8F\u652F\u6301\u7684 type \u503C",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"text",paraId:9,tocIndex:9},{value:"clearable",paraId:9,tocIndex:9},{value:"\u662F\u5426\u5C55\u793A\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"startIcon",paraId:9,tocIndex:9},{value:"\u5E26\u56FE\u6807\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u56FE\u6807",paraId:9,tocIndex:9},{value:"ReactNode",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"endIcon",paraId:9,tocIndex:9},{value:"\u5E26\u56FE\u6807\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u56FE\u6807\uFF0C\u82E5 clearable=true\uFF0C\u5219\u4E24\u4E2A\u56FE\u6807\u90FD\u4F1A\u5C55\u793A",paraId:9,tocIndex:9},{value:"ReactNode",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"placeholder",paraId:9,tocIndex:9},{value:"\u5360\u4F4D\u5185\u5BB9",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"disabled",paraId:9,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"onClear",paraId:9,tocIndex:9},{value:"\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u7684\u56DE\u8C03\uFF0C\u975E\u53D7\u63A7\u72B6\u6001\u4E5F\u4F1A\u6E05\u9664\u8F93\u5165\u6846\u5185\u5BB9",paraId:9,tocIndex:9},{value:"(e: React.SyntheticEvent) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"onChange",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(e: React.ChangeEvent<HTMLInputElement>,data: {value:string}) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"onFocus",paraId:9,tocIndex:9},{value:"\u805A\u7126\u65F6\u7684\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(e: React.SyntheticEvent) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"onBlur",paraId:9,tocIndex:9},{value:"\u5931\u7126\u65F6\u7684\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(e: React.SyntheticEvent) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"\u5C5E\u6027",paraId:10,tocIndex:10},{value:"\u8BF4\u660E",paraId:10,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:10},{value:"\u5168\u5C40\u53D8\u91CF",paraId:10,tocIndex:10},{value:"--height",paraId:10,tocIndex:10},{value:"\u9AD8\u5EA6",paraId:10,tocIndex:10},{value:"32px",paraId:10,tocIndex:10},{value:"--bui-input-height",paraId:10,tocIndex:10},{value:"--padding",paraId:10,tocIndex:10},{value:"\u5185\u8FB9\u8DDD",paraId:10,tocIndex:10},{value:"4px 10px",paraId:10,tocIndex:10},{value:"--bui-input-padding",paraId:10,tocIndex:10},{value:"--icon-start-margin-right",paraId:10,tocIndex:10},{value:"\u5934\u90E8\u6309\u94AE\u53F3\u8FB9\u8DDD",paraId:10,tocIndex:10},{value:"3px",paraId:10,tocIndex:10},{value:"--bui-input-icon-start-margin-right",paraId:10,tocIndex:10},{value:"--icon-end-margin-left",paraId:10,tocIndex:10},{value:"\u5C3E\u90E8\u6309\u94AE\u5DE6\u8FB9\u8DDD",paraId:10,tocIndex:10},{value:"3px",paraId:10,tocIndex:10},{value:"--bui-input-icon-end-margin-left",paraId:10,tocIndex:10},{value:"--disabled-background-color",paraId:10,tocIndex:10},{value:"\u7981\u7528\u72B6\u6001\u80CC\u666F\u8272",paraId:10,tocIndex:10},{value:"rgba(0, 0, 0, 0.04)",paraId:10,tocIndex:10},{value:"--bui-input-disabled-background-color",paraId:10,tocIndex:10}]},79102:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u5217\u8868\u65F6\u4E00\u7EC4\u8FDE\u7EED\u7684\u6587\u672C\u6216\u8005\u56FE\u50CF\uFF0C\u7531\u4E3B\u8981\u64CD\u4F5C\u8DDF\u8865\u5145\u64CD\u4F5C\u7684\u9879\u76EE\u7EC4\u5408\u6210\uFF0C\u5E38\u7528\u4E8E\u6570\u636E\u5C55\u793A\u3002",paraId:0,tocIndex:0},{value:"\u6700\u57FA\u7840\u7684\u5217\u8868\u5C55\u793A\uFF0C\u53EF\u7528\u4E8E\u627F\u8F7D\u6587\u5B57\u3001\u56FE\u7247\u3001\u6BB5\u843D\u7B49\u3002",paraId:1,tocIndex:2},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:2},{value:"ListItem",paraId:2},{value:`\u7EC4\u4EF6\uFF0C\u7528\u6765\u627F\u8F7D\u5217\u8868\u5B50\u9879\u3002
`,paraId:2},{value:"ListItem",paraId:2},{value:"\u7EC4\u4EF6\u5212\u5206\u6210 4 \u4E2A\u533A\u57DF\uFF1A",paraId:2},{value:"ListItemHeader",paraId:2},{value:"\u3001",paraId:2},{value:"ListItemContent",paraId:2},{value:"\u3001",paraId:2},{value:"ListItemExtra",paraId:2},{value:"\u3001",paraId:2},{value:"ListItemFooter",paraId:2},{value:"\u3002",paraId:2},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:3,tocIndex:3},{value:"disabled",paraId:3,tocIndex:3},{value:`\u5C5E\u6027\u6765\u63A7\u5236\u5217\u8868\u7684\u53EF\u70B9\u51FB\u6001\u3002
\u60A8\u53EF\u4EE5\u901A\u8FC7`,paraId:3,tocIndex:3},{value:"ListItem",paraId:3,tocIndex:3},{value:"\u7EC4\u4EF6\u4F20\u9012",paraId:3,tocIndex:3},{value:"disabled",paraId:3,tocIndex:3},{value:"\u5355\u72EC\u63A7\u5236\u5B50\u9879\u7981\u6B62\u70B9\u51FB\u3002",paraId:3,tocIndex:3},{value:"\u5217\u8868\u7EC4\u4EF6\u53EF\u901A\u8FC7",paraId:4,tocIndex:4},{value:"header",paraId:4,tocIndex:4},{value:"\u3001",paraId:4,tocIndex:4},{value:"subheader",paraId:4,tocIndex:4},{value:"\u8BBE\u7F6E\u5217\u8868\u5934\u90E8\u3002",paraId:4,tocIndex:4},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:5,tocIndex:5},{value:"ListItemHeader",paraId:5,tocIndex:5},{value:"\u5B50\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u5236\u5217\u8868\u9879\u5934\u90E8\u64CD\u4F5C\u533A\uFF0C\u5E38\u7528\u4E8E\u5B9A\u5236\u5217\u8868\u9879\u5934\u90E8\u56FE\u6807\u3002",paraId:5,tocIndex:5},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:6,tocIndex:6},{value:"ListItemContent",paraId:6,tocIndex:6},{value:`\u5B50\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u5236\u5217\u8868\u5B50\u9879\u5185\u5BB9\u533A\u57DF\u3002
\u60A8\u53EF\u4EE5\u901A\u8FC7`,paraId:6,tocIndex:6},{value:"primary",paraId:6,tocIndex:6},{value:"\u3001",paraId:6,tocIndex:6},{value:"secondary",paraId:6,tocIndex:6},{value:"\u5C5E\u6027\u8BBE\u7F6E\u5217\u8868\u5B50\u9879\u4E3B\u5185\u5BB9\u533A\u57DF\u4E0E\u526F\u5185\u5BB9\u533A\u57DF\u3002",paraId:6,tocIndex:6},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:7,tocIndex:7},{value:"ListItemFooter",paraId:7,tocIndex:7},{value:"\u5B50\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u5236\u5217\u8868\u9879\u5C3E\u90E8\u533A\u57DF\u3002",paraId:7,tocIndex:7},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:8,tocIndex:8},{value:"ListItemExtra",paraId:8,tocIndex:8},{value:`\u5B50\u7EC4\u4EF6\uFF0C\u7528\u6765\u5B9A\u5236\u5217\u8868\u9879\u53F3\u4FA7\u64CD\u4F5C\u533A\u3002
`,paraId:8,tocIndex:8},{value:"ListItemExtra",paraId:8,tocIndex:8},{value:"\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u7528\u6765\u914D\u7F6E\u5F00\u5173\u3001\u7528\u6765\u5355\u72EC\u63A7\u5236\u5217\u8868\u5B50\u9879\u3002",paraId:8,tocIndex:8},{value:"\u5217\u8868\u7EC4\u4EF6\u9ED8\u8BA4\u5B50\u9879\u4E4B\u524D\u6709\u5206\u5272\u7EBF\uFF0C\u901A\u8FC7\u63D0\u4F9B",paraId:9,tocIndex:9},{value:"dividerProp",paraId:9,tocIndex:9},{value:`\u5C5E\u6027\u900F\u4F20\u5206\u5272\u7EBF\u7EC4\u4EF6\u5C5E\u6027\u3002
\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7`,paraId:9,tocIndex:9},{value:"hideDivider",paraId:9,tocIndex:9},{value:"\u9690\u85CF\u5206\u5272\u7EBF\u3002",paraId:9,tocIndex:9},{value:"\u5217\u8868\u7EC4\u4EF6\u63D0\u4F9B",paraId:10,tocIndex:10},{value:"3",paraId:10,tocIndex:10},{value:"\u79CD\u5927\u5C0F\u5C3A\u5BF8\uFF1A",paraId:10,tocIndex:10},{value:"small",paraId:10,tocIndex:10},{value:"\u3001",paraId:10,tocIndex:10},{value:"medium",paraId:10,tocIndex:10},{value:"\u3001",paraId:10,tocIndex:10},{value:"large",paraId:10,tocIndex:10},{value:"\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:10,tocIndex:10},{value:"size",paraId:10,tocIndex:10},{value:"\u5C5E\u6027\u5B9A\u5236\u8FD9 3 \u79CD\u5C3A\u5BF8\u3002",paraId:10,tocIndex:10},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u8BF4\u660E",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"header",paraId:11,tocIndex:12},{value:"\u5217\u8868\u5934\u90E8\u5185\u5BB9",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"subheader",paraId:11,tocIndex:12},{value:"\u5217\u8868\u5B50\u5934\u90E8\u5185\u5BB9",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"hideDivider",paraId:11,tocIndex:12},{value:"\u662F\u5426\u9690\u85CF\u5206\u5272\u7EBF",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"size",paraId:11,tocIndex:12},{value:"\u5217\u8868\u5C3A\u5BF8",paraId:11,tocIndex:12},{value:"small",paraId:11,tocIndex:12},{value:"\uFF5C",paraId:11,tocIndex:12},{value:"medium",paraId:11,tocIndex:12},{value:"\uFF5C",paraId:11,tocIndex:12},{value:"large",paraId:11,tocIndex:12},{value:"medium",paraId:11,tocIndex:12},{value:"component",paraId:11,tocIndex:12},{value:"\u5217\u8868\u8282\u70B9\u6807\u7B7E",paraId:11,tocIndex:12},{value:"React.ElementType",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:12,tocIndex:13},{value:"\u8BF4\u660E",paraId:12,tocIndex:13},{value:"\u7C7B\u578B",paraId:12,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:13},{value:"endIcon",paraId:12,tocIndex:13},{value:"\u5217\u8868\u5B50\u9879\u53F3\u4FA7\u64CD\u4F5C\u56FE\u6807",paraId:12,tocIndex:13},{value:"ReactNode \uFF5Cboolean",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"disabled",paraId:12,tocIndex:13},{value:"\u5217\u8868\u662F\u5426\u4E0D\u53EF\u70B9\u51FB",paraId:12,tocIndex:13},{value:"boolean",paraId:12,tocIndex:13},{value:"false",paraId:12,tocIndex:13},{value:"hideDivider",paraId:12,tocIndex:13},{value:"\u662F\u5426\u9690\u85CF\u5206\u5272\u7EBF",paraId:12,tocIndex:13},{value:"boolean",paraId:12,tocIndex:13},{value:"false",paraId:12,tocIndex:13},{value:"component",paraId:12,tocIndex:13},{value:"\u6839\u8282\u70B9\u6807\u7B7E",paraId:12,tocIndex:13},{value:"React.ElementType",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u5C5E\u6027",paraId:13,tocIndex:14},{value:"\u8BF4\u660E",paraId:13,tocIndex:14},{value:"\u7C7B\u578B",paraId:13,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:14},{value:"primary",paraId:13,tocIndex:14},{value:"\u4E3B\u8981\u5185\u5BB9",paraId:13,tocIndex:14},{value:"ReactNode",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"secondary",paraId:13,tocIndex:14},{value:"\u6B21\u8981\u5185\u5BB9",paraId:13,tocIndex:14},{value:"ReactNode",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"component",paraId:13,tocIndex:14},{value:"\u6839\u8282\u70B9\u6807\u7B7E",paraId:13,tocIndex:14},{value:"React.ElementType",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"\u5C5E\u6027",paraId:14,tocIndex:15},{value:"\u8BF4\u660E",paraId:14,tocIndex:15},{value:"\u7C7B\u578B",paraId:14,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:15},{value:"component",paraId:14,tocIndex:15},{value:"\u6839\u8282\u70B9\u6807\u7B7E",paraId:14,tocIndex:15},{value:"React.ElementType",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"\u5C5E\u6027",paraId:15,tocIndex:16},{value:"\u8BF4\u660E",paraId:15,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:16},{value:"\u5168\u5C40\u53D8\u91CF",paraId:15,tocIndex:16},{value:"--small-item-padding",paraId:15,tocIndex:16},{value:"\u5C0F\u53F7\u5B50\u9879\u5185\u8FB9\u8DDD",paraId:15,tocIndex:16},{value:"5px 12px",paraId:15,tocIndex:16},{value:"--bui-list-small-item-padding",paraId:15,tocIndex:16},{value:"--medium-item-padding",paraId:15,tocIndex:16},{value:"\u4E2D\u7B49\u5B50\u9879\u5185\u8FB9\u8DDD",paraId:15,tocIndex:16},{value:"18px 12px",paraId:15,tocIndex:16},{value:"--bui-list-medium-item-padding",paraId:15,tocIndex:16},{value:"--large-item-padding",paraId:15,tocIndex:16},{value:"\u5927\u53F7\u5B50\u9879\u5185\u8FB9\u8DDD",paraId:15,tocIndex:16},{value:"20px 12px",paraId:15,tocIndex:16},{value:"--bui-list-large-item-padding",paraId:15,tocIndex:16}]},12566:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u5C55\u793A\u4E00\u4E2A\u52A0\u8F7D\u4E2D\u7684\u56FE\u6807",paraId:0,tocIndex:2},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:1,tocIndex:3},{value:"children",paraId:1,tocIndex:3},{value:"\u5C5E\u6027\u4F20\u9012\u6587\u6848\uFF0C\u975E",paraId:1,tocIndex:3},{value:"ReactNode",paraId:1,tocIndex:3},{value:"\u7C7B\u578B\u7684\u5185\u5BB9\u4F1A\u9ED8\u8BA4\u6DFB\u52A0\u4E00\u5C42DOM\u7ED3\u6784\u6765\u63A7\u5236\u6837\u5F0F\u3002",paraId:1,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:2,tocIndex:4},{value:"direction",paraId:2,tocIndex:4},{value:"\u4F20\u9012",paraId:2,tocIndex:4},{value:"vertical",paraId:2,tocIndex:4},{value:" \uFF5C ",paraId:2,tocIndex:4},{value:"horizontal",paraId:2,tocIndex:4},{value:"\u6765\u63A7\u5236\u884C\u5217\u5C55\u793A\u5F62\u5F0F\u3002",paraId:2,tocIndex:4},{value:"\u901A\u8FC7\u8BBE\u7F6E",paraId:3,tocIndex:5},{value:"IconProps",paraId:3,tocIndex:5},{value:"\u6765\u63A7\u5236\u5185\u90E8\u56FE\u6807",paraId:3,tocIndex:5},{value:"\u5C5E\u6027",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"className",paraId:4,tocIndex:7},{value:"\u7EC4\u4EF6\u7C7B\u540D",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"icon",paraId:4,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807",paraId:4,tocIndex:7},{value:"ReactNode",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"IconProps",paraId:4,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u56FE\u6807",paraId:4,tocIndex:7},{value:"ISvgIconProps",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"direction",paraId:4,tocIndex:7},{value:"\u52A0\u8F7D\u56FE\u6807\u548C\u52A0\u8F7D\u6587\u6848\u7684\u6392\u5217\u65B9\u5F0F",paraId:4,tocIndex:7},{value:"'vertical' | 'horizontal'",paraId:4,tocIndex:7},{value:"'vertical'",paraId:4,tocIndex:7},{value:"children",paraId:4,tocIndex:7},{value:"\u63A7\u5236\u52A0\u8F7D\u6587\u6848\u5185\u5BB9",paraId:4,tocIndex:7},{value:"ReactNode",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"\u5C5E\u6027",paraId:5,tocIndex:8},{value:"\u8BF4\u660E",paraId:5,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:8},{value:"\u5168\u5C40\u53D8\u91CF",paraId:5,tocIndex:8},{value:"--icon-font-size",paraId:5,tocIndex:8},{value:"\u56FE\u6807\u5B57\u53F7",paraId:5,tocIndex:8},{value:"30px",paraId:5,tocIndex:8},{value:"--bui-loading-icon-font-size",paraId:5,tocIndex:8},{value:"--text-padding",paraId:5,tocIndex:8},{value:"\u6587\u6848\u5BB9\u5668\u5185\u8FB9\u8DDD",paraId:5,tocIndex:8},{value:"10px",paraId:5,tocIndex:8},{value:"--bui-loading-text-padding",paraId:5,tocIndex:8},{value:"--animation-duration",paraId:5,tocIndex:8},{value:"\u52A0\u8F7D\u52A8\u753B\u64AD\u653E\u5468\u671F",paraId:5,tocIndex:8},{value:"1.6s",paraId:5,tocIndex:8},{value:"--bui-loading-animation-duration",paraId:5,tocIndex:8}]},18255:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:`\u57FA\u7840\u7684\u6D6E\u5C42\u7EC4\u4EF6\u3002
\u63D0\u4F9B\u4E86\u5728\u4E3B\u89C6\u56FE\u9876\u90E8\u7ED8\u5236\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u5E76\u9694\u7EDD\u4E0B\u5C42\u5185\u5BB9\u4EA4\u4E92\u7684\u80FD\u529B\u3002`,paraId:0,tocIndex:0},{value:`\u4F7F\u7528open\u63A7\u5236\u5F39\u7A97\u7684\u6253\u5F00/\u5173\u95ED
\u70B9\u51FB\u5F39\u7A97\u906E\u7F69\u5C42\u7B49\u5173\u95ED\u7684\u4E8B\u4EF6\u4F1A\u901A\u8FC7onClose\u56DE\u8C03\u8FD4\u56DE`,paraId:1,tocIndex:2},{value:"\u4F7F\u7528",paraId:2,tocIndex:3},{value:"hideBackdrop",paraId:2,tocIndex:3},{value:`\u4E0D\u6E32\u67D3\u5E95\u90E8\u906E\u7F69\uFF08\u4E0D\u89E6\u53D1\u70B9\u51FB\uFF0C\u9700\u81EA\u884C\u5B9E\u73B0\u5173\u95ED\u903B\u8F91\uFF09
\u4F7F\u7528`,paraId:2,tocIndex:3},{value:"BackdropProps",paraId:2,tocIndex:3},{value:"\u7684",paraId:2,tocIndex:3},{value:"invisible",paraId:2,tocIndex:3},{value:"\u4F7F\u5F97\u906E\u7F69\u5C42\u4E0D\u53EF\u89C1\uFF08\u4ECD\u89E6\u53D1\u70B9\u51FB\uFF09",paraId:2,tocIndex:3},{value:`Modal\u4F1A\u533A\u5206\u6BCF\u4E2A\u6ED1\u52A8/\u6EDA\u52A8\u4E8B\u4EF6\u7684\u76EE\u6807\u5E76\u9632\u6B62\u5F39\u5C42\u5C55\u793A\u65F6\u5BF9\u5F39\u5C42\u4E0B\u65B9\u7684\u9875\u9762\u8FDB\u884C\u64CD\u4F5C\u3002
\u5982\u679C\u8FD9\u4E00\u884C\u4E3A\u5E26\u6765\u4E86\u56F0\u6270\uFF0C\u4F7F\u7528`,paraId:3,tocIndex:4},{value:"disableScrollLock",paraId:3,tocIndex:4},{value:"\u5173\u95ED\u8FD9\u4E00\u7279\u6027",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"keepMounted",paraId:4,tocIndex:5},{value:" \u63A7\u5236",paraId:4,tocIndex:5},{value:"open",paraId:4,tocIndex:5},{value:"\u53D8\u4E3A false \u540E\u7EC4\u4EF6\u7684\u6574\u4F53\u5378\u8F7D\u65F6\u673A\u4EE5\u5904\u7406\u53EF\u80FD\u7684\u52A8\u753B\u573A\u666F\uFF08\u4F8B\uFF1A",paraId:4,tocIndex:5},{value:"Drawer\u7EC4\u4EF6",paraId:5,tocIndex:5},{value:`\u62BD\u5C49\u90E8\u5206\u7684\u6ED1\u51FA\u52A8\u6548\uFF09\u3002
\u4F20\u5165 true \u8868\u793A\u73B0\u5728\u8FD8\u4E0D\u5E94\u5378\u8F7D modal\uFF08eg.\u5185\u90E8\u5143\u7D20\u7684\u9000\u51FA\u52A8\u753B\u8FD8\u5728\u8FDB\u884C\u4E2D\uFF09\u3002`,paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:6,tocIndex:6},{value:"\u8BF4\u660E",paraId:6,tocIndex:6},{value:"\u7C7B\u578B",paraId:6,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:6},{value:"open",paraId:6,tocIndex:6},{value:"\u5F39\u5C42\u663E\u793A",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6},{value:"container",paraId:6,tocIndex:6},{value:"Portal\u76EE\u6807\u5BB9\u5668",paraId:6,tocIndex:6},{value:"PortalProps['container']",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"hideBackdrop",paraId:6,tocIndex:6},{value:"\u4E0D\u6E32\u67D3Backdrop",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6},{value:"BackdropProps",paraId:6,tocIndex:6},{value:"\u900F\u4F20\u7ED9Backdrop\u7684\u53C2\u6570",paraId:6,tocIndex:6},{value:"BackdropProps",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"onClose",paraId:6,tocIndex:6},{value:"\u5173\u95ED\u56DE\u8C03",paraId:6,tocIndex:6},{value:"(event, reason) => void",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"disableScrollLock",paraId:6,tocIndex:6},{value:"\u7981\u7528\u6EDA\u52A8\u7A7F\u900F\u9632\u62A4",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6},{value:"disablePortal",paraId:6,tocIndex:6},{value:"\u7981\u7528Portal",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6},{value:"keepMounted",paraId:6,tocIndex:6},{value:"\u4FDD\u6301\u7EC4\u4EF6\u6302\u8F7D",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6}]},25242:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u63D0\u4F9B\u9875\u9762\u7684\u5BFC\u822A\u7EC4\u4EF6\uFF0C\u5E38\u89C1\u4E8E\u79FB\u52A8\u7AEF\u9875\u9762\u7684\u9876\u90E8",paraId:0,tocIndex:0},{value:"\u76F4\u63A5\u5F15\u5165\u7EC4\u4EF6\u5373\u53EF\u5728\u9875\u9762\u5934\u90E8\u6DFB\u52A0\u5BFC\u822A\u680F",paraId:1,tocIndex:2},{value:"\u7EC4\u4EF6\u652F\u6301\u4FEE\u6539\u5DE6\u4FA7\u8FD4\u56DE\u7BAD\u5934\u7684\u6837\u5F0F\uFF0C\u901A\u8FC7\u5411",paraId:2,tocIndex:3},{value:"leftIcon",paraId:2,tocIndex:3},{value:"\u4F20\u9012",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3},{value:"\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4FEE\u6539\u5DE6\u4FA7\u8FD4\u56DE\u7BAD\u5934\u3002\u5F53\u4F20\u53C2\u6570\u4E3A",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"\u7684\u60C5\u51B5\uFF0C\u9690\u85CF\u56FE\u6807\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7\u8BBE\u7F6E",paraId:3,tocIndex:4},{value:"IconProps",paraId:3,tocIndex:4},{value:"\u6765\u63A7\u5236\u5185\u90E8\u56FE\u6807",paraId:3,tocIndex:4},{value:"\u901A\u8FC7\u5411",paraId:4,tocIndex:5},{value:"left",paraId:4,tocIndex:5},{value:"\u5C5E\u6027\u4F20\u9012",paraId:4,tocIndex:5},{value:"ReactNode",paraId:4,tocIndex:5},{value:"\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4FEE\u6539\u8FD4\u56DE\u7BAD\u5934\u5DE6\u4FA7\u7684\u6587\u6848\u5185\u5BB9\u3002",paraId:4,tocIndex:5},{value:"\u7EC4\u4EF6\u652F\u6301\u81EA\u5B9A\u4E49\u6807\u9898\uFF0C\u901A\u8FC7\u5411",paraId:5,tocIndex:6},{value:"title",paraId:5,tocIndex:6},{value:"\u5C5E\u6027\u4F20\u9012",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u5B8C\u6210\u6807\u9898\u7684\u4FEE\u6539\u3002",paraId:5,tocIndex:6},{value:"string",paraId:5,tocIndex:6},{value:"\u7C7B\u578B\u7684\u6807\u9898\u652F\u6301\u8D85\u51FA\u90E8\u5206\u7701\u7565\u5C55\u793A\uFF0C",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u3002",paraId:5,tocIndex:6},{value:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u5411",paraId:6,tocIndex:7},{value:"right",paraId:6,tocIndex:7},{value:"\u5C5E\u6027\u4F20\u9012",paraId:6,tocIndex:7},{value:"ReactNode",paraId:6,tocIndex:7},{value:"\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u6765\u5B8C\u6210\u53F3\u4FA7\u533A\u57DF\u5185\u5BB9\u7684\u81EA\u5B9A\u4E49\uFF0C\u53C2\u8003",paraId:6,tocIndex:7},{value:"@bifrostui/icons",paraId:6,tocIndex:7},{value:"\u4E2D\u7684\u56FE\u6807\u5185\u5BB9\u3002",paraId:6,tocIndex:7},{value:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u5411",paraId:7,tocIndex:8},{value:"fixed",paraId:7,tocIndex:8},{value:"\u5C5E\u6027\u4F20\u9012",paraId:7,tocIndex:8},{value:"true",paraId:7,tocIndex:8},{value:"\u5C06\u5BFC\u822A\u680F\u56FA\u5B9A\u5728\u9875\u9762\u9876\u90E8\uFF0C\u540C\u65F6\u53EF\u4EE5\u8BBE\u7F6E",paraId:7,tocIndex:8},{value:"placeholder",paraId:7,tocIndex:8},{value:"\u5C5E\u6027\u4F20\u9012",paraId:7,tocIndex:8},{value:"true",paraId:7,tocIndex:8},{value:"\u5728\u539F\u6709\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u5360\u4F4D\u5757\u3002",paraId:7,tocIndex:8},{value:"\u5C5E\u6027",paraId:8,tocIndex:10},{value:"\u8BF4\u660E",paraId:8,tocIndex:10},{value:"\u7C7B\u578B",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:10},{value:"className",paraId:8,tocIndex:10},{value:"\u7EC4\u4EF6\u7C7B\u540D",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"title",paraId:8,tocIndex:10},{value:"\u6807\u9898",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"left",paraId:8,tocIndex:10},{value:"\u5BFC\u822A\u680F\u5DE6\u4FA7\u5185\u5BB9\u81EA\u5B9A\u4E49",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"leftIcon",paraId:8,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u7BAD\u5934\uFF0Cfalse\u63A7\u5236\u9690\u85CF",paraId:8,tocIndex:10},{value:"ReactNode | boolean",paraId:8,tocIndex:10},{value:"<ArrowBackwardLargeIcon />",paraId:8,tocIndex:10},{value:"IconProps",paraId:8,tocIndex:10},{value:"\u900F\u4F20\u7ED9\u5185\u90E8\u56FE\u6807\u7684\u5C5E\u6027",paraId:8,tocIndex:10},{value:"ISvgIconProps",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"right",paraId:8,tocIndex:10},{value:"\u5BFC\u822A\u680F\u53F3\u4FA7\u5185\u5BB9\u81EA\u5B9A\u4E49",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"fixed",paraId:8,tocIndex:10},{value:"\u662F\u5426\u56FA\u5B9A\u5728\u9876\u90E8",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"placeholder",paraId:8,tocIndex:10},{value:"\u56FA\u5B9A\u5728\u9876\u90E8\u65F6\uFF0C\u662F\u5426\u5728\u6807\u7B7E\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u7B49\u9AD8\u7684\u5360\u4F4D\u5143\u7D20\uFF08\u6C89\u6D78\u5F0F\u6548\u679C\u573A\u666F\u8003\u8651\u5173\u95ED\uFF09",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"onClickLeft",paraId:8,tocIndex:10},{value:"\u70B9\u51FB\u8FD4\u56DE\u6309\u94AE\u56DE\u8C03\u4E8B\u4EF6",paraId:8,tocIndex:10},{value:"(e: SyntheticEvent<HTMLDivElement) => void",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"\u5C5E\u6027",paraId:9,tocIndex:11},{value:"\u8BF4\u660E",paraId:9,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:11},{value:"\u5168\u5C40\u53D8\u91CF",paraId:9,tocIndex:11},{value:"--width",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u5BBD\u5EA6",paraId:9,tocIndex:11},{value:"100%",paraId:9,tocIndex:11},{value:"--bui-navbar-width",paraId:9,tocIndex:11},{value:"--height",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u9AD8\u5EA6",paraId:9,tocIndex:11},{value:"45px",paraId:9,tocIndex:11},{value:"--bui-navbar-height",paraId:9,tocIndex:11},{value:"--padding",paraId:9,tocIndex:11},{value:"0 8px",paraId:9,tocIndex:11},{value:"--bui-navbar-padding",paraId:9,tocIndex:11},{value:"--title-max-width",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u6807\u9898\u6700\u5927\u5BBD\u5EA6",paraId:9,tocIndex:11},{value:"60%",paraId:9,tocIndex:11},{value:"--bui-navbar-title-max-width",paraId:9,tocIndex:11},{value:"--icon-size",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u56FE\u6807\u5927\u5C0F",paraId:9,tocIndex:11},{value:"30px",paraId:9,tocIndex:11},{value:"--bui-navbar-icon-size",paraId:9,tocIndex:11},{value:"--icon-font-size",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u56FE\u6807\u5B57\u4F53",paraId:9,tocIndex:11},{value:"var(--bui-title-size-3)",paraId:9,tocIndex:11},{value:"--bui-navbar-icon-font-size",paraId:9,tocIndex:11},{value:"--background-color",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u80CC\u666F\u8272",paraId:9,tocIndex:11},{value:"var(--bui-color-white)",paraId:9,tocIndex:11},{value:"--bui-navbar-background-color",paraId:9,tocIndex:11},{value:"--border-bottom",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u5E95\u90E8\u8FB9\u6846\u6837\u5F0F",paraId:9,tocIndex:11},{value:"none",paraId:9,tocIndex:11},{value:"--bui-navbar-border-bottom",paraId:9,tocIndex:11},{value:"--z-index",paraId:9,tocIndex:11},{value:"\u5BFC\u822A\u680F\u9ED8\u8BA4\u5C42\u7EA7",paraId:9,tocIndex:11},{value:"auto",paraId:9,tocIndex:11},{value:"--bui-navbar-z-index",paraId:9,tocIndex:11}]},6739:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9\u5176\u4E2D\u4E00\u9879\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5904\u4E8E\u60EF\u6027\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\u4E0D\u5141\u8BB8\u786E\u8BA4\u5173\u95ED\u9009\u62E9\u5668\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528",paraId:1,tocIndex:2},{value:"open",paraId:1,tocIndex:2},{value:"\u63A7\u5236\u9009\u62E9\u5668\u7684\u6253\u5F00/\u5173\u95ED\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u7B49\u5173\u95ED\u7684\u4E8B\u4EF6\u4F1A\u901A\u8FC7",paraId:1,tocIndex:2},{value:"onClose",paraId:1,tocIndex:2},{value:"\u56DE\u8C03\u8FD4\u56DE",paraId:1,tocIndex:2},{value:"\u4F7F\u7528",paraId:2,tocIndex:3},{value:"title",paraId:2,tocIndex:3},{value:"\u5C5E\u6027\u53EF\u6307\u5B9A\u9009\u62E9\u5668\u6807\u9898\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7",paraId:3,tocIndex:4},{value:"options",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u4F20\u5165\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u591A\u5217\u9009\u62E9\u5668\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7",paraId:4,tocIndex:5},{value:"options",paraId:4,tocIndex:5},{value:"\u5C5E\u6027\u5B50\u9879\u4E2D\u7684",paraId:4,tocIndex:5},{value:"children",paraId:4,tocIndex:5},{value:"\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u7EA7\u8054\u9009\u62E9\u5668\u3002",paraId:4,tocIndex:5},{value:"\u5F02\u6B65\u83B7\u53D6",paraId:5,tocIndex:6},{value:"options",paraId:5,tocIndex:6},{value:"\u6570\u636E\u6E90\u3002",paraId:5,tocIndex:6},{value:"\u901A\u8FC7",paraId:6,tocIndex:7},{value:"value",paraId:6,tocIndex:7},{value:"\u5C5E\u6027\u53EF\u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\u3002",paraId:6,tocIndex:7},{value:"\u53EF\u901A\u8FC7",paraId:7,tocIndex:8},{value:"contentProps",paraId:7,tocIndex:8},{value:"\u5C5E\u6027\u900F\u4F20\u5408\u6CD5\u7684\u5C5E\u6027\u5230\u5185\u90E8\u5185\u5BB9DOM\u5143\u7D20\u4E0A\u3002",paraId:7,tocIndex:8},{value:"\u901A\u8FC7\u76D1\u542C",paraId:8,tocIndex:9},{value:"onConfirm",paraId:8,tocIndex:9},{value:"\uFF0C\u53EF\u83B7\u53D6\u786E\u8BA4\u6309\u94AE\u70B9\u51FB\u7684\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8BE5\u4E8B\u4EF6\u7ED3\u675F\u540E\u4F1A\u89E6\u53D1",paraId:8,tocIndex:9},{value:"onClose",paraId:8,tocIndex:9},{value:"\u4E8B\u4EF6\u3002",paraId:8,tocIndex:9},{value:"\u82E5\u4F20\u5165\u7684 ",paraId:9,tocIndex:10},{value:"value",paraId:9,tocIndex:10},{value:" \u4E0D\u662F ",paraId:9,tocIndex:10},{value:"options",paraId:9,tocIndex:10},{value:" \u7684\u7B49\u957F\u5B50\u96C6\uFF0C\u5728\u5173\u95ED\u9009\u62E9\u5668\u65F6\u4F1A\u81EA\u52A8\u7EA0\u6B63\u56DE\u8C03\u51FD\u6570\u4E2D\u7684 ",paraId:9,tocIndex:10},{value:"value",paraId:9,tocIndex:10},{value:" \u5B57\u6BB5\uFF0C\u4F7F\u5176\u4E3A ",paraId:9,tocIndex:10},{value:"options",paraId:9,tocIndex:10},{value:" \u4E2D\u5B58\u5728\u7684\u9009\u9879\u3002",paraId:9,tocIndex:10},{value:"\u901A\u8FC7\u76D1\u542C",paraId:10,tocIndex:11},{value:"onOptionChange",paraId:10,tocIndex:11},{value:"\uFF0C\u53EF\u83B7\u53D6\u5B9E\u65F6\u83B7\u53D6\u6BCF\u5217\u503C\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u4E8B\u4EF6\u3002",paraId:10,tocIndex:11},{value:"\u901A\u8FC7\u76D1\u542C",paraId:11,tocIndex:12},{value:"onCancel",paraId:11,tocIndex:12},{value:"\uFF0C\u53EF\u83B7\u53D6\u53D6\u6D88\u6309\u94AE\u70B9\u51FB\u7684\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8BE5\u4E8B\u4EF6\u7ED3\u675F\u540E\u4F1A\u89E6\u53D1",paraId:11,tocIndex:12},{value:"onClose",paraId:11,tocIndex:12},{value:"\u4E8B\u4EF6\u3002",paraId:11,tocIndex:12},{value:"\u901A\u8FC7",paraId:12,tocIndex:13},{value:"\u6837\u5F0F\u53D8\u91CF",paraId:13,tocIndex:13},{value:"\u63D0\u4F9B\u7684Tokens\uFF0C\u53EF\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002",paraId:12,tocIndex:13},{value:"\u5C5E\u6027",paraId:14,tocIndex:15},{value:"\u8BF4\u660E",paraId:14,tocIndex:15},{value:"\u7C7B\u578B",paraId:14,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:15},{value:"open",paraId:14,tocIndex:15},{value:"\u662F\u5426\u5C55\u793A\u9009\u62E9\u5668",paraId:14,tocIndex:15},{value:"boolean",paraId:14,tocIndex:15},{value:"false",paraId:14,tocIndex:15},{value:"title",paraId:14,tocIndex:15},{value:"\u6807\u9898",paraId:14,tocIndex:15},{value:"string",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"options",paraId:14,tocIndex:15},{value:"\u5217\u8868\u6570\u636E",paraId:14,tocIndex:15},{value:"IPickerOptionItem[][] | ICascadePickerOptionItem[]",paraId:14,tocIndex:15},{value:"[]",paraId:14,tocIndex:15},{value:"value",paraId:14,tocIndex:15},{value:"\u9009\u4E2D\u7684\u503C",paraId:14,tocIndex:15},{value:"(string | number)[]",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"contentProps",paraId:14,tocIndex:15},{value:"\u62BD\u5C49\u5185\u5BB9DOM\u8282\u70B9\u4E0A\u7684Props",paraId:14,tocIndex:15},{value:"React.HTMLAttributes<HTMLDivElement>",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"onConfirm",paraId:14,tocIndex:15},{value:"\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u5019\u56DE\u8C03",paraId:14,tocIndex:15},{value:"(e: React.SyntheticEvent,data: { value: (string | number)[]; options: ICascadePickerOptionItem[]}) => void",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"onOptionChange",paraId:14,tocIndex:15},{value:"\u9009\u9879\u503C\u53D8\u66F4\u65F6\u7684\u56DE\u8C03",paraId:14,tocIndex:15},{value:"(e: React.SyntheticEvent,data: { value: (string | number)[];options: IPickerOptionItem[][] |ICascadePickerOptionItem[];currentOption: ICascadePickerOptionItem}) => void",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"onCancel",paraId:14,tocIndex:15},{value:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u5019\u56DE\u8C03",paraId:14,tocIndex:15},{value:"(e: React.SyntheticEvent) => void",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"onClose",paraId:14,tocIndex:15},{value:"\u5173\u95ED\u9009\u62E9\u5668\u65F6\u6267\u884C",paraId:14,tocIndex:15},{value:"(e: React.SyntheticEvent,data: {from: string;value: (string | number)[];options: IPickerOptionItem[][] |ICascadePickerOptionItem[]}) => void",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"\u5C5E\u6027",paraId:15,tocIndex:16},{value:"\u8BF4\u660E",paraId:15,tocIndex:16},{value:"\u7C7B\u578B",paraId:15,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:16},{value:"options",paraId:15,tocIndex:16},{value:"\u5355\u5217\u9762\u677F\u7684\u5217\u8868\u6570\u636E",paraId:15,tocIndex:16},{value:"IPickerOptionItem[][] | ICascadePickerOptionItem[]",paraId:15,tocIndex:16},{value:"[]",paraId:15,tocIndex:16},{value:"defaultValue",paraId:15,tocIndex:16},{value:"\u5355\u5217\u9762\u677F\u7684\u9ED8\u8BA4\u503C",paraId:15,tocIndex:16},{value:"string | number",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"columnIndex",paraId:15,tocIndex:16},{value:"\u5217\u7D22\u5F15",paraId:15,tocIndex:16},{value:"number",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"onSelect",paraId:15,tocIndex:16},{value:"\u70B9\u51FB\u9009\u9879\u65F6\u7684\u56DE\u8C03",paraId:15,tocIndex:16},{value:"(e: React.SyntheticEvent,data: {columnOption: IPickerOptionItem[] | ICascadePickerOptionItem;columnIndex: number}) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"\u5C5E\u6027",paraId:16,tocIndex:17},{value:"\u8BF4\u660E",paraId:16,tocIndex:17},{value:"\u7C7B\u578B",paraId:16,tocIndex:17},{value:"\u9ED8\u8BA4\u503C",paraId:16,tocIndex:17},{value:"label",paraId:16,tocIndex:17},{value:"\u9009\u9879\u7684\u6587\u5B57\u5185\u5BB9",paraId:16,tocIndex:17},{value:"string | number",paraId:16,tocIndex:17},{value:"-",paraId:16,tocIndex:17},{value:"value",paraId:16,tocIndex:17},{value:"\u9009\u9879\u5BF9\u5E94\u552F\u4E00\u7684\u503C",paraId:16,tocIndex:17},{value:"string | number",paraId:16,tocIndex:17},{value:"-",paraId:16,tocIndex:17},{value:"\u5C5E\u6027",paraId:17,tocIndex:18},{value:"\u8BF4\u660E",paraId:17,tocIndex:18},{value:"\u7C7B\u578B",paraId:17,tocIndex:18},{value:"\u9ED8\u8BA4\u503C",paraId:17,tocIndex:18},{value:"label",paraId:17,tocIndex:18},{value:"\u9009\u9879\u7684\u6587\u5B57\u5185\u5BB9",paraId:17,tocIndex:18},{value:"string | number",paraId:17,tocIndex:18},{value:"-",paraId:17,tocIndex:18},{value:"value",paraId:17,tocIndex:18},{value:"\u9009\u9879\u5BF9\u5E94\u552F\u4E00\u7684\u503C",paraId:17,tocIndex:18},{value:"string | number",paraId:17,tocIndex:18},{value:"-",paraId:17,tocIndex:18},{value:"children",paraId:17,tocIndex:18},{value:"\u7528\u4E8E\u7EA7\u8054\u9009\u9879",paraId:17,tocIndex:18},{value:"ICascadePickerOptionItem[]",paraId:17,tocIndex:18},{value:"-",paraId:17,tocIndex:18},{value:"Picker",paraId:18,tocIndex:18},{value:" \u7EE7\u627F\u81EA ",paraId:18,tocIndex:18},{value:"Drawer",paraId:18,tocIndex:18},{value:" \u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:18,tocIndex:18},{value:"Drawer API",paraId:19,tocIndex:18},{value:"\u5C5E\u6027",paraId:20,tocIndex:19},{value:"\u8BF4\u660E",paraId:20,tocIndex:19},{value:"\u9ED8\u8BA4\u503C",paraId:20,tocIndex:19},{value:"\u5168\u5C40\u53D8\u91CF",paraId:20,tocIndex:19},{value:"--header-height",paraId:20,tocIndex:19},{value:"\u9009\u62E9\u5668\u5934\u90E8\u9AD8\u5EA6",paraId:20,tocIndex:19},{value:"50px",paraId:20,tocIndex:19},{value:"--bui-picker-header-height",paraId:20,tocIndex:19},{value:"--header-padding",paraId:20,tocIndex:19},{value:"\u9009\u62E9\u5668\u5934\u90E8\u5185\u8FB9\u8DDD",paraId:20,tocIndex:19},{value:"0 var(--bui-spacing-lg)",paraId:20,tocIndex:19},{value:"--bui-picker-header-padding",paraId:20,tocIndex:19},{value:"--cancel-height",paraId:20,tocIndex:19},{value:"\u53D6\u6D88\u6309\u94AE\u9AD8\u5EA6",paraId:20,tocIndex:19},{value:"100%",paraId:20,tocIndex:19},{value:"--bui-picker-cancel-height",paraId:20,tocIndex:19},{value:"--cancel-line-height",paraId:20,tocIndex:19},{value:"\u53D6\u6D88\u6309\u94AE\u884C\u9AD8",paraId:20,tocIndex:19},{value:"50px",paraId:20,tocIndex:19},{value:"--bui-picker-cancel-line-height",paraId:20,tocIndex:19},{value:"--confirm-height",paraId:20,tocIndex:19},{value:"\u786E\u8BA4\u6309\u94AE\u9AD8\u5EA6",paraId:20,tocIndex:19},{value:"100%",paraId:20,tocIndex:19},{value:"--bui-picker-confirm-height",paraId:20,tocIndex:19},{value:"--confirm-line-height",paraId:20,tocIndex:19},{value:"\u786E\u8BA4\u6309\u94AE\u884C\u9AD8",paraId:20,tocIndex:19},{value:"50px",paraId:20,tocIndex:19},{value:"--bui-picker-confirm-line-height",paraId:20,tocIndex:19},{value:"--panel-container-height",paraId:20,tocIndex:19},{value:"\u9009\u62E9\u5668\u5BB9\u5668\u9AD8\u5EA6",paraId:20,tocIndex:19},{value:"260px",paraId:20,tocIndex:19},{value:"--bui-picker-panel-height",paraId:20,tocIndex:19},{value:"--indicator-top",paraId:20,tocIndex:19},{value:"\u6307\u793A\u5668\u8DDD\u79BB\u9876\u90E8\u8DDD\u79BB",paraId:20,tocIndex:19},{value:"108px",paraId:20,tocIndex:19},{value:"--bui-picker-indicator-top",paraId:20,tocIndex:19},{value:"--indicator-border-color",paraId:20,tocIndex:19},{value:"\u6307\u793A\u5668\u63CF\u8FB9\u989C\u8272",paraId:20,tocIndex:19},{value:"--bui-color-border-default",paraId:20,tocIndex:19},{value:"--bui-picker-indicator-border-color",paraId:20,tocIndex:19},{value:"--option-height",paraId:20,tocIndex:19},{value:"\u9009\u9879\u9AD8\u5EA6",paraId:20,tocIndex:19},{value:"36px",paraId:20,tocIndex:19},{value:"--bui-picker-option-height",paraId:20,tocIndex:19}]},23738:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"Portal\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u5C06\u5176\u5B50\u8282\u70B9\u6E32\u67D3\u5230\u5F53\u524D DOM \u7ED3\u6784\u4E4B\u5916\u7684DOM\u8282\u70B9\u4E2D\u3002\u7EC4\u4EF6\u5E95\u5C42\u4F7F\u7528\u7684\u662F",paraId:0,tocIndex:0},{value:"React createPortal",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u60C5\u51B5Portal\u7EC4\u4EF6\u4F1A\u5C06\u5B50\u7EC4\u4EF6\u6302\u8F7D\u5230\u9875\u9762\u7684\u6839\u8282\u70B9\u4E0A\uFF0CH5\u662F",paraId:1,tocIndex:2},{value:"document.body",paraId:1,tocIndex:2},{value:", \u5C0F\u7A0B\u5E8F\u662F",paraId:1,tocIndex:2},{value:"page\u8282\u70B9",paraId:1,tocIndex:2},{value:`import React from 'react';
import { Portal } from '@bifrostui/react';

export default () => {
  return (
    <Portal>
      <div>\u6302\u8F7D\u5728\u9875\u9762\u6839\u8282\u70B9\u4E0A</div>
    </Portal>
  );
};
`,paraId:2,tocIndex:2},{value:"\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528",paraId:3,tocIndex:3},{value:"container",paraId:3,tocIndex:3},{value:"\u6765\u6307\u5B9APortal\u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6\u6302\u8F7D\u7684\u8282\u70B9",paraId:3,tocIndex:3},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:4,tocIndex:4},{value:"disablePortal",paraId:4,tocIndex:4},{value:"\u4F7Fchildren\u88AB\u6E32\u67D3\u5728\u7236\u8282\u70B9\u4E2D\uFF0C\u800C\u975Econtainer\u4E2D",paraId:4,tocIndex:4},{value:"\u5C5E\u6027",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"children",paraId:5,tocIndex:5},{value:"Portal\u7EC4\u4EF6\u7684\u5B50\u5143\u7D20",paraId:5,tocIndex:5},{value:"React.ReactNode",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"container",paraId:5,tocIndex:5},{value:"children\u5185\u5BB9\u5C06\u4F1A\u88ABappend\u5230container\u4E2D",paraId:5,tocIndex:5},{value:"Element | (() => Element | null) | null",paraId:5,tocIndex:5},{value:"\u9875\u9762\u8DDF\u8282\u70B9",paraId:5,tocIndex:5},{value:"disablePortal",paraId:5,tocIndex:5},{value:"\u7981\u6B62Portal\uFF0Cchildren\u5C06\u88AB\u6E32\u67D3\u5728\u7236\u8282\u70B9\u4E2D",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5}]},92602:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:2},{value:"percent",paraId:1,tocIndex:2},{value:"\u8BBE\u7F6E\u64CD\u4F5C\u8FDB\u5EA6\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7",paraId:2,tocIndex:3},{value:"strokeColor",paraId:2,tocIndex:3},{value:"\u8BBE\u7F6E\u7EBF\u6761\u989C\u8272\uFF0C\u5176\u9ED8\u8BA4\u503C\u4E3A",paraId:2,tocIndex:3},{value:"--bui-color-primary",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:3,tocIndex:4},{value:"strokeWidth",paraId:3,tocIndex:4},{value:"\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u5BBD\u5EA6\u3002",paraId:3,tocIndex:4},{value:"linear-gradient",paraId:4,tocIndex:5},{value:"\u7684\u5C01\u88C5\u3002\u63A8\u8350\u53EA\u4F20\u4E24\u79CD\u989C\u8272\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7",paraId:5,tocIndex:6},{value:"trailColor",paraId:5,tocIndex:6},{value:"\u6307\u5B9A\u672A\u5B8C\u6210\u7684\u5206\u6BB5\u7684\u989C\u8272\u3002",paraId:5,tocIndex:6},{value:"\u5C5E\u6027",paraId:6,tocIndex:7},{value:"\u8BF4\u660E",paraId:6,tocIndex:7},{value:"\u7C7B\u578B",paraId:6,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:7},{value:"percent",paraId:6,tocIndex:7},{value:"\u767E\u5206\u6BD4",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"strokeColor",paraId:6,tocIndex:7},{value:"\u8FDB\u5EA6\u6761\u7684\u8272\u5F69\uFF0C\u4F20\u5165 object \u65F6\u4E3A\u6E10\u53D8",paraId:6,tocIndex:7},{value:"string | { from: string; to: string; direction?: string } | { [percentage: string]: string; direction?: string }",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"trailColor",paraId:6,tocIndex:7},{value:"\u672A\u586B\u5145\u8FDB\u5EA6\u6761\u7684\u8272\u5F69",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"strokeWidth",paraId:6,tocIndex:7},{value:"\u8FDB\u5EA6\u6761\u7EBF\u7684\u5BBD\u5EA6",paraId:6,tocIndex:7},{value:"number | string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"\u5C5E\u6027",paraId:7,tocIndex:8},{value:"\u8BF4\u660E",paraId:7,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:8},{value:"\u5168\u5C40\u53D8\u91CF",paraId:7,tocIndex:8},{value:"--fill-color",paraId:7,tocIndex:8},{value:"\u8FDB\u5EA6\u6761\u7684\u8272\u5F69",paraId:7,tocIndex:8},{value:"--bui-color-primary",paraId:7,tocIndex:8},{value:"-",paraId:7,tocIndex:8},{value:"--trail-color",paraId:7,tocIndex:8},{value:"\u672A\u586B\u5145\u8FDB\u5EA6\u6761\u7684\u8272\u5F69",paraId:7,tocIndex:8},{value:"rgba(156, 156, 165, 0.2)",paraId:7,tocIndex:8},{value:"--bui-progress-trail-color",paraId:7,tocIndex:8},{value:"--stroke-width",paraId:7,tocIndex:8},{value:"\u586B\u5145\u8FDB\u5EA6\u6761\u5BBD\u5EA6",paraId:7,tocIndex:8},{value:"8px",paraId:7,tocIndex:8},{value:"--bui-progress-stroke-width",paraId:7,tocIndex:8},{value:"--width",paraId:7,tocIndex:8},{value:"\u8FDB\u5EA6\u6761\u5BBD\u5EA6",paraId:7,tocIndex:8},{value:"100%",paraId:7,tocIndex:8},{value:"--bui-progress-width",paraId:7,tocIndex:8},{value:"--border-radius",paraId:7,tocIndex:8},{value:"\u8FDB\u5EA6\u6761\u5706\u89D2",paraId:7,tocIndex:8},{value:"100px",paraId:7,tocIndex:8},{value:"--bui-progress-border-radius",paraId:7,tocIndex:8}]},32831:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u5355\u9009\u6846\uFF0C\u4F7F\u7528\u6237\u80FD\u591F\u4ECE\u4E00\u7EC4\u9009\u9879\u4E2D\u9009\u62E9\u4E00\u4E2A\u9009\u9879\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"checked",paraId:1,tocIndex:2},{value:" \u548C ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u63A7\u5236\u72B6\u6001\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"inputProps",paraId:2,tocIndex:3},{value:" \u4F20\u5165\u7684 input \u5C5E\u6027\u53EF\u900F\u4F20\u81F3\u5185\u90E8",paraId:2,tocIndex:3},{value:"input",paraId:2,tocIndex:3},{value:"\u6807\u7B7E\u3002",paraId:2,tocIndex:3},{value:"name",paraId:3,tocIndex:4},{value:" \u548C ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:" \u53EF\u76F4\u63A5\u900F\u4F20\u81F3\u5185\u90E8",paraId:3,tocIndex:4},{value:"input",paraId:3,tocIndex:4},{value:"\u6807\u7B7E\uFF0C\u4E0D\u4F1A\u88AB ",paraId:3,tocIndex:4},{value:"inputProps",paraId:3,tocIndex:4},{value:" \u4F20\u5165\u7684\u540C\u540D\u5C5E\u6027\u8986\u76D6\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"labelPlacement",paraId:4,tocIndex:5},{value:" \u53EF\u63A7\u5236\u6587\u6848\u5728\u590D\u9009\u6846\u56FE\u6807\u7684\u4F4D\u7F6E\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"icon",paraId:5,tocIndex:6},{value:" \u53EF\u81EA\u5B9A\u4E49\u4E3A\u9009\u4E2D\u72B6\u6001\u56FE\u6807\uFF0C",paraId:5,tocIndex:6},{value:"checkedIcon",paraId:5,tocIndex:6},{value:" \u53EF\u81EA\u5B9A\u4E49\u9009\u4E2D\u72B6\u6001\u56FE\u6807\u3002",paraId:5,tocIndex:6},{value:"\u4F7F\u7528",paraId:6,tocIndex:7},{value:"disabled",paraId:6,tocIndex:7},{value:"\u7981\u7528\u7EC4\u4EF6\uFF0C",paraId:6,tocIndex:7},{value:"RadioGroup.disabled",paraId:6,tocIndex:7},{value:" \u53EF\u6574\u7EC4\u7981\u7528\u3002",paraId:6,tocIndex:7},{value:"RadioGroup",paraId:7,tocIndex:8},{value:" \u548C ",paraId:7,tocIndex:8},{value:"Radio",paraId:7,tocIndex:8},{value:" \u7EC4\u5408\uFF0C\u53EF\u5B9E\u73B0\u590D\u9009\u6846\u7EC4\uFF0C\u4E14\u6B64\u65F6\u7684 ",paraId:7,tocIndex:8},{value:"Radio",paraId:7,tocIndex:8},{value:" \u5E94\u8BE5\u4F20\u5165 ",paraId:7,tocIndex:8},{value:"value",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u3002",paraId:7,tocIndex:8},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:9},{value:"value",paraId:8,tocIndex:9},{value:" \u63A7\u5236 ",paraId:8,tocIndex:9},{value:"RadioGroup",paraId:8,tocIndex:9},{value:" \u7EC4\u4EF6\uFF0C\u901A\u8FC7 ",paraId:8,tocIndex:9},{value:"checked",paraId:8,tocIndex:9},{value:" \u63A7\u5236 ",paraId:8,tocIndex:9},{value:"Radio",paraId:8,tocIndex:9},{value:" \u7EC4\u4EF6\u3002",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"defaultValue",paraId:9,tocIndex:10},{value:" \u6307\u5B9A ",paraId:9,tocIndex:10},{value:"RadioGroup",paraId:9,tocIndex:10},{value:" \u7EC4\u4EF6\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"defaultChecked",paraId:9,tocIndex:10},{value:" \u6307\u5B9A ",paraId:9,tocIndex:10},{value:"Radio",paraId:9,tocIndex:10},{value:" \u7EC4\u4EF6\u9ED8\u8BA4\u503C\u3002",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:12},{value:"\u8BF4\u660E",paraId:10,tocIndex:12},{value:"\u7C7B\u578B",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:12},{value:"defaultValue",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"value",paraId:10,tocIndex:12},{value:"\u6307\u5B9A\u9009\u4E2D\u7684\u9009\u9879\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"\u6574\u7EC4\u662F\u5426\u7981\u7528",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:10,tocIndex:12},{value:"(e: React.SyntheticEvent,data: {value: string}) => void",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"\u5C5E\u6027",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"defaultChecked",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u662F\u5426\u9009\u4E2D\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checked",paraId:11,tocIndex:13},{value:"\u662F\u5426\u9009\u4E2D\uFF0C\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputProps",paraId:11,tocIndex:13},{value:"\u5185\u90E8",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u6807\u7B7E\u7684\u6807\u51C6\u5C5E\u6027",paraId:11,tocIndex:13},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputRef",paraId:11,tocIndex:13},{value:"\u5185\u90E8",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u6807\u7B7E\u7684 ref",paraId:11,tocIndex:13},{value:"React.Ref<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"name",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:"\u540D\u79F0\u6807\u8BC6",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"value",paraId:11,tocIndex:13},{value:"\u7EC4\u4EF6\u7684\u503C\uFF0C\u82E5\u4F7F\u7528 RadioGroup \u5E94\u4F20\u5165\u8BE5\u5C5E\u6027",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"disabled",paraId:11,tocIndex:13},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"icon",paraId:11,tocIndex:13},{value:"\u672A\u9009\u4E2D\u72B6\u6001\u56FE\u6807",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checkedIcon",paraId:11,tocIndex:13},{value:"\u9009\u4E2D\u72B6\u6001\u56FE\u6807",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"labelPlacement",paraId:11,tocIndex:13},{value:"\u6587\u6848\u4F4D\u7F6E",paraId:11,tocIndex:13},{value:"left",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"top",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:" | ",paraId:11,tocIndex:13},{value:"bottom",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:11,tocIndex:13},{value:"(e: React.SyntheticEvent,data: {checked: boolean}) => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u5C5E\u6027",paraId:12,tocIndex:14},{value:"\u8BF4\u660E",paraId:12,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:14},{value:"\u5168\u5C40\u53D8\u91CF",paraId:12,tocIndex:14},{value:"--label-color",paraId:12,tocIndex:14},{value:"\u6587\u6848\u5B57\u4F53\u989C\u8272",paraId:12,tocIndex:14},{value:"--bui-color-fg-default",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"--label-font-size",paraId:12,tocIndex:14},{value:"\u6587\u6848\u5B57\u4F53\u5927\u5C0F",paraId:12,tocIndex:14},{value:"--bui-text-size-1",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"--icon-font-size",paraId:12,tocIndex:14},{value:"\u56FE\u6807\u5B57\u4F53\u5927\u5C0F",paraId:12,tocIndex:14},{value:"--bui-title-size-2",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"--icon-padding",paraId:12,tocIndex:14},{value:"\u56FE\u6807\u5185\u8FB9\u8DDD",paraId:12,tocIndex:14},{value:"--bui-radio-icon-padding",paraId:12,tocIndex:14},{value:"5px",paraId:12,tocIndex:14}]},53209:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u8BC4\u5206\u7EC4\u4EF6\u63D0\u4F9B\u5BF9\u8BC4\u4EF7\u8FDB\u884C\u5C55\u793A\u3002\u4E5F\u5141\u8BB8\u7528\u6237\u5FEB\u901F\u7684\u8BC4\u5206\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7",paraId:1,tocIndex:3},{value:"value",paraId:1,tocIndex:3},{value:" \u548C ",paraId:1,tocIndex:3},{value:"onChange",paraId:1,tocIndex:3},{value:" \u81EA\u5B9A\u4E49\u8BC4\u5206\u9009\u4E2D\u503C",paraId:1,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:4},{value:"allowHalf",paraId:2,tocIndex:4},{value:" \u6307\u5B9A ",paraId:2,tocIndex:4},{value:"Rating",paraId:2,tocIndex:4},{value:" \u652F\u6301\u534A\u9009\u72B6\u6001\u3002",paraId:2,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:5},{value:"readOnly",paraId:3,tocIndex:5},{value:" \u6307\u5B9A ",paraId:3,tocIndex:5},{value:"Rating",paraId:3,tocIndex:5},{value:" \u4E3A\u53EA\u8BFB\u3002",paraId:3,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:6},{value:"size",paraId:4,tocIndex:6},{value:" \u6307\u5B9A ",paraId:4,tocIndex:6},{value:"Rating",paraId:4,tocIndex:6},{value:" \u7684\u5927\u5C0F",paraId:4,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:7},{value:"count",paraId:5,tocIndex:7},{value:" \u6307\u5B9A ",paraId:5,tocIndex:7},{value:"Rating",paraId:5,tocIndex:7},{value:" \u7684\u5C55\u793A\u56FE\u6807\u4E2A\u6570",paraId:5,tocIndex:7},{value:"\u901A\u8FC7 ",paraId:6,tocIndex:8},{value:"disabled",paraId:6,tocIndex:8},{value:" \u6307\u5B9A ",paraId:6,tocIndex:8},{value:"Rating",paraId:6,tocIndex:8},{value:" \u4E3A\u7981\u7528\u72B6\u6001",paraId:6,tocIndex:8},{value:"\u901A\u8FC7",paraId:7,tocIndex:9},{value:"icon",paraId:7,tocIndex:9},{value:" \u548C ",paraId:7,tocIndex:9},{value:"emptyIcon",paraId:7,tocIndex:9},{value:" \u53EF\u4EE5\u5C06\u661F\u661F\u66FF\u6362\u4E3A\u5176\u4ED6\u5B57\u7B26\uFF0C\u6BD4\u5982\u8868\u60C5\u3001\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u5B57\u4F53\u56FE\u6807\u751A\u81F3\u4E2D\u6587\uFF0C",paraId:7,tocIndex:9},{value:"icon",paraId:7,tocIndex:9},{value:"\u4E3A\u9009\u4E2D\u6001\u56FE\u6807\uFF0C",paraId:7,tocIndex:9},{value:"emptyIcon",paraId:7,tocIndex:9},{value:"\u4E3A\u672A\u9009\u4E2D\u6001\u56FE\u6807",paraId:7,tocIndex:9},{value:"\u5C5E\u6027",paraId:8,tocIndex:10},{value:"\u8BF4\u660E",paraId:8,tocIndex:10},{value:"\u7C7B\u578B",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:10},{value:"count",paraId:8,tocIndex:10},{value:"\u8BC4\u5206\u603B\u6570",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"5",paraId:8,tocIndex:10},{value:"value",paraId:8,tocIndex:10},{value:"\u5F53\u524D\u8BC4\u5206",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"defaultValue",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u8BC4\u5206 \u975E\u53D7\u63A7\u72B6\u6001\u4F7F\u7528",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"size",paraId:8,tocIndex:10},{value:"\u5927\u5C0F",paraId:8,tocIndex:10},{value:"xsmall",paraId:8,tocIndex:10},{value:"| ",paraId:8,tocIndex:10},{value:"small",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"large",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:"disabled",paraId:8,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"readOnly",paraId:8,tocIndex:10},{value:"\u662F\u5426\u53EA\u8BFB",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"allowHalf",paraId:8,tocIndex:10},{value:"\u662F\u5426\u5141\u8BB8\u534A\u9009",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"icon",paraId:8,tocIndex:10},{value:"\u672A\u9009\u4E2D\u6001\u56FE\u6807",paraId:8,tocIndex:10},{value:"React.ReactNode",paraId:8,tocIndex:10},{value:'<StarFilledIcon htmlColor="#ced1d6" />',paraId:8,tocIndex:10},{value:"checkedIcon",paraId:8,tocIndex:10},{value:"\u9009\u4E2D\u6001\u56FE\u6807",paraId:8,tocIndex:10},{value:"React.ReactNode",paraId:8,tocIndex:10},{value:'<StarFilledIcon color="warning" />',paraId:8,tocIndex:10},{value:"disableClear",paraId:8,tocIndex:10},{value:"\u662F\u5426\u7981\u6B62\u70B9\u51FB\u540E\u6E05\u7A7A",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"name",paraId:8,tocIndex:10},{value:"\u5355\u9009\u8F93\u5165\u5143\u7D20\u7684name\u5C5E\u6027",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"onChange",paraId:8,tocIndex:10},{value:"\u9009\u62E9\u8BC4\u5206\u7684\u56DE\u8C03",paraId:8,tocIndex:10},{value:"(ev?: React.ChangeEvent<HTMLInputElement>,data?: { value: number }) => void",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"\u5C5E\u6027",paraId:9,tocIndex:11},{value:"\u8BF4\u660E",paraId:9,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:11},{value:"\u5168\u5C40\u53D8\u91CF",paraId:9,tocIndex:11},{value:"--small-margin-right",paraId:9,tocIndex:11},{value:"\u5C0F\u53F7\u8BC4\u5206\u53F3\u5916\u8FB9\u8DDD",paraId:9,tocIndex:11},{value:"0.5px",paraId:9,tocIndex:11},{value:"--bui-rating-small-margin-right",paraId:9,tocIndex:11},{value:"--medium-margin-right",paraId:9,tocIndex:11},{value:"\u4E2D\u53F7\u8BC4\u5206\u53F3\u5916\u8FB9\u8DDD",paraId:9,tocIndex:11},{value:"1px",paraId:9,tocIndex:11},{value:"--bui-rating-medium-margin-right",paraId:9,tocIndex:11},{value:"--large-margin-right",paraId:9,tocIndex:11},{value:"\u5927\u53F7\u8BC4\u5206\u53F3\u5916\u8FB9\u8DDD",paraId:9,tocIndex:11},{value:"2px",paraId:9,tocIndex:11},{value:"--bui-rating-large-margin-right",paraId:9,tocIndex:11},{value:"--large-font-size",paraId:9,tocIndex:11},{value:"\u5927\u53F7\u8BC4\u5206\u5B57\u4F53\u5927\u5C0F",paraId:9,tocIndex:11},{value:"22px",paraId:9,tocIndex:11},{value:"--bui-rating-large-font-size",paraId:9,tocIndex:11}]},92826:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:`\u7528\u4E8E\u5904\u7406\u5143\u7D20\u5185\u90E8\u6EDA\u52A8\u7684\u573A\u666F\uFF0C\u5E76\u5C01\u88C5\u4E86\u6EDA\u52A8\u4EE5\u53CA\u6EDA\u52A8\u5230\u9996\u5C3E\u7684\u4E8B\u4EF6\u56DE\u8C03\uFF0C\u4E5F\u53EF\u4E3B\u52A8\u63A7\u5236\u5176\u6EDA\u52A8\u4F4D\u7F6E
\u5C0F\u7A0B\u5E8F\u7AEF\u76F4\u63A5\u4F7F\u7528\u4E86Taro\u7684ScrollView\u7EC4\u4EF6\uFF0CH5\u7AEF\u5219\u4F7F\u7528React\u76F4\u63A5\u5B9E\u73B0\u5E76\u62C9\u9F50\u4E86\u5165\u53C2\u3002`,paraId:0,tocIndex:0},{value:"\u5C0F\u7A0B\u5E8F\u6587\u6863\u53C2\u8003\uFF1A",paraId:1,tocIndex:0},{value:"https://docs.taro.zone/docs/components/viewContainer/scroll-view",paraId:1,tocIndex:0},{value:"\u4F20\u5165scrollX\u4EE5\u8FDB\u884C\u6A2A\u5411\u6EDA\u52A8",paraId:2,tocIndex:3},{value:"\u4F7F\u7528",paraId:3,tocIndex:4},{value:"onScrollToLower",paraId:3,tocIndex:4},{value:", ",paraId:3,tocIndex:4},{value:"onScrollToUpper",paraId:3,tocIndex:4},{value:`\u63A5\u6536\u6EDA\u52A8\u5230\u5934\u5C3E\u7684\u56DE\u8C03
\u4F20\u5165`,paraId:3,tocIndex:4},{value:"scrollTop",paraId:3,tocIndex:4},{value:"/",paraId:3,tocIndex:4},{value:"scrollLeft",paraId:3,tocIndex:4},{value:",",paraId:3,tocIndex:4},{value:"scrollIntoView",paraId:3,tocIndex:4},{value:"\u4EE5\u6EDA\u52A8\u5230\u5BF9\u5E94\u5750\u6807/\u5BF9\u5E94id\u7684\u5143\u7D20\u5904",paraId:3,tocIndex:4},{value:"\u5C5E\u6027",paraId:4,tocIndex:5},{value:"\u8BF4\u660E",paraId:4,tocIndex:5},{value:"\u7C7B\u578B",paraId:4,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:5},{value:"scrollX",paraId:4,tocIndex:5},{value:"\u6A2A\u5411\u6EDA\u52A8",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"scrollY",paraId:4,tocIndex:5},{value:"\u7EB5\u5411\u6EDA\u52A8",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"upperThreshold",paraId:4,tocIndex:5},{value:"\u89E6\u53D1onScrollToUpper\u7684\u9608\u503C",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"50",paraId:4,tocIndex:5},{value:"lowerThreshold",paraId:4,tocIndex:5},{value:"\u89E6\u53D1onScrollToLower\u7684\u9608\u503C",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"50",paraId:4,tocIndex:5},{value:"scrollTop",paraId:4,tocIndex:5},{value:"\u8BBE\u7F6E\u7EB5\u5411\u6EDA\u52A8\u4F4D\u7F6E",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"scrollLeft",paraId:4,tocIndex:5},{value:"\u8BBE\u7F6E\u6A2A\u5411\u6EDA\u52A8\u4F4D\u7F6E",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"scrollIntoView",paraId:4,tocIndex:5},{value:"\u5C06\u5BF9\u5E94Id\u7684\u5143\u7D20\u6EDA\u52A8\u5230\u89C6\u53E3\u4E2D",paraId:4,tocIndex:5},{value:"string",paraId:4,tocIndex:5},{value:"scrollWithAnimation",paraId:4,tocIndex:5},{value:"\u542F\u7528\u5E73\u6ED1\u6EDA\u52A8",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"onScrollToUpper",paraId:4,tocIndex:5},{value:"\u6EDA\u52A8\u5230\u9876\u90E8\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5},{value:"onScrollToLower",paraId:4,tocIndex:5},{value:"\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5},{value:"onScroll",paraId:4,tocIndex:5},{value:"\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5},{value:"onTouchMove",paraId:4,tocIndex:5},{value:"\u89E6\u6478\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5}]},50648:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:`Select \u7EC4\u4EF6\u7528\u4E8E\u4ECE\u9009\u9879\u5217\u8868\u6536\u96C6\u7528\u6237\u63D0\u4F9B\u7684\u4FE1\u606F\u3002
\u76EE\u524D Select \u7EC4\u4EF6\u4EC5\u652F\u6301`,paraId:0,tocIndex:0},{value:"\u5355\u9879\u9009\u62E9",paraId:0,tocIndex:0},{value:"\uFF0C\u66F4\u591A\u529F\u80FD\u656C\u8BF7\u671F\u5F85\u6211\u4EEC\u89E3\u9501\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u7EC4\u5408",paraId:1,tocIndex:2},{value:"SelectOption",paraId:1,tocIndex:2},{value:"\u7EC4\u4EF6\uFF0C\u8FBE\u5230\u4E0B\u62C9\u9009\u62E9\u6548\u679C\u3002",paraId:1,tocIndex:2},{value:"\u652F\u6301\u901A\u8FC7",paraId:2,tocIndex:3},{value:"placeholder",paraId:2,tocIndex:3},{value:"\u914D\u7F6E\u9009\u62E9\u6846\u9ED8\u8BA4\u5C55\u793A\u5185\u5BB9\u3002",paraId:2,tocIndex:3},{value:"\u652F\u6301\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"defaultValue",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\uFF0C\u521D\u59CB\u9009\u4E2D\u503C\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7\u662F\u5426\u4F20\u5165",paraId:4,tocIndex:5},{value:"value",paraId:4,tocIndex:5},{value:`\u6765\u533A\u5206\u662F\u5426\u4E3A\u53D7\u63A7\u7EC4\u4EF6:
\u53D7\u63A7\u60C5\u51B5\u4E1A\u52A1\u901A\u8FC7 `,paraId:4,tocIndex:5},{value:"onChange",paraId:4,tocIndex:5},{value:` \u56DE\u8C03\u63A7\u5236\u7EC4\u4EF6 value;
\u975E\u53D7\u63A7\u60C5\u51B5\u53EF\u901A\u8FC7 `,paraId:4,tocIndex:5},{value:"inputRef",paraId:4,tocIndex:5},{value:"\u83B7\u53D6\u7EC4\u4EF6 value;",paraId:4,tocIndex:5},{value:"\u63D0\u4F9B ",paraId:5,tocIndex:6},{value:"disabled",paraId:5,tocIndex:6},{value:` \u5C5E\u6027\u6765\u7981\u6B62\u7528\u6237\u64CD\u4F5C\u3002
\u60A8\u53EF\u4EE5\u901A\u8FC7\u5728`,paraId:5,tocIndex:6},{value:"Select",paraId:5,tocIndex:6},{value:"\u4E0A\u8BBE\u7F6E",paraId:5,tocIndex:6},{value:"disabled",paraId:5,tocIndex:6},{value:" \u5168\u90E8\u7981\u6B62\u64CD\u4F5C\uFF0C\u4E5F\u53EF\u4EE5\u5728",paraId:5,tocIndex:6},{value:"SelectOption",paraId:5,tocIndex:6},{value:"\u4E0A\u8BBE\u7F6E",paraId:5,tocIndex:6},{value:"disabled",paraId:5,tocIndex:6},{value:"\u5BF9\u67D0\u4E2A\u9009\u9879\u7981\u6B62\u64CD\u4F5C\u3002",paraId:5,tocIndex:6},{value:"\u4EE5\u4E0B\u662F\u5B9A\u5236 Select \u7EC4\u4EF6\u793A\u4F8B\u3002",paraId:6,tocIndex:7},{value:"\u63D0\u4F9B\u81EA\u5B9A\u4E49\u56FE\u6807\u80FD\u529B\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:7,tocIndex:8},{value:"icon",paraId:7,tocIndex:8},{value:"\u5C5E\u6027\u6765\u5B9A\u5236\u56FE\u6807\u3002",paraId:7,tocIndex:8},{value:"\u5F53\u60A8\u4E0D\u60F3\u4F7F\u7528",paraId:8,tocIndex:9},{value:"label",paraId:8,tocIndex:9},{value:"\u505A\u4E3A\u9009\u9879",paraId:8,tocIndex:9},{value:"SelectOptions",paraId:8,tocIndex:9},{value:"\u5C55\u793A\u5185\u5BB9\u65F6\uFF0C\u53EF\u901A\u8FC7",paraId:8,tocIndex:9},{value:"children",paraId:8,tocIndex:9},{value:"\u6765\u5B9A\u5236\u9009\u9879\u5C55\u793A\u5185\u5BB9\u3002",paraId:8,tocIndex:9},{value:"label",paraId:9,tocIndex:10},{value:"\u652F\u6301 ",paraId:9,tocIndex:10},{value:"ReactNode",paraId:9,tocIndex:10},{value:"\u7C7B\u578B\uFF0C\u5F53\u60A8\u60F3\u5B9A\u5236\u9009\u62E9\u5668",paraId:9,tocIndex:10},{value:"Select",paraId:9,tocIndex:10},{value:"\u5C55\u793A\u5185\u5BB9\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:9,tocIndex:10},{value:"SelectOption",paraId:9,tocIndex:10},{value:"\u7EC4\u4EF6\u5C5E\u6027\uFF1A",paraId:9,tocIndex:10},{value:"label",paraId:9,tocIndex:10},{value:"\u4E0E",paraId:9,tocIndex:10},{value:"children",paraId:9,tocIndex:10},{value:"\uFF0C\u4E24\u8005\u914D\u5408\u4F7F\u7528\u5B9E\u73B0\u5B9A\u5236\u5316\u3002",paraId:9,tocIndex:10},{value:"Select \u7EC4\u4EF6\u9664\u4E86\u63D0\u4F9B\u57FA\u7840\u7684",paraId:10,tocIndex:11},{value:"onChange",paraId:10,tocIndex:11},{value:"\u56DE\u8C03\uFF0C\u8FD8\u63D0\u4F9B\u9009\u9879",paraId:10,tocIndex:11},{value:"\u5C55\u5F00",paraId:10,tocIndex:11},{value:"\u3001",paraId:10,tocIndex:11},{value:"\u6298\u53E0",paraId:10,tocIndex:11},{value:"\u65F6\u7684\u4E8B\u4EF6\u56DE\u8C03\u3002",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"inputRef",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668 inputRef",paraId:11,tocIndex:13},{value:"Ref",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputProps",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668 ",paraId:11,tocIndex:13},{value:"<input/>",paraId:11,tocIndex:13},{value:" \u6807\u7B7E\u900F\u4F20\u5C5E\u6027",paraId:11,tocIndex:13},{value:"React.InputHTMLAttributes",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"BackdropProps",paraId:11,tocIndex:13},{value:"\u8499\u5C42 ",paraId:11,tocIndex:13},{value:"<Backdrop/>",paraId:11,tocIndex:13},{value:" \u6807\u7B7E\u900F\u4F20\u5C5E\u6027",paraId:11,tocIndex:13},{value:"React.DivHTMLAttributes",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"name",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668 ",paraId:11,tocIndex:13},{value:"<input/>",paraId:11,tocIndex:13},{value:" \u6807\u7B7E\u540D\u79F0\u6807\u8BC6",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"value",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u9009\u4E2D\u503C",paraId:11,tocIndex:13},{value:"string \uFF5C number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"defaultValue",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"string \uFF5C number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"placeholder",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u5360\u4F4D\u5185\u5BB9",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"icon",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u56FE\u6807",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"disabled",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u662F\u5426\u4E0D\u53EF\u70B9\u51FB",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"open",paraId:11,tocIndex:13},{value:"\u9009\u62E9\u5668\u4E0B\u62C9\u9009\u9879\u662F\u5426\u6253\u5F00",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"\u9009\u4E2D\u67D0\u4E00\u9879\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:13},{value:"(e:SyntheticEvent, data:{value:string}) => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onOpen",paraId:11,tocIndex:13},{value:"\u5C55\u5F00\u4E0B\u62C9\u6846\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onClose",paraId:11,tocIndex:13},{value:"\u6298\u53E0\u4E0B\u62C9\u6846\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u5C5E\u6027",paraId:12,tocIndex:14},{value:"\u8BF4\u660E",paraId:12,tocIndex:14},{value:"\u7C7B\u578B",paraId:12,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:14},{value:"label",paraId:12,tocIndex:14},{value:"\u9009\u9879\u56DE\u586B\u5185\u5BB9",paraId:12,tocIndex:14},{value:"ReactNode",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"value",paraId:12,tocIndex:14},{value:"\u9009\u9879\u503C",paraId:12,tocIndex:14},{value:"string \uFF5C number",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"disabled",paraId:12,tocIndex:14},{value:"\u9009\u9879\u53EF\u70B9\u51FB\u6001",paraId:12,tocIndex:14},{value:"boolean",paraId:12,tocIndex:14},{value:"false",paraId:12,tocIndex:14},{value:"\u5C5E\u6027",paraId:13,tocIndex:15},{value:"\u8BF4\u660E",paraId:13,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:15},{value:"\u5168\u5C40\u53D8\u91CF",paraId:13,tocIndex:15},{value:"--height",paraId:13,tocIndex:15},{value:"\u9009\u62E9\u5668\u9AD8\u5EA6",paraId:13,tocIndex:15},{value:"27px",paraId:13,tocIndex:15},{value:"--bui-select-height",paraId:13,tocIndex:15},{value:"--mini-width",paraId:13,tocIndex:15},{value:"\u9009\u62E9\u5668\u6700\u5C0F\u5BBD\u5EA6",paraId:13,tocIndex:15},{value:"100px",paraId:13,tocIndex:15},{value:"--bui-select-mini-width",paraId:13,tocIndex:15},{value:"--font-size",paraId:13,tocIndex:15},{value:"\u9009\u62E9\u5668\u5B57\u4F53\u5927\u5C0F",paraId:13,tocIndex:15},{value:"var(--bui-title-size-3)",paraId:13,tocIndex:15},{value:"--bui-select-font-size",paraId:13,tocIndex:15},{value:"--padding",paraId:13,tocIndex:15},{value:"\u9009\u62E9\u5668\u5185\u8FB9\u8DDD",paraId:13,tocIndex:15},{value:"100px",paraId:13,tocIndex:15},{value:"--bui-select-mini-width",paraId:13,tocIndex:15},{value:"--option-container-padding",paraId:13,tocIndex:15},{value:"\u4E0B\u62C9\u6846\u6574\u4F53\u5185\u8FB9\u8DDD",paraId:13,tocIndex:15},{value:"3px 0",paraId:13,tocIndex:15},{value:"--bui-select-option-container-padding",paraId:13,tocIndex:15},{value:"--option-margin-top",paraId:13,tocIndex:15},{value:"\u4E0B\u62C9\u6846\u6574\u4F53\u9876\u90E8\u5916\u8FB9\u8DDD",paraId:13,tocIndex:15},{value:"6px",paraId:13,tocIndex:15},{value:"--bui-select-option-margin-top",paraId:13,tocIndex:15},{value:"--option-padding",paraId:13,tocIndex:15},{value:"\u4E0B\u62C9\u6846\u5355\u4E2A\u9009\u9879\u5185\u8FB9\u8DDD",paraId:13,tocIndex:15},{value:"0 14px",paraId:13,tocIndex:15},{value:"--bui-select-option-padding",paraId:13,tocIndex:15},{value:"--option-margin",paraId:13,tocIndex:15},{value:"\u4E0B\u62C9\u6846\u5355\u4E2A\u9009\u9879\u5916\u8FB9\u8DDD",paraId:13,tocIndex:15},{value:"0 3px",paraId:13,tocIndex:15},{value:"--bui-select-option-margin",paraId:13,tocIndex:15},{value:"--option-height",paraId:13,tocIndex:15},{value:"\u4E0B\u62C9\u6846\u5355\u4E2A\u9009\u9879\u9AD8\u5EA6",paraId:13,tocIndex:15},{value:"27px",paraId:13,tocIndex:15},{value:"--bui-select-option-height",paraId:13,tocIndex:15},{value:"--option-active-font-weight",paraId:13,tocIndex:15},{value:"\u4E0B\u62C9\u6846\u9009\u62E9\u9009\u9879\u5B57\u4F53\u7C97\u7EC6",paraId:13,tocIndex:15},{value:"500",paraId:13,tocIndex:15},{value:"--bui-select-option-active-font-weight",paraId:13,tocIndex:15}]},1196:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u5728\u9700\u8981\u7B49\u5F85\u52A0\u8F7D\u5185\u5BB9\u7684\u4F4D\u7F6E\u63D0\u4F9B\u4E00\u4E2A\u5360\u4F4D\u56FE\u5F62\u7EC4\u5408\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528",paraId:1,tocIndex:2},{value:"width",paraId:1,tocIndex:2},{value:"\u548C",paraId:1,tocIndex:2},{value:"height",paraId:1,tocIndex:2},{value:"\u8BBE\u7F6E\u5BBD\u9AD8\u3002",paraId:1,tocIndex:2},{value:"\u7EC4\u4EF6\u652F\u6301 4 \u79CD\u53D8\u4F53",paraId:2,tocIndex:3},{value:"variant",paraId:2,tocIndex:3},{value:":",paraId:2,tocIndex:3},{value:"text",paraId:3,tocIndex:3},{value:"(\u9ED8\u8BA4): \u53EF\u4EE5\u6839\u636E",paraId:3,tocIndex:3},{value:"font-size",paraId:3,tocIndex:3},{value:"\u81EA\u52A8\u8C03\u6574\u5927\u5C0F\u3002",paraId:3,tocIndex:3},{value:"circular",paraId:4,tocIndex:3},{value:", ",paraId:4,tocIndex:3},{value:"rectangular",paraId:4,tocIndex:3},{value:", ",paraId:4,tocIndex:3},{value:"rounded",paraId:4,tocIndex:3},{value:": \u53EF\u4EE5\u6839\u636E",paraId:4,tocIndex:3},{value:"width",paraId:4,tocIndex:3},{value:"\u548C",paraId:4,tocIndex:3},{value:"height",paraId:4,tocIndex:3},{value:"\u6765\u8C03\u6574\u5927\u5C0F\u3002",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u662F",paraId:5,tocIndex:4},{value:"wave",paraId:5,tocIndex:4},{value:"\u3002\u4F60\u53EF\u4EE5\u6839\u636E",paraId:5,tocIndex:4},{value:"animation",paraId:5,tocIndex:4},{value:"\u6765\u8BBE\u7F6E\u4E0D\u540C\u7684\u52A8\u753B\u6216\u8005\u5B8C\u5168\u7981\u7528\u5B83\u3002",paraId:5,tocIndex:4},{value:"\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u56FE\u5F62\u7EC4\u5408\u3002",paraId:6,tocIndex:5},{value:"\u53EF\u4EE5\u6839\u636E",paraId:7,tocIndex:6},{value:"style",paraId:7,tocIndex:6},{value:"\u7684",paraId:7,tocIndex:6},{value:"height",paraId:7,tocIndex:6},{value:"\u548C",paraId:7,tocIndex:6},{value:"width",paraId:7,tocIndex:6},{value:"\u5C5E\u6027\u6765\u8BBE\u7F6E\u5C3A\u5BF8\u3002",paraId:7,tocIndex:6},{value:"\u5C5E\u6027",paraId:8,tocIndex:7},{value:"\u8BF4\u660E",paraId:8,tocIndex:7},{value:"\u7C7B\u578B",paraId:8,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:7},{value:"animation",paraId:8,tocIndex:7},{value:"\u52A8\u753B\u6548\u679C",paraId:8,tocIndex:7},{value:"wave",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"pulse",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"false",paraId:8,tocIndex:7},{value:"wave",paraId:8,tocIndex:7},{value:"variant",paraId:8,tocIndex:7},{value:"\u5C55\u73B0\u5F62\u5F0F",paraId:8,tocIndex:7},{value:"text",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"circular",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"rectangular",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"rounded",paraId:8,tocIndex:7},{value:"text",paraId:8,tocIndex:7},{value:"width",paraId:8,tocIndex:7},{value:"\u5360\u4F4D\u5BBD\u5EA6",paraId:8,tocIndex:7},{value:"string",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"number",paraId:8,tocIndex:7},{value:"100%",paraId:8,tocIndex:7},{value:"height",paraId:8,tocIndex:7},{value:"\u5360\u4F4D\u9AD8\u5EA6",paraId:8,tocIndex:7},{value:"string",paraId:8,tocIndex:7},{value:" | ",paraId:8,tocIndex:7},{value:"number ",paraId:8,tocIndex:7},{value:"16px",paraId:8,tocIndex:7},{value:"\u5C5E\u6027",paraId:9,tocIndex:8},{value:"\u8BF4\u660E",paraId:9,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:8},{value:"\u5168\u5C40\u53D8\u91CF",paraId:9,tocIndex:8},{value:"--border-radius",paraId:9,tocIndex:8},{value:"\u9AA8\u67B6\u5C4F\u5706\u89D2\u5927\u5C0F",paraId:9,tocIndex:8},{value:"--bui-shape-radius-label",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"--height",paraId:9,tocIndex:8},{value:"\u9AA8\u67B6\u5C4F\u9AD8\u5EA6",paraId:9,tocIndex:8},{value:"1.2em",paraId:9,tocIndex:8},{value:"--bui-skeleton-height",paraId:9,tocIndex:8}]},64668:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:`\u4F7F\u7528Transition\u5C01\u88C5\u7684\u57FA\u7840\u6ED1\u5165\u6ED1\u51FA\u52A8\u753B\u3002
\u8003\u8651\u5230\u5C0F\u7A0B\u5E8F\u517C\u5BB9\u6027\uFF0C\u4EE5\u5143\u7D20\u81EA\u8EAB\u7684\u4E00\u6761\u8FB9\u800C\u975E\u5C4F\u5E55\u8FB9\u7F18\u8FDB\u884C\u6ED1\u52A8\u3002`,paraId:0,tocIndex:0},{value:"Slide\u7EC4\u4EF6\u652F\u6301\u56DB\u4E2A\u6ED1\u5165\u65B9\u5411\uFF0C\u901A\u8FC7",paraId:1,tocIndex:2},{value:"direction",paraId:1,tocIndex:2},{value:`\u53C2\u6570\u4F20\u5165
\u7EC4\u4EF6\u672C\u8EAB\u53EA\u5904\u7406\u5185\u90E8\u5143\u7D20\u7684\u4F4D\u79FB\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u81EA\u884C\u589E\u52A0`,paraId:1,tocIndex:2},{value:"overflow:hidden",paraId:1,tocIndex:2},{value:"\u7B49\u5916\u90E8\u6837\u5F0F",paraId:1,tocIndex:2},{value:"\u5F53",paraId:2,tocIndex:3},{value:"appear",paraId:2,tocIndex:3},{value:"\u548C",paraId:2,tocIndex:3},{value:"in",paraId:2,tocIndex:3},{value:"\u90FD\u4E3A",paraId:2,tocIndex:3},{value:"true",paraId:2,tocIndex:3},{value:`\u65F6
\u7EC4\u4EF6\u4F1A\u5728\u6302\u8F7D\u65F6\u7ACB\u5373\u64AD\u653E\u52A8\u753B`,paraId:2,tocIndex:3},{value:"Slide",paraId:3,tocIndex:4},{value:" \u7EE7\u627F\u81EA ",paraId:3,tocIndex:4},{value:"Transition",paraId:3,tocIndex:4},{value:" \u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:3,tocIndex:4},{value:"Transition",paraId:4,tocIndex:4},{value:"\u5C5E\u6027",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"in",paraId:5,tocIndex:5},{value:"\u662F\u5426\u8FDB\u5165",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5},{value:"appear",paraId:5,tocIndex:5},{value:"\u6302\u8F7D\u65F6\u662F\u5426\u64AD\u653E\u52A8\u753B",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5},{value:"direction",paraId:5,tocIndex:5},{value:"\u6ED1\u52A8\u65B9\u5411",paraId:5,tocIndex:5},{value:'"up"|"down"|"left"|"right"',paraId:5,tocIndex:5},{value:"timeout",paraId:5,tocIndex:5},{value:"\u52A8\u753B\u65F6\u95F4\u914D\u7F6E",paraId:5,tocIndex:5},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"delay",paraId:5,tocIndex:5},{value:"\u52A8\u753B\u5EF6\u8FDF\u914D\u7F6E",paraId:5,tocIndex:5},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"enter",paraId:5,tocIndex:5},{value:"\u662F\u5426\u64AD\u653E\u8FDB\u5165\u52A8\u753B",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"true",paraId:5,tocIndex:5},{value:"exit",paraId:5,tocIndex:5},{value:"\u662F\u5426\u64AD\u653E\u9000\u51FA\u52A8\u753B",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"true",paraId:5,tocIndex:5},{value:"mountOnEnter",paraId:5,tocIndex:5},{value:"\u9996\u6B21\u8FDB\u5165\u65F6\u518D\u6302\u8F7Dchildren",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5},{value:"unmountOnExit",paraId:5,tocIndex:5},{value:"\u9000\u51FA\u65F6\u5378\u8F7Dchildren",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5},{value:"onEnter",paraId:5,tocIndex:5},{value:"\u8FDB\u5165\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onEntering",paraId:5,tocIndex:5},{value:"\u8FDB\u5165\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onEntered",paraId:5,tocIndex:5},{value:"\u8FDB\u5165\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onExit",paraId:5,tocIndex:5},{value:"\u9000\u51FA\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onExiting",paraId:5,tocIndex:5},{value:"\u9000\u51FA\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onExited",paraId:5,tocIndex:5},{value:"\u9000\u51FA\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"node=>void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"easing",paraId:5,tocIndex:5},{value:"\u8865\u95F4\uFF0C\u5373transition-timing-function",paraId:5,tocIndex:5},{value:"string | {enter, exit}",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5}]},90796:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u6ED1\u52A8\u8F93\u5165\u6761\uFF0C\u7528\u4E8E\u5728\u7ED9\u5B9A\u7684\u8303\u56F4\u5185\u9009\u62E9\u4E00\u4E2A\u503C\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:" \u548C ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u63A7\u5236\u6ED1\u52A8\u8F93\u5165\u6761\u3002",paraId:1,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:3},{value:"min",paraId:2,tocIndex:3},{value:" \u548C ",paraId:2,tocIndex:3},{value:"max",paraId:2,tocIndex:3},{value:" \u6ED1\u52A8\u9650\u5236\u8F93\u5165\u6761\u7684\u503C\u8303\u56F4\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"step",paraId:3,tocIndex:4},{value:" \u53EF\u81EA\u5B9A\u4E49\u6B65\u957F\uFF0C",paraId:3,tocIndex:4},{value:"step",paraId:3,tocIndex:4},{value:" \u5E94\u662F max-min \u7684\u6574\u6570\u500D\u3002",paraId:3,tocIndex:4},{value:"\u542F\u7528 ",paraId:4,tocIndex:5},{value:"tipVisible",paraId:4,tocIndex:5},{value:"\uFF0C\u63D0\u793A\u6C14\u6CE1\u5C06\u603B\u662F\u5C55\u793A\uFF0C\u5426\u5219\u53EA\u6709\u6ED1\u52A8\u65F6\u5C55\u793A\u3002",paraId:4,tocIndex:5},{value:"\u5F53 ",paraId:5,tocIndex:6},{value:"value",paraId:5,tocIndex:6},{value:" \u6216 ",paraId:5,tocIndex:6},{value:"defaultValue",paraId:5,tocIndex:6},{value:" \u7C7B\u578B\u4E3A",paraId:5,tocIndex:6},{value:"[number, number]",paraId:5,tocIndex:6},{value:"\u65F6\uFF0C\u4F1A\u542F\u7528\u53CC\u6ED1\u5757\u6A21\u5F0F\u3002",paraId:5,tocIndex:6},{value:"\u53CC\u6ED1\u5757\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:6,tocIndex:7},{value:"disableSwap",paraId:6,tocIndex:7},{value:" \u7981\u6B62\u524D\u540E\u6309\u94AE\u4EA4\u9519\u3002",paraId:6,tocIndex:7},{value:"\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"startIcon",paraId:7,tocIndex:8},{value:" \u53EF\u81EA\u5B9A\u4E49\u524D\u6309\u94AE\u56FE\u6807\uFF0C\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"endIcon",paraId:7,tocIndex:8},{value:" \u53EF\u81EA\u5B9A\u4E49\u540E\u6309\u94AE\u56FE\u6807\u3002",paraId:7,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"disabled",paraId:8,tocIndex:9},{value:" \u7981\u7528\u7EC4\u4EF6\u3002",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"tooltipRender",paraId:9,tocIndex:10},{value:" \u53EF\u81EA\u5B9A\u4E49\u63D0\u793A\u6C14\u6CE1\u3002",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:11},{value:"\u8BF4\u660E",paraId:10,tocIndex:11},{value:"\u7C7B\u578B",paraId:10,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:11},{value:"defaultValue",paraId:10,tocIndex:11},{value:"\u8BBE\u7F6E\u521D\u59CB\u53D6\u503C\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:11},{value:"number | [number, number]",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"value",paraId:10,tocIndex:11},{value:"\u8BBE\u7F6E\u5F53\u524D\u503C,\u5F53\u7EC4\u4EF6\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:10,tocIndex:11},{value:"number | [number, number]",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"min",paraId:10,tocIndex:11},{value:"\u6700\u5C0F\u503C",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"0",paraId:10,tocIndex:11},{value:"max",paraId:10,tocIndex:11},{value:"\u6700\u5927\u503C",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"100",paraId:10,tocIndex:11},{value:"step",paraId:10,tocIndex:11},{value:"\u6B65\u957F\uFF0C\u53D6\u503C\u5FC5\u987B\u5927\u4E8E 0\uFF0C\u5E76\u4E14\u53EF\u88AB (max - min) \u6574\u9664",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"1",paraId:10,tocIndex:11},{value:"tipVisible",paraId:10,tocIndex:11},{value:"\u63D0\u793A\u6C14\u6CE1\u662F\u5426\u603B\u662F\u53EF\u89C1",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"tooltipRender",paraId:10,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u63D0\u793A\u6C14\u6CE1",paraId:10,tocIndex:11},{value:"(value: number) => React.ReactNode",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"disabled",paraId:10,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"startIcon",paraId:10,tocIndex:11},{value:"\u5F00\u59CB\u56FE\u6807",paraId:10,tocIndex:11},{value:"React.ReactNode",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"endIcon",paraId:10,tocIndex:11},{value:"\u7ED3\u675F\u56FE\u6807",paraId:10,tocIndex:11},{value:"React.ReactNode",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"disableSwap",paraId:10,tocIndex:11},{value:"\u7981\u6B62\u5F00\u59CB\u56FE\u6807\u548C\u7ED3\u675F\u56FE\u6807\u4EA4\u9519",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"onChange",paraId:10,tocIndex:11},{value:"\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:10,tocIndex:11},{value:"(event: React.SyntheticEvent,data: {value: SliderValue;buttonIndex: number}) => void",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u8BF4\u660E",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"\u5168\u5C40\u53D8\u91CF",paraId:11,tocIndex:12},{value:"--line-color",paraId:11,tocIndex:12},{value:"\u7EBF\u6761\u524D\u666F\u8272",paraId:11,tocIndex:12},{value:"--bui-color-primary",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"--line-bg-color",paraId:11,tocIndex:12},{value:"\u7EBF\u6761\u80CC\u666F\u8272",paraId:11,tocIndex:12},{value:"--bui-color-border-default",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"--width",paraId:11,tocIndex:12},{value:"\u6ED1\u52A8\u8F93\u5165\u6761\u5BBD\u5EA6",paraId:11,tocIndex:12},{value:"100%",paraId:11,tocIndex:12},{value:"--bui-slider-width",paraId:11,tocIndex:12},{value:"--height",paraId:11,tocIndex:12},{value:"\u6ED1\u52A8\u8F93\u5165\u6761\u9AD8\u5EA6",paraId:11,tocIndex:12},{value:"2px",paraId:11,tocIndex:12},{value:"--bui-slider-height",paraId:11,tocIndex:12},{value:"--padding",paraId:11,tocIndex:12},{value:"\u6ED1\u52A8\u8F93\u5165\u6761\u5185\u8FB9\u8DDD",paraId:11,tocIndex:12},{value:"19px 0",paraId:11,tocIndex:12},{value:"--bui-slider-padding",paraId:11,tocIndex:12},{value:"--button-width",paraId:11,tocIndex:12},{value:"\u6ED1\u52A8\u6309\u94AE\u5BBD\u5EA6",paraId:11,tocIndex:12},{value:"100%",paraId:11,tocIndex:12},{value:"--bui-slider-button-width",paraId:11,tocIndex:12},{value:"--button-height",paraId:11,tocIndex:12},{value:"\u6ED1\u52A8\u6309\u94AE\u9AD8\u5EA6",paraId:11,tocIndex:12},{value:"2px",paraId:11,tocIndex:12},{value:"--bui-slider-button-height",paraId:11,tocIndex:12},{value:"--button-font-size",paraId:11,tocIndex:12},{value:"\u6ED1\u52A8\u6309\u94AE\u5B57\u4F53\u5927\u5C0F",paraId:11,tocIndex:12},{value:"--line-color",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"--button-border-radius",paraId:11,tocIndex:12},{value:"\u6ED1\u52A8\u6309\u94AE\u8FB9\u6846\u5706\u89D2",paraId:11,tocIndex:12},{value:"50%",paraId:11,tocIndex:12},{value:"--bui-slider-button-border-radius",paraId:11,tocIndex:12},{value:"--tooltip-font-size",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u6C14\u6CE1\u5B57\u4F53\u5927\u5C0F",paraId:11,tocIndex:12},{value:"--bui-text-size-3",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"--tooltip-color",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u6C14\u6CE1\u5B57\u4F53\u989C\u8272",paraId:11,tocIndex:12},{value:"--bui-color-white",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"--tooltip-bg-color",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u6C14\u6CE1\u80CC\u666F\u989C\u8272",paraId:11,tocIndex:12},{value:"--line-color",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"--tooltip-width",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u6C14\u6CE1\u5BBD\u5EA6",paraId:11,tocIndex:12},{value:"46px",paraId:11,tocIndex:12},{value:"--bui-slider-tooltip-width",paraId:11,tocIndex:12},{value:"--tooltip-height",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u6C14\u6CE1\u9AD8\u5EA6",paraId:11,tocIndex:12},{value:"24px",paraId:11,tocIndex:12},{value:"--bui-slider-tooltip-height",paraId:11,tocIndex:12},{value:"--tooltip-line-height",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u6C14\u6CE1\u884C\u9AD8",paraId:11,tocIndex:12},{value:"24px",paraId:11,tocIndex:12},{value:"--bui-slider-tooltip-line-height",paraId:11,tocIndex:12},{value:"--tooltip-border-radius",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u6C14\u6CE1\u8FB9\u6846\u5706\u89D2",paraId:11,tocIndex:12},{value:"24px",paraId:11,tocIndex:12},{value:"--bui-slider-tooltip-border-radius",paraId:11,tocIndex:12}]},18402:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"Stack \u662F\u7528\u6765\u63A7\u5236\u5782\u76F4\u6216\u8005\u6C34\u5E73\u6392\u5217\u5143\u7D20\u7684\u5BB9\u5668\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u60A8\u53EF\u4EE5\u901A\u8FC7",paraId:1,tocIndex:2},{value:"direction",paraId:1,tocIndex:2},{value:`\u5C5E\u6027\u6765\u63A7\u5236\u5B50\u8282\u70B9\u5782\u76F4/\u6C34\u5E73\u5206\u5E03\u3002
\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7`,paraId:1,tocIndex:2},{value:"alignItem",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"justifyContent",paraId:1,tocIndex:2},{value:`\u6765\u63A7\u5236\u5B50\u8282\u70B9\u5728\u4E3B\u8F74/\u4EA4\u53C9\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002
\u9664\u6B64\u4E4B\u5916\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7`,paraId:1,tocIndex:2},{value:"spacing",paraId:1,tocIndex:2},{value:`\u63A7\u5236\u5B50\u8282\u70B9\u4E4B\u95F4\u95F4\u8DDD\u3002
\u793A\u4F8B\u6587\u6863\u5982\u4E0B\uFF1A`,paraId:1,tocIndex:2},{value:"\u4F7F\u7528",paraId:2,tocIndex:4},{value:"divider",paraId:2,tocIndex:4},{value:"\u5C5E\u6027\uFF0C\u60A8\u53EF\u4EE5\u5728\u6BCF\u4E2A\u5B50\u5143\u7D20\u4E4B\u95F4\u63D2\u5165\u4E00\u4E2A\u5143\u7D20\u3002",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"direction",paraId:3,tocIndex:6},{value:"\u8BBE\u7F6E\u5B50\u8282\u70B9\u5782\u76F4/\u6C34\u5E73\u5206\u5E03",paraId:3,tocIndex:6},{value:"row",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"row-reverse",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"column",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"column-reverse",paraId:3,tocIndex:6},{value:"column",paraId:3,tocIndex:6},{value:"alignItems",paraId:3,tocIndex:6},{value:"\u4EA4\u53C9\u8F74\u8F74\u4E0A\u5BF9\u9F50\u65B9\u5F0F",paraId:3,tocIndex:6},{value:"flex-start",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:"\uFF5C ",paraId:3,tocIndex:6},{value:"flex-end",paraId:3,tocIndex:6},{value:"\uFF5C ",paraId:3,tocIndex:6},{value:"stretch",paraId:3,tocIndex:6},{value:" \uFF5C",paraId:3,tocIndex:6},{value:"baseline",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:"justifyContent",paraId:3,tocIndex:6},{value:"\u4E3B\u8F74\u4E0A\u5BF9\u9F50\u65B9\u5F0F",paraId:3,tocIndex:6},{value:"flex-start",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"flex-end",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"space-between",paraId:3,tocIndex:6},{value:" \uFF5C",paraId:3,tocIndex:6},{value:"space-around",paraId:3,tocIndex:6},{value:" \uFF5C",paraId:3,tocIndex:6},{value:"space-evenly",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:"flexWrap",paraId:3,tocIndex:6},{value:"\u8D85\u51FA\u6362\u884C",paraId:3,tocIndex:6},{value:"wrap",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"nowrap",paraId:3,tocIndex:6},{value:"\uFF5C ",paraId:3,tocIndex:6},{value:"wrap-reverse",paraId:3,tocIndex:6},{value:"nowrap",paraId:3,tocIndex:6},{value:"spacing",paraId:3,tocIndex:6},{value:"\u8BBE\u7F6E\u5B50\u8282\u70B9\u4E4B\u95F4\u95F4\u8DDD",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"divider",paraId:3,tocIndex:6},{value:"\u5206\u5272\u7EBF\uFF0C\u5141\u8BB8\u5728\u6BCF\u4E2A\u5B50\u8282\u70B9\u4E4B\u95F4\u63D2\u5165\u4E00\u4E2A\u5143\u7D20",paraId:3,tocIndex:6},{value:"ReactNode \uFF5C boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6}]},73733:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u6B65\u9AA4\u6D41\u7A0B\u5BFC\u822A\u6761\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u65B9\u5411\u4E3A\u7EB5\u5411\uFF0C\u82E5\u672A\u6307\u5B9A current\uFF0C\u5219\u9ED8\u8BA4\u4E3A 0\uFF0C\u5373\u7B2C\u4E00\u6B65",paraId:1,tocIndex:2},{value:"\u901A\u8FC7",paraId:2,tocIndex:3},{value:"direction",paraId:2,tocIndex:3},{value:"\u6539\u53D8\u6B65\u9AA4\u6761\u65B9\u5411",paraId:2,tocIndex:3},{value:"\u82E5\u6709\u526F\u6807\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:3,tocIndex:4},{value:"labelPlacement",paraId:3,tocIndex:4},{value:"\u6539\u53D8\u5176\u5C55\u793A\u4F4D\u7F6E",paraId:3,tocIndex:4},{value:"\u4F20\u5165",paraId:4,tocIndex:5},{value:"description",paraId:4,tocIndex:5},{value:"\u53EF\u6DFB\u52A0\u63CF\u8FF0\u8BF4\u660E\u3002",paraId:4,tocIndex:5},{value:"\u53EF\u901A\u8FC7 status \u63A7\u5236\u6B65\u9AA4\u72B6\u6001\uFF0C",paraId:5,tocIndex:6},{value:"wait",paraId:5,tocIndex:6},{value:"\u4E3A\u7B49\u5F85\u4E2D\uFF0C ",paraId:5,tocIndex:6},{value:"active",paraId:5,tocIndex:6},{value:"\u4E3A\u5F53\u524D\u6FC0\u6D3B\uFF0C ",paraId:5,tocIndex:6},{value:"finish",paraId:5,tocIndex:6},{value:"\u4E3A\u5DF2\u5B8C\u6210\uFF0C ",paraId:5,tocIndex:6},{value:"error",paraId:5,tocIndex:6},{value:"\u4E3A\u5931\u8D25\u5DF2\u5B8C\u6210",paraId:5,tocIndex:6},{value:"\u901A\u8FC7",paraId:6,tocIndex:7},{value:"icon",paraId:6,tocIndex:7},{value:"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5404\u4E2A\u72B6\u6001\u7684\u56FE\u6807\u3002",paraId:6,tocIndex:7},{value:"\u901A\u8FC7",paraId:7,tocIndex:8},{value:"disabled",paraId:7,tocIndex:8},{value:"\u4F7F\u6B65\u9AA4\u53F0\u4E0D\u53EF\u70B9\u51FB",paraId:7,tocIndex:8},{value:"\u53EF\u901A\u8FC7\u5E38\u7528\u7684 css \u53D8\u91CF\u6539\u53D8\u7EC4\u4EF6\u6837\u5F0F",paraId:8,tocIndex:10},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u8BF4\u660E",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"current",paraId:9,tocIndex:12},{value:"\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\uFF0C\u4ECE 0 \u5F00\u59CB\u8BB0\u6570\uFF0C\u5728\u5B50 Step \u5143\u7D20\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 status \u5C5E\u6027\u8986\u76D6\u8BE5\u72B6\u6001",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"0",paraId:9,tocIndex:12},{value:"direction",paraId:9,tocIndex:12},{value:"\u6B65\u9AA4\u6761\u65B9\u5411",paraId:9,tocIndex:12},{value:"horizontal",paraId:9,tocIndex:12},{value:" | ",paraId:9,tocIndex:12},{value:"vertical",paraId:9,tocIndex:12},{value:"vertical",paraId:9,tocIndex:12},{value:"labelPlacement",paraId:9,tocIndex:12},{value:"\u6307\u5B9A\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E",paraId:9,tocIndex:12},{value:"horizontal",paraId:9,tocIndex:12},{value:" | ",paraId:9,tocIndex:12},{value:"vertical",paraId:9,tocIndex:12},{value:"horizontal",paraId:9,tocIndex:12},{value:"onChange",paraId:9,tocIndex:12},{value:"\u70B9\u51FB\u5207\u6362\u6B65\u9AA4\u65F6\u89E6\u53D1",paraId:9,tocIndex:12},{value:"(ev?: SyntheticEvent,data?: { current: number }) =>void",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"\u5C5E\u6027",paraId:10,tocIndex:13},{value:"\u8BF4\u660E",paraId:10,tocIndex:13},{value:"\u7C7B\u578B",paraId:10,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:13},{value:"title",paraId:10,tocIndex:13},{value:"\u6807\u9898",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"subtitle",paraId:10,tocIndex:13},{value:"\u526F\u6807\u9898",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"description",paraId:10,tocIndex:13},{value:"\u6B65\u9AA4\u7684\u8BE6\u60C5\u63CF\u8FF0",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"icon",paraId:10,tocIndex:13},{value:"\u6B65\u9AA4\u56FE\u6807",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"status",paraId:10,tocIndex:13},{value:"\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001",paraId:10,tocIndex:13},{value:"wait",paraId:10,tocIndex:13},{value:" | ",paraId:10,tocIndex:13},{value:"active",paraId:10,tocIndex:13},{value:" | ",paraId:10,tocIndex:13},{value:"finish",paraId:10,tocIndex:13},{value:" | ",paraId:10,tocIndex:13},{value:"error",paraId:10,tocIndex:13},{value:"active",paraId:10,tocIndex:13},{value:"disabled",paraId:10,tocIndex:13},{value:"\u662F\u5426\u7981\u6B62\u70B9\u51FB",paraId:10,tocIndex:13},{value:"boolean",paraId:10,tocIndex:13},{value:"false",paraId:10,tocIndex:13},{value:"onClick",paraId:10,tocIndex:13},{value:"\u6B65\u9AA4\u56FE\u6807",paraId:10,tocIndex:13},{value:"(ev?: SyntheticEvent,data?: { current: number }) =>void",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"\u5C5E\u6027",paraId:11,tocIndex:14},{value:"\u8BF4\u660E",paraId:11,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:14},{value:"\u5168\u5C40\u53D8\u91CF",paraId:11,tocIndex:14},{value:"--font-size",paraId:11,tocIndex:14},{value:"\u9ED8\u8BA4\u5B57\u4F53\u5927\u5C0F",paraId:11,tocIndex:14},{value:"--bui-title-size-3",paraId:11,tocIndex:14},{value:"--bui-steps-font-size",paraId:11,tocIndex:14},{value:"--title-font-size",paraId:11,tocIndex:14},{value:"\u4E3B\u6807\u9898\u5B57\u4F53\u5927\u5C0F",paraId:11,tocIndex:14},{value:"--bui-title-size-4",paraId:11,tocIndex:14},{value:"-",paraId:11,tocIndex:14},{value:"--title-font-weight",paraId:11,tocIndex:14},{value:"\u4E3B\u6807\u9898\u5B57\u91CD",paraId:11,tocIndex:14},{value:"--bui-font-weight-medium",paraId:11,tocIndex:14},{value:"-",paraId:11,tocIndex:14},{value:"--subtitle-font-size",paraId:11,tocIndex:14},{value:"\u526F\u6807\u9898\u5B57\u4F53\u5927\u5C0F",paraId:11,tocIndex:14},{value:"--bui-text-size-2",paraId:11,tocIndex:14},{value:"--bui-step-subtitle-font-size",paraId:11,tocIndex:14},{value:"--step-icon-margin",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u56FE\u6807\u5916\u8FB9\u8DDD",paraId:11,tocIndex:14},{value:"--bui-spacing-xs --bui-spacing-xs 0 0",paraId:11,tocIndex:14},{value:"--bui-step-icon-margin",paraId:11,tocIndex:14},{value:"--step-line-padding",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u8FDE\u7EBF\u5185\u8FB9\u8DDD",paraId:11,tocIndex:14},{value:"20px 0 3px 0",paraId:11,tocIndex:14},{value:"--bui-step-line-padding",paraId:11,tocIndex:14},{value:"--step-line-width",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u8FDE\u7EBF\u5BBD\u5EA6",paraId:11,tocIndex:14},{value:"1px",paraId:11,tocIndex:14},{value:"--bui-step-line-width",paraId:11,tocIndex:14},{value:"--step-line-height",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u8FDE\u7EBF\u9AD8\u5EA6",paraId:11,tocIndex:14},{value:"100%",paraId:11,tocIndex:14},{value:"--bui-step-line-height",paraId:11,tocIndex:14},{value:"--step-label-horizontal-line-height",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u6807\u7B7E\u6C34\u5E73\u65B9\u5411\u884C\u9AD8",paraId:11,tocIndex:14},{value:"1.8",paraId:11,tocIndex:14},{value:"--bui-step-label-horizontal-line-height",paraId:11,tocIndex:14},{value:"--step-icon-width",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u56FE\u6807\u5BBD\u5EA6",paraId:11,tocIndex:14},{value:"28px",paraId:11,tocIndex:14},{value:"--bui-step-icon-width",paraId:11,tocIndex:14},{value:"--step-icon-font-size",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u56FE\u6807",paraId:11,tocIndex:14},{value:"var(--bui-title-size-4)",paraId:11,tocIndex:14},{value:"--bui-step-icon-font-size",paraId:11,tocIndex:14},{value:"--step-icon-active-width",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u5F53\u524D\u6FC0\u6D3B\u56FE\u6807\u5BBD\u5EA6",paraId:11,tocIndex:14},{value:"12px",paraId:11,tocIndex:14},{value:"--bui-step-icon-active-width",paraId:11,tocIndex:14},{value:"--step-icon-active-height",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u5F53\u524D\u6FC0\u6D3B\u56FE\u6807\u9AD8\u5EA6",paraId:11,tocIndex:14},{value:"12px",paraId:11,tocIndex:14},{value:"--bui-step-icon-active-height",paraId:11,tocIndex:14},{value:"--step-icon-margin",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u56FE\u6807\u5916\u8FB9\u8DDD",paraId:11,tocIndex:14},{value:"var(--bui-spacing-xs) var(--bui-spacing-xs) 0 0",paraId:11,tocIndex:14},{value:"--bui-step-icon-margin",paraId:11,tocIndex:14},{value:"--step-content-padding",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u5185\u5BB9\u5185\u8FB9\u8DDD",paraId:11,tocIndex:14},{value:"3px 0",paraId:11,tocIndex:14},{value:"--bui-step-content-padding",paraId:11,tocIndex:14},{value:"--step-horizontal-line-padding",paraId:11,tocIndex:14},{value:"\u6B65\u9AA4\u6761\u6C34\u5E73\u8FDE\u7EBF\u5185\u8FB9\u8DDD",paraId:11,tocIndex:14},{value:"28px 0 6px",paraId:11,tocIndex:14},{value:"--bui-step-horizontal-line-padding",paraId:11,tocIndex:14}]},6256:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:`\u6ED1\u5757\u89C6\u56FE\u5BB9\u5668\uFF0C\u7528\u4E8E\u5236\u4F5C\u8F6E\u64AD\u3001\u5206\u9875\u5C55\u793A\u7B49\u5E38\u7528\u5E03\u5C40\u3002
\u5C0F\u7A0B\u5E8F\u7AEF\u76F4\u63A5\u4F7F\u7528\u4E86Taro\u7684Swiper\u7EC4\u4EF6\uFF0CH5\u7AEF\u5219\u4F7F\u7528Swiper/react\u5E76\u62C9\u9F50\u4E86\u5165\u53C2\u3002`,paraId:0,tocIndex:0},{value:"\u5C0F\u7A0B\u5E8F\u6587\u6863\u53C2\u8003\uFF1A",paraId:1,tocIndex:0},{value:"https://taro-docs.jd.com/docs/components/viewContainer/swiper",paraId:1,tocIndex:0},{value:"Swiper\u5185\u5D4C\u5957SwiperItem\u5373\u53EF\u6784\u5EFA\u4E00\u4E2A\u57FA\u7840\u7684\u6ED1\u5757\u89C6\u56FE\u5BB9\u5668\u3002",paraId:2,tocIndex:2},{value:`\u4F20\u5165current\u4EE5\u8BBE\u7F6E\u5F53\u524D\u9875\u9762\uFF0C\u5F53\u6570\u636E\u53D8\u66F4\u65F6\u4F1A\u89E6\u53D1\u9875\u9762\u5207\u6362\u3002
\u5982\u679C\u9700\u8981\u540C\u65F6\u517C\u5BB9\u6ED1\u52A8\u548Ccurrent\u63A7\u5236\uFF0C\u5219\u8FD8\u9700\u8981\u4F7F\u7528onChange\u4E8B\u4EF6\u540C\u6B65\u5F53\u524D\u9875\u9762\u4F4D\u7F6E\u3002`,paraId:3,tocIndex:3},{value:`\u4F20\u5165autoplay\u4EE5\u542F\u7528\u81EA\u52A8\u5207\u6362\u3002
\u4F7F\u7528interval\u63A7\u5236\u4E24\u6B21\u81EA\u52A8\u5207\u6362\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u5355\u4F4D\u4E3A\u6BEB\u79D2\uFF09\u3002`,paraId:4,tocIndex:4},{value:"\u4F20\u5165circular\u4F7F\u5F97\u8BE5\u5BB9\u5668\u80FD\u591F\u5411\u540C\u4E00\u65B9\u5411\u65E0\u9650\u5FAA\u73AF\u6EDA\u52A8\u3002",paraId:5,tocIndex:5},{value:"\u4F20\u5165effect\u53C2\u6570\u9009\u62E9\u5207\u6362\u6548\u679C\u3002",paraId:6,tocIndex:6},{value:"\u4F20\u5165vertical\u4F7F\u5F97\u8BE5\u5BB9\u5668\u5782\u76F4\uFF08\u800C\u975E\u6C34\u5E73\uFF09\u6EDA\u52A8\u3002",paraId:7,tocIndex:7},{value:`\u4F20\u5165indicatorDots\u542F\u7528\u9875\u9762\u6307\u793A\u5668\uFF08\u5C0F\u5706\u70B9\uFF09\u3002
\u4F7F\u7528indicatorColor\u548CindicatorActiveColor\u8BBE\u7F6E\u5C0F\u5706\u70B9\u7684\u989C\u8272\u3002`,paraId:8,tocIndex:8},{value:`\u652F\u6301onChange\u548ConAnimationFinish\u4E8B\u4EF6\u3002
\u5177\u4F53\u8FD4\u56DE\u503C\u5728\u5BF9\u5E94\u4E8B\u4EF6\u5BF9\u8C61\u7684detail\u4E2D\u3002`,paraId:9,tocIndex:9},{value:"\u5C5E\u6027",paraId:10,tocIndex:10},{value:"\u8BF4\u660E",paraId:10,tocIndex:10},{value:"\u7C7B\u578B",paraId:10,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:10},{value:"current",paraId:10,tocIndex:10},{value:"\u5F53\u524D\u7684\u9875\u9762\u4E0B\u6807",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"autoplay",paraId:10,tocIndex:10},{value:"\u81EA\u52A8\u5207\u6362",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"interval",paraId:10,tocIndex:10},{value:"\u81EA\u52A8\u5207\u6362\u7684\u95F4\u9694\u65F6\u95F4",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"5000",paraId:10,tocIndex:10},{value:"duration",paraId:10,tocIndex:10},{value:"\u5207\u6362\u52A8\u753B\u65F6\u95F4",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"500",paraId:10,tocIndex:10},{value:"displayMultipleItems",paraId:10,tocIndex:10},{value:"\u6BCF\u5C4F\u5C55\u793A\u7684\u5F20\u6570",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"1",paraId:10,tocIndex:10},{value:"circular",paraId:10,tocIndex:10},{value:"\u5FAA\u73AF\u5C55\u793A",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"vertical",paraId:10,tocIndex:10},{value:"\u5782\u76F4\u6A21\u5F0F",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"spaceBetween",paraId:10,tocIndex:10},{value:"\u4E24\u5F20\u4E4B\u95F4\u7684\u95F4\u8DDD",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"previousMargin",paraId:10,tocIndex:10},{value:"\u6F0F\u51FA\u4E0A\u4E00\u5F20\u7684\u5BBD\u5EA6\uFF08\u9AD8\u5EA6\uFF09",paraId:10,tocIndex:10},{value:"number | string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"nextMargin",paraId:10,tocIndex:10},{value:"\u6F0F\u51FA\u4E0B\u4E00\u5F20\u7684\u5BBD\u5EA6\uFF08\u9AD8\u5EA6\uFF09",paraId:10,tocIndex:10},{value:"number | string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"indicatorDots",paraId:10,tocIndex:10},{value:"\u9875\u9762\u6307\u793A\u5668\uFF08\u5C0F\u5706\u70B9\uFF09",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"indicatorColor",paraId:10,tocIndex:10},{value:"\u9875\u9762\u6307\u793A\u5668\u975E\u5F53\u524D\u9875\u7684\u989C\u8272",paraId:10,tocIndex:10},{value:"string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"indicatorActiveColor",paraId:10,tocIndex:10},{value:"\u9875\u9762\u6307\u793A\u5668\u5F53\u524D\u9875\u7684\u989C\u8272",paraId:10,tocIndex:10},{value:"string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"onChange",paraId:10,tocIndex:10},{value:"\u5207\u6362\u56DE\u8C03\uFF08\u677E\u624B\u548C\u5207\u6362\u65F6\u89E6\u53D1\uFF09",paraId:10,tocIndex:10},{value:"event=>void",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"onAnimationFinish",paraId:10,tocIndex:10},{value:"\u52A8\u753B\u7ED3\u675F\u56DE\u8C03\uFF08\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1\uFF09",paraId:10,tocIndex:10},{value:"event=>void",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"\u5C5E\u6027",paraId:11,tocIndex:11},{value:"\u8BF4\u660E",paraId:11,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:11},{value:"\u5168\u5C40\u53D8\u91CF",paraId:11,tocIndex:11},{value:"--height",paraId:11,tocIndex:11},{value:"\u9AD8\u5EA6",paraId:11,tocIndex:11},{value:"150px",paraId:11,tocIndex:11},{value:"--bui-swiper-height",paraId:11,tocIndex:11}]},27678:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u53EA\u9700\u8F7B\u70B9\u6309\u94AE\uFF0C\u7528\u6237\u5C31\u53EF\u4EE5\u89E6\u53D1\u52A8\u4F5C\u6216\u505A\u51FA\u9009\u62E9\u3002",paraId:0,tocIndex:0},{value:"Switch",paraId:1,tocIndex:2},{value:"\u57FA\u7840\u7528\u6CD5\u3002Switch \u9ED8\u8BA4\u989C\u8272\u4E3A",paraId:1,tocIndex:2},{value:"primary",paraId:1,tocIndex:2},{value:"\uFF0C\u9ED8\u8BA4\u5927\u5C0F\u4E3A",paraId:1,tocIndex:2},{value:"medium",paraId:1,tocIndex:2},{value:"\u3002",paraId:1,tocIndex:2},{value:"Switch",paraId:2,tocIndex:4},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86 5 \u79CD\u4E3B\u9898\u989C\u8272\uFF1A",paraId:2,tocIndex:4},{value:"primary",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"info",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"success",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"warning",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"danger",paraId:2,tocIndex:4},{value:"\uFF0C\u53EF\u901A\u8FC7",paraId:2,tocIndex:4},{value:"color",paraId:2,tocIndex:4},{value:"\u6765\u8BBE\u7F6E\u7EC4\u4EF6\u4E3B\u9898\u8272\u3002",paraId:2,tocIndex:4},{value:"color",paraId:2,tocIndex:4},{value:"\u5C5E\u6027\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"primary",paraId:2,tocIndex:4},{value:"\u3002",paraId:2,tocIndex:4},{value:"\u53EF\u901A\u8FC7",paraId:3,tocIndex:5},{value:"size",paraId:3,tocIndex:5},{value:"\u6765\u89C4\u5B9A\u7EC4\u4EF6\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u6709",paraId:3,tocIndex:5},{value:"small",paraId:3,tocIndex:5},{value:"\u3001",paraId:3,tocIndex:5},{value:"medium",paraId:3,tocIndex:5},{value:"\u3001",paraId:3,tocIndex:5},{value:"large",paraId:3,tocIndex:5},{value:"\u3002\u9ED8\u8BA4\u4E3A",paraId:3,tocIndex:5},{value:"medium",paraId:3,tocIndex:5},{value:"\u3002",paraId:3,tocIndex:5},{value:"\u901A\u8FC7",paraId:4,tocIndex:6},{value:"checkedChildren",paraId:4,tocIndex:6},{value:"\u548C",paraId:4,tocIndex:6},{value:"unCheckedChildren",paraId:4,tocIndex:6},{value:"\u6765\u81EA\u5B9A\u4E49\u72B6\u6001\u6587\u5B57\u6216\u56FE\u6807\u3002",paraId:4,tocIndex:6},{value:"\u901A\u8FC7",paraId:5,tocIndex:7},{value:"checked",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"onChange",paraId:5,tocIndex:7},{value:" \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u9009\u4E2D\u72B6\u6001\u3002",paraId:5,tocIndex:7},{value:"\u901A\u8FC7",paraId:6,tocIndex:8},{value:"inputProps",paraId:6,tocIndex:8},{value:"\u4F20\u5165\u7684 input \u5C5E\u6027\u53EF\u900F\u4F20\u81F3\u5185\u90E8",paraId:6,tocIndex:8},{value:"input",paraId:6,tocIndex:8},{value:"\u6807\u7B7E\u3002",paraId:6,tocIndex:8},{value:"\u901A\u8FC7",paraId:7,tocIndex:9},{value:"disabled",paraId:7,tocIndex:9},{value:"\u6307\u5B9A ",paraId:7,tocIndex:9},{value:"Switch",paraId:7,tocIndex:9},{value:"\u4E3A\u7981\u7528\u72B6\u6001\u3002",paraId:7,tocIndex:9},{value:"\u5C5E\u6027",paraId:8,tocIndex:10},{value:"\u8BF4\u660E",paraId:8,tocIndex:10},{value:"\u7C7B\u578B",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:10},{value:"checked",paraId:8,tocIndex:10},{value:"\u662F\u5426\u9009\u4E2D",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"defaultChecked",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u662F\u5426\u9009\u4E2D\uFF0C\u5F53\u7EC4\u4EF6\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"inputRef",paraId:8,tocIndex:10},{value:"\u5185\u90E8",paraId:8,tocIndex:10},{value:"<input>",paraId:8,tocIndex:10},{value:"\u6807\u7B7E\u7684 ref",paraId:8,tocIndex:10},{value:"React.Ref<HTMLInputElement>",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"inputProps",paraId:8,tocIndex:10},{value:"\u5185\u90E8",paraId:8,tocIndex:10},{value:"<input>",paraId:8,tocIndex:10},{value:"\u6807\u7B7E\u7684\u6807\u51C6\u5C5E\u6027",paraId:8,tocIndex:10},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"name",paraId:8,tocIndex:10},{value:"\u5185\u90E8",paraId:8,tocIndex:10},{value:"<input>",paraId:8,tocIndex:10},{value:"\u540D\u79F0\u6807\u8BC6",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"checkedChildren",paraId:8,tocIndex:10},{value:"\u9009\u4E2D\u65F6\u7684\u5185\u5BB9",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"unCheckedChildren",paraId:8,tocIndex:10},{value:"\u9009\u672A\u4E2D\u65F6\u7684\u5185\u5BB9",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"disabled",paraId:8,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"size",paraId:8,tocIndex:10},{value:"\u5927\u5C0F",paraId:8,tocIndex:10},{value:"small",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"large",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:"color",paraId:8,tocIndex:10},{value:"\u989C\u8272",paraId:8,tocIndex:10},{value:"info",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"primary",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"success",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"warning",paraId:8,tocIndex:10},{value:" | ",paraId:8,tocIndex:10},{value:"danger",paraId:8,tocIndex:10},{value:"primary",paraId:8,tocIndex:10},{value:"onChange",paraId:8,tocIndex:10},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:8,tocIndex:10},{value:"(e: React.SyntheticEvent,data: { checked: boolean;},) => void",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"\u5176\u4ED6\u5C5E\u6027\u89C1 ",paraId:9,tocIndex:10},{value:"label",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:11},{value:"\u8BF4\u660E",paraId:10,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:11},{value:"\u5168\u5C40\u53D8\u91CF",paraId:10,tocIndex:11},{value:"--bg-color",paraId:10,tocIndex:11},{value:"\u80CC\u666F\u989C\u8272",paraId:10,tocIndex:11},{value:"#ccc",paraId:10,tocIndex:11},{value:"--bui-switch-bg-color",paraId:10,tocIndex:11},{value:"--padding",paraId:10,tocIndex:11},{value:"\u5185\u8FB9\u8DDD",paraId:10,tocIndex:11},{value:"0",paraId:10,tocIndex:11},{value:"--bui-switch-padding",paraId:10,tocIndex:11},{value:"--border-radius",paraId:10,tocIndex:11},{value:"\u5706\u89D2",paraId:10,tocIndex:11},{value:"15px",paraId:10,tocIndex:11},{value:"--bui-switch-border-radius",paraId:10,tocIndex:11},{value:"--small-width",paraId:10,tocIndex:11},{value:"\u5C0F\u53F7\u5F00\u5173\u5BBD\u5EA6",paraId:10,tocIndex:11},{value:"24px",paraId:10,tocIndex:11},{value:"--bui-switch-small-width",paraId:10,tocIndex:11},{value:"--small-height",paraId:10,tocIndex:11},{value:"\u5C0F\u53F7\u5F00\u5173\u9AD8\u5EA6",paraId:10,tocIndex:11},{value:"16px",paraId:10,tocIndex:11},{value:"--bui-switch-small-height",paraId:10,tocIndex:11},{value:"--small-font-size",paraId:10,tocIndex:11},{value:"\u5C0F\u53F7\u5B57\u4F53",paraId:10,tocIndex:11},{value:"9px",paraId:10,tocIndex:11},{value:"--bui-switch-small-font-size",paraId:10,tocIndex:11},{value:"--controller-small-width",paraId:10,tocIndex:11},{value:"\u5C0F\u53F7\u63A7\u4EF6\u5BBD\u5EA6",paraId:10,tocIndex:11},{value:"12px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-small-width",paraId:10,tocIndex:11},{value:"--controller-small-height",paraId:10,tocIndex:11},{value:"\u5C0F\u53F7\u63A7\u4EF6\u9AD8\u5EA6",paraId:10,tocIndex:11},{value:"12px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-small-height",paraId:10,tocIndex:11},{value:"--medium-width",paraId:10,tocIndex:11},{value:"\u4E2D\u53F7\u5F00\u5173\u5BBD\u5EA6",paraId:10,tocIndex:11},{value:"44px",paraId:10,tocIndex:11},{value:"--bui-switch-medium-width",paraId:10,tocIndex:11},{value:"--medium-height",paraId:10,tocIndex:11},{value:"\u4E2D\u53F7\u5F00\u5173\u9AD8\u5EA6",paraId:10,tocIndex:11},{value:"22px",paraId:10,tocIndex:11},{value:"--bui-switch-medium-height",paraId:10,tocIndex:11},{value:"--controller-medium-width",paraId:10,tocIndex:11},{value:"\u4E2D\u53F7\u63A7\u4EF6\u5BBD\u5EA6",paraId:10,tocIndex:11},{value:"18px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-medium-width",paraId:10,tocIndex:11},{value:"--controller-medium-height",paraId:10,tocIndex:11},{value:"\u4E2D\u53F7\u63A7\u4EF6\u9AD8\u5EA6",paraId:10,tocIndex:11},{value:"18px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-medium-height",paraId:10,tocIndex:11},{value:"--large-width",paraId:10,tocIndex:11},{value:"\u5927\u53F7\u5F00\u5173\u5BBD\u5EA6",paraId:10,tocIndex:11},{value:"51px",paraId:10,tocIndex:11},{value:"--bui-switch-large-width",paraId:10,tocIndex:11},{value:"--large-height",paraId:10,tocIndex:11},{value:"\u5927\u53F7\u5F00\u5173\u9AD8\u5EA6",paraId:10,tocIndex:11},{value:"30px",paraId:10,tocIndex:11},{value:"--bui-switch-large-height",paraId:10,tocIndex:11},{value:"--controller-large-width",paraId:10,tocIndex:11},{value:"\u5927\u53F7\u63A7\u4EF6\u5BBD\u5EA6",paraId:10,tocIndex:11},{value:"24px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-large-width",paraId:10,tocIndex:11},{value:"--controller-large-height",paraId:10,tocIndex:11},{value:"\u5927\u53F7\u63A7\u4EF6\u9AD8\u5EA6",paraId:10,tocIndex:11},{value:"24px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-large-height",paraId:10,tocIndex:11}]},78078:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u5E95\u90E8\u5BFC\u822A\u680F\uFF0C\u7528\u4E8E\u5207\u6362\u4E0D\u540C\u9875\u9762",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u76D1\u542C",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:"\u4E8B\u4EF6\u6765\u66F4\u65B0",paraId:1,tocIndex:2},{value:"current",paraId:1,tocIndex:2},{value:"\u503C\u53D8\u5316\uFF0C",paraId:1,tocIndex:2},{value:"current",paraId:1,tocIndex:2},{value:"\u503C\u5FC5\u586B\uFF0C \u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002",paraId:1,tocIndex:2},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:2,tocIndex:3},{value:"icon",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"activeIcon",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49",paraId:2,tocIndex:3},{value:"TabBarItem",paraId:2,tocIndex:3},{value:"\u7684\u9ED8\u8BA4\u56FE\u6807\u3001\u9009\u4E2D\u56FE\u6807",paraId:2,tocIndex:3},{value:"\u652F\u6301\u901A\u8FC7",paraId:3,tocIndex:4},{value:"color",paraId:3,tocIndex:4},{value:"\u3001",paraId:3,tocIndex:4},{value:"activeColor",paraId:3,tocIndex:4},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u4E3B\u9898\u8272\u3001\u9009\u4E2D\u4E3B\u9898\u8272\uFF0C\u4EE5\u6B64\u5B9E\u73B0\u81EA\u5B9A\u4E49\u56FE\u6807\u3001\u5B57\u4F53\u989C\u8272",paraId:3,tocIndex:4},{value:"\u652F\u6301\u901A\u8FC7BadgeProps\u5C5E\u6027\uFF0C\u8BBE\u7F6E",paraId:4,tocIndex:5},{value:"TabBarItem",paraId:4,tocIndex:5},{value:"\u76F8\u5E94\u7684\u5FBD\u6807\u5185\u5BB9",paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"current",paraId:5,tocIndex:7},{value:"\u5F53\u524D\u9009\u4E2D\u7684\u6807\u7B7E\u7D22\u5F15\u503C",paraId:5,tocIndex:7},{value:"number",paraId:5,tocIndex:7},{value:"0",paraId:5,tocIndex:7},{value:"color",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u4E3B\u9898\u8272",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"info",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"success",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"warning",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"danger",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"vip",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:"activeColor",paraId:5,tocIndex:7},{value:"\u9009\u4E2D\u4E3B\u9898\u8272",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"info",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"success",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"warning",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"danger",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"vip",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:"onChange",paraId:5,tocIndex:7},{value:"\u9009\u4E2D\u67D0\u4E00\u9879\u65F6\u7684\u56DE\u8C03",paraId:5,tocIndex:7},{value:"(e:SyntheticEvent, data:{value:number}) => void",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"title",paraId:6,tocIndex:8},{value:"\u6807\u9898",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"icon",paraId:6,tocIndex:8},{value:"\u56FE\u6807",paraId:6,tocIndex:8},{value:"ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"activeIcon",paraId:6,tocIndex:8},{value:"\u9009\u4E2D\u56FE\u6807",paraId:6,tocIndex:8},{value:"ReactNode",paraId:6,tocIndex:8},{value:"BadgeProps",paraId:6,tocIndex:8},{value:"\u5FBD\u6807",paraId:6,tocIndex:8},{value:"BadgeProps",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"\u5C5E\u6027",paraId:7,tocIndex:10},{value:"\u8BF4\u660E",paraId:7,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:10},{value:"\u5168\u5C40\u53D8\u91CF",paraId:7,tocIndex:10},{value:"--width",paraId:7,tocIndex:10},{value:"\u5BBD\u5EA6",paraId:7,tocIndex:10},{value:"100%",paraId:7,tocIndex:10},{value:"--bui-tab-bar-width",paraId:7,tocIndex:10},{value:"--height",paraId:7,tocIndex:10},{value:"\u9AD8\u5EA6",paraId:7,tocIndex:10},{value:"50px",paraId:7,tocIndex:10},{value:"--bui-tab-bar-height",paraId:7,tocIndex:10},{value:"--padding",paraId:7,tocIndex:10},{value:"\u5185\u8FB9\u8DDD",paraId:7,tocIndex:10},{value:"6px 0",paraId:7,tocIndex:10},{value:"--bui-tab-bar-padding",paraId:7,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u8BF4\u660E",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"\u5168\u5C40\u53D8\u91CF",paraId:8,tocIndex:11},{value:"--tab-color",paraId:8,tocIndex:11},{value:"\u6587\u5B57\u989C\u8272",paraId:8,tocIndex:11},{value:"--bui-color-fg-default",paraId:8,tocIndex:11},{value:"--bui-tab-bar-default-color",paraId:8,tocIndex:11}]},10967:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u6807\u7B7E\u9875\u5207\u6362\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u5C0F\u7A0B\u5E8F\u5207\u6362 Tab \u5E95\u90E8 Line \u4F7F\u7528\u6E10\u53D8\u52A8\u753B\uFF0CH5 \u4F7F\u7528\u4F4D\u79FB\u52A8\u753B;",paraId:1,tocIndex:1},{value:"\u5C0F\u7A0B\u5E8F\u5BF9\u4E8E\u8D85\u51FA\u53EF\u6EDA\u52A8\u7684 Tabs\uFF0C\u70B9\u51FB\u6FC0\u6D3B\u65E0\u6CD5\u79FB\u52A8\u5230\u89C6\u56FE\u4E2D\u95F4\u4F4D\u7F6E\u3002",paraId:1,tocIndex:1},{value:"\u642D\u914D Tab \u7EC4\u4EF6\u5B8C\u6210\u5E03\u5C40",paraId:2,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:4},{value:"tabs",paraId:3,tocIndex:4},{value:" \u751F\u6210 Tab\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"disabled",paraId:4,tocIndex:5},{value:" \u7981\u6B62 Tab \u89E6\u53D1\u70B9\u51FB\u3002",paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:5,tocIndex:9},{value:"\u8BF4\u660E",paraId:5,tocIndex:9},{value:"\u7C7B\u578B",paraId:5,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:9},{value:"value",paraId:5,tocIndex:9},{value:"\u5F53\u524D\u9009\u4E2D\u9762\u677F\u7684\u7D22\u5F15\u503C\uFF0C\u4E0E tabs.index \u5BF9\u5E94",paraId:5,tocIndex:9},{value:"string",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"tabs",paraId:5,tocIndex:9},{value:"\u5207\u6362\u9762\u677F\u7684\u6570\u636E",paraId:5,tocIndex:9},{value:"ITabItem[]",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"align",paraId:5,tocIndex:9},{value:"\u5BF9\u9F50\u65B9\u5F0F",paraId:5,tocIndex:9},{value:"start",paraId:5,tocIndex:9},{value:" | ",paraId:5,tocIndex:9},{value:"center",paraId:5,tocIndex:9},{value:"center",paraId:5,tocIndex:9},{value:"onChange",paraId:5,tocIndex:9},{value:"\u5207\u6362\u9762\u677F\u7684\u56DE\u8C03",paraId:5,tocIndex:9},{value:"(e?: SyntheticEvent,data?:{index: string}) => void",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u8BF4\u660E",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"title",paraId:6,tocIndex:10},{value:"\u9762\u677F\u6807\u9898",paraId:6,tocIndex:10},{value:"React.ReactNode",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"index",paraId:6,tocIndex:10},{value:"\u9762\u677F\u7684\u7D22\u5F15\u503C",paraId:6,tocIndex:10},{value:"string",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"disabled",paraId:6,tocIndex:10},{value:"\u9762\u677F\u662F\u5426\u7981\u7528",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"false",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:7,tocIndex:11},{value:"\u8BF4\u660E",paraId:7,tocIndex:11},{value:"\u7C7B\u578B",paraId:7,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:11},{value:"index",paraId:7,tocIndex:11},{value:"\u9762\u677F\u7684\u7D22\u5F15\u503C",paraId:7,tocIndex:11},{value:"string",paraId:7,tocIndex:11},{value:"-",paraId:7,tocIndex:11},{value:"disabled",paraId:7,tocIndex:11},{value:"\u9762\u677F\u662F\u5426\u7981\u7528",paraId:7,tocIndex:11},{value:"boolean",paraId:7,tocIndex:11},{value:"false",paraId:7,tocIndex:11},{value:"onClick",paraId:7,tocIndex:11},{value:"\u70B9\u51FB Tab \u7684\u56DE\u8C03",paraId:7,tocIndex:11},{value:"(e?: SyntheticEvent,data?:{index: string}) => void",paraId:7,tocIndex:11},{value:"-",paraId:7,tocIndex:11},{value:"\u5C5E\u6027",paraId:8,tocIndex:12},{value:"\u8BF4\u660E",paraId:8,tocIndex:12},{value:"\u7C7B\u578B",paraId:8,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:12},{value:"value",paraId:8,tocIndex:12},{value:"\u5F53\u524D\u9009\u4E2D\u9762\u677F\u7684 value",paraId:8,tocIndex:12},{value:"string",paraId:8,tocIndex:12},{value:"-",paraId:8,tocIndex:12},{value:"index",paraId:8,tocIndex:12},{value:"\u5BF9\u5E94 tabs \u5207\u6362\u9762\u677F\u7684\u6570\u636E\u4E2D\u7684 index",paraId:8,tocIndex:12},{value:"string",paraId:8,tocIndex:12},{value:"-",paraId:8,tocIndex:12},{value:"keepMounted",paraId:8,tocIndex:12},{value:"\u5F53 TabPanel \u88AB\u9690\u85CF\u65F6\u662F\u5426\u6E32\u67D3 DOM \u7ED3\u6784",paraId:8,tocIndex:12},{value:"boolean",paraId:8,tocIndex:12},{value:"false",paraId:8,tocIndex:12},{value:"\u5C5E\u6027",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:14},{value:"\u5168\u5C40\u53D8\u91CF",paraId:9,tocIndex:14},{value:"--height",paraId:9,tocIndex:14},{value:"Tabs \u9AD8\u5EA6",paraId:9,tocIndex:14},{value:"39px",paraId:9,tocIndex:14},{value:"--bui-tabs-height",paraId:9,tocIndex:14},{value:"--font-size",paraId:9,tocIndex:14},{value:"\u5B57\u4F53\u5927\u5C0F",paraId:9,tocIndex:14},{value:"--bui-text-size-1",paraId:9,tocIndex:14},{value:"-",paraId:9,tocIndex:14},{value:"--color",paraId:9,tocIndex:14},{value:"\u5B57\u4F53\u989C\u8272",paraId:9,tocIndex:14},{value:"--bui-color-fg-subtle",paraId:9,tocIndex:14},{value:"-",paraId:9,tocIndex:14},{value:"--active-color",paraId:9,tocIndex:14},{value:"\u6FC0\u6D3B Tab \u5B57\u4F53\u989C\u8272",paraId:9,tocIndex:14},{value:"--bui-color-fg-default",paraId:9,tocIndex:14},{value:"-",paraId:9,tocIndex:14},{value:"--line-color",paraId:9,tocIndex:14},{value:"\u4E0B\u6807\u7EBF\u989C\u8272",paraId:9,tocIndex:14},{value:"--bui-color-primary",paraId:9,tocIndex:14},{value:"-",paraId:9,tocIndex:14},{value:"--line-width",paraId:9,tocIndex:14},{value:"\u4E0B\u6807\u7EBF\u5BBD\u5EA6",paraId:9,tocIndex:14},{value:"18px",paraId:9,tocIndex:14},{value:"--bui-tabs-line-width",paraId:9,tocIndex:14},{value:"--line-height",paraId:9,tocIndex:14},{value:"\u4E0B\u6807\u7EBF\u9AD8\u5EA6",paraId:9,tocIndex:14},{value:"3PX",paraId:9,tocIndex:14},{value:"--bui-tabs-line-height",paraId:9,tocIndex:14},{value:"--mask-height",paraId:9,tocIndex:14},{value:"\u8499\u5C42\u9AD8\u5EA6",paraId:9,tocIndex:14},{value:"100%",paraId:9,tocIndex:14},{value:"--bui-tabs-mask-height",paraId:9,tocIndex:14},{value:"\u5C5E\u6027",paraId:10,tocIndex:15},{value:"\u8BF4\u660E",paraId:10,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:15},{value:"\u5168\u5C40\u53D8\u91CF",paraId:10,tocIndex:15},{value:"--height",paraId:10,tocIndex:15},{value:"Tab \u9AD8\u5EA6",paraId:10,tocIndex:15},{value:"100%",paraId:10,tocIndex:15},{value:"--bui-tab-height",paraId:10,tocIndex:15},{value:"--padding",paraId:10,tocIndex:15},{value:"Tab\u5185\u8FB9\u8DDD",paraId:10,tocIndex:15},{value:"var(--bui-spacing-lg) var(--bui-spacing-lg) 10px",paraId:10,tocIndex:15},{value:"--bui-tab-padding",paraId:10,tocIndex:15}]},90947:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u6807\u7B7E\u901A\u5E38\u662F\u5BF9\u4E00\u5757\u89C6\u89C9\u5143\u7D20\u8FDB\u884C\u6807\u8BB0\u6216\u8005\u8865\u5145\u8BF4\u660E\u3002",paraId:0,tocIndex:0},{value:"\u6807\u7B7E\u652F\u6301 ",paraId:1,tocIndex:2},{value:"\u63CF\u8FB9",paraId:1,tocIndex:2},{value:"\u3001 ",paraId:1,tocIndex:2},{value:"\u586B\u5145",paraId:1,tocIndex:2},{value:"\u3001 ",paraId:1,tocIndex:2},{value:"\u6D45\u4EAE",paraId:1,tocIndex:2},{value:` \u4E09\u79CD\u5C55\u793A\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u662F\u63CF\u8FB9\u6807\u7B7E\u3002
`,paraId:1,tocIndex:2},{value:"\u63CF\u8FB9\u6807\u7B7E",paraId:1,tocIndex:2},{value:`\uFF1A\u5E38\u89C1\u767D\u5E95\u80CC\u666F\u52A0\u8FB9\u6846\u5F62\u5F0F\uFF0C\u53EF\u4E0E\u586B\u5145\u6309\u94AE\u642D\u914D\u6210\u7EC4\u4F7F\u7528\u3002
`,paraId:1,tocIndex:2},{value:"\u586B\u5145\u6807\u7B7E",paraId:1,tocIndex:2},{value:`\uFF1A\u7528\u6237\u5728\u6574\u4E2A\u9875\u9762\u9700\u8981\u5173\u6CE8\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u6807\u7B7E\uFF0C\u5F15\u5BFC\u7528\u6237\u5173\u6CE8\u3002
`,paraId:1,tocIndex:2},{value:"\u6D45\u4EAE\u6807\u7B7E",paraId:1,tocIndex:2},{value:"\uFF1A\u6D45\u4EAE\u6A21\u5F0F\u5728\u89C6\u89C9\u5F3A\u8C03\u7A0B\u5EA6\u4E0A\u5F31\u4E8E\u586B\u5145\u6807\u7B7E\uFF0C\u80CC\u666F\u4E0E\u6587\u6848\u4E3A\u540C\u4E00\u4E3B\u9898\u8272\u3002",paraId:1,tocIndex:2},{value:"Tag \u6807\u7B7E\u652F\u6301 ",paraId:2,tocIndex:3},{value:"primary",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"success",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"info",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"warning",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"danger",paraId:2,tocIndex:3},{value:" \u4E3B\u9898\u5B9A\u4E49\u3002\u82E5\u4E0D\u8BBE\u7F6Ecolor\uFF0C\u5219\u9ED8\u8BA4\u4E3A",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:"\u9664\u4E86\u53EF\u4EE5\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684\u4E3B\u9898\u8272\u5916\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7",paraId:3,tocIndex:4},{value:"htmlColor",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u81EA\u5B9A\u4E49\u8272\u5F69\u3002",paraId:3,tocIndex:4},{value:"\u9664\u4E86\u5355\u4E2A\u6807\u7B7E Tag\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u7ED3\u5408",paraId:4,tocIndex:5},{value:"TagGroup",paraId:4,tocIndex:5},{value:"\u7EC4\u4EF6\u5B9E\u73B0\u7EC4\u5408\u6807\u7B7E\u3002",paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"color",paraId:5,tocIndex:7},{value:"\u6807\u7B7E\u4E3B\u9898\u8272",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"info",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"success",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"warning",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"danger",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:" | ",paraId:5,tocIndex:7},{value:"vip",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:"htmlColor",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6807\u7B7E\u989C\u8272",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"variant",paraId:5,tocIndex:7},{value:"\u6807\u7B7E\u7C7B\u578B",paraId:5,tocIndex:7},{value:"contained",paraId:5,tocIndex:7},{value:" \uFF5C",paraId:5,tocIndex:7},{value:"outlined",paraId:5,tocIndex:7},{value:"\uFF5C",paraId:5,tocIndex:7},{value:"light",paraId:5,tocIndex:7},{value:"contained",paraId:5,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:9},{value:"\u8BF4\u660E",paraId:6,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:9},{value:"\u5168\u5C40\u53D8\u91CF",paraId:6,tocIndex:9},{value:"--bg-color",paraId:6,tocIndex:9},{value:"Tag \u80CC\u666F\u8272",paraId:6,tocIndex:9},{value:"--bui-color-gay",paraId:6,tocIndex:9},{value:"--bui-tag-bg-color",paraId:6,tocIndex:9},{value:"--border-color",paraId:6,tocIndex:9},{value:"Tag \u8FB9\u6846\u8272",paraId:6,tocIndex:9},{value:"--bui-color-border-gay",paraId:6,tocIndex:9},{value:"--bui-tag-border-color",paraId:6,tocIndex:9},{value:"--color",paraId:6,tocIndex:9},{value:"Tag \u6587\u6848\u989C\u8272",paraId:6,tocIndex:9},{value:"--bui-color-gay",paraId:6,tocIndex:9},{value:"--bui-tag-color",paraId:6,tocIndex:9},{value:"--height",paraId:6,tocIndex:9},{value:"Tag \u9AD8\u5EA6",paraId:6,tocIndex:9},{value:"15px",paraId:6,tocIndex:9},{value:"--bui-tag-height",paraId:6,tocIndex:9},{value:"--line-height",paraId:6,tocIndex:9},{value:"Tag \u884C\u9AD8",paraId:6,tocIndex:9},{value:"15px",paraId:6,tocIndex:9},{value:"--bui-tag-line-height",paraId:6,tocIndex:9},{value:"--padding",paraId:6,tocIndex:9},{value:"Tag \u5185\u8FB9\u8DDD",paraId:6,tocIndex:9},{value:"0 var(--bui-spacing-xs)",paraId:6,tocIndex:9},{value:"--bui-tag-padding",paraId:6,tocIndex:9},{value:"--bg-color-vip",paraId:6,tocIndex:9},{value:"Tag \u4F1A\u5458\u4E3B\u9898\u8272",paraId:6,tocIndex:9},{value:"fade(#ff866e, 30%)",paraId:6,tocIndex:9},{value:"--bui-tag-color-vip",paraId:6,tocIndex:9},{value:"\u5C5E\u6027",paraId:7,tocIndex:10},{value:"\u8BF4\u660E",paraId:7,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:10},{value:"\u5168\u5C40\u53D8\u91CF",paraId:7,tocIndex:10},{value:"--height",paraId:7,tocIndex:10},{value:"\u5206\u5272\u7EBF\u9AD8\u5EA6",paraId:7,tocIndex:10},{value:"13%",paraId:7,tocIndex:10},{value:"--bui-tag-group-divider-height",paraId:7,tocIndex:10}]},3465:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u6587\u672C\u8F93\u5165\u6846\uFF0C\u7528\u4E8E\u8F93\u5165\u8F83\u957F\u5185\u5BB9\u65F6\u4F7F\u7528\u3002",paraId:0,tocIndex:0},{value:"\u652F\u6301",paraId:1,tocIndex:2},{value:"textarea",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u7684\u57FA\u7840\u5C5E\u6027\u900F\u4F20\uFF0C\u82E5\u8981\u900F\u4F20\u7684\u5C5E\u6027\u4E0D\u5728\u8BE5\u6587\u6863\u4E2D\uFF0C\u653E\u5165",paraId:1,tocIndex:2},{value:"textareaProps",paraId:1,tocIndex:2},{value:"\u5B57\u6BB5\u4E2D\u624D\u4F1A\u900F\u4F20\u81F3\u5185\u90E8",paraId:1,tocIndex:2},{value:"textarea",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u3002",paraId:1,tocIndex:2},{value:"showCount",paraId:2,tocIndex:3},{value:"\u4F1A\u63A7\u5236\u5C55\u793A\u8F93\u5165\u7684\u5B57\u6570\uFF0C\u4E00\u822C\u53EF\u642D\u914D",paraId:2,tocIndex:3},{value:"maxLength",paraId:2,tocIndex:3},{value:"\u4F7F\u7528\u3002",paraId:2,tocIndex:3},{value:"\u6839\u636E\u662F\u5426\u4F20\u5165 ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:" \u6765\u5224\u65AD\u662F\u5426\u4E3A\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u975E\u53D7\u63A7\u7EC4\u4EF6\u53EF\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"textareaRef",paraId:3,tocIndex:4},{value:" \u83B7\u53D6\u5143\u7D20\u6765\u63A7\u5236 ",paraId:3,tocIndex:4},{value:"textarea",paraId:3,tocIndex:4},{value:" \u7684 value\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"autoFocus",paraId:4,tocIndex:5},{value:" \u5B57\u6BB5\u63A7\u5236\u662F\u5426\u81EA\u52A8\u805A\u7126\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"autoSize",paraId:5,tocIndex:6},{value:" \u5B57\u6BB5\u63A7\u5236\u662F\u5426\u81EA\u52A8\u6491\u9AD8\uFF0C\u8BE5\u5B57\u6BB5\u4F20\u5165 ",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:" \u65F6\u4E0D\u9650\u5236\u9AD8\u5EA6\u5927\u5C0F\uFF0C\u4F20\u5165 ",paraId:5,tocIndex:6},{value:"object",paraId:5,tocIndex:6},{value:" \u65F6\u53EF\u63A7\u5236\u9AD8\u5EA6\u5927\u5C0F\uFF0C\u8D85\u51FA\u6700\u5927\u503C\u53EF\u6EDA\u52A8\u3002\u8BE5\u529F\u80FD\u4E0D\u652F\u6301\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u3002",paraId:5,tocIndex:6},{value:"\u5C5E\u6027",paraId:6,tocIndex:7},{value:"\u8BF4\u660E",paraId:6,tocIndex:7},{value:"\u7C7B\u578B",paraId:6,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:7},{value:"value",paraId:6,tocIndex:7},{value:"\u8F93\u5165\u6846\u5185\u5BB9\uFF0C\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"defaultValue",paraId:6,tocIndex:7},{value:"\u9ED8\u8BA4\u8F93\u5165\u6846\u5185\u5BB9\uFF0C\u975E\u53D7\u63A7\u65F6\u4F7F\u7528",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"textareaProps",paraId:6,tocIndex:7},{value:"\u5185\u90E8",paraId:6,tocIndex:7},{value:"<textarea>",paraId:6,tocIndex:7},{value:"\u6807\u7B7E\u7684\u6807\u51C6\u5C5E\u6027",paraId:6,tocIndex:7},{value:"TextareaHTMLAttributes<HTMLTextAreaElement>",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"textareaRef",paraId:6,tocIndex:7},{value:"\u5185\u90E8",paraId:6,tocIndex:7},{value:"<textarea>",paraId:6,tocIndex:7},{value:"\u6807\u7B7E\u7684 ref",paraId:6,tocIndex:7},{value:"React.Ref<HTMLTextAreaElement>",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"name",paraId:6,tocIndex:7},{value:"\u5185\u90E8",paraId:6,tocIndex:7},{value:"<textarea>",paraId:6,tocIndex:7},{value:"\u540D\u79F0\u6807\u8BC6",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"placeholder",paraId:6,tocIndex:7},{value:"\u5360\u4F4D\u5185\u5BB9",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"disabled",paraId:6,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"rows",paraId:6,tocIndex:7},{value:"\u6587\u672C\u6846\u884C\u6570",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"2",paraId:6,tocIndex:7},{value:"maxLength",paraId:6,tocIndex:7},{value:"\u5185\u5BB9\u6700\u5927\u957F\u5EA6",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"autoSize",paraId:6,tocIndex:7},{value:"\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u4E3A true | false \u6216\u5BF9\u8C61\uFF1A{minHeight?: number;maxHeight?: number}",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"autoFocus",paraId:6,tocIndex:7},{value:"\u662F\u5426\u81EA\u52A8\u805A\u7126",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"showCount",paraId:6,tocIndex:7},{value:"\u5C55\u793A\u5B57\u6570",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"onChange",paraId:6,tocIndex:7},{value:"\u6587\u672C\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:6,tocIndex:7},{value:"(e: React.ChangeEvent<HTMLTextAreaElement>,data: {value: string}) => void",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"\u5C5E\u6027",paraId:7,tocIndex:8},{value:"\u8BF4\u660E",paraId:7,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:8},{value:"\u5168\u5C40\u53D8\u91CF",paraId:7,tocIndex:8},{value:"--width",paraId:7,tocIndex:8},{value:"\u5BBD\u5EA6",paraId:7,tocIndex:8},{value:"100%",paraId:7,tocIndex:8},{value:"--bui-textarea-width",paraId:7,tocIndex:8},{value:"--bg-color",paraId:7,tocIndex:8},{value:"\u8F93\u5165\u6846\u5E95\u8272",paraId:7,tocIndex:8},{value:"--bui-color-bg-default",paraId:7,tocIndex:8},{value:"-",paraId:7,tocIndex:8},{value:"--text-color",paraId:7,tocIndex:8},{value:"\u8F93\u5165\u6846\u5B57\u4F53\u989C\u8272",paraId:7,tocIndex:8},{value:"--bui-color-fg-subtle",paraId:7,tocIndex:8},{value:"--bui-textarea-text-color",paraId:7,tocIndex:8},{value:"--count-bg-color",paraId:7,tocIndex:8},{value:"\u8BA1\u6570\u680F\u5E95\u8272",paraId:7,tocIndex:8},{value:"--bui-color-bg-default",paraId:7,tocIndex:8},{value:"-",paraId:7,tocIndex:8},{value:"--count-text-color",paraId:7,tocIndex:8},{value:"\u8BA1\u6570\u680F\u5B57\u4F53\u989C\u8272",paraId:7,tocIndex:8},{value:"--bui-color-fg-subtle",paraId:7,tocIndex:8},{value:"--bui-textarea-count-color",paraId:7,tocIndex:8},{value:"--text-font-size",paraId:7,tocIndex:8},{value:"\u8F93\u5165\u6846\u5B57\u4F53\u5927\u5C0F",paraId:7,tocIndex:8},{value:"--bui-text-size-2",paraId:7,tocIndex:8},{value:"--bui-textarea-text-font-size",paraId:7,tocIndex:8},{value:"--count-font-size",paraId:7,tocIndex:8},{value:"\u8F93\u5165\u6846\u5B57\u4F53\u5927\u5C0F",paraId:7,tocIndex:8},{value:"--bui-text-size-2",paraId:7,tocIndex:8},{value:"--bui-textarea-count-color",paraId:7,tocIndex:8},{value:"--content-padding",paraId:7,tocIndex:8},{value:"\u8F93\u5165\u6846\u5185\u8FB9\u8DDD",paraId:7,tocIndex:8},{value:"8px",paraId:7,tocIndex:8},{value:"--bui-textarea-padding",paraId:7,tocIndex:8},{value:"--count-padding",paraId:7,tocIndex:8},{value:"\u8BA1\u6570\u680F\u5185\u8FB9\u8DDD",paraId:7,tocIndex:8},{value:"4px",paraId:7,tocIndex:8},{value:"--bui-textarea-count-padding",paraId:7,tocIndex:8},{value:"--placeholder-line-height",paraId:7,tocIndex:8},{value:"\u5360\u4F4D\u7B26\u884C\u9AD8",paraId:7,tocIndex:8},{value:"1.3",paraId:7,tocIndex:8},{value:"--bui-textarea-placeholder-line-height",paraId:7,tocIndex:8}]},42090:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:`\u4E3B\u9898\u914D\u7F6E\uFF0C\u53EF\u4EE5\u7528\u6765\u6307\u5B9A\u7EC4\u4EF6\u989C\u8272\u3001\u5C3A\u5BF8\u3001\u8BED\u8A00\u7B49\u3002
`,paraId:0,tocIndex:0},{value:"ThemeProvider",paraId:0,tocIndex:0},{value:"\u4F9D\u8D56React\u7684",paraId:0,tocIndex:0},{value:"context",paraId:0,tocIndex:0},{value:"\u5C06\u4E3B\u9898\u3001\u56FD\u9645\u5316\u4F20\u9012\u7ED9\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u60A8\u9700\u8981\u786E\u4FDD",paraId:0,tocIndex:0},{value:"ThemeProvider",paraId:0,tocIndex:0},{value:" \u662F\u60A8\u5C1D\u8BD5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u7236\u7EA7\u3002",paraId:0,tocIndex:0},{value:"\u5F00\u53D1\u8005\u5728\u81EA\u5B9A\u4E49Tokens\u65F6\uFF0C\u9700\u6CE8\u610F\u4EE5\u4E0B\u4E24\u70B9",paraId:1,tocIndex:2},{value:"\uFF0C\u5173\u4E8E\u4E3B\u9898\u5B9A\u5236\u7684\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u53C2\u8003",paraId:1,tocIndex:2},{value:"\u5B9A\u5236\u4E3B\u9898",paraId:2,tocIndex:2},{value:"\u3002",paraId:1,tocIndex:2},{value:"\u4E0D\u8981\u6DF7\u6DC6\u5B9A\u4E49\uFF1A\u4E0D\u540C\u4E1A\u52A1\u573A\u666F\uFF0C\u5E94\u4F7F\u7528\u5BF9\u5E94\u7684API\u6765\u81EA\u5B9A\u4E49Tokens\uFF0C\u5982\u54CD\u5E94\u5F0F\u5E03\u5C40\u5E94\u4F7F\u7528 responsive \u5C5E\u6027\uFF0C\u6697\u9ED1\u6A21\u5F0F\u5E94\u4F7F\u7528 defaultDarkToken \u6216 dmDarkToken \u5C5E\u6027\uFF0C\u8986\u76D6\u5185\u7F6E\u9AD8\u4EAE\u6A21\u5F0FTokens\u5E94\u4F7F\u7528 defaultLightToken \u6216 dmLightToken \u3002",paraId:3,tocIndex:2},{value:"\u5206\u6E05\u4F18\u5148\u7EA7\uFF1A\u7279\u6B8A\u573A\u666F\u7684\u4F18\u5148\u7EA7\u6C38\u8FDC\u5927\u4E8E\u5168\u5C40\u901A\u7528\u573A\u666F\u3002",paraId:3,tocIndex:2},{value:"\u5728\u6D4F\u89C8\u5668\u4E2D\u53EF\u4EE5\u6BD4\u8F83\u7075\u6D3B\u5730\u81EA\u5B9A\u4E49Design Tokens\u3002",paraId:4,tocIndex:3},{value:"\u53EF\u901A\u8FC7\u5D4C\u5957",paraId:5,tocIndex:4},{value:"ThemeProvider",paraId:5,tocIndex:4},{value:"\u7EC4\u4EF6\u6765\u914D\u7F6E\u7EC4\u4EF6\u76F8\u5173\u7684\u5168\u5C40Design Tokens\uFF0CBUI\u6CA1\u6709\u9650\u5236\u5728\u7EC4\u4EF6\u5C42\u9762\u7684\u81EA\u5B9A\u4E49Tokens\u4E2D\u4F20\u5165\u5185\u7F6EToken\u5C5E\u6027\u6765\u590D\u5199\u5168\u5C40\u5185\u7F6EToken\uFF0C\u4F46\u5EFA\u8BAE\u975E\u5FC5\u8981\u65F6\u4E0D\u8981\u8FD9\u4E48\u505A\uFF0C\u4EE5\u514D\u5BFC\u81F4\u4E3B\u9898\u914D\u7F6E\u7684\u6DF7\u4E71\u3002",paraId:5,tocIndex:4},{value:"\u5C0F\u7A0B\u5E8F\u4E2D\u65E0\u6CD5\u52A8\u6001\u6CE8\u5165\u4EE3\u7801\uFF0C\u65E0\u6CD5\u901A\u8FC7",paraId:6,tocIndex:5},{value:"ThemeProvider",paraId:6,tocIndex:5},{value:"\u7EC4\u4EF6\u52A8\u6001\u914D\u7F6E\u4E3B\u9898\u548C\u54CD\u5E94\u5F0F\u76F8\u5173Design Tokens\uFF0C\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u6765\u4FEE\u6539\u5C0F\u7A0B\u5E8F\u4E3B\u9898\uFF1A",paraId:6,tocIndex:5},{value:"\u5728\u6837\u5F0F\u6587\u4EF6\u4E2D\u81EA\u884C\u4E66\u5199\u5BF9\u5E94\u9009\u62E9\u5668\u4E0B\u7684Tokens\uFF0C\u5168\u5C40\u6837\u5F0F\u6587\u4EF6\u7684\u4E3B\u9898\u914D\u7F6E\u4F1A\u88AB\u9875\u9762\u7EA7\u6837\u5F0F\u6587\u4EF6\u8986\u76D6\u3002",paraId:7,tocIndex:5},{value:"\u5C40\u90E8\u4E3B\u9898\u53EA\u80FD\u5728\u4F7F\u7528\u7EC4\u4EF6\u65F6\u901A\u8FC7\u5185\u8054\u7684\u65B9\u5F0F\u4F20\u5165css\u53D8\u91CF\u3002",paraId:7,tocIndex:5},{value:"BUI \u9ED8\u8BA4\u63D0\u4F9B\u4E86\u4E2D\u6587\u3001\u7E41\u4F53\u4E2D\u6587\u548C\u82F1\u8BED\u4E09\u79CD\u8BED\u8A00\uFF0C\u82E5\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u4E5F\u652F\u6301\u6309\u7EC4\u4EF6\u7EF4\u5EA6\u81EA\u5B9A\u4E49\u8BED\u8A00\uFF0C\u6B64\u5904\u5217\u51FA\u76EE\u524D\u6D89\u53CA\u56FD\u9645\u5316\u7684\u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728\u6F14\u793A\u91CC\u5207\u6362\u8BED\u8A00\u3002",paraId:8,tocIndex:6},{value:"\u5C5E\u6027",paraId:9,tocIndex:8},{value:"\u8BF4\u660E",paraId:9,tocIndex:8},{value:"\u7C7B\u578B",paraId:9,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:8},{value:"isRoot",paraId:9,tocIndex:8},{value:"\u5F53\u524DThemeProvider\u662F\u5426\u6302\u8F7D\u5728\u6700\u9876\u5C42",paraId:9,tocIndex:8},{value:"boolean",paraId:9,tocIndex:8},{value:"false",paraId:9,tocIndex:8},{value:"container",paraId:9,tocIndex:8},{value:"\u6302\u8F7D\u7684\u5BB9\u5668",paraId:9,tocIndex:8},{value:"ReactNode",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"containerId",paraId:9,tocIndex:8},{value:"\u6302\u8F7D\u5BB9\u5668\u7684id",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"locale",paraId:9,tocIndex:8},{value:"\u8BED\u8A00",paraId:9,tocIndex:8},{value:"BaseLang",paraId:9,tocIndex:8},{value:"zh-CN",paraId:9,tocIndex:8},{value:"responsive",paraId:9,tocIndex:8},{value:"\u54CD\u5E94\u5F0F\u5C4F\u5E55\u65AD\u70B9\u914D\u7F6E",paraId:9,tocIndex:8},{value:"ResponsiveTokenOptions",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"defaultLightToken",paraId:9,tocIndex:8},{value:"\u9ED8\u8BA4\u9AD8\u4EAE\u4E3B\u9898token",paraId:9,tocIndex:8},{value:"Record<string, string>",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"defaultDarkToken",paraId:9,tocIndex:8},{value:"\u9ED8\u8BA4\u6697\u9ED1\u4E3B\u9898token",paraId:9,tocIndex:8},{value:"Record<string, string>",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"dmLightToken",paraId:9,tocIndex:8},{value:"\u5927\u9EA6\u6697\u9ED1\u4E3B\u9898token",paraId:9,tocIndex:8},{value:"Record<string, string>",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"token",paraId:9,tocIndex:8},{value:"\u7EC4\u4EF6\u5168\u5C40Token",paraId:9,tocIndex:8},{value:"Record<string, string>",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"\u5C5E\u6027",paraId:10,tocIndex:9},{value:"\u8BF4\u660E",paraId:10,tocIndex:9},{value:"\u7C7B\u578B",paraId:10,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:9},{value:"xs",paraId:10,tocIndex:9},{value:"\u8D85\u5C0F\u5C4F\u5E55",paraId:10,tocIndex:9},{value:"Record<string, string>",paraId:10,tocIndex:9},{value:"575.98px",paraId:10,tocIndex:9},{value:"sm",paraId:10,tocIndex:9},{value:"\u5C0F\u5C4F\u5E55",paraId:10,tocIndex:9},{value:"Record<string, string>",paraId:10,tocIndex:9},{value:"576px",paraId:10,tocIndex:9},{value:"md",paraId:10,tocIndex:9},{value:"\u4E2D\u5C4F\u5E55",paraId:10,tocIndex:9},{value:"Record<string, string>",paraId:10,tocIndex:9},{value:"768px",paraId:10,tocIndex:9},{value:"lg",paraId:10,tocIndex:9},{value:"\u5927\u5C4F\u5E55",paraId:10,tocIndex:9},{value:"Record<string, string>",paraId:10,tocIndex:9},{value:"992px",paraId:10,tocIndex:9},{value:"xl",paraId:10,tocIndex:9},{value:"\u8D85\u5927\u5C4F\u5E55",paraId:10,tocIndex:9},{value:"Record<string, string>",paraId:10,tocIndex:9},{value:"1200px",paraId:10,tocIndex:9}]},58791:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u5728\u9875\u9762\u4E2D\u5F39\u51FA\u9ED1\u8272\u534A\u900F\u660E\u63D0\u793A\uFF0C\u7528\u4E8E\u64CD\u4F5C\u7ED3\u679C\u63D0\u793A\u7B49\u573A\u666F\uFF0C\u652F\u6301",paraId:0,tocIndex:0},{value:"Toast",paraId:0,tocIndex:0},{value:",",paraId:0,tocIndex:0},{value:"Toast.warning",paraId:0,tocIndex:0},{value:",",paraId:0,tocIndex:0},{value:"Toast.loading",paraId:0,tocIndex:0},{value:",",paraId:0,tocIndex:0},{value:"Toast.success",paraId:0,tocIndex:0},{value:",",paraId:0,tocIndex:0},{value:"Toast.fail",paraId:0,tocIndex:0},{value:`\u3002
\u63A8\u8350\u4F7F\u7528Hooks\u8C03\u7528\u65B9\u5F0F\uFF0C\u9759\u6001\u65B9\u6CD5\u65E0\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\uFF0CThemeProvider\u6570\u636E\u4E0D\u4F1A\u751F\u6548\uFF0C\u56E0\u6B64\u63A8\u8350`,paraId:0,tocIndex:0},{value:"Toast.useToast",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u652F\u6301\u8BFB\u53D6context\u7684contextHolder, \u901A\u8FC7\u9876\u5C42\u6CE8\u518C\u65B9\u5F0F\u4EE3\u66FF",paraId:0,tocIndex:0},{value:"Toast",paraId:0,tocIndex:0},{value:"\u9759\u6001\u65B9\u6CD5\u3002",paraId:0,tocIndex:0},{value:"\u5C55\u793A\u63D0\u793A\u5185\u5BB9\u3002",paraId:1,tocIndex:2},{value:"Toast\u63D0\u4F9B\u4E86 ",paraId:2,tocIndex:5},{value:"warning",paraId:2,tocIndex:5},{value:"\u3001",paraId:2,tocIndex:5},{value:"loading",paraId:2,tocIndex:5},{value:"\u3001",paraId:2,tocIndex:5},{value:"success",paraId:2,tocIndex:5},{value:"\u3001",paraId:2,tocIndex:5},{value:"fail",paraId:2,tocIndex:5},{value:"\u56DB\u79CD\u5E38\u7528\u6A21\u5F0F\u3002",paraId:2,tocIndex:5},{value:"\u63D0\u793A\u6587\u6848\u652F\u6301\u4F7F\u7528",paraId:3,tocIndex:6},{value:"\\n",paraId:3,tocIndex:6},{value:"\u6362\u884C\u3002",paraId:3,tocIndex:6},{value:"\u4F7F\u7528",paraId:4,tocIndex:7},{value:"duration",paraId:4,tocIndex:7},{value:"\u63A7\u5236\u63D0\u793A\u5C55\u793A\u65F6\u957F\uFF0C\u9ED8\u8BA4\u5C55\u793A2\u79D2\uFF0C\u5F53",paraId:4,tocIndex:7},{value:"duration",paraId:4,tocIndex:7},{value:"\u4E3A0\u65F6\uFF0CToast\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\uFF0C\u5F53\u7136\u4F60\u53EF\u4EE5\u63A5\u6536\u8FD4\u56DE\u503C\uFF0C\u5E76\u4F7F\u7528\u5176",paraId:4,tocIndex:7},{value:"close",paraId:4,tocIndex:7},{value:"\u51FD\u6570\uFF0C\u624B\u52A8\u5173\u95ED\u5F53\u524DToast\u3002",paraId:4,tocIndex:7},{value:"Toast\u63D0\u4F9B\u4E86",paraId:5,tocIndex:8},{value:"top",paraId:5,tocIndex:8},{value:"\u3001",paraId:5,tocIndex:8},{value:"center",paraId:5,tocIndex:8},{value:"\u3001",paraId:5,tocIndex:8},{value:"bottom",paraId:5,tocIndex:8},{value:"\u4E09\u79CD\u5C55\u793A\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A",paraId:5,tocIndex:8},{value:"center",paraId:5,tocIndex:8},{value:"\u3002",paraId:5,tocIndex:8},{value:"\u4F7F\u7528",paraId:6,tocIndex:9},{value:"allowMultiple",paraId:6,tocIndex:9},{value:"\u53EF\u5141\u8BB8\u9875\u9762\u4E2D\u540C\u65F6\u5B58\u5728\u591A\u4E2ATaost\u63D0\u793A\uFF0C\u9ED8\u8BA4\u6BCF\u6B21\u53EA\u5C55\u793A\u4E00\u4E2AToast\u3002",paraId:6,tocIndex:9},{value:"\u4F7F\u7528",paraId:7,tocIndex:10},{value:"icon",paraId:7,tocIndex:10},{value:"\u53EF\u5B9A\u5236\u56FE\u6807\u3002",paraId:7,tocIndex:10},{value:"\u4F7F\u7528",paraId:8,tocIndex:11},{value:"disableClick",paraId:8,tocIndex:11},{value:"\u53EF\u63A7\u5236\u5C55\u793AToast\u63D0\u793A\u65F6\uFF0C\u9875\u9762\u5176\u4ED6\u5185\u5BB9\u662F\u5426\u53EF\u70B9\u51FB\uFF0C\u9ED8\u8BA4\u53EF\u70B9\u51FB\u3002",paraId:8,tocIndex:11},{value:"\u53EF\u901A\u8FC7",paraId:9,tocIndex:12},{value:"onClose",paraId:9,tocIndex:12},{value:"\u76D1\u542CToast\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u3002",paraId:9,tocIndex:12},{value:"Toast\u63D0\u4F9B\u4E86",paraId:10,tocIndex:13},{value:"clear",paraId:10,tocIndex:13},{value:"\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5173\u95ED\u9875\u9762\u4E2D\u6240\u6709\u5B58\u5728\u7684\u5F39\u7A97\u3002",paraId:10,tocIndex:13},{value:"\u53EF\u4EE5\u6839\u636E\u63D0\u4F9B\u7684css\u53D8\u91CF\uFF0C\u4EE5\u53CAclassName\u7B49\u5C5E\u6027\u81EA\u5B9A\u4E49Toast\u6837\u5F0F\u3002",paraId:11,tocIndex:14},{value:"\u5C5E\u6027",paraId:12,tocIndex:16},{value:"\u8BF4\u660E",paraId:12,tocIndex:16},{value:"\u7C7B\u578B",paraId:12,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:16},{value:"message",paraId:12,tocIndex:16},{value:"toast\u5185\u5BB9\uFF0C\u652F\u6301\u4F7F\u7528",paraId:12,tocIndex:16},{value:"\\n",paraId:12,tocIndex:16},{value:"\u6362\u884C",paraId:12,tocIndex:16},{value:"string",paraId:12,tocIndex:16},{value:"-",paraId:12,tocIndex:16},{value:"duration",paraId:12,tocIndex:16},{value:"\u5C55\u793A\u65F6\u957F(ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0Ctoast \u4E0D\u4F1A\u6D88\u5931",paraId:12,tocIndex:16},{value:"number",paraId:12,tocIndex:16},{value:"2000",paraId:12,tocIndex:16},{value:"position",paraId:12,tocIndex:16},{value:"\u5C55\u793A\u4F4D\u7F6E",paraId:12,tocIndex:16},{value:"top",paraId:12,tocIndex:16},{value:" | ",paraId:12,tocIndex:16},{value:"center",paraId:12,tocIndex:16},{value:" | ",paraId:12,tocIndex:16},{value:"bottom",paraId:12,tocIndex:16},{value:"center",paraId:12,tocIndex:16},{value:"allowMultiple",paraId:12,tocIndex:16},{value:"\u662F\u5426\u5141\u8BB8\u540C\u65F6\u5B58\u5728\u591A\u4E2AToast",paraId:12,tocIndex:16},{value:"boolean",paraId:12,tocIndex:16},{value:"false",paraId:12,tocIndex:16},{value:"icon",paraId:12,tocIndex:16},{value:"\u81EA\u5B9A\u4E49\u56FE\u6807",paraId:12,tocIndex:16},{value:"React.ReactNode",paraId:12,tocIndex:16},{value:"-",paraId:12,tocIndex:16},{value:"disableClick",paraId:12,tocIndex:16},{value:"\u5C55\u793AToast\u65F6\uFF0C\u9875\u9762\u5185\u5BB9\u662F\u5426\u53EF\u4EE5\u70B9\u51FB",paraId:12,tocIndex:16},{value:"boolean",paraId:12,tocIndex:16},{value:"false",paraId:12,tocIndex:16},{value:"onClose",paraId:12,tocIndex:16},{value:"\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:12,tocIndex:16},{value:"() => void",paraId:12,tocIndex:16},{value:"-",paraId:12,tocIndex:16},{value:"\u65B9\u6CD5\u540D",paraId:13,tocIndex:17},{value:"\u8BF4\u660E",paraId:13,tocIndex:17},{value:"\u53C2\u6570",paraId:13,tocIndex:17},{value:"\u8FD4\u56DE\u503C",paraId:13,tocIndex:17},{value:"Taost",paraId:13,tocIndex:17},{value:"\u5C55\u793A\u63D0\u793A",paraId:13,tocIndex:17},{value:"ToastOptions | string",paraId:13,tocIndex:17},{value:"ToastReturnType",paraId:13,tocIndex:17},{value:"Taost.warning",paraId:13,tocIndex:17},{value:"\u8B66\u544A\u63D0\u793A",paraId:13,tocIndex:17},{value:"ToastOptions | string",paraId:13,tocIndex:17},{value:"ToastReturnType",paraId:13,tocIndex:17},{value:"Taost.loading",paraId:13,tocIndex:17},{value:"\u52A0\u8F7D\u63D0\u793A",paraId:13,tocIndex:17},{value:"ToastOptions | string",paraId:13,tocIndex:17},{value:"ToastReturnType",paraId:13,tocIndex:17},{value:"Taost.success",paraId:13,tocIndex:17},{value:"\u6210\u529F\u63D0\u793A",paraId:13,tocIndex:17},{value:"ToastOptions | string",paraId:13,tocIndex:17},{value:"ToastReturnType",paraId:13,tocIndex:17},{value:"Taost.fail",paraId:13,tocIndex:17},{value:"\u5931\u8D25\u63D0\u793A",paraId:13,tocIndex:17},{value:"ToastOptions | string",paraId:13,tocIndex:17},{value:"ToastReturnType",paraId:13,tocIndex:17},{value:"Taost.clear",paraId:13,tocIndex:17},{value:"\u6E05\u7A7A\u63D0\u793A",paraId:13,tocIndex:17},{value:"-",paraId:13,tocIndex:17},{value:"-",paraId:13,tocIndex:17},{value:"\u5C5E\u6027\u540D",paraId:14,tocIndex:18},{value:"\u8BF4\u660E",paraId:14,tocIndex:18},{value:"\u7C7B\u578B",paraId:14,tocIndex:18},{value:"\u8FD4\u56DE\u503C",paraId:14,tocIndex:18},{value:"close",paraId:14,tocIndex:18},{value:"\u5173\u95ED\u5F53\u524D\u63D0\u793A",paraId:14,tocIndex:18},{value:"() => void",paraId:14,tocIndex:18},{value:"-",paraId:14,tocIndex:18},{value:"\u5C5E\u6027",paraId:15,tocIndex:19},{value:"\u8BF4\u660E",paraId:15,tocIndex:19},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:19},{value:"\u5168\u5C40\u53D8\u91CF",paraId:15,tocIndex:19},{value:"--min-width",paraId:15,tocIndex:19},{value:"\u6700\u5C0F\u5BBD\u5EA6",paraId:15,tocIndex:19},{value:"86px",paraId:15,tocIndex:19},{value:"--bui-toast-min-width",paraId:15,tocIndex:19},{value:"--max-width",paraId:15,tocIndex:19},{value:"\u6700\u5927\u5BBD\u5EA6",paraId:15,tocIndex:19},{value:"80%",paraId:15,tocIndex:19},{value:"--bui-toast-max-width",paraId:15,tocIndex:19},{value:"--flex-direction",paraId:15,tocIndex:19},{value:"icon\u8DDF\u6587\u6848\u6392\u5217\u65B9\u5411",paraId:15,tocIndex:19},{value:"column",paraId:15,tocIndex:19},{value:"--bui-toast-flex-direction",paraId:15,tocIndex:19},{value:"--padding",paraId:15,tocIndex:19},{value:"\u5185\u8FB9\u8DDD",paraId:15,tocIndex:19},{value:"--bui-spacing-xl",paraId:15,tocIndex:19},{value:"--bui-toast-padding",paraId:15,tocIndex:19},{value:"--word-break",paraId:15,tocIndex:19},{value:"\u6362\u884C\u89C4\u5219",paraId:15,tocIndex:19},{value:"break-all",paraId:15,tocIndex:19},{value:"-",paraId:15,tocIndex:19},{value:"--z-index",paraId:15,tocIndex:19},{value:"\u5C42\u7EA7",paraId:15,tocIndex:19},{value:"--bui-z-index-toast",paraId:15,tocIndex:19},{value:"-",paraId:15,tocIndex:19},{value:"--position-top",paraId:15,tocIndex:19},{value:"\u9876\u90E8\u5C55\u793A\u65F6\uFF0C\u8DDD\u79BB\u9876\u90E8\u8DDD\u79BB",paraId:15,tocIndex:19},{value:"15%",paraId:15,tocIndex:19},{value:"--bui-toast-position-top",paraId:15,tocIndex:19},{value:"--position-bottom",paraId:15,tocIndex:19},{value:"\u5E95\u90E8\u5C55\u793A\u65F6\uFF0C\u8DDD\u79BB\u9876\u90E8\u8DDD\u79BB",paraId:15,tocIndex:19},{value:"85%",paraId:15,tocIndex:19},{value:"--bui-toast-position-bottom",paraId:15,tocIndex:19},{value:"--background-color",paraId:15,tocIndex:19},{value:"\u80CC\u666F\u989C\u8272",paraId:15,tocIndex:19},{value:"rgba(0, 0, 0, 0.8)",paraId:15,tocIndex:19},{value:"--bui-toast-bg-color",paraId:15,tocIndex:19},{value:"--border-radius",paraId:15,tocIndex:19},{value:"\u5706\u89D2",paraId:15,tocIndex:19},{value:"--bui-shape-radius-default",paraId:15,tocIndex:19},{value:"--bui-toast-border-radius",paraId:15,tocIndex:19},{value:"--icon-margin",paraId:15,tocIndex:19},{value:"\u56FE\u6807\u8FB9\u8DDD",paraId:15,tocIndex:19},{value:"8px",paraId:15,tocIndex:19},{value:"--bui-toast-icon-margin-bottom",paraId:15,tocIndex:19},{value:"--icon-font-size",paraId:15,tocIndex:19},{value:"\u56FE\u6807\u5B57\u4F53\u5927\u5C0F",paraId:15,tocIndex:19},{value:"30px",paraId:15,tocIndex:19},{value:"--bui-toast-icon-font-size",paraId:15,tocIndex:19},{value:"--text-align",paraId:15,tocIndex:19},{value:"\u6587\u5B57\u4F4D\u7F6E",paraId:15,tocIndex:19},{value:"center",paraId:15,tocIndex:19},{value:"-",paraId:15,tocIndex:19}]},732:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u6240\u6709\u52A8\u6548\u7684\u5E95\u5C42\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u8D1F\u8D23\u7EF4\u62A4\u4E00\u4E2A\u7EC4\u4EF6\u5E94\u5F53\u662F\u4EC0\u4E48\u72B6\u6001\u7684\u8F93\u5165\uFF08\u8FDB\u5165\uFF0C\u9000\u51FA\uFF09\u5230\u7EC4\u4EF6\u73B0\u5728\u662F\u4EC0\u4E48\u72B6\u6001\u7684\u8F93\u51FA\uFF08\u8FDB\u5165\u4E2D\uFF0C\u5DF2\u8FDB\u5165\uFF0C\u9000\u51FA\u4E2D\uFF0C\u5DF2\u9000\u51FA\uFF0C\u5378\u8F7D\uFF09\u7684\u6620\u5C04\u3002",paraId:1,tocIndex:0},{value:"\u5177\u4F53\u6E32\u67D3\u7531\u4F7F\u7528\u65B9\u4F20\u5165 render \u51FD\u6570\u63A5\u53D7\u7EC4\u4EF6\u5F53\u524D\u72B6\u6001\u540E\u81EA\u884C\u5B8C\u6210\u3002",paraId:2,tocIndex:0},{value:`\u5982\u4E0B\u4EE3\u7801\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u6613\u7684Fade\u7EC4\u4EF6\u3002
\u53EF\u4EE5\u770B\u5230\uFF0C\u5411Transition\u4E2D\u4F20\u5165\u4E00\u4E2A\u6E32\u67D3\u51FD\u6570\uFF0C\u7136\u540E\u57FA\u4E8E\u5B83\u7EF4\u62A4\u7684status\u5373\u53EF\u8F7B\u677E\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5207\u6362\u52A8\u6548\u3002
\u65F6\u6001\u5BF9\u5E94\u7684\u542B\u4E49\u5177\u4F53\u5982\u4E0B\uFF1A
enter, exit: in\u6539\u53D8\u540E\u3001\u52A8\u4F5C\u89E6\u53D1\u524D
-ing: \u52A8\u4F5C\u8FDB\u884C\u4E2D
-ed: \u52A8\u4F5C\u7ED3\u675F`,paraId:3,tocIndex:2},{value:`Transition\u7EC4\u4EF6\u4F1A\u5728\u6BCF\u6B21\u72B6\u6001\u53D8\u66F4\u65F6\u89E6\u53D1\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF0C\u5E76\u5728\u5165\u53C2\u4E2D\u5C3D\u53EF\u80FD\u8FD4\u56DE\u5BF9\u5E94\u7684DOM\u8282\u70B9\u3002
\u65F6\u6001\u5BF9\u5E94\u7684\u89E6\u53D1\u65F6\u673A\u5177\u4F53\u5982\u4E0B\uFF1A
enter, exit: in\u6539\u53D8\u540E\u3001\u52A8\u4F5C\u89E6\u53D1\u524D
-ing: \u52A8\u4F5C\u5F00\u59CB\u540E\uFF08\u52A8\u4F5C\u8FDB\u884C\u4E2D\uFF09
-ed: \u52A8\u4F5C\u7ED3\u675F\u540E`,paraId:4,tocIndex:3},{value:"\u5C5E\u6027",paraId:5,tocIndex:4},{value:"\u8BF4\u660E",paraId:5,tocIndex:4},{value:"\u7C7B\u578B",paraId:5,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:4},{value:"in",paraId:5,tocIndex:4},{value:"\u662F\u5426\u8FDB\u5165",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"appear",paraId:5,tocIndex:4},{value:"\u6302\u8F7D\u65F6\u662F\u5426\u64AD\u653E\u52A8\u753B",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"timeout",paraId:5,tocIndex:4},{value:"\u52A8\u753B\u65F6\u95F4\u914D\u7F6E",paraId:5,tocIndex:4},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"delay",paraId:5,tocIndex:4},{value:"\u52A8\u753B\u5EF6\u8FDF\u914D\u7F6E",paraId:5,tocIndex:4},{value:"number | {appear, enter, exit}",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"enter",paraId:5,tocIndex:4},{value:"\u662F\u5426\u64AD\u653E\u8FDB\u5165\u52A8\u753B",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"true",paraId:5,tocIndex:4},{value:"exit",paraId:5,tocIndex:4},{value:"\u662F\u5426\u64AD\u653E\u9000\u51FA\u52A8\u753B",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"true",paraId:5,tocIndex:4},{value:"mountOnEnter",paraId:5,tocIndex:4},{value:"\u9996\u6B21\u8FDB\u5165\u65F6\u518D\u6302\u8F7Dchildren",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"unmountOnExit",paraId:5,tocIndex:4},{value:"\u9000\u51FA\u65F6\u5378\u8F7Dchildren",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"onEnter",paraId:5,tocIndex:4},{value:"\u8FDB\u5165\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onEntering",paraId:5,tocIndex:4},{value:"\u8FDB\u5165\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onEntered",paraId:5,tocIndex:4},{value:"\u8FDB\u5165\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onExit",paraId:5,tocIndex:4},{value:"\u9000\u51FA\u5F00\u59CB\u524D\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onExiting",paraId:5,tocIndex:4},{value:"\u9000\u51FA\u5F00\u59CB\u540E\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onExited",paraId:5,tocIndex:4},{value:"\u9000\u51FA\u5B8C\u6210\u7684\u56DE\u8C03",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4}]},99595:function(A,O,e){e.r(O),e.d(O,{texts:function(){return I}});const I=[{value:"\u9700\u8981\u5B89\u88C5 @bifrostui/icons \u56FE\u6807\u7EC4\u4EF6\u5305\u3002",paraId:0,tocIndex:0},{value:`$ npm install --save @bifrostui/icons
# or
$ yarn add @bifrostui/icons
# or
$ pnpm add @bifrostui/icons
`,paraId:1,tocIndex:0},{value:"\u5B89\u88C5\u5B8C\u5305\u540E\uFF0C\u76F4\u63A5\u5F15\u7528\u6240\u9700\u56FE\u6807",paraId:2,tocIndex:1},{value:`import { SettingsOutlinedIcon } from '@bifrostui/icons';
`,paraId:3,tocIndex:1},{value:"\u901A\u8FC7",paraId:4,tocIndex:3},{value:"size",paraId:4,tocIndex:3},{value:"\u5C5E\u6027\u8BBE\u7F6E\u56FE\u6807\u5927\u5C0F\u3002",paraId:4,tocIndex:3},{value:"\u901A\u8FC7",paraId:5,tocIndex:4},{value:"color",paraId:5,tocIndex:4},{value:"\u5C5E\u6027\u8BBE\u7F6E\u56FE\u6807\u8272\u5F69\u3002",paraId:5,tocIndex:4},{value:"\u5982\u679C\u9884\u5B9A\u4E49\u7684\u56FE\u6807\u5927\u5C0F\u3001\u8272\u5F69\u4E0D\u80FD\u6EE1\u8DB3\u9700\u8981\u7684\u8BDD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u901A\u8FC7",paraId:6,tocIndex:5},{value:"htmlColor",paraId:6,tocIndex:5},{value:"\u5C5E\u6027\u5B9A\u5236\u989C\u8272, \u6216\u8005",paraId:6,tocIndex:5},{value:"style",paraId:6,tocIndex:5},{value:"\u5C5E\u6027\u81EA\u5B9A\u4E49\u3002",paraId:6,tocIndex:5},{value:"\u5C5E\u6027",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"color",paraId:7,tocIndex:7},{value:"\u56FE\u6807\u4E3B\u9898\u989C",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"primary",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"info",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"success",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"warning",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"danger",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"htmlColor",paraId:7,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"size",paraId:7,tocIndex:7},{value:"\u9884\u7F6E\u7684\u56FE\u6807\u5927\u5C0F\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5143\u7D20\u7684font-size\u6765\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7684\u56FE\u6807\u5927\u5C0F",paraId:7,tocIndex:7},{value:"small",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"medium",paraId:7,tocIndex:7},{value:" | ",paraId:7,tocIndex:7},{value:"large",paraId:7,tocIndex:7},{value:"\u7EE7\u627F\u7236\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F",paraId:7,tocIndex:7},{value:"viewBox",paraId:7,tocIndex:7},{value:"SVG\u7684viewBox\u5C5E\u6027",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"'0 0 96 96'",paraId:7,tocIndex:7}]}}]);
