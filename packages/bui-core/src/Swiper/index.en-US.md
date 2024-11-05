---
group: layout
name: Swiper
---

# Swiper

A slider view container used for creating commonly used layouts such as slideshows and pagination displays.
The mini program side directly used Taro's Swiper component, while the H5 side used Swiper/react and aligned the input parameters.

> Mini program documentation reference:< https://taro-docs.jd.com/docs/components/viewContainer/swiper >

## Code demonstration

### Basic Swiper

By embedding the SwiperItem into the Swiper, you can build a basic slider view container.

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

### Set current page

Pass in current to set the current page, which will trigger page switching when data changes.
If you need to be compatible with both sliding and current control, you also need to use the nChange event to synchronize the current page position.

```tsx
import React, { useState } from 'react';
import { Swiper, SwiperItem, Stack, Button } from '@bifrostui/react';

export default () => {
  const [cur, setCur] = useState(1);
  return (
    <>
      <Stack direction="row" spacing="8px">
        <Button onClick={() => setCur(0)}>切换到1</Button>
        <Button onClick={() => setCur(1)}>切换到2</Button>
        <Button onClick={() => setCur(2)}>切换到3</Button>
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

### Automatic switching

Pass in autoplay to enable automatic switching.
Use interval to control the interval time (in milliseconds) between two automatic switches.

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

### Loop scrolling

Passing in circular allows the container to roll infinitely in the same direction.

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

### Fade in and fade out

Pass in the effect parameter to select the switching effect.

```tsx
import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      circular
      interval={500}
      autoplay
      effect="fade"
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

### Vertical scrolling

Pass in vertical to make the container roll vertically (rather than horizontally).

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

### Page indicator

Pass in the indicator dots to enable page indicators (small dots).
Use indicator Color and indicator ActiveColor to set the color of small dots.

```tsx
import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      interval={500}
      autoplay
      indicatorDots
      indicatorColor="#880000"
      indicatorActiveColor="#FF0000"
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

### event

Support ONChange and onAnimationFinish events.
The specific return value is in the detail of the corresponding event object.

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

| attribute            | explain                                                        | type             | Default value |
| -------------------- | -------------------------------------------------------------- | ---------------- | ------------- |
| current              | Current page index                                             | number           | -             |
| autoplay             | Automatic switching                                            | boolean          | false         |
| interval             | Interval time for automatic switching                          | number           | 5000          |
| duration             | Switch animation time                                          | number           | 500           |
| displayMultipleItems | Number of images displayed on each screen                      | number           | 1             |
| circular             | Circular display                                               | boolean          | false         |
| vertical             | Vertical mode                                                  | boolean          | false         |
| spaceBetween         | The distance between two sheets                                | number           | -             |
| previousMargin       | Leakage of the width (height) of the previous sheet            | number \| string | -             |
| nextMargin           | Leakage of the width (height) of the next sheet                | number \| string | -             |
| indicatorDots        | Page indicator (small dot)                                     | boolean          | false         |
| indicatorColor       | Page indicator is not the color of the current page            | string           | -             |
| indicatorActiveColor | Page indicator: The color of the current page                  | string           | -             |
| onChange             | Switching callback (triggered when releasing and switching)    | event=>void      | -             |
| onAnimationFinish    | Animation end callback (triggered at the end of the animation) | event=>void      | -             |

## Style variables

| attribute | explain | Default value | global variable     |
| --------- | ------- | ------------- | ------------------- |
| --height  | height  | 150px         | --bui-swiper-height |
