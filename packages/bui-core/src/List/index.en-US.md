---
group: Data Display
name: List Component
---

# List Component

A list is a group of consecutive text or images, consisting of items with primary and supplementary actions, commonly used for data display.

## Basic Usage

The most basic list display, suitable for carrying text, images, paragraphs, etc.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import * as React from 'react';

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

The list component provides the `ListItem` component to carry list items.
`ListItem` is divided into 4 areas: `ListItemHeader`, `ListItemContent`, `ListItemExtra`, and `ListItemFooter`.

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
            <ListItemContent primary={<div>Flight Mode</div>} />
            <ListItemFooter>
              {check ? 'Flight Mode Enabled' : ''}
            </ListItemFooter>
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

The list component provides the `disabled` property to control the clickable state of the list.
You can use the `ListItem` component to pass `disabled` and individually control items to be non-clickable.

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
        {isOpen && <Alert>Successfully cleared recycle bin</Alert>}
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

### Set List Header

The list component can set the list header through `header` and `subheader`.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import * as React from 'react';

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

### Set Left Action Area of List Items

The list component provides the `ListItemHeader` sub-component to customize the left action area of list items, commonly used for customizing icons in the header of list items.

```tsx
import * as React from 'react';
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

### Set Content Area of List Items

The list component provides the `ListItemContent` sub-component to customize the content area of list items.
You can set the primary and secondary content areas of list items using the `primary` and `secondary` properties.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import * as React from 'react';

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

### Set Footer Area of List Items

The list component provides the `ListItemFooter` sub-component to customize the footer area of list items.

```tsx
import {
  Avatar,
  List,
  ListItem,
  ListItemContent,
  ListItemFooter,
  Stack,
} from '@bifrostui/react';
import * as React from 'react';

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

### Set Right Action Area of List Items

The list component provides the `ListItemExtra` sub-component to customize the right action area of list items.
The `ListItemExtra` can be used to configure switches and individually control list items.

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
              primary={<div>Show "Want to Watch" records on Youku</div>}
              secondary={
                <div>
                  You will be notified when the movie is available for streaming
                </div>
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

The list component has a default divider between items. You can pass divider component properties through the `dividerProp` attribute.
You can also hide the divider using `hideDivider`.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import * as React from 'react';

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
              primary="Bluetooth and Device Connection"
              secondary="NFC, Screen Casting, Tap to Pay"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="Display"
              secondary="Status Bar, Off-Screen Display"
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
import * as React from 'react';

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
              primary="Bluetooth and Device Connection"
              secondary="NFC, Screen Casting, Tap to Pay"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="Display"
              secondary="Status Bar, Off-Screen Display"
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Set Size

The list component offers three sizes: `small`, `medium`, and `large`. You can customize these sizes using the `size` attribute.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}
      spacing="20px"
    >
      <Stack style={{ width: '350px' }}>
        <div> Default size (medium):</div>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>System</div>} />
          </ListItem>
        </List>
        <div>Small size:</div>
        <List size="small" style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>System</div>} />
          </ListItem>
        </List>
        <div>Large size:</div>
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

| Property    | Description     | Type                       | Default  |
| ----------- | --------------- | -------------------------- | -------- |
| header      | List header     | ReactNode                  | -        |
| subheader   | List sub-header | ReactNode                  | -        |
| hideDivider | Hide divider    | boolean                    | false    |
| size        | List size       | `small`｜`medium`｜`large` | `medium` |
| component   | List node tag   | React.ElementType          | -        |

#### ListItemProps

| Property    | Description         | Type                | Default |
| ----------- | ------------------- | ------------------- | ------- |
| endIcon     | Right action icon   | ReactNode ｜boolean | -       |
| disabled    | Non-clickable state | boolean             | false   |
| hideDivider | Hide divider        | boolean             | false   |
| component   | Root node tag       | React.ElementType   | -       |

#### ListItemContentProps

| Property  | Description       | Type              | Default |
| --------- | ----------------- | ----------------- | ------- |
| primary   | Primary content   | ReactNode         | -       |
| secondary | Secondary content | ReactNode         | -       |
| component | Root node tag     | React.ElementType | -       |

#### ListItemHeaderProps, ListItemFooterProps, ListItemExtraProps

| Property  | Description   | Type              | Default |
| --------- | ------------- | ----------------- | ------- |
| component | Root node tag | React.ElementType | -       |

## Style Variables

| Global Variable                | Description             | Default     |
| ------------------------------ | ----------------------- | ----------- |
| --bui-list-small-item-padding  | Padding for small size  | `5px 12px`  |
| --bui-list-medium-item-padding | Padding for medium size | `18px 12px` |
| --bui-list-large-item-padding  | Padding for large size  | `20px 12px` |

```

```
