---
group: Feedback
name: DesktopPicker Overlay Component
---

# DesktopPicker Overlay Component

The DesktopPicker component is commonly used to control the visibility of overlays.

## Code Demos

### Basic Usage

By default, `open` should be set to `true` to initially open the overlay.

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
          content={<div style={{ height: '100px' }}>Overlay content</div>}
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

Automatically position within a scrolling container based on scroll position.

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
        <div style={{ height: '200px' }}>Top section</div>
        <DesktopPicker
          open={open}
          container={() => containerRef.current}
          content={<div style={{ height: '100px' }}>Overlay content</div>}
          onClose={() => setOpen(false)}
        >
          <Button style={{ width: '320px' }} onClick={() => setOpen(!open)}>
            demo
          </Button>
        </DesktopPicker>
        <div style={{ padding: '3px 0', height: '200px' }}>Bottom section</div>
      </div>
    </Stack>
  );
};
```

### API

### DesktopPicker

| Property              | Description                              | Type                                                           | Default Value |
| --------------------- | ---------------------------------------- | -------------------------------------------------------------- | ------------- |
| open                  | Whether the overlay is open              | `boolean`                                                      | -             |
| content               | Content of the overlay                   | `React.ReactNode`                                              | -             |
| container             | Specify the scroll container             | `HTMLElement \| () => HTMLElement`                             | -             |
| defaultDirection      | Default popup direction                  | `'top' \| 'bottom'`                                            | `'bottom'`    |
| inheritWidth          | Whether to inherit width                 | `boolean`                                                      | `true`        |
| containerWidth        | Width of the overlay                     | `number`                                                       | `'auto'`      |
| miniBackdropInvisible | Whether to use backdrop in mini programs | `boolean`                                                      | `false`       |
| onClose               | Callback function when closing           | `(e: React.MouseEvent<any>, data: { value: boolean }) => void` | -             |
| onMount               | Callback when opening animation starts   | `() => void`                                                   | -             |
| onUnmounted           | Callback when unmounting animation ends  | `() => void`                                                   | -             |
| BackdropProps         | Props to pass to Backdrop component      | `BackdropProps`                                                | -             |
| children              | Trigger element                          | `React.ReactElement`                                           | -             |

## Style Variables

| Property                    | Description            | Default Value                           | Global Variable |
| --------------------------- | ---------------------- | --------------------------------------- | --------------- |
| --bui-desktop-picker-zindex | Z-index of the overlay | `var(--bui-z-index-tooltip)`            | -               |
| --bui-desktop-picker-bg     | Background color       | `var(--bui-color-bg-view)`              | -               |
| --bui-desktop-picker-shadow | Shadow                 | `0 0 0 2px var(--bui-color-bg-default)` | -               |
