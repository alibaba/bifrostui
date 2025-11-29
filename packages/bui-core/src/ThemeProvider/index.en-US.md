---
group: Theme
name: ThemeProvider Configuration
---

# ThemeProvider

The theme configuration can be used to specify component colors, sizes, language, etc. `ThemeProvider` relies on React's `context` to propagate theme and localization to the components, so you need to ensure that `ThemeProvider` is the parent of the components you are attempting to customize.

## Theme Customization

**There are two points developers should note when customizing Tokens.** For more detailed information on theme customization, please refer to [Custom Theme](/guide/theme).

1. Avoid confusion in definition: Different business scenarios should use the respective API to customize Tokens. For example, responsive layouts should use responsive attributes, dark mode should use defaultDarkToken, and built-in highlight mode Tokens should be overridden using defaultLightToken or dmLightToken.
2. Determine the priority: The priority of special scenarios always outweighs the global general scenarios.

### Browser

In the browser, Design Tokens can be customized flexibly.

```tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import * as React from 'react';

/**
 * Responsive: Customize Tokens for different screen sizes
 * Configurable built-in Tokens for responsive scenarios and global Tokens for components
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
 * Custom Tokens for default light mode
 * Configure global Tokens for BUI's built-in default light mode
 */
const defaultLightToken = {
  '--bui-color-info-start': '#ff335c',
  '--bui-color-info-end': '#ff7600',
};

/**
 * Custom Tokens for default dark mode
 * Configure global Tokens for BUI's built-in default dark mode
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
      <Button variant="contained" color="info">
        info
      </Button>
    </ThemeProvider>
  );
};
```

````

### Local Theme (Nested Theme)

Design Tokens for components can be configured by nesting `ThemeProvider` components.

```tsx
import { ThemeProvider, Button } from '@bifrostui/react';
import * as React from 'react';

const token = {
  '--bui-btn-height': '40px',
};

const internalToken = {
  '--bui-btn-height': '28px',
};

export default () => {
  return (
    <ThemeProvider isRoot token={token}>
      <Button variant="contained" color="info" style={{ marginRight: '20px' }}>
        Outer Button
      </Button>
      <ThemeProvider token={internalToken}>
        <Button variant="contained" color="info">
          Inner Button
        </Button>
      </ThemeProvider>
    </ThemeProvider>
  );
};
```

### Mini Programs

In mini programs, it is not possible to inject code dynamically or use the `ThemeProvider` component to dynamically configure themes and responsive-related Design Tokens. Currently, two methods are supported for modifying the themes of mini programs:

1. Write Tokens under the corresponding selectors in the styles file yourself; the theme configuration in the global styles file will be overridden by page-level styles files.
2. Local themes can only be passed in css variables in an inline manner when using components.

```tsx
import { Button } from '@bifrostui/react';
import * as React from 'react';
/**
 * 1. Global or page-level theme for mini programs can be written by yourself in the entry or page-level styles files; page-level will override global styles
 * app.less
 * page { --bui-btn-height: 32px }
 */

// 2. Local theme for mini programs
export default () => {
  return (
    <Button
      variant="contained"
      color="info"
      style={{ '--bui-btn-height': '28px' }}
    >
      Custom Tokens
    </Button>
  );
};
```

## Internationalization

BUI provides default languages: Simplified Chinese, Traditional Chinese, and English. If these do not meet your needs, customization at the component level is also supported. Below are the components involving internationalization; you can switch languages in the demos.

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
        name: 'Bayingol',
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

| Property          | Description                                                    | Type                   | Default |
| ----------------- | -------------------------------------------------------------- | ---------------------- | ------- |
| isRoot            | Whether the current ThemeProvider is mounted at the root level | boolean                | false   |
| container         | The container to mount                                         | ReactNode              | -       |
| containerId       | The id of the mount container                                  | string                 | -       |
| locale            | Language                                                       | BaseLang               | zh-CN   |
| responsive        | Configuration for responsive screen breakpoints                | ResponsiveTokenOptions | -       |
| defaultLightToken | Token for default light theme                                  | Record<string, string> | -       |
| defaultDarkToken  | Token for default dark theme                                   | Record<string, string> | -       |
| dmLightToken      | Token for Taobao dark theme                                    | Record<string, string> | -       |
| token             | Global Token for the component                                 | Record<string, string> | -       |

### ResponsiveTokenOptions

| Property | Description        | Type                   | Default  |
| -------- | ------------------ | ---------------------- | -------- |
| xs       | Extra small screen | Record<string, string> | 575.98px |
| sm       | Small screen       | Record<string, string> | 576px    |
| md       | Medium screen      | Record<string, string> | 768px    |
| lg       | Large screen       | Record<string, string> | 992px    |
| xl       | Extra large screen | Record<string, string> | 1200px   |

```

```
````
