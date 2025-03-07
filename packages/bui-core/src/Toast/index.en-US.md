---
group: Feedback
name: Toast Light提示
---

# Toast Light提示

A black semi-transparent prompt pops up on the page, used for operation result prompts and other scenarios. It supports `Toast`, `Toast.warning`, `Toast.loading`, `Toast.success`, and `Toast.fail`.
We recommend using Hooks for invocation as static methods cannot obtain context and ThemeProvider data will not take effect. Therefore, we recommend creating a contextHolder that can read context via `Toast.useToast` and register it at the top level to replace the static method of `Toast`.

## Code Demonstration

### Basic Prompt

Display prompt content.

#### Static Method (Not Recommended)

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast('Prompt content');
        }}
      >
        toast
      </Button>
    </Stack>
  );
};
```

#### Hooks Call (Recommended)

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
            toast('Prompt content');
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Common Modes

Toast provides four common modes: `warning`, `loading`, `success`, and `fail`.

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
            toast.warning('Validation failed, please retry');
          }}
        >
          warning
        </Button>
        <Button
          onClick={() => {
            toast.loading('Loading...');
          }}
        >
          loading
        </Button>
        <Button
          onClick={() => {
            toast.success('Operation successful');
          }}
        >
          success
        </Button>
        <Button
          onClick={() => {
            toast.fail('Operation failed');
          }}
        >
          fail
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Multi-line Prompt Text

The prompt text supports line breaks using `\n`.

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
            toast(
              'Little helper is busy\nSystem is tired, please try again later～',
            );
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Display Duration

Use `duration` to control the display duration of the prompt. By default, it displays for 2 seconds. When `duration` is 0, the Toast will not close automatically. You can also receive the returned value and use its `close` function to manually close the current Toast.

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
      message: 'I will not close automatically',
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
              message: 'I will be displayed for 4 seconds',
              duration: 4000,
            });
          }}
        >
          Display for 4 seconds
        </Button>

        <Button onClick={showToastA}>
          Do Not Close Automatically (ToastA)
        </Button>

        <Button onClick={closeToastA}>Manually Close ToastA</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Display Position

Toast offers three display positions: `top`, `center`, and `bottom`. The default is `center`.

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
              message: 'Top display',
              position: 'top',
            });
          }}
        >
          Top display
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Center display',
              position: 'center',
            });
          }}
        >
          Center display
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Bottom display',
              position: 'bottom',
            });
          }}
        >
          Bottom display
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Multiple Toasts Simultaneously

Using `allowMultiple` allows multiple Toast notifications to exist simultaneously on the page. By default, only one Toast is shown each time.

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
              message: 'Top display',
              position: 'top',
              allowMultiple: true,
            });
          }}
        >
          Allow Other Toasts
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Center display',
              position: 'center',
              allowMultiple: true,
            });
          }}
        >
          Allow Other Toasts
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Bottom display',
              position: 'bottom',
              allowMultiple: false,
            });
          }}
        >
          Clear Other Toasts
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Custom Icons

Customize icons using `icon`.

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
              message: 'I am in Shanghai',
              icon: <LocationFilledIcon size="large" htmlColor="#fee01e" />,
            });
          }}
        >
          Customize Icon
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Disable Background Click

Use `disableClick` to control whether other content on the page can be clicked when displaying a Toast notification. By default, it is clickable.

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
              message: 'Prompt content',
              disableClick: true,
              duration: 3000,
            });
          }}
        >
          Show Toast and Disable Page Content Clicking
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Closure Callback

Listen to the closure callback of Toast using `onClose`.

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
              message: 'Prompt content',
              onClose: () => {
                toast('Closed');
              },
            });
          }}
        >
          Closure Callback
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Close All Toasts

Toast provides a `clear` method to close all existing popups on the page.

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
              message: 'Prompt content 1',
              position: 'top',
              allowMultiple: true,
              duration: 0,
            });
          }}
        >
          Do Not Disappear 1
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Prompt content 2',
              position: 'center',
              allowMultiple: true,
              duration: 0,
            });
          }}
        >
          Do Not Disappear 2
        </Button>
        <Button
          onClick={() => {
            toast.clear();
          }}
        >
          Close All Toasts
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Customize Toast Style

Customize Toast styles using provided CSS variables and className properties.

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
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              ref,
              message: 'Prompt content',
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

| Property      | Description                                              | Type                          | Default Value |
| ------------- | -------------------------------------------------------- | ----------------------------- | ------------- |
| message       | Toast content, supports `\n` for line breaks             | string                        | -             |
| duration      | Display duration (ms), set to 0 for no auto-close        | number                        | 2000          |
| position      | Display position                                         | `top` \| `center` \| `bottom` | `center`      |
| allowMultiple | Whether to allow multiple Toasts simultaneously          | boolean                       | false         |
| icon          | Custom icon                                              | React.ReactNode               | -             |
| disableClick  | Whether page content can be clicked while Toast is shown | boolean                       | false         |
| onClose       | Callback function when closing                           | () => void                    | -             |

##### Methods

| Method Name   | Description       | Parameters             | Return Value    |
| ------------- | ----------------- | ---------------------- | --------------- |
| Toast         | Show prompt       | ToastOptions \| string | ToastReturnType |
| Toast.warning | Warning prompt    | ToastOptions \| string | ToastReturnType |
| Toast.loading | Loading prompt    | ToastOptions \| string | ToastReturnType |
| Toast.success | Success prompt    | ToastOptions \| string | ToastReturnType |
| Toast.fail    | Failure prompt    | ToastOptions \| string | ToastReturnType |
| Toast.clear   | Clear all prompts | -                      | -               |

##### ToastReturnType

| Property | Description          | Type       | Return Value |
| -------- | -------------------- | ---------- | ------------ |
| close    | Close current prompt | () => void | -            |

### Style Variables

| Property           | Description                                   | Default Value              | Global Variable             |
| ------------------ | --------------------------------------------- | -------------------------- | --------------------------- |
| --min-width        | Minimum width                                 | 86px                       | --bui-toast-min-width       |
| --max-width        | Maximum width                                 | 80%                        | --bui-toast-max-width       |
| --text-align       | Text alignment                                | center                     | --bui-toast-text-align      |
| --flex-direction   | Icon and text arrangement direction           | column                     | --bui-toast-flex-direction  |
| --padding          | Padding                                       | --bui-spacing-xl           | --bui-toast-padding         |
| --position-top     | Distance from top when displayed at top       | 15%                        | --bui-toast-position-top    |
| --position-bottom  | Distance from bottom when displayed at bottom | 85%                        | --bui-toast-position-bottom |
| --background-color | Background color                              | rgba(0, 0, 0, 0.8)         | --bui-toast-bg-color        |
| --border-radius    | Border radius                                 | --bui-shape-radius-default | --bui-toast-border-radius   |
| --icon-margin      | Icon margin                                   | 0 0 8px                    | --bui-toast-icon-margin     |
| --icon-font-size   | Icon font size                                | 30px                       | --bui-toast-icon-font-size  |
