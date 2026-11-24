---
group: Data Display
name: ItemSelector Item Selection
---

# ItemSelector Item Selection

Item Selection

### Basic Usage

The item selector displays the current Item, positioning Item, popular Items, and all Items, supporting right-side letter navigation.

```tsx
import * as React from 'react';
import { ItemSelector } from '@bifrostui/react';

const items = [
  {
    groupName: 'Current City',
    indexName: 'Current',
    indexCode: 'CRT',
    isFlat: true,
    items: [
      {
        code: '310100',
        name: 'Shanghai',
      },
    ],
  },
  {
    groupName: 'Positioning City',
    indexName: 'Position',
    indexCode: 'POS',
    isFlat: true,
    items: [
      {
        code: '110100',
        name: 'Beijing',
      },
    ],
  },
  {
    groupName: 'Popular Cities',
    indexName: 'Common',
    indexCode: 'HOT',
    isFlat: true,
    items: [
      {
        code: '110100',
        name: 'Beijing',
      },
      {
        code: '310100',
        name: 'Shanghai',
      },
      {
        code: '440100',
        name: 'Guangzhou',
      },
    ],
  },
  {
    groupName: 'A',
    items: [
      {
        code: '610900',
        name: 'Ankang',
      },
      {
        code: '210300',
        name: 'Anshan',
      },
    ],
  },
  {
    groupName: 'B',
    items: [
      {
        code: '652800',
        name: 'Bayingolin',
      },
      {
        code: '511900',
        name: 'Bazhong',
      },
    ],
  },
  {
    groupName: 'C',
    items: [
      {
        code: '130900',
        name: 'Cangzhou',
      },
      {
        code: '220100',
        name: 'Changchun',
      },
    ],
  },
  {
    groupName: 'D',
    items: [
      {
        code: '532900',
        name: 'Dali',
      },
      {
        code: '210200',
        name: 'Dalian',
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

Users can customize `indexName`|`indexCode` to control the display text of the right-side letter navigation.

```tsx
import * as React from 'react';
import { ItemSelector } from '@bifrostui/react';

