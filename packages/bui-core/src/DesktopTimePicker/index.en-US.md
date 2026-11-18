---
group: Date
name: DesktopTimePicker Component
---

# DesktopTimePicker Component

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

Use `disableOpenPicker` to disable the popup selection feature, allowing time change only through input.

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

Use `disabled` to disable the time component.

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

### Close Popup Immediately After Selection

Use `closeOnSelect` to determine whether to close the popup immediately after selecting the time.

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

Use `format` to specify the time display format. Default is `HH:mm:ss`. If `ampm` is `true`, the default is `hh:mm:ss A`.

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

Use `open` to control whether the time component is open.

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

### Specify Selectable Range

Specify a selectable range using `minTime` and `maxTime`.

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
            console.log('Time change:', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Custom Input Icon

Specify the input icon using `icon`.

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
            console.log('Time change:', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Callback on Open/Close

Use `onClose` and `onOpen` to customize callbacks for opening and closing events.

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

### Controlled Time Component

Control the time component using the `value` property.

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
    console.log('Time change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Button onClick={onSingleClick}>Back to Today</Button>
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

Render the component using `defaultValue`. The selected state will be reflected in the input and can be accessed via inputRef.

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
      <div>Time within component: {date}</div>
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

### Custom Content in Time Cells

Enable `timeRender` to customize the content of the time cells.

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

| Property           | Description                                       | Type                                                                                                                                        | Default                                                                        |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| defaultValue       | Default selected value for uncontrolled component | Date \| null                                                                                                                                | -                                                                              |
| value              | Selected value for controlled component           | Date \| null                                                                                                                                | -                                                                              |
| placeholder        | Placeholder text in the input box                 | string                                                                                                                                      | hh:mm:ss A ｜ HH:mm:ss                                                         |
| minTime            | Minimum selectable time                           | Date                                                                                                                                        | -                                                                              |
| maxTime            | Maximum selectable time                           | Date                                                                                                                                        | -                                                                              |
| open               | Whether to keep the popup open                    | boolean                                                                                                                                     | false                                                                          |
| icon               | Input box icon                                    | React.ReactNode                                                                                                                             | \<AccessTimeCircleOutlinedIcon/>                                               |
| views              | Views within the open dropdown                    | Array<'hour' \| 'minute' \| 'second'>                                                                                                       | ['hour', 'minute', 'second']                                                   |
| timeSteps          | Time intervals                                    | {hour?: number;minute?: number; second?: number}                                                                                            | { hour: 1, minute: 1, second: 1 }                                              |
| ampm               | Whether to use 12-hour format                     | boolean                                                                                                                                     | false                                                                          |
| disabledTimeView   | Disable specific time choices                     | () => {hour?: () => number[];minute?:(selectedHour: number) => number[];second?: (selectedHour: number, selectedMinute: number) =>number[]} | () => ({hour: () => {return []}, minute: () => { return []},second: () => []}) |
| disableOpenPicker  | Disable popup selection feature                   | boolean                                                                                                                                     | false                                                                          |
| disabled           | Disable the time picker                           | boolean                                                                                                                                     | false                                                                          |
| closeOnSelect      | Close popup immediately after selection           | boolean                                                                                                                                     | true                                                                           |
| format             | Time formatting                                   | string                                                                                                                                      | HH:mm:ss                                                                       |
| onClose            | Callback when popup closes                        | () => void                                                                                                                                  | -                                                                              |
| onOpen             | Callback when popup opens                         | () => void                                                                                                                                  | -                                                                              |
| onChange           | Callback when time changes                        | (e: React.SyntheticEvent, data: { value: Date \| null }) => void                                                                            | -                                                                              |
| timeRender         | Customize content of time cells                   | (item: {value: number \| string, label: string, disabled:boolean}) => React.ReactNode                                                       | -                                                                              |
| DesktopPickerProps | Props passed to DesktopPicker                     | DesktopPickerProps                                                                                                                          |
| inputRef           | Ref for the input box                             | Ref                                                                                                                                         | -                                                                              |
| inputProps         | Properties passed to the \<input/> tag            | React.InputHTMLAttributes                                                                                                                   | -                                                                              |

## Style Variables

| Global Variable                       | Description                  | Default Value                             |
| ------------------------------------- | ---------------------------- | ----------------------------------------- |
| --bui-d-time-picker-height            | Input box height             | --bui-input-height                        |
| --bui-d-time-picker-min-width         | Minimum width                | --bui-select-min-width                    |
| --bui-d-time-picker-font-size         | Font size                    | --bui-title-size-3                        |
| --bui-d-time-picker-icon-size         | Icon size                    | --bui-title-size-3                        |
| --bui-d-time-picker-container-padding | Input box padding            | --bui-spacing-md                          |
| --bui-d-time-picker-bg                | Background color             | --bui-color-bg-view                       |
| --bui-d-time-picker-font-family       | Font family                  | --bui-font-family                         |
| --bui-d-time-picker-border            | Border                       | 1px solid var(--bui-color-border-default) |
| --bui-d-time-picker-border-invalid    | Border for validation errors | 1px solid var(--bui-color-danger)         |
| --bui-d-time-picker-shadow            | Shadow                       | 0 0 0 2px var(--bui-color-bg-default)     |
| --bui-d-time-picker-disabled-color    | Disabled text color          | --bui-color-fg-subtle                     |

### Time Selection Panel

| Global Variable                               | Description                        | Default Value              |
| --------------------------------------------- | ---------------------------------- | -------------------------- |
| --bui-d-time-picker-container-main-radius     | Popup container radius             | 3px                        |
| --bui-d-time-picker-container-li-padding      | Cell padding left/right            | 8px                        |
| --bui-d-time-picker-container-li-height       | Cell height                        | 24px                       |
| --bui-d-time-picker-container-li-line-height  | Cell line height                   | 24px                       |
| --bui-d-time-picker-container-li-width        | Cell width                         | 24px                       |
| --bui-d-time-picker-container-li-radius       | Cell radius                        | --bui-shape-radius-default |
| --bui-d-time-picker-container-li-font-size    | Cell font size                     | --bui-title-size-4         |
| --bui-d-time-picker-container-li-color        | Cell font color                    | --bui-color-fg-default     |
| --bui-d-time-picker-container-li-color-active | Cell active state font color       | --bui-color-fg-default     |
| --bui-d-time-picker-container-li-bg-active    | Cell active state background color | #ffc7da                    |

```

```
