---
group: Date
name: DesktopDatePicker Component
---

# DesktopDatePicker Component

DesktopDatePicker component is commonly used for selecting a date, including year, month, and day.

## Code Example

### Basic Usage

The default `value` should be passed as `Date`, and the selectable range is 10 years before and after the current year by default.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Disable Popup

Use `disableOpenPicker` to disable the popup selection feature. The date can only be changed by input.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
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
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker disabled value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Disable Specific Dates

Use `disabledDate` to customize the disabled dates.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
      ['2024-12-20', '2025-01-21'].indexOf(
        dayjs(currentDate).format('YYYY-MM-DD'),
      ) > -1 || ['2023', '2022'].indexOf(dayjs(currentDate).format('YYYY')) > -1
    );
  };
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
          disabledDate={disabledDate}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Close Popup on Select

Use `closeOnSelect` to specify whether the popup should close immediately after selecting a date.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
          closeOnSelect={false}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Specify Date Format

Use `format` to specify the date display format, default is `YYYY/MM/DD`.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
          format="YYYY-MM-DD"
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Control Popup Open State

Use `open` to control whether the date picker popup is open.

```tsx
import { DesktopDatePicker, Stack, Button } from '@bifrostui/react';
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
        <DesktopDatePicker
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

Use `minDate` and `maxDate` to specify the selectable range.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs('20230401').toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
          value={value}
          minDate={dayjs('20200401').toDate()}
          maxDate={dayjs('20230429').toDate()}
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

### Custom Input Icon

Use `icon` to specify the input icon.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs('20230401').toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
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

### Date Picker Types

Use `picker` to specify the range that can be selected.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs('20230401').toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
          value={value}
          picker="year"
          format="YYYY"
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

### Custom Header Bar Icons

Use `headerBarLeftIcon` and `headerBarRightIcon` to customize the header bar left and right icons.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
          headerBarLeftIcon={({ isMinMonth }) => {
            return (
              <DoubleArrowLeftTwoToneIcon htmlColor={isMinMonth && '#cccccc'} />
            );
          }}
          headerBarRightIcon={({ isMaxMonth }) => {
            return (
              <DoubleArrowRightTwoToneIcon
                htmlColor={isMaxMonth && '#cccccc'}
              />
            );
          }}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Custom Month Cell Content

Enable `monthRender` to customize the content of the month cell.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const monthRender = ({ month, currentData }) => {
    if (month === 5) {
      return <div style={{ color: 'red' }}>{month}月</div>;
    }
    return <div>{month}月</div>;
  };
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
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

Enable `yearRender` to customize the content of the year cell.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const yearRender = ({ year, currentData }) => {
    if (year === 2023) {
      return <div style={{ color: 'red' }}>{year}</div>;
    }
    return <div>{year}</div>;
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
          yearRender={yearRender}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Callback on Popup Open/Close

`onClose` and `onOpen` can customize the callback when the popup is closed or opened.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
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

### Callback on Month Change

Enable `onMonthChange` to customize the callback when switching months.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
          onMonthChange={onMonthChange}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Callback on Year Change

Enable `onYearChange` to customize the callback when switching years.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
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

Use the `value` attribute to control the calendar component.

```tsx
import { Button, DesktopDatePicker, Input, Stack } from '@bifrostui/react';
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
        Enter date
        <Input onChange={(e) => setValue(e.target.value)} />
        <DesktopDatePicker
          mode="single"
          onChange={handleChange}
          value={value}
        />
        <Button onClick={onSingleClick}>Back to today</Button>
      </div>
    </Stack>
  );
};
```

### Uncontrolled Calendar Component

Use the `defaultValue` attribute to render the component, the selected state of the calendar will be reflected in the input, which can be obtained via inputRef.

```tsx
import { DesktopDatePicker, Button, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState(dayjs().add(1, 'day').toDate());
  const [defaultValue, setDefault] = useState(dayjs().add(1, 'day').toDate());
  const inputRef = React.useRef(null);

  return (
    <Stack>
      <Button onClick={() => setDate(inputRef.current?.value)}>
        Get internal component date
      </Button>
      <Button onClick={() => setDefault(dayjs().toDate())}>
        Back to today
      </Button>
      <div>defaultValue: {dayjs(defaultValue).format('YYYY/MM/DD')}</div>
      <div>internal component date: {dayjs(date).format('YYYY/MM/DD')}</div>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker inputRef={inputRef} defaultValue={defaultValue} />
      </div>
    </Stack>
  );
};
```

### API

### DesktopDatePicker

| Property           | Description                              | Type                                                       | Default                                 |
| ------------------ | ---------------------------------------- | ---------------------------------------------------------- | --------------------------------------- |
| defaultValue       | Default selected value when uncontrolled | `Date \| null`                                             | -                                       |
| value              | Selected value when controlled           | `Date \| null`                                             | -                                       |
| placeholder        | Placeholder for the input                | `string`                                                   | -                                       |
| minDate            | Minimum selectable date                  | `Date`                                                     | `dayjs().subtract(10, 'year').toDate()` |
| maxDate            | Maximum selectable date                  | `Date`                                                     | `dayjs().add(10, 'year').toDate()`      |
| open               | Whether the popup is open                | `boolean`                                                  | -                                       |
| icon               | Icon for the input                       | `React.ReactNode`                                          | `<DateOutlinedIcon />`                  |
| inputRef           | Input reference                          | `Ref<HTMLInputElement>`                                    | -                                       |
| inputProps         | Input properties                         | `React.InputHTMLAttributes<HTMLInputElement>`              | -                                       |
| picker             | Type of date picker                      | `'year' \| 'month' \| 'day'`                               | `'day'`                                 |
| headerBarLeftIcon  | Left icon in header bar                  | `(options: IDatePickerCustomIconProps) => React.ReactNode` | -                                       |
| headerBarRightIcon | Right icon in header bar                 | `(options: IDatePickerCustomIconProps) => React.ReactNode` | -                                       |
