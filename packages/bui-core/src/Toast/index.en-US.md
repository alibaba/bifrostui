---
group: Feedback
name: Toast Notification
---

# Toast Notification

Displays a black semi-transparent notification on the page for operation results and similar scenarios. Supports `Toast`, `Toast.warning`, `Toast.loading`, `Toast.success`, `Toast.fail`.
It is recommended to use Hooks for invocation, as static methods cannot access context and ThemeProvider data will not be effective. Therefore, it is recommended to use `Toast.useToast` to create a contextHolder that can read the context, replacing the `Toast` static methods with top-level registration.

## Basic Notification

Displays a notification message.

#### Static Methods (Not Recommended)

```tsx
import * as React from 'react';
import { Stack, Button, Toast } from '@bifrostui/react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast('Notification message');
        }}
      >
        toast
      </Button>
    </Stack>
  );
};
```

#### Hooks Invocation (Recommended)

```tsx
import React, { createContext, useContext, useState } from 'react';
import { Stack, Button, Toast, ThemeProvider } from '@bifrostui/react';

const UserContext = createContext(null);

const ToastContent = () => {
  const user = useContext(UserContext);
  return <span>Hello, {user || 'Unknown User'}!</span>;
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

## Specifying the Render Container

The `container` can be used to specify the parent container for rendering.

#### Static Methods

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
              message: 'Notification message: static-container',
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
              message: 'Notification message: hook-container',
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

## Common Modes

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

## Line Break in Notification Message

Notification message supports `\n` for line breaks.

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
            toast('I am busy\nThe system is tired, please try again later～');
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

Control the display duration using `duration`. The default display time is 2 seconds. When `duration` is set to 0, the Toast will not close automatically. You can receive the return value and manually close the current Toast using its `close` function.

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

## Display Position

Toast provides three display positions: `top`, `center`, and `bottom`, with the default being `center`.

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
              message: 'Display at top',
              position: 'top',
            });
          }}
        >
          Display at top
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Display at center',
              position: 'center',
            });
          }}
        >
          Display at center
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Display at bottom',
              position: 'bottom',
            });
          }}
        >
          Display at bottom
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Multiple Toasts

Use `multiple` to allow multiple Toast notifications on the page simultaneously. By default, only one Toast is displayed at a time.

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
              message: 'Display at top',
              position: 'top',
              multiple: true,
              duration: 5000,
            });
          }}
        >
          Allow multiple Toasts
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Display at center',
              position: 'center',
              multiple: true,
              duration: 5000,
            });
          }}
        >
          Allow multiple Toasts
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Display at bottom',
              position: 'bottom',
              multiple: false,
              duration: 5000,
            });
          }}
        >
          Will clear other Toasts
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Custom Icons

Customize icons using `icon`.

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
          Custom Icon
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Disable Background Click

Control whether the page content can be clicked when displaying the Toast notification using `disableClick`. Default is clickable.

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
              message: 'Notification message',
              disableClick: true,
              duration: 3000,
            });
          }}
        >
          Show Toast to disable page content clicks
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Close Callback

Listen for the Toast close callback using `onClose`.

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
              message: 'Notification message',
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

Toast provides the `clear` method to close all existing pop-ups on the page.

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
              message: 'Notification message 1',
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
              message: 'Notification message 2',
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

## Custom Notification Style

You can customize the Toast style using the provided CSS variables and properties such as `className`.

#### Static Methods

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
            message: 'Notification message',
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
              message: 'Notification message',
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

- Key accessibility features include:
  - The root node automatically adds the `role` attribute (such as `status` or `alert`), switching automatically depending on the notification type to ensure screen readers can promptly notify users.
  - Automatically adds `aria-live` and `aria-atomic="true"` to ensure content changes are correctly perceived by assistive technologies.
  - Icon elements come with `aria-hidden="true"` to avoid redundant reading.
- When customizing `icon` or `message`, it is recommended to ensure the content is concise and clear, making it easier for assistive technologies to understand.

## API

### ToastOptions

| Property     | Description                                                        | Type                                    | Default       |
| ------------ | ------------------------------------------------------------------ | --------------------------------------- | ------------- |
| message      | Content of the toast, supports `\n` line breaks                    | string                                  | -             |
| duration     | Display duration (ms), when set to 0, the toast will not disappear | number                                  | 2000          |
| position     | Display position                                                   | `top` \| `center` \| `bottom`           | `center`      |
| multiple     | Whether multiple Toasts can exist simultaneously                   | boolean                                 | false         |
| icon         | Custom icon                                                        | React.ReactNode                         | -             |
| disableClick | Whether content on the page can be clicked when Toast is displayed | boolean                                 | false         |
| container    | Render container                                                   | `HTMLElement` \| `(() => HTMLElement) ` | document.body |
| onClose      | Callback when closed                                               | () => void                              | -             |

### Methods

| Method Name   | Description          | Parameters             | Return Type     |
| ------------- | -------------------- | ---------------------- | --------------- |
| Toast         | Display notification | ToastOptions \| string | ToastReturnType |
| Toast.warning | Warning notification | ToastOptions \| string | ToastReturnType |
| Toast.loading | Loading notification | ToastOptions \| string | ToastReturnType |
| Toast.success | Success notification | ToastOptions \| string | ToastReturnType |
| Toast.fail    | Fail notification    | ToastOptions \| string | ToastReturnType |
| Toast.clear   | Clear notifications  | -                      | -               |

### ToastReturnType

| Property Name | Description                     | Type       | Return Value |
| ------------- | ------------------------------- | ---------- | ------------ |
| close         | Closes the current notification | () => void | -            |

## Style Variables

| Global Variable             | Description      | Default                           |
| --------------------------- | ---------------- | --------------------------------- |
| --bui-toast-min-width       | Minimum width    | `86px`                            |
| --bui-toast-max-width       | Maximum width    | `80%`                             |
| --bui-toast-text-align      | Text alignment   | `center`                          |
| --bui-toast-flex-direction  | Layer direction  | `column`                          |
| --bui-toast-padding         | Padding          | `var(--bui-spacing-xl)`           |
| --bui-toast-position-top    | Top position     | `15%`                             |
| --bui-toast-position-bottom | Bottom position  | `85%`                             |
| --bui-toast-bg-color        | Background color | `rgba(0, 0, 0, 0.8)`              |
| --bui-toast-border-radius   | Border radius    | `var(--bui-shape-radius-default)` |
| --bui-toast-icon-margin     | Icon margin      | `0 0 8px`                         |
| --bui-toast-icon-font-size  | Icon font size   | `30px`                            |

```

```
