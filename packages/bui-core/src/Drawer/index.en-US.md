---
group: Feedback
name: Drawer
---

# Drawer

A floating panel that slides out from the edge of the screen.

## Basic Usage

Use `open` and `onClose` to control whether the drawer is displayed.

```tsx
import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Basic Usage
      </Button>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        contentProps={{ style: { lineHeight: '20vh', textAlign: 'center' } }}
      >
        Drawer Content
      </Drawer>
    </Stack>
  );
};
```

## Appearance Direction

By default, it appears from the bottom. You can control the appearance direction by setting `anchor`. The default is from the bottom.

```tsx
import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [openDirection, setOpenDirection] = useState('');
  return (
    <>
      <Stack direction="row" spacing="8px">
        <Button onClick={() => setOpenDirection('bottom')}>Bottom Pop</Button>
        <Button onClick={() => setOpenDirection('top')}>Top Pop</Button>
        <Button onClick={() => setOpenDirection('left')}>Left Pop</Button>
        <Button onClick={() => setOpenDirection('right')}>Right Pop</Button>
      </Stack>
      <Drawer
        anchor="bottom"
        open={openDirection === 'bottom'}
        onClose={() => setOpenDirection('')}
        contentProps={{ style: { lineHeight: '20vh', textAlign: 'center' } }}
      >
        Bottom Pop
      </Drawer>
      <Drawer
        anchor="top"
        open={openDirection === 'top'}
        onClose={() => setOpenDirection('')}
      >
        <div style={{ lineHeight: '20vh', textAlign: 'center' }}>Top Pop</div>
      </Drawer>
      <Drawer
        anchor="left"
        open={openDirection === 'left'}
        onClose={() => setOpenDirection('')}
        contentProps={{
          style: { width: '50vw', textAlign: 'center', paddingTop: '50vh' },
        }}
      >
        Left Pop
      </Drawer>
      <Drawer
        anchor="right"
        open={openDirection === 'right'}
        onClose={() => setOpenDirection('')}
      >
        <Stack style={{ width: '50vw', height: '100%' }}>Right</Stack>
      </Drawer>
    </>
  );
};
```

## Dynamic Effect Delay

```tsx
import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';
export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button onClick={() => setOpen(true)}>Dynamic Effect Delay</Button>
      <Drawer
        transitionDuration={1000}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={{ lineHeight: '20vh', textAlign: 'center' }}>
          Dynamic Effect Delay
        </div>
      </Drawer>
    </Stack>
  );
};
```

## Specify Container

By default, the Drawer is rendered to the root node of the page, which is `document.body` in H5, and `page node` in Mini Programs.

```tsx
import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack id="draw-container">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Specify Container
      </Button>
      <Drawer
        container={document.getElementById('draw-container')}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div
          className="content"
          style={{ lineHeight: '20vh', textAlign: 'center' }}
        >
          Floating layer DOM rendered in `draw-container` element
        </div>
      </Drawer>
    </Stack>
  );
};
```

## API

| Property           | Description                              | Type                                                         | Default        |
| ------------------ | ---------------------------------------- | ------------------------------------------------------------ | -------------- |
| anchor             | Direction where Drawer appears           | `left` \| `top` \| `right` \| `bottom`                       | `text`         |
| open               | Whether to display                       | boolean                                                      | false          |
| hideBackdrop       | Whether to hide backdrop                 | boolean                                                      | false          |
| container          | Element node to mount Drawer             | ModalProps['container']                                      | Page root node |
| SlideProps         | Props for Slide animation                | Partial<SlideProps\>                                         | -              |
| transitionDuration | Duration of animation                    | number \| { appear?: number, enter?: number, exit?: number } | -              |
| onClose            | Callback for closing drawer              | ModalProps['onClose']                                        | -              |
| disablePortal      | Disable Portal capability                | boolean                                                      | false          |
| contentProps       | Props for content element node of drawer | React.HTMLAttributes<HTMLDivElement\>                        | -              |

`Drawer` inherits from `Modal`. See [Modal API](/cores/modal?#api) for other properties.
