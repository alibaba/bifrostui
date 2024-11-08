---
group: Data Display
name: TabBar bottom navigation bar
---

# TabBar bottom navigation bar

Bottom navigation bar, used to switch between different pages

## Code demonstration

### Basic usage

Update the 'current' value change by listening to the 'onChange' event. The 'current' value is mandatory and the first element is selected by default.

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
        <TabBarItem title="主页" />
        <TabBarItem title="商店" />
        <TabBarItem title="帮助" />
      </TabBar>
    </Stack>
  );
};
```

### Customize icons

You can customize the default icon and selected icon of TabBarItem through the 'icon' and 'activeIcon' properties

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
          title="主页"
          icon={<HomeFilledIcon />}
          activeIcon={<HomeFilledIcon color="primary" />}
        />
        <TabBarItem
          title="商店"
          icon={<StoreFilledIcon />}
          activeIcon={<StoreFilledIcon color="primary" />}
        />
        <TabBarItem
          title="帮助"
          icon={<PhoneFilledIcon />}
          activeIcon={<PhoneFilledIcon color="primary" />}
        />
      </TabBar>
    </Stack>
  );
};
```

### Custom Theme

Support setting default theme colors and selecting theme colors through 'color' and 'activeColor' to achieve custom icon and font colors

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
        <div style={{ margin: '8px' }}>自定义选中主题色: </div>
        <TabBar current={active} onChange={handleChange}>
          <TabBarItem title="主页" />
          <TabBarItem title="商店" />
          <TabBarItem title="帮助" />
        </TabBar>
      </Stack>
      <Stack
        style={{ background: '#eee', padding: '20px 0 10px' }}
        alignItems="flex-start"
      >
        <div style={{ margin: '8px' }}>自定义默认主题色: </div>
        <TabBar
          current={active2}
          onChange={handleChange2}
          color="info"
          activeColor="primary"
        >
          <TabBarItem title="主页" />
          <TabBarItem title="商店" />
          <TabBarItem title="帮助" />
        </TabBar>
      </Stack>
    </>
  );
};
```

### Logo Tip

Support setting the corresponding logo content for 'TabBarItem' through the BadgeProps property

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
          title="主页"
          icon={<HomeFilledIcon />}
          activeIcon={<HomeFilledIcon color="primary" />}
        />
        <TabBarItem
          title="商店"
          icon={<StoreFilledIcon />}
          activeIcon={<StoreFilledIcon color="primary" />}
          BadgeProps={{ type: 'dot' }}
        />
        <TabBarItem
          title="帮助"
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

| attribute   | explain                                    | type                                                                      | Default value |
| ----------- | ------------------------------------------ | ------------------------------------------------------------------------- | ------------- |
| current     | The currently selected tag index value     | number                                                                    | 0             |
| color       | Default Theme Color                        | `primary` \|`info` \|`success` \|`warning` \|`danger` \|`default` \|`vip` | `default`     |
| activeColor | Select theme color                         | `primary` \|`info` \|`success` \|`warning` \|`danger` \|`default` \|`vip` | `primary`     |
| onChange    | The callback when selecting a certain item | (e:SyntheticEvent, data:{value:number}) => void                           | -             |

#### Tabbar Item

| attribute  | explain     | type       | Default value |
| ---------- | ----------- | ---------- | ------------- |
| title      | title       | string     | -             |
| icon       | Icon        | ReactNode  | -             |
| activeIcon | Select icon | ReactNode  |
| BadgeProps | logo        | BadgeProps | -             |

### Style variables

#### TabBar

| attribute | explain | Default value | global variable       |
| --------- | ------- | ------------- | --------------------- |
| --width   | width   | 100%          | --bui-tab-bar-width   |
| --height  | height  | 50px          | --bui-tab-bar-height  |
| --padding | padding | 6px 0         | --bui-tab-bar-padding |

#### Tabbar Item

| attribute   | explain    | Default value          | global variable             |
| ----------- | ---------- | ---------------------- | --------------------------- |
| --tab-color | Text color | --bui-color-fg-default | --bui-tab-bar-default-color |
