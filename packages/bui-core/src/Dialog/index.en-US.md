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
      header: 'Title',
      message: 'This is a description',
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
            header: 'Title',
            message: 'Detailed description',
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
      header: 'Title',
      message: 'This is a description',
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
              header: 'Title',
              message: 'Detailed description',
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
              header: 'Title',
              message: 'Detailed description',
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

Use `onConfirm` to define the callback when confirm is clicked.

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
      message: 'Submit the application?',
      onConfirm: async () => {
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
      message: 'Submit the application?',
      onConfirm: async () => {
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

You can use `header` and `message` to customize the title and content area respectively. You can also use `confirmText` and `cancelText` to customize the text of the confirm and cancel buttons.

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
              header: 'Customize Footer Button Text',
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

Use `dialog.prompt` to display a prompt dialog. You can customize placeholder text, and it supports `InputProps` to pass additional properties to the internal `Input` component. Refer to [Input](/cores/input#api) for more details.

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
      placeholder: 'Custom placeholder text',
    });
    res && Toast(`Entered value is ${res}`);
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={handleClickPrompt}>prompt</Button>
        <Button
          onClick={() => {
            dialog.prompt({
              header: 'Title',
              placeholder: 'Custom placeholder text',
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

| Property    | Description             | Type                                       | Default Value |
| ----------- | ----------------------- | ------------------------------------------ | ------------- |
| header      | Custom header           | `React.ReactNode`                          | -             |
| message     | Custom message          | `React.ReactNode`                          | -             |
| confirmText | Confirm button text     | `React.ReactNode`                          | Confirm       |
| cancelText  | Cancel button text      | `React.ReactNode`                          | Cancel        |
| container   | Render container        | `HTMLElement` \| `(() => HTMLElement) `    | document.body |
| onConfirm   | Confirm button callback | `(val?: string) => void \| Promise<void>;` | -             |
| onCancel    | Cancel button callback  | `() =>void \| Promise<void>`               | -             |

The properties of `ConfirmOptions` are the same as `DialogOptions`.

`DialogOptions` inherits from `ModalProps`. Other properties can be found in [Modal API](/cores/modal?#api).

#### PromptOptions

Parameters accepted by `Dialog.prompt` are the same as those for `Dialog.confirm`. Additionally, it supports the following properties:

| Property    | Description                                         | Type                  | Default Value |
| ----------- | --------------------------------------------------- | --------------------- | ------------- |
| placeholder | Input placeholder text                              | string                | Please Enter  |
| InputProps  | Properties passed to the internal `Input` component | `Partial<InputProps>` | -             |

#### Methods

| Method Name    | Description              | Parameters               | Return Value  |
| -------------- | ------------------------ | ------------------------ | ------------- |
| Dialog         | Display confirmation box | DialogOptions \| string  | DialogPromise |
| Dialog.confirm | Display confirmation box | ConfirmOptions \| string | DialogPromise |
| Dialog.prompt  | Display prompt dialog    | PromptOptions \| string  | DialogPromise |

### Style Variables

| Property                         | Description                          | Default Value                 | Global Variables                    |
| -------------------------------- | ------------------------------------ | ----------------------------- | ----------------------------------- |
| --max-width                      | Dialog maximum width                 | 300px                         | --bui-dialog-max-width              |
| --border-radius                  | Dialog border radius                 | --bui-shape-radius-drawer     | --bui-dialog-border-radius          |
| --title-padding                  | Header padding                       | 0 40px 9px                    | --bui-dialog-title-padding          |
| --desc-padding                   | Message padding                      | 0 24px                        | --bui-dialog-desc-padding           |
| --footer-margin-top              | Footer top margin                    | 15px                          | --bui-dialog-footer-margin          |
| --button-height                  | Button height                        | 53px                          | --bui-dialog-button-height          |
| --button-line-height             | Button line height                   | 25px                          | --bui-dialog-button-line-height     |
| --button-padding                 | Button padding                       | 12px 0 13px                   | --bui-dialog-button-padding         |
| --button-font-size               | Button font size                     | 17px                          | --bui-dialog-button-font-size       |
| --button-border-left             | Button left border                   | 1px solid rgba(0, 0, 0, 0.05) | --bui-dialog-button-border-left     |
| --button-active-background-color | Button active state background color | rgba(54, 57, 64, 0.05)        | --bui-dialog-button-active-bg-color |
