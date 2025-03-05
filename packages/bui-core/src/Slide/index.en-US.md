---
group: Animation
name: Slide In/Out
---

# Slide In/Out

Basic slide-in and slide-out animations encapsulated using Transition.
Considering the compatibility with mini-programs, sliding is performed along one edge of the element itself rather than from the screen edge.

## Code Demonstrations

### Basic Usage

The Slide component supports four sliding directions, which can be passed via the `direction` parameter.
The component only handles the internal element's movement; you may need to add external styles such as `overflow:hidden`.

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
        Click to toggle in property
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
              <div>Sliding effect {direction}</div>
            </Slide>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
```

### Play Animation on Entry

When both `appear` and `in` are `true`,
the component will immediately play the animation upon mounting.

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
          <div>Sliding effect Appear</div>
        </Slide>
      )}
    </Stack>
  );
};
```

### Events and Other Properties

`Slide` inherits from `Transition`; see other properties at [Transition](/cores/transition)

## API

| Property      | Description                                       | Type                            | Default |
| ------------- | ------------------------------------------------- | ------------------------------- | ------- |
| in            | Whether to enter                                  | boolean                         | false   |
| appear        | Whether to play animation on mount                | boolean                         | false   |
| direction     | Sliding direction                                 | "up"\|"down"\|"left"\|"right"   |         |
| timeout       | Animation duration configuration                  | number \| {appear, enter, exit} | -       |
| delay         | Animation delay configuration                     | number \| {appear, enter, exit} | -       |
| enter         | Whether to play entry animation                   | boolean                         | true    |
| exit          | Whether to play exit animation                    | boolean                         | true    |
| mountOnEnter  | Mount children only on first entry                | boolean                         | false   |
| unmountOnExit | Unmount children on exit                          | boolean                         | false   |
| onEnter       | Callback before entering starts                   | node=>void                      | -       |
| onEntering    | Callback after entering starts                    | node=>void                      | -       |
| onEntered     | Callback when entering completes                  | node=>void                      | -       |
| onExit        | Callback before exiting starts                    | node=>void                      | -       |
| onExiting     | Callback after exiting starts                     | node=>void                      | -       |
| onExited      | Callback when exiting completes                   | node=>void                      | -       |
| easing        | Easing function, i.e., transition-timing-function | string \| {enter, exit}         | -       |
