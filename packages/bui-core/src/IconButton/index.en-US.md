---

group: Basic Input
name: IconButton

# IconButton

An icon button is a button that displays an icon without a text label. It is particularly useful in control bars, toolbars, and when a compact button is needed.

## Basic Button

The button supports three display variants: `default`, `outlined`, and `contained`.

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

## Shape

The button supports three shapes: `circular`, `rounded`, and `square`.

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

## Button Size

The button has three sizes: large, medium, and small.

Set the `size` property to large or small to define it respectively. If `size` is not set, the default is medium.

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

## Button Colors

The button supports theme definitions for `primary`, `success`, `info`, `warning`, `danger`, `light`, `neutral`, and `dark`. If color is not specified, `neutral` is the default.

```tsx
import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack
      spacing="10px"
      style={{
        background: 'var(--bui-color-bg-default)',
        padding: '24px',
        borderRadius: '8px',
      }}
    >
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
        <IconButton color="light">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="dark">
          <PhoneFilledIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing="8px">
        <IconButton color="primary" variant="outlined">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="success" variant="outlined">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="info" variant="outlined">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="warning" variant="outlined">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="danger" variant="outlined">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="light" variant="outlined">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="dark" variant="outlined">
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
        <IconButton color="light" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="dark" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing="8px">
        <IconButton color="primary" variant="subtle">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="success" variant="subtle">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="info" variant="subtle">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="warning" variant="subtle">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="danger" variant="subtle">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="light" variant="subtle">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="dark" variant="subtle">
          <PhoneFilledIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
```

## Disabled State

Use the disabled attribute to disable a button, making it unclickable.

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

## Accessibility

The IconButton component has built-in accessibility features.

- **aria-label** (required) - Accessible name for the icon button
- **aria-disabled** - Indicates if the icon is disabled
- **aria-pressed** - Button toggle state
- **aria-expanded** - Expand/collapse state
- **aria-haspopup** - Type of popup content
- **aria-describedby** - Associates description elements

### aria-label

```tsx
import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import {
  CloseIcon,
  SettingsOutlinedIcon,
  SearchGapOutlinedIcon,
} from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton aria-label="Search">
        <SearchGapOutlinedIcon />
      </IconButton>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton aria-label="Settings">
        <SettingsOutlinedIcon />
      </IconButton>
    </Stack>
  );
};
```

### Interactive States

```tsx
import React, { useState } from 'react';
import { IconButton, Stack, Toast } from '@bifrostui/react';
import { HeartAddOutlinedIcon, ListOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Stack direction="row" spacing="8px">
      <IconButton
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        aria-pressed={isFavorite}
        onClick={() => {
          Toast('change aria attribute');
          setIsFavorite(!isFavorite);
        }}
        color={isFavorite ? 'primary' : 'neutral'}
      >
        <HeartAddOutlinedIcon />
      </IconButton>

      <IconButton
        aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
        aria-expanded={isExpanded}
        aria-haspopup="menu"
        color={isExpanded ? 'primary' : 'neutral'}
        onClick={() => {
          Toast('change aria attribute');
          setIsExpanded(!isExpanded);
        }}
      >
        <ListOutlinedIcon />
      </IconButton>
    </Stack>
  );
};
```

## API

| Attribute | Description                    | Type                                                                                      | Default   |
| --------- | ------------------------------ | ----------------------------------------------------------------------------------------- | --------- |
| variant   | Button type                    | `default` \| `text` \| `contained` \| `subtle`                                            | `default` |
| color     | Button color                   | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `neutral`\| `light`\| `dark` | `neutral` |
| size      | Button size                    | `small` \| `medium` \| `large`                                                            | `medium`  |
| disabled  | Disabled state                 | boolean                                                                                   | false     |
| startIcon | Content placed before children | React.ReactNode                                                                           | -         |
| openType  | WeChat open capability         | string                                                                                    | -         |
| onClick   | Callback on button click       | (event: MouseEvent) => void                                                               | -         |

Refer to other attributes at [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)

## Style Variables

| Global Variable                   | Description                           | Default Value                |
| --------------------------------- | ------------------------------------- | ---------------------------- |
| --bui-icon-btn-contained-bg-color | Background color for contained button | `var(--bui-color-neutral-5)` |
| --bui-icon-btn-color              | Button color                          | `var(--bui-color-fg-muted)`  |
| --bui-icon-btn-small-font-size    | Font size for small button            | `var(--bui-text-size-4)`     |
| --bui-icon-btn-font-size          | Font size for default button          | `17px`                       |
| --bui-icon-btn-small-padding      | Padding for small button              | `var(--bui-spacing-xs)`      |
| --bui-icon-btn-padding            | Padding for default button            | `5px`                        |
| --bui-icon-btn-large-padding      | Padding for large button              | `var(--bui-spacing-sm)`      |
| --bui-icon-btn-large-font-size    | Font size for large button            | `23px`                       |
| --bui-icon-btn-disabled-opacity   | Opacity for disabled button           | `0.5`                        |
| --bui-icon-btn-outlined-border    | Border for outlined button            | `1px solid`                  |
| --bui-icon-btn-subtle-border      | Border for subtle button              | `1px solid transparent`      |
| --bui-icon-btn-border             | Default button border                 | `1px solid transparent`      |
