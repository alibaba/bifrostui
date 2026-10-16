---
group: Data Display
name: TabBar Bottom Navigation
---

# TabBar Bottom Navigation

A bottom navigation bar used for switching between different pages.

## Basic Usage

Update `current` value changes by listening to the `onChange` event. The `current` value is required and defaults to selecting the first element.

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

## Custom Icons

Customize the default and active icons of `TabBarItem` using the `icon` and `activeIcon` properties.

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

## Custom Theme

Support customizing icon and font colors by setting the default and active theme colors via the `color` and `activeColor` properties.

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
        <div style={{ margin: '8px' }}>Custom Active Theme Color: </div>
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
        <div style={{ margin: '8px' }}>Custom Default Theme Color: </div>
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

## Badge Notifications

Enable setting badge content for `TabBarItem` using the BadgeProps attribute.

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

## API

### TabBar

| Property    | Description                         | Type                                                                                               | Default   |
| ----------- | ----------------------------------- | -------------------------------------------------------------------------------------------------- | --------- |
| current     | Index of the currently selected tab | number                                                                                             | 0         |
| color       | Default theme color                 | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `neutral`\| `dark`\| `light` \| `vip` | `neutral` |
| activeColor | Active theme color                  | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `neutral`\| `dark`\| `light` \| `vip` | `primary` |
| onChange    | Callback when a tab is selected     | (e:SyntheticEvent, data:{value:number}) => void                                                    | -         |

### TabBarItem

| Property   | Description      | Type       | Default |
| ---------- | ---------------- | ---------- | ------- |
| title      | Title            | string     | -       |
| icon       | Icon             | ReactNode  | -       |
| activeIcon | Active Icon      | ReactNode  | -       |
| BadgeProps | Badge Properties | BadgeProps | -       |

## Style Variables

### TabBar

| Global Variable       | Description | Default                       |
| --------------------- | ----------- | ----------------------------- |
| --bui-tab-bar-width   | Width       | `100%`                        |
| --bui-tab-bar-height  | Height      | `50px`                        |
| --bui-tab-bar-padding | Padding     | `6px 0`                       |
| --bui-tab-bar-color   | Text Color  | `var(--bui-color-fg-default)` |

```

```
