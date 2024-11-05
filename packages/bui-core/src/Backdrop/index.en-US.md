---
group: feedback
name: Backdrop
---

# Backdrop

As a part of [Modal](/cores/modal), the popup background is implemented using Fade.
Generally speaking, you should use Modal directly instead of this component.

## Code demonstration

### Basic usage

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

### Hide Black Mask

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
        invisible
        style={{ zIndex: 'var(--bui-z-index-modal-backdrop)' }}
      />
    </Stack>
  );
};
```

### Fade in/fade out animation duration

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

| attribute          | explain                                          | type                                 | Default value |
| ------------------ | ------------------------------------------------ | ------------------------------------ | ------------- |
| open               | Is it displayed                                  | boolean                              | false         |
| invisible          | Is it transparent or invisible (still clickable) | boolean                              | false         |
| transitionDuration | Fade in/fade out time                            | number \| TransitionProps['timeout'] |               |

## Style variables

| attribute          | explain          | Default value       | global variable                 |
| ------------------ | ---------------- | ------------------- | ------------------------------- |
| --background-color | background color | rgba(0, 0, 0, 0.68) | --bui-backdrop-background-color |
