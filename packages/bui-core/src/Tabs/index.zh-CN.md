---
group: 数据展示
name: Tabs 标签页
---

# Tabs 标签页

标签页切换组件。

## 小程序与 H5 存在两点差异：

1. 小程序切换 Tab 底部 Line 使用渐变动画，H5 使用位移动画;
2. 小程序对于超出可滚动的 Tabs，点击激活无法移动到视图中间位置。

## 代码演示

### 基础用法

搭配 Tab 组件完成布局

```tsx
import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: '水果', index: 'fruits' },
    { title: '蔬菜', index: 'vegetables' },
    { title: '动物', index: 'animals' },
  ];
  const handleClick = (e, { index }) => {
    console.log(`Click Tab, value index is: ${index}`);
    setValue(index);
  };

  return (
    <Stack alignItems="stretch">
      <Tabs style={{ marginBottom: '12px' }} value={value}>
        {tabList.map((item) => (
          <Tab key={item.index} index={item.index} onClick={handleClick}>
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index="fruits">
        菠萝
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        西红柿
      </TabPanel>
      <TabPanel value={value} index="animals">
        蚂蚁
      </TabPanel>
    </Stack>
  );
};
```

### 支持使用 tabs

使用 `tabs` 生成 Tab。

```tsx
import { Stack, TabPanel, Tabs, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const handleChange = (e, { index }) => {
    console.log(`Tabs change, value index is: ${index}`);
    setValue(index);
  };

  return (
    <Stack>
      <Tabs
        style={{ marginBottom: '12px' }}
        onChange={handleChange}
        value={value}
        tabs={[
          { title: '水果', index: 'fruits' },
          { title: '蔬菜', index: 'vegetables', disabled: true },
          { title: '动物', index: 'animals' },
        ]}
      />
      <TabPanel value={value} index="fruits">
        菠萝
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        西红柿
      </TabPanel>
      <TabPanel value={value} index="animals">
        蚂蚁
      </TabPanel>
    </Stack>
  );
};
```

### value值无效时不选中

value为无效值时不选中任何Tab。

```tsx
import { Stack, Tab, TabPanel, Tabs, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('2');
  const defultList = [
    { title: '长津湖', index: '1' },
    { title: '战狼2', index: '2' },
    { title: '你好，李焕英', index: '3' },
    { title: '哪吒之魔童降世', index: '4' },
    { title: '流浪地球', index: '5' },
    { title: '唐人街探案3', index: '6' },
  ];
  const [tabList, setTabList] = useState(defultList);

  const handleChange = (e, { index }) => {
    console.log(e, `Tab Change, value index is: ${index}`);
    setValue(index);
  };

  return (
    <Stack>
      <Button
        onClick={() => {
          setValue('');
        }}
      >
        置为无效值
      </Button>
      <Button
        onClick={() => {
          if (tabList.length === 4) {
            setTabList(defultList);
          } else {
            const newTabList = defultList.slice(0, 4);
            setTabList(newTabList);
            if (!newTabList.some((item) => item.index === value)) {
              setValue('1');
            }
          }
        }}
      >
        {tabList.length === 4 ? '增加' : '减少'}TabList长度
      </Button>
      <div style={{ width: '325px' }}>
        <Tabs
          style={{ marginTop: '20px', marginBottom: '12px' }}
          value={value}
          onChange={handleChange}
        >
          {tabList.map((item) => (
            <Tab key={item.index} {...item}>
              {item.title}
            </Tab>
          ))}
        </Tabs>

        {tabList.map((item) => (
          <TabPanel key={item.index} value={value} index={item.index}>
            {item.index}
          </TabPanel>
        ))}
      </div>
    </Stack>
  );
};
```

### value值无效时不选中（使用tabs）

value为无效值时不选中任何Tab。

