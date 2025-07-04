---
group: 日期
name: DatePicker 日期组件
---

# DatePicker 日期组件

DatePicker 是一个移动端组件，主要用于选择日期，支持年、月、日、时、分、秒等多种选择方式。

## 代码演示

### 基础用法

通过`value`属性传入`Date`对象，可设置当前值，默认可选范围为当前年份的前后10年。

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

使用`defaultValue`属性时，组件处于非受控状态，未指定时默认值为`minDate`。通过DOM上的`data-selected`属性可以获取当前选中日期对应的时间戳。

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

### 选择时分秒

通过设置`views`属性，可以选择时、分、秒，也可以任意组合。

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

### 限制最大和最小日期

通过`minDate`和`maxDate`属性，可以限制可选日期范围。

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

### 自定义文案

通过配置 `title`、`confirmText`、`cancelText`，可以自定义文案。

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
        title="选择日期"
        confirmText="是"
        cancelText="否"
        defaultValue={value}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### 格式化选项

通过`formatter`函数，可以对选项文字进行格式化处理。`showUnit`属性同样是也为选项后面添加单位，但`formatter`函数的优先级高于`showUnit`属性。

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

### 步长设置

通过`timeSteps`设置时间步长，实现递增步长设置。

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
        title="选择时分"
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

### 禁用选项

通过`disableDateTimeView`禁用指定选项。

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

### 过滤选项

通过`filter`函数过滤选项，实现自定义筛选逻辑。

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

| 属性                | 说明                             | 类型                                                                                         | 默认值                   |
| ------------------- | -------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------ |
| open                | 弹层是否打开                     | boolean                                                                                      | false                    |
| title               | 标题                             | string                                                                                       | -                        |
| confirmText         | 确认文本内容                     | string                                                                                       | 确认                     |
| cancelText          | 取消文本内容                     | string                                                                                       | 取消                     |
| defaultValue        | 默认选中的值，当组件非受控时使用 | Date                                                                                         | -                        |
| value               | 选中的值，当组件受控时使用       | Date                                                                                         | -                        |
| views               | 日期选择器类型                   | Array<DatePickerType\>                                                                       | ['year', 'month', 'day'] |
| minDate             | 可选择的最小日期                 | Date                                                                                         | 十年前                   |
| maxDate             | 可选择的最大日期                 | Date                                                                                         | 十年后                   |
| showUnit            | 是否展示选择器的单位             | boolean                                                                                      | false                    |
| disableDateTimeView | 禁止选择的日期                   | Partial<{[key in DatePickerType]: (options: (string \| number)[]) => (string \| number)[] }> | -                        |
| dateTimeStep        | 时间间隔,设置递增步长            | Partial<{[key in DatePickerType]: number }>                                                  | -                        |
| formatter           | 选项格式化函数                   | (type: string, option: DatePickerOption) => DatePickerOption                                 | -                        |
| filter              | 选项过滤函数                     | (type: string, options: DatePickerOption[]) => DatePickerOption[]                            | -                        |
| onConfirm           | 点击确定按钮时触发               | (e: React.SyntheticEvent, { value: Date }) => void                                           | -                        |
| onCancel            | 点击取消按钮时触发               | (e: React.SyntheticEvent) => void                                                            | -                        |
| onClose             | 确定和取消时都触发               | (e: React.SyntheticEvent, { value: Date }) => void                                           | -                        |
| onChange            | 选项改变时触发                   | (e: React.SyntheticEvent, { value: Date, type: DatePickerType }) => void                     | -                        |

`DatePicker`继承自`Picker`，其他属性见 [Picker API](/cores/picker?#api)

### DatePickerType 枚举类型

`DatePickerType`是一个枚举类型，用于定义时间选择器的不同类型。

| 枚举值   | 描述       |
| -------- | ---------- |
| `year`   | 年份选择器 |
| `month`  | 月份选择器 |
| `day`    | 日期选择器 |
| `hour`   | 时间选择器 |
| `minute` | 分钟选择器 |
| `second` | 秒钟选择器 |

### DatePickerOption 选项类型

`DatePickerOption`是组合类型，与`IPickerOptionItem`相似，区别是`value`属性是`number`类型，`label`属性是`string`类型。

| 属性     | 说明             | 类型    | 默认值 |
| -------- | ---------------- | ------- | ------ |
| label    | 选项的文字内容   | string  | -      |
| value    | 选项对应唯一的值 | number  | -      |
| disabled | 是否禁用         | boolean | -      |
