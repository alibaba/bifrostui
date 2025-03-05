---
group: Basic Input
name: Radio Checkbox
---

# Radio Checkbox

Radio checkboxes allow users to select one option from a set of options.

## Code Examples

### Basic Usage

Control the state using `checked` and `onChange`.

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

### Passing Properties to Internal Input Tag

Properties passed via `inputProps` can be forwarded to the internal `<input>` tag.

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

### Internal Input Tag Name and Value

`name` and `value` can be directly passed to the internal `<input>` tag and will not be overridden by properties with the same name in `inputProps`.

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

### Label Position

The position of the label relative to the checkbox icon can be controlled using `labelPlacement`.

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
          Label on right
        </Radio>
        <Radio
          labelPlacement="bottom"
          checked={checked3}
          onChange={(e, { checked }) => {
            setChecked3(checked);
          }}
        >
          Label on bottom
        </Radio>
        <Radio
          labelPlacement="left"
          checked={checked4}
          onChange={(e, { checked }) => {
            setChecked4(checked);
          }}
        >
          Label on left
        </Radio>
      </div>
    </Stack>
  );
};
```

### Custom Icons

Customize icons for checked and unchecked states using `icon` and `checkedIcon`.

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

### Disabled State

Use `disabled` to disable the component. `RadioGroup.disabled` can disable the entire group.

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

Combine `RadioGroup` and `Radio` to create a radio button group. Each `Radio` should have a `value` attribute.

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
        <Radio value="Watergate Bridge">Watergate Bridge</Radio>
        <Radio value="Taobao Movie">Taobao Movie</Radio>
        <Radio value="Happy Sheep">Happy Sheep</Radio>
      </RadioGroup>
    </Stack>
  );
};
```

### Controlled Radio

Control `RadioGroup` with `value` and `Radio` with `checked`.

```tsx
import { Button, Radio, RadioGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('Taobao Movie');
  const [checked, setChecked] = useState(true);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            const data = value ? '' : 'Taobao Movie';
            setValue(data);
          }}
        >
          {value.length ? 'Unselect' : 'Select'} Taobao Movie
        </Button>
        <RadioGroup value={value}>
          <Radio value="Watergate Bridge">Watergate Bridge</Radio>
          <Radio value="Taobao Movie">Taobao Movie</Radio>
          <Radio value="Happy Sheep">Happy Sheep</Radio>
        </RadioGroup>
      </div>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? 'Uncheck' : 'Check'}
        </Button>
        <Radio checked={checked}>Taobao Movie</Radio>
      </div>
    </Stack>
  );
};
```

### Using Default Values

Use `defaultValue` to specify the default value for `RadioGroup`, and `defaultChecked` for `Radio`.

```tsx
import { Radio, RadioGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>RadioGroup:</div>
        <RadioGroup defaultValue="Taobao Movie">
          <Radio value="Watergate Bridge">Watergate Bridge</Radio>
          <Radio value="Taobao Movie">Taobao Movie</Radio>
          <Radio value="Happy Sheep">Happy Sheep</Radio>
        </RadioGroup>
      </div>

      <div>
        <div>Radio:</div>
        <Radio defaultChecked>Taobao Movie</Radio>
      </div>
    </Stack>
  );
};
```

## API

### RadioGroup

| Property     | Description                               | Type                                                     | Default |
| ------------ | ----------------------------------------- | -------------------------------------------------------- | ------- |
| defaultValue | Default selected option when uncontrolled | string                                                   | -       |
| value        | Selected option when controlled           | string                                                   | -       |
| disabled     | Whether the entire group is disabled      | boolean                                                  | false   |
| onChange     | Callback function for changes             | (e: React.SyntheticEvent, data: {value: string}) => void | -       |

### Radio

| Property       | Description                                       | Type                                                        | Default |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------- | ------- |
| defaultChecked | Default checked status when uncontrolled          | boolean                                                     | -       |
| checked        | Checked status when controlled                    | boolean                                                     | -       |
| inputProps     | Standard attributes for the internal `<input>`    | React.InputHTMLAttributes<HTMLInputElement\>                | -       |
| inputRef       | Ref for the internal `<input>`                    | React.Ref<HTMLInputElement\>                                | -       |
| name           | Name attribute for the `<input>`                  | string                                                      | -       |
| value          | Component's value; required if used in RadioGroup | string                                                      | -       |
| disabled       | Whether it is disabled                            | boolean                                                     | false   |
| icon           | Icon for unchecked state                          | ReactNode                                                   | -       |
| checkedIcon    | Icon for checked state                            | ReactNode                                                   | -       |
| labelPlacement | Position of the label                             | `left` \| `top` \| `right` \| `bottom`                      | `right` |
| onChange       | Callback function for changes                     | (e: React.SyntheticEvent, data: {checked: boolean}) => void | -       |

### Style Variables

| Property          | Description      | Default Value            | Global Variable             |
| ----------------- | ---------------- | ------------------------ | --------------------------- |
| --label-color     | Label text color | --bui-color-fg-default   | --bui-radio-label-color     |
| --label-font-size | Label font size  | --bui-text-size-1        | --bui-radio-label-font-size |
| --icon-font-size  | Icon font size   | --bui-title-size-2       | --bui-radio-icon-font-size  |
| --icon-padding    | Icon padding     | --bui-radio-icon-padding | 5px                         |
