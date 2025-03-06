---
group: Date
name: DesktopDateTimePicker DateTime Component
---

# DesktopDateTimePicker DateTime Component

The DesktopDateTimePicker component is commonly used for selecting dates, including year, month, and day.

## Code Demos

### Basic Usage

The default `value` should be a `Date`, and the default selectable range includes 10 years before and after the current year.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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
      <div style={{ width: '300px' }}>
        <DesktopDateTimePicker value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Disable Popup

Use `disableOpenPicker` to disable the popup selection functionality, allowing date changes only via input.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

### Disable

Use `disabled` to disable the date component.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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
        <DesktopDateTimePicker disabled value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### Disable Specific Dates

Use `disabledDate` to customize disabled dates.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

### Close Popup on Select

Use `closeOnSelect` to specify whether the popup closes immediately after selecting a date.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

Use `format` to specify the date display format. Default `YYYY/MM/DD HH:mm:ss`.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

### Toggle Popup

Use `open` to control whether the date component is open.

```tsx
import { DesktopDateTimePicker, Stack, Button } from '@bifrostui/react';
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

Use `minDate` and `maxDate` to specify the selectable range.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
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

### Custom Input Icon

Use `icon` to specify the input icon.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs/esm/index';
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

### DatePicker Views

Use `views` to specify the selectable views.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
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

### Custom Header Icon

Use `headerBarLeftIcon` and `headerBarRightIcon` to customize the header icons.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

### Custom Month Cell Content

Enable `monthRender` to customize the month cell content.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const monthRender = ({ month, currentDate }) => {
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

### Custom Year Cell Content

Enable `yearRender` to hide dates outside the current month when selecting a day.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const yearRender = ({ year, currentDate }) => {
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

### Open/Close Callbacks

`onClose` and `onOpen` can be used to customize open/close callbacks.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

Enable `onMonthChange` to customize the month change callback.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

Enable `onYearChange` to customize the year change callback.

```tsx
import { DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

Use the `value` property to control the calendar component.

```tsx
import { Button, DesktopDateTimePicker, Stack } from '@bifrostui/react';
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

Use the `defaultValue` property to render the component. The calendar's selected state will be reflected in the input, which can be accessed via `inputRef`.

```tsx
import { DesktopDateTimePicker, Button, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState();
  const inputRef = React.useRef(null);

  return (
    <Stack>
      <Button onClick={() => setDate(inputRef.current?.value)}>Get Date</Button>
      <div>Internal Date: {date}</div>
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

| Property           | Description                                                     | Type                                                                                                       | Default                                                |
| ------------------ | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| defaultValue       | Default selected value, used when the component is uncontrolled | `Date \| null`                                                                                             | -                                                      |
| value              | Selected value, used when the component is controlled           | `Date \| null`                                                                                             | -                                                      |
| placeholder        | Placeholder content for the input                               | `string`                                                                                                   | `format`                                               |
| minDate            | Minimum selectable date                                         | `Date`                                                                                                     | `dayjs().subtract(10, 'year').toDate()`                |
| maxDate            | Maximum selectable date                                         | `Date`                                                                                                     | `dayjs().add(10, 'year').toDate()`                     |
| open               | Whether the popup is open                                       | `boolean`                                                                                                  | -                                                      |
| icon               | Icon for the input field                                        | `ReactNode`                                                                                                | `<DateOutlinedIcon />`                                 |
| inputRef           | Ref for the input field                                         | `Ref<HTMLInputElement>`                                                                                    | -                                                      |
| inputProps         | Properties for the input field                                  | `React.InputHTMLAttributes<HTMLInputElement>`                                                              | -                                                      |
| views              | Types of views available                                        | `Array<'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second'>`                                      | `['year', 'month', 'day', 'hour', 'minute', 'second']` |
| headerBarLeftIcon  | Custom icon for the left side of the header bar                 | `(options: IDateTimePickerCustomIconProps) => ReactNode`                                                   | -                                                      |
| headerBarRightIcon | Custom icon for the right side of the header bar                | `(options: IDateTimePickerCustomIconProps) => ReactNode`                                                   | -                                                      |
| disabled           | Whether the date picker is disabled                             | `boolean`                                                                                                  | `false`                                                |
| disabledDate       | Dates that cannot be selected                                   | `(currentDate: Date) => boolean`                                                                           | -                                                      |
| monthRender        | Custom content for month cells                                  | `({ month, currentDate }: { month: string \| number; currentDate: IDateTimePickerInstance }) => ReactNode` | -                                                      |
| yearRender         | Custom content for year cells                                   | `({ year, currentDate                                                                                      |
