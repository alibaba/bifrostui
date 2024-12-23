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
      <div style={{ width: '100px' }}>
        <div style={{ position: 'relative' }} ref={rootRef}>
          <Button onClick={() => setOpen(true)}>demo</Button>
          <DesktopPicker
            isOpen={open}
            parentRef={rootRef}
            onClose={() => setOpen(false)}
          >
            <div style={{ border: '1px solid #ccc' }}>Children</div>
          </DesktopPicker>
        </div>
      </div>
    </Stack>
  );
};
```

### API

| 属性      | 说明           | 类型                    | 默认值 |
| --------- | -------------- | ----------------------- | ------ |
| isOpen    | 打开关闭该浮层 | boolean                 | false  |
| parentRef | 父级元素       | HTMLElement             | -      |
| onClose   | 关闭回调       | (data: boolean) => void | -      |
