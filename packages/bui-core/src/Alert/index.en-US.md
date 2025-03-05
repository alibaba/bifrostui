---
group: Feedback
name: Alert Warning Prompt
---

# Alert Warning Prompt

The Alert component is commonly used to display brief information that requires attention. It is often used to show warning prompts or success notifications to users.

## Code Demos

### Basic Usage

The Alert component can set its content using the `children` prop.

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack alignItems="stretch" style={{ maxWidth: 350, margin: '0 auto' }}>
      <Alert>Ticket reminder: Sales start at 14:00 on August 2, 2020</Alert>
    </Stack>
  );
};
```

### Alert Icons

The `icon` prop allows you to add an icon to the beginning of the Alert component, overriding the default icon.
You can also remove the default icon by setting the `icon` prop to `false`.

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
      <Alert>Ticket reminder: Sales start at 14:00 on August 2, 2020</Alert>
      <Alert icon={<HelpCircleOutlinedIcon />}>
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      <Alert icon={false}>
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
    </Stack>
  );
};
```

### Scrolling Alerts

The `marquee` prop allows the content of the Alert component to scroll.

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
        【Start】The first commercial film on overseas peacekeeping missions
        arrives with intense scenes focusing on the rarely seen moments of
        Chinese peacekeeping police!【End】
      </Alert>
      <Alert marquee icon={<HelpCircleOutlinedIcon />}>
        【Start】The first commercial film on overseas peacekeeping missions
        arrives with intense scenes focusing on the rarely seen moments of
        Chinese peacekeeping police!【End】
      </Alert>
    </Stack>
  );
};
```

### Alert Themes

The Alert component provides five color themes: `warning`, `success`, `error`, `info`, and `primary`. You can set the theme color using the `color` prop.
The default value for the `color` prop is `primary`.

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
      <Alert>Ticket reminder: Sales start at 14:00 on August 2, 2020</Alert>
      <Alert color="warning">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      <Alert color="success">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      <Alert color="danger">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      <Alert color="info">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
    </Stack>
  );
};
```

### Alert Variants

The Alert component supports two modes: filled (`standard`) and outlined (`outlined`). You can set the mode using the `variant` prop.
The default value for the `variant` prop is `standard`.

##### Standard

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
      <Alert variant="standard">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      <Alert variant="standard" color="warning">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>

      <Alert variant="standard" color="danger">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      <Alert variant="standard" color="info">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      <Alert variant="standard" color="success">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
    </Stack>
  );
};
```

##### Outlined

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
      <Alert variant="outlined">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      <Alert variant="outlined" color="warning">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      <Alert variant="outlined" color="danger">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      <Alert variant="outlined" color="info">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      <Alert variant="outlined" color="success">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
    </Stack>
  );
};
```

### Action Area

The Alert component provides the `action` prop for closing or dismissing the Alert.
The Alert component includes an onClose callback. If the business configuration includes an onClose handler and no action prop is set, a close icon will be displayed at the end of the Alert component.
The `action` prop can override this close icon to customize the action area.

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
      <Alert color="warning">
        Ticket reminder: Sales start at 14:00 on August 2, 2020
      </Alert>
      {!closeOne && (
        <Alert
          color="success"
          onClose={() => {
            setCloseOne(true);
          }}
        >
          Ticket reminder: Sales start at 14:00 on August 2, 2020
        </Alert>
      )}
      {!closeTwo && (
        <Alert
          action={<div>close</div>}
          onClose={() => {
            setCloseTwo(true);
          }}
        >
          Ticket reminder: Sales start at 14:00 on August 2, 2020
        </Alert>
      )}
    </Stack>
  );
};
```

### API

#### AlertProps

| Property | Description                            | Type                                                      | Default    |
| -------- | -------------------------------------- | --------------------------------------------------------- | ---------- |
| color    | Alert theme color                      | `primary` ｜ `info` ｜ `success` ｜ `warning` ｜ `danger` | `primary`  |
| icon     | Custom icon; hidden if `icon` is false | React.ReactNode ｜ boolean                                | true       |
| action   | Action area for alert                  | React.ReactNode                                           | -          |
| variant  | Alert variant                          | `standard`｜`outlined`                                    | `standard` |
| onClose  | Callback for closing                   | (e?: SyntheticEvent, data?: any) => void                  | -          |

### Style Variables

| Property                 | Description            | Default Value      | Global Variable                    |
| ------------------------ | ---------------------- | ------------------ | ---------------------------------- |
| --content-marquee-speed  | Content scroll speed   | 10s                | --bui-alert-content-marquee-speed  |
| --padding                | Padding                | 8px                | --bui-alert-padding                |
| --line-height            | Line height            | 16px               | --bui-alert-line-height            |
| --default-icon-font-size | Default icon font size | 15px               | --bui-alert-default-icon-font-size |
| --action-margin-left     | Left margin for action | 16px               | --bui-alert-action-margin-left     |
| --icon-margin-right      | Right margin for icon  | --bui-spacing-xs   | --bui-alert-icon-margin-right      |
| --icon-font-size         | Icon font size         | --bui-title-size-4 | --bui-alert-icon-font-size         |
