---
group: Layout
name: Steps
---

# Steps

Step Flow Navigation Bar.

## Basic Usage

The default direction is vertical, and if `current` is not specified, it defaults to 0, which means the first step.

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleChange = (e, data) => {
    console.log(e, data);
  };

  return (
    <Stack>
      <div style={{ width: '120px' }}>
        <Steps onChange={handleChange}>
          <Step key={1} title="Step One" />
          <Step key={2} title="Step Two" />
          <Step key={3} title="Step Three" />
        </Steps>
      </div>
    </Stack>
  );
};
```

## Horizontal Display

Change the direction of the step bar through `direction`.

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps direction="horizontal">
        <Step key={1} title="Step One" />
        <Step key={2} title="Step Two" />
        <Step key={3} title="Step Three" />
      </Steps>
    </Stack>
  );
};
```

## Change Subtitle Placement

If there is a subtitle, change its display position through `labelPlacement`.

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step key={1} title="Step One" subtitle="Subtitle 1" />
        <Step key={2} title="Step Two" subtitle="Subtitle 2" />
        <Step key={3} title="Step Three" subtitle="Subtitle 3" />
      </Steps>
      <Steps labelPlacement="vertical">
        <Step key={1} title="Step One" subtitle="Subtitle 1" />
        <Step key={2} title="Step Two" subtitle="Subtitle 2" />
        <Step key={3} title="Step Three" subtitle="Subtitle 3" />
      </Steps>
    </Stack>
  );
};
```

## Display Description Text

Add description by passing in `description`.

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="Title 1"
          subtitle="Subtitle 1"
          description="This is a piece of description text"
        />
        <Step
          key={2}
          title="Title 2"
          subtitle="Subtitle 2"
          description="This is a piece of description text"
        />
        <Step
          key={3}
          title="Title 3"
          subtitle="Subtitle 3"
          description="This is a piece of description text"
        />
        <Step
          key={4}
          title="Title 4"
          subtitle="Subtitle 4"
          description="This is a piece of description text"
        />
      </Steps>
    </Stack>
  );
};
```

## Control Step Status

Control step status with `status`. `wait` is pending, `active` is currently active, `finish` is completed, and `error` is completed with a failure.

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="Title 1"
          subtitle="Subtitle 1"
          status="error"
          description="This is a piece of description text"
        />
        <Step
          key={2}
          title="Title 2"
          subtitle="Subtitle 2"
          status="finish"
          description="This is a piece of description text"
        />
        <Step
          key={3}
          title="Title 3"
          subtitle="Subtitle 3"
          status="active"
          description="This is a piece of description text"
        />
        <Step
          key={4}
          title="Title 4"
          subtitle="Subtitle 4"
          status="wait"
          description="This is a piece of description text"
        />
      </Steps>
    </Stack>
  );
};
```

## Custom Icons

Customize icons for each status using `icon`.

```tsx
import React from 'react';
import { Stack, Step, Steps } from '@bifrostui/react';
import {
  AccessTimeCircleFilledIcon,
  ErrorCircleOutlinedIcon,
  HeartFilledIcon,
  LocationFilledIcon,
} from '@bifrostui/icons';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="Title 1"
          subtitle="Subtitle 1"
          icon={<HeartFilledIcon color="primary" />}
          description="This is a piece of description text"
        />
        <Step
          key={2}
          title="Title 2"
          subtitle="Subtitle 2"
          status="active"
          icon={<LocationFilledIcon color="primary" />}
          description="This is a piece of description text"
        />
        <Step
          key={3}
          title="Title 3"
          subtitle="Subtitle 3"
          status="error"
          icon={<ErrorCircleOutlinedIcon color="primary" />}
          description="This is a piece of description text"
        />
        <Step
          key={4}
          title="Title 4"
          subtitle="Subtitle 4"
          status="wait"
          icon={<AccessTimeCircleFilledIcon color="primary" />}
          description="This is a piece of description text"
        />
      </Steps>
    </Stack>
  );
};
```

## Disable Click

Make step bar non-clickable via `disabled`.

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleChange = (e, data) => {
    console.log(e, data);
  };

  return (
    <Stack>
      <Steps direction="horizontal" current={1} onChange={handleChange}>
        <Step
          key={1}
          title="Step One"
          status="error"
          description="This is a piece of description text"
          disabled
        />
        <Step key={2} title="Step Two" />
        <Step
          key={3}
          title="Step Three"
          subtitle="Subtitle 3"
          description="This is a piece of description text"
          disabled
        />
      </Steps>
    </Stack>
  );
};
```

