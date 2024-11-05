---
group: Basic input
name: IconButton
---

# IconButton

Icon button is a button that displays only one icon without displaying a text label. Mainly used for control bars and toolbars, they are also very useful when a compact button is needed

## Code demonstration

### Basic button

Button support`Default button`、`Stroke button`、`Fill button`three display forms

```tsx
import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton>
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="outlined">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="contained">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};
```

### shape

Button support`rotundity`、`fillet`、`square`three shapes

```tsx
import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton variant="contained">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton shape="rounded" variant="contained">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton shape="square" variant="contained">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};
```

### Button size

The buttons come in three sizes: large, medium, and small.

By setting`size`set the buttons to large and small respectively. if not set`size`，the size is of medium size.

```tsx
import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton size="small">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton>
        <PhoneFilledIcon />
      </IconButton>
      <IconButton size="large">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};
```

### Button color

Button support`primary`、`success`、`info`、`warning`、`danger`topic definition. if color is not set, it defaults to`default`

```tsx
import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px">
      <Stack direction="row" spacing="8px">
        <IconButton color="primary">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="success">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="info">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="warning">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="danger">
          <PhoneFilledIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing="8px">
        <IconButton color="primary" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="success" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="info" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="warning" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="danger" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
```

### Disabled status

Disable the button through the disabled attribute, and the button cannot be clicked in the disabled state.

```tsx
import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton disabled color="primary">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="outlined" disabled color="primary">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="contained" disabled color="primary">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};
```

## API

| attribute | explain                                     | type                                                                   | Default value |
| --------- | ------------------------------------------- | ---------------------------------------------------------------------- | ------------- |
| variant   | Button type                                 | `default` \| `text` \| `contained`                                     | `default`     |
| color     | Button color                                | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `default` | `default`     |
| size      | Button size                                 | `small` \| `medium` \| `large`                                         | `medium`      |
| disabled  | Do you want to disable it                   | boolean                                                                | false         |
| startIcon | The content placed before the child element | React.ReactNode                                                        | -             |
| openType  | WeChat Open Capability                      | string                                                                 | -             |
| onClick   | Callback when clicking a button             | (event: MouseEvent) => void                                            | -             |

See [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes) for other attributes

## Style variables

| attribute          | explain                                           | Default value         |
| ------------------ | ------------------------------------------------- | --------------------- | ------------------------------- |
| --bg-color         | Icon button background color                      | --bui-color-neutral-5 | --bui-icon-btn-bg-color         |
| --color            | Icon color                                        | --bui-color-fg-muted  | --bui-icon-btn-color            |
| --icon-size        | Icon size                                         | 17px                  | --bui-icon-btn-font-size        |
| --user-area        | Button click safe area size (default medium size) | 5px                   | --bui-icon-btn-padding          |
| --large-font-size  | Large button font size                            | 23px                  | --bui-icon-btn-large-font-size  |
| --disabled-opacity | Disable state transparency                        | 0.5                   | --bui-icon-btn-disabled-opacity |
