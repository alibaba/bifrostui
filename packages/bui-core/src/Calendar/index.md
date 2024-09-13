---
group:
  title: 基本输入
name: Calendar 日历
---

# Calendar 日历

用于选择日期或日期区间。

## 代码演示

### 基础用法

默认为单选模式，对应 `value` 应传入单个 `Date`，默认可选范围为包含当前月份在内的一年。

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

### 指定可选范围

通过 `minDate` 和 `maxDate` 指定可选范围，渲染指定月时：value=null 并指定 `minDate`。

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

### 隐藏当前月之外的日期

启用 `hideDaysOutsideCurrentMonth` 可隐藏当前月之外的日期。

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

### 开启直接切换年份功能

启用 `enableSelectYear` 通过点击日期文本区域打开年份浮层切换年份。

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
        <Calendar enableSelectYear value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### 自定义禁用日期

通过 `disabledDate` 可自定义禁用日期。

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

### 高亮日期

通过 `highlightDate` 可高亮某天或周末。

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

### 选择日期范围

`mode` 指定为 `range`，可以实现选择日期范围。

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

### 受控日历组件

通过 `value` 属性控制日历组件。

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

### 非受控日历组件

通过 `defaultValue` 属性渲染组件，日历的选中态会体现在最外层 dom 的 `data-selected` 或 `data-start` 和 `data-end` 属性中。

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

### 自定义日期单元格的内容

使用 `dateRender` 可以绘制出自定义日期样式。

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

### 自定义周单元格的内容

使用 `weekRender` 可以绘制出自定义周单元格样式。

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

| 属性                        | 说明                             | 类型                                                              | 默认值           |
| --------------------------- | -------------------------------- | ----------------------------------------------------------------- | ---------------- |
| defaultValue                | 默认选中的值，当组件非受控时使用 | Date \| Date[] \| null                                            | -                |
| value                       | 选中的值，当组件受控时使用       | Date \| Date[] \| null                                            | -                |
| minDate                     | 可选择的最小日期                 | Date                                                              | 当前月第一天     |
| maxDate                     | 可选择的最大日期                 | Date                                                              | 当前日期的一年后 |
| mode                        | 日历选择类型                     | `single` \| `range`                                               | `single`         |
| hideDaysOutsideCurrentMonth | 是否隐藏当前月之外的日期         | boolean                                                           | false            |
| disabledDate                | 不可选择的日期                   | (currentDate: Date) => boolean                                    | 当天之前的日期   |
| highlightDate               | 高亮的日期                       | `today` \| `weekend`                                              | `today`          |
| dateRender                  | 自定义日期单元格的内容           | (currentDate: ICalendarInstance) => React.ReactNode               | -                |
| weekRender                  | 自定义周单元格的内容             | (week: string) => React.ReactNode                                 | -                |
| onMonthChange               | 月份发生变化的回调               | (e: React.SyntheticEvent,data: ICalendarMonthChangeData) => void  | -                |
| onChange                    | 日期发生变化的回调               | (e: React.SyntheticEvent,data: { value: ICalendarValue }) => void | -                |

### ICalendarMonthChangeData

| 属性  | 说明                                        | 类型             |
| ----- | ------------------------------------------- | ---------------- |
| month | 切换后的月份                                | string           |
| type  | 操作类型，prev: 点击上个月 next: 点击下个月 | `prev` \| `next` |

### ICalendarInstance

| 属性  | 说明     | 类型    |
| ----- | -------- | ------- |
| month | 日期对象 | Date    |
| type  | 是否禁用 | boolean |
