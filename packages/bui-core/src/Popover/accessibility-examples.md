# Popover 无障碍功能示例

## 基础无障碍功能

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover
      title="帮助信息"
      content="这是一个具有无障碍功能的气泡提示"
      // 默认role为tooltip，支持屏幕阅读器
      role="tooltip"
      // 自动获取焦点，方便键盘用户
      autoFocus={true}
      // 支持Escape键关闭
      closeOnEscape={true}
    >
      <button>显示帮助</button>
    </Popover>
  );
};
```

## 自定义ARIA标签

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover
      title="用户菜单"
      content={
        <div>
          <button>个人资料</button>
          <button>设置</button>
          <button>退出登录</button>
        </div>
      }
      role="menu"
      aria-label="用户操作菜单"
      autoFocus={true}
    >
      <button aria-label="打开用户菜单">
        用户头像
      </button>
    </Popover>
  );
};
```

## 焦点陷阱功能

```tsx
import { Popover } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      title="表单对话框"
      content={
        <div>
          <input placeholder="用户名" />
          <input type="password" placeholder="密码" />
          <button>确认</button>
          <button onClick={() => setOpen(false)}>取消</button>
        </div>
      }
      role="dialog"
      aria-label="登录表单"
      open={open}
      onOpenChange={(_, { open }) => setOpen(open)}
      // 启用焦点陷阱，Tab键只能在弹窗内循环
      trapFocus={true}
      autoFocus={true}
    >
      <button onClick={() => setOpen(true)}>
        登录
      </button>
    </Popover>
  );
};
```

## 列表选择器

```tsx
import { Popover } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [selected, setSelected] = useState('选项1');
  const [open, setOpen] = useState(false);

  const options = ['选项1', '选项2', '选项3'];

  return (
    <Popover
      title="选择选项"
      content={
        <div role="listbox">
          {options.map((option) => (
            <div
              key={option}
              role="option"
              aria-selected={selected === option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              style={{
                padding: '8px',
                cursor: 'pointer',
                backgroundColor: selected === option ? '#f0f0f0' : 'transparent'
              }}
            >
              {option}
            </div>
          ))}
        </div>
      }
      role="listbox"
      aria-label="选项列表"
      open={open}
      onOpenChange={(_, { open }) => setOpen(open)}
      autoFocus={true}
    >
      <button 
        onClick={() => setOpen(true)}
        aria-label={`当前选择: ${selected}, 点击打开选项列表`}
      >
        {selected} ▼
      </button>
    </Popover>
  );
};
```

## 禁用某些无障碍功能

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover
      title="纯展示信息"
      content="这个弹窗不会自动获取焦点，也不响应Escape键"
      // 禁用自动焦点
      autoFocus={false}
      // 禁用Escape键关闭
      closeOnEscape={false}
      // 仍然保持基本的ARIA属性
      role="tooltip"
    >
      <span>悬停显示信息</span>
    </Popover>
  );
};
```

## 无障碍功能说明

### ARIA 属性

- `role`: 定义Popover的语义角色（tooltip、dialog、menu、listbox）
- `aria-label`: 为Popover提供可访问的标签
- `aria-labelledby`: 引用描述Popover的元素ID
- `aria-describedby`: 触发元素通过此属性关联到Popover内容
- `aria-expanded`: 指示触发元素的展开状态
- `aria-haspopup`: 指示触发元素有弹出内容

### 键盘导航

- **Escape键**: 关闭Popover并将焦点返回到触发元素
- **Tab键**: 在启用焦点陷阱时，只能在Popover内的可聚焦元素间循环

### 焦点管理

- **autoFocus**: 控制Popover打开时是否自动获取焦点
- **trapFocus**: 控制是否将焦点限制在Popover内部
- 关闭时自动将焦点返回到触发元素

### 屏幕阅读器支持

- 正确的语义标记确保屏幕阅读器能够识别和朗读内容
- ARIA属性提供额外的上下文信息
- 焦点管理确保用户能够通过键盘正确导航
