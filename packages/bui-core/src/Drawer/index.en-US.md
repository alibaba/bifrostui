---
group: feedback
name: Drawer drawer
---

# Drawer drawer

A floating panel that slides out from the edge of the screen.

## Code demonstration

### Basic usage

Control whether the drawer is displayed through 'open' and 'onClose'

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
        基础用法
      </Button>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        contentProps={{ style: { lineHeight: '20vh', textAlign: 'center' } }}
      >
        抽屉正文
      </Drawer>
    </Stack>
  );
};
```

### Direction of appearance

By default, it appears from the bottom and supports controlling the appearance direction through setting 'anchor'. It appears from the bottom by default

```tsx
import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [openDirection, setOpenDirection] = useState('');
  return (
    <>
      <Stack direction="row" spacing="8px">
        <Button onClick={() => setOpenDirection('bottom')}>底部弹出</Button>
        <Button onClick={() => setOpenDirection('top')}>顶部弹出</Button>
        <Button onClick={() => setOpenDirection('left')}>左侧弹出</Button>
        <Button onClick={() => setOpenDirection('right')}>右侧弹出</Button>
      </Stack>
      <Drawer
        anchor="bottom"
        open={openDirection === 'bottom'}
        onClose={() => setOpenDirection('')}
        contentProps={{ style: { lineHeight: '20vh', textAlign: 'center' } }}
      >
        底部弹出
      </Drawer>
      <Drawer
        anchor="top"
        open={openDirection === 'top'}
        onClose={() => setOpenDirection('')}
      >
        <div style={{ lineHeight: '20vh', textAlign: 'center' }}>顶部弹出</div>
      </Drawer>
      <Drawer
        anchor="left"
        open={openDirection === 'left'}
        onClose={() => setOpenDirection('')}
        contentProps={{
          style: { width: '50vw', textAlign: 'center', paddingTop: '50vh' },
        }}
      >
        左侧弹出
      </Drawer>
      <Drawer
        anchor="right"
        open={openDirection === 'right'}
        onClose={() => setOpenDirection('')}
      >
        <Stack style={{ width: '50vw', height: '100%' }}>right</Stack>
      </Drawer>
    </>
  );
};
```

### Dynamic effect delay

```tsx
import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';
export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button onClick={() => setOpen(true)}>动态效果延时</Button>
      <Drawer
        transitionDuration={1000}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={{ lineHeight: '20vh', textAlign: 'center' }}>
          动态效果延时
        </div>
      </Drawer>
    </Stack>
  );
};
```

### Specify container

By default, Drawer is rendered to the root node of the page, H5 is' document. body ', and the mini program is the' page node '.

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
        指定容器
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
          浮层dom在`draw-container`element中渲染
        </div>
      </Drawer>
    </Stack>
  );
};
```

### API

| attribute          | explain                               | type                                                        | Default value   |
| ------------------ | ------------------------------------- | ----------------------------------------------------------- | --------------- |
| anchor             | The position where the Drawer appears | `left` \|`top` \|`right` \|`bottom`                         | `text`          |
| open               | Is it displayed                       | boolean                                                     | false           |
| hideBackdrop       | Do you want to hide the mask layer    | boolean                                                     | false           |
| container          | Element nodes mounted on drawers      | ModalProps['container']                                     | Pages and Nodes |
| SlideProps         | Props for Slide Animation             | Partial<SlideProps\>                                        | -               |
| transitionDuration | Animation execution time              | number \|{ appear?: number, enter?: number, exit?: number } | -               |
| onClose            | Close drawer callback                 | ModalProps['onClose']                                       | -               |
| disablePortal      | Prohibit Portal Capability            | boolean                                                     | false           |
| contentProps       | Props of drawer content element nodes | React.HTMLAttributes<HTMLDivElement\>                       | -               |

Drawer inherits from Modal. Other properties can be found in the Modal API (/cores/modal? # API)
