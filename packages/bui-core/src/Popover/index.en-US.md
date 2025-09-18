---
group: Data Display
name: Popover Card
---

# Popover Card

The Popover component is commonly used to display bubble-style card overlays, triggered by click or hover, with customizable trigger events.

## Basic Usage

The Popover component can use `children` to set the trigger element, and `title` and `content` to set the bubble content.

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
      <span>click to display</span>
    </Popover>
  );
};
```

## External Control of Visibility

The display and hide of the bubble overlay can be externally controlled via the `open` property.

```tsx
import { Popover } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Popover title="This is a popover" open={open}>
      <span onClick={() => setOpen(!open)}>open control visibility</span>
    </Popover>
  );
};
```

## Default Display

Setting `defaultOpen` to `true` allows the bubble overlay to be displayed by default.

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" defaultOpen>
      <span>defaultOpen display by default</span>
    </Popover>
  );
};
```

## Offset Distance

The `offsetSpacing` property can be used to set the distance between the bubble overlay and the target element.

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" offsetSpacing={20} defaultOpen>
      <span>
        offsetSpacing controls target spacing (set to 20 for observation)
      </span>
    </Popover>
  );
};
```

## Hide Arrow

Setting `hideArrow` to `true` hides the arrow of the bubble overlay.

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" defaultOpen hideArrow>
      <span>defaultOpen display by default</span>
    </Popover>
  );
};
```

## Positioning Setting

The `anchorOrigin` property can be used to set the position of the bubble overlay relative to the anchor point. This property includes two sub-properties: `vertical` and `horizontal`.

- `vertical`: Vertical position, options are `top`, `center`, `bottom`.
- `horizontal`: Horizontal position, options are `left`, `center`, `right`.

Below are all 9 position combinations:

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
            width: '100px',
            height: '40px',
            margin: '4px',
            fontSize: '12px',
          }}
        >
          {text}
        </Button>
      </Popover>
    );
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px',
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: '#fafafa',
      }}
    >
      {/* First row: top */}
      {createButton('top + left', { vertical: 'top', horizontal: 'left' })}
      {createButton('top + center', { vertical: 'top', horizontal: 'center' })}
      {createButton('top + right', { vertical: 'top', horizontal: 'right' })}

      {/* Second row: center */}
      {createButton('center + left', {
        vertical: 'center',
        horizontal: 'left',
      })}
      {createButton('center + center', {
        vertical: 'center',
        horizontal: 'center',
      })}
      {createButton('center + right', {
        vertical: 'center',
        horizontal: 'right',
      })}

      {/* Third row: bottom */}
      {createButton('bottom + left', {
        vertical: 'bottom',
        horizontal: 'left',
      })}
      {createButton('bottom + center', {
        vertical: 'bottom',
        horizontal: 'center',
      })}
      {createButton('bottom + right', {
        vertical: 'bottom',
        horizontal: 'right',
      })}
    </div>
  );
};
```

## Trigger Mode

The `trigger` property can be used to configure the trigger mode of the bubble overlay which supports click, hover, combination trigger, and manual control.

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
          content="triggered by onClick"
          trigger="click"
        >
          <span>click trigger</span>
        </Popover>
      </p>
      <p>
        <Popover
          title="This is a popover"
          content="triggered by hover"
          trigger="hover"
        >
          <span>hover trigger</span>
        </Popover>
      </p>
      <p>
        <Popover
          title="This is a popover"
          content="triggered by both click and hover"
          trigger={['click', 'hover']}
        >
          <span>click or hover trigger</span>
        </Popover>
      </p>
      <p>
        <button type="button" onClick={() => setManualOpen(!manualOpen)}>
          External Control Button{' '}
          {manualOpen ? '(Click to hide)' : '(Click to show)'}
        </button>
        <Popover
          title="Fully Manual Control"
          content="This bubble is fully controlled externally and does not respond to any automatic trigger events"
          trigger="none"
          open={manualOpen}
        >
          <span style={{ marginLeft: '10px' }}>
            none trigger (external control)
          </span>
        </Popover>
      </p>
    </div>
  );
};
```

## Accessibility

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
        content="Supports closing with ESC key, automatic focus management"
        role="tooltip"
        aria-label="Help information"
        closeOnEscape
      >
        <Button>Basic Accessibility</Button>
      </Popover>

      {/* Dialog Mode */}
      <Popover
        title="Dialog Mode"
        content={
          <div>
            <p>This is a bubble in dialog mode</p>
            <button type="button">OK</button>
            <button type="button">Cancel</button>
          </div>
        }
        role="dialog"
        aria-label="Operation confirmation dialog"
      >
        <Button>Dialog Mode</Button>
      </Popover>

      {/* Menu Mode */}
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
        aria-label="Operation menu"
      >
        <Button>Menu Mode</Button>
      </Popover>

      {/* Disable ESC Key Closing */}
      <Popover
        title="Disable ESC Key"
        content="This bubble cannot be closed with the ESC key"
        closeOnEscape={false}
      >
        <Button>Disable ESC Key</Button>
      </Popover>
    </div>
  );
};
```

## API

### PopoverProps

| Property        | Description                                                  | Type                                                                                   | Default Value                             |
| --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ----------------------------------------- |
| title           | Title of the bubble overlay                                  | ReactNode                                                                              | -                                         |
| content         | Content of the bubble overlay                                | ReactNode                                                                              | -                                         |
| defaultOpen     | Display by default                                           | boolean                                                                                | false                                     |
| open            | Manually control the visibility of the bubble overlay        | boolean                                                                                | -                                         |
| hideArrow       | Whether to hide the arrow                                    | boolean                                                                                | false                                     |
| offsetSpacing   | Offset distance between the overlay and the target element   | number                                                                                 | 0                                         |
| anchorOrigin    | Position of the bubble relative to the anchor point          | { vertical: 'top' \| 'center' \| 'bottom', horizontal: 'left' \| 'center' \| 'right' } | { vertical: 'top', horizontal: 'center' } |
| trigger         | Trigger behavior                                             | string \| string[]; options are 'click' \| 'hover' \| 'none'                           | 'click'                                   |
| onOpenChange    | Callback method for visibility changes of the bubble overlay | (e: React.MouseEvent<HTMLDivElement\>, data: {open: boolean}) => void                  | -                                         |
| role            | Accessibility: Semantic role of the bubble                   | 'tooltip' \| 'dialog' \| 'menu' \| 'listbox'                                           | 'tooltip'                                 |
| aria-label      | Accessibility: Label for the bubble                          | string                                                                                 | -                                         |
| aria-labelledby | Accessibility: Associated label element ID                   | string                                                                                 | -                                         |
| autoFocus       | Accessibility: Automatic focus upon opening                  | boolean                                                                                | false                                     |
| closeOnEscape   | Accessibility: Close with ESC key                            | boolean                                                                                | false                                     |

### Style Variables

| Property            | Description                  | Default Value | Global Variable                 |
| ------------------- | ---------------------------- | ------------- | ------------------------------- |
| --arrow-size        | Arrow size                   | 8px           | --bui-popover-arrow-size        |
| --location-position | Arrow position offset        | 8px           | --bui-popover-location-position |
| --max-width         | Maximum width of the bubble  | 350px         | --bui-popover-max-width         |
| --content-min-width | Minimum width of the content | 30px          | --bui-popover-content-min-width |
| --content-padding   | Content padding              | 6px 8px       | --bui-popover-content-padding   |

```

```
