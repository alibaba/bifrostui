---
group: Data Display
name: Badge
---

# Badge

A logo on a corner of a container, usually used to notify the icon or avatar in the upper right corner.

## Code demonstration

### Basic usage

Simple badge, through`content` set badge content.

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

`Badge` available in 3 badge shapes:`rounded`、`dot`、`bubble`。
You can do it through`type` use sex to control the shape of badges.

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

In addition, the badge also offers two modes:`contained`、`outlined`。

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

You can do it through`maxCount`属limit badge values based on sex.

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

We also offer 5 themed colors for badges:`danger`、`success`、`warning`、`info`、`primary`。

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

##### BadgeProps

| attribute | explain                        | type                                                      | Default value |
| --------- | ------------------------------ | --------------------------------------------------------- | ------------- |
| content   | Badge content                  | ReactNode                                                 | -             |
| color     | Badge Theme Color              | `primary` ｜ `info` ｜ `success` ｜ `warning` ｜ `danger` | `primary`     |
| maxCount  | Maximum value of digital badge | number                                                    | -             |
| variant   | Badge type                     | `contained` ｜`outlined`                                  | `contained`   |
| type      | Badge shape                    | `dot`｜`rounded`｜`bubble`                                | `rounded`     |
