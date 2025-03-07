---
group: Layout
name: Stack Layout Component
---

# Stack Layout Component

Stack is a container component used to control the vertical or horizontal arrangement of elements.

## Code Examples

### Basic Usage

You can control the vertical/horizontal distribution of child nodes using the `direction` property. Additionally, you can use `alignItems` and `justifyContent` to control the alignment of child nodes on the main axis/cross axis. Furthermore, you can control the spacing between child nodes using `spacing`.
The example documentation is as follows:

##### Interactive Experience

<code src="./demo/StackDemo.tsx"> </code >

### Divider

Using the `divider` property, you can insert an element between each child element.

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

### API

##### StackProps

| Property       | Description                                                  | Type                                                                                        | Default Value |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------- |
| direction      | Sets the vertical/horizontal distribution of child nodes     | `row` ｜ `row-reverse` ｜ `column` ｜ `column-reverse`                                      | `column`      |
| alignItems     | Alignment on the cross axis                                  | `flex-start` ｜ `center`｜ `flex-end`｜ `stretch` ｜`baseline`                              | `center`      |
| justifyContent | Alignment on the main axis                                   | `flex-start` ｜ `center` ｜ `flex-end` ｜ `space-between` ｜`space-around` ｜`space-evenly` | `center`      |
| flexWrap       | Wrapping when overflow                                       | `wrap` ｜ `nowrap`｜ `wrap-reverse`                                                         | `nowrap`      |
| spacing        | Sets the spacing between child nodes                         | string                                                                                      | -             |
| divider        | Divider, allows inserting an element between each child node | ReactNode ｜ boolean                                                                        | false         |
