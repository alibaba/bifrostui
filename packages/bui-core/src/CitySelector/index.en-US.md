---
group: Data Display
name: CitySelector
---

# CitySelector

City Selection

## Basic Usage

The City Selector displays the current city, the location city, popular cities, and all cities. It supports right-side alphabetical navigation.

```tsx
import * as React from 'react';
import { CitySelector } from '@bifrostui/react';

const hotCities = [
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
];

const cities = [
  {
    groupName: 'A',
    cities: [
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
    cities: [
      {
        code: '652800',
        name: 'Bayin',
      },
      {
        code: '511900',
        name: 'Bazhong',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
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
    cities: [
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
  const selectedCity = {
    code: '110100',
    name: 'Beijing',
  };
  const currentCity = {
    code: '310100',
    name: 'Shanghai',
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
      selectedCityGroupName="Current City"
      currentCity={currentCity}
      currentCityGroupName="Location City"
      hotCities={hotCities}
      hotCitiesGroupName="Popular Cities"
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};
```

### Usage without Navigation

Users can control the display of the right-side alphabetical navigation by setting disableIndex, which defaults to false and thus shows the alphabetical navigation.

```tsx
import * as React from 'react';
import { CitySelector } from '@bifrostui/react';

const hotCities = [
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
];

const cities = [
  {
    groupName: 'A',
    cities: [
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
    cities: [
      {
        code: '652800',
        name: 'Bayin',
      },
      {
        code: '511900',
        name: 'Bazhong',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
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
    cities: [
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
  const selectedCity = {
    code: '110100',
    name: 'Beijing',
  };
  const currentCity = {
    code: '310100',
    name: 'Shanghai',
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
      selectedCityGroupName="Current City"
      currentCity={currentCity}
      currentCityGroupName="Location City"
      hotCities={hotCities}
      hotCitiesGroupName="Popular Cities"
      title="Select City"
      disableIndex
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};
```

### Usage without Displaying Title and Navigation

Users can control the display of the header by setting the title.

```tsx
import * as React from 'react';
import { CitySelector } from '@bifrostui/react';

const hotCities = [
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
];

const cities = [
  {
    groupName: 'A',
    cities: [
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
    cities: [
      {
        code: '652800',
        name: 'Bayin',
      },
      {
        code: '511900',
        name: 'Bazhong',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
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
    cities: [
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
  const selectedCity = {
    code: '110100',
    name: 'Beijing',
  };
  const currentCity = {
    code: '310100',
    name: 'Shanghai',
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
      selectedCityGroupName="Current City"
      currentCity={currentCity}
      currentCityGroupName="Location City"
      hotCities={hotCities}
      hotCitiesGroupName="Popular Cities"
      onClose={onHide}
      disableIndex
      style={{ height: '500px' }}
    />
  );
};
```

### API

#### CitySelectorProps

| Property              | Description                                                           | Type                                                    | Default Value    |
| --------------------- | --------------------------------------------------------------------- | ------------------------------------------------------- | ---------------- |
| cities                | List of cities                                                        | CityGroup[]                                             | -                |
| onSelect              | Callback for city selection                                           | (e: React.SyntheticEvent, data: { city: City }) => void | -                |
| selectedCity          | Information about the current city                                    | City                                                    | -                |
| selectedCityGroupName | Title for the current city section                                    | string                                                  | 'Current City'   |
| currentCity           | Information about the location city                                   | City                                                    | -                |
| currentCityGroupName  | Title for the location city section                                   | string                                                  | 'Location City'  |
| hotCities             | Information about popular cities                                      | City[]                                                  | -                |
| hotCitiesGroupName    | Title for the popular cities section                                  | string                                                  | 'Popular Cities' |
| disableIndex          | Disable index display, defaults to false (i.e., index is displayed)   | boolean                                                 | false            |
| title                 | Header title, optional                                                | string                                                  | -                |
| onClose               | Used with title, callback for closing on the right side of the header | (e: React.SyntheticEvent) => void                       | -                |

#### CityGroup

| Property  | Description    | Type   | Default Value |
| --------- | -------------- | ------ | ------------- |
| groupName | Group name     | string | -             |
| cities    | List of cities | City[] | -             |

#### City

| Property | Description | Type   | Default Value |
| -------- | ----------- | ------ | ------------- |
| code     | City ID     | string | -             |
| name     | City name   | string | -             |

## Style Variables

| Variable Name                                     | Description                      | Default Value                                           |
| ------------------------------------------------- | -------------------------------- | ------------------------------------------------------- |
| --bui-city-selector-item-width                    | Width of selection item          | `111px`                                                 |
| --bui-city-selector-item-height                   | Height of selection item         | `36px`                                                  |
| --bui-city-selector-item-border-radius            | Border radius of selection item  | `20px`                                                  |
| --bui-city-selector-item-margin                   | Margin of selection item         | `4.5px 0 4.5px 9px`                                     |
| --bui-city-selector-title-height                  | Height of title                  | `45px`                                                  |
| --bui-city-selector-title-line-height             | Line height of title             | `45px`                                                  |
| --bui-city-selector-btn-close-size                | Size of close button             | `45px`                                                  |
| --bui-city-selector-btn-close-font-size           | Font size of close button        | `20px`                                                  |
| --bui-city-selector-container-with-title-height   | Height of container with title   | `calc(100% - var(--bui-city-selector-title-height))`    |
| --bui-city-selector-city-container-min-height     | Minimum height of city container | `500px`                                                 |
| --bui-city-selector-select-city-buttons-padding   | Padding of city button container | `7.5px 0 0 3px`                                         |
| --bui-city-selector-select-city-title-line-height | Line height of city group title  | `15px`                                                  |
| --bui-city-selector-list-item-height              | Height of list item              | `45px`                                                  |
| --bui-city-selector-city-index-has-title-top      | Top position of index with title | `calc(50% + var(--bui-city-selector-title-height) / 2)` |
| --bui-city-selector-index-item-height             | Height of index item             | `20px`                                                  |

```

```
