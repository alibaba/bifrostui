---
group: feedback
name: Loading Loading
---

# Loading Loading

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

Text can be passed through the 'children' attribute, and non - 'ReactNode' content will default to adding a layer of DOM structure to control the style.

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

You can control the display format of rows and columns by passing 'vertical' | 'horizontal' through 'direction'.

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

Control internal icons by setting 'IconProps'

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

### Name

| attribute | explain                                           | type                      | Default value |
| --------- | ------------------------------------------------- | ------------------------- | ------------- |
| className | Component class name                              | string                    | -             |
| icon      | Customize loading icon                            | ReactNode                 | -             |
| IconProps | Customize icons                                   | ISvgIconProps             | -             |
| direction | The arrangement of loading icons and loading copy | 'vertical' \|'horizontal' | 'vertical'    |
| children  | Control the loading of copy content               | ReactNode                 | -             |

## Style variables

| attribute            | explain                               | Default value | global variable                  |
| -------------------- | ------------------------------------- | ------------- | -------------------------------- |
| --icon-font-size     | Icon font size                        | 30px          | --bui-loading-icon-font-size     |
| --text-padding       | Inner margin of copywriting container | 10px          | --bui-loading-text-padding       |
| --animation-duration | Load animation playback cycle         | 1.6s          | --bui-loading-animation-duration |
