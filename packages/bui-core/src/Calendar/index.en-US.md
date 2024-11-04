---
group:
  title: Basic input
name: Calendar
---

# Calendar

Used to select dates or date ranges.

## Code demonstration

### Basic usage

Default is single choice mode. `value` should be passed in individually `Date`，and the default optional range is one year, including the current month.

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

### Specify optional range

Adopt `minDate` and `maxDate` to specify optional range, render for specified month: value=null and specify `minDate`。

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
            console.log('日期变化：', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Hide dates outside the current month

Enabling `hideDaysOutsideCurrentMonth`, you can hide dates outside the current month.

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

### Enable direct year switching function

Enabling `enableSelectYear` to open the year floating layer and switch years by clicking on the date text area.

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
          minDate={dayjs().subtract(5, 'year').toDate()}
          maxDate={dayjs().add(5, 'year').toDate()}
          enableSelectYear
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### Customize disable date

Adopt `disabledDate` to customizable disabling date.

```tsx
import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const disabledDate = (current) => {
    return (
      // 之前日期不可选
      dayjs(dayjs(current).format('YYYYMMDD')).diff(
        dayjs(dayjs().format('YYYYMMDD')),
        'day',
      ) < 0
    );
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          value={value}
          disabledDate={disabledDate}
          onChange={(e, res) => {
            console.log('日期变化：', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Highlight date

Adopt `highlightDate` to highlight a certain day or weekend.

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
            console.log('日期变化：', dayjs(res.value).format('YYYY-MM-DD'));
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Select date range

`mode` designated as`range`，it is possible to select a date range.

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
            console.log('日期变化：', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### Controlled Calendar Component

Adopting `value` attribute controls the calendar component.

```tsx
import { Button, Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().add(1, 'month').toDate());
  const [rangevalue, setRangeValue] = useState([
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
      <div style={{ width: '320px' }}>
        <Button onClick={onSingleClick}>回到今天</Button>
        <Calendar mode="single" value={value} />
        <Button onClick={onRangeClick}>选中最近一周</Button>
        <Calendar mode="range" value={rangevalue} />
      </div>
    </Stack>
  );
};
```

### Uncontrolled calendar component

Adopt `defaultValue` attribute rendering component, the selected state of the calendar will be reflected in the outermost dom `data-selected` or`data-start` and `data-end` in the attribute.

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

### Customize the content of the date cell

`dateRender` can draw custom date styles.

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
        {isToday && <div style={{ fontSize: '10px' }}>今天</div>}
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

### Customize the content of weekly cells

`weekRender` can draw custom weekly cell styles.

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

## API

| attribute                   | explain                                                               | type                                                              | Default value                      |
| --------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------- |
| defaultValue                | The default selected value is used when the component is uncontrolled | Date \| Date[] \| null                                            | -                                  |
| value                       | The selected value is used when the component is controlled           | Date \| Date[] \| null                                            | -                                  |
| minDate                     | Minimum selectable date                                               | Date                                                              | The first day of the current month |
| maxDate                     | Maximum selectable dates                                              | Date                                                              | One year after the current date    |
| mode                        | Calendar selection type                                               | `single` \| `range`                                               | `single`                           |
| hideDaysOutsideCurrentMonth | Do you want to hide dates outside the current month                   | boolean                                                           | false                              |
| disabledDate                | Non selectable dates                                                  | (currentDate: Date) => boolean                                    | Date before that day               |
| highlightDate               | Highlighted date                                                      | `today` \| `weekend`                                              | `today`                            |
| dateRender                  | Customize the content of the date cell                                | (currentDate: ICalendarInstance) => React.ReactNode               | -                                  |
| weekRender                  | Customize the content of weekly cells                                 | (week: string) => React.ReactNode                                 | -                                  |
| onMonthChange               | A callback with monthly changes                                       | (e: React.SyntheticEvent,data: ICalendarMonthChangeData) => void  | -                                  |
| onChange                    | Callback for date changes                                             | (e: React.SyntheticEvent,data: { value: ICalendarValue }) => void | -                                  |

### ICalendarMonthChangeData

| attribute | explain                                                                 | type             |
| --------- | ----------------------------------------------------------------------- | ---------------- |
| month     | Month after switching                                                   | string           |
| type      | Operation type, prev: click on previous month next: click on next month | `prev` \| `next` |

### ICalendarInstance

| attribute | explain                   | type    |
| --------- | ------------------------- | ------- |
| month     | Date Object               | Date    |
| type      | Do you want to disable it | boolean |
