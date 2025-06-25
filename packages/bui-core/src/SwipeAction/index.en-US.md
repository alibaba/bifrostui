---
group: Feedback
name: SwipeAction Swipe Action
---

# SwipeAction Swipe Action

Commonly used for gestures such as deleting cells by swiping left or right.

## When to Use

Use swipe actions to display hidden function menus.

## Code Demo

### Basic Usage

```tsx
import {
  SwipeAction,
  Stack,
  List,
  Divider,
  ListItem,
  SwipeActionItem,
} from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const leftActions = [
    {
      key: 'delete-left',
      text: 'Delete',
      color: 'danger',
    },
  ];
  const rightActions = [
    {
      key: 'delete-right',
      color: 'info',
      text: 'Login',
    },
  ];

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>Basic Usage</ListItem>}
      >
        <SwipeAction
          leftActions={leftActions.map((item) => (
            <SwipeActionItem color={item.color} key={item.key} id={item.key}>
              {item.text}
            </SwipeActionItem>
          ))}
        >
          <span>Swipe Right</span>
        </SwipeAction>
        <Divider direction="horizontal" />
        <SwipeAction
          rightActions={rightActions.map((item) => (
            <SwipeActionItem color={item.color} key={item.key} id={item.key}>
              {item.text}
            </SwipeActionItem>
          ))}
        >
          <span>Swipe Left</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### Click to Close

Control closing by clicking the main content container using the `closeOnClickContainer` attribute.

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  SwipeActionItem,
} from '@bifrostui/react';
import { DeleteOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const rightActions = [
    {
      key: 'delete-left',
      text: 'Delete',
      color: 'danger',
    },
  ];

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>Click to Close</ListItem>}
      >
        <SwipeAction
          closeOnClickContainer
          rightActions={rightActions.map((item) => (
            <SwipeActionItem color={item.color} key={item.key} id={item.key}>
              <DeleteOutlinedIcon size="large" />
              {item.text}
            </SwipeActionItem>
          ))}
        >
          <span>Clicking the main content will close it</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### Disable Swipe

Disable swipe functionality using the `disabled` attribute.

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  SwipeActionItem,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const rightActions = [
    {
      key: 'delete-left',
      text: 'Delete',
      color: 'danger',
    },
  ];

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>Disable Swipe</ListItem>}
      >
        <SwipeAction
          disabled
          rightActions={rightActions.map((item) => (
            <SwipeActionItem color={item.color} key={item.key} id={item.key}>
              {item.text}
            </SwipeActionItem>
          ))}
        >
          <span>Swipe Disabled</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### Event Handling

The component provides an `onActionsReveal` callback that triggers when action buttons appear.

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  Toast,
  Dialog,
  SwipeActionItem,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const leftActions = [
    {
      key: 'pin',
      text: 'Pin',
      color: 'info',
    },
  ];
  const rightActions = [
    {
      key: 'right-delete',
      text: 'Delete',
      color: 'danger',
      onClick: () => {
        Toast({ message: 'Delete clicked' });
      },
    },
    {
      key: 'right-setting',
      text: 'Settings',
      color: 'success',
      onClick: () => {
        Toast({ message: 'Settings clicked' });
      },
    },
  ];

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>Event Handling</ListItem>}
      >
        <SwipeAction
          rightActions={rightActions.map((item) => {
            return (
              <SwipeActionItem
                color={item.color}
                key={item.key}
                id={item.key}
                onClick={() => {
                  item.onClick?.();
                }}
              >
                {item.text}
              </SwipeActionItem>
            );
          })}
          onActionsReveal={(data) => {
            Toast({
              message: data.side === 'left' ? 'Left opened' : 'Right opened',
            });
          }}
          leftActions={leftActions.map((item) => {
            return (
              <SwipeActionItem
                color={item.color}
                key={item.key}
                id={item.key}
                onClick={(e, data) => {
                  console.log(data);
                  Toast({ message: 'Pin clicked' });
                }}
              >
                {item.text}
              </SwipeActionItem>
            );
          })}
        >
          <span>Swipe</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### Custom Event Handling

The component instance provides a `show` method to manually open swipe action buttons and a `close` method to manually close them.

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  ListItemContent,
  Dialog,
  Toast,
  SwipeActionItem,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  let swipeActionRef = React.createRef<SwipeAction>();
  const [dialog, contextHolder] = Dialog.useDialog();
  const leftActions = [
    {
      key: 'pin',
      text: 'Pin',
      color: 'info',
      onClick: () => {
        dialog.confirm({
          message: 'Are you sure you want to pin?',
          onConfirm: async () => {
            swipeActionRef.current?.close();
          },
        });
      },
    },
  ];
  const rightActions = [
    {
      key: 'delete',
      text: 'Delete',
      color: 'danger',
      onClick: async () => {
        const res = await dialog.confirm({
          message: 'Are you sure you want to delete?',
          onConfirm: async () => {
            swipeActionRef.current?.close();
          },
        });
      },
    },
  ];

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>Manual Control of Reset Logic</ListItem>}
      >
        <SwipeAction
          style={{ '--bui-swipe-action-container-padding': '0px' }}
          disabled
          ref={swipeActionRef}
          closeOnClickActionItem={false}
          leftActions={leftActions.map((item) => {
            return (
              <SwipeActionItem
                color={item.color}
                key={item.key}
                id={item.key}
                onClick={() => {
                  item.onClick();
                }}
              >
                {item.text}
              </SwipeActionItem>
            );
          })}
          rightActions={rightActions.map((item) => {
            return (
              <SwipeActionItem
                color={item.color}
                key={item.key}
                id={item.key}
                onClick={() => {
                  item.onClick();
                }}
              >
                {item.text}
              </SwipeActionItem>
            );
          })}
        >
          <ListItem
            onClick={async (e) => {
              const res = await Dialog({
                header: 'Prompt',
                message: 'Please select an action',
                confirmText: 'Open Right',
                cancelText: 'Open Left',
              });
              if (res) {
                swipeActionRef.current?.show({
                  side: 'right',
                });
              } else {
                swipeActionRef.current?.show({
                  side: 'left',
                });
              }
            }}
          >
            <ListItemContent primary={<div>Manually Open</div>} />
          </ListItem>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### Combination with Other Components

This component allows you to pair it with other components based on your business needs. Below is a simple demonstration of using it with the `Image` and `List` components.

#### Using with `Image` Component

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  Image,
  SwipeActionItem,
} from '@bifrostui/react';
import { DeleteOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const rightActions = [
    {
      key: 'delete-left',
      text: 'Delete',
      color: 'danger',
    },
  ];
  const src =
    'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>Using with Image</ListItem>}
      >
        <SwipeAction
          style={{ '--bui-swipe-action-container-padding': '0px' }}
          rightActions={rightActions.map((item) => {
            return (
              <SwipeActionItem color={item.color} key={item.key} id={item.key}>
                <DeleteOutlinedIcon size="large" />
                {item.text}
              </SwipeActionItem>
            );
          })}
        >
          <Image width={200} height={200} src={src} />
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

#### Using with `List` Component

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  ListItemContent,
  Divider,
  SwipeActionItem,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const leftActions = [
    {
      key: 'pin',
      text: 'Pin',
      color: 'info',
    },
  ];
  const rightActions = [
    {
      key: 'unsubscribe',
      text: 'Subscribe',
      color: 'warning',
    },
    {
      key: 'mute',
      text: 'Confirm',
      color: 'success',
    },
  ];
  const items = ['A', 'B'];
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>Using with List</ListItem>}
      >
        {items.map((item) => (
          <SwipeAction
            style={{ '--bui-swipe-action-container-padding': '0px' }}
            key={item}
            leftActions={leftActions.map((item) => {
              return (
                <SwipeActionItem
                  color={item.color}
                  key={item.key}
                  id={item.key}
                >
                  {item.text}
                </SwipeActionItem>
              );
            })}
            rightActions={rightActions.map((item) => {
              return (
                <SwipeActionItem
                  color={item.color}
                  key={item.key}
                  id={item.key}
                >
                  {item.text}
                </SwipeActionItem>
              );
            })}
          >
            <ListItem>{item}</ListItem>
            <Divider direction="horizontal" />
          </SwipeAction>
        ))}
      </List>
    </Stack>
  );
};
```

