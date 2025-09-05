---
group: Animation
name: Fade In/Out
---

# Fade In/Out

Basic fade in/out animation encapsulated using Transition.

## Code Demonstrations

### Basic Usage

```tsx
import { Button, Fade, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  const ref = useRef();
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
          console.log(ref);
        }}
      >
        Click to Toggle
      </Button>
      <Fade
        appear={false}
        in={open}
        timeout={{
          enter: 2000,
          exit: 1000,
        }}
        className="test-clsnm"
      >
        <div ref={ref}>Fade In/Out</div>
      </Fade>
    </Stack>
  );
};
```

### Play Animation on Entry

When both `appear` and `in` are `true`,
the component will immediately play the animation upon mounting.

```tsx
import { Button, Fade, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        Click to Mount/Unmount Component
      </Button>
      {open && (
        <Fade appear in timeout={1500}>
          <div>Fade In/Out Appear True</div>
        </Fade>
      )}
    </Stack>
  );
};
```

### Delayed Mounting/Unmounting

Using `mountOnEnter` ensures the component is mounted only when it first enters.
Using `unmountOnExit` unmounts the component each time it exits.

```tsx
import { Button, Fade, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        Click to Toggle
      </Button>
      <Fade
        appear={false}
        in={open}
        mountOnEnter
        timeout={{
          enter: 2000,
          exit: 1000,
        }}
      >
        <div>Fade In/Out with mountOnEnter</div>
      </Fade>
      <Fade
        appear={false}
        in={open}
        unmountOnExit
        timeout={{
          enter: 2000,
          exit: 1000,
        }}
      >
        <div>Fade In/Out with unmountOnExit</div>
      </Fade>
    </Stack>
  );
};
```

### Disable Animation

By setting `enter=false` or `exit=false`, you can disable entry or exit animations. Elements will immediately show or hide without transition effects.

```tsx
import React, { useState } from 'react';
import { Button, Fade, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="column" spacing="16px">
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        Toggle State
      </Button>

      {/* Only entry animation, no exit animation */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>Entry only:</div>
        <div
          style={{
            padding: '8px',
          }}
        >
          <Fade in={open} enter={true} exit={false} timeout={500}>
            <div>Instant exit, smooth entry</div>
          </Fade>
        </div>
      </Stack>

      {/* Only exit animation, no entry animation */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>Exit only:</div>
        <div
          style={{
            padding: '8px',
          }}
        >
          <Fade in={open} enter={false} exit={true} timeout={500}>
            <div>Instant entry, smooth exit</div>
          </Fade>
        </div>
      </Stack>

      {/* Disable all animations */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>All disabled:</div>
        <div
          style={{
            padding: '8px',
          }}
        >
          <Fade in={open} enter={false} exit={false}>
            <div>Instant toggle, no animation</div>
          </Fade>
        </div>
      </Stack>
    </Stack>
  );
};
```

### Events and Other Properties

`Fade` inherits from `Transition`; for other properties see [Transition](/cores/transition)

## API

| Property      | Description                                  | Type                            | Default |
| ------------- | -------------------------------------------- | ------------------------------- | ------- |
| in            | Whether to enter                             | boolean                         | false   |
| appear        | Whether to play animation on mount           | boolean                         | false   |
| timeout       | Animation duration configuration             | number \| {appear, enter, exit} | -       |
| delay         | Animation delay configuration                | number \| {appear, enter, exit} | -       |
| enter         | Whether to play entry animation              | boolean                         | true    |
| exit          | Whether to play exit animation               | boolean                         | true    |
| mountOnEnter  | Mount children only on first entry           | boolean                         | false   |
| unmountOnExit | Unmount children on exit                     | boolean                         | false   |
| onEnter       | Callback before entering starts              | node=>void                      | -       |
| onEntering    | Callback after entering starts               | node=>void                      | -       |
| onEntered     | Callback after entering completes            | node=>void                      | -       |
| onExit        | Callback before exiting starts               | node=>void                      | -       |
| onExiting     | Callback after exiting starts                | node=>void                      | -       |
| onExited      | Callback after exiting completes             | node=>void                      | -       |
| easing        | Easing function (transition-timing-function) | string \| {enter, exit}         | -       |
