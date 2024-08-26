---
group: 数据展示
name: CitySelector 城市选择
---

# CitySelector 城市选择

城市选择

## 代码演示

### 基础用法

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
      onClose={onHide}
    />
  );
};
```

### 不展示导航用法

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
    />
  );
};
```

### 不展示title用法

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
    />
  );
};
```

### API

##### CitySelectorProps

| 属性                  | 说明                                | 类型                                                 | 默认值     |
| --------------------- | ----------------------------------- | ---------------------------------------------------- | ---------- |
| cities                | 城市列表                            | CityGroup[]                                          | -          |
| onSelect              | 选择城市回调                        | (e: React.SyntheticEvent,data: {city: City}) => void | -          |
| selectedCity          | 当前城市信息                        | City                                                 | -          |
| selectedCityGroupName | 当前城市栏的title                   | string                                               | '当前城市' |
| currentCity           | 定位城市信息                        | City                                                 | -          |
| currentCityGroupName  | 定位城市栏的title                   | string                                               | '定位城市' |
| hotCities             | 热门城市信息                        | City                                                 | -          |
| hotCitiesGroupName    | 热门城市栏的title                   | string                                               | '热门城市' |
| disableIndex          | 禁用展示索引 默认false 即展示索引   | boolean                                              | false      |
| title                 | 头部title，非必传                   | string                                               | -          |
| onClose               | 和title配合使用，头部右侧的关闭回调 | (e: React.SyntheticEvent) => void                    | -          |

##### CityGroup

| 属性      | 说明     | 类型   | 默认值 |
| --------- | -------- | ------ | ------ |
| groupName | 分组名   | string | -      |
| cities    | 城市列表 | City[] | -      |

##### City

| 属性 | 说明   | 类型   | 默认值 |
| ---- | ------ | ------ | ------ |
| code | 城市id | string | -      |
| name | 城市名 | string | -      |
