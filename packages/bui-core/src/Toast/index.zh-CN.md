---
group: 反馈
name: Toast 轻提示
---

# Toast 轻提示

在页面中弹出黑色半透明提示，用于操作结果提示等场景，支持`Toast`, `Toast.warning`, `Toast.loading`, `Toast.success`, `Toast.fail`。
推荐使用 Hooks 调用方式，静态方法无法获取上下文，ThemeProvider 数据不会生效，因此推荐 `Toast.useToast` 创建支持读取 context 的 contextHolder, 通过顶层注册方式代替 `Toast` 静态方法。

## 基础提示

展示提示内容。

#### 静态方法（不推荐）

```tsx
import React from 'react';
import { Stack, Button, Toast } from '@bifrostui/react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast('提示内容');
        }}
      >
        toast
      </Button>
    </Stack>
  );
};
```

#### Hooks调用（推荐）

```tsx
import React, { createContext, useContext, useState } from 'react';
import { Stack, Button, Toast, ThemeProvider } from '@bifrostui/react';

const UserContext = createContext(null);

const ToastContent = () => {
  const user = useContext(UserContext);
  return <span>你好，{user || '未知用户'}！</span>;
};

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const [user, setUser] = useState('BUI');
  const showToastWithContext = () => {
    toast({
      message: <ToastContent />,
    });
  };

  return (
    <UserContext.Provider value={user}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={showToastWithContext}>toast</Button>
      </Stack>
    </UserContext.Provider>
  );
};
```

## 指定渲染容器

可以通过 `container` 指定渲染的父容器。

#### 静态方法

```tsx
import React from 'react';
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';

export default () => {
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            Toast({
              message: '提示内容: static-container',
              container: document.getElementById('static-container'),
            });
          }}
        >
          toast
        </Button>
      </Stack>
      <div id="static-container" />
    </ThemeProvider>
  );
};
```

#### Hooks调用

```tsx
import React from 'react';
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '提示内容: hook-container',
              container: document.getElementById('hook-container'),
            });
          }}
        >
          toast
        </Button>
      </Stack>
      <div id="hook-container" />
    </ThemeProvider>
  );
};
```

## 常用模式

Toast 提供了 `warning`、`loading`、`success`、`fail` 四种常用模式。

```tsx
import React from 'react';
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast.warning('校验不通过，请重试');
          }}
        >
          warning
        </Button>
        <Button
          onClick={() => {
            toast.loading('正在加载');
          }}
        >
          loading
        </Button>
        <Button
          onClick={() => {
            toast.success('操作成功');
          }}
        >
          success
        </Button>
        <Button
          onClick={() => {
            toast.fail('操作失败');
          }}
        >
          fail
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## 提示文案换行

提示文案支持使用 `\n` 换行。

```tsx
import React from 'react';
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();
  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast('小二很忙\n系统很累，请稍后再试～');
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## 展示时长

使用 `duration` 控制提示展示时长，默认展示 2 秒。当 `duration` 为 0 时，Toast 不会自动关闭，你可以接收返回值并使用其 `close` 函数，手动关闭当前 Toast。

```tsx
import React from 'react';
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';

let toastA;
export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();
  const showToastA = () => {
    toastA = toast({
      message: '我不会自动关闭',
      duration: 0,
    });
  };

  const closeToastA = () => {
    toastA?.close();
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '我会展示4秒',
              duration: 4000,
            });
          }}
        >
          展示4秒
        </Button>

        <Button onClick={showToastA}>不自动关闭(ToastA)</Button>

        <Button onClick={closeToastA}>手动关闭ToastA</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## 展示位置

Toast提供了 `top`、`center`、`bottom` 三种展示位置，默认为 `center`。

```tsx
import React from 'react';
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '顶部展示',
              position: 'top',
            });
          }}
        >
          顶部展示
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '居中展示',
              position: 'center',
            });
          }}
        >
          居中展示
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '底部展示',
              position: 'bottom',
            });
          }}
        >
          底部展示
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## 同时存在多个Toast

使用 `multiple` 可允许页面中同时存在多个 Toast 提示，默认每次只展示一个 Toast。

```tsx
import React from 'react';
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '顶部展示',
              position: 'top',
              multiple: true,
              duration: 5000,
            });
          }}
        >
          允许存在其他Toast
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '居中展示',
              position: 'center',
              multiple: true,
              duration: 5000,
            });
          }}
        >
          允许存在其他Toast
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '底部展示',
              position: 'bottom',
              multiple: false,
              duration: 5000,
            });
          }}
        >
          会清除其他Toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## 自定义图标

使用 `icon` 可定制图标。

```tsx
import React from 'react';
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import { LocationFilledIcon } from '@bifrostui/icons';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '我在上海',
              icon: <LocationFilledIcon size="large" htmlColor="#fee01e" />,
            });
          }}
        >
          定制图标
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## 禁止背景点击

使用 `disableClick` 可控制展示 Toast 提示时，页面其他内容是否可点击，默认可点击。

