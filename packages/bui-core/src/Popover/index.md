---
group: 数据展示
name: Popover 气泡卡片
---

# Popover 气泡卡片

click或hover触发弹出气泡式的卡片浮层，可以自定义事件

## 代码演示

### 基础用法

鼠标点击则显示提示，再点击消失，气泡浮层不承载复杂文本和操作。

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a title" content="This is a content">
      <span>click显示</span>
    </Popover>
  );
};
```

### open 外部控制

外部通过open设置气泡浮层显隐

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" open>
      <span>open控制显隐</span>
    </Popover>
  );
};
```

### defaultOpen 默认显示

可以设置defaultOpen为true默认显示气泡浮层

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" defaultOpen>
      <span>defaultOpen默认显示</span>
    </Popover>
  );
};
```

### showArrow 箭头展示

可以设置showArrow为false隐藏箭头

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" defaultOpen showArrow={false}>
      <span>defaultOpen默认显示</span>
    </Popover>
  );
};
```

### placement 气泡框位置

placement设置气泡浮层的位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom

```tsx
import { Popover, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  const packageButton = (inner) => {
    return (
      <Button style={{ borderRadius: 0, marginTop: '4px', width: '80px' }}>
        {inner}
      </Button>
    );
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          marginLeft: '100px',
          justifyContent: 'space-between',
        }}
      >
        <Popover trigger="hover" title="This is a popover" placement="topLeft">
          {packageButton(<span>topLeft</span>)}
        </Popover>
        <Popover trigger="hover" title="This is a popover" placement="top">
          {packageButton(<span>top</span>)}
        </Popover>
        <Popover trigger="hover" title="This is a popover" placement="topRight">
          {packageButton(<span>topRight</span>)}
        </Popover>
      </div>
      <div
        style={{
          marginTop: '20px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Popover trigger="hover" title="This is a popover" placement="leftTop">
          {packageButton(<span>leftTop</span>)}
        </Popover>
        <Popover trigger="hover" title="This is a popover" placement="left">
          {packageButton(<span>left</span>)}
        </Popover>
        <Popover
          trigger="hover"
          title="This is a popover"
          placement="leftBottom"
        >
          {packageButton(<span>leftBottom</span>)}
        </Popover>
      </div>
      <div
        style={{
          marginLeft: '300px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Popover trigger="hover" title="This is a popover" placement="rightTop">
          {packageButton(<span>rightTop</span>)}
        </Popover>
        <Popover trigger="hover" title="This is a popover" placement="right">
          {packageButton(<span>right</span>)}
        </Popover>
        <Popover
          trigger="hover"
          title="This is a popover"
          placement="rightBottom"
        >
          {packageButton(<span>rightBottom</span>)}
        </Popover>
      </div>
      <div
        style={{
          marginLeft: '100px',
          marginTop: '20px',
          display: 'flex',
          width: '300px',
          justifyContent: 'space-between',
        }}
      >
        <Popover
          trigger="hover"
          title="This is a popover"
          placement="bottomLeft"
        >
          {packageButton(<span>bottomLeft</span>)}
        </Popover>
        <Popover trigger="hover" title="This is a popover" placement="bottom">
          {packageButton(<span>bottom</span>)}
        </Popover>
        <Popover
          trigger="hover"
          title="This is a popover"
          placement="bottomRight"
        >
          {packageButton(<span>bottomRight</span>)}
        </Popover>
      </div>
    </div>
  );
};
```

### trigger 触发方式

显示气泡的触发方式 "click"或者"hover"，默认click

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" trigger="hover">
      <span>hover触发方式</span>
    </Popover>
  );
};
```

### API

| 属性         | 说明                     | 类型                                                                                                                                                             | 默认值  |
| ------------ | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| title        | 气泡浮层的标题浮层内容   | ReactNode                                                                                                                                                        | -       |
| content      | 气泡浮层的内容           | ReactNode                                                                                                                                                        | -       |
| children     | 气泡箭头指向目标         | ReactNode                                                                                                                                                        | -       |
| defaultOpen  | 默认是否显隐             | boolean                                                                                                                                                          | false   |
| open         | 用于手动控制气泡浮层显隐 | boolean                                                                                                                                                          | false   |
| showArrow    | 是否展示箭头             | boolean                                                                                                                                                          | true    |
| placement    | 气泡框位置               | string，枚举值是 `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` `bottom` | 'top'   |
| trigger      | 触发行为                 | string \| string[]，枚举值是 'click' \| 'hover'                                                                                                                  | 'click' |
| portalProps  | 内部Portal组件的属性     | PortalCoreProps                                                                                                                                                  | -       |
| onOpenChange | 气泡浮层显隐的回调方法   | (e: React.MouseEvent<HTMLDivElement\>,data: {open: boolean}) => void                                                                                             | -       |
