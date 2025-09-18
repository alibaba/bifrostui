---
group: Basic Input
name: Slider
---

# Slider

A slider for selecting a value within a given range.

## Basic Usage

Use `value` and `onChange` to control the slider.

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(18);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} onChange={handleChange} />
    </Stack>
  );
};
```

### Min and Max Values

Use `min` and `max` to set the slider's value range.

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(29);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} min={10} max={60} onChange={handleChange} />
    </Stack>
  );
};
```

### Custom Step

Customize the step using `step`, which should be a divisor of max-min.

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} step={10} onChange={handleChange} />
    </Stack>
  );
};
```

### Always Show Tooltip

Enable `tipVisible` to always show the tooltip, or it will only display when sliding.

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(29);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} tipVisible onChange={handleChange} />
    </Stack>
  );
};
```

### Dual Handles

Dual handle mode is enabled when the `value` or `defaultValue` is of type `[number, number]`.

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[number, number]>([0, 20]);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} onChange={handleChange} />
    </Stack>
  );
};
```

### Disable Swap

In dual handle mode, use `disableSwap` to prevent handles from swapping positions.

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[number, number]>([0, 20]);
  const handleChange = (e, data) => {
    console.log('123', data.value);
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} disableSwap onChange={handleChange} />
    </Stack>
  );
};
```

### Start/End Icons

Customize the start icon with `startIcon` and the end icon with `endIcon`.

```tsx
import React from 'react';
import { Slider, SliderValue, Stack } from '@bifrostui/react';
import { StarFilledIcon, StarOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const defaultValue: SliderValue = [20, 60];
  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider
        startIcon={<StarFilledIcon htmlColor="#ff335c" />}
        endIcon={<StarOutlinedIcon htmlColor="#00d68f" />}
        defaultValue={defaultValue}
      />
    </Stack>
  );
};
```

### Disabled

Disable the component using `disabled`.

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider defaultValue={50} disabled />
    </Stack>
  );
};
```

### Tooltip Format

Customize the tooltip using `tooltipRender`.

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

const tooltipRender = (value) => {
  const temp = Math.floor(value);
  const hour = temp >= 10 ? temp : `0${temp}`;
  const min = value % 1 === 0 ? '00' : '30';
  return `${hour}:${min}`;
};

export default () => {
  const [value, setValue] = useState(24);
  const handleChange = (e, data) => {
    setValue(data?.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider
        min={0}
        max={24}
        step={0.5}
        value={value}
        tooltipRender={tooltipRender}
        onChange={handleChange}
      />
    </Stack>
  );
};
```

## API

| Property      | Description                                                    | Type                                                                                   | Default |
| ------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------- |
| defaultValue  | Sets the initial value, used in uncontrolled mode              | number \| [number, number]                                                             | -       |
| value         | Sets the current value, used in controlled mode                | number \| [number, number]                                                             | -       |
| min           | Minimum value                                                  | number                                                                                 | 0       |
| max           | Maximum value                                                  | number                                                                                 | 100     |
| step          | Step size, must be greater than 0 and a divisor of (max - min) | number                                                                                 | 1       |
| tipVisible    | Whether the tooltip is always visible                          | boolean                                                                                | false   |
| tooltipRender | Customizes the tooltip                                         | (value: number) => React.ReactNode                                                     | -       |
| disabled      | Whether to disable the component                               | boolean                                                                                | false   |
| startIcon     | Start icon                                                     | React.ReactNode                                                                        | -       |
| endIcon       | End icon                                                       | React.ReactNode                                                                        | -       |
| disableSwap   | Prevents start and end icons from swapping                     | boolean                                                                                | false   |
| onChange      | Callback for change event                                      | (event: React.SyntheticEvent, data: {value: SliderValue; buttonIndex: number}) => void | -       |

## Style Variables

| Global Variable                    | Description                 | Default                           |
| ---------------------------------- | --------------------------- | --------------------------------- |
| --bui-slider-line-color            | Active slider color         | `var(--bui-color-primary)`        |
| --bui-slider-line-bg-color         | Slider background color     | `var(--bui-color-border-default)` |
| --bui-slider-width                 | Slider width                | `100%`                            |
| --bui-slider-height                | Slider height               | `2px`                             |
| --bui-slider-padding               | Slider padding              | `19px 0`                          |
| --bui-slider-button-width          | Slider button width         | `26px`                            |
| --bui-slider-button-height         | Slider button height        | `26px`                            |
| --bui-slider-button-font-size      | Slider button font size     | `var(--bui-title-size-3)`         |
| --bui-slider-button-box-shadow     | Slider button shadow        | `#ddd 0 0 10px`                   |
| --bui-slider-button-border-radius  | Slider button border radius | `50%`                             |
| --bui-slider-tooltip-width         | Tooltip width               | `46px`                            |
| --bui-slider-tooltip-height        | Tooltip height              | `24px`                            |
| --bui-slider-tooltip-line-height   | Tooltip line height         | `24px`                            |
| --bui-slider-tooltip-border-radius | Tooltip border radius       | `24px`                            |
| --bui-slider-tooltip-font-size     | Tooltip font size           | `var(--bui-text-size-3)`          |
| --bui-slider-tooltip-color         | Tooltip text color          | `var(--bui-color-white)`          |
| --bui-slider-tooltip-bg-color      | Tooltip background color    | `var(--bui-slider-line-color)`    |
