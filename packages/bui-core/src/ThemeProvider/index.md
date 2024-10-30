---
group: 主题
name: ThemeProvider 主题配置
---

# ThemeProvider

主题配置，可以用来指定组件颜色、尺寸、语言等。

## 代码演示

### 基础用法

```tsx
import { ThemeProvider, createTheme, Button } from '@bifrostui/react';
import React from 'react';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
    },
  },
});
export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>测试</Button>
    </ThemeProvider>
  );
};
```
