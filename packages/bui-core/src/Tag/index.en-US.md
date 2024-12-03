---
group: Data Display
name: Tag tags
---

# Tag tags

Tags are usually used to mark or supplement a visual element.

## Code demonstration

### Basic tags

The label supports three display modes: 'stroke', 'fill', and 'light', with the default being the stroke label.
Stroke label: a common form of white background with borders, which can be used in combination with fill buttons.
Fill in tags: Users need to focus on the highest priority tag on the entire page to guide them to pay attention.
Light Bright Label: The light bright mode is visually less emphasized than the fill label, and the background and text have the same theme color.

```tsx
import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Tag>默认标签</Tag>
      <Tag variant="contained">填充标签</Tag>
      <Tag variant="light">浅亮标签</Tag>
    </Stack>
  );
};
```

## theme

Tag tags support defining themes such as' primary ',' success', 'info', 'warning', and 'danger'. If color is not set, it defaults to 'default'

```tsx
import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px">
      <Stack direction="row" spacing="10px">
        <Tag variant="outlined" color="primary">
          限时特价
        </Tag>
        <Tag variant="outlined" color="info">
          音乐剧
        </Tag>
        <Tag variant="outlined" color="success">
          音乐剧
        </Tag>
        <Tag variant="outlined" color="warning">
          点映
        </Tag>
        <Tag variant="outlined" color="danger">
          限时优惠
        </Tag>
        <Tag variant="outlined" color="vip">
          会员
        </Tag>
      </Stack>
      <Stack direction="row" spacing="10px">
        <Tag variant="contained" color="primary">
          早鸟优惠
        </Tag>
        <Tag variant="contained" color="info">
          音乐剧
        </Tag>
        <Tag variant="contained" color="success">
          影城卡
        </Tag>
        <Tag variant="contained" color="warning">
          点映
        </Tag>
        <Tag variant="contained" color="danger">
          限时优惠
        </Tag>
        <Tag variant="contained" color="vip">
          会员
        </Tag>
      </Stack>
      <Stack direction="row" spacing="10px">
        <Tag variant="light" color="primary">
          早鸟优惠
        </Tag>
        <Tag variant="light" color="info">
          音乐剧
        </Tag>
        <Tag variant="light" color="success">
          影城卡
        </Tag>
        <Tag variant="light" color="warning">
          点映
        </Tag>
        <Tag variant="light" color="danger">
          限时优惠
        </Tag>
        <Tag variant="light" color="vip">
          会员
        </Tag>
      </Stack>
    </Stack>
  );
};
```

### Customize colors

In addition to using the theme colors we provide, you can also customize colors through the 'htmlColor' property.

```tsx
import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px">
      <Tag variant="contained" htmlColor="#69eeff">
        自定义色彩
      </Tag>
      <Tag variant="light" htmlColor="#69eeff">
        自定义色彩
      </Tag>
      <Tag variant="outlined" htmlColor="#69eeff">
        自定义色彩
      </Tag>
    </Stack>
  );
};
```

## combination

In addition to a single tag tag, you can also combine the 'TagGroup' component to achieve combined tags.

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

| attribute | explain                | type                                                                      | Default value |
| --------- | ---------------------- | ------------------------------------------------------------------------- | ------------- |
| color     | Tag Theme Color        | `primary` \|`info` \|`success` \|`warning` \|`danger` \|`default` \|`vip` | `default`     |
| htmlColor | Customize label colors | string                                                                    | -             |
| variant   | Tag type               | `contained` ｜`outlined`｜`light`                                         | `contained`   |

### Style variables

#### Tag

| attribute      | explain                | Default value           | global variable        |
| -------------- | ---------------------- | ----------------------- | ---------------------- |
| --bg-color     | Tag background color   | --bui-color-gay         | --bui-tag-bg-color     |
| --border-color | Tag border color       | --bui-color-border-gay  | --bui-tag-border-color |
| --color        | Tag Text Color         | --bui-color-gay         | --bui-tag-color        |
| --height       | Tag height             | 15px                    | --bui-tag-height       |
| --line-height  | Tag row height         | 15px                    | --bui-tag-line-height  |
| --padding      | Tag inner margin       | 0 var(--bui-spacing-xs) | --bui-tag-padding      |
| --bg-color-vip | Tag Member Theme Color | fade(#ff866e, 30%)      | --bui-tag-color-vip    |

#### TagGroup

| attribute | explain                 | Default value | global variable                |
| --------- | ----------------------- | ------------- | ------------------------------ |
| --height  | Height of dividing line | 13%           | --bui-tag-group-divider-height |
