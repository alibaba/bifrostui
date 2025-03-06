---
group: 数据展示
name: Tag 标签
---

# Tag 标签

标签通常是对一块视觉元素进行标记或者补充说明。

## 基础标签

标签支持 `描边`、 `填充`、 `浅亮` 三种展示模式，默认是描边标签。
`描边标签`：常见白底背景加边框形式，可与填充按钮搭配成组使用。
`填充标签`：用户在整个页面需要关注优先级最高的标签，引导用户关注。
`浅亮标签`：浅亮模式在视觉强调程度上弱于填充标签，背景与文案为同一主题色。

```tsx
import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Tag>默认标签</Tag>
      <Tag variant="contained">填充标签</Tag>
      <Tag variant="subtle">浅亮标签</Tag>
    </Stack>
  );
};
```

## 主题

Tag 标签支持 `primary`、`success`、`info`、`warning`、`danger` 主题定义。若不设置color，则默认为`default`

```tsx
import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

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
        <Tag variant="outlined" color="light">
          优惠
        </Tag>
        <Tag variant="outlined" color="dark">
          优惠
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
        <Tag variant="contained" color="light">
          优惠
        </Tag>
        <Tag variant="contained" color="dark">
          优惠
        </Tag>
        <Tag variant="contained" color="vip">
          会员
        </Tag>
      </Stack>
      <Stack direction="row" spacing="10px">
        <Tag variant="subtle" color="primary">
          早鸟优惠
        </Tag>
        <Tag variant="subtle" color="info">
          音乐剧
        </Tag>
        <Tag variant="subtle" color="success">
          影城卡
        </Tag>
        <Tag variant="subtle" color="warning">
          点映
        </Tag>
        <Tag variant="subtle" color="danger">
          限时优惠
        </Tag>
        <Tag variant="subtle" color="light">
          优惠
        </Tag>
        <Tag variant="subtle" color="dark">
          优惠
        </Tag>
        <Tag variant="subtle" color="vip">
          会员
        </Tag>
      </Stack>
    </Stack>
  );
};
```

## 自定义色彩

除了可以使用我们提供的主题色外，您还可以通过`htmlColor`属性自定义色彩。

```tsx
import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px">
      <Tag variant="contained" htmlColor="#69eeff">
        自定义色彩
      </Tag>
      <Tag variant="subtle" htmlColor="#69eeff">
        自定义色彩
      </Tag>
      <Tag variant="outlined" htmlColor="#69eeff">
        自定义色彩
      </Tag>
    </Stack>
  );
};
```

## 组合

除了单个标签 Tag，您还可以结合`TagGroup`组件实现组合标签。

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

## API

### TagProps

| 属性      | 说明           | 类型                                                                                              | 默认值      |
| --------- | -------------- | ------------------------------------------------------------------------------------------------- | ----------- |
| color     | 标签主题色     | `primary` \| `info` \| `success` \| `warning` \| `danger` \|`light`\| `neutral` \|`dark` \| `vip` | `neutral`   |
| htmlColor | 自定义标签颜色 | string                                                                                            | -           |
| variant   | 标签类型       | `contained` ｜`outlined`｜`subtle`                                                                | `contained` |

## 样式变量

### Tag

| 全局变量               | 说明         | 默认值                         |
| ---------------------- | ------------ | ------------------------------ |
| --bui-tag-color        | 标签文本颜色 | `var(--bui-color-gray)`        |
| --bui-tag-border-color | 标签边框颜色 | `var(--bui-color-border-gray)` |
| --bui-tag-bg-color     | 标签背景色   | `var(--bui-color-gray)`        |
| --bui-tag-height       | 标签高度     | `15px`                         |
| --bui-tag-line-height  | 标签行高     | `15px`                         |
| --bui-tag-padding      | 标签内边距   | `0 var(--bui-spacing-xs)`      |
| --bui-tag-color-vip    | VIP标签颜色  | `fade(#ff866e, 30%)`           |

### TagGroup

| 全局变量                       | 说明             | 默认值 |
| ------------------------------ | ---------------- | ------ |
| --bui-tag-group-divider-height | 标签组分隔符高度 | `13%`  |
