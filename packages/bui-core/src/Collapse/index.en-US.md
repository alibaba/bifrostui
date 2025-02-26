---
group: Dynamic effect
name: Collapse dynamic effect
---

# Collapse dynamic effect

Basic folding animation encapsulated with Transition, unfolded from the starting edge of the element

## Code demonstration

### Basic usage

The Collapse component supports two folding directions, which are passed in through the 'direction' parameter. If horizontal folding is required, the 'horizontal' value is used, and if vertical folding is required, the 'vertical' value is used. The default value is' vertical '

#### transverse

The folding direction starts from the transverse of the element and unfolds

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

#### portrait

The folding direction starts from the portrait of the element and unfolds

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

## Folding size

The collapsedSize property can be used to set the minimum width/height when not unfolded

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
      <Collapse collapsedSize={40} in={open} timeout={1500}>
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

### Other events and attributes

Collapse inherits from Transition, other properties can be found in Transition (/ores/transition)

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
| direction     | Folding direction                          | horizontal \|vertical          | -             |
| collapsedSize | Folding size                               | string \|number                | -             |
| onEnter       | The callback before entering the beginning | node=>void                     | -             |
| onEntering    | The callback after entering the beginning  | node=>void                     | -             |
| onEntered     | Enter the completed callback               | node=>void                     | -             |
| onExit        | Callback before exit starts                | node=>void                     | -             |
| onExiting     | Callback after exit starts                 | node=>void                     | -             |
| onExited      | Exit completed callback                    | node=>void                     | -             |
| easing        | Transition limiting function               | string \|{enter, exit}         | -             |
