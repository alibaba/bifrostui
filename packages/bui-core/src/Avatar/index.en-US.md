---
group:
  title: Basic Input
name: Avatar
---

# Avatar

Used to display user avatars or objects, supporting displaying images, text, icons, etc. `Avatar` is encapsulated based on the `Image` component, supporting common attributes of [Image](http://bui.taopiaopiao.com/cores/image) as well.

## Basic Usage

The Avatar component creates an image avatar via the `src` attribute to pass the image URL.

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
    </Stack>
  );
};
```

## Text Avatars

In addition to image avatars, you can create simple text avatars using `children`.

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar>UC</Avatar>
      <Avatar>MK</Avatar>
    </Stack>
  );
};
```

## Custom Avatars

You can also create custom avatars like icons using `children`.

```tsx
import * as React from 'react';
import { Avatar, Stack } from '@bifrostui/react';
import { VipFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar>
        <VipFilledIcon />
      </Avatar>
    </Stack>
  );
};
```

## Avatar Shapes

The Avatar component provides two avatar modes: circular `rounded`, and square `square`. You can use `variant` to set the corresponding mode. The default value for variant is `rounded`.

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      <Avatar
        variant="square"
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
      />
    </Stack>
  );
};
```

## Avatar Sizes

`Avatar` provides four sizes: `xsmall`, `small`, `medium`, and `large`. You can set the corresponding size using `size`. The default size is `medium`.

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="xsmall"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="small"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="medium"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="large"
      />
    </Stack>
  );
};
```

## Avatar Groups

In addition to providing single avatars, we also provide avatar groups using `AvatarGroup` combined with `Avatar`.

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};
```

## Avatar Shapes

The AvatarGroup component provides two avatar modes: circular `rounded`, and square `square`. You can use `variant` to set the corresponding mode. The default value for variant is `rounded`.

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack direction="column" spacing="10px">
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
      <AvatarGroup variant="square">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};
```

## Control Avatar Display Number

The AvatarGroup component provides the `maxCount` attribute to limit the number of avatars displayed and automatically calculate the number of hidden avatars.

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup maxCount="2">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};
```

## Avatar Group Orientation

The AvatarGroup component provides the `orientation` attribute to control the direction of the avatars. The default orientation is `left`.

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack direction="column" spacing="10px">
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
      <AvatarGroup orientation="left">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};
```

## Avatar Spacing

The AvatarGroup component provides the `spacing` attribute to control the spacing between the avatars.

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup maxCount="2" spacing="10px">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};
```

## API

### AvatarProps

| Property    | Description                             | Type                                                 | Default   |
| ----------- | --------------------------------------- | ---------------------------------------------------- | --------- |
| src         | Image URL                               | string                                               | -         |
| alt         | Alt text when image cannot be displayed | React.ReactNode                                      | -         |
| lazy        | Lazy loading                            | boolean                                              | false     |
| placeholder | Placeholder when loading                | React.ReactNode ｜ boolean                           | false     |
| ImageProps  | Pass-through Image properties           | [ImageProps](http://bui.taopiaopiao.com/cores/image) | -         |
| variant     | Avatar shape                            | `rounded`｜`square`                                  | `rounded` |
| size        | Avatar size                             | `large`｜`medium`｜`small` ｜`xsmall`                | `medium`  |
| onError     | Callback on image load failure          | ReactEventHandler                                    | -         |
| onLoad      | Callback on image load                  | ReactEventHandler                                    | -         |

### AvatarGroupProps

| Property    | Description                          | Type                                  | Default   |
| ----------- | ------------------------------------ | ------------------------------------- | --------- |
| maxCount    | Maximum number of avatars to display | string                                | -         |
| variant     | Avatar shape                         | `rounded`｜`square`                   | `rounded` |
| size        | Avatar size                          | `large`｜`medium`｜`small` ｜`xsmall` | `medium`  |
| spacing     | Avatar spacing                       | string                                | -         |
| orientation | Avatar direction                     | `left`｜`right`                       | `right`   |

## Style Variables

### Avatar

| Global Variable          | Description        | Default |
| ------------------------ | ------------------ | ------- |
| --bui-avatar-large-size  | Large avatar size  | `60px`  |
| --bui-avatar-medium-size | Medium avatar size | `42px`  |
| --bui-avatar-small-size  | Small avatar size  | `30px`  |
| --bui-avatar-xsmall-size | Mini avatar size   | `24px`  |

### AvatarGroup

| Global Variable                      | Description                 | Default                              |
| ------------------------------------ | --------------------------- | ------------------------------------ |
| --bui-avatar-group-xsmall-margin     | Mini avatar group spacing   | `0 0 0 -5px`                         |
| --bui-avatar-group-small-margin      | Small avatar group spacing  | `0 0 0 -9px`                         |
| --bui-avatar-group-small-box-shadow  | Small avatar group shadow   | `0 0 0 1px var(--bui-color-bg-view)` |
| --bui-avatar-group-medium-margin     | Medium avatar group spacing | `0 0 0-13px`                         |
| --bui-avatar-group-medium-box-shadow | Medium avatar group shadow  | `0 0 0 2px var(--bui-color-bg-view)` |
| --bui-avatar-group-large-margin      | Large avatar group spacing  | `0 0 0 -21px`                        |
| --bui-avatar-group-large-box-shadow  | Large avatar group shadow   | `0 0 0 3px var(--bui-color-bg-view)` |

```

```
