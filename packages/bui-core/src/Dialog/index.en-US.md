---
group: feedback
name: Dialogue
---

# Dialogue

Used for informing important information or providing feedback on operations, supporting`Dialog`,`Dialog.confirm` and `Dialog.prompt`。

## Code demonstration

### Confirmation box

Use`Dialog`（the default type is confirm) or`Dialog.confirm`to display confirmation box.`Dialog.confirm`return`Promise`，you can determine whether the user clicked to confirm or cancel by returning the value.

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickConfirm = async () => {
    const res = await Dialog({
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
    <Stack direction="row" spacing="10px">
      <Button onClick={() => Dialog('是否提交申请')}>默认为confirm</Button>
      <Button
        onClick={() =>
          Dialog.confirm({
            header: '标题',
            message: '详细描述',
          })
        }
      >
        confirm
      </Button>
      <Button onClick={handleClickConfirm}>等待confirm完成</Button>
    </Stack>
  );
};
```

### Asynchronous operation execution successful/failed

Use`onConfirm` define a callback when clicking confirm.

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

const sleep = (time: number) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, time));

export default () => {
  const handleClickConfirm = async () => {
    const res = await Dialog.confirm({
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
    const res = await Dialog.confirm({
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
    <Stack direction="row" spacing="10px">
      <Button onClick={handleClickConfirm}>异步操作执行成功</Button>
      <Button onClick={handleClickConfirmError}>异步操作执行失败</Button>
    </Stack>
  );
};
```

### Customize content area

Have access to`header`,`message` customize the title and content area separately. it can also be used`confirmText` and `cancelText` customize the content of the cancel and confirm buttons.

```tsx
import { Stack, Button, Dialog } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Dialog.confirm({
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
          Dialog.confirm({
            header: '自定义底部按钮文本',
            confirmText: '删除',
          });
        }}
      >
        自定义确认按钮文本
      </Button>
    </Stack>
  );
};
```

### Prompt dialog box

Use`Dialog.prompt`display prompt dialog box. have access to`placeholder`customize placeholder text. simultaneously supporting`InputProps`transferred internally`Input`in the document, refer to [Input](/cores/input#api).

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickPrompt = async () => {
    const res = await Dialog.prompt({
      header: '标题',
      placeholder: '自定义占位文本',
    });
    res && Toast(`输入值为${res}`);
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={handleClickPrompt}>prompt</Button>
      <Button
        onClick={() => {
          Dialog.prompt({
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
  );
};
```

### API

#### DialogOptions

| attribute   | explain                 | type                                       | Default value |
| ----------- | ----------------------- | ------------------------------------------ | ------------- |
| header      | custom header           | `React.ReactNode`                          | -             |
| message     | Custom message          | `React.ReactNode`                          | -             |
| confirmText | Confirm button copy     | `React.ReactNode`                          | confirm       |
| cancelText  | Cancel button text      | `React.ReactNode`                          | cancel        |
| onConfirm   | Confirm button callback | `(val?: string) => void \| Promise<void>;` | -             |
| onCancel    | Cancel button callback  | `() =>void \| Promise<void>`               | -             |

`ConfirmOptions`的same value`DialogOptions`

`DialogOptions`inherited from`ModalProps`,other attributes can be found in [modern api] (/cores/modal? # api)

#### PromptOptions

`Dialog.prompt`the accepted parameters are the same`Dialog.confirm`,in addition, it also supports the following additional attributes:

| attribute   | explain                                                   | type                  | Default value     |
| ----------- | --------------------------------------------------------- | --------------------- | ----------------- |
| placeholder | Input box placeholder text                                | string                | Please enter here |
| InputProps  | Transmitting properties to the internal 'Input' component | `Partial<InputProps>` | -                 |

#### method

| Method Name    | explain                   | parameter                | Return value  |
| -------------- | ------------------------- | ------------------------ | ------------- |
| Dialog         | Display confirmation box  | DialogOptions \| string  | DialogPromise |
| Dialog.confirm | Display confirmation box  | ConfirmOptions \| string | DialogPromise |
| Dialog.prompt  | Display prompt dialog box | PromptOptions \| string  | DialogPromise |

### Style variables

| attribute                        | explain                                   | Default value                 | global variable                             |
| -------------------------------- | ----------------------------------------- | ----------------------------- | ------------------------------------------- |
| --max-width                      | Dialog maximum width                      | 300px                         | --bui-dialog-max-width                      |
| --border-radius                  | Dialog rounded corners                    | --bui-shape-radius-drawer     | --bui-dialog-border-radius                  |
| --title-padding                  | title bar padding                         | 0 40px 9px                    | --bui-dialog-title-padding                  |
| --desc-padding                   | Description copy padding                  | 0 24px                        | --bui-dialog-desc-padding                   |
| --footer-margin-top              | Bottom top margin                         | 15px                          | --bui-dialog-footer-margin-top              |
| --button-height                  | button height                             | 53px                          | --bui-dialog-button-height                  |
| --button-line-height             | Button row height                         | 25px                          | --bui-dialog-button-line-height             |
| --button-padding                 | button padding                            | 12px 0 13px                   | --bui-dialog-button-padding                 |
| --button-font-size               | Button font size                          | 17px                          | --bui-dialog-button-font-size               |
| --button-border-left             | Button left border                        | 1px solid rgba(0, 0, 0, 0.05) | --bui-dialog-button-border-left             |
| --button-active-background-color | Button activation status background color | rgba(54, 57, 64, 0.05)        | --bui-dialog-button-active-background-color |
