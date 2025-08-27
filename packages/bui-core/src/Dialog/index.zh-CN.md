---
group: 反馈
name: Dialog 对话框
---

# Dialog 对话框

用于重要信息的告知或操作的反馈

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Dialog 在当前页面正中打开一个浮层，承载相应的操作
- 需要用户确认某个操作时，如删除、提交等重要操作
- 需要用户输入信息时，如修改用户名、输入密码等
- 需要向用户展示重要信息或警告时

## 调用方式对比

Dialog 支持三种调用方式：组件式调用、静态方法调用和 Hook 调用。

| 调用方式       | 优点                                   | 缺点                   | 推荐场景                       |
| -------------- | -------------------------------------- | ---------------------- | ------------------------------ |
| 组件式调用     | 传统使用方法、完全控制、支持复杂交互   | 需要管理状态           | 复杂业务逻辑、需要自定义交互   |
| 静态方法       | 调用简单、无需状态管理                 | 无法访问 React Context | 简单确认场景，不需要获取上下文 |
| useDialog Hook | 调用相对简单、可访问 Context、支持主题 | 需要渲染 contextHolder | 适合需要获取上下文的场景       |

## 组件式调用

Dialog组件支持作为React组件直接使用，通过`open`属性控制显示状态，适合需要复杂交互逻辑的场景。

### 基础用法

最简单的Dialog使用方式，通过状态控制对话框的显示和隐藏，展示基本的确认和取消操作。

```tsx
import { Button, Dialog, Toast, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack direction="row" spacing="10px">
        <Button onClick={() => setOpen(true)}>打开对话框</Button>
      </Stack>

      <Dialog
        open={open}
        title="提示"
        content="这是一个基础的对话框示例"
        onOk={() => {
          Toast({ message: '点击了确认' });
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
    </>
  );
};
```

### 组件类型

展示Dialog的三种类型：确认对话框（confirm）、警告对话框（alert），输入对话框（prompt）每种类型有不同的按钮配置和交互行为。

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [promptOpen, setPromptOpen] = useState(false);

  return (
    <>
      <Stack direction="row" spacing="10px">
        <Button onClick={() => setConfirmOpen(true)}>确认对话框</Button>
        <Button onClick={() => setAlertOpen(true)}>警告对话框</Button>
        <Button onClick={() => setPromptOpen(true)}>输入对话框</Button>
      </Stack>

      {/* 确认对话框 */}
      <Dialog
        open={confirmOpen}
        title="确认删除"
        content="删除后数据将无法恢复，确定要删除吗？"
        okText="删除"
        onOk={() => {
          Toast({ message: '已删除' });
          setConfirmOpen(false);
        }}
        onCancel={() => setConfirmOpen(false)}
      />

      {/* 警告对话框 */}
      <Dialog
        open={alertOpen}
        type="alert"
        title="警告"
        content="系统检测到异常操作！"
        okText="我知道了"
        onOk={() => setAlertOpen(false)}
      />
      {/*输入对话框 */}
      <Dialog
        open={promptOpen}
        type="prompt"
        title="请输入"
        content="请输入您的姓名"
        placeholder="请输入姓名"
        onOk={(_, { value }) => {
          if (value?.trim()) {
            Toast({ message: `您好，${value}！` });
            setPromptOpen(false);
          } else {
            Toast({ message: '请输入有效内容' });
          }
        }}
        onCancel={() => setPromptOpen(false)}
      />
    </>
  );
};
```

### 自定义内容

展示如何自定义Dialog的标题和内容区域，支持渲染复杂的React组件和HTML结构。

```tsx
import { Button, Dialog, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack direction="row" spacing="10px">
        <Button onClick={() => setOpen(true)}>自定义内容</Button>
      </Stack>

      <Dialog
        open={open}
        title={<span style={{ color: '#ff4d4f' }}>⚠️ 重要提醒</span>}
        content={
          <div>
            <p>请仔细阅读以下条款：</p>
            <ul style={{ textAlign: 'left', margin: '10px 0' }}>
              <li>操作不可撤销</li>
              <li>数据将被永久删除</li>
              <li>请确保已做好备份</li>
            </ul>
          </div>
        }
        okText="我已了解"
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </>
  );
};
```

## 静态方法调用

静态方法调用简单直接，但无法访问 React Context，主题配置等可能不生效， 如需使用这些功能，请使用useDialog Hook。

### 基础用法

展示静态方法的基本调用方式，适用于简单的确认场景，但不推荐在复杂应用中使用。

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const showConfirm = async () => {
    const result = await Dialog.confirm({
      title: '确认操作',
      content: '这是描述内容',
    });
    Toast({ message: result ? '已确认' : '已取消' });
  };

  const showPrompt = async () => {
    const result = await Dialog.prompt('请输入您的姓名');
    if (result) {
      Toast({ message: `您好，${result}！` });
    }
  };

  const showAlert = async () => {
    await Dialog.alert('操作完成！');
    Toast({ message: '已确认' });
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={showConfirm}>确认对话框</Button>
      <Button onClick={showPrompt}>输入对话框</Button>
      <Button onClick={showAlert}>警告对话框</Button>
    </Stack>
  );
};
```

