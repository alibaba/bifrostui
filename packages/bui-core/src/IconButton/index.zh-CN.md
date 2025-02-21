---
group: 基本输入
name: IconButton 图标按钮
---

# IconButton 图标按钮

图标按钮是一种只显示一个图标而不显示文本标签的按钮。主要用于控制栏、工具栏，当需要一个紧凑的按钮时它们也十分有用

## 基础按钮

按钮支持 `默认按钮`、`描边按钮`、`填充按钮` 三种展示形态

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

## 形状

按钮支持 `圆形`、`圆角`、`正方形` 三种形状

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

## 按钮大小

按钮有大、中、小三种尺寸。

通过设置 `size` 为 large small 分别把按钮设为大、小。若不设置 `size`，则尺寸为中等尺寸。

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

## 按钮色彩

按钮支持 `primary`、`success`、`info`、`warning`、`danger`、`light`、`neutral`、`dark` 主题定义。若不设置color，则默认为`neutral`

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

## 禁用状态

通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。

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

## API

| 属性      | 说明                 | 类型                                                                                      | 默认值    |
| --------- | -------------------- | ----------------------------------------------------------------------------------------- | --------- |
| variant   | 按钮类型             | `default` \| `text` \| `contained` \| `subtle`                                            | `default` |
| color     | 按钮颜色             | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `neutral`\| `light`\| `dark` | `neutral` |
| size      | 按钮大小             | `small` \| `medium` \| `large`                                                            | `medium`  |
| disabled  | 是否禁用             | boolean                                                                                   | false     |
| startIcon | 在子元素前放在的内容 | React.ReactNode                                                                           | -         |
| openType  | 微信开放能力         | string                                                                                    | -         |
| onClick   | 点击按钮时的回调     | (event: MouseEvent) => void                                                               | -         |

其他属性见 [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)

## 样式变量

| 属性               | 说明                                       | 默认值                | 全局变量                        |
| ------------------ | ------------------------------------------ | --------------------- | ------------------------------- |
| --bg-color         | 图标按钮背景颜色                           | --bui-color-neutral-5 | --bui-icon-btn-bg-color         |
| --color            | 图标颜色                                   | --bui-color-fg-muted  | --bui-icon-btn-color            |
| --icon-size        | 图标大小                                   | 17px                  | --bui-icon-btn-font-size        |
| --user-area        | 按钮点击安全区域大小(默认medium大小情况下) | 5px                   | --bui-icon-btn-padding          |
| --large-font-size  | 大号按钮字号                               | 23px                  | --bui-icon-btn-large-font-size  |
| --disabled-opacity | 禁用状态透明度                             | 0.5                   | --bui-icon-btn-disabled-opacity |
