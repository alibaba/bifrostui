---
group: 主题
name: ThemeProvider 主题配置
---

# ThemeProvider

主题配置，可以用来指定组件颜色、尺寸、语言等。

## 代码演示

### 基础用法

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

### 自定义Tokens

```tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

// 响应式相关Tokens
const responsive = {
  xs: {
    '--bui-button-border-radius': '6px',
    '--bui-button-height': '30px',
    '--bui-button-text-color': 'green',
    '--bui-button-border-color': 'purple',
  },
  sm: {
    '--bui-button-border-radius': '16px',
    '--bui-button-height': '40px',
    '--bui-button-text-color': 'red',
    '--bui-button-border-color': '#0499ff',
  },
  md: {
    '--bui-button-border-radius': '26px',
    '--bui-button-height': '50px',
    '--bui-button-text-color': 'blue',
    '--bui-button-border-color': '#f99999',
  },
  lg: {
    '--bui-button-border-radius': '36px',
    '--bui-button-height': '60px',
    '--bui-button-text-color': 'black',
    '--bui-button-border-color': '#000feb',
  },
  xl: {
    '--bui-button-border-radius': '46px',
    '--bui-button-height': '100px',
    '--bui-color-primary': 'green',
    '--bui-button-border-color': '#ef871f',
  },
};
export default () => {
  return (
    <ThemeProvider responsive={responsive}>
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

### 国际化

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
import En from '@bifrostui/react/locales/en-US';
import CN from '@bifrostui/react/locales/zh-CN';
import TW from '@bifrostui/react/locales/zh-TW';

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
  const [curValue, setCurValue] = useState(En);

  const theme = createTheme({
    locale: curValue,
  });

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
      value: En,
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
    <ThemeProvider theme={theme}>
      <Stack spacing="10px">
        <Select
          defaultValue={En}
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
