---
group:
  title: Basic input
  order: -1
order: -1
nav: assembly
name: Button button
---

# Button button

The button is used to trigger an operation, make a selection, such as submitting a form, opening a dialog box, canceling the operation, or performing a deletion operation.

## Code demonstration

### Basic button

The button supports four display forms: text button, stroke button, fill button, and light button. The default is the stroke button.

Text button: Use text directly as a button. It is the button with the weakest visual appeal, usually appearing next to table operation bars, titles, and fields.

Fill button: generally used for the main button, it is the highest priority operation that users need to pay attention to on the entire page, guiding users to pay attention to and operate.

Stroke button: a common form of white background with text, which is visually less emphasized than the fill button and is usually used in combination with the fill button

Light button: The text in light state is the background color of the button, and the background is the corresponding light color.

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
      <Button color="primary" variant="subtle">
        浅亮按钮
      </Button>
    </Stack>
  );
};
```

### Button size

The buttons come in three sizes: large, medium, and small.

Set the 'size' to 'large small full' and set the button size to 'large', 'small', and 'full' respectively. If 'size' is not set, the size will be medium.

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="8px">
      <Stack direction="row" spacing="8px" style={{ width: '350px' }}>
        <Button size="small">小号按钮</Button>
        <Button size="medium">中号按钮</Button>
        <Button size="large">大号按钮</Button>
      </Stack>
      <Button size="full" style={{ width: '350px' }}>
        通栏按钮
      </Button>
      <Stack direction="row" spacing="8px" style={{ width: '350px' }}>
        <Button size="small" variant="contained" color="primary">
          小号按钮
        </Button>
        <Button size="medium" variant="contained" color="primary">
          中号按钮
        </Button>
        <Button size="large" variant="contained" color="primary">
          大号按钮
        </Button>
      </Stack>
      <Button
        size="full"
        variant="contained"
        color="primary"
        style={{ width: '350px' }}
      >
        通栏按钮
      </Button>
    </Stack>
  );
};
```

### Button color

The button supports' primary ' Definition of themes such as success, information, warning, danger, and VIP. If color is not set, it defaults to 'default'

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

Disable the button through the 'disabled' attribute, and the button cannot be clicked in the disabled state.

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

Because users are more sensitive to icons compared to plain text, sometimes you may want to set icons for certain buttons to enhance the user experience of the application. For example, if you have a date button, you can use a date icon to mark it StartIcon 'is located in front of the child element EndIcon 'is located after the child element.

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

| attribute | explain                                     | type                                                                      | Default value |
| --------- | ------------------------------------------- | ------------------------------------------------------------------------- | ------------- |
| variant   | Button type                                 | `outlined` \|`text` \|`contained` \|`light`                               | `outlined`    |
| color     | Button color                                | `primary` \|`info` \|`success` \|`warning` \|`danger` \|`vip` \|`default` | `default`     |
| size      | Button size                                 | `small` \|`medium` \|`large` \|`full`                                     | `medium`      |
| disabled  | Do you want to disable it                   | boolean                                                                   | false         |
| startIcon | The content placed before the child element | React.ReactNode                                                           | -             |
| endIcon   | The content placed after the child element  | React.ReactNode                                                           | -             |
| openType  | WeChat Open Capability                      | string                                                                    | -             |
| onClick   | Callback when clicking a button             | (event: MouseEvent) => void                                               | -             |

For other properties see [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)
