---
group: Feedback
name: Loading
---

# Loading

## Basic Usage

Display a loading icon.

```tsx
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading />
    </Stack>
  );
};
```

## Add Text

You can pass text via the `children` property. Content that is not of type `ReactNode` will automatically have an additional DOM layer applied to control styling.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading>Loading...</Loading>
    </Stack>
  );
};
```

## Modify Icon and Text Arrangement

You can control the display arrangement by setting `direction` to either `vertical` | `horizontal`.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading direction="horizontal">Loading...</Loading>
    </Stack>
  );
};
```

## Custom Icon Display

Control the internal icon via `IconProps`.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading IconProps={{ htmlColor: '#ff335c' }}>Loading...</Loading>
    </Stack>
  );
};
```

## API

### NavBar

| Property  | Description                          | Type                       | Default    |
| --------- | ------------------------------------ | -------------------------- | ---------- |
| className | Component class name                 | string                     | -          |
| icon      | Custom loading icon                  | ReactNode                  | -          |
| IconProps | Custom icon                          | ISvgIconProps              | -          |
| direction | Arrangement of loading icon and text | 'vertical' \| 'horizontal' | 'vertical' |
| children  | Controls loading text content        | ReactNode                  | -          |

## Style Variables

| Global Variable                  | Description                   | Default |
| -------------------------------- | ----------------------------- | ------- |
| --bui-loading-icon-font-size     | Font size of loading icon     | `30px`  |
| --bui-loading-text-padding       | Text padding                  | `10px`  |
| --bui-loading-animation-duration | Duration of loading animation | `1.6s`  |
