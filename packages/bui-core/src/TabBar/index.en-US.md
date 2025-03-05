---
group: Data Display
name: TabBar Bottom Navigation Bar
---

# TabBar Bottom Navigation Bar

Bottom navigation bar, used for switching between different pages.

## Code Examples

### Basic Usage

By listening to the `onChange` event to update changes in the `current` value. The `current` value is required and defaults to selecting the first element.

```tsx
import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';

export default () => {
  const [active, setActive] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };
  return (
    <Stack style={{ background: '#eee', padding: '20px 0 10px' }}>
      <TabBar current={active} onChange={handleChange}>
        <TabBarItem title="Home" />
        <TabBarItem title="Store" />
        <TabBarItem title="Help" />
      </TabBar>
    </Stack>
  );
};
```

### Custom Icons

You can customize the default icons and selected icons of `TabBarItem` using the `icon`, `activeIcon` properties.

```tsx
import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';
import {
  PhoneFilledIcon,
  StoreFilledIcon,
  HomeFilledIcon,
  HomeOutlinedIcon,
} from '@bifrostui/icons';

export default () => {
  const [active, setActive] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };

  return (
    <Stack style={{ background: '#eee', padding: '20px 0 10px' }}>
      <TabBar current={active} onChange={handleChange}>
        <TabBarItem
          title="Home"
          icon={<HomeFilledIcon />}
          activeIcon={<HomeFilledIcon color="primary" />}
        />
        <TabBarItem
          title="Store"
          icon={<StoreFilledIcon />}
          activeIcon={<StoreFilledIcon color="primary" />}
        />
        <TabBarItem
          title="Help"
          icon={<PhoneFilledIcon />}
          activeIcon={<PhoneFilledIcon color="primary" />}
        />
      </TabBar>
    </Stack>
  );
};
```

### Custom Themes

Supports setting default theme colors and selected theme colors via `color`, `activeColor` to achieve custom icon and font colors.

```tsx
import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';

export default () => {
  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };
  const handleChange2 = (e, { value }) => {
    setActive2(value);
  };
  return (
    <>
      <Stack
        style={{ background: '#eee', padding: '20px 0 10px' }}
        alignItems="flex-start"
      >
        <div style={{ margin: '8px' }}>Custom selected theme color:</div>
        <TabBar current={active} onChange={handleChange}>
          <TabBarItem title="Home" />
          <TabBarItem title="Store" />
          <TabBarItem title="Help" />
        </TabBar>
      </Stack>
      <Stack
        style={{ background: '#eee', padding: '20px 0 10px' }}
        alignItems="flex-start"
      >
        <div style={{ margin: '8px' }}>Custom default theme color:</div>
        <TabBar
          current={active2}
          onChange={handleChange2}
          color="info"
          activeColor="primary"
        >
          <TabBarItem title="Home" />
          <TabBarItem title="Store" />
          <TabBarItem title="Help" />
        </TabBar>
      </Stack>
    </>
  );
};
```

### Badge Notifications

Supports setting badge content for `TabBarItem` through the `BadgeProps` property.

```tsx
import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';
import {
  PhoneFilledIcon,
  StoreFilledIcon,
  HomeFilledIcon,
} from '@bifrostui/icons';

export default () => {
  const [active, setActive] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };
  return (
    <Stack style={{ background: '#eee', padding: '20px 0 10px' }}>
      <TabBar current={active} onChange={handleChange}>
        <TabBarItem
          title="Home"
          icon={<HomeFilledIcon />}
          activeIcon={<HomeFilledIcon color="primary" />}
        />
        <TabBarItem
          title="Store"
          icon={<StoreFilledIcon />}
          activeIcon={<StoreFilledIcon color="primary" />}
          BadgeProps={{ type: 'dot' }}
        />
        <TabBarItem
          title="Help"
          icon={<PhoneFilledIcon />}
          activeIcon={<PhoneFilledIcon color="primary" />}
          BadgeProps={{ content: '20' }}
        />
      </TabBar>
    </Stack>
  );
};
```

### API

#### TabBar

| Property    | Description                         | Type                                                                            | Default Value |
| ----------- | ----------------------------------- | ------------------------------------------------------------------------------- | ------------- |
| current     | Index of the currently selected tab | number                                                                          | 0             |
| color       | Default theme color                 | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `default` \| `vip` | `default`     |
| activeColor | Selected theme color                | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `default` \| `vip` | `primary`     |
| onChange    | Callback when an item is selected   | (e: SyntheticEvent, data: {value: number}) => void                              | -             |

#### TabBarItem

| Property   | Description   | Type       | Default Value |
| ---------- | ------------- | ---------- | ------------- |
| title      | Title         | string     | -             |
| icon       | Icon          | ReactNode  | -             |
| activeIcon | Selected Icon | ReactNode  | -             |
| BadgeProps | Badge         | BadgeProps | -             |

### Style Variables

#### TabBar

| Property  | Description | Default Value | Global Variable       |
| --------- | ----------- | ------------- | --------------------- |
| --width   | Width       | 100%          | --bui-tab-bar-width   |
| --height  | Height      | 50px          | --bui-tab-bar-height  |
| --padding | Padding     | 6px 0         | --bui-tab-bar-padding |

#### TabBarItem

| Property    | Description | Default Value          | Global Variable             |
| ----------- | ----------- | ---------------------- | --------------------------- |
| --tab-color | Text Color  | --bui-color-fg-default | --bui-tab-bar-default-color |
