---
group: Data Display
name: Card card
---

# Card card

Universal card container, the most basic card container, can be used to hold text, lists, images, paragraphs, and is commonly used for backend overview pages.

## Code demonstration

### Basic usage

The Card component is divided into three modules: CardHeader, CardContent, CardFooter, etc. The following is an example document.

### Card Title

The card component provides a 'CardHeader' sub component for setting the card header module. You can set the title of the card container through 'title'.

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

You can also set the subtitle of the card container through 'subtitle'.

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

Use title and subtitle in combination

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

In addition to providing titles and subheadings, the CardHeader sub component also provides a card header operation area. You can use 'extra' to carry the card header operation area Action.
When binding the 'nClick' event, the 'CardHeader' provides the default icon for the right side operation. You can also display or hide this icon by setting the 'endIcon' property to 'true/false'.

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

Set 'endIcon' to 'false'.

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

The Card component provides a CardContent sub component, typically used to hold the main content of a card container.

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

The Card component provides a CardFooter sub component, typically used to carry the bottom operating area of the card container.

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

Used in conjunction with the 'CardHeader', 'CardContent', and 'CardFooter' sub components.

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

The Card component supports nested use.

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

In addition to being used in conjunction with the CardHeader, CardContent, and CardFooter sub components, you can also achieve highly customized cards by directly inserting children.

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

##### CardHeaderProps

| attribute | explain                                      | type                 | Default value |
| --------- | -------------------------------------------- | -------------------- | ------------- |
| title     | Card Title                                   | ReactNode            | -             |
| subtitle  | subtitle                                     | ReactNode            | -             |
| extra     | Operation area on the right side of the card | ReactNode            | -             |
| endIcon   | Icon on the right side of the card           | ReactNode ｜ boolean | -             |

### Style variables

#### CardHeader

| attribute              | explain                      | Default value                     | global variable                        |
| ---------------------- | ---------------------------- | --------------------------------- | -------------------------------------- |
| --padding              | padding                      | --bui-spacing-md --bui-spacing-lg | --bui-card-header-padding              |
| --end-icon-margin-left | Left margin of the tail icon | 2px                               | --bui-card-header-end-icon-margin-left |

#### CardFooter

| attribute | explain | Default value                     | global variable           |
| --------- | ------- | --------------------------------- | ------------------------- |
| --padding | padding | --bui-spacing-md --bui-spacing-lg | --bui-card-footer-padding |
