---
group:
  title: Basic input
name: ActionSheet Action Panel
---

# ActionSheet Action Panel

The action menu panel that pops up from the bottom. Contains multiple options related to the current context, allowing users to complete operations without leaving.

## Code demonstration

### Basic Usage

ActionSheet 'is turned off by default and pops up from the bottom through the' open 'property. Each option is rendered by nesting' ActionSheetItem '.

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

You can add a bottom cancel button by setting 'cancelText', and clicking it will trigger the 'onClose' event.

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

By setting 'extra', additional descriptive information can be added at the top, displaying only non clickable information

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

By setting 'disabled' to 'ActionSheetItem', the option can be made non clickable, and setting 'color' can set the theme of the selection. For example, dangerous operations can be prompted to the user to operate with caution through color=danger

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

By setting 'description' to 'ActionSheetItem', the description information of each option can be added as additional supplementary information for that option

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

| attribute  | explain                                                                         | type                                                                  | Default value |
| ---------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------- |
| cancelText | Cancel button content, if set to empty, the cancel button will not be displayed | React.ReactNode                                                       | -             |
| extra      | Additional content display at the top                                           | React.ReactNode                                                       | -             |
| onSelect   | Click to select callback for sub items                                          | (event: React.MouseEvent ,data?: { index: string \|number }) => void; | -             |
| onClose    | Close callback                                                                  | ModalProps['onClose']                                                 | -             |

ActionSheet inherits from Drawer. Other properties can be found in the Drawer API (/cores/Drawer? # API)

### ActionSheetItem

| attribute   | explain                   | type                                                                  | Default value |
| ----------- | ------------------------- | --------------------------------------------------------------------- | ------------- |
| description | Describe the content      | React.ReactNode                                                       | -             |
| disabled    | Do you want to disable it | boolean                                                               | false         |
| color       | colour                    | `primary` \|`info` \|`success` \|`warning` \|`danger` \|`default`     | `default`     |
| bold        | Is it bolded              | boolean                                                               | false         |
| index       | Index tags                | string \|number                                                       | -             |
| onClick     | Click to select callback  | (event: React.MouseEvent ,data?: { index: string \|number }) => void; | -             |

## Style variables

### ActionSheet

| attribute           | explain                            | Default value      | global variable                      |
| ------------------- | ---------------------------------- | ------------------ | ------------------------------------ |
| --extra-line-height | Top additional content line height | 23px               | --bui-action-sheet-extra-line-height |
| --extra-padding     | Top additional content margin      | --bui-spacing-xl   | --bui-action-sheet-extra-padding     |
| --extra-margin      | Top additional content margin      | 0 --bui-spacing-xl | --bui-action-sheet-extra-margin      |

### ActionSheetItem

| attribute                 | explain                               | Default value          | global variable                                 |
| ------------------------- | ------------------------------------- | ---------------------- | ----------------------------------------------- |
| --padding                 | Sub item margin                       | --bui-spacing-xl       | --bui-action-sheet-item-padding                 |
| --font-size               | Subitem font size                     | --bui-title-size-2     | --bui-action-sheet-item-font-size               |
| --line-height             | Subitem font line height              | 24px                   | --bui-action-sheet-item-line-height             |
| --color                   | Sub item font color                   | --bui-color-fg-default | --bui-action-sheet-item-color                   |
| --margin                  | Subitem font                          | 0 --bui-spacing-xl     | --bui-action-sheet-item-margin                  |
| --description-line-height | Sub item description text line height | 19px                   | --bui-action-sheet-item-description-line-height |
