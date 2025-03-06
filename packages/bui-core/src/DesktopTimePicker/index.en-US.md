---
group: Date
name: DesktopTimePicker Time Component
---

# DesktopTimePicker Time Component

The DesktopTimePicker component is commonly used for selecting time, including hours, minutes, and seconds.

## Code Examples

### Basic Usage

The default `value` should be a `Date`.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

Use `disableOpenPicker` to disable the popup selection functionality, allowing only input to change the time.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

Use `disabled` to disable the time picker.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

Customize disabled times using `disabledTimeView`.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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
import dayjs from 'dayjs';
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

Use `format` to specify the time display format, default is `HH:mm:ss`. If `ampm` is `true`, the default is `hh:mm:ss A`.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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
          format="hh:mm:ss A"
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Control Popup Open State

Use `open` to control whether the time picker is open.

```tsx
import { DesktopTimePicker, Stack, Button } from '@bifrostui/react';
import dayjs from 'dayjs';
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

Use `minTime` and `maxTime` to specify the selection range.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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
import dayjs from 'dayjs';
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

### Callbacks for Opening/Closing

Customize callbacks for opening and closing using `onClose` and `onOpen`.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

### Controlled Time Picker

Control the time picker using the `value` attribute.

```tsx
import { Button, DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

### Uncontrolled Time Picker

Render the component using the `defaultValue` attribute. The selected time will be reflected in the input, which can be accessed via `inputRef`.

```tsx
import { DesktopTimePicker, Button, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

### Custom Content of Time Cells

Enable `timeRender` to customize the content of time cells.

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

| Property           | Description                                                     | Type                                                                                                                                        | Default Value                                                                  |
| ------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| defaultValue       | Default selected value, used when the component is uncontrolled | Date \| null                                                                                                                                | -                                                                              |
| value              | Selected value, used when the component is controlled           | Date \| null                                                                                                                                | -                                                                              |
| placeholder        | Placeholder text in the input box                               | string                                                                                                                                      | hh:mm:ss A ｜ HH:mm:ss                                                         |
| minTime            | Minimum selectable time                                         | Date                                                                                                                                        | -                                                                              |
| maxTime            | Maximum selectable time                                         | Date                                                                                                                                        | -                                                                              |
| open               | Whether the popup is open                                       | boolean                                                                                                                                     | false                                                                          |
| icon               | Icon in the input box                                           | React.ReactNode                                                                                                                             | `<AccessTimeCircleOutlinedIcon/ >`                                             |
| views              | Views opened in the popup                                       | Array<'hour' \| 'minute' \| 'second'>                                                                                                       | ['hour', 'minute', 'second']                                                   |
| timeSteps          | Time intervals                                                  | {hour?: number;minute?: number; second?: number}                                                                                            | { hour: 1, minute: 1, second: 1 }                                              |
| ampm               | Whether to use 12-hour format                                   | boolean                                                                                                                                     | false                                                                          |
| disabledTimeView   | Times that cannot be selected                                   | () => {hour?: () => number[];minute?:(selectedHour: number) => number[];second?: (selectedHour: number, selectedMinute: number) =>number[]} | () => ({hour: () => {return []}, minute: () => { return []},second: () => []}) |
| disableOpenPicker  | Disable popup selection functionality                           | boolean                                                                                                                                     | false                                                                          |
| disabled           | Whether to disable the time picker                              | boolean                                                                                                                                     | false                                                                          |
| closeOnSelect      | Whether to close immediately after selecting a time             | boolean                                                                                                                                     | true                                                                           |
| format             | Time formatting                                                 | string                                                                                                                                      | HH:mm:ss                                                                       |
| onClose            | Callback when the popup closes                                  | () => void                                                                                                                                  | -                                                                              |
| onOpen             | Callback when the popup opens                                   | () => void                                                                                                                                  | -                                                                              |
| onChange           | Callback when the time changes                                  | (e: React.SyntheticEvent, data: { value: Date \| null }) => void                                                                            | -                                                                              |
| timeRender         | Customize the content of time cells                             | (item: {value: number \| string, label: string, disabled:boolean}) => React.ReactNode                                                       | -                                                                              |
| DesktopPickerProps | Props passed to DesktopPicker                                   |                                                                                                                                             |                                                                                |
| inputRef           | Input box Ref                                                   | Ref                                                                                                                                         | -                                                                              |
| inputProps         | Props passed to the `<input/>` tag                              | React.InputHTMLAttributes                                                                                                                   | -                                                                              |
| DesktopPickerProps | Props passed to DesktopPicker                                   | DesktopPickerProps                                                                                                                          |

## Style Variables

| Global Variable                       | Description                             | Default Value                             |
| ------------------------------------- | --------------------------------------- | ----------------------------------------- |
| --bui-d-time-picker-height            | Input box height                        | --bui-input-height                        |
| --bui-d-time-picker-min-width         | Minimum width                           | --bui-select-min-width                    |
| --bui-d-time-picker-font-size         | Font size                               | --bui-title-size-3                        |
| --bui-d-time-picker-icon-size         | Icon size                               | --bui-title-size-3                        |
| --bui-d-time-picker-container-padding | Padding left and right of the input box | --bui-spacing-md                          |
| --bui-d-time-picker-bg                | Background color                        | --bui-color-bg-view                       |
| --bui-d-time-picker-font-family       | Font                                    | --bui-font-family                         |
| --bui-d-time-picker-border            | Border                                  | 1px solid var(--bui-color-border-default) |
| --bui-d-time-picker-border-invalid    | Invalid border                          | 1px solid var(--bui-color-danger)         |
| --bui-d-time-picker-shadow            | Shadow                                  | 0 0 0 2px var(--bui-color-bg-default)     |
| --bui-d-time-picker-disabled-color    | Disabled text color                     | --bui-color-fg-subtle                     |

### Time Selection Panel

| Global Variable                               | Description                        | Default Value              |
| --------------------------------------------- | ---------------------------------- | -------------------------- |
| --bui-d-time-picker-container-main-radius     | Popup container border radius      | 3px                        |
| --bui-d-time-picker-container-li-padding      | Left and right padding of the cell | 8px                        |
| --bui-d-time-picker-container-li-height       | Cell height                        | 24px                       |
| --bui-d-time-picker-container-li-line-height  | Cell line height                   | 24px                       |
| --bui-d-time-picker-container-li-width        | Cell width                         | 24px                       |
| --bui-d-time-picker-container-li-radius       | Cell border radius                 | --bui-shape-radius-default |
| --bui-d-time-picker-container-li-font-size    | Cell font size                     | --bui-title-size-4         |
| --bui-d-time-picker-container-li-color        | Cell font color                    | --bui-color-fg-default     |
| --bui-d-time-picker-container-li-color-active | Active cell font color             | --bui-color-primary        |
| --bui-d-time-picker-container-li-bg-active    | Active cell background color       | #fff2f0                    |
