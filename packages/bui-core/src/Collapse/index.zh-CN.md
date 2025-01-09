---
group: 动效
name: Collapse 折叠动效
---

# Collapse 折叠动效

使用Transition封装的基础折叠动画，从元素的起始边缘展开

## 代码演示

### 基础使用

Collapse组件支持两个折叠方向，通过`direction`参数传入，如果需要水平折叠则使用`horizontal`值，如果需要垂直方向折叠则使用`vertical`值。默认值为`vertical`

#### 横向

折叠方向从元素横边开始展开

```tsx
import React, { useState } from 'react';
import { Collapse, Switch, Card, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="column" spacing="8px" flexWrap="wrap">
      <Switch
        checked={open}
        onChange={(e, data) => {
          setOpen(data?.checked);
        }}
      ></Switch>
      <Collapse timeout={1500} direction="horizontal" in={open}>
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        ></Card>
      </Collapse>
    </Stack>
  );
};
```

#### 纵向

折叠方向从元素纵边开始展开

```tsx
import React, { useState } from 'react';
import { Collapse, Switch, Card, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack direction="column" spacing="8px" flexWrap="wrap">
      <Switch
        checked={open}
        onChange={(e, data) => {
          setOpen(data?.checked);
        }}
      ></Switch>
      <Collapse direction="vertical" in={open} timeout={1500}>
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        ></Card>
      </Collapse>
    </Stack>
  );
};
```

## 折叠尺寸

`collapsedSize`属性可用于设置未展开时到最小宽度/高度

```tsx
import React, { useState } from 'react';
import { Collapse, Switch, Card, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack direction="column" spacing="8px" flexWrap="wrap">
      <Switch
        checked={open}
        onChange={(e, data) => {
          setOpen(data?.checked);
        }}
      ></Switch>
      <Collapse collapsedSize={40} in={open} timeout={1500}>
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        ></Card>
      </Collapse>
    </Stack>
  );
};
```

### 其他事件及属性

`Collapse`继承自`Transition`，其他属性见[Transition](/cores/transition)

## API

| 属性          | 说明                               | 类型                            | 默认值 |
| ------------- | ---------------------------------- | ------------------------------- | ------ |
| in            | 是否进入                           | boolean                         | false  |
| appear        | 挂载时是否播放动画                 | boolean                         | false  |
| timeout       | 动画时间配置                       | number \| {appear, enter, exit} | -      |
| delay         | 动画延迟配置                       | number \| {appear, enter, exit} | -      |
| enter         | 是否播放进入动画                   | boolean                         | true   |
| exit          | 是否播放退出动画                   | boolean                         | true   |
| mountOnEnter  | 首次进入时再挂载children           | boolean                         | false  |
| unmountOnExit | 退出时卸载children                 | boolean                         | false  |
| direction     | 折叠方向                           | horizontal \| vertical          | -      |
| collapsedSize | 折叠尺寸                           | string \| number                | -      |
| onEnter       | 进入开始前的回调                   | node=>void                      | -      |
| onEntering    | 进入开始后的回调                   | node=>void                      | -      |
| onEntered     | 进入完成的回调                     | node=>void                      | -      |
| onExit        | 退出开始前的回调                   | node=>void                      | -      |
| onExiting     | 退出开始后的回调                   | node=>void                      | -      |
| onExited      | 退出完成的回调                     | node=>void                      | -      |
| easing        | 补间，即transition-timing-function | string \| {enter, exit}         | -      |
