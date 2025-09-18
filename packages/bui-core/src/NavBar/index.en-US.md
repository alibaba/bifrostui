---
group: Navigation
name: NavBar
---

# NavBar

Provides a navigation component for the page, commonly found at the top of mobile pages.

## Basic Usage

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

### Modify or Hide Left Default Icon

The component allows you to modify the style of the left return arrow. You can change the left return arrow by passing a `ReactNode` type parameter to `leftIcon`. If the parameter is `false`, the icon is hidden.

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

### Custom Left-Side Text

Modify the text content to the left of the return arrow by passing a `ReactNode` type parameter to the `left` property.

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

### Add a Title to the NavBar

The component supports a custom title, which can be changed by passing a `ReactNode` type parameter to the `title` property. Titles of the `string` type support ellipsis for overflow, while `ReactNode` needs to be implemented manually.

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
        <NavBar title="This title text is very long, very long, very long, very long" />
      </Stack>
    </Stack>
  );
};
```

### Customize Right-Side Content

Users can customize the contents of the right-side area by passing a `ReactNode` type parameter to the `right` property, referencing icons from `@bifrostui/icons`.

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

### Fixed at the Top

Users can fix the NavBar at the top of the page by passing `true` to the `fixed` property, and a placeholder can be generated at the original position by passing `true` to the `placeholder` property.

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

| Property    | Description                                                                                                                                                | Type                                         | Default                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------- |
| className   | Component class name                                                                                                                                       | string                                       | -                           |
| title       | Title                                                                                                                                                      | ReactNode                                    | -                           |
| left        | Customizes the content on the left side of the NavBar                                                                                                      | ReactNode                                    | -                           |
| leftIcon    | Customizes the left arrow, `false` to hide                                                                                                                 | ReactNode \| boolean                         | <ArrowBackwardLargeIcon \/> |
| IconProps   | Props passed to the internal icon                                                                                                                          | ISvgIconProps                                | -                           |
| right       | Customizes the content on the right side of the NavBar                                                                                                     | ReactNode                                    | -                           |
| fixed       | Whether the NavBar is fixed at the top                                                                                                                     | boolean                                      | false                       |
| placeholder | When fixed at the top, whether to generate a placeholder element of equal height at the original position (consider closing in immersive effect scenarios) | boolean                                      | false                       |
| onClickLeft | Callback event for clicking the return button                                                                                                              | (e: SyntheticEvent<HTMLDivElement\>) => void | -                           |

## Style Variables

| Global Variable              | Description          | Default Value            |
| ---------------------------- | -------------------- | ------------------------ |
| --bui-navbar-width           | Width of the NavBar  | `100%`                   |
| --bui-navbar-height          | Height of the NavBar | `45px`                   |
| --bui-navbar-padding         | NavBar padding       | `0 8px`                  |
| --bui-navbar-title-padding   | Title padding        | `0 8px`                  |
| --bui-navbar-icon-font-size  | Icon font size       | `24px`                   |
| --bui-navbar-bg-color        | Background color     | `var(--bui-color-white)` |
| --bui-navbar-border-bottom   | Bottom border        | `none`                   |
| --bui-navbar-z-index         | Z-index              | `auto`                   |
| --bui-navbar-title-max-width | Maximum title width  | `60%`                    |

```

```
