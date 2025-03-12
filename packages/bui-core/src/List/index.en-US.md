---
group: Data Display
name: List Component
---

# List Component

A list is a set of continuous text or images, composed of items with primary actions and supplementary actions, commonly used for data display.

## Code Demos

### Basic Usage

The most basic list display, which can carry text, images, paragraphs, etc.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>Recycle Bin</div>} />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary={<div>Settings</div>}
              secondary={<div>Volume Settings</div>}
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

The List component provides the `ListItem` component to hold list items.
The `ListItem` component is divided into 4 areas: `ListItemHeader`, `ListItemContent`, `ListItemExtra`, and `ListItemFooter`.

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemExtra,
  ListItemFooter,
  ListItemHeader,
  Stack,
  Switch,
} from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';
import React, { useState } from 'react';

export default () => {
  const [check, setCheck] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <PhoneFilledIcon />
            </ListItemHeader>
            <ListItemContent primary={<div>Airplane Mode</div>} />
            <ListItemFooter>{check ? 'Airplane Mode On' : ''}</ListItemFooter>
            <ListItemExtra
              onClick={(e) => {
                setCheck(!check);
              }}
            >
              <Switch color="primary" checked={check} />
            </ListItemExtra>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Clickable State

The List component provides a `disabled` property to control whether the list item is clickable.
You can pass `disabled` through the `ListItem` component to individually disable clicking on list items.

```tsx
import {
  Alert,
  List,
  ListItem,
  ListItemContent,
  Stack,
} from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        {isOpen && <Alert>Recycle Bin Cleared Successfully</Alert>}
        <List style={{ width: '100%' }}>
          <ListItem
            disabled
            onClick={(e) => {
              setOpen(true);
              setTimeout(() => {
                setOpen(false);
              }, 1000);
            }}
          >
            <ListItemContent
              primary={
                <div
                  onClick={() => {
                    setOpen(true);
                    setTimeout(() => {
                      setOpen(false);
                    }, 1000);
                  }}
                >
                  Recycle Bin
                </div>
              }
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              setOpen(true);
              setTimeout(() => {
                setOpen(false);
              }, 1000);
            }}
          >
            <ListItemContent
              primary={<div>Settings</div>}
              secondary={<div>Clear Recycle Bin</div>}
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Setting the List Header

The List component allows setting the list header using `header` and `subheader`.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List
          header={<div>System</div>}
          subheader={<div>System Settings</div>}
          style={{ width: '100%' }}
        >
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>Theme Settings</div>} />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>Volume Settings</div>} />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Setting the Left Operation Area of List Items

The List component provides the `ListItemHeader` child component to customize the left operation area of list items, commonly used for customizing icons.

```tsx
import React from 'react';
import {
  List,
  ListItem,
  ListItemContent,
  ListItemHeader,
  Stack,
} from '@bifrostui/react';
import { LocationFilledIcon, PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <PhoneFilledIcon />
            </ListItemHeader>
            <ListItemContent>Phone</ListItemContent>
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <LocationFilledIcon />
            </ListItemHeader>
            <ListItemContent>Address</ListItemContent>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Setting the Content Area of List Items

The List component provides the `ListItemContent` child component to customize the content area of list items.
You can use the `primary` and `secondary` properties to set the main and secondary content areas.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="Settings" secondary="System Settings" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Setting the Footer Area of List Items

The List component provides the `ListItemFooter` child component to customize the footer area of list items.

```tsx
import {
  Avatar,
  List,
  ListItem,
  ListItemContent,
  ListItemFooter,
  Stack,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent>Avatar</ListItemContent>
            <ListItemFooter>
              <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
            </ListItemFooter>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Setting the Right Operation Area of List Items

The List component provides the `ListItemExtra` child component to customize the right operation area of list items.
The `ListItemExtra` component can be used to configure switches or to individually control list items.

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemExtra,
  Stack,
  Switch,
} from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [check, setCheck] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem>
            <ListItemContent
              primary={<div>Show Watchlist on Youku</div>}
              secondary={
                <div>You will be notified when videos are available online</div>
              }
            />
            <ListItemExtra
              onClick={(e) => {
                setCheck(!check);
              }}
            >
              <Switch color="primary" checked={check} />
            </ListItemExtra>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Divider

The List component has dividers between items by default. You can customize divider properties using the `dividerProp` attribute.
You can also hide dividers using `hideDivider`.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="Bluetooth and Device Connections"
              secondary="NFC, Screen Projection, Tap-to-Pay"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="Display"
              secondary="Status Bar, Always-On Display"
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List hideDivider style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="Bluetooth and Device Connections"
              secondary="NFC, Screen Projection, Tap-to-Pay"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="Display"
              secondary="Status Bar, Always-On Display"
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Setting Size

The List component offers three sizes: `small`, `medium`, and `large`. You can customize the size using the `size` property.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}
      spacing="20px"
    >
      <Stack style={{ width: '350px' }}>
        <div>Default Size (medium):</div>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>System</div>} />
          </ListItem>
        </List>
        <div>Small Size (small):</div>
        <List size="small" style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>System</div>} />
          </ListItem>
        </List>
        <div>Large Size (large):</div>
        <List size="large" style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>System</div>} />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### API

#### ListProps

| Property    | Description       | Type                       | Default  |
| ----------- | ----------------- | -------------------------- | -------- |
| header      | Header content    | ReactNode                  | -        |
| subheader   | Subheader content | ReactNode                  | -        |
| hideDivider | Hide divider      | boolean                    | false    |
| size        | List size         | `small`｜`medium`｜`large` | `medium` |
| component   | List node tag     | React.ElementType          | -        |

#### ListItemProps

| Property    | Description          | Type                | Default |
| ----------- | -------------------- | ------------------- | ------- |
| endIcon     | Right operation icon | ReactNode ｜boolean | -       |
| disabled    | Disable clicking     | boolean             | false   |
| hideDivider | Hide divider         | boolean             | false   |
| component   | Root node tag        | React.ElementType   | -       |

#### ListItemContentProps

| Property  | Description       | Type              | Default |
| --------- | ----------------- | ----------------- | ------- |
| primary   | Main content      | ReactNode         | -       |
| secondary | Secondary content | ReactNode         | -       |
| component | Root node tag     | React.ElementType | -       |

#### ListItemHeaderProps, ListItemFooterProps, ListItemExtraProps

| Property  | Description   | Type              | Default |
| --------- | ------------- | ----------------- | ------- |
| component | Root node tag | React.ElementType | -       |

### Style Variables

| Property              | Description         | Default Value | Global Variable                |
| --------------------- | ------------------- | ------------- | ------------------------------ |
| --small-item-padding  | Small item padding  | 5px 12px      | --bui-list-small-item-padding  |
| --medium-item-padding | Medium item padding | 18px 12px     | --bui-list-medium-item-padding |
| --large-item-padding  | Large item padding  | 20px 12px     | --bui-list-large-item-padding  |
