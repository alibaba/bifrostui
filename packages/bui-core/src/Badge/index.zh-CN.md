---
group: 数据展示
name: Badge 徽章
---

# Badge 徽章

在容器某个角上的一个徽标，通常用于通知图标或者头像右上角。

## 基础用法

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

## 徽章形状

`Badge`提供 3 种徽章形状：`rounded` 、`dot`、 `bubble`。
您可以通过`type`属性来控制徽章形状。

### 圆形徽章

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

### 圆点徽章

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

### 不规则徽章

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

## 徽章类型

除此之外，徽章还提供 2 种模式：`contained`、`outlined`。

### 实心徽章

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

### 空心徽章

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
    <Stack
      spacing="10px"
      direction="row"
      style={{
        borderRadius: 'var(--bui-shape-radius-card)',
        background: 'var(--bui-color-bg-default)',
        padding: '24px',
      }}
    >
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
      <Badge color="light" content="5">
        <PhoneFilledIcon color="default" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="dark" content="5">
        <PhoneFilledIcon color="dark" style={{ fontSize: '38px' }} />
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
    <Stack
      spacing="10px"
      direction="row"
      style={{
        borderRadius: 'var(--bui-shape-radius-card)',
        background: 'var(--bui-color-bg-default)',
        padding: '24px',
      }}
    >
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
      <Badge color="light" content="5" variant="outlined">
        <PhoneFilledIcon color="default" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="dark" content="5" variant="outlined">
        <PhoneFilledIcon color="dark" style={{ fontSize: '38px' }} />
      </Badge>
    </Stack>
  );
};
```

## API

### Badge

| 属性       | 说明                         | 类型                                                      | 默认值      |
| ---------- | ---------------------------- | --------------------------------------------------------- | ----------- |
| content    | 徽章内容                     | ReactNode                                                 | -           |
| color      | 徽章主题色                   | `primary` ｜ `info` ｜ `success` ｜ `warning` ｜ `danger` | `primary`   |
| max        | 数字徽章的最大值（推荐使用） | number                                                    | -           |
| showZero   | content为0时是否展示         | boolean                                                   | false       |
| visibility | 是否展示badge                | boolean                                                   | true        |
| maxCount   | 数字徽章最大值（即将废弃）   | number                                                    | -           |
| variant    | 徽章类型                     | `contained` ｜`outlined`                                  | `contained` |
| type       | 徽章形状                     | `dot`｜`rounded`｜`bubble`                                | `rounded`   |

## 样式变量

| 全局变量                         | 说明           | 默认值          |
| -------------------------------- | -------------- | --------------- |
| --bui-badge-position             | 位置偏移百分比 | `14%`           |
| --bui-badge-min-width            | 最小宽度       | `15px`          |
| --bui-badge-height               | 高度           | `15px`          |
| --bui-badge-line-height          | 行高           | `15px`          |
| --bui-badge-padding              | 内边距         | `0 3px`         |
| --bui-badge-border-radius        | 边框圆角       | `8px`           |
| --bui-badge-outlined-padding     | 描边样式内边距 | `0 2px`         |
| --bui-badge-dot-size             | 圆点大小       | `9px`           |
| --bui-badge-bubble-padding       | 气泡内边距     | `0 5px`         |
| --bui-badge-bubble-border-radius | 气泡圆角       | `6px 6px 6px 0` |

## 新增用法示例

### max属性

```tsx
import React from 'react';
import { Badge } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Badge content={120} max={99}>
      <PhoneFilledIcon color="success" style={{ fontSize: '38px' }} />
    </Badge>
  );
};
```

### showZero属性

```tsx
import React from 'react';
import { Badge, Avatar } from '@bifrostui/react';
export default () => {
  return (
    <Badge content={0} showZero>
      <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
    </Badge>
  );
};
```

### visibility属性

```tsx
import React from 'react';
import { Badge, Avatar } from '@bifrostui/react';

export default () => {
<<<<<<< HEAD
  return <Badge content={10} visibility={true}>
      <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
    </Badge>
=======
  return (
    <Badge content={10} visibility={true}>
      <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
    </Badge>
  );
>>>>>>> e8cd4a6 (feat: 重构Tooltip组件和修复Badge组件相关问题)
};
```
