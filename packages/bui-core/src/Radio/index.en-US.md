---
group: Basic Input
name: Radio
---

# Radio

The Radio component enables users to select a single option from a set of choices.

## Basic Usage

Control state with `checked` and `onChange`.

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

## Passing Attributes to Internal Input Tag

Input attributes passed through `inputProps` can be transmitted to the internal `input` tag.

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

## Internal Input Tag Name and Value

`name` and `value` can be directly transmitted to the internal `input` tag and will not be overridden by attributes with the same name passed via `inputProps`.

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

## Label Position

Control the position of the label relative to the checkbox icon using `labelPlacement`.

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
          Label on top
        </Radio>
        <Radio
          labelPlacement="right"
          checked={checked2}
          onChange={(e, { checked }) => {
            setChecked2(checked);
          }}
        >
          Label on the right
        </Radio>
        <Radio
          labelPlacement="bottom"
          checked={checked3}
          onChange={(e, { checked }) => {
            setChecked3(checked);
          }}
        >
          Label on the bottom
        </Radio>
        <Radio
          labelPlacement="left"
          checked={checked4}
          onChange={(e, { checked }) => {
            setChecked4(checked);
          }}
        >
          Label on the left
        </Radio>
      </div>
    </Stack>
  );
};
```

## Custom Icon

Customize the unchecked and checked state icons using `icon` and `checkedIcon`.

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

## Disabled State

Use `disabled` to disable the component or `RadioGroup.disabled` to disable an entire group.

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

## Radio Group

Combine `RadioGroup` and `Radio` to create a group, ensuring `Radio` includes the `value` attribute.

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

## Controlled Radio

Control the `RadioGroup` component with `value` and the `Radio` component with `checked`.

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
          {value.length ? 'Cancel' : 'Select'} 淘票票
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
          {checked ? 'Cancel' : 'Select'}
        </Button>
        <Radio checked={checked}>淘票票</Radio>
      </div>
    </Stack>
  );
};
```

## Using Default Values

Set a default value for `RadioGroup` using `defaultValue` and for `Radio` using `defaultChecked`.

```tsx
import { Radio, RadioGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>RadioGroup:</div>
        <RadioGroup defaultValue="淘票票">
          <Radio value="水门桥">水门桥</Radio>
          <Radio value="淘票票">淘票票</Radio>
          <Radio value="喜洋洋">喜洋洋</Radio>
        </RadioGroup>
      </div>

      <div>
        <div>Radio:</div>
        <Radio defaultChecked>淘票票</Radio>
      </div>
    </Stack>
  );
};
```

## Accessibility

Default accessibility support includes:

- Adding the aria-disabled attribute automatically when `disabled=true`
- Additional accessibility attributes can be set using `inputProps`, e.g., inputProps={{ 'aria-label': 'Radio label' }}

## API

### RadioGroup

| Attribute    | Description                                             | Type                                                       | Default |
| ------------ | ------------------------------------------------------- | ---------------------------------------------------------- | ------- |
| defaultValue | Default selected option for uncontrolled components     | string                                                     | -       |
| value        | Specifies the selected option for controlled components | string                                                     | false   |
| disabled     | Whether the entire group is disabled                    | boolean                                                    | false   |
| onChange     | Callback function triggered on change                   | (e: React.SyntheticEvent, data: { value: string }) => void | -       |

### Radio

| Attribute      | Description                                             | Type                                                          | Default |
| -------------- | ------------------------------------------------------- | ------------------------------------------------------------- | ------- |
| defaultChecked | Default checked state for uncontrolled components       | boolean                                                       | false   |
| checked        | Checked state for controlled components                 | boolean                                                       | false   |
| inputProps     | Standard attributes for the internal `<input>` tag      | React.InputHTMLAttributes<HTMLInputElement\>                  | -       |
| inputRef       | Ref for the internal `<input>` tag                      | React.Ref<HTMLInputElement\>                                  | -       |
| name           | `<input>` name identifier                               | string                                                        | -       |
| value          | Value for the component, required when using RadioGroup | string                                                        | -       |
| disabled       | Whether the component is disabled                       | boolean                                                       | false   |
| icon           | Icon for the unchecked state                            | ReactNode                                                     | -       |
| checkedIcon    | Icon for the checked state                              | ReactNode                                                     | -       |
| labelPlacement | Position of the label                                   | `left` \| `top` \| `right` \| `bottom`                        | `right` |
| onChange       | Callback function triggered on change                   | (e: React.SyntheticEvent, data: { checked: boolean }) => void | -       |

## Style Variables

| Global Variable             | Description      | Default Value                 |
| --------------------------- | ---------------- | ----------------------------- |
| --bui-radio-label-color     | Label text color | `var(--bui-color-fg-default)` |
| --bui-radio-label-font-size | Label text size  | `var(--bui-text-size-1)`      |
| --bui-radio-icon-padding    | Icon padding     | `5px`                         |
