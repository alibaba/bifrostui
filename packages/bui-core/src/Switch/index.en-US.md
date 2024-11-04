---
group: Basic input
name: Switch
---

# Switch

By simply tapping the button, users can trigger actions or make choices.

## Code demonstration

### Basic usage

`Switch` basic usage. the default color for switch is`primary`，the default size is`medium`。

```tsx
import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack>
      <Switch />
    </Stack>
  );
};
```

### There are default values

### color

`Switch` the item provides 5 theme colors:`primary`、`info`、`success`、`warning`、`danger`，can be done through`color` set the theme color of the component.The default value of `color` is `primary`。

```tsx
import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack spacing="5px">
      <Switch color="primary" defaultChecked />
      <Switch color="info" defaultChecked />
      <Switch color="success" defaultChecked />
      <Switch color="warning" defaultChecked />
      <Switch color="danger" defaultChecked />
    </Stack>
  );
};
```

### size

Can be done through`size`specify component size, optional values include`small`、`medium`、`large`。default is`medium`。

```tsx
import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Switch size="small" />
      <Switch size="medium" />
      <Switch size="large" />
    </Stack>
  );
};
```

### With text and icons

Adopting`checkedChildren`and`unCheckedChildren`to customize status text or icon.

```tsx
import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
import { MoonOutlinedIcon, SunOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Switch defaultChecked checkedChildren="开" unCheckedChildren="关" />
      <Switch
        defaultChecked
        checkedChildren={<MoonOutlinedIcon htmlColor="#fff" />}
        unCheckedChildren={<SunOutlinedIcon htmlColor="#fff" />}
      />
      <Switch
        defaultChecked
        checkedChildren={<MoonOutlinedIcon htmlColor="#fff" />}
        unCheckedChildren={<SunOutlinedIcon htmlColor="#fff" />}
        size="large"
      />
    </Stack>
  );
};
```

### Controlled use

Adopt`checked`and`onChange`custom component selection status.

```tsx
import React, { useState } from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (e, data) => {
    setChecked(data?.checked);
    console.log('onChange', data);
  };
  return (
    <Stack>
      <Switch checked={checked} onChange={handleChange} />
    </Stack>
  );
};
```

### Transmitting attributes transparently to internal input tags

Adopt`inputProps`the input attribute can be transparently transmitted internally`input`sign.

```tsx
import React, { useState } from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (e, data) => {
    setChecked(data?.checked);
    console.log('onChange', data);
  };
  return (
    <Stack>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ className: 'my-input' }}
      />
    </Stack>
  );
};
```

### Unavailable state

Adopting`disabled`to set`Switch`disabled state.

```tsx
import React from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="5px">
      <Switch disabled />
      <Switch defaultChecked disabled />
    </Stack>
  );
};
```

## API

| attribute         | explain                                                                    | type                                                          | Default value |
| ----------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------- |
| checked           | Selected or not                                                            | boolean                                                       | -             |
| defaultChecked    | Whether it is selected by default, used when the component is uncontrolled | boolean                                                       | -             |
| inputRef          | Ref for internal<input>tag                                                 | React.Ref<HTMLInputElement\>                                  | -             |
| inputProps        | Standard properties of internal<input>tags                                 | React.InputHTMLAttributes<HTMLInputElement\>                  | -             |
| name              | Internal `<input>` name identifier                                         | string                                                        | -             |
| checkedChildren   | Content when selected                                                      | ReactNode                                                     | -             |
| unCheckedChildren | Content when not selected                                                  | ReactNode                                                     | -             |
| disabled          | Do you want to disable it                                                  | boolean                                                       | false         |
| size              | size                                                                       | `small` \| `medium` \| `large`                                | `medium`      |
| color             | colour                                                                     | `info` \| `primary` \| `success` \| `warning` \| `danger`     | `primary`     |
| onChange          | The callback function during changes                                       | (e: React.SyntheticEvent,data: { checked: boolean;},) => void | -             |

Other attributes can be found on the [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)

## Style variables

| attribute  | explain          | Default value |
| ---------- | ---------------- | ------------- |
| --bg-color | background color | #ccc          |
