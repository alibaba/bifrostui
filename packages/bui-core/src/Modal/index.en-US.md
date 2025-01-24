---
group: Feedback
name: Modal Popup
---

# Modal Popup

A basic floating layer component.
It provides the ability to draw custom content on top of the main view and isolate interaction with underlying content.

## Code Demos

### Basic Popup

Use `open` to control the opening/closing of the popup.
Clicking events like closing the popup by clicking outside or on the backdrop will be returned via the `onClose` callback.

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
        Open Popup
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
          <div style={{ textAlign: 'center' }}>Test Popup</div>
        </div>
      </Modal>
    </Stack>
  );
};
```

### Controlling the Bottom Backdrop

Use `hideBackdrop` to not render the bottom backdrop (does not trigger clicks, you need to implement your own close logic).
Use `BackdropProps` with `invisible` to make the backdrop invisible (still triggers clicks).

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
        Open Popup Without Backdrop
      </Button>
      <Button
        onClick={() => {
          setOpen1(true);
        }}
      >
        Open Popup With Hidden Backdrop
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
            Popup Without Backdrop (need to implement click-to-close)
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
            Popup With Hidden Backdrop (click outside to close)
          </div>
        </div>
      </Modal>
    </Stack>
  );
};
```

### Scroll/Pan Through

The Modal distinguishes each scroll/pan event target and prevents operations on the page below the modal while it is displayed.
If this behavior causes issues, use `disableScrollLock` to disable this feature.

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
        Open Popup
      </Button>
      <Button
        onClick={() => {
          setScrollLock((o) => !o);
        }}
      >
        Scroll/Pan Through Protection {scrollLock ? 'Off' : 'On'}
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
            Test Popup
            <br />
            Click backdrop to close popup
            <br />
            <br />
            Scroll/Pan Through Prevention ↓
            <br />
            (test using scroll wheel or touch drag on mobile)
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
            Scroll/Pan Through Prevention ↑
          </div>
        </div>
      </Modal>
    </Stack>
  );
};
```

### Control Component Unmounting

Use `keepMounted` to control when the component should unmount after `open` becomes false, useful for handling potential animation scenarios (e.g., Drawer component's slide-out animation).
Passing `true` indicates that the modal should not yet be unmounted (e.g., internal elements are still animating out).

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
        Open Popup
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
          <p>
            Click to exit, setting open to False, at which point the Backdrop
            starts its exit animation.
          </p>
          <p>Click to confirm exit, setting keepMounted to False.</p>
          <p>
            Both being False and the Backdrop's exit animation ending results in
            the entire component unmounting.
          </p>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Exit
          </Button>
          <Button
            onClick={() => {
              setMount(false);
            }}
          >
            Confirm Exit
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};
```

## API

| Property          | Description                 | Type                     | Default |
| ----------------- | --------------------------- | ------------------------ | ------- |
| open              | Display the modal           | boolean                  | false   |
| container         | Portal target container     | PortalProps['container'] | -       |
| hideBackdrop      | Do not render the backdrop  | boolean                  | false   |
| BackdropProps     | Props passed to Backdrop    | BackdropProps            | -       |
| onClose           | Close callback              | (event, reason) => void  | -       |
| disableScrollLock | Disable scroll-through lock | boolean                  | false   |
| disablePortal     | Disable Portal              | boolean                  | false   |
| keepMounted       | Keep component mounted      | boolean                  | false   |
