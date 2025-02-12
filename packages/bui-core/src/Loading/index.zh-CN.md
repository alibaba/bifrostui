---
group: 反馈
name: Loading 加载
---

# Loading 加载

## 基础用法

展示一个加载中的图标

```tsx
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading />
    </Stack>
  );
};
```

## 添加文案

可以通过`children`属性传递文案，非`ReactNode`类型的内容会默认添加一层DOM结构来控制样式。

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading>加载中...</Loading>
    </Stack>
  );
};
```

## 修改图标和文案的排列形式

可以通过`direction`传递`vertical` ｜ `horizontal`来控制行列展示形式。

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading direction="horizontal">加载中...</Loading>
    </Stack>
  );
};
```

## 自定义图标展示

通过设置`IconProps`来控制内部图标

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading IconProps={{ htmlColor: '#ff335c' }}>加载中...</Loading>
    </Stack>
  );
};
```

## API

### NavBar

| 属性      | 说明                         | 类型                       | 默认值     |
| --------- | ---------------------------- | -------------------------- | ---------- |
| className | 组件类名                     | string                     | -          |
| icon      | 自定义加载图标               | ReactNode                  | -          |
| IconProps | 自定义图标                   | ISvgIconProps              | -          |
| direction | 加载图标和加载文案的排列方式 | 'vertical' \| 'horizontal' | 'vertical' |
| children  | 控制加载文案内容             | ReactNode                  | -          |

## 样式变量

| 属性                 | 说明             | 默认值 | 全局变量                         |
| -------------------- | ---------------- | ------ | -------------------------------- |
| --icon-font-size     | 图标字号         | 30px   | --bui-loading-icon-font-size     |
| --text-padding       | 文案容器内边距   | 10px   | --bui-loading-text-padding       |
| --animation-duration | 加载动画播放周期 | 1.6s   | --bui-loading-animation-duration |
