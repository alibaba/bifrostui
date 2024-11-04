---
group: 反馈
name: Skeleton 骨架屏
---

# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 代码演示

### 基础用法

使用`width`和`height`设置宽高。

```tsx
import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Skeleton width={210} />
      <Skeleton width={240} />
    </Stack>
  );
};
```

### 变体

组件支持 4 种变体`variant`:

`text`(默认): 可以根据`font-size`自动调整大小。

`circular`, `rectangular`, `rounded`: 可以根据`width`和`height`来调整大小。

```tsx
import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="10px">
      <Skeleton variant="text" width={210} />
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="rectangular" width={210} height={40} />
      <Skeleton variant="rounded" width={210} height={40} />
    </Stack>
  );
};
```

### 动画

默认是`wave`。你可以根据`animation`来设置不同的动画或者完全禁用它。

```tsx
import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Skeleton width={210} />
      <Skeleton animation="pulse" width={210} />
      <Skeleton animation={false} width={210} />
    </Stack>
  );
};
```

### 组合

可以使用不同的图形组合。

```tsx
import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
      >
        <Skeleton
          variant="circular"
          style={{ margin: '0 6px 0 0', width: '48px', height: '48px' }}
        />
        <div>
          <Skeleton width="50%" style={{ width: '210px' }} />
          <Skeleton width="50%" style={{ width: '210px' }} />
        </div>
      </div>
    </Stack>
  );
};
```

### 尺寸推断

可以根据`style`的`height`和`width`属性来设置尺寸。

```tsx
import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="10px">
      <Skeleton variant="circular">
        <div style={{ height: '80px', width: '80px' }} />
      </Skeleton>
      <Skeleton variant="circular">
        <div style={{ height: '100px', width: '100px' }} />
      </Skeleton>
    </Stack>
  );
};
```

## API

| 属性      | 说明     | 类型                                               | 默认值 |
| --------- | -------- | -------------------------------------------------- | ------ |
| animation | 动画效果 | `wave` \| `pulse` \| `false`                       | `wave` |
| variant   | 展现形式 | `text` \| `circular` \| `rectangular` \| `rounded` | `text` |
| width     | 占位宽度 | `string` \| `number`                               | `100%` |
| height    | 占位高度 | `string` \| `number `                              | `16px` |

## 样式变量

| 属性            | 说明           | 默认值                     |
| --------------- | -------------- | -------------------------- |
| --border-radius | 骨架屏圆角大小 | `--bui-shape-radius-label` |
