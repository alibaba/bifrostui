---
group: Layout
name: Stack Layout Component
---

# Stack Layout Component

Stack is a container component used for controlling the vertical or horizontal arrangement of elements.

## Basic Usage

The `direction` attribute allows you to control the vertical/horizontal distribution of child nodes. You can also control the alignment of child nodes along the main or cross axis using `alignItems` and `justifyContent`. Additionally, you can adjust the spacing between child nodes with the `spacing` attribute. Below is a sample documentation:

### Interactive Experience

<code src="./demo/StackDemo.tsx"></code >

## Divider

With the `divider` attribute, you can insert an element between each child.

```tsx
import { Button, Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Stack
        divider={<Divider direction="horizontal" />}
        spacing="10px"
        style={{ width: '100px' }}
      >
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Stack>
    </Stack>
  );
};
```

## API

### StackProps

| Property       | Description                                              | Type                                                                                        | Default  |
| -------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------- |
| direction      | Sets the vertical/horizontal distribution of child nodes | `row` ｜ `row-reverse` ｜ `column` ｜ `column-reverse`                                      | `column` |
| alignItems     | Alignment along the cross axis                           | `flex-start` ｜ `center`｜ `flex-end`｜ `stretch` ｜`baseline`                              | `center` |
| justifyContent | Alignment along the main axis                            | `flex-start` ｜ `center` ｜ `flex-end` ｜ `space-between` ｜`space-around` ｜`space-evenly` | `center` |
| flexWrap       | Wrap when overflowing                                    | `wrap` ｜ `nowrap`｜ `wrap-reverse`                                                         | `nowrap` |
| spacing        | Sets the spacing between child nodes                     | string                                                                                      | -        |
| divider        | Divider, allows inserting an element between child nodes | ReactNode ｜ boolean                                                                        | false    |

```

```
