---
group: Basic input
name: Select
---

# Select

The Select component is used to collect user provided information from a list of options.
Currently, the Select component only supports`Single Choice`，please wait for us to unlock more features.

## Code demonstration

### Basic usage

By combining`SelectOption` item, achieving a dropdown selection effect.

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

Support through`placeholder` set the selection box to display default content.

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

Support through`defaultValue`attribute, initial selected value.

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

By whether it is transmitted or not`value` distinguish whether it is a controlled component:
Controlled situation business passed`onChange`callback control component value;
Uncontrolled situations can be addressed through`inputRef` retrieve component value;

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

Provide`disabled`attribute to prohibit user operations.
You can do it through`Select`上set up`disabled`all operations are prohibited, but can also be done in`SelectOption`set up`disabled`对an option prohibits operation.

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

Provide the ability to customize icons, which can be achieved through`icon` customize icons based on sex.

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

When you don't want to use`label` for options`SelectOptions` when displaying content, it can be done through`children` customized options display content.

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

`label` hold`ReactNode` type, when you want to customize a selector`Select`the content can be displayed through`SelectOption`item attribute:`label`与`children`，the combination of the two achieves customization.

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

The Select component not only provides basic`onChange`adjustment, also provides options`open`、`fold`event callback.

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

| attribute     | explain                                       | type                                            | Default value |
| ------------- | --------------------------------------------- | ----------------------------------------------- | ------------- |
| inputRef      | Selector inputRef                             | Ref                                             | -             |
| inputProps    | Selector `<input/>` tag transparent attribute | React.InputHTMLAttributes                       | -             |
| BackdropProps | Mask<Backdrop/>tag transparent attribute      | React.DivHTMLAttributes                         | -             |
| name          | Selector `<input/>` tag name identifier       | string                                          | -             |
| value         | Select value with selector                    | string ｜ number                                | -             |
| defaultValue  | Selector default value                        | string ｜ number                                | -             |
| placeholder   | Selector placeholder content                  | ReactNode                                       | -             |
| icon          | Selector icon                                 | ReactNode                                       | -             |
| disabled      | Is the selector clickable                     | boolean                                         | false         |
| open          | Is the selector dropdown option enabled       | boolean                                         | false         |
| onChange      | The callback when selecting a certain item    | (e:SyntheticEvent, data:{value:string}) => void | -             |
| onOpen        | Callback when expanding dropdown menu         | () => void                                      | -             |
| onClose       | Callback when folding dropdown menu           | () => void                                      | -             |

##### SelectOptionProps

| attribute | explain                 | type             | Default value |
| --------- | ----------------------- | ---------------- | ------------- |
| label     | Option backfill content | ReactNode        | -             |
| value     | Option value            | string ｜ number | -             |
| disabled  | Options are clickable   | boolean          | false         |
