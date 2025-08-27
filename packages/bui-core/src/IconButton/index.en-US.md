---

group: Basic Input
name: IconButton

# IconButton

An icon button is a button that displays only an icon without a text label. They are primarily used in control bars, toolbars, and are also useful when a compact button is needed.

## Basic Button

Buttons support three display styles: `Default Button`, `Outlined Button`, and `Contained Button`.

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

Buttons support three shapes: `Circular`, `Rounded`, and `Square`.

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

Buttons are available in large, medium, and small sizes. Set the `size` attribute to large or small to change the button size accordingly. If `size` is not set, the button defaults to medium size.

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

Buttons support theme definitions `primary`, `success`, `info`, `warning`, `danger`, `light`, `neutral`, and `dark`. If `color` is not set, it defaults to `neutral`.

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

Use the `disabled` attribute to disable a button, making it non-clickable.

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

The IconButton component has built-in streamlined accessibility support.

- **aria-label** (required) - Accessible name for the icon button
- **aria-disabled** - Indicates if the icon is disabled
- **aria-pressed** - Toggle button state
- **aria-expanded** - Expanded/collapsed state
- **aria-haspopup** - Type of pop-up content
- **aria-describedby** - Associated description element

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

### Interactive State

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

| Attribute | Description              | Type                                                                                      | Default   |
| --------- | ------------------------ | ----------------------------------------------------------------------------------------- | --------- |
| variant   | Button type              | `default` \| `text` \| `contained` \| `subtle`                                            | `default` |
| color     | Button color             | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `neutral`\| `light`\| `dark` | `neutral` |
| size      | Button size              | `small` \| `medium` \| `large`                                                            | `medium`  |
| disabled  | Disabled state           | boolean                                                                                   | false     |
| startIcon | Content before children  | React.ReactNode                                                                           | -         |
| openType  | WeChat open capability   | string                                                                                    | -         |
| onClick   | Callback on button click | (event: MouseEvent) => void                                                               | -         |

For other attributes, see [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes).

## Style Variables

| Global Variable                   | Description                       | Default Value                |
| --------------------------------- | --------------------------------- | ---------------------------- |
| --bui-icon-btn-contained-bg-color | Contained button background color | `var(--bui-color-neutral-5)` |
| --bui-icon-btn-color              | Button color                      | `var(--bui-color-fg-muted)`  |
| --bui-icon-btn-small-font-size    | Small button font size            | `var(--bui-text-size-4)`     |
| --bui-icon-btn-font-size          | Default button font size          | `17px`                       |
| --bui-icon-btn-small-padding      | Small button padding              | `var(--bui-spacing-xs)`      |
| --bui-icon-btn-padding            | Default button padding            | `5px`                        |
| --bui-icon-btn-large-padding      | Large button padding              | `var(--bui-spacing-sm)`      |
| --bui-icon-btn-large-font-size    | Large button font size            | `23px`                       |
| --bui-icon-btn-disabled-opacity   | Disabled button opacity           | `0.5`                        |
| --bui-icon-btn-outlined-border    | Outlined button border            | `1px solid`                  |
| --bui-icon-btn-subtle-border      | Subtle button border              | `1px solid transparent`      |
| --bui-icon-btn-border             | Default button border             | `1px solid transparent`      |
