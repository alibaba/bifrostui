---
group: Effects
name: Collapse Animation
---

# Collapse Animation

A basic collapse animation encapsulated using Transition, expanding from the starting edge of an element.

## Basic Usage

The Collapse component supports two collapse directions, passed via the `direction` parameter. Use the `horizontal` value for horizontal collapse and the `vertical` value for vertical collapse. The default value is `vertical`.

#### Horizontal

The collapse direction unfolds from the horizontal edge of the element.

```tsx
import React, { useState } from 'react';
import { Collapse, Switch, Card, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="column" spacing="8px" flexWrap="wrap">
      <Switch
        checked={open}
        onChange={(e, data) => {
          setOpen(data?.checked);
        }}
      />
      <Collapse timeout={1500} direction="horizontal" in={open}>
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        />
      </Collapse>
    </Stack>
  );
};
```

#### Vertical

The collapse direction unfolds from the vertical edge of the element.

```tsx
import React, { useState } from 'react';
import { Collapse, Switch, Card, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack direction="column" spacing="8px" flexWrap="wrap">
      <Switch
        checked={open}
        onChange={(e, data) => {
          setOpen(data?.checked);
        }}
      />
      <Collapse direction="vertical" in={open} timeout={1500}>
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        />
      </Collapse>
    </Stack>
  );
};
```

## Collapsed Size

The `collapsedSize` attribute can be used to set the minimum width/height when not expanded.

```tsx
import React, { useState } from 'react';
import { Collapse, Switch, Card, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack direction="column" spacing="8px" flexWrap="wrap">
      <Switch
        checked={open}
        onChange={(e, data) => {
          setOpen(data?.checked);
        }}
      />
      <Collapse collapsedSize={40} in={open} timeout={1500}>
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        />
      </Collapse>
    </Stack>
  );
};
```

### Disable Animation

By setting `enter=false` or `exit=false`, you can disable entry or exit animations. The element will appear or disappear immediately, without transition effects.

```tsx
import React, { useState } from 'react';
import { Button, Collapse, Stack, Card } from '@bifrostui/react';

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
        <div style={{ width: '120px' }}>Entry Animation Only:</div>
        <Collapse
          in={open}
          direction="vertical"
          enter={true}
          exit={false}
          timeout={500}
        >
          <Card
            style={{
              background: '#CCCCCC',
              width: '100px',
              height: '80px',
              padding: '8px',
            }}
          >
            <div>Instant Exit, Smooth Entry</div>
          </Card>
        </Collapse>
      </Stack>

      {/* Only exit animation, no entry animation */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>Exit Animation Only:</div>
        <Collapse
          in={open}
          direction="horizontal"
          enter={false}
          exit={true}
          timeout={500}
        >
          <Card
            style={{
              background: '#CCCCCC',
              width: '100px',
              height: '80px',
              padding: '8px',
            }}
          >
            <div>Instant Entry, Smooth Exit</div>
          </Card>
        </Collapse>
      </Stack>

      {/* Disable all animations */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>All Disabled:</div>
        <Collapse in={open} direction="vertical" enter={false} exit={false}>
          <Card
            style={{
              background: '#CCCCCC',
              width: '100px',
              height: '80px',
              padding: '8px',
            }}
          >
            <div>Instant Switch, No Animation</div>
          </Card>
        </Collapse>
      </Stack>
    </Stack>
  );
};
```

### Other Events and Attributes

`Collapse` inherits from `Transition`, other attributes can be seen at [Transition](/cores/transition).

## API

| Property      | Description                              | Type                            | Default |
| ------------- | ---------------------------------------- | ------------------------------- | ------- |
| in            | Whether to enter                         | boolean                         | false   |
| appear        | Whether to animate on mount              | boolean                         | false   |
| timeout       | Animation time configuration             | number \| {appear, enter, exit} | -       |
| delay         | Animation delay configuration            | number \| {appear, enter, exit} | -       |
| enter         | Whether to play enter animation          | boolean                         | true    |
| exit          | Whether to play exit animation           | boolean                         | true    |
| mountOnEnter  | Mount children only on first entry       | boolean                         | false   |
| unmountOnExit | Unmount children on exit                 | boolean                         | false   |
| direction     | Collapse direction                       | horizontal \| vertical          | -       |
| collapsedSize | Collapsed size                           | string \| number                | -       |
| onEnter       | Callback before entering starts          | node=>void                      | -       |
| onEntering    | Callback after entering starts           | node=>void                      | -       |
| onEntered     | Callback after entering completes        | node=>void                      | -       |
| onExit        | Callback before exiting starts           | node=>void                      | -       |
| onExiting     | Callback after exiting starts            | node=>void                      | -       |
| onExited      | Callback after exiting completes         | node=>void                      | -       |
| easing        | Easing, i.e., transition-timing-function | string \| {enter, exit}         | -       |

```

```
