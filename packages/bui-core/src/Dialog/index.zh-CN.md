---
group: 反馈
name: Dialog 对话框
---

# Dialog 对话框

用于重要信息的告知或操作的反馈，支持`Dialog`,`Dialog.confirm`和`Dialog.prompt`。
推荐Hooks调用方式，静态方法无法获取上下文，ThemeProvider数据不会生效，因此推荐`Dialog.useDialog`创建支持读取context的contextHolder，通过顶层注册方法代替`Dialog`静态方法。

## 确认框

### 静态方法（不推荐）

使用`Dialog`（默认类型是confirm）或`Dialog.confirm`来展示确认框。`Dialog.confirm` 返回`Promise`，你可以通过返回值来判断用户是点击的确认还是取消

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

### Hooks调用（推荐）

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

## 指定渲染容器

可以指定`container`指定渲染的父容器。

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
              header: '标题',
              message: '详细描述',
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

## 异步操作执行成功/失败

使用`onConfirm`来定义点击确认时回调。

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
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={handleClickConfirm}>异步操作执行成功</Button>
        <Button onClick={handleClickConfirmError}>异步操作执行失败</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

## 自定义内容区域

可以使用`header`, `message`来分别自定义标题、内容区域。也可以使用`confirmText`和`cancelText`来自定义取消和确定按钮内容。

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

## 提示对话框

使用`dialog.prompt`来展示提示对话框。可以使用`placeholder`来自定义占位文本。同时支持`InputProps`透传到内部`Input`组件中，参考[Input](/cores/input#api)。

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
    <ThemeProvider locale={theme.locale}>
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

## API

### DialogOptions

| 属性        | 说明         | 类型                                       | 默认值        |
| ----------- | ------------ | ------------------------------------------ | ------------- |
| header      | 自定义页头   | `React.ReactNode`                          | -             |
| message     | 自定义消息   | `React.ReactNode`                          | -             |
| confirmText | 确认按钮文案 | `React.ReactNode`                          | 确认          |
| cancelText  | 取消按钮文案 | `React.ReactNode`                          | 取消          |
| container   | 渲染容器     | `HTMLElement` \| `(() => HTMLElement) `    | document.body |
| onConfirm   | 确定按钮回调 | `(val?: string) => void \| Promise<void>;` | -             |
| onCancel    | 取消按钮回调 | `() =>void \| Promise<void>`               | -             |

`ConfirmOptions`的取值同`DialogOptions`

`DialogOptions` 继承自 `ModalProps`, 其他属性见 [Modal API](/cores/modal?#api)

### PromptOptions

`Dialog.prompt` 接受的参数同 `Dialog.confirm`, 此外，它还额外支持以下属性：

| 属性        | 说明                        | 类型                  | 默认值       |
| ----------- | --------------------------- | --------------------- | ------------ |
| placeholder | 输入框占位文本              | string                | 请在此处输入 |
| InputProps  | 透传给内部`Input`组件的属性 | `Partial<InputProps>` | -            |

### 方法

| 方法名         | 说明           | 参数                     | 返回值        |
| -------------- | -------------- | ------------------------ | ------------- |
| Dialog         | 展示确认框     | DialogOptions \| string  | DialogPromise |
| Dialog.confirm | 展示确认框     | ConfirmOptions \| string | DialogPromise |
| Dialog.prompt  | 展示提示对话框 | PromptOptions \| string  | DialogPromise |

## 样式变量

| 变量名                                      | 说明           | 默认值                           |
| ------------------------------------------- | -------------- | -------------------------------- |
| --bui-dialog-max-width                      | 对话框最大宽度 | `300px`                          |
| --bui-dialog-border-radius                  | 边框圆角       | `var(--bui-shape-radius-drawer)` |
| --bui-dialog-title-padding                  | 标题内边距     | `0 40px 9px`                     |
| --bui-dialog-desc-padding                   | 描述内边距     | `0 24px`                         |
| --bui-dialog-footer-margin-top              | 底部区域上边距 | `15px`                           |
| --bui-dialog-button-height                  | 按钮高度       | `53px`                           |
| --bui-dialog-button-line-height             | 按钮行高       | `25px`                           |
| --bui-dialog-button-padding                 | 按钮内边距     | `12px 0 13px`                    |
| --bui-dialog-button-font-size               | 按钮字体大小   | `17px`                           |
| --bui-dialog-button-border-left             | 按钮左边框     | `1px solid rgba(0, 0, 0, 0.05)`  |
| --bui-dialog-button-active-background-color | 按钮激活背景色 | `rgba(54, 57, 64, 0.05)`         |
