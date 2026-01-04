````markdown
---
group: Feedback
name: Toast Notification
---

# Toast Notification

Displays a black translucent notification in page scenarios such as operation result prompts, supporting `Toast`, `Toast.warning`, `Toast.loading`, `Toast.success`, `Toast.fail`. It is recommended to use the Hooks invocation method, as static methods cannot access context, and ThemeProvider data will not be effective. Therefore, it is recommended to use `Toast.useToast` to create a contextHolder that supports reading context, and replace `Toast` static methods with top-level registration.

**Note:** In mini-programs, Toast component nodes will by default be inserted at the same level as the page root node (i.e., sibling nodes of the page root node), and the node will be removed when Toast disappears. This may [trigger related issues with Taro deleting root nodes](https://docs.taro.zone/docs/optimized#1-%E5%88%A0%E9%99%A4%E6%A5%BC%E5%B1%82%E8%8A%82%E7%82%B9%E8%A6%81%E8%B0%A8%E6%85%8E%E5%A4%84%E7%90%86), which can be avoided by specifying `container`.

## Basic Notification

Demonstrate notification content.

#### Static Method (Not Recommended)

```tsx
import * as React from 'react';
import { Stack, Button, Toast } from '@bifrostui/react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast('Notification Content');
        }}
      >
        toast
      </Button>
    </Stack>
  );
};
```
````

#### Hooks Invocation (Recommended)

```tsx
import React, { createContext, useContext, useState } from 'react';
import { Stack, Button, Toast, ThemeProvider } from '@bifrostui/react';

const UserContext = createContext(null);

const ToastContent = () => {
  const user = useContext(UserContext);
  return <span>Hi, {user || 'Unknown User'}!</span>;
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

## Specify Render Container

You can specify the parent container to render by setting the `container`.

#### Static Method

```tsx
import * as React from 'react';
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
              message: 'Notification Content: static-container',
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

#### Hooks Invocation

```tsx
import * as React from 'react';
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
              message: 'Notification Content: hook-container',
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

## Frequently Used Modes

Toast provides four common modes: `warning`, `loading`, `success`, and `fail`.

```tsx
import * as React from 'react';
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
            toast.warning('Validation failed, please try again');
          }}
        >
          warning
        </Button>
        <Button
          onClick={() => {
            toast.loading('Loading');
          }}
        >
          loading
        </Button>
        <Button
          onClick={() => {
            toast.success('Operation succeeded');
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

## Line Break in Notification Text

Notification text supports `\n` for line breaks.

```tsx
import * as React from 'react';
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
            toast('Busy Waiter\nThe system is tired, please try again later~');
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Display Duration

Use `duration` to control the display duration of the notification, default is 2 seconds. When `duration` is 0, the Toast will not close automatically. You can receive the return value and use its `close` function to manually close the current Toast.

```tsx
import * as React from 'react';
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
      message: "I won't close automatically",
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
              message: 'I will display for 4 seconds',
              duration: 4000,
            });
          }}
        >
          Display for 4 seconds
        </Button>

        <Button onClick={showToastA}>
          Do not close automatically (ToastA)
        </Button>

        <Button onClick={closeToastA}>Manually close ToastA</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Display Positions

Toast provides three display positions: `top`, `center`, and `bottom`, with `center` as the default.

```tsx
import * as React from 'react';
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
              message: 'Displayed at the top',
              position: 'top',
            });
          }}
        >
          Display at Top
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Displayed at the center',
              position: 'center',
            });
          }}
        >
          Display at Center
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Displayed at the bottom',
              position: 'bottom',
            });
          }}
        >
          Display at Bottom
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Multiple Toasts Simultaneously

Use `multiple` to allow multiple Toast notifications to exist on a page at the same time. By default, only one Toast is displayed at a time.

```tsx
import * as React from 'react';
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
              message: 'Displayed at the top',
              position: 'top',
              multiple: true,
              duration: 5000,
            });
          }}
        >
          Allow Other Toasts
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Displayed at the center',
              position: 'center',
              multiple: true,
              duration: 5000,
            });
          }}
        >
          Allow Other Toasts
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Displayed at the bottom',
              position: 'bottom',
              multiple: false,
              duration: 5000,
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

## Custom Icons

Use `icon` to customize icons.

