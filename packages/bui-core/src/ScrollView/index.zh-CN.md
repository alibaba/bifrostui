---
group: 布局
name: ScrollView 滚动视图
---

# ScrollView 滚动视图

用于处理元素内部滚动的场景，并封装了滚动以及滚动到首尾的事件回调，也可主动控制其滚动位置
小程序端直接使用了Taro的ScrollView组件，H5端则使用React直接实现并拉齐了入参。

> 小程序文档参考：<https://docs.taro.zone/docs/components/viewContainer/scroll-view>

## 基础使用

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

## 事件和控制

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

## 性能优化建议

### 大数据列表优化

当渲染大量数据时，为了避免一次性渲染大量DOM节点导致性能问题，建议结合虚拟滚动技术或只渲染可视区域内的数据。

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

## 最佳实践

### 滚动性能

- **事件节流**: 避免在`onScroll`回调中执行昂贵的计算。如果需要，请使用节流（throttle）或防抖（debounce）来限制事件处理频率。
- **动画时长**: 使用`scrollWithAnimation`时，请合理设置`scrollAnimationDuration`以获得流畅的动画效果。

### 无障碍访问 (Accessibility)

- **ARIA Label**: 为滚动容器添加描述性的`aria-label`属性，以增强屏幕阅读器的可用性。
- **键盘导航**: 确保内容可以通过键盘进行滚动和访问，支持以下快捷键：
  - `↑/↓` 箭头键：垂直滚动（需启用 scrollY）
  - `←/→` 箭头键：水平滚动（需启用 scrollX）
  - `Page Up/Page Down`：页面级滚动
  - `Home/End`：滚动到开始/结束位置
  - `Space`：向下滚动一页，`Shift + Space`：向上滚动一页
- **自动焦点**: 使用 `autoFocus` 属性自动将焦点设置到滚动容器
- **角色定义**: 使用 `role` 属性定义元素的语义角色，默认为 `region`

```tsx
// 无障碍访问示例
import { ScrollView } from '@bifrostui/react';
import React from 'react';

export default () => {
  const newsItems = [
    { id: 1, title: '新闻标题 1' },
    { id: 2, title: '新闻标题 2' },
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
        <div key={item.id} role="article">
          {item.title}
        </div>
      ))}
    </ScrollView>
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

### 无障碍功能属性

| 属性            | 说明                                           | 类型                           | 默认值   |
| --------------- | ---------------------------------------------- | ------------------------------ | -------- |
| role            | 指定元素的角色，用于辅助技术识别元素类型       | string                         | 'region' |
| aria-label      | 为元素提供可访问的名称，用于屏幕阅读器         | string                         |          |
| aria-labelledby | 通过引用其他元素的ID来提供可访问的名称         | string                         |          |
| tabIndex        | 指示滚动视图是否可获取焦点，为键盘用户提供访问 | number                         | 0        |
| autoFocus       | 是否自动获取焦点                               | boolean                        | false    |
| onKeyDown       | 键盘事件处理器，用于支持键盘导航               | (event: KeyboardEvent) => void |          |
