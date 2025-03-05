---
group: Feedback
name: Drawer
---

# Drawer

A floating panel that slides out from the edge of the screen.

## Code Examples

### Basic Usage

Control whether the drawer is displayed using `open` and `onClose`.

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

### Appearance Direction

By default, it appears from the bottom. You can control the appearance direction by setting the `anchor` prop, with the default being from the bottom.

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

### Dynamic Effect Delay

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

### Specifying the Container

By default, the Drawer is rendered to the root node of the page, which is `document.body` for H5 and the `page` node for mini-programs.

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
        Specifying the Container
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
          The overlay DOM is rendered within the `draw-container` element.
        </div>
      </Drawer>
    </Stack>
  );
};
```

### API

| Property           | Description                            | Type                                                         | Default   |
| ------------------ | -------------------------------------- | ------------------------------------------------------------ | --------- |
| anchor             | Position where the Drawer appears      | `left` \| `top` \| `right` \| `bottom`                       | `bottom`  |
| open               | Whether to display the drawer          | boolean                                                      | false     |
| hideBackdrop       | Whether to hide the backdrop           | boolean                                                      | false     |
| container          | Element to which the drawer is mounted | ModalProps['container']                                      | Root node |
| SlideProps         | Props for the Slide animation          | Partial<SlideProps\>                                         | -         |
| transitionDuration | Duration of the animation              | number \| { appear?: number, enter?: number, exit?: number } | -         |
| onClose            | Callback when the drawer is closed     | ModalProps['onClose']                                        | -         |
| disablePortal      | Disable the portal capability          | boolean                                                      | false     |
| contentProps       | Props for the drawer content element   | React.HTMLAttributes<HTMLDivElement\>                        | -         |

`Drawer` inherits from `Modal`. For other properties, see [Modal API](/cores/modal?#API).
