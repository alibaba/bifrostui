---
group: Data Display
name: Tabs tab
---

# Tabs tab

Tab switching component.

## There are two differences between mini programs and H5:

1. The mini program switches between using gradient animation for the bottom line of the tab and displacement animation for H5;
2. The mini program cannot move to the middle position of the view for tabs that are beyond scrollable when clicked to activate.

## Code demonstration

### Basic usage

Complete layout with Tab component

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

### Support the use of tabs

Generate tabs using 'tabs'.

```tsx
import { Stack, TabPanel, Tabs } from '@bifrostui/react';
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

### Disabled status

Disable Tab from triggering clicks through 'disabled'.

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

### Controlled Tabs Component

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

### Beyond sliding

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

| attribute | explain                                                                   | type                                               | Default value |
| --------- | ------------------------------------------------------------------------- | -------------------------------------------------- | ------------- |
| value     | The index value of the currently selected panel corresponds to tabs.index | string                                             | -             |
| tabs      | Switch panel data                                                         | ITabItem[]                                         | -             |
| align     | Alignment method                                                          | `start` \|`center`                                 | `center`      |
| onChange  | Switch panel callback                                                     | (e?: SyntheticEvent,data?:{index: string}) => void | -             |

### ITab

| attribute | explain               | type            | Default value |
| --------- | --------------------- | --------------- | ------------- |
| title     | Panel Title           | React.ReactNode | -             |
| index     | Index value of panel  | string          | -             |
| disabled  | Is the panel disabled | boolean         | false         |

### Tab

| attribute | explain                      | type                                               | Default value |
| --------- | ---------------------------- | -------------------------------------------------- | ------------- |
| index     | Index value of panel         | string                                             | -             |
| disabled  | Is the panel disabled        | boolean                                            | false         |
| onClick   | Click on the callback of Tab | (e?: SyntheticEvent,data?:{index: string}) => void | -             |

### TabPanel

| attribute   | explain                                                           | type    | Default value |
| ----------- | ----------------------------------------------------------------- | ------- | ------------- |
| value       | The value of the currently selected panel                         | string  | -             |
| index       | Corresponding to the index in the data of the tab switching panel | string  | -             |
| keepMounted | Whether to render DOM structure when TabPanel is hidden           | boolean | false         |

## Style variables

### Tabs

| attribute      | explain                          | Default value          | global variable         |
| -------------- | -------------------------------- | ---------------------- | ----------------------- |
| --height       | Tabs height                      | 39px                   | --bui-tabs-height       |
| --color        | Font color                       | --bui-color-fg-subtle  | --bui-tabs-color        |
| --active-color | Activate Tab font color          | --bui-color-fg-default | --bui-tabs-active-color |
| --line-width   | Width of the lower marking line  | 18px                   | --bui-tabs-line-width   |
| --line-height  | Height of the lower marking line | 3PX                    | --bui-tabs-line-height  |
| --line-color   | Color of the lower marking line  | --bui-color-primary    | --bui-tabs-line-color   |
| --mask-width   | Mask width                       | 12px                   | --bui-tabs-mask-width   |
| --mask-height  | Mask height                      | 100%                   | --bui-tabs-mask-height  |

### Tab

| attribute   | explain          | Default value                                    | global variable     |
| ----------- | ---------------- | ------------------------------------------------ | ------------------- |
| --height    | Tab height       | 100%                                             | --bui-tab-height    |
| --padding   | Tab inner margin | var(--bui-spacing-lg) var(--bui-spacing-lg) 10px | --bui-tab-padding   |
| --font-size | Tab font size    | --bui-text-size-1                                | --bui-tab-font-size |
