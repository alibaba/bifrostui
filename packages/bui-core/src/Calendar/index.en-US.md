---
group:
  title: Basic Inputs
name: Calendar
---

# Calendar

Used for selecting a date or date range, supporting single and range selection, with extensive customization capabilities and accessibility support.

## Basic Usage

By default, it's in single-select mode. The `value` accepts a single `Date`, with the default selectable range starting from the current month and extending for one year.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

## Specify Selectable Range

Use `minDate` and `maxDate` to specify the selectable range and support rendering of a specific month. When rendering a specific month: value=null and `minDate` is specified.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar
          value={value}
          minDate={dayjs().toDate()}
          maxDate={dayjs().add(2, 'month').toDate()}
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

## Hide Dates Outside Current Month

Set `hideDaysOutsideCurrentMonth` to hide dates outside the current month.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar
          hideDaysOutsideCurrentMonth
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

## Customize Header Bar Date Format

Customize the date format of the header bar through `headerBarFormat`, default is `YYYY/MM`.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar
          style={{ '--bui-calendar-handler-text-width': '90px' }}
          onMonthChange={(e, res) => {
            console.log('month change:', res);
          }}
          headerBarFormat="YYYY年MM月"
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

## Customize Header Bar Left and Right Buttons

Customize the header bar icons through `headerBarLeftIcon` and `headerBarRightIcon`.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import {
  DoubleArrowLeftTwoToneIcon,
  DoubleArrowRightTwoToneIcon,
} from '@bifrostui/icons';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar
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

## Customize Disabled Dates

Implement custom disabling logic through `disabledDate`.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const disabledDate = (current) => {
    return (
      // Previous dates cannot be selected
      dayjs(dayjs(current).format('YYYYMMDD')).diff(
        dayjs(dayjs().format('YYYYMMDD')),
        'day',
      ) < 0
    );
  };

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar
          value={value}
          disabledDate={disabledDate}
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

## Highlight Dates

