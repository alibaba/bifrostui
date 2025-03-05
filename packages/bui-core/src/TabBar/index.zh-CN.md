---
group: 数据展示
name: TabBar 底部导航栏
---

# TabBar 底部导航栏

底部导航栏，用于切换不同页面

## 基础用法

通过监听`onChange`事件来更新`current`值变化，`current`值必填， 默认选中第一个元素。

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

## 自定义图标

可以通过`icon`、`activeIcon` 属性自定义`TabBarItem`的默认图标、选中图标

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

## 自定义主题

支持通过`color`、`activeColor`设置默认主题色、选中主题色，以此实现自定义图标、字体颜色

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

## 徽标提示

支持通过BadgeProps属性，设置`TabBarItem`相应的徽标内容

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

## API

### TabBar

| 属性        | 说明                 | 类型                                                                                               | 默认值    |
| ----------- | -------------------- | -------------------------------------------------------------------------------------------------- | --------- |
| current     | 当前选中的标签索引值 | number                                                                                             | 0         |
| color       | 默认主题色           | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `neutral`\| `dark`\| `light` \| `vip` | `neutral` |
| activeColor | 选中主题色           | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `neutral`\| `dark`\| `light` \| `vip` | `primary` |
| onChange    | 选中某一项时的回调   | (e:SyntheticEvent, data:{value:number}) => void                                                    | -         |

### TabBarItem

| 属性       | 说明     | 类型       | 默认值 |
| ---------- | -------- | ---------- | ------ |
| title      | 标题     | string     | -      |
| icon       | 图标     | ReactNode  | -      |
| activeIcon | 选中图标 | ReactNode  |
| BadgeProps | 徽标     | BadgeProps | -      |

## 样式变量

### TabBar

| 全局变量              | 说明     | 默认值                        |
| --------------------- | -------- | ----------------------------- |
| --bui-tab-bar-width   | 宽度     | 100%                          |
| --bui-tab-bar-height  | 高度     | 50px                          |
| --bui-tab-bar-padding | 内边距   | 6px 0                         |
| --bui-tab-bar-color   | 背景颜色 | `var(--bui-color-fg-default)` |
