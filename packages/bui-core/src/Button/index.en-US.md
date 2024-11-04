---
group:
  title: Basic input
  order: -1
order: -1
nav: assembly
name: Button
---

# Button

The button is used to trigger an operation, make a selection, such as submitting a form, opening a dialog box, canceling the operation, or performing a deletion operation.

## Code demonstration

### Basic button

Button support`text button`、`Stroke button`、`Fill button`、`Light button`four display forms, default is the stroke button.

`text button`: directly use text as a button. it is the button with the weakest visual appeal, usually appearing next to table operation bars, titles, and fields.

`Fill button`: generally used for the main button, it is the highest priority operation that users need to pay attention to on the entire page, guiding them to focus on and operate.

`Stroke button`: the common form of white background with text is weaker in visual emphasis than the fill button, and is usually used in combination with the fill button

`Light button`: the text in a light state is the background color of the button, and the background is the corresponding light color.

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Button color="primary" variant="text">
        文字按钮
      </Button>
      <Button color="primary">描边按钮</Button>
      <Button color="primary" variant="contained">
        填充按钮
      </Button>
      <Button color="primary" variant="light">
        浅亮按钮
      </Button>
    </Stack>
  );
};
```

### Button size

The buttons come in three sizes: large, medium, and small.

By setting`size`set the buttons to large, small, and full sizes respectively. if not set，the size is of medium size.

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="8px">
      <Stack direction="row" spacing="8px">
        <Button size="small">小号按钮</Button>
        <Button size="medium">中号按钮</Button>
        <Button size="large">大号按钮</Button>
      </Stack>
      <Button size="full">通栏按钮</Button>
    </Stack>
  );
};
```

### Button color

Button support`primary`、`success`、`info`、`warning`、`danger`、`vip`topic definition. if color is not set, it defaults to`default`

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Button variant="contained">取消</Button>
      <Button color="primary" variant="contained">
        购票
      </Button>
      <Button color="success" variant="contained">
        影城
      </Button>
      <Button color="info" variant="contained">
        电影
      </Button>
      <Button color="warning" variant="contained">
        想看
      </Button>
      <Button color="danger" variant="contained">
        特惠
      </Button>
      <Button color="vip" variant="contained">
        会员
      </Button>
    </Stack>
  );
};
```

### Disabled status

The attribute `disabled` is used to disable the button, and the button cannot be clicked in the disabled state.

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Button variant="text" disabled>
        文字禁用
      </Button>
      <Button disabled>描边禁用</Button>
      <Button variant="contained" disabled>
        填充禁用
      </Button>
    </Stack>
  );
};
```

### Button with icon

Because users are more sensitive to icons compared to plain text, sometimes you may want to set icons for certain buttons to enhance the user experience of the application. For example, if you have a date button, you can use a date icon to mark it.`startIcon`located in front of the sub element,`endIcon`located after the child element.

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

## API

| attribute | explain                                     | type                                                                            | Default value |
| --------- | ------------------------------------------- | ------------------------------------------------------------------------------- | ------------- |
| variant   | Button type                                 | `outlined` \| `text` \| `contained` \| light                                    | `text`        |
| color     | Button color                                | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `vip` \| `default` | `default`     |
| size      | Button size                                 | `small` \| `medium` \| `large` \| `full`                                        | `medium`      |
| disabled  | Do you want to disable it                   | boolean                                                                         | false         |
| startIcon | The content placed before the child element | React.ReactNode                                                                 | -             |
| endIcon   | The content placed after the child element  | React.ReactNode                                                                 | -             |
| openType  | WeChat Open Capability                      | string                                                                          | -             |
| onClick   | Callback when clicking a button             | (event: MouseEvent) => void                                                     | -             |

See [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes) for other attributes

## Style variables

| attribute                 | explain                         | Default value              | global variable                      |
| ------------------------- | ------------------------------- | -------------------------- | ------------------------------------ |
| --border-radius           | Rounded corner size             | 100px                      | --bui-button-border-radius           |
| --bg-color                | background color                | --bui-color-neutral-5      | --bui-button-default-bg-color        |
| --text-color              | Text color                      | --bui-color-fg-muted       | --bui-button-text-color              |
| --border-color            | Border color                    | --bui-color-border-default | --bui-button-border-color            |
| --font-weight             | Default font weight for buttons | --bui-font-weight-medium   | --bui-button-font-weight             |
| --height                  | Default height of button        | 27px                       | --bui-button-height                  |
| --font-size               | Default font size for buttons   | --bui-text-size-3          | --bui-button-font-size               |
| --icon-start-margin-right | Right margin of front label     | --bui-spacing-xs           | --bui-button-icon-start-margin-right |
| --icon-end-margin-left    | Left margin of front label      | --bui-spacing-xs           | --bui-button-icon-end-margin-left    |
| --disabled-opacity        | Disable transparency status     | 0.5                        | --bui-button-disabled-opacity        |
| --small-font-size         | Small button font size          | --bui-text-size-4          | --bui-button-small-font-size         |
| --small-padding           | Inner margin of small button    | 0 11px                     | --bui-button-small-padding           |
| --small-height            | Small button height             | 24px                       | --bui-button-small-height            |
| --medium-padding          | Inner margin of middle button   | 0 14px                     | --bui-button-medium-padding          |
| --large-font-size         | Large button font size          | --bui-text-size-2          | --bui-button-large-font-size         |
| --large-padding           | Large button margin             | 0 14px                     | --bui-button-large-padding           |
| --large-height            | Height of large button          | 33px                       | --bui-button-large-height            |
| --full-font-size          | Full screen button font size    | --bui-title-size-4         | --bui-button-full-font-size          |
| --full-height             | Full screen button height       | 42px                       | --bui-button-full-height             |