## API

### SwipeAction Props

| Property              | Description                                                | Type                                | Default |
| --------------------- | ---------------------------------------------------------- | ----------------------------------- | ------- |
| closeOnClickContainer | Whether to automatically reset when clicking the main area | boolean                             | false   |
| leftActions           | List of left action buttons (used with SwipeActionItem)    | React.ReactNode                     | -       |
| rightActions          | List of right action buttons (used with SwipeActionItem)   | React.ReactNode                     | -       |
| onActionsReveal       | Triggered when buttons are fully revealed                  | ({side: 'left' \| 'right'}) => void | -       |
| disabled              | Whether to disable swipe                                   | boolean                             | false   |

### SwipeActionItem Props

| Property | Description        | Type                                                               | Default   |
| -------- | ------------------ | ------------------------------------------------------------------ | --------- |
| color    | Color              | 'info' \| 'success' \| 'warning' \| 'danger' \| 'primary' \| 'vip' | 'primary' |
| onClick  | Triggered on click | (e: React.MouseEvent) => void                                      | -         |

### Ref

| Property | Description                                           | Type                                |
| -------- | ----------------------------------------------------- | ----------------------------------- |
| close    | Reset the swipe bar                                   | () => void                          |
| show     | Show action buttons, side parameter defaults to right | ({side?: 'left'\| 'right'}) => void |
| open     | Whether action buttons are open                       | false                               |
| ref      | SwipeAction's Ref                                     | -                                   |

## Style Variables

| Attribute                            | Description             | Default Value     |
| ------------------------------------ | ----------------------- | ----------------- |
| --bui-swipe-action-container-padding | Container padding       | 10px              |
| --bui-swipe-action-container-color   | Text color in container | --bui-color-black |
