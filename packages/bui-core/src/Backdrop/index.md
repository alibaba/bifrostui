---
group: 反馈
name: Backdrop 弹窗背景
---

# Backdrop 弹窗背景

作为[Modal 弹窗](/cores/modal)的一部分存在，使用Fade实现的弹窗背景。
通常来说，你应该直接使用Modal而不是这个组件。

## 代码演示

### 基础用法

```tsx
import React, { useState } from 'react';
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
        打开弹窗背景
      </Button>
      <Backdrop
        open={open}
        onClick={handleClick}
        style={{ zIndex: 'var(--bui-z-index-modal-backdrop)' }}
      />
    </Stack>
  );
};
```

### 隐藏黑色遮罩

```tsx
import React, { useState } from 'react';
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
        {open ? '弹窗背景已打开（不可见），点击任意部分关闭' : '打开弹窗背景'}
      </Button>
      <Backdrop
        open={open}
        onClick={handleClick}
        invisible={true}
        style={{ zIndex: 'var(--bui-z-index-modal-backdrop)' }}
      />
    </Stack>
  );
};
```

### 淡入淡出动效时长

```tsx
import React, { useState } from 'react';
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
        2s淡入淡出动效效果
      </Button>
      <Backdrop
        open={open}
        transitionDuration={2000}
        onClick={handleClick}
        style={{ zIndex: 'var(--bui-z-index-modal-backdrop)' }}
      />
    </Stack>
  );
};
```

## API

| 属性               | 说明                       | 类型                                 | 默认值 |
| ------------------ | -------------------------- | ------------------------------------ | ------ |
| open               | 是否显示                   | boolean                              | false  |
| invisible          | 是否透明不可见（仍可点击） | boolean                              | false  |
| transitionDuration | 淡入淡出时间               | number \| TransitionProps['timeout'] |        |
