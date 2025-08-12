---
group: Data Display
name: Card
---

# Card

A general card container, the most basic card container that can be used to hold text, lists, images, paragraphs, and is commonly used for backend overview pages.

## Code Examples

### Basic Usage

The `Card` component is divided into 3 sections: `CardHeader`, `CardContent`, and `CardFooter`. Below are example documents.

### Card Title

The `Card` component provides a `CardHeader` sub-component to set the header section of the card. You can set the title of the card container using the `title` attribute.

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

### Card Subtitle

You can also set the subtitle of the card container using the `subtitle` attribute.

```tsx
import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader subtitle="(1 Large Bucket Popcorn + 2 Cups of 300ml Homemade Milk Tea)" />
        </Card>
      </Stack>
    </Stack>
  );
};
```

Using both `title` and `subtitle`.

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
            subtitle="(1 Large Bucket Popcorn + 2 Cups of 300ml Homemade Milk Tea)"
          />
        </Card>
      </Stack>
    </Stack>
  );
};
```

### Header Action Area

Besides providing titles and subtitles, the `CardHeader` sub-component also offers an action area for the header. You can use the `extra` attribute to include actions in the header area. When binding an `onClick` event, `CardHeader` provides a default right-side action icon. You can show or hide this icon by setting the `endIcon` attribute to `true/false`.

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

Setting `endIcon` to `false`.

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

### Card Body

The `Card` component provides a `CardContent` sub-component, typically used to contain the main content of the card.

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

### Card Footer

The `Card` component provides a `CardFooter` sub-component, typically used to contain the bottom operation area of the card.

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
            <Button color="success">Confirm Receipt</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Stack>
  );
};
```

### Typical Card Example

Used with `CardHeader`, `CardContent`, and `CardFooter` sub-components.

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
            <Button color="success">Confirm Receipt</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Stack>
  );
};
```

### Complex Scenario Example

The `Card` component supports nested usage.

```tsx
import { Card, CardContent, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="Purchased Items" />
          <CardContent>
            <Card style={{ width: '100%' }}>
              <CardHeader
                title="Fresh Fruits"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="Total 6 items"
              />
              <CardContent>
                <div>Apple * 2</div>
                <div>Papaya * 1</div>
                <div>Spinach * 3</div>
              </CardContent>
            </Card>
            <Card className="subCard">
              <CardHeader
                title="Snacks & Drinks"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="Total 14 items"
              />
              <CardContent>
                <div>Chips * 2</div>
                <div>Orange Juice * 2</div>
                <div>Sausage * 10</div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};
```

### Highly Customizable

In addition to using `CardHeader`, `CardContent`, and `CardFooter` sub-components, you can directly insert children to achieve highly customized cards.

```tsx
import { Card, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ padding: '10px' }}>
          <div>Ingredients List</div>
          <div>Main Ingredients: Water, Raw Cow's Milk</div>
          <div>Product Inspection Passed</div>
        </Card>
      </Stack>
    </Stack>
  );
};
```

## API

### CardHeaderProps

| Property | Description       | Type                 | Default |
| -------- | ----------------- | -------------------- | ------- |
| title    | Card Title        | ReactNode            | -       |
| subtitle | Subtitle          | ReactNode            | -       |
| extra    | Right Action Area | ReactNode            | -       |
| endIcon  | Right Icon        | ReactNode \| boolean | -       |

### Style Variables

#### CardHeader

| Property               | Description | Default Value                     | Global Variable                        |
| ---------------------- | ----------- | --------------------------------- | -------------------------------------- |
| --padding              | Padding     | --bui-spacing-md --bui-spacing-lg | --bui-card-header-padding              |
| --end-icon-margin-left | Left Margin | 2px                               | --bui-card-header-end-icon-margin-left |

#### CardFooter

| Property  | Description | Default Value                     | Global Variable           |
| --------- | ----------- | --------------------------------- | ------------------------- |
| --padding | Padding     | --bui-spacing-md --bui-spacing-lg | --bui-card-footer-padding |
