---
group: Data Display
name: Card
---

# Card

Universal card container, the most basic card container, can be used to hold text, lists, images, paragraphs, and is commonly used for backend overview pages.

## Code demonstration

### Basic usage

`Card`the items are divided into:`CardHeader`、`CardContent`、`CardFooter`waiting for 3 modules, the following is an example document.

### Card Title

Card components provided`CardHeader`the component is used to set the card header module, and you can use it to`title`设place the title of the card container.

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

### Card Subtitle

You can also use`subtitle`subtitle for card container placement.

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

`title`、`subtitle`combination use

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

### Card head operation area

`CardHeader`in addition to providing titles and subheadings, the component also provides a card header operation area, which you can use to`extra`load card head operation area action.
When binding`onClick`during the process,`CardHeader`for the default right-hand operation icon, you can also set it through settings`endIcon`sex is`true/false`show or hide this icon.

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

Set up`endIcon`为`false`。

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

### Card Text

`Card`item provided`CardContent`components are typically used to carry the main contents of card containers.

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

### Bottom of the card

`Card`item provided`CardFooter`component, usually used to carry the bottom operating area of the card container.

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

### Typical card example

Coordination`CardHeader`、`CardContent`、`CardFooter`component usage.

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

### Examples of Complex Scenarios

`Card`the item supports nested use.

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

### Highly customized

Apart from cooperation`CardHeader`、`CardContent`、`CardFooter`component usage, you can also achieve highly customized cards by directly inserting children.

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

### API

#### CardHeaderProps

| attribute | explain                                      | type                 | Default value |
| --------- | -------------------------------------------- | -------------------- | ------------- |
| title     | Card Title                                   | ReactNode            | -             |
| subtitle  | subtitle                                     | ReactNode            | -             |
| extra     | Operation area on the right side of the card | ReactNode            | -             |
| endIcon   | Icon on the right side of the card           | ReactNode ｜ boolean | -             |

### Style variables

#### CardHeader

| attribute              | explain               | Default value                     | global variable                        |
| ---------------------- | --------------------- | --------------------------------- | -------------------------------------- |
| --padding              | padding               | --bui-spacing-md --bui-spacing-lg | --bui-card-header-padding              |
| --end-icon-margin-left | Tail icon left margin | 2px                               | --bui-card-header-end-icon-margin-left |

#### CardFooter

| attribute | explain | Default value                     | global variable           |
| --------- | ------- | --------------------------------- | ------------------------- |
| --padding | padding | --bui-spacing-md --bui-spacing-lg | --bui-card-footer-padding |
