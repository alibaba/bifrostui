---
group: Feedback
name: DesktopPicker Overlay Component
---

# DesktopPicker Overlay Component

The DesktopPicker component is commonly used for handling overlay visibility.

## Code Examples

### Basic Usage

By default, `open` should be passed as `true` to initially open the overlay.

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
          content={<div style={{ height: '100px' }}>Overlay Content</div>}
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

### Basic Usage

Automatically positions within a container based on scroll position.

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
        <div style={{ height: '200px' }}>Upper Part</div>
        <DesktopPicker
          open={open}
          container={() => containerRef.current}
          content={<div style={{ height: '100px' }}>Overlay Content</div>}
          onClose={() => setOpen(false)}
        >
          <Button style={{ width: '320px' }} onClick={() => setOpen(!open)}>
            demo
          </Button>
        </DesktopPicker>
        <div style={{ padding: '3px 0', height: '200px' }}>Lower Part</div>
      </div>
    </Stack>
  );
};
```

### API

### DesktopPicker

| Property              | Description                               | Type                                                           | Default    |
| --------------------- | ----------------------------------------- | -------------------------------------------------------------- | ---------- |
| open                  | Whether it is open                        | `boolean`                                                      | -          |
| content               | Content of the popup layer                | `React.ReactNode`                                              | -          |
| container             | Specifies the scroll container            | `HTMLElement \| () => HTMLElement`                             | -          |
| defaultDirection      | Default popup direction                   | `'top' \| 'bottom'`                                            | `'bottom'` |
| inheritWidth          | Whether to inherit width                  | `boolean`                                                      | `true`     |
| containerWidth        | Width of the popup layer                  | `number`                                                       | `'auto'`   |
| miniBackdropInvisible | Whether to use backdrop in a mini-program | `boolean`                                                      | `false`    |
| onClose               | Callback function on close                | `(e: React.MouseEvent<any>, data: { value: boolean }) => void` | -          |
| onMount               | Callback at the start of open animation   | `() => void`                                                   | -          |
| onUnmounted           | Callback at the end of unmount animation  | `() => void`                                                   | -          |
| BackdropProps         | Props passed to Backdrop component        | `BackdropProps`                                                | -          |
| children              | Trigger element                           | `React.ReactElement`                                           | -          |

## Style Variables

| Global Variable             | Description         | Default Value                           |
| --------------------------- | ------------------- | --------------------------------------- |
| --bui-desktop-picker-zindex | Popup layer z-index | `var(--bui-z-index-tooltip)`            |
| --bui-desktop-picker-bg     | Background color    | `var(--bui-color-bg-view)`              |
| --bui-desktop-picker-shadow | Shadow              | `0 0 0 2px var(--bui-color-bg-default)` |
