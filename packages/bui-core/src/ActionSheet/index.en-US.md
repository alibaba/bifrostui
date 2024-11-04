---
group:
  title: Basic input
name: ActionSheet
---

# ActionSheet

The action menu panel that pops up from the bottom. Contains multiple options related to the current context, allowing users to complete operations without leaving.

## Code demonstration

### Basic Usage

`ActionSheet`default closed, through `open` attribute to pop out from the bottom and through nesting `ActionSheetItem` rendering for each option.

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

### Cancel button

You can set it up through`cancelText` to add a cancel button at the bottom, clicking it to trigger `onClose` event.

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

### Describe information

By setting `extra` additional descriptive information can be added at the top, displaying only non clickable content

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

### Disable and Dangerous Options

By giving `ActionSheetItem` set up `disabled` to make the option non clickable, set `color` to set the theme of the selection, for example, dangerous operations can be prompted to users with caution through color=danger

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

### Option description information

By giving `ActionSheetItem` set up `description` to add descriptive information for each option as additional supplementary information for that option

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

| attribute  | explain                                                                         | type                                                                   | Default value |
| ---------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------- |
| cancelText | Cancel button content, if set to empty, the cancel button will not be displayed | React.ReactNode                                                        | -             |
| extra      | Additional content display at the top                                           | React.ReactNode                                                        | -             |
| onSelect   | Click to select callback for sub items                                          | (event: React.MouseEvent ,data?: { index: string \| number }) => void; | -             |
| onClose    | Close callback                                                                  | ModalProps['onClose']                                                  | -             |

`ActionSheet`inherited from `Drawer` other attributes can be found in [Drawer API](/cores/drawer?#API)

### ActionSheetItem

| attribute   | explain                   | type                                                                   | Default value |
| ----------- | ------------------------- | ---------------------------------------------------------------------- | ------------- |
| description | Describe the content      | React.ReactNode                                                        | -             |
| disabled    | Do you want to disable it | boolean                                                                | false         |
| color       | colour                    | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `default` | `default`     |
| bold        | Is it bolded              | boolean                                                                | false         |
| index       | Index tags                | string \| number                                                       | -             |
| onClick     | Click to select callback  | (event: React.MouseEvent ,data?: { index: string \| number }) => void; | -             |

## Style variables

| attribute   | explain                          | Default value          |
| ----------- | -------------------------------- | ---------------------- |
| --font-size | Font size of ActionSheetItem     | --bui-title-size-2     |
| --color     | Color of ActionSheetItem Content | --bui-color-fg-default |
