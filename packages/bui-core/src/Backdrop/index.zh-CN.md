---
group: 反馈
name: Backdrop 弹窗背景
---

# Backdrop 弹窗背景

Backdrop 是一个用于创建弹窗背景遮罩的组件，通常作为 Modal、Dialog 等弹窗组件的背景层使用。它提供了淡入淡出的过渡动画效果，并支持透明模式和自定义动画时长。

## 何时使用

- 作为 Modal、Dialog 等弹窗组件的背景层
- 需要阻止用户与背景内容交互时
- 需要突出显示前景内容时
- 实现点击背景关闭弹窗的交互效果

## 基础用法

最简单的 Backdrop 用法，点击背景可以关闭遮罩。

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

## 透明背景模式

使用 `invisible` 属性可以隐藏背景遮罩的视觉效果，但仍保留点击事件处理。这在某些特殊场景下很有用，比如需要捕获点击事件但不想显示遮罩层。

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
        {open ? '弹窗背景已打开（不可见），点击任意部分关闭' : '打开透明背景'}
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

## 自定义动画时长

通过 `transitionDuration` 属性可以自定义淡入淡出动画的持续时间，单位为毫秒。

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
        2秒淡入淡出动效
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

## 与弹窗内容结合使用

Backdrop 通常与弹窗内容结合使用，创建完整的弹窗体验。以下示例展示了如何在 Backdrop 上放置弹窗内容。

```tsx
import React, { useState } from 'react';
import { Backdrop, Button, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);

  const handleBackdropClick = (e) => {
    // 只有点击背景时才关闭，点击内容区域不关闭
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>打开带内容的弹窗</Button>
      <Backdrop
        open={open}
        onClick={handleBackdropClick}
        style={{
          zIndex: 'var(--bui-z-index-modal-backdrop)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '300px',
            padding: '24px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
          onClick={(e) => e.stopPropagation()} // 阻止事件冒泡
        >
          <h3 style={{ margin: '0 0 16px 0' }}>弹窗标题</h3>
          <p
            style={{ margin: '0 0 16px 0', color: 'var(--bui-color-fg-muted)' }}
          >
            这是弹窗的内容区域。点击背景可以关闭弹窗，点击内容区域不会关闭。
          </p>
          <Button onClick={() => setOpen(false)} size="small">
            关闭弹窗
          </Button>
        </div>
      </Backdrop>
    </Stack>
  );
};
```

## 禁用背景点击关闭

在某些场景下，你可能不希望用户通过点击背景来关闭弹窗。可以通过不传递 `onClick` 属性来实现。

```tsx
import React, { useState } from 'react';
import { Backdrop, Button, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>打开不可点击关闭的背景</Button>
      <Backdrop
        open={open}
        style={{
          zIndex: 'var(--bui-z-index-modal-backdrop)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '300px',
            padding: '24px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h3 style={{ margin: '0 0 16px 0' }}>强制操作弹窗</h3>
          <p
            style={{ margin: '0 0 16px 0', color: 'var(--bui-color-fg-muted)' }}
          >
            这个弹窗无法通过点击背景关闭，必须点击按钮才能关闭。
          </p>
          <Button onClick={() => setOpen(false)} size="small">
            确认关闭
          </Button>
        </div>
      </Backdrop>
    </Stack>
  );
};
```

## Accessibility

- BackDrop 默认会添加 `aria-hidden="true"`

## API

### Backdrop Props

| 属性               | 说明                       | 类型                                 | 默认值 |
| ------------------ | -------------------------- | ------------------------------------ | ------ |
| open               | 是否显示背景遮罩           | boolean                              | false  |
| invisible          | 是否透明不可见（仍可点击） | boolean                              | false  |
| transitionDuration | 淡入淡出动画时长（毫秒）   | number \| TransitionProps['timeout'] | -      |
| onClick            | 点击背景时的回调函数       | (event: MouseEvent) => void          | -      |
| children           | 子元素内容                 | ReactNode                            | -      |
| className          | 自定义类名                 | string                               | -      |
| style              | 自定义样式                 | CSSProperties                        | -      |

### 继承属性

Backdrop 组件继承了 `div` 元素的所有标准 HTML 属性，同时也继承了 Fade 组件的相关属性。

## 样式变量

| 全局变量                | 说明         | 默认值                |
| ----------------------- | ------------ | --------------------- |
| --bui-backdrop-bg-color | 背景遮罩颜色 | `rgba(0, 0, 0, 0.68)` |
