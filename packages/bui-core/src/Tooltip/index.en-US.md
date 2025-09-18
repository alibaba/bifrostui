````markdown
---
group: Data Display
name: Tooltip
---

# Tooltip

The Tooltip component provides a concise text hint bubble for users, suitable for supplementing explanations of page elements.

## Features

- 🎯 **Flexible Trigger** - Supports multiple trigger methods including click, hover, etc.
- 📍 **Smart Positioning** - 12 position options with automatic adjustment to avoid boundary overflow
- ♿ **Accessibility Support** - Full ARIA support and keyboard navigation
- 🎨 **Highly Customizable** - Allows custom content, styles, and behavior
- 📱 **Cross-platform Compatibility** - Compatible with both H5 and mini program platforms

## When to Use

- When a brief explanation or hint for page elements is needed
- When space is limited and complete information cannot be displayed
- When additional explanation for action buttons or form fields is needed
- To replace the traditional title attribute for better user experience

## Basic Usage

The simplest Tooltip usage, with default click trigger for display/hide toggling.

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip">
      <span>Click to show tooltip</span>
    </Tooltip>
  );
};
```
````

## Controlled Mode

Control the visibility of the Tooltip externally using the `open` prop.

```tsx
import { Tooltip, Button, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Hide' : 'Show'} Tooltip
      </Button>
      <Tooltip title="Controlled Tooltip" open={open}>
        <span>Target Element</span>
      </Tooltip>
    </Stack>
  );
};
```

## Default Display

Set `defaultOpen` to `true` to display the Tooltip by default.

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" defaultOpen>
      <span>Default display with defaultOpen</span>
    </Tooltip>
  );
};
```

### Offset Distance Between Tooltip and Target Element

You can set the offset to control the distance from the target element.

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" offset={20} defaultOpen>
      <span>Offset control (set to 20 for observation)</span>
    </Tooltip>
  );
};
```

### Placement of the Tooltip

Placement sets the position of the tooltip bubble layer, options are top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom.

```tsx
import { Tooltip, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  const packageButton = (inner) => {
    return (
      <Button style={{ borderRadius: 0, marginTop: '4px', width: '80px' }}>
        {inner}
      </Button>
    );
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          marginLeft: '100px',
          justifyContent: 'space-between',
        }}
      >
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="topLeft"
        >
          {packageButton(<span>topLeft</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="top"
        >
          {packageButton(<span>top</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="topRight"
        >
          {packageButton(<span>topRight</span>)}
        </Tooltip>
      </div>
      <div
        style={{
          marginTop: '20px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="leftTop"
        >
          {packageButton(<span>leftTop</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="left"
        >
          {packageButton(<span>left</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="leftBottom"
        >
          {packageButton(<span>leftBottom</span>)}
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: '300px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="rightTop"
        >
          {packageButton(<span>rightTop</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="right"
        >
          {packageButton(<span>right</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="rightBottom"
        >
          {packageButton(<span>rightBottom</span>)}
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: '100px',
          marginTop: '20px',
          display: 'flex',
          width: '300px',
          justifyContent: 'space-between',
        }}
      >
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="bottomLeft"
        >
          {packageButton(<span>bottomLeft</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="bottom"
        >
          {packageButton(<span>bottom</span>)}
        </Tooltip>
        <Tooltip
          trigger={['hover', 'click']}
          title="This is a tooltip"
          placement="bottomRight"
        >
          {packageButton(<span>bottomRight</span>)}
        </Tooltip>
      </div>
    </div>
  );
};
```

### Trigger Method

The trigger method for displaying the bubble, "click" or "hover", default is click.

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" trigger={['hover']}>
      <span>Hover trigger method</span>
    </Tooltip>
  );
};
```

### onOpenChange Callback Method

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  const onOpenChange = (event, data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Tooltip
      title="This is a tooltip"
      trigger="click"
      onOpenChange={onOpenChange}
      placement="bottom"
    >
      <span>onOpenChange Callback Method</span>
    </Tooltip>
  );
};
```

## Accessibility

The Tooltip component is equipped with complete accessibility support to ensure it is usable by both screen reader users and keyboard users.

### Keyboard Navigation

```tsx
import { Tooltip, Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing={2}>
      <Tooltip title="Close with Esc key support" closeOnEscape>
        <Button>Press Esc key to close after opening</Button>
      </Tooltip>
    </Stack>
  );
};
```

### Focus Management

```tsx
import { Tooltip, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="Tooltip content will auto-focus" autoFocus role="dialog">
      <Button>Automatic Focus Management</Button>
    </Tooltip>
  );
};
```

## API

### Tooltip Props

| Attribute    | Description                                                   | Type                                       | Default |
| ------------ | ------------------------------------------------------------- | ------------------------------------------ | ------- |
| title        | Content of the bubble                                         | React.ReactNode                            | -       |
| defaultOpen  | Whether the bubble is visible by default                      | boolean                                    | false   |
| open         | Manually controls bubble visibility                           | boolean                                    | -       |
| offset       | Offset distance (pixels) between the layer and target element | number                                     | 0       |
| placement    | Bubble position                                               | TooltipPlacement                           | 'top'   |
| trigger      | Trigger actions                                               | TooltipTriggerType \| TooltipTriggerType[] | 'click' |
| onOpenChange | Callback method for bubble visibility change                  | (event, data) => void                      | -       |

### Accessibility Attributes

| Attribute       | Description                       | Type                                         | Default   |
| --------------- | --------------------------------- | -------------------------------------------- | --------- |
| role            | ARIA role                         | 'tooltip' \| 'dialog' \| 'status' \| 'alert' | 'tooltip' |
| aria-label      | Accessibility label               | string                                       | -         |
| aria-labelledby | Reference ID of described element | string                                       | -         |
| aria-hidden     | Whether hidden for screen readers | boolean                                      | false     |
| autoFocus       | Whether to automatically focus    | boolean                                      | false     |
| closeOnEscape   | Whether to close with Esc key     | boolean                                      | false     |

### TooltipPlacement

```typescript
type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';
```

### TooltipTriggerType

```typescript
type TooltipTriggerType = 'click' | 'hover';
```

### OnOpenChange Callback

```typescript
interface TooltipOpenChangeData {
  open: boolean;
}

type OnOpenChange = (
  event: React.SyntheticEvent,
  data: TooltipOpenChangeData,
) => void;
```

## Style Variables

| Global Variable                  | Description            | Default   |
| -------------------------------- | ---------------------- | --------- |
| --bui-tooltip-arrow-size         | Arrow size             | `8PX`     |
| --bui-tooltip-location-position  | Location offset        | `8PX`     |
| --bui-tooltip-max-width          | Maximum width          | `350px`   |
| --bui-tooltip-content-min-width  | Minimum content width  | `30px`    |
| --bui-tooltip-content-min-height | Minimum content height | `32px`    |
| --bui-tooltip-content-padding    | Content padding        | `6px 8px` |

```

```
