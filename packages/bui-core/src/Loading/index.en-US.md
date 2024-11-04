---
group: feedback
name: Loading
---

# Loading

## Code demonstration

### Basic usage

Show a loading icon

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

### Add Text

Can be done through`children`sexual transmission copy, not`ReactNode`the content of the type will default to adding a layer of dom structure to control the style.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading>加载中...</Loading>
    </Stack>
  );
};
```

### Modify the arrangement of icons and text

Can be done through`direction`delivery`vertical`｜`horizontal`control the display format of rows and columns.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading direction="horizontal">加载中...</Loading>
    </Stack>
  );
};
```

### Custom icon display

By setting`IconProps`control internal icons

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading IconProps={{ htmlColor: '#ff335c' }}>加载中...</Loading>
    </Stack>
  );
};
```

## API

### NavBar

| attribute | explain                                           | type                       | Default value |
| --------- | ------------------------------------------------- | -------------------------- | ------------- |
| className | Component class name                              | string                     | -             |
| icon      | Customize loading icon                            | ReactNode                  | -             |
| IconProps | Customize icons                                   | ISvgIconProps              | -             |
| direction | The arrangement of loading icons and loading copy | 'vertical' \| 'horizontal' | 'vertical'    |
| children  | Control the loading of copy content               | ReactNode                  | -             |

## Style variables

| attribute            | explain                       | Default value | global variable                  |
| -------------------- | ----------------------------- | ------------- | -------------------------------- |
| --animation-duration | Load animation playback cycle | 1.6s          | --bui-loading-animation-duration |
