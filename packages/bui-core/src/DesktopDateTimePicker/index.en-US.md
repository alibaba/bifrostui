---
group: Date
name: DesktopDateTimePicker Date and Time Component
---

# DesktopDateTimePicker Date and Time Component

The DesktopDateTimePicker component is commonly used for selecting dates, including year, month, and day.

## Code Demonstration

### Basic Usage

The default `value` should be passed as a `Date`, with a selectable range including 10 years before and after this year.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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
      <div style={{ width: '300px' }}>
        <DesktopDateTimePicker value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Disable Popover

Use `disableOpenPicker` to disable popover selection functionality, allowing date changes only by input.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

### Disabled

Use `disabled` to disable the date component.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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
        <DesktopDateTimePicker disabled value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Disable Specific Dates

Use `disabledDate` for customizing disabled dates.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

### Close the Popup Immediately After Selecting a Date

Use `closeOnSelect` to decide whether to close immediately after selecting a date.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

Use `format` to specify the display format of the date, default to `YYYY/MM/DD HH:mm:ss`.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

### Whether the Popup is Open

Use `open` to control whether the date component is open.

```tsx
import { DesktopDateTimePicker, Stack, Button } from '@bifrostui/react';
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

Specify the selectable range using `minDate` and `maxDate`.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

### Customize Input Field Icon

Specify the input field icon using `icon`.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs';
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

### Date Picker Type

Specify the selectable range using `views`.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
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

### Customize Header Bar Left and Right Icons

Use `headerBarLeftIcon` and `headerBarRightIcon` to customize header bar icons.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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
        <DesktopDateTimePicker
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

Enable `monthRender` to customize the content in month cells.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const monthRender = ({ month, currentData }) => {
    return <div style={{ color: 'red' }}>{month}</div>;
  };
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

### Customize Year Cell Content

Enable `yearRender` to hide dates outside the current month when selecting day.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const yearRender = ({ year, currentData }) => {
    return <div style={{ color: 'red' }}>{year}</div>;
  };

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

### Open/Close Callback

Use `onClose` and `onOpen` for custom open and close callbacks.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

Enable `onMonthChange` for custom month change callbacks.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

Enable `onYearChange` for custom year change callbacks.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

Control the calendar component via the `value` property.

```tsx
import { Button, DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

Render the component using the `defaultValue` property. The selection state in the calendar will be reflected in the input and can be accessed via `inputRef`.

```tsx
import { DesktopDateTimePicker, Button, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState();
  const inputRef = React.useRef(null);

  return (
    <Stack>
      <Button onClick={() => setDate(inputRef.current?.value)}>Get Date</Button>
      <div>Date inside component: {date}</div>
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

| Property           | Description                                       | Type                                                                                                       | Default                                                |
| ------------------ | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| defaultValue       | Default selected value, used when uncontrolled    | `Date \| null`                                                                                             | -                                                      |
| value              | Selected value, used when controlled              | `Date \| null`                                                                                             | -                                                      |
| placeholder        | Placeholder content for the input field           | `string`                                                                                                   | `format`                                               |
| minDate            | Minimum selectable date                           | `Date`                                                                                                     | `dayjs().subtract(10, 'year').toDate()`                |
| maxDate            | Maximum selectable date                           | `Date`                                                                                                     | `dayjs().add(10, 'year').toDate()`                     |
| open               | Whether the popover is open                       | `boolean`                                                                                                  | -                                                      |
| icon               | Input field icon                                  | `ReactNode`                                                                                                | `<DateOutlinedIcon />`                                 |
| inputRef           | Ref for the input field                           | `Ref<HTMLInputElement>`                                                                                    | -                                                      |
| inputProps         | Attributes for the input field                    | `React.InputHTMLAttributes<HTMLInputElement>`                                                              | -                                                      |
| views              | Picker type                                       | `Array<'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second'>`                                      | `['year', 'month', 'day', 'hour', 'minute', 'second']` |
| headerBarLeftIcon  | Icon on the left of the header bar                | `(options: IDateTimePickerCustomIconProps) => ReactNode`                                                   | -                                                      |
| headerBarRightIcon | Icon on the right of the header bar               | `(options: IDateTimePickerCustomIconProps) => ReactNode`                                                   | -                                                      |
| disabled           | Whether to disable the date picker                | `boolean`                                                                                                  | `false`                                                |
| disabledDate       | Dates that cannot be selected                     | `(currentDate: Date) => boolean`                                                                           | -                                                      |
| monthRender        | Customize the content in month cells              | `({ month, currentDate }: { month: string \| number; currentDate: IDateTimePickerInstance }) => ReactNode` | -                                                      |
| yearRender         | Customize the content in year cells               | `({ year, currentDate }: { year: string \| number; currentDate: IDateTimePickerInstance }) => ReactNode`   | -                                                      |
| onChange           | Callback when the date changes                    | `(e: React.SyntheticEvent, data: { value: Date \| null }) => void`                                         | -                                                      |
| closeOnSelect      | Whether to close immediately after date selection | `boolean`                                                                                                  | `true`                                                 |
| disableOpenPicker  | Disable popover selection functionality           | `boolean`                                                                                                  | `false`                                                |
| format             | Date format                                       | `string`                                                                                                   | `'YYYY/MM/DD HH:mm:ss'`                                |
| onClose            | Callback when the popover closes                  | `() => void`                                                                                               | -                                                      |
| onOpen             | Callback when the popover opens                   | `() => void`                                                                                               | -                                                      |
| onMonthChange      | Callback when the month changes                   | `(e: React.SyntheticEvent, data: { value: Date }) => void`                                                 | -                                                      |
| onYearChange       | Callback when the year changes                    | `(e: React.SyntheticEvent, data: { value: Date }) => void`                                                 | -                                                      |
| DesktopPickerProps | Properties of the DesktopPicker component         | `DesktopPickerProps`                                                                                       | -                                                      |
| CalendarProps      | Properties of the Calendar component              | `CalendarProps`                                                                                            | -                                                      |

### IDateTimePickerInstance

| Property | Description      | Type      | Default |
| -------- | ---------------- | --------- | ------- |
| day      | Date object      | `Date`    | -       |
| disabled | Whether disabled | `boolean` | -       |

### IDateTimePickerCustomIconProps

| Property   | Description                    | Type      | Default |
| ---------- | ------------------------------ | --------- | ------- |
| isMinMonth | Whether it is the minimum time | `boolean` | -       |
| isMaxMonth | Whether it is the maximum time | `boolean` | -       |

### CalendarProps

| Property                    | Description                                     | Type                                                  | Default   |
| --------------------------- | ----------------------------------------------- | ----------------------------------------------------- | --------- |
| hideDaysOutsideCurrentMonth | Whether to hide dates outside the current month | `boolean`                                             | `false`   |
| highlightDate               | Date to highlight                               | `'today' \| 'weekend'`                                | `'today'` |
| dateRender                  | Customize date cell content                     | `(currentDate: IDateTimePickerInstance) => ReactNode` | -         |
| weekRender                  | Customize week cell content                     | `(week: string) => ReactNode`                         | -         |

## Style Variables

| Global Variable                         | Description         | Default                                     |
| --------------------------------------- | ------------------- | ------------------------------------------- |
| --bui-datetime-picker-height            | Height              | `var(--bui-input-height, 32px)`             |
| --bui-datetime-picker-min-width         | Minimum width       | `var(--bui-input-min-width, 100px)`         |
| --bui-datetime-picker-icon-size         | Icon size           | `var(--bui-title-size-3, 16px)`             |
| --bui-datetime-picker-font-size         | Font size           | `var(--bui-title-size-3, 16px)`             |
| --bui-datetime-picker-container-padding | Padding             | `var(--bui-spacing-md, 9px)`                |
| --bui-datetime-picker-bg                | Background color    | `var(--bui-color-bg-view)`                  |
| --bui-datetime-picker-font-family       | Font family         | `var(--bui-font-family)`                    |
| --bui-datetime-picker-border            | Border              | `1px solid var(--bui-color-border-default)` |
| --bui-datetime-picker-shadow            | Shadow              | `0 0 0 2px var(--bui-color-bg-default)`     |
| --bui-datetime-picker-disabled-color    | Disabled text color | `var(--bui-color-fg-subtle)`                |
