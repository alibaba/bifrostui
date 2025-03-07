---
group: Data Display
name: Countdown Timer
---

# Countdown Timer

Used to display countdown values in real time.

## Code Demos

### Basic Usage

Control the remaining countdown duration using `remainingTime`, which is mutually exclusive with the `endTimestamp` field.

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

### End Timestamp

Specify the end time of the countdown using `endTimestamp`, which is mutually exclusive with `remainingTime`. It has a higher priority than `remainingTime`.

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

### Server Timestamp Calculation

Set the server timestamp using `serverTimestamp`, which can be used in conjunction with `endTimestamp`. This property prevents local time modifications from causing incorrect countdowns.

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

### Formatting the Countdown

Customize the format of the countdown using `format`. The default value is `HH:mm:ss`.

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

### Countdown Unit Style

Customize the style of the countdown units using `unitStyle`.

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

### Countdown Value Style

Customize the style of the first and second digits of the countdown using `valueStyle`.

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

### Time Slice Style

Customize the style of each time slice in the countdown using `timeSliceStyle`.

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

### Countdown Finish Event

The `onFinish` event is triggered when the countdown ends.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  const finish = () => {
    console.log('Countdown has ended!');
  };

  return (
    <Stack>
      <Countdown remainingTime={10 * 1000} onFinish={finish} />
    </Stack>
  );
};
```

### Countdown Change Event

The `onChange` event is triggered when the countdown changes.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  const change = (data) => {
    console.log('Counting down, current data:', data);
  };

  return (
    <Stack>
      <Countdown remainingTime={10 * 1000} onChange={change} />
    </Stack>
  );
};
```

### Custom Countdown Content

Customize the content of the countdown component using `renderContent`.

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
              Remaining time until countdown ends: {hours} hours {minutes}{' '}
              minutes {seconds} seconds
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

| Property        | Description                                                                                                                                             | Type                                    | Default  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------- |
| remainingTime   | The remaining countdown duration, as a time interval (in milliseconds), mutually exclusive with `endTimestamp`                                          | number                                  | 0        |
| endTimestamp    | The end timestamp of the countdown, as a specific point in time, mutually exclusive with `remainingTime`, has higher priority than `remainingTime`      | number                                  | -        |
| serverTimestamp | The server timestamp, as a specific point in time, can be used in conjunction with `endTimestamp`                                                       | number                                  | -        |
| format          | Format for displaying the countdown, see dayjs for reference                                                                                            | string                                  | HH:mm:ss |
| unitStyle       | Style for the time units                                                                                                                                | CSSProperties                           | -        |
| valueStyle      | Style for the countdown digits, customizes the style of the first and second digits                                                                     | CSSProperties[]                         | -        |
| timeSliceStyle  | Style for each time slice, customizes the style of each time block, can replace `valueStyle` if the styles for the first and second digits are the same | CSSProperties                           | -        |
| onFinish        | Triggered when the countdown completes                                                                                                                  | () => void                              | -        |
| onChange        | Triggered when the countdown time changes                                                                                                               | (data: { value: CurrentTime }) => void; | -        |
| renderContent   | Customizes the rendered content                                                                                                                         | (data: CurrentTime) => React.ReactNode; | -        |

#### CurrentTime

| Property      | Description                           | Type   | Default |
| ------------- | ------------------------------------- | ------ | ------- |
| total         | Total remaining time, in milliseconds | number | -       |
| years         | Remaining years                       | string | -       |
| months        | Remaining months                      | string | -       |
| days          | Remaining days                        | string | -       |
| hours         | Remaining hours                       | string | -       |
| minutes       | Remaining minutes                     | string | -       |
| seconds       | Remaining seconds                     | string | -       |
| hoursWithDays | Remaining hours after whole days      | string | -       |

## Style Variables

| Property            | Description           | Default                  | Global Variable                   |
| ------------------- | --------------------- | ------------------------ | --------------------------------- |
| --font-size         | Font size for text    | --bui-text-size-1        | --bui-countdown-font-size         |
| --color             | Text color            | --bui-color-fg-default   | --bui-countdown-color             |
| --font-weight       | Font weight           | --bui-font-weight-normal | --bui-countdown-font-weight       |
| --slice-unit-margin | Margin between slices | 0 2px                    | --bui-countdown-slice-unit-margin |
