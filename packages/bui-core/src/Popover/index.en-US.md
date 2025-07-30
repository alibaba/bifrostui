---
group: Data Display
name: Popover Tooltip Card
---

# Popover Tooltip Card

A tooltip card can be triggered by `click` or `hover`. It supports custom events.

## Code Demos

### Basic Usage

Clicking the mouse will show the tooltip, and clicking again will hide it. The tooltip layer does not support complex text or operations.

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
      <span>Click to Show</span>
    </Popover>
  );
};
```

### External Control of Visibility

Visibility of the tooltip layer can be controlled externally using the `open` prop.

```tsx
import { Popover } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Popover title="This is a popover" open={open}>
      <span onClick={() => setOpen(!open)}>Control visibility</span>
    </Popover>
  );
};
```

### Default Visibility

You can set `defaultOpen` to `true` to show the tooltip layer by default.

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" defaultOpen>
      <span>Default visibility</span>
    </Popover>
  );
};
```

### Offset Spacing

You can set `offsetSpacing` to control the distance from the target element.

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" offsetSpacing={20} defaultOpen>
      <span>Control offset spacing (set to 20 for observation)</span>
    </Popover>
  );
};
```

### Arrow Display

You can set `hideArrow` to `true` to hide the arrow.

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" defaultOpen hideArrow>
      <span>Default visibility</span>
    </Popover>
  );
};
```

### anchorOrigin Position

`anchorOrigin` sets the position of the tooltip layer relative to the anchor. Control the position through `vertical` and `horizontal` properties:
- `vertical`: Options are `top`, `center`, `bottom`
- `horizontal`: Options are `left`, `center`, `right`

The following shows all 9 position combinations (3×3 grid):

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
            width: '120px', 
            height: '40px', 
            margin: '4px',
            fontSize: '12px'
          }}
        >
          {text}
        </Button>
      </Popover>
    );
  };

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '8px',
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#fafafa'
    }}>
      {/* First row: top */}
      {createButton('top + left', { vertical: 'top', horizontal: 'left' })}
      {createButton('top + center', { vertical: 'top', horizontal: 'center' })}
      {createButton('top + right', { vertical: 'top', horizontal: 'right' })}
      
      {/* Second row: center */}
      {createButton('center + left', { vertical: 'center', horizontal: 'left' })}
      {createButton('center + center', { vertical: 'center', horizontal: 'center' })}
      {createButton('center + right', { vertical: 'center', horizontal: 'right' })}
      
      {/* Third row: bottom */}
      {createButton('bottom + left', { vertical: 'bottom', horizontal: 'left' })}
      {createButton('bottom + center', { vertical: 'bottom', horizontal: 'center' })}
      {createButton('bottom + right', { vertical: 'bottom', horizontal: 'right' })}
    </div>
  );
};
```

### Position Reference Table

| vertical | horizontal | Description | Equivalent original placement value |
|----------|------------|-------------|-----------------------------------|
| `top` | `left` | Tooltip above and to the left of anchor | `topLeft` |
| `top` | `center` | Tooltip directly above anchor | `top` |
| `top` | `right` | Tooltip above and to the right of anchor | `topRight` |
| `center` | `left` | Tooltip to the left of anchor | `left` |
| `center` | `center` | Tooltip directly above anchor (special handling) | `top` |
| `center` | `right` | Tooltip to the right of anchor | `right` |
| `bottom` | `left` | Tooltip below and to the left of anchor | `bottomLeft` |
| `bottom` | `center` | Tooltip directly below anchor | `bottom` |
| `bottom` | `right` | Tooltip below and to the right of anchor | `bottomRight` |

### Trigger Methods

The tooltip layer can be configured with different trigger methods using the `trigger` property.

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
          content="onClick trigger"
          trigger="click"
        >
          <span>Click trigger</span>
        </Popover>
      </p>
      <p>
        <Popover
          title="This is a popover"
          content="hover trigger"
          trigger="hover"
        >
          <span>Hover trigger</span>
        </Popover>
      </p>
      <p>
        <Popover
          title="This is a popover"
          content="Both click and hover can trigger"
          trigger={['click', 'hover']}
        >
          <span>Click or hover trigger</span>
        </Popover>
      </p>
      <p>
        <button onClick={() => setManualOpen(!manualOpen)}>
          External Control {manualOpen ? '(Click to hide)' : '(Click to show)'}
        </button>
        <Popover
          title="Fully Manual Control"
          content="This popover is completely controlled externally, no auto-trigger events"
          trigger="none"
          open={manualOpen}
        >
          <span style={{ marginLeft: '10px' }}>None trigger (External control)</span>
        </Popover>
      </p>
    </div>
  );
};
```

## API

| Property      | Description                      | Type                                                                                     | Default                                    |
| ------------- | -------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------ |
| title         | Title of the tooltip layer       | ReactNode                                                                                | -                                          |
| content       | Content of the tooltip layer     | ReactNode                                                                                | -                                          |
| defaultOpen   | Default visibility               | boolean                                                                                  | false                                      |
| open          | Control tooltip layer visibility | boolean                                                                                  | -                                          |
| hideArrow     | Whether to show the arrow        | boolean                                                                                  | false                                      |
| offsetSpacing | Offset from the target element   | number                                                                                   | 0                                          |
| anchorOrigin  | Position relative to anchor      | { vertical: 'top' \| 'center' \| 'bottom', horizontal: 'left' \| 'center' \| 'right' } | { vertical: 'top', horizontal: 'center' }  |
| trigger       | Trigger behavior                 | string \| string[], values are 'click' \| 'hover' \| 'none'                             | 'click'                                    |
| onOpenChange  | Callback for visibility changes  | (e: React.MouseEvent<HTMLDivElement\>,data: {open: boolean}) => void                     | -                                          |

## CSS Variables

| Global Variable                 | Description        | Default   |
| ------------------------------- | ------------------ | --------- |
| --bui-popover-arrow-size        | Arrow size         | `8px`     |
| --bui-popover-location-position | Arrow position offset | `8px`     |
| --bui-popover-max-width         | Maximum tooltip width | `350px`   |
| --bui-popover-content-min-width | Minimum content width | `30px`    |
| --bui-popover-content-padding   | Content padding    | `6px 8px` |
