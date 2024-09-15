---
group: 反馈
name: Dialog 对话框
---

# Dialog 对话框

用于重要信息的告知或操作的反馈。

## 代码演示

### 确认框

使用`Dialog.confirm`来展示确认框，返回值为`Promise<boolean>`。

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickConfirm = async () => {
    const res = await Dialog.confirm({
      header: '标题',
      desc: '这是描述内容',
    });
    res && Toast('返回为true');
    res || Toast('返回为false');
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={handleClickConfirm}>Confirm</Button>
    </Stack>
  );
};
```

### 提示对话框

使用`Dialog.prompt`来展示提示对话框，返回值为`Promise<string | boolean>`。

```tsx
import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickPrompt = async () => {
    const res = await Dialog.prompt({
      header: '标题',
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
