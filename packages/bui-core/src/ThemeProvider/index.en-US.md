---
group: theme
name: ThemeProvider
---

# ThemeProvider

Theme configuration can be used to specify component colors, sizes, languages, etc.

## Code demonstration

### Basic usage

```tsx
import { ThemeProvider, createTheme, Button } from '@bifrostui/react';
import React from 'react';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
    },
  },
});
export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>测试</Button>
    </ThemeProvider>
  );
};
```

### Custom Tokens

BUI's tokens are divided into three levels:

1. BUI built-in tokens: including`defaultLightToken`（global token with default highlight mode)`defaultDarkToken`（default global token for dark mode)`dmLightToken`（global token for barley highlight mode`dmDarkToken`（the global token for the dark mode of damai.
2. Responsive Tokens: BUI is a mobile first responsive solution by default, and users can use it through`responsive` define responsive tokens.
3. Component Tokens: BUI allows users to implement the component through`token` be flexible enough to customize component styles.

Normally, from the perspective of local superiority over general, the priority of the three types of tokens is: Component Tokens>Responsive Tokens>BUI Built in Tokens. But for the special scenario of dark mode, the priority of the two dark mode tokens built into BUI is higher than that of responsive tokens.

Principle: Developers should adhere to the following principles when customizing Tokens.

1. Do not confuse definitions: Tokens should be defined using corresponding APIs for different business scenarios, such as responsive layouts`responsive`, dark mode should be used`defaultDarkToken`and`dmDarkToken`.
2. Distinguish priorities: The priority of special scenarios is always higher than that of global general scenarios.

```tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

// 响应式：不同屏幕尺寸下自定义Tokens
const responsive = {
  xs: {
    '--bui-button-border-radius': '6px',
    '--bui-button-height': '30px',
    '--bui-color-fg-muted': 'green',
    '--bui-button-border-color': 'purple',
  },
  sm: {
    '--bui-button-border-radius': '16px',
    '--bui-button-height': '40px',
    '--bui-color-fg-muted': 'red',
    '--bui-button-border-color': '#0499ff',
  },
  md: {
    '--bui-button-border-radius': '26px',
    '--bui-button-height': '50px',
    '--bui-color-fg-muted': 'blue',
    '--bui-button-border-color': '#f99999',
  },
  lg: {
    '--bui-button-border-radius': '36px',
    '--bui-button-height': '60px',
    '--bui-color-fg-muted': 'black',
    '--bui-button-border-color': '#000feb',
  },
  xl: {
    '--bui-button-border-radius': '46px',
    '--bui-button-height': '100px',
    '--bui-color-primary': 'green',
    '--bui-button-border-color': '#ef871f',
  },
};

// 默认高亮模式自定义Tokens
const defaultLightToken = {
  '--bui-color-fg-muted': 'yellow',
};

// 默认暗黑模式自定义Tokens
const defaultDarkToken = {
  '--bui-color-fg-muted': 'red',
};

// 自定义组件Tokens
const token = {
  '--bui-button-text-color': '#f3eeee',
};

export default () => {
  return (
    <ThemeProvider
      token={token}
      responsive={responsive}
      defaultLightToken={defaultLightToken}
      defaultDarkToken={defaultDarkToken}
    >
      <Button>自定义Tokens</Button>
    </ThemeProvider>
  );
};
```

```tsx
import { ThemeProvider, createTheme, Button } from '@bifrostui/react';
import React from 'react';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 60,
    },
  },
  background: 'red',
});

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider
        theme={(outerTheme) => {
          return {
            ...outerTheme,
            background: 'yellow',
          };
        }}
      >
        <Button>测试</Button>
      </ThemeProvider>
    </ThemeProvider>
  );
};
```

### internationalization

```tsx
import {
  ThemeProvider,
  createTheme,
  Button,
  Dialog,
  Stack,
  Picker,
  Calendar,
  Input,
  TextArea,
  Select,
  SelectOption,
  CitySelector,
} from '@bifrostui/react';
import React, { useState } from 'react';
import dayjs from 'dayjs/esm/index';
import { EN, CN, TW } from '@bifrostui/react/locales';
// import CN from '@bifrostui/react/locales/zh-CN';
// import TW from '@bifrostui/react/locales/zh-TW';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(dayjs().toDate());
  const [inputValue, setInputValue] = useState('');
  const [curValue, setCurValue] = useState(EN);

  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };
  const handleInputChange = (e, data) => {
    setInputValue(data?.value);
    console.log('change', data?.value);
  };
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
  const optionInt = [
    {
      label: 'en-US',
      value: EN,
    },
    {
      label: 'zh-CN',
      value: CN,
    },
    {
      label: 'zh-TW',
      value: TW,
    },
  ];
  return (
    <ThemeProvider locale={curValue}>
      <Stack spacing="10px">
        <Select
          defaultValue={EN}
          onChange={(e, { value = '' }) => {
            setCurValue(value);
          }}
        >
          {optionInt.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          打开picker
        </Button>
        <Picker
          open={open}
          onClose={(e, data) => {
            setOpen(false);
            console.log('onClose', e, data);
          }}
          options={[
            [
              {
                value: 1,
                label: '周一',
              },
              {
                value: 2,
                label: '周二',
              },
              {
                value: 3,
                label: '周三',
              },
              {
                value: 4,
                label: '周四',
              },
              {
                value: 5,
                label: '周五',
              },
              {
                value: 6,
                label: '周六',
              },
              {
                value: 7,
                label: '周日',
              },
            ],
          ]}
        />
        <Calendar value={value} onChange={handleChange} />
        <Input value={inputValue} onChange={handleInputChange} />
        <TextArea />
        <Select>
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <CitySelector
          cities={cities}
          onSelect={onSelect}
          selectedCity={selectedCity}
          currentCity={currentCity}
          hotCities={hotCities}
          onClose={onHide}
          style={{ height: '500px' }}
        />
      </Stack>
    </ThemeProvider>
  );
};
```
