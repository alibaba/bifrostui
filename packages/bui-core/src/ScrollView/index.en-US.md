---
group: Layout
name: ScrollView Scroll View
---

# ScrollView Scroll View

ScrollView component is used to handle scenarios where scrolling occurs within elements, and it encapsulates events for scrolling as well as reaching the start or end of a scroll. It can also actively control its scroll position. On the mini-program side, Taro's ScrollView component is used directly, while on the H5 side, it is implemented directly using React and aligns with the parameters.

## Code Examples

### Basic Usage

ScrollView component enables vertical or horizontal scrolling by setting the `scrollY` or `scrollX` properties.

```tsx
import { ScrollView, Stack } from '@bifrostui/react';
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

Enable horizontal scrolling functionality by setting the `scrollX` property.

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

### Scroll Events and Control

ScrollView provides rich event callbacks and position control functionality, supporting scrolling to specific positions or elements.

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

## Performance Optimization

ScrollView supports various performance optimization strategies suitable for large data scenarios.

### Large Data Lists

When rendering large amounts of data, to avoid performance issues from rendering a large number of DOM nodes at once, it's recommended to use virtual scrolling techniques or render only the data within the visible viewport.

```tsx
import { ScrollView } from '@bifrostui/react';
import React, { useMemo, useState } from 'react';

export default () => {
  const allItems = useMemo(
    () =>
      [...new Array(10000)].map((_, index) => ({
        id: index,
        text: `Item ${index}`,
      })),
    [],
  );

  const [visibleCount, setVisibleCount] = useState(100);

  const onScrollToLower = () => {
    // Load more data when scrolling to the bottom
    setVisibleCount((prev) => Math.min(prev + 100, allItems.length));
  };

  return (
    <ScrollView
      scrollY
      style={{ height: '400px' }}
      onScrollToLower={onScrollToLower}
    >
      {allItems.slice(0, visibleCount).map((item) => (
        <div key={item.id} className="item">
          {item.text}
        </div>
      ))}
    </ScrollView>
  );
};
```

### Event Optimization

Avoid expensive computations in the `onScroll` callback. If necessary, use throttling or debouncing techniques.

```tsx
import { ScrollView } from '@bifrostui/react';
import React, { useCallback, useState, useRef } from 'react';

export default () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const throttleRef = useRef<number | null>(null);

  const handleScroll = useCallback((event) => {
    if (throttleRef.current) {
      clearTimeout(throttleRef.current);
    }
    throttleRef.current = setTimeout(() => {
      setScrollPosition(event.target.scrollTop);
    }, 16); // Approximately 60fps
  }, []);

  return (
    <ScrollView
      scrollY
      style={{ height: '300px' }}
      onScroll={handleScroll}
    >
      <p>Current scroll position: {scrollPosition}px</p>
      <div style={{ height: '1000px' }}>Long content area</div>
    </ScrollView>
  );
};
```

## Accessibility

ScrollView provides complete accessibility support, ensuring all users can use it properly.

### Keyboard Navigation

ScrollView supports complete keyboard navigation functionality, including arrow keys, page keys, and shortcuts.

```tsx
import { ScrollView } from '@bifrostui/react';
import React from 'react';

export default () => {
  const newsItems = [
    { id: 1, title: 'News Title 1', content: 'News content 1' },
    { id: 2, title: 'News Title 2', content: 'News content 2' },
    { id: 3, title: 'News Title 3', content: 'News content 3' },
  ];

  return (
    <ScrollView
      scrollY
      style={{ height: '300px' }}
      aria-label="News list"
      tabIndex={0}
      autoFocus
    >
      {newsItems.map((item) => (
        <div key={item.id} role="article" style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </ScrollView>
  );
};
```

### ARIA Labels

Proper use of ARIA labels improves screen reader usability.

```tsx
import { ScrollView } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div>
      <h2 id="product-list">Product List</h2>
      <ScrollView
        scrollY
        style={{ height: '300px' }}
        role="region"
        aria-labelledby="product-list"
        tabIndex={0}
      >
        <div role="list">
          <div role="listitem">Product 1</div>
          <div role="listitem">Product 2</div>
          <div role="listitem">Product 3</div>
        </div>
      </ScrollView>
    </div>
  );
};
```

## API

### ScrollViewProps

| Property            | Description                          | Type        | Default |
| ------------------- | ------------------------------------ | ----------- | ------- |
| scrollX             | Enable horizontal scrolling          | boolean     | false   |
| scrollY             | Enable vertical scrolling            | boolean     | false   |
| upperThreshold      | Threshold to trigger onScrollToUpper | number      | 50      |
| lowerThreshold      | Threshold to trigger onScrollToLower | number      | 50      |
| scrollTop           | Set vertical scroll position         | number      | -       |
| scrollLeft          | Set horizontal scroll position       | number      | -       |
| scrollIntoView      | Scroll an element into view by ID    | string      | -       |
| scrollWithAnimation | Enable smooth scrolling              | boolean     | false   |
| onScrollToUpper     | Callback when scrolled to top        | event=>void | -       |
| onScrollToLower     | Callback when scrolled to bottom     | event=>void | -       |
| onScroll            | Callback during scrolling            | event=>void | -       |
| onTouchMove         | Callback during touch movement       | event=>void | -       |

### Accessibility Properties

| Property        | Description                                                       | Type                           | Default  |
| --------------- | ----------------------------------------------------------------- | ------------------------------ | -------- |
| role            | Specifies the element's role for assistive technologies           | string                         | 'region' |
| aria-label      | Provides an accessible name for the element                       | string                         | -        |
| aria-labelledby | References other elements by ID to provide an accessible name     | string                         | -        |
| tabIndex        | Indicates if the scroll view can receive focus for keyboard users | number                         | 0        |
| autoFocus       | Whether to automatically focus the element                        | boolean                        | false    |
| onKeyDown       | Keyboard event handler for supporting keyboard navigation         | (event: KeyboardEvent) => void | -        |

### Keyboard Navigation Support

ScrollView supports the following keyboard shortcuts:

- `↑/↓` Arrow keys: Vertical scrolling (requires scrollY enabled)
- `←/→` Arrow keys: Horizontal scrolling (requires scrollX enabled)
- `Page Up/Page Down`: Page-level scrolling
- `Home/End`: Scroll to beginning/end position
- `Space`: Scroll down one page, `Shift + Space`: Scroll up one page
