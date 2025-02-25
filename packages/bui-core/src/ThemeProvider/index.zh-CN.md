---
group: 主题
name: ThemeProvider 主题配置
---

# ThemeProvider

主题配置，可以用来指定组件颜色、尺寸、语言等。
`ThemeProvider`依赖React的`context`将主题、国际化传递给组件，因此您需要确保`ThemeProvider` 是您尝试自定义组件的父级。

## 主题定制

**开发者在自定义Tokens时，需注意以下两点**，关于主题定制的详细信息请参考[定制主题](/guide/theme)。

1. 不要混淆定义：不同业务场景，应使用对应的API来自定义Tokens，如响应式布局应使用 responsive 属性，暗黑模式应使用 defaultDarkToken，覆盖内置高亮模式Tokens应使用 defaultLightToken 或 dmLightToken 。
2. 分清优先级：特殊场景的优先级永远大于全局通用场景。

### 浏览器

在浏览器中可以比较灵活地自定义Design Tokens。

```tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

/**
 * 响应式：不同屏幕尺寸下自定义Tokens
 * 可配置响应式场景下的内置Tokens和组件的全局Tokens
 */
const responsive = {
  xs: {
    '--bui-btn-border-radius': '2px',
  },
  sm: {
    '--bui-btn-border-radius': '6px',
  },
  md: {
    '--bui-btn-border-radius': '10px',
  },
  lg: {
    '--bui-btn-border-radius': '14px',
  },
  xl: {
    '--bui-btn-border-radius': '16px',
  },
};

/**
 * 默认高亮模式自定义Tokens
 * 应配置BUI内置默认高亮模式全局Tokens
 */
const defaultLightToken = {
  '--bui-color-info-start': '#ff335c',
  '--bui-color-info-end': '#ff7600',
};

/**
 * 默认暗黑模式自定义Tokens
 * 应配置BUI内默认置暗黑模式全局Tokens
 */
const defaultDarkToken = {
  '--bui-color-info-start': '#ff7600',
  '--bui-color-info-end': '#ff335c',
};

export default () => {
  return (
    <ThemeProvider
      isRoot
      responsive={responsive}
      defaultLightToken={defaultLightToken}
      defaultDarkToken={defaultDarkToken}
    >
      <Button variant="contained" size="large" color="info">
        info
      </Button>
    </ThemeProvider>
  );
};
```

### 局部主题（嵌套主题）

可通过嵌套`ThemeProvider`组件来配置组件的Design Tokens。

```tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

const token = {
  '--bui-btn-height': '40px',
};

const internalToken = {
  '--bui-btn-height': '28px',
};

export default () => {
  return (
    <ThemeProvider isRoot token={token}>
      <Button
        variant="contained"
        size="large"
        color="info"
        style={{ marginRight: '20px' }}
      >
        Outter Button
      </Button>
      <ThemeProvider token={internalToken}>
        <Button variant="contained" size="large" color="info">
          Inner Button
        </Button>
      </ThemeProvider>
    </ThemeProvider>
  );
};
```

### 小程序

小程序中无法动态注入代码，无法通过`ThemeProvider`组件动态配置主题和响应式相关Design Tokens，目前支持以下两种方式来修改小程序主题：

1. 在样式文件中自行书写对应选择器下的Tokens，全局样式文件的主题配置会被页面级样式文件覆盖。
2. 局部主题只能在使用组件时通过内联的方式传入css变量。

```tsx
import { Button } from '@bifrostui/react';
import React from 'react';
/**
 * 1.小程序全局或页面级主题，可在入口或页面级样式文件中自行书写选择器对应的样式变量，页面级会覆盖全局样式
 * app.less
 * page { --bui-btn-height: 32px }
 */

// 2.小程序局部主题
export default () => {
  return (
    <Button
      variant="contained"
      color="info"
      style={{ '--bui-btn-height': '28px' }}
    >
      自定义Tokens
    </Button>
  );
};
```

## 国际化

BUI 默认提供了中文、繁体中文和英语三种语言，若无法满足需求，也支持按组件维度自定义语言，此处列出目前涉及国际化的组件，你可以在演示里切换语言。

```tsx
import {
  ThemeProvider,
  Button,
  Dialog,
  Stack,
  Picker,
  Calendar,
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
  const [curValue, setCurValue] = useState(EN);
  const [dialog, contextHolder] = Dialog.useDialog();
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
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
      {contextHolder}
      <Stack spacing="10px">
        <div>语言选择</div>
        <Select
          defaultValue={EN}
          onChange={(e, { value: locale }) => {
            setCurValue(locale);
          }}
        >
          {optionInt.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Button
          onClick={() => {
            dialog.confirm({
              message: '测试',
            });
          }}
        >
          open Dialog
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          open Picker
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

## API

### ThemeProviderProps、ThemeProps

| 属性              | 说明                              | 类型                   | 默认值 |
| ----------------- | --------------------------------- | ---------------------- | ------ |
| isRoot            | 当前ThemeProvider是否挂载在最顶层 | boolean                | false  |
| container         | 挂载的容器                        | ReactNode              | -      |
| containerId       | 挂载容器的id                      | string                 | -      |
| locale            | 语言                              | BaseLang               | zh-CN  |
| responsive        | 响应式屏幕断点配置                | ResponsiveTokenOptions | -      |
| defaultLightToken | 默认高亮主题token                 | Record<string, string> | -      |
| defaultDarkToken  | 默认暗黑主题token                 | Record<string, string> | -      |
| dmLightToken      | 大麦暗黑主题token                 | Record<string, string> | -      |
| token             | 组件全局Token                     | Record<string, string> | -      |

### ResponsiveTokenOptions

| 属性 | 说明     | 类型                   | 默认值   |
| ---- | -------- | ---------------------- | -------- |
| xs   | 超小屏幕 | Record<string, string> | 575.98px |
| sm   | 小屏幕   | Record<string, string> | 576px    |
| md   | 中屏幕   | Record<string, string> | 768px    |
| lg   | 大屏幕   | Record<string, string> | 992px    |
| xl   | 超大屏幕 | Record<string, string> | 1200px   |
