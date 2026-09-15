---
group: 反馈
name: Modal 弹窗
---

# Modal 弹窗

Modal 组件提供了一个坚实的基础来创建对话框、抽屉、弹出窗口或其他任何覆盖内容。

## 特性

- 📚 **多层级管理** - 支持多个Modal的堆叠管理
- 🔒 **滚动锁定** - 防止背景页面滚动穿透
- ♿ **无障碍支持** - 内置ARIA属性和键盘导航支持
- 🎨 **高度可定制** - 支持自定义背景、容器、过渡动画

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程时
- 需要展示重要信息或获取用户确认时
- 需要展示复杂内容（如表单、图片预览等）时

## 基础用法

最简单的Modal用法，通过`open`属性控制显示/隐藏。

```tsx
import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack>
      <Button onClick={handleOpen}>打开弹窗</Button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '400px',
            padding: '24px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h3 style={{ margin: '0 0 16px 0' }}>Modal标题</h3>
          <p
            style={{ margin: '0 0 16px 0', color: 'var(--bui-color-fg-muted)' }}
          >
            这是一个基础的Modal示例。点击外部区域或按关闭按钮可以关闭弹窗。
          </p>
          <Button onClick={handleClose} size="small">
            关闭
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};
```

## 嵌套Modal

Modal支持嵌套使用，统一的弹窗管理系统会帮你处理弹窗堆叠的问题。
建议Modal嵌套不要使用超过2层

```tsx
import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [parentOpen, setParentOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);

  return (
    <Stack>
      <Button onClick={() => setParentOpen(true)}>打开父级弹窗</Button>

      <Modal
        open={parentOpen}
        onClose={() => setParentOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '400px',
            padding: '24px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h3 style={{ margin: '0 0 16px 0' }}>父级弹窗</h3>
          <p style={{ margin: '0 0 16px 0' }}>
            这是父级弹窗，可以在其中打开子级弹窗。
          </p>
          <Stack direction="row" spacing={8}>
            <Button onClick={() => setChildOpen(true)} size="small">
              打开子级弹窗
            </Button>
            <Button
              onClick={() => setParentOpen(false)}
              size="small"
              variant="outlined"
            >
              关闭
            </Button>
          </Stack>
        </div>
      </Modal>

      <Modal
        open={childOpen}
        onClose={() => setChildOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '300px',
            padding: '20px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
            border: '2px solid var(--bui-color-primary)',
          }}
        >
          <h4 style={{ margin: '0 0 12px 0' }}>子级弹窗</h4>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            这是嵌套在父级弹窗中的子级弹窗。
          </p>
          <Button onClick={() => setChildOpen(false)} size="small">
            关闭子级弹窗
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};
```

## 过渡动画

Modal支持与过渡动画组件配合使用，创建流畅的进入和退出效果。
动画组件可以参考react-transition-group，需要满足以下条件

- 必须作为模态框的直接子元素，该组件需要是Modal组件的直接子元素。
- 包含 in 属性，该组件需接收一个名为 in 的属性（布尔值），用于表示模态框的 打开/关闭状态。
- 在进入动画开始时调用 onEnter 回调函数，当进入动画（enter transition）开始时，需触发 onEnter 回调函数。
- 在退出动画完成时调用 onExited 回调函数，当退出动画（exit transition）完成后，需触发 onExited 回调函数。

```tsx
import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

// 简单的淡入淡出过渡组件
const Fade = React.forwardRef(
  ({ in: inProp, children, timeout = 300, ...other }, ref) => {
    const [exited, setExited] = useState(!inProp);

    React.useEffect(() => {
      if (inProp) {
        setExited(false);
      } else {
        const timer = setTimeout(() => setExited(true), timeout);
        return () => clearTimeout(timer);
      }
    }, [inProp, timeout]);

    if (exited && !inProp) {
      return null;
    }

    return (
      <div
        ref={ref}
        style={{
          opacity: inProp ? 1 : 0,
          transition: `opacity ${timeout}ms ease-in-out`,
          ...other.style,
        }}
        {...other}
      >
        {children}
      </div>
    );
  },
);

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>带过渡动画的弹窗</Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={open}>
          <div
            style={{
              width: '400px',
              padding: '24px',
              background: 'var(--bui-color-bg-view)',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transform: open ? 'scale(1)' : 'scale(0.9)',
              transition: 'transform 300ms ease-in-out',
            }}
          >
            <h3 style={{ margin: '0 0 16px 0' }}>带动画的弹窗</h3>
            <p style={{ margin: '0 0 16px 0' }}>
              这个弹窗使用了淡入淡出和缩放动画效果。
            </p>
            <Button onClick={() => setOpen(false)} size="small">
              关闭
            </Button>
          </div>
        </Fade>
      </Modal>
    </Stack>
  );
};
```

