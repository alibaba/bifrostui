---
group: Feedback
name: Dialog
---

# Dialog

Used for communicating important information or feedback related to operations, the Dialog component supports `Dialog`, `Dialog.confirm`, and `Dialog.prompt`. It is recommended to use Hooks for invocation since static methods cannot access context, and the ThemeProvider data will not be applied. Therefore, it's suggested to use `Dialog.useDialog` to create a contextHolder that supports context reading, using top-level registration methods instead of static methods provided by `Dialog`.

## Code Demonstration

### Confirmation Box

### Static Method (Not Recommended)

Use `Dialog` (default type is confirm) or `Dialog.confirm` to display a confirmation dialog. `Dialog.confirm` returns a `Promise` that lets you determine if the user clicked confirm or cancel.

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickConfirm = async () => {
    const res = await Dialog({
      title: 'Title',
      content: 'This is a description',
    });
    if (res) {
      Toast({ message: 'Clicked confirm', position: 'bottom' });
    } else {
      Toast({ message: 'Clicked cancel', position: 'bottom' });
    }
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={() => Dialog('Submit the application?')}>
        Default is confirm
      </Button>
      <Button
        onClick={() =>
          Dialog.confirm({
            title: 'Title',
            content: 'Detailed description',
          })
        }
      >
        confirm
      </Button>
      <Button onClick={handleClickConfirm}>Await confirm completion</Button>
    </Stack>
  );
};
```

### Hook Invocation (Recommended)

```tsx
import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  const handleClickConfirm = async () => {
    const res = await dialog({
      title: 'Title',
      content: 'This is a description',
    });
    if (res) {
      Toast({ message: 'Clicked confirm', position: 'bottom' });
    } else {
      Toast({ message: 'Clicked cancel', position: 'bottom' });
    }
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={() => dialog('Submit the application?')}>
          Default is confirm
        </Button>
        <Button
          onClick={() =>
            dialog.confirm({
              title: 'Title',
              content: 'Detailed description',
            })
          }
        >
          confirm
        </Button>
        <Button onClick={handleClickConfirm}>Await confirm completion</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Specify Render Container

You can specify the `container` to set the parent container where it renders.

```tsx
import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() =>
            dialog.confirm({
              title: 'Title',
              content: 'Detailed description',
              container: document.getElementById('container'),
            })
          }
        >
          confirm
        </Button>
        <div id="container" />
      </Stack>
    </ThemeProvider>
  );
};
```

### Asynchronous Operations Success/Failure

Use `onOk` to define the callback when confirm is clicked.

```tsx
import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

const sleep = (time: number) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, time));

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  const handleClickConfirm = async () => {
    const res = await dialog.confirm({
      content: 'Submit the application?',
      onOk: async () => {
        await sleep(3000);
        Toast({
          icon: 'success',
          content: 'Submission successful',
          position: 'bottom',
        });
      },
    });
    console.log('res', res);
  };

  const handleClickConfirmError = async () => {
    const res = await dialog.confirm({
      content: 'Submit the application?',
      onOk: async () => {
        await sleep(3000);
        Toast({
          icon: 'fail',
          content: 'Submission failed',
          position: 'bottom',
        });
        throw new Error();
      },
    });
    console.log('res', res);
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={handleClickConfirm}>Async Operation Success</Button>
        <Button onClick={handleClickConfirmError}>
          Async Operation Failure
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Custom Content Area

You can use `title` and `content` to customize the title and content area respectively. You can also use `okText` and `cancelText` to customize the text of the confirm and cancel buttons.

```tsx
import {
  Stack,
  Button,
  Dialog,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            dialog.confirm({
              title: 'Custom Title and Message',
              content: (
                <>
                  <div>Please refer to the instructions below</div>
                  <div>
                    For detailed instructions, please refer to
                    <span>the operation guide</span>
                  </div>
                </>
              ),
            });
          }}
        >
          Custom Title and Message
        </Button>
        <Button
          onClick={() => {
            dialog.confirm({
              title: 'Customize Footer Button Text',
              content: 'Are you sure you want to delete?',
              okText: 'Delete',
              cancelText: 'Let me think',
            });
          }}
        >
          Customize Footer Button Text
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Input Box

### Static Method (Not Recommended)

