---
group: Data Display
name: TabBar
---

# TabBar

Bottom navigation bar, used to switch between different pages

## Code demonstration

### Basic usage

By monitoring`onChange`update the document`current`change,`current`required, the first element is selected by default.

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

Can be done through`icon`、`activeIcon`attribute customization`TabBarItem`default icon, selected icon

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

Support through`color`、`activeColor`set default theme color and select theme color to achieve custom icon and font color

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

Support setting through the BadgeProps attribute`TabBarItem`the appropriate logo content

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

| attribute   | explain                                    | type                                                                            | Default value |
| ----------- | ------------------------------------------ | ------------------------------------------------------------------------------- | ------------- |
| current     | The currently selected tag index value     | number                                                                          | 0             |
| color       | Default Theme Color                        | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `default` \| `vip` | `default`     |
| activeColor | Select theme color                         | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `default` \| `vip` | `primary`     |
| onChange    | The callback when selecting a certain item | (e:SyntheticEvent, data:{value:number}) => void                                 | -             |

#### TabBarItem

| attribute  | explain     | type       | Default value |
| ---------- | ----------- | ---------- | ------------- |
| title      | title       | string     | -             |
| icon       | Icon        | ReactNode  | -             |
| activeIcon | Select icon | ReactNode  |
| BadgeProps | logo        | BadgeProps | -             |

#### Style variables

| attribute   | explain    | Default value          | global variable             |
| ----------- | ---------- | ---------------------- | --------------------------- |
| --tab-color | Text color | --bui-color-fg-default | --bui-tab-bar-default-color |