```tsx
import { Stack, Tab, TabPanel, Tabs, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('2');
  const defultList = [
    { title: '长津湖', index: '1' },
    { title: '战狼2', index: '2' },
    { title: '你好，李焕英', index: '3' },
    { title: '哪吒之魔童降世', index: '4' },
    { title: '流浪地球', index: '5' },
    { title: '唐人街探案3', index: '6' },
  ];
  const [tabList, setTabList] = useState(defultList);

  const handleChange = (e, { index }) => {
    console.log(e, `Tab Change, value index is: ${index}`);
    setValue(index);
  };

  return (
    <Stack>
      <Button
        onClick={() => {
          setValue('');
        }}
      >
        置为无效值
      </Button>
      <Button
        onClick={() => {
          if (tabList.length === 4) {
            setTabList(defultList);
          } else {
            const newTabList = defultList.slice(0, 4);
            setTabList(newTabList);
            if (!newTabList.some((item) => item.index === value)) {
              setValue('1');
            }
          }
        }}
      >
        {tabList.length === 4 ? '增加' : '减少'}TabList长度
      </Button>
      <div style={{ width: '325px' }}>
        <Tabs
          style={{ marginTop: '20px', marginBottom: '12px' }}
          tabs={tabList}
          value={value}
          onChange={handleChange}
        />

        {tabList.map((item) => (
          <TabPanel key={item.index} value={value} index={item.index}>
            {item.index}
          </TabPanel>
        ))}
      </div>
    </Stack>
  );
};
```

### 禁用状态

通过 `disabled` 禁止 Tab 触发点击。

```tsx
import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: '水果', index: 'fruits' },
    { title: '蔬菜', index: 'vegetables' },
    { title: '动物', index: 'animals' },
  ];
  const handleClick = (e, { index }) => {
    console.log(`Click Tab, value index is: ${index}`);
    setValue(index);
  };

  return (
    <Stack>
      <Tabs style={{ marginBottom: '12px' }} value={value}>
        {tabList.map((item) => (
          <Tab
            key={item.index}
            index={item.index}
            disabled
            onClick={handleClick}
          >
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index="fruits">
        菠萝
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        西红柿
      </TabPanel>
      <TabPanel value={value} index="animals">
        蚂蚁
      </TabPanel>
    </Stack>
  );
};
```

### 受控 tabs 组件

可通过 `value` 属性控制Tabs组件的选中态。

```tsx
import { Button, Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: '水果', index: 'fruits' },
    { title: '蔬菜', index: 'vegetables' },
    { title: '动物', index: 'animals' },
  ];
  const handleChange = (e, { index }) => {
    console.log(e, `Tab change, value index is: ${index}`);
    setValue(index);
  };

  const handleButton = (index) => {
    setValue(index);
  };

  return (
    <Stack>
      <Tabs
        style={{ marginBottom: '12px' }}
        align="start"
        onChange={handleChange}
        value={value}
      >
        {tabList.map((item) => (
          <Tab key={item.index} {...item}>
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index="fruits">
        <div>菠萝</div>
        <Button
          onClick={() => {
            handleButton('animals');
          }}
        >
          我要蚂蚁
        </Button>
        <Button
          onClick={() => {
            handleButton('vegetables');
          }}
        >
          我要西红柿
        </Button>
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        <div>西红柿</div>
        <Button
          onClick={() => {
            handleButton('fruits');
          }}
        >
          我要菠萝
        </Button>
        <Button
          onClick={() => {
            handleButton('animals');
          }}
        >
          我要蚂蚁
        </Button>
      </TabPanel>
      <TabPanel value={value} index="animals">
        <div>蚂蚁</div>
        <Button
          onClick={() => {
            handleButton('fruits');
          }}
        >
          我要菠萝
        </Button>
        <Button
          onClick={() => {
            handleButton('vegetables');
          }}
        >
          我要西红柿
        </Button>
      </TabPanel>
    </Stack>
  );
};
```

### 超出可滑动

当Tab过多时，超出可滑动。

