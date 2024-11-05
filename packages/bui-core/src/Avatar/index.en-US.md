---
group:
  title: Basic input
name: Avatar
---

# Avatar

Used to display user avatars or objects, supporting the display of images, text, icons, etc.
`Avatar`be based on `Image` [Image](http://bui.taopiaopiao.com/cores/image). Commonly used attributes are also supported by avatar.

## Code demonstration

### Basic usage

Avatar component passed `src` to create an image avatar by using an image address.

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

In addition to picture avatars, you can also use `children` to create a simple character avatar.

```tsx
import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar>UC</Avatar>
      <Avatar>UFCEAEF</Avatar>
    </Stack>
  );
};
```

### Customize avatar

Adopting `children`, you can create custom avatars such as icons.

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

The Avatar component provides two avatar modes: circular `rounded` and square shaped`square`，you can use `variant` to set the corresponding mode.
The default value for variant is `rounded`。

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

`Avatar` supply `xsmall`、`small`、`medium`、`large`, you can go through `size` to set the corresponding size.
The default size for size is `medium`。

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

In addition to providing individual avatars, we also offer combination avatars through `AvatarGroup`、`Avatar` combined use.

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

AvatarGroup component provides two avatar modes: circular `rounded` square shaped `square`，you can use `variant` to set the corresponding mode.
The default value for variant is `rounded`。

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

AvatarGroup component provides `maxCount` to limit the number of displayed avatars based on gender and automatically calculate the number of avatars that are not displayed.

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

AvatarGroup component provides `orientation` to control the orientation of the avatar.
The default orientation is `left`。

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

AvatarGroup component provides `spacing` to control the spacing between avatars.

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

| attribute     | explain                                  | Default value | global variable          |
| ------------- | ---------------------------------------- | ------------- | ------------------------ |
| --large-size  | Large size avatar width and height       | 60px          | --bui-avatar-large-size  |
| --medium-size | Medium size avatar width and height      | 42px          | --bui-avatar-medium-size |
| --small-size  | Small size avatar width and height       | 30px          | --bui-avatar-small-size  |
| --xsmall-size | Ultra small size avatar width and height | 24px          | --bui-avatar-xsmall-size |

#### AvatarGroup

| attribute            | explain                                | Default value                 | global variable                       |
| -------------------- | -------------------------------------- | ----------------------------- | ------------------------------------- |
| --xsmall-margin-left | Ultra small size left margin of avatar | -5px                          | --bui-avatar-group-xsmall-margin-left |
| --small-margin-left  | Small size header left margin          | -9px                          | --bui-avatar-group-small-margin-left  |
| --small-box-shadow   | Small size avatar shadow               | 0 0 0 1px --bui-color-bg-view | --bui-avatar-group-small-box-shadow   |
| --medium-margin-left | Medium header left margin              | -13px                         | --bui-avatar-group-medium-margin-left |
| --medium-box-shadow  | Medium size avatar shadow              | 0 0 0 2px --bui-color-bg-view | --bui-avatar-group-medium-box-shadow  |
| --large-margin-left  | Large left margin of header            | -21px                         | --bui-avatar-group-large-margin-left  |
| --large-box-shadow   | Large size avatar shadow               | 0 0 0 3px --bui-color-bg-view | --bui-avatar-group-large-box-shadow   |
