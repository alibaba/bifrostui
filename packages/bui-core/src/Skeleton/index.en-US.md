---
group: feedback
name: Skeleton Skeleton Screen
---

# Skeleton Skeleton Screen

Provide a placeholder graphic combination at the location where content needs to be loaded.

## Code demonstration

### Basic usage

Use 'width' and 'height' to set the width and height.

```tsx
import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Skeleton width={210} />
      <Skeleton width={240} />
    </Stack>
  );
};
```

### variant

The component supports four variants:

Text '(default): It can automatically adjust the size based on' font size '.

Circular, rectangular, rounded: can be resized based on width and height.

```tsx
import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="10px">
      <Skeleton variant="text" width={210} />
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="rectangular" width={210} height={40} />
      <Skeleton variant="rounded" width={210} height={40} />
    </Stack>
  );
};
```

### animation

The default is' wave '. You can set different animations based on 'animation' or completely disable it.

```tsx
import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Skeleton width={210} />
      <Skeleton animation="pulse" width={210} />
      <Skeleton animation={false} width={210} />
    </Stack>
  );
};
```

### combination

Different combinations of graphics can be used.

```tsx
import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
      >
        <Skeleton
          variant="circular"
          style={{ margin: '0 6px 0 0', width: '48px', height: '48px' }}
        />
        <div>
          <Skeleton width="50%" style={{ width: '210px' }} />
          <Skeleton width="50%" style={{ width: '210px' }} />
        </div>
      </div>
    </Stack>
  );
};
```

### Dimensional inference

You can set the size based on the 'height' and 'width' properties of 'style'.

```tsx
import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="10px">
      <Skeleton variant="circular">
        <div style={{ height: '80px', width: '80px' }} />
      </Skeleton>
      <Skeleton variant="circular">
        <div style={{ height: '100px', width: '100px' }} />
      </Skeleton>
    </Stack>
  );
};
```

## API

| attribute | explain             | type                                            | Default value |
| --------- | ------------------- | ----------------------------------------------- | ------------- |
| animation | Animation effects   | `wave` \|`pulse` \|`false`                      | `wave`        |
| variant   | Presentation format | `text` \|`circular` \|`rectangular` \|`rounded` | `text`        |
| width     | Occupation width    | `string` \|`number`                             | `100%`        |
| height    | Occupation height   | `string` \|`number `                            | `16px`        |

## Style variables

| attribute | explain                | Default value | global variable       |
| --------- | ---------------------- | ------------- | --------------------- |
| --height  | Skeleton screen height | 1.2em         | --bui-skeleton-height |
