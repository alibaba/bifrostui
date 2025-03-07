---
group: 布局
name: Portal 传送门
---

# Portal 传送门

Portal组件提供了将其子节点渲染到当前 DOM 结构之外的DOM节点中。组件底层使用的是[React createPortal](https://react.dev/reference/react-dom/createPortal)

## 代码演示

### 基础使用

默认情况Portal组件会将子组件挂载到页面的根节点上，H5是`document.body`，小程序是`page节点`，小程序中，进入页面直接渲染Portal组件并不会将其子节点挂载到根节点上，需要用户主动触发才可正确挂载，如：通过点击按钮更改状态控制Portal组件的渲染。

```tsx
import React, { useState } from 'react';
import { Portal, Button } from '@bifrostui/react';

export default () => {
  const [rederPortal, setRederPortal] = useState(false);
  return (
    <>
      <Button onClick={() => setRederPortal(!rederPortal)}>
        {rederPortal ? '卸载' : '挂载'}Portal子节点
      </Button>
      {rederPortal && (
        <Portal>
          <div>挂载在页面根节点上</div>
        </Portal>
      )}
    </>
  );
};
```

### 指定挂载节点

可以通过使用`container`来指定Portal组件的子组件挂载的节点

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
    <Stack>
      <Button onClick={() => setContainer(ref1)}>节点1渲染Portal子节点</Button>
      <Button onClick={() => setContainer(ref2)}>节点2渲染Portal子节点</Button>
      <div
        style={{ width: 200, height: 100, background: 'red', marginTop: 10 }}
        ref={ref1}
      >
        节点1
      </div>
      <div style={{ width: 200, height: 100, background: 'green' }} ref={ref2}>
        节点2
      </div>
      <Portal container={container.current}>渲染Portal子节点</Portal>
    </Stack>
  );
};
```

### 禁止Portal

可以使用`disablePortal`使children被渲染在父节点中，而非container中

```tsx
import React from 'react';
import { Portal, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <div
        style={{ width: 200, height: 100, background: 'green', marginTop: 10 }}
      >
        Portal父节点
        <Portal disablePortal>
          <div>Portal子节点挂载在父节点上</div>
        </Portal>
      </div>
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
