---
group: Data Display
name: Itemselector Item Selection
---

# Itemselector Item Selection

Item selection

### Basic usage

Item selection displays the current item, location item, popular items, and all items, supporting right-hand letter navigation

```tsx
import React from 'react';
import { ItemSelector } from '@bifrostui/react';

const items = [
  {
    groupName: '当前城市',
    indexName: '当前',
    indexCode: 'CRT',
    isFlat: true,
    items: [
      {
        code: '310100',
        name: '上海',
      },
    ],
  },
  {
    groupName: '定位城市',
    indexName: '定位',
    indexCode: 'POS',
    isFlat: true,
    items: [
      {
        code: '110100',
        name: '北京',
      },
    ],
  },
  {
    groupName: '热门城市',
    indexName: '常用',
    indexCode: 'HOT',
    isFlat: true,
    items: [
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
    ],
  },
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
  const onSelect = (e, item) => {
    console.log(item);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <ItemSelector
      items={items}
      onSelect={onSelect}
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};
```

### Custom Index

Users can customize indexName|indexCode to control the display copy of the letter navigation on the right

```tsx
import React from 'react';
import { ItemSelector } from '@bifrostui/react';

const items = [
  {
    groupName: 'Fruit',
    indexName: '果',
    indexCode: 'FRT',
    items: [
      {
        name: 'Bannar',
      },
      {
        name: 'Apple',
      },
      {
        name: 'Grape',
      },
      {
        name: 'Pear',
      },
      {
        name: 'Orange',
      },
      {
        name: 'Pineapple',
      },
      {
        name: 'Kiwi',
      },
      {
        name: 'Watermelon',
      },
    ],
  },
  {
    groupName: '交通工具',
    indexName: '通',
    indexCode: 'TFC',
    items: [
      {
        name: '汽车',
      },
      {
        name: '飞机',
      },
      {
        name: '火车',
      },
      {
        name: '卡车',
      },
      {
        name: '轮船',
      },
      {
        name: '公共汽车',
      },
      {
        name: '大巴士',
      },
      {
        name: '自行车',
      },
      {
        name: '徒步',
      },
      {
        name: '滑板车',
      },
      {
        name: '三轮车',
      },
    ],
  },
  {
    groupName: 'Stationery',
    indexName: '文',
    indexCode: 'SIY',
    items: [
      {
        name: 'Bag',
      },
      {
        name: 'Ruler',
      },
      {
        name: 'Pen',
      },
      {
        name: 'Pencil',
      },
      {
        name: 'Ruler',
      },
      {
        name: 'Rubber',
      },
      {
        name: 'Pencilcase',
      },
      {
        name: 'Desk',
      },
      {
        name: 'Lamp',
      },
    ],
  },
  {
    groupName: 'Customer',
    indexName: 'Main',
    items: [
      {
        name: '自定义数据',
        param1: 123,
        param2: 'abc',
        param3: false,
      },
      {
        name: '测试1',
      },
      {
        name: '测试2',
      },
      {
        name: '测试3',
      },
      {
        name: '测试4',
      },
      {
        name: '测试4',
      },
      {
        name: '测试4',
      },
      {
        name: '测试4',
      },
      {
        name: '测试4',
      },
      {
        name: '测试4',
      },
      {
        name: '测试4',
      },
    ],
  },
];

export default () => {
  const onSelect = (e, item) => {
    console.log(item);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <ItemSelector
      items={items}
      onSelect={onSelect}
      title="自定义Index"
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};
```

### Do not display navigation usage

Users can set the disabling Index to control the display of letter navigation on the right side, which defaults to false, indicating the display of letter navigation

```tsx
import React from 'react';
import { ItemSelector } from '@bifrostui/react';

const items = [
  {
    groupName: '当前城市',
    indexName: '当前',
    isFlat: true,
    items: [
      {
        code: '310100',
        name: '上海',
      },
    ],
  },
  {
    groupName: '定位城市',
    indexName: '定位',
    isFlat: true,
    items: [
      {
        code: '110100',
        name: '北京',
      },
    ],
  },
  {
    groupName: '热门城市',
    indexName: '常用',
    isFlat: true,
    items: [
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
    ],
  },
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
  const onSelect = (e, item) => {
    console.log(item);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <ItemSelector
      items={items}
      onSelect={onSelect}
      title="选择Item"
      disableIndex
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};
```

