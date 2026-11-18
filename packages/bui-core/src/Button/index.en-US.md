---
group:
  title: Basic Input
  order: -1
order: -1
nav: Components
name: Button
---

# Button

Buttons are used to trigger an action or make a choice, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Button Variants

Buttons support four variants: `Text Button`, `Outlined Button`, `Contained Button`, and `Subtle Button`, with the default being `Outlined Button`.

- `Text Button`: Subtle and flexible. Suitable for inline actions, minimalist interfaces, and lightweight operations.
- `Outlined Button`: Neutral and flexible, suitable for transparent backgrounds, visual balance, and medium-priority operations.
- `Contained Button`: Prominent and important. Suitable for strong visual focus, high-priority operations, and main actions.
- `Subtle Button`: Subtle and non-focus, suitable for gentle interfaces, low contrast designs, and secondary operations.

```tsx
import { Button, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="9px" flexWrap="wrap">
      <Button color="primary" variant="text">
        Text
      </Button>
      <Button color="primary">Outlined</Button>
      <Button color="primary" variant="contained">
        Contained
      </Button>
      <Button color="primary" variant="subtle">
        Subtle
      </Button>
    </Stack>
  );
};
```

## Button Sizes

Buttons come in three sizes: Large, Medium, and Small.

By setting `size` to `large`, `small`, or `full`, the button can be adjusted to large, small, or full-width size, respectively. If `size` is not set, the default size is medium.

```tsx
import { Button, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack spacing="9px">
      <Stack direction="row" spacing="9px" style={{ width: '350px' }}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Stack>
      <Button size="full" style={{ width: '350px' }}>
        Full
      </Button>
      <Stack direction="row" spacing="9px" style={{ width: '350px' }}>
        <Button size="small" variant="contained" color="primary">
          Small
        </Button>
        <Button size="medium" variant="contained" color="primary">
          Medium
        </Button>
        <Button size="large" variant="contained" color="primary">
          Large
        </Button>
      </Stack>
      <Button
        size="full"
        variant="contained"
        color="primary"
        style={{ width: '350px' }}
      >
        Full
      </Button>
    </Stack>
  );
};
```

## Button Colors

Buttons support theme definitions of `primary`, `success`, `info`, `warning`, `danger`, `vip`, `light`, and `dark`. If `color` is not set, it defaults to `neutral`.

- `primary`: Main button, conveys brand theme.
- `info`: Information prompt or neutral operation.
- `success`: Successful or positive operation (e.g., complete, pass).
- `warning`: Warning or cautious operations (e.g., reminder, modification).
- `danger`: Dangerous, emphasized, crucial, core, or destructive operation (e.g., delete, logout).
- `vip`: Prestige, exclusivity, or a high-class feel.
- `light`: Light color theme.
- `dark`: Dark color theme.

```tsx
import { Button, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <div
      className="btn-colors"
      style={{
        borderRadius: 'var(--bui-shape-radius-card)',
        background: 'var(--bui-color-bg-default)',
        padding: '24px',
      }}
    >
      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button variant="text">Button</Button>
        <Button variant="outlined">Button</Button>
        <Button variant="contained">Button</Button>
        <Button variant="subtle">Button</Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="light" variant="text">
          Button
        </Button>
        <Button color="light" variant="outlined">
          Button
        </Button>
        <Button color="light" variant="contained">
          Button
        </Button>
        <Button color="light" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="dark" variant="text">
          Button
        </Button>
        <Button color="dark" variant="outlined">
          Button
        </Button>
        <Button color="dark" variant="contained">
          Button
        </Button>
        <Button color="dark" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="primary" variant="text">
          Button
        </Button>
        <Button color="primary" variant="outlined">
          Button
        </Button>
        <Button color="primary" variant="contained">
          Button
        </Button>
        <Button color="primary" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="success" variant="text">
          Button
        </Button>
        <Button color="success" variant="outlined">
          Button
        </Button>
        <Button color="success" variant="contained">
          Button
        </Button>
        <Button color="success" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="info" variant="text">
          Button
        </Button>
        <Button color="info" variant="outlined">
          Button
        </Button>
        <Button color="info" variant="contained">
          Button
        </Button>
        <Button color="info" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="warning" variant="text">
          Button
        </Button>
        <Button color="warning" variant="outlined">
          Button
        </Button>
        <Button color="warning" variant="contained">
          Button
        </Button>
        <Button color="warning" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="danger" variant="text">
          Button
        </Button>
        <Button color="danger" variant="outlined">
          Button
        </Button>
        <Button color="danger" variant="contained">
          Button
        </Button>
        <Button color="danger" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="vip" variant="text">
          Button
        </Button>
        <Button color="vip" variant="outlined">
          Button
        </Button>
        <Button color="vip" variant="contained">
          Button
        </Button>
        <Button color="vip" variant="subtle">
          Button
        </Button>
      </Stack>
    </div>
  );
};
```

