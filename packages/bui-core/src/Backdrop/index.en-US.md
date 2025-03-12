---
group: Feedback
name: Backdrop Modal Background
---

# Backdrop Modal Background

It exists as part of the [Modal](/cores/modal), implemented with Fade for the modal background.
Typically, you should use Modal directly rather than this component.

## Code Examples

### Basic Usage

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
        Open backdrop
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

### Hidden Black Overlay

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
        {open
          ? 'Backdrop opened (invisible), click anywhere to close'
          : 'Open backdrop'}
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

### Transition Duration for Fade In and Out

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
        2s fade in and out transition effect
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

| Property           | Description                                               | Type                                 | Default |
| ------------------ | --------------------------------------------------------- | ------------------------------------ | ------- |
| open               | Whether it is displayed                                   | boolean                              | false   |
| invisible          | Whether it is transparent and invisible (still clickable) | boolean                              | false   |
| transitionDuration | Duration for fade in and out                              | number \| TransitionProps['timeout'] |         |

## Style Variables

| Property           | Description      | Default Value       | Global Variable                 |
| ------------------ | ---------------- | ------------------- | ------------------------------- |
| --background-color | Background color | rgba(0, 0, 0, 0.68) | --bui-backdrop-background-color |
