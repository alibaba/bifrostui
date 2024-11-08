---
group: Data Display
name: Badge badge
---

# Badge badge

A logo on a corner of a container, usually used to notify the icon or avatar in the upper right corner.

## Code demonstration

### Basic usage

Simple badge, set badge content through 'content'.

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

### Badge shape

Badge offers three badge shapes: round, dot, and bubble.
You can control the badge shape through the 'type' attribute.

##### Circular badge

```tsx
import { Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Badge content="1" type="standard" />
    </Stack>
  );
};
```

##### Dot badge

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

##### Irregular badge

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

### Badge type

In addition, the badge also offers two modes: 'contained' and 'outlined'.

##### Solid badge

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

##### Hollow badge

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

## Set maximum value

You can limit the badge value through the 'maxCount' attribute.

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

## Set color

We also offer 5 themed colors for badges: 'danger', 'success',' warning ',' information ', and' primary '.

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

| attribute | explain                        | type                                                      | Default value |
| --------- | ------------------------------ | --------------------------------------------------------- | ------------- |
| content   | Badge content                  | ReactNode                                                 | -             |
| color     | Badge Theme Color              | `primary` ｜ `info` ｜ `success` ｜ `warning` ｜ `danger` | `primary`     |
| maxCount  | Maximum value of digital badge | number                                                    | -             |
| variant   | Badge type                     | `contained` ｜`outlined`                                  | `contained`   |
| type      | Badge shape                    | `dot`｜`rounded`｜`bubble`                                | `rounded`     |

### Style variables

| attribute              | explain                                          | Default value | global variable                  |
| ---------------------- | ------------------------------------------------ | ------------- | -------------------------------- |
| --badge-position       | The position of the badge from the top and right | 14%           | --bui-badge-position             |
| --min-width            | Minimum badge width                              | 15px          | --bui-badge-min-width            |
| --height               | Badge height                                     | 15px          | --bui-badge-height               |
| --line-height          | Font line height                                 | 15px          | --bui-badge-line-height          |
| --padding              | padding                                          | 0 3px         | --bui-badge-padding              |
| --border-radius        | fillet                                           | 8px           | --bui-badge-border-radius        |
| --outlined-padding     | Stroke the inner margin of the scene             | 0 2px         | --bui-badge-outlined-padding     |
| --dot-size             | Point like scene width and height                | 9px           | --bui-badge-dot-size             |
| --bubble-padding       | Inner margin of bubble scene                     | 9px           | --bui-badge-dot-size             |
| --bubble-border-radius | Bubble scene rounded corners                     | 6px 6px 6px 0 | --bui-badge-bubble-border-radius |
