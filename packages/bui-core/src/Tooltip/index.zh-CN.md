---
group: 数据展示
name: Tooltip 文字提示
---

# Tooltip 文字提示

简单的文字提示气泡框。

## 基础用法

鼠标点击则显示提示，再点击消失，气泡浮层不承载复杂文本和操作。

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip">
      <span>click显示</span>
    </Tooltip>
  );
};
```

### open 外部控制

外部通过open设置气泡浮层显隐

```tsx
import { Tooltip } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Tooltip title="This is a tooltip" open={open}>
      <span onClick={() => setOpen(!open)}>open控制显隐</span>
    </Tooltip>
  );
};
```

### defaultOpen 默认显示

可以设置defaultOpen为true默认显示气泡浮层

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" defaultOpen>
      <span>defaultOpen默认显示</span>
    </Tooltip>
  );
};
```

### offset 浮层和目标元素间隔

可以设置offset来控制和目标元素的距离

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" offset={20} defaultOpen>
      <span>offset控制目标间隔（设置20 以便观察）</span>
    </Tooltip>
  );
};
```

### placement 气泡框位置

placement设置气泡浮层的位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom

```tsx
import { Tooltip, Button } from '@bifrostui/react';
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
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="topLeft"
        >
          {packageButton(<span>topLeft</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="top"
        >
          {packageButton(<span>top</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="topRight"
        >
          {packageButton(<span>topRight</span>)}
        </Tooltip>
      </div>
      <div
        style={{
          marginTop: '20px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="leftTop"
        >
          {packageButton(<span>leftTop</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="left"
        >
          {packageButton(<span>left</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="leftBottom"
        >
          {packageButton(<span>leftBottom</span>)}
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: '300px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="rightTop"
        >
          {packageButton(<span>rightTop</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="right"
        >
          {packageButton(<span>right</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="rightBottom"
        >
          {packageButton(<span>rightBottom</span>)}
        </Tooltip>
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
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="bottomLeft"
        >
          {packageButton(<span>bottomLeft</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="bottom"
        >
          {packageButton(<span>bottom</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="bottomRight"
        >
          {packageButton(<span>bottomRight</span>)}
        </Tooltip>
      </div>
    </div>
  );
};
```

### trigger 触发方式

显示气泡的触发方式 "click"或者"hover"，默认click

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" trigger={['hover']}>
      <span>hover触发方式</span>
    </Tooltip>
  );
};
```

### onOpenChange 气泡浮层显隐的回调方法

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  const onOpenChange = (event, data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Tooltip
      title="This is a tooltip"
      trigger="click"
      onOpenChange={onOpenChange}
      placement="bottom"
    >
      <span>onOpenChange 回调方法</span>
    </Tooltip>
  );
};
```

### API

| 属性          | 说明                     | 类型                                                                                                                                                             | 默认值  |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| title         | 气泡浮层内容             | string                                                                                                                                                           | -       |
| defaultOpen   | 默认是否显隐             | boolean                                                                                                                                                          | false   |
| open          | 用于手动控制气泡浮层显隐 | boolean                                                                                                                                                          | -       |
| offset        | 浮层与目标元素的偏移量   | number                                                                                                                                                           | 0       |
| offsetSpacing | 浮层与目标元素的偏移量   | number                                                                                                                                                           | 0       |
| placement     | 气泡框位置               | string，枚举值是 `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` `bottom` | 'top'   |
| trigger       | 触发行为                 | string \| string[]，枚举值是 'click' \| 'hover'                                                                                                                  | 'click' |
| onOpenChange  | 气泡浮层显隐的回调方法   | (e: React.MouseEvent<HTMLDivElement\>,data: {open: boolean}) => void                                                                                             | -       |

> **注意:** `offsetSpacing` 属性已被标记为废弃，建议使用 `offset` 属性替代。两个属性功能相同，`offset` 优先级更高。

## 样式变量

| 全局变量                         | 说明         | 默认值    |
| -------------------------------- | ------------ | --------- |
| --bui-tooltip-arrow-size         | 箭头大小     | `8PX`     |
| --bui-tooltip-location-position  | 定位偏移量   | `8PX`     |
| --bui-tooltip-max-width          | 最大宽度     | `350px`   |
| --bui-tooltip-content-min-width  | 内容最小宽度 | `30px`    |
| --bui-tooltip-content-min-height | 内容最小高度 | `32px`    |
| --bui-tooltip-content-padding    | 内容内边距   | `6px 8px` |
