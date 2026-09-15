---
group: Feedback
name: Backdrop Modal Background
---

# Backdrop Modal Background

Backdrop is a component used to create a background mask for modals, typically used as the background layer for components like Modal and Dialog. It offers fade-in and fade-out transition animation effects and supports transparent mode along with customizable animation duration.

## When to Use

- As the background layer for Modal, Dialog, or similar components
- When it is necessary to prevent interaction with the background content
- When the foreground content needs to be highlighted
- To implement interactions that close the modal by clicking on the background

## Basic Usage

Simplest usage of Backdrop, clicking the background closes the mask.

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
        Open Modal Background
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

## Transparent Background Mode

Using the `invisible` attribute can hide the visual effect of the background mask while still retaining the click event handling. This is useful in certain special scenarios, such as needing to capture click events without displaying the mask layer.

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
          ? 'Modal background is open (invisible), click anywhere to close'
          : 'Open Transparent Background'}
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

## Customizing Animation Duration

The `transitionDuration` attribute allows customization of the duration of the fade-in and fade-out animation, measured in milliseconds.

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
        2-Second Fade-in and Fade-out Effect
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

## Combining Modal Contents

Backdrop is often used with modal content to create a complete modal experience. The following example shows how to place modal content on the Backdrop.

```tsx
import React, { useState } from 'react';
import { Backdrop, Button, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);

  const handleBackdropClick = (e) => {
    // Only close when clicking the background, not when clicking the content area
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>Open Modal with Content</Button>
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
          onClick={(e) => e.stopPropagation()} // Prevent event bubbling
        >
          <h3 style={{ margin: '0 0 16px 0' }}>Modal Title</h3>
          <p
            style={{ margin: '0 0 16px 0', color: 'var(--bui-color-fg-muted)' }}
          >
            This is the content area of the modal. Clicking the background will
            close the modal, clicking the content area will not.
          </p>
          <Button onClick={() => setOpen(false)} size="small">
            Close Modal
          </Button>
        </div>
      </Backdrop>
    </Stack>
  );
};
```

## Disabling Background Click Close

In some scenarios, you may not want the user to close the modal by clicking the background. This can be achieved by not passing the `onClick` attribute.

```tsx
import React, { useState } from 'react';
import { Backdrop, Button, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>
        Open Non-clickable Background
      </Button>
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
          <h3 style={{ margin: '0 0 16px 0' }}>Forced Action Modal</h3>
          <p
            style={{ margin: '0 0 16px 0', color: 'var(--bui-color-fg-muted)' }}
          >
            This modal cannot be closed by clicking the background; you must
            click the button to close it.
          </p>
          <Button onClick={() => setOpen(false)} size="small">
            Confirm Close
          </Button>
        </div>
      </Backdrop>
    </Stack>
  );
};
```

## Accessibility

- BackDrop will by default add `aria-hidden="true"`

## API

### Backdrop Props

| Property           | Description                                         | Type                                 | Default |
| ------------------ | --------------------------------------------------- | ------------------------------------ | ------- |
| open               | Whether to display the background mask              | boolean                              | false   |
| invisible          | Whether transparent and invisible (still clickable) | boolean                              | false   |
| transitionDuration | Animation duration for fade effect (ms)             | number \| TransitionProps['timeout'] | -       |
| onClick            | Callback function on background click               | (event: MouseEvent) => void          | -       |
| children           | Content of child elements                           | ReactNode                            | -       |
| className          | Custom class name                                   | string                               | -       |
| style              | Custom style                                        | CSSProperties                        | -       |

### Inherited Attributes

The Backdrop component inherits all standard HTML attributes of the `div` element and also inherits relevant attributes from the Fade component.

## Style Variables

| Global Variable         | Description           | Default Value         |
| ----------------------- | --------------------- | --------------------- |
| --bui-backdrop-bg-color | Background mask color | `rgba(0, 0, 0, 0.68)` |

```

```
