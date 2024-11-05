---
group: Basic input
name: Slider
---

# Slider

Slide the input bar to select a value within a given range.

## Code demonstration

### Basic usage

Use`value`and`onChange`control the sliding input bar.

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

### Maximum and minimum values

Use`min`and`max`slide to limit the value range of the input bar.

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

Adopt`step`customizable step size,`step`it should be an integer multiple of max min.

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

### Always display prompt bubbles

Enable`tipVisible`，the prompt bubble will always be displayed, otherwise it will only be displayed when sliding.

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

### Double slider

When`value`or`defaultValue`the type is`[number, number]`the dual slider mode will be enabled.

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

### Prohibit interlocking of front and rear buttons

When using double sliders, it is possible to use`disableSwap`prohibit interlocking of front and rear buttons.

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

### Start/End icon

Adopt`startIcon`customizable front button icon, through`endIcon`customizable back button icon.

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

### Disable

Use`disabled`disable components.

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

### Bubble prompt formatting

Use`tooltipRender`customizable prompt bubbles.

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

| attribute     | explain                                                                | type                                                                                 | Default value |
| ------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------- |
| defaultValue  | Set initial value, to be used when the component is uncontrolled       | number \| [number, number]                                                           | -             |
| value         | Set the current value to be used when the component is controlled      | number \| [number, number]                                                           | -             |
| min           | minimum value                                                          | number                                                                               | 0             |
| max           | Maximum value                                                          | number                                                                               | 100           |
| step          | Step size, the value must be greater than 0 and divisible by (max min) | number                                                                               | 1             |
| tipVisible    | Prompt whether bubbles are always visible                              | boolean                                                                              | false         |
| tooltipRender | Customize prompt bubbles                                               | (value: number) => React.ReactNode                                                   | -             |
| disabled      | Do you want to disable it                                              | boolean                                                                              | false         |
| startIcon     | Start icon                                                             | React.ReactNode                                                                      | -             |
| endIcon       | End icon                                                               | React.ReactNode                                                                      | -             |
| disableSwap   | Prohibit interleaving of start and end icons                           | boolean                                                                              | false         |
| onChange      | Callback when changing                                                 | (event: React.SyntheticEvent,data: {value: SliderValue;buttonIndex: number}) => void | -             |

## Style variables

| attribute               | explain                                 | Default value              | global variable                    |
| ----------------------- | --------------------------------------- | -------------------------- | ---------------------------------- |
| --line-color            | Line foreground scenery                 | --bui-color-primary        | -                                  |
| --line-bg-color         | Line background color                   | --bui-color-border-default | -                                  |
| --width                 | Sliding input bar width                 | 100%                       | --bui-slider-width                 |
| --height                | Sliding input bar height                | 2px                        | --bui-slider-height                |
| --padding               | Slide the inner margin of the input bar | 19px 0                     | --bui-slider-padding               |
| --button-width          | Sliding button width                    | 100%                       | --bui-slider-button-width          |
| --button-height         | Slide button height                     | 2px                        | --bui-slider-button-height         |
| --button-font-size      | Font size of sliding button             | --line-color               | -                                  |
| --button-border-radius  | Sliding button border rounded corner    | 50%                        | --bui-slider-button-border-radius  |
| --tooltip-font-size     | Prompt for bubble font size             | --bui-text-size-3          | -                                  |
| --tooltip-color         | Prompt bubble font color                | --bui-color-white          | -                                  |
| --tooltip-bg-color      | Prompt bubble background color          | --line-color               | -                                  |
| --tooltip-width         | Prompt bubble width                     | 46px                       | --bui-slider-tooltip-width         |
| --tooltip-height        | Prompt bubble height                    | 24px                       | --bui-slider-tooltip-height        |
| --tooltip-line-height   | Prompt bubble height                    | 24px                       | --bui-slider-tooltip-line-height   |
| --tooltip-border-radius | Prompt bubble border rounded corners    | 24px                       | --bui-slider-tooltip-border-radius |