## 背景控制

可以通过`hideBackdrop`隐藏背景遮罩，或通过`BackdropProps`自定义背景行为。

```tsx
import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [noBackdrop, setNoBackdrop] = useState(false);
  const [invisibleBackdrop, setInvisibleBackdrop] = useState(false);
  const [customBackdrop, setCustomBackdrop] = useState(false);

  const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
    width: '350px',
    padding: '20px',
    background: 'var(--bui-color-bg-view)',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  };

  return (
    <Stack>
      <Button onClick={() => setNoBackdrop(true)}>无背景遮罩</Button>
      <Button onClick={() => setInvisibleBackdrop(true)}>透明背景遮罩</Button>
      <Button onClick={() => setCustomBackdrop(true)}>自定义背景遮罩</Button>

      {/* 无背景遮罩 */}
      <Modal
        open={noBackdrop}
        onClose={() => setNoBackdrop(false)}
        hideBackdrop
        style={modalStyle}
      >
        <div style={contentStyle}>
          <h4 style={{ margin: '0 0 12px 0' }}>无背景遮罩</h4>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            没有背景遮罩，需要手动关闭或点击内容区域外部。
          </p>
          <Button onClick={() => setNoBackdrop(false)} size="small">
            关闭
          </Button>
        </div>
      </Modal>

      {/* 透明背景遮罩 */}
      <Modal
        open={invisibleBackdrop}
        onClose={() => setInvisibleBackdrop(false)}
        BackdropProps={{ invisible: true }}
        style={modalStyle}
      >
        <div style={contentStyle}>
          <h4 style={{ margin: '0 0 12px 0' }}>透明背景遮罩</h4>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            背景遮罩透明，但仍可点击外部区域关闭。
          </p>
          <Button onClick={() => setInvisibleBackdrop(false)} size="small">
            关闭
          </Button>
        </div>
      </Modal>

      {/* 自定义背景遮罩 */}
      <Modal
        open={customBackdrop}
        onClose={() => setCustomBackdrop(false)}
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            backdropFilter: 'blur(4px)',
          },
        }}
        style={modalStyle}
      >
        <div style={contentStyle}>
          <h4 style={{ margin: '0 0 12px 0' }}>自定义背景遮罩</h4>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            自定义背景颜色和模糊效果。
          </p>
          <Button onClick={() => setCustomBackdrop(false)} size="small">
            关闭
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};
```

## 滚动锁定

Modal默认会阻止背景页面的滚动，可以通过`disableScrollLock`禁用此功能。

```tsx
import { Button, Modal, Stack, Switch } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [disableScrollLock, setDisableScrollLock] = useState(false);

  return (
    <Stack>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Switch
          checked={!disableScrollLock}
          onChange={() => setDisableScrollLock(!disableScrollLock)}
        />
        <span>启用滚动锁定</span>
      </div>

      <Button onClick={() => setOpen(true)}>打开弹窗测试滚动</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        disableScrollLock={disableScrollLock}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '400px',
            maxHeight: '300px',
            padding: '24px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            overflowY: 'auto',
          }}
        >
          <h3 style={{ margin: '0 0 16px 0' }}>滚动锁定测试</h3>
          <p style={{ margin: '0 0 16px 0' }}>
            滚动锁定{disableScrollLock ? '已禁用' : '已启用'}。
            尝试滚动背景页面来测试效果。
          </p>
          <div
            style={{
              height: '200px',
              overflowY: 'auto',
              border: '1px solid #ddd',
              padding: '10px',
            }}
          >
            <p>这是Modal内部的可滚动内容：</p>
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>内容行 {i + 1}</p>
            ))}
          </div>
          <Button
            onClick={() => setOpen(false)}
            size="small"
            style={{ marginTop: '16px' }}
          >
            关闭
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};
```

