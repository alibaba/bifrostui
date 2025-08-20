---
group:
  title: Basic Input
  order: -1
order: -1
nav: Components
name: Button
---

# Button

Buttons are used to trigger an action, make a choice, such as submitting a form, opening a dialog, canceling an operation, or performing a delete action.

## Code Demos

### Basic Buttons

Buttons support four display styles: `Text Button`, `Outlined Button`, `Contained Button`, and `Subtle Button`. The default style is the Outlined Button.

- `Text Button`: Directly uses text as the button. This is the least visually attractive button and is typically found in table operation bars, titles, and beside fields.
- `Outlined Button`: Commonly in the form of white background with text, its visual emphasis is weaker than the Contained Button. It is usually paired with the Contained Button.
- `Contained Button`: Generally used as the main button, it is the highest-priority operation that users need to focus on across the entire page, guiding user attention and interaction.
- `Subtle Button`: A subtle button with a light background color that provides a softer visual appearance.

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Button color="primary" variant="text">
        Text Button
      </Button>
      <Button color="primary">Outlined Button</Button>
      <Button color="primary" variant="contained">
        Contained Button
      </Button>
      <Button color="primary" variant="subtle">
        Subtle Button
      </Button>
    </Stack>
  );
};
```

### Button Sizes

Buttons come in four sizes: large, medium, small, and full-width.

By setting `size` to `large`, `small`, or `full`, you can change the button size accordingly. If `size` is not set, the button will be medium-sized by default.

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="8px">
      <Stack direction="row" spacing="8px">
        <Button size="small">Small Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="large">Large Button</Button>
      </Stack>
      <Button size="full">Full-width Button</Button>
    </Stack>
  );
};
```

### Button Colors

Buttons support the following themes: `primary`, `success`, `info`, `warning`, `danger`, `vip`, `light`, and `dark`. If no color is specified, it defaults to `neutral`.

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Button variant="contained">Cancel</Button>
      <Button color="primary" variant="contained">
        Buy Ticket
      </Button>
      <Button color="success" variant="contained">
        Cinema
      </Button>
      <Button color="info" variant="contained">
        Movie
      </Button>
      <Button color="warning" variant="contained">
        Want to Watch
      </Button>
      <Button color="danger" variant="contained">
        Discount
      </Button>
      <Button color="vip" variant="contained">
        Member
      </Button>
      <Button color="light" variant="contained">
        Light
      </Button>
      <Button color="dark" variant="contained">
        Dark
      </Button>
    </Stack>
  );
};
```

### Disabled State

You can disable a button using the `disabled` property, making it unclickable when disabled.

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Button variant="text" disabled>
        Text Disabled
      </Button>
      <Button disabled>Outlined Disabled</Button>
      <Button variant="contained" disabled>
        Contained Disabled
      </Button>
    </Stack>
  );
};
```

### Buttons with Icons

Since users are more sensitive to icons compared to plain text, you might want to add icons to certain buttons to enhance your application's user experience. For example, if you have a date button, you can mark it with a date icon. `startIcon` appears before the child elements, and `endIcon` appears after them.

```tsx
import React from 'react';
import { Button, Stack } from '@bifrostui/react';
import { CalendarOutlinedIcon, HeartFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Button
        startIcon={
          <HeartFilledIcon htmlColor="linear-gradient(150deg, #FFFDFC 0%, #D5B198 100%)" />
        }
      >
        Heart
      </Button>
      <Button endIcon={<CalendarOutlinedIcon />}>Date</Button>
    </Stack>
  );
};
```

### Accessibility

The Button component has built-in accessibility support and can directly use the following ARIA attributes:

- `aria-label`: Provides an accessible label for the button
- `aria-describedby`: Associates an element that describes the button
- `aria-hidden`: Controls the visibility of the button in the accessibility tree
- `aria-details`: Provides detailed information about the button
- `aria-keyshortcuts`: Defines keyboard shortcuts for the button
- `aria-busy`: Indicates whether the button is in a busy state
- `aria-readonly`: Indicates whether the button is read-only
- `aria-required`: Indicates whether the button is required

Usage example:

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="8px">
      <Button aria-label="Close dialog">X</Button>
      <Button aria-describedby="description">Button</Button>
      <span id="description" style={{ display: 'none' }}>
        This is a description of the button
      </span>
      <Button
        aria-label="Save document"
        aria-keyshortcuts="Ctrl+S"
        aria-busy={false}
      >
        Save
      </Button>
    </Stack>
  );
};
```

## API

| Property  | Description          | Type                                                                                    | Default    |
| --------- | -------------------- | --------------------------------------------------------------------------------------- | ---------- |
| variant   | Button type          | `outlined` \| `text` \| `contained` \| `subtle`                                         | `outlined` |
| color     | Button color         | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `vip` \| `light` \| `dark` | `neutral`  |
| size      | Button size          | `small` \| `medium` \| `large` \| `full`                                                | `medium`   |
| disabled  | Whether to disable   | boolean                                                                                 | false      |
| startIcon | Content before child | React.ReactNode                                                                         | -          |
| endIcon   | Content after child  | React.ReactNode                                                                         | -          |
| openType  | WeChat open ability  | string                                                                                  | -          |
| onClick   | Click callback       | (event: MouseEvent) => void                                                             | -          |

Other properties see [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)

## Style Variables

| Property                  | Description                                   | Default Value                   | Global Variable                      |
| ------------------------- | --------------------------------------------- | ------------------------------- | ------------------------------------ |
| --border-radius           | Border radius                                 | 100px                           | --bui-button-border-radius           |
| --bg-color                | Background color                              | --bui-color-neutral-5           | --bui-button-default-bg-color        |
| --text-color              | Default text color                            | --bui-color-fg-muted            | --bui-button-text-color              |
| --default-border          | Default border for text and contained buttons | 1px solid transparent           | --bui-button-default-border          |
| --light-border            | Border for light buttons                      | 1px solid transparent           | --bui-button-light-border            |
| --outlined-default-border | Default border for outlined buttons           | 1px solid --bui-color-neutral-4 | --bui-button-outlined-default-border |
| --height                  | Default button height                         | 27px                            | --bui-button-height                  |
| --icon-start-margin-right | Right margin for start icon                   | --bui-spacing-xs                | --bui-button-icon-start-margin-right |
| --icon-end-margin-left    | Left margin for end icon                      | --bui-spacing-xs                | --bui-button-icon-end-margin-left    |
| --disabled-opacity        | Opacity for disabled state                    | 0.5                             | --bui-button-disabled-opacity        |
| --small-padding           | Padding for small buttons                     | 0 11px                          | --bui-button-small-padding           |
| --small-height            | Height for small buttons                      | 24px                            | --bui-button-small-height            |
| --medium-padding          | Padding for medium buttons                    | 0 14px                          | --bui-button-medium-padding          |
| --large-padding           | Padding for large buttons                     | 0 14px                          | --bui-button-large-padding           |
| --large-height            | Height for large buttons                      | 33px                            | --bui-button-large-height            |
| --full-font-size          | Font size for full-width buttons              | --bui-title-size-4              | --bui-button-full-font-size          |
| --full-height             | Height for full-width buttons                 | 42px                            | --bui-button-full-height             |
