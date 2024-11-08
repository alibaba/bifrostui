---
group:
  title: Basic input
name: Calendar Calendar
---

# Calendar Calendar

Used to select dates or date ranges.

## Code demonstration

### Basic usage

The default is single choice mode, and the corresponding 'value' should be passed in as a single 'date'. The default selectable range is one year including the current month.

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

Specify the optional range through 'minDate' and 'maxDate', render the specified month: value=null and specify 'minDate'.

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

Enable 'hideDaysOutsideCurrentMonth' to hide dates outside the current month.

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

Enable 'enableSelectYear' by clicking on the date text area to open the year floating layer and switch years.

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

You can customize the disable date through 'disabled date'.

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

Highlight a day or weekend through 'highlightDate'.

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

Mode 'is specified as' range', which allows for the selection of a date range.

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

Control the calendar component through the 'value' attribute.

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

By using the 'defaultValue' attribute to render the component, the selected state of the calendar will be reflected in the 'data selected' or 'data start' and 'data end' attributes of the outermost DOM.

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

You can use 'dateRender' to draw custom date styles.

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

You can use 'weekRender' to draw custom weekly cell styles.

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
| defaultValue                | The default selected value is used when the component is uncontrolled | Date \|Date[] \|null                                              | -                                  |
| value                       | The selected value is used when the component is controlled           | Date \|Date[] \|null                                              | -                                  |
| minDate                     | Minimum selectable date                                               | Date                                                              | The first day of the current month |
| maxDate                     | Maximum selectable dates                                              | Date                                                              | One year after the current date    |
| mode                        | Calendar selection type                                               | `single` \|`range`                                                | `single`                           |
| hideDaysOutsideCurrentMonth | Do you want to hide dates outside the current month                   | boolean                                                           | false                              |
| disabledDate                | Non selectable dates                                                  | (currentDate: Date) => boolean                                    | Date before that day               |
| highlightDate               | Highlighted date                                                      | `today` \|`weekend`                                               | `today`                            |
| dateRender                  | Customize the content of the date cell                                | (currentDate: ICalendarInstance) => React.ReactNode               | -                                  |
| weekRender                  | Customize the content of weekly cells                                 | (week: string) => React.ReactNode                                 | -                                  |
| onMonthChange               | A callback with monthly changes                                       | (e: React.SyntheticEvent,data: ICalendarMonthChangeData) => void  | -                                  |
| onChange                    | Callback for date changes                                             | (e: React.SyntheticEvent,data: { value: ICalendarValue }) => void | -                                  |

### CalendarMonthChangeData

| attribute | explain                                                                 | type            |
| --------- | ----------------------------------------------------------------------- | --------------- |
| month     | Month after switching                                                   | string          |
| type      | Operation type, prev: click on previous month next: click on next month | `prev` \|`next` |

### ICalendarInstance

| attribute | explain                   | type    |
| --------- | ------------------------- | ------- |
| month     | Date Object               | Date    |
| type      | Do you want to disable it | boolean |

## Style variables

| attribute                          | explain                                                          | Default value | global variable                                 |
| ---------------------------------- | ---------------------------------------------------------------- | ------------- | ----------------------------------------------- |
| --padding                          | padding                                                          | 6px 12px 7px  | --bui-calendar-padding                          |
| --week-height                      | Day of the week display bar height                               | 30px          | --bui-calendar-week-height                      |
| --handler-height                   | Height of operation bar                                          | 28px          | --bui-calendar-handler-height                   |
| --handler-margin-bottom            | Bottom outer margin of the operation bar                         | 7px           | --bui-calendar-handler-margin-bottom            |
| --handler-text-width               | Width of operation bar text container                            | 80px          | --bui-calendar-handler-text-width               |
| --handler-btn-width                | Width of operation bar buttons                                   | 46px          | --bui-calendar-handler-btn-width                |
| --handler-btn-height               | Height of operation bar buttons                                  | 100%          | --bui-calendar-handler-btn-height               |
| --handler-btn-icon-font-size       | Font size of operation bar button icon                           | 28px          | --bui-calendar-handler-btn-icon-font-size       |
| --day-box-height                   | Date box height                                                  | 30px          | --bui-calendar-day-box-height                   |
| --day-box-margin-bottom            | Bottom margin of date box                                        | 7px           | --bui-calendar-day-box-margin-bottom            |
| --day-disabled-color               | Date disabled font color                                         | #9c9ca5       | --bui-calendar-day-disabled-color               |
| --middle-color                     | Select the font color for the middle part of the range selection | #000          | --bui-calendar-middle-color                     |
| --middle-background-color          | Select the background color in the middle of the range           | #ffeaf1       | --bui-calendar-middle-background-color          |
| --range-both-ends-color            | Select font colors at both ends of the range                     | #000          | --bui-calendar-range-both-ends-color            |
| --range-both-ends-background-color | Select background colors at both ends of the range               | #ffc7da       | --bui-calendar-range-both-ends-background-color |
