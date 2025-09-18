---

group: Basic Input
name: Rating

# Rating

The rating component provides a display for evaluations and allows users to perform quick rating actions.

## Basic Usage

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

## Controlled Usage

Customize the rating selected value using `value` and `onChange`.

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

## Half Selection

Specify `Rating` to support half selection using `allowHalf`.

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating allowHalf />
      <Rating defaultValue={3.5} allowHalf />
    </Stack>
  );
};
```

## Read Only

Specify `Rating` as read-only using `readOnly`.

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

## Size

Specify the size of `Rating` using `size`.

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

## Count

Specify the number of display icons for `Rating` using `count`.

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

## Disabled

Specify `Rating` as disabled using `disabled`.

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

## Custom Icons

Replace stars with other characters using `icon` and `emptyIcon`, such as emojis, letters, numbers, font icons, or even Chinese characters. `icon` is for selected state, `emptyIcon` is for unselected state.

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

| Property     | Description                               | Type                                                                          | Default                                 |
| ------------ | ----------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------- |
| count        | Total number of ratings                   | number                                                                        | 5                                       |
| value        | Current rating                            | number                                                                        | -                                       |
| defaultValue | Default rating for uncontrolled state     | number                                                                        | -                                       |
| size         | Size                                      | `xsmall`\| `small` \| `medium` \| `large`                                     | `medium`                                |
| disabled     | Whether to disable                        | boolean                                                                       | false                                   |
| readOnly     | Whether to be read-only                   | boolean                                                                       | false                                   |
| allowHalf    | Whether to allow half selection           | boolean                                                                       | false                                   |
| icon         | Icon for unselected state                 | React.ReactNode                                                               | <StarFilledIcon htmlColor="#ced1d6" \/> |
| checkedIcon  | Icon for selected state                   | React.ReactNode                                                               | <StarFilledIcon color="warning" \/>     |
| disableClear | Whether to prevent clearing on click      | boolean                                                                       | false                                   |
| name         | Name attribute of the radio input element | string                                                                        | -                                       |
| onChange     | Callback for rating selection             | (ev?: React.ChangeEvent<HTMLInputElement\>\,data?: { value: number }) => void | -                                       |

## Style Variables

| Property                      | Description          | Default                   |
| ----------------------------- | -------------------- | ------------------------- |
| --bui-rating-xsmall-font-size | Font size for xsmall | `var(--bui-text-size-5)`  |
| --bui-rating-xsmall-margin    | Margin for xsmall    | `0`                       |
| --bui-rating-small-font-size  | Font size for small  | `var(--bui-text-size-1)`  |
| --bui-rating-small-margin     | Margin for small     | `0 0.5px 0 0`             |
| --bui-rating-font-size        | Font size for medium | `var(--bui-title-size-3)` |
| --bui-rating-margin           | Margin for medium    | `0 1px 0 0`               |
| --bui-rating-large-font-size  | Font size for large  | `22px`                    |
| --bui-rating-large-margin     | Margin for large     | `0 2px 0 0`               |
