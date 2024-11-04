---
group: 布局
name: Divider 分割线
---

# Divider 分割线

分割线，常用于对列表或者布局中的组件内容进行分组。

## 代码演示

### 基础用法

默认的分割线是一条细线。

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      左边
      <Divider style={{ margin: '0 6px' }} />
      右边
    </Stack>
  );
};
```

### 虚线

您也可以通过`dashed`属性来控制分割线为虚线还是实线。

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      左边
      <Divider style={{ margin: '0 6px' }} dashed />
      右边
    </Stack>
  );
};
```

### 分割线方向

默认的分割线为垂直方向，我们也提供水平方向分割线。
您也可以通过`direction`属性来控制分割线的方向。

##### 竖向：撑满父元素高度

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      左边
      <Divider style={{ margin: '0 6px' }} />
      右边
    </Stack>
  );
};
```

##### 横向：撑满父元素宽度

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      上边
      <Divider direction="horizontal" />
      下边
    </Stack>
  );
};
```

### 定制分割线尺寸

默认分割线撑满父元素宽度/高度，您也可以通过`size`来定制分割线尺寸。

##### 竖向：指定 size

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      左边
      <Divider size="12px" style={{ margin: '0 6px' }} />
      右边
    </Stack>
  );
};
```

##### 横向：指定 size

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      上边
      <Divider direction="horizontal" size="100px" />
      下边
    </Stack>
  );
};
```

### 有说明文字的分割线

您还可以渲染带有内容的分割线。通过`children`透传文案。
目前仅`direction`为`horizontal`时支持。

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      上边
      <Divider direction="horizontal" size="60px" style={{ margin: '6px 0' }}>
        我是分割线
      </Divider>
      下边
    </Stack>
  );
};
```

### 定制分割线

对于其他特殊样式，可以通过`style`自行定制，例如定制分割线粗细。

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      上边
      <Divider direction="horizontal" style={{ borderBottomWidth: '2px' }} />
      下边
    </Stack>
  );
};
```

### API

##### DividerProps

| 属性      | 说明       | 类型                       | 默认值     |
| --------- | ---------- | -------------------------- | ---------- |
| direction | 分割线方向 | `horizontal` ｜ `vertical` | `vertical` |
| size      | 分割线尺寸 | string                     | -          |
| dashed    | 是否为虚线 | boolean                    | false      |

### 样式变量

| 属性           | 说明                                   | 默认值 | 全局变量                   |
| -------------- | -------------------------------------- | ------ | -------------------------- |
| --height       | 分割线高度                             | 100%   | --bui-divider-height       |
| --width        | 分割线宽度                             | 100%   | --bui-divider-width        |
| --border-width | 分割线粗细(所有形式的分割线均受此控制) | 1px    | --bui-divider-border-width |
| --line-width   | 可插入文案的分割线长度                 | 40px   | --bui-divider-line-width   |
