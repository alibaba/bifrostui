---
group: Theme
name: ThemeProvider Theme Configuration
---

# ThemeProvider

ThemeProvider is used to configure the theme, allowing you to specify component colors, sizes, language, and more. `ThemeProvider` relies on React's `context` to pass the theme and internationalization to components, so you need to ensure that `ThemeProvider` is a parent of any components you wish to customize.

## Code Examples

## Customizing Themes

**Developers should pay attention to the following two points when customizing Tokens**, for detailed information on theme customization, please refer to [Customizing Themes](/guide/theme).

1. Do not confuse definitions: For different business scenarios, use corresponding APIs to customize Tokens. For example, use responsive properties for responsive layouts, use `defaultDarkToken` or `dmDarkToken` for dark mode, and use `defaultLightToken` or `dmLightToken` to override built-in highlight mode Tokens.
2. Understand priorities: Specific scenario priorities always take precedence over global common scenarios.

### Browser

In browsers, Design Tokens can be customized quite flexibly.

```tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

/**
 * Responsive: Customize Tokens for different screen sizes
 * Configure built-in Tokens and global Tokens for responsive scenarios
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
 * Customize Tokens for default light mode
 * Should configure BUI's built-in default light mode global Tokens
 */
const defaultLightToken = {
  '--bui-color-info-start': '#33a7ff',
  '--bui-color-info-end': '#148aff',
};

/**
 * Customize Tokens for default dark mode
 * Should configure BUI's built-in default dark mode global Tokens
 */
const defaultDarkToken = {
  '--bui-color-info-start': '#11caee',
  '--bui-color-info-end': '#47bfbb',
};

/**
 * Customize component-level Tokens
 * Should configure component-level global Tokens
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
        Customized Tokens
      </Button>
    </ThemeProvider>
  );
};
```

### Local Themes (Nested Themes)

You can configure global Design Tokens related to components by nesting `ThemeProvider` components. BUI does not restrict passing built-in Token properties in component-level custom Tokens to overwrite global built-in Tokens, but it is recommended not to do so unless necessary to avoid confusion in theme configurations.

```tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

const token = {
  '--bui-button-height': '34px',
};

const internalToken = {
  '--bui-button-height': '28px',
  // Not recommended to rewrite built-in Tokens in tokens; try using global variables of components to customize styles
  // '--bui-color-info-end': '#148a00',
};

export default () => {
  return (
    <ThemeProvider isRoot token={token}>
      <Button variant="contained" color="info" style={{ marginRight: '20px' }}>
        Customized Tokens
      </Button>
      <ThemeProvider token={internalToken}>
        <Button variant="contained" color="info" className="test">
          Nested Tokens
        </Button>
      </ThemeProvider>
    </ThemeProvider>
  );
};
```

### Mini Program

Mini Programs cannot dynamically inject code and therefore cannot dynamically configure themes and responsive-related Design Tokens through the `ThemeProvider` component. Currently, there are two ways to modify Mini Program themes:

1. Write corresponding selector Tokens in style files manually; page-level style files will override global style files.
2. Local themes can only be passed inline as CSS variables when using components.

```tsx
import { Button } from '@bifrostui/react';
import React from 'react';
/**
 * 1. Global or page-level theme for Mini Programs can be written in entry or page-level style files with corresponding selector style variables; page-level will override global styles.
 * app.less
 * page { --bui-button-height: 32px }
 */

// 2. Local theme for Mini Programs
export default () => {
  return (
    <Button
      variant="contained"
      color="info"
      style={{ '--bui-button-height': '28px' }}
    >
      Customized Tokens
    </Button>
  );
};
```

## Internationalization

BUI provides Chinese, Traditional Chinese, and English by default. If these do not meet your needs, you can also customize languages at the component level. The following lists the currently internationalized components, and you can switch languages in the demos.

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
        name: 'Bayin Gol',
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
        <div>Language Selection</div>
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
              message: 'Test',
            });
          }}
        >
          Open Dialog
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Picker
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
                label: 'Monday',
              },
              {
                value: 2,
                label: 'Tuesday',
              },
              {
                value: 3,
                label: 'Wednesday',
              },
              {
                value: 4,
                label: 'Thursday',
              },
              {
                value: 5,
                label: 'Friday',
              },
              {
                value: 6,
                label: 'Saturday',
              },
              {
                value: 7,
                label: 'Sunday',
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

### ThemeProviderProps, ThemeProps

| Property          | Description                                            | Type                   | Default |
| ----------------- | ------------------------------------------------------ | ---------------------- | ------- |
| isRoot            | Whether this ThemeProvider is mounted at the top level | boolean                | false   |
| container         | Mounting container                                     | ReactNode              | -       |
| containerId       | ID of the mounting container                           | string                 | -       |
| locale            | Language                                               | BaseLang               | zh-CN   |
| responsive        | Responsive screen breakpoint configuration             | ResponsiveTokenOptions | -       |
| defaultLightToken | Default light theme token                              | Record<string, string> | -       |
| defaultDarkToken  | Default dark theme token                               | Record<string, string> | -       |
| dmLightToken      | Dark mode light theme token                            | Record<string, string> | -       |
| token             | Component global Token                                 | Record<string, string> | -       |

### ResponsiveTokenOptions

| Property | Description        | Type                   | Default  |
| -------- | ------------------ | ---------------------- | -------- |
| xs       | Extra small screen | Record<string, string> | 575.98px |
| sm       | Small screen       | Record<string, string> | 576px    |
| md       | Medium screen      | Record<string, string> | 768px    |
| lg       | Large screen       | Record<string, string> | 992px    |
| xl       | Extra large screen | Record<string, string> | 1200px   |
