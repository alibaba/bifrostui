---
group: Date
name: DesktopTimePicker Time Component
---

# DesktopTimePicker Time Component

The DesktopTimePicker component is commonly used for selecting time, including hours, minutes, and seconds.

## Code Demonstration

### Basic Usage

The default `value` should be passed in as a `Date`.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React, { useState } from 'react';
dayjs.extend(customParseFormat);

export default () => {
  const [value, setValue] = useState(new Date());
  const handleChange = (e, res) => {
    setValue(res.value);
  };
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker onChange={handleChange} value={value} />
      </div>
    </Stack>
  );
};
```

### Disable Popup

Use `disableOpenPicker` to disable the popup selection function, allowing only input to change the time.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          disableOpenPicker
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Disabled

Use `disabled` to disable this time component.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker disabled value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Custom Disabled Time

Customize disabled time using `disabledTimeView`.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const disabledTimeView = () => ({
    hour: () => {
      return Array.from({ length: 24 }, (_, i) => i).filter(
        (hour) => hour < 17,
      );
    },
    minute: (selectedHour) => {
      if (selectedHour === 9) {
        return [];
      }
      return Array.from({ length: 60 }, (_, i) => i).filter((hour) => hour < 3);
    },
    second: () => [],
  });

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          disabledTimeView={disabledTimeView}
          value={value}
          onChange={handleChange}
          ampm={false}
        />
      </div>
    </Stack>
  );
};
```

### Close Popup After Selecting Time

Use `closeOnSelect` to determine whether to close the popup immediately after selecting a time.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          closeOnSelect={false}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Specify Time Format

Use `format` to specify the time display format, default is `HH:mm:ss`. If `ampm` is `true`, the default is `hh:mm:ss a`.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          format="hh:mm:ss a"
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Control Popup Open State

Use `open` to control whether the time component is open.