Use `Dialog.prompt` to display an input dialog. `Dialog.prompt` returns a `Promise` that lets you determine if the user clicked confirm or cancel. If confirmed, the return value is the input content.

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickPrompt = async () => {
    const res = await Dialog.prompt({
      title: 'Title',
      content: 'This is a description',
    });
    if (res) {
      Toast({ message: `Input content: ${res}`, position: 'bottom' });
    } else {
      Toast({ message: 'Clicked cancel', position: 'bottom' });
    }
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={() => Dialog.prompt('Please enter your name')}>
        Default is prompt
      </Button>
      <Button
        onClick={() =>
          Dialog.prompt({
            title: 'Title',
            content: 'Detailed description',
          })
        }
      >
        prompt
      </Button>
      <Button onClick={handleClickPrompt}>Await prompt completion</Button>
    </Stack>
  );
};
```

### Hook Invocation (Recommended)

```tsx
import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  const handleClickPrompt = async () => {
    const res = await dialog.prompt({
      title: 'Title',
      content: 'This is a description',
    });
    if (res) {
      Toast({ message: `Input content: ${res}`, position: 'bottom' });
    } else {
      Toast({ message: 'Clicked cancel', position: 'bottom' });
    }
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={() => dialog.prompt('Please enter your name')}>
          Default is prompt
        </Button>
        <Button
          onClick={() =>
            dialog.prompt({
              title: 'Title',
              content: 'Detailed description',
            })
          }
        >
          prompt
        </Button>
        <Button onClick={handleClickPrompt}>Await prompt completion</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## API

### DialogProps

| Property    | Description                              | Type                     | Default     |
| ----------- | ---------------------------------------- | ------------------------ | ----------- |
| title       | Dialog title                             | `ReactNode`              | -           |
| content     | Dialog content                           | `ReactNode`              | -           |
| type        | Dialog type                              | `'confirm' \| 'prompt'`  | `'confirm'` |
| okText      | Confirm button text                      | `ReactNode`              | `'确认'`    |
| cancelText  | Cancel button text                       | `ReactNode`              | `'取消'`    |
| onOk        | Callback when confirm button is clicked  | `(val?: string) => void` | -           |
| onCancel    | Callback when cancel button is clicked   | `() => void`             | -           |
| placeholder | Input placeholder text (for prompt type) | `string`                 | -           |
| InputProps  | Props passed to internal Input component | `Partial<InputProps>`    | -           |

### Deprecated Properties (Backward Compatible)

| Property    | Description                      | Type                     | Default | Replacement            |
| ----------- | -------------------------------- | ------------------------ | ------- | ---------------------- |
| header      | Dialog title (deprecated)        | `ReactNode`              | -       | Use `title` instead    |
| message     | Dialog content (deprecated)      | `ReactNode`              | -       | Use `content` instead  |
| confirmText | Confirm button text (deprecated) | `ReactNode`              | -       | Use `okText` instead   |
| onConfirm   | Confirm callback (deprecated)    | `(val?: string) => void` | -       | Use `onOk` instead     |
| onClose     | Cancel callback (deprecated)     | `() => void`             | -       | Use `onCancel` instead |

### Style Variables

| Property                         | Description                          | Default Value                 | Global Variables                            |
| -------------------------------- | ------------------------------------ | ----------------------------- | ------------------------------------------- |
| --max-width                      | Dialog maximum width                 | 300px                         | --bui-dialog-max-width                      |
| --border-radius                  | Dialog border radius                 | --bui-shape-radius-drawer     | --bui-dialog-border-radius                  |
| --title-padding                  | Header padding                       | 0 40px 9px                    | --bui-dialog-title-padding                  |
| --desc-padding                   | Message padding                      | 0 24px                        | --bui-dialog-desc-padding                   |
| --footer-margin-top              | Footer top margin                    | 15px                          | --bui-dialog-footer-margin-top              |
| --button-height                  | Button height                        | 53px                          | --bui-dialog-button-height                  |
| --button-line-height             | Button line height                   | 25px                          | --bui-dialog-button-line-height             |
| --button-padding                 | Button padding                       | 12px 0 13px                   | --bui-dialog-button-padding                 |
| --button-font-size               | Button font size                     | 17px                          | --bui-dialog-button-font-size               |
| --button-border-left             | Button left border                   | 1px solid rgba(0, 0, 0, 0.05) | --bui-dialog-button-border-left             |
| --button-active-background-color | Button active state background color | rgba(54, 57, 64, 0.05)        | --bui-dialog-button-active-background-color |

## here are the updates to merge:

---

group: Feedback
name: Dialog

---

# Dialog

Used for communicating important information or feedback related to operations, the Dialog component supports `Dialog`, `Dialog.confirm`, `Dialog.prompt`, and `Dialog.alert`. It is recommended to use Hooks for invocation since static methods cannot access context, and the ThemeProvider data will not be applied. Therefore, it's suggested to use `Dialog.useDialog` to create a contextHolder that supports context reading, using top-level registration methods instead of static methods provided by `Dialog`.

## Component Usage

Dialog component supports direct use as a React component, controlled by the `open` property.

### Basic Usage

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleOk = (value) => {
    Toast({ message: 'Clicked confirm', position: 'bottom' });
    setOpen(false);
  };

  const handleCancel = () => {
    Toast({ message: 'Clicked cancel', position: 'bottom' });
    setOpen(false);
  };

  const handleConfirmOk = () => {
    Toast({ message: 'Confirm delete operation', position: 'bottom' });
    setConfirmOpen(false);
  };

  const handleAlertOk = () => {
    Toast({ message: 'Alert confirmed', position: 'bottom' });
    setAlertOpen(false);
  };

  return (
    <>
      <Stack direction="row" spacing="10px">
        <Button onClick={() => setOpen(true)}>Basic Dialog</Button>
        <Button onClick={() => setConfirmOpen(true)}>Confirm Dialog</Button>
        <Button onClick={() => setAlertOpen(true)}>Alert Dialog</Button>
      </Stack>

      <Dialog
        open={open}
        title="Notice"
        content="This is a basic dialog example"
        onOk={handleOk}
        onCancel={handleCancel}
      />

      <Dialog
        open={confirmOpen}
        title="Confirm Delete"
        content="Data cannot be recovered after deletion. Are you sure you want to delete?"
        okText="Delete"
        cancelText="Cancel"
        onOk={handleConfirmOk}
        onCancel={() => setConfirmOpen(false)}
      />

      <Dialog
        open={alertOpen}
        type="alert"
        title="Warning"
        content="System detected abnormal operation, please pay attention to security!"
        okText="I understand"
        onOk={handleAlertOk}
      />
    </>
  );
};
```

## Code Demonstration

### Confirmation Box

### Static Method (Not Recommended)

Use `Dialog` (default type is confirm) or `Dialog.confirm` to display a confirmation dialog. `Dialog.confirm` returns a `Promise` that lets you determine if the user clicked confirm or cancel.

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickConfirm = async () => {
    const res = await Dialog({
      title: 'Title',
      content: 'This is a description',
    });
    if (res) {
      Toast({ message: 'Clicked confirm', position: 'bottom' });
    } else {
      Toast({ message: 'Clicked cancel', position: 'bottom' });
    }
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={() => Dialog('Submit the application?')}>
        Default is confirm
      </Button>
      <Button
        onClick={() =>
          Dialog.confirm({
            title: 'Title',
            content: 'Detailed description',
          })
        }
      >
        confirm
      </Button>
      <Button onClick={handleClickConfirm}>Await confirm completion</Button>
    </Stack>
  );
};
```

