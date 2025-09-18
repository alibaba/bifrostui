---
group: Feedback
name: Skeleton
---

# Skeleton

Provides a placeholder graphic combination at locations that require loading content.

## Basic Usage

Set width and height using `width` and `height`.

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

### Variants

The component supports 4 variants `variant`:

`text` (default): Automatically adjusts size based on `font-size`.

`circular`, `rectangular`, `rounded`: Size can be adjusted based on `width` and `height`.

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

### Animation

The default is `wave`. You can set different animations or disable them altogether based on `animation`.

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

### Combination

Different graphic combinations can be used.

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

### Size Inference

Size can be set based on `style`'s `height` and `width` properties.

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

| Property  | Description        | Type                                               | Default |
| --------- | ------------------ | -------------------------------------------------- | ------- |
| animation | Animation          | `wave` \| `pulse` \| `false`                       | `wave`  |
| variant   | Display form       | `text` \| `circular` \| `rectangular` \| `rounded` | `text`  |
| width     | Placeholder width  | `string` \| `number`                               | `100%`  |
| height    | Placeholder height | `string` \| `number`                               | `16px`  |

## Style Variables

| Global Variable       | Description     | Default |
| --------------------- | --------------- | ------- |
| --bui-skeleton-height | Skeleton height | `1.2em` |

```

```
