---
group: Basic Input
name: IconButton Icon Button
---

# IconButton Icon Button

An icon button is a button that displays only an icon without a text label. It is mainly used in control bars and toolbars, and it is also very useful when a compact button is needed.

## Code Examples

### Basic Buttons

Buttons support three display styles: `default`, `outlined`, and `contained`.

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

### Shapes

Buttons come in three shapes: `circular`, `rounded`, and `square`.

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

### Button Sizes

Buttons are available in three sizes: large, medium, and small.

Set the `size` to `large` or `small` to make the button larger or smaller respectively. If `size` is not set, the button defaults to medium size.

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

### Button Colors

Buttons support themes defined by `primary`, `success`, `info`, `warning`, and `danger`. If no color is set, it defaults to `default`.

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

### Disabled State

Disable buttons using the `disabled` attribute, which prevents them from being clickable.

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

| Property  | Description             | Type                                                                   | Default Value |
| --------- | ----------------------- | ---------------------------------------------------------------------- | ------------- |
| variant   | Button type             | `default` \| `text` \| `contained`                                     | `default`     |
| color     | Button color            | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `default` | `default`     |
| size      | Button size             | `small` \| `medium` \| `large`                                         | `medium`      |
| disabled  | Whether it's disabled   | boolean                                                                | false         |
| startIcon | Content before children | React.ReactNode                                                        | -             |
| openType  | WeChat open ability     | string                                                                 | -             |
| onClick   | Click callback          | (event: MouseEvent) => void                                            | -             |

For other attributes, see [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)

## Style Variables

| Property           | Description                                      | Default Value         | Global Variable                 |
| ------------------ | ------------------------------------------------ | --------------------- | ------------------------------- |
| --bg-color         | Background color of the icon button              | --bui-color-neutral-5 | --bui-icon-btn-bg-color         |
| --color            | Icon color                                       | --bui-color-fg-muted  | --bui-icon-btn-color            |
| --icon-size        | Icon size                                        | 17px                  | --bui-icon-btn-font-size        |
| --user-area        | Click safety area size (for default medium size) | 5px                   | --bui-icon-btn-padding          |
| --large-font-size  | Font size for large buttons                      | 23px                  | --bui-icon-btn-large-font-size  |
| --disabled-opacity | Opacity for disabled state                       | 0.5                   | --bui-icon-btn-disabled-opacity |
