---
group: 动效
name: Slide 滑入滑出
---

# Slide 滑入滑出

使用Transition封装的基础滑入滑出动画。
考虑到小程序兼容性，以元素自身的一条边而非屏幕边缘进行滑动。

## 代码演示

### 基础使用

Slide组件支持四个滑入方向，通过`direction`参数传入
组件本身只处理内部元素的位移，你可能需要自行增加`overflow:hidden`等外部样式

```tsx
import React, { useState } from 'react';
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
        点击改变in属性
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
              <div>滑动效果{direction}</div>
            </Slide>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
```

### 进入时播放动画

当`appear`和`in`都为`true`时
组件会在挂载时立即播放动画

```tsx
import React, { useState } from 'react';
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
        点击挂载/卸载组件
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
          <div>滑动效果Appear</div>
        </Slide>
      )}
    </Stack>
  );
};
```

### 事件及其他属性

`Slide` 继承自 `Transition` 其他属性见 [Transition](/cores/transition)

## API

| 属性          | 说明                               | 类型                            | 默认值 |
| ------------- | ---------------------------------- | ------------------------------- | ------ |
| in            | 是否进入                           | boolean                         | false  |
| appear        | 挂载时是否播放动画                 | boolean                         | false  |
| direction     | 滑动方向                           | "up"\|"down"\|"left"\|"right"   |        |
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
