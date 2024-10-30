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

### 自定义Tokens

```tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

// 响应式相关Tokens
const responsive = {
  xs: {
    '--bui-button-border-radius': '6px',
    '--bui-button-height': '30px',
    '--bui-button-text-color': 'green',
    '--bui-button-border-color': 'purple',
  },
  sm: {
    '--bui-button-border-radius': '16px',
    '--bui-button-height': '40px',
    '--bui-button-text-color': 'red',
    '--bui-button-border-color': '#0499ff',
  },
  md: {
    '--bui-button-border-radius': '26px',
    '--bui-button-height': '50px',
    '--bui-button-text-color': 'blue',
    '--bui-button-border-color': '#f99999',
  },
  lg: {
    '--bui-button-border-radius': '36px',
    '--bui-button-height': '60px',
    '--bui-button-text-color': 'black',
    '--bui-button-border-color': '#000feb',
  },
  xl: {
    '--bui-button-border-radius': '46px',
    '--bui-button-height': '100px',
    '--bui-color-primary': 'green',
    '--bui-button-border-color': '#ef871f',
  },
};
export default () => {
  return (
    <ThemeProvider responsive={responsive}>
      <Button>自定义Tokens</Button>
    </ThemeProvider>
  );
};
```

```tsx
import { ThemeProvider, createTheme, Button } from '@bifrostui/react';
import React from 'react';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 60,
    },
  },
  background: 'red',
});

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider
        theme={(outerTheme) => {
          return {
            ...outerTheme,
            background: 'yellow',
          };
        }}
      >
        <Button>测试</Button>
      </ThemeProvider>
    </ThemeProvider>
  );
};
```
