---
group: Data Display
name: CitySelector City Selection
---

# CitySelector City Selection

City selection

## Code Demo

### Basic Usage

The city selector displays the current city, located city, popular cities, and all cities, supporting right-side letter navigation.

```tsx
import React from 'react';
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
        name: 'Bayin格尔',
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
      currentCityGroupName="Located City"
      hotCities={hotCities}
      hotCitiesGroupName="Popular Cities"
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};
```

### Hide Navigation Usage

Users can set `disableIndex` to control the display of the right-side letter navigation. Default is `false`, meaning it shows the letter navigation.

```tsx
import React from 'react';
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
        name: 'Bayin格尔',
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
      currentCityGroupName="Located City"
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

### Hide Title and Navigation Usage

Users can set `title` to control the header display.

```tsx
import React from 'react';
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
        name: 'Bayin格尔',
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
      currentCityGroupName="Located City"
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

| Property              | Description                                   | Type                                                  | Default Value    |
| --------------------- | --------------------------------------------- | ----------------------------------------------------- | ---------------- |
| cities                | List of cities                                | CityGroup[]                                           | -                |
| onSelect              | Callback for city selection                   | (e: React.SyntheticEvent, data: {city: City}) => void | -                |
| selectedCity          | Information about the currently selected city | City                                                  | -                |
| selectedCityGroupName | Title for the selected city section           | string                                                | 'Current City'   |
| currentCity           | Information about the located city            | City                                                  | -                |
| currentCityGroupName  | Title for the located city section            | string                                                | 'Located City'   |
| hotCities             | List of popular cities                        | City[]                                                | -                |
| hotCitiesGroupName    | Title for the popular cities section          | string                                                | 'Popular Cities' |
| disableIndex          | Disable index display, defaults to false      | boolean                                               | false            |
| title                 | Header title, optional                        | string                                                | -                |
| onClose               | Callback for closing the header               | (e: React.SyntheticEvent) => void                     | -                |

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

### Style Variables

| Property                        | Description                                | Default Value                  | Global Variable                                   |
| ------------------------------- | ------------------------------------------ | ------------------------------ | ------------------------------------------------- |
| --select-item-width             | Horizontal item width                      | 111px                          | --bui-city-selector-item-width                    |
| --select-item-height            | Horizontal item height                     | 36px                           | --bui-city-selector-item-height                   |
| --select-item-border-radius     | Horizontal item border radius              | 20px                           | --bui-city-selector-item-border-radius            |
| --select-item-margin            | Horizontal item margin                     | 4.5px 0 4.5px 9px              | --bui-city-selector-item-margin                   |
| --title-height                  | Title height                               | 45px                           | --bui-city-selector-title-height                  |
| --title-line-height             | Title line height                          | 45px                           | --bui-city-selector-title-line-height             |
| --btn-close-size                | Close button container size                | 45px                           | --bui-city-selector-btn-close-size                |
| --btn-close-font-size           | Close button font size                     | 20px                           | --bui-city-selector-btn-close-font-size           |
| --container-with-title-height   | Container height with title                | calc(100% - --title-height)    | --bui-city-selector-container-with-title-height   |
| --city-container-min-height     | Minimum city container height              | 500px                          | --bui-city-selector-city-container-min-height     |
| --select-city-buttons-padding   | Horizontal button padding                  | 7.5px 0 0 3px                  | --bui-city-selector-select-city-buttons-padding   |
| --select-city-title-line-height | City index title line height               | 15px                           | --bui-city-selector-select-city-title-line-height |
| --list-item-height              | City item height                           | 45px                           | --bui-city-selector-list-item-height              |
| --city-index-has-title-top      | Distance from top for city index container | calc(50% + --title-height / 2) | --bui-city-selector-city-index-has-title-top      |
| --index-item-height             | City index item height                     | 20px                           | --bui-city-selector-index-item-height             |
