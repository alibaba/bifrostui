---
group: Data Display
name: Badge
---

# Badge

A badge in one of the corners of a container, commonly used on notification icons or avatars in the upper right corner.

## Code Demos

### Basic Usage

A simple badge, with content set through the `content` prop.

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="20px" direction="row">
      <Badge content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

### Badge Shapes

The `Badge` component provides three badge shapes: `rounded`, `dot`, and `bubble`. You can control the shape using the `type` prop.

##### Rounded Badge

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Badge content="1" type="standard">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

##### Dot Badge

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="primary" type="dot">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

##### Bubble Badge

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="primary" type="bubble" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

### Badge Variants

In addition to shapes, badges offer two modes: `contained` and `outlined`.

##### Contained Badge

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="primary" variant="contained" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge color="primary" type="bubble" variant="contained" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

##### Outlined Badge

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="20" direction="row">
      <Badge color="primary" variant="outlined" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge color="primary" variant="outlined" type="bubble" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

## Setting Maximum Value

You can limit the badge value using the `maxCount` prop.

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Badge content={100} maxCount={99}>
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

## Setting Colors

We provide five theme colors for badges: `danger`, `success`, `warning`, `info`, and `primary`.

```tsx
import React from 'react';
import { Badge, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="success" content="5">
        <PhoneFilledIcon color="success" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="warning" content="5">
        <PhoneFilledIcon color="warning" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="info" content="5">
        <PhoneFilledIcon color="info" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="primary" content="5">
        <PhoneFilledIcon color="primary" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="danger" content="5">
        <PhoneFilledIcon color="danger" style={{ fontSize: '38px' }} />
      </Badge>
    </Stack>
  );
};
```

```tsx
import React from 'react';
import { Badge, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="success" content="5" variant="outlined">
        <PhoneFilledIcon color="success" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="warning" content="5" variant="outlined">
        <PhoneFilledIcon color="warning" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="info" content="5" variant="outlined">
        <PhoneFilledIcon color="info" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="primary" content="5" variant="outlined">
        <PhoneFilledIcon color="primary" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="danger" content="5" variant="outlined">
        <PhoneFilledIcon color="danger" style={{ fontSize: '38px' }} />
      </Badge>
    </Stack>
  );
};
```

### API

#### BadgeProps

| Property | Description                     | Type                                                      | Default     |
| -------- | ------------------------------- | --------------------------------------------------------- | ----------- |
| content  | Badge content                   | ReactNode                                                 | -           |
| color    | Badge theme color               | `primary` \| `info` \| `success` \| `warning` \| `danger` | `primary`   |
| maxCount | Maximum value for number badges | number                                                    | -           |
| variant  | Badge type                      | `contained` \| `outlined`                                 | `contained` |
| type     | Badge shape                     | `dot` \| `rounded` \| `bubble`                            | `rounded`   |

### Style Variables

| Property               | Description                                 | Default Value | Global Variable                  |
| ---------------------- | ------------------------------------------- | ------------- | -------------------------------- |
| --badge-position       | Position of badge relative to top and right | 14%           | --bui-badge-position             |
| --min-width            | Minimum width of the badge                  | 15px          | --bui-badge-min-width            |
| --height               | Height of the badge                         | 15px          | --bui-badge-height               |
| --line-height          | Line height of text                         | 15px          | --bui-badge-line-height          |
| --padding              | Padding inside the badge                    | 0 3px         | --bui-badge-padding              |
| --border-radius        | Border radius                               | 8px           | --bui-badge-border-radius        |
| --outlined-padding     | Padding for outlined badges                 | 0 2px         | --bui-badge-outlined-padding     |
| --dot-size             | Width and height for dot badges             | 9px           | --bui-badge-dot-size             |
| --bubble-padding       | Padding for bubble badges                   | 9px           | --bui-badge-dot-size             |
| --bubble-border-radius | Border radius for bubble badges             | 6px 6px 6px 0 | --bui-badge-bubble-border-radius |