```tsx
import { DesktopTimePicker, Stack, Button } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const [open, setOpen] = useState(false);
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Open'}
        </Button>
        <DesktopTimePicker
          open={open}
          value={value}
          onClose={() => setOpen(false)}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Specify Selection Range

Specify the selection range using `minTime` and `maxTime`.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          closeOnSelect={false}
          value={value}
          minTime={dayjs()
            .set('hour', 6)
            .set('minute', 10)
            .set('second', 0)
            .toDate()}
          maxTime={dayjs()
            .set('hour', 20)
            .set('minute', 10)
            .set('second', 0)
            .toDate()}
          onChange={(e, res) => {
            console.log('Time changed:', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Custom Input Box Icon

Specify the input box icon using `icon`.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          value={value}
          icon={<HelpCircleOutlinedIcon />}
          onChange={(e, res) => {
            console.log('Time changed:', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Callbacks for Closing/Opening

Customize callbacks for closing and opening using `onClose` and `onOpen`.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const onClose = () => {
    console.log('close');
  };
  const onOpen = () => {
    console.log('open');
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          onClose={onClose}
          onOpen={onOpen}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Controlled Time Component

Control the time component using the `value` attribute.

```tsx
import { Button, DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const onSingleClick = () => {
    setValue(dayjs().toDate());
  };
  const handleChange = (e, res) => {
    console.log('Time changed:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Button onClick={onSingleClick}>Go to Today</Button>
        <DesktopTimePicker
          mode="single"
          onChange={handleChange}
          value={value}
        />
      </div>
    </Stack>
  );
};
```

### Uncontrolled Time Component

Render the component using the `defaultValue` attribute. The selected state of the time will be reflected in the input, which can be obtained via `inputRef`.

```tsx
import { DesktopTimePicker, Button, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState();
  const inputRef = React.useRef(null);

  return (
    <Stack>
      <Button onClick={() => setDate(inputRef.current?.value)}>Get Time</Button>
      <div>Time inside the component: {date}</div>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          inputRef={inputRef}
          defaultValue={dayjs().toDate()}
        />
      </div>
    </Stack>
  );
};
```

### Customize Content of Time Cells

Enable `timeRender` to customize the content of time cells.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const timeRender = (time) => {
    return <div style={{ color: 'red' }}>{time.value}</div>;
  };
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          value={value}
          timeRender={timeRender}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### API

| Property           | Description                                                   | Type                                                                                                                                        | Default Value                                                                    |
| ------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| defaultValue       | Default selected value when the component is uncontrolled     | Date \| null                                                                                                                                | -                                                                                |
| value              | Selected value when the component is controlled               | Date \| null                                                                                                                                | -                                                                                |
| placeholder        | Placeholder text for the input box                            | string                                                                                                                                      | -                                                                                |
| minTime            | Minimum selectable time                                       | Date                                                                                                                                        | -                                                                                |
| maxTime            | Maximum selectable time                                       | Date                                                                                                                                        | -                                                                                |
| open               | Whether the popup is open                                     | boolean                                                                                                                                     | false                                                                            |
| icon               | Icon for the input box                                        | React.ReactNode                                                                                                                             | -                                                                                |
| views              | Views to open in the popup                                    | Array<'hour' \| 'minute' \| 'second'>                                                                                                       | ['hour', 'minute', 'second']                                                     |
| timeSteps          | Time intervals                                                | {hour?: number;minute?: number; second?: number}                                                                                            | { hour: 1, minute: 1, second: 1 }                                                |
| ampm               | Whether to use 12-hour clock format                           | boolean                                                                                                                                     | false                                                                            |
| disabledTimeView   | Disabled times                                                | () => {hour?: () => number[];minute?:(selectedHour: number) => number[];second?: (selectedHour: number, selectedMinute: number) =>number[]} | () => ({hour: () => {return [];}, minute: () => { return [];},second: () => []}) |
| disableOpenPicker  | Disable popup selection function                              | boolean                                                                                                                                     | false                                                                            |
| disabled           | Whether to disable the time picker                            | boolean                                                                                                                                     | false                                                                            |
| closeOnSelect      | Whether to close the popup immediately after selecting a time | boolean                                                                                                                                     | true                                                                             |
| format             | Time formatting                                               | string                                                                                                                                      | HH:mm:ss                                                                         |
| onClose            | Callback when the popup closes                                | () => void                                                                                                                                  | -                                                                                |
| onOpen             | Callback when the popup opens                                 | () => void                                                                                                                                  | -                                                                                |
| onChange           | Callback when the time changes                                | (e: React.SyntheticEvent, data: { value: ITimePickerValue }) => void                                                                        | -                                                                                |
| DesktopPickerProps | Props passed to DesktopPicker                                 |                                                                                                                                             |                                                                                  |
| inputRef           | Ref for the input box                                         | Ref                                                                                                                                         | -                                                                                |
| inputProps         | Props passed to the <input/> tag                              | React.InputHTMLAttributes                                                                                                                   | -                                                                                |
| DesktopPickerProps | Props passed to DesktopPicker                                 | DesktopPickerProps                                                                                                                          |

### Component Style Variables

| Property            | Description                             | Default Value | Global Variable        |
| ------------------- | --------------------------------------- | ------------- | ---------------------- |
| --height            | Component height                        | 32px          | --bui-input-height     |
| --min-width         | Selector minimum width                  | 100px         | --bui-select-min-width |
| --icon-size         | Input box icon size                     | 16px          | --bui-icon-size-3      |
| --container-padding | Left and right padding of the input box | 9px           | --bui-spacing-md       |

### Popup Style Variables

| Property                   | Description                                                   | Default Value | Global Variable |
| -------------------------- | ------------------------------------------------------------- | ------------- | --------------- |
| --container-main-radius    | Border radius of the popup container                          | 3px           | -               |
| --container-li-padding     | Left and right padding of elements inside the popup container | 8px           | -               |
| --container-li-height      | Height of elements inside the popup container                 | 24px          | -               |
| --container-li-line-height | Line height of elements inside the popup container            | 24px          | -               |
| --container-li-width       | Width of elements inside the popup container                  | 24px          | -               |
