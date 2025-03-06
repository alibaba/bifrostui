---
group: 日期
name: DesktopDatePicker 日期组件
---

# DesktopDatePicker 日期组件

DesktopDatePicker 组件，常用于选择日期，包括年月日。

## 代码演示

### 基础用法

默认 `value` 应传入 `Date`，默认可选范围为包含当前年份在内的前后10年。

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### 禁用弹层

使用 `disableOpenPicker` 禁用弹层选择功能, 只能输入改变日期

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
          disableOpenPicker
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### 禁用

使用 `disabled` 禁用该日期组件

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker disabled value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### 禁用指定日期

通过 `disabledDate` 可自定义禁用日期。

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
      ['2024-12-20', '2025-01-21'].indexOf(
        dayjs(currentDate).format('YYYY-MM-DD'),
      ) > -1 || ['2023', '2022'].indexOf(dayjs(currentDate).format('YYYY')) > -1
    );
  };
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
          disabledDate={disabledDate}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### 选择日期后是否立刻关闭弹窗

使用 `closeOnSelect` 选择日期后是否立刻关闭

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
          closeOnSelect={false}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### 指定日期格式

使用 `format` 指定日期显示格式， 默认 `YYYY/MM/DD`

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
          format="YYYY-MM-DD"
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### 弹层是否打开

使用 `open` 控制日期组件是否打开

