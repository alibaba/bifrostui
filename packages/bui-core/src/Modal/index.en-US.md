---
group: feedback
name: Modal
---

# Modal

Basic floating layer components.
Provides the ability to draw custom content at the top of the main view and isolate interaction with lower level content.

## Code demonstration

### Basic pop-up window

Use open to control the opening/closing of pop ups
Clicking on the pop-up mask layer and other events to close will be returned through the onClose callback

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

### Control the bottom mask

Use`hideBackdrop` rendering the bottom mask (without triggering a click, you need to implement the closing logic yourself)
Use`BackdropProps` `invisible` the mask layer is not visible (still triggering click)

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

### Slide/Roll Penetration

Modal distinguishes the target of each sliding/scrolling event and prevents manipulation of the page below the pop-up layer during its display.
If this behavior causes trouble, use`disableScrollLock` close this characteristic

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

### Control component uninstallation

Adopt`keepMounted`control`open` the overall uninstallation timing of the component after false is to handle possible animation scenes (e.g. the sliding motion effect of the drawer part of the [drawer component] (/cores/drawer)).
Passing 'true' indicates that the mod should not be uninstalled yet (e.g. the exit animation for internal elements is still in progress).

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

| attribute         | explain                                     | type                     | Default value |
| ----------------- | ------------------------------------------- | ------------------------ | ------------- |
| open              | Elastic layer display                       | boolean                  | false         |
| container         | Portal Target Container                     | PortalProps['container'] | -             |
| hideBackdrop      | Do not render Backdrop                      | boolean                  | false         |
| BackdropProps     | Parameters transparently passed to Backdrop | BackdropProps            | -             |
| onClose           | Close callback                              | (event, reason) => void  | -             |
| disableScrollLock | Disable rolling penetration protection      | boolean                  | false         |
| disablePortal     | Disable Portal                              | boolean                  | false         |
| keepMounted       | Maintain component mounting                 | boolean                  | false         |
