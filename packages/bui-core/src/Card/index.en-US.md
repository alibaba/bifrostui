---
group: Data Display
name: Card
---

# Card

A general card container, the most basic card container, can be used to hold text, lists, images, and paragraphs. Commonly used in backend overview pages.

## Basic Usage

The `Card` component is divided into three modules: `CardHeader`, `CardContent`, and `CardFooter`. Below is an example document.

## Card Title

The card component provides the `CardHeader` subcomponent to set the card header module. You can use `title` to set the title of the card container.

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title={<div>Delicious Snacks</div>} />
        </Card>
      </Stack>
    </Stack>
  );
};
```

## Card Subtitle

You can also set the subtitle of the card container through `subtitle`.

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader subtitle="(One bucket of popcorn + two 300ml homemade teas)" />
        </Card>
      </Stack>
    </Stack>
  );
};
```

Combine `title` and `subtitle`.

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="Delicious Snacks"
            subtitle="(One bucket of popcorn + two 300ml homemade teas)"
          />
        </Card>
      </Stack>
    </Stack>
  );
};
```

## Card Header Action Area

In addition to providing title and subtitle, the `CardHeader` subcomponent also provides a card header action area, where you can use `extra` to hold card header actions. When an `onClick` event is bound, `CardHeader` provides a default right-side action icon. You can also set the `endIcon` attribute to `true/false` to show or hide this icon.

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="Order"
            extra="View More"
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

Set `endIcon` to `false`.

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="Order"
            extra="View More"
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

## Card Content

The `Card` component provides the `CardContent` subcomponent, which is usually used to hold the main content of the card container.

```tsx
import { Card, CardContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardContent>
            <div>Order Number: 7a73fcggert235fag4</div>
            <div>Pickup Code: 235634</div>
            <div>Phone Number: 134****5427</div>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};
```

## Card Footer

The `Card` component provides the `CardFooter` subcomponent, which is usually used to hold the footer action area of the card container.

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
          <CardHeader title="Order" />
          <CardContent>
            <div>Order Number: 7a73fcggert235fag4</div>
            <div>Pickup Code: 235634</div>
            <div>Phone Number: 134****5427</div>
          </CardContent>
          <CardFooter>
            <Button color="success">Sign Off</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Stack>
  );
};
```

## Typical Card Example

Use in conjunction with `CardHeader`, `CardContent`, and `CardFooter`.

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
          <CardHeader title="Order" />
          <CardContent>
            <div>Order Number: 7a73fcggert235fag4</div>
            <div>Pickup Code: 235634</div>
            <div>Phone Number: 134****5427</div>
          </CardContent>
          <CardFooter>
            <Button color="success">Sign Off</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Stack>
  );
};
```

## Complex Scenario Example

The `Card` component supports nested use.

```tsx
import { Card, CardContent, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="Purchase Products" />
          <CardContent>
            <Card style={{ width: '100%' }}>
              <CardHeader
                title="Fresh Fruits"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="6 items in total"
              />
              <CardContent>
                <div>Apple*2</div>
                <div>Papaya*1</div>
                <div>Spinach*3</div>
              </CardContent>
            </Card>
            <Card className="subCard">
              <CardHeader
                title="Snacks & Beverages"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="14 items in total"
              />
              <CardContent>
                <div>Chips*2</div>
                <div>Orange Juice*2</div>
                <div>Sausages*10</div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};
```

## Customization

In addition to using the `CardHeader`, `CardContent`, and `CardFooter` subcomponents, you can achieve highly customized cards by directly inserting children.

```tsx
import { Card, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ padding: '10px' }}>
          <div>Ingredients</div>
          <div>Main Ingredients: Water, Fresh Milk</div>
          <div>Product Quality Passed</div>
        </Card>
      </Stack>
    </Stack>
  );
};
```

## API

### CardHeaderProps

| Property | Description                       | Type      | Default |
| -------- | --------------------------------- | --------- | ------- | --- |
| title    | Card title                        | ReactNode | -       |
| subtitle | Subtitle                          | ReactNode | -       |
| extra    | Action area on right side of card | ReactNode | -       |
| endIcon  | Icon on right side of card        | ReactNode | boolean | -   |

## Style Variables

| Global Variable                     | Description            | Default Value                                 |
| ----------------------------------- | ---------------------- | --------------------------------------------- |
| `--bui-card-header-padding`         | Card header padding    | `var(--bui-spacing-md) var(--bui-spacing-lg)` |
| `--bui-card-footer-padding`         | Card footer padding    | `var(--bui-spacing-md) var(--bui-spacing-lg)` |
| `--bui-card-header-title-font-size` | Card title font size   | `var(--bui-title-size-4)`                     |
| `--bui-card-content-font-size`      | Card content font size | `var(--bui-text-size-2)`                      |
| `--bui-card-footer-font-size`       | Card footer font size  | `var(--bui-text-size-2)`                      |
