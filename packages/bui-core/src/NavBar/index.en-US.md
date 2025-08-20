---
group: Navigation
name: NavBar Navigation Bar
---

# NavBar Navigation Bar

Provides a navigation component for pages, commonly found at the top of mobile pages.

## Code Examples

### Basic Usage

Simply import the component to add a navigation bar to the top of the page.

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

### Modifying or Hiding the Default Left Icon

The component supports modifying the style of the left arrow. Pass a `ReactNode` type parameter to `leftIcon` to change the left arrow. If the parameter is `false`, the icon will be hidden.

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

### Customizing Icon Display

Control the internal icons by setting `IconProps`.

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

### Customizing the Left Text

Modify the text content to the left of the back arrow by passing a `ReactNode` type parameter to the `left` property.

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

### Adding a Title to the Navigation Bar

Customize the title by passing a `ReactNode` type parameter to the `title` property. Titles of type `string` support ellipsis for overflow, while `ReactNode` types need to handle this manually.

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
        <NavBar title="This title text is very long and exceeds the normal length" />
      </Stack>
    </Stack>
  );
};
```

### Customizing the Right Content

Users can customize the content on the right side by passing a `ReactNode` type parameter to the `right` property. Refer to the icons in `@bifrostui/icons` for examples.

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

### Fixing to the Top

Users can fix the navigation bar to the top of the page by passing `true` to the `fixed` property. Additionally, setting `placeholder` to `true` will generate a placeholder block at the original position.

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

| Property    | Description                                                                   | Type                                          | Default Value               |
| ----------- | ----------------------------------------------------------------------------- | --------------------------------------------- | --------------------------- |
| className   | Component class name                                                          | string                                        | -                           |
| title       | Title                                                                         | ReactNode                                     | -                           |
| left        | Custom content for the left side of the navigation bar                        | ReactNode                                     | -                           |
| leftIcon    | Customize the left arrow, `false` to hide it                                  | ReactNode \| boolean                          | <ArrowBackwardLargeIcon \/> |
| IconProps   | Props passed to the internal icon                                             | ISvgIconProps                                 | -                           |
| right       | Custom content for the right side of the navigation bar                       | ReactNode                                     | -                           |
| fixed       | Whether to fix the navigation bar to the top                                  | boolean                                       | false                       |
| placeholder | Whether to generate a placeholder element at the original position when fixed | boolean                                       | false                       |
| onClickLeft | Callback for the left button click event                                      | (e: SyntheticEvent<HTMLDivElement \>) => void | -                           |

## Style Variables

| Property           | Description                                  | Default Value           | Global Variable              |
| ------------------ | -------------------------------------------- | ----------------------- | ---------------------------- |
| --width            | Width of the navigation bar                  | 100%                    | --bui-navbar-width           |
| --height           | Height of the navigation bar                 | 45px                    | --bui-navbar-height          |
| --padding          | Padding of the navigation bar                | 0 8px                   | --bui-navbar-padding         |
| --title-max-width  | Maximum width of the title                   | 60%                     | --bui-navbar-title-max-width |
| --icon-size        | Size of the icons in the navigation bar      | 30px                    | --bui-navbar-icon-size       |
| --icon-font-size   | Font size of the icons in the navigation bar | var(--bui-title-size-3) | --bui-navbar-icon-font-size  |
| --background-color | Background color of the navigation bar       | var(--bui-color-white)  | --bui-navbar-bg-color        |
| --border-bottom    | Bottom border style of the navigation bar    | none                    | --bui-navbar-border-bottom   |
| --z-index          | Default z-index of the navigation bar        | auto                    | --bui-navbar-z-index         |
