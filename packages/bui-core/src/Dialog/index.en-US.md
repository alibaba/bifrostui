---
group: Feedback
name: Dialog
---

# Dialog

Used for informing important information or feedback on operations. It supports `Dialog`, `Dialog.confirm`, and `Dialog.prompt`. We recommend using the Hooks method to call it. Static methods cannot obtain context, and ThemeProvider data will not take effect. Therefore, we recommend creating a `contextHolder` that can read context using `Dialog.useDialog` and registering it at the top level instead of using static methods.

## Code Examples

### Confirmation Box

#### Static Method (Not Recommended)

Use `Dialog` (default type is confirm) or `Dialog.confirm` to display a confirmation box. `Dialog.confirm` returns a `Promise`, you can determine whether the user clicked confirm or cancel through the returned value.

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickConfirm = async () => {
    const res = await Dialog({
      header: 'Title',
      message: 'This is the description content',
    });
    if (res) {
      Toast({ message: 'Confirmed', position: 'bottom' });
    } else {
      Toast({ message: 'Cancelled', position: 'bottom' });
    }
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={() => Dialog('Submit Application?')}>
        Default Confirm
      </Button>
      <Button
        onClick={() =>
          Dialog.confirm({
            header: 'Title',
            message: 'Detailed Description',
          })
        }
      >
        Confirm
      </Button>
      <Button onClick={handleClickConfirm}>Wait for Confirm Completion</Button>
    </Stack>
  );
};
```

#### Hook Call (Recommended)

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
      header: 'Title',
      message: 'This is the description content',
    });
    if (res) {
      Toast({ message: 'Confirmed', position: 'bottom' });
    } else {
      Toast({ message: 'Cancelled', position: 'bottom' });
    }
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={() => dialog('Submit Application?')}>
          Default Confirm
        </Button>
        <Button
          onClick={() =>
            dialog.confirm({
              header: 'Title',
              message: 'Detailed Description',
            })
          }
        >
          Confirm
        </Button>
        <Button onClick={handleClickConfirm}>
          Wait for Confirm Completion
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Handling Asynchronous Operations Success/Failure

Use `onConfirm` to define the callback when confirming.

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
      message: 'Submit Application?',
      onConfirm: async () => {
        await sleep(3000);
        Toast({
          icon: 'success',
          content: 'Submission Successful',
          position: 'bottom',
        });
      },
    });
    console.log('res', res);
  };

  const handleClickConfirmError = async () => {
    const res = await dialog.confirm({
      message: 'Submit Application?',
      onConfirm: async () => {
        await sleep(3000);
        Toast({
          icon: 'fail',
          content: 'Submission Failed',
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
        <Button onClick={handleClickConfirm}>
          Asynchronous Operation Success
        </Button>
        <Button onClick={handleClickConfirmError}>
          Asynchronous Operation Failure
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Custom Content Area

You can customize the title and content area using `header` and `message`. You can also customize the cancel and confirm button text using `confirmText` and `cancelText`.

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
              header: 'Custom Title and Message',
              message: (
                <>
                  <div>Please refer to the following instructions</div>
                  <div>
                    For more details, please check the{' '}
                    <span>Operation Guide</span>
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
              header: 'Custom Bottom Button Text',
              confirmText: 'Delete',
            });
          }}
        >
          Customize Confirm Button Text
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Prompt Dialog

Use `dialog.prompt` to display a prompt dialog. You can customize the placeholder text using `placeholder`. It also supports passing `InputProps` to the internal `Input` component, see [Input](/cores/input#api).

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
      header: 'Title',
      placeholder: 'Custom Placeholder Text',
    });
    res && Toast(`Input Value is ${res}`);
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={handleClickPrompt}>Prompt</Button>
        <Button
          onClick={() => {
            dialog.prompt({
              header: 'Title',
              placeholder: 'Custom Placeholder Text',
              InputProps: {
                clearable: true,
              },
            });
          }}
        >
          Pass InputProps
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### API

#### DialogOptions

| Property    | Description             | Type                                       | Default |
| ----------- | ----------------------- | ------------------------------------------ | ------- |
| header      | Custom header           | `React.ReactNode`                          | -       |
| message     | Custom message          | `React.ReactNode`                          | -       |
| confirmText | Confirm button text     | `React.ReactNode`                          | Confirm |
| cancelText  | Cancel button text      | `React.ReactNode`                          | Cancel  |
| onConfirm   | Confirm button callback | `(val?: string) => void \| Promise<void>;` | -       |
| onCancel    | Cancel button callback  | `() =>void \| Promise<void>`               | -       |

`ConfirmOptions` has the same values as `DialogOptions`

`DialogOptions` inherits from `ModalProps`, other properties are detailed in [Modal API](/cores/modal?#API)

#### PromptOptions

The parameters accepted by `Dialog.prompt` are the same as `Dialog.confirm`, with additional support for the following properties:

| Property    | Description             | Type                  | Default           |
| ----------- | ----------------------- | --------------------- | ----------------- |
| placeholder | Input placeholder text  | string                | Please enter here |
| InputProps  | Props passed to `Input` | `Partial<InputProps>` | -                 |

#### Methods

| Method Name    | Description           | Parameters                 | Return Value    |
| -------------- | --------------------- | -------------------------- | --------------- |
| Dialog         | Show confirmation box | `DialogOptions \| string`  | `DialogPromise` |
| Dialog.confirm | Show confirmation box | `ConfirmOptions \| string` | `DialogPromise` |
| Dialog.prompt  | Show prompt dialog    | `PromptOptions \| string`  | `DialogPromise` |

### Style Variables

| Property                         | Description              | Default Value                 | Global Variable                             |
| -------------------------------- | ------------------------ | ----------------------------- | ------------------------------------------- |
| --max-width                      | Dialog max width         | 300px                         | --bui-dialog-max-width                      |
| --border-radius                  | Dialog border radius     | --bui-shape-radius-drawer     | --bui-dialog-border-radius                  |
| --title-padding                  | Title padding            | 0 40px 9px                    | --bui-dialog-title-padding                  |
| --desc-padding                   | Description padding      | 0 24px                        | --bui-dialog-desc-padding                   |
| --footer-margin-top              | Footer margin top        | 15px                          | --bui-dialog-footer-margin-top              |
| --button-height                  | Button height            | 53px                          | --bui-dialog-button-height                  |
| --button-line-height             | Button line height       | 25px                          | --bui-dialog-button-line-height             |
| --button-padding                 | Button padding           | 12px 0 13px                   | --bui-dialog-button-padding                 |
| --button-font-size               | Button font size         | 17px                          | --bui-dialog-button-font-size               |
| --button-border-left             | Button left border       | 1px solid rgba(0, 0, 0, 0.05) | --bui-dialog-button-border-left             |
| --button-active-background-color | Button active background | rgba(54, 57, 64, 0.05)        | --bui-dialog-button-active-background-color |
