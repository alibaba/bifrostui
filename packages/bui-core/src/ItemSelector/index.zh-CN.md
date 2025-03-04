---
group: 数据展示
name: ItemSelector Item选择
---

# ItemSelector Item选择

Item选择

## 代码演示

### 基础用法

Item选择展示当前Item、定位Item、热门Item及所有Item，支持右侧字母导航

```tsx
import React from 'react';
import { ItemSelector } from '@bifrostui/react';

const hotItems = [
  {
    code: '110100',
    name: '北京',
  },
  {
    code: '310100',
    name: '上海',
  },
  {
    code: '440100',
    name: '广州',
  },
];

const items = [
  {
    groupName: 'A',
    items: [
      {
        code: '610900',
        name: '安康',
      },
      {
        code: '210300',
        name: '鞍山',
      },
    ],
  },
  {
    groupName: 'B',
    items: [
      {
        code: '652800',
        name: '巴音郭楞',
      },
      {
        code: '511900',
        name: '巴中',
      },
    ],
  },
  {
    groupName: 'C',
    items: [
      {
        code: '130900',
        name: '沧州',
      },
      {
        code: '220100',
        name: '长春',
      },
    ],
  },
  {
    groupName: 'D',
    items: [
      {
        code: '532900',
        name: '大理',
      },
      {
        code: '210200',
        name: '大连',
      },
    ],
  },
];

export default () => {
  const selectedItem = {
    code: '110100',
    name: '北京',
  };
  const currentItem = {
    code: '310100',
    name: '上海',
  };
  const onSelect = (item) => {
    console.log(item);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <ItemSelector
      items={items}
      onSelect={onSelect}
      selectedItem={selectedItem}
      selectedItemGroupName="当前Item"
      currentItem={currentItem}
      currentItemGroupName="定位Item"
      hotItems={hotItems}
      hotItemsGroupName="热门Item"
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};
```

### 不展示导航用法

用户可以设置disableIndex控制右侧字母导航的展示，默认为false，即展示字母导航

```tsx
import React from 'react';
import { ItemSelector } from '@bifrostui/react';

const hotItems = [
  {
    code: '110100',
    name: '北京',
  },
  {
    code: '310100',
    name: '上海',
  },
  {
    code: '440100',
    name: '广州',
  },
];

const items = [
  {
    groupName: 'A',
    items: [
      {
        code: '610900',
        name: '安康',
      },
      {
        code: '210300',
        name: '鞍山',
      },
    ],
  },
  {
    groupName: 'B',
    items: [
      {
        code: '652800',
        name: '巴音郭楞',
      },
      {
        code: '511900',
        name: '巴中',
      },
    ],
  },
  {
    groupName: 'C',
    items: [
      {
        code: '130900',
        name: '沧州',
      },
      {
        code: '220100',
        name: '长春',
      },
    ],
  },
  {
    groupName: 'D',
    items: [
      {
        code: '532900',
        name: '大理',
      },
      {
        code: '210200',
        name: '大连',
      },
    ],
  },
];

export default () => {
  const selectedItem = {
    code: '110100',
    name: '北京',
  };
  const currentItem = {
    code: '310100',
    name: '上海',
  };

  const onSelect = (item) => {
    console.log(item);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <ItemSelector
      items={items}
      onSelect={onSelect}
      selectedItem={selectedItem}
      selectedItemGroupName="当前Item"
      currentItem={currentItem}
      currentItemGroupName="定位Item"
      hotItems={hotItems}
      hotItemsGroupName="热门Item"
      title="选择Item"
      disableIndex
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};
```

### 不展示title和导航用法用法

用户可以设置title来控制头部的展示

