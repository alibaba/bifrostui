---
group: 反馈
name: Progress 进度条
---

# Progress 进度条

展示操作的当前进度。

## 基础用法

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
          from: 'var(--bui-color-primary)',
          to: 'var(--bui-color-primary-light)',
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
  return <Progress percent={60} trailColor="var(--bui-color-primary-light)" />;
};
```

## 无障碍性 (Accessibility)

Progress 组件内置了完整的无障碍性支持，可以直接使用以下 ARIA 属性：

- `aria-label`: 为进度条提供可访问的标签
- `aria-describedby`: 关联描述进度条的元素
- `aria-hidden`: 控制进度条在无障碍树中的可见性
- `aria-details`: 提供进度条的详细信息
- `aria-busy`: 表示进度条是否处于忙碌状态
- `aria-readonly`: 表示进度条是否为只读
- `aria-required`: 表示进度条是否为必填
- `aria-valuenow`: 进度条的当前值（默认为percent值）
- `aria-valuemin`: 进度条的最小值（默认为0）
- `aria-valuemax`: 进度条的最大值（默认为100）
- `aria-valuetext`: 进度条的文本描述

使用示例：

```tsx
import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" spacing="10px">
      <Progress percent={50} aria-label="文件下载进度" />
      <Progress
        percent={75}
        aria-label="数据加载进度"
        aria-valuetext="已完成75%"
      />
      <Progress percent={30} aria-describedby="progress-description" />
      <span id="progress-description" style={{ display: 'none' }}>
        这是进度条的详细描述信息
      </span>
    </Stack>
  );
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

| 全局变量                     | 说明           | 默认值                     |
| ---------------------------- | -------------- | -------------------------- |
| --bui-progress-fill-color    | 进度条填充颜色 | `var(--bui-color-primary)` |
| --bui-progress-trail-color   | 进度条背景颜色 | `rgba(156, 156, 165, 0.2)` |
| --bui-progress-stroke-width  | 进度条高度     | `8px`                      |
| --bui-progress-width         | 进度条宽度     | `100%`                     |
| --bui-progress-border-radius | 进度条圆角     | `100px`                    |
