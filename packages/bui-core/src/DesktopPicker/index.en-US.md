---
group: Feedback
name: DesktopPicker Overlay Component
---

# DesktopPicker Overlay Component

The DesktopPicker component is commonly used to control the visibility of overlays.

## Code Demonstrations

### Basic Usage

The default `open` should be passed as `true` to initially open the overlay.

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

### Advanced Usage

Auto positioning within a container based on scroll location.

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
        <div style={{ height: '200px' }}>Top Part</div>
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
        <div style={{ padding: '3px 0', height: '200px' }}>Bottom Part</div>
      </div>
    </Stack>
  );
};
```

### API

### DesktopPicker

| Property              | Description                        | Type                                                           | Default    |
| --------------------- | ---------------------------------- | -------------------------------------------------------------- | ---------- |
| open                  | Whether the overlay is open        | `boolean`                                                      | -          |
| content               | Content of the overlay             | `React.ReactNode`                                              | -          |
| container             | Specifies the scrolling container  | `HTMLElement \| () => HTMLElement`                             | -          |
| defaultDirection      | Default direction for the overlay  | `'top' \| 'bottom'`                                            | `'bottom'` |
| inheritWidth          | Whether to inherit width           | `boolean`                                                      | `true`     |
| containerWidth        | Width of the overlay               | `number`                                                       | `'auto'`   |
| miniBackdropInvisible | Use backdrop in mini programs      | `boolean`                                                      | `false`    |
| onClose               | Callback function on close         | `(e: React.MouseEvent<any>, data: { value: boolean }) => void` | -          |
| onMount               | Callback after the open animation  | `() => void`                                                   | -          |
| onUnmounted           | Callback after the close animation | `() => void`                                                   | -          |
| BackdropProps         | Props passed to the Backdrop       | `BackdropProps`                                                | -          |
| children              | Trigger element                    | `React.ReactElement`                                           | -          |

## Style Variables

| Global Variable             | Description      | Default Value                           |
| --------------------------- | ---------------- | --------------------------------------- |
| --bui-desktop-picker-zindex | Overlay z-index  | `var(--bui-z-index-tooltip)`            |
| --bui-desktop-picker-bg     | Background color | `var(--bui-color-bg-view)`              |
| --bui-desktop-picker-shadow | Shadow           | `0 0 0 2px var(--bui-color-bg-default)` |
