````markdown
---
group: Feedback
name: Toast Notification
---

# Toast Notification

A black translucent message popup on the page, used for operation result indications and other scenarios. Supports `Toast`, `Toast.warning`, `Toast.loading`, `Toast.success`, `Toast.fail`. It is recommended to use the Hooks invocation method. Static methods cannot access the context, and ThemeProvider data will not be effective. Therefore, it is recommended to create a contextHolder that supports reading context with `Toast.useToast`, and utilize the top-level registration method instead of `Toast` static methods.

## Code Demos

### Basic Notification

Display notification content.

### Static Method (Not Recommended)

```tsx
import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast('Notification content');
        }}
      >
        toast
      </Button>
    </Stack>
  );
};
```
````

### Hooks Invocation (Recommended)

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
            toast('Notification content');
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Specify Render Container

You can specify the parent container for rendering by using `container`.

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
              message: 'Notification content',
              container: document.getElementById('container'),
            });
          }}
        >
          toast
        </Button>
      </Stack>
      <div id="container" />
    </ThemeProvider>
  );
};
```

### Common Modes

Toast provides four common modes: `warning`, `loading`, `success`, `fail`.

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

### Notification Text Line Break

The notification text supports line breaks using `\n`.

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
            toast('Busy staff\nSystem tired, please try again later～');
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

Use `duration` to control the display duration of the notification, default is 2 seconds. When `duration` is 0, the Toast will not close automatically. You can receive the return value and manually close the current Toast using its `close` function.

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

        <Button onClick={showToastA}>Not auto-closing (ToastA)</Button>

        <Button onClick={closeToastA}>Manually close ToastA</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Display Position

Toast provides three display positions: `top`, `center`, `bottom`, default is `center`.

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
              message: 'Displayed at the top',
              position: 'top',
            });
          }}
        >
          Display at top
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Displayed at center',
              position: 'center',
            });
          }}
        >
          Display at center
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Displayed at bottom',
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

### Multiple Toast Instances

Use `allowMultiple` to allow multiple Toast notifications to exist simultaneously on the page. By default, only one Toast is displayed at a time.

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
              message: 'Displayed at the top',
              position: 'top',
              allowMultiple: true,
            });
          }}
        >
          Allow other Toasts
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Displayed at center',
              position: 'center',
              allowMultiple: true,
            });
          }}
        >
          Allow other Toasts
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Displayed at bottom',
              position: 'bottom',
              allowMultiple: false,
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

### Custom Icon

Use `icon` to customize the icon.

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
          Custom Icon
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Disable Background Clicks

Use `disableClick` to control whether page content is clickable when the Toast notification is displayed. By default, clicking is allowed.

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
              message: 'Notification content',
              disableClick: true,
              duration: 3000,
            });
          }}
        >
          Display Toast and prohibit page content clicks
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Close Callback

Listen for the callback when Toast closes via `onClose`.

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
              message: 'Notification content',
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

### Close All Toasts

Toast provides a `clear` method to close all existing pop-ups on the page.

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
              message: 'Notification content 1',
              position: 'top',
              allowMultiple: true,
              duration: 0,
            });
          }}
        >
          Will not disappear 1
        </Button>
        <Button
          onClick={() => {
            toast({
              message: 'Notification content 2',
              position: 'center',
              allowMultiple: true,
              duration: 0,
            });
          }}
        >
          Will not disappear 2
        </Button>
        <Button
          onClick={() => {
            toast.clear();
          }}
        >
          Close all Toasts
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Customize Notification Style

Toast styles can be customized based on provided CSS variables and className properties.

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
              message: 'Notification content',
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

| Property      | Description                                                       | Type                                    | Default Value |
| ------------- | ----------------------------------------------------------------- | --------------------------------------- | ------------- |
| message       | Toast content, supports `\n` for line breaks                      | string                                  | -             |
| duration      | Display duration(ms). When set to 0, the toast will not disappear | number                                  | 2000          |
| position      | Display position                                                  | `top` \| `center` \| `bottom`           | `center`      |
| allowMultiple | Whether to allow multiple Toasts simultaneously                   | boolean                                 | false         |
| icon          | Custom icon                                                       | React.ReactNode                         | -             |
| disableClick  | Whether page content is clickable when Toast is displayed         | boolean                                 | false         |
| container     | Render container                                                  | `HTMLElement` \| `(() => HTMLElement) ` | document.body |
| onClose       | Callback function when closed                                     | () => void                              | -             |

##### Methods

| Method Name   | Description          | Parameters             | Return Value    |
| ------------- | -------------------- | ---------------------- | --------------- |
| Toast         | Display notification | ToastOptions \| string | ToastReturnType |
| Toast.warning | Warning notification | ToastOptions \| string | ToastReturnType |
| Toast.loading | Loading notification | ToastOptions \| string | ToastReturnType |
| Toast.success | Success notification | ToastOptions \| string | ToastReturnType |
| Toast.fail    | Failure notification | ToastOptions \| string | ToastReturnType |
| Toast.clear   | Clear notifications  | -                      | -               |

##### ToastReturnType

| Property Name | Description                    | Type       | Return Value |
| ------------- | ------------------------------ | ---------- | ------------ |
| close         | Close the current notification | () => void | -            |

### Style Variables

| Property           | Description                                 | Default Value              | Global Variable             |
| ------------------ | ------------------------------------------- | -------------------------- | --------------------------- |
| --min-width        | Minimum width                               | 86px                       | --bui-toast-min-width       |
| --max-width        | Maximum width                               | 80%                        | --bui-toast-max-width       |
| --text-align       | Text alignment                              | center                     | --bui-toast-text-align      |
| --flex-direction   | Alignment direction of icon and text        | column                     | --bui-toast-flex-direction  |
| --padding          | Padding                                     | --bui-spacing-xl           | --bui-toast-padding         |
| --position-top     | Distance from top when displaying at top    | 15%                        | --bui-toast-position-top    |
| --position-bottom  | Distance from top when displaying at bottom | 85%                        | --bui-toast-position-bottom |
| --background-color | Background color                            | rgba(0, 0, 0, 0.8)         | --bui-toast-bg-color        |
| --border-radius    | Border radius                               | --bui-shape-radius-default | --bui-toast-border-radius   |
| --icon-margin      | Icon margin                                 | 0 0 8px                    | --bui-toast-icon-margin     |
| --icon-font-size   | Icon font size                              | 30px                       | --bui-toast-icon-font-size  |

```

```
