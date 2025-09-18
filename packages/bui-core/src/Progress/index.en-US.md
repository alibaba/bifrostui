---
group: Feedback
name: Progress Bar
---

# Progress Bar

Displays the current progress of an operation.

## Basic Usage

Set the operation progress using `percent`.

```tsx
import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={40} />;
};
```

### Specify Stroke Color

Set the stroke color with `strokeColor`, which defaults to `--bui-color-primary`.

```tsx
import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" spacing="5px">
      <Progress percent={40} strokeColor="var(--bui-color-primary)" />
      <Progress percent={50} strokeColor="var(--bui-color-info)" />
      <Progress percent={30} strokeColor="var(--bui-color-success)" />
      <Progress percent={80} strokeColor="var(--bui-color-warning)" />
      <Progress percent={90} strokeColor="var(--bui-color-vip)" />
    </Stack>
  );
};
```

### Progress Bar Width

You can set the progress bar width using `strokeWidth`.

```tsx
import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing="10px">
      <Progress
        percent={60}
        strokeColor="var(--bui-color-warning)"
        strokeWidth={10}
      />
      <Progress
        percent={60}
        strokeColor="var(--bui-color-warning)"
        strokeWidth={15}
      />
    </Stack>
  );
};
```

### Custom Gradient Color for Progress Bar

Encapsulation of `linear-gradient`. It is recommended to pass only two colors.

```tsx
import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing="10px">
      <Progress
        percent={60}
        strokeColor={{
          from: 'var(--bui-color-primary)',
          to: 'var(--bui-color-primary-light)',
        }}
      />
      <Progress
        percent={90}
        strokeColor={{
          '0%': 'var(--bui-color-orange)',
          '100%': 'var(--bui-color-orange-light)',
        }}
      />
    </Stack>
  );
};
```

### Custom Trail Color

Specify the color of the unfinished segment using `trailColor`.

```tsx
import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={60} trailColor="var(--bui-color-primary-light)" />;
};
```

## Accessibility

The Progress component comes with full accessibility support and directly uses the following ARIA attributes:

- `aria-valuenow`: The current value of the progress bar (defaults to the percent value)
- `aria-valuemin`: The minimum value of the progress bar (defaults to 0)
- `aria-valuemax`: The maximum value of the progress bar (defaults to 100)
- `aria-valuetext`: The textual description of the progress bar

Usage example:

```tsx
import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" spacing="10px">
      <Progress percent={50} aria-label="File download progress" />
      <Progress
        percent={75}
        aria-label="Data loading progress"
        aria-valuetext="Completed 75%"
      />
      <Progress percent={30} aria-describedby="progress-description" />
      <span id="progress-description" style={{ display: 'none' }}>
        This is a detailed description of the progress bar
      </span>
    </Stack>
  );
};
```

## API

| Property    | Description                                    | Type                                                                                                               | Default |
| ----------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| percent     | Percentage                                     | number                                                                                                             | -       |
| strokeColor | Color of the progress bar, object for gradient | string \| { from: string; to: string; direction?: string } \| { [percentage: string]: string; direction?: string } | -       |
| trailColor  | Color of the unfilled progress bar             | string                                                                                                             | -       |
| strokeWidth | Width of the progress bar line                 | number \| string                                                                                                   | -       |

## Style Variables

| Global Variable              | Description                   | Default Value              |
| ---------------------------- | ----------------------------- | -------------------------- |
| --bui-progress-fill-color    | Progress bar fill color       | `var(--bui-color-primary)` |
| --bui-progress-trail-color   | Progress bar background color | `rgba(156, 156, 165, 0.2)` |
| --bui-progress-stroke-width  | Progress bar height           | `8px`                      |
| --bui-progress-width         | Progress bar width            | `100%`                     |
| --bui-progress-border-radius | Progress bar border radius    | `100px`                    |