## Disabled State

Buttons can be disabled using the `disabled` property, rendering them non-clickable.

```tsx
import { Button, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="9px">
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

## Buttons with Icons

Users are more visually attuned to icons compared to plain text, so you might want to add icons to certain buttons to enhance user experience. For instance, a date button could be labeled with a date icon. `startIcon` appears before children elements, and `endIcon` appears after them.

```tsx
import * as React from 'react';
import { Button, Stack } from '@bifrostui/react';
import { CalendarOutlinedIcon, HeartFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="9px">
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

## API

| Property  | Description              | Type                                                                                    | Default    |
| --------- | ------------------------ | --------------------------------------------------------------------------------------- | ---------- |
| variant   | Button type              | `outlined` \| `text` \| `contained` \| `subtle`                                         | `outlined` |
| color     | Button color             | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `vip` \| `light` \| `dark` | `neutral`  |
| size      | Button size              | `small` \| `medium` \| `large` \| `full`                                                | `medium`   |
| disabled  | Disabled state           | boolean                                                                                 | false      |
| startIcon | Content before children  | React.ReactNode                                                                         | -          |
| endIcon   | Content after children   | React.ReactNode                                                                         | -          |
| openType  | WeChat open capabilities | string                                                                                  | -          |
| onClick   | Callback on button click | (event: MouseEvent) => void                                                             | -          |

Other properties refer to [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)

## Style Variables

| Global Variable               | Description                   | Default Value                          |
| ----------------------------- | ----------------------------- | -------------------------------------- |
| --bui-btn-font-size           | Font size                     | `var(--bui-text-size-3)`               |
| --bui-btn-font-weight         | Font weight                   | `var(--bui-font-weight-medium)`        |
| --bui-btn-border-radius       | Border radius                 | `120px`                                |
| --bui-btn-small-border-radius | Small button radius           | `120px`                                |
| --bui-btn-large-border-radius | Large button radius           | `120px`                                |
| --bui-btn-full-border-radius  | Full-width button radius      | `120px`                                |
| --bui-btn-color               | Text color                    | `var(--bui-color-fg-muted)`            |
| --bui-btn-bg                  | Background color              | `var(--bui-color-bg-view)`             |
| --bui-btn-border              | Border style                  | `0`                                    |
| --bui-btn-height              | Button height                 | `27px`                                 |
| --bui-btn-small-height        | Small button height           | `24px`                                 |
| --bui-btn-large-height        | Large button height           | `33px`                                 |
| --bui-btn-full-height         | Full-width button height      | `42px`                                 |
| --bui-btn-subtle-border       | Subtle button border          | `0`                                    |
| --bui-btn-outlined-border     | Outlined button border        | `1px solid var(--bui-color-neutral-4)` |
| --bui-btn-disabled-opacity    | Disabled state opacity        | `0.5`                                  |
| --bui-btn-small-padding       | Small button padding          | `0 11px`                               |
| --bui-btn-padding             | Button padding                | `0 14px`                               |
| --bui-btn-large-padding       | Large button padding          | `0 14px`                               |
| --bui-btn-full-font-size      | Full-width button font size   | `var(--bui-title-size-4)`              |
| --bui-btn-full-font-family    | Full-width button font family | `var(--bui-font-family)`               |

```

```
