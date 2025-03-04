---
group: Data Display
name: Itemselector Item Selection
---

# Itemselector Item Selection

Item selection

## Code demonstration

### Basic usage

Item selection displays the current item, location item, popular items, and all items, supporting right-hand letter navigation

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

### Do not display navigation usage

Users can set the disabling Index to control the display of letter navigation on the right side, which defaults to false, indicating the display of letter navigation

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

### Do not display title and navigation usage

Users can set the title to control the display of the head

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

| attribute             | explain                                                                              | type                                                 | Default value      |
| --------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- | ------------------ |
| items                 | Item List                                                                            | ItemGroup[]                                          | -                  |
| onSelect              | Select item callback                                                                 | (e: React.SyntheticEvent,data: {item: Item}) => void | -                  |
| selectedItem          | Current item information                                                             | Item                                                 | -                  |
| selectedItemGroupName | The title of the current item column                                                 | string                                               | Current Item       |
| currentItem           | Locate item information                                                              | Item                                                 | -                  |
| currentItemGroupName  | Position the title of the item column                                                | string                                               | 'Positioning Item' |
| hotItems              | Popular item information                                                             | Item[]                                               | -                  |
| hotItemsGroupName     | Title of the popular item column                                                     | string                                               | 'Popular Items'    |
| disableIndex          | Disable display index. Default false means display index is disabled                 | boolean                                              | false              |
| title                 | Title at the top, not mandatory                                                      | string                                               | -                  |
| onClose               | Used in conjunction with the title, the close callback on the right side of the head | (e: React.SyntheticEvent) => void                    | -                  |

#### ItemGroup

| attribute | explain    | type   | Default value |
| --------- | ---------- | ------ | ------------- |
| groupName | Group name | string | -             |
| items     | Item List  | Item[] | -             |

#### Item

| attribute | explain   | type   | Default value |
| --------- | --------- | ------ | ------------- |
| code      | Item ID   | string | -             |
| name      | Item name | string | -             |

### Style variables

| attribute                       | explain                                           | Default value                  | global variable                                   |
| ------------------------------- | ------------------------------------------------- | ------------------------------ | ------------------------------------------------- |
| --select-item-width             | Horizontal option width                           | 111px                          | --bui-item-selector-item-width                    |
| --select-item-height            | Horizontal option height                          | 36px                           | --bui-item-selector-item-height                   |
| --select-item-border-radius     | Horizontal options with rounded corners           | 20px                           | --bui-item-selector-item-border-radius            |
| --select-item-margin            | Horizontal option margin                          | 4.5px 0 4.5px 9px              | --bui-item-selector-item-margin                   |
| --title-height                  | Title height                                      | 45px                           | --bui-item-selector-title-height                  |
| --title-line-height             | Title line height                                 | 45px                           | --bui-item-selector-title-line-height             |
| --btn-close-size                | Close button container width and height           | 45px                           | --bui-item-selector-btn-close-size                |
| --btn-close-font-size           | Close button font size                            | 20px                           | --bui-item-selector-btn-close-font-size           |
| --container-with-title-height   | Item container height with title                  | calc(100% - --title-height)    | --bui-item-selector-container-with-title-height   |
| --item-container-min-height     | Minimum height of urban container                 | 500px                          | --bui-item-selector-item-container-min-height     |
| --select-item-buttons-padding   | Horizontal button container inner margin          | 7.5px 0 0 3px                  | --bui-item-selector-select-item-buttons-padding   |
| --select-item-title-line-height | Item index title bar row height                   | 15px                           | --bui-item-selector-select-item-title-line-height |
| --list-item-height              | Item item height                                  | 45px                           | --bui-item-selector-list-item-height              |
| --item-index-has-title-top      | Distance from the top of the item index container | calc(50% + --title-height / 2) | --bui-item-selector-item-index-has-title-top      |
| --index-item-height             | Item index item height                            | 20px                           | --bui-item-selector-index-item-height             |
