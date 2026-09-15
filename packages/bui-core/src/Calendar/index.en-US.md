---
group:
  title: Basic Input
name: Calendar
---

# Calendar

Used for selecting dates or date ranges, supporting both single selection and range selection. Provides rich customization capabilities and accessibility support.

## Basic Usage

The default mode is single selection. The `value` should be a single `Date`. The default selectable range is from the current month for one year.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

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

### Transition Effects

Transitions are disabled by default, but can be enabled by using `enableTransition`. Effects in mini programs may differ from those in browsers. Fine-tuning is possible with `--bui-calendar-transition-enter` and `--bui-calendar-transition-exit`. Note that enabling transition effects also sets a minimum height for the date panel.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
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
        <Calendar value={value} onChange={handleChange} enableTransition />
      </div>
    </Stack>
  );
};
```

### Specifying Selectable Range

Specify the selectable range using `minDate` and `maxDate`, supporting the rendering of specific months. When rendering specific months: `value=null` and specify `minDate`.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

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

Set `hideDaysOutsideCurrentMonth` to hide dates not in the current month.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

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

Customize the header bar date format using `headerBarFormat`; default is `YYYY/MM`.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

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

## Customize Header Bar Buttons

Customize the header bar icons using `headerBarLeftIcon` and `headerBarRightIcon`.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import {
  DoubleArrowLeftTwoToneIcon,
  DoubleArrowRightTwoToneIcon,
} from '@bifrostui/icons';
import dayjs from 'dayjs';

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

## Custom Disabled Dates

Customize disabled logic using `disabledDate`.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const disabledDate = (current) => {
    return (
      // Previous dates are not selectable
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

Highlight specific days or weekends using `highlightDate`.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

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

### Hide Header Operations

Hide the header operations area using `headerVisible`.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

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

Use `mode="range"` to select a date interval.

```tsx
import React, { useState } from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

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

Control the calendar component using the `value` attribute.

```tsx
import React, { useState } from 'react';
import { Button, Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

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
        <Button onClick={onSingleClick}>Go to Today</Button>
        <Calendar mode="single" value={value} />
        <Button onClick={onRangeClick}>Select the Last Week</Button>
        <Calendar mode="range" value={rangeValue} />
      </div>
    </Stack>
  );
};
```

## Uncontrolled Calendar Component

Render the component using `defaultValue`. The selection state of the calendar will be reflected in the outermost DOM's `data-selected` or `data-start` and `data-end` attributes.

```tsx
import * as React from 'react';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

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

Customize date cell content using `dateRender`.

```tsx
import React, { useState } from 'react';
import clsx from 'clsx';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

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

Customize week cell content using `weekRender`.

