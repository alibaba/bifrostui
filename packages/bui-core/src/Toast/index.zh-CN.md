---
group: 反馈
name: Toast 轻提示
---

# Toast 轻提示

在页面中弹出黑色半透明提示，用于操作结果提示等场景，支持`Toast`,`Toast.warning`,`Toast.loading`,`Toast.success`,`Toast.fail`。
推荐使用Hooks调用方式，静态方法无法获取上下文，ThemeProvider数据不会生效，因此推荐`Toast.useToast`创建支持读取context的contextHolder, 通过顶层注册方式代替`Toast`静态方法。

## 代码演示

### 基础提示

展示提示内容。

#### 静态方法（不推荐）

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

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
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast('提示内容');
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### 常用模式

Toast提供了 `warning`、`loading`、`success`、`fail`四种常用模式。

```tsx
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme}>
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

### 提示文案换行

提示文案支持使用`\n`换行。

```tsx
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

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

### 展示时长

使用`duration`控制提示展示时长，默认展示2秒，当`duration`为0时，Toast不会自动关闭，当然你可以接收返回值，并使用其`close`函数，手动关闭当前Toast。

```tsx
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  let toastA;
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

### 展示位置

Toast提供了`top`、`center`、`bottom`三种展示位置，默认为`center`。

```tsx
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

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

### 同时存在多个Toast

使用`allowMultiple`可允许页面中同时存在多个Taost提示，默认每次只展示一个Toast。

```tsx
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

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
              allowMultiple: true,
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
              allowMultiple: true,
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
              allowMultiple: false,
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

### 自定义图标

使用`icon`可定制图标。

```tsx
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import { LocationFilledIcon } from '@bifrostui/icons';
import React from 'react';

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

### 禁止背景点击

使用`disableClick`可控制展示Toast提示时，页面其他内容是否可点击，默认可点击。

```tsx
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

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

### 关闭回调

可通过`onClose`监听Toast关闭时的回调。

```tsx
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

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

### 关闭所有Toast

Toast提供了`clear`方法，用于关闭页面中所有存在的弹窗。

```tsx
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '提示内容1',
              position: 'top',
              allowMultiple: true,
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
              allowMultiple: true,
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

### 自定义提示样式

可以根据提供的css变量，以及className等属性自定义Toast样式。

```tsx
import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React, { useRef } from 'react';

export default () => {
  const ref = useRef();
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              ref,
              message: '提示内容',
              className: 'my-toast',
              style: {
                '--color': 'red',
                '--border-radius': '30px',
                '--font-size': '16px',
              },
              onEntered: () => {
                console.log('ref', ref);
              },
            });
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### API

##### ToastOptions

| 属性          | 说明                                    | 类型                          | 默认值   |
| ------------- | --------------------------------------- | ----------------------------- | -------- |
| message       | toast内容，支持使用`\n`换行             | string                        | -        |
| duration      | 展示时长(ms)，值为 0 时，toast 不会消失 | number                        | 2000     |
| position      | 展示位置                                | `top` \| `center` \| `bottom` | `center` |
| allowMultiple | 是否允许同时存在多个Toast               | boolean                       | false    |
| icon          | 自定义图标                              | React.ReactNode               | -        |
| disableClick  | 展示Toast时，页面内容是否可以点击       | boolean                       | false    |
| onClose       | 关闭时的回调函数                        | () => void                    | -        |

##### 方法

| 方法名        | 说明     | 参数                   | 返回值          |
| ------------- | -------- | ---------------------- | --------------- |
| Taost         | 展示提示 | ToastOptions \| string | ToastReturnType |
| Taost.warning | 警告提示 | ToastOptions \| string | ToastReturnType |
| Taost.loading | 加载提示 | ToastOptions \| string | ToastReturnType |
| Taost.success | 成功提示 | ToastOptions \| string | ToastReturnType |
| Taost.fail    | 失败提示 | ToastOptions \| string | ToastReturnType |
| Taost.clear   | 清空提示 | -                      | -               |

##### ToastReturnType

| 属性名 | 说明         | 类型       | 返回值 |
| ------ | ------------ | ---------- | ------ |
| close  | 关闭当前提示 | () => void | -      |

### 样式变量

| 属性               | 说明                     | 默认值                     | 全局变量                       |
| ------------------ | ------------------------ | -------------------------- | ------------------------------ |
| --min-width        | 最小宽度                 | 86px                       | --bui-toast-min-width          |
| --max-width        | 最大宽度                 | 80%                        | --bui-toast-max-width          |
| --font-size        | 字体大小                 | --bui-text-size-1          | -                              |
| --color            | 字体颜色                 | --bui-color-white          | -                              |
| --flex-direction   | icon跟文案排列方向       | column                     | --bui-toast-flex-direction     |
| --padding          | 内边距                   | --bui-spacing-xl           | --bui-toast-padding            |
| --word-break       | 换行规则                 | break-all                  | -                              |
| --z-index          | 层级                     | --bui-z-index-toast        | -                              |
| --position-top     | 顶部展示时，距离顶部距离 | 15%                        | --bui-toast-position-top       |
| --position-bottom  | 底部展示时，距离顶部距离 | 85%                        | --bui-toast-position-bottom    |
| --background-color | 背景颜色                 | rgba(0, 0, 0, 0.8)         | -                              |
| --border-radius    | 圆角                     | --bui-shape-radius-default | --bui-toast-bg-color           |
| --icon-margin      | 图标边距                 | 8px                        | --bui-toast-icon-margin-bottom |
| --icon-font-size   | 图标字体大小             | 30px                       | --bui-toast-icon-font-size     |
| --text-align       | 文字位置                 | center                     | -                              |
