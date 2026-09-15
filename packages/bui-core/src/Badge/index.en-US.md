---
group: Data Display
name: Badge
---

# Badge

The Badge component is typically used to display a badge in a corner of a container, often utilized to show message counts in the upper right corner of notification icons or avatars.

## Basic Usage

The Badge component allows you to set badge content using `content`.

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack
      spacing="20px"
      direction="row"
      style={{ maxWidth: 350, margin: '0 auto' }}
    >
      <Badge content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

## Badge Shapes

Badge offers three badge shapes: `standard`, `dot`, and `bubble`. You can control the badge shape via the `type` attribute.

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack
      spacing="20px"
      direction="row"
      style={{ maxWidth: 350, margin: '0 auto' }}
    >
      <Badge content="1" type="standard">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge type="dot">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge content="NEW" type="bubble">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

## Badge Themes

The Badge component provides seven color themes: `primary`, `success`, `warning`, `info`, `danger`, `light`, and `dark`. You can set the component theme color using the `color` attribute. The default value for the color attribute is `primary`.

```tsx
import * as React from 'react';
import { Badge, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack
      spacing="10px"
      direction="row"
      style={{ maxWidth: 350, margin: '0 auto' }}
    >
      <Badge color="primary" content="5">
        <PhoneFilledIcon color="primary" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="success" content="5">
        <PhoneFilledIcon color="success" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="warning" content="5">
        <PhoneFilledIcon color="warning" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="info" content="5">
        <PhoneFilledIcon color="info" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="danger" content="5">
        <PhoneFilledIcon color="danger" style={{ fontSize: '38px' }} />
      </Badge>
    </Stack>
  );
};
```

## Badge Variants

The Badge component supports two modes: filled `contained` and outlined `outlined`. You can set the component mode using the `variant` attribute. The default value for the `variant` attribute is `contained`.

### contained

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack
      spacing="20px"
      direction="row"
      style={{ maxWidth: 350, margin: '0 auto' }}
    >
      <Badge variant="contained" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge variant="contained" color="success" content="5">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge variant="contained" color="warning" type="bubble" content="NEW">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

### outlined

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack
      spacing="20px"
      direction="row"
      style={{ maxWidth: 350, margin: '0 auto' }}
    >
      <Badge variant="outlined" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge variant="outlined" color="success" content="5">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge variant="outlined" color="warning" type="bubble" content="NEW">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

## Setting Maximum Value

You can limit the badge value using the `max` attribute. When the value exceeds the maximum value set, the maximum value plus a plus sign will be displayed.

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack
      spacing="20px"
      direction="row"
      style={{ maxWidth: 350, margin: '0 auto' }}
    >
      <Badge content={100} max={99}>
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge content={150} max={50}>
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

## Display Control

Badge provides `showZero` and `invisible` attributes to control the badge display.

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack
      spacing="20px"
      direction="row"
      style={{ maxWidth: 350, margin: '0 auto' }}
    >
      <Badge content={0} showZero>
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge content={0} showZero={false}>
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge content={10} invisible={false}>
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

## API

### BadgeProps

| Attribute | Description                          | Type                                                      | Default     |
| --------- | ------------------------------------ | --------------------------------------------------------- | ----------- |
| content   | Badge content                        | ReactNode                                                 | -           |
| color     | Badge theme color                    | `primary` ｜ `info` ｜ `success` ｜ `warning` ｜ `danger` | `primary`   |
| max       | Maximum value for number badge       | number                                                    | -           |
| showZero  | Whether to display when content is 0 | boolean                                                   | false       |
| invisible | Whether to hide badge                | boolean                                                   | false       |
| variant   | Badge type                           | `contained` ｜`outlined`                                  | `contained` |
| type      | Badge shape                          | `dot`｜`standard`｜`bubble`                               | `standard`  |

### Style Variables

| Global Variable                  | Description                | Default Value |
| -------------------------------- | -------------------------- | ------------- |
| --bui-badge-position             | Position offset percentage | 14%           |
| --bui-badge-min-width            | Minimum width              | 15px          |
| --bui-badge-height               | Height                     | 15px          |
| --bui-badge-line-height          | Line height                | 15px          |
| --bui-badge-padding              | Padding                    | 0 3px         |
| --bui-badge-border-radius        | Border radius              | 8px           |
| --bui-badge-outlined-padding     | Padding for outlined style | 0 2px         |
| --bui-badge-dot-size             | Dot size                   | 10px          |
| --bui-badge-bubble-padding       | Bubble padding             | 0 5px         |
| --bui-badge-bubble-border-radius | Bubble border radius       | 6px 6px 6px 0 |

```

```
