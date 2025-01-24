---
group: Feedback
name: SwipeAction
---

# SwipeAction

Commonly used for gestures such as swipe-to-delete.

## When to Use

Use to reveal hidden menu functions through swipe actions.

## Code Examples

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
          <span>Swipe right</span>
        </SwipeAction>
        <Divider direction="horizontal" />
        <SwipeAction
          rightActions={rightActions.map((item) => (
            <SwipeActionItem color={item.color} key={item.key} id={item.key}>
              {item.text}
            </SwipeActionItem>
          ))}
        >
          <span>Swipe left</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### Click to Close

Use the `closeOnClickContainer` property to control when to close by clicking on the main content container.

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
          <span>Click the main content to close</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### Disable Swipe

Use the `disabled` property to disable the swipe function.

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
          <span>Swipe disabled</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### Event Handling

The component provides an `onActionsReveal` callback triggered when action buttons appear.

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
      text: 'Set',
      color: 'success',
      onClick: () => {
        Toast({ message: 'Setting clicked' });
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
              message:
                data.side === 'left' ? 'Left side open' : 'Right side open',
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

The component instance provides a `show` method to manually open the swipe action buttons, and a `close` method to manually close the swipe action buttons.

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
          message: 'Do you want to pin?',
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
        await dialog.confirm({
          message: 'Do you want to delete?',
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
        header={<ListItem disabled>Manual Control for Reset Logic</ListItem>}
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
            onClick={async () => {
              const res = await Dialog({
                header: 'Notice',
                message: 'Please choose an action',
                confirmText: 'Open Right',
                cancelText: 'Open Left',
              });
              if (res) {
                swipeActionRef.current?.show('right');
              } else {
                swipeActionRef.current?.show('left');
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

### Using with Other Components

This component allows for integration with other components as per your business needs. Below is a simple demonstration of its use with the `Image` and `List` components.

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
      text: 'Unsubscribe',
      color: 'warning',
    },
    {
      key: 'mute',
      text: 'Mute',
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
            leftActions={leftActions.map((action) => {
              return (
                <SwipeActionItem
                  color={action.color}
                  key={action.key}
                  id={action.key}
                >
                  {action.text}
                </SwipeActionItem>
              );
            })}
            rightActions={rightActions.map((action) => {
              return (
                <SwipeActionItem
                  color={action.color}
                  key={action.key}
                  id={action.key}
                >
                  {action.text}
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

| Property               | Description                                             | Type                                | Default |
| ---------------------- | ------------------------------------------------------- | ----------------------------------- | ------- |
| closeOnClickActionItem | Automatically reset when the action button is clicked   | boolean                             | true    |
| closeOnClickContainer  | Automatically reset when the main area is clicked       | boolean                             | false   |
| leftActions            | List of left action buttons (use with SwipeActionItem)  | React.ReactNode                     | -       |
| rightActions           | List of right action buttons (use with SwipeActionItem) | React.ReactNode                     | -       |
| onActionsReveal        | Triggered when the button is fully revealed             | ({side: 'left' \| 'right'}) => void | -       |
| disabled               | Disable swipe                                           | boolean                             | false   |

### SwipeActionItem Props

| Property | Description      | Type                                                      | Default   |
| -------- | ---------------- | --------------------------------------------------------- | --------- |
| color    | Color            | 'info' \| 'success' \| 'warning' \| 'danger' \| 'primary' | 'primary' |
| onClick  | Trigger on click | (e: React.MouseEvent) => void                             | -         |

### Ref

| Property | Description                                                   | Type                              |
| -------- | ------------------------------------------------------------- | --------------------------------- |
| close    | Reset the swipe bar                                           | () => void                        |
| show     | Swipe out the action button, side parameter defaults to right | (side?: 'left'\| 'right') => void |

## CSS Variables

| Property                             | Description       | Default | Global Variable                      |
| ------------------------------------ | ----------------- | ------- | ------------------------------------ |
| --bui-swipe-action-container-padding | Container padding | 10px    | --bui-swipe-action-container-padding |
