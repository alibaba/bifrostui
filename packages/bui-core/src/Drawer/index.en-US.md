---
group: Feedback
name: Drawer
---

# Drawer

A floating panel that slides out from the edge of the screen.

## Code Demos

### Basic Usage

Control the visibility of the drawer using `open` and `onClose`.

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

### Direction of Appearance

By default, it appears from the bottom. You can control the appearance direction by setting the `anchor` property.

```tsx
import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [openDirection, setOpenDirection] = useState('');
  return (
    <>
      <Stack direction="row" spacing="8px">
        <Button onClick={() => setOpenDirection('bottom')}>Bottom</Button>
        <Button onClick={() => setOpenDirection('top')}>Top</Button>
        <Button onClick={() => setOpenDirection('left')}>Left</Button>
        <Button onClick={() => setOpenDirection('right')}>Right</Button>
      </Stack>
      <Drawer
        anchor="bottom"
        open={openDirection === 'bottom'}
        onClose={() => setOpenDirection('')}
        contentProps={{ style: { lineHeight: '20vh', textAlign: 'center' } }}
      >
        Bottom
      </Drawer>
      <Drawer
        anchor="top"
        open={openDirection === 'top'}
        onClose={() => setOpenDirection('')}
      >
        <div style={{ lineHeight: '20vh', textAlign: 'center' }}>Top</div>
      </Drawer>
      <Drawer
        anchor="left"
        open={openDirection === 'left'}
        onClose={() => setOpenDirection('')}
        contentProps={{
          style: { width: '50vw', textAlign: 'center', paddingTop: '50vh' },
        }}
      >
        Left
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

### Transition Delay

```tsx
import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';
export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button onClick={() => setOpen(true)}>Transition Delay</Button>
      <Drawer
        transitionDuration={1000}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={{ lineHeight: '20vh', textAlign: 'center' }}>
          Transition Delay
        </div>
      </Drawer>
    </Stack>
  );
};
```

### Specified Container

By default, the Drawer is rendered in the root node of the page (`document.body` for H5, `page node` for mini-programs).

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
        Specified Container
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
          Floating layer DOM is rendered within the `draw-container` element.
        </div>
      </Drawer>
    </Stack>
  );
};
```

### API

| Property           | Description                  | Type                                                         | Default Value |
| ------------------ | ---------------------------- | ------------------------------------------------------------ | ------------- |
| anchor             | Position of the Drawer       | `left` \| `top` \| `right` \| `bottom`                       | `bottom`      |
| open               | Whether to display           | boolean                                                      | false         |
| hideBackdrop       | Whether to hide the backdrop | boolean                                                      | false         |
| container          | Element node for mounting    | ModalProps['container']                                      | Root Node     |
| SlideProps         | Props for Slide animation    | Partial<SlideProps>                                          | -             |
| transitionDuration | Duration of the animation    | number \| { appear?: number, enter?: number, exit?: number } | -             |
| onClose            | Callback on closing          | ModalProps['onClose']                                        | -             |
| disablePortal      | Disable Portal functionality | boolean                                                      | false         |
| contentProps       | Props for the content node   | React.HTMLAttributes<HTMLDivElement>                         | -             |

The `Drawer` inherits other properties from `Modal`. See [Modal API](/cores/modal?#API) for more details.