const items = [
  {
    groupName: 'Fruit',
    indexName: 'Fruit',
    indexCode: 'FRT',
    items: [
      {
        name: 'Banana',
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
    groupName: 'Transportation',
    indexName: 'Traffic',
    indexCode: 'TFC',
    items: [
      {
        name: 'Car',
      },
      {
        name: 'Plane',
      },
      {
        name: 'Train',
      },
      {
        name: 'Truck',
      },
      {
        name: 'Ship',
      },
      {
        name: 'Bus',
      },
      {
        name: 'Coach',
      },
      {
        name: 'Bicycle',
      },
      {
        name: 'Hiking',
      },
      {
        name: 'Scooter',
      },
      {
        name: 'Tricycle',
      },
    ],
  },
  {
    groupName: 'Stationery',
    indexName: 'Wen',
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
        name: 'Custom Data',
        param1: 123,
        param2: 'abc',
        param3: false,
      },
      {
        name: 'Test1',
      },
      {
        name: 'Test2',
      },
      {
        name: 'Test3',
      },
      {
        name: 'Test4',
      },
      {
        name: 'Test4',
      },
      {
        name: 'Test4',
      },
      {
        name: 'Test4',
      },
      {
        name: 'Test4',
      },
      {
        name: 'Test4',
      },
      {
        name: 'Test4',
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
      title="Custom Index"
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};
```

### Usage Without Navigation

Users can set `disableIndex` to control the display of the right-side letter navigation, default is `false`, which means the letter navigation is displayed.

```tsx
import * as React from 'react';
import { ItemSelector } from '@bifrostui/react';

const items = [
  {
    groupName: 'Current City',
    indexName: 'Current',
    isFlat: true,
    items: [
      {
        code: '310100',
        name: 'Shanghai',
      },
    ],
  },
  {
    groupName: 'Positioning City',
    indexName: 'Position',
    isFlat: true,
    items: [
      {
        code: '110100',
        name: 'Beijing',
      },
    ],
  },
  {
    groupName: 'Popular Cities',
    indexName: 'Common',
    isFlat: true,
    items: [
      {
        code: '110100',
        name: 'Beijing',
      },
      {
        code: '310100',
        name: 'Shanghai',
      },
      {
        code: '440100',
        name: 'Guangzhou',
      },
    ],
  },
  {
    groupName: 'A',
    items: [
      {
        code: '610900',
        name: 'Ankang',
      },
      {
        code: '210300',
        name: 'Anshan',
      },
    ],
  },
  {
    groupName: 'B',
    items: [
      {
        code: '652800',
        name: 'Bayingolin',
      },
      {
        code: '511900',
        name: 'Bazhong',
      },
    ],
  },
  {
    groupName: 'C',
    items: [
      {
        code: '130900',
        name: 'Cangzhou',
      },
      {
        code: '220100',
        name: 'Changchun',
      },
    ],
  },
  {
    groupName: 'D',
    items: [
      {
        code: '532900',
        name: 'Dali',
      },
      {
        code: '210200',
        name: 'Dalian',
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
      title="Select Item"
      disableIndex
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};
```

### Usage Without Title and Navigation

Users can set the `title` to control the display of the header.

```tsx
import * as React from 'react';
import { ItemSelector } from '@bifrostui/react';

const items = [
  {
    groupName: 'Current City',
    indexName: 'Current',
    isFlat: true,
    items: [
      {
        code: '310100',
        name: 'Shanghai',
      },
    ],
  },
  {
    groupName: 'Positioning City',
    indexName: 'Position',
    isFlat: true,
    items: [
      {
        code: '110100',
        name: 'Beijing',
      },
    ],
  },
  {
    groupName: 'Popular Cities',
    indexName: 'Common',
    isFlat: true,
    items: [
      {
        code: '110100',
        name: 'Beijing',
      },
      {
        code: '310100',
        name: 'Shanghai',
      },
      {
        code: '440100',
        name: 'Guangzhou',
      },
    ],
  },
  {
    groupName: 'A',
    items: [
      {
        code: '610900',
        name: 'Ankang',
      },
      {
        code: '210300',
        name: 'Anshan',
      },
    ],
  },
  {
    groupName: 'B',
    items: [
      {
        code: '652800',
        name: 'Bayingolin',
      },
      {
        code: '511900',
        name: 'Bazhong',
      },
    ],
  },
  {
    groupName: 'C',
    items: [
      {
        code: '130900',
        name: 'Cangzhou',
      },
      {
        code: '220100',
        name: 'Changchun',
      },
    ],
  },
  {
    groupName: 'D',
    items: [
      {
        code: '532900',
        name: 'Dali',
      },
      {
        code: '210200',
        name: 'Dalian',
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

| Property     | Description                                    | Type                                                  | Default |
| ------------ | ---------------------------------------------- | ----------------------------------------------------- | ------- |
| items        | List of Items                                  | ItemGroup[]                                           | -       |
| onSelect     | Callback for selecting an Item                 | (e: React.SyntheticEvent, data: {item: Item}) => void | -       |
| disableIndex | Disable index display, default is false        | boolean                                               | false   |
| title        | Title for the header, optional                 | string                                                | -       |
| onClose      | Callback for closing the header with the title | (e: React.SyntheticEvent) => void                     | -       |

#### ItemGroup

| Property  | Description | Type    | Default |
| --------- | ----------- | ------- | ------- |
| groupName | Group name  | string  | -       |
| indexName | Index name  | string  | -       |
| indexCode | Index code  | string  | -       |
| isFlat    | Is flat     | boolean | -       |
| items     | Item list   | Item[]  | -       |

#### Item

| Property | Description | Type   | Default |
| -------- | ----------- | ------ | ------- |
| code     | Item ID     | string | -       |
| name     | Item name   | string | -       |

## Style Variables

| Variable                                          | Description                          | Default                                                 |
| ------------------------------------------------- | ------------------------------------ | ------------------------------------------------------- |
| --bui-item-selector-item-width                    | Width of selection item              | `111px`                                                 |
| --bui-item-selector-item-height                   | Height of selection item             | `36px`                                                  |
| --bui-item-selector-item-border-radius            | Border radius of selection item      | `20px`                                                  |
| --bui-item-selector-item-margin                   | Margin of selection item             | `4.5px 0 4.5px 9px`                                     |
| --bui-item-selector-title-height                  | Title height                         | `45px`                                                  |
| --bui-item-selector-title-line-height             | Title line height                    | `45px`                                                  |
| --bui-item-selector-btn-close-size                | Close button size                    | `45px`                                                  |
| --bui-item-selector-btn-close-font-size           | Close button font size               | `20px`                                                  |
| --bui-item-selector-container-with-title-height   | Container height with title          | `calc(100% - var(--bui-item-selector-title-height))`    |
| --bui-item-selector-item-container-min-height     | Minimum item container height        | `500px`                                                 |
| --bui-item-selector-select-item-buttons-padding   | Padding for item button container    | `7.5px 0 0 3px`                                         |
| --bui-item-selector-select-item-title-line-height | Line height for group title          | `15px`                                                  |
| --bui-item-selector-list-item-height              | List item height                     | `45px`                                                  |
| --bui-item-selector-item-index-has-title-top      | Index position when title is present | `calc(50% + var(--bui-item-selector-title-height) / 2)` |
| --bui-item-selector-index-item-height             | Index item height                    | `20px`                                                  |

```

```
