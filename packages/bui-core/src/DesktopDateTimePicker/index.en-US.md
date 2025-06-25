---
group: Date
name: DesktopDateTimePicker Component
---

# DesktopDateTimePicker Component

The DesktopDateTimePicker component is commonly used for selecting dates, including year, month, and day.

## Code Examples

### Basic Usage

The default `value` should be a `Date`, and the selectable range by default includes plus and minus 10 years from the current year.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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
      <div style={{ width: '300px' }}>
        <DesktopDateTimePicker value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Disable Popover

Use `disableOpenPicker` to disable the popover selection function, only allowing date entry.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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
        <DesktopDateTimePicker
          disableOpenPicker
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Disable Component

Use `disabled` to disable the date picker component.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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
        <DesktopDateTimePicker disabled value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Disable Specific Dates

Customize the disabled dates using the `disabledDate` prop.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const disabledDate = (currentDate) => {
    return (
      ['2024-12-20', '2024-12-21'].indexOf(
        dayjs(currentDate).format('YYYY-MM-DD'),
      ) > -1 || ['2023', '2022'].indexOf(dayjs(currentDate).format('YYYY')) > -1
    );
  };
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDateTimePicker
          disabledDate={disabledDate}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Close Popover on Date Selection

Use `closeOnSelect` to control whether the popover closes immediately after date selection.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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
        <DesktopDateTimePicker
          closeOnSelect
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Specify Date Format

Use `format` to specify the display format of the date. The default is `YYYY/MM/DD HH:mm:ss`.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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
        <DesktopDateTimePicker
          format="YYYY-MM-DD HH:mm:ss"
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Control Popover State

Use `open` to control whether the date picker popover is open.

```tsx
import { DesktopDateTimePicker, Stack, Button } from '@bifrostui/react';
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
        <DesktopDateTimePicker
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

Use `minDate` and `maxDate` to set the selectable date range.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs('20230401').toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDateTimePicker
          value={value}
          minDate={dayjs('20200402110310').toDate()}
          maxDate={dayjs('20230429120000').toDate()}
          onChange={(e, res) => {
            console.log('date change:', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Custom Icon for Input

Use the `icon` prop to specify the icon for the input box.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs('20230401').toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDateTimePicker
          value={value}
          icon={<HelpCircleOutlinedIcon />}
          onChange={(e, res) => {
            console.log('date change:', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### DatePicker Types

Use `views` to specify the selectable range of the date picker.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs('20230401').toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDateTimePicker
          value={value}
          views={['year', 'month', 'hour', 'minute', 'second']}
          format="YYYY-MM"
          onChange={(e, res) => {
            console.log('date change:', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Custom Left and Right Icons for the Header Bar

Use `headerBarLeftIcon` and `headerBarRightIcon` to customize the icons for the left and right of the header bar.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import {
  DoubleArrowLeftTwoToneIcon,
  DoubleArrowRightTwoToneIcon,
} from '@bifrostui/icons';
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
        <DesktopDateTimePicker
          headerBarLeftIcon={({ isMinMonth }) => (
            <DoubleArrowLeftTwoToneIcon htmlColor={isMinMonth && '#cccccc'} />
          )}
          headerBarRightIcon={({ isMaxMonth }) => (
            <DoubleArrowRightTwoToneIcon htmlColor={isMaxMonth && '#cccccc'} />
          )}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Custom Month Cell Content

Use the `monthRender` prop to customize the content of month cells.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const monthRender = ({ month, currentDate }) => (
    <div style={{ color: 'red' }}>{month}</div>
  );

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDateTimePicker
          value={value}
          monthRender={monthRender}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Custom Year Cell Content

Use the `yearRender` prop to customize the content of year cells.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const yearRender = ({ year, currentDate }) => (
    <div style={{ color: 'red' }}>{year}</div>
  );

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDateTimePicker
          yearRender={yearRender}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Open/Close Callbacks

Customize open and close callbacks using `onClose` and `onOpen`.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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
        <DesktopDateTimePicker
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

### Month Change Callback

Use `onMonthChange` to customize the callback for month changes.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };
  const onMonthChange = (e, res) => {
    console.log('month change:', res);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDateTimePicker
          onMonthChange={onMonthChange}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Year Change Callback

Use `onYearChange` to customize the callback for year changes.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };
  const onYearChange = (e, res) => {
    console.log('year change:', res);
  };
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDateTimePicker
          onYearChange={onYearChange}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Controlled Calendar Component

Control the calendar component using the `value` prop.

```tsx
import { Button, DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().add(1, 'month').toDate());

  const onSingleClick = () => {
    setValue(dayjs().toDate());
  };
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Button onClick={onSingleClick}>Back to Today</Button>
        <DesktopDateTimePicker
          mode="single"
          onChange={handleChange}
          value={value}
        />
      </div>
    </Stack>
  );
};
```

### Uncontrolled Calendar Component

Render the component using the `defaultValue` prop. The calendar's selected state will be reflected in the input, which can be accessed through `inputRef`.

```tsx
import { DesktopDateTimePicker, Button, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState();
  const inputRef = React.useRef(null);

  return (
    <Stack>
      <Button onClick={() => setDate(inputRef.current?.value)}>Get Date</Button>
      <div>Selected date within the component: {date}</div>
      <div style={{ width: '320px' }}>
        <DesktopDateTimePicker
          inputRef={inputRef}
          defaultValue={dayjs().add(1, 'day').toDate()}
        />
      </div>
    </Stack>
  );
};
```

### API

### DesktopDateTimePicker

| Property           | Description                                      | Type                                                                  | Default                                                |
| ------------------ | ------------------------------------------------ | --------------------------------------------------------------------- | ------------------------------------------------------ |
| defaultValue       | Default selected value for uncontrolled mode     | `Date \| null`                                                        | -                                                      |
| value              | Selected value for controlled mode               | `Date \| null`                                                        | -                                                      |
| placeholder        | Placeholder for the input                        | `string`                                                              | `format`                                               |
| minDate            | Minimum selectable date                          | `Date`                                                                | `dayjs().subtract(10, 'year').toDate()`                |
| maxDate            | Maximum selectable date                          | `Date`                                                                | `dayjs().add(10, 'year').toDate()`                     |
| open               | Whether the popover is open                      | `boolean`                                                             | -                                                      |
| icon               | Icon for the input                               | `ReactNode`                                                           | `<DateOutlinedIcon />`                                 |
| inputRef           | Ref for the input                                | `Ref<HTMLInputElement>`                                               | -                                                      |
| inputProps         | Props for the input                              | `React.InputHTMLAttributes<HTMLInputElement>`                         | -                                                      |
| views              | Date picker types                                | `Array<'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second'>` | `['year', 'month', 'day', 'hour', 'minute', 'second']` |
| headerBarLeftIcon  | Custom icon for the left side of the header bar  | `(options: IDateTimePickerCustomIconProps) => ReactNode`              | -                                                      |
| headerBarRightIcon | Custom icon for the right side of the header bar | `(options: IDateTimePickerCustomIconProps) => ReactNode`              | -                                                      |
| disabled           | Whether the date picker is disabled              | `boolean`                                                             | `false`                                                |
| disabledDate       | Disable specific                                 |
