---
group: 布局
name: ScrollView 滚动视图
---

# ScrollView 滚动视图

用于处理元素内部滚动的场景，并封装了滚动以及滚动到首尾的事件回调，也可主动控制其滚动位置
小程序端直接使用了Taro的ScrollView组件，H5端则使用React直接实现并拉齐了入参。

> 小程序文档参考：<https://docs.taro.zone/docs/components/viewContainer/scroll-view>

## 代码演示

### 基础使用

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

### 横向滚动

传入scrollX以进行横向滚动

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

### 事件和控制

使用`onScrollToLower`, `onScrollToUpper`接收滚动到头尾的回调
传入`scrollTop`/`scrollLeft`,`scrollIntoView`以滚动到对应坐标/对应id的元素处

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

| 属性                | 说明                       | 类型        | 默认值 |
| ------------------- | -------------------------- | ----------- | ------ |
| scrollX             | 横向滚动                   | boolean     | false  |
| scrollY             | 纵向滚动                   | boolean     | false  |
| upperThreshold      | 触发onScrollToUpper的阈值  | number      | 50     |
| lowerThreshold      | 触发onScrollToLower的阈值  | number      | 50     |
| scrollTop           | 设置纵向滚动位置           | number      |        |
| scrollLeft          | 设置横向滚动位置           | number      |        |
| scrollIntoView      | 将对应Id的元素滚动到视口中 | string      |        |
| scrollWithAnimation | 启用平滑滚动               | boolean     | false  |
| onScrollToUpper     | 滚动到顶部时的回调         | event=>void |        |
| onScrollToLower     | 滚动到底部时的回调         | event=>void |        |
| onScroll            | 滚动时的回调               | event=>void |        |
| onTouchMove         | 触摸时的回调               | event=>void |        |
