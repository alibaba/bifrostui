---
group: Dynamic effect
name: Transition
---

# Transition

All the underlying components of dynamic effects.

Responsible for maintaining the mapping from the input (entering, exiting) of what state a component should be in to the output (entering, entering, exiting, exiting, uninstalling) of what state the component is currently in.

The specific rendering is completed by the user after passing the render function to accept the current state of the component.

## Code demonstration

### Basic usage

The following code implements a simple Fade component.
As can be seen, passing a rendering function into Transition and maintaining a status based on it makes it easy to implement a custom switching animation.
The specific meanings corresponding to tenses are as follows:
Enter, exit: after the change and before the action is triggered
-Ing: Action in progress
-Ed: Action completed

```tsx
import { Button, Transition, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? 'OPEN' : 'CLOSE'}
      </Button>
      <Transition in={open} timeout={1000}>
        {(status) => (
          <>
            <div>Status:{status}</div>
            <div
              style={{
                transition: `opacity 1000ms linear`,
                opacity: status.match(/exit/) ? 0 : 1,
              }}
            >
              FADE
            </div>
          </>
        )}
      </Transition>
    </Stack>
  );
};
```

## event

The Transition component will trigger the corresponding event every time the state changes and return the corresponding DOM node as much as possible in the parameters.
The triggering timing corresponding to the tense is as follows:
Enter, exit: after the change and before the action is triggered
-Ing: After the action starts (action in progress)
-Ed: After the action is completed

```tsx
import { Button, Transition, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  const [a, setA] = useState({});
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? 'OPEN' : 'CLOSE'}
      </Button>
      <Transition
        in={open}
        timeout={1000}
        onEnter={() => setA((a) => ({ ...a, enter: performance.now() }))}
        onEntering={() => setA((a) => ({ ...a, entering: performance.now() }))}
        onEntered={() => setA((a) => ({ ...a, entered: performance.now() }))}
        onExit={() => setA((a) => ({ ...a, exit: performance.now() }))}
        onExiting={() => setA((a) => ({ ...a, exiting: performance.now() }))}
        onExited={() => setA((a) => ({ ...a, exited: performance.now() }))}
      >
        {(status) => (
          <>
            <div>Status:{status}</div>
            <div
              style={{
                transition: `opacity 1000ms linear`,
                opacity: status.match(/exit/) ? 0 : 1,
              }}
            >
              FADE
            </div>
          </>
        )}
      </Transition>
      <style>
        {
          '@keyframes highlight{from{background-color:#FF8888}to{background:color:#FFFFFF}}'
        }
      </style>
      {['enter', 'entering', 'entered', 'exit', 'exiting', 'exited'].map(
        (s) => (
          <div key={a[s]} style={{ animation: 'highlight 1s' }}>
            {s}: {a[s]?.toFixed(1) || '- '}
          </div>
        ),
      )}
    </Stack>
  );
};
```

## API

| attribute     | explain                                    | type                            | Default value |
| ------------- | ------------------------------------------ | ------------------------------- | ------------- |
| in            | Do you want to enter                       | boolean                         | false         |
| appear        | Whether to play animation during mounting  | boolean                         | false         |
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
