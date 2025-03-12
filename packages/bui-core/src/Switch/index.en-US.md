---
group: Basic Input
name: Switch Toggle
---

# Switch Toggle

With just a tap of the button, users can trigger actions or make selections.

## Code Demos

### Basic Usage

Basic usage of `Switch`. The default color of Switch is `primary`, and the default size is `medium`.

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

### With Default Values

### Colors

The `Switch` component provides 5 theme colors: `primary`, `info`, `success`, `warning`, `danger`. You can set the component's theme color using the `color` property. The default value for `color` is `primary`.

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

### Sizes

You can define the component size using the `size` property, with options being `small`, `medium`, `large`. The default size is `medium`.

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

### With Text and Icons

Customize status text or icons using `checkedChildren` and `unCheckedChildren`.

```tsx
import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
import { MoonOutlinedIcon, SunOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Switch defaultChecked checkedChildren="On" unCheckedChildren="Off" />
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

Customize the selected state of the component using `checked` and `onChange`.

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

Attributes passed via `inputProps` will be forwarded to the internal `input` tag.

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

Set `Switch` to disabled state using `disabled`.

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

| Property          | Description                                         | Type                                                          | Default Value |
| ----------------- | --------------------------------------------------- | ------------------------------------------------------------- | ------------- |
| checked           | Whether it is checked                               | boolean                                                       | -             |
| defaultChecked    | Default checked state (for uncontrolled components) | boolean                                                       | -             |
| inputRef          | Ref for the internal `<input>` tag                  | React.Ref<HTMLInputElement\>                                  | -             |
| inputProps        | Standard attributes for the internal `<input>` tag  | React.InputHTMLAttributes<HTMLInputElement\>                  | -             |
| name              | Name attribute for the internal `<input>` tag       | string                                                        | -             |
| checkedChildren   | Content when checked                                | ReactNode                                                     | -             |
| unCheckedChildren | Content when unchecked                              | ReactNode                                                     | -             |
| disabled          | Whether it is disabled                              | boolean                                                       | false         |
| size              | Size                                                | `small` \| `medium` \| `large`                                | `medium`      |
| color             | Color                                               | `info` \| `primary` \| `success` \| `warning` \| `danger`     | `primary`     |
| onChange          | Callback function when changed                      | (e: React.SyntheticEvent,data: { checked: boolean;},) => void | -             |

For other attributes, see [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)

## Style Variables

| Property                   | Description              | Default Value | Global Variable                       |
| -------------------------- | ------------------------ | ------------- | ------------------------------------- |
| --bg-color                 | Background color         | #ccc          | --bui-switch-bg-color                 |
| --padding                  | Padding                  | 0             | --bui-switch-padding                  |
| --border-radius            | Border radius            | 15px          | --bui-switch-border-radius            |
| --small-width              | Small switch width       | 24px          | --bui-switch-small-width              |
| --small-height             | Small switch height      | 16px          | --bui-switch-small-height             |
| --small-font-size          | Small font size          | 9px           | --bui-switch-small-font-size          |
| --controller-small-width   | Small controller width   | 12px          | --bui-switch-controller-small-width   |
| --controller-small-height  | Small controller height  | 12px          | --bui-switch-controller-small-height  |
| --medium-width             | Medium switch width      | 44px          | --bui-switch-medium-width             |
| --medium-height            | Medium switch height     | 22px          | --bui-switch-medium-height            |
| --controller-medium-width  | Medium controller width  | 18px          | --bui-switch-controller-medium-width  |
| --controller-medium-height | Medium controller height | 18px          | --bui-switch-controller-medium-height |
| --large-width              | Large switch width       | 51px          | --bui-switch-large-width              |
| --large-height             | Large switch height      | 30px          | --bui-switch-large-height             |
| --controller-large-width   | Large controller width   | 24px          | --bui-switch-controller-large-width   |
| --controller-large-height  | Large controller height  | 24px          | --bui-switch-controller-large-height  |
