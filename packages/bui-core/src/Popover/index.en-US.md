---
group: Data Display
name: Popover Tooltip Card
---

# Popover Tooltip Card

The Popover component is commonly used to display tooltip-style card overlays that can be triggered by click or hover events, with customizable trigger behaviors.

## Code Demos

### Basic Usage

The Popover component can set trigger elements using `children` and set bubble content using `title` and `content`.

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

The visibility of the tooltip layer can be controlled externally using the `open` prop.

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

You can use the `offsetSpacing` prop to set the distance between the tooltip layer and the target element.

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

### Hide Arrow

You can set `hideArrow` to `true` to hide the tooltip layer's arrow.

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

### Position Settings

The `anchorOrigin` prop sets the position of the tooltip layer relative to the anchor. It contains `vertical` and `horizontal` sub-properties:

- `vertical`: Vertical position, options are `top`, `center`, `bottom`
- `horizontal`: Horizontal position, options are `left`, `center`, `right`

The following shows all 9 position combinations:

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

### Trigger Methods

The `trigger` prop can configure different trigger methods for the tooltip layer, supporting click, hover, combined triggers, and manual control.

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
        <button type="button" onClick={() => setManualOpen(!manualOpen)}>
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

### Accessibility Features

The Popover component provides complete accessibility support, including keyboard navigation, screen reader support, focus management, and semantic role settings.

```tsx
import { Popover, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {/* Basic accessibility support */}
      <Popover
        title="Basic Accessibility"
        content="Supports ESC key to close, automatic focus management"
        role="tooltip"
        aria-label="Help information"
      >
        <Button>Basic Accessibility</Button>
      </Popover>

      {/* Dialog mode */}
      <Popover
        title="Dialog Mode"
        content={
          <div>
            <p>This is a dialog mode popover</p>
            <button type="button">Confirm</button>
            <button type="button">Cancel</button>
          </div>
        }
        role="dialog"
        trapFocus
        aria-label="Operation confirmation dialog"
      >
        <Button>Dialog Mode</Button>
      </Popover>

      {/* Menu mode */}
      <Popover
        title="Menu Options"
        content={
          <div>
            <button type="button">Option 1</button>
            <button type="button">Option 2</button>
            <button type="button">Option 3</button>
          </div>
        }
        role="menu"
        trapFocus
        aria-label="Operation menu"
      >
        <Button>Menu Mode</Button>
      </Popover>

      {/* Disable ESC key close */}
      <Popover
        title="Disable ESC Key"
        content="This popover cannot be closed with the ESC key"
        closeOnEscape={false}
      >
        <Button>Disable ESC Key</Button>
      </Popover>
    </div>
  );
};
```

### API

#### PopoverProps

| Property        | Description                      | Type                                                                                   | Default                                   |
| --------------- | -------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------- |
| title           | Title of the tooltip layer       | ReactNode                                                                              | -                                         |
| content         | Content of the tooltip layer     | ReactNode                                                                              | -                                         |
| defaultOpen     | Default visibility               | boolean                                                                                | false                                     |
| open            | Control tooltip layer visibility | boolean                                                                                | -                                         |
| hideArrow       | Whether to hide the arrow        | boolean                                                                                | false                                     |
| offsetSpacing   | Offset from the target element   | number                                                                                 | 0                                         |
| anchorOrigin    | Position relative to anchor      | { vertical: 'top' \| 'center' \| 'bottom', horizontal: 'left' \| 'center' \| 'right' } | { vertical: 'top', horizontal: 'center' } |
| trigger         | Trigger behavior                 | string \| string[], values are 'click' \| 'hover' \| 'none'                           | 'click'                                   |
| onOpenChange    | Callback for visibility changes  | (e: React.MouseEvent<HTMLDivElement\>,data: {open: boolean}) => void                   | -                                         |
| role            | Accessibility: semantic role     | 'tooltip' \| 'dialog' \| 'menu' \| 'listbox'                                           | 'tooltip'                                 |
| aria-label      | Accessibility: popover label     | string                                                                                 | -                                         |
| aria-labelledby | Accessibility: associated label element ID | string                                                                         | -                                         |
| autoFocus       | Accessibility: auto focus on open | boolean                                                                               | true                                      |
| trapFocus       | Accessibility: focus trap        | boolean                                                                                | false                                     |
| closeOnEscape   | Accessibility: close with ESC key | boolean                                                                               | true                                      |

### Style Variables

| Property                        | Description            | Default Value          | Global Variable                    |
| ------------------------------- | ---------------------- | ---------------------- | ---------------------------------- |
| --arrow-size                    | Arrow size             | 8px                    | --bui-popover-arrow-size           |
| --location-position             | Arrow position offset  | 8px                    | --bui-popover-location-position    |
| --max-width                     | Maximum tooltip width  | 350px                  | --bui-popover-max-width            |
| --content-min-width             | Minimum content width  | 30px                   | --bui-popover-content-min-width    |
| --content-padding               | Content padding        | 6px 8px                | --bui-popover-content-padding      |