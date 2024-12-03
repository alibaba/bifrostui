---
group: Data Display
name: Tooltip text prompt
---

# Tooltip text prompt

Simple text prompts for bubble boxes.

## Code demonstration

### Basic usage

Clicking with the mouse will display a prompt, and clicking again will disappear. The bubble floating layer does not support complex text and operations.

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip">
      <span>click显示</span>
    </Tooltip>
  );
};
```

### Open external control

External setting of bubble floating layer visibility through open

```tsx
import { Tooltip } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Tooltip title="This is a tooltip" open={open}>
      <span onClick={() => setOpen(!open)}>open控制显隐</span>
    </Tooltip>
  );
};
```

### DefaultOpen default display

You can set defaultOpen to true to display bubble floating layers by default

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" defaultOpen>
      <span>defaultOpen默认显示</span>
    </Tooltip>
  );
};
```

### Placement Bubble Box Position

placement设置气泡浮层的位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom

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

### Trigger triggering method

The triggering method for displaying bubbles is "click" or "hover", with the default being "click"

```tsx
import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" trigger="hover">
      <span>hover触发方式</span>
    </Tooltip>
  );
};
```

### Callback method for bubble floating layer in onOpenChange

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
      <span>onOpenChange 回调方法</span>
    </Tooltip>
  );
};
```

### API

| attribute    | explain                                                                                | type                                                                                                                                                                             | Default value |
| ------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| title        | Bubble floating layer content                                                          | string                                                                                                                                                                           | -             |
| defaultOpen  | Whether to hide by default                                                             | boolean                                                                                                                                                                          | false         |
| open         | Used for manually controlling the appearance and concealment of bubble floating layers | boolean                                                                                                                                                                          | -             |
| placement    | Bubble box position                                                                    | String, the enumeration value is `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` `bottom` | 'top'         |
| trigger      | Trigger behavior                                                                       | string \|String [], the enumeration value is' click '\|'hover'                                                                                                                   | 'click'       |
| onOpenChange | The callback method for bubble floating layer manifestation and concealment            | (e: React.MouseEvent<HTMLDivElement\>,data: {open: boolean}) => void                                                                                                             | -             |

### Style variables

| attribute            | explain                        | Default value | global variable                  |
| -------------------- | ------------------------------ | ------------- | -------------------------------- |
| --arrow-size         | ARROW size                     | 8PX           | --bui-tooltip-arrow-size         |
| --localtion-position | Arrow Position                 | 8PX           | --bui-tooltip-localtion-position |
| --max-width          | Maximum width                  | 350px         | --bui-tooltip-max-width          |
| --content-min-width  | Minimum width of content area  | 30px          | --bui-tooltip-content-min-width  |
| --content-min-height | Minimum height of content area | 32px          | --bui-tooltip-content-min-height |
| --content-padding    | Inner margin of content area   | 6px 8px       | --bui-tooltip-content-padding    |
