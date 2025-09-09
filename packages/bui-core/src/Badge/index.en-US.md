---
group: Data Display
name: Badge
---

# Badge

The Badge component is commonly used to display a badge in the corner of a container, typically used for notification icons or message counts on avatars' upper right corner.

## Code Demos

### Basic Usage

The Badge component can set its content using the `content` prop.

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="20px" direction="row" style={{ maxWidth: 350, margin: '0 auto' }}>
      <Badge content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

### Badge Shapes

The Badge component provides three badge shapes: `standard`, `dot`, and `bubble`. You can control the shape using the `type` prop.

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

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

### Badge Themes

The Badge component provides seven color themes: `primary`, `success`, `warning`, `info`, `danger`, `light`, and `dark`. You can set the theme color using the `color` prop.
The default value for the `color` prop is `primary`.

```tsx
import React from 'react';
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

### Badge Variants

The Badge component supports two variants: filled (`contained`) and outlined (`outlined`). You can set the variant using the `variant` prop.
The default value for the `variant` prop is `contained`.

##### Contained

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

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

##### Outlined

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

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

### Setting Maximum Value

You can limit the badge value using the `max` prop. When the value exceeds the maximum, it will display the maximum value plus a plus sign.

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

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

### Display Control

The Badge provides `showZero` and `visibility` props to control badge display.

```tsx
import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

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
      <Badge content={10} visibility>
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

### API

#### BadgeProps

| Property   | Description                     | Type                                                      | Default     |
| ---------- | ------------------------------- | --------------------------------------------------------- | ----------- |
| content    | Badge content                   | ReactNode                                                 | -           |
| color      | Badge theme color               | `primary` ｜ `info` ｜ `success` ｜ `warning` ｜ `danger` | `primary`   |
| max        | Maximum value for number badges | number                                                    | -           |
| showZero   | Whether to show badge when content is 0 | boolean                                          | false       |
| visibility | Whether to show badge           | boolean                                                   | true        |
| variant    | Badge variant                   | `contained` ｜ `outlined`                                 | `contained` |
| type       | Badge shape                     | `dot` ｜ `standard` ｜ `bubble`                           | `standard`  |

### Style Variables

| Property                 | Description                      | Default Value   | Global Variable                  |
| ------------------------ | -------------------------------- | --------------- | -------------------------------- |
| --position               | Position offset percentage       | 14%             | --bui-badge-position             |
| --min-width              | Minimum width                    | 15px            | --bui-badge-min-width            |
| --height                 | Height                           | 15px            | --bui-badge-height               |
| --line-height            | Line height                      | 15px            | --bui-badge-line-height          |
| --padding                | Padding                          | 0 3px           | --bui-badge-padding              |
| --border-radius          | Border radius                    | 8px             | --bui-badge-border-radius        |
| --outlined-padding       | Padding for outlined badges      | 0 2px           | --bui-badge-outlined-padding     |
| --dot-size               | Dot size                         | 9px             | --bui-badge-dot-size             |
| --bubble-padding         | Padding for bubble badges        | 0 5px           | --bui-badge-bubble-padding       |
| --bubble-border-radius   | Border radius for bubble badges  | 6px 6px 6px 0   | --bui-badge-bubble-border-radius |
