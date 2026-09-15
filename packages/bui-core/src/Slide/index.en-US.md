---
group: Motion
name: Slide In and Out
---

# Slide In and Out

A basic slide in and out animation wrapped with Transition. Considering compatibility with mini-programs, the sliding is performed along an element's own edge rather than the screen edge.

## Basic Usage

The Slide component supports four sliding directions, passed via the `direction` parameter. The component itself only manages the displacement of internal elements; you might need to add external styles like `overflow:hidden`.

```tsx
import React, { useState } from 'react';
import { Button, Slide, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        Click to toggle in attribute
      </Button>
      <Stack>
        {['down', 'left', 'right', 'up'].map((direction, index) => (
          <div style={{ overflow: 'hidden' }}>
            <Slide
              in={open}
              direction={direction}
              timeout={{
                enter: 800,
                exit: 1000,
              }}
              delay={200 * index}
            >
              <div>Slide effect {direction}</div>
            </Slide>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
```

### Animation on Appear

When both `appear` and `in` are `true`, the component will play the animation immediately upon mounting.

```tsx
import React, { useState } from 'react';
import { Button, Slide, Stack } from '@bifrostui/react';

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
        <Slide
          appear
          in
          direction="up"
          timeout={{
            enter: 2000,
            exit: 1000,
          }}
        >
          <div>Slide effect Appear</div>
        </Slide>
      )}
    </Stack>
  );
};
```

### Disable Animation

You can disable entrance or exit animations by setting `enter=false` or `exit=false`, and the element will appear or disappear immediately without a transition effect.

```tsx
import React, { useState } from 'react';
import { Button, Slide, Stack } from '@bifrostui/react';

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

      {/* Entrance animation only, no exit animation */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>Entrance Animation Only:</div>
        <div
          style={{
            overflow: 'hidden',
            padding: '8px',
          }}
        >
          <Slide
            in={open}
            direction="right"
            enter={true}
            exit={false}
            timeout={500}
          >
            <div>Immediate exit, smooth entrance</div>
          </Slide>
        </div>
      </Stack>

      {/* Exit animation only, no entrance animation */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>Exit Animation Only:</div>
        <div
          style={{
            overflow: 'hidden',
            padding: '8px',
          }}
        >
          <Slide
            in={open}
            direction="left"
            enter={false}
            exit={true}
            timeout={500}
          >
            <div>Immediate entrance, smooth exit</div>
          </Slide>
        </div>
      </Stack>

      {/* Disable all animations */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>Disable All Animations:</div>
        <div
          style={{
            overflow: 'hidden',
            padding: '8px',
          }}
        >
          <Slide in={open} direction="down" enter={false} exit={false}>
            <div>Immediate toggle, no animation effect</div>
          </Slide>
        </div>
      </Stack>
    </Stack>
  );
};
```

### Events and Other Attributes

`Slide` inherits from `Transition`. For other attributes, see [Transition](/cores/transition).

## API

| Attribute     | Description                             | Type                            | Default |
| ------------- | --------------------------------------- | ------------------------------- | ------- |
| in            | Whether to enter                        | boolean                         | false   |
| appear        | Whether to play animation on mount      | boolean                         | false   |
| direction     | Slide direction                         | "up"\|"down"\|"left"\|"right"   |         |
| timeout       | Animation timing configuration          | number \| {appear, enter, exit} | -       |
| delay         | Animation delay configuration           | number \| {appear, enter, exit} | -       |
| enter         | Whether to play entrance animation      | boolean                         | true    |
| exit          | Whether to play exit animation          | boolean                         | true    |
| mountOnEnter  | Mount children only when entering       | boolean                         | false   |
| unmountOnExit | Unmount children when exiting           | boolean                         | false   |
| onEnter       | Callback before entering starts         | node=>void                      | -       |
| onEntering    | Callback after entering starts          | node=>void                      | -       |
| onEntered     | Callback after entering completes       | node=>void                      | -       |
| onExit        | Callback before exiting starts          | node=>void                      | -       |
| onExiting     | Callback after exiting starts           | node=>void                      | -       |
| onExited      | Callback after exiting completes        | node=>void                      | -       |
| easing        | Tween, i.e., transition-timing-function | string \| {enter, exit}         | -       |
