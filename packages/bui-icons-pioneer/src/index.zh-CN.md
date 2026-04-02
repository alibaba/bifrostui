---
group: 图标
name: IconsPioneer 先锋图标
title: IconsPioneer 先锋图标
sidebar: false
---

## 安装

需要安装 @bifrostui/icons-pioneer 先锋图标组件包。

```
$ npm install --save @bifrostui/icons-pioneer
# or
$ yarn add @bifrostui/icons-pioneer
# or
$ pnpm add @bifrostui/icons-pioneer
```

## 使用

安装完包后，直接引用所需图标

```js
import { WantCartOutlinedIcon } from '@bifrostui/icons-pioneer';
```

### 大小

通过`size`属性设置图标大小。

```tsx
import * as React from 'react';
import { Stack } from '@bifrostui/react';
import { WantCartOutlinedIcon } from '@bifrostui/icons-pioneer';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <WantCartOutlinedIcon size="small" />
      <WantCartOutlinedIcon size="medium" />
      <WantCartOutlinedIcon size="large" />
    </Stack>
  );
};
```

### 色彩

通过`color`属性设置图标色彩。

```tsx
import * as React from 'react';
import { Stack } from '@bifrostui/react';
import { WantCartOutlinedIcon } from '@bifrostui/icons-pioneer';

export default () => {
  return (
    <Stack
      direction="row"
      spacing="10px"
      style={{ backgroundColor: '#eee', padding: '10px' }}
    >
      <WantCartOutlinedIcon color="light" size="large" />
      <WantCartOutlinedIcon color="dark" size="large" />
      <WantCartOutlinedIcon color="neutral" size="large" />
      <WantCartOutlinedIcon color="primary" size="large" />
      <WantCartOutlinedIcon color="info" size="large" />
      <WantCartOutlinedIcon color="danger" size="large" />
      <WantCartOutlinedIcon color="success" size="large" />
      <WantCartOutlinedIcon color="warning" size="large" />
      <WantCartOutlinedIcon color="disabled" size="large" />
    </Stack>
  );
};
```

### 自定义图标

如果预定义的图标大小、色彩不能满足需要的话，可以通过通过`htmlColor`属性定制颜色, 或者`style`属性自定义。

```tsx
import * as React from 'react';
import { Stack } from '@bifrostui/react';
import { WantCartOutlinedIcon } from '@bifrostui/icons-pioneer';

export default () => {
  return (
    <Stack direction="row">
      <WantCartOutlinedIcon style={{ fontSize: '48px', color: '#ad63f6' }} />
      <WantCartOutlinedIcon style={{ fontSize: '48px' }} htmlColor="#ff866e" />
    </Stack>
  );
};
```

## 全部图标

<code src="./demo/index.tsx"></code>

## API

| 属性      | 说明                                                            | 类型                                                                                                    | 默认值               |
| --------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------- |
| color     | 图标主题颜                                                      | `light` \| `dark` \| `neutral` \| `primary` \| `info` \| `danger` \|`success` \|`warning` \| `disabled` | -                    |
| htmlColor | 自定义图标颜色                                                  | string                                                                                                  | -                    |
| size      | 预置的图标大小，也可以通过元素的font-size来设置自定义的图标大小 | `small` \| `medium` \| `large`                                                                          | 继承父元素的字体大小 |
| viewBox   | SVG的viewBox属性                                                | string                                                                                                  | '0 0 96 96'          |