## Complex Layout

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

const detail = () => {
  return (
    <Stack style={{ '--align-items': 'flex-start' }}>
      <div
        style={{
          backgroundColor: 'var(--bui-color-bg-view)',
          width: '220px',
          height: '80px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '5px 10px',
          margin: '5px 0 20px',
        }}
      >
        <div>
          <span style={{ color: '#5F6672' }}>Refund Movie</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>
            Avengers 3 (3 tickets)
          </span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>Refund Amount</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>
            38.9 USD
          </span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>Service Fee</span>
          <span style={{ color: '#2E333E', paddingLeft: '34px' }}>
            4 USD (charged by cinema and Taopiao)
          </span>
        </div>
      </div>
    </Stack>
  );
};

export default () => {
  return (
    <Steps labelPlacement="vertical">
      <Step
        key={1}
        title="Refund Application Submitted"
        subtitle="2021-03-30 19:00"
        description={detail()}
      />
      <Step
        key={2}
        title="Refund Application Submitted"
        subtitle="2021-03-30 19:08"
        description="Processing refund application, estimated to be returned to your payment account within 1-3 days."
      />
      <Step
        key={3}
        title="Refund Complete"
        subtitle="2021-03-30 19:08"
        description="The refund process will end once the refund is credited."
      />
    </Steps>
  );
};
```

## Modify Styles Using CSS Variables

Change component styles using common CSS variables.

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '176px' }}>
        <Steps
          style={{
            '--title-font-size': '30px',
            '--step-icon-margin': '12px 4px 0 0',
            '--step-line-padding': '36px 0 0 0',
          }}
        >
          <Step key={1} title="Step One" />
          <Step key={2} title="Step Two" />
          <Step key={3} title="Step Three" />
        </Steps>
      </div>
    </Stack>
  );
};
```

## API

### Steps

| Property       | Description                                                                                  | Type                                                      | Default      |
| -------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------ |
| current        | Specifies the current step, starting from 0, status can be overridden in child Step elements | number                                                    | 0            |
| direction      | Direction of step bar                                                                        | `horizontal` \| `vertical`                                | `vertical`   |
| labelPlacement | Specifies label placement                                                                    | `horizontal` \| `vertical`                                | `horizontal` |
| onChange       | Fires when switching steps on click                                                          | (ev?: SyntheticEvent, data?: { current: number }) => void | -            |

### Step

| Property    | Description         | Type                                                      | Default  |
| ----------- | ------------------- | --------------------------------------------------------- | -------- |
| title       | Title               | React.ReactNode                                           | -        |
| subtitle    | Subtitle            | React.ReactNode                                           | -        |
| description | Step description    | React.ReactNode                                           | -        |
| icon        | Step icon           | React.ReactNode                                           | -        |
| status      | Current step status | `wait` \| `active` \| `finish` \| `error`                 | `active` |
| disabled    | Disable click       | boolean                                                   | false    |
| onClick     | Step icon click     | (ev?: SyntheticEvent, data?: { current: number }) => void | -        |

## Style Variables

| Global Variable                         | Description                  | Default                                           |
| --------------------------------------- | ---------------------------- | ------------------------------------------------- |
| --bui-steps-font-size                   | Steps font size              | `var(--bui-title-size-3)`                         |
| --bui-step-subtitle-font-size           | Subtitle font size           | `var(--bui-text-size-2)`                          |
| --bui-step-line-padding                 | Line padding                 | `20px 0 3px 0`                                    |
| --bui-step-line-width                   | Line width                   | `1px`                                             |
| --bui-step-line-height                  | Line height                  | `100%`                                            |
| --bui-step-label-horizontal-line-height | Horizontal label line height | `1.8`                                             |
| --bui-step-icon-width                   | Icon width                   | `28px`                                            |
| --bui-step-icon-active-width            | Active icon width            | `12px`                                            |
| --bui-step-icon-active-height           | Active icon height           | `12px`                                            |
| --bui-step-icon-font-size               | Icon font size               | `var(--bui-title-size-4)`                         |
| --bui-step-icon-margin                  | Icon margin                  | `var(--bui-spacing-xs) var(--bui-spacing-xs) 0 0` |
| --bui-step-content-padding              | Content padding              | `3px 0`                                           |
| --bui-step-horizontal-line-padding      | Horizontal line padding      | `28px 0 6px`                                      |

```

```
