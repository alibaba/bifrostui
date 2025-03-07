---
group: Layout
name: Divider
---

# Divider

A divider is commonly used to group components in lists or layouts.

## Code Examples

### Basic Usage

The default divider is a thin line.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      Left
      <Divider style={{ margin: '0 6px' }} />
      Right
    </Stack>
  );
};
```

### Dashed Line

You can control whether the divider is dashed or solid using the `dashed` property.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      Left
      <Divider style={{ margin: '0 6px' }} dashed />
      Right
    </Stack>
  );
};
```

### Divider Direction

The default divider orientation is vertical, but horizontal dividers are also available. You can control the orientation using the `direction` property.

##### Vertical: Stretch to Parent Height

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      Left
      <Divider style={{ margin: '0 6px' }} />
      Right
    </Stack>
  );
};
```

##### Horizontal: Stretch to Parent Width

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      Top
      <Divider direction="horizontal" />
      Bottom
    </Stack>
  );
};
```

### Customizing Divider Size

By default, the divider stretches to fill the parent element's width/height, but you can customize its size using the `size` property.

##### Vertical: Specified Size

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      Left
      <Divider size="12px" style={{ margin: '0 6px' }} />
      Right
    </Stack>
  );
};
```

##### Horizontal: Specified Size

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      Top
      <Divider direction="horizontal" size="100px" />
      Bottom
    </Stack>
  );
};
```

### Divider with Text

You can render dividers with text content by passing it as children. This feature is currently supported only when `direction` is set to `horizontal`.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      Top
      <Divider direction="horizontal" size="60px" style={{ margin: '6px 0' }}>
        I am a divider
      </Divider>
      Bottom
    </Stack>
  );
};
```

### Customizing Divider Style

For other special styles, you can customize them using the `style` property, such as adjusting the thickness of the divider.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      Top
      <Divider direction="horizontal" style={{ borderBottomWidth: '2px' }} />
      Bottom
    </Stack>
  );
};
```

### API

#### DividerProps

| Property  | Description       | Type                       | Default Value |
| --------- | ----------------- | -------------------------- | ------------- |
| direction | Divider direction | `horizontal` \| `vertical` | `vertical`    |
| size      | Divider size      | string                     | -             |
| dashed    | Whether dashed    | boolean                    | false         |

### Style Variables

| Property       | Description                                    | Default Value | Global Variable            |
| -------------- | ---------------------------------------------- | ------------- | -------------------------- |
| --height       | Divider height                                 | 100%          | --bui-divider-height       |
| --width        | Divider width                                  | 100%          | --bui-divider-width        |
| --border-width | Divider thickness (controls all divider types) | 1px           | --bui-divider-border-width |
| --line-width   | Length for dividers with text                  | 40px          | --bui-divider-line-width   |
