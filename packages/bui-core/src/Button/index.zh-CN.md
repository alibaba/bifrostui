---
group:
  title: 基本输入
  order: -1
order: -1
nav: 组件
name: Button 按钮
---

# Button 按钮

按钮用于触发一个操作，做出选择，例如提交表单，打开对话框，取消操作或执行删除操作。

## 按钮变体

按钮支持`文字按钮`、`线框按钮`、`填充按钮`、`柔和按钮`四种变体，默认`线框按钮`。

- `文字按钮`: 低调、灵活性。适用內联操作、简洁界面、轻量级操作。
- `线框按钮`: 中性、灵活性，适用透明背景、视觉平衡、中等优先级操作。
- `填充按钮`: 突出、重要性。适用强视觉焦点、高优先级操作、主要操作。
- `柔和按钮`: 低调、非焦点，适用柔和界面、低对比度设计、次要操作。

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="9px" flexWrap="wrap">
      <Button color="primary" variant="text">
        Text
      </Button>
      <Button color="primary">Outlined</Button>
      <Button color="primary" variant="contained">
        Contained
      </Button>
      <Button color="primary" variant="subtle">
        Subtle
      </Button>
    </Stack>
  );
};
```

## 按钮大小

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large`、`small`、`full` 分别把按钮设为大、小、通栏尺寸。若不设置 `size`，则尺寸为中等尺寸。

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="9px">
      <Stack direction="row" spacing="9px" style={{ width: '350px' }}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Stack>
      <Button size="full" style={{ width: '350px' }}>
        Full
      </Button>
      <Stack direction="row" spacing="9px" style={{ width: '350px' }}>
        <Button size="small" variant="contained" color="primary">
          Small
        </Button>
        <Button size="medium" variant="contained" color="primary">
          Medium
        </Button>
        <Button size="large" variant="contained" color="primary">
          Large
        </Button>
      </Stack>
      <Button
        size="full"
        variant="contained"
        color="primary"
        style={{ width: '350px' }}
      >
        Full
      </Button>
    </Stack>
  );
};
```

## 按钮色彩

按钮支持 `primary`、`success`、`info`、`warning`、`danger`、`vip`、`light`、`dark` 主题定义。若不设置color，则默认为`neutral`。

- `primary`: 主按钮，传递品牌主题
- `info`: 信息提示或中性操作
- `success`: 成功或正向操作（如完成、通过）
- `warning`: 警告或需要谨慎的操作（如提醒、修改）
- `danger`: 危险、强调，关键、核心或破坏性操作（如删除、注销）
- `vip`: 尊贵、尊享、专属或高级感
- `light`: 浅色主题
- `dark`: 深色主题

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <div
      className="btn-colors"
      style={{
        borderRadius: 'var(--bui-shape-radius-card)',
        background: 'var(--bui-color-bg-default)',
        padding: '24px',
      }}
    >
      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button variant="text">Button</Button>
        <Button variant="outlined">Button</Button>
        <Button variant="contained">Button</Button>
        <Button variant="subtle">Button</Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="light" variant="text">
          Button
        </Button>
        <Button color="light" variant="outlined">
          Button
        </Button>
        <Button color="light" variant="contained">
          Button
        </Button>
        <Button color="light" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="dark" variant="text">
          Button
        </Button>
        <Button color="dark" variant="outlined">
          Button
        </Button>
        <Button color="dark" variant="contained">
          Button
        </Button>
        <Button color="dark" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="primary" variant="text">
          Button
        </Button>
        <Button color="primary" variant="outlined">
          Button
        </Button>
        <Button color="primary" variant="contained">
          Button
        </Button>
        <Button color="primary" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="success" variant="text">
          Button
        </Button>
        <Button color="success" variant="outlined">
          Button
        </Button>
        <Button color="success" variant="contained">
          Button
        </Button>
        <Button color="success" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="info" variant="text">
          Button
        </Button>
        <Button color="info" variant="outlined">
          Button
        </Button>
        <Button color="info" variant="contained">
          Button
        </Button>
        <Button color="info" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="warning" variant="text">
          Button
        </Button>
        <Button color="warning" variant="outlined">
          Button
        </Button>
        <Button color="warning" variant="contained">
          Button
        </Button>
        <Button color="warning" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="danger" variant="text">
          Button
        </Button>
        <Button color="danger" variant="outlined">
          Button
        </Button>
        <Button color="danger" variant="contained">
          Button
        </Button>
        <Button color="danger" variant="subtle">
          Button
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing="9px"
        flexWrap="wrap"
        style={{ marginBottom: '9px' }}
      >
        <Button color="vip" variant="text">
          Button
        </Button>
        <Button color="vip" variant="outlined">
          Button
        </Button>
        <Button color="vip" variant="contained">
          Button
        </Button>
        <Button color="vip" variant="subtle">
          Button
        </Button>
      </Stack>
    </div>
  );
};
```

