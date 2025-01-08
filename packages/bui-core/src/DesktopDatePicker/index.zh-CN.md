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
      ['2024-12-20', '2024-12-21'].indexOf(
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

  const monthRender = (value, date) => {
    return <div style={{ background: 'gray' }}>{value}</div>;
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

启用 `monthRender` 可自定义年份单元格的内容。

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

  const yearRender = (value, date) => {
    return <div style={{ background: 'gray' }}>{value}</div>;
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
import { Button, DesktopDatePicker, Stack } from '@bifrostui/react';
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
        <Button onClick={onSingleClick}>回到今天</Button>
        <DesktopDatePicker
          mode="single"
          onChange={handleChange}
          value={value}
        />
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
  const [date, setDate] = useState();
  const inputRef = React.useRef(null);

  return (
    <Stack>
      <Button onClick={() => setDate(inputRef.current?.value)}>获取日期</Button>
      <div>组件内部的日期：{date}</div>
      <div style={{ width: '320px' }}>
        <DesktopDatePicker
          inputRef={inputRef}
          defaultValue={dayjs().add(1, 'day').toDate()}
        />
      </div>
    </Stack>
  );
};
```

### API

| 属性               | 说明                             | 类型                                                     | 默认值              |
| ------------------ | -------------------------------- | -------------------------------------------------------- | ------------------- |
| defaultValue       | 默认选中的值，当组件非受控时使用 | Date \| null                                             | -                   |
| value              | 选中的值，当组件受控时使用       | Date \| null                                             | -                   |
| placeholder        | 输入框提示文字                   | string                                                   | -                   |
| minDate            | 可选择的最小日期                 | Date                                                     | 当前日期的十年前    |
| maxDate            | 可选择的最大日期                 | Date                                                     | 当前日期的十年后    |
| open               | 弹层是否打开                     | boolean                                                  | false               |
| icon               | 输入框icon                       | React.ReactNode                                          | -                   |
| inputRef           | 输入框Ref                        | Ref                                                      | -                   |
| inputProps         | \<input/> 标签透传属性           | React.InputHTMLAttributes                                | -                   |
| picker             | 日期选择器类型                   | year \| month \| day                                     | year                |
| headerBarLeftIcon  | 头部操作栏左边图标               | (options: IDatePickerCustomIconProps) => React.ReactNode | \<CaretLeftIcon />  |
| headerBarRightIcon | 头部操作栏右边图标               | (options: IDatePickerCustomIconProps) => React.ReactNode | \<CaretRightIcon /> |
| disabled           | 日期选择器是否不可点击           | boolean                                                  | false               |
| disabledDate       | 不可选择的日期                   | (currentDate: Date) => boolean                           | 当天之前的日期      |
| monthRender        | 自定义月份单元格的内容           | (currentDate: ICalendarInstance) => React.ReactNode      | -                   |
| yearRender         | 自定义年份单元格的内容           | (currentDate: ICalendarInstance) => React.ReactNode      | -                   |
| disableOpenPicker  | 禁用弹层选择功能                 | boolean                                                  | false               |
| closeOnSelect      | 选择日期后是否立刻关闭           | boolean                                                  | true                |
| format             | 日期格式                         | string                                                   | YYYY/MM/DD          |
| onClose            | 关闭的回调                       | () => void                                               | -                   |
| onOpen             | 打开的回调                       | () => void                                               | -                   |
| onMonthChange      | 月份切换的回调                   | (e: React.SyntheticEvent, data: { value: Date }) => void | -                   |
| onYearChange       | 年份切换的回调                   | (e: React.SyntheticEvent, data: { value: Date }) => void | -                   |
| desktopPickerProps | 透传给 DesktopPicker 的属性      | IdesktopPickerProps                                      | -                   |
| calendarProps      | 透传给 Calendar 的属性           | IcalendarProps                                           | -                   |

### ICalendarInstance

| 属性  | 说明     | 类型    |
| ----- | -------- | ------- |
| month | 日期对象 | Date    |
| type  | 是否禁用 | boolean |

### IDatePickerCustomIconProps

| 属性       | 说明           | 类型    |
| ---------- | -------------- | ------- |
| isMinMonth | 是否是最小月份 | boolean |
| isMaxMonth | 是否是最大月份 | boolean |

### 组件样式变量

| 属性                | 说明           | 默认值 | 全局变量                |
| ------------------- | -------------- | ------ | ----------------------- |
| --height            | 组件高度       | 32px   | --bui-input-height      |
| --mini-width        | 选择器最小宽度 | 100px  | --bui-select-mini-width |
| --icon-size         | 输入框icon大小 | 16px   | --bui-icon-size-3       |
| --container-padding | 输入框左右边距 | 9px    | --bui-spacing-md        |

### 浮层样式变量（由于浮层节点在H5/web渲染在 body 节点中，所以需要单独维护）,需定义在bui-date-picker-calendar-main内

| 属性                            | 说明                   | 默认值    | 全局变量 |
| ------------------------------- | ---------------------- | --------- | -------- |
| --container-main-radius         | 浮层容器圆角           | 3px       | -        |
| --container-content-padding     | 浮层容器内元素左右边距 | 10px 16px | -        |
| --container-content-height      | 浮层容器内元素高度     | 30px      | -        |
| --container-content-line-height | 浮层容器内元素行高     | 30px      | -        |
| --container-content-width       | 浮层容器内元素宽度     | 60px      | -        |
