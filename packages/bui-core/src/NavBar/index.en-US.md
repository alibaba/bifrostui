---
group: Navigation
name: NavBar navigation bar
---

# NavBar navigation bar

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

The component supports modifying the style of the left return arrow by passing a parameter of type ReactNode to leftCon to modify the left return arrow. When the pass parameter is' false ', hide the icon.

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

Control internal icons by setting 'IconProps'

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

Modify the text content to the left of the return arrow by passing a parameter of type ReactNode to the left attribute.

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

The component supports custom titles, which can be modified by passing parameters of type ReactNode to the title property The title of 'string' type supports omitting display beyond the limit, while 'ReactNode' needs to be implemented by oneself.

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

Users can customize the content of the right area by passing parameters of type ReactNode to the 'right' attribute, as shown in the icon content in '@ bifrostui/icons'.

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

Users can fix the navigation bar at the top of the page by passing 'true' to the 'fixed' property, and can also set the 'placeholder' property to pass' true 'to generate a placeholder block in its original position.

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

### Name

| attribute   | explain                                                                                                                                  | type                                       | Default value               |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------- |
| className   | Component class name                                                                                                                     | string                                     | -                           |
| title       | title                                                                                                                                    | ReactNode                                  | -                           |
| left        | Customize the content on the left side of the navigation bar                                                                             | ReactNode                                  | -                           |
| leftIcon    | Customize left arrow, false controls hide                                                                                                | ReactNode \|boolean                        | <ArrowBackwardLargeIcon \/> |
| IconProps   | Transmitting attributes to internal icons                                                                                                | ISvgIconProps                              | -                           |
| right       | Customize the content on the right side of the navigation bar                                                                            | ReactNode                                  | -                           |
| fixed       | Is it fixed at the top                                                                                                                   | boolean                                    | false                       |
| placeholder | When fixed at the top, generate an equally high placeholder element at the label position (consider turning off immersive effect scenes) | boolean                                    | false                       |
| onClickLeft | Click the return button to call back the event                                                                                           | (e: SyntheticEvent<HTMLDivElement) => void | -                           |

## Style variables

| attribute          | explain                               | Default value           | global variable               |
| ------------------ | ------------------------------------- | ----------------------- | ----------------------------- |
| --width            | Navigation bar width                  | 100%                    | --bui-navbar-width            |
| --height           | Navigation bar height                 | 45px                    | --bui-navbar-height           |
| --padding          |                                       | 0 8px                   | --bui-navbar-padding          |
| --title-max-width  | Maximum width of navigation bar title | 60%                     | --bui-navbar-title-max-width  |
| --icon-size        | Navigation bar icon size              | 30px                    | --bui-navbar-icon-size        |
| --icon-font-size   | Navigation bar icon font              | var(--bui-title-size-3) | --bui-navbar-icon-font-size   |
| --background-color | Navigation bar background color       | var(--bui-color-white)  | --bui-navbar-background-color |
| --border-bottom    | Bottom border style of navigation bar | none                    | --bui-navbar-border-bottom    |
| --z-index          | Default hierarchy of navigation bar   | auto                    | --bui-navbar-z-index          |
