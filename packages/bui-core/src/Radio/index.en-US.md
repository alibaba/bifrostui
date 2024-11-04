---
group: Basic input
name: Radio
---

# Radio

A radio button that allows users to select an option from a set of options.

## Code demonstration

### Basic Usage

Adopt`checked`and`onChange`control status.

```tsx
import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
      >
        Radio
      </Radio>
    </Stack>
  );
};
```

### Transmitting attributes transparently to internal input tags

Adopt`inputProps`the input attribute passed in can be transparently transmitted internally`input` sign.

```tsx
import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        inputProps={{
          className: 'my-input',
        }}
      >
        Radio
      </Radio>
    </Stack>
  );
};
```

### Internal input tags name and value

`name`and`value`can be directly transmitted to the interior`input`sign, it won't be accepted`inputProps`the attribute with the same name passed in is overwritten.

```tsx
import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        name="myRadio"
        value="tpp"
      >
        Radio
      </Radio>
    </Stack>
  );
};
```

### Copy position

Adopt`labelPlacement`you can control the position of the text in the checkbox icon.

```tsx
import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Radio
          labelPlacement="top"
          checked={checked1}
          onChange={(e, { checked }) => {
            setChecked1(checked);
          }}
        >
          文案在上边
        </Radio>
        <Radio
          labelPlacement="right"
          checked={checked2}
          onChange={(e, { checked }) => {
            setChecked2(checked);
          }}
        >
          文案在右边
        </Radio>
        <Radio
          labelPlacement="bottom"
          checked={checked3}
          onChange={(e, { checked }) => {
            setChecked3(checked);
          }}
        >
          文案在下边
        </Radio>
        <Radio
          labelPlacement="left"
          checked={checked4}
          onChange={(e, { checked }) => {
            setChecked4(checked);
          }}
        >
          文案在左边
        </Radio>
      </div>
    </Stack>
  );
};
```

### Customize icons

Adopt`icon`can be customized as a selected status icon,`checkedIcon`customizable selection status icon.

```tsx
import React, { useState } from 'react';
import { Radio, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        icon={<HeartOutlinedIcon htmlColor="#ccc" />}
        checkedIcon={<HeartFilledIcon color="primary" />}
      >
        Radio
      </Radio>
    </Stack>
  );
};
```

### Disabled status

Use`disabled`to disable components,`RadioGroup.disabled`can be disabled as a whole group.

```tsx
import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked] = useState(false);
  return (
    <Stack>
      <Radio checked={checked} disabled>
        Radio
      </Radio>
    </Stack>
  );
};
```

#### Radio Group

`RadioGroup`and`Radio`combination can achieve checkbox grouping, and at this time`Radio`it should be passed in`value`attributes.

```tsx
import { Radio, RadioGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');
  const handleGroupChange = (e, data) => {
    console.log('handleGroupChange', e, data);
    setValue(data.value);
  };
  return (
    <Stack>
      <RadioGroup value={value} onChange={handleGroupChange}>
        <Radio value="水门桥">水门桥</Radio>
        <Radio value="淘票票">淘票票</Radio>
        <Radio value="喜洋洋">喜洋洋</Radio>
      </RadioGroup>
    </Stack>
  );
};
```

### Controlled Radio

Adopt`value`control`RadioGroup`components, through`checked`control`Radio`components.

```tsx
import { Button, Radio, RadioGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('淘票票');
  const [checked, setChecked] = useState(true);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            const data = value ? '' : '淘票票';
            setValue(data);
          }}
        >
          {value.length ? '取消' : '选择'} 淘票票
        </Button>
        <RadioGroup value={value}>
          <Radio value="水门桥">水门桥</Radio>
          <Radio value="淘票票">淘票票</Radio>
          <Radio value="喜洋洋">喜洋洋</Radio>
        </RadioGroup>
      </div>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? '取消' : '选中'}
        </Button>
        <Radio checked={checked}>淘票票</Radio>
      </div>
    </Stack>
  );
};
```

### Use default values

Use`defaultValue`appoint`RadioGroup`component default value, using`defaultChecked`appoint`Radio`component default values.

```tsx
import { Radio, RadioGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>RadioGroup：</div>
        <RadioGroup defaultValue="淘票票">
          <Radio value="水门桥">水门桥</Radio>
          <Radio value="淘票票">淘票票</Radio>
          <Radio value="喜洋洋">喜洋洋</Radio>
        </RadioGroup>
      </div>

      <div>
        <div>Radio：</div>
        <Radio defaultChecked>淘票票</Radio>
      </div>
    </Stack>
  );
};
```

## API

### RadioGroup

| attribute    | explain                                                                 | type                                                    | Default value |
| ------------ | ----------------------------------------------------------------------- | ------------------------------------------------------- | ------------- |
| defaultValue | The default selected option, used when the component is uncontrolled    | string                                                  | -             |
| value        | Specify the selected option to be used when the component is controlled | string                                                  | -             |
| disabled     | Is the entire group disabled                                            | boolean                                                 | false         |
| onChange     | The callback function during changes                                    | (e: React.SyntheticEvent,data: {value: string}) => void | -             |

### Radio

| attribute      | explain                                                                    | type                                                       | Default value |
| -------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------- |
| defaultChecked | Whether it is selected by default, used when the component is uncontrolled | boolean                                                    | -             |
| checked        | Is it selected to be used when the component is controlled                 | boolean                                                    | -             |
| inputProps     | Standard properties of internal<input>tags                                 | React.InputHTMLAttributes<HTMLInputElement\>               | -             |
| inputRef       | Ref for internal<input>tag                                                 | React.Ref<HTMLInputElement\>                               | -             |
| name           | `<input>` Name identifier                                                  | string                                                     | -             |
| value          | The value of the component should be passed in if RadioGroup is used       | string                                                     | -             |
| disabled       | Do you want to disable it                                                  | boolean                                                    | false         |
| icon           | Unchecked status icon                                                      | ReactNode                                                  | -             |
| checkedIcon    | Select status icon                                                         | ReactNode                                                  | -             |
| labelPlacement | Copy position                                                              | `left` \| `top` \| `right` \| `bottom`                     | `right`       |
| onChange       | The callback function during changes                                       | (e: React.SyntheticEvent,data: {checked: boolean}) => void | -             |

### Style variables

| attribute         | explain         | Default value          | global variable |
| ----------------- | --------------- | ---------------------- | --------------- |
| --label-color     | Text font color | --bui-color-fg-default | -               |
| --label-font-size | Copy font size  | --bui-text-size-1      | -               |
| --icon-font-size  | Icon font size  | --bui-title-size-2     | -               |