```tsx
import React from 'react';
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '提示内容',
              disableClick: true,
              duration: 3000,
            });
          }}
        >
          展示Toast禁止页面内容点击
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## 关闭回调

可通过 `onClose` 监听 Toast 关闭时的回调。

```tsx
import React from 'react';
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '提示内容',
              onClose: () => {
                toast('已关闭');
              },
            });
          }}
        >
          关闭回调
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## 关闭所有Toast

Toast 提供了 `clear` 方法，用于关闭页面中所有存在的弹窗。

```tsx
import React from 'react';
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '提示内容1',
              position: 'top',
              multiple: true,
              duration: 0,
            });
          }}
        >
          不消失1
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '提示内容2',
              position: 'center',
              multiple: true,
              duration: 0,
            });
          }}
        >
          不消失2
        </Button>
        <Button
          onClick={() => {
            toast.clear();
          }}
        >
          关闭所有Toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## 自定义提示样式

可以根据提供的 CSS 变量，以及 `className` 等属性自定义 Toast 样式。

#### 静态方法

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React, { useRef } from 'react';

export default () => {
  const ref = useRef();

  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast({
            ref,
            message: '提示内容',
            className: 'my-toast-static',
            style: {
              '--bui-toast-border-radius': '30px',
            },
            appear: true,
            onEntered: () => {
              console.log('ref', ref);
            },
          });
        }}
      >
        toast
      </Button>
    </Stack>
  );
};
```

#### Hooks调用

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React, { useRef } from 'react';

export default () => {
  const ref = useRef();
  const [toast, contextHolder] = Toast.useToast();

  return (
    <>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              ref,
              message: '提示内容',
              className: 'my-toast-hook',
              style: {
                '--bui-toast-border-radius': '30px',
              },
              appear: true,
              onEntered: () => {
                console.log('ref', ref);
              },
            });
          }}
        >
          toast
        </Button>
      </Stack>
    </>
  );
};
```

## Accessibility

- 主要无障碍特性包括：
  - 根节点自动添加 `role` 属性（如 `status` 或 `alert`），根据提示类型自动切换，确保读屏器能及时播报。
  - 自动添加 `aria-live` 和 `aria-atomic="true"`，保证内容变更时被辅助技术正确感知。
  - 图标元素带有 `aria-hidden="true"`，避免重复朗读。
- 建议自定义 `icon` 或 `message` 时，确保内容简洁明了，便于辅助技术理解。

## API

### ToastOptions

| 属性         | 说明                                    | 类型                                    | 默认值        |
| ------------ | --------------------------------------- | --------------------------------------- | ------------- |
| message      | toast内容，支持使用`\n`换行             | string                                  | -             |
| duration     | 展示时长(ms)，值为 0 时，toast 不会消失 | number                                  | 2000          |
| position     | 展示位置                                | `top` \| `center` \| `bottom`           | `center`      |
| multiple     | 是否允许同时存在多个Toast               | boolean                                 | false         |
| icon         | 自定义图标                              | React.ReactNode                         | -             |
| disableClick | 展示Toast时，页面内容是否可以点击       | boolean                                 | false         |
| container    | 渲染容器                                | `HTMLElement` \| `(() => HTMLElement) ` | document.body |
| onClose      | 关闭时的回调函数                        | () => void                              | -             |

### 方法

| 方法名        | 说明     | 参数                   | 返回值          |
| ------------- | -------- | ---------------------- | --------------- |
| Toast         | 展示提示 | ToastOptions \| string | ToastReturnType |
| Toast.warning | 警告提示 | ToastOptions \| string | ToastReturnType |
| Toast.loading | 加载提示 | ToastOptions \| string | ToastReturnType |
| Toast.success | 成功提示 | ToastOptions \| string | ToastReturnType |
| Toast.fail    | 失败提示 | ToastOptions \| string | ToastReturnType |
| Toast.clear   | 清空提示 | -                      | -               |

### ToastReturnType

| 属性名 | 说明         | 类型       | 返回值 |
| ------ | ------------ | ---------- | ------ |
| close  | 关闭当前提示 | () => void | -      |

## 样式变量

| 全局变量                    | 说明         | 默认值                            |
| --------------------------- | ------------ | --------------------------------- |
| --bui-toast-min-width       | 最小宽度     | `86px`                            |
| --bui-toast-max-width       | 最大宽度     | `80%`                             |
| --bui-toast-text-align      | 文字对齐方式 | `center`                          |
| --bui-toast-flex-direction  | 弹层方向     | `column`                          |
| --bui-toast-padding         | 内边距       | `var(--bui-spacing-xl)`           |
| --bui-toast-position-top    | 顶部位置     | `15%`                             |
| --bui-toast-position-bottom | 底部位置     | `85%`                             |
| --bui-toast-bg-color        | 背景颜色     | `rgba(0, 0, 0, 0.8)`              |
| --bui-toast-border-radius   | 圆角         | `var(--bui-shape-radius-default)` |
| --bui-toast-icon-margin     | 图标外边距   | `0 0 8px`                         |
| --bui-toast-icon-font-size  | 图标字体大小 | `30px`                            |
