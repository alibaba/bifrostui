---
group:
  title: 基本输入
name: ActionSheet 动作面板
---

# ActionSheet 动作面板

从底部弹出的动作菜单面板。包含与当前情境相关的多个选项，让用户在不离场的情况下完成操作。

## 代码演示

### 基本用法

`ActionSheet` 默认关闭，通过`open`属性从底部弹出，通过嵌套`ActionSheetItem`完成每个选项的渲染。

```tsx
import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };

  return (
    <Stack>
      <Button onClick={openActionSheet}>基础使用</Button>
      <ActionSheet onClose={closeActionSheet} open={isOpen}>
        <ActionSheetItem>复制</ActionSheetItem>
        <ActionSheetItem>修改</ActionSheetItem>
        <ActionSheetItem>删除</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};
```

### 取消按钮

可以通过设置`cancelText`增加底部取消按钮，点击会触发 `onClose` 事件。

```tsx
import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };

  return (
    <Stack>
      <Button onClick={openActionSheet}>取消按钮</Button>
      <ActionSheet onClose={closeActionSheet} cancelText="取消" open={isOpen}>
        <ActionSheetItem>复制</ActionSheetItem>
        <ActionSheetItem>修改</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};
```

### 描述信息

通过设置`extra` 可以在顶部增加额外的描述信息，仅展示不可点击

```tsx
import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };

  return (
    <Stack>
      <Button onClick={openActionSheet}>额外的描述</Button>
      <ActionSheet
        extra="请选择你要进行的操作"
        onClose={closeActionSheet}
        cancelText="取消"
        open={isOpen}
      >
        <ActionSheetItem>复制</ActionSheetItem>
        <ActionSheetItem>修改</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};
```

### 禁用和危险选项

通过给 `ActionSheetItem` 设置`disabled`可以使该选项不可点击，设置`color`可以设置该选择的主题，例如危险操作通过 color=danger 可以提示用户谨慎操作

```tsx
import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };
  return (
    <Stack>
      <Button onClick={openActionSheet}>禁用和危险按钮</Button>
      <ActionSheet
        onClose={closeActionSheet}
        extra="请选择你要进行的操作"
        open={isOpen}
        cancelText="取消"
      >
        <ActionSheetItem>复制</ActionSheetItem>
        <ActionSheetItem disabled>修改</ActionSheetItem>
        <ActionSheetItem color="danger">删除</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};
```

### 选项描述信息

通过给 `ActionSheetItem` 设置`description`可以增加每个选项的描述信息，作为该选项的额外补充信息

```tsx
import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };
  return (
    <Stack>
      <Button onClick={openActionSheet}>选项描述信息</Button>
      <ActionSheet onClose={closeActionSheet} open={isOpen}>
        <ActionSheetItem>复制</ActionSheetItem>
        <ActionSheetItem disabled>修改</ActionSheetItem>
        <ActionSheetItem color="danger" description="删除后数据不可恢复">
          删除
        </ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};
```

## API

### ActionSheet

| 属性       | 说明                                       | 类型                                                                   | 默认值 |
| ---------- | ------------------------------------------ | ---------------------------------------------------------------------- | ------ |
| cancelText | 取消按钮内容，如果设置为空则不显示取消按钮 | React.ReactNode                                                        | -      |
| extra      | 顶部额外的内容展示                         | React.ReactNode                                                        | -      |
| onSelect   | 子项的点击选择回调                         | (event: React.MouseEvent ,data?: { index: string \| number }) => void; | -      |
| onClose    | 关闭回调                                   | ModalProps['onClose']                                                  | -      |

`ActionSheet` 继承自 `Drawer` 其他属性见 [Drawer API](/cores/drawer?#API)

### ActionSheetItem

| 属性        | 说明         | 类型                                                                   | 默认值    |
| ----------- | ------------ | ---------------------------------------------------------------------- | --------- |
| description | 描述内容     | React.ReactNode                                                        | -         |
| disabled    | 是否禁用     | boolean                                                                | false     |
| color       | 颜色         | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `default` | `default` |
| bold        | 是否加粗     | boolean                                                                | false     |
| index       | 索引标记     | string \| number                                                       | -         |
| onClick     | 点击选择回调 | (event: React.MouseEvent ,data?: { index: string \| number }) => void; | -         |

## 样式变量

| 属性        | 说明                     | 默认值                 |
| ----------- | ------------------------ | ---------------------- |
| --font-size | ActionSheetItem 字体大小 | --bui-title-size-2     |
| --color     | ActionSheetItem 内容颜色 | --bui-color-fg-default |