### 异步操作处理

展示Dialog如何处理异步操作，使用函数式调用方法可以更简洁地处理异步流程。函数式调用默认返回一个Promise, 返回true表示确认，false表示取消。如果是prompt类型，返回值是输入的内容。onOk、onCancel回调函数也可以返回一个Promise,弹窗会等传入回调函数的Promise状态改成成功后关闭。

```tsx
import { Button, Dialog, Toast, Stack } from '@bifrostui/react';
import React from 'react';

// 模拟异步API调用
const mockApiCall = (delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
};

export default () => {
  // 基础异步操作处理
  const handleBasicAsync = async () => {
    const confirmed = await Dialog.confirm({
      title: '确认删除',
      content: '确定要删除这条记录吗？此操作不可撤销。',
      okText: '确认删除',
      cancelText: '取消',
    });

    if (confirmed) {
      Toast({ message: '正在删除...', duration: 1000 });
      await mockApiCall();
      Toast({ message: '删除成功！', color: 'success' });
    }
  };
  // 输入验证 + 异步提交
  const handlePromptAsync = async () => {
    await Dialog.prompt({
      title: '创建用户',
      content: '请输入用户名（3-20个字符）',
      placeholder: '请输入用户名',
      onOk: async (_, { value: username }) => {
        return new Promise(async (resolve) => {
          if (username.length < 3 || username.length > 20) {
            Toast({
              message: '用户名长度必须在3-20个字符之间',
              duration: 1000,
            });
          } else {
            Toast({ message: '正在创建用户...', duration: 1000 });
            await mockApiCall();
            Toast({ message: '创建用户成功', duration: 500 });
            resolve();
          }
        });
      },
      onCancel: async () => {
        await mockApiCall();
      },
    });
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={handleBasicAsync}>调用Dialog返回 Promise</Button>
      <Button onClick={handlePromptAsync}>回调函数传入Promise</Button>
    </Stack>
  );
};
```

## useDialog Hook

使用 `Dialog.useDialog()` 创建可以访问 React Context 的对话框。

### 基础用法

`const [dialog, contextHolder] = Dialog.useDialog();`
使用useDialog Hook的基本方式，创建支持读取 context 的 contextHolder，把contextHolder插入子节点中。通过 hooks 创建的临时 Modal 将会得到 contextHolder 所在位置的所有上下文。dialog拥有与 Dialog.method 相同的创建通知方法。也支持异步操作

```tsx
import { Stack, Button, Dialog, Toast, ThemeProvider } from '@bifrostui/react';
import React from 'react';

export default () => {
  const [dialog, contextHolder] = Dialog.useDialog();

  const showConfirm = async () => {
    const result = await dialog.confirm({
      title: '确认操作',
      content: '请确认是否继续？',
    });
    Toast({ message: result ? '已确认' : '已取消' });
  };

  const showPrompt = async () => {
    const result = await dialog.prompt({
      title: '请输入',
      content: '请输入您的反馈意见',
      placeholder: '请输入内容...',
    });
    if (result) {
      Toast({ message: `您的反馈：${result}` });
    }
  };

  const showAlert = async () => {
    await dialog.alert({
      title: '系统通知',
      content: '您有一条新消息！',
    });
    Toast({ message: '通知已确认' });
  };

  return (
    <ThemeProvider>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={showConfirm}>确认对话框</Button>
        <Button onClick={showPrompt}>输入对话框</Button>
        <Button onClick={showAlert}>警告对话框</Button>
      </Stack>
    </ThemeProvider>
  );
};
```

### 读取自定义Context

演示useDialog Hook的核心优势：能够访问任意自定义的React Context， 弥补了函数调用无法访问上下文的缺点。

```tsx
import { Stack, Button, Dialog, Toast, ThemeProvider } from '@bifrostui/react';
import React, { createContext, useContext, useState } from 'react';

// 创建自定义Context
const UserContext = createContext(null);

const ContextExample = () => {
  const [dialog, contextHolder] = Dialog.useDialog();
  const userContext = useContext(UserContext);

  const showUserInfo = async () => {
    await dialog.alert({
      title: '用户信息',
      content: (
        <div style={{ textAlign: 'left' }}>
          <p>
            <strong>用户名：</strong>
            {userContext.currentUser.name}
          </p>
          <p>
            <strong>角色：</strong>
            {userContext.currentUser.role}
          </p>
          <p>
            <strong>权限：</strong>
            {userContext.permissions.join(', ')}
          </p>
        </div>
      ),
    });
  };

  return (
    <>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={showUserInfo}>显示用户信息</Button>
      </Stack>
    </>
  );
};

export default () => {
  const userState = {
    currentUser: { name: '张三', role: 'admin' },
    permissions: ['read', 'write', 'delete'],
  };

  return (
    <ThemeProvider>
      <UserContext.Provider value={userState}>
        <ContextExample />
      </UserContext.Provider>
    </ThemeProvider>
  );
};
```

## 自定义样式

演示如何通过CSS变量自定义Dialog的外观样式，实现个性化的视觉效果。

