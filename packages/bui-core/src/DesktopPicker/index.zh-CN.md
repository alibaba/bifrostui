---
group: 反馈
name: DesktopPicker 浮层组件
---

# DesktopPicker 浮层组件

DesktopPicker 组件，常用于浮层的显隐。

## 代码演示

### 基础用法

默认 `open` 应传入 `true`，默认打开该浮层 。

```tsx
import { DesktopPicker, Stack, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopPicker
          open={open}
          content={<div style={{ height: '100px' }}>浮层内容</div>}
          onClose={() => setOpen(false)}
        >
          <Button style={{ width: '100px' }} onClick={() => setOpen(!open)}>
            demo
          </Button>
        </DesktopPicker>
      </div>
    </Stack>
  );
};
```

### 基础用法

在容器根据滚动位置进行自动定位。

```tsx
import { DesktopPicker, Stack, Button } from '@bifrostui/react';
import React, { useRef, useState } from 'react';
export default () => {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <div
        ref={containerRef}
        style={{
          width: '320px',
          height: '300px',
          overflow: 'auto',
          borderRadius: 3,
          padding: '3px 0',
          boxShadow: '0 0 0 2px #f4f5f6',
        }}
      >
        <div style={{ height: '200px' }}>上半部分</div>
        <DesktopPicker
          open={open}
          container={() => containerRef.current}
          content={<div style={{ height: '100px' }}>浮层内容</div>}
          onClose={() => setOpen(false)}
        >
          <Button style={{ width: '320px' }} onClick={() => setOpen(!open)}>
            demo
          </Button>
        </DesktopPicker>
        <div style={{ padding: '3px 0', height: '200px' }}>下半部分</div>
      </div>
    </Stack>
  );
};
```

### API

### DesktopPicker

| 属性                  | 说明                       | 类型                                                           | 默认值     |
| --------------------- | -------------------------- | -------------------------------------------------------------- | ---------- |
| open                  | 是否打开                   | `boolean`                                                      | -          |
| content               | 弹出层内容                 | `React.ReactNode`                                              | -          |
| container             | 指定滚动容器               | `HTMLElement \| () => HTMLElement`                             | -          |
| defaultDirection      | 默认弹出方向               | `'top' \| 'bottom'`                                            | `'bottom'` |
| inheritWidth          | 是否继承宽度               | `boolean`                                                      | `true`     |
| containerWidth        | 弹出层宽度                 | `number`                                                       | `'auto'`   |
| miniBackdropInvisible | 小程序是否使用backdrop     | `boolean`                                                      | `false`    |
| onClose               | 关闭回调函数               | `(e: React.MouseEvent<any>, data: { value: boolean }) => void` | -          |
| onMount               | 打开后动画开始的回调       | `() => void`                                                   | -          |
| onUnmounted           | 卸载后动画结束的回调       | `() => void`                                                   | -          |
| BackdropProps         | 透传给 Backdrop 组件的属性 | `BackdropProps`                                                | -          |
| children              | 触发元素                   | `React.ReactElement`                                           | -          |

## 样式变量

| 全局变量                    | 说明       | 默认值                                  |
| --------------------------- | ---------- | --------------------------------------- |
| --bui-desktop-picker-zindex | 弹出层层级 | `var(--bui-z-index-tooltip)`            |
| --bui-desktop-picker-bg     | 背景颜色   | `var(--bui-color-bg-view)`              |
| --bui-desktop-picker-shadow | 阴影       | `0 0 0 2px var(--bui-color-bg-default)` |
