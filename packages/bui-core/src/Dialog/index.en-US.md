---
group: feedback
name: Dialogue box
---

# Dialogue box

Used for informing or providing feedback on important information, supporting 'Dialogue', 'Dialogue. confirm', and 'Dialogue. prompt'.
Recommend Hooks calling method. Static methods cannot obtain context, and ThemeProvider data will not take effect. Therefore, it is recommended to create a contextHolder that supports reading context using Dialog.useDialogue , and replace Dialogue static methods with top-level registration methods.

## Code demonstration

### Confirmation box

#### Static method (not recommended)

Use 'Dialogue' (default type is confirm) or 'Dialogue. confirm' to display the confirmation box Dialogue. confirm returns a Promise, which allows you to determine whether the user has clicked to confirm or cancel

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
      header: '标题',
      message: '这是描述内容',
    });
    if (res) {
      Toast({ message: '点击了确认', position: 'bottom' });
    } else {
      Toast({ message: '点击了取消', position: 'bottom' });
    }
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={() => dialog('是否提交申请')}>默认为confirm</Button>
        <Button
          onClick={() =>
            dialog.confirm({
              header: '标题',
              message: '详细描述',
            })
          }
        >
          confirm
        </Button>
        <Button onClick={handleClickConfirm}>等待confirm完成</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

#### Hooks call (recommended)

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
      header: '标题',
      message: '这是描述内容',
    });
    if (res) {
      Toast({ message: '点击了确认', position: 'bottom' });
    } else {
      Toast({ message: '点击了取消', position: 'bottom' });
    }
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={() => dialog('是否提交申请')}>默认为confirm</Button>
        <Button
          onClick={() =>
            dialog.confirm({
              header: '标题',
              message: '详细描述',
            })
          }
        >
          confirm
        </Button>
        <Button onClick={handleClickConfirm}>等待confirm完成</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Asynchronous operation execution successful/failed

Use 'onConfirm' to define a callback when clicking confirm.

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
      message: '是否提交申请',
      onConfirm: async () => {
        await sleep(3000);
        Toast({
          icon: 'success',
          content: '提交成功',
          position: 'bottom',
        });
      },
    });
    console.log('res', res);
  };

  const handleClickConfirmError = async () => {
    const res = await dialog.confirm({
      message: '是否提交申请',
      onConfirm: async () => {
        await sleep(3000);
        Toast({
          icon: 'fail',
          content: '提交失败',
          position: 'bottom',
        });
        throw new Error();
      },
    });
    console.log('res', res);
  };

  return (
    <ThemeProvider locale={theme}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={handleClickConfirm}>异步操作执行成功</Button>
        <Button onClick={handleClickConfirmError}>异步操作执行失败</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Customize content area

You can use 'header' and 'message' to customize the title and content area separately. You can also use 'confirmText' and 'cancelText' to customize the content of the cancel and confirm buttons.

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
    <ThemeProvider locale={theme}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            dialog.confirm({
              header: '自定义标题和消息',
              message: (
                <>
                  <div>请参考如下说明</div>
                  <div>
                    详情说明请查阅<span>操作指引</span>
                  </div>
                </>
              ),
            });
          }}
        >
          自定义标题和消息
        </Button>
        <Button
          onClick={() => {
            dialog.confirm({
              header: '自定义底部按钮文本',
              confirmText: '删除',
            });
          }}
        >
          自定义确认按钮文本
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### Prompt dialog box

Use 'dialog. prompt' to display prompt dialog boxes. You can use 'placeholder' to customize placeholder text. Simultaneously supporting transparent transmission of 'InputProps' to internal' Input 'components, refer to [Input] (/cores/input # API).

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
      header: '标题',
      placeholder: '自定义占位文本',
    });
    res && Toast(`输入值为${res}`);
  };

  return (
    <ThemeProvider locale={theme}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={handleClickPrompt}>prompt</Button>
        <Button
          onClick={() => {
            dialog.prompt({
              header: '标题',
              placeholder: '自定义占位文本',
              InputProps: {
                clearable: true,
              },
            });
          }}
        >
          传入InputProps
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### API

#### DialogOptions

| attribute   | explain                 | type                                      | Default value |
| ----------- | ----------------------- | ----------------------------------------- | ------------- |
| header      | custom header           | `React.ReactNode`                         | -             |
| message     | Custom message          | `React.ReactNode`                         | -             |
| confirmText | Confirm button copy     | `React.ReactNode`                         | confirm       |
| cancelText  | Cancel button text      | `React.ReactNode`                         | cancel        |
| onConfirm   | Confirm button callback | `(val?: string) => void \|Promise<void>;` | -             |
| onCancel    | Cancel button callback  | `() =>void \|Promise<void>`               | -             |

The value of ConfirmOptions is the same as that of DialogOptions

DialogOptions' inherits from 'Modal Props', other properties can be found in [Modal API] (/cores/modal? # API)

#### PromptOptions

Dialogue. prompt 'accepts the same parameters as' Dialogue. confirm', and additionally supports the following properties:

| attribute   | explain                                           | type                  | Default value     |
| ----------- | ------------------------------------------------- | --------------------- | ----------------- |
| placeholder | Input box placeholder text                        | string                | Please enter here |
| InputProps  | Spread it internally `Input` Component properties | `Partial<InputProps>` | -                 |

#### method

| Method Name    | explain                   | parameter               | Return value  |
| -------------- | ------------------------- | ----------------------- | ------------- |
| Dialog         | Display confirmation box  | DialogOptions \|string  | DialogPromise |
| Dialog.confirm | Display confirmation box  | ConfirmOptions \|string | DialogPromise |
| Dialog.prompt  | Display prompt dialog box | PromptOptions \|string  | DialogPromise |

### Style variables

| attribute                        | explain                                      | Default value                 | global variable                             |
| -------------------------------- | -------------------------------------------- | ----------------------------- | ------------------------------------------- |
| --max-width                      | Maximum width of dialog box                  | 300px                         | --bui-dialog-max-width                      |
| --border-radius                  | Round corner of dialog box                   | --bui-shape-radius-drawer     | --bui-dialog-border-radius                  |
| --title-padding                  | Title bar margin                             | 0 40px 9px                    | --bui-dialog-title-padding                  |
| --desc-padding                   | Describe the inner margin of the copy        | 0 24px                        | --bui-dialog-desc-padding                   |
| --footer-margin-top              | Bottom margin                                | 15px                          | --bui-dialog-footer-margin-top              |
| --button-height                  | Button height                                | 53px                          | --bui-dialog-button-height                  |
| --button-line-height             | Button row height                            | 25px                          | --bui-dialog-button-line-height             |
| --button-padding                 | Button inner margin                          | 12px 0 13px                   | --bui-dialog-button-padding                 |
| --button-font-size               | Button font size                             | 17px                          | --bui-dialog-button-font-size               |
| --button-border-left             | Left border of button                        | 1px solid rgba(0, 0, 0, 0.05) | --bui-dialog-button-border-left             |
| --button-active-background-color | Background color of button activation status | rgba(54, 57, 64, 0.05)        | --bui-dialog-button-active-background-color |
