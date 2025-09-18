---
group: Basic Input
name: Checkbox
---

# Checkbox

Checkbox provides users with the option to select multiple items or deselect selections when displaying a series of options.

## Basic Usage

Control state through `checked` and `onChange`.

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

## Passing Attributes to Internal input Tag

Input attributes passed through `inputProps` can be forwarded to the inner `input` tag.

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

## name and value for Internal input Tag

`name` and `value` can be directly forwarded to the internal `input` tag and will not be overridden by properties with the same name passed through `inputProps`.

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

## Label Placement

Control the position of the label relative to the checkbox icon through `labelPlacement`.

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
          Label above
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
          Label below
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

## Custom Icons

Customize the icon for the unchecked state with `icon`, and customize the checked state icon with `checkedIcon`.

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

## Disabled State

Disable the component using `disabled`. The entire group can be disabled with `CheckboxGroup.disabled`.

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

Use `CheckboxGroup` with `Checkbox` to create a group of checkboxes. In this case, `Checkbox` should provide the `value` attribute.

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
        <Checkbox value="水门桥">水门桥</Checkbox>
        <Checkbox value="淘票票">淘票票</Checkbox>
        <Checkbox value="喜洋洋">喜洋洋</Checkbox>
      </CheckboxGroup>
    </Stack>
  );
};
```

## Controlled Checkbox

Control `CheckboxGroup` component with `value`, and `Checkbox` component with `checked`.

```tsx
import { Button, Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(['水门桥', '淘票票', '喜洋洋']);
  const [checked, setChecked] = useState(true);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            const data = value.length ? [] : ['水门桥', '淘票票', '喜洋洋'];
            setValue(data);
          }}
        >
          {value.length ? 'Uncheck' : 'Check'} All
        </Button>
        <CheckboxGroup value={value}>
          <Checkbox value="水门桥">水门桥</Checkbox>
          <Checkbox value="淘票票">淘票票</Checkbox>
          <Checkbox value="喜洋洋">喜洋洋</Checkbox>
        </CheckboxGroup>
      </div>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? 'Cancel' : 'Select'}
        </Button>
        <Checkbox checked={checked}>淘票票</Checkbox>
      </div>
    </Stack>
  );
};
```

## Using Default Values

Specify default values for `CheckboxGroup` using `defaultValue`, and for `Checkbox` using `defaultChecked`.

```tsx
import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>CheckboxGroup:</div>
        <CheckboxGroup defaultValue={['水门桥', '淘票票', '喜洋洋']}>
          <Checkbox value="水门桥">水门桥</Checkbox>
          <Checkbox value="淘票票">淘票票</Checkbox>
          <Checkbox value="喜洋洋">喜洋洋</Checkbox>
        </CheckboxGroup>
      </div>

      <div>
        <div>Checkbox:</div>
        <Checkbox defaultChecked>淘票票</Checkbox>
      </div>
    </Stack>
  );
};
```

## Accessibility

Default accessibility features include:

- When `disabled=true`, the aria-disabled attribute is automatically added.
- Additional accessibility attributes can be set using the `inputProps` attribute, such as inputProps={{ 'aria-label': 'Checkbox label' }}

## API

### CheckboxGroup

| Property     | Description                                   | Type                                                       | Default |
| ------------ | --------------------------------------------- | ---------------------------------------------------------- | ------- |
| defaultValue | Default selected options for uncontrolled use | string[]                                                   | -       |
| value        | Selected options for controlled use           | string[]                                                   | -       |
| disabled     | Disable the entire group                      | boolean                                                    | false   |
| onChange     | Callback function when changes occur          | (e: React.SyntheticEvent, data: {value: string[]}) => void | -       |

### Checkbox

| Property       | Description                                           | Type                                                        | Default |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------- | ------- |
| defaultChecked | Whether checked by default for uncontrolled use       | boolean                                                     | false   |
| checked        | Whether checked for controlled use                    | boolean                                                     | false   |
| inputProps     | Standard attributes for the internal `<input>` tag    | React.InputHTMLAttributes<HTMLInputElement\>                | -       |
| inputRef       | Ref for the internal `<input>` tag                    | React.Ref<HTMLInputElement\>                                | -       |
| name           | `<input>` name identifier                             | string                                                      | -       |
| value          | Component value, should be provided for CheckboxGroup | string                                                      | -       |
| disabled       | Whether the component is disabled                     | boolean                                                     | false   |
| icon           | Icon for unchecked state                              | ReactNode                                                   | -       |
| checkedIcon    | Icon for checked state                                | ReactNode                                                   | -       |
| labelPlacement | Position of the label                                 | `left` \| `top` \| `right` \| `bottom`                      | `right` |
| onChange       | Callback function when changes occur                  | (e: React.SyntheticEvent, data: {checked: boolean}) => void | -       |

## Style Variables

| Global Variable                 | Description               | Default                       |
| ------------------------------- | ------------------------- | ----------------------------- |
| --bui-checkbox-label-color      | Color of the label text   | `var(--bui-color-fg-default)` |
| --bui-checkbox-label-font-size  | Font size of the label    | `var(--bui-text-size-1)`      |
| --bui-checkbox-icon-font-size   | Size of the icon          | `var(--bui-title-size-2)`     |
| --bui-checkbox-disabled-opacity | Opacity of disabled state | `0.5`                         |
| --bui-checkbox-icon-padding     | Padding of the icon       | `5px`                         |

```

```
