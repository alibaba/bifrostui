---
group: Animation
name: Transition Basic Transition
---

# Transition Basic Transition

The underlying component for all animations.

It is responsible for maintaining the mapping from the input of what state a component should be in (entering, exiting) to the output of what state the component is currently in (entering, entered, exiting, exited, unmounted).

The specific rendering is completed by the user passing a render function that accepts the current state of the component.

## Code Demonstration

### Basic Usage

The following code implements a simple Fade component.
As can be seen, by passing a render function into Transition and using its maintained status, it is easy to implement a custom transition animation.
The meanings of the tenses are as follows:
enter, exit: after `in` changes, before action triggers
-ing: during the action
-ed: after the action ends

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

## Events

The Transition component triggers corresponding events whenever there is a state change, and returns the corresponding DOM node in the parameters if possible.
The timing of the event triggers based on tenses is as follows:
enter, exit: after `in` changes, before action triggers
-ing: after the action starts (during the action)
-ed: after the action ends

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

| Property      | Description                        | Type                            | Default |
| ------------- | ---------------------------------- | ------------------------------- | ------- |
| in            | Whether to enter                   | boolean                         | false   |
| appear        | Whether to play animation on mount | boolean                         | false   |
| timeout       | Animation time configuration       | number \| {appear, enter, exit} | -       |
| delay         | Animation delay configuration      | number \| {appear, enter, exit} | -       |
| enter         | Whether to play enter animation    | boolean                         | true    |
| exit          | Whether to play exit animation     | boolean                         | true    |
| mountOnEnter  | Mount children on first enter      | boolean                         | false   |
| unmountOnExit | Unmount children on exit           | boolean                         | false   |
| onEnter       | Callback before entering starts    | node=>void                      | -       |
| onEntering    | Callback after entering starts     | node=>void                      | -       |
| onEntered     | Callback after entering completes  | node=>void                      | -       |
| onExit        | Callback before exiting starts     | node=>void                      | -       |
| onExiting     | Callback after exiting starts      | node=>void                      | -       |
| onExited      | Callback after exiting completes   | node=>void                      | -       |
