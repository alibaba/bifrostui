---
group: Layout
name: Swiper Slider View Container
---

# Swiper Slider View Container

A slider view container used to create common layouts such as carousels and paginated displays.
In the mini-program, Taro's Swiper component is used directly, while on the H5 end, Swiper/react is used with aligned parameters.

> Mini-program documentation reference: <https://taro-docs.jd.com/docs/components/viewContainer/swiper>;
> For the H5 end, it is encapsulated based on the community swiper/react v8.x, and its properties are passed through. Documentation can be found at: <https://v8.swiperjs.com/swiper-api>

## Code Demonstrations

### Basic Swiper

Embedding SwiperItem inside Swiper constructs a basic slider view container.

```tsx
import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper style={{ width: '300px', height: '200px' }}>
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};
```

### Setting Current Page

Pass `current` to set the current page. When data changes, it triggers a page switch.
If you need to support both sliding and `current` control simultaneously, you also need to use the `onChange` event to synchronize the current page position.

```tsx
import React, { useState } from 'react';
import { Swiper, SwiperItem, Stack, Button } from '@bifrostui/react';

export default () => {
  const [cur, setCur] = useState(1);
  return (
    <>
      <Stack direction="row" spacing="8px">
        <Button onClick={() => setCur(0)}>Switch to 1</Button>
        <Button onClick={() => setCur(1)}>Switch to 2</Button>
        <Button onClick={() => setCur(2)}>Switch to 3</Button>
      </Stack>
      <Swiper
        current={cur}
        onChange={(e) => {
          setCur(e.detail.current);
        }}
        style={{ width: '300px', height: '200px' }}
      >
        <SwiperItem>
          <Stack
            style={{ background: 'lightgray', width: '100%', height: '100%' }}
          >
            1
          </Stack>
        </SwiperItem>
        <SwiperItem>
          <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
            2
          </Stack>
        </SwiperItem>
        <SwiperItem>
          <Stack
            style={{ background: 'darkgray', width: '100%', height: '100%' }}
          >
            3
          </Stack>
        </SwiperItem>
      </Swiper>
    </>
  );
};
```

### Auto Switching

Pass `autoplay` to enable auto-switching.
Use `interval` to control the interval between two automatic switches (in milliseconds).

```tsx
import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper interval={500} autoplay style={{ width: '300px', height: '200px' }}>
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};
```

### Looping Scroll

Pass `circular` to make the container scroll infinitely in one direction.

```tsx
import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      circular
      interval={500}
      autoplay
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};
```

### Fade Effect

Pass the `effect` parameter to choose the transition effect.

```tsx
import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      circular
      interval={500}
      autoplay
      effect={'fade'}
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};
```

### Vertical Scroll

Pass `vertical` to make the container scroll vertically instead of horizontally.

```tsx
import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      vertical
      interval={500}
      autoplay
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};
```

### Page Indicators

Pass `indicatorDots` to enable page indicators (small dots).
Use `indicatorColor` and `indicatorActiveColor` to set the color of the small dots.

```tsx
import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      interval={500}
      autoplay
      indicatorDots
      indicatorColor={'#880000'}
      indicatorActiveColor={'#FF0000'}
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};
```

### Events

Supports `onChange` and `onAnimationFinish` events.
Specific return values are in the detail of the corresponding event object.

```tsx
import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      onChange={console.log}
      onAnimationFinish={console.log}
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};
```

## API

| Property             | Description                          | Type             | Default |
| -------------------- | ------------------------------------ | ---------------- | ------- |
| current              | Index of the current page            | number           | -       |
| autoplay             | Enable auto-switching                | boolean          | false   |
| interval             | Interval for auto-switching          | number           | 5000    |
| duration             | Duration of the switching animation  | number           | 500     |
| displayMultipleItems | Number of items displayed per screen | number           | 1       |
| circular             | Enable circular display              | boolean          | false   |
| vertical             | Vertical mode                        | boolean          | false   |
| spaceBetween         | Spacing between items                | number           | -       |
| previousMargin       | Width (height) of the previous item  | number \| string | -       |
| nextMargin           | Width (height) of the next item      | number \| string | -       |
| indicatorDots        | Enable page indicators (dots)        | boolean          | false   |
| indicatorColor       | Color of non-active page indicators  | string           | -       |
| indicatorActiveColor | Color of active page indicator       | string           | -       |
| onChange             | Callback when switching pages        | event=>void      | -       |
| onAnimationFinish    | Callback when animation finishes     | event=>void      | -       |

## Style Variables

| Property | Description | Default | Global Variable     |
| -------- | ----------- | ------- | ------------------- |
| --height | Height      | 150px   | --bui-swiper-height |
