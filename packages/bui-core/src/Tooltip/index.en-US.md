---
group: Data Display
name: Tooltip Text Hint
---

# Tooltip Text Hint

A simple text hint bubble.

## Code Demos

### Basic Usage

Clicking the mouse shows the tooltip, clicking again hides it. The bubble overlay does not carry complex text or operations.

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip">
      <span>click to show</span>
    </Tooltip>
  );
};
```

### External Control with `open`

Control the visibility of the bubble overlay externally using `open`.

```tsx
import { Tooltip } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Tooltip title="This is a tooltip" open={open}>
      <span onClick={() => setOpen(!open)}>Control visibility with open</span>
    </Tooltip>
  );
};
```

### Default Visibility with `defaultOpen`

Set `defaultOpen` to `true` to display the bubble overlay by default.

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" defaultOpen>
      <span>Default visibility with defaultOpen</span>
    </Tooltip>
  );
};
```

### Adjusting Distance with `offsetSpacing`

Use `offsetSpacing` to control the distance between the target element and the bubble overlay.

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" offsetSpacing={20} defaultOpen>
      <span>
        Adjust distance with offsetSpacing (set to 20 for observation)
      </span>
    </Tooltip>
  );
};
```

### Setting Placement with `placement`

Use `placement` to set the position of the bubble overlay. Options include `top`, `left`, `right`, `bottom`, `topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `leftTop`, `leftBottom`, `rightTop`, `rightBottom`.

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
        <Tooltip trigger="hover" title="This is a tooltip" placement="topLeft">
          {packageButton(<span>topLeft</span>)}
        </Tooltip>
        <Tooltip trigger="hover" title="This is a tooltip" placement="top">
          {packageButton(<span>top</span>)}
        </Tooltip>
        <Tooltip trigger="hover" title="This is a tooltip" placement="topRight">
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
        <Tooltip trigger="hover" title="This is a tooltip" placement="leftTop">
          {packageButton(<span>leftTop</span>)}
        </Tooltip>
        <Tooltip trigger="hover" title="This is a tooltip" placement="left">
          {packageButton(<span>left</span>)}
        </Tooltip>
        <Tooltip
          trigger="hover"
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
        <Tooltip trigger="hover" title="This is a tooltip" placement="rightTop">
          {packageButton(<span>rightTop</span>)}
        </Tooltip>
        <Tooltip trigger="hover" title="This is a tooltip" placement="right">
          {packageButton(<span>right</span>)}
        </Tooltip>
        <Tooltip
          trigger="hover"
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
          trigger="hover"
          title="This is a tooltip"
          placement="bottomLeft"
        >
          {packageButton(<span>bottomLeft</span>)}
        </Tooltip>
        <Tooltip trigger="hover" title="This is a tooltip" placement="bottom">
          {packageButton(<span>bottom</span>)}
        </Tooltip>
        <Tooltip
          trigger="hover"
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

### Trigger Behavior with `trigger`

Set the trigger behavior for displaying the bubble overlay to either "click" or "hover". Default is "click".

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" trigger={['hover']}>
      <span>Hover trigger</span>
    </Tooltip>
  );
};
```

### Callback Method for Visibility Changes with `onOpenChange`

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
    >
      <span>Callback method for visibility changes</span>
    </Tooltip>
  );
};
```

### API

| Property      | Description                  | Type                                                                                                                                                           | Default |
| ------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| title         | Bubble overlay content       | string                                                                                                                                                         | -       |
| defaultOpen   | Default visibility           | boolean                                                                                                                                                        | false   |
| open          | Manual control of visibility | boolean                                                                                                                                                        | -       |
| offsetSpacing | Offset from target element   | number                                                                                                                                                         | 0       |
| placement     | Position of the bubble       | string, enum values are `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | 'top'   |
| trigger       | Trigger behavior             | string \| string[], enum values are 'click' \| 'hover'                                                                                                         | 'click' |
| onOpenChange  | Callback for visibility      | (e: React.MouseEvent<HTMLDivElement\>,data: {open: boolean}) => void                                                                                           | -       |

### Style Variables

| Property             | Description            | Default Value | Global Variable                  |
| -------------------- | ---------------------- | ------------- | -------------------------------- |
| --arrow-size         | Arrow size             | 8PX           | --bui-tooltip-arrow-size         |
| --localtion-position | Arrow position         | 8PX           | --bui-tooltip-localtion-position |
| --max-width          | Maximum width          | 350px         | --bui-tooltip-max-width          |
| --content-min-width  | Minimum content width  | 30px          | --bui-tooltip-content-min-width  |
| --content-min-height | Minimum content height | 32px          | --bui-tooltip-content-min-height |
| --content-padding    | Content padding        | 6px 8px       | --bui-tooltip-content-padding    |
