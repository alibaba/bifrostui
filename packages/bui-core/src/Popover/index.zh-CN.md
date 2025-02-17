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
    <Popover
      title="This is a title"
      content="This is a content"
      placement="topLeft"
    >
      <span>click显示</span>
    </Popover>
  );
};
```

### open 外部控制

外部通过open设置气泡浮层显隐

```tsx
import { Popover } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Popover title="This is a popover" open={open}>
      <span onClick={() => setOpen(!open)}>open控制显隐</span>
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

### offsetSpacing 浮层和目标元素间隔

可以设置offsetSpacing来控制和目标元素的距离

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" offsetSpacing={20} defaultOpen>
      <span>offsetSpacing控制目标间隔（设置20 以便观察）</span>
    </Popover>
  );
};
```

### hideArrow 箭头展示

可以设置 `hideArrow` 为 true 隐藏箭头

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" defaultOpen hideArrow>
      <span>defaultOpen默认显示</span>
    </Popover>
  );
};
```

### placement 气泡框位置

`placement` 设置气泡浮层的位置。可选值有： `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`

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
        <Popover trigger={['hover', 'click']} title="This is a popover" placement="topLeft">
          {packageButton(<span>topLeft</span>)}
        </Popover>
        <Popover trigger={['hover', 'click']} title="This is a popover" placement="top">
          {packageButton(<span>top</span>)}
        </Popover>
        <Popover trigger={['hover', 'click']} title="This is a popover" placement="topRight">
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
        <Popover trigger={['hover', 'click']} title="This is a popover" placement="leftTop">
          {packageButton(<span>leftTop</span>)}
        </Popover>
        <Popover trigger={['hover', 'click']} title="This is a popover" placement="left">
          {packageButton(<span>left</span>)}
        </Popover>
        <Popover
          trigger={['hover', 'click']}
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
        <Popover trigger={['hover', 'click']} title="This is a popover" placement="rightTop">
          {packageButton(<span>rightTop</span>)}
        </Popover>
        <Popover trigger={['hover', 'click']} title="This is a popover" placement="right">
          {packageButton(<span>right</span>)}
        </Popover>
        <Popover
          trigger={['hover', 'click']}
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
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="bottomLeft"
        >
          {packageButton(<span>bottomLeft</span>)}
        </Popover>
        <Popover trigger={['hover', 'click']} title="This is a popover" placement="bottom">
          {packageButton(<span>bottom</span>)}
        </Popover>
        <Popover
          trigger={['hover', 'click']}
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
    <Popover title="This is a popover" trigger={['hover', 'click']}>
      <span>hover触发方式</span>
    </Popover>
  );
};
```

### onOpenChange 气泡浮层显隐的回调方法

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  const onOpenChange = (event, data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Popover
      title="This is a popover"
      trigger={['hover', 'click']}
      onOpenChange={onOpenChange}
    >
      <span>onOpenChange 回调方法</span>
    </Popover>
  );
};
```

### API

| 属性          | 说明                     | 类型                                                                                                                                                             | 默认值  |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| title         | 气泡浮层的标题浮层内容   | ReactNode                                                                                                                                                        | -       |
| content       | 气泡浮层的内容           | ReactNode                                                                                                                                                        | -       |
| defaultOpen   | 默认是否显隐             | boolean                                                                                                                                                          | false   |
| open          | 用于手动控制气泡浮层显隐 | boolean                                                                                                                                                          | -       |
| hideArrow     | 是否展示箭头             | boolean                                                                                                                                                          | false   |
| offsetSpacing | 浮层与目标元素的偏移量   | number                                                                                                                                                           | 0       |
| placement     | 气泡框位置               | string，枚举值是 `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` `bottom` | 'top'   |
| trigger       | 触发行为                 | string \| string[]，枚举值是 'click' \| 'hover'                                                                                                                  | 'click' |
| onOpenChange  | 气泡浮层显隐的回调方法   | (e: React.MouseEvent<HTMLDivElement\>,data: {open: boolean}) => void                                                                                             | -       |

### 样式变量

| 属性                 | 说明             | 默认值 | 全局变量                         |
| -------------------- | ---------------- | ------ | -------------------------------- |
| --arrow-size         | 箭头大小         | 8PX    | --bui-popover-arrow-size         |
| --localtion-position | 箭头位置         | 8PX    | --bui-popover-localtion-position |
| --max-width          | 最大宽度         | 350px  | --bui-popover-max-width          |
| --content-min-width  | 内容区域最小宽度 | 30px   | --bui-popover-content-min-width  |
| --content-min-height | 内容区域最小高度 | 32px   | --bui-popover-content-min-height |
| --content-padding    | 内容区域内边距   | 0      | --bui-popover-content-padding    |