```tsx
import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('2');
  const tabList = [
    { title: '长津湖', index: '1' },
    { title: '战狼2', index: '2' },
    { title: '你好，李焕英', index: '3' },
    { title: '哪吒之魔童降世', index: '4' },
    { title: '流浪地球', index: '5' },
    { title: '唐人街探案3', index: '6' },
    { title: '复仇者联盟4：终局之战', index: '7' },
    { title: '长津湖之水门桥', index: '8' },
    { title: '红海行动', index: '9' },
  ];
  const handleChange = (e, { index }) => {
    console.log(e, `Tab Change, value index is: ${index}`);
    setValue(index);
  };

  return (
    <Stack>
      <div style={{ width: '325px' }}>
        <Tabs
          style={{ marginTop: '20px', marginBottom: '12px' }}
          value={value}
          onChange={handleChange}
        >
          {tabList.map((item) => (
            <Tab key={item.index} {...item}>
              {item.title}
            </Tab>
          ))}
        </Tabs>
        {tabList.map((item) => (
          <TabPanel key={item.index} value={value} index={item.index}>
            {item.index}
          </TabPanel>
        ))}
      </div>
    </Stack>
  );
};
```

## API

### Tabs

| 属性     | 说明                                     | 类型                                               | 默认值   |
| -------- | ---------------------------------------- | -------------------------------------------------- | -------- |
| value    | 当前选中面板的索引值，与 tabs.index 对应 | string                                             | -        |
| tabs     | 切换面板的数据                           | ITabItem[]                                         | -        |
| align    | 对齐方式                                 | `start` \| `center`                                | `center` |
| onChange | 切换面板的回调                           | (e?: SyntheticEvent,data?:{index: string}) => void | -        |

### ITabItem

| 属性     | 说明         | 类型            | 默认值 |
| -------- | ------------ | --------------- | ------ |
| title    | 面板标题     | React.ReactNode | -      |
| index    | 面板的索引值 | string          | -      |
| disabled | 面板是否禁用 | boolean         | false  |

### Tab

| 属性     | 说明            | 类型                                               | 默认值 |
| -------- | --------------- | -------------------------------------------------- | ------ |
| index    | 面板的索引值    | string                                             | -      |
| disabled | 面板是否禁用    | boolean                                            | false  |
| onClick  | 点击 Tab 的回调 | (e?: SyntheticEvent,data?:{index: string}) => void | -      |

### TabPanel

| 属性        | 说明                                  | 类型    | 默认值 |
| ----------- | ------------------------------------- | ------- | ------ |
| value       | 当前选中面板的 value                  | string  | -      |
| index       | 对应 tabs 切换面板的数据中的 index    | string  | -      |
| keepMounted | 当 TabPanel 被隐藏时是否渲染 DOM 结构 | boolean | false  |

## 样式变量

### Tabs

| 属性                 | 说明               | 默认值                                           | 全局变量                      |
| -------------------- | ------------------ | ------------------------------------------------ | ----------------------------- |
| --height             | Tabs 高度          | 39px                                             | --bui-tabs-height             |
| --color              | 字体颜色           | --bui-color-fg-subtle                            | --bui-tabs-color              |
| --active-color       | 激活 Tab 字体颜色  | --bui-color-fg-default                           | --bui-tabs-active-color       |
| --line-width         | 下标线宽度         | 18px                                             | --bui-tabs-line-width         |
| --line-border-radius | 下标线圆角         | 3px                                              | --bui-tabs-line-border-radius |
| --line-bottom        | 下标线底部定位位置 | 0                                                | --bui-tabs-line-bottom        |
| --line-height        | 下标线高度         | 3PX                                              | --bui-tabs-line-height        |
| --line-color         | 下标线颜色         | --bui-color-primary                              | --bui-tabs-line-color         |
| --line-box-shadow    | 下标线阴影         | none                                             | --bui-tabs-line-box-shadow    |
| --mask-width         | 蒙层宽度           | 12px                                             | --bui-tabs-mask-width         |
| --mask-height        | 蒙层高度           | 100%                                             | --bui-tabs-mask-height        |
| --tab-height         | Tab 高度           | 100%                                             | --bui-tab-height              |
| --tab-padding        | Tab内边距          | var(--bui-spacing-lg) var(--bui-spacing-lg) 10px | --bui-tab-padding             |
| --font-size          | Tab字体大小        | --bui-text-size-1                                | --bui-tab-font-size           |
| --active-font-size   | 激活Tab字体大小    | --bui-text-size-1                                | --bui-tab-active-font-size    |
