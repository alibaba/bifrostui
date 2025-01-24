---
group: Basic Input
name: Rating
---

# Rating

The rating component provides a way to display ratings and allows users to quickly rate items.

## Code Examples

### Basic Usage

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React, { useRef } from 'react';
export default () => {
  const ref = useRef(null);
  return (
    <Stack spacing="8px">
      <Rating />
      <Rating defaultValue={3} ref={ref} />
    </Stack>
  );
};
```

### Controlled Usage

Customize the selected rating value using `value` and `onChange`.

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState(3);
  return (
    <Stack>
      <Rating
        value={value}
        onChange={(_, data) => {
          setValue(data.value);
        }}
      />
    </Stack>
  );
};
```

### Half Selection

Enable half selection by setting `allowHalf`.

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating allowHalf />
      <Rating defaultValue={3} allowHalf />
    </Stack>
  );
};
```

### Read-Only

Set `readOnly` to make the `Rating` read-only.

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating readOnly />
      <Rating defaultValue={3} readOnly />
    </Stack>
  );
};
```

### Size

Adjust the size of the `Rating` using the `size` prop.

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating size="xsmall" defaultValue={3} />
      <Rating size="small" defaultValue={3} />
      <Rating size="medium" defaultValue={3} />
      <Rating size="large" defaultValue={3} />
    </Stack>
  );
};
```

### Count

Specify the number of icons displayed in the `Rating` with `count`.

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack>
      <Rating defaultValue={3} count={8} />
    </Stack>
  );
};
```

### Disabled

Set `disabled` to disable the `Rating`.

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating defaultValue={3} disabled />
    </Stack>
  );
};
```

### Custom Icons

Use `icon` and `emptyIcon` to replace stars with other characters like emojis, letters, numbers, font icons, or even Chinese characters. `icon` is for unselected state, `checkedIcon` is for selected state.

```tsx
import { Rating, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack spacing="8px">
      <Rating checkedIcon={<HeartFilledIcon color="info" />} defaultValue={3} />
      <Rating checkedIcon="A" icon="B" defaultValue={3} />
      <Rating
        checkedIcon={<HeartOutlinedIcon color="success" />}
        icon={<HeartFilledIcon color="primary" />}
        defaultValue={3}
      />
    </Stack>
  );
};
```

## API

| Property     | Description                       | Type                                                                          | Default Value                          |
| ------------ | --------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------- |
| count        | Total number of ratings           | number                                                                        | 5                                      |
| value        | Current rating                    | number                                                                        | -                                      |
| defaultValue | Default rating (for uncontrolled) | number                                                                        | -                                      |
| size         | Size                              | `xsmall`\| `small` \| `medium` \| `large`                                     | `medium`                               |
| disabled     | Whether it is disabled            | boolean                                                                       | false                                  |
| readOnly     | Whether it is read-only           | boolean                                                                       | false                                  |
| allowHalf    | Allow half selection              | boolean                                                                       | false                                  |
| icon         | Unselected icon                   | React.ReactNode                                                               | <StarFilledIcon htmlColor="#ced1d6" /> |
| checkedIcon  | Selected icon                     | React.ReactNode                                                               | <StarFilledIcon color="warning" />     |
| disableClear | Prevent clearing after clicking   | boolean                                                                       | false                                  |
| name         | Name attribute for input element  | string                                                                        | -                                      |
| onChange     | Callback when rating is changed   | (ev?: React.ChangeEvent<HTMLInputElement\>\,data?: { value: number }) => void | -                                      |

## Style Variables

| Property              | Description                  | Default Value | Global Variable                  |
| --------------------- | ---------------------------- | ------------- | -------------------------------- |
| --small-margin-right  | Right margin for small size  | 0.5px         | --bui-rating-small-margin-right  |
| --medium-margin-right | Right margin for medium size | 1px           | --bui-rating-medium-margin-right |
| --large-margin-right  | Right margin for large size  | 2px           | --bui-rating-large-margin-right  |
| --large-font-size     | Font size for large size     | 22px          | --bui-rating-large-font-size     |
