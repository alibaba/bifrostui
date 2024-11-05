---
group: feedback
name: Alert
---

# Alert

The Alert component is commonly used to display brief information that needs attention, and to show warning or success prompts to users.

## Code demonstration

### Basic Usage

The Alert component can be used by`children`set the content of the alert component.

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack alignItems="stretch" style={{ maxWidth: 350, margin: '0 auto' }}>
      <Alert>开票提醒2020.0802下午14:00开售</Alert>
    </Stack>
  );
};
```

### Warning box icon

`icon`allow you to add icons to the header of the alert component, which will override the default alert icon.
You can also set it up through`icon`the attribute is`false`to remove the default alert icon.

```tsx
import { Alert, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert>开票提醒2020.0802下午14:00开售</Alert>
      <Alert icon={<HelpCircleOutlinedIcon />}>
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert icon={false}>开票提醒2020.0802下午14:00开售</Alert>
    </Stack>
  );
};
```

### Warning box scrolling

```tsx
import { Alert, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert icon={false} marquee>
        【开始】首部海外维和题材商业大片高燃来袭，聚焦中国维和警察鲜为人知的生死时刻！【结束】
      </Alert>
      <Alert marquee icon={<HelpCircleOutlinedIcon />}>
        【开始】首部海外维和题材商业大片高燃来袭，聚焦中国维和警察鲜为人知的生死时刻！【结束】
      </Alert>
    </Stack>
  );
};
```

### Warning box theme

The Alert component provides 5 color themes:`warning`、`success`、`error`、`info`、`primary`，you can do it through`color`attribute setting component theme color.
Default value of color attribute:`primary`。

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert>开票提醒2020.0802下午14:00开售</Alert>
      <Alert color="warning">开票提醒2020.0802下午14:00开售</Alert>
      <Alert color="success">开票提醒2020.0802下午14:00开售</Alert>
      <Alert color="danger">开票提醒2020.0802下午14:00开售</Alert>
      <Alert color="info">开票提醒2020.0802下午14:00开售</Alert>
    </Stack>
  );
};
```

### Warning box mode

The Alert component supports two modes: fill in`standard`、outline`outlined`。
You can do it through`variant`attribute setting component mode.
`variant`default attribute values:`standard`。

##### standard

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert variant="standard">开票提醒2020.0802下午14:00开售</Alert>
      <Alert variant="standard" color="warning">
        开票提醒2020.0802下午14:00开售
      </Alert>

      <Alert variant="standard" color="danger">
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert variant="standard" color="info">
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert variant="standard" color="success">
        开票提醒2020.0802下午14:00开售
      </Alert>
    </Stack>
  );
};
```

##### outlined

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert variant="outlined">开票提醒2020.0802下午14:00开售</Alert>
      <Alert variant="outlined" color="warning">
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert variant="outlined" color="danger">
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert variant="outlined" color="info">
        开票提醒2020.0802下午14:00开售
      </Alert>
      <Alert variant="outlined" color="success">
        开票提醒2020.0802下午14:00开售
      </Alert>
    </Stack>
  );
};
```

### Operation area

The Alert component provides`action`attribute, used to close or revoke alerts.
Alert provides an onClose callback. If the business has configured nClose and the action has not set its attribute, a close icon will be displayed at the end of the Alert component.
`action`attributes can be used to override this close icon and customize the action area.

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [closeOne, setCloseOne] = useState(false);
  const [closeTwo, setCloseTwo] = useState(false);
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert color="warning">开票提醒2020.0802下午14:00开售</Alert>
      {!closeOne && (
        <Alert
          color="success"
          onClose={() => {
            setCloseOne(true);
          }}
        >
          开票提醒2020.0802下午14:00开售
        </Alert>
      )}
      {!closeTwo && (
        <Alert
          action={<div>close</div>}
          onClose={() => {
            setCloseTwo(true);
          }}
        >
          开票提醒2020.0802下午14:00开售
        </Alert>
      )}
    </Stack>
  );
};
```

### API

#### AlertProps

| attribute | explain                                   | type                                                      | Default value |
| --------- | ----------------------------------------- | --------------------------------------------------------- | ------------- |
| color     | Warning box theme color                   | `primary` ｜ `info` ｜ `success` ｜ `warning` ｜ `danger` | `primary`     |
| icon      | Custom icon, hide icon when icon is false | React.ReactNode ｜ boolean                                | true          |
| action    | Warning prompt operation area             | React.ReactNode                                           | -             |
| variant   | Warning mode                              | `standard`｜`outlined`                                    | `standard`    |
| onClose   | Close callback                            | (e?: SyntheticEvent, data?: any) => void;                 | -             |

### Style variables

| attribute                | explain                    | Default value      | global variable                    |
| ------------------------ | -------------------------- | ------------------ | ---------------------------------- |
| --content-marquee-speed  | Content scroll speed       | 10s                | --bui-alert-content-marquee-speed  |
| --padding                | padding                    | 8px                | --bui-alert-padding                |
| --line-height            | row height                 | 16px               | --bui-alert-line-height            |
| --default-icon-font-size | Default icon font size     | 15px               | --bui-alert-default-icon-font-size |
| --action-margin-left     | Operating area left margin | 16px               | --bui-alert-action-margin-left     |
| --icon-margin-right      | Icon right margin          | --bui-spacing-xs   | --bui-alert-icon-margin-right      |
| --icon-font-size         | Icon font size             | --bui-title-size-4 | --bui-alert-icon-font-size         |
