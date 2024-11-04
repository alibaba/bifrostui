---
group: layout
name: ScrollView
---

# ScrollView

Used to handle scenes of internal element scrolling, and encapsulates scrolling and event callbacks for scrolling to the beginning and end, as well as actively controlling its scrolling position
The mini program side directly uses Taro's ScrollView component, while the H5 side uses React to directly implement and align the input parameters.

> Mini program documentation reference:< https://docs.taro.zone/docs/components/viewContainer/scroll-view >

## Code demonstration

### Basic usage

```tsx
import { ScrollView, Button, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  return (
    <Stack>
      <ScrollView scrollY style={{ width: '100%', height: '400px' }}>
        {[...new Array(100)].map((_, index) => (
          <div className="item" key={index}>
            {index}
          </div>
        ))}
      </ScrollView>
    </Stack>
  );
};
```

### Horizontal scrolling

Pass in scrollX for horizontal scrolling

```tsx
import React from 'react';
import { ScrollView, Stack } from '@bifrostui/react';

export default () => {
  return (
    <ScrollView scrollX style={{ width: '50vw' }}>
      <Stack
        direction="row"
        spacing="8px"
        flexWrap="nowrap"
        style={{ width: 'max-content' }}
      >
        {[...new Array(100)].map((_, index) => (
          <div className="item" style={{ marginRight: '10px' }} key={index}>
            {index}
          </div>
        ))}
      </Stack>
    </ScrollView>
  );
};
```

### Events and Control

Use`onScrollToLower`,`onScrollToUpper` roll back to the beginning and end of the callback
Afferent`scrollTop`/`scrollLeft`,`scrollIntoView` scroll to the element corresponding to the coordinate/id

```tsx
import { ScrollView, Button, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const onScrollToLower = () => {
    console.log('滚动到底部了');
  };
  const onScrollToUpper = () => {
    console.log('滚动到顶部了');
  };
  const [h, sH] = useState(undefined);
  const [id, sId] = useState(undefined);
  return (
    <Stack>
      <Button
        onClick={() => {
          sId(undefined);
          sH(0);
        }}
      >
        回到顶部
      </Button>
      <Button
        onClick={() => {
          sId(undefined);
          sH(200);
        }}
      >
        滚动到200px
      </Button>
      <Button
        onClick={() => {
          sId('d50');
          sH(undefined);
        }}
      >
        滚动到[50]文本处
      </Button>
      <ScrollView
        scrollY
        scrollTop={h}
        scrollIntoView={id}
        scrollIntoViewAlignment="nearest"
        onScrollToLower={onScrollToLower}
        onScrollToUpper={onScrollToUpper}
        onScroll={(e) => {
          console.log(e);
          sId(undefined);
          sH(undefined);
        }}
        scrollWithAnimation
        style={{ width: '100%', height: '400px' }}
      >
        {[...new Array(100)].map((_, index) => (
          <div className="item" key={index} id={`d${index}`}>
            {index}
          </div>
        ))}
      </ScrollView>
    </Stack>
  );
};
```

## API

| attribute           | explain                                                  | type        | Default value |
| ------------------- | -------------------------------------------------------- | ----------- | ------------- |
| scrollX             | Horizontal scrolling                                     | boolean     | false         |
| scrollY             | Vertical scrolling                                       | boolean     | false         |
| upperThreshold      | Trigger the threshold for onScrollToUpper                | number      | 50            |
| lowerThreshold      | Trigger the threshold for onCrollToLower                 | number      | 50            |
| scrollTop           | Set vertical scrolling position                          | number      |               |
| scrollLeft          | Set the horizontal scrolling position                    | number      |               |
| scrollIntoView      | Scroll the element corresponding to Id into the viewport | string      |               |
| scrollWithAnimation | Enable smooth scrolling                                  | boolean     | false         |
| onScrollToUpper     | The callback when scrolling to the top                   | event=>void |               |
| onScrollToLower     | Callback when scrolling to the bottom                    | event=>void |               |
| onScroll            | Callback during scrolling                                | event=>void |               |
| onTouchMove         | Callback upon touch                                      | event=>void |               |
