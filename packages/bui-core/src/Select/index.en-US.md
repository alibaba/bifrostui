---
group: Basic input
name: Select dropdown selector
---

# Select dropdown selector

The Select component is used to collect user provided information from a list of options.
At present, the Select component only supports' single selection '. Please wait for us to unlock more features.

## Code demonstration

### Basic usage

By combining the 'SelectOption' components, the dropdown selection effect can be achieved.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### placeholder

Support configuring the default display content of the selection box through 'placeholder'.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select placeholder="下拉选择">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

## Initialize default values

Support initial selection value through the 'defaultValue' attribute.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

## Uncontrolled/Uncontrolled

Distinguish whether it is a controlled component by passing in 'value':
Under controlled circumstances, the business retrieves the control component value through 'onChange' callback;
Uncontrolled situations can obtain component values through 'inputRef';

```tsx
import { Alert, Button, Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const [curValue, setCurValue] = useState('');
  const selectRef = useRef(null);
  const [alert, setAlert] = useState(false);

  return (
    <>
      {alert && (
        <Alert color="success">{`选择器A值：${curValue || ''}; 选择器B值: ${
          selectRef.current.value
        }`}</Alert>
      )}
      <Stack
        spacing="20px"
        alignItems="stretch"
        style={{ background: '#eee', padding: '50px' }}
      >
        <Select
          placeholder="选择器A"
          value={curValue}
          onChange={(e, { value = '' }) => {
            setCurValue(value);
          }}
        >
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Select placeholder="选择器B" inputRef={selectRef}>
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Button
          onClick={(e) => {
            setAlert(true);
            setTimeout(() => {
              setAlert(false);
            }, 1000);
          }}
        >
          提交
        </Button>
      </Stack>
    </>
  );
};
```

## Disable

Provide the 'disabled' attribute to prohibit user operations.
You can disable all operations by setting 'disabled' on 'Select', or disable operations on a specific option by setting 'disabled' on 'SelectOption'.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack
      spacing="20px"
      alignItems="stretch"
      style={{ background: '#eee', padding: '50px' }}
    >
      <Select disabled placeholder="禁用">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
      <Select defaultValue={1}>
        {options.map((item, index) => (
          <SelectOption
            key={index}
            value={item.value}
            label={item.label}
            disabled={index === 2}
          />
        ))}
      </Select>
    </Stack>
  );
};
```

## customized

The following is an example of a customized Select component.

#### customize icons

Provide the ability to customize icons, which can be customized through the 'icon' attribute.

```tsx
import React from 'react';
import { Select, SelectOption, Stack } from '@bifrostui/react';
import { ArrowDownwardIcon } from '@bifrostui/icons';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select icon={<ArrowDownwardIcon />} placeholder="自定义图标">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

#### Customized options display content

When you do not want to use 'label' as an option 'SelectOptions' to display content, you can customize the option display content through' children '.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((option, index) => {
          const { value, label } = option;

          return (
            <SelectOption value={value} label={label} key={index}>
              选项 - {label}
            </SelectOption>
          );
        })}
      </Select>
    </Stack>
  );
};
```

### Customized selector displays results

Label 'supports the' ReactNode 'type. When you want to customize the display content of the selector' Select ', you can use the' SelectOption 'component properties:' label 'and' children ', and use them together to achieve customization.

```tsx
import React from 'react';
import { Select, SelectOption, Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((option, index) => {
          const { value, label } = option;
          const customLabel = (
            <Stack direction="row" spacing="10px">
              <SettingsOutlinedIcon />
              {label}
            </Stack>
          );

          return (
            <SelectOption label={customLabel} value={value} key={index}>
              选项-{label}
            </SelectOption>
          );
        })}
      </Select>
    </Stack>
  );
};
```

## event

The Select component not only provides basic 'onChange' callbacks, but also event callbacks for options such as' unfold 'and' collapse '.

```tsx
import { Alert, Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const [curValue, setCurValue] = useState('初始化');

  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Alert color="info">当前状态：{curValue}</Alert>
      <Select
        onOpen={() => {
          setCurValue('打开下拉选择器');
        }}
        onClose={() => {
          setCurValue('关闭下拉选择器');
        }}
        placeholder="下拉选择"
      >
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### API

##### SelectProps

| attribute     | explain                                            | type                                            | Default value |
| ------------- | -------------------------------------------------- | ----------------------------------------------- | ------------- |
| inputRef      | Selector inputRef                                  | Ref                                             | -             |
| inputProps    | selector `<input/>` Tag transparent attribute      | React.InputHTMLAttributes                       | -             |
| BackdropProps | Mask layer `<Backdrop/>` Tag transparent attribute | React.DivHTMLAttributes                         | -             |
| name          | selector `<input/>` Label name identification      | string                                          | -             |
| value         | Select value with selector                         | string ｜ number                                | -             |
| defaultValue  | Selector default value                             | string ｜ number                                | -             |
| placeholder   | Selector placeholder content                       | ReactNode                                       | -             |
| icon          | Selector icon                                      | ReactNode                                       | -             |
| disabled      | Is the selector clickable                          | boolean                                         | false         |
| open          | Is the selector dropdown option enabled            | boolean                                         | false         |
| onChange      | The callback when selecting a certain item         | (e:SyntheticEvent, data:{value:string}) => void | -             |
| onOpen        | Callback when expanding dropdown menu              | () => void                                      | -             |
| onClose       | Callback when folding dropdown menu                | () => void                                      | -             |

##### SelectOptionProps

| attribute | explain                 | type             | Default value |
| --------- | ----------------------- | ---------------- | ------------- |
| label     | Option backfill content | ReactNode        | -             |
| value     | Option value            | string ｜ number | -             |
| disabled  | Options are clickable   | boolean          | false         |

### Style variables

| attribute                     | explain                                    | Default value           | global variable                       |
| ----------------------------- | ------------------------------------------ | ----------------------- | ------------------------------------- |
| --height                      | Selector height                            | 27px                    | --bui-select-height                   |
| --mini-width                  | Minimum width selector                     | 100px                   | --bui-select-mini-width               |
| --font-size                   | Select font size                           | var(--bui-title-size-3) | --bui-select-font-size                |
| --padding                     | Selector margin                            | 100px                   | --bui-select-mini-width               |
| --option-container-padding    | Overall inner margin of dropdown box       | 3px 0                   | --bui-select-option-container-padding |
| --option-container-margin-top | The overall top margin of the dropdown box | 6px                     | --bui-select-option-margin-top        |
| --option-padding              | Dropdown box single option margin          | 0 14px                  | --bui-select-option-padding           |
| --option-margin               | Dropdown box single option margin          | 0 3px                   | --bui-select-option-margin            |
| --option-height               | Drop down box for individual option height | 27px                    | --bui-select-option-height            |
