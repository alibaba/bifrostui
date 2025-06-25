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
      placement="topLeft"
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

### Default Visibility (`defaultOpen`)

You can set `defaultOpen` to `true` to display the tooltip layer by default.

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" defaultOpen>
      <span>Default visible</span>
    </Popover>
  );
};
```

### Offset Spacing Between Layer and Target Element

Set `offsetSpacing` to control the distance between the target element and the tooltip layer.

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" offsetSpacing={20} defaultOpen>
      <span>Offset spacing control (set to 20 for observation)</span>
    </Popover>
  );
};
```

### Hide Arrow

Set `hideArrow` to `true` to hide the arrow.

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" defaultOpen hideArrow>
      <span>Default visible</span>
    </Popover>
  );
};
```

### Placement of Tooltip Box

Set `placement` to position the tooltip layer. Available values are: `top`, `left`, `right`, `bottom`, `topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `leftTop`, `leftBottom`, `rightTop`, `rightBottom`.

```tsx
import { Popover, Button } from '@bifrostui/react';
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
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="topLeft"
        >
          {packageButton(<span>topLeft</span>)}
        </Popover>
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="top"
        >
          {packageButton(<span>top</span>)}
        </Popover>
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="topRight"
        >
          {packageButton(<span>topRight</span>)}
        </Popover>
      </div>
      <div
        style={{
          marginTop: '20px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="leftTop"
        >
          {packageButton(<span>leftTop</span>)}
        </Popover>
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="left"
        >
          {packageButton(<span>left</span>)}
        </Popover>
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="leftBottom"
        >
          {packageButton(<span>leftBottom</span>)}
        </Popover>
      </div>
      <div
        style={{
          marginLeft: '300px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="rightTop"
        >
          {packageButton(<span>rightTop</span>)}
        </Popover>
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="right"
        >
          {packageButton(<span>right</span>)}
        </Popover>
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="rightBottom"
        >
          {packageButton(<span>rightBottom</span>)}
        </Popover>
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
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="bottomLeft"
        >
          {packageButton(<span>bottomLeft</span>)}
        </Popover>
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="bottom"
        >
          {packageButton(<span>bottom</span>)}
        </Popover>
        <Popover
          trigger={['hover', 'click']}
          title="This is a popover"
          placement="bottomRight"
        >
          {packageButton(<span>bottomRight</span>)}
        </Popover>
      </div>
    </div>
  );
};
```

### Trigger Method

The method to show the tooltip can be "click" or "hover", default is "click".

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" trigger="hover">
      <span>Hover trigger method</span>
    </Popover>
  );
};
```

### Callback Method on Tooltip Visibility Change

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  const onOpenChange = (event, data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Popover
      title="This is a popover"
      trigger={['hover', 'click']}
      onOpenChange={onOpenChange}
    >
      <span>Callback method for visibility change</span>
    </Popover>
  );
};
```

### API

| Property      | Description                           | Type                                                                                                                                                        | Default |
| ------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| title         | Title of the tooltip layer            | ReactNode                                                                                                                                                   | -       |
| content       | Content of the tooltip layer          | ReactNode                                                                                                                                                   | -       |
| defaultOpen   | Whether it is visible by default      | boolean                                                                                                                                                     | false   |
| open          | Manually control visibility           | boolean                                                                                                                                                     | -       |
| hideArrow     | Whether to show the arrow             | boolean                                                                                                                                                     | false   |
| offsetSpacing | Offset between the layer and target   | number                                                                                                                                                      | 0       |
| placement     | Position of the tooltip box           | string, enum values: `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | 'top'   |
| trigger       | Trigger behavior                      | string \| string[], enum values: 'click' \| 'hover'                                                                                                         | 'click' |
| onOpenChange  | Callback method for visibility change | (e: React.MouseEvent<HTMLDivElement\>,data: {open: boolean}) => void                                                                                        | -       |

### Style Variables

| Property             | Description                    | Default Value | Global Variable                  |
| -------------------- | ------------------------------ | ------------- | -------------------------------- |
| --arrow-size         | Arrow size                     | 8PX           | --bui-popover-arrow-size         |
| --localtion-position | Arrow position                 | 8PX           | --bui-popover-localtion-position |
| --max-width          | Maximum width                  | 350px         | --bui-popover-max-width          |
| --content-min-width  | Minimum width of content area  | 30px          | --bui-popover-content-min-width  |
| --content-min-height | Minimum height of content area | 32px          | --bui-popover-content-min-height |
| --content-padding    | Padding inside content area    | 0             | --bui-popover-content-padding    |
