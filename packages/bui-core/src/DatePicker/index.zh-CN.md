---
group: 日期
name: DatePicker 日期组件
---

# DatePicker 日期组件

DatePicker 是一个移动端组件，主要用于选择日期，支持年、月、日、时、分、秒等多种选择方式。

## 代码演示

### 基础用法

通过`value`属性传入`Date`对象，可设置默认值和当前值。默认可选范围为当前年份的前后10年。

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
        title="选择日期"
        value={value}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### 非受控状态

使用`defaultValue`属性时，组件处于非受控状态，未指定时默认值为`minDate`。

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
        title="选择日期"
        defaultValue={value}
        picker={['year', 'month', 'day', 'time', 'minute', 'second']}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### 选择时分秒

通过设置`picker`属性，可以选择时、分、秒。

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
        title="选择日期"
        defaultValue={value}
        picker={['time', 'minute', 'second']}
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
        title="选择日期"
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

### 格式化选项

使用`formatter`函数自定义选项显示格式。

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
        title="选择日期"
        value={value}
        formatter={formatter}
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
  IPickerOptionItem,
} from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleConfirm = (e, res) => {
    setValue(res.value);
  };

  const filter = (type: DatePickerType, options: IPickerOptionItem[]) => {
    switch (type) {
      case DatePickerType.TIME:
        return options.filter((option) => option.value % 2 === 0);
      case DatePickerType.MINUTE:
        return options.filter((option) => option.value % 5 === 0);
    }

    return options;
  };

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>
        {value.toLocaleTimeString()}
      </Button>
      <DatePicker
        open={open}
        title="选择时分"
        value={value}
        picker={['time', 'minute']}
        filter={filter}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### 禁用某些选项

通过`formatter`函数禁用特定选项。

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

  const handleChange = (e, res) => {
    setValue(res.value);
  };

  const formatter = (type: DatePickerType, option: IPickerOptionItem) => {
    if (value.getFullYear() === 2021 && type === DatePickerType.MONTH) {
      if (option.value < 3) {
        console.debug('formatter', option.value);
        option.disabled = true;
      }
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
        title="选择日期"
        value={value}
        formatter={formatter}
        onChange={handleChange}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};
```

### API

| 属性         | 说明                             | 类型                                                                     | 默认值                   |
| ------------ | -------------------------------- | ------------------------------------------------------------------------ | ------------------------ |
| open         | 弹层是否打开                     | boolean                                                                  | false                    |
| title        | 标题                             | string                                                                   | -                        |
| defaultValue | 默认选中的值，当组件非受控时使用 | Date                                                                     | -                        |
| value        | 选中的值，当组件受控时使用       | Date                                                                     | -                        |
| picker       | 日期选择器类型                   | Array<DatePickerType\>                                                   | ['year', 'month', 'day'] |
| minDate      | 可选择的最小日期                 | Date                                                                     | 十年前                   |
| maxDate      | 可选择的最大日期                 | Date                                                                     | 十年后                   |
| formatter    | 选项格式化函数                   | (type: string, option: IPickerOptionItem) => IPickerOptionItem           | -                        |
| filter       | 选项过滤函数                     | (type: string, options: IPickerOptionItem[]) => IPickerOptionItem[]      | -                        |
| PickerProps  | 透传Picker属性                   | PickerProps                                                              | -                        |
| onConfirm    | 点击确定按钮时触发               | (e: React.SyntheticEvent, { value: Date }) => void                       | -                        |
| onCancel     | 点击取消按钮时触发               | (e: React.SyntheticEvent) => void                                        | -                        |
| onClose      | 确定和取消时都触发               | (e: React.SyntheticEvent, { value: Date }) => void                       | -                        |
| onChange     | 选项改变时触发                   | (e: React.SyntheticEvent, { value: Date, type: DatePickerType }) => void | -                        |

### DatePickerType 枚举类型

`DatePickerType`是一个枚举类型，用于定义时间选择器的不同类型：

| 枚举值   | 描述       |
| -------- | ---------- |
| `year`   | 年份选择器 |
| `month`  | 月份选择器 |
| `day`    | 日期选择器 |
| `time`   | 时间选择器 |
| `minute` | 分钟选择器 |
| `second` | 秒钟选择器 |
