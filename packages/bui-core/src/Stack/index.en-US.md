---
group: layout
name: Stack
---

# Stack

Stack is a container component used to control the vertical or horizontal arrangement of elements.

## Code demonstration

### Basic usage

You can do it through`direction` use sex to control the vertical/horizontal distribution of child nodes.
You can also use`alignItem`、`justifyContent` control the alignment of child nodes on the main/cross axis.
In addition, you can also use`spacing` the spacing between child nodes.
The example document is as follows:

##### Interactive experience

<code src="./demo/StackDemo.tsx"> </code >

### Dividing line

Use`divider` sex, you can insert an element between each sub element.

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
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Stack>
    </Stack>
  );
};
```

### API

##### StackProps

| attribute      | explain                                                              | type                                                                                        | Default value |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------- |
| direction      | Set the vertical/horizontal distribution of child nodes              | `row` ｜ `row-reverse` ｜ `column` ｜ `column-reverse`                                      | `column`      |
| alignItems     | Cross axis alignment method                                          | `flex-start` ｜ `center`｜ `flex-end`｜ `stretch` ｜`baseline`                              | `center`      |
| justifyContent | Alignment method on the spindle                                      | `flex-start` ｜ `center` ｜ `flex-end` ｜ `space-between` ｜`space-around` ｜`space-evenly` | `center`      |
| flexWrap       | Exceeding line break                                                 | `wrap` ｜ `nowrap`｜ `wrap-reverse`                                                         | `nowrap`      |
| spacing        | Set the spacing between child nodes                                  | string                                                                                      | -             |
| divider        | Split line, allowing insertion of an element between each child node | ReactNode ｜ boolean                                                                        | false         |
