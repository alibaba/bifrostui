---
group:
  title: Basic input
name: Avatar avatar
---

# Avatar avatar

Used to display user avatars or objects, supporting the display of images, text, icons, etc.
Avatar is encapsulated based on the Image component, [Image]（ http://bui.taopiaopiao.com/cores/image ）Commonly used attributes are also supported by Avatar.

## Code demonstration

### Basic usage

The avatar component creates an image avatar by passing the image address through the 'src' attribute.

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

### String avatar

In addition to picture avatars, you can also create simple character avatars through 'children'.

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

### Customize avatar

Through 'children', you can also create custom avatars such as icons.

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

### Avatar shape

The Avatar component provides two avatar modes: round and square. You can use 'variable' to set the corresponding mode.
The default value for variant is' rounded '.

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

### Avatar size

Avatar offers four sizes: xsmall, small, medium, and large. You can set the corresponding size through size.
The default size is' medium '.

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

## Avatar combination

In addition to providing individual avatars, we also offer combination avatars that can be used through AvatarGroup and Avatar combinations.

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

### Avatar shape

The AvatarGroup component provides two avatar modes: round and square. You can use 'variable' to set the corresponding mode.
The default value for variant is' rounded '.

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

### Control the number of avatar displays

The AvatarGroup component provides the 'maxCount' property to limit the number of displayed avatars and automatically calculate the number of avatars that are not displayed.

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

### Avatar combination orientation

The AvatarGroup component provides the 'orientation' property to control the orientation of avatars.
The default orientation is' left '.

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

### Avatar spacing

The AvatarGroup component provides the 'spacing' attribute to control the distance between avatars.

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

| attribute   | explain                                         | type                                                 | Default value |
| ----------- | ----------------------------------------------- | ---------------------------------------------------- | ------------- |
| src         | Image address                                   | string                                               | -             |
| alt         | Alternative text when image cannot be displayed | React.ReactNode                                      | -             |
| lazy        | Lazy loading                                    | boolean                                              | false         |
| placeholder | Occupy space during loading                     | React.ReactNode ｜ boolean                           | false         |
| ImageProps  | Transparent Image attribute                     | [ImageProps](http://bui.taopiaopiao.com/cores/image) | -             |
| variant     | Avatar shape                                    | `rounded`｜`square`                                  | `rounded`     |
| size        | Avatar size                                     | `large`｜`medium`｜`small` ｜`xsmall`                | `medium`      |
| onError     | Image avatar loading failure callback           | ReactEventHandler                                    | -             |
| onLoad      | Image avatar loading callback                   | ReactEventHandler                                    | -             |

#### AvatarGroupProps

| attribute   | explain                                             | type                                  | Default value |
| ----------- | --------------------------------------------------- | ------------------------------------- | ------------- |
| maxCount    | The maximum number of avatars that can be displayed | string                                | -             |
| variant     | Avatar shape                                        | `rounded` ｜`square`                  | `rounded`     |
| size        | Avatar size                                         | `large`｜`medium`｜`small` ｜`xsmall` | `medium`      |
| spacing     | Avatar spacing                                      | string                                | -             |
| orientation | Avatar orientation                                  | `left`｜`right`                       | `right`       |

### Style variables

#### Avatar

| attribute     | explain                                | Default value | global variable          |
| ------------- | -------------------------------------- | ------------- | ------------------------ |
| --large-size  | Large profile picture width and height | 60px          | --bui-avatar-large-size  |
| --medium-size | Medium sized avatar width and height   | 42px          | --bui-avatar-medium-size |
| --small-size  | Small profile picture width and height | 30px          | --bui-avatar-small-size  |
| --xsmall-size | Ultra small avatar width and height    | 24px          | --bui-avatar-xsmall-size |

#### AvatarGroup

| attribute            | explain                        | Default value                 | global variable                       |
| -------------------- | ------------------------------ | ----------------------------- | ------------------------------------- |
| --xsmall-margin-left | Ultra small avatar left margin | -5px                          | --bui-avatar-group-xsmall-margin-left |
| --small-margin-left  | Small size head left margin    | -9px                          | --bui-avatar-group-small-margin-left  |
| --small-box-shadow   | Small sized avatar shadow      | 0 0 0 1px --bui-color-bg-view | --bui-avatar-group-small-box-shadow   |
| --medium-margin-left | Medium size head left margin   | -13px                         | --bui-avatar-group-medium-margin-left |
| --medium-box-shadow  | Medium sized avatar shadow     | 0 0 0 2px --bui-color-bg-view | --bui-avatar-group-medium-box-shadow  |
| --large-margin-left  | Large head left margin         | -21px                         | --bui-avatar-group-large-margin-left  |
| --large-box-shadow   | Large sized avatar shadow      | 0 0 0 3px --bui-color-bg-view | --bui-avatar-group-large-box-shadow   |
