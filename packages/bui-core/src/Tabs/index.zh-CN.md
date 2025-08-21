---
group: 数据展示
name: Tabs 标签页
---

# Tabs 标签页

用于在多个内容区域之间切换的标签页组件，支持键盘无障碍访问和自定义渲染。

## 小程序与H5差异

1. 小程序切换 Tab 底部指示器使用渐变动画，H5 使用位移动画。
2. 小程序中超出可滚动的 Tabs，点击激活不会自动滚动到视图中间。

## 基础用法

搭配 `Tab` 和 `TabPanel` 组件完成布局。

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
      <Tabs style={{ marginBottom: 12 }} value={value}>
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

## 使用 `tabs` 属性生成 Tab

通过 `tabs` 属性快速生成标签页。

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
        style={{ marginBottom: 12 }}
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

通过 `disabled` 属性禁用某个 Tab。

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
        style={{ marginBottom: 12 }}
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

## 受控用法

通过 `value` 属性控制 Tabs 组件的选中态。

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

  return (
    <Stack>
      <Tabs
        style={{ marginBottom: 12 }}
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
        <Button onClick={() => setValue('three')}>GOTO TAB THREE</Button>
        <Button onClick={() => setValue('two')}>GOTO TAB TWO</Button>
      </TabPanel>
      <TabPanel value={value} index="two">
        <div>Tab Panel 2</div>
        <Button onClick={() => setValue('one')}>GOTO TAB ONE</Button>
        <Button onClick={() => setValue('three')}>GOTO TAB THREE</Button>
      </TabPanel>
      <TabPanel value={value} index="three">
        <div>Tab Panel 3</div>
        <Button onClick={() => setValue('one')}>GOTO TAB ONE</Button>
        <Button onClick={() => setValue('two')}>GOTO TAB TWO</Button>
      </TabPanel>
    </Stack>
  );
};
```

## 超出可滑动

当 Tab 数量较多时，支持横向滚动。

```tsx
import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('2');
  const tabList = [
    { title: 'Item 1', index: '1' },
    { title: 'Item 2', index: '2' },
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
      <div style={{ width: 325 }}>
        <Tabs
          style={{ marginTop: 20, marginBottom: 12 }}
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

## 无障碍访问

- Tab 具备 `role="tab"`、`aria-disabled`、`aria-controls`、`tabindex` 等属性。
- TabPanel 具备 `role="tabpanel"`、`tabindex`、`aria-hidden` 等属性。

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

## 样式变量

| 全局变量                           | 说明           | 默认值                                             |
| ---------------------------------- | -------------- | -------------------------------------------------- |
| --bui-tabs-height                  | 标签页高度     | `39px`                                             |
| --bui-tabs-font-weight             | 字体粗细       | `var(--bui-font-weight-medium)`                    |
| --bui-tabs-indicator-bg            | 指示器背景色   | `var(--bui-color-primary)`                         |
| --bui-tabs-indicator-height        | 指示器高度     | `3PX`                                              |
| --bui-tabs-indicator-width         | 指示器宽度     | `24px`                                             |
| --bui-tabs-indicator-border-radius | 指示器圆角     | `3px 3px 0 0`                                      |
| --bui-tabs-indicator-bottom        | 指示器底部位置 | `0`                                                |
| --bui-tabs-indicator-box-shadow    | 指示器阴影     | `none`                                             |
| --bui-tabs-mask-width              | 遮罩宽度       | `12px`                                             |
| --bui-tabs-mask-height             | 遮罩高度       | `100%`                                             |
| --bui-tab-font-size                | 标签字体大小   | `var(--bui-text-size-1)`                           |
| --bui-tab-color                    | 标签颜色       | `var(--bui-color-fg-subtle)`                       |
| --bui-tab-height                   | 标签高度       | `100%`                                             |
| --bui-tab-padding                  | 标签内边距     | `var(--bui-spacing-lg) var(--bui-spacing-lg) 10px` |
| --bui-tab-active-color             | 激活标签颜色   | `var(--bui-color-fg-default)`                      |
| --bui-tab-active-font-family       | 激活标签字体   | `var(--bui-font-family-accent, inherit)`           |
