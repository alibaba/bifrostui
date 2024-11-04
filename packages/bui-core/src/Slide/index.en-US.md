---
group: Dynamic effect
name: Slide
---

# Slide

Basic slide in/slide out animation using Transition encapsulation.
Considering the compatibility of mini programs, slide along one edge of the element itself instead of the screen edge.

## Code demonstration

### Basic usage

The Slide component supports four slide in directions, through`direction`number input
The component itself only handles the displacement of internal elements, you may need to add it yourself`overflow:hidden`external style

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
        点击改变in属性
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
              <div>滑动效果{direction}</div>
            </Slide>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};
```

### Play animation upon entry

When`appear``in`by`true`
The component will immediately play an animation when mounted

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
        点击挂载/卸载组件
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
          <div>滑动效果Appear</div>
        </Slide>
      )}
    </Stack>
  );
};
```

### Events and other attributes

`Slide`inherited from`Transition`other attributes can be found in [Transition](/cores/transition)

## API

| attribute     | explain                                    | type                            | Default value |
| ------------- | ------------------------------------------ | ------------------------------- | ------------- |
| in            | Do you want to enter                       | boolean                         | false         |
| appear        | Whether to play animation during mounting  | boolean                         | false         |
| direction     | Sliding direction                          | "up"\|"down"\|"left"\|"right"   |               |
| timeout       | Animation time configuration               | number \| {appear, enter, exit} | -             |
| delay         | Animation Delay Configuration              | number \| {appear, enter, exit} | -             |
| enter         | Do you want to play the animation          | boolean                         | true          |
| exit          | Do you want to play the exit animation     | boolean                         | true          |
| mountOnEnter  | Mount children on first entry              | boolean                         | false         |
| unmountOnExit | Uninstall children upon exit               | boolean                         | false         |
| onEnter       | The callback before entering the beginning | node=>void                      | -             |
| onEntering    | The callback after entering the beginning  | node=>void                      | -             |
| onEntered     | Enter the completed callback               | node=>void                      | -             |
| onExit        | Callback before exit starts                | node=>void                      | -             |
| onExiting     | Callback after exit starts                 | node=>void                      | -             |
| onExited      | Exit completed callback                    | node=>void                      | -             |
| easing        | Transition limiting function               | string \| {enter, exit}         | -             |
