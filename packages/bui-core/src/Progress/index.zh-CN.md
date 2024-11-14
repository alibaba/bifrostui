---
group: 反馈
name: Progress 进度条
---

# Progress 进度条

展示操作的当前进度。

## 代码演示

### 基础用法

通过`percent`设置操作进度。

```tsx
import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={40} />;
};
```

### 指定线条颜色

通过`strokeColor`设置线条颜色，其默认值为`--bui-color-primary`。

```tsx
import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" spacing="5px">
      <Progress percent={40} strokeColor="var(--bui-color-primary)" />
      <Progress percent={50} strokeColor="var(--bui-color-info)" />
      <Progress percent={30} strokeColor="var(--bui-color-success)" />
      <Progress percent={80} strokeColor="var(--bui-color-warning)" />
      <Progress percent={90} strokeColor="var(--bui-color-vip)" />
    </Stack>
  );
};
```

### 进度条宽度

可以通过`strokeWidth`设置进度条宽度。

```tsx
import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing="10px">
      <Progress
        percent={60}
        strokeColor="var(--bui-color-warning)"
        strokeWidth={10}
      />
      <Progress
        percent={60}
        strokeColor="var(--bui-color-warning)"
        strokeWidth={15}
      />
    </Stack>
  );
};
```

### 自定义进度条渐变色

`linear-gradient`的封装。推荐只传两种颜色。

```tsx
import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing="10px">
      <Progress
        percent={60}
        strokeColor={{
          from: 'var(--bui-color-red)',
          to: 'var(--bui-color-red-light)',
        }}
      />
      <Progress
        percent={90}
        strokeColor={{
          '0%': 'var(--bui-color-orange)',
          '100%': 'var(--bui-color-orange-light)',
        }}
      />
    </Stack>
  );
};
```

### 自定义未完成的分段的颜色

通过`trailColor`指定未完成的分段的颜色。

```tsx
import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={60} trailColor="var(--bui-color-red-light)" />;
};
```

## API

| 属性        | 说明                               | 类型                                                                                                               | 默认值 |
| ----------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------ |
| percent     | 百分比                             | number                                                                                                             | -      |
| strokeColor | 进度条的色彩，传入 object 时为渐变 | string \| { from: string; to: string; direction?: string } \| { [percentage: string]: string; direction?: string } | -      |
| trailColor  | 未填充进度条的色彩                 | string                                                                                                             | -      |
| strokeWidth | 进度条线的宽度                     | number \| string                                                                                                   | -      |

## 样式变量

| 属性            | 说明               | 默认值                   | 全局变量                     |
| --------------- | ------------------ | ------------------------ | ---------------------------- |
| --fill-color    | 进度条的色彩       | --bui-color-primary      | --bui-progress-fill-color    |
| --trail-color   | 未填充进度条的色彩 | rgba(156, 156, 165, 0.2) | --bui-progress-trail-color   |
| --stroke-width  | 填充进度条宽度     | 8px                      | --bui-progress-stroke-width  |
| --width         | 进度条宽度         | 100%                     | --bui-progress-width         |
| --border-radius | 进度条圆角         | 100px                    | --bui-progress-border-radius |