### Hook Invocation (Recommended)

```tsx
import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  const handleClickConfirm = async () => {
    const res = await dialog({
      title: 'Title',
      content: 'This is a description',
    });
    if (res) {
      Toast({ message: 'Clicked confirm', position: 'bottom' });
    } else {
      Toast({ message: 'Clicked cancel', position: 'bottom' });
    }
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={() => dialog('Submit the application?')}>
          Default is confirm
        </Button>
        <Button
          onClick={() =>
            dialog.confirm({
              title: 'Title',
              content: 'Detailed description',
            })
          }
        >
          confirm
        </Button>
        <Button onClick={handleClickConfirm}>Await confirm completion</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Specify Render Container

You can specify the `container` to set the parent container where it renders.

```tsx
import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() =>
            dialog.confirm({
              title: 'Title',
              content: 'Detailed description',
              container: document.getElementById('container'),
            })
          }
        >
          confirm
        </Button>
        <div id="container" />
      </Stack>
    </ThemeProvider>
  );
};
```

### Asynchronous Operations Success/Failure

Use `onOk` to define the callback when confirm is clicked.

```tsx
import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

const sleep = (time: number) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, time));

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  const handleClickConfirm = async () => {
    const res = await dialog.confirm({
      content: 'Submit the application?',
      onOk: async () => {
        await sleep(3000);
        Toast({
          icon: 'success',
          content: 'Submission successful',
          position: 'bottom',
        });
      },
    });
    console.log('res', res);
  };

  const handleClickConfirmError = async () => {
    const res = await dialog.confirm({
      content: 'Submit the application?',
      onOk: async () => {
        await sleep(3000);
        Toast({
          icon: 'fail',
          content: 'Submission failed',
          position: 'bottom',
        });
        throw new Error();
      },
    });
    console.log('res', res);
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={handleClickConfirm}>Async Operation Success</Button>
        <Button onClick={handleClickConfirmError}>
          Async Operation Failure
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Custom Content Area

You can use `title` and `content` to customize the title and content area respectively. You can also use `okText` and `cancelText` to customize the text of the confirm and cancel buttons.

```tsx
import {
  Stack,
  Button,
  Dialog,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            dialog.confirm({
              title: 'Custom Title and Message',
              content: (
                <>
                  <div>Please refer to the instructions below</div>
                  <div>
                    For detailed instructions, please refer to
                    <span>the operation guide</span>
                  </div>
                </>
              ),
            });
          }}
        >
          Custom Title and Message
        </Button>
        <Button
          onClick={() => {
            dialog.confirm({
              title: 'Customize Footer Button Text',
              content: 'Are you sure you want to delete?',
              okText: 'Delete',
              cancelText: 'Let me think',
            });
          }}
        >
          Customize Footer Button Text
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Alert Box

### Static Method (Not Recommended)

Use `Dialog.alert` to display an alert dialog. `Dialog.alert` returns a `Promise`. Alert dialogs only have a confirm button, clicking confirm returns `true`.

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickAlert = async () => {
    const res = await Dialog.alert({
      title: 'Warning',
      content: 'System detected abnormal operation!',
    });
    if (res) {
      Toast({ message: 'User confirmed the warning', position: 'bottom' });
    }
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={() => Dialog.alert('Operation failed, please retry')}>
        Default is alert
      </Button>
      <Button
        onClick={() =>
          Dialog.alert({
            title: 'System Warning',
            content:
              'Abnormal login detected, please pay attention to account security!',
            okText: 'I understand',
          })
        }
      >
        alert
      </Button>
      <Button onClick={handleClickAlert}>Await alert completion</Button>
    </Stack>
  );
};
```

### Hook Invocation (Recommended)

```tsx
import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  const handleClickAlert = async () => {
    const res = await dialog.alert({
      title: 'Warning',
      content: 'System detected abnormal operation!',
    });
    if (res) {
      Toast({ message: 'User confirmed the warning', position: 'bottom' });
    }
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={() => dialog.alert('Operation failed, please retry')}>
          Default is alert
        </Button>
        <Button
          onClick={() =>
            dialog.alert({
              title: 'System Warning',
              content:
                'Abnormal login detected, please pay attention to account security!',
              okText: 'I understand',
            })
          }
        >
          alert
        </Button>
        <Button onClick={handleClickAlert}>Await alert completion</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## Input Box

### Static Method (Not Recommended)

Use `Dialog.prompt` to display an input dialog. `Dialog.prompt` returns a `Promise` that lets you determine if the user clicked confirm or cancel. If confirmed, the return value is the input content.

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickPrompt = async () => {
    const res = await Dialog.prompt({
      title: 'Title',
      content: 'This is a description',
    });
    if (res) {
      Toast({ message: `Input content: ${res}`, position: 'bottom' });
    } else {
      Toast({ message: 'Clicked cancel', position: 'bottom' });
    }
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={() => Dialog.prompt('Please enter your name')}>
        Default is prompt
      </Button>
      <Button
        onClick={() =>
          Dialog.prompt({
            title: 'Title',
            content: 'Detailed description',
          })
        }
      >
        prompt
      </Button>
      <Button onClick={handleClickPrompt}>Await prompt completion</Button>
    </Stack>
  );
};
```

### Hook Invocation (Recommended)

```tsx
import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  const handleClickPrompt = async () => {
    const res = await dialog.prompt({
      title: 'Title',
      content: 'This is a description',
    });
    if (res) {
      Toast({ message: `Input content: ${res}`, position: 'bottom' });
    } else {
      Toast({ message: 'Clicked cancel', position: 'bottom' });
    }
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={() => dialog.prompt('Please enter your name')}>
          Default is prompt
        </Button>
        <Button
          onClick={() =>
            dialog.prompt({
              title: 'Title',
              content: 'Detailed description',
            })
          }
        >
          prompt
        </Button>
        <Button onClick={handleClickPrompt}>Await prompt completion</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## API

### DialogProps

| Property    | Description                              | Type                               | Default     |
| ----------- | ---------------------------------------- | ---------------------------------- | ----------- |
| type        | Dialog type                              | `'confirm' \| 'prompt' \| 'alert'` | `'confirm'` |
| title       | Dialog title                             | `ReactNode`                        | -           |
| content     | Dialog content                           | `ReactNode`                        | -           |
| okText      | Confirm button text                      | `ReactNode`                        | `'确认'`    |
| cancelText  | Cancel button text                       | `ReactNode`                        | `'取消'`    |
| onOk        | Callback when confirm button is clicked  | `(val?: string) => void`           | -           |
| onCancel    | Callback when cancel button is clicked   | `() => void`                       | -           |
| placeholder | Input placeholder text (for prompt type) | `string`                           | -           |
| InputProps  | Props passed to internal Input component | `Partial<InputProps>`              | -           |
