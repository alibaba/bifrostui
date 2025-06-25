---
group: Layout
name: Portal Teleport
---

# Portal Teleport

The Portal component provides the ability to render its child nodes into a DOM node outside the current DOM structure. The underlying implementation uses [React createPortal](https://react.dev/reference/react-dom/createPortal)

## Code Examples

### Basic Usage

By default, the Portal component mounts child components to the root node of the page; for H5 it is `document.body`, and for mini-programs it is the `page node`.

```tsx
import React, { useState } from 'react';
import { Portal, Button } from '@bifrostui/react';

export default () => {
  const [rederPortal, setRederPortal] = useState(false);
  return (
    <Portal>
      <div>Mounted on the page root node</div>
    </Portal>
  );
};
```

### Specifying Mount Node

You can specify the node where the Portal component's children are mounted using the `container` prop.

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
      <Button onClick={() => setContainer(ref1)}>
        Render Portal child nodes in Node 1
      </Button>
      <Button onClick={() => setContainer(ref2)}>
        Render Portal child nodes in Node 2
      </Button>
      <div
        style={{ width: 200, height: 100, background: 'red', marginTop: 10 }}
        ref={ref1}
      >
        Node 1
      </div>
      <div style={{ width: 200, height: 100, background: 'green' }} ref={ref2}>
        Node 2
      </div>
      <Portal container={container.current}>Render Portal child nodes</Portal>
    </Stack>
  );
};
```

### Disabling Portal

Using `disablePortal` will cause the children to be rendered within the parent node instead of the specified container.

```tsx
import React from 'react';
import { Portal, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <div
        style={{ width: 200, height: 100, background: 'green', marginTop: 10 }}
      >
        Portal parent node
        <Portal disablePortal>
          <div>Portal child node mounted on the parent node</div>
        </Portal>
      </div>
    </Stack>
  );
};
```

## API

| Property      | Description                                    | Type                                       | Default Value  |
| ------------- | ---------------------------------------------- | ------------------------------------------ | -------------- |
| children      | Child elements of the Portal component         | React.ReactNode                            | -              |
| container     | Where the children content will be appended to | Element \| (() => Element \| null) \| null | Page root node |
| disablePortal | Disable Portal, rendering children in parent   | boolean                                    | false          |
