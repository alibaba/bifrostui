---
group: Navigation
name: Breadcrumb
---

# Breadcrumb

Displays the current page's location within the system hierarchy and allows navigation back up.

## Code Demos

### Basic Usage

The simplest way to use it.

```tsx
import { Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Breadcrumb
      items={[
        {
          title: 'Home',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/';
          },
        },
        {
          title: 'Components',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/cores/button';
          },
        },
        {
          title: 'Breadcrumb',
        },
      ]}
    />
  );
};
```

### Using BreadcrumbItem

Using BreadcrumbItem for rendering instead of items.

```tsx
import { Breadcrumb, BreadcrumbItem } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleHomeClick = () => {
    window.location.href = 'https://bui.taopiaopiao.com/';
  };

  const handleCompClick = () => {
    window.location.href = 'https://bui.taopiaopiao.com/cores/button';
  };

  return (
    <Breadcrumb>
      <BreadcrumbItem onClick={handleHomeClick}>Home</BreadcrumbItem>
      <BreadcrumbItem onClick={handleCompClick}>Components</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  );
};
```

### With Icons

Icons are placed before the text.

```tsx
import { Breadcrumb, BreadcrumbItem } from '@bifrostui/react';
import { HomeIcon, ListOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const handleHomeClick = () => {
    window.location.href = 'https://bui.taopiaopiao.com/';
  };

  const handleCompClick = () => {
    window.location.href = 'https://bui.taopiaopiao.com/cores/button';
  };

  return (
    <Breadcrumb>
      <BreadcrumbItem
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={handleHomeClick}
      >
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <HomeIcon />
        </span>
      </BreadcrumbItem>
      <BreadcrumbItem onClick={handleCompClick}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <ListOutlinedIcon />
          <span style={{ marginLeft: '4px' }}>Components</span>
        </span>
      </BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  );
};
```

### Custom Separator

Use `separator=">"` to customize the separator.

```tsx
import { Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Breadcrumb
      separator=">"
      items={[
        {
          title: 'Home',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/';
          },
        },
        {
          title: 'Components',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/cores/button';
          },
        },
        {
          title: 'Breadcrumb',
        },
      ]}
    />
  );
};
```

### Individual Separator

Customize individual separators.

```tsx
import { Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Breadcrumb
      items={[
        {
          title: 'Home',
          separator: ':',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/';
          },
        },
        {
          title: 'Components',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/cores/button';
          },
        },
        {
          title: 'Breadcrumb',
        },
      ]}
    />
  );
};
```

### API

##### BreadcrumbProps

| Property  | Description      | Type                  | Default |
| --------- | ---------------- | --------------------- | ------- |
| items     | Route stack info | BreadcrumbItemProps[] | -       |
| separator | Custom separator | React.ReactNode       | /       |

##### BreadcrumbItemProps

| Property  | Description                                        | Type                              | Default |
| --------- | -------------------------------------------------- | --------------------------------- | ------- |
| separator | Separator to be displayed                          | React.ReactNode                   | /       |
| title     | Name                                               | React.ReactNode                   | -       |
| children  | Replaces title when using BreadcrumbItem component | React.ReactNode                   | -       |
| onClick   | Click event handler                                | (e: React.SyntheticEvent) => void | -       |

### Style Variables

| Property                | Description           | Default Value       | Global Variable                        |
| ----------------------- | --------------------- | ------------------- | -------------------------------------- |
| --margin                | Breadcrumb margin     | 0                   | --bui-breadcrumb-margin                |
| --padding               | Breadcrumb padding    | 0                   | --bui-breadcrumb-padding               |
| --color                 | Breadcrumb color      | rgba(0, 0, 0, 0.45) | --bui-breadcrumb-color                 |
| --item-separator-margin | Item separator margin | 0                   | --bui-breadcrumb-item-separator-margin |
| --list-li-color         | List item color       | rgba(0, 0, 0, 0.88) | --bui-breadcrumb-list-li-color         |
