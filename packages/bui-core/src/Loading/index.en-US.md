---
group: Feedback
name: Loading
---

# Loading

## Code Demos

### Basic Usage

Show a loading icon.

```tsx
/**
 * background: '#f6f7f9'
 */
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

### Adding Text

You can pass text using the `children` property. Non-`ReactNode` content will automatically be wrapped in a DOM structure for style control.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading>loading...</Loading>
    </Stack>
  );
};
```

### Changing Icon and Text Layout

Use the `direction` prop with values `vertical` or `horizontal` to control layout orientation.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading direction="horizontal">loading...</Loading>
    </Stack>
  );
};
```

### Customizing Icon Display

Control the internal icon by setting `IconProps`.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading IconProps={{ htmlColor: '#ff335c' }}>loading...</Loading>
    </Stack>
  );
};
```

## API

### Loading

| Property  | Description                              | Type                       | Default Value |
| --------- | ---------------------------------------- | -------------------------- | ------------- |
| className | Component class name                     | string                     | -             |
| icon      | Custom loading icon                      | ReactNode                  | -             |
| IconProps | Customize the icon                       | ISvgIconProps              | -             |
| direction | Layout direction of icon and text        | 'vertical' \| 'horizontal' | 'vertical'    |
| children  | Controls the content of the loading text | ReactNode                  | -             |

## Style Variables

| Property             | Description                   | Default Value | Global Variable                  |
| -------------------- | ----------------------------- | ------------- | -------------------------------- |
| --icon-font-size     | Icon font size                | 30px          | --bui-loading-icon-font-size     |
| --text-padding       | Padding inside text container | 10px          | --bui-loading-text-padding       |
| --animation-duration | Duration of loading animation | 1.6s          | --bui-loading-animation-duration |
