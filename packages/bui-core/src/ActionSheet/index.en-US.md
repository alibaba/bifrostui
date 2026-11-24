---
group:
  title: Basic Input
name: ActionSheet
---

# ActionSheet

A panel of actions that slides up from the bottom, containing multiple options related to the current context, allowing users to perform actions without navigating away.

## Basic Usage

`ActionSheet` is closed by default and can be displayed from the bottom using the `open` property. Render each option by nesting `ActionSheetItem`.

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

## Cancel Button

You can add a cancel button at the bottom by setting the `cancelText`, which triggers the `onClose` event when clicked.

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

## Description

By setting `extra`, you can add an extra description at the top. This is displayed as non-clickable information.

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
        extra="Please select the action you want to perform"
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

## Disabled and Dangerous Options

You can make an option non-clickable by setting `disabled` on `ActionSheetItem`. To indicate dangerous operations, you can set the theme using `color`, such as setting color=danger to alert users to proceed with caution.

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
        extra="Please select the action you want to perform"
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

## Option Description

You can add a description for each option as supplementary information by setting `description` on `ActionSheetItem`.

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
      <Button onClick={openActionSheet}>Option Description</Button>
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

| Property   | Description                                       | Type                                                                  | Default |
| ---------- | ------------------------------------------------- | --------------------------------------------------------------------- | ------- |
| cancelText | Content of the cancel button; if empty, not shown | React.ReactNode                                                       | -       |
| extra      | Additional content displayed at the top           | React.ReactNode                                                       | -       |
| onSelect   | Callback when an item is clicked                  | (event: React.MouseEvent, data?: { index: string \| number }) => void | -       |
| onClose    | Close callback                                    | ModalProps['onClose']                                                 | -       |

`ActionSheet` inherits from `Drawer`. Other properties can be found in the [Drawer API](/cores/drawer?#api).

### ActionSheetItem

| Property    | Description                    | Type                                                                   | Default   |
| ----------- | ------------------------------ | ---------------------------------------------------------------------- | --------- |
| description | Description content            | React.ReactNode                                                        | -         |
| disabled    | Whether the option is disabled | boolean                                                                | false     |
| color       | Theme color                    | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `neutral` | `neutral` |
| bold        | Whether to use bold text       | boolean                                                                | false     |
| index       | Index marker                   | string \| number                                                       | -         |
| onClick     | Click callback                 | (event: React.MouseEvent, data?: { index: string \| number }) => void  | -         |

## Style Variables

| Global Variable                                 | Description                     | Default                       |
| ----------------------------------------------- | ------------------------------- | ----------------------------- |
| --bui-action-sheet-extra-line-height            | Line height of extra content    | `23px`                        |
| --bui-action-sheet-extra-padding                | Padding of extra content        | `var(--bui-spacing-xl)`       |
| --bui-action-sheet-extra-margin                 | Margin of extra content         | `0 var(--bui-spacing-xl)`     |
| --bui-action-sheet-item-padding                 | Padding of options              | `var(--bui-spacing-xl)`       |
| --bui-action-sheet-item-font-size               | Font size of options            | `var(--bui-title-size-2)`     |
| --bui-action-sheet-item-line-height             | Line height of options          | `24px`                        |
| --bui-action-sheet-item-color                   | Color of options                | `var(--bui-color-fg-default)` |
| --bui-action-sheet-item-margin                  | Margin of options               | `0 var(--bui-spacing-xl)`     |
| --bui-action-sheet-item-description-line-height | Line height of description text | `19px`                        |

```

```
