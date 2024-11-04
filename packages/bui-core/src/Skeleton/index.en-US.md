---
group: feedback
name: Skeleton
---

# Skeleton

Provide a placeholder graphic combination at the location where content needs to be loaded.

## Code demonstration

### Basic usage

Use`width`和`height` set width and height.

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

The component supports 4 variants`variant`:

`text`(default: can be based on`font-size` adjust the size dynamically.

`circular`,`rectangular`,`rounded`:can be based on`width` and `height` to adjust the size.

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

The default is`wave`。you can base it on`animation` to set different animations or completely disable it.

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

Can be based on`style` `height`和`width` set the size based on sex.

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

| attribute | explain             | type                                               | Default value |
| --------- | ------------------- | -------------------------------------------------- | ------------- |
| animation | Animation effects   | `wave` \| `pulse` \| `false`                       | `wave`        |
| variant   | Presentation format | `text` \| `circular` \| `rectangular` \| `rounded` | `text`        |
| width     | Occupation width    | `string` \| `number`                               | `100%`        |
| height    | Occupation height   | `string` \| `number `                              | `16px`        |

## Style variables

| attribute       | explain                     | Default value              |
| --------------- | --------------------------- | -------------------------- |
| --border-radius | Skeleton screen corner size | `--bui-shape-radius-label` |
