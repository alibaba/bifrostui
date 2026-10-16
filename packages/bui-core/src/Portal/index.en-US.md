---
group: Layout
name: Portal
---

# Portal

The Portal component offers the capability to render its child nodes within DOM nodes outside of the current DOM structure. Underneath, the component utilizes [React createPortal](https://react.dev/reference/react-dom/createPortal).

## Code Demos

### Basic Usage

By default, the Portal component mounts its children to the root node of the page; `document.body` for H5 and `page node` for mini programs.

```tsx
import React, { useState } from 'react';
import { Portal, Button, Stack } from '@bifrostui/react';

export default () => {
  const [renderPortal, setRenderPortal] = useState(false);
  return (
    <>
      <Stack>
        <Button onClick={() => setRenderPortal(!renderPortal)}>
          {renderPortal ? 'Unmount' : 'Mount'} Portal Node
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
            Content mounted on the page's root node
          </div>
        </Portal>
      )}
    </>
  );
};
```

### Specifying Mount Node

You can specify the node where the Portal component's children will be mounted by using `container`. This is useful when you need to render content to a specific container.

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
          Render to Node 1
        </Button>
        <Button onClick={() => setContainer(ref2)}>Render to Node 2</Button>
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
        Container Node 1
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
        Container Node 2
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
          Portal Content
        </div>
      </Portal>
    </Stack>
  );
};
```

### Disabling Portal

You can disable the portal by using `disablePortal`, allowing children to be rendered within the parent node instead of the container. This is useful when you need to disable the portal functionality under certain conditions.

```tsx
import React, { useState } from 'react';
import { Portal, Stack, Button } from '@bifrostui/react';

export default () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <Stack spacing={16}>
      <Button onClick={() => setDisabled(!disabled)}>
        {disabled ? 'Enable' : 'Disable'} Portal
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
          overflow: 'hidden', // Test if Portal is affected by the parent container's styles
        }}
      >
        <div>Portal Parent Node Container</div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
          overflow: hidden (Testing Portal behavior)
        </div>

        <Portal disablePortal={disabled}>
          <div
            style={{
              position: disabled ? 'absolute' : 'fixed',
              top: disabled ? '60px' : '30%', // Within the container when disabled, outside when enabled
              left: '40%',
              background: disabled ? '#1890ff' : '#ff4d4f',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '4px',
              fontSize: '14px',
              transition: 'all 0.3s',
            }}
          >
            {disabled
              ? 'Rendered within parent node'
              : 'Enabled Portal, rendered via Portal'}
          </div>
        </Portal>
      </div>
    </Stack>
  );
};
```

### Dynamic Container

The Portal supports dynamically changing the mount container, suitable for complex UI interaction scenarios.

```tsx
import React, { useState, useRef } from 'react';
import { Portal, Button, Stack } from '@bifrostui/react';

export default () => {
  const [activeContainer, setActiveContainer] = useState(null);
  const containerRefs = useRef([]);

  const containers = [
    { id: 'header', label: 'Header Area', color: '#1890ff' },
    { id: 'sidebar', label: 'Sidebar', color: '#52c41a' },
    { id: 'footer', label: 'Footer Area', color: '#fa8c16' },
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
            Render to {container.label}
          </Button>
        ))}
        <Button onClick={() => setActiveContainer(null)}>Clear</Button>
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
            Portal Content
          </div>
        </Portal>
      )}
    </Stack>
  );
};
```

### Using Callback Functions

The Portal component provides the `onMounted` callback, which can be used to execute custom logic after mounting.

```tsx
import React, { useState } from 'react';
import { Portal, Button, Stack } from '@bifrostui/react';

export default () => {
  const [mountInfo, setMountInfo] = useState('');
  const [showPortal, setShowPortal] = useState(false);

  const handleMounted = (element) => {
    setMountInfo(
      `The Portal has mounted to: ${element.tagName} (${element.className || 'body'})`,
    );
    console.log('Portal mounted to:', element);
  };

  return (
    <Stack spacing={16}>
      <Button onClick={() => setShowPortal(!showPortal)}>
        {showPortal ? 'Unmount' : 'Mount'} Portal
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
            Portal Mounted Successfully!
          </div>
        </Portal>
      )}
    </Stack>
  );
};
```

## API

| Property      | Description                                                           | Type                                       | Default   |
| ------------- | --------------------------------------------------------------------- | ------------------------------------------ | --------- |
| children      | The child elements of the Portal                                      | React.ReactNode                            | -         |
| container     | The children will be appended to the container                        | Element \| (() => Element \| null) \| null | Root Node |
| disablePortal | Disables the Portal; children will be rendered within the parent node | boolean                                    | false     |
| onMounted     | Callback function after successful mounting                           | (element: Element) => void                 | -         |

## Style Variables

The Portal component itself does not provide style variables; styles are entirely determined by the children passed in. It's recommended to set appropriate styles for Portal content when using.

```

```
