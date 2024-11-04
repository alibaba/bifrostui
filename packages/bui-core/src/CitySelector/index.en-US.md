---
group: Data Display
name: Cityselector
---

# Cityselector

City selection

## Code demonstration

### Basic usage

City selection displays the current city, location city, popular cities, and all cities, supporting right-hand letter navigation

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

### Do not display navigation usage

Users can set the disabling Index to control the display of letter navigation on the right side, which defaults to false, indicating the display of letter navigation

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

### Do not display title and navigation usage

Users can set the title to control the display of the head

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

##### CitySelectorProps

| attribute             | explain                                                                              | type                                                 | Default value      |
| --------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- | ------------------ |
| cities                | City List                                                                            | CityGroup[]                                          | -                  |
| onSelect              | Select city callback                                                                 | (e: React.SyntheticEvent,data: {city: City}) => void | -                  |
| selectedCity          | Current city information                                                             | City                                                 | -                  |
| selectedCityGroupName | The title of the current city column                                                 | string                                               | Current City       |
| currentCity           | Locate city information                                                              | City                                                 | -                  |
| currentCityGroupName  | Position the title of the city column                                                | string                                               | 'Positioning City' |
| hotCities             | Popular city information                                                             | City[]                                               | -                  |
| hotCitiesGroupName    | Title of the popular city column                                                     | string                                               | 'Popular Cities'   |
| disableIndex          | Disable display index. Default false means display index is disabled                 | boolean                                              | false              |
| title                 | Title at the top, not mandatory                                                      | string                                               | -                  |
| onClose               | Used in conjunction with the title, the close callback on the right side of the head | (e: React.SyntheticEvent) => void                    | -                  |

##### CityGroup

| attribute | explain    | type   | Default value |
| --------- | ---------- | ------ | ------------- |
| groupName | Group name | string | -             |
| cities    | City List  | City[] | -             |

##### City

| attribute | explain   | type   | Default value |
| --------- | --------- | ------ | ------------- |
| code      | City ID   | string | -             |
| name      | City name | string | -             |
