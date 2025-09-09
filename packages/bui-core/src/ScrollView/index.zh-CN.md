---
group: 布局
name: ScrollView 滚动视图
---

# ScrollView 滚动视图

ScrollView 组件用于处理元素内部滚动的场景，并封装了滚动以及滚动到首尾的事件回调，也可主动控制其滚动位置。小程序端直接使用了 Taro 的 ScrollView 组件，H5 端则使用 React 直接实现并拉齐了入参。

## 基本用法

ScrollView 组件通过设置 `scrollY` 或 `scrollX` 属性来启用垂直或水平滚动。

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

## 横向滚动

通过设置 `scrollX` 属性启用水平滚动功能。

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

## 滚动事件与控制

ScrollView 提供了丰富的事件回调和位置控制功能，支持滚动到指定位置或元素。

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

## 性能优化

ScrollView 支持多种性能优化策略，适用于大数据量场景。

### 大数据列表

当渲染大量数据时，为了避免一次性渲染大量 DOM 节点导致性能问题，建议结合虚拟滚动技术或只渲染可视区域内的数据。

```tsx
import { ScrollView } from '@bifrostui/react';
import React, { useMemo, useState } from 'react';

export default () => {
  const allItems = useMemo(
    () =>
      [...new Array(10000)].map((_, index) => ({
        id: index,
        text: `项目 ${index}`,
      })),
    [],
  );

  const [visibleCount, setVisibleCount] = useState(100);

  const onScrollToLower = () => {
    // 滚动到底部时加载更多数据
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

### 事件优化

避免在 `onScroll` 回调中执行昂贵的计算，如需要请使用节流或防抖技术。

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
    }, 16); // 约60fps
  }, []);

  return (
    <ScrollView
      scrollY
      style={{ height: '300px' }}
      onScroll={handleScroll}
    >
      <p>当前滚动位置: {scrollPosition}px</p>
      <div style={{ height: '1000px' }}>长内容区域</div>
    </ScrollView>
  );
};
```

## 无障碍访问

ScrollView 提供了完整的无障碍访问支持，确保所有用户都能正常使用。

### 键盘导航

ScrollView 支持完整的键盘导航功能，包括箭头键、页面键和快捷键。

```tsx
import { ScrollView } from '@bifrostui/react';
import React from 'react';

export default () => {
  const newsItems = [
    { id: 1, title: '新闻标题 1', content: '新闻内容 1' },
    { id: 2, title: '新闻标题 2', content: '新闻内容 2' },
    { id: 3, title: '新闻标题 3', content: '新闻内容 3' },
  ];

  return (
    <ScrollView
      scrollY
      style={{ height: '300px' }}
      aria-label="新闻列表"
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

### ARIA 标签

合理使用 ARIA 标签提升屏幕阅读器的可用性。

```tsx
import { ScrollView } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div>
      <h2 id="product-list">产品列表</h2>
      <ScrollView
        scrollY
        style={{ height: '300px' }}
        role="region"
        aria-labelledby="product-list"
        tabIndex={0}
      >
        <div role="list">
          <div role="listitem">产品 1</div>
          <div role="listitem">产品 2</div>
          <div role="listitem">产品 3</div>
        </div>
      </ScrollView>
    </div>
  );
};
```

## API

### ScrollViewProps

| 属性                | 说明                       | 类型        | 默认值 |
| ------------------- | -------------------------- | ----------- | ------ |
| scrollX             | 横向滚动                   | boolean     | false  |
| scrollY             | 纵向滚动                   | boolean     | false  |
| upperThreshold      | 触发onScrollToUpper的阈值  | number      | 50     |
| lowerThreshold      | 触发onScrollToLower的阈值  | number      | 50     |
| scrollTop           | 设置纵向滚动位置           | number      | -      |
| scrollLeft          | 设置横向滚动位置           | number      | -      |
| scrollIntoView      | 将对应Id的元素滚动到视口中 | string      | -      |
| scrollWithAnimation | 启用平滑滚动               | boolean     | false  |
| onScrollToUpper     | 滚动到顶部时的回调         | event=>void | -      |
| onScrollToLower     | 滚动到底部时的回调         | event=>void | -      |
| onScroll            | 滚动时的回调               | event=>void | -      |
| onTouchMove         | 触摸时的回调               | event=>void | -      |

### 无障碍功能属性

| 属性            | 说明                                           | 类型                           | 默认值   |
| --------------- | ---------------------------------------------- | ------------------------------ | -------- |
| role            | 指定元素的角色，用于辅助技术识别元素类型       | string                         | 'region' |
| aria-label      | 为元素提供可访问的名称，用于屏幕阅读器         | string                         | -        |
| aria-labelledby | 通过引用其他元素的ID来提供可访问的名称         | string                         | -        |
| tabIndex        | 指示滚动视图是否可获取焦点，为键盘用户提供访问 | number                         | 0        |
| autoFocus       | 是否自动获取焦点                               | boolean                        | false    |
| onKeyDown       | 键盘事件处理器，用于支持键盘导航               | (event: KeyboardEvent) => void | -        |

### 键盘导航支持

ScrollView 支持以下键盘快捷键：

- `↑/↓` 箭头键：垂直滚动（需启用 scrollY）
- `←/→` 箭头键：水平滚动（需启用 scrollX）
- `Page Up/Page Down`：页面级滚动
- `Home/End`：滚动到开始/结束位置
- `Space`：向下滚动一页，`Shift + Space`：向上滚动一页
