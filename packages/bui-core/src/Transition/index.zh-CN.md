---
group: 动效
name: Transition 基础过渡
---

# Transition 基础过渡

所有动效的底层组件。

负责维护一个组件应当是什么状态的输入（进入，退出）到组件现在是什么状态的输出（进入中，已进入，退出中，已退出，卸载）的映射。

具体渲染由使用方传入 render 函数接受组件当前状态后自行完成。

## 代码演示

### 基础使用

如下代码实现了一个简易的Fade组件。
可以看到，向Transition中传入一个渲染函数，然后基于它维护的status即可轻松实现一个自定义切换动效。
时态对应的含义具体如下：
enter, exit: in改变后、动作触发前
-ing: 动作进行中
-ed: 动作结束

```tsx
import { Button, Transition, Stack } from '@bifrostui/react';
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
                transition: `opacity 1000ms linear`,
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
};
```

## 事件

Transition组件会在每次状态变更时触发对应的事件，并在入参中尽可能返回对应的DOM节点。
时态对应的触发时机具体如下：
enter, exit: in改变后、动作触发前
-ing: 动作开始后（动作进行中）
-ed: 动作结束后

```tsx
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
                transition: `opacity 1000ms linear`,
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
```

## API

| 属性          | 说明                     | 类型                            | 默认值 |
| ------------- | ------------------------ | ------------------------------- | ------ |
| in            | 是否进入                 | boolean                         | false  |
| appear        | 挂载时是否播放动画       | boolean                         | false  |
| timeout       | 动画时间配置             | number \| {appear, enter, exit} | -      |
| delay         | 动画延迟配置             | number \| {appear, enter, exit} | -      |
| enter         | 是否播放进入动画         | boolean                         | true   |
| exit          | 是否播放退出动画         | boolean                         | true   |
| mountOnEnter  | 首次进入时再挂载children | boolean                         | false  |
| unmountOnExit | 退出时卸载children       | boolean                         | false  |
| onEnter       | 进入开始前的回调         | node=>void                      | -      |
| onEntering    | 进入开始后的回调         | node=>void                      | -      |
| onEntered     | 进入完成的回调           | node=>void                      | -      |
| onExit        | 退出开始前的回调         | node=>void                      | -      |
| onExiting     | 退出开始后的回调         | node=>void                      | -      |
| onExited      | 退出完成的回调           | node=>void                      | -      |