Highlight specific days or weekends with `highlightDate`.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar
          value={value}
          highlightDate="weekend"
          onChange={(e, res) => {
            console.log('date change:', dayjs(res.value).format('YYYY-MM-DD'));
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Hide Header Operation Area

Hide the header operation area using `headerVisible`.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar
          value={value}
          headerVisible
          onChange={(e, res) => {
            console.log('date change:', dayjs(res.value).format('YYYY-MM-DD'));
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Select Date Range

Set `mode="range"` to select a date range.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs().add(1, 'day').toDate(),
    dayjs().add(5, 'day').toDate(),
  ]);

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar
          mode="range"
          value={value}
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

## Controlled Calendar Component

Control the calendar component through the `value` attribute.

```tsx
import React, { useState } from 'react';
import { Button, Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState(dayjs().add(1, 'month').toDate());
  const [rangeValue, setRangeValue] = useState([
    dayjs().add(30, 'day').toDate(),
    dayjs().add(33, 'day').toDate(),
  ]);

  const onSingleClick = () => {
    setValue(dayjs().toDate());
  };

  const onRangeClick = () => {
    setRangeValue([dayjs().toDate(), dayjs().add(6, 'day').toDate()]);
  };

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Button onClick={onSingleClick}>Back to Today</Button>
        <Calendar mode="single" value={value} />
        <Button onClick={onRangeClick}>Select This Week</Button>
        <Calendar mode="range" value={rangeValue} />
      </div>
    </Stack>
  );
};
```

## Uncontrolled Calendar Component

Render the component through the `defaultValue` attribute. The selection state of the calendar is reflected in the outermost DOM's `data-selected` or `data-start` and `data-end` attributes.

```tsx
import React from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar
          mode="range"
          defaultValue={[
            dayjs().add(1, 'day').toDate(),
            dayjs().add(7, 'day').toDate(),
          ]}
        />
      </div>
    </Stack>
  );
};
```

## Customize Date Cell Content

Customize the content of date cells using `dateRender`.

```tsx
import React, { useState } from 'react';
import clsx from 'clsx';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const dateRender = (dayInstance) => {
    const { day, disabled } = dayInstance;
    const isToday = dayjs(day).isSame(dayjs(), 'day');
    return (
      <div
        className={clsx('bui-calendar-day', {
          disabled,
          today: isToday,
        })}
        style={{ flexDirection: 'column' }}
      >
        <div>{day && dayjs(day).format('D')}</div>
        {isToday && <div style={{ fontSize: 10 }}>Today</div>}
      </div>
    );
  };

  const onChange = (e, res) => setValue(res.value);

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar
          mode="single"
          value={value}
          dateRender={dateRender}
          onChange={onChange}
        />
      </div>
    </Stack>
  );
};
```

## Customize Week Cell Content

Customize the content of week cells using `weekRender`.

```tsx
import React, { useState } from 'react';
import clsx from 'clsx';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const weekRender = (weekItem) => {
    const isWeekend = ['Sun', 'Sat'].includes(weekItem);
    return (
      <div
        key={weekItem}
        className={clsx('bui-calendar-day', {
          today: isWeekend,
        })}
        style={{ flexDirection: 'column' }}
      >
        <div>{weekItem}</div>
        <div style={{ fontSize: 10 }}>{isWeekend ? 'Off' : <>&nbsp;</>}</div>
      </div>
    );
  };

  const onChange = (e, res) => setValue(res.value);

  return (
    <Stack>
      <div style={{ width: 320 }}>
        <Calendar
          mode="single"
          value={value}
          weekRender={weekRender}
          onChange={onChange}
        />
      </div>
    </Stack>
  );
};
```

## Accessibility

- The main accessibility features include:
  - The calendar uses `role="application"` and `aria-label="Calendar"` for the entire component.
  - The header area uses `aria-label="date select"`, with toggle buttons using `role="button"` and carrying `aria-label`.
  - The date grid uses `role="grid"`, with each date cell being `role="gridcell"`, along with `aria-selected`, `aria-disabled`, `tabIndex`, etc.
  - The current date is marked with `aria-current="date"` for screen reader recognition.
  - The month text area uses `aria-live="polite"`, so changing the month automatically triggers screen reader announcements.
- When customizing `dateRender` or `weekRender`, developers are encouraged to supplement the custom content with necessary accessibility attributes.

## API

| Attribute                   | Description                                     | Type                                                               | Default value               |
| --------------------------- | ----------------------------------------------- | ------------------------------------------------------------------ | --------------------------- |
| defaultValue                | Default selected value, for uncontrolled usage  | Date \| Date[] \| null                                             | -                           |
| value                       | Selected value, for controlled usage            | Date \| Date[] \| null                                             | -                           |
| minDate                     | Minimum selectable date                         | Date                                                               | First day of current month  |
| maxDate                     | Maximum selectable date                         | Date                                                               | One year after current date |
| mode                        | Calendar selection type                         | `single` \| `range`                                                | `single`                    |
| hideDaysOutsideCurrentMonth | Whether to hide dates outside the current month | boolean                                                            | false                       |
| headerBarFormat             | Header bar date format display                  | string                                                             | YYYY/MM                     |
| headerBarLeftIcon           | Header bar left icon                            | (options: ICustomIconProps) => React.ReactNode                     | \<CaretLeftIcon />          |
| headerBarRightIcon          | Header bar right icon                           | (options: ICustomIconProps) => React.ReactNode                     | \<CaretRightIcon />         |
| disabledDate                | Dates that cannot be selected                   | (currentDate: Date) => boolean                                     | Dates before today          |
| highlightDate               | Highlighted date                                | `today` \| `weekend`                                               | `today`                     |
| dateRender                  | Custom content for date cell                    | (currentDate: ICalendarInstance) => React.ReactNode                | -                           |
| weekRender                  | Custom content for week cell                    | (week: string) => React.ReactNode                                  | -                           |
| onMonthChange               | Callback function when the month changes        | (e: React.SyntheticEvent, data: ICalendarMonthChangeData) => void  | -                           |
| onChange                    | Callback function when the date changes         | (e: React.SyntheticEvent, data: { value: ICalendarValue }) => void | -                           |

### ICalendarMonthChangeData

| Attribute | Description                                                | Type             |
| --------- | ---------------------------------------------------------- | ---------------- |
| month     | The month after switching                                  | string           |
| type      | Operation type, `prev`: Previous month, `next`: Next month | `prev` \| `next` |

### ICalendarInstance

| Attribute | Description      | Type    |
| --------- | ---------------- | ------- |
| month     | Date object      | Date    |
| type      | Whether disabled | boolean |

### ICustomIconProps

| Attribute  | Description                                             | Type    |
| ---------- | ------------------------------------------------------- | ------- |
| isMinMonth | Whether it is the minimum month in the selectable range | boolean |
| isMaxMonth | Whether it is the maximum month in the selectable range | boolean |

## Style Variables

| Global Variable                           | Description                           | Default Value  |
| ----------------------------------------- | ------------------------------------- | -------------- |
| --bui-calendar-padding                    | Calendar padding                      | `6px 12px 7px` |
| --bui-calendar-week-height                | Week bar height                       | `30px`         |
| --bui-calendar-handler-height             | Handler height                        | `28px`         |
| --bui-calendar-handler-margin             | Handler margin                        | `0 0 7px 0`    |
| --bui-calendar-handler-text-width         | Handler text width                    | `80px`         |
| --bui-calendar-handler-btn-width          | Handler button width                  | `46px`         |
| --bui-calendar-handler-btn-height         | Handler button height                 | `100%`         |
| --bui-calendar-handler-btn-icon-font-size | Handler button icon font size         | `28px`         |
| --bui-calendar-day-box-height             | Date cell height                      | `30px`         |
| --bui-calendar-day-box-margin             | Date cell margin                      | `0 0 7px 0`    |
| --bui-calendar-day-disabled-color         | Disabled date color                   | `#9c9ca5`      |
| --bui-calendar-middle-color               | Middle range date text color          | `#000`         |
| --bui-calendar-middle-bg-color            | Middle range date background color    | `#ffeaf1`      |
| --bui-calendar-range-both-ends-color      | Range both ends date text color       | `#000`         |
| --bui-calendar-range-both-ends-bg-color   | Range both ends date background color | `#ffc7da`      |
