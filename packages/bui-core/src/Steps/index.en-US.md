---
group: Layout
name: Steps
---

# Steps

A navigation bar for step-by-step processes.

## Code Demos

### Basic Usage

The default direction is vertical. If `current` is not specified, it defaults to 0, meaning the first step.

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
          <Step key={1} title="Step 1" />
          <Step key={2} title="Step 2" />
          <Step key={3} title="Step 3" />
        </Steps>
      </div>
    </Stack>
  );
};
```

### Horizontal Display

Change the direction of the steps using the `direction` prop.

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps direction="horizontal">
        <Step key={1} title="Step 1" />
        <Step key={2} title="Step 2" />
        <Step key={3} title="Step 3" />
      </Steps>
    </Stack>
  );
};
```

### Changing Subtitle Placement

If there's a subtitle, you can change its placement using the `labelPlacement` prop.

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step key={1} title="Step 1" subtitle="Subtitle 1" />
        <Step key={2} title="Step 2" subtitle="Subtitle 2" />
        <Step key={3} title="Step 3" subtitle="Subtitle 3" />
      </Steps>
      <Steps labelPlacement="vertical">
        <Step key={1} title="Step 1" subtitle="Subtitle 1" />
        <Step key={2} title="Step 2" subtitle="Subtitle 2" />
        <Step key={3} title="Step 3" subtitle="Subtitle 3" />
      </Steps>
    </Stack>
  );
};
```

### Showing Description Text

Add descriptions by passing in the `description` prop.

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
          description="This is a description text"
        />
        <Step
          key={2}
          title="Title 2"
          subtitle="Subtitle 2"
          description="This is a description text"
        />
        <Step
          key={3}
          title="Title 3"
          subtitle="Subtitle 3"
          description="This is a description text"
        />
        <Step
          key={4}
          title="Title 4"
          subtitle="Subtitle 4"
          description="This is a description text"
        />
      </Steps>
    </Stack>
  );
};
```

### Controlling Step Status

Control the status of each step using the `status` prop: `wait` for pending, `active` for current, `finish` for completed, and `error` for failed.

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
          description="This is a description text"
        />
        <Step
          key={2}
          title="Title 2"
          subtitle="Subtitle 2"
          status="finish"
          description="This is a description text"
        />
        <Step
          key={3}
          title="Title 3"
          subtitle="Subtitle 3"
          status="active"
          description="This is a description text"
        />
        <Step
          key={4}
          title="Title 4"
          subtitle="Subtitle 4"
          status="wait"
          description="This is a description text"
        />
      </Steps>
    </Stack>
  );
};
```

### Customizing Icons

Customize icons for different statuses using the `icon` prop.

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
          description="This is a description text"
        />
        <Step
          key={2}
          title="Title 2"
          subtitle="Subtitle 2"
          status="active"
          icon={<LocationFilledIcon color="primary" />}
          description="This is a description text"
        />
        <Step
          key={3}
          title="Title 3"
          subtitle="Subtitle 3"
          status="error"
          icon={<ErrorCircleOutlinedIcon color="primary" />}
          description="This is a description text"
        />
        <Step
          key={4}
          title="Title 4"
          subtitle="Subtitle 4"
          status="wait"
          icon={<AccessTimeCircleFilledIcon color="primary" />}
          description="This is a description text"
        />
      </Steps>
    </Stack>
  );
};
```

#### Disabling Clicks

