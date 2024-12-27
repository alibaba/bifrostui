---
group: 浮层
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

| 属性             | 说明           | 类型                    | 默认值   |
| ---------------- | -------------- | ----------------------- | -------- | ------ |
| open             | 打开关闭该浮层 | boolean                 | false    |
| defaultDirection | 默认方向       | 'top' \| 'bottom'       | 'bottom' |
| container        | 容器元素       | HTMLElement             | null     | window |
| onClose          | 关闭回调       | (data: boolean) => void | -        |
| content          | 浮层内容       | React.ReactNode         | -        |
