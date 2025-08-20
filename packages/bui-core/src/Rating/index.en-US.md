---
group: Basic Input
name: Rating
---

# Rating

The Rating component provides a way to display and allow users to quickly rate items.

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

Customize the selected value using `value` and `onChange`.

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

Enable half selection by setting the `allowHalf` prop.

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

Set the `Rating` component to read-only by using the `readOnly` prop.

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

Specify the size of the `Rating` component with the `size` prop.

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

Set the number of icons displayed in the `Rating` component using the `count` prop.

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

Disable the `Rating` component by setting the `disabled` prop.

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

Replace the default star icons with other characters, such as emojis, letters, numbers, font icons, or even Chinese characters, using the `icon` and `emptyIcon` props. `icon` is for the selected state, and `emptyIcon` is for the unselected state.

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

| Property     | Description                          | Type                                                                          | Default Value                           |
| ------------ | ------------------------------------ | ----------------------------------------------------------------------------- | --------------------------------------- |
| count        | Total number of ratings              | number                                                                        | 5                                       |
| value        | Current rating                       | number                                                                        | -                                       |
| defaultValue | Default rating (uncontrolled)        | number                                                                        | -                                       |
| size         | Size                                 | `xsmall`\| `small` \| `medium` \| `large`                                     | `medium`                                |
| disabled     | Whether the component is disabled    | boolean                                                                       | false                                   |
| readOnly     | Whether the component is read-only   | boolean                                                                       | false                                   |
| allowHalf    | Whether to allow half selection      | boolean                                                                       | false                                   |
| icon         | Icon for the unselected state        | React.ReactNode                                                               | <StarFilledIcon htmlColor="#ced1d6" \/> |
| checkedIcon  | Icon for the selected state          | React.ReactNode                                                               | <StarFilledIcon color="warning" \/>     |
| disableClear | Whether to prevent clearing on click | boolean                                                                       | false                                   |
| name         | Name attribute for input element     | string                                                                        | -                                       |
| onChange     | Callback for rating change           | (ev?: React.ChangeEvent<HTMLInputElement\>\,data?: { value: number }) => void | -                                       |

## Style Variables

| Property              | Description             | Default Value | Global Variable                  |
| --------------------- | ----------------------- | ------------- | -------------------------------- |
| --small-margin-right  | Right margin for small  | 0.5px         | --bui-rating-small-margin        |
| --medium-margin-right | Right margin for medium | 1px           | --bui-rating-medium-margin-right |
| --large-margin-right  | Right margin for large  | 2px           | --bui-rating-large-margin        |
| --large-font-size     | Font size for large     | 22px          | --bui-rating-large-font-size     |
