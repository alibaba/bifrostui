---
group: 反馈
name: Dialog 对话框
---

# Dialog 对话框

用于重要信息的告知或操作的反馈，支持`Dialog`,`Dialog.confirm`和`Dialog.prompt`。

## 代码演示

### 确认框

使用`Dialog`（默认类型是confirm）或`Dialog.confirm`来展示确认框。`Dialog.confirm` 返回类型是`Promise<boolean>`，你可以通过这个`boolean`来判断用户是点击的确认还是取消。

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
      <Button onClick={() => Dialog.confirm('是否提交申请')}>
        默认为confirm
      </Button>
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

### 异步操作执行成功/失败

使用`onConfirm`来定义点击确认时回调。

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

### 自定义内容区域

可以使用`header`, `desc`和`footer`来分别自定义标题、内容和底部按钮。也可以使用`confirmText`和`cancelText`来自定义取消和确定按钮内容。若想自定义整个文本区域，可以使用`custom`。

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

### 提示对话框

使用`Dialog.prompt`来展示提示对话框，返回值为`Promise<string | boolean>`。可以使用`placeholder`来自定义占位文本。同时支持`inputProps`透传到内部`input`标签，参考[Input](/cores/input#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)。

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
    </Stack>
  );
};
```

### API

##### DialogOptions

| 属性        | 说明         | 类型                                       | 默认值 |
| ----------- | ------------ | ------------------------------------------ | ------ |
| header      | 自定义页头   | `React.ReactNode`                          | -      |
| message     | 自定义消息   | `React.ReactNode`                          | -      |
| confirmText | 确认按钮文案 | `React.ReactNode`                          | 确认   |
| cancelText  | 取消按钮文案 | `React.ReactNode`                          | 取消   |
| onConfirm   | 确定按钮回调 | `(val?: string) => void \| Promise<void>;` | -      |
| onCancel    | 取消按钮回调 | `() =>void \| Promise<void>`               | -      |

`ConfirmOptions`的取值同`DialogOptions`

`DialogOptions` 继承自 `ModalProps`, 其他属性见 [Modal API](/cores/modal?#API)

##### PromptOptions

`Dialog.prompt` 接受的参数同 `Dialog.confirm`, 此外，它还额外支持以下属性：

| 属性        | 说明                        | 类型                                          | 默认值       |
| ----------- | --------------------------- | --------------------------------------------- | ------------ |
| placeholder | 输入框占位文本              | string                                        | 请在此处输入 |
| inputProps  | 内部`<input>`标签的标准属性 | `React.InputHTMLAttributes<HTMLInputElement>` | -            |

##### 方法

| 方法名         | 说明           | 参数                     | 返回值        |
| -------------- | -------------- | ------------------------ | ------------- |
| Dialog         | 展示确认框     | DialogOptions            | DialogPromise |
| Dialog.confirm | 展示确认框     | ConfirmOptions \| string | DialogPromise |
| Dialog.prompt  | 展示提示对话框 | PromptOptions \| string  | DialogPromise |

### 样式变量

| 属性                | 说明               | 默认值 | 全局变量 |
| ------------------- | ------------------ | ------ | -------- |
| --border-radius     | 对话框圆角         | 12px   | -        |
| --max-width         | 对话框最大宽度     | 300px  | -        |
| --header-font-size  | 对话框标题字体大小 | 18px   | -        |
| --message-font-size | 对话框消息字体大小 | 15px   | -        |
