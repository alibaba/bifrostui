---
group: Navigation
name: Breadcrumbs
---

# Breadcrumbs

Display the position of the current page in the system hierarchy and be able to return upwards.

## Code demonstration

### Basic usage

The simplest usage.

```tsx
import { Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Breadcrumb
      items={[
        {
          title: '首页',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/';
          },
        },
        {
          title: '组件',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/cores/button';
          },
        },
        {
          title: '面包屑',
        },
      ]}
    />
  );
};
```

### Using BreadrumbItem

Use BreadrumbItem instead of items for rendering

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
      <BreadcrumbItem onClick={handleHomeClick}>首页</BreadcrumbItem>
      <BreadcrumbItem onClick={handleCompClick}>组件</BreadcrumbItem>
      <BreadcrumbItem>面包屑</BreadcrumbItem>
    </Breadcrumb>
  );
};
```

### With icons

Place the icon in front of the text.

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
          <span style={{ marginLeft: '4px' }}>组件</span>
        </span>
      </BreadcrumbItem>
      <BreadcrumbItem>面包屑</BreadcrumbItem>
    </Breadcrumb>
  );
};
```

### Delimiter

Use separator=">" to customize the delimiter.

```tsx
import { Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Breadcrumb
      separator=">"
      items={[
        {
          title: '首页',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/';
          },
        },
        {
          title: '组件',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/cores/button';
          },
        },
        {
          title: '面包屑',
        },
      ]}
    />
  );
};
```

### Independent delimiter

Customize a separate delimiter.

```tsx
import { Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Breadcrumb
      items={[
        {
          title: '首页',
          separator: ':',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/';
          },
        },
        {
          title: '组件',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/cores/button';
          },
        },
        {
          title: '面包屑',
        },
      ]}
    />
  );
};
```

### API

##### BreadcrumbProps

| attribute | explain                   | type                  | Default value |
| --------- | ------------------------- | --------------------- | ------------- |
| items     | Routing stack information | BreadcrumbItemProps[] | -             |
| separator | Custom delimiter          | React.ReactNode       | /             |

##### BreadcrumbItemProps

| attribute | explain                                                   | type                              | Default value |
| --------- | --------------------------------------------------------- | --------------------------------- | ------------- |
| separator | The delimiter to be displayed                             | React.ReactNode                   | /             |
| title     | name                                                      | React.ReactNode                   | -             |
| children  | Replace title when rendering with BreadrumbItem component | React.ReactNode                   | -             |
| onClick   | Click on the event                                        | (e: React.SyntheticEvent) => void | -             |

### Style variables

| attribute               | explain                            | Default value       | global variable                        |
| ----------------------- | ---------------------------------- | ------------------- | -------------------------------------- |
| --margin                | Breadcrumb outer margin            | 0                   | --bui-breadcrumb-margin                |
| --padding               | Breadcrumb inner margin            | 0                   | --bui-breadcrumb-padding               |
| --color                 | Breadcrumb color                   | rgba(0, 0, 0, 0.45) | --bui-breadcrumb-color                 |
| --item-separator-margin | Breadcrumb option delimiter margin | 0                   | --bui-breadcrumb-item-separator-margin |
| --list-li-color         | Breadcrumb list sub item color     | rgba(0, 0, 0, 0.88) | --bui-breadcrumb-list-li-color         |
