---
group: Feedback
name: Alert Notification
---

# Alert Notification

The Alert component is commonly used to display brief information that requires attention, such as alert notifications or success messages.

## Basic Usage

The content of the Alert component can be set using the `children` property.

```tsx
import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack alignItems="stretch" style={{ maxWidth: 350, margin: '0 auto' }}>
      <Alert>Invoice reminder: Sale starts at 2:00 PM, August 2, 2020</Alert>
    </Stack>
  );
};
```

## Alert Icons

The `icon` attribute allows you to add an icon to the head of the Alert component, overriding the default Alert icon. You can also remove the default icon by setting the `icon` property to `false`.

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
      <Alert>Invoice reminder: Sale starts at 2:00 PM, August 2, 2020</Alert>
      <Alert icon={<HelpCircleOutlinedIcon />}>
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      <Alert icon={false}>
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
    </Stack>
  );
};
```

## Alert Scrolling

The `marquee` attribute allows the content of the Alert component to scroll.

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
        【Start】The first overseas peacekeeping themed commercial blockbuster
        is here, focusing on the unknown life-and-death moments of Chinese
        peacekeeping police! 【End】
      </Alert>
      <Alert marquee icon={<HelpCircleOutlinedIcon />}>
        【Start】The first overseas peacekeeping themed commercial blockbuster
        is here, focusing on the unknown life-and-death moments of Chinese
        peacekeeping police! 【End】
      </Alert>
    </Stack>
  );
};
```

## Alert Themes

The Alert component provides 5 color themes: `warning`, `success`, `error`, `info`, `primary`. You can set the component theme color through the `color` property. The default value for the color property is `primary`.

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
      <Alert>Invoice reminder: Sale starts at 2:00 PM, August 2, 2020</Alert>
      <Alert color="warning">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      <Alert color="success">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      <Alert color="danger">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      <Alert color="info">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
    </Stack>
  );
};
```

## Alert Modes

The Alert component supports two modes: filled `standard`, and outlined `outlined`. You can set the component mode via the `variant` property. The default value for the `variant` property is `standard`.

### Standard

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
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      <Alert variant="standard" color="warning">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>

      <Alert variant="standard" color="danger">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      <Alert variant="standard" color="info">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      <Alert variant="standard" color="success">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
    </Stack>
  );
};
```

### Outlined

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
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      <Alert variant="outlined" color="warning">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      <Alert variant="outlined" color="danger">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      <Alert variant="outlined" color="info">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      <Alert variant="outlined" color="success">
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
    </Stack>
  );
};
```

## Action Area

The Alert component offers an `action` property for closing or undoing an Alert. It provides an `onClose` callback; if configured and the `action` property is not set, a close icon appears at the end of the Alert component. The `action` attribute can be used to overwrite and customize this closing icon.

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
        Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
      </Alert>
      {!closeOne && (
        <Alert
          color="success"
          onClose={() => {
            setCloseOne(true);
          }}
        >
          Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
        </Alert>
      )}
      {!closeTwo && (
        <Alert
          action={<div>close</div>}
          onClose={() => {
            setCloseTwo(true);
          }}
        >
          Invoice reminder: Sale starts at 2:00 PM, August 2, 2020
        </Alert>
      )}
    </Stack>
  );
};
```

## API

### AlertProps

| Property | Description                         | Type                                      | Default    |
| -------- | ----------------------------------- | ----------------------------------------- | ---------- | ---------- | --------- | -------- | --------- |
| color    | Alert theme color                   | `primary`                                 | `info`     | `success`  | `warning` | `danger` | `primary` |
| icon     | Custom icon, hidden if set to false | React.ReactNode                           | boolean    | true       |
| action   | Alert action area                   | React.ReactNode                           | -          |
| variant  | Alert mode                          | `standard`                                | `outlined` | `standard` |
| onClose  | Close callback                      | (e?: SyntheticEvent, data?: any) => void; | -          |

### Style Variables

| Property                 | Description            | Default                | Global Variable                    |
| ------------------------ | ---------------------- | ---------------------- | ---------------------------------- |
| --content-marquee-speed  | Content scroll speed   | 10s                    | --bui-alert-content-marquee-speed  |
| --padding                | Padding                | 8px                    | --bui-alert-padding                |
| --line-height            | Line height            | 16px                   | --bui-alert-line-height            |
| --default-icon-font-size | Default icon font size | 15px                   | --bui-alert-default-icon-font-size |
| --action-margin-left     | Action area margin     | 0 0 0 16px             | --bui-alert-action-margin          |
| --icon-margin-right      | Icon right margin      | 0 --bui-spacing-xs 0 0 | --bui-alert-icon-margin            |
| --icon-font-size         | Icon font size         | --bui-title-size-4     | --bui-alert-icon-font-size         |
