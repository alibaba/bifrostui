---
group: 数据展示
name: Badge 徽章
---

# Badge 徽章

Badge 组件，通常用于在容器的某个角落显示徽标，常用于通知图标或头像右上角显示消息数量。

## 基本用法

Badge 组件可通过使用 `content` 设置徽章内容。

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

## 徽章形状

Badge 提供 3 种徽章形状：`standard`、`dot`、`bubble`。
您可以通过 `type` 属性控制徽章形状。

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

## 徽章主题

Badge 组件提供了 7 种颜色主题：`primary`、`success`、`warning`、`info`、`danger`、`light`、`dark`，您可以通过 `color` 属性设置组件主题色。
color 属性默认值：`primary`。

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

## 徽章模式

Badge 组件支持两种模式：填充 `contained`、轮廓 `outlined`。
您可以通过 `variant` 属性设置组件模式。
`variant` 属性默认值：`contained`。

### contained

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

### outlined

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

## 设置最大值

您可以通过 `max` 属性来限制徽章数值。当数值超过设置的最大值时，会显示最大值加号的形式。

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

## 显示控制

Badge 提供了 `showZero` 和 `invisible` 属性来控制徽章的显示。

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
      <Badge content={10} invisible={false}>
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};
```

## API

### BadgeProps

| 属性       | 说明                         | 类型                                                      | 默认值      |
| ---------- | ---------------------------- | --------------------------------------------------------- | ----------- |
| content    | 徽章内容                     | ReactNode                                                 | -           |
| color      | 徽章主题色                   | `primary` ｜ `info` ｜ `success` ｜ `warning` ｜ `danger` | `primary`   |
| max        | 数字徽章的最大值             | number                                                    | -           |
| showZero   | content为0时是否展示         | boolean                                                   | false       |
| invisible  | 是否隐藏badge                | boolean                                                   | false       |
| variant    | 徽章类型                     | `contained` ｜`outlined`                                  | `contained` |
| type       | 徽章形状                     | `dot`｜`standard`｜`bubble`                               | `standard`  |

### 样式变量

| 属性                     | 说明           | 默认值          | 全局变量                         |
| ------------------------ | -------------- | --------------- | -------------------------------- |
| --position               | 位置偏移百分比 | 14%             | --bui-badge-position             |
| --min-width              | 最小宽度       | 15px            | --bui-badge-min-width            |
| --height                 | 高度           | 15px            | --bui-badge-height               |
| --line-height            | 行高           | 15px            | --bui-badge-line-height          |
| --padding                | 内边距         | 0 3px           | --bui-badge-padding              |
| --border-radius          | 边框圆角       | 8px             | --bui-badge-border-radius        |
| --outlined-padding       | 描边样式内边距 | 0 2px           | --bui-badge-outlined-padding     |
| --dot-size               | 圆点大小       | 9px             | --bui-badge-dot-size             |
| --bubble-padding         | 气泡内边距     | 0 5px           | --bui-badge-bubble-padding       |
| --bubble-border-radius   | 气泡圆角       | 6px 6px 6px 0   | --bui-badge-bubble-border-radius |
