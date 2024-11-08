---
group: Basic input
name: Switch switch
---

# Switch switch

By simply tapping the button, users can trigger actions or make choices.

## Code demonstration

### Basic usage

Basic usage of Switch. The default color for Switch is' primary ', and the default size is' medium'.

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

The Switch component provides 5 theme colors: primary, info, success, warning, and danger. The component theme color can be set through color The default value for the color attribute is' primary '.

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

The component size can be specified through 'size', with optional values including 'small', 'medium', and 'large'. The default is' medium '.

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

Customize status text or icons through 'checkedChildren' and 'uncheckedChildren'.

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

Customize component selection status through 'checked' and 'onChange'.

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

The input property passed through 'inputProps' can be passed transparently to the internal' input 'tag.

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

Specify 'Switch' as disabled through 'disabled'.

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
| inputRef          | inside `<input>` Label's ref                                               | React.Ref<HTMLInputElement\>                                  | -             |
| inputProps        | inside `<input>` Standard attributes of tags                               | React.InputHTMLAttributes<HTMLInputElement\>                  | -             |
| name              | inside `<input>` Name identification                                       | string                                                        | -             |
| checkedChildren   | Content when selected                                                      | ReactNode                                                     | -             |
| unCheckedChildren | Content when not selected                                                  | ReactNode                                                     | -             |
| disabled          | Do you want to disable it                                                  | boolean                                                       | false         |
| size              | size                                                                       | `small` \|`medium` \|`large`                                  | `medium`      |
| color             | colour                                                                     | `info` \|`primary` \|`success` \|`warning` \|`danger`         | `primary`     |
| onChange          | The callback function during changes                                       | (e: React.SyntheticEvent,data: { checked: boolean;},) => void | -             |

[UNK][UNK]属[UNK]见 [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)

## Style variables

| attribute                  | explain               | Default value | global variable                       |
| -------------------------- | --------------------- | ------------- | ------------------------------------- |
| --bg-color                 | background color      | #ccc          | --bui-switch-bg-color                 |
| --padding                  | padding               | 0             | --bui-switch-padding                  |
| --border-radius            | fillet                | 15px          | --bui-switch-border-radius            |
| --small-width              | Small switch width    | 24px          | --bui-switch-small-width              |
| --small-height             | Small switch height   | 16px          | --bui-switch-small-height             |
| --small-font-size          | fine print            | 9px           | --bui-switch-small-font-size          |
| --controller-small-width   | Small control width   | 12px          | --bui-switch-controller-small-width   |
| --controller-small-height  | Small control height  | 12px          | --bui-switch-controller-small-height  |
| --medium-width             | Medium switch width   | 44px          | --bui-switch-medium-width             |
| --medium-height            | Medium switch height  | 22px          | --bui-switch-medium-height            |
| --controller-medium-width  | Medium control width  | 18px          | --bui-switch-controller-medium-width  |
| --controller-medium-height | Medium control height | 18px          | --bui-switch-controller-medium-height |
| --large-width              | Large switch width    | 51px          | --bui-switch-large-width              |
| --large-height             | Large switch height   | 30px          | --bui-switch-large-height             |
| --controller-large-width   | Large control width   | 24px          | --bui-switch-controller-large-width   |
| --controller-large-height  | Large control height  | 24px          | --bui-switch-controller-large-height  |
