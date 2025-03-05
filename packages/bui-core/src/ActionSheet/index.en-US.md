---
group:
  title: Basic Input
name: ActionSheet Action Panel
---

# ActionSheet Action Panel

An action menu panel that pops up from the bottom. It includes multiple options related to the current context, allowing users to complete operations without leaving the scene.

## Code Demos

### Basic Usage

The `ActionSheet` is closed by default and can be opened from the bottom using the `open` property. Each option is rendered by nesting `ActionSheetItem`.

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
      <Button onClick={openActionSheet}>Basic Usage</Button>
      <ActionSheet onClose={closeActionSheet} open={isOpen}>
        <ActionSheetItem>Copy</ActionSheetItem>
        <ActionSheetItem>Edit</ActionSheetItem>
        <ActionSheetItem>Delete</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};
```

### Cancel Button

You can add a cancel button at the bottom by setting the `cancelText`. Clicking it will trigger the `onClose` event.

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
      <Button onClick={openActionSheet}>Cancel Button</Button>
      <ActionSheet onClose={closeActionSheet} cancelText="Cancel" open={isOpen}>
        <ActionSheetItem>Copy</ActionSheetItem>
        <ActionSheetItem>Edit</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};
```

### Description Information

By setting `extra`, you can add additional descriptive information at the top, which is only for display and not clickable.

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
      <Button onClick={openActionSheet}>Additional Description</Button>
      <ActionSheet
        extra="Please select the operation you want to perform"
        onClose={closeActionSheet}
        cancelText="Cancel"
        open={isOpen}
      >
        <ActionSheetItem>Copy</ActionSheetItem>
        <ActionSheetItem>Edit</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};
```

### Disabled and Dangerous Options

By setting `disabled` on `ActionSheetItem`, you can make an option unclickable. Setting `color` can change the theme of the option; for example, using `color=danger` can alert users to proceed with caution for dangerous operations.

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
      <Button onClick={openActionSheet}>Disabled and Dangerous Buttons</Button>
      <ActionSheet
        onClose={closeActionSheet}
        extra="Please select the operation you want to perform"
        open={isOpen}
        cancelText="Cancel"
      >
        <ActionSheetItem>Copy</ActionSheetItem>
        <ActionSheetItem disabled>Edit</ActionSheetItem>
        <ActionSheetItem color="danger">Delete</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};
```

### Option Description Information

By setting `description` on `ActionSheetItem`, you can add descriptive information for each option as supplementary details.

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
      <Button onClick={openActionSheet}>Option Description Information</Button>
      <ActionSheet onClose={closeActionSheet} open={isOpen}>
        <ActionSheetItem>Copy</ActionSheetItem>
        <ActionSheetItem disabled>Edit</ActionSheetItem>
        <ActionSheetItem
          color="danger"
          description="Data cannot be recovered after deletion"
        >
          Delete
        </ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};
```

## API

### ActionSheet

| Property   | Description                                                                          | Type                                                                   | Default |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ------- |
| cancelText | Content of the cancel button; if set to empty, it does not display the cancel button | React.ReactNode                                                        | -       |
| extra      | Extra content displayed at the top                                                   | React.ReactNode                                                        | -       |
| onSelect   | Callback for item selection                                                          | (event: React.MouseEvent ,data?: { index: string \| number }) => void; | -       |
| onClose    | Callback when closing                                                                | ModalProps['onClose']                                                  | -       |

`ActionSheet` inherits from `Drawer`; see other properties in the [Drawer API](/cores/drawer?#API)

### ActionSheetItem

| Property    | Description        | Type                                                                   | Default   |
| ----------- | ------------------ | ---------------------------------------------------------------------- | --------- |
| description | Description text   | React.ReactNode                                                        | -         |
| disabled    | Whether disabled   | boolean                                                                | false     |
| color       | Color              | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `default` | `default` |
| bold        | Whether bold       | boolean                                                                | false     |
| index       | Index marker       | string \| number                                                       | -         |
| onClick     | Selection callback | (event: React.MouseEvent ,data?: { index: string \| number }) => void; | -         |

## Style Variables

### ActionSheet

| Property            | Description                             | Default Value      | Global Variable                      |
| ------------------- | --------------------------------------- | ------------------ | ------------------------------------ |
| --extra-line-height | Line height of extra content at the top | 23px               | --bui-action-sheet-extra-line-height |
| --extra-padding     | Padding of extra content at the top     | --bui-spacing-xl   | --bui-action-sheet-extra-padding     |
| --extra-margin      | Margin of extra content at the top      | 0 --bui-spacing-xl | --bui-action-sheet-extra-margin      |

### ActionSheetItem

| Property                  | Description             | Default Value          | Global Variable                                 |
| ------------------------- | ----------------------- | ---------------------- | ----------------------------------------------- |
| --padding                 | Item padding            | --bui-spacing-xl       | --bui-action-sheet-item-padding                 |
| --font-size               | Item font size          | --bui-title-size-2     | --bui-action-sheet-item-font-size               |
| --line-height             | Item line height        | 24px                   | --bui-action-sheet-item-line-height             |
| --color                   | Item font color         | --bui-color-fg-default | --bui-action-sheet-item-color                   |
| --margin                  | Item margin             | 0 --bui-spacing-xl     | --bui-action-sheet-item-margin                  |
| --description-line-height | Description line height | 19px                   | --bui-action-sheet-item-description-line-height |
