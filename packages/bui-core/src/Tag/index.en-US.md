---
group: Data Display
name: Tag Label
---

# Tag Label

Tags are typically used to mark or provide supplementary information for a visual element.

## Basic Tags

Tags support three display modes: `outlined`, `contained`, and `subtle`. The default mode is outlined.
`Outlined tag`: Common white background with a border style, can be used in a group with contained buttons.
`Contained tag`: Used when there's a need to draw user attention to the most important tags on a page.
`Subtle tag`: The subtle mode provides a lower visual emphasis compared to contained tags, with the background and text sharing the same theme color.

```tsx
import { Stack, Tag } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Tag>Default Tag</Tag>
      <Tag variant="contained">Contained Tag</Tag>
      <Tag variant="subtle">Subtle Tag</Tag>
    </Stack>
  );
};
```

## Themes

Tag labels can be defined with `primary`, `success`, `info`, `warning`, or `danger` themes. If the color is not set, it defaults to `default`.

```tsx
import { Stack, Tag } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack
      spacing="10px"
      style={{
        borderRadius: 'var(--bui-shape-radius-card)',
        background: 'var(--bui-color-bg-default)',
        padding: '24px',
      }}
    >
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
          Pre-Screening
        </Tag>
        <Tag variant="outlined" color="danger">
          Limited Time Discount
        </Tag>
        <Tag variant="outlined" color="light">
          Discount
        </Tag>
        <Tag variant="outlined" color="dark">
          Discount
        </Tag>
        <Tag variant="outlined" color="vip">
          Membership
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
          Pre-Screening
        </Tag>
        <Tag variant="contained" color="danger">
          Limited Time Discount
        </Tag>
        <Tag variant="contained" color="light">
          Discount
        </Tag>
        <Tag variant="contained" color="dark">
          Discount
        </Tag>
        <Tag variant="contained" color="vip">
          Membership
        </Tag>
      </Stack>
      <Stack direction="row" spacing="10px">
        <Tag variant="subtle" color="primary">
          Early Bird Discount
        </Tag>
        <Tag variant="subtle" color="info">
          Musical
        </Tag>
        <Tag variant="subtle" color="success">
          Cinema Card
        </Tag>
        <Tag variant="subtle" color="warning">
          Pre-Screening
        </Tag>
        <Tag variant="subtle" color="danger">
          Limited Time Discount
        </Tag>
        <Tag variant="subtle" color="light">
          Discount
        </Tag>
        <Tag variant="subtle" color="dark">
          Discount
        </Tag>
        <Tag variant="subtle" color="vip">
          Membership
        </Tag>
      </Stack>
    </Stack>
  );
};
```

## Custom Colors

In addition to using the provided theme colors, you can customize colors using the `htmlColor` attribute.

```tsx
import { Stack, Tag } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack spacing="10px">
      <Tag variant="contained" htmlColor="#69eeff">
        Custom Color
      </Tag>
      <Tag variant="subtle" htmlColor="#69eeff">
        Custom Color
      </Tag>
      <Tag variant="outlined" htmlColor="#69eeff">
        Custom Color
      </Tag>
    </Stack>
  );
};
```

## Grouping

Aside from single Tag labels, you can use the `TagGroup` component to implement grouped tags.

```tsx
import { Stack, Tag, TagGroup } from '@bifrostui/react';
import * as React from 'react';

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

## API

### TagProps

| Property  | Description      | Type                                                                                                 | Default     |
| --------- | ---------------- | ---------------------------------------------------------------------------------------------------- | ----------- |
| color     | Tag theme color  | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `light` \| `neutral` \| `dark` \| `vip` | `neutral`   |
| htmlColor | Custom tag color | string                                                                                               | -           |
| variant   | Tag type         | `contained` \| `outlined` \| `subtle`                                                                | `contained` |

## Style Variables

### Tag

| Global Variable        | Description          | Default Value                  |
| ---------------------- | -------------------- | ------------------------------ |
| --bui-tag-color        | Tag text color       | `var(--bui-color-gray)`        |
| --bui-tag-border-color | Tag border color     | `var(--bui-color-border-gray)` |
| --bui-tag-bg-color     | Tag background color | `var(--bui-color-gray)`        |
| --bui-tag-height       | Tag height           | `15px`                         |
| --bui-tag-line-height  | Tag line height      | `15px`                         |
| --bui-tag-padding      | Tag padding          | `0 var(--bui-spacing-xs)`      |
| --bui-tag-color-vip    | VIP tag color        | `fade(#ff866e, 30%)`           |

### TagGroup

| Global Variable                | Description              | Default Value |
| ------------------------------ | ------------------------ | ------------- |
| --bui-tag-group-divider-height | Tag group divider height | `13%`         |
