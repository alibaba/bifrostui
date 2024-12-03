---
group: 数据展示
name: CitySelector 城市选择
---

# CitySelector 城市选择

城市选择

## 代码演示

### 基础用法

城市选择展示当前城市、定位城市、热门城市及所有城市，支持右侧字母导航

```tsx
import React from 'react';
import { CitySelector } from '@bifrostui/react';

const hotCities = [
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

const cities = [
  {
    groupName: 'A',
    cities: [
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
    cities: [
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
    cities: [
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
    cities: [
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
  const selectedCity = {
    code: '110100',
    name: '北京',
  };
  const currentCity = {
    code: '310100',
    name: '上海',
  };
  const onSelect = (city) => {
    console.log(city);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <CitySelector
      cities={cities}
      onSelect={onSelect}
      selectedCity={selectedCity}
      selectedCityGroupName="当前城市"
      currentCity={currentCity}
      currentCityGroupName="定位城市"
      hotCities={hotCities}
      hotCitiesGroupName="热门城市"
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
import { CitySelector } from '@bifrostui/react';

const hotCities = [
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

const cities = [
  {
    groupName: 'A',
    cities: [
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
    cities: [
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
    cities: [
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
    cities: [
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
  const selectedCity = {
    code: '110100',
    name: '北京',
  };
  const currentCity = {
    code: '310100',
    name: '上海',
  };

  const onSelect = (city) => {
    console.log(city);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <CitySelector
      cities={cities}
      onSelect={onSelect}
      selectedCity={selectedCity}
      selectedCityGroupName="当前城市"
      currentCity={currentCity}
      currentCityGroupName="定位城市"
      hotCities={hotCities}
      hotCitiesGroupName="热门城市"
      title="选择城市"
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
import { CitySelector } from '@bifrostui/react';

const hotCities = [
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

const cities = [
  {
    groupName: 'A',
    cities: [
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
    cities: [
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
    cities: [
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
    cities: [
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
  const selectedCity = {
    code: '110100',
    name: '北京',
  };
  const currentCity = {
    code: '310100',
    name: '上海',
  };

  const onSelect = (city) => {
    console.log(city);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <CitySelector
      cities={cities}
      onSelect={onSelect}
      selectedCity={selectedCity}
      selectedCityGroupName="当前城市"
      currentCity={currentCity}
      currentCityGroupName="定位城市"
      hotCities={hotCities}
      hotCitiesGroupName="热门城市"
      onClose={onHide}
      disableIndex
      style={{ height: '500px' }}
    />
  );
};
```

### API

#### CitySelectorProps

| 属性                  | 说明                                | 类型                                                 | 默认值     |
| --------------------- | ----------------------------------- | ---------------------------------------------------- | ---------- |
| cities                | 城市列表                            | CityGroup[]                                          | -          |
| onSelect              | 选择城市回调                        | (e: React.SyntheticEvent,data: {city: City}) => void | -          |
| selectedCity          | 当前城市信息                        | City                                                 | -          |
| selectedCityGroupName | 当前城市栏的title                   | string                                               | '当前城市' |
| currentCity           | 定位城市信息                        | City                                                 | -          |
| currentCityGroupName  | 定位城市栏的title                   | string                                               | '定位城市' |
| hotCities             | 热门城市信息                        | City[]                                               | -          |
| hotCitiesGroupName    | 热门城市栏的title                   | string                                               | '热门城市' |
| disableIndex          | 禁用展示索引 默认false 即展示索引   | boolean                                              | false      |
| title                 | 头部title，非必传                   | string                                               | -          |
| onClose               | 和title配合使用，头部右侧的关闭回调 | (e: React.SyntheticEvent) => void                    | -          |

#### CityGroup

| 属性      | 说明     | 类型   | 默认值 |
| --------- | -------- | ------ | ------ |
| groupName | 分组名   | string | -      |
| cities    | 城市列表 | City[] | -      |

#### City

| 属性 | 说明   | 类型   | 默认值 |
| ---- | ------ | ------ | ------ |
| code | 城市id | string | -      |
| name | 城市名 | string | -      |

### 样式变量

| 属性                            | 说明                 | 默认值                         | 全局变量                                          |
| ------------------------------- | -------------------- | ------------------------------ | ------------------------------------------------- |
| --select-item-width             | 横排选项宽度         | 111px                          | --bui-city-selector-item-width                    |
| --select-item-height            | 横排选项高度         | 36px                           | --bui-city-selector-item-height                   |
| --select-item-border-radius     | 横排选项圆角         | 20px                           | --bui-city-selector-item-border-radius            |
| --select-item-margin            | 横排选项外边距       | 4.5px 0 4.5px 9px              | --bui-city-selector-item-margin                   |
| --title-height                  | 标题高度             | 45px                           | --bui-city-selector-title-height                  |
| --title-line-height             | 标题行高             | 45px                           | --bui-city-selector-title-line-height             |
| --btn-close-size                | 关闭按钮容器宽高     | 45px                           | --bui-city-selector-btn-close-size                |
| --btn-close-font-size           | 关闭按钮字号         | 20px                           | --bui-city-selector-btn-close-font-size           |
| --container-with-title-height   | 带标题的城市容器高度 | calc(100% - --title-height)    | --bui-city-selector-container-with-title-height   |
| --city-container-min-height     | 城市容器最小高度     | 500px                          | --bui-city-selector-city-container-min-height     |
| --select-city-buttons-padding   | 横排按钮容器内边距   | 7.5px 0 0 3px                  | --bui-city-selector-select-city-buttons-padding   |
| --select-city-title-line-height | 城市索引标题栏行高   | 15px                           | --bui-city-selector-select-city-title-line-height |
| --list-item-height              | 城市项高度           | 45px                           | --bui-city-selector-list-item-height              |
| --city-index-has-title-top      | 城市索引容器距顶距离 | calc(50% + --title-height / 2) | --bui-city-selector-city-index-has-title-top      |
| --index-item-height             | 城市索引项高度       | 20px                           | --bui-city-selector-index-item-height             |
