---
group: Date
name: DatePicker Component
---

# DatePicker Component

DatePicker is a mobile component mainly used for selecting dates, supporting multiple selection modes such as year, month, day, hour, minute, and second.

## Code Demonstration

### Basic Usage

By passing in a `Date` object through the `value` attribute, you can set the current value. The default selectable range is 10 years before and after the current year.

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

### Uncontrolled State

When using the `defaultValue` attribute, the component is in an uncontrolled state. If unspecified, the default value is `minDate`. The current selected date equivalent timestamp can be obtained via the DOM's `data-selected` attribute.

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

### Selection of Hour, Minute, Second

You can choose hour, minute, and second or combine them at will by setting the `views` attribute.

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

The selectable date range can be limited with the `minDate` and `maxDate` attributes.

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

Through the `formatter` function, option text can be formatted. The `showUnit` attribute also adds units after options, but the `formatter` function has higher priority over the `showUnit` attribute.

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

### Step Setting

Set the time steps with `timeSteps` for incremental step settings.

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
        title="Select Hour and Minute"
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

Disable specific options through `disableDateTimeView`.

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
          day: (values) => {
            return values.filter((value) => value % 2 === 0);
          },
        }}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### Filter Options

Filter options through the `filter` function to implement custom filtering logic.

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

| Attribute           | Description                              | Type                                                                                         | Default Value            |
| ------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------ |
| open                | Whether the overlay is open              | boolean                                                                                      | false                    |
| title               | Title                                    | string                                                                                       | -                        |
| confirmText         | Confirm button text                      | string                                                                                       | Confirm                  |
| cancelText          | Cancel button text                       | string                                                                                       | Cancel                   |
| defaultValue        | Default selected value                   | Date                                                                                         | -                        |
| value               | Selected value                           | Date                                                                                         | -                        |
| views               | Types of date selectors                  | Array<DatePickerType\>                                                                       | ['year', 'month', 'day'] |
| minDate             | Minimum selectable date                  | Date                                                                                         | Ten years ago            |
| maxDate             | Maximum selectable date                  | Date                                                                                         | Ten years later          |
| showUnit            | Display unit after selectors             | boolean                                                                                      | false                    |
| disableDateTimeView | Disable specific date selection          | Partial<{[key in DatePickerType]: (options: (string \| number)[]) => (string \| number)[] }> | -                        |
| dateTimeStep        | Time interval setting                    | Partial<{[key in DatePickerType]: number }>                                                  | -                        |
| formatter           | Formatting function for options          | (type: string, option: DatePickerOption) => DatePickerOption                                 | -                        |
| filter              | Filtering function for options           | (type: string, options: DatePickerOption[]) => DatePickerOption[]                            | -                        |
| onConfirm           | Triggered when confirm button is clicked | (e: React.SyntheticEvent, { value: Date }) => void                                           | -                        |
| onCancel            | Triggered when cancel button is clicked  | (e: React.SyntheticEvent) => void                                                            | -                        |
| onClose             | Triggered on confirm and cancel          | (e: React.SyntheticEvent, { value: Date }) => void                                           | -                        |
| onChange            | Triggered when option changes            | (e: React.SyntheticEvent, { value: Date, type: DatePickerType }) => void                     | -                        |

`DatePicker` inherits from `Picker`, for other attributes see [Picker API](/cores/picker?#api)

### DatePickerType Enum Type

`DatePickerType` is an enum type used to define different time selector types.

| Enum Value | Description     |
| ---------- | --------------- |
| `year`     | Year selector   |
| `month`    | Month selector  |
| `day`      | Day selector    |
| `hour`     | Hour selector   |
| `minute`   | Minute selector |
| `second`   | Second selector |

### DatePickerOption Type

`DatePickerOption` is a composite type similar to `IPickerOptionItem`, differing in that the `value` attribute is of `number` type, and the `label` attribute is of `string` type.

| Attribute | Description            | Type    | Default Value |
| --------- | ---------------------- | ------- | ------------- |
| label     | Text content           | string  | -             |
| value     | Unique value           | number  | -             |
| disabled  | Whether it is disabled | boolean | -             |

```

```
