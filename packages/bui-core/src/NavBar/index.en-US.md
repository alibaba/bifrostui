---
group: Navigation
name: NavBar
---

# NavBar

Provide navigation components for pages, commonly found at the top of mobile pages

## Code demonstration

### Basic usage

Simply import the component to add a navigation bar at the top of the page

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar />
    </Stack>
  );
};
```

### Modify or hide the default icon on the left side

The component supports modifying the style of the left return arrow by`leftIcon` delivery`ReactNode` type parameters, modify the left return arrow. when passing parameters as`false` situation, hide icon.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';
import { CloseLargeIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar title="标题文案" leftIcon={<CloseLargeIcon />} />
      <NavBar title="标题文案" leftIcon={false} />
    </Stack>
  );
};
```

### Custom icon display

By setting`IconProps`来control internal icons

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar title="标题文案" IconProps={{ htmlColor: '#ff335c' }} />
    </Stack>
  );
};
```

### Customize left copy

By approaching`left` sexual transmission`ReactNode` type parameters, modify the text content to the left of the return arrow.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar left="返回" />
    </Stack>
  );
};
```

### Add a title to the navigation bar

The component supports custom titles through`title` sexual transmission`ReactNode` type parameters, complete the modification of the title.`string` the title of the type supports omitting the display of the excess part,`ReactNode` to achieve it on one's own.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Stack spacing="50px" style={{ width: '375px' }}>
        <NavBar title="标题文案" />
        <NavBar title="这个标题文案很长很长很长很长" />
      </Stack>
    </Stack>
  );
};
```

### Customize the content on the right side

Users can access it through`right` sexual transmission`ReactNode` type parameters are used to customize the content of the right area, refer to`@bifrostui/icons` the icon content.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';
import { MoreIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar title="标题文案" right="文案" />
      <NavBar title="标题文案" right={<MoreIcon size="large" />} />
    </Stack>
  );
};
```

### Fixed at the top

Users can access it through`fixed` sexual transmission`true` the navigation bar is fixed at the top of the page and can also be set`placeholder` sexual transmission`true` generate a placeholder block at the original location.

```tsx
/**
 * background: '#f6f7f9'
 * iframe: 812
 * transform: true
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar title="标题文案" fixed placeholder />
    </Stack>
  );
};
```

## API

### NavBar

| attribute   | explain                                                                                                                                  | type                                       | Default value               |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------- |
| className   | Component class name                                                                                                                     | string                                     | -                           |
| title       | title                                                                                                                                    | ReactNode                                  | -                           |
| left        | Customize the content on the left side of the navigation bar                                                                             | ReactNode                                  | -                           |
| leftIcon    | Customize left arrow, false controls hide                                                                                                | ReactNode \| boolean                       | <ArrowBackwardLargeIcon \/> |
| IconProps   | Transmitting attributes to internal icons                                                                                                | ISvgIconProps                              | -                           |
| right       | Customize the content on the right side of the navigation bar                                                                            | ReactNode                                  | -                           |
| fixed       | Is it fixed at the top                                                                                                                   | boolean                                    | false                       |
| placeholder | When fixed at the top, generate an equally high placeholder element at the label position (consider turning off immersive effect scenes) | boolean                                    | false                       |
| onClickLeft | Click the return button to call back the event                                                                                           | (e: SyntheticEvent<HTMLDivElement) => void | -                           |

## Style variables

| Attributes          | Description                           | Default Values            | Global Variables                  |
| ------------------- | ------------------------------------- | ------------------------- | --------------------------------- |
| -- width            | Navigation bar width                  | 100%                      | -- bui navbar width               |
| -- height           | Navigation bar height                 | 45px                      | -- bui navbar height              |
| --padding           |                                       | 0 8px                     | --bui-navbar-padding              |
| -- title max width  | maximum width of navigation bar title | 60%                       | -- bui navbar title max width     |
| -- icon size        | Navigation bar icon size              | 30px                      | -- bui navbar icon size           |
| -- icon font size   | Navigation bar icon font              | var (-- bui-title-size-3) | -- bui-navbar-icon font size size |
| -- background color | navigation bar background color       | var (-- bui color white)  | -- bui navbar background color    |
| -- border bottom    | Navigation bar bottom border style    | none                      | -- bui navbar border bottom       |
| -- z-index          | default navigation bar hierarchy      | auto                      | -- bui-navbar-z index             |