```tsx
import { DesktopDatePicker, Stack, Button } from '@bifrostui/react';
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
        <Button onClick={() => setOpen(!open)}>{open ? '关闭' : '打开'}</Button>
        <DesktopDatePicker
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

### 指定可选范围

通过 `minDate` 和 `maxDate` 指定可选范围。

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs('20230401').toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
          value={value}
          minDate={dayjs('20200401').toDate()}
          maxDate={dayjs('20230429').toDate()}
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

### 自定义输入框icon

通过 `icon` 指定输入框icon

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs('20230401').toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
          value={value}
          icon={<HelpCircleOutlinedIcon />}
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

### 日期选择器类型

通过 `picker` 指定可选范围。

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs('20230401').toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
          value={value}
          picker="year"
          format="YYYY"
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

### 自定义头部栏左右按钮

使用 `headerBarLeftIcon` 和 `headerBarRightIcon` 可自定义头部栏左右图标。

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
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

### 自定义月份单元格的内容

启用 `monthRender` 可自定义月份单元格的内容。

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const monthRender = ({ month, currentData }) => {
    if (month === 5) {
      return <div style={{ color: 'red' }}>{month}月</div>;
    }
    return <div>{month}月</div>;
  };
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
          value={value}
          monthRender={monthRender}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### 自定义年份单元格的内容

启用 `yearRender` 可自定义年份单元格的内容。

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const yearRender = ({ year, currentData }) => {
    if (year === 2023) {
      return <div style={{ color: 'red' }}>{year}</div>;
    }
    return <div>{year}</div>;
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
          yearRender={yearRender}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### 关闭/开启的回调

`onClose`， `onOpen` 可自定义关闭开启的回调。

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
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

### 月份切换的回调

启用 `onMonthChange` 可自定义月份切换的回调。

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
          onMonthChange={onMonthChange}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### 年份切换的回调

启用 `onYearChange` 可自定义年份切换的回调。

```tsx
import { DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <DesktopDatePicker
          onYearChange={onYearChange}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### 受控日历组件

通过 `value` 属性控制日历组件。

```tsx
import { Button, DesktopDatePicker, Input, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().add(1, 'month').toDate());

  const onSingleClick = () => {
    setValue(dayjs().toDate());
  };
  const handleChange = (e, res) => {
    console.log('日期变化：', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        输入时间
        <Input onChange={(e) => setValue(e.target.value)} />
        <DesktopDatePicker
          mode="single"
          onChange={handleChange}
          value={value}
        />
        <Button onClick={onSingleClick}>回到今天</Button>
      </div>
    </Stack>
  );
};
```

### 非受控日历组件

通过 `defaultValue` 属性渲染组件，日历的选中态会体现在input中,可通过inputRef获取。

```tsx
import { DesktopDatePicker, Button, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState(dayjs().add(1, 'day').toDate());
  const [defaultValue, setDefault] = useState(dayjs().add(1, 'day').toDate());
  const inputRef = React.useRef(null);

  return (
    <Stack>
      <Button onClick={() => setDate(inputRef.current?.value)}>
        获取组件内部日期
      </Button>
      <Button onClick={() => setDefault(dayjs().toDate())}>回到今天</Button>
      <div>defaultValue: {dayjs(defaultValue).format('YYYY/MM/DD')}</div>
      <div>组件内部日期: {dayjs(date).format('YYYY/MM/DD')}</div>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker inputRef={inputRef} defaultValue={defaultValue} />
      </div>
    </Stack>
  );
};
```

### API

### DesktopDatePicker

| 属性               | 说明                             | 类型                                                                                                         | 默认值                                  |
| ------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| defaultValue       | 默认选中的值，当组件非受控时使用 | `Date \| null`                                                                                               | -                                       |
| value              | 选中的值，当组件受控时使用       | `Date \| null`                                                                                               | -                                       |
| placeholder        | 输入框占位内容                   | `string`                                                                                                     | -                                       |
| minDate            | 可选择的最小日期                 | `Date`                                                                                                       | `dayjs().subtract(10, 'year').toDate()` |
| maxDate            | 可选择的最大日期                 | `Date`                                                                                                       | `dayjs().add(10, 'year').toDate()`      |
| open               | 弹层是否打开                     | `boolean`                                                                                                    | -                                       |
| icon               | 输入框图标                       | `React.ReactNode`                                                                                            | `<DateOutlinedIcon />`                  |
| inputRef           | 输入框引用                       | `Ref<HTMLInputElement>`                                                                                      | -                                       |
| inputProps         | 输入框属性                       | `React.InputHTMLAttributes<HTMLInputElement>`                                                                | -                                       |
| picker             | 日期选择器类型                   | `'year' \| 'month' \| 'day'`                                                                                 | `'day'`                                 |
| headerBarLeftIcon  | 头部操作栏左边图标               | `(options: IDatePickerCustomIconProps) => React.ReactNode`                                                   | -                                       |
| headerBarRightIcon | 头部操作栏右边图标               | `(options: IDatePickerCustomIconProps) => React.ReactNode`                                                   | -                                       |
| disabled           | 是否禁用日期选择器               | `boolean`                                                                                                    | `false`                                 |
| disabledDate       | 不可选择的日期                   | `(currentDate: Date) => boolean`                                                                             | -                                       |
| monthRender        | 自定义月份单元格的内容           | `({ month, currentDate }: { month: string \| number; currentDate: IDatePickerInstance }) => React.ReactNode` | -                                       |
| yearRender         | 自定义年份单元格的内容           | `({ year, currentDate }: { year: string \| number; currentDate: IDatePickerInstance }) => React.ReactNode`   | -                                       |
| onChange           | 日期发生变化的回调               | `(e: React.SyntheticEvent, data: { value: Date \| null }) => void`                                           | -                                       |
| closeOnSelect      | 选择日期后是否立刻关闭           | `boolean`                                                                                                    | `true`                                  |
| disableOpenPicker  | 禁用弹层选择功能                 | `boolean`                                                                                                    | `false`                                 |
| format             | 日期格式化                       | `string`                                                                                                     | `'YYYY/MM/DD'`                          |
| onClose            | 弹层关闭的回调                   | `() => void`                                                                                                 | -                                       |
| onOpen             | 弹层打开的回调                   | `() => void`                                                                                                 | -                                       |
| onMonthChange      | 月份切换的回调                   | `(e: React.SyntheticEvent, data: { value: Date }) => void`                                                   | -                                       |
| onYearChange       | 年份切换的回调                   | `(e: React.SyntheticEvent, data: { value: Date }) => void`                                                   | -                                       |
| DesktopPickerProps | 桌面选择器的属性                 | `DesktopPickerProps`                                                                                         | -                                       |
| CalendarProps      | 日历组件的属性                   | `CalendarProps`                                                                                              | -                                       |

### IDatePickerCustomIconProps

| 属性       | 说明           | 类型      | 默认值 |
| ---------- | -------------- | --------- | ------ |
| isMinMonth | 是否是最小时间 | `boolean` | -      |
| isMaxMonth | 是否是最大时间 | `boolean` | -      |

### IDatePickerCalendarProps

| 属性                        | 说明                     | 类型                                                    | 默认值  |
| --------------------------- | ------------------------ | ------------------------------------------------------- | ------- |
| hideDaysOutsideCurrentMonth | 是否隐藏当前月之外的日期 | `boolean`                                               | `false` |
| highlightDate               | 高亮的日期，默认为today  | `'today' \| 'weekend'`                                  | -       |
| dateRender                  | 自定义日期单元格的内容   | `(currentDate: IDatePickerInstance) => React.ReactNode` | -       |
| weekRender                  | 自定义周单元格的内容     | `(week: string) => React.ReactNode`                     | -       |

## 样式变量

| 全局变量                              | 说明         | 默认值                                      |
| ------------------------------------- | ------------ | ------------------------------------------- |
| --bui-d-date-picker-height            | 输入框高度   | `var(--bui-input-height, 32px)`             |
| --bui-d-date-picker-min-width         | 最小宽度     | `var(--bui-input-min-width, 100px)`         |
| --bui-d-date-picker-font-size         | 字体大小     | `var(--bui-title-size-3, 16px)`             |
| --bui-d-date-picker-icon-size         | 图标大小     | `var(--bui-title-size-3, 16px)`             |
| --bui-d-date-picker-container-padding | 内边距       | ` var(--bui-spacing-md, 9px)`               |
| --bui-d-date-picker-bg                | 背景颜色     | `var(--bui-color-bg-view)`                  |
| --bui-d-date-picker-font-family       | 字体         | `var(--bui-font-family)`                    |
| --bui-d-date-picker-border            | 边框         | `1px solid var(--bui-color-border-default)` |
| --bui-d-date-picker-shadow            | 阴影         | `0 0 0 2px var(--bui-color-bg-default)`     |
| --bui-d-date-picker-disabled-color    | 禁用文字颜色 | `var(--bui-color-fg-subtle)`                |

### 日期选择面板

| 全局变量                                    | 说明         | 默认值                                  |
| ------------------------------------------- | ------------ | --------------------------------------- |
| --bui-d-date-picker-lay-font-family         | 字体         | `var(--bui-font-family)`                |
| --bui-d-date-picker-lay-main-radius         | 边框圆角     | `3px`                                   |
| --bui-d-date-picker-lay-content-padding     | 内容内边距   | `10px 16px`                             |
| --bui-d-date-picker-lay-content-height      | 内容高度     | `30px`                                  |
| --bui-d-date-picker-lay-content-line-height | 内容行高     | `30px`                                  |
| --bui-d-date-picker-lay-content-width       | 内容宽度     | `60px`                                  |
| --bui-d-date-picker-lay-calendar-padding    | 日历内边距   | `6px 12px 7px`                          |
| --bui-d-date-picker-lay-shadow              | 阴影         | `0 0 0 2px var(--bui-color-bg-default)` |
| --bui-d-date-picker-title-size              | 标题字体大小 | `var(--bui-title-size-3)`               |
| --bui-d-date-picker-list-padding            | 列表内边距   | `6px 12px 7px`                          |
| --bui-d-date-picker-col-bg                  | 列背景颜色   | `var(--bui-color-bg-view)`              |
| --bui-d-date-picker-content-radius          | 内容圆角     | `var(--bui-shape-radius-default, 6px)`  |
| --bui-d-date-picker-col-font-size           | 列字体大小   | `var(--bui-title-size-4)`               |
