---
group: feedback
name: Progress
---

# Progress

Display the current progress of the operation.

## Code demonstration

### Basic usage

Adopt`percent` set the operation progress.

```tsx
import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={40} />;
};
```

### Specify line color

Adopt`strokeColor` set the line color, with a default value of`--bui-color-primary`。

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

### Progress bar width

Can be done through`strokeWidth` set the width of the progress bar.

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

### Custom progress bar gradient color

`linear-gradient` encapsulation. recommend only transmitting two colors.

```tsx
import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing="10px">
      <Progress
        percent={60}
        strokeColor={{
          from: 'var(--bui-color-red)',
          to: 'var(--bui-color-red-light)',
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

### Customize the color of unfinished segments

Adopt`trailColor` color unfinished segments.

```tsx
import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={60} trailColor="var(--bui-color-red-light)" />;
};
```

## API

| attribute   | explain                                                             | type                                                                                                               | Default value |
| ----------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------- |
| percent     | percentage                                                          | number                                                                                                             | -             |
| strokeColor | The color of the progress bar is gradient when passing in an object | string \| { from: string; to: string; direction?: string } \| { [percentage: string]: string; direction?: string } | -             |
| trailColor  | Color of unfilled progress bar                                      | string                                                                                                             | -             |
| strokeWidth | Width of progress bar                                               | number \| string                                                                                                   | -             |

## Style variables

| attribute      | explain                        | Default value            |
| -------------- | ------------------------------ | ------------------------ |
| --fill-color   | Color of progress bar          | --bui-color-primary      |
| --trail-color  | Color of unfilled progress bar | rgba(156, 156, 165, 0.2) |
| --stroke-width | Progress bar width             | 8px                      |