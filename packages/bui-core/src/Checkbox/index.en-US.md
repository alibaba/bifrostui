---
group: Basic input
name: Checkbox checkbox
---

# Checkbox checkbox

Checkboxes provide users with multiple options to choose from or cancel selected items when displaying a series of options.

## Code demonstration

### Basic Usage

Control the status through 'checked' and 'onChange'.

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

### Transmitting attributes transparently to internal input tags

The input property passed through 'inputProps' can be passed transparently to the internal' input 'tag.

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

### Internal input tags name and value

Name 'and' value 'can be directly passed through to the internal' input 'tag without being overwritten by the same named attribute passed in by' inputProps'.

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

### Copy position

The position of the text in the checkbox icon can be controlled through 'labelPlacement'.

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
          文案在上边
        </Checkbox>
        <Checkbox
          labelPlacement="right"
          checked={checked2}
          onChange={(e, { checked }) => {
            setChecked2(checked);
          }}
        >
          文案在右边
        </Checkbox>
        <Checkbox
          labelPlacement="bottom"
          checked={checked3}
          onChange={(e, { checked }) => {
            setChecked3(checked);
          }}
        >
          文案在下边
        </Checkbox>
        <Checkbox
          labelPlacement="left"
          checked={checked4}
          onChange={(e, { checked }) => {
            setChecked4(checked);
          }}
        >
          文案在左边
        </Checkbox>
      </div>
    </Stack>
  );
};
```

### Customize icons

The 'icon' can be customized as a selected status icon, and the 'checkedIcon' can be customized as a selected status icon.

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

### Disabled status

Use 'disabled' to disable components, and 'CheckboxGroup. disabled' can disable the entire group.

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

#### Checkbox group

The combination of CheckboxGroup and Checkbox can implement a checkbox group, and the Checkbox should be passed with the value attribute.

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

### Controlled Checkbox

Control the CheckboxGroup component through 'value' and the Checkbox component through 'checked'.

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
          {checked ? '取消' : '选中'}
        </Button>
        <Checkbox checked={checked}>淘票票</Checkbox>
      </div>
    </Stack>
  );
};
```

### Use default values

Use 'defaultValue' to specify the default value of the 'CheckboxGroup' component, and use 'defaultChecked' to specify the default value of the 'Checkbox' component.

```tsx
import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>CheckboxGroup：</div>
        <CheckboxGroup defaultValue={['水门桥', '淘票票', '喜洋洋']}>
          <Checkbox value="水门桥">水门桥</Checkbox>
          <Checkbox value="淘票票">淘票票</Checkbox>
          <Checkbox value="喜洋洋">喜洋洋</Checkbox>
        </CheckboxGroup>
      </div>

      <div>
        <div>Checkbox：</div>
        <Checkbox defaultChecked>淘票票</Checkbox>
      </div>
    </Stack>
  );
};
```

## API

### CheckboxGroup

| attribute    | explain                                                                 | type                                                      | Default value |
| ------------ | ----------------------------------------------------------------------- | --------------------------------------------------------- | ------------- |
| defaultValue | The default selected option, used when the component is uncontrolled    | string[]                                                  | -             |
| value        | Specify the selected option to be used when the component is controlled | string[]                                                  | -             |
| disabled     | Is the entire group disabled                                            | boolean                                                   | false         |
| onChange     | The callback function during changes                                    | (e: React.SyntheticEvent,data: {value: string[]}) => void | -             |

### Checkbox

| attribute      | explain                                                                               | type                                                      | Default value |
| -------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------- |
| defaultChecked | Whether it is selected by default, used when the component is uncontrolled            | boolean                                                   | -             |
| checked        | Is it selected to be used when the component is controlled                            | boolean                                                   | -             |
| inputProps     | inside `<input>` Standard attributes of tags                                          | React.InputHTMLAttributes<HTMLInputElement\>              | -             |
| inputRef       | inside `<input>` Label's ref                                                          | React.Ref<HTMLInputElement\>                              | -             |
| name           | `<input>` Name identification                                                         | string                                                    | -             |
| value          | The value of the component, if using CheckboxGroup, this property should be passed in | string                                                    | -             |
| disabled       | Do you want to disable it                                                             | boolean                                                   | false         |
| icon           | Unchecked status icon                                                                 | ReactNode                                                 | -             |
| checkedIcon    | Select status icon                                                                    | ReactNode                                                 | -             |
| labelPlacement | Copy position                                                                         | `left` \|`top` \|`right` \|`bottom`                       | `right`       |
| onChange       | The callback function during changes                                                  | (e: React.SyntheticEvent,data: {checked:boolean}) => void | -             |

## Style variables

| attribute          | explain                     | Default value          | global variable                 |
| ------------------ | --------------------------- | ---------------------- | ------------------------------- |
| --label-color      | Text font color             | --bui-color-fg-default | --bui-checkbox-label-color      |
| --label-font-size  | Copy font size              | --bui-text-size-1      | --bui-checkbox-label-font-size  |
| --icon-font-size   | Icon font size              | --bui-title-size-2     | --bui-checkbox-icon-font-size   |
| --disabled-opacity | Disable transparency status | 0.5                    | --bui-checkbox-disabled-opacity |
| --icon-padding     | Icon inner margin           | 5px                    | --bui-checkbox-icon-padding     |