## 小程序滚动锁定

**小程序**阻止滚动穿透是通过catchMove实现的， **小程序在打开滚动锁定的情况下，想让Modal子元素可以滚动，子元素的根元素需要使用ScrollView**。

```tsx
import { Button, Modal, Stack, Switch, ScrollView } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [disableScrollLock, setDisableScrollLock] = useState(false);

  return (
    <Stack>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Switch
          checked={!disableScrollLock}
          onChange={() => setDisableScrollLock(!disableScrollLock)}
        />
        <span>启用滚动锁定</span>
      </div>

      <Button onClick={() => setOpen(true)}>打开弹窗测试滚动</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        disableScrollLock={disableScrollLock}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ScrollView
          scrollY
          style={{
            width: '400px',
            maxHeight: '300px',
            padding: '24px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h3 style={{ margin: '0 0 16px 0' }}>滚动锁定测试</h3>
          <p style={{ margin: '0 0 16px 0' }}>
            滚动锁定{disableScrollLock ? '已禁用' : '已启用'}。
            尝试滚动背景页面来测试效果。
          </p>
          <div
            style={{
              height: '200px',
              overflowY: 'auto',
              border: '1px solid #ddd',
              padding: '10px',
            }}
          >
            <p>这是Modal内部的可滚动内容：</p>
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>内容行 {i + 1}</p>
            ))}
          </div>
          <Button
            onClick={() => setOpen(false)}
            size="small"
            style={{ marginTop: '16px' }}
          >
            关闭
          </Button>
        </ScrollView>
      </Modal>
    </Stack>
  );
};
```

## 保持挂载

使用`keepMounted`属性可以让Modal在关闭时保持在DOM中，这对于包含表单或需要保持状态的内容很有用。

```tsx
import { Button, Modal, Stack, Switch, Input } from '@bifrostui/react';
import React, { useState } from 'react';

// 内部表单组件，用于演示keepMounted的效果
const FormComponent = ({ onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [mountTime] = useState(() => new Date().toLocaleTimeString());

  console.log('FormComponent mounted at:', mountTime);

  return (
    <div
      style={{
        width: '400px',
        padding: '24px',
        background: 'var(--bui-color-bg-view)',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      }}
    >
      <h3 style={{ margin: '0 0 16px 0' }}>保持挂载测试</h3>
      <p
        style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          color: 'var(--bui-color-fg-muted)',
        }}
      >
        组件挂载时间: {mountTime}
      </p>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>
          输入一些文字测试状态保持:
        </label>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="输入文字后关闭弹窗再打开看看..."
        />
      </div>
      <p
        style={{
          margin: '0 0 16px 0',
          fontSize: '12px',
          color: 'var(--bui-color-fg-muted)',
        }}
      >
        当前输入值: "{inputValue}"
      </p>
      <Button onClick={onClose} size="small">
        关闭
      </Button>
    </div>
  );
};

export default () => {
  const [open, setOpen] = useState(false);
  const [keepMounted, setKeepMounted] = useState(false);

  return (
    <Stack>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '16px',
        }}
      >
        <Switch
          checked={keepMounted}
          onChange={() => setKeepMounted(!keepMounted)}
        />
        <span>启用保持挂载 (keepMounted)</span>
      </div>

      <div
        style={{
          padding: '12px',
          background: 'var(--bui-color-bg-muted)',
          borderRadius: '4px',
          marginBottom: '16px',
        }}
      >
        <p style={{ margin: '0', fontSize: '14px' }}>
          <strong>测试说明:</strong>
        </p>
        <p
          style={{
            margin: '4px 0 0 0',
            fontSize: '12px',
            color: 'var(--bui-color-fg-muted)',
          }}
        >
          • keepMounted=false:
          关闭弹窗时组件被销毁，输入内容丢失，重新打开时组件重新挂载
          <br />• keepMounted=true:
          关闭弹窗时组件保持在DOM中，输入内容和状态都会保持
        </p>
      </div>

      <Button onClick={() => setOpen(true)}>
        打开弹窗 (keepMounted: {keepMounted ? 'true' : 'false'})
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        keepMounted={keepMounted}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FormComponent onClose={() => setOpen(false)} />
      </Modal>
    </Stack>
  );
};
```

