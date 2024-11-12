---
group: Data Display
name: Popoover Bubble Card
---

# Popoover Bubble Card

Click or hover triggers a pop-up bubble like card floating layer, which can be customized with events

## Code demonstration

### Basic usage

Clicking with the mouse will display a prompt, and clicking again will disappear. The bubble floating layer does not support complex text and operations.

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a title" content="This is a content">
      <span>click显示</span>
    </Popover>
  );
};
```

### Open external control

External setting of bubble floating layer visibility through open

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" open>
      <span>open控制显隐</span>
    </Popover>
  );
};
```

### DefaultOpen default display

You can set defaultOpen to true to display bubble floating layers by default

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" defaultOpen>
      <span>defaultOpen默认显示</span>
    </Popover>
  );
};
```

### HideArrow arrow display

You can set hideArrow to true to hide arrows

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" defaultOpen hideArrow>
      <span>defaultOpen默认显示</span>
    </Popover>
  );
};
```

### Placement Bubble Box Position

placement设置气泡浮层的位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom

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
        <Popover trigger="hover" title="This is a popover" placement="topLeft">
          {packageButton(<span>topLeft</span>)}
        </Popover>
        <Popover trigger="hover" title="This is a popover" placement="top">
          {packageButton(<span>top</span>)}
        </Popover>
        <Popover trigger="hover" title="This is a popover" placement="topRight">
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
        <Popover trigger="hover" title="This is a popover" placement="leftTop">
          {packageButton(<span>leftTop</span>)}
        </Popover>
        <Popover trigger="hover" title="This is a popover" placement="left">
          {packageButton(<span>left</span>)}
        </Popover>
        <Popover
          trigger="hover"
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
        <Popover trigger="hover" title="This is a popover" placement="rightTop">
          {packageButton(<span>rightTop</span>)}
        </Popover>
        <Popover trigger="hover" title="This is a popover" placement="right">
          {packageButton(<span>right</span>)}
        </Popover>
        <Popover
          trigger="hover"
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
          trigger="hover"
          title="This is a popover"
          placement="bottomLeft"
        >
          {packageButton(<span>bottomLeft</span>)}
        </Popover>
        <Popover trigger="hover" title="This is a popover" placement="bottom">
          {packageButton(<span>bottom</span>)}
        </Popover>
        <Popover
          trigger="hover"
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

### Trigger triggering method

The triggering method for displaying bubbles is "click" or "hover", with the default being "click"

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover title="This is a popover" trigger="hover">
      <span>hover触发方式</span>
    </Popover>
  );
};
```

### Callback method for bubble floating layer in onOpenChange

The triggering method for displaying bubbles is "click" or "hover", with the default being "click"

```tsx
import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  const onOpenChange = (event, data) => {
    alert(JSON.stringify(data));
  };
  return (
    <Popover
      title="This is a popover"
      trigger="hover"
      onOpenChange={onOpenChange}
    >
      <span>onOpenChange 回调方法</span>
    </Popover>
  );
};
```

### API

| attribute    | explain                                                                                | type                                                                                                                                                                             | Default value |
| ------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| title        | Title of Bubble Floating Layer Floating Layer Content                                  | ReactNode                                                                                                                                                                        | -             |
| content      | Content of Bubble Floating Layer                                                       | ReactNode                                                                                                                                                                        | -             |
| children     | The bubble arrow points to the target                                                  | ReactNode                                                                                                                                                                        | -             |
| defaultOpen  | Whether to hide by default                                                             | boolean                                                                                                                                                                          | false         |
| open         | Used for manually controlling the appearance and concealment of bubble floating layers | boolean                                                                                                                                                                          | false         |
| hideArrow    | Display arrows or not                                                                  | boolean                                                                                                                                                                          | false         |
| placement    | Bubble box position                                                                    | String, the enumeration value is `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` `bottom` | 'top'         |
| trigger      | Trigger behavior                                                                       | string \|String [], the enumeration value is' click '\|'hover'                                                                                                                   | 'click'       |
| PortalProps  | Properties of internal Portal components                                               | PortalCoreProps                                                                                                                                                                  | -             |
| onOpenChange | The callback method for bubble floating layer manifestation and concealment            | (e: React.MouseEvent<HTMLDivElement\>,data: {open: boolean}) => void                                                                                                             | -             |

### Style variables

| attribute            | explain                        | Default value | global variable                  |
| -------------------- | ------------------------------ | ------------- | -------------------------------- |
| --arrow-size         | ARROW size                     | 8px           | --bui-popover-arrow-size         |
| --localtion-position | Arrow Position                 | 5px           | --bui-popover-localtion-position |
| --max-width          | Maximum width                  | 350px         | --bui-popover-max-width          |
| --content-min-width  | Minimum width of content area  | 30px          | --bui-popover-content-min-width  |
| --content-min-height | Minimum height of content area | 32px          | --bui-popover-content-min-height |
| --content-padding    | Inner margin of content area   | 6px 8px       | --bui-popover-content-padding    |
