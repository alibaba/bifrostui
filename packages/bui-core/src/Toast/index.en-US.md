---
group: feedback
name: Toast
---

# Toast

Pop up a black semi transparent prompt on the page for scenarios such as operation result prompts.

## Code demonstration

### Basic Tips

Display prompt content.

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

### Common modes

Toast provides`warning`、`loading`、`success`、`fail` commonly used modes.

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast.warning('校验不通过，请重试');
        }}
      >
        warning
      </Button>
      <Button
        onClick={() => {
          Toast.loading('正在加载');
        }}
      >
        loading
      </Button>
      <Button
        onClick={() => {
          Toast.success('操作成功');
        }}
      >
        success
      </Button>
      <Button
        onClick={() => {
          Toast.fail('操作失败');
        }}
      >
        fail
      </Button>
    </Stack>
  );
};
```

### Prompt for text wrapping

The prompt text supports the use of`\n` that 's ok.

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast('小二很忙\n系统很累，请稍后再试～');
        }}
      >
        toast
      </Button>
    </Stack>
  );
};
```

### Display duration

Use`duration` the prompt display duration is set to 2 seconds by default`duration` at 0 o'clock, toast will not automatically shut down, but you can receive the return value and use it`close` number, manually turn off the current toast.

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  let toast;
  const showToastA = () => {
    toast = Toast({
      message: '我不会自动关闭',
      duration: 0,
    });
  };

  const closeToastA = () => {
    toast?.close();
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast({
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
  );
};
```

### Display location

Toast provides`top`、`center`、`bottom` display location, default is`center`。

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast({
            message: '顶部展示',
            position: 'top',
          });
        }}
      >
        顶部展示
      </Button>
      <Button
        onClick={() => {
          Toast({
            message: '居中展示',
            position: 'center',
          });
        }}
      >
        居中展示
      </Button>
      <Button
        onClick={() => {
          Toast({
            message: '底部展示',
            position: 'bottom',
          });
        }}
      >
        底部展示
      </Button>
    </Stack>
  );
};
```

### There are multiple Toasts simultaneously present

Use`allowMultiple` allow multiple toast prompts to exist simultaneously on the page, with only one toast displayed by default at a time.

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast({
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
          Toast({
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
          Toast({
            message: '底部展示',
            position: 'bottom',
            allowMultiple: false,
          });
        }}
      >
        会清除其他Toast
      </Button>
    </Stack>
  );
};
```

### Customize icons

Use`icon` customize icons.

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import { LocationFilledIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast({
            message: '我在上海',
            icon: <LocationFilledIcon size="large" htmlColor="#fee01e" />,
          });
        }}
      >
        定制图标
      </Button>
    </Stack>
  );
};
```

### Prohibit background clicking

Use`disableClick`可control whether other content on the page can be clicked when displaying toast prompts, default is clickable.

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast({
            message: '提示内容',
            disableClick: true,
            duration: 3000,
          });
        }}
      >
        展示Toast禁止页面内容点击
      </Button>
    </Stack>
  );
};
```

### Close callback

Can be done through`onClose` listen to the callback when toast is closed.

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast({
            message: '提示内容',
            onClose: () => {
              Toast('已关闭');
            },
          });
        }}
      >
        关闭回调
      </Button>
    </Stack>
  );
};
```

### Close all Toasts

Toast provides`clear` law, used to close all existing pop ups on the page.

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast({
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
          Toast({
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
          Toast.clear();
        }}
      >
        关闭所有Toast
      </Button>
    </Stack>
  );
};
```

### Customize prompt style

You can customize the Toast style based on the provided CSS variables and properties such as className.

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
  );
};
```

### API

##### ToastOptions

| attribute     | explain                                                              | type                          | Default value |
| ------------- | -------------------------------------------------------------------- | ----------------------------- | ------------- |
| message       | Toast content, supports using '\ n' line breaks                      | string                        | -             |
| duration      | Display duration (ms), when the value is 0, toast will not disappear | number                        | 2000          |
| position      | Display location                                                     | `top` \| `center` \| `bottom` | `center`      |
| allowMultiple | Is it allowed to have multiple Toasts at the same time               | boolean                       | false         |
| icon          | Customize icons                                                      | React.ReactNode               | -             |
| disableClick  | Can the page content be clicked when displaying Toast                | boolean                       | false         |
| onClose       | The callback function when closing                                   | () => void                    | -             |

##### method

| Method Name   | explain           | parameter              | Return value    |
| ------------- | ----------------- | ---------------------- | --------------- |
| Taost         | Display Tips      | ToastOptions \| string | ToastReturnType |
| Taost.warning | Warning prompt    | ToastOptions \| string | ToastReturnType |
| Taost.loading | Loading prompt    | ToastOptions \| string | ToastReturnType |
| Taost.success | Successful prompt | ToastOptions \| string | ToastReturnType |
| Taost.fail    | Failure prompt    | ToastOptions \| string | ToastReturnType |
| Taost.clear   | Clear prompt      | -                      | -               |

##### ToastReturnType

| Attribute Name | explain                  | type       | Return value |
| -------------- | ------------------------ | ---------- | ------------ |
| close          | Close the current prompt | () => void | -            |

### Style variables

| attribute          | explain                                                  | Default value              | global variable |
| ------------------ | -------------------------------------------------------- | -------------------------- | --------------- |
| --min-width        | Minimum width                                            | 86px                       | -               |
| --max-width        | Maximum width                                            | 80%                        | -               |
| --font-size        | font size                                                | --bui-text-size-1          | -               |
| --color            | Font color                                               | --bui-color-white          | -               |
| --padding          | padding                                                  | --bui-spacing-xl           | -               |
| --word-break       | Line break rule                                          | break-all                  | -               |
| --z-index          | Hierarchical structure                                   | --bui-z-index-toast        | -               |
| --position-top     | When displaying at the top, the distance from the top    | 15%                        | -               |
| --position-bottom  | When displaying at the bottom, the distance from the top | 85%                        | -               |
| --background-color | background color                                         | rgba(0, 0, 0, 0.8)         | -               |
| --border-radius    | fillet                                                   | --bui-shape-radius-default | -               |
| --text-align       | Text position                                            | center                     | -               |
