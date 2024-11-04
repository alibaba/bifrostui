---
group: Basic input
name: Checkbox
---

# Checkbox

Checkboxes provide users with multiple options to choose from or cancel selected items when displaying a series of options.

## Code demonstration

### Basic Usage

Adopt`checked`and`onChange`control status.

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

Adopt`inputProps`the input attribute passed in can be transparently transmitted internally`input` sign.

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

`name`and`value`can be directly transmitted to the interior`input` sign, it won't be accepted`inputProps`the attribute with the same name passed in is overwritten.

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

Adopt`labelPlacement`you can control the position of the text in the checkbox icon.

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

Adopt`icon`can be customized as a selected status icon,`checkedIcon`customizable selection status icon.

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

Use`disabled` using components,`CheckboxGroup.disabled`can be disabled as a whole group.

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

`CheckboxGroup`and`Checkbox`combination can achieve checkbox grouping, and at this time`Checkbox`it should be passed in`value`attributes.

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

Adopt`value`control`CheckboxGroup`components, through`checked`control`Checkbox`components.

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

Use`defaultValue`appoint`CheckboxGroup`component default value, using`defaultChecked`appoint`Checkbox`component default values.

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
| inputProps     | Standard properties of internal<input>tags                                            | React.InputHTMLAttributes<HTMLInputElement\>              | -             |
| inputRef       | Ref for internal<input>tag                                                            | React.Ref<HTMLInputElement\>                              | -             |
| name           | `<input>` Name identifier                                                             | string                                                    | -             |
| value          | The value of the component, if using CheckboxGroup, this property should be passed in | string                                                    | -             |
| disabled       | Do you want to disable it                                                             | boolean                                                   | false         |
| icon           | Unchecked status icon                                                                 | ReactNode                                                 | -             |
| checkedIcon    | Select status icon                                                                    | ReactNode                                                 | -             |
| labelPlacement | Copy position                                                                         | `left` \| `top` \| `right` \| `bottom`                    | `right`       |
| onChange       | The callback function during changes                                                  | (e: React.SyntheticEvent,data: {checked:boolean}) => void | -             |

## Style variables

| attribute         | explain         | Default value          | global variable |
| ----------------- | --------------- | ---------------------- | --------------- |
| --label-color     | Text font color | --bui-color-fg-default | -               |
| --label-font-size | Copy font size  | --bui-text-size-1      | -               |
| --icon-font-size  | Icon font size  | --bui-title-size-2     | -               |
