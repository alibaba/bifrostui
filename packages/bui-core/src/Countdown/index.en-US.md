---
group: Data Display
name: Countdown
---

# Countdown

Used for displaying countdown values in real-time.

## Basic Usage

Use `remainingTime` to control the countdown duration, or choose `endTimestamp` as an alternative.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown remainingTime={24 * 60 * 60 * 1000} format="HH:mm:ss" />
    </Stack>
  );
};
```

### End Timestamp

Use `endTimestamp` to specify the countdown end time, or choose `remainingTime` instead; `endTimestamp` has a higher priority than `remainingTime`.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown endTimestamp={4102415999000} format="YY:MM:DD:HH:mm:ss" />
    </Stack>
  );
};
```

### Calculating Server Timestamp

Set the server timestamp with `serverTimestamp`, which can be used with `endTimestamp` to prevent countdown errors due to local time adjustments.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import * as React from 'react';

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

### Formatting Countdown

The countdown format can be set with `format`, with a default value of `HH:mm:ss`.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import * as React from 'react';

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

### Countdown Finish Event

The `onFinish` event is triggered when the countdown ends.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import * as React from 'react';

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

The `onChange` event is triggered during countdown changes.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  const change = (data) => {
    console.log('Countdown in progress, current data', data);
  };

  return (
    <Stack>
      <Countdown remainingTime={10 * 1000} onChange={change} />
    </Stack>
  );
};
```

### Custom Countdown Content

Customize the countdown component content with `renderContent`.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        renderContent={({ hours, minutes, seconds }) => {
          return (
            <span>
              There are {hours} hours {minutes} minutes {seconds} seconds left
              until the countdown ends.
            </span>
          );
        }}
      />
    </Stack>
  );
};
```

## Accessibility

The countdown component includes comprehensive accessibility support, ensuring all users can access countdown information.

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack spacing={16}>
      {/* Basic accessibility support - automatically generates aria-label */}
      <Countdown remainingTime={60 * 1000} />

      {/* Custom accessibility labels */}
      <Countdown
        remainingTime={120 * 1000}
        aria-label="Countdown to the end of the promotion"
      />

      {/* Linking titles with ID */}
      <div>
        <h3 id="flash-sale-title">Flash Sale</h3>
        <Countdown
          remainingTime={180 * 1000}
          aria-labelledby="flash-sale-title"
        />
      </div>

      {/* Adding a detailed description */}
      <div>
        <Countdown
          remainingTime={240 * 1000}
          aria-describedby="countdown-description"
        />
        <p id="countdown-description">
          The discounted price will revert to the original price after the
          countdown ends
        </p>
      </div>
    </Stack>
  );
};
```

## API

### Countdown

| Property         | Description                                                                                            | Type                                    | Default  |
| ---------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------- | -------- |
| remainingTime    | The remaining countdown time in milliseconds, mutually exclusive with endTimestamp                     | number                                  | 0        |
| endTimestamp     | The countdown end timestamp, mutually exclusive with remainingTime; higher priority than remainingTime | number                                  | -        |
| serverTimestamp  | The server timestamp, used in conjunction with endTimestamp                                            | number                                  | -        |
| format           | Formatting the countdown display, refer to dayjs                                                       | string                                  | HH:mm:ss |
| onFinish         | Triggered when the countdown completes                                                                 | () => void                              | -        |
| onChange         | Triggered when the countdown time changes                                                              | (data: { value: CurrentTime }) => void; | -        |
| renderContent    | Customize the rendered content                                                                         | (data: CurrentTime) => React.ReactNode; | -        |
| aria-label       | Accessibility label for screen reader description                                                      | string                                  | -        |
| aria-labelledby  | References other element IDs as a label                                                                | string                                  | -        |
| aria-describedby | References other element IDs as a description                                                          | string                                  | -        |
| role             | Semantic role of the component                                                                         | string                                  | timer    |

#### CurrentTime

| Property      | Description                          | Type   | Default |
| ------------- | ------------------------------------ | ------ | ------- |
| total         | Total remaining time in milliseconds | number | -       |
| years         | Remaining years                      | string | -       |
| months        | Remaining months                     | string | -       |
| days          | Remaining days                       | string | -       |
| hours         | Remaining hours                      | string | -       |
| minutes       | Remaining minutes                    | string | -       |
| seconds       | Remaining seconds                    | string | -       |
| hoursWithDays | Hours remaining after whole days     | string | -       |

## Style Variables

| Variable Name                     | Description | Default Value                   |
| --------------------------------- | ----------- | ------------------------------- |
| --bui-countdown-font-size         | Font size   | `var(--bui-text-size-1)`        |
| --bui-countdown-color             | Font color  | `var(--bui-color-fg-default)`   |
| --bui-countdown-font-weight       | Font weight | `var(--bui-font-weight-normal)` |
| --bui-countdown-slice-unit-margin | Unit margin | `0 2px`                         |

```

```