## 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="9px">
      <Button variant="text" disabled>
        文字禁用
      </Button>
      <Button disabled>描边禁用</Button>
      <Button variant="contained" disabled>
        填充禁用
      </Button>
    </Stack>
  );
};
```

## 按钮带图标

因为相比纯文本来说用户对图标更敏感，所以有些时候你可能希望为某些按钮设置图标，以增强应用程序的用户体验。例如，如果您有日期按钮，则可以使用日期图标对其进行标记。`startIcon` 位于子元素的前面，`endIcon` 位于子元素的后面。

```tsx
import React from 'react';
import { Button, Stack } from '@bifrostui/react';
import { CalendarOutlinedIcon, HeartFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="9px">
      <Button
        startIcon={
          <HeartFilledIcon htmlColor="linear-gradient(150deg, #FFFDFC 0%, #D5B198 100%)" />
        }
      >
        Heart
      </Button>
      <Button endIcon={<CalendarOutlinedIcon />}>Date</Button>
    </Stack>
  );
};
```

## API

| 属性      | 说明                 | 类型                                                                                    | 默认值     |
| --------- | -------------------- | --------------------------------------------------------------------------------------- | ---------- |
| variant   | 按钮类型             | `outlined` \| `text` \| `contained` \| `subtle`                                         | `outlined` |
| color     | 按钮颜色             | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `vip` \| `light` \| `dark` | `neutral`  |
| size      | 按钮大小             | `small` \| `medium` \| `large` \| `full`                                                | `medium`   |
| disabled  | 是否禁用             | boolean                                                                                 | false      |
| startIcon | 在子元素前放在的内容 | React.ReactNode                                                                         | -          |
| endIcon   | 在子元素后放在的内容 | React.ReactNode                                                                         | -          |
| openType  | 微信开放能力         | string                                                                                  | -          |
| onClick   | 点击按钮时的回调     | (event: MouseEvent) => void                                                             | -          |

其他属性见 [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)

## 样式变量

| 全局变量                      | 说明               | 默认值                                 |
| ----------------------------- | ------------------ | -------------------------------------- |
| --bui-btn-font-size           | 字体大小           | `var(--bui-text-size-3)`               |
| --bui-btn-font-weight         | 字体粗细           | `var(--bui-font-weight-medium)`        |
| --bui-btn-border-radius       | 边框圆角           | `120px`                                |
| --bui-btn-small-border-radius | 小尺寸按钮边框圆角 | `120px`                                |
| --bui-btn-large-border-radius | 大尺寸按钮边框圆角 | `120px`                                |
| --bui-btn-full-border-radius  | 全宽按钮边框圆角   | `120px`                                |
| --bui-btn-color               | 文字颜色           | `var(--bui-color-fg-muted)`            |
| --bui-btn-bg                  | 背景颜色           | `var(--bui-color-bg-view)`             |
| --bui-btn-border              | 边框样式           | `0`                                    |
| --bui-btn-height              | 按钮高度           | `27px`                                 |
| --bui-btn-small-height        | 小尺寸按钮高度     | `24px`                                 |
| --bui-btn-large-height        | 大尺寸按钮高度     | `33px`                                 |
| --bui-btn-full-height         | 全宽按钮高度       | `42px`                                 |
| --bui-btn-subtle-border       | 柔和按钮边框       | `0`                                    |
| --bui-btn-outlined-border     | 线框按钮边框       | `1px solid var(--bui-color-neutral-4)` |
| --bui-btn-disabled-opacity    | 禁用状态透明度     | `0.5`                                  |
| --bui-btn-small-padding       | 小尺寸按钮内边距   | `0 11px`                               |
| --bui-btn-padding             | 按钮内边距         | `0 14px`                               |
| --bui-btn-large-padding       | 大尺寸按钮内边距   | `0 14px`                               |
| --bui-btn-full-font-size      | 全宽按钮字体大小   | `var(--bui-title-size-4)`              |
| --bui-btn-full-font-family    | 全宽按钮字体族     | `var(--bui-font-family)`               |
