---
group: Basic input
name: Rating
---

# Rating

The rating component provides a display of evaluations. It also allows users to quickly rate operations.

## Code demonstration

### Basic usage

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

### Controlled use

Adopt`value`and`onChange`custom rating selection value

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

### Half Selected

Adopt`allowHalf`appoint`Rating`support semi selected state.

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

### read-only

Adopt`readOnly`appoint`Rating`for read-only.

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

### size

Adopt`size`appoint`Rating`the size

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

### quantity

Adopt`count`appoint`Rating`the number of display icons

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

### Disable

Adopt`disabled`appoint`Rating`in disabled state

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

### Customize icons

Adopting `icon`and`emptyIcon`, stars can be replaced with other characters, such as emojis, letters, numbers, fonts, icons, and even chinese,`icon`selected icon,`emptyIcon` unchecked icon

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

| attribute    | explain                                      | type                                                                          | Default value                           |
| ------------ | -------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------- |
| count        | Total number of ratings                      | number                                                                        | 5                                       |
| value        | Current rating                               | number                                                                        | -                                       |
| defaultValue | Default rating for uncontrolled use          | number                                                                        | -                                       |
| size         | size                                         | `xsmall`\| `small` \| `medium` \| `large`                                     | `medium`                                |
| disabled     | Do you want to disable it                    | boolean                                                                       | false                                   |
| readOnly     | Read only or not                             | boolean                                                                       | false                                   |
| allowHalf    | Is half selection allowed                    | boolean                                                                       | false                                   |
| icon         | Unchecked icon                               | React.ReactNode                                                               | <StarFilledIcon htmlColor="#ced1d6" \/> |
| checkedIcon  | Selected icon                                | React.ReactNode                                                               | <StarFilledIcon color="warning" \/>     |
| disableClear | Do you prohibit clearing after clicking      | boolean                                                                       | false                                   |
| name         | Single choice input element's name attribute | string                                                                        | -                                       |
| onChange     | Select the callback for rating selection     | (ev?: React.ChangeEvent<HTMLInputElement\>\,data?: { value: number }) => void | -                                       |

## Style variables

| attribute             | explain                     | Default value | global variable                  |
| --------------------- | --------------------------- | ------------- | -------------------------------- |
| --small-margin-right  | Small rating right margin   | 0.5px         | --bui-rating-small-margin-right  |
| --medium-margin-right | Medium rating, right margin | 1px           | --bui-rating-medium-margin-right |
| --large-margin-right  | Large rating right margin   | 2px           | --bui-rating-large-margin-right  |
| --large-font-size     | Large rating font size      | 22px          | --bui-rating-large-font-size     |
