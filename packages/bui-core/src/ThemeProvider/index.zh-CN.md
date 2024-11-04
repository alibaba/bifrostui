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

BUI的Tokens分为三个层面：

1. BUI内置Tokens：包括`defaultLightToken`（默认高亮模式的全局Token）、`defaultDarkToken`（默认暗黑模式的全局Token）、`dmLightToken`（大麦高亮模式的全局Token）、`dmDarkToken`（大麦暗黑模式的全局Token）。
2. 响应式Tokens：BUI默认是移动端优先的响应式方案，使用者可以通过`responsive`自定义响应式Tokens。
3. 组件的Tokens：BUI在实现组件时，允许使用者通过`token`能够比较灵活地自定义组件样式。

通常情况下，从局部高于通用的角度来看，三种Tokens的优先级是：组件的Tokens > 响应式Tokens > BUI内置Tokens。但对于暗黑模式这种特殊场景，BUI内置的两种暗黑模式Tokens的优先级要高于响应式Tokens。

原则性：开发者在自定义Tokens时，应保持以下原则。

1. 不要混淆定义：不同业务场景，应使用对应的API来自定义Tokens，如响应式布局应使用`responsive`属性，暗黑模式应使用`defaultDarkToken`或`dmDarkToken`属性。
2. 分清优先级：特殊场景的优先级永远大于全局通用场景。

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

### 国际化

此处列出 BUI 中需要国际化支持的组件，你可以在演示里切换语言。
目前支持国际化的组件有：`Picker`, `Calendar`, `Input`, `TextArea`, `Select`, `CitySelector`

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
  EN,
  CN,
  TW,
} from '@bifrostui/react';
import React, { useState } from 'react';
import dayjs from 'dayjs/esm/index';

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
        <div>语言选择</div>
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
