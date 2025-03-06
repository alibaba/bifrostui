---
group: Basic Input
name: Slider Slider Input Bar
---

# Slider Slider Input Bar

The slider input bar is used for selecting a value within a given range.

## Code Examples

### Basic Usage

Control the slider using `value` and `onChange`.

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

### Minimum and Maximum Values

Use `min` and `max` to set the range of values for the slider.

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

### Custom Step Size

Set a custom step size with `step`, which should be an integer multiple of `max-min`.

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

Enable `tipVisible` to always show the tooltip; otherwise, it will only appear when sliding.

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

### Dual Sliders

When `value` or `defaultValue` is of type `[number, number]`, dual sliders mode is enabled.

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

### Prevent Overlapping Handles

In dual slider mode, use `disableSwap` to prevent handles from overlapping.

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

Customize start and end icons using `startIcon` and `endIcon`.

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

### Disabled State

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

### Tooltip Formatting

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
| defaultValue  | Sets the initial value when the component is uncontrolled      | number \| [number, number]                                                             | -       |
| value         | Sets the current value when the component is controlled        | number \| [number, number]                                                             | -       |
| min           | Minimum value                                                  | number                                                                                 | 0       |
| max           | Maximum value                                                  | number                                                                                 | 100     |
| step          | Step size, must be greater than 0 and divisible by (max - min) | number                                                                                 | 1       |
| tipVisible    | Whether the tooltip is always visible                          | boolean                                                                                | false   |
| tooltipRender | Customize the tooltip                                          | (value: number) => React.ReactNode                                                     | -       |
| disabled      | Whether the component is disabled                              | boolean                                                                                | false   |
| startIcon     | Start icon                                                     | React.ReactNode                                                                        | -       |
| endIcon       | End icon                                                       | React.ReactNode                                                                        | -       |
| disableSwap   | Prevent start and end icons from swapping                      | boolean                                                                                | false   |
| onChange      | Callback function on change                                    | (event: React.SyntheticEvent, data: {value: SliderValue; buttonIndex: number}) => void | -       |

## Style Variables

| Property                | Description              | Default Value              | Global Variable                    |
| ----------------------- | ------------------------ | -------------------------- | ---------------------------------- |
| --line-color            | Line foreground color    | --bui-color-primary        | --bui-slider-line-color            |
| --line-bg-color         | Line background color    | --bui-color-border-default | --bui-slider-line-bg-color         |
| --width                 | Slider width             | 100%                       | --bui-slider-width                 |
| --height                | Slider height            | 2px                        | --bui-slider-height                |
| --padding               | Slider padding           | 19px 0                     | --bui-slider-padding               |
| --button-width          | Button width             | 100%                       | --bui-slider-button-width          |
| --button-height         | Button height            | 2px                        | --bui-slider-button-height         |
| --button-font-size      | Button font size         | --bui-title-size-3         | --bui-slider-button-font-size      |
| --button-border-radius  | Button border radius     | 50%                        | --bui-slider-button-border-radius  |
| --tooltip-font-size     | Tooltip font size        | --bui-text-size-3          | --bui-tooltip-font-size            |
| --tooltip-color         | Tooltip font color       | --bui-color-white          | --bui-tooltip-color                |
| --tooltip-bg-color      | Tooltip background color | --line-color               | --bui-tooltip-bg-color             |
| --tooltip-width         | Tooltip width            | 46px                       | --bui-slider-tooltip-width         |
| --tooltip-height        | Tooltip height           | 24px                       | --bui-slider-tooltip-height        |
| --tooltip-line-height   | Tooltip line height      | 24px                       | --bui-slider-tooltip-line-height   |
| --tooltip-border-radius | Tooltip border radius    | 24px                       | --bui-slider-tooltip-border-radius |
