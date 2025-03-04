---
group: Feedback
name: Progress Bar
---

# Progress Bar

Display the current progress of an operation.

## Code Demos

### Basic Usage

Set the operation progress using `percent`.

```tsx
import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={40} />;
};
```

### Specifying Line Color

Set the line color using `strokeColor`; its default value is `--bui-color-primary`.

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

Set the width of the progress bar using `strokeWidth`.

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

### Custom Gradient for Progress Bar

Encapsulation of `linear-gradient`. It's recommended to use only two colors.

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

### Customizing the Color of Unfilled Segments

Specify the color of unfilled segments using `trailColor`.

```tsx
import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={60} trailColor="var(--bui-color-red-light)" />;
};
```

## API

| Property    | Description                                               | Type                                                                                                               | Default |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| percent     | Percentage                                                | number                                                                                                             | -       |
| strokeColor | Color of the progress bar, gradient when object is passed | string \| { from: string; to: string; direction?: string } \| { [percentage: string]: string; direction?: string } | -       |
| trailColor  | Color of the unfilled part of the progress bar            | string                                                                                                             | -       |
| strokeWidth | Width of the progress bar line                            | number \| string                                                                                                   | -       |

## Style Variables

| Property        | Description                       | Default Value            | Global Variable              |
| --------------- | --------------------------------- | ------------------------ | ---------------------------- |
| --fill-color    | Color of the progress bar         | --bui-color-primary      | --bui-progress-fill-color    |
| --trail-color   | Color of the unfilled part        | rgba(156, 156, 165, 0.2) | --bui-progress-trail-color   |
| --stroke-width  | Width of the progress bar         | 8px                      | --bui-progress-stroke-width  |
| --width         | Width of the progress bar         | 100%                     | --bui-progress-width         |
| --border-radius | Border radius of the progress bar | 100px                    | --bui-progress-border-radius |
