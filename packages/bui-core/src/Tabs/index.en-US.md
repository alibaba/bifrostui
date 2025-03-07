---
group: Data Display
name: Tabs Tab Pages
---

# Tabs Tab Pages

Tab page switching component.

## Two Differences Between Mini Programs and H5:

1. Mini programs use a gradient animation for the bottom line of the Tab switch, while H5 uses a position move animation;
2. For Tabs that exceed the scrollable area in mini programs, clicking to activate cannot move them to the center of the view.

## Code Demonstrations

### Basic Usage

Use with Tab components to complete the layout.

```tsx
import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: 'Fruits', index: 'fruits' },
    { title: 'Vegetables', index: 'vegetables' },
    { title: 'Animals', index: 'animals' },
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
        Pineapple
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        Tomato
      </TabPanel>
      <TabPanel value={value} index="animals">
        Ant
      </TabPanel>
    </Stack>
  );
};
```

### Support Using tabs

Using `tabs` to generate Tabs.

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
          { title: 'Fruits', index: 'fruits' },
          { title: 'Vegetables', index: 'vegetables', disabled: true },
          { title: 'Animals', index: 'animals' },
        ]}
      />
      <TabPanel value={value} index="fruits">
        Pineapple
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        Tomato
      </TabPanel>
      <TabPanel value={value} index="animals">
        Ant
      </TabPanel>
    </Stack>
  );
};
```

### No Selection When Value Is Invalid

No Tab is selected when the value is invalid.

```tsx
import { Stack, Tab, TabPanel, Tabs, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('2');
  const defultList = [
    { title: 'The Battle at Lake Changjin', index: '1' },
    { title: 'Wolf Warrior 2', index: '2' },
    { title: 'Hi, Mom', index: '3' },
    { title: 'Ne Zha', index: '4' },
    { title: 'The Wandering Earth', index: '5' },
    { title: 'Detective Chinatown 3', index: '6' },
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
        Set to Invalid Value
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
        {tabList.length === 4 ? 'Increase' : 'Decrease'} TabList Length
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

### No Selection When Value Is Invalid (Using tabs)

No Tab is selected when the value is invalid.

```tsx
import { Stack, Tab, TabPanel, Tabs, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('2');
  const defultList = [
    { title: 'The Battle at Lake Changjin', index: '1' },
    { title: 'Wolf Warrior 2', index: '2' },
    { title: 'Hi, Mom', index: '3' },
    { title: 'Ne Zha', index: '4' },
    { title: 'The Wandering Earth', index: '5' },
    { title: 'Detective Chinatown 3', index: '6' },
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
        Set to Invalid Value
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
        {tabList.length === 4 ? 'Increase' : 'Decrease'} TabList Length
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

### Disabled State

Disable Tab clicks using `disabled`.

```tsx
import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: 'Fruits', index: 'fruits' },
    { title: 'Vegetables', index: 'vegetables' },
    { title: 'Animals', index: 'animals' },
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
        Pineapple
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        Tomato
      </TabPanel>
      <TabPanel value={value} index="animals">
        Ant
      </TabPanel>
    </Stack>
  );
};
```

### Controlled Tabs Component

Control the selected state of Tabs using the `value` property.

```tsx
import { Button, Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: 'Fruits', index: 'fruits' },
    { title: 'Vegetables', index: 'vegetables' },
    { title: 'Animals', index: 'animals' },
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
        <div>Pineapple</div>
        <Button
          onClick={() => {
            handleButton('animals');
          }}
        >
          I want Ants
        </Button>
        <Button
          onClick={() => {
            handleButton('vegetables');
          }}
        >
          I want Tomatoes
        </Button>
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        <div>Tomato</div>
        <Button
          onClick={() => {
            handleButton('fruits');
          }}
        >
          I want Pineapples
        </Button>
        <Button
          onClick={() => {
            handleButton('animals');
          }}
        >
          I want Ants
        </Button>
      </TabPanel>
      <TabPanel value={value} index="animals">
        <div>Ant</div>
        <Button
          onClick={() => {
            handleButton('fruits');
          }}
        >
          I want Pineapples
        </Button>
        <Button
          onClick={() => {
            handleButton('vegetables');
          }}
        >
          I want Tomatoes
        </Button>
      </TabPanel>
    </Stack>
  );
};
```

### Scrollable When Exceeding

Tabs become scrollable when there are too many.

```tsx
import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('2');
  const tabList = [
    { title: 'The Battle at Lake Changjin', index: '1' },
    { title: 'Wolf Warrior 2', index: '2' },
    { title: 'Hi, Mom', index: '3' },
    { title: 'Ne Zha', index: '4' },
    { title: 'The Wandering Earth', index: '5' },
    { title: 'Detective Chinatown 3', index: '6' },
    { title: 'Avengers: Endgame', index: '7' },
    { title: 'The Battle at Lake Changjin II: The Bridge', index: '8' },
    { title: 'Operation Red Sea', index: '9' },
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

| Property | Description                                                              | Type                                               | Default  |
| -------- | ------------------------------------------------------------------------ | -------------------------------------------------- | -------- |
| value    | Index value of the currently selected panel, corresponding to tabs.index | string                                             | -        |
| tabs     | Data for the switch panels                                               | ITabItem[]                                         | -        |
| align    | Alignment method                                                         | `start` \| `center`                                | `center` |
| onChange | Callback function for switching panels                                   | (e?: SyntheticEvent,data?:{index: string}) => void | -        |

### ITabItem

| Property | Description                   | Type            | Default |
| -------- | ----------------------------- | --------------- | ------- |
| title    | Panel title                   | React.ReactNode | -       |
| index    | Panel index value             | string          | -       |
| disabled | Whether the panel is disabled | boolean         | false   |

### Tab

| Property | Description                   | Type                                               | Default |
| -------- | ----------------------------- | -------------------------------------------------- | ------- |
| index    | Panel index value             | string                                             | -       |
| disabled | Whether the panel is disabled | boolean                                            | false   |
| onClick  | Callback for clicking on Tab  | (e?: SyntheticEvent,data?:{index: string}) => void | -       |

### TabPanel

| Property    | Description                                  | Type    | Default |
| ----------- | -------------------------------------------- | ------- | ------- |
| value       | Current selected panel's value               | string  | -       |
| index       | Corresponding index of tabs data             | string  | -       |
| keepMounted | Render DOM structure when TabPanel is hidden | boolean | false   |

## Style Variables

### Tabs

| Property       | Description           | Default Value          | Global Variable         |
| -------------- | --------------------- | ---------------------- | ----------------------- |
| --height       | Tabs height           | 39px                   | --bui-tabs-height       |
| --color        | Font color            | --bui-color-fg-subtle  | --bui-tabs-color        |
| --active-color | Active Tab font color | --bui-color-fg-default | --bui-tabs-active-color |
| --line-width   | Bottom line width     | 18px                   | --bui-tabs-line-width   |
| --line-height  | Bottom line height    | 3PX                    | --bui-tabs-line-height  |
| --line-color   | Bottom line color     | --bui-color-primary    | --bui-tabs-line-color   |
| --mask-width   | Mask layer width      | 12px                   | --bui-tabs-mask-width   |
| --mask-height  | Mask layer height     | 100%                   | --bui-tabs-mask-height  |

### Tab

| Property    | Description   | Default Value                                    | Global Variable     |
| ----------- | ------------- | ------------------------------------------------ | ------------------- |
| --height    | Tab height    | 100%                                             | --bui-tab-height    |
| --padding   | Tab padding   | var(--bui-spacing-lg) var(--bui-spacing-lg) 10px | --bui-tab-padding   |
| --font-size | Tab font size | --bui-text-size-1                                | --bui-tab-font-size |
