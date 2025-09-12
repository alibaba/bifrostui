---
group: 数据展示
name: Tooltip 文字提示
---

# Tooltip 文字提示

Tooltip 组件为用户提供简洁的文字提示气泡框，适用于对页面元素进行补充说明。

## 特性

- 🎯 **灵活触发** - 支持点击、悬停等多种触发方式
- 📍 **智能定位** - 12种位置选项，自动调整避免边界溢出
- ♿ **无障碍支持** - 完整的 ARIA 支持和键盘导航
- 🎨 **高度可定制** - 支持自定义内容、样式和行为
- 📱 **跨端兼容** - 支持 H5 和小程序平台

## 何时使用

- 需要为页面元素提供简短说明或提示时
- 空间有限，无法展示完整信息时
- 需要对操作按钮或表单字段进行补充说明时
- 替代传统的 title 属性，提供更好的用户体验

## 基础用法

最简单的 Tooltip 用法，默认点击触发显示/隐藏。

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip">
      <span>点击显示提示</span>
    </Tooltip>
  );
};
```

## 受控模式

通过 `open` 属性外部控制 Tooltip 的显隐状态。

```tsx
import { Tooltip, Button, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={() => setOpen(!open)}>
        {open ? '隐藏' : '显示'} Tooltip
      </Button>
      <Tooltip title="受控的 Tooltip" open={open}>
        <span>目标元素</span>
      </Tooltip>
    </Stack>
  );
};
```

## 默认显示

设置 `defaultOpen` 为 `true` 可以让 Tooltip 默认显示。

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

## 无障碍功能

Tooltip 组件内置了完整的无障碍支持，确保屏幕阅读器用户和键盘用户都能正常使用。

### 键盘导航

```tsx
import { Tooltip, Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing={2}>
      <Tooltip title="支持 Esc 键关闭" closeOnEscape>
        <Button>打开后按 Esc 键关闭</Button>
      </Tooltip>
    </Stack>
  );
};
```

### 焦点管理

```tsx
import { Tooltip, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip 
      title="提示内容会自动获取焦点" 
      autoFocus
      role="dialog"
    >
      <Button>自动焦点管理</Button>
    </Tooltip>
  );
};
```

## API

### Tooltip Props

| 属性              | 说明                           | 类型                                                | 默认值    |
| ----------------- | ------------------------------ | --------------------------------------------------- | --------- |
| title             | 气泡浮层内容                   | React.ReactNode                                     | -         |
| defaultOpen       | 默认是否显隐                   | boolean                                             | false     |
| open              | 用于手动控制气泡浮层显隐       | boolean                                             | -         |
| offset            | 浮层与目标元素的偏移量（像素） | number                                              | 0         |
| placement         | 气泡框位置                     | TooltipPlacement                                    | 'top'     |
| trigger           | 触发行为                       | TooltipTriggerType \| TooltipTriggerType[]          | 'click'   |
| onOpenChange      | 气泡浮层显隐的回调方法         | (event, data) => void                               | -         |

### 无障碍属性

| 属性              | 说明                           | 类型                                                | 默认值    |
| ----------------- | ------------------------------ | --------------------------------------------------- | --------- |
| role              | ARIA 角色                      | 'tooltip' \| 'dialog' \| 'status' \| 'alert'       | 'tooltip' |
| aria-label        | 无障碍标签                     | string                                              | -         |
| aria-labelledby   | 引用描述元素的 ID              | string                                              | -         |
| aria-hidden       | 是否对屏幕阅读器隐藏           | boolean                                             | false     |
| autoFocus         | 是否自动获取焦点               | boolean                                             | false     |
| closeOnEscape     | 是否支持 Esc 键关闭            | boolean                                             | false     |

### TooltipPlacement

```typescript
type TooltipPlacement =
  | 'top' | 'left' | 'right' | 'bottom'
  | 'topLeft' | 'topRight' 
  | 'bottomLeft' | 'bottomRight'
  | 'leftTop' | 'leftBottom'
  | 'rightTop' | 'rightBottom';
```

### TooltipTriggerType

```typescript
type TooltipTriggerType = 'click' | 'hover';
```

### OnOpenChange 回调

```typescript
interface TooltipOpenChangeData {
  open: boolean;
}

type OnOpenChange = (
  event: React.SyntheticEvent,
  data: TooltipOpenChangeData
) => void;
```

## 样式变量

| 全局变量                         | 说明         | 默认值    |
| -------------------------------- | ------------ | --------- |
| --bui-tooltip-arrow-size         | 箭头大小     | `8PX`     |
| --bui-tooltip-location-position  | 定位偏移量   | `8PX`     |
| --bui-tooltip-max-width          | 最大宽度     | `350px`   |
| --bui-tooltip-content-min-width  | 内容最小宽度 | `30px`    |
| --bui-tooltip-content-min-height | 内容最小高度 | `32px`    |
| --bui-tooltip-content-padding    | 内容内边距   | `6px 8px` |
