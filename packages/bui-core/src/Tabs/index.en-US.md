---
group: Data Display
name: Tabs
---

# Tabs

A tab component used to switch between multiple content areas, supporting keyboard accessibility and custom rendering.

## Differences between Mini Program and H5

1. The Mini Program uses a gradient animation for the bottom indicator when switching tabs, while H5 uses a displacement animation.
2. In the Mini Program, when tabs exceed the scrollable area, clicking to activate will not automatically scroll the tab into the center of the view.

## Basic Usage

Use `Tab` and `TabPanel` components for layout.

```tsx
import React, { useState } from 'react';
import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';

export default () => {
  const [value, setValue] = useState('one');
  const handleChange = (e, { index }) => {
    console.log(`Click Tab, value index is: ${index}`);
    setValue(index);
  };

  return (
    <Stack alignItems="stretch">
      <Tabs style={{ marginBottom: 12 }} value={value} onChange={handleChange}>
        <Tab key="one" index="one">
          TAB ONE
        </Tab>
        <Tab key="two" index="two">
          TAB TWO
        </Tab>
        <Tab key="three" index="three">
          TAB THREE
        </Tab>
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

## Generate Tabs using `tabs` attribute

Quickly generate tabs using the `tabs` attribute.

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

## Disabled State

Disable a specific tab with the `disabled` attribute.

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

## Controlled Usage

Control the selected state of the Tabs component using the `value` attribute.

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

## Overflow Scroll

Supports horizontal scrolling when there are many tabs.

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

## Accessibility

- Tab has attributes such as `role="tab"`, `aria-disabled`, and `tabindex`.
- TabPanel has attributes such as `role="tabpanel"`, `tabindex`, and `aria-hidden`.

## API

### Tabs

| Attribute    | Description                                                          | Type                                               | Default |
| ------------ | -------------------------------------------------------------------- | -------------------------------------------------- | ------- |
| value        | Index value of the current selected panel; corresponds to tabs.index | string                                             | -       |
| defaultValue | Default index value for uncontrolled mode                            | string                                             | -       |
| tabs         | Data for switching panels                                            | ITabItem[]                                         | -       |
| onChange     | Callback for switching panels                                        | (e?: SyntheticEvent,data?:{index: string}) => void | -       |

**Note:** The `tabs` property and `children` are mutually exclusive. Only one method can be used at a time. If both are provided, the `tabs` property takes precedence.

### ITabItem

| Attribute | Description                   | Type            | Default |
| --------- | ----------------------------- | --------------- | ------- |
| title     | Panel title                   | React.ReactNode | -       |
| index     | Index value of the panel      | string          | -       |
| disabled  | Whether the panel is disabled | boolean         | false   |

### Tab

| Attribute | Description                   | Type                                               | Default |
| --------- | ----------------------------- | -------------------------------------------------- | ------- |
| index     | Index value of the panel      | string                                             | -       |
| disabled  | Whether the panel is disabled | boolean                                            | false   |
| onClick   | Callback when Tab is clicked  | (e?: SyntheticEvent,data?:{index: string}) => void | -       |

### TabPanel

| Attribute   | Description                                             | Type    | Default |
| ----------- | ------------------------------------------------------- | ------- | ------- |
| value       | Value of the currently selected panel                   | string  | -       |
| index       | Corresponding index in tabs switching panel data        | string  | -       |
| keepMounted | Whether to render DOM structure when TabPanel is hidden | boolean | false   |

## Style Variables

| Global Variable                    | Description                | Default Value                                      |
| ---------------------------------- | -------------------------- | -------------------------------------------------- |
| --bui-tabs-height                  | Tab height                 | `39px`                                             |
| --bui-tabs-font-weight             | Font weight                | `var(--bui-font-weight-medium)`                    |
| --bui-tabs-indicator-bg            | Indicator background color | `var(--bui-color-primary)`                         |
| --bui-tabs-indicator-height        | Indicator height           | `3PX`                                              |
| --bui-tabs-indicator-width         | Indicator width            | `24px`                                             |
| --bui-tabs-indicator-border-radius | Indicator border radius    | `3px 3px 0 0`                                      |
| --bui-tabs-indicator-bottom        | Indicator bottom position  | `0`                                                |
| --bui-tabs-indicator-box-shadow    | Indicator shadow           | `none`                                             |
| --bui-tabs-mask-width              | Mask width                 | `12px`                                             |
| --bui-tabs-mask-height             | Mask height                | `100%`                                             |
| --bui-tab-font-size                | Tab font size              | `var(--bui-text-size-1)`                           |
| --bui-tab-color                    | Tab color                  | `var(--bui-color-fg-subtle)`                       |
| --bui-tab-height                   | Tab height                 | `100%`                                             |
| --bui-tab-padding                  | Tab padding                | `var(--bui-spacing-lg) var(--bui-spacing-lg) 10px` |
| --bui-tab-active-color             | Active tab color           | `var(--bui-color-fg-default)`                      |
