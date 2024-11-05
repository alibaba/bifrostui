---
group: 导航
name: Breadcrumb 面包屑
---

# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 代码演示

### 基础用法

最简单的用法。

```tsx
import { Stack, Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#fff', padding: '20px' }}>
      <Breadcrumb
        items={[
          {
            title: '首页',
            href: 'https://bui.taopiaopiao.com/',
          },
          {
            title: '组件',
            href: 'https://bui.taopiaopiao.com/cores/button',
          },
          {
            title: '面包屑',
          },
        ]}
      />
    </Stack>
  );
};
```

### 使用 BreadcrumbItem

使用 BreadcrumbItem 替代 items 进行渲染

```tsx
import { Stack, Breadcrumb, BreadcrumbItem } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#fff', padding: '20px' }}>
      <Breadcrumb>
        <BreadcrumbItem href="https://bui.taopiaopiao.com/">
          首页
        </BreadcrumbItem>
        <BreadcrumbItem href="https://bui.taopiaopiao.com/cores/button">
          组件
        </BreadcrumbItem>
        <BreadcrumbItem>面包屑</BreadcrumbItem>
      </Breadcrumb>
    </Stack>
  );
};
```

### 带有图标的

图标放在文字前面。

```tsx
import { Stack, Breadcrumb, BreadcrumbItem } from '@bifrostui/react';
import { HomeIcon, ListOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#fff', padding: '20px' }}>
      <Breadcrumb>
        <BreadcrumbItem
          href="https://bui.taopiaopiao.com/"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon />
          </span>
        </BreadcrumbItem>
        <BreadcrumbItem href="https://bui.taopiaopiao.com/cores/button">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <ListOutlinedIcon />
            <span style={{ marginLeft: '4px' }}>组件</span>
          </span>
        </BreadcrumbItem>
        <BreadcrumbItem>面包屑</BreadcrumbItem>
      </Breadcrumb>
    </Stack>
  );
};
```

### 分隔符

使用 separator=">" 可以自定义分隔符。

```tsx
import { Stack, Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#fff', padding: '20px' }}>
      <Breadcrumb
        separator=">"
        items={[
          {
            title: '首页',
            href: 'https://bui.taopiaopiao.com/',
          },
          {
            title: '组件',
            href: 'https://bui.taopiaopiao.com/cores/button',
          },
          {
            title: '面包屑',
          },
        ]}
      />
    </Stack>
  );
};
```

### 独立的分隔符

自定义单独的分隔符。

```tsx
import { Stack, Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#fff', padding: '20px' }}>
      <Breadcrumb
        items={[
          {
            title: '首页',
            href: 'https://bui.taopiaopiao.com/',
            separator: ':',
          },
          {
            title: '组件',
            href: 'https://bui.taopiaopiao.com/cores/button',
          },
          {
            title: '面包屑',
          },
        ]}
      />
    </Stack>
  );
};
```

### API

##### BreadcrumbProps

| 属性      | 说明         | 类型                  | 默认值 |
| --------- | ------------ | --------------------- | ------ |
| items     | 路由栈信息   | BreadcrumbItemProps[] | -      |
| separator | 分隔符自定义 | React.ReactNode       | /      |

##### BreadcrumbItemProps

| 属性      | 说明                                     | 类型             | 默认值     |
| --------- | ---------------------------------------- | ---------------- | ---------- |
| key       | 唯一标识，默认为 index                   | string ｜ number | 数组 index |
| href      | 链接的目的地                             | string           | -          |
| separator | 要显示的分隔符                           | React.ReactNode  | /          |
| title     | 名称                                     | React.ReactNode  | -          |
| children  | 使用 BreadcrumbItem 组件渲染时替代 title | React.ReactNode  | -          |
