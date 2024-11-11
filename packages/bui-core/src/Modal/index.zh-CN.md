---
group: 反馈
name: Modal 弹窗
---

# Modal 弹窗

基础的浮层组件。
提供了在主视图顶部绘制自定义内容，并隔绝下层内容交互的能力。

## 代码演示

### 基础弹窗

使用open控制弹窗的打开/关闭
点击弹窗遮罩层等关闭的事件会通过onClose回调返回

```tsx
import { Button, Modal, Stack } from '@bifrostui/react';
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
        打开弹窗
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
          <div style={{ textAlign: 'center' }}>测试弹窗</div>
        </div>
      </Modal>
    </Stack>
  );
};
```

### 控制底部遮罩

使用`hideBackdrop`不渲染底部遮罩（不触发点击，需自行实现关闭逻辑）
使用`BackdropProps`的`invisible`使得遮罩层不可见（仍触发点击）

```tsx
import { Button, Modal, Stack } from '@bifrostui/react';
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
        打开无遮罩的弹窗
      </Button>
      <Button
        onClick={() => {
          setOpen1(true);
        }}
      >
        打开隐藏遮罩的弹窗
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
            无遮罩的弹窗（需自行实现点击关闭）
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
            隐藏遮罩的弹窗（点击外部任意区域关闭）
          </div>
        </div>
      </Modal>
    </Stack>
  );
};
```

### 滑动/滚动穿透

Modal会区分每个滑动/滚动事件的目标并防止弹层展示时对弹层下方的页面进行操作。
如果这一行为带来了困扰，使用`disableScrollLock`关闭这一特性

```tsx
import { Button, Modal, Stack } from '@bifrostui/react';
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
        打开弹窗
      </Button>
      <Button
        onClick={() => {
          setScrollLock((o) => !o);
        }}
      >
        滑动/滚动穿透保护{scrollLock ? '关' : '开'}
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
            测试弹窗
            <br />
            点击遮罩层关闭弹窗
            <br />
            <br />
            滚动穿透阻止↓
            <br />
            （直接使用滚轮或者在移动端触摸拖动测试）
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
            滚动穿透阻止↑
          </div>
        </div>
      </Modal>
    </Stack>
  );
};
```

### 控制组件卸载

通过 `keepMounted` 控制`open`变为 false 后组件的整体卸载时机以处理可能的动画场景（例：[Drawer组件](/cores/drawer)抽屉部分的滑出动效）。
传入 true 表示现在还不应卸载 modal（eg.内部元素的退出动画还在进行中）。

```tsx
import { Button, Modal, Stack } from '@bifrostui/react';
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
        打开弹窗
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
          <p>点击退出后open变为False，此时Backdrop开始执行退出动效</p>
          <p>点击确定退出后keepMounted变为False</p>
          <p>两者均为False且Backdrop退出动效结束后组件整体卸载</p>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            退出
          </Button>
          <Button
            onClick={() => {
              setMount(false);
            }}
          >
            确定退出
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};
```

## API

| 属性              | 说明                 | 类型                     | 默认值 |
| ----------------- | -------------------- | ------------------------ | ------ |
| open              | 弹层显示             | boolean                  | false  |
| container         | Portal目标容器       | PortalProps['container'] | -      |
| hideBackdrop      | 不渲染Backdrop       | boolean                  | false  |
| BackdropProps     | 透传给Backdrop的参数 | BackdropProps            | -      |
| onClose           | 关闭回调             | (event, reason) => void  | -      |
| disableScrollLock | 禁用滚动穿透防护     | boolean                  | false  |
| disablePortal     | 禁用Portal           | boolean                  | false  |
| keepMounted       | 保持组件挂载         | boolean                  | false  |
