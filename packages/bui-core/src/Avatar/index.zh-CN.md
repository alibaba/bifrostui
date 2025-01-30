---
group:
  title: 基本输入
name: Avatar 头像
---

# Avatar 头像

用来展示用户头像或者事物，支持展示图片、文字、图标等。
`Avatar` 基于 `Image`组件进行封装，[Image](http://bui.taopiaopiao.com/cores/image) 常用的属性，Avatar 同样支持。

## 基础用法

头像组件通过`src`属性传递图片地址来创建图像头像。

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
    </Stack>
  );
};
```

## 字符串头像

除了图片头像外，您还可以通过`children`创建简单字符型头像。

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar>UC</Avatar>
      <Avatar>MK</Avatar>
    </Stack>
  );
};
```

## 自定义头像

通过`children`还可以创建图标等自定义头像。

```tsx
import React from 'react';
import { Avatar, Stack } from '@bifrostui/react';
import { VipFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar>
        <VipFilledIcon />
      </Avatar>
    </Stack>
  );
};
```

## 头像形状

Avatar 组件提供两种头像模式：圆形`rounded` 、方形`square`， 您可以使用`variant`设置对应的模式。
variant 默认值为：`rounded`。

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      <Avatar
        variant="square"
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
      />
    </Stack>
  );
};
```

## 头像尺寸

`Avatar`提供`xsmall`、 `small`、 `medium`、 `large` 等 4 种尺寸，您可以通过`size`设置对应尺寸。
size 默认尺寸为： `medium`。

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="xsmall"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="small"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="medium"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="large"
      />
    </Stack>
  );
};
```

## 头像组合

除了提供单个头像，我们还提供组合头像，通过`AvatarGroup`、`Avatar`组合使用。

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};
```

## 头像形状

AvatarGroup 组件提供两种头像模式：圆形`rounded` 、方形`square`， 您可以使用`variant`设置对应的模式。
variant 默认值为：`rounded`。

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="column" spacing="10px">
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
      <AvatarGroup variant="square">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};
```

## 控制头像显示数目

AvatarGroup 组件提供`maxCount`属性来限制显示的头像数量，并自动计算未显示的头像数量。

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup maxCount="2">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};
```

## 头像组合朝向

AvatarGroup 组件提供`orientation`属性来控制头像朝向。
orientation 默认为：`left`。

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="column" spacing="10px">
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
      <AvatarGroup orientation="left">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};
```

## 头像间距

AvatarGroup 组件提供`spacing`属性来控制头像间距。

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup maxCount="2" spacing="10px">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};
```

## API

### AvatarProps

| 属性        | 说明                     | 类型                                                 | 默认值    |
| ----------- | ------------------------ | ---------------------------------------------------- | --------- |
| src         | 图像地址                 | string                                               | -         |
| alt         | 图像无法显示时的替代文本 | React.ReactNode                                      | -         |
| lazy        | 懒加载                   | boolean                                              | false     |
| placeholder | 加载时占位               | React.ReactNode ｜ boolean                           | false     |
| ImageProps  | 透传 Image 属性          | [ImageProps](http://bui.taopiaopiao.com/cores/image) | -         |
| variant     | 头像形状                 | `rounded`｜`square`                                  | `rounded` |
| size        | 头像大小                 | `large`｜`medium`｜`small` ｜`xsmall`                | `medium`  |
| onError     | 图像头像加载失败回调     | ReactEventHandler                                    | -         |
| onLoad      | 图像头像加载回调         | ReactEventHandler                                    | -         |

### AvatarGroupProps

| 属性        | 说明                 | 类型                                  | 默认值    |
| ----------- | -------------------- | ------------------------------------- | --------- |
| maxCount    | 最多可显示的头像个数 | string                                | -         |
| variant     | 头像形状             | `rounded` ｜`square`                  | `rounded` |
| size        | 头像大小             | `large`｜`medium`｜`small` ｜`xsmall` | `medium`  |
| spacing     | 头像间距             | string                                | -         |
| orientation | 头像朝向             | `left`｜`right`                       | `right`   |

## 样式变量

### Avatar

| 属性          | 说明             | 默认值 | 全局变量                 |
| ------------- | ---------------- | ------ | ------------------------ |
| --large-size  | 大尺寸头像宽高   | 60px   | --bui-avatar-large-size  |
| --medium-size | 中等尺寸头像宽高 | 42px   | --bui-avatar-medium-size |
| --small-size  | 小尺寸头像宽高   | 30px   | --bui-avatar-small-size  |
| --xsmall-size | 超小尺寸头像宽高 | 24px   | --bui-avatar-xsmall-size |

### AvatarGroup

| 属性                 | 说明               | 默认值                        | 全局变量                              |
| -------------------- | ------------------ | ----------------------------- | ------------------------------------- |
| --xsmall-margin-left | 超小尺寸头像左边距 | -5px                          | --bui-avatar-group-xsmall-margin-left |
| --small-margin-left  | 小尺寸头左边距     | -9px                          | --bui-avatar-group-small-margin-left  |
| --small-box-shadow   | 小尺寸头像阴影     | 0 0 0 1px --bui-color-bg-view | --bui-avatar-group-small-box-shadow   |
| --medium-margin-left | 中等尺寸头左边距   | -13px                         | --bui-avatar-group-medium-margin-left |
| --medium-box-shadow  | 中等尺寸头像阴影   | 0 0 0 2px --bui-color-bg-view | --bui-avatar-group-medium-box-shadow  |
| --large-margin-left  | 大尺寸头左边距     | -21px                         | --bui-avatar-group-large-margin-left  |
| --large-box-shadow   | 大尺寸头像阴影     | 0 0 0 3px --bui-color-bg-view | --bui-avatar-group-large-box-shadow   |
