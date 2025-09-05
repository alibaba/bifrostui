---
group: Animation
name: collapse Collapse Animation
---

# Collapse Collapse Animation

Basic collapsible animation encapsulated using Transition, expanding from the starting edge of the element.

## Code Examples

### Basic Usage

The Collapse component supports two directions for collapsing, specified by the `direction` parameter. Use `horizontal` for horizontal collapsing and `vertical` for vertical collapsing. The default value is `vertical`.

#### Horizontal

Collapsing direction starts from the left edge of the element.

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
      ></Switch>
      <Collapse timeout={1500} direction="horizontal" in={open}>
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        ></Card>
      </Collapse>
    </Stack>
  );
};
```

#### Vertical

Collapsing direction starts from the top edge of the element.

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
      ></Switch>
      <Collapse direction="vertical" in={open} timeout={1500}>
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        ></Card>
      </Collapse>
    </Stack>
  );
};
```

## Collapsed Size

The `collapsedSize` property can be used to set the minimum width/height when not expanded.

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
      ></Switch>
      <Collapse collapsedSize={40} in={open} timeout={1500} >
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        ></Card>
      </Collapse>
    </Stack>
  );
};
```

### Disable Animation

By setting `enter=false` or `exit=false`, you can disable entry or exit animations. Elements will immediately show or hide without transition effects.

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
        <div style={{ width: '120px' }}>Entry only:</div>
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
            <div>Instant exit, smooth entry</div>
          </Card>
        </Collapse>
      </Stack>

      {/* Only exit animation, no entry animation */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>Exit only:</div>
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
            <div>Instant entry, smooth exit</div>
          </Card>
        </Collapse>
      </Stack>

      {/* Disable all animations */}
      <Stack direction="row" spacing="16px" alignItems="center">
        <div style={{ width: '120px' }}>All disabled:</div>
        <Collapse in={open} direction="vertical" enter={false} exit={false}>
          <Card
            style={{
              background: '#CCCCCC',
              width: '100px',
              height: '80px',
              padding: '8px',
            }}
          >
            <div>Instant toggle, no animation</div>
          </Card>
        </Collapse>
      </Stack>
    </Stack>
  );
};
```

### Other Events and Properties

`Collapse` inherits from `Transition`, see other properties at [Transition](/cores/transition)

## API

| Property      | Description                                       | Type                            | Default |
| ------------- | ------------------------------------------------- | ------------------------------- | ------- |
| in            | Whether to enter                                  | boolean                         | false   |
| appear        | Whether to play animation on mount                | boolean                         | false   |
| timeout       | Animation duration configuration                  | number \| {appear, enter, exit} | -       |
| delay         | Animation delay configuration                     | number \| {appear, enter, exit} | -       |
| enter         | Whether to play enter animation                   | boolean                         | true    |
| exit          | Whether to play exit animation                    | boolean                         | true    |
| mountOnEnter  | Mount children only on first enter                | boolean                         | false   |
| unmountOnExit | Unmount children on exit                          | boolean                         | false   |
| direction     | Collapsing direction                              | horizontal \| vertical          | -       |
| collapsedSize | Collapsed size                                    | string \| number                | -       |
| onEnter       | Callback before entering starts                   | node=>void                      | -       |
| onEntering    | Callback after entering starts                    | node=>void                      | -       |
| onEntered     | Callback after entering completes                 | node=>void                      | -       |
| onExit        | Callback before exiting starts                    | node=>void                      | -       |
| onExiting     | Callback after exiting starts                     | node=>void                      | -       |
| onExited      | Callback after exiting completes                  | node=>void                      | -       |
| easing        | Easing function, i.e., transition-timing-function | string \| {enter, exit}         | -       |
