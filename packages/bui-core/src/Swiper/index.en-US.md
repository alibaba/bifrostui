---
group: Layout
name: Swiper Slide View Container
---

# Swiper Slide View Container

A slide view container used for creating carousels, paginated displays, and other common layouts. On the mini-program side, Taro's Swiper component is used directly; on the H5 side, Swiper/react is used, aligning the parameters.

> Mini-program documentation reference: <https://taro-docs.jd.com/docs/components/viewContainer/swiper>;
> H5 version is based on Swiper/react v8.x community package, with its properties forwarded. Documentation can be found at: <https://v8.swiperjs.com/swiper-api>

## Basic Swiper

Nest SwiperItem within Swiper to construct a basic slide view container.

```tsx
import * as React from 'react';
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

## Set Current Page

Pass in current to set the current page, and page transitions will be triggered when data changes. To ensure compatibility with both swiping and current control, use the onChange event to sync the current page position.

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

## Auto Switching

Pass in autoplay to enable auto switching. Use interval to control the time between two automatic switches (in milliseconds).

```tsx
import * as React from 'react';
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

## Continuous Scrolling

Pass in circular to allow the container to scroll infinitely in the same direction.

```tsx
import * as React from 'react';
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

## Fade Effects

Pass in effect parameter to choose transition effects.

```tsx
import * as React from 'react';
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

## Vertical Scrolling

Pass in vertical to make the container scroll vertically (instead of horizontally).

```tsx
import * as React from 'react';
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

## Page Indicators

Pass in indicatorDots to enable page indicators (small dots). Use indicatorColor and indicatorActiveColor to set the color of the dots.

```tsx
import * as React from 'react';
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

## Events

The Swiper component supports onChange and onAnimationFinish events. Specific return values can be found in the detail of the corresponding event object.

```tsx
import * as React from 'react';
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

## Accessibility

H5 hides non-visible slides from assistive tech: `watchSlidesProgress` is enabled, and slides without `swiper-slide-visible` get `aria-hidden` + `inert`, so mobile screen readers do not read every card at once.

## API

| Property             | Description                                                           | Type             | Default value |
| -------------------- | --------------------------------------------------------------------- | ---------------- | ------------- |
| current              | Index of the current page                                             | number           | -             |
| autoplay             | Automatic switching                                                   | boolean          | false         |
| interval             | Interval time between automatic switches                              | number           | 5000          |
| duration             | Duration of the transition animation                                  | number           | 500           |
| displayMultipleItems | Number of items displayed per screen                                  | number           | 1             |
| circular             | Circular display                                                      | boolean          | false         |
| vertical             | Vertical mode                                                         | boolean          | false         |
| spaceBetween         | Spacing between two items                                             | number           | -             |
| previousMargin       | Width (height) of the previous item exposed                           | number \| string | -             |
| nextMargin           | Width (height) of the next item exposed                               | number \| string | -             |
| indicatorDots        | Page indicators (small dots)                                          | boolean          | false         |
| indicatorColor       | Color of page indicators for non-current page                         | string           | -             |
| indicatorActiveColor | Color of page indicators for the current page                         | string           | -             |
| onChange             | Callback for switching events (triggered on swipe and switch release) | event=>void      | -             |
| onAnimationFinish    | Callback for animation end (triggered when animation ends)            | event=>void      | -             |

## Style Variables

| Global Variable     | Description | Default Value |
| ------------------- | ----------- | ------------- |
| --bui-swiper-height | Height      | 150px         |
