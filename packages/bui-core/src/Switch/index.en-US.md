---
group: Basic Input
name: Switch
---

# Switch

Users can trigger actions or make choices by simply tapping the button.

## Basic Usage

Basic usage of `Switch`. The default color for Switch is `primary`, and the default size is `medium`.

```tsx
import * as React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack>
      <Switch />
    </Stack>
  );
};
```

### With Default Value

### Colors

The `Switch` component provides 5 theme colors: `primary`, `info`, `success`, `warning`, `danger`, which can be set via the `color` property. The default value of the `color` attribute is `primary`.

```tsx
import * as React from 'react';
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

### Size

The size of the component can be specified via the `size` property, with options including `small`, `medium`, and `large`. The default is `medium`.

```tsx
import * as React from 'react';
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

### With Text and Icons

Customize state text or icons via `checkedChildren` and `unCheckedChildren`.

```tsx
import * as React from 'react';
import { Stack, Switch } from '@bifrostui/react';
import { MoonOutlinedIcon, SunOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Switch defaultChecked checkedChildren="ON" unCheckedChildren="OFF" />
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

### Controlled Usage

Customize component's checked state using `checked` and `onChange`.

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

### Passing Attributes to Internal Input Tag

Input attributes passed through `inputProps` can be passed through to the internal `input` tag.

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

### Disabled State

Specify the `Switch` to be disabled via the `disabled` attribute.

```tsx
import * as React from 'react';
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

## Accessibility

Default accessibility support includes:

- When the `disabled=true` property is set, the `aria-disabled` attribute will be automatically added
- More accessibility attributes can be set using the `inputProps` attribute, such as inputProps={{ 'aria-label': 'Switch label' }}

## API

| Property          | Description                                        | Type                                                          | Default   |
| ----------------- | -------------------------------------------------- | ------------------------------------------------------------- | --------- |
| checked           | Whether checked                                    | boolean                                                       | false     |
| defaultChecked    | Default checked state for uncontrolled components  | boolean                                                       | false     |
| inputRef          | ref for the internal `<input>` tag                 | React.Ref<HTMLInputElement\>                                  | -         |
| inputProps        | Standard attributes for the internal `<input>` tag | React.InputHTMLAttributes<HTMLInputElement\>                  | -         |
| name              | Name identifier for the internal `<input>`         | string                                                        | -         |
| checkedChildren   | Content when checked                               | ReactNode                                                     | -         |
| unCheckedChildren | Content when unchecked                             | ReactNode                                                     | -         |
| disabled          | Whether disabled                                   | boolean                                                       | false     |
| size              | Size                                               | `small` \| `medium` \| `large`                                | `medium`  |
| color             | Color                                              | `info` \| `primary` \| `success` \| `warning` \| `danger`     | `primary` |
| onChange          | Callback function on change                        | (e: React.SyntheticEvent,data: { checked: boolean;},) => void | -         |

See other attributes in [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)

## Style Variables

| Global Variable                      | Description                       | Default Value            |
| ------------------------------------ | --------------------------------- | ------------------------ |
| --bui-switch-bg-color                | Background color                  | `#ccc`                   |
| --bui-switch-padding                 | Padding                           | `0`                      |
| --bui-switch-border-radius           | Border radius                     | `15px`                   |
| --bui-switch-small-width             | Width for small size              | `27px`                   |
| --bui-switch-small-height            | Height for small size             | `15px`                   |
| --bui-switch-small-font-size         | Font size for small size          | `9px`                    |
| --bui-switch-controller-small-width  | Controller width for small size   | `11px`                   |
| --bui-switch-controller-small-height | Controller height for small size  | `11px`                   |
| --bui-switch-width                   | Width for medium size             | `44px`                   |
| --bui-switch-height                  | Height for medium size            | `22px`                   |
| --bui-switch-font-size               | Font size for medium size         | `var(--bui-text-size-3)` |
| --bui-switch-controller-width        | Controller width for medium size  | `18px`                   |
| --bui-switch-controller-height       | Controller height for medium size | `18px`                   |
| --bui-switch-checked-controller-left | Controller position when checked  | `calc(100% - 20px)`      |
| --bui-switch-controller-left         | Controller left position          | `2px`                    |
| --bui-switch-large-width             | Width for large size              | `51px`                   |
| --bui-switch-large-height            | Height for large size             | `30px`                   |
| --bui-switch-large-font-size         | Font size for large size          | `var(--bui-text-size-3)` |
| --bui-switch-controller-large-width  | Controller width for large size   | `26px`                   |
| --bui-switch-controller-large-height | Controller height for large size  | `26px`                   |
