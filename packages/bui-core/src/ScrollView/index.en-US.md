---

group: Layout
name: ScrollView

# ScrollView

Handles scenarios where scrolling is required within an element, encapsulating events for scrolling and reaching the start or end. It also allows manual control of scroll positions. On the mini-program side, it directly uses Taro's ScrollView component, while on the H5 side, it employs React for implementation, aligning the parameters.

> Mini-program documentation reference: <https://docs.taro.zone/docs/components/viewContainer/scroll-view>

## Basic Usage

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

## Horizontal Scrolling

Pass `scrollX` to enable horizontal scrolling

```tsx
import * as React from 'react';
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

## Events and Control

Use `onScrollToLower`, `onScrollToUpper` to receive callbacks when scrolling reaches the start or end. Pass `scrollTop`/`scrollLeft`, `scrollIntoView` to scroll to the specified coordinates or the element with the corresponding id.

```tsx
import { ScrollView, Button, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const onScrollToLower = () => {
    console.log('Scrolled to the bottom');
  };
  const onScrollToUpper = () => {
    console.log('Scrolled to the top');
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
        Scroll to Top
      </Button>
      <Button
        onClick={() => {
          sId(undefined);
          sH(200);
        }}
      >
        Scroll to 200px
      </Button>
      <Button
        onClick={() => {
          sId('d50');
          sH(undefined);
        }}
      >
        Scroll to [50] text
      </Button>
      <ScrollView
        scrollY
        scrollTop={h}
        scrollIntoView={id}
        scrollIntoViewAlignment={'nearest'}
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

| Property            | Description                                        | Type        | Default |
| ------------------- | -------------------------------------------------- | ----------- | ------- |
| scrollX             | Horizontal scrolling                               | boolean     | false   |
| scrollY             | Vertical scrolling                                 | boolean     | false   |
| upperThreshold      | Threshold for triggering onScrollToUpper           | number      | 50      |
| lowerThreshold      | Threshold for triggering onScrollToLower           | number      | 50      |
| scrollTop           | Set vertical scroll position                       | number      |         |
| scrollLeft          | Set horizontal scroll position                     | number      |         |
| scrollIntoView      | Scroll element with corresponding Id into viewport | string      |         |
| scrollWithAnimation | Enable smooth scrolling                            | boolean     | false   |
| onScrollToUpper     | Callback when scrolled to the top                  | event=>void |         |
| onScrollToLower     | Callback when scrolled to the bottom               | event=>void |         |
| onScroll            | Callback during scrolling                          | event=>void |         |
| onTouchMove         | Callback during touch movement                     | event=>void |         |