Disable clicking on steps using the `disabled` prop.

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
          title="Step 1"
          status="error"
          description="This is a description text"
          disabled
        />
        <Step key={2} title="Step 2" />
        <Step
          key={3}
          title="Step 3"
          subtitle="Subtitle 3"
          description="This is a description text"
          disabled
        />
      </Steps>
    </Stack>
  );
};
```

### Complex Layout

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
          <span style={{ color: '#5F6672' }}>Refunded Movie</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>
            Avengers: Infinity War (3 tickets)
          </span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>Refund Amount</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>
            38.9 RMB
          </span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>Service Fee</span>
          <span style={{ color: '#2E333E', paddingLeft: '34px' }}>
            4 RMB (charged by cinema and Taobao Movies)
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
        description="Processing refund application, expected to be returned to your payment account within 1-3 days."
      />
      <Step
        key={3}
        title="Refund Completed"
        subtitle="2021-03-30 19:08"
        description="After the refund arrives, this refund process will end."
      />
    </Steps>
  );
};
```

### Modifying Styles with CSS Variables

Modify component styles using common CSS variables.

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
          <Step key={1} title="Step 1" />
          <Step key={2} title="Step 2" />
          <Step key={3} title="Step 3" />
        </Steps>
      </div>
    </Stack>
  );
};
```

## API

### Steps

| Property       | Description                                                                                                                | Type                                                    | Default Value |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------- |
| current        | Specifies the current step, starting from 0. The status can be overridden by the `status` property in child Step elements. | number                                                  | 0             |
| direction      | Direction of the steps                                                                                                     | `horizontal` \| `vertical`                              | `vertical`    |
| labelPlacement | Placement of labels                                                                                                        | `horizontal` \| `vertical`                              | `horizontal`  |
| onChange       | Triggered when switching steps                                                                                             | (ev?: SyntheticEvent,data?: { current: number }) =>void | -             |

### Step

| Property    | Description          | Type                                                    | Default Value |
| ----------- | -------------------- | ------------------------------------------------------- | ------------- |
| title       | Title                | React.ReactNode                                         | -             |
| subtitle    | Subtitle             | React.ReactNode                                         | -             |
| description | Detailed description | React.ReactNode                                         | -             |
| icon        | Icon                 | React.ReactNode                                         | -             |
| status      | Current step status  | `wait` \| `active` \| `finish` \| `error`               | `active`      |
| disabled    | Disable clicking     | boolean                                                 | false         |
| onClick     | Click event handler  | (ev?: SyntheticEvent,data?: { current: number }) =>void | -             |

## Style Variables

| Property                            | Description                       | Default Value                                   | Global Variable                         |
| ----------------------------------- | --------------------------------- | ----------------------------------------------- | --------------------------------------- |
| --font-size                         | Default font size                 | --bui-title-size-3                              | --bui-steps-font-size                   |
| --subtitle-font-size                | Subtitle font size                | --bui-text-size-2                               | --bui-step-subtitle-font-size           |
| --step-icon-margin                  | Step icon margin                  | --bui-spacing-xs --bui-spacing-xs 0 0           | --bui-step-icon-margin                  |
| --step-line-padding                 | Step line padding                 | 20px 0 3px 0                                    | --bui-step-line-padding                 |
| --step-line-width                   | Step line width                   | 1px                                             | --bui-step-line-width                   |
| --step-line-height                  | Step line height                  | 100%                                            | --bui-step-line-height                  |
| --step-label-horizontal-line-height | Step label horizontal line height | 1.8                                             | --bui-step-label-horizontal-line-height |
| --step-icon-width                   | Step icon width                   | 28px                                            | --bui-step-icon-width                   |
| --step-icon-font-size               | Step icon font size               | var(--bui-title-size-4)                         | --bui-step-icon-font-size               |
| --step-icon-active-width            | Active step icon width            | 12px                                            | --bui-step-icon-active-width            |
| --step-icon-active-height           | Active step icon height           | 12px                                            | --bui-step-icon-active-height           |
| --step-icon-margin                  | Step icon margin                  | var(--bui-spacing-xs) var(--bui-spacing-xs) 0 0 | --bui-step-icon-margin                  |
| --step-content-padding              | Step content padding              | 3px 0                                           | --bui-step-content-padding              |
| --step-horizontal-line-padding      | Step horizontal line padding      | 28px 0 6px                                      | --bui-step-horizontal-line-padding      |
