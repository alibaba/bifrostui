---
group: date
name: DatePicker
---

# DatePicker

The DatePicker is a mobile component primarily used for selecting dates, supporting various selection modes including year, month, day, hour, minute, and second.

## Code Demonstration

### Basic Usage

Pass a `Date` object to the `value` property to set the default and current value. The default selectable range is 10 years before and after the current year.

```tsx
import React, { useState } from 'react';
import { DatePicker, Stack, Button } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleChange = (e, res) => {
    setValue(res.value);
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>
        {value.toLocaleDateString()}
      </Button>
      <DatePicker
        open={open}
        value={value}
        onChange={handleChange}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### Uncontrolled State

When using the `defaultValue` property, the component is in an uncontrolled state, and the default value is `minDate` if not specified.

```tsx
import React, { useState } from 'react';
import { DatePicker, Stack, Button } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleConfirm = (e, res) => {
    setValue(res.value);
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>{value.toLocaleString()}</Button>
      <DatePicker
        open={open}
        defaultValue={value}
        views={['year', 'month', 'day', 'hour', 'minute', 'second']}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### Selecting Hours, Minutes, and Seconds

By setting the `views` property, you can select hours, minutes, seconds, or any combination of them.

```tsx
import React, { useState } from 'react';
import { DatePicker, Stack, Button } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleConfirm = (e, res) => {
    setValue(res.value);
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>
        {value.toLocaleTimeString()}
      </Button>
      <DatePicker
        open={open}
        defaultValue={value}
        views={['hour', 'minute', 'second']}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### Limiting Maximum and Minimum Dates

Using the `minDate` and `maxDate` properties, you can limit the selectable date range.

```tsx
import React, { useState } from 'react';
import { DatePicker, Stack, Button } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleConfirm = (e, res) => {
    setValue(res.value);
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>
        {value.toLocaleDateString()}
      </Button>
      <DatePicker
        open={open}
        minDate={new Date(2021, 3, 9)}
        maxDate={new Date(2026, 4, 1)}
        defaultValue={value}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### Custom Text

You can customize the text by configuring `title`, `confirmText`, and `cancelText`.

```tsx
import React, { useState } from 'react';
import {
  DatePicker,
  Stack,
  Button,
  DatePickerType,
  IPickerOptionItem,
} from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleConfirm = (e, res) => {
    setValue(res.value);
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>
        {value.toLocaleDateString()}
      </Button>
      <DatePicker
        open={open}
        title="Select Date"
        confirmText="Yes"
        cancelText="No"
        defaultValue={value}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### Formatting Options

Using the `formatter` function, you can format the option text.

```tsx
import React, { useState } from 'react';
import {
  DatePicker,
  Stack,
  Button,
  DatePickerType,
  IPickerOptionItem,
} from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleConfirm = (e, res) => {
    setValue(res.value);
  };

  const formatter = (type: DatePickerType, option: IPickerOptionItem) => {
    switch (type) {
      case DatePickerType.YEAR:
        option.label = `${option.label}年`;
        break;
      case DatePickerType.MONTH:
        option.label = `${option.label}月`;
        break;
      case DatePickerType.DAY:
        option.label = `${option.label}日`;
        break;
    }

    return option;
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>
        {value.toLocaleDateString()}
      </Button>
      <DatePicker
        open={open}
        defaultValue={value}
        formatter={formatter}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### Step Settings

Using timeSteps, you can set the time increment steps to implement a custom step setting.

```tsx
import React, { useState } from 'react';
import {
  DatePicker,
  Stack,
  Button,
  DatePickerType,
  IPickerOptionItem,
} from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleConfirm = (e, res) => {
    setValue(res.value);
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>
        {value.toLocaleTimeString()}
      </Button>
      <DatePicker
        open={open}
        defaultValue={value}
        views={['hour', 'minute', 'second']}
        dateTimeStep={{ hour: 4, minute: 10, second: 30 }}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### Disabling Options

You can disable specific options using disableDateTimeView.

```tsx
import React, { useState } from 'react';
import {
  DatePicker,
  Stack,
  Button,
  DatePickerType,
  IPickerOptionItem,
} from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleConfirm = (e, res) => {
    setValue(res.value);
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>
        {value.toLocaleDateString()}
      </Button>
      <DatePicker
        open={open}
        defaultValue={value}
        disableDateTimeView={{
          day: (options) => {
            return options.filter((option) => option.value % 2 === 0);
          },
        }}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### API

| 属性                | 说明                                     | 类型                                                                             | 默认值                   |
| ------------------- | ---------------------------------------- | -------------------------------------------------------------------------------- | ------------------------ |
| open                | Whether the dialog is open               | boolean                                                                          | false                    |
| title               | Title                                    | string                                                                           | -                        |
| confirmText         | Confirmation text content                | string                                                                           | Confirm                  |
| cancelText          | Cancellation text content                | string                                                                           | Cancel                   |
| defaultValue        | Default selected value when uncontrolled | Date                                                                             | -                        |
| value               | Selected value when controlled           | Date                                                                             | -                        |
| views               | Date picker types                        | Array<DatePickerType\>                                                           | ['year', 'month', 'day'] |
| minDate             | Minimum selectable date                  | Date                                                                             | Ten years ago            |
| maxDate             | Maximum selectable date                  | Date                                                                             | Ten years from now       |
| disableDateTimeView | Disallowed selection options             | {[key in DatePickerType]: (options: IPickerOptionItem[]) => IPickerOptionItem[]} | -                        |
| dateTimeStep        | Time interval for increment steps        | [key in DatePickerType]: number;                                                 | -                        |
| formatter           | Option formatting function               | (type: string, option: IPickerOptionItem) => IPickerOptionItem                   | -                        |
| onConfirm           | Triggered when confirm button is pressed | (e: React.SyntheticEvent, { value: Date }) => void                               | -                        |
| onCancel            | Triggered when cancel button is pressed  | (e: React.SyntheticEvent) => void                                                | -                        |
| onClose             | Triggered when confirming and canceling  | (e: React.SyntheticEvent, { value: Date }) => void                               | -                        |
| onChange            | Triggered when options change            | (e: React.SyntheticEvent, { value: Date, type: DatePickerType }) => void         | -                        |

`DatePicker` inherits from `Picker` and other properties can be found in the [Picker API](/cores/picker?#api)

### DatePickerType Enum

`DatePickerType` is an enumeration used to define the different types of the date picker:

| 枚举值   | 描述       |
| -------- | ---------- |
| `year`   | 年份选择器 |
| `month`  | 月份选择器 |
| `day`    | 日期选择器 |
| `hour`   | 时间选择器 |
| `minute` | 分钟选择器 |
| `second` | 秒钟选择器 |
