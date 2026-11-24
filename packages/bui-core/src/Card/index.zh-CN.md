---
group: 数据展示
name: Card 卡片
---

# Card 卡片

最基础的通用容器，可用于承载文字、列表、图片、段落，常用于后台概览页面。

## 基础用法

`Card`组件分为：`CardHeader`、 `CardContent` 、`CardFooter` 等 3 个模块，以下是示例文档。

## 卡片标题

卡片组件提供 `CardHeader`子组件用来设置卡片头部模块，您可以通过`title`设置卡片容器的标题。

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title={<div>项目 Alpha</div>} />
        </Card>
      </Stack>
    </Stack>
  );
};
```

## 卡片子标题

您还可以通过`subtitle`设置卡片容器的子标题。

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader subtitle="最近更新：2024-04-29" />
        </Card>
      </Stack>
    </Stack>
  );
};
```

`title` 、`subtitle` 组合使用.

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="项目 Alpha" subtitle="最近更新：2024-04-29" />
        </Card>
      </Stack>
    </Stack>
  );
};
```

## 卡片头部操作区

`CardHeader`子组件除了提供标题、子标题外，还提供卡片头部操作区，您可以通过`extra`承载卡片头部操作区 Action。
当绑定`onClick`事件时，`CardHeader`提供默认的右侧操作 icon，您也可以通过设置`endIcon`属性为`true/false`来显示或者隐藏这个 icon。

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="最近订单"
            extra="查看全部"
            onClick={(e) => {
              console.log(e);
            }}
          />
        </Card>
      </Stack>
    </Stack>
  );
};
```

设置`endIcon`为`false`。

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="最近订单"
            extra="查看全部"
            endIcon={false}
            onClick={(e) => {
              console.log(e);
            }}
          />
        </Card>
      </Stack>
    </Stack>
  );
};
```

## 卡片正文

`Card`组件提供`CardContent`子组件，通常用来承载卡片容器主要内容。

```tsx
import { Card, CardContent, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardContent>
            <div>订单号：7a73fcggert235fag4</div>
            <div>物流单号：SF1204056789</div>
            <div>手机号：134****5427</div>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};
```

## 卡片底部

`Card`组件提供`CardFooter`子组件，通常用来承载卡片容器底部操作区。

```tsx
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Stack,
} from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="订单详情" />
          <CardContent>
            <div>订单号：7a73fcggert235fag4</div>
            <div>物流单号：SF1204056789</div>
            <div>手机号：134****5427</div>
          </CardContent>
          <CardFooter>
            <Button color="success">确认收货</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Stack>
  );
};
```

## 典型的卡片示例

配合`CardHeader`、`CardContent`、`CardFooter`子组件使用。

```tsx
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Stack,
} from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="订单详情" />
          <CardContent>
            <div>订单号：7a73fcggert235fag4</div>
            <div>物流单号：SF1204056789</div>
            <div>手机号：134****5427</div>
          </CardContent>
          <CardFooter>
            <Button color="success">确认收货</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Stack>
  );
};
```

## 复杂场景示例

`Card`组件支持嵌套使用。

```tsx
import { Card, CardContent, CardHeader, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="我的订单" />
          <CardContent>
            <Card style={{ width: '100%' }}>
              <CardHeader
                title="电子产品"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="共 6 件"
              />
              <CardContent>
                <div>无线鼠标 × 2</div>
                <div>机械键盘 × 1</div>
                <div>USB-C 扩展坞 × 3</div>
              </CardContent>
            </Card>
            <Card className="subCard">
              <CardHeader
                title="办公用品"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="共 14 件"
              />
              <CardContent>
                <div>A4 打印纸 × 2</div>
                <div>便利贴 × 2</div>
                <div>中性笔 × 10</div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};
```

## 定制

除了配合`CardHeader`、`CardContent`、`CardFooter`子组件使用，您还可以通过直接插入 children，实现高度定制化卡片。

```tsx
import { Card, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ padding: '10px' }}>
          <div>产品规格</div>
          <div>材质：100% 纯棉</div>
          <div>认证：ISO 9001</div>
        </Card>
      </Stack>
    </Stack>
  );
};
```

## API

### CardHeaderProps

| 属性     | 说明           | 类型                 | 默认值 |
| -------- | -------------- | -------------------- | ------ |
| title    | 卡片标题       | ReactNode            | -      |
| subtitle | 子标题         | ReactNode            | -      |
| extra    | 卡片右侧操作区 | ReactNode            | -      |
| endIcon  | 卡片右侧图标   | ReactNode ｜ boolean | -      |

## 样式变量

| 全局变量                            | 说明             | 默认值                                        |
| ----------------------------------- | ---------------- | --------------------------------------------- |
| `--bui-card-header-padding`         | 卡片头部内边距   | `var(--bui-spacing-md) var(--bui-spacing-lg)` |
| `--bui-card-footer-padding`         | 卡片底部内边距   | `var(--bui-spacing-md) var(--bui-spacing-lg)` |
| `--bui-card-header-title-font-size` | 卡片标题字体大小 | `var(--bui-title-size-4)`                     |
| `--bui-card-content-font-size`      | 卡片内容字体大小 | `var(--bui-text-size-2)`                      |
| `--bui-card-footer-font-size`       | 卡片底部字体大小 | `var(--bui-text-size-2)`                      |
