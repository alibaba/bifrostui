---
group: 反馈
name: Alert 警告提示
---

# Alert 警告提示

Alert 组件，常用于展示简短的需要关注的信息，常用于向用户显示警告提示或者成功提示等信息。

## 基本用法

Alert 组件可通过使用 `children` 设置 Alert 组件内容。

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack alignItems="stretch" style={{ maxWidth: 350, margin: '0 auto' }}>
      <Alert>开票提醒2020.0802下午14:00开售</Alert>
    </Stack>
  );
};
```

## 警示框图标

`icon` 允许您将图标添加到 Alert 组件头部，这将覆盖 Alert 默认图标。
您也可以通过设置 `icon` 属性为 `false` 来删除 Alert 默认图标。

```tsx
import { Alert, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert>开票提醒2020.0802下午14:00开售</Alert>
      <Alert icon={<HelpCircleOutlinedIcon />}>
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert icon={false}>开票提醒2020.0802下午14:00开售</Alert>
    </Stack>
  );
};
```

## 警示框滚动

`marquee` 属性允许您将 Alert 组件内容滚动。

```tsx
import { Alert, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert icon={false} marquee>
        【开始】首部海外维和题材商业大片高燃来袭，聚焦中国维和警察鲜为人知的生死时刻！【结束】
      </Alert>
      <Alert marquee icon={<HelpCircleOutlinedIcon />}>
        【开始】首部海外维和题材商业大片高燃来袭，聚焦中国维和警察鲜为人知的生死时刻！【结束】
      </Alert>
    </Stack>
  );
};
```

## 警示框主题

Alert 组件提供了 5 种颜色主题：`warning`、`success`、 `error`、`info` 、`primary`，您可以通过 `color` 属性设置组件主题色。
color 属性默认值：`primary`。

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert>开票提醒2020.0802下午14:00开售</Alert>
      <Alert color="warning">开票提醒2020.0802下午14:00开售</Alert>
      <Alert color="success">开票提醒2020.0802下午14:00开售</Alert>
      <Alert color="danger">开票提醒2020.0802下午14:00开售</Alert>
      <Alert color="info">开票提醒2020.0802下午14:00开售</Alert>
    </Stack>
  );
};
```

## 警告框模式

Alert 组件支持两种模式：填充`standard`、轮廓`outlined`。
您可以通过 `variant` 属性设置组件模式。
`variant` 属性默认值：`standard`。

### standard

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert variant="standard">开票提醒2020.0802下午14:00开售</Alert>
      <Alert variant="standard" color="warning">
        开票提醒2020.0802下午14:00开售
      </Alert>

      <Alert variant="standard" color="danger">
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert variant="standard" color="info">
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert variant="standard" color="success">
        开票提醒2020.0802下午14:00开售
      </Alert>
    </Stack>
  );
};
```

### outlined

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert variant="outlined">开票提醒2020.0802下午14:00开售</Alert>
      <Alert variant="outlined" color="warning">
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert variant="outlined" color="danger">
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert variant="outlined" color="info">
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert variant="outlined" color="success">
        开票提醒2020.0802下午14:00开售
      </Alert>
    </Stack>
  );
};
```

## 操作区

Alert 组件提供了 `action` 属性，用于关闭或撤销 Alert。
Alert 提供了 onClose 回调，如果业务配置了 onClose 并且 action 没有设置属性，Alert 组件尾部会显示一个关闭图标。
`action` 属性可用于覆盖这个关闭图标，自定义操作区。

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [closeOne, setCloseOne] = useState(false);
  const [closeTwo, setCloseTwo] = useState(false);
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert color="warning">开票提醒2020.0802下午14:00开售</Alert>
      {!closeOne && (
        <Alert
          color="success"
          onClose={() => {
            setCloseOne(true);
          }}
        >
          开票提醒2020.0802下午14:00开售
        </Alert>
      )}
      {!closeTwo && (
        <Alert
          action={<div>close</div>}
          onClose={() => {
            setCloseTwo(true);
          }}
        >
          开票提醒2020.0802下午14:00开售
        </Alert>
      )}
    </Stack>
  );
};
```

## API

### AlertProps

| 属性    | 说明                                 | 类型                                                      | 默认值     |
| ------- | ------------------------------------ | --------------------------------------------------------- | ---------- |
| color   | 警告框主题色                         | `primary` ｜ `info` ｜ `success` ｜ `warning` ｜ `danger` | `primary`  |
| icon    | 自定义图标，icon 为 false 时隐藏图标 | React.ReactNode ｜ boolean                                | true       |
| action  | 警告提示操作区                       | React.ReactNode                                           | -          |
| variant | 警告模式                             | `standard`｜`outlined`                                    | `standard` |
| onClose | 关闭回调                             | (e?: SyntheticEvent, data?: any) => void;                 | -          |

### 样式变量

| 属性                     | 说明           | 默认值             | 全局变量                           |
| ------------------------ | -------------- | ------------------ | ---------------------------------- |
| --content-marquee-speed  | 内容滚动速度   | 10s                | --bui-alert-content-marquee-speed  |
| --padding                | 内边距         | 8px                | --bui-alert-padding                |
| --line-height            | 行高           | 16px               | --bui-alert-line-height            |
| --default-icon-font-size | 默认图标字号   | 15px               | --bui-alert-default-icon-font-size |
| --action-margin-left     | 操作区左外边距 | 16px               | --bui-alert-action-margin-left     |
| --icon-margin-right      | 图标右外边距   | --bui-spacing-xs   | --bui-alert-icon-margin-right      |
| --icon-font-size         | 图标字号       | --bui-title-size-4 | --bui-alert-icon-font-size         |
