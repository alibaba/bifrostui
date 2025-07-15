---
group: Layout
name: ScrollView Scroll View
---

# ScrollView Scroll View

Used to handle scenarios where scrolling occurs within elements, and it encapsulates events for scrolling as well as reaching the start or end of a scroll. It can also actively control its scroll position.
On the mini-program side, Taro's ScrollView component is used directly, while on the H5 side, it is implemented directly using React and aligns with the parameters.

> Mini-program documentation reference: <https://docs.taro.zone/docs/components/viewContainer/scroll-view>

## Code Examples

### Basic Usage

```tsx
import { ScrollView, Button, Stack } from '@bifrostui/react';
import React from 'react';

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

### Horizontal Scrolling

Pass `scrollX` to enable horizontal scrolling.

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

Use `onScrollToLower`, `onScrollToUpper` to receive callbacks when scrolling reaches the top or bottom.
Pass `scrollTop`/`scrollLeft`, `scrollIntoView` to scroll to a specific coordinate or element by ID.

```tsx
import { ScrollView, Button, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const onScrollToLower = () => {
    console.log('Scrolled to bottom');
  };
  const onScrollToUpper = () => {
    console.log('Scrolled to top');
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
        Back to Top
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
        Scroll to [50] Text
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

## Performance Guidelines

### Handling Large Datasets
To avoid performance issues from rendering a large number of DOM nodes at once, it's recommended to use virtual scrolling techniques or render only the data within the visible viewport.

```tsx
import { ScrollView } from '@bifrostui/react';
import { useMemo, useState } from 'react';

export default () => {
  const allItems = useMemo(() => 
    [...new Array(10000)].map((_, index) => ({ id: index, text: `Item ${index}` }))
  , []);
  
  const [visibleCount, setVisibleCount] = useState(100);

  const onScrollToLower = () => {
    // Load more data when scrolling to the bottom
    setVisibleCount(prev => Math.min(prev + 100, allItems.length));
  };

  return (
    <ScrollView 
      scrollY 
      style={{ height: '400px' }}
      onScrollToLower={onScrollToLower}
    >
      {allItems.slice(0, visibleCount).map(item => (
        <div key={item.id} className="item">{item.text}</div>
      ))}
    </ScrollView>
  );
};
```

## Best Practices

### Scroll Performance
- **Event Throttling**: Avoid expensive computations in the `onScroll` callback. If necessary, use throttling or debouncing to limit the event handling frequency.
- **Animation Duration**: When using `scrollWithAnimation`, set a reasonable `scrollAnimationDuration` to achieve a smooth animation effect.

### Accessibility
- **ARIA Label**: Add a descriptive `aria-label` attribute to the scroll container to enhance screen reader usability.
- **Keyboard Navigation**: Ensure that the content can be scrolled and accessed via the keyboard (e.g., `Tab` and arrow keys).

## API

| Property            | Description                          | Type        | Default |
| ------------------- | ------------------------------------ | ----------- | ------- |
| scrollX             | Enable horizontal scrolling          | boolean     | false   |
| scrollY             | Enable vertical scrolling            | boolean     | false   |
| upperThreshold      | Threshold to trigger onScrollToUpper | number      | 50      |
| lowerThreshold      | Threshold to trigger onScrollToLower | number      | 50      |
| scrollTop           | Set vertical scroll position         | number      |         |
| scrollLeft          | Set horizontal scroll position       | number      |         |
| scrollIntoView      | Scroll an element into view by ID    | string      |         |
| scrollWithAnimation | Enable smooth scrolling              | boolean     | false   |
| onScrollToUpper     | Callback when scrolled to top        | event=>void |         |
| onScrollToLower     | Callback when scrolled to bottom     | event=>void |         |
| onScroll            | Callback during scrolling            | event=>void |         |
| onTouchMove         | Callback during touch movement       | event=>void |         |
