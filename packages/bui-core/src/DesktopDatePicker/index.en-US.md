---
group: Date
name: DesktopDatePicker Component
---

# DesktopDatePicker Component

The DesktopDatePicker component is commonly used for selecting a date, including year, month, and day.

## Code Demonstration

### Basic Usage

By default, the `value` should be passed as a `Date`, with a selectable range that includes 10 years before and after the current year.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Disable Popup

Use `disableOpenPicker` to disable the popup selection feature, allowing date change only via input.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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

Use `disabled` to disable the date component.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker disabled value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Disable Specific Dates

Use `disabledDate` to customize disabling specific dates.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

### Close Popup Immediately After Selection

Use `closeOnSelect` to determine if the popup should close immediately after date selection.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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

Use `open` to control whether the date component popup is open.

```tsx
import { DesktopDatePicker, Stack, Button } from '@bifrostui/react';
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
import dayjs from 'dayjs';
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

Use `icon` to specify the input field icon.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs';
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

### Date Picker Type

Use `picker` to specify the selectable range.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

### Customize Header Bar Icons

Use `headerBarLeftIcon` and `headerBarRightIcon` to customize the left and right icons of the header bar.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import {
  DoubleArrowLeftTwoToneIcon,
  DoubleArrowRightTwoToneIcon,
} from '@bifrostui/icons';
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

Enable `monthRender` to customize the content of month cells.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

Enable `yearRender` to customize the content of year cells.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

### Callback for Open/Close

Customize the callback with `onClose` and `onOpen`.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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

### Callback for Month Change

Enable `onMonthChange` to customize the month change callback.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

### Callback for Year Change

Enable `onYearChange` to customize the year change callback.

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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
import dayjs from 'dayjs';
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
        Input time
        <Input onChange={(e) => setValue(e.target.value)} />
        <DesktopDatePicker
          mode="single"
          onChange={handleChange}
          value={value}
        />
        <Button onClick={onSingleClick}>Back to Today</Button>
      </div>
    </Stack>
  );
};
```

### Uncontrolled Calendar Component

Render the component with the `defaultValue` attribute; the selected state will be reflected in the input, and you can retrieve it using inputRef.

```tsx
import { DesktopDatePicker, Button, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState(dayjs().add(1, 'day').toDate());
  const [defaultValue, setDefault] = useState(dayjs().add(1, 'day').toDate());
  const inputRef = React.useRef(null);

  return (
    <Stack>
      <Button onClick={() => setDate(inputRef.current?.value)}>
        Get Internal Date
      </Button>
      <Button onClick={() => setDefault(dayjs().toDate())}>
        Back to Today
      </Button>
      <div>defaultValue: {dayjs(defaultValue).format('YYYY/MM/DD')}</div>
      <div>Internal Component Date: {dayjs(date).format('YYYY/MM/DD')}</div>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker inputRef={inputRef} defaultValue={defaultValue} />
      </div>
    </Stack>
  );
};
```

### API

### DesktopDatePicker

| Property           | Description                                                  | Type                                                                                                         | Default Value                           |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| defaultValue       | Default selected value when uncontrolled component is in use | `Date \| null`                                                                                               | -                                       |
| value              | Selected value when controlled component is in use           | `Date \| null`                                                                                               | -                                       |
| placeholder        | Input placeholder content                                    | `string`                                                                                                     | -                                       |
| minDate            | Minimum selectable date                                      | `Date`                                                                                                       | `dayjs().subtract(10, 'year').toDate()` |
| maxDate            | Maximum selectable date                                      | `Date`                                                                                                       | `dayjs().add(10, 'year').toDate()`      |
| open               | Whether the layer is open                                    | `boolean`                                                                                                    | -                                       |
| icon               | Input icon                                                   | `React.ReactNode`                                                                                            | `<DateOutlinedIcon />`                  |
| inputRef           | Input field reference                                        | `Ref<HTMLInputElement>`                                                                                      | -                                       |
| inputProps         | Input field properties                                       | `React.InputHTMLAttributes<HTMLInputElement>`                                                                | -                                       |
| picker             | Date picker type                                             | `'year' \| 'month' \| 'day'`                                                                                 | `'day'`                                 |
| headerBarLeftIcon  | Left icon in the header bar                                  | `(options: IDatePickerCustomIconProps) => React.ReactNode`                                                   | -                                       |
| headerBarRightIcon | Right icon in the header bar                                 | `(options: IDatePickerCustomIconProps) => React.ReactNode`                                                   | -                                       |
| disabled           | Whether the date picker is disabled                          | `boolean`                                                                                                    | `false`                                 |
| disabledDate       | Unselectable dates                                           | `(currentDate: Date) => boolean`                                                                             | -                                       |
| monthRender        | Custom month cell content                                    | `({ month, currentDate }: { month: string \| number; currentDate: IDatePickerInstance }) => React.ReactNode` | -                                       |
| yearRender         | Custom year cell content                                     | `({ year, currentDate }: { year: string \| number; currentDate: IDatePickerInstance }) => React.ReactNode`   | -                                       |
| onChange           | Date change callback                                         | `(e: React.SyntheticEvent, data: { value: Date \| null }) => void`                                           | -                                       |
| closeOnSelect      | Immediately close after selection                            | `boolean`                                                                                                    | `true`                                  |
| disableOpenPicker  | Disable popup selection functionality                        | `boolean`                                                                                                    | `false`                                 |
| format             | Date format                                                  | `string`                                                                                                     | `'YYYY/MM/DD'`                          |
| onClose            | Layer close callback                                         | `() => void`                                                                                                 | -                                       |
| onOpen             | Layer open callback                                          | `() => void`                                                                                                 | -                                       |
| onMonthChange      | Month change callback                                        | `(e: React.SyntheticEvent, data: { value: Date }) => void`                                                   | -                                       |
| onYearChange       | Year change callback                                         | `(e: React.SyntheticEvent, data: { value: Date }) => void`                                                   | -                                       |
| DesktopPickerProps | Properties for the desktop picker                            | `DesktopPickerProps`                                                                                         | -                                       |
| CalendarProps      | Properties for the calendar component                        | `CalendarProps`                                                                                              | -                                       |

