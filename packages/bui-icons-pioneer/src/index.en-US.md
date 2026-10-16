---
group: Icon
name: IconsPioneer icons
title: IconsPioneer icons
sidebar: false
---

## Install

Need to install the @bifrostui/icons-pioneer icon package.

```
$ npm install --save @bifrostui/icons-pioneer
# or
$ yarn add @bifrostui/icons-pioneer
# or
$ pnpm add @bifrostui/icons-pioneer
```

## Usage

After installing the package, directly reference the required icon

```js
import { WantCartOutlinedIcon } from '@bifrostui/icons-pioneer';
```

### Size

Set the icon size through the `size` attribute.

```tsx
import * as React from 'react';
import { Stack } from '@bifrostui/react';
import { WantCartOutlinedIcon } from '@bifrostui/icons-pioneer';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <WantCartOutlinedIcon size="small" />
      <WantCartOutlinedIcon size="medium" />
      <WantCartOutlinedIcon size="large" />
    </Stack>
  );
};
```

### Color

Set the icon color through the `color` attribute.

```tsx
import * as React from 'react';
import { Stack } from '@bifrostui/react';
import { WantCartOutlinedIcon } from '@bifrostui/icons-pioneer';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <WantCartOutlinedIcon size="large" />
      <WantCartOutlinedIcon color="primary" size="large" />
      <WantCartOutlinedIcon color="default" size="large" />
      <WantCartOutlinedIcon color="info" size="large" />
      <WantCartOutlinedIcon color="warning" size="large" />
      <WantCartOutlinedIcon color="danger" size="large" />
      <WantCartOutlinedIcon color="success" size="large" />
      <WantCartOutlinedIcon color="disabled" size="large" />
    </Stack>
  );
};
```

### Customize icons

If the predefined icon size and color cannot meet the needs, you can customize the color through the `htmlColor` property or the `style` property.

```tsx
import * as React from 'react';
import { Stack } from '@bifrostui/react';
import { WantCartOutlinedIcon } from '@bifrostui/icons-pioneer';

export default () => {
  return (
    <Stack direction="row">
      <WantCartOutlinedIcon style={{ fontSize: '48px', color: '#ad63f6' }} />
      <WantCartOutlinedIcon style={{ fontSize: '48px' }} htmlColor="#ff866e" />
    </Stack>
  );
};
```

## All icons

<code src="./demo/index.tsx"></code>

## API

| attribute | explain                                                                                         | type                                                                           | Default value                               |
| --------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------- |
| color     | Icon Theme Colors                                                                               | `default` \|`primary` \|`info` \|`success` \|`warning` \|`danger` \|`disabled` | -                                           |
| htmlColor | Customize icon colors                                                                           | string                                                                         | -                                           |
| size      | The preset icon size can also be set to a custom icon size through the font size of the element | `small` \|`medium` \|`large`                                                   | Inherit the font size of the parent element |
| viewBox   | The viewBox property of SVG                                                                     | string                                                                         | '0 0 96 96'                                 |
