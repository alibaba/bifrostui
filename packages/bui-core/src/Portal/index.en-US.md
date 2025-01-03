---
group: layout
name: Portal portal
---

# Portal portal

The Portal component provides the ability to render its child nodes into DOM nodes outside of the current DOM structure. The underlying component uses [React create Portal]（ https://react.dev/reference/react-dom/createPortal )

## Code demonstration

### Basic usage

By default, Portal components will mount sub components to the root node of the page. H5 is' document. body ', and the mini program is the' page node '

```tsx | pure
import React from 'react';
import { Portal } from '@bifrostui/react';

export default () => {
  return (
    <Portal>
      <div>挂载在页面根节点上</div>
    </Portal>
  );
};
```

### Specify the mounting node

You can use 'container' to specify the nodes that the sub components of Portal components are mounted on

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

### Prohibit Portal

You can use 'disabling Portal' to render children in the parent node instead of in the container

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

| attribute     | explain                                                       | type                                    | Default value   |
| ------------- | ------------------------------------------------------------- | --------------------------------------- | --------------- |
| children      | Sub elements of Portal components                             | React.ReactNode                         | -               |
| container     | The children content will be appended to the container        | Element \|(() => Element \|null) \|null | Pages and Nodes |
| disablePortal | Prohibit Portal, children will be rendered in the parent node | boolean                                 | false           |
