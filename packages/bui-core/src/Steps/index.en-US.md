---
group: layout
name: Steps
---

# Steps

Step flow navigation bar.

## Code demonstration

### Basic usage

The default direction is vertical. If no current is specified, it defaults to 0, which is the first step

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
          <Step key={1} title="第一步" />
          <Step key={2} title="第二步" />
          <Step key={3} title="第三步" />
        </Steps>
      </div>
    </Stack>
  );
};
```

### Horizontal display

Adopt`direction` change the direction of the step bar

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps direction="horizontal">
        <Step key={1} title="第一步" />
        <Step key={2} title="第二步" />
        <Step key={3} title="第三步" />
      </Steps>
    </Stack>
  );
};
```

### Change the subtitle arrangement position

If there is a subtitle, it can be done through`labelPlacement`改change its display position

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step key={1} title="第一步" subtitle="副标题 1" />
        <Step key={2} title="第二步" subtitle="副标题 2" />
        <Step key={3} title="第三步" subtitle="副标题 3" />
      </Steps>
      <Steps labelPlacement="vertical">
        <Step key={1} title="第一步" subtitle="副标题 1" />
        <Step key={2} title="第二步" subtitle="副标题 2" />
        <Step key={3} title="第三步" subtitle="副标题 3" />
      </Steps>
    </Stack>
  );
};
```

### Display description copy

Afferent`description` add a description and explanation.

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="标题 1"
          subtitle="副标题 1"
          description="这是一段描述文案"
        />
        <Step
          key={2}
          title="标题 2"
          subtitle="副标题 2"
          description="这是一段描述文案"
        />
        <Step
          key={3}
          title="标题 3"
          subtitle="副标题 3"
          description="这是一段描述文案"
        />
        <Step
          key={4}
          title="标题 4"
          subtitle="副标题 4"
          description="这是一段描述文案"
        />
      </Steps>
    </Stack>
  );
};
```

### Control step status

The step status can be controlled through status,`wait`waiting,`active`currently activated,`finish`completed,`error`failed completed

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="标题 1"
          subtitle="副标题 1"
          status="error"
          description="这是一段描述文案"
        />
        <Step
          key={2}
          title="标题 2"
          subtitle="副标题 2"
          status="finish"
          description="这是一段描述文案"
        />
        <Step
          key={3}
          title="标题 3"
          subtitle="副标题 3"
          status="active"
          description="这是一段描述文案"
        />
        <Step
          key={4}
          title="标题 4"
          subtitle="副标题 4"
          status="wait"
          description="这是一段描述文案"
        />
      </Steps>
    </Stack>
  );
};
```

### Customize icons

Adopt`icon` customize icons for each state.

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
          title="标题 1"
          subtitle="副标题 1"
          icon={<HeartFilledIcon color="primary" />}
          description="这是一段描述文案"
        />
        <Step
          key={2}
          title="标题 2"
          subtitle="副标题 2"
          status="active"
          icon={<LocationFilledIcon color="primary" />}
          description="这是一段描述文案"
        />
        <Step
          key={3}
          title="标题 3"
          subtitle="副标题 3"
          status="error"
          icon={<ErrorCircleOutlinedIcon color="primary" />}
          description="这是一段描述文案"
        />
        <Step
          key={4}
          title="标题 4"
          subtitle="副标题 4"
          status="wait"
          icon={<AccessTimeCircleFilledIcon color="primary" />}
          description="这是一段描述文案"
        />
      </Steps>
    </Stack>
  );
};
```

#### Disable clicking

Adopt`disabled` the step table cannot be clicked

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
          title="第一步"
          status="error"
          description="这是一段描述文案"
          disabled
        />
        <Step key={2} title="第二步" />
        <Step
          key={3}
          title="第三步"
          subtitle="副标题 3"
          description="这是一段描述文案"
          disabled
        />
      </Steps>
    </Stack>
  );
};
```

### Complex layout

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
          <span style={{ color: '#5F6672' }}>退票电影</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>
            复仇者联盟3（3张）
          </span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>退票金额</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>38.9元</span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>服务费</span>
          <span style={{ color: '#2E333E', paddingLeft: '34px' }}>
            4元（影院、淘票票收取）
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
        title="退款申请 已提交"
        subtitle="2021-03-30 19:00 "
        description={detail()}
      />
      <Step
        key={2}
        title="退款申请 已提交"
        subtitle="2021-03-30 19:08 "
        description="正在处理退款申请，预计1-3天原路返回至你的付款账户。"
      />
      <Step
        key={3}
        title="退款完成"
        subtitle="2021-03-30 19:08 "
        description="退款到账后，将结束本次退款流程。"
      />
    </Steps>
  );
};
```

### Using CSS variables to modify styles

Component styles can be changed through commonly used CSS variables

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
          <Step key={1} title="第一步" />
          <Step key={2} title="第二步" />
          <Step key={3} title="第三步" />
        </Steps>
      </div>
    </Stack>
  );
};
```

## API

### Steps

| attribute      | explain                                                                                                                     | type                                                    | Default value |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------- |
| current        | Specify the current step, counting from 0. In the sub Step element, the status attribute can be used to override the status | number                                                  | 0             |
| direction      | Step bar direction                                                                                                          | `horizontal` \| `vertical`                              | `vertical`    |
| labelPlacement | Specify label placement location                                                                                            | `horizontal` \| `vertical`                              | `horizontal`  |
| onChange       | Triggered when clicking to switch steps                                                                                     | (ev?: SyntheticEvent,data?: { current: number }) =>void | -             |

### Step

| attribute   | explain                          | type                                                    | Default value |
| ----------- | -------------------------------- | ------------------------------------------------------- | ------------- |
| title       | title                            | React.ReactNode                                         | -             |
| subtitle    | Subtitle                         | React.ReactNode                                         | -             |
| description | Detailed description of steps    | React.ReactNode                                         | -             |
| icon        | Step icon                        | React.ReactNode                                         | -             |
| status      | The status of the current step   | `wait` \| `active` \| `finish` \| `error`               | `active`      |
| disabled    | Do you want to prohibit clicking | boolean                                                 | false         |
| onClick     | Step icon                        | (ev?: SyntheticEvent,data?: { current: number }) =>void | -             |

## Style variables

| attribute               | explain                            | Default value                         | global variable |
| ----------------------- | ---------------------------------- | ------------------------------------- | --------------- |
| --title-font-size       | Main title font size               | --bui-title-size-4                    | -               |
| --title-font-weight     | Main title word weight             | --bui-font-weight-medium              | -               |
| --subtitle-font-size    | Subtitle font size                 | --bui-text-size-2                     | -               |
| --description-font-size | Describe the font size of the copy | --bui-text-size-3                     | -               |
| --step-icon-margin      | Step icon margin                   | --bui-spacing-xs --bui-spacing-xs 0 0 | -               |
| --step-line-padding     | Step bar line inner margin         | 20px 0 3px 0                          | -               |