### Do not display title and navigation usage

Users can set the title to control the display of the head

```tsx
import React from 'react';
import { ItemSelector } from '@bifrostui/react';

const items = [
  {
    groupName: '当前城市',
    indexName: '当前',
    isFlat: true,
    items: [
      {
        code: '310100',
        name: '上海',
      },
    ],
  },
  {
    groupName: '定位城市',
    indexName: '定位',
    isFlat: true,
    items: [
      {
        code: '110100',
        name: '北京',
      },
    ],
  },
  {
    groupName: '热门城市',
    indexName: '常用',
    isFlat: true,
    items: [
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
    ],
  },
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
  const onSelect = (e, item) => {
    console.log(item);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <ItemSelector
      items={items}
      onSelect={onSelect}
      onClose={onHide}
      disableIndex
      style={{ height: '500px' }}
    />
  );
};
```

### API

#### ItemSelectorProps

| attribute    | explain                                                                              | type                                                 | Default value |
| ------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------- | ------------- |
| items        | Item List                                                                            | ItemGroup[]                                          | -             |
| onSelect     | Select item callback                                                                 | (e: React.SyntheticEvent,data: {item: Item}) => void | -             |
| disableIndex | Disable display index. Default false means display index is disabled                 | boolean                                              | false         |
| title        | Title at the top, not mandatory                                                      | string                                               | -             |
| onClose      | Used in conjunction with the title, the close callback on the right side of the head | (e: React.SyntheticEvent) => void                    | -             |

#### ItemGroup

| attribute | explain     | type    | Default value |
| --------- | ----------- | ------- | ------------- |
| groupName | Group name  | string  | -             |
| indexName | Index name  | string  | -             |
| indexCode | Index code  | string  | -             |
| isFlat    | flat layout | boolean | -             |
| items     | Item List   | Item[]  | -             |

#### Item

| attribute | explain   | type   | Default value |
| --------- | --------- | ------ | ------------- |
| code      | Item ID   | string | -             |
| name      | Item name | string | -             |

### Style variables

| attribute                                         | explain                                    | Default value                                           |
| ------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------- |
| --bui-item-selector-item-width                    | Horizontal item width                      | `111px`                                                 |
| --bui-item-selector-item-height                   | Horizontal item height                     | `36px`                                                  |
| --bui-item-selector-item-border-radius            | Horizontal item border radius              | `20px`                                                  |
| --bui-item-selector-item-margin                   | Horizontal item margin                     | `4.5px 0 4.5px 9px`                                     |
| --bui-item-selector-title-height                  | Title height                               | `45px`                                                  |
| --bui-item-selector-title-line-height             | Title line height                          | `45px`                                                  |
| --bui-item-selector-btn-close-size                | Close button container size                | `45px`                                                  |
| --bui-item-selector-btn-close-font-size           | Close button font size                     | `20px`                                                  |
| --bui-item-selector-container-with-title-height   | Container height with title                | `calc(100% - var(--bui-item-selector-title-height))`    |
| --bui-item-selector-item-container-min-height     | Minimum city container height              | `500px`                                                 |
| --bui-item-selector-select-item-buttons-padding   | Horizontal button padding                  | `7.5px 0 0 3px`                                         |
| --bui-item-selector-select-item-title-line-height | City index title line height               | `15px`                                                  |
| --bui-item-selector-list-item-height              | City item height                           | `45px`                                                  |
| --bui-item-selector-item-index-has-title-top      | Distance from top for city index container | `calc(50% + var(--bui-item-selector-title-height) / 2)` |
| --bui-item-selector-index-item-height             | City index item height                     | `20px`                                                  |