```tsx
import { Stack, Button, Dialog, ThemeProvider } from '@bifrostui/react';
import React from 'react';

export default () => {
  const [dialog, contextHolder] = Dialog.useDialog();

  const showCustomStyle = async () => {
    await dialog.confirm({
      title: '自定义样式对话框',
      content: '这是一个自定义样式的对话框示例',
      style: {
        '--bui-dialog-max-width': '400px',
        '--bui-dialog-border-radius': '12px',
      },
    });
  };

  return (
    <ThemeProvider>
      {contextHolder}
      <Button onClick={showCustomStyle}>自定义样式</Button>
    </ThemeProvider>
  );
};
```

## API

### Dialog Props

| 属性        | 说明                             | 类型                                                   | 默认值          |
| ----------- | -------------------------------- | ------------------------------------------------------ | --------------- |
| open        | 是否显示对话框                   | `boolean`                                              | `false`         |
| type        | 对话框类型                       | `'confirm' \| 'prompt' \| 'alert'`                     | `'confirm'`     |
| title       | 对话框标题                       | `ReactNode`                                            | -               |
| content     | 对话框内容                       | `ReactNode`                                            | -               |
| placeholder | 输入框占位文本（仅 prompt 类型） | `string`                                               | -               |
| InputProps  | 透传给内部 Input 组件的属性      | `Partial<InputProps>`                                  | -               |
| okText      | 确认按钮文本                     | `ReactNode`                                            | `'确定'`        |
| cancelText  | 取消按钮文本                     | `ReactNode`                                            | `'取消'`        |
| onOk        | 确认回调                         | `(e: SyntheticEvent, data: { value: string }) => void` | -               |
| onCancel    | 取消回调                         | `(e: SyntheticEvent) => void`                          | -               |
| container   | 渲染容器                         | `HTMLElement \| (() => HTMLElement)`                   | `document.body` |
| theme       | 主题配置                         | `ThemeProps`                                           | -               |

### 静态方法

| 方法               | 说明                             | 参数                       | 返回值                           |
| ------------------ | -------------------------------- | -------------------------- | -------------------------------- |
| Dialog()           | 显示确认对话框                   | `ConfirmOptions \| string` | `Promise<boolean>`               |
| Dialog.confirm()   | 显示确认对话框                   | `ConfirmOptions \| string` | `Promise<boolean>`               |
| Dialog.prompt()    | 显示输入对话框                   | `PromptOptions \| string`  | `Promise<string \| false>`       |
| Dialog.alert()     | 显示警告对话框                   | `AlertOptions \| string`   | `Promise<boolean>`               |
| Dialog.useDialog() | 获取 dialog 实例和 contextHolder | -                          | `[DialogFunction, ReactElement]` |

### 类型定义

```typescript
// 确认对话框选项
type ConfirmOptions = DialogOptions | string;

// 输入对话框选项
type PromptOptions =
  | (DialogOptions & {
      placeholder?: string;
      inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    })
  | string;

// 警告对话框选项
type AlertOptions = DialogOptions | string;

// 基础选项
interface DialogOptions {
  title?: ReactNode;
  content?: ReactNode;
  okText?: ReactNode;
  cancelText?: ReactNode;
  onOk?: (e: SyntheticEvent, data: { value: string }) => void;
  onCancel?: (e: SyntheticEvent) => void;
  // ... 其他 Modal 属性
}
```

## 样式变量

| 变量名                              | 说明           | 默认值                           |
| ----------------------------------- | -------------- | -------------------------------- |
| `--bui-dialog-max-width`            | 对话框最大宽度 | `300px`                          |
| `--bui-dialog-border-radius`        | 对话框圆角     | `var(--bui-shape-radius-drawer)` |
| `--bui-dialog-title-padding`        | 标题内边距     | `0 40px 9px`                     |
| `--bui-dialog-content-padding`      | 内容内边距     | `0 24px`                         |
| `--bui-dialog-actions-margin`       | 操作区域外边距 | `15px 0 0 0`                     |
| `--bui-dialog-button-height`        | 按钮高度       | `53px`                           |
| `--bui-dialog-button-line-height`   | 按钮行高       | `25px`                           |
| `--bui-dialog-button-padding`       | 按钮内边距     | `12px 0 13px`                    |
| `--bui-dialog-button-font-size`     | 按钮字体大小   | `17px`                           |
| `--bui-dialog-button-border-radius` | 按钮圆角       | `4px`                            |
| `--bui-dialog-button-border-left`   | 按钮左边框     | `1px solid rgba(0, 0, 0, 0.05)`  |

## 注意事项

1. **推荐使用 useDialog Hook**：可以访问 React Context，支持主题配置
2. **必须渲染 contextHolder**：使用 useDialog 时必须在组件中渲染返回的 contextHolder
3. **异步操作处理**：onOk 和 onCancel 支持异步函数，可以在其中处理异步逻辑
4. **表单验证**：可以在 onOk 中进行验证，验证失败时不关闭对话框
5. **无障碍支持**：Dialog 组件内置了完整的无障碍访问支持
6. **主题定制**：支持通过 CSS 变量和 theme 属性进行主题定制
