---
group: Animation
name: Transition Basic Transition
---

# Transition Basic Transition

The underlying component for all animations.

Responsible for maintaining the mapping of what a component's state input (enter, exit) should be to the current state output of the component (entering, entered, exiting, exited, unmounted).

The specific rendering is completed by the renderer function passed in by the user, which accepts the current state of the component.

## Basic Usage

The following code implements a simple Fade component. You can see that by passing a rendering function into the Transition, and then based on the status it maintains, you can easily implement a custom toggle animation. The meanings of the tenses correspond as follows:
enter, exit: Change after 'in', before the action is triggered
-ing: Action in progress
-ed: Action completed

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

````

## Events

The Transition component triggers the corresponding event every time the state changes and attempts to return the corresponding DOM node in the parameter. The timing of tenses corresponds specifically as follows:
enter, exit: Change after 'in', before the action is triggered
-ing: After the action starts (in progress)
-ed: After the action ends

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

| Property      | Description                    | Type                            | Default |
| ------------- | ------------------------------ | ------------------------------- | ------- |
| in            | Whether to enter               | boolean                         | false   |
| appear        | Animate on mount               | boolean                         | false   |
| timeout       | Animation duration config      | number \| {appear, enter, exit} | -       |
| delay         | Animation delay config         | number \| {appear, enter, exit} | -       |
| enter         | Animate on enter               | boolean                         | true    |
| exit          | Animate on exit                | boolean                         | true    |
| mountOnEnter  | Mount children on first enter  | boolean                         | false   |
| unmountOnExit | Unmount children on exit       | boolean                         | false   |
| onEnter       | Callback before enter starts   | node=>void                      | -       |
| onEntering    | Callback after enter starts    | node=>void                      | -       |
| onEntered     | Callback after enter completes | node=>void                      | -       |
| onExit        | Callback before exit starts    | node=>void                      | -       |
| onExiting     | Callback after exit starts     | node=>void                      | -       |
| onExited      | Callback after exit completes  | node=>void                      | -       |

```

```
````
