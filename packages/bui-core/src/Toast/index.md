---
group: 反馈
name: Toast 轻提示
---

# Toast 轻提示

在页面中弹出黑色半透明提示，用于操作结果提示等场景。

## 代码演示

### 基础标签

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const toastCenter = () => {
    Toast.success({
      message: '提示内容',
      position: 'center',
    });
  };
  const toastTop = () => {
    Toast.success({
      message: '提示内容',
      position: 'bottom',
    });
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={toastCenter}>toastCenter</Button>
      <Button onClick={toastTop}>toastTop</Button>
    </Stack>
  );
};
```

### API

##### ToastProps

| 属性  | 说明       | 类型 | 默认值 |
| ----- | ---------- | ---- | ------ |
| color | 标签主题色 | -    | -      |

### 样式变量

| 属性       | 说明 | 默认值          | 全局变量           |
| ---------- | ---- | --------------- | ------------------ |
| --bg-color | -    | --bui-color-gay | --bui-tag-bg-color |
