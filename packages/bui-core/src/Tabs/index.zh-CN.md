---
group: 数据展示
name: Tabs 标签页
---

# Tabs 标签页

标签页切换组件。

## 小程序与H5差异

1. 小程序切换 Tab 底部 Line 使用渐变动画，H5 使用位移动画;
2. 小程序对于超出可滚动的 Tabs，点击激活无法移动到视图中间位置。

## 基础用法

搭配 Tab 组件完成布局

```tsx
import React, { useState } from 'react';
import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';

export default () => {
  const [value, setValue] = useState('one');
  const tabList = [
    { title: 'TAB ONE', index: 'one' },
    { title: 'TAB TWO', index: 'two' },
    { title: 'TAB THREE', index: 'three' },
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
      <TabPanel value={value} index="one">
        Tab Panel 1
      </TabPanel>
      <TabPanel value={value} index="two">
        Tab Panel 2
      </TabPanel>
      <TabPanel value={value} index="three">
        Tab Panel 3
      </TabPanel>
    </Stack>
  );
};
```

## 支持使用 tabs

使用 `tabs` 生成 Tab。

```tsx
import { Stack, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('one');
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
          { title: 'TAB ONE', index: 'one' },
          { title: 'TAB TWO', index: 'two' },
          { title: 'TAB THREE', index: 'three' },
        ]}
      />
      <TabPanel value={value} index="one">
        Tab Panel 1
      </TabPanel>
      <TabPanel value={value} index="two">
        Tab Panel 2
      </TabPanel>
      <TabPanel value={value} index="three">
        Tab Panel 3
      </TabPanel>
    </Stack>
  );
};
```

## 禁用状态

通过 `disabled` 禁止 Tab 触发点击。

```tsx
import { Stack, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('one');
  const handleClick = (e, { index }) => {
    console.log(`Click Tab, value index is: ${index}`);
    setValue(index);
  };

  return (
    <Stack>
      <Tabs
        style={{ marginBottom: '12px' }}
        value={value}
        tabs={[
          { title: 'TAB ONE', index: 'one' },
          { title: 'TAB DISABLED', index: 'two', disabled: true },
          { title: 'TAB THREE', index: 'three' },
        ]}
        onChange={handleClick}
      />
      <TabPanel value={value} index="one">
        Tab Panel 1
      </TabPanel>
      <TabPanel value={value} index="two">
        Tab Panel 2
      </TabPanel>
      <TabPanel value={value} index="three">
        Tab Panel 3
      </TabPanel>
    </Stack>
  );
};
```

## 受控 tabs 组件

可通过 `value` 属性控制Tabs组件的选中态。

```tsx
import { Button, Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('one');
  const tabList = [
    { title: 'TAB ONE', index: 'one' },
    { title: 'TAB TWO', index: 'two' },
    { title: 'TAB THREE', index: 'three' },
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
      <TabPanel value={value} index="one">
        <div>Tab Panel 1</div>
        <Button
          onClick={() => {
            handleButton('three');
          }}
        >
          GOTO TAB THREE
        </Button>
        <Button
          onClick={() => {
            handleButton('two');
          }}
        >
          GOTO TAB TWO
        </Button>
      </TabPanel>
      <TabPanel value={value} index="two">
        <div>Tab Panel 2</div>
        <Button
          onClick={() => {
            handleButton('one');
          }}
        >
          GOTO TAB ONE
        </Button>
        <Button
          onClick={() => {
            handleButton('three');
          }}
        >
          GOTO TAB THREE
        </Button>
      </TabPanel>
      <TabPanel value={value} index="three">
        <div>Tab Panel 3</div>
        <Button
          onClick={() => {
            handleButton('one');
          }}
        >
          GOTO TAB ONE
        </Button>
        <Button
          onClick={() => {
            handleButton('two');
          }}
        >
          GOTO TAB TWO
        </Button>
      </TabPanel>
    </Stack>
  );
};
```

## 超出可滑动

当Tab过多时，超出可滑动。

```tsx
import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('2');
  const tabList = [
    { title: 'Item 1', index: '1' },
    { title: 'Item 3', index: '2' },
    { title: 'Item 3', index: '3' },
    { title: 'Item 4', index: '4' },
    { title: 'Item 5', index: '5' },
    { title: 'Item 6', index: '6' },
    { title: 'Item 7', index: '7' },
    { title: 'Item 8', index: '8' },
    { title: 'Item 9', index: '9' },
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

| 属性     | 说明                                     | 类型                                               | 默认值 |
| -------- | ---------------------------------------- | -------------------------------------------------- | ------ |
| value    | 当前选中面板的索引值，与 tabs.index 对应 | string                                             | -      |
| tabs     | 切换面板的数据                           | ITabItem[]                                         | -      |
| onChange | 切换面板的回调                           | (e?: SyntheticEvent,data?:{index: string}) => void | -      |

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

<!-- ## 样式变量

### Tabs

| 属性                 | 说明               | 默认值                                           | 全局变量                      |
| -------------------- | ------------------ | ------------------------------------------------ | ----------------------------- |
| --bui-tabs-height             | Tabs 高度          | 39px                                             | --bui-tabs-height             |
| --bui-tabs-color              | 字体颜色           | --bui-color-fg-subtle                            | --bui-tabs-color              |
| --bui-tabs-indicator-width         | 下标线宽度         | 18px                                             | --bui-tabs-indicator-width         |
| --bui-tabs-indicator-border-radius | 下标线圆角         | 3px                                              | --bui-tabs-indicator-border-radius |
| --bui-tabs-indicator-bottom        | 下标线底部定位位置 | 0                                                | --bui-tabs-indicator-bottom        |
| --bui-tabs-indicator-color        | 下标线高度         | 3PX                                              | --bui-tabs-indicator-height        |
| --bui-tabs-indicator-bg         | 下标线颜色         | --bui-color-primary                              | --bui-tabs-indicator-bg         |
| --bui-tabs-indicator-box-shadow    | 下标线阴影         | none                                             | --bui-tabs-indicator-box-shadow    |
| --bui-tab-padding        | Tab内边距          | var(--bui-spacing-lg) var(--bui-spacing-lg) 10px | --bui-tab-padding             |
| --bui-tabs-font-size          | Tab字体大小        | --bui-text-size-1                                | --bui-tabs-font-size           |
