---
group: theme
name: ThemeProvider Theme Configuration
---

# ThemeProvider

Theme configuration can be used to specify component colors, sizes, languages, etc.
ThemeProvider relies on React's' context 'to pass themes and internationalization to components, so you need to ensure that ThemeProvider is the parent of the component you are trying to customize.

## Code demonstration

## Theme customization

\*\*Developers should pay attention to the following two points when customizing Tokens. For detailed information on theme customization, please refer to [Customize Theme] (/guide/theme).

1. Do not confuse definitions: Different business scenarios should use corresponding APIs to customize Tokens. For example, responsive layout should use the responsive attribute, dark mode should use the defaultDarkToken or dmDarkToken attribute, and overlay built-in highlight mode Tokens should use defaultLightToken or dmLightToken.
2. Distinguish priorities: The priority of special scenarios is always higher than that of global general scenarios.

### browser

You can flexibly customize Design Tokens in the browser.

```tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

/**
 * 响应式：不同屏幕尺寸下自定义Tokens
 * 可配置响应式场景下的内置Tokens和组件的全局Tokens
 */
const responsive = {
  xs: {
    '--bui-button-border-radius': '2px',
  },
  sm: {
    '--bui-button-border-radius': '6px',
  },
  md: {
    '--bui-button-border-radius': '10px',
  },
  lg: {
    '--bui-button-border-radius': '14px',
  },
  xl: {
    '--bui-button-border-radius': '16px',
  },
};

/**
 * 默认高亮模式自定义Tokens
 * 应配置BUI内置默认高亮模式全局Tokens
 */
const defaultLightToken = {
  '--bui-color-info-start': '#33a7ff',
  '--bui-color-info-end': '#148aff',
};

/**
 * 默认暗黑模式自定义Tokens
 * 应配置BUI内默认置暗黑模式全局Tokens
 */
const defaultDarkToken = {
  '--bui-color-info-start': '#11caee',
  '--bui-color-info-end': '#47bfbb',
};

/**
 * 自定义组件Tokens
 * 应配置组件级别的全局Tokens
 */
const token = {
  '--bui-button-height': '34px',
};

export default () => {
  return (
    <ThemeProvider
      isRoot
      token={token}
      responsive={responsive}
      defaultLightToken={defaultLightToken}
      defaultDarkToken={defaultDarkToken}
    >
      <Button variant="contained" color="info">
        自定义Tokens
      </Button>
    </ThemeProvider>
  );
};
```

### Local themes (nested themes)

Global Design Tokens related to components can be configured by nested ThemeProvider components. BUI does not restrict the transmission of built-in Token properties in custom Tokens at the component level to override global built-in Tokens, but it is recommended not to do so unless necessary to avoid confusion in theme configuration.

```tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

const token = {
  '--bui-button-height': '34px',
};

const internalToken = {
  '--bui-button-height': '28px',
  // 不推荐在token中复写内置Token，尽量使用组件的全局变量来定制样式
  // '--bui-color-info-end': '#148a00',
};

export default () => {
  return (
    <ThemeProvider isRoot token={token}>
      <Button variant="contained" color="info" style={{ marginRight: '20px' }}>
        自定义Tokens
      </Button>
      <ThemeProvider token={internalToken}>
        <Button variant="contained" color="info" className="test">
          嵌套的Tokens
        </Button>
      </ThemeProvider>
    </ThemeProvider>
  );
};
```

### Mini program

Code cannot be dynamically injected into mini programs, and themes and responsive design tokens cannot be dynamically configured through the ThemeProvider component. Currently, the following two methods are supported to modify mini program themes:

1. Write the corresponding tokens under the selector in the style file, and the theme configuration of the global style file will be overwritten by the page level style file.
2. Local themes can only be passed in CSS variables inline when using components.

```tsx
import { Button } from '@bifrostui/react';
import React from 'react';
/**
 * 1.小程序全局或页面级主题，可在入口或页面级样式文件中自行书写选择器对应的样式变量，页面级会覆盖全局样式
 * app.less
 * page { --bui-button-height: 32px }
 */

// 2.小程序局部主题
export default () => {
  return (
    <Button
      variant="contained"
      color="info"
      style={{ '--bui-button-height': '28px' }}
    >
      自定义Tokens
    </Button>
  );
};
```

## internationalization

Here are the components in BUI that require internationalization support. You can switch languages in the demonstration.
Currently, the components that support internationalization include: Picker, Calendar, Input, TextArea, Select, CitySelector, and Dialog

```tsx
import {
  ThemeProvider,
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
  const [dialog, contextHolder] = Dialog.useDialog();
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
      {contextHolder}
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
            dialog.confirm({
              message: '测试',
            });
          }}
        >
          Dialog
        </Button>
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
        <TextArea style={{ width: '300px' }} />
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

### API

#### ThemeProviderProps、ThemeProps

| attribute         | explain                                               | type                   | Default value |
| ----------------- | ----------------------------------------------------- | ---------------------- | ------------- |
| isRoot            | Is the current ThemeProvider mounted at the top level | boolean                | false         |
| container         | Mounted container                                     | ReactNode              | -             |
| containerId       | Mount the container's ID                              | string                 | -             |
| locale            | language                                              | BaseLang               | zh-CN         |
| responsive        | Responsive screen breakpoint configuration            | ResponsiveTokenOptions | -             |
| defaultLightToken | Default highlight theme token                         | Record<string, string> | -             |
| defaultDarkToken  | Default Dark Theme Token                              | Record<string, string> | -             |
| dmLightToken      | Damai Dark Theme Token                                | Record<string, string> | -             |
| token             | Component Global Token                                | Record<string, string> | -             |

#### ResponsiveTokenOptions

| attribute | explain            | type                   | Default value |
| --------- | ------------------ | ---------------------- | ------------- |
| xs        | Ultra small screen | Record<string, string> | 575.98px      |
| sm        | Small screen       | Record<string, string> | 576px         |
| md        | Medium screen      | Record<string, string> | 768px         |
| lg        | Large screen       | Record<string, string> | 992px         |
| xl        | Large screen       | Record<string, string> | 1200px        |
