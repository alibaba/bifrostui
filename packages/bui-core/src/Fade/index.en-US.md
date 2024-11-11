---
group: Dynamic effect
name: Fade in/out
---

# Fade in/out

Basic fade in/fade out animation using Transition encapsulation

## Code demonstration

### Basic usage

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
        点击改变in
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
        <div ref={ref}>淡入淡出In</div>
      </Fade>
    </Stack>
  );
};
```

### Play animation upon entry

When both 'append' and 'in' are 'true'
The component will immediately play an animation when mounted

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
        点击挂载/卸载组件
      </Button>
      {open && (
        <Fade appear in timeout={1500}>
          <div>淡入淡出AppearTrue</div>
        </Fade>
      )}
    </Stack>
  );
};
```

### Delay mount/exit uninstall

Use 'MountOnEnter' to mount components only on the first in time
Use 'remountOnExit' to uninstall components every time you exit

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
        点击改变in
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
        <div>淡入淡出mountOnEnter</div>
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
        <div>淡入淡出unmountOnExit</div>
      </Fade>
    </Stack>
  );
};
```

### Events and other attributes

Fade inherits from Transition. Other properties can be found in Transition (/ores/transition)

## API

| attribute     | explain                                    | type                           | Default value |
| ------------- | ------------------------------------------ | ------------------------------ | ------------- |
| in            | Do you want to enter                       | boolean                        | false         |
| appear        | Whether to play animation during mounting  | boolean                        | false         |
| timeout       | Animation time configuration               | number \|{appear, enter, exit} | -             |
| delay         | Animation Delay Configuration              | number \|{appear, enter, exit} | -             |
| enter         | Do you want to play the animation          | boolean                        | true          |
| exit          | Do you want to play the exit animation     | boolean                        | true          |
| mountOnEnter  | Mount children on first entry              | boolean                        | false         |
| unmountOnExit | Uninstall children upon exit               | boolean                        | false         |
| onEnter       | The callback before entering the beginning | node=>void                     | -             |
| onEntering    | The callback after entering the beginning  | node=>void                     | -             |
| onEntered     | Enter the completed callback               | node=>void                     | -             |
| onExit        | Callback before exit starts                | node=>void                     | -             |
| onExiting     | Callback after exit starts                 | node=>void                     | -             |
| onExited      | Exit completed callback                    | node=>void                     | -             |
| easing        | Transition limiting function               | string \|{enter, exit}         | -             |
