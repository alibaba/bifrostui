---
group: Animation
name: Fade
---

# Fade

Basic fade-in and fade-out animation wrapped with Transition

## Basic Usage

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
        Click to toggle in
      </Button>
      <Fade
        appear={false}
        in={open}
        timeout={{
          enter: 2000,
          exit: 1000,
        }}
      >
        <div ref={ref}>Fade In Out</div>
      </Fade>
    </Stack>
  );
};
```

## Animation on Enter

When both `appear` and `in` are `true`, the component will animate immediately upon mounting

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
        Click to mount/unmount component
      </Button>
      {open && (
        <Fade appear in timeout={1500}>
          <div>Fade Appear True</div>
        </Fade>
      )}
    </Stack>
  );
};
```

## Delayed Mount/Unmount

Use `mountOnEnter` to only mount the component the first time `in` is true. Use `unmountOnExit` to unmount every time it exits.

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
        Click to toggle in
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
        <div>Fade mountOnEnter</div>
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
        <div>Fade unmountOnExit</div>
      </Fade>
    </Stack>
  );
};
```

### Disable Animation

By setting `enter=false` or `exit=false`, you can disable the enter or exit animation. The element will immediately show or hide without transition effects.

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
        Toggle state
      </Button>

      {/* Only enter animation, no exit animation */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>Enter animation only:</div>
        <div
          style={{
            padding: '8px',
          }}
        >
          <Fade in={open} enter={true} exit={false} timeout={500}>
            <div>Instant exit, smooth enter</div>
          </Fade>
        </div>
      </Stack>

      {/* Only exit animation, no enter animation */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>Exit animation only:</div>
        <div
          style={{
            padding: '8px',
          }}
        >
          <Fade in={open} enter={false} exit={true} timeout={500}>
            <div>Instant enter, smooth exit</div>
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

## Events and Other Attributes

`Fade` inherits from `Transition`. Other attributes can be seen at [Transition](/cores/transition).

## API

| Attribute     | Description                      | Type                            | Default |
| ------------- | -------------------------------- | ------------------------------- | ------- |
| in            | Whether to enter                 | boolean                         | false   |
| appear        | Whether to animate on mount      | boolean                         | false   |
| timeout       | Animation duration configuration | number \| {appear, enter, exit} | -       |
| delay         | Animation delay configuration    | number \| {appear, enter, exit} | -       |
| enter         | Whether to play enter animation  | boolean                         | true    |
| exit          | Whether to play exit animation   | boolean                         | true    |
| mountOnEnter  | Mount children on first enter    | boolean                         | false   |
| unmountOnExit | Unmount children on exit         | boolean                         | false   |
| onEnter       | Callback before enter starts     | node=>void                      | -       |
| onEntering    | Callback after enter starts      | node=>void                      | -       |
| onEntered     | Callback after enter completes   | node=>void                      | -       |
| onExit        | Callback before exit starts      | node=>void                      | -       |
| onExiting     | Callback after exit starts       | node=>void                      | -       |
| onExited      | Callback after exit completes    | node=>void                      | -       |
| easing        | Transition timing function       | string \| {enter, exit}         | -       |
