---
group: 布局
name: Portal 传送门
---

# Portal 传送门

Portal组件提供了将其子节点渲染到当前 DOM 结构之外的DOM节点中的能力。组件底层使用的是[React createPortal](https://react.dev/reference/react-dom/createPortal)

## 代码演示

### 基础使用

默认情况Portal组件会将子组件挂载到页面的根节点上，H5是`document.body`，小程序是`page节点`。

```tsx
import React, { useState } from 'react';
import { Portal, Button, Stack } from '@bifrostui/react';

export default () => {
  const [renderPortal, setRenderPortal] = useState(false);
  return (
    <>
      <Stack>
        <Button onClick={() => setRenderPortal(!renderPortal)}>
          {renderPortal ? '卸载' : '挂载'}Portal子节点
        </Button>
      </Stack>
      {renderPortal && (
        <Portal>
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'white',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              zIndex: 1000,
            }}
          >
            挂载在页面根节点上的内容
          </div>
        </Portal>
      )}
    </>
  );
};
```

### 指定挂载节点

可以通过使用`container`来指定Portal组件的子组件挂载的节点。这在需要将内容渲染到特定容器时非常有用。

```tsx
import React, { useState, useRef, useLayoutEffect } from 'react';
import { Portal, Button, Stack } from '@bifrostui/react';

export default () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [container, setContainer] = useState({ current: null });

  useLayoutEffect(() => {
    setContainer(ref1);
  }, []);

  return (
    <Stack spacing={16}>
      <div>
        <Button onClick={() => setContainer(ref1)} style={{ marginRight: 8 }}>
          渲染到节点1
        </Button>
        <Button onClick={() => setContainer(ref2)}>渲染到节点2</Button>
      </div>

      <div
        style={{
          width: 200,
          height: 100,
          background: '#ff4d4f',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          position: 'relative',
        }}
        ref={ref1}
      >
        容器节点1
      </div>

      <div
        style={{
          width: 200,
          height: 100,
          background: '#52c41a',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          position: 'relative',
        }}
        ref={ref2}
      >
        容器节点2
      </div>

      <Portal container={container.current}>
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
          }}
        >
          Portal内容
        </div>
      </Portal>
    </Stack>
  );
};
```

### 禁用Portal

可以使用`disablePortal`使children被渲染在父节点中，而非container中。这在某些条件下需要关闭Portal功能时很有用。

```tsx
import React, { useState } from 'react';
import { Portal, Stack, Button } from '@bifrostui/react';

export default () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <Stack spacing={16}>
      <Button onClick={() => setDisabled(!disabled)}>
        {disabled ? '启用' : '禁用'} Portal
      </Button>

      <div
        style={{
          width: 300,
          height: 150,
          background: '#f0f0f0',
          padding: '16px',
          border: '2px dashed #d9d9d9',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden', // 测试Portal是否受父容器样式影响
        }}
      >
        <div>Portal父节点容器</div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
          overflow: hidden (测试Portal行为)
        </div>

        <Portal disablePortal={disabled}>
          <div
            style={{
              position: disabled ? 'absolute' : 'fixed',
              top: disabled ? '60px' : '30%', // 禁用时在容器内，启用时超出容器
              left: '40%',
              background: disabled ? '#1890ff' : '#ff4d4f',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '4px',
              fontSize: '14px',
              transition: 'all 0.3s',
            }}
          >
            {disabled ? '在父节点内渲染' : '启用Portal，通过Portal渲染'}
          </div>
        </Portal>
      </div>
    </Stack>
  );
};
```

### 动态容器

Portal支持动态改变挂载容器，适用于复杂的UI交互场景。

```tsx
import React, { useState, useRef } from 'react';
import { Portal, Button, Stack } from '@bifrostui/react';

export default () => {
  const [activeContainer, setActiveContainer] = useState(null);
  const containerRefs = useRef([]);

  const containers = [
    { id: 'header', label: '头部区域', color: '#1890ff' },
    { id: 'sidebar', label: '侧边栏', color: '#52c41a' },
    { id: 'footer', label: '底部区域', color: '#fa8c16' },
  ];

  return (
    <Stack spacing={16}>
      <div>
        {containers.map((container, index) => (
          <Button
            key={container.id}
            onClick={() => setActiveContainer(containerRefs.current[index])}
            style={{ marginRight: 8 }}
          >
            渲染到{container.label}
          </Button>
        ))}
        <Button onClick={() => setActiveContainer(null)}>清除</Button>
      </div>

      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: '1fr 200px',
        }}
      >
        <div>
          {containers.map((container, index) => (
            <div
              key={container.id}
              ref={(el) => (containerRefs.current[index] = el)}
              style={{
                height: '80px',
                width: '100px',
                background: container.color,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px',
                borderRadius: '4px',
                position: 'relative',
              }}
            >
              {container.label}
            </div>
          ))}
        </div>
      </div>

      {activeContainer && (
        <Portal container={activeContainer}>
          <div
            style={{
              position: 'absolute',
              top: '30%',
              right: '50%',
              background: 'rgba(255,255,255,0.9)',
              color: '#333',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            Portal内容
          </div>
        </Portal>
      )}
    </Stack>
  );
};
```

### 回调函数使用

Portal组件提供了`onMounted`回调，可以在挂载完成后执行自定义逻辑。

```tsx
import React, { useState } from 'react';
import { Portal, Button, Stack } from '@bifrostui/react';

export default () => {
  const [mountInfo, setMountInfo] = useState('');
  const [showPortal, setShowPortal] = useState(false);

  const handleMounted = (element) => {
    setMountInfo(
      `Portal已挂载到: ${element.tagName} (${element.className || 'body'})`,
    );
    console.log('Portal mounted to:', element);
  };

  return (
    <Stack spacing={16}>
      <Button onClick={() => setShowPortal(!showPortal)}>
        {showPortal ? '卸载' : '挂载'} Portal
      </Button>

      {mountInfo && showPortal && (
        <div
          style={{
            padding: '8px 12px',
            background: '#f6ffed',
            border: '1px solid #b7eb8f',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        >
          {mountInfo}
        </div>
      )}

      {showPortal && (
        <Portal onMounted={handleMounted}>
          <div
            style={{
              position: 'fixed',
              top: '60%',
              right: '50%',
              background: '#722ed1',
              color: 'white',
              padding: '12px 16px',
              borderRadius: '6px',
              boxShadow: '0 4px 12px rgba(114, 46, 209, 0.3)',
              zIndex: 1000,
            }}
          >
            Portal挂载成功！
          </div>
        </Portal>
      )}
    </Stack>
  );
};
```

## API

| 属性          | 说明                                   | 类型                                       | 默认值     |
| ------------- | -------------------------------------- | ------------------------------------------ | ---------- |
| children      | Portal组件的子元素                     | React.ReactNode                            | -          |
| container     | children内容将会被append到container中  | Element \| (() => Element \| null) \| null | 页面根节点 |
| disablePortal | 禁止Portal，children将被渲染在父节点中 | boolean                                    | false      |
| onMounted     | 挂载成功的回调方法                     | (element: Element) => void                 | -          |

## 样式变量

Portal组件本身不提供样式变量，样式完全由传入的children决定。建议在使用时为Portal内容设置合适的样式。
