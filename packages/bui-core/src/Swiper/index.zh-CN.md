---
group: 布局
name: Swiper 滑块视图容器
---

# Swiper 滑块视图容器

滑块视图容器，用于制作轮播、分页展示等常用布局。
小程序端直接使用了Taro的Swiper组件，H5端则使用Swiper/react并拉齐了入参。

> 小程序文档参考：<https://taro-docs.jd.com/docs/components/viewContainer/swiper>；
> H5端基于社区 swiper/react v8.x 进行封装，并透传了其属性，文档可参考：<https://v8.swiperjs.com/swiper-api>

## 基础Swiper

Swiper内嵌套SwiperItem即可构建一个基础的滑块视图容器。

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

## 设置当前页

传入current以设置当前页面，当数据变更时会触发页面切换。
如果需要同时兼容滑动和current控制，则还需要使用onChange事件同步当前页面位置。

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

## 自动切换

传入autoplay以启用自动切换。
使用interval控制两次自动切换的间隔时间（单位为毫秒）。

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

## 循环滚动

传入circular使得该容器能够向同一方向无限循环滚动。

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

## 淡入淡出

传入effect参数选择切换效果。

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

## 垂直滚动

传入vertical使得该容器垂直（而非水平）滚动。

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

## 页面指示器

传入indicatorDots启用页面指示器（小圆点）。
使用indicatorColor和indicatorActiveColor设置小圆点的颜色。

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

## 事件

支持onChange和onAnimationFinish事件。
具体返回值在对应事件对象的detail中。

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

| 属性                 | 说明                           | 类型             | 默认值 |
| -------------------- | ------------------------------ | ---------------- | ------ |
| current              | 当前的页面下标                 | number           | -      |
| autoplay             | 自动切换                       | boolean          | false  |
| interval             | 自动切换的间隔时间             | number           | 5000   |
| duration             | 切换动画时间                   | number           | 500    |
| displayMultipleItems | 每屏展示的张数                 | number           | 1      |
| circular             | 循环展示                       | boolean          | false  |
| vertical             | 垂直模式                       | boolean          | false  |
| spaceBetween         | 两张之间的间距                 | number           | -      |
| previousMargin       | 漏出上一张的宽度（高度）       | number \| string | -      |
| nextMargin           | 漏出下一张的宽度（高度）       | number \| string | -      |
| indicatorDots        | 页面指示器（小圆点）           | boolean          | false  |
| indicatorColor       | 页面指示器非当前页的颜色       | string           | -      |
| indicatorActiveColor | 页面指示器当前页的颜色         | string           | -      |
| onChange             | 切换回调（松手和切换时触发）   | event=>void      | -      |
| onAnimationFinish    | 动画结束回调（动画结束时触发） | event=>void      | -      |

## 样式变量

| 全局变量            | 说明 | 默认值 |
| ------------------- | ---- | ------ |
| --bui-swiper-height | 高度 | 150px  |
