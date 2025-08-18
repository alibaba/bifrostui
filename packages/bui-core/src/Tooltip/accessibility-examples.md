# Tooltip 无障碍功能示例

## 基础无障碍功能

```tsx
import { Tooltip, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div>
      {/* 基础Tooltip - 默认支持键盘导航和Escape关闭 */}
      <Tooltip title="这是一个帮助提示">
        <Button>悬停或点击显示提示</Button>
      </Tooltip>

      {/* 自动获取焦点的Tooltip */}
      <Tooltip 
        title="重要信息提示" 
        autoFocus
        trigger="click"
      >
        <Button>点击显示重要提示</Button>
      </Tooltip>
    </div>
  );
};
```

## 自定义ARIA属性

```tsx
import { Tooltip, Button, IconButton } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div>
      {/* 自定义ARIA标签 */}
      <Tooltip 
        title="保存当前文档" 
        aria-label="保存操作说明"
        trigger="hover"
      >
        <IconButton>💾</IconButton>
      </Tooltip>

      {/* 带描述的Tooltip */}
      <div>
        <Tooltip 
          title="删除操作" 
          aria-labelledby="delete-description"
          role="alert"
        >
          <Button color="danger">删除</Button>
        </Tooltip>
        <div id="delete-description" style={{ display: 'none' }}>
          此操作不可撤销，请谨慎操作
        </div>
      </div>
    </div>
  );
};
```

## 不同角色的Tooltip

```tsx
import { Tooltip, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div>
      {/* 默认tooltip角色 */}
      <Tooltip title="这是一个提示信息" role="tooltip">
        <Button>信息提示</Button>
      </Tooltip>

      {/* 状态指示器 */}
      <Tooltip title="当前状态：已连接" role="status">
        <Button>状态指示</Button>
      </Tooltip>

      {/* 警告对话框 */}
      <Tooltip 
        title="警告：此操作有风险" 
        role="alert"
        autoFocus
      >
        <Button color="warning">危险操作</Button>
      </Tooltip>

      {/* 对话框模式 */}
      <Tooltip 
        title="确认要继续吗？" 
        role="dialog"
        autoFocus
      >
        <Button>确认操作</Button>
      </Tooltip>
    </div>
  );
};
```

## 键盘导航配置

```tsx
import { Tooltip, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div>
      {/* 完整键盘支持 */}
      <Tooltip 
        title="支持Enter/空格键触发，Escape键关闭" 
        trigger="click"
        keyboardTrigger={true}
        closeOnEscape={true}
      >
        <Button>完整键盘支持</Button>
      </Tooltip>

      {/* 禁用键盘触发 */}
      <Tooltip 
        title="只能鼠标点击触发" 
        trigger="click"
        keyboardTrigger={false}
      >
        <Button>仅鼠标触发</Button>
      </Tooltip>

      {/* 禁用Escape关闭 */}
      <Tooltip 
        title="Escape键无法关闭此提示" 
        trigger="click"
        closeOnEscape={false}
      >
        <Button>禁用Escape关闭</Button>
      </Tooltip>
    </div>
  );
};
```

## 焦点管理示例

```tsx
import { Tooltip, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [showImportant, setShowImportant] = useState(false);

  return (
    <div>
      {/* 自动焦点管理 */}
      <Tooltip 
        title="这个提示会自动获取焦点" 
        autoFocus
        open={showImportant}
        onOpenChange={(_, { open }) => setShowImportant(open)}
      >
        <Button onClick={() => setShowImportant(true)}>
          显示重要提示
        </Button>
      </Tooltip>

      {/* 表单验证提示 */}
      <Tooltip 
        title="请输入有效的邮箱地址" 
        role="alert"
        autoFocus
        trigger="click"
      >
        <Button color="danger">验证错误</Button>
      </Tooltip>
    </div>
  );
};
```

## 复杂交互场景

```tsx
import { Tooltip, Button, Input } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const [showValidation, setShowValidation] = useState(false);

  const validateInput = () => {
    const isValid = inputValue.includes('@');
    setShowValidation(!isValid);
    return isValid;
  };

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <Input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="请输入邮箱"
          onBlur={validateInput}
        />
      </div>

      {/* 验证错误提示 */}
      <Tooltip 
        title="邮箱格式不正确，请包含@符号" 
        role="alert"
        open={showValidation}
        autoFocus
        aria-label="邮箱格式验证错误"
        onOpenChange={(_, { open }) => setShowValidation(open)}
      >
        <Button 
          color="danger"
          onClick={() => setShowValidation(false)}
        >
          关闭错误提示
        </Button>
      </Tooltip>

      {/* 帮助信息 */}
      <Tooltip 
        title="邮箱格式：example@domain.com" 
        trigger="hover"
        placement="right"
      >
        <Button variant="outlined">❓ 帮助</Button>
      </Tooltip>
    </div>
  );
};
```

## 隐藏和装饰性Tooltip

```tsx
import { Tooltip, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div>
      {/* 对屏幕阅读器隐藏 */}
      <Tooltip 
        title="这是装饰性信息" 
        aria-hidden
      >
        <Button>装饰性提示</Button>
      </Tooltip>

      {/* 条件显示的提示 */}
      <Tooltip 
        title="只有在特定条件下才显示"
        trigger="click"
      >
        <Button>条件提示</Button>
      </Tooltip>
    </div>
  );
};
```

## 无障碍功能说明

### ARIA 属性

- `role`: 定义Tooltip的语义角色
  - `tooltip`: 工具提示（默认）
  - `dialog`: 对话框模式
  - `status`: 状态指示器
  - `alert`: 警告信息

- `aria-label`: 为Tooltip提供可访问的标签
- `aria-labelledby`: 引用描述Tooltip的元素ID
- `aria-describedby`: 触发元素通过此属性关联到Tooltip内容
- `aria-expanded`: 指示触发元素的展开状态
- `aria-hidden`: 对屏幕阅读器隐藏Tooltip

### 键盘导航

- **Escape键**: 关闭Tooltip并将焦点返回到触发元素
- **Enter/空格键**: 触发Tooltip显示（仅在trigger包含'click'时）
- **Tab键**: 正常的焦点导航

### 焦点管理

- **autoFocus**: 控制Tooltip显示时是否自动获取焦点
- 关闭时自动将焦点返回到触发元素
- 支持tabIndex设置

### 键盘配置

- **keyboardTrigger**: 控制是否支持Enter/空格键触发
- **closeOnEscape**: 控制是否支持Escape键关闭
- 仅在trigger包含'click'时键盘触发才有效

### 最佳实践

1. **明确语义**: 为不同用途的Tooltip选择合适的role
2. **提供上下文**: 使用aria-labelledby提供额外信息
3. **焦点管理**: 重要信息使用autoFocus确保用户注意
4. **键盘友好**: 保持默认的键盘导航支持
5. **状态同步**: 确保可见状态与可访问性状态一致
6. **适当隐藏**: 装饰性内容使用aria-hidden避免干扰
