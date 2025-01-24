---
group: Data Display
name: Tag Label
---

# Tag Label

Tags are commonly used to mark or provide additional information about a visual element.

## Code Demos

### Basic Tags

Tags support three display modes: `outlined`, `contained`, and `light`. The default mode is the outlined tag.

- `Outlined Tag`: Commonly used with a white background and border, suitable for pairing with contained buttons.
- `Contained Tag`: The highest priority tag on the page, guiding user attention.
- `Light Tag`: Light mode has less emphasis compared to contained tags, where both background and text share the same theme color.

```tsx
import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Tag>Default Tag</Tag>
      <Tag variant="contained">Contained Tag</Tag>
      <Tag variant="light">Light Tag</Tag>
    </Stack>
  );
};
```

## Themes

Tag supports `primary`, `success`, `info`, `warning`, `danger` themes. If no color is set, it defaults to `default`.

```tsx
import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px">
      <Stack direction="row" spacing="10px">
        <Tag variant="outlined" color="primary">
          Limited Time Offer
        </Tag>
        <Tag variant="outlined" color="info">
          Musical
        </Tag>
        <Tag variant="outlined" color="success">
          Musical
        </Tag>
        <Tag variant="outlined" color="warning">
          Preview
        </Tag>
        <Tag variant="outlined" color="danger">
          Limited Discount
        </Tag>
        <Tag variant="outlined" color="vip">
          Member
        </Tag>
      </Stack>
      <Stack direction="row" spacing="10px">
        <Tag variant="contained" color="primary">
          Early Bird Discount
        </Tag>
        <Tag variant="contained" color="info">
          Musical
        </Tag>
        <Tag variant="contained" color="success">
          Cinema Card
        </Tag>
        <Tag variant="contained" color="warning">
          Preview
        </Tag>
        <Tag variant="contained" color="danger">
          Limited Discount
        </Tag>
        <Tag variant="contained" color="vip">
          Member
        </Tag>
      </Stack>
      <Stack direction="row" spacing="10px">
        <Tag variant="light" color="primary">
          Early Bird Discount
        </Tag>
        <Tag variant="light" color="info">
          Musical
        </Tag>
        <Tag variant="light" color="success">
          Cinema Card
        </Tag>
        <Tag variant="light" color="warning">
          Preview
        </Tag>
        <Tag variant="light" color="danger">
          Limited Discount
        </Tag>
        <Tag variant="light" color="vip">
          Member
        </Tag>
      </Stack>
    </Stack>
  );
};
```

### Custom Colors

In addition to using our predefined theme colors, you can also customize colors using the `htmlColor` property.

```tsx
import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px">
      <Tag variant="contained" htmlColor="#69eeff">
        Custom Color
      </Tag>
      <Tag variant="light" htmlColor="#69eeff">
        Custom Color
      </Tag>
      <Tag variant="outlined" htmlColor="#69eeff">
        Custom Color
      </Tag>
    </Stack>
  );
};
```

## Combinations

Besides individual tags, you can combine tags using the `TagGroup` component.

```tsx
import { Stack, Tag, TagGroup } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px" flexWrap="wrap">
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="success">
          success
        </Tag>
        <Tag variant="outlined" color="warning">
          warning
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="warning">
          warning
        </Tag>
        <Tag variant="contained" color="success">
          success
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>

      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>

      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="warning">
          warning
        </Tag>
      </TagGroup>
    </Stack>
  );
};
```

### API

##### TagProps

| Property  | Description      | Type                                                                            | Default     |
| --------- | ---------------- | ------------------------------------------------------------------------------- | ----------- |
| color     | Tag theme        | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `default` \| `vip` | `default`   |
| htmlColor | Custom tag color | string                                                                          | -           |
| variant   | Tag type         | `contained` \| `outlined` \| `light`                                            | `contained` |

### Style Variables

#### Tag

| Property           | Description             | Default Value           | Global Variable        |
| ------------------ | ----------------------- | ----------------------- | ---------------------- |
| --tag-bg-color     | Background color of Tag | --bui-color-gay         | --bui-tag-bg-color     |
| --tag-border-color | Border color of Tag     | --bui-color-border-gay  | --bui-tag-border-color |
| --tag-color        | Text color of Tag       | --bui-color-gay         | --bui-tag-color        |
| --tag-height       | Height of Tag           | 15px                    | --bui-tag-height       |
| --tag-line-height  | Line height of Tag      | 15px                    | --bui-tag-line-height  |
| --tag-padding      | Padding of Tag          | 0 var(--bui-spacing-xs) | --bui-tag-padding      |
| --tag-bg-color-vip | VIP theme color of Tag  | fade(#ff866e, 30%)      | --bui-tag-color-vip    |

#### TagGroup

| Property | Description    | Default Value | Global Variable                |
| -------- | -------------- | ------------- | ------------------------------ |
| --height | Divider height | 13%           | --bui-tag-group-divider-height |
