---
group: Navigation
name: NavBar Navigation Bar
---

# NavBar Navigation Bar

Provides a navigation component for the page, commonly seen at the top of mobile web pages.

## Code Demos

### Basic Usage

Simply import the component to add a navigation bar at the top of the page.

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

### Modify or Hide Default Left Icon

The component supports customizing the style of the left back arrow by passing a `ReactNode` type parameter to `leftIcon`. When set to `false`, it hides the icon.

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
      <NavBar title="Title Text" leftIcon={<CloseLargeIcon />} />
      <NavBar title="Title Text" leftIcon={false} />
    </Stack>
  );
};
```

### Custom Icon Display

Control internal icons by setting `IconProps`.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar title="Title Text" IconProps={{ htmlColor: '#ff335c' }} />
    </Stack>
  );
};
```

### Customize Left Text

Modify the text content on the left side of the back arrow by passing a `ReactNode` type parameter to `left`.

```tsx
/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar left="Back" />
    </Stack>
  );
};
```

### Add Titles to the Navigation Bar

Customize titles by passing a `ReactNode` type parameter to `title`. For `string` type titles, overflow text will be truncated. For `ReactNode`, you need to implement this yourself.

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
        <NavBar title="Title Text" />
        <NavBar title="This is a very long title that goes on and on" />
      </Stack>
    </Stack>
  );
};
```

### Customize Right Content

Customize the right area content by passing a `ReactNode` type parameter to `right`.

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
      <NavBar title="Title Text" right="Text" />
      <NavBar title="Title Text" right={<MoreIcon size="large" />} />
    </Stack>
  );
};
```

### Fix to Top

Fix the navigation bar at the top of the page by passing `true` to `fixed`. You can also set `placeholder` to `true` to generate a placeholder block in its original position.

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
      <NavBar title="Title Text" fixed placeholder />
    </Stack>
  );
};
```

## API

### NavBar

| Property    | Description                                                                          | Type                                        | Default Value               |
| ----------- | ------------------------------------------------------------------------------------ | ------------------------------------------- | --------------------------- |
| className   | Component class name                                                                 | string                                      | -                           |
| title       | Title                                                                                | ReactNode                                   | -                           |
| left        | Custom content on the left side of the navigation bar                                | ReactNode                                   | -                           |
| leftIcon    | Customize left arrow, `false` hides it                                               | ReactNode \| boolean                        | <ArrowBackwardLargeIcon \/> |
| IconProps   | Props passed to the internal icon                                                    | ISvgIconProps                               | -                           |
| right       | Custom content on the right side of the navigation bar                               | ReactNode                                   | -                           |
| fixed       | Whether to fix at the top                                                            | boolean                                     | false                       |
| placeholder | Whether to generate a placeholder element at the original position when fixed at top | boolean                                     | false                       |
| onClickLeft | Callback event for clicking the back button                                          | (e: SyntheticEvent<HTMLDivElement>) => void | -                           |

## Style Variables

| Property           | Description           | Default Value           | Global Variable               |
| ------------------ | --------------------- | ----------------------- | ----------------------------- |
| --width            | Navigation bar width  | 100%                    | --bui-navbar-width            |
| --height           | Navigation bar height | 45px                    | --bui-navbar-height           |
| --padding          | Padding               | 0 8px                   | --bui-navbar-padding          |
| --title-max-width  | Maximum title width   | 60%                     | --bui-navbar-title-max-width  |
| --icon-size        | Icon size             | 30px                    | --bui-navbar-icon-size        |
| --icon-font-size   | Icon font size        | var(--bui-title-size-3) | --bui-navbar-icon-font-size   |
| --background-color | Background color      | var(--bui-color-white)  | --bui-navbar-background-color |
| --border-bottom    | Bottom border style   | none                    | --bui-navbar-border-bottom    |
| --z-index          | Default z-index       | auto                    | --bui-navbar-z-index          |
