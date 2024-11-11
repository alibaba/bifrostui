---
group: 动效
name: Fade 淡入淡出
---

# Fade 淡入淡出

使用Transition封装的基础淡入淡出动画

## 代码演示

### 基础使用

```tsx
import { Button, Fade, Stack } from '@bifrostui/react';
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
        点击改变in
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
        <div ref={ref}>淡入淡出In</div>
      </Fade>
    </Stack>
  );
};
```

### 进入时播放动画

当`appear`和`in`都为`true`时
组件会在挂载时立即播放动画

```tsx
import { Button, Fade, Stack } from '@bifrostui/react';
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
        点击挂载/卸载组件
      </Button>
      {open && (
        <Fade appear in timeout={1500}>
          <div>淡入淡出AppearTrue</div>
        </Fade>
      )}
    </Stack>
  );
};
```

### 延迟挂载/退出卸载

使用`mountOnEnter`使得首次in时才挂载组件
使用`unmountOnExit`使得每次退出时都卸载组件

```tsx
import { Button, Fade, Stack } from '@bifrostui/react';
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
        点击改变in
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
        <div>淡入淡出mountOnEnter</div>
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
        <div>淡入淡出unmountOnExit</div>
      </Fade>
    </Stack>
  );
};
```

### 事件及其他属性

`Fade` 继承自 `Transition` 其他属性见 [Transition](/cores/transition)

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
| onEnter       | 进入开始前的回调                   | node=>void                      | -      |
| onEntering    | 进入开始后的回调                   | node=>void                      | -      |
| onEntered     | 进入完成的回调                     | node=>void                      | -      |
| onExit        | 退出开始前的回调                   | node=>void                      | -      |
| onExiting     | 退出开始后的回调                   | node=>void                      | -      |
| onExited      | 退出完成的回调                     | node=>void                      | -      |
| easing        | 补间，即transition-timing-function | string \| {enter, exit}         | -      |
