---
group: Feedback
name: SwipeAction
---

# SwipeAction

Commonly used for left-right swipe operations such as delete gestures on cells.

## When to Use

Use swipe actions to display hidden function menus.

## Code Demonstration

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
      text: 'Log in',
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

Use the `closeOnClickContainer` property to control closing by clicking on the main content container.

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

Use the `disabled` property to disable the swipe functionality.

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
          <span>Disable Swipe</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### Event Handling

The component provides an `onActionsReveal` callback, triggered when the action buttons appear.

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

The component instance provides a `show` method for manually opening swipe action buttons and a `close` method for manually closing them.

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
        header={<ListItem disabled>Manual Control Logic</ListItem>}
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
                header: 'Notice',
                message: 'Please choose an action',
                confirmText: 'Open Right Side',
                cancelText: 'Open Left Side',
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
            <ListItemContent primary={<div>Manual Open</div>} />
          </ListItem>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### Use in Combination with Other Components

The component allows you to use it in conjunction with other components based on your business needs. Below is a simple demonstration of using it with the `Image` and `List` components.

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
        header={<ListItem disabled>Use with Image</ListItem>}
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
      text: 'Unfollow',
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
        header={<ListItem disabled>Use with List</ListItem>}
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

### SwipeAction Properties

| Property              | Description                                                     | Type                                | Default |
| --------------------- | --------------------------------------------------------------- | ----------------------------------- | ------- |
| closeOnClickContainer | Whether to automatically return on clicking the main area       | boolean                             | false   |
| leftActions           | List of action buttons on the left (used with SwipeActionItem)  | React.ReactNode                     | -       |
| rightActions          | List of action buttons on the right (used with SwipeActionItem) | React.ReactNode                     | -       |
| onActionsReveal       | Triggered when the button is fully revealed                     | ({side: 'left' \| 'right'}) => void | -       |
| disabled              | Whether to disable swiping                                      | boolean                             | false   |

### SwipeActionItem Properties

| Property | Description        | Type                                                               | Default   |
| -------- | ------------------ | ------------------------------------------------------------------ | --------- |
| color    | Color              | 'info' \| 'success' \| 'warning' \| 'danger' \| 'primary' \| 'vip' | 'primary' |
| onClick  | Triggered on click | (e: React.MouseEvent) => void                                      | -         |

### Ref

| Attribute | Description                                                | Type                                |
| --------- | ---------------------------------------------------------- | ----------------------------------- |
| close     | Return the swipe bar                                       | () => void                          |
| show      | Swipe out action buttons, side parameter defaults to right | ({side?: 'left'\| 'right'}) => void |
| open      | Whether the action button is open                          | false                               |
| ref       | SwipeAction Ref                                            | -                                   |

## Style Variables

| Property                             | Description          | Default           |
| ------------------------------------ | -------------------- | ----------------- |
| --bui-swipe-action-container-padding | Container padding    | 10px              |
| --bui-swipe-action-container-color   | Container text color | --bui-color-black |

```

```