## 自定义容器

通过`container`属性可以指定Modal渲染的容器，通过`disablePortal`可以禁用Portal功能。

```tsx
import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState, useRef } from 'react';

export default () => {
  const [portalOpen, setPortalOpen] = useState(false);
  const [noPortalOpen, setNoPortalOpen] = useState(false);
  const containerRef = useRef(null);

  return (
    <Stack>
      <Button onClick={() => setPortalOpen(true)}>自定义容器Modal</Button>
      <Button onClick={() => setNoPortalOpen(true)}>禁用Portal的Modal</Button>

      {/* 自定义容器 */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          height: '200px',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          margin: '16px 0',
          overflow: 'hidden',
        }}
      >
        <p style={{ padding: '16px', margin: 0 }}>
          这是自定义容器区域，Modal会渲染在这个容器内。
        </p>
      </div>

      <Modal
        open={portalOpen}
        onClose={() => setPortalOpen(false)}
        container={containerRef.current}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '250px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h4 style={{ margin: '0 0 12px 0' }}>自定义容器</h4>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px' }}>
            这个Modal渲染在上方的自定义容器中。
          </p>
          <Button onClick={() => setPortalOpen(false)} size="small">
            关闭
          </Button>
        </div>
      </Modal>

      <Modal
        open={noPortalOpen}
        onClose={() => setNoPortalOpen(false)}
        disablePortal
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1300,
        }}
      >
        <div
          style={{
            width: '350px',
            padding: '20px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h4 style={{ margin: '0 0 12px 0' }}>禁用Portal</h4>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            这个Modal禁用了Portal，直接渲染在当前位置。
          </p>
          <Button onClick={() => setNoPortalOpen(false)} size="small">
            关闭
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};
```

## Accessibility

- 基础弹窗默认设置role=presentation，使用Modal进行封装弹窗等组件的时候请根据情况设置role为dialog等
- Modal弹出时，Modal的兄弟元素自动会添加aria-hidden属性，Modal关闭去除aria-hidden属性

## API

### Modal Props

| 属性              | 类型                                                        | 默认值          | 说明             |
| ----------------- | ----------------------------------------------------------- | --------------- | ---------------- |
| open              | `boolean`                                                   | `false`         | 是否打开Modal    |
| onClose           | `(event: SyntheticEvent, detail: ModalCloseDetail) => void` | -               | 关闭回调函数     |
| children          | `React.ReactNode`                                           | -               | Modal内容        |
| container         | `Element \| (() => Element) \| null`                        | `document.body` | Portal容器       |
| disablePortal     | `boolean`                                                   | `false`         | 是否禁用Portal   |
| hideBackdrop      | `boolean`                                                   | `false`         | 是否隐藏背景遮罩 |
| BackdropProps     | `Partial<BackdropProps>`                                    | -               | 背景遮罩属性     |
| disableScrollLock | `boolean`                                                   | `false`         | 是否禁用滚动锁定 |
| keepMounted       | `boolean`                                                   | `false`         | 是否保持挂载状态 |
| className         | `string`                                                    | -               | 自定义类名       |
| style             | `React.CSSProperties`                                       | -               | 自定义样式       |

### ModalCloseDetail

```typescript
type ModalCloseDetail = {
  from?: 'backdropClick' | 'escapeKeyDown';
};
```

### BackdropProps

| 属性      | 类型                                | 默认值  | 说明     |
| --------- | ----------------------------------- | ------- | -------- |
| invisible | `boolean`                           | `false` | 是否透明 |
| onClick   | `(event: React.MouseEvent) => void` | -       | 点击回调 |
