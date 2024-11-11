---
group: Icon
name: Icons icons
title: Icons icons
sidebar: false
---

## install

Need to install the @ bifrostui/icons icon package.

```
$ npm install --save @bifrostui/icons
# or
$ yarn add @bifrostui/icons
# or
$ pnpm add @bifrostui/icons
```

## use

After installing the package, directly reference the required icon

```js
import { SettingsOutlinedIcon } from '@bifrostui/icons';
```

## Code demonstration

### size

Set the icon size through the 'size' attribute.

```tsx
import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <SettingsOutlinedIcon size="small" />
      <SettingsOutlinedIcon size="medium" />
      <SettingsOutlinedIcon size="large" />
    </Stack>
  );
};
```

### color

Set the icon color through the 'color' attribute.

```tsx
import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <SettingsOutlinedIcon size="large" />
      <SettingsOutlinedIcon color="primary" size="large" />
      <SettingsOutlinedIcon color="default" size="large" />
      <SettingsOutlinedIcon color="info" size="large" />
      <SettingsOutlinedIcon color="warning" size="large" />
      <SettingsOutlinedIcon color="danger" size="large" />
      <SettingsOutlinedIcon color="success" size="large" />
      <SettingsOutlinedIcon color="disabled" size="large" />
    </Stack>
  );
};
```

### Customize icons

If the predefined icon size and color cannot meet the needs, you can customize the color through the 'htmlColor' property or the 'style' property.

```tsx
import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row">
      <SettingsOutlinedIcon style={{ fontSize: '48px', color: '#ad63f6' }} />
      <SettingsOutlinedIcon style={{ fontSize: '48px' }} htmlColor="#ff866e" />
    </Stack>
  );
};
```

## All icons

<code src="./demo/index.tsx"></code>

## API

|attribute|explain|type|Default value|
| --------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------- |
|color|Icon Theme Colors|`default` \|`primary` \|`info` \|`success` \|`warning` \|`danger` \|`disabled`|-|
|htmlColor|Customize icon colors|string|-|
|size|The preset icon size can also be set to a custom icon size through the font size of the element|`small` \|`medium` \|`large`|Inherit the font size of the parent element|
|viewBox|The viewBox property of SVG|string|'0 0 96 96'|
