---
group:
  title: Basic Input
name: Calendar
---

# Calendar

Used for selecting a date or a date range.

## Code Examples

### Basic Usage

By default, it is in single-selection mode, where `value` should be passed a single `Date`. The default selectable range includes the current month and the year before and after it.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
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
        <Calendar value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Specifying Selectable Range

Use `minDate` and `maxDate` to specify the selectable range. When rendering a specified month: `value=null` and set `minDate`.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
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

### Hiding Dates Outside Current Month

Enable `hideDaysOutsideCurrentMonth` to hide dates outside the current month.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
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

### Customizing Header Bar Date Format

Use `headerBarFormat` to customize the header bar date format; the default format is `YYYY/MM`.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
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
        <Calendar
          style={{ '--handler-text-width': '90px' }}
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

### Customizing Header Bar Left and Right Icons

Use `headerBarLeftIcon` and `headerBarRightIcon` to customize the icons on either side of the header bar.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
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
        <Calendar
          headerBarLeftIcon={({ isMinMonth }) => {
            return (
              <DoubleArrowLeftTwoToneIcon
                htmlColor={isMinMonth ? '#cccccc' : ''}
              />
            );
          }}
          headerBarRightIcon={({ isMaxMonth }) => {
            return (
              <DoubleArrowRightTwoToneIcon
                htmlColor={isMaxMonth ? '#cccccc' : ''}
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

### Customizing Disabled Dates

Use `disabledDate` to customize disabled dates.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const disabledDate = (current) => {
    return (
      // Previous dates are not selectable
      dayjs(current).diff(dayjs(), 'day') < 0
    );
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
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

### Highlighting Dates

Use `highlightDate` to highlight specific days or weekends.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
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

### Selecting a Date Range

Set `mode` to `range` to enable selection of a date range.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs().add(1, 'day').toDate(),
    dayjs().add(5, 'day').toDate(),
  ]);

  return (
    <Stack>
      <div style={{ width: '320px' }}>
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

### Controlled Calendar Component

Control the calendar component using the `value` property.

```tsx
import { Button, Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState, useRef } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().add(1, 'month').toDate());
  const [rangeValue, setRangeValue] = useState([
    dayjs().add(30, 'day').toDate(),
    dayjs().add(33, 'day').toDate(),
  ]);
  const ref = useRef();

  const onSingleClick = () => {
    const today = dayjs().toDate();
    setValue(dayjs().toDate());
    ref.current.jumpTo(today);
  };

  const onRangeClick = () => {
    setRangeValue([dayjs().toDate(), dayjs().add(6, 'day').toDate()]);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Button onClick={onSingleClick}>Go Back to Today</Button>
        <Calendar mode="single" value={value} />
        <Button onClick={onRangeClick}>Select Last Week</Button>
        <Calendar mode="range" value={rangeValue} />
      </div>
    </Stack>
  );
};
```

### Uncontrolled Calendar Component

Use `defaultValue` to render the component, with selected states reflected in the outermost DOM's `data-selected`, `data-start`, and `data-end` attributes.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '320px' }}>
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

### Customizing Date Cell Content

Use `dateRender` to customize the appearance of date cells.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
import clsx from 'clsx';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

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
        {isToday && <div style={{ fontSize: '10px' }}>Today</div>}
      </div>
    );
  };

  const onChange = (e, res) => setValue(res.value);

  return (
    <Stack>
      <div style={{ width: '320px' }}>
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

### Customizing Week Cell Content

Use `weekRender` to customize the appearance of week cells.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
import clsx from 'clsx';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const weekRender = (weekItem) => {
    const isWeekend = ['日', '六'].includes(weekItem);
    return (
      <div
        key={weekItem}
        className={clsx('bui-calendar-day', {
          today: isWeekend,
        })}
        style={{ flexDirection: 'column' }}
      >
        <div>{weekItem}</div>
        <div style={{ fontSize: '10px' }}>{isWeekend ? '休' : <>&nbsp;</>}</div>
      </div>
    );
  };

  const onChange = (e, res) => setValue(res.value);

  return (
    <Stack>
      <div style={{ width: '320px' }}>
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

### Jump to Specified Date's Month Page

Use `ref.current.jumpTo` to jumpto specified date's month page.

```tsx
import { Button, Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState, useRef } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().add(1, 'month').toDate());
  const ref = useRef();

  const onSingleClick = () => {
    const today = dayjs().toDate();
    setValue(dayjs().toDate());
    ref.current.jumpTo(today);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Button onClick={onSingleClick}>back to today</Button>
        <Calendar mode="single" value={value} ref={ref} />
      </div>
    </Stack>
  );
};
```

## API

| Property                    | Description                                    | Type                                                               | Default Value               |
| --------------------------- | ---------------------------------------------- | ------------------------------------------------------------------ | --------------------------- |
| defaultValue                | Default selected value, used when uncontrolled | Date \| Date[] \| null                                             | -                           |
| value                       | Selected value, used when controlled           | Date \| Date[] \| null                                             | -                           |
| minDate                     | Minimum selectable date                        | Date                                                               | First day of current month  |
| maxDate                     | Maximum selectable date                        | Date                                                               | One year after current date |
| mode                        | Calendar selection type                        | `single` \| `range`                                                | `single`                    |
| hideDaysOutsideCurrentMonth | Hide dates outside the current month           | boolean                                                            | false                       |
| headerBarFormat             | Header bar date display format                 | string                                                             | YYYY/MM                     |
| headerBarLeftIcon           | Left icon in the header bar                    | (options: ICustomIconProps) => React.ReactNode                     | `<CaretLeftIcon />`         |
| headerBarRightIcon          | Right icon in the header bar                   | (options: ICustomIconProps) => React.ReactNode                     | `<CaretRightIcon />`        |
| disabledDate                | Non-selectable dates                           | (currentDate: Date) => boolean                                     | Dates before today          |
| highlightDate               | Highlighted dates                              | `today` \| `weekend`                                               | `today`                     |
| dateRender                  | Custom content for date cells                  | (currentDate: ICalendarInstance) => React.ReactNode                | -                           |
| weekRender                  | Custom content for week cells                  | (week: string) => React.ReactNode                                  | -                           |
| onMonthChange               | Callback for month changes                     | (e: React.SyntheticEvent, data: ICalendarMonthChangeData) => void  | -                           |
| onChange                    | Callback for date changes                      | (e: React.SyntheticEvent, data: { value: ICalendarValue }) => void | -                           |

### ICalendarMonthChangeData

| Property | Description                                                       | Type             |
| -------- | ----------------------------------------------------------------- | ---------------- |
| month    | Switched month                                                    | string           |
| type     | Operation type, prev: click previous month next: click next month | `prev` \| `next` |

### ICalendarInstance

| Property | Description      | Type    |
| -------- | ---------------- | ------- |
| month    | Date object      | Date    |
| type     | Whether disabled | boolean |

### ICustomIconProps

| Property   | Description                               | Type    |
| ---------- | ----------------------------------------- | ------- |
| isMinMonth | Whether it's the minimum selectable month | boolean |
| isMaxMonth | Whether it's the maximum selectable month | boolean |

## Style Variables

| Property                           | Description                                      | Default Value | Global Variable                                 |
| ---------------------------------- | ------------------------------------------------ | ------------- | ----------------------------------------------- |
| --padding                          | Padding                                          | 6px 12px 7px  | --bui-calendar-padding                          |
| --week-height                      | Week label height                                | 30px          | --bui-calendar-week-height                      |
| --handler-height                   | Handler height                                   | 28px          | --bui-calendar-handler-height                   |
| --handler-margin-bottom            | Handler bottom margin                            | 7px           | --bui-calendar-handler-margin-bottom            |
| --handler-text-width               | Handler text container width                     | 80px          | --bui-calendar-handler-text-width               |
| --handler-btn-width                | Handler button width                             | 46px          | --bui-calendar-handler-btn-width                |
| --handler-btn-height               | Handler button height                            | 100%          | --bui-calendar-handler-btn-height               |
| --handler-btn-icon-font-size       | Handler button icon font size                    | 28px          | --bui-calendar-handler-btn-icon-font-size       |
| --day-box-height                   | Day box height                                   | 30px          | --bui-calendar-day-box-height                   |
| --day-box-margin-bottom            | Day box bottom margin                            | 7px           | --bui-calendar-day-box-margin-bottom            |
| --day-disabled-color               | Disabled day font color                          | #9c9ca5       | --bui-calendar-day-disabled-color               |
| --middle-color                     | Middle part font color for range selection       | #000          | --bui-calendar-middle-color                     |
| --middle-background-color          | Middle part background color for range selection | #ffeaf1       | --bui-calendar-middle-background-color          |
| --range-both-ends-color            | Both ends font color for range selection         | #000          | --bui-calendar-range-both-ends-color            |
| --range-both-ends-background-color | Both ends background color for range selection   | #ffc7da       | --bui-calendar-range-both-ends-background-color |
