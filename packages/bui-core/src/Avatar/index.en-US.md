---
group:
  title: Basic Input
name: Avatar
---

# Avatar

Used to display user avatars or objects, supporting images, text, icons, and more.
`Avatar` is encapsulated based on the `Image` component, so it supports commonly used properties of [Image](http://bui.taopiaopiao.com/cores/image).

## Code Demos

### Basic Usage

The avatar component creates an image avatar by passing the image URL through the `src` attribute.

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
    </Stack>
  );
};
```

### String Avatars

Besides image avatars, you can create simple character-based avatars using the `children` prop.

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar>UC</Avatar>
      <Avatar>MK</Avatar>
    </Stack>
  );
};
```

### Custom Avatars

You can also create custom avatars, such as icons, using the `children` prop.

```tsx
import React from 'react';
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

### Avatar Shapes

The `Avatar` component provides two avatar shapes: circular (`rounded`) and square (`square`). You can set the shape using the `variant` prop. The default value for `variant` is `rounded`.

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

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

### Avatar Sizes

`Avatar` offers four sizes: `xsmall`, `small`, `medium`, and `large`. You can set the size using the `size` prop. The default size is `medium`.

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

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

In addition to individual avatars, we provide grouped avatars using `AvatarGroup` and `Avatar`.

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

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

### Avatar Shapes

The `AvatarGroup` component provides two avatar shapes: circular (`rounded`) and square (`square`). You can set the shape using the `variant` prop. The default value for `variant` is `rounded`.

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

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

### Controlling Displayed Avatar Count

The `AvatarGroup` component provides a `maxCount` property to limit the number of displayed avatars and automatically calculate the count of hidden avatars.

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

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

### Avatar Group Orientation

The `AvatarGroup` component provides an `orientation` property to control the orientation of avatars. The default orientation is `left`.

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

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

### Avatar Spacing

The `AvatarGroup` component provides a `spacing` property to control the spacing between avatars.

```tsx
import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

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

### API

#### AvatarProps

| Property    | Description                             | Type                                                 | Default Value |
| ----------- | --------------------------------------- | ---------------------------------------------------- | ------------- |
| src         | Image URL                               | string                                               | -             |
| alt         | Alternative text if image fails to load | React.ReactNode                                      | -             |
| lazy        | Lazy loading                            | boolean                                              | false         |
| placeholder | Placeholder while loading               | React.ReactNode \| boolean                           | false         |
| ImageProps  | Pass-through Image properties           | [ImageProps](http://bui.taopiaopiao.com/cores/image) | -             |
| variant     | Avatar shape                            | `rounded` \| `square`                                | `rounded`     |
| size        | Avatar size                             | `large` \| `medium` \| `small` \| `xsmall`           | `medium`      |
| onError     | Callback when image loading fails       | ReactEventHandler                                    | -             |
| onLoad      | Callback when image loads successfully  | ReactEventHandler                                    | -             |

#### AvatarGroupProps

| Property    | Description                       | Type                                       | Default Value |
| ----------- | --------------------------------- | ------------------------------------------ | ------------- |
| maxCount    | Maximum number of visible avatars | string                                     | -             |
| variant     | Avatar shape                      | `rounded` \| `square`                      | `rounded`     |
| size        | Avatar size                       | `large` \| `medium` \| `small` \| `xsmall` | `medium`      |
| spacing     | Spacing between avatars           | string                                     | -             |
| orientation | Avatar orientation                | `left` \| `right`                          | `right`       |

### Style Variables

#### Avatar

| Property      | Description                         | Default Value | Global Variable          |
| ------------- | ----------------------------------- | ------------- | ------------------------ |
| --large-size  | Large avatar width and height       | 60px          | --bui-avatar-large-size  |
| --medium-size | Medium avatar width and height      | 42px          | --bui-avatar-medium-size |
| --small-size  | Small avatar width and height       | 30px          | --bui-avatar-small-size  |
| --xsmall-size | Extra small avatar width and height | 24px          | --bui-avatar-xsmall-size |

#### AvatarGroup

| Property             | Description                    | Default Value                 | Global Variable                      |
| -------------------- | ------------------------------ | ----------------------------- | ------------------------------------ |
| --xsmall-margin-left | Extra small avatar left margin | -5px                          | --bui-avatar-group-xsmall-margin     |
| --small-margin-left  | Small avatar left margin       | -9px                          | --bui-avatar-group-small-margin      |
| --small-box-shadow   | Small avatar shadow            | 0 0 0 1px --bui-color-bg-view | --bui-avatar-group-small-box-shadow  |
| --medium-margin-left | Medium avatar left margin      | -13px                         | --bui-avatar-group-medium-margin     |
| --medium-box-shadow  | Medium avatar shadow           | 0 0 0 2px --bui-color-bg-view | --bui-avatar-group-medium-box-shadow |
| --large-margin-left  | Large avatar left margin       | -21px                         | --bui-avatar-group-large-margin      |
| --large-box-shadow   | Large avatar shadow            | 0 0 0 3px --bui-color-bg-view | --bui-avatar-group-large-box-shadow  |