### IDatePickerCustomIconProps

| Property   | Description                    | Type      | Default Value |
| ---------- | ------------------------------ | --------- | ------------- |
| isMinMonth | Whether it's the minimum month | `boolean` | -             |
| isMaxMonth | Whether it's the maximum month | `boolean` | -             |

### IDatePickerCalendarProps

| Property                    | Description                                    | Type                                                    | Default Value |
| --------------------------- | ---------------------------------------------- | ------------------------------------------------------- | ------------- |
| hideDaysOutsideCurrentMonth | Whether to hide days outside the current month | `boolean`                                               | `false`       |
| highlightDate               | Date to be highlighted, default is today       | `'today' \| 'weekend'`                                  | -             |
| dateRender                  | Custom content of date cells                   | `(currentDate: IDatePickerInstance) => React.ReactNode` | -             |
| weekRender                  | Custom content of week cells                   | `(week: string) => React.ReactNode`                     | -             |

## Style Variables

| Global Variable                       | Description         | Default Value                               |
| ------------------------------------- | ------------------- | ------------------------------------------- |
| --bui-d-date-picker-height            | Input field height  | `var(--bui-input-height, 32px)`             |
| --bui-d-date-picker-min-width         | Minimum width       | `var(--bui-input-min-width, 100px)`         |
| --bui-d-date-picker-font-size         | Font size           | `var(--bui-title-size-3, 16px)`             |
| --bui-d-date-picker-icon-size         | Icon size           | `var(--bui-title-size-3, 16px)`             |
| --bui-d-date-picker-container-padding | Inner padding       | `var(--bui-spacing-md, 9px)`                |
| --bui-d-date-picker-bg                | Background color    | `var(--bui-color-bg-view)`                  |
| --bui-d-date-picker-font-family       | Font family         | `var(--bui-font-family)`                    |
| --bui-d-date-picker-border            | Border              | `1px solid var(--bui-color-border-default)` |
| --bui-d-date-picker-shadow            | Shadow              | `0 0 0 2px var(--bui-color-bg-default)`     |
| --bui-d-date-picker-disabled-color    | Disabled text color | `var(--bui-color-fg-subtle)`                |

### Date Selection Panel

| Global Variable                             | Description             | Default Value                           |
| ------------------------------------------- | ----------------------- | --------------------------------------- |
| --bui-d-date-picker-lay-font-family         | Font family             | `var(--bui-font-family)`                |
| --bui-d-date-picker-lay-main-radius         | Border radius           | `3px`                                   |
| --bui-d-date-picker-lay-content-padding     | Content padding         | `10px 16px`                             |
| --bui-d-date-picker-lay-content-height      | Content height          | `30px`                                  |
| --bui-d-date-picker-lay-content-line-height | Content line height     | `30px`                                  |
| --bui-d-date-picker-lay-content-width       | Content width           | `60px`                                  |
| --bui-d-date-picker-lay-calendar-padding    | Calendar padding        | `6px 12px 7px`                          |
| --bui-d-date-picker-lay-shadow              | Shadow                  | `0 0 0 2px var(--bui-color-bg-default)` |
| --bui-d-date-picker-title-size              | Title font size         | `var(--bui-title-size-3)`               |
| --bui-d-date-picker-list-padding            | List padding            | `6px 12px 7px`                          |
| --bui-d-date-picker-col-bg                  | Column background color | `var(--bui-color-bg-view)`              |
| --bui-d-date-picker-content-radius          | Content radius          | `var(--bui-shape-radius-default, 6px)`  |
| --bui-d-date-picker-col-font-size           | Column font size        | `var(--bui-title-size-4)`               |

```

```
