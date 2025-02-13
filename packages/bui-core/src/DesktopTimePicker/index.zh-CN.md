---
group: 日期
name: DesktopTimePicker 时间组件
---

# DesktopTimePicker 时间组件

DesktopTimePicker 组件，常用于选择时间，包括时分秒。

## 代码演示

### 基础用法

默认 `value` 应传入 `Date`。

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React, { useState } from 'react';
dayjs.extend(customParseFormat);

export default () => {
  const [value, setValue] = useState(new Date());
  const handleChange = (e, res) => {
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker onChange={handleChange} value={value} />
      </div>
    </Stack>
  );
};
```

### 禁用弹层

使用 `disableOpenPicker` 禁用弹层选择功能, 只能输入改变时间

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
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

使用 `disabled` 禁用该时间组件

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker disabled value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};
```

### 自定义禁用时间

通过 `disabledTimeView` 可自定义禁用时间。

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  const disabledTimeView = () => ({
    hour: () => {
      return Array.from({ length: 24 }, (_, i) => i).filter(
        (hour) => hour < 17,
      );
    },
    minute: (selectedHour) => {
      if (selectedHour === 9) {
        return [];
      }
      return Array.from({ length: 60 }, (_, i) => i).filter((hour) => hour < 3);
    },
    second: () => [],
  });

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          disabledTimeView={disabledTimeView}
          value={value}
          onChange={handleChange}
          ampm={false}
        />
      </div>
    </Stack>
  );
};
```

### 选择时间后是否立刻关闭弹窗

使用 `closeOnSelect` 选择时间后是否立刻关闭

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          closeOnSelect={false}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### 指定时间格式

使用 `format` 指定时间显示格式， 默认 `HH:mm:ss`。如果 `ampm` 为 `true` ，则默认 `hh:mm:ss a`

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          format="hh:mm:ss a"
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};
```

### 弹层是否打开

使用 `open` 控制时间组件是否打开

```tsx
import { DesktopTimePicker, Stack, Button } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs());
  const [open, setOpen] = useState(false);
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Button onClick={() => setOpen(!open)}>{open ? '关闭' : '打开'}</Button>
        <DesktopTimePicker
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

通过 `minTime` 和 `maxTime` 指定可选范围。

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs('20230401'));

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          closeOnSelect={false}
          value={value}
          minTime={dayjs().set('hour', 10).set('minute', 10).set('second', 0)}
          maxTime={dayjs().set('hour', 15).set('minute', 10).set('second', 0)}
          onChange={(e, res) => {
            console.log('时间变化：', res);
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
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs('20230401'));

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker
          value={value}
          icon={<HelpCircleOutlinedIcon />}
          onChange={(e, res) => {
            console.log('时间变化：', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};
```

### 关闭/开启的回调

`onClose`， `onOpen` 可自定义关闭开启的回调。

```tsx
import { DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs());
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
        <DesktopTimePicker
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

### 受控时间组件

通过 `value` 属性控制时间组件。

```tsx
import { Button, DesktopTimePicker, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().add(1, 'month'));

  const onSingleClick = () => {
    setValue(dayjs());
  };
  const handleChange = (e, res) => {
    console.log('时间变化：', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Button onClick={onSingleClick}>回到今天</Button>
        <DesktopTimePicker
          mode="single"
          onChange={handleChange}
          value={value}
        />
      </div>
    </Stack>
  );
};
```

### 非受控时间组件

通过 `defaultValue` 属性渲染组件，时间的选中态会体现在input中,可通过inputRef获取。

```tsx
import { DesktopTimePicker, Button, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState();
  const inputRef = React.useRef(null);

  return (
    <Stack>
      <Button onClick={() => setDate(inputRef.current?.value)}>获取时间</Button>
      <div>组件内部的时间：{date}</div>
      <div style={{ width: '320px' }}>
        <DesktopTimePicker inputRef={inputRef} defaultValue={dayjs()} />
      </div>
    </Stack>
  );
};
```

### API

| 属性               | 说明                             | 类型                                                                                                                                        | 默认值                                                                           |
| ------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| defaultValue       | 默认选中的值，当组件非受控时使用 | Date \| null                                                                                                                                | -                                                                                |
| value              | 选中的值，当组件受控时使用       | Date \| null                                                                                                                                | -                                                                                |
| placeholder        | 输入框占位内容                   | string                                                                                                                                      | -                                                                                |
| minTime            | 可选择的最小时间                 | Date                                                                                                                                        | -                                                                                |
| maxTime            | 可选择的最大时间                 | Date                                                                                                                                        | -                                                                                |
| open               | 弹层是否打开                     | boolean                                                                                                                                     | false                                                                            |
| icon               | 输入框icon                       | React.ReactNode                                                                                                                             | -                                                                                |
| views              | 打开浮层的视图                   | Array<'hour' \| 'minute' \| 'second'>                                                                                                       | ['hour', 'minute', 'second']                                                     |
| timeSteps          | 时间间隔                         | {hour?: number;minute?: number; second?: number}                                                                                            | { hour: 1, minute: 1, second: 1 }                                                |
| ampm               | 是否使用十二小时制模式           | boolean                                                                                                                                     | false                                                                            |
| disabledTimeView   | 禁止选择的时间                   | () => {hour?: () => number[];minute?:(selectedHour: number) => number[];second?: (selectedHour: number, selectedMinute: number) =>number[]} | () => ({hour: () => {return [];}, minute: () => { return [];},second: () => []}) |
| disableOpenPicker  | 禁用弹层选择功能                 | boolean                                                                                                                                     | false                                                                            |
| disabled           | 是否禁用时间选择器               | boolean                                                                                                                                     | false                                                                            |
| closeOnSelect      | 选择时间后是否立刻关闭           | boolean                                                                                                                                     | true                                                                             |
| format             | 时间格式化                       | string                                                                                                                                      | HH:mm:ss                                                                         |
| onClose            | 弹层关闭的回调                   | () => void                                                                                                                                  | -                                                                                |
| onOpen             | 弹层打开的回调                   | () => void                                                                                                                                  | -                                                                                |
| onChange           | 时间发生变化的回调               | (e: React.SyntheticEvent, data: { value: ITimePickerValue }) => void                                                                        | -                                                                                |
| DesktopPickerProps | 透传给 DesktopPicker 的属性      |
| inputRef           | 输入框Ref                        | Ref                                                                                                                                         | -                                                                                |
| inputProps         | \<input/> 标签透传属性           | React.InputHTMLAttributes                                                                                                                   | -                                                                                |
| DesktopPickerProps | 透传给 DesktopPicker 的属性      | DesktopPickerProps                                                                                                                          |
