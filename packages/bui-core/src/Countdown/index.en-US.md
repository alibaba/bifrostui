---
group: Data Display
name: Countdown
---

# Countdown

Used for real-time display of countdown values.

## Code demonstration

### Basic Usage

Adopt`remainingTime`control the remaining duration of the countdown, and`endTimestamp`choose one of the two fields.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown remainingTime={24 * 60 * 60 * 1000} format="HH:mm:ss" />
    </Stack>
  );
};
```

### End timestamp

Adopt`endTimestamp`specify the end time of the countdown, and`remainingTime`choose one of the two fields, priority ratio`remainingTime`high.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown endTimestamp={4102415999000} format="YY:MM:DD:HH:mm:ss" />
    </Stack>
  );
};
```

### Calculate server timestamp

Adopt`serverTimestamp`set server timestamp, which can be used in conjunction with`endTimestamp`when used in conjunction, this attribute can be used to prevent situations where local time is modified and countdown errors occur.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        serverTimestamp={Date.now() - 10 * 1000}
        endTimestamp={4102415999000}
        format="YY:MM:DD:HH:mm:ss"
      />
    </Stack>
  );
};
```

### Format countdown timer

Adopt`format`the format of the countdown can be set after formatting, and the default value is`HH:mm:ss`。

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        endTimestamp={4102415999000}
        format="YY年MM月DD日HH时mm分ss秒SSS毫秒"
      />
    </Stack>
  );
};
```

### Countdown unit style

Adopt`unitStyle`countdown unit styles can be set.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        endTimestamp={4102415999000}
        format="YY年MM月DD日HH时mm分ss秒"
        unitStyle={{
          color: 'var(--bui-color-primary)',
          fontWeight: 600,
          fontSize: '16px',
        }}
      />
    </Stack>
  );
};
```

### Countdown numerical style

Can be done through`valueStyle`customize the style of the first and second digits of the countdown timer.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        valueStyle={[
          {
            color: 'var(--bui-color-primary)',
            fontWeight: 600,
            fontSize: '16px',
          },
          {
            color: 'var(--bui-color-primary)',
            fontWeight: 600,
            fontSize: '20px',
          },
        ]}
      />
    </Stack>
  );
};
```

### The style of countdown timer

Can be done through`timeSliceStyle`customize the style of each time slot for the countdown timer.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        format="HH时mm分ss秒"
        timeSliceStyle={{
          backgroundColor: 'var(--bui-color-bg-default)',
          padding: '4px',
          borderRadius: '4px',
          marginRight: '4px',
        }}
      />
    </Stack>
  );
};
```

### Countdown End Event

Triggered when the countdown ends`onFinish`event.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  const finish = () => {
    console.log('倒计时已结束！');
  };

  return (
    <Stack>
      <Countdown remainingTime={10 * 1000} onFinish={finish} />
    </Stack>
  );
};
```

### Countdown change event

Triggered when the countdown changes`onChange`event.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  const change = (data) => {
    console.log('正在倒计时，当前数据', data);
  };

  return (
    <Stack>
      <Countdown remainingTime={10 * 1000} onChange={change} />
    </Stack>
  );
};
```

### Customize countdown content

Can be done through`renderContent`custom rendering countdown component content.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        renderContent={({ hours, minutes, seconds }) => {
          return (
            <span>
              距离倒计时结束还剩{hours}小时{minutes}分钟{seconds}秒
            </span>
          );
        }}
      />
    </Stack>
  );
};
```

## API

### Countdown

| attribute       | explain                                                                                                                                                            | type                                    | Default value |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- | ------------- |
| remainingTime   | The remaining countdown time is a time period (in milliseconds) that is mutually exclusive with endTimestamp                                                       | number                                  | 0             |
| endTimestamp    | The countdown end timestamp is a time point that is mutually exclusive with remaningTime and has a higher priority than remaningTime                               | number                                  | -             |
| serverTimestamp | Server timestamp is a time point that can be used in conjunction with endTimestamp                                                                                 | number                                  | -             |
| format          | Format countdown display, refer to dayjs                                                                                                                           | string                                  | HH:mm:ss      |
| unitStyle       | Style of time unit                                                                                                                                                 | CSSProperties                           | -             |
| valueStyle      | The style of the countdown digits is used to customize the style of the first and second digits                                                                    | CSSProperties[]                         | -             |
| timeSliceStyle  | The style of each time block is used to customize the style of each time block. If the style of the first and second digits is the same, it can replace valueStyle | CSSProperties                           | -             |
| onFinish        | Triggered when the countdown is completed                                                                                                                          | () => void                              | -             |
| onChange        | Triggered when the countdown time changes                                                                                                                          | (data: { value: CurrentTime }) => void; | -             |
| renderContent   | Customize rendering content                                                                                                                                        | (data: CurrentTime) => React.ReactNode; | -             |

#### CurrentTime

| attribute     | explain                                 | type   | Default value |
| ------------- | --------------------------------------- | ------ | ------------- |
| total         | Remaining total time, in milliseconds   | number | -             |
| years         | Remaining years                         | string | -             |
| months        | Remaining months                        | string | -             |
| days          | Days Remaining                          | string | -             |
| hours         | Remaining hours                         | string | -             |
| minutes       | Remaining minutes                       | string | -             |
| seconds       | Remaining seconds                       | string | -             |
| hoursWithDays | Remaining integer days, remaining hours | string | -             |

## Style variables

| attribute           | explain           | Default value            | global variable                   |
| ------------------- | ----------------- | ------------------------ | --------------------------------- |
| --font-size         | Copy font size    | --bui-text-size-1        | --bui-countdown-font-size         |
| --color             | Copy font color   | --bui-color-fg-default   | --bui-countdown-color             |
| --font-weight       | Copy font weight  | --bui-font-weight-normal | --bui-countdown-font-weight       |
| --slice-unit-margin | separator spacing | 0 2px                    | --bui-countdown-slice-unit-margin |
