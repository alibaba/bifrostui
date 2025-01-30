---
group: 数据展示
name: Card 卡片
---

# Card 卡片

通用卡片容器，最基础的卡片容器，可用于承载文字、列表、图片、段落、常用于后台概览页面。

## 基础用法

`Card`组件分为：`CardHeader`、 `CardContent` 、`CardFooter` 等 3 个模块，以下是示例文档。

## 卡片标题

卡片组件提供 `CardHeader`子组件用来设置卡片头部模块，您可以通过`title`设置卡片容器的标题。

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title={<div>美味小食</div>} />
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
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader subtitle="（大桶爆米花1份+300ml自制奶茶2杯）" />
        </Card>
      </Stack>
    </Stack>
  );
};
```

`title` 、`subtitle` 组合使用.

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="美味小食"
            subtitle="（大桶爆米花1份+300ml自制奶茶2杯）"
          />
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
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="订单"
            extra="查看更多"
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
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="订单"
            extra="查看更多"
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
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardContent>
            <div>订单号：7a73fcggert235fag4</div>
            <div>取餐码：235634</div>
            <div>手机号: 134****5427</div>
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
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="订单" />
          <CardContent>
            <div>订单号：7a73fcggert235fag4</div>
            <div>取餐码：235634</div>
            <div>手机号: 134****5427</div>
          </CardContent>
          <CardFooter>
            <Button color="success">签收</Button>
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
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="订单" />
          <CardContent>
            <div>订单号：7a73fcggert235fag4</div>
            <div>取餐码：235634</div>
            <div>手机号: 134****5427</div>
          </CardContent>
          <CardFooter>
            <Button color="success">签收</Button>
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
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="购买商品" />
          <CardContent>
            <Card style={{ width: '100%' }}>
              <CardHeader
                title="生鲜水果"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="共6件"
              />
              <CardContent>
                <div>苹果*2</div>
                <div>木瓜*1</div>
                <div>菠菜*3</div>
              </CardContent>
            </Card>
            <Card className="subCard">
              <CardHeader
                title="零食饮料"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="共14件"
              />
              <CardContent>
                <div>薯片*2</div>
                <div>橙汁*2</div>
                <div>火腿肠*10</div>
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
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ padding: '10px' }}>
          <div>配料表</div>
          <div>主要成分：水，生牛乳</div>
          <div>产品检验合格</div>
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

### CardHeader

| 属性                   | 说明           | 默认值                            | 全局变量                               |
| ---------------------- | -------------- | --------------------------------- | -------------------------------------- |
| --padding              | 内边距         | --bui-spacing-md --bui-spacing-lg | --bui-card-header-padding              |
| --end-icon-margin-left | 尾部图标左边距 | 2px                               | --bui-card-header-end-icon-margin-left |

### CardFooter

| 属性      | 说明   | 默认值                            | 全局变量                  |
| --------- | ------ | --------------------------------- | ------------------------- |
| --padding | 内边距 | --bui-spacing-md --bui-spacing-lg | --bui-card-footer-padding |
