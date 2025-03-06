---
group: Date
name: DatePicker Date Component
---

# DatePicker Date Component

DatePicker is a mobile component primarily used for selecting dates, supporting various selection methods including year, month, day, hour, minute, and second.

## Code Examples

### Basic Usage

Pass a `Date` object via the `value` attribute to set the current value. The default selectable range is 10 years before and after the current year.

```tsx
import React, { useState, useRef, useEffect } from 'react';
import { DatePicker, Stack, Button, ref } from '@bifrostui/react';

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

### 非受控状态

When using the defaultValue property, the component is in an uncontrolled state, and if not specified, the default value will be minDate. The timestamp of the currently selected date can be obtained through the data-selected attribute on the DOM.

```tsx
import React, { useState, useRef } from 'react';
import { DatePicker, Stack, Button } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());
  const datePickerRef = useRef();

  const handleConfirm = (e, res) => {
    console.log(datePickerRef.current.dataset.selected);
    setValue(res.value);
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>{value.toLocaleString()}</Button>
      <DatePicker
        ref={datePickerRef}
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

### Select Hour, Minute, Second

By setting the `views` attribute, you can select hour, minute, and second, or any combination of them.

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

### Restrict Maximum and Minimum Dates

Use the `minDate` and `maxDate` attributes to restrict the selectable date range.

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

Customize text by configuring `title`, `confirmText`, and `cancelText`.

```tsx
import React, { useState } from 'react';
import {
  DatePicker,
  Stack,
  Button,
  DatePickerType,
  DatePickerOption,
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

### Format Options

With the `formatter` function, you can format the option text. The `showUnit` property also adds units to the options, but the `formatter` function takes precedence over the `showUnit` property.

```tsx
import React, { useState } from 'react';
import {
  DatePicker,
  Stack,
  Button,
  DatePickerType,
  DatePickerOption,
} from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleConfirm = (e, res) => {
    setValue(res.value);
  };

  const formatter = (type: DatePickerType, option: DatePickerOption) => {
    switch (type) {
      case DatePickerType.YEAR:
        option.label = `${option.label} Year`;
        break;
      case DatePickerType.MONTH:
        option.label = `${option.label} Month`;
        break;
      case DatePickerType.DAY:
        option.label = `${option.label} Day`;
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

Set time steps using `timeSteps` to achieve incremental step settings.

```tsx
import React, { useState } from 'react';
import {
  DatePicker,
  Stack,
  Button,
  DatePickerType,
  DatePickerOption,
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
        title="Select Time"
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

### Disable Options

Disable specific options using `disableDateTimeView`.

```tsx
import React, { useState } from 'react';
import {
  DatePicker,
  Stack,
  Button,
  DatePickerType,
  DatePickerOption,
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

### 过滤选项

Filter options using the `filter` function to implement custom filtering logic.

```tsx
import React, { useState } from 'react';
import {
  DatePicker,
  Stack,
  Button,
  DatePickerType,
  DatePickerOption,
} from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleConfirm = (e, res) => {
    setValue(res.value);
  };

  const filter = (type: DatePickerType, options: DatePickerOption[]) => {
    switch (type) {
      case DatePickerType.HOUR:
        return options.filter((option) => option.value % 2 === 0);
      case DatePickerType.MINUTE:
        return options.filter((option) => option.value % 5 === 0);
      default:
        return options;
    }
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>
        {value.toLocaleTimeString()}
      </Button>
      <DatePicker
        open={open}
        defaultValue={value}
        views={['hour', 'minute']}
        filter={filter}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### API

| Property            | Description                                       | Type                                                                                          | Default Value            |
| ------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------ |
| open                | Whether the overlay is open                       | boolean                                                                                       | false                    |
| title               | Title                                             | string                                                                                        | -                        |
| confirmText         | Confirm button text                               | string                                                                                        | Confirm                  |
| cancelText          | Cancel button text                                | string                                                                                        | Cancel                   |
| defaultValue        | Default selected value for uncontrolled component | Date                                                                                          | -                        |
| value               | Selected value for controlled component           | Date                                                                                          | -                        |
| views               | DatePicker types                                  | Array<DatePickerType\>                                                                        | ['year', 'month', 'day'] |
| minDate             | Minimum selectable date                           | Date                                                                                          | 10 years ago             |
| maxDate             | Maximum selectable date                           | Date                                                                                          | 10 years later           |
| showUnit            | Whether to show unit in picker                    | boolean                                                                                       | false                    |
| disableDateTimeView | Disabled dates                                    | Partial<{[key in DatePickerType]: (options: (string \| number)[]) => (string \| number)[]; }> | -                        |
| dateTimeStep        | Time step interval                                | Partial<{[key in DatePickerType]: number; }>                                                  | -                        |
| formatter           | Option formatter function                         | (type: string, option: DatePickerOption) => DatePickerOption                                  | -                        |
| filter              | Option filter function                            | (type: string, options: DatePickerOption[]) => DatePickerOption[]                             | -                        |
| onConfirm           | Triggered when confirm button is clicked          | (e: React.SyntheticEvent, { value: Date }) => void                                            | -                        |
| onCancel            | Triggered when cancel button is clicked           | (e: React.SyntheticEvent) => void                                                             | -                        |
| onClose             | Triggered on both confirm and cancel              | (e: React.SyntheticEvent, { value: Date }) => void                                            | -                        |
| onChange            | Triggered when options change                     | (e: React.SyntheticEvent, { value: Date, type: DatePickerType }) => void                      | -                        |

`DatePicker` inherits properties from `Picker`. See other properties at [Picker API](/cores/picker?#api).

### DatePickerType Enum Type

`DatePickerType` is an enum type used to define different types of time pickers。

| Enum Value | Description   |
| ---------- | ------------- |
| `year`     | Year picker   |
| `month`    | Month picker  |
| `day`      | Day picker    |
| `hour`     | Hour picker   |
| `minute`   | Minute picker |
| `second`   | Second picker |

### DatePickerOption Type

`DatePickerOption` is a composite type similar to `IPickerOptionItem`, with the difference that the `value` property is of type `number`, and the `label` property is of type `string`.

| 属性     | 说明                           | 类型    | 默认值 |
| -------- | ------------------------------ | ------- | ------ |
| label    | Text content of the option     | string  | -      |
| value    | Unique value for the option    | number  | -      |
| disabled | Whether the option is disabled | boolean | -      |
