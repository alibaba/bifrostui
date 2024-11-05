---
group: 数据展示
name: Badge 徽章
---

# Badge 徽章

在容器某个角上的一个徽标，通常用于通知图标或者头像右上角。

## 代码演示

### 基础用法

简单的徽章，通过`content`设置徽章内容。

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

### 徽章形状

`Badge`提供 3 种徽章形状：`rounded` 、`dot`、 `bubble`。
您可以通过`type`属性来控制徽章形状。

##### 圆形徽章

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

##### 圆点徽章

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

##### 不规则徽章

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

### 徽章类型

除此之外，徽章还提供 2 种模式：`contained`、`outlined`。

##### 实心徽章

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

##### 空心徽章

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

## 设置最大值

您可以通过`maxCount`属性来限制徽章数值。

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

## 设置颜色

我们还为徽章提供 5 种主题色：`danger` 、`success`、 `warning`、 `info`、 `primary`。

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

| 属性     | 说明           | 类型                                                      | 默认值      |
| -------- | -------------- | --------------------------------------------------------- | ----------- |
| content  | 徽章内容       | ReactNode                                                 | -           |
| color    | 徽章主题色     | `primary` ｜ `info` ｜ `success` ｜ `warning` ｜ `danger` | `primary`   |
| maxCount | 数字徽章最大值 | number                                                    | -           |
| variant  | 徽章类型       | `contained` ｜`outlined`                                  | `contained` |
| type     | 徽章形状       | `dot`｜`rounded`｜`bubble`                                | `rounded`   |

### 样式变量

| 属性                   | 说明                     | 默认值        | 全局变量                         |
| ---------------------- | ------------------------ | ------------- | -------------------------------- |
| --badge-position       | 徽章距离顶部和右部的位置 | 14%           | --bui-badge-position             |
| --min-width            | 徽章最小宽度             | 15px          | --bui-badge-min-width            |
| --height               | 徽章高度                 | 15px          | --bui-badge-height               |
| --line-height          | 字体行高                 | 15px          | --bui-badge-line-height          |
| --padding              | 内边距                   | 0 3px         | --bui-badge-padding              |
| --border-radius        | 圆角                     | 8px           | --bui-badge-border-radius        |
| --outlined-padding     | 描边场景内边距           | 0 2px         | --bui-badge-outlined-padding     |
| --dot-size             | 点状场景宽高             | 9px           | --bui-badge-dot-size             |
| --bubble-padding       | 气泡场景内边距           | 9px           | --bui-badge-dot-size             |
| --bubble-border-radius | 气泡场景圆角             | 6px 6px 6px 0 | --bui-badge-bubble-border-radius |
