---
group: Navigation
name: Breadcrumb
---

# Breadcrumb

Displays the location of the current page within the system hierarchy and allows navigation upwards.

## Basic Usage

The simplest usage.

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

## Using BreadcrumbItem

Use BreadcrumbItem instead of items for rendering.

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

## With Icons

Place icons before text.

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

## Separator

Use separator=">" to customize the separator.

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

## Separate Separator

Customize a separate separator.

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

## API

### Breadcrumb

| Property  | Description         | Type                  | Default |
| --------- | ------------------- | --------------------- | ------- |
| items     | Route stack info    | BreadcrumbItemProps[] | -       |
| separator | Customize separator | React.ReactNode       | /       |

### BreadcrumbItem

| Property  | Description                             | Type                              | Default |
| --------- | --------------------------------------- | --------------------------------- | ------- |
| separator | Separator to display                    | React.ReactNode                   | /       |
| title     | Title                                   | React.ReactNode                   | -       |
| children  | Replace title when using BreadcrumbItem | React.ReactNode                   | -       |
| onClick   | Click event                             | (e: React.SyntheticEvent) => void | -       |

## Style Variables

| Global Variable                        | Description               | Default Value         |
| -------------------------------------- | ------------------------- | --------------------- |
| --bui-breadcrumb-margin                | Margin for breadcrumb     | `0`                   |
| --bui-breadcrumb-padding               | Padding for breadcrumb    | `0`                   |
| --bui-breadcrumb-color                 | Text color for breadcrumb | `rgba(0, 0, 0, 0.45)` |
| --bui-breadcrumb-item-separator-margin | Margin for separator      | `0 8px`               |
| --bui-breadcrumb-last-item-color       | Text color for last item  | `rgba(0, 0, 0, 0.88)` |

```

```