```tsx
import * as React from 'react';
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

## Disable Background Click

Use `disableClick` to control whether the rest of the page is clickable while the Toast notification is displayed. By default, it is clickable.

```tsx
import * as React from 'react';
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
              message: 'Notification Content',
              disableClick: true,
              duration: 3000,
            });
          }}
        >
          Display Toast without Page Content Click
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Close Callback

Listen for callbacks when the Toast is closed using `onClose`.

```tsx
import * as React from 'react';
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
              message: 'Notification Content',
              onClose: () => {
                toast('Closed');
              },
            });
          }}
        >
          Close Callback
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Close All Toasts

Toast provides a `clear` method to close all existing pop-ups on the page.

```tsx
import * as React from 'react';
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
              message: 'Notification Content 1',
              position: 'top',
              multiple: true,
              duration: 0,
            });
          }}
        >
          Don't Disappear 1
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Notification Content 2',
              position: 'center',
              multiple: true,
              duration: 0,
            });
          }}
        >
          Don't Disappear 2
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

## Customize Toast Style

You can customize the style of Toast using provided CSS variables and attributes like `className`.

#### Static Method

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
            message: 'Notification Content',
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

#### Hooks Invocation

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
              message: 'Notification Content',
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

- Major accessibility features include:
  - Automatically adding `role` attribute (e.g., `status` or `alert`) to the root node, which switches based on the notification type to ensure screen readers can provide timely reports.
  - Automatically adding `aria-live` and `aria-atomic="true"` to ensure content changes are correctly perceived by assistive technologies.
  - `aria-hidden="true"` is added to icon elements to avoid repeated announcements.
- When customizing `icon` or `message`, ensure content is concise and clear for easier understanding by assistive technologies.

## API

### ToastOptions

| Attribute    | Description                                                  | Type                                   | Default       |
| ------------ | ------------------------------------------------------------ | -------------------------------------- | ------------- |
| message      | Toast content, supports `\n` for line breaks                 | string                                 | -             |
| duration     | Display duration (ms), if set to 0, toast won't disappear    | number                                 | 2000          |
| position     | Display position                                             | `top` \| `center` \| `bottom`          | `center`      |
| multiple     | Allow multiple toasts simultaneously                         | boolean                                | false         |
| icon         | Custom icon                                                  | React.ReactNode                        | -             |
| disableClick | Whether the page content is clickable while displaying Toast | boolean                                | false         |
| container    | Render container                                             | `HTMLElement` \| `(() => HTMLElement)` | document.body |
| onClose      | Callback function when closed                                | () => void                             | -             |

### Methods

| Method Name   | Description             | Parameters             | Returns         |
| ------------- | ----------------------- | ---------------------- | --------------- |
| Toast         | Display notification    | ToastOptions \| string | ToastReturnType |
| Toast.warning | Warning notification    | ToastOptions \| string | ToastReturnType |
| Toast.loading | Loading notification    | ToastOptions \| string | ToastReturnType |
| Toast.success | Success notification    | ToastOptions \| string | ToastReturnType |
| Toast.fail    | Failure notification    | ToastOptions \| string | ToastReturnType |
| Toast.clear   | Clear all notifications | -                      | -               |

### ToastReturnType

| Attribute | Description                | Type       | Returns |
| --------- | -------------------------- | ---------- | ------- |
| close     | Close current notification | () => void | -       |

## Style Variables

| Global Variables            | Description      | Default Value                     |
| --------------------------- | ---------------- | --------------------------------- |
| --bui-toast-min-width       | Minimum Width    | `86px`                            |
| --bui-toast-max-width       | Maximum Width    | `80%`                             |
| --bui-toast-text-align      | Text Alignment   | `center`                          |
| --bui-toast-flex-direction  | Layer Direction  | `column`                          |
| --bui-toast-padding         | Padding          | `var(--bui-spacing-xl)`           |
| --bui-toast-position-top    | Top Position     | `15%`                             |
| --bui-toast-position-bottom | Bottom Position  | `85%`                             |
| --bui-toast-bg-color        | Background Color | `rgba(0, 0, 0, 0.8)`              |
| --bui-toast-border-radius   | Border Radius    | `var(--bui-shape-radius-default)` |
| --bui-toast-icon-margin     | Icon Margin      | `0 0 8px`                         |
| --bui-toast-icon-font-size  | Icon Font Size   | `30px`                            |

```

```