```tsx
import React from 'react';
import { ItemSelector } from '@bifrostui/react';

const hotItems = [
  {
    code: '110100',
    name: '北京',
  },
  {
    code: '310100',
    name: '上海',
  },
  {
    code: '440100',
    name: '广州',
  },
];

const items = [
  {
    groupName: 'A',
    items: [
      {
        code: '610900',
        name: '安康',
      },
      {
        code: '210300',
        name: '鞍山',
      },
    ],
  },
  {
    groupName: 'B',
    items: [
      {
        code: '652800',
        name: '巴音郭楞',
      },
      {
        code: '511900',
        name: '巴中',
      },
    ],
  },
  {
    groupName: 'C',
    items: [
      {
        code: '130900',
        name: '沧州',
      },
      {
        code: '220100',
        name: '长春',
      },
    ],
  },
  {
    groupName: 'D',
    items: [
      {
        code: '532900',
        name: '大理',
      },
      {
        code: '210200',
        name: '大连',
      },
    ],
  },
];

export default () => {
  const selectedItem = {
    code: '110100',
    name: '北京',
  };
  const currentItem = {
    code: '310100',
    name: '上海',
  };

  const onSelect = (item) => {
    console.log(item);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <ItemSelector
      items={items}
      onSelect={onSelect}
      selectedItem={selectedItem}
      selectedItemGroupName="当前Item"
      currentItem={currentItem}
      currentItemGroupName="定位Item"
      hotItems={hotItems}
      hotItemsGroupName="热门Item"
      onClose={onHide}
      disableIndex
      style={{ height: '500px' }}
    />
  );
};
```

### API

#### ItemSelectorProps

| 属性                  | 说明                                | 类型                                                 | 默认值     |
| --------------------- | ----------------------------------- | ---------------------------------------------------- | ---------- |
| items                 | Item列表                            | ItemGroup[]                                          | -          |
| onSelect              | 选择Item回调                        | (e: React.SyntheticEvent,data: {item: Item}) => void | -          |
| selectedItem          | 当前Item信息                        | Item                                                 | -          |
| selectedItemGroupName | 当前Item栏的title                   | string                                               | '当前Item' |
| currentItem           | 定位Item信息                        | Item                                                 | -          |
| currentItemGroupName  | 定位Item栏的title                   | string                                               | '定位Item' |
| hotItems              | 热门Item信息                        | Item[]                                               | -          |
| hotItemsGroupName     | 热门Item栏的title                   | string                                               | '热门Item' |
| disableIndex          | 禁用展示索引 默认false 即展示索引   | boolean                                              | false      |
| title                 | 头部title，非必传                   | string                                               | -          |
| onClose               | 和title配合使用，头部右侧的关闭回调 | (e: React.SyntheticEvent) => void                    | -          |

#### ItemGroup

| 属性      | 说明     | 类型   | 默认值 |
| --------- | -------- | ------ | ------ |
| groupName | 分组名   | string | -      |
| items     | Item列表 | Item[] | -      |

#### Item

| 属性 | 说明   | 类型   | 默认值 |
| ---- | ------ | ------ | ------ |
| code | Itemid | string | -      |
| name | Item名 | string | -      |

### 样式变量

| 属性                            | 说明                 | 默认值                         | 全局变量                                          |
| ------------------------------- | -------------------- | ------------------------------ | ------------------------------------------------- |
| --select-item-width             | 横排选项宽度         | 111px                          | --bui-item-selector-item-width                    |
| --select-item-height            | 横排选项高度         | 36px                           | --bui-item-selector-item-height                   |
| --select-item-border-radius     | 横排选项圆角         | 20px                           | --bui-item-selector-item-border-radius            |
| --select-item-margin            | 横排选项外边距       | 4.5px 0 4.5px 9px              | --bui-item-selector-item-margin                   |
| --title-height                  | 标题高度             | 45px                           | --bui-item-selector-title-height                  |
| --title-line-height             | 标题行高             | 45px                           | --bui-item-selector-title-line-height             |
| --btn-close-size                | 关闭按钮容器宽高     | 45px                           | --bui-item-selector-btn-close-size                |
| --btn-close-font-size           | 关闭按钮字号         | 20px                           | --bui-item-selector-btn-close-font-size           |
| --container-with-title-height   | 带标题的Item容器高度 | calc(100% - --title-height)    | --bui-item-selector-container-with-title-height   |
| --item-container-min-height     | Item容器最小高度     | 500px                          | --bui-item-selector-item-container-min-height     |
| --select-item-buttons-padding   | 横排按钮容器内边距   | 7.5px 0 0 3px                  | --bui-item-selector-select-item-buttons-padding   |
| --select-item-title-line-height | Item索引标题栏行高   | 15px                           | --bui-item-selector-select-item-title-line-height |
| --list-item-height              | Item项高度           | 45px                           | --bui-item-selector-list-item-height              |
| --item-index-has-title-top      | Item索引容器距顶距离 | calc(50% + --title-height / 2) | --bui-item-selector-item-index-has-title-top      |
| --index-item-height             | Item索引项高度       | 20px                           | --bui-item-selector-index-item-height             |
