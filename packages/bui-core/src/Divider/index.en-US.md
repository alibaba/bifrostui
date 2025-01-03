---
group: layout
name: Divider dividing line
---

# Divider dividing line

Splitting lines are commonly used to group the content of components in a list or layout.

## Code demonstration

### Basic usage

The default dividing line is a thin line.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      左边
      <Divider style={{ margin: '0 6px' }} />
      右边
    </Stack>
  );
};
```

### Dashed line

You can also control whether the dividing line is a dashed or solid line through the 'dashed' attribute.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      左边
      <Divider style={{ margin: '0 6px' }} dashed />
      右边
    </Stack>
  );
};
```

### Direction of dividing line

The default dividing line is vertical, but we also provide horizontal dividing lines.
You can also control the direction of the dividing line through the 'direction' attribute.

##### Vertical: Fully support the height of the parent element

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      左边
      <Divider style={{ margin: '0 6px' }} />
      右边
    </Stack>
  );
};
```

##### Horizontal: Fully support the width of the parent element

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      上边
      <Divider direction="horizontal" />
      下边
    </Stack>
  );
};
```

### Customized segmentation line size

The default dividing line supports the width/height of the parent element, and you can also customize the dividing line size through 'size'.

##### Vertical: Specify size

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      左边
      <Divider size="12px" style={{ margin: '0 6px' }} />
      右边
    </Stack>
  );
};
```

##### Horizontal: Specify size

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      上边
      <Divider direction="horizontal" size="100px" />
      下边
    </Stack>
  );
};
```

### A dividing line with explanatory text

You can also render split lines with content. Transmitting copy through 'children'.
Currently, it is only supported when 'direction' is' horizontal '.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      上边
      <Divider direction="horizontal" size="60px" style={{ margin: '6px 0' }}>
        我是分割线
      </Divider>
      下边
    </Stack>
  );
};
```

### Customized segmentation line

For other special styles, you can customize them yourself through 'style', such as customizing the thickness of the dividing line.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      上边
      <Divider direction="horizontal" style={{ borderBottomWidth: '2px' }} />
      下边
    </Stack>
  );
};
```

### API

#### DividerProps

| attribute | explain                    | type                       | Default value |
| --------- | -------------------------- | -------------------------- | ------------- |
| direction | Direction of dividing line | `horizontal` ｜ `vertical` | `vertical`    |
| size      | Size of dividing line      | string                     | -             |
| dashed    | Is it a dashed line        | boolean                    | false         |

### Style variables

| attribute      | explain                                                                                 | Default value | global variable            |
| -------------- | --------------------------------------------------------------------------------------- | ------------- | -------------------------- |
| --height       | Height of dividing line                                                                 | 100%          | --bui-divider-height       |
| --width        | Width of dividing line                                                                  | 100%          | --bui-divider-width        |
| --border-width | The thickness of the dividing line (all forms of dividing lines are controlled by this) | 1px           | --bui-divider-border-width |
| --line-width   | The length of the dividing line that can be inserted into the text                      | 40px          | --bui-divider-line-width   |
