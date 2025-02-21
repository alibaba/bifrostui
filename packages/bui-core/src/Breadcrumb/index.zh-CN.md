---
group: 导航
name: Breadcrumb 面包屑
---

# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 基础用法

最简单的用法。

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

## 使用 BreadcrumbItem

使用 BreadcrumbItem 替代 items 进行渲染

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

## 带有图标的

图标放在文字前面。

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

## 分隔符

使用 separator=">" 可以自定义分隔符。

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

## 独立的分隔符

自定义单独的分隔符。

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

## API

### BreadcrumbProps

| 属性      | 说明         | 类型                  | 默认值 |
| --------- | ------------ | --------------------- | ------ |
| items     | 路由栈信息   | BreadcrumbItemProps[] | -      |
| separator | 分隔符自定义 | React.ReactNode       | /      |

### BreadcrumbItemProps

| 属性      | 说明                                     | 类型                              | 默认值 |
| --------- | ---------------------------------------- | --------------------------------- | ------ |
| separator | 要显示的分隔符                           | React.ReactNode                   | /      |
| title     | 名称                                     | React.ReactNode                   | -      |
| children  | 使用 BreadcrumbItem 组件渲染时替代 title | React.ReactNode                   | -      |
| onClick   | 点击事件                                 | (e: React.SyntheticEvent) => void | -      |

## 样式变量

| 属性                    | 说明                   | 默认值              | 全局变量                               |
| ----------------------- | ---------------------- | ------------------- | -------------------------------------- |
| --margin                | 面包屑外边距           | 0                   | --bui-breadcrumb-margin                |
| --padding               | 面包屑内边距           | 0                   | --bui-breadcrumb-padding               |
| --color                 | 面包屑颜色             | rgba(0, 0, 0, 0.45) | --bui-breadcrumb-color                 |
| --item-separator-margin | 面包屑选项分隔符外边距 | 0                   | --bui-breadcrumb-item-separator-margin |
| --list-li-color         | 面包屑列表子项颜色     | rgba(0, 0, 0, 0.88) | --bui-breadcrumb-list-li-color         |
