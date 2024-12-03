---
group: 反馈
name: Drawer 抽屉
---

# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 代码演示

### 基本使用

通过 `open` 以及 `onClose` 控制抽屉是否展示

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

### 出现方向

默认从底部出现、支持通过设置 `anchor` 控制出现方向，默认是从底部出现

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

### 动态效果延时

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

### 指定容器

默认将 Drawer 渲染到页面的根节点中，H5是`document.body`, 小程序是`page节点`。

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

| 属性               | 说明                     | 类型                                                         | 默认值     |
| ------------------ | ------------------------ | ------------------------------------------------------------ | ---------- |
| anchor             | Drawer 出现的位置        | `left` \| `top` \| `right` \| `bottom`                       | `text`     |
| open               | 是否显示                 | boolean                                                      | false      |
| hideBackdrop       | 是否隐藏遮罩层           | boolean                                                      | false      |
| container          | 抽屉挂载的元素节点       | ModalProps['container']                                      | 页面根节点 |
| SlideProps         | Slide 动画的 props       | Partial<SlideProps\>                                         | -          |
| transitionDuration | 动画执行时间             | number \| { appear?: number, enter?: number, exit?: number } | -          |
| onClose            | 关闭抽屉回调             | ModalProps['onClose']                                        | -          |
| disablePortal      | 禁止 Portal能力          | boolean                                                      | false      |
| contentProps       | 抽屉内容元素节点的 props | React.HTMLAttributes<HTMLDivElement\>                        | -          |

`Drawer` 继承自 `Modal` 其他属性见 [Modal API](/cores/modal?#API)
