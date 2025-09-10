---
group: 数据展示
name: Popover 气泡卡片
---

# Popover 气泡卡片

Popover组件，常用于展示气泡式的卡片浮层，通过 click 或 hover 触发弹出，可以自定义触发事件。

## 基本用法

Popover 组件可通过使用 `children` 设置触发元素，通过 `title` 和 `content` 设置气泡内容。

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

## 外部控制显隐

通过 `open` 属性可以外部控制气泡浮层的显示和隐藏。

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

## 默认显示

通过设置 `defaultOpen` 为 `true` 可以让气泡浮层默认显示。

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

## 偏移距离

通过 `offsetSpacing` 属性可以设置气泡浮层与目标元素之间的距离。

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

## 隐藏箭头

通过设置 `hideArrow` 为 `true` 可以隐藏气泡浮层的箭头。

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

## 位置设置

通过 `anchorOrigin` 属性可以设置气泡浮层相对于锚点的位置。该属性包含 `vertical` 和 `horizontal` 两个子属性：

- `vertical`: 垂直位置，可选值为 `top`、`center`、`bottom`  
- `horizontal`: 水平位置，可选值为 `left`、`center`、`right`

以下展示了所有 9 种位置组合：

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

## 触发方式

通过 `trigger` 属性可以配置气泡浮层的触发方式，支持点击、悬停、组合触发和手动控制。

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

## 无障碍功能

Popover 组件提供完整的无障碍功能支持，包括键盘导航、屏幕阅读器支持、焦点管理和语义化角色设置。

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

## API

### PopoverProps

| 属性            | 说明                       | 类型                                                                                   | 默认值                                    |
| --------------- | -------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------- |
| title           | 气泡浮层的标题             | ReactNode                                                                              | -                                         |
| content         | 气泡浮层的内容             | ReactNode                                                                              | -                                         |
| defaultOpen     | 默认是否显示               | boolean                                                                                | false                                     |
| open            | 用于手动控制气泡浮层显隐   | boolean                                                                                | -                                         |
| hideArrow       | 是否隐藏箭头               | boolean                                                                                | false                                     |
| offsetSpacing   | 浮层与目标元素的偏移量     | number                                                                                 | 0                                         |
| anchorOrigin    | 气泡框相对于锚点的位置     | { vertical: 'top' \| 'center' \| 'bottom', horizontal: 'left' \| 'center' \| 'right' } | { vertical: 'top', horizontal: 'center' } |
| trigger         | 触发行为                   | string \| string[]，枚举值是 'click' \| 'hover' \| 'none'                              | 'click'                                   |
| onOpenChange    | 气泡浮层显隐的回调方法     | (e: React.MouseEvent<HTMLDivElement\>,data: {open: boolean}) => void                   | -                                         |
| role            | 无障碍功能：气泡的语义角色 | 'tooltip' \| 'dialog' \| 'menu' \| 'listbox'                                           | 'tooltip'                                 |
| aria-label      | 无障碍功能：气泡的标签     | string                                                                                 | -                                         |
| aria-labelledby | 无障碍功能：关联标签元素ID | string                                                                                 | -                                         |
| autoFocus       | 无障碍功能：打开时自动聚焦 | boolean                                                                                | false                                     |
| trapFocus       | 无障碍功能：焦点陷阱       | boolean                                                                                | false                                     |
| closeOnEscape   | 无障碍功能：ESC键关闭      | boolean                                                                                | true                                      |

### 样式变量

| 属性                            | 说明           | 默认值                 | 全局变量                           |
| ------------------------------- | -------------- | ---------------------- | ---------------------------------- |
| --arrow-size                    | 箭头大小       | 8px                    | --bui-popover-arrow-size           |
| --location-position             | 箭头位置偏移量 | 8px                    | --bui-popover-location-position    |
| --max-width                     | 气泡最大宽度   | 350px                  | --bui-popover-max-width            |
| --content-min-width             | 内容最小宽度   | 30px                   | --bui-popover-content-min-width    |
| --content-padding               | 内容内边距     | 6px 8px                | --bui-popover-content-padding      |
