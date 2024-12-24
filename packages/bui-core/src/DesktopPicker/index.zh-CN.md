---
group: 浮层
name: DesktopPicker 浮层组件
---

# DesktopPicker 浮层组件

DesktopPicker 组件，常用于浮层的显隐。

## 代码演示

### 基础用法

默认 `isOpen` 应传入 `true`，默认打开该浮层 。
父元素必须使用 position: relative

```tsx
import { DesktopPicker, Stack, Button } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const rootRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <div style={{ position: 'relative' }} ref={rootRef}>
          <Button onClick={() => setOpen(!open)}>demo</Button>
          <DesktopPicker
            isOpen={open}
            parentRef={rootRef}
            onClose={() => setOpen(false)}
          >
            <div style={{ border: '1px solid #ccc', height: '100px' }}>
              浮层内容
            </div>
          </DesktopPicker>
        </div>
      </div>
    </Stack>
  );
};
```

### 基础用法

使用containerRef传入容器元素，可在容器内滚动，需要关闭遮罩层 `backdrop`。
父元素必须使用 position: relative

```tsx
import { DesktopPicker, Stack, Button } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const rootRef = useRef(null);
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <div
        ref={containerRef}
        style={{
          width: '320px',
          height: '300px',
          border: '1px solid #ccc',
          overflow: 'auto',
        }}
      >
        <div style={{ height: '200px', border: '1px solid #ccc' }}>
          上半部分
        </div>
        <div
          style={{ position: 'relative', border: '1px solid #ccc' }}
          ref={rootRef}
        >
          <Button onClick={() => setOpen(!open)}>demo</Button>
          <DesktopPicker
            isOpen={open}
            containerRef={containerRef}
            parentRef={rootRef}
            backdrop={false}
            onClose={() => setOpen(false)}
          >
            <div style={{ border: '1px solid #ccc', height: '100px' }}>
              浮层内容
            </div>
          </DesktopPicker>
        </div>
        <div style={{ height: '200px', border: '1px solid #ccc' }}>
          下半部分
        </div>
      </div>
    </Stack>
  );
};
```

### API

| 属性             | 说明           | 类型                    | 默认值   |
| ---------------- | -------------- | ----------------------- | -------- |
| isOpen           | 打开关闭该浮层 | boolean                 | false    |
| backdrop         | 背景遮罩       | boolean                 | true     |
| defaultDirection | 默认方向       | 'top' \| 'bottom'       | 'bottom' |
| containerRef     | 容器元素       | HTMLElement             | 视觉窗口 |
| parentRef        | 父级元素       | HTMLElement             | -        |
| onClose          | 关闭回调       | (data: boolean) => void | -        |
