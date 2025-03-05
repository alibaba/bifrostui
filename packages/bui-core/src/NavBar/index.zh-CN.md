---
group: 导航
name: NavBar 导航栏
---

# NavBar 导航栏

提供页面的导航组件，常见于移动端页面的顶部

## 基础用法

直接引入组件即可在页面头部添加导航栏

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar />
    </Stack>
  );
};
```

### 修改或隐藏左侧默认图标

组件支持修改左侧返回箭头的样式，通过向`leftIcon`传递`ReactNode`类型的参数，修改左侧返回箭头。当传参数为`false`的情况，隐藏图标。

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';
import { CloseLargeIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar title="标题文案" leftIcon={<CloseLargeIcon />} />
      <NavBar title="标题文案" leftIcon={false} />
    </Stack>
  );
};
```

### 自定义图标展示

通过设置`IconProps`来控制内部图标

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar title="标题文案" IconProps={{ htmlColor: '#ff335c' }} />
    </Stack>
  );
};
```

### 自定义左侧文案

通过向`left`属性传递`ReactNode`类型的参数，修改返回箭头左侧的文案内容。

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar left="返回" />
    </Stack>
  );
};
```

### 为导航栏添加标题

组件支持自定义标题，通过向`title`属性传递`ReactNode`类型的参数，完成标题的修改。`string`类型的标题支持超出部分省略展示，`ReactNode`需要自己实现。

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Stack spacing="50px" style={{ width: '375px' }}>
        <NavBar title="标题文案" />
        <NavBar title="这个标题文案很长很长很长很长" />
      </Stack>
    </Stack>
  );
};
```

### 自定义右侧内容

用户可以通过向`right`属性传递`ReactNode`类型的参数，来完成右侧区域内容的自定义，参考`@bifrostui/icons`中的图标内容。

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';
import { MoreIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar title="标题文案" right="文案" />
      <NavBar title="标题文案" right={<MoreIcon size="large" />} />
    </Stack>
  );
};
```

### 固定在顶部

用户可以通过向`fixed`属性传递`true`将导航栏固定在页面顶部，同时可以设置`placeholder`属性传递`true`在原有位置生成一个占位块。

```tsx
/**
 * background: '#f6f7f9'
 * iframe: 812
 * transform: true
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar title="标题文案" fixed placeholder />
    </Stack>
  );
};
```

## API

### NavBar

| 属性        | 说明                                                                         | 类型                                         | 默认值                      |
| ----------- | ---------------------------------------------------------------------------- | -------------------------------------------- | --------------------------- |
| className   | 组件类名                                                                     | string                                       | -                           |
| title       | 标题                                                                         | ReactNode                                    | -                           |
| left        | 导航栏左侧内容自定义                                                         | ReactNode                                    | -                           |
| leftIcon    | 自定义左侧箭头，false控制隐藏                                                | ReactNode \| boolean                         | <ArrowBackwardLargeIcon \/> |
| IconProps   | 透传给内部图标的属性                                                         | ISvgIconProps                                | -                           |
| right       | 导航栏右侧内容自定义                                                         | ReactNode                                    | -                           |
| fixed       | 是否固定在顶部                                                               | boolean                                      | false                       |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素（沉浸式效果场景考虑关闭） | boolean                                      | false                       |
| onClickLeft | 点击返回按钮回调事件                                                         | (e: SyntheticEvent<HTMLDivElement\>) => void | -                           |

## 样式变量

| 属性               | 说明               | 默认值                  | 全局变量                      |
| ------------------ | ------------------ | ----------------------- | ----------------------------- |
| --width            | 导航栏宽度         | 100%                    | --bui-navbar-width            |
| --height           | 导航栏高度         | 45px                    | --bui-navbar-height           |
| --padding          |                    | 0 8px                   | --bui-navbar-padding          |
| --title-max-width  | 导航栏标题最大宽度 | 60%                     | --bui-navbar-title-max-width  |
| --icon-size        | 导航栏图标大小     | 30px                    | --bui-navbar-icon-size        |
| --icon-font-size   | 导航栏图标字体     | var(--bui-title-size-3) | --bui-navbar-icon-font-size   |
| --background-color | 导航栏背景色       | var(--bui-color-white)  | --bui-navbar-background-color |
| --border-bottom    | 导航栏底部边框样式 | none                    | --bui-navbar-border-bottom    |
| --z-index          | 导航栏默认层级     | auto                    | --bui-navbar-z-index          |
