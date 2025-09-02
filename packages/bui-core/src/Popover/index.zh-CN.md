---
group: 数据展示
name: Popover 气泡卡片
---

# Popover 气泡卡片

click或hover触发弹出气泡式的卡片浮层，可以自定义事件

## 基础用法

鼠标点击则显示提示，再点击消失，气泡浮层不承载复杂文本和操作。

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover
      title="This is a title"
      content="This is a content"
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
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

### anchorOrigin 气泡框位置

`anchorOrigin` 设置气泡浮层相对于锚点的位置。通过 `vertical` 和 `horizontal` 两个属性来控制位置：

- `vertical`: 可选值为 `top`、`center`、`bottom`
- `horizontal`: 可选值为 `left`、`center`、`right`

以下展示了所有 9 种位置组合（3×3 网格）：

```tsx
import { Popover, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  const createButton = (text, anchorOrigin) => {
    return (
      <Popover
        trigger={['hover', 'click']}
        title={`anchorOrigin: ${JSON.stringify(anchorOrigin)}`}
        content={`vertical: ${anchorOrigin.vertical}, horizontal: ${anchorOrigin.horizontal}`}
        anchorOrigin={anchorOrigin}
      >
        <Button
          style={{
            width: '100px',
            height: '40px',
            margin: '4px',
            fontSize: '12px',
          }}
        >
          {text}
        </Button>
      </Popover>
    );
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px',
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: '#fafafa',
      }}
    >
      {/* 第一行：top */}
      {createButton('top + left', { vertical: 'top', horizontal: 'left' })}
      {createButton('top + center', { vertical: 'top', horizontal: 'center' })}
      {createButton('top + right', { vertical: 'top', horizontal: 'right' })}

      {/* 第二行：center */}
      {createButton('center + left', {
        vertical: 'center',
        horizontal: 'left',
      })}
      {createButton('center + center', {
        vertical: 'center',
        horizontal: 'center',
      })}
      {createButton('center + right', {
        vertical: 'center',
        horizontal: 'right',
      })}

      {/* 第三行：bottom */}
      {createButton('bottom + left', {
        vertical: 'bottom',
        horizontal: 'left',
      })}
      {createButton('bottom + center', {
        vertical: 'bottom',
        horizontal: 'center',
      })}
      {createButton('bottom + right', {
        vertical: 'bottom',
        horizontal: 'right',
      })}
    </div>
  );
};
```

### trigger 触发方式

气泡浮层可以通过 `trigger` 属性配置触发方式。

```tsx
import { Popover } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [manualOpen, setManualOpen] = useState(false);

  return (
    <div>
      <p>
        <Popover
          title="This is a popover"
          content="onClick触发"
          trigger="click"
        >
          <span>click触发</span>
        </Popover>
      </p>
      <p>
        <Popover title="This is a popover" content="hover触发" trigger="hover">
          <span>hover触发</span>
        </Popover>
      </p>
      <p>
        <Popover
          title="This is a popover"
          content="click和hover都可以触发"
          trigger={['click', 'hover']}
        >
          <span>click或hover触发</span>
        </Popover>
      </p>
      <p>
        <button type="button" onClick={() => setManualOpen(!manualOpen)}>
          外部控制按钮 {manualOpen ? '(点击隐藏)' : '(点击显示)'}
        </button>
        <Popover
          title="完全手动控制"
          content="这个气泡完全由外部控制，不响应任何自动触发事件"
          trigger="none"
          open={manualOpen}
        >
          <span style={{ marginLeft: '10px' }}>none触发（外部控制）</span>
        </Popover>
      </p>
    </div>
  );
};
```

### 无障碍功能

Popover 组件提供了完整的无障碍功能支持，包括键盘导航、屏幕阅读器支持和焦点管理。

```tsx
import { Popover, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {/* 基础无障碍支持 */}
      <Popover
        title="基础无障碍"
        content="支持 ESC 键关闭，自动焦点管理"
        role="tooltip"
        aria-label="帮助信息"
      >
        <Button>基础无障碍</Button>
      </Popover>

      {/* 对话框模式 */}
      <Popover
        title="对话框模式"
        content={
          <div>
            <p>这是一个对话框模式的气泡</p>
            <button type="button">确定</button>
            <button type="button">取消</button>
          </div>
        }
        role="dialog"
        trapFocus
        aria-label="操作确认对话框"
      >
        <Button>对话框模式</Button>
      </Popover>

      {/* 菜单模式 */}
      <Popover
        title="菜单选项"
        content={
          <div>
            <button type="button">选项 1</button>
            <button type="button">选项 2</button>
            <button type="button">选项 3</button>
          </div>
        }
        role="menu"
        trapFocus
        aria-label="操作菜单"
      >
        <Button>菜单模式</Button>
      </Popover>

      {/* 禁用 ESC 键关闭 */}
      <Popover
        title="禁用 ESC 键"
        content="这个气泡不能通过 ESC 键关闭"
        closeOnEscape={false}
      >
        <Button>禁用 ESC 键</Button>
      </Popover>
    </div>
  );
};
```

### API

| 属性            | 说明                       | 类型                                                                                   | 默认值                                    |
| --------------- | -------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------- |
| title           | 气泡浮层的标题浮层内容     | ReactNode                                                                              | -                                         |
| content         | 气泡浮层的内容             | ReactNode                                                                              | -                                         |
| defaultOpen     | 默认是否显隐               | boolean                                                                                | false                                     |
| open            | 用于手动控制气泡浮层显隐   | boolean                                                                                | -                                         |
| hideArrow       | 是否展示箭头               | boolean                                                                                | false                                     |
| offsetSpacing   | 浮层与目标元素的偏移量     | number                                                                                 | 0                                         |
| anchorOrigin    | 气泡框相对于锚点的位置     | { vertical: 'top' \| 'center' \| 'bottom', horizontal: 'left' \| 'center' \| 'right' } | { vertical: 'top', horizontal: 'center' } |
| trigger         | 触发行为                   | string \| string[]，枚举值是 'click' \| 'hover' \| 'none'                              | 'click'                                   |
| onOpenChange    | 气泡浮层显隐的回调方法     | (e: React.MouseEvent<HTMLDivElement\>,data: {open: boolean}) => void                   | -                                         |
| role            | 无障碍功能：气泡的语义角色 | 'tooltip' \| 'dialog' \| 'menu' \| 'listbox'                                           | 'tooltip'                                 |
| aria-label      | 无障碍功能：气泡的标签     | string                                                                                 | -                                         |
| aria-labelledby | 无障碍功能：关联标签元素ID | string                                                                                 | -                                         |
| autoFocus       | 无障碍功能：打开时自动聚焦 | boolean                                                                                | true                                      |
| trapFocus       | 无障碍功能：焦点陷阱       | boolean                                                                                | false                                     |
| closeOnEscape   | 无障碍功能：ESC键关闭      | boolean                                                                                | true                                      |

## 样式变量

| 全局变量                        | 说明           | 默认值    |
| ------------------------------- | -------------- | --------- |
| --bui-popover-arrow-size        | 箭头大小       | `8px`     |
| --bui-popover-location-position | 箭头位置偏移量 | `8px`     |
| --bui-popover-max-width         | 气泡最大宽度   | `350px`   |
| --bui-popover-content-min-width | 内容最小宽度   | `30px`    |
| --bui-popover-content-padding   | 内容内边距     | `6px 8px` |
