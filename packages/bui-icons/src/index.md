---
group: 图标
name: Icons 图标
title: Icons 图标
sidebar: false
---

## 安装

需要安装 @bifrostui/icons 图标组件包。

```
$ npm install --save @bifrostui/icons
# or
$ yarn add @bifrostui/icons
# or
$ pnpm add @bifrostui/icons
```

## 使用

安装完包后，直接引用所需图标

```js
import { SettingsOutlinedIcon } from '@bifrostui/icons';
```

## 代码演示

### 大小

通过`size`属性设置图标大小。

```tsx
import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <SettingsOutlinedIcon size="small" />
      <SettingsOutlinedIcon size="medium" />
      <SettingsOutlinedIcon size="large" />
    </Stack>
  );
};
```

### 色彩

通过`color`属性设置图标色彩。

```tsx
import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <SettingsOutlinedIcon size="large" />
      <SettingsOutlinedIcon color="primary" size="large" />
      <SettingsOutlinedIcon color="default" size="large" />
      <SettingsOutlinedIcon color="info" size="large" />
      <SettingsOutlinedIcon color="warning" size="large" />
      <SettingsOutlinedIcon color="danger" size="large" />
      <SettingsOutlinedIcon color="success" size="large" />
      <SettingsOutlinedIcon color="disabled" size="large" />
    </Stack>
  );
};
```

### 自定义图标

如果预定义的图标大小、色彩不能满足需要的话，可以通过通过`htmlColor`属性定制颜色, 或者`style`属性自定义。

```tsx
import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row">
      <SettingsOutlinedIcon style={{ fontSize: '48px', color: '#ad63f6' }} />
      <SettingsOutlinedIcon style={{ fontSize: '48px' }} htmlColor="#ff866e" />
    </Stack>
  );
};
```

## 全部图标

<code src="./demo/index.tsx"></code>

## API

| 属性      | 说明                                                            | 类型                                                                                 | 默认值               |
| --------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------- |
| color     | 图标主题颜                                                      | `default` \| `primary` \| `info` \| `success` \| `warning` \| `danger` \| `disabled` | -                    |
| htmlColor | 自定义图标颜色                                                  | string                                                                               | -                    |
| size      | 预置的图标大小，也可以通过元素的font-size来设置自定义的图标大小 | `small` \| `medium` \| `large`                                                       | 继承父元素的字体大小 |
| viewBox   | SVG的viewBox属性                                                | string                                                                               | '0 0 96 96'          |
