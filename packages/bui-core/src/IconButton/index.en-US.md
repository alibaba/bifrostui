---
group: Basic input
name: IconButton Icon button
---

# IconButton Icon button

Icon button is a button that displays only one icon without displaying a text label. Mainly used for control bars and toolbars, they are also very useful when a compact button is needed

## Code demonstration

### Basic button

The button supports three display forms: default button, stroke button, and fill button

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

The button supports three shapes: circular, rounded, and square

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

Set the 'size' to 'large small' and set the buttons to 'large' and 'small' respectively. If 'size' is not set, the size will be medium.

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

The button supports defining themes such as' primary ',' success', 'info', 'warning', and 'danger'. If color is not set, it defaults to 'default'

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

| attribute | explain                                     | type                                                              | Default value |
| --------- | ------------------------------------------- | ----------------------------------------------------------------- | ------------- |
| variant   | Button type                                 | `default` \|`text` \|`contained`                                  | `default`     |
| color     | Button color                                | `primary` \|`info` \|`success` \|`warning` \|`danger` \|`default` | `default`     |
| size      | Button size                                 | `small` \|`medium` \|`large`                                      | `medium`      |
| disabled  | Do you want to disable it                   | boolean                                                           | false         |
| startIcon | The content placed before the child element | React.ReactNode                                                   | -             |
| openType  | WeChat Open Capability                      | string                                                            | -             |
| onClick   | Callback when clicking a button             | (event: MouseEvent) => void                                       | -             |

[UNK][UNK]属[UNK]见 [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)

## Style variables

| attribute          | explain                                                  | Default value         | global variable                 |
| ------------------ | -------------------------------------------------------- | --------------------- | ------------------------------- |
| --bg-color         | Icon button background color                             | --bui-color-neutral-5 | --bui-icon-btn-bg-color         |
| --color            | Icon color                                               | --bui-color-fg-muted  | --bui-icon-btn-color            |
| --icon-size        | Icon size                                                | 17px                  | --bui-icon-btn-font-size        |
| --user-area        | Click on the safe zone size button (default medium size) | 5px                   | --bui-icon-btn-padding          |
| --large-font-size  | Large button font size                                   | 23px                  | --bui-icon-btn-large-font-size  |
| --disabled-opacity | Disable transparency status                              | 0.5                   | --bui-icon-btn-disabled-opacity |
