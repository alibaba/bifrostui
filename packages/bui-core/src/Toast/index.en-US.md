---
group: feedback
name: Toast Light Tips
---

# Toast Light Tips

Pop up a black semi transparent prompt on the page, used for operation result prompts and other scenarios, supports`Toast`,`Toast.warning`,`Toast.loading`,`Toast.success`,`Toast.fail`。
It is recommended to use Hooks calling method. Static methods cannot obtain context, and ThemeProvider data will not take effect. Therefore, it is recommended to use Hooks calling method`Toast.useToast`创build contextholder that supports reading context and replaces it with top-level registration`Toast`静state method.

## Code demonstration

### Basic Tips

Display prompt content.

#### Static method (not recommended)

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

#### Hooks call (recommended)

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

### Common modes

Toast provides four common modes: warning, loading, success, and fail.

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

### Prompt for text wrapping

The prompt text supports the use of '\ n' line breaks.

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

### Display duration

Use 'duration' to control the duration of the prompt display, with a default display of 2 seconds. When 'duration' is 0, Toast will not automatically close. Of course, you can receive the return value and use its' close 'function to manually close the current Toast.

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

### Display location

Toast provides three display positions: top, center, and bottom, with the default being center.

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

### There are multiple Toasts simultaneously present

Using 'allowMultiple' allows for multiple Toast prompts to exist simultaneously on the page, with only one Toast displayed by default at a time.

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

### Customize icons

Use 'icon' to customize icons.

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

### Prohibit background clicking

Use 'disableClick' to control whether other content on the page can be clicked when displaying Toast prompts. It defaults to clickable.

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

### Close callback

You can listen for callbacks when Toast is closed through 'onClose'.

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

### Close all Toasts

Toast provides a 'clear' method to close all existing pop ups on the page.

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

### Customize prompt style

You can customize the Toast style based on the provided CSS variables and properties such as className.

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

##### Toastoptions

| attribute     | explain                                                              | type                        | Default value |
| ------------- | -------------------------------------------------------------------- | --------------------------- | ------------- |
| message       | Toast content, supports the use of `\n` Line break                   | string                      | -             |
| duration      | Display duration (ms), when the value is 0, toast will not disappear | number                      | 2000          |
| position      | Display location                                                     | `top` \|`center` \|`bottom` | `center`      |
| allowMultiple | Is it allowed to have multiple Toasts at the same time               | boolean                     | false         |
| icon          | Customize icons                                                      | React.ReactNode             | -             |
| disableClick  | Can the page content be clicked when displaying Toast                | boolean                     | false         |
| onClose       | The callback function when closing                                   | () => void                  | -             |

##### method

| Method Name   | explain           | parameter             | Return value    |
| ------------- | ----------------- | --------------------- | --------------- |
| Taost         | Display Tips      | ToastOptions \|string | ToastReturnType |
| Taost.warning | Warning prompt    | ToastOptions \|string | ToastReturnType |
| Taost.loading | Loading prompt    | ToastOptions \|string | ToastReturnType |
| Taost.success | Successful prompt | ToastOptions \|string | ToastReturnType |
| Taost.fail    | Failure prompt    | ToastOptions \|string | ToastReturnType |
| Taost.clear   | Clear prompt      | -                     | -               |

##### ToastReturnType

| Attribute Name | Description              | Type     | Return Value |
| -------------- | ------------------------ | -------- | ------------ |
| Close          | Close the current prompt | ()=>void | -            |

### Style variables

| attribute          | explain                                                  | Default value              | global variable                |
| ------------------ | -------------------------------------------------------- | -------------------------- | ------------------------------ |
| --min-width        | Minimum width                                            | 86px                       | --bui-toast-min-width          |
| --max-width        | Maximum width                                            | 80%                        | --bui-toast-max-width          |
| --flex-direction   | Icon and copywriting arrangement direction               | column                     | --bui-toast-flex-direction     |
| --padding          | padding                                                  | --bui-spacing-xl           | --bui-toast-padding            |
| --word-break       | Line break rule                                          | break-all                  | -                              |
| --z-index          | Hierarchical structure                                   | --bui-z-index-toast        | -                              |
| --position-top     | When displaying at the top, the distance from the top    | 15%                        | --bui-toast-position-top       |
| --position-bottom  | When displaying at the bottom, the distance from the top | 85%                        | --bui-toast-position-bottom    |
| --background-color | background color                                         | rgba(0, 0, 0, 0.8)         | --bui-toast-bg-color           |
| --border-radius    | fillet                                                   | --bui-shape-radius-default | --bui-toast-border-radius      |
| --icon-margin      | Icon margin                                              | 8px                        | --bui-toast-icon-margin-bottom |
| --icon-font-size   | Icon font size                                           | 30px                       | --bui-toast-icon-font-size     |
| --text-align       | Text position                                            | center                     | -                              |
