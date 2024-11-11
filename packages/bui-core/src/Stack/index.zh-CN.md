---
group: 布局
name: Stack 布局组件
---

# Stack 布局组件

Stack 是用来控制垂直或者水平排列元素的容器组件。

## 代码演示

### 基础用法

您可以通过`direction`属性来控制子节点垂直/水平分布。
您还可以通过`alignItem`、`justifyContent`来控制子节点在主轴/交叉轴上的对齐方式。
除此之外，您还可以通过`spacing`控制子节点之间间距。
示例文档如下：

##### 交互式体验

<code src="./demo/StackDemo.tsx"> </code >

### 分割线

使用`divider`属性，您可以在每个子元素之间插入一个元素。

```tsx
import { Button, Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Stack
        divider={<Divider direction="horizontal" />}
        spacing="10px"
        style={{ width: '100px' }}
      >
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Stack>
    </Stack>
  );
};
```

### API

##### StackProps

| 属性           | 说明                                     | 类型                                                                                        | 默认值   |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------- | -------- |
| direction      | 设置子节点垂直/水平分布                  | `row` ｜ `row-reverse` ｜ `column` ｜ `column-reverse`                                      | `column` |
| alignItems     | 交叉轴轴上对齐方式                       | `flex-start` ｜ `center`｜ `flex-end`｜ `stretch` ｜`baseline`                              | `center` |
| justifyContent | 主轴上对齐方式                           | `flex-start` ｜ `center` ｜ `flex-end` ｜ `space-between` ｜`space-around` ｜`space-evenly` | `center` |
| flexWrap       | 超出换行                                 | `wrap` ｜ `nowrap`｜ `wrap-reverse`                                                         | `nowrap` |
| spacing        | 设置子节点之间间距                       | string                                                                                      | -        |
| divider        | 分割线，允许在每个子节点之间插入一个元素 | ReactNode ｜ boolean                                                                        | false    |
