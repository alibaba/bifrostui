---
group: Date
name: DesktopDatePicker Component
---

# DesktopDatePicker Component

The DesktopDatePicker component is commonly used for selecting dates, including year, month, and day.

## Code Demo

### Basic Usage

The default `value` should be a `Date`, and the selectable range includes the current year plus/minus 10 years.

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

Use `disableOpenPicker` to disable the popup feature, allowing date changes only through input.

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

### Disabled

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

Use `disabledDate` to customize disabled dates.

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

### Close Popup After Selecting Date

Use `closeOnSelect` to control whether the popup is closed immediately after selecting a date.

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

### Control Popup Visibility

Use `open` to control whether the date picker is open or not.

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

Use `minDate` and `maxDate` to specify the selectable date range.

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

### Customize Input Icon

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

Use `picker` to specify the selection type.

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

### Customize Header Icons

Use `headerBarLeftIcon` and `headerBarRightIcon` to customize the left and right header icons.

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

### Customize Month Cell Content

Enable `monthRender` to customize the content of the month cells.

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

### Customize Year Cell Content

Enable `yearRender` to customize the content of the year cells.

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

### Open/Close Callbacks

`onClose`, `onOpen` to customize callbacks for opening and closing.

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

### Month Change Callback

Enable `onMonthChange` to customize the month change callback.

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

### Year Change Callback

Enable `onYearChange` to customize the year change callback.

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

Control the calendar component via the `value` property.

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
        <Button onClick={onSingleClick}>Return to Today</Button>
      </div>
    </Stack>
  );
};
```

### Uncontrolled Calendar Component

Render the component via the `defaultValue` property, and the selected date will be reflected in the input. Use `inputRef` to access it.

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
        Get Date from Component
      </Button>
      <Button onClick={() => setDefault(dayjs().toDate())}>
        Return to Today
      </Button>
      <div>defaultValue: {dayjs(defaultValue).format('YYYY/MM/DD')}</div>
      <div>Component Date: {dayjs(date).format('YYYY/MM/DD')}</div>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker inputRef={inputRef} defaultValue={defaultValue} />
      </div>
    </Stack>
  );
};
```

### API

### DesktopDatePicker

| Property           | Description                                       | Type                                                       | Default                                 |
| ------------------ | ------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------- |
| defaultValue       | Default selected value for uncontrolled component | `Date \| null`                                             | -                                       |
| value              | Selected value for controlled component           | `Date \| null`                                             | -                                       |
| placeholder        | Input placeholder                                 | `string`                                                   | -                                       |
| minDate            | Minimum selectable date                           | `Date`                                                     | `dayjs().subtract(10, 'year').toDate()` |
| maxDate            | Maximum selectable date                           | `Date`                                                     | `dayjs().add(10, 'year').toDate()`      |
| open               | Whether the popup is open                         | `boolean`                                                  | -                                       |
| icon               | Input icon                                        | `React.ReactNode`                                          | `<DateOutlinedIcon />`                  |
| inputRef           | Input reference                                   | `Ref<HTMLInputElement>`                                    | -                                       |
| inputProps         | Input properties                                  | `React.InputHTMLAttributes<HTMLInputElement>`              | -                                       |
| picker             | Date picker type                                  | `'year' \| 'month' \| 'day'`                               | `'day'`                                 |
| headerBarLeftIcon  | Custom left icon for header                       | `(options: IDatePickerCustomIconProps) => React.ReactNode` | -                                       |
| headerBarRightIcon | Custom right icon for header                      | `(options: IDatePickerCustomIconProps) => React.ReactNode` | -                                       |
| disabled           | Whether the date picker is disabled               | `boolean`                                                  | `                                       |
