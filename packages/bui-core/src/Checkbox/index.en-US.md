---
group: Basic Input
name: Checkbox
---

# Checkbox

Checkbox, providing users with the option to select multiple items or deselect selected items when a series of options are displayed.

## Code Demos

### Basic Usage

Control the state via `checked` and `onChange`.

```tsx
import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};
```

### Passing Attributes to Internal Input Tag

Attributes passed via `inputProps` can be forwarded to the internal `<input>` tag.

```tsx
import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        inputProps={{
          className: 'my-input',
        }}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};
```

### Internal Input Tag's Name and Value

`name` and `value` can be directly passed to the internal `<input>` tag and will not be overridden by properties with the same name in `inputProps`.

```tsx
import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        name="myCheckbox"
        value="tpp"
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};
```

### Label Placement

Use `labelPlacement` to control the position of the label relative to the checkbox icon.

```tsx
import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Checkbox
          labelPlacement="top"
          checked={checked1}
          onChange={(e, { checked }) => {
            setChecked1(checked);
          }}
        >
          Label on top
        </Checkbox>
        <Checkbox
          labelPlacement="right"
          checked={checked2}
          onChange={(e, { checked }) => {
            setChecked2(checked);
          }}
        >
          Label on right
        </Checkbox>
        <Checkbox
          labelPlacement="bottom"
          checked={checked3}
          onChange={(e, { checked }) => {
            setChecked3(checked);
          }}
        >
          Label on bottom
        </Checkbox>
        <Checkbox
          labelPlacement="left"
          checked={checked4}
          onChange={(e, { checked }) => {
            setChecked4(checked);
          }}
        >
          Label on left
        </Checkbox>
      </div>
    </Stack>
  );
};
```

### Custom Icons

Customize the icons for unchecked (`icon`) and checked (`checkedIcon`) states.

```tsx
import React, { useState } from 'react';
import { Checkbox, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        icon={<HeartOutlinedIcon htmlColor="#ccc" />}
        checkedIcon={<HeartFilledIcon color="primary" />}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};
```

### Disabled State

Use `disabled` to disable the component. `CheckboxGroup.disabled` can disable the entire group.

```tsx
import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked] = useState(false);
  return (
    <Stack>
      <Checkbox checked={checked} disabled>
        Checkbox
      </Checkbox>
    </Stack>
  );
};
```

#### Checkbox Group

Combine `CheckboxGroup` and `Checkbox` to create a group of checkboxes. In this case, each `Checkbox` should have a `value` attribute.

```tsx
import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState([]);
  const handleGroupChange = (e, data) => {
    console.log('handleGroupChange', e, data);
    setValue(data.value);
  };
  return (
    <Stack>
      <CheckboxGroup value={value} onChange={handleGroupChange}>
        <Checkbox value="watergate">Watergate</Checkbox>
        <Checkbox value="taopiaopiao">Taopiaopiao</Checkbox>
        <Checkbox value="xiyangyang">Xiyangyang</Checkbox>
      </CheckboxGroup>
    </Stack>
  );
};
```

### Controlled Checkbox

Control `CheckboxGroup` using `value`, and control `Checkbox` using `checked`.

```tsx
import { Button, Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState([
    'watergate',
    'taopiaopiao',
    'xiyangyang',
  ]);
  const [checked, setChecked] = useState(true);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            const data = value.length
              ? []
              : ['watergate', 'taopiaopiao', 'xiyangyang'];
            setValue(data);
          }}
        >
          {value.length ? 'Uncheck' : 'Check'} All
        </Button>
        <CheckboxGroup value={value}>
          <Checkbox value="watergate">Watergate</Checkbox>
          <Checkbox value="taopiaopiao">Taopiaopiao</Checkbox>
          <Checkbox value="xiyangyang">Xiyangyang</Checkbox>
        </CheckboxGroup>
      </div>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? 'Uncheck' : 'Check'}
        </Button>
        <Checkbox checked={checked}>Taopiaopiao</Checkbox>
      </div>
    </Stack>
  );
};
```

### Using Default Values

Use `defaultValue` to specify the default values for `CheckboxGroup` and `defaultChecked` for `Checkbox`.

```tsx
import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>CheckboxGroup:</div>
        <CheckboxGroup
          defaultValue={['watergate', 'taopiaopiao', 'xiyangyang']}
        >
          <Checkbox value="watergate">Watergate</Checkbox>
          <Checkbox value="taopiaopiao">Taopiaopiao</Checkbox>
          <Checkbox value="xiyangyang">Xiyangyang</Checkbox>
        </CheckboxGroup>
      </div>

      <div>
        <div>Checkbox:</div>
        <Checkbox defaultChecked>Taopiaopiao</Checkbox>
      </div>
    </Stack>
  );
};
```

## API

### CheckboxGroup

| Property     | Description                                      | Type                                                       | Default |
| ------------ | ------------------------------------------------ | ---------------------------------------------------------- | ------- |
| defaultValue | Default selected options, used when uncontrolled | string[]                                                   | -       |
| value        | Selected options, used when controlled           | string[]                                                   | -       |
| disabled     | Whether the entire group is disabled             | boolean                                                    | false   |
| onChange     | Callback function when the selection changes     | (e: React.SyntheticEvent, data: {value: string[]}) => void | -       |

### Checkbox

| Property       | Description                                        | Type                                                        | Default |
| -------------- | -------------------------------------------------- | ----------------------------------------------------------- | ------- |
| defaultChecked | Default checked state, used when uncontrolled      | boolean                                                     | -       |
| checked        | Checked state, used when controlled                | boolean                                                     | -       |
| inputProps     | Standard attributes for the internal `<input>` tag | React.InputHTMLAttributes<HTMLInputElement\>                | -       |
| inputRef       | Ref for the internal `<input>` tag                 | React.Ref<HTMLInputElement\>                                | -       |
| name           | Name attribute for the `<input>`                   | string                                                      | -       |
| value          | Component value, required if used in CheckboxGroup | string                                                      | -       |
| disabled       | Whether the checkbox is disabled                   | boolean                                                     | false   |
| icon           | Icon for unchecked state                           | ReactNode                                                   | -       |
| checkedIcon    | Icon for checked state                             | ReactNode                                                   | -       |
| labelPlacement | Position of the label                              | `left` \| `top` \| `right` \| `bottom`                      | `right` |
| onChange       | Callback function when the state changes           | (e: React.SyntheticEvent, data: {checked: boolean}) => void | -       |

## Style Variables

| Property           | Description            | Default Value          | Global Variable                 |
| ------------------ | ---------------------- | ---------------------- | ------------------------------- |
| --label-color      | Label text color       | --bui-color-fg-default | --bui-checkbox-label-color      |
| --label-font-size  | Label font size        | --bui-text-size-1      | --bui-checkbox-label-font-size  |
| --icon-font-size   | Icon font size         | --bui-title-size-2     | --bui-checkbox-icon-font-size   |
| --disabled-opacity | Disabled state opacity | 0.5                    | --bui-checkbox-disabled-opacity |
| --icon-padding     | Icon padding           | 5px                    | --bui-checkbox-icon-padding     |