```tsx
import React, { useState } from 'react';
import clsx from 'clsx';
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs';

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

- Key accessibility features include:
  - The entire calendar uses `role="application"` and `aria-label="Calendar"`.
  - The header area uses `aria-label="date select"`, switch buttons use `role="button"`, and come with `aria-label`.
  - The date grid uses `role="grid"`, each date cell being `role="gridcell"`, with `aria-selected`, `aria-disabled`, `tabIndex`, and more.
  - The current date is marked with `aria-current="date"` for screen reader recognition.
  - Month text areas have `aria-live="polite"`, triggering screen readers to announce changes.
- It is recommended that developers supplement essential accessibility attributes when customizing `dateRender` or `weekRender`.

## API

| Attribute                   | Description                                                          | Type                                                              | Default                    |
| --------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------- | -------------------------- |
| defaultValue                | Default selected value for uncontrolled use                          | Date \| Date[] \| null                                            | -                          |
| value                       | Selected value for controlled use                                    | Date \| Date[] \| null                                            | -                          |
| minDate                     | Minimum selectable date                                              | Date                                                              | First day of current month |
| maxDate                     | Maximum selectable date                                              | Date                                                              | One year from current date |
| mode                        | Calendar selection type                                              | `single` \| `range`                                               | `single`                   |
| hideDaysOutsideCurrentMonth | Hide dates outside the current month                                 | boolean                                                           | false                      |
| headerBarFormat             | Header bar date display format                                       | string                                                            | YYYY/MM                    |
| headerBarLeftIcon           | Header bar left icon                                                 | (options: ICustomIconProps) => React.ReactNode                    | \<CaretLeftIcon />         |
| headerBarRightIcon          | Header bar right icon                                                | (options: ICustomIconProps) => React.ReactNode                    | \<CaretRightIcon />        |
| disabledDate                | Unselectable dates                                                   | (currentDate: Date) => boolean                                    | Dates before today         |
| highlightDate               | Highlighted dates                                                    | `today` \| `weekend`                                              | `today`                    |
| headerVisible               | Hide or show header                                                  | boolean                                                           | false                      |
| enableTransition            | Enable transition effects                                            | boolean                                                           | false                      |
| CSSTransitionProps          | CSS Transition attributes, effective only when enableTransition=true | CSSTransitionProps                                                | -                          |
| dateRender                  | Custom content for date cells                                        | (currentDate: ICalendarInstance) => React.ReactNode               | -                          |
| weekRender                  | Custom content for week cells                                        | (week: string) => React.ReactNode                                 | -                          |
| onMonthChange               | Callback function for month changes                                  | (e: React.SyntheticEvent,data: ICalendarMonthChangeData) => void  | -                          |
| onChange                    | Callback function for date changes                                   | (e: React.SyntheticEvent,data: { value: ICalendarValue }) => void | -                          |

### ICalendarMonthChangeData

| Attribute | Description                                            | Type             |
| --------- | ------------------------------------------------------ | ---------------- |
| month     | Month changed to                                       | string           |
| type      | Operation type, prev: Previous Month, next: Next Month | `prev` \| `next` |

### ICalendarInstance

| Attribute | Description   | Type    |
| --------- | ------------- | ------- |
| month     | Date object   | Date    |
| type      | Disabled flag | boolean |

### ICustomIconProps

| Attribute  | Description                                    | Type    |
| ---------- | ---------------------------------------------- | ------- |
| isMinMonth | Indicates if it's the minimum selectable month | boolean |
| isMaxMonth | Indicates if it's the maximum selectable month | boolean |

## Style Variables

| Global Variable                            | Description                                        | Default Value            |
| ------------------------------------------ | -------------------------------------------------- | ------------------------ |
| --bui-calendar-transition-exit             | Transition effect on exit                          | transform 300ms ease 0ms |
| --bui-calendar-transition-enter            | Transition effect on enter                         | transform 300ms ease 0ms |
| --bui-calendar-transition-group-min-height | Minimum height for effect container                | 228px                    |
| --bui-calendar-padding                     | Calendar padding                                   | `6px 12px 7px`           |
| --bui-calendar-week-height                 | Week row height                                    | `30px`                   |
| --bui-calendar-handler-height              | Header bar height                                  | `28px`                   |
| --bui-calendar-handler-margin              | Header bar margin                                  | `0 0 7px 0`              |
| --bui-calendar-handler-text-width          | Header bar text width                              | `80px`                   |
| --bui-calendar-handler-btn-width           | Header bar button width                            | `46px`                   |
| --bui-calendar-handler-btn-height          | Header bar button height                           | `100%`                   |
| --bui-calendar-handler-btn-icon-font-size  | Header bar button icon font size                   | `28px`                   |
| --bui-calendar-day-box-height              | Date cell height                                   | `30px`                   |
| --bui-calendar-day-box-margin              | Date cell margin                                   | `0 0 7px 0`              |
| --bui-calendar-day-disabled-color          | Disabled date color                                | `#9c9ca5`                |
| --bui-calendar-middle-color                | Color of dates in the middle of a range            | `#000`                   |
| --bui-calendar-middle-bg-color             | Background color of dates in the middle of a range | `#ffeaf1`                |
| --bui-calendar-range-both-ends-color       | Color of dates at both ends of a range             | `#000`                   |
| --bui-calendar-range-both-ends-bg-color    | Background color of dates at both ends of a range  | `#ffc7da`                |
