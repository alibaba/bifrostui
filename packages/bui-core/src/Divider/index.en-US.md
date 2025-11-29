---
group: Layout
name: Divider
---

# Divider

The Divider is often used to group content within a list or layout.

## Basic Usage

The default divider is a fine line.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import * as React from 'react';

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

## Dashed Line

You can also control the divider style to be dashed or solid using the `dashed` attribute.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import * as React from 'react';

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

## Divider Direction

By default, the divider is oriented vertically. We also provide horizontal dividers.
You can control the divider's orientation using the `direction` attribute.

### Vertical: Full Height of Parent Element

```tsx
import { Divider, Stack } from '@bifrostui/react';
import * as React from 'react';

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

### Horizontal: Full Width of Parent Element

```tsx
import { Divider, Stack } from '@bifrostui/react';
import * as React from 'react';

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

## Custom Divider Size

By default, the divider fills the width/height of the parent element, but you can customize the divider size using `size`.

### Vertical: Specify `size`

```tsx
import { Divider, Stack } from '@bifrostui/react';
import * as React from 'react';

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

### Horizontal: Specify `size`

```tsx
import { Divider, Stack } from '@bifrostui/react';
import * as React from 'react';

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

## Divider with Description Text

You can also render dividers with content, using `children` to pass text.
Currently only supported when `direction` is set to `horizontal`.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import * as React from 'react';

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

## Customizing the Divider

For other special styles, you can customize the divider via `style`, such as adjusting the divider thickness.

```tsx
import { Divider, Stack } from '@bifrostui/react';
import * as React from 'react';

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

## API

### DividerProps

| Property  | Description         | Type                       | Default    |
| --------- | ------------------- | -------------------------- | ---------- |
| direction | Divider direction   | `horizontal` ｜ `vertical` | `vertical` |
| size      | Divider size        | string                     | -          |
| dashed    | Whether dashed line | boolean                    | false      |

## Style Variables

| Global Variable            | Description                      | Default |
| -------------------------- | -------------------------------- | ------- |
| --bui-divider-height       | Height of vertical divider       | `100%`  |
| --bui-divider-width        | Width of horizontal divider      | `100%`  |
| --bui-divider-border-width | Border width                     | `1px`   |
| --bui-divider-line-width   | Line width on both sides of text | `40px`  |

```

```
