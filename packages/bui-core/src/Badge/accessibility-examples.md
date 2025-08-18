# Badge 无障碍功能示例

## 基础无障碍功能

```tsx
import { Badge, Avatar } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div>
      {/* 数字徽章 - 自动生成"5条通知"的标签 */}
      <Badge content={5}>
        <Avatar src="/avatar.jpg" />
      </Badge>

      {/* 圆点徽章 - 自动生成"有新通知"的标签 */}
      <Badge type="dot">
        <Avatar src="/avatar.jpg" />
      </Badge>

      {/* 超过最大值 - 自动生成"超过99条通知"的标签 */}
      <Badge content={150} max={99}>
        <Avatar src="/avatar.jpg" />
      </Badge>
    </div>
  );
};
```

## 自定义可访问性标签

```tsx
import { Badge, Avatar } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div>
      {/* 自定义ARIA标签 */}
      <Badge content={5} aria-label="5条未读消息">
        <Avatar src="/avatar.jpg" />
      </Badge>

      {/* 带描述的徽章 */}
      <div>
        <Badge content="NEW" aria-describedby="new-feature-desc">
          <button>新功能</button>
        </Badge>
        <div id="new-feature-desc" style={{ display: 'none' }}>
          这是一个新发布的功能
        </div>
      </div>
    </div>
  );
};
```

## 不同角色的徽章

```tsx
import { Badge, Avatar } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div>
      {/* 状态指示器（默认） */}
      <Badge content={3} role="status">
        <Avatar src="/avatar.jpg" />
      </Badge>

      {/* 图像角色 - 用于装饰性图标 */}
      <Badge content="VIP" role="img" aria-label="VIP会员标识">
        <Avatar src="/avatar.jpg" />
      </Badge>

      {/* 装饰性徽章 - 屏幕阅读器会忽略 */}
      <Badge content="★" decorative>
        <Avatar src="/avatar.jpg" />
      </Badge>
    </div>
  );
};
```

## 隐藏和装饰性徽章

```tsx
import { Badge, Avatar } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div>
      {/* 装饰性徽章 - 纯视觉效果，屏幕阅读器忽略 */}
      <Badge content="✨" decorative>
        <div>装饰性内容</div>
      </Badge>

      {/* 明确隐藏的徽章 */}
      <Badge content={5} aria-hidden>
        <div>隐藏的徽章</div>
      </Badge>

      {/* 条件显示的徽章 */}
      <Badge content={0} showZero={false}>
        <div>没有通知时不显示</div>
      </Badge>
    </div>
  );
};
```

## 复杂场景示例

```tsx
import { Badge, Avatar, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [messageCount, setMessageCount] = useState(12);
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <div>
      {/* 消息计数徽章 */}
      <Badge 
        content={messageCount} 
        max={99}
        aria-label={`${messageCount > 99 ? '超过99' : messageCount}条未读消息`}
      >
        <Button onClick={() => setMessageCount(0)}>
          消息中心
        </Button>
      </Badge>

      {/* 通知状态徽章 */}
      <Badge 
        type="dot" 
        visibility={hasNotification}
        aria-label={hasNotification ? '有新通知' : undefined}
      >
        <Button onClick={() => setHasNotification(false)}>
          通知
        </Button>
      </Badge>

      {/* 在线状态指示器 */}
      <Badge 
        type="dot" 
        color="success"
        role="img"
        aria-label="在线状态"
      >
        <Avatar src="/avatar.jpg" />
      </Badge>
    </div>
  );
};
```

## 表单验证徽章

```tsx
import { Badge, Input } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [errors, setErrors] = useState(['邮箱格式错误', '密码太短']);

  return (
    <div>
      <Badge 
        content={errors.length} 
        color="danger"
        aria-label={`${errors.length}个表单错误`}
        aria-describedby="error-list"
      >
        <Input placeholder="请输入邮箱" />
      </Badge>
      
      <ul id="error-list" style={{ display: 'none' }}>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
};
```

## 购物车徽章

```tsx
import { Badge, IconButton } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [cartItems, setCartItems] = useState(3);

  return (
    <Badge 
      content={cartItems} 
      max={99}
      aria-label={
        cartItems === 0 ? '购物车为空' :
        cartItems === 1 ? '购物车中有1件商品' :
        cartItems > 99 ? '购物车中有超过99件商品' :
        `购物车中有${cartItems}件商品`
      }
    >
      <IconButton 
        aria-label="查看购物车"
        onClick={() => console.log('打开购物车')}
      >
        🛒
      </IconButton>
    </Badge>
  );
};
```

## 无障碍功能说明

### ARIA 属性

- `role`: 定义Badge的语义角色
  - `status`: 状态指示器（默认）
  - `img`: 图像角色，用于装饰性图标
  - `presentation`: 装饰性元素，屏幕阅读器忽略

- `aria-label`: 为Badge提供可访问的标签
  - 如果不提供，会根据内容自动生成
  - 数字内容：自动生成"X条通知"
  - 圆点徽章：自动生成"有新通知"
  - 文本内容：自动生成"通知：X"

- `aria-describedby`: 引用描述Badge的元素ID

- `aria-hidden`: 对屏幕阅读器隐藏Badge

### 装饰性处理

- `decorative`: 标记为装饰性Badge
  - 自动设置`role="presentation"`
  - 自动设置`aria-hidden="true"`
  - 屏幕阅读器会完全忽略

### 自动生成的标签规则

1. **数字徽章**：
   - 0: "无通知"
   - 1: "1条通知"
   - 多个: "X条通知"
   - 超过最大值: "超过X条通知"

2. **圆点徽章**: "有新通知"

3. **文本徽章**: "通知：{内容}"

### 最佳实践

1. **明确语义**: 为不同用途的Badge选择合适的role
2. **提供上下文**: 使用aria-describedby提供额外信息
3. **装饰性标记**: 纯装饰的Badge应标记为decorative
4. **自定义标签**: 为特殊场景提供更准确的aria-label
5. **状态同步**: 确保可见状态与可访问性状态一致
