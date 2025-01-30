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

## 基础按钮

按钮支持 `文字按钮`、`描边按钮`、`填充按钮`、`浅亮按钮` 四种展示形态，默认是描边按钮。

`文字按钮`: 直接使用文字作为按钮。是视觉吸引力最弱的一个按钮，通常出现在表格操作栏、标题和字段旁等。

`填充按钮`: 一般用于主按钮，是用户在整个页面需要关注优先级最高的操作，引导用户关注并操作。

`描边按钮`: 常见白底加文字的形式，在视觉强调程度上弱于填充按钮，通常与填充按钮搭配成组使用

`浅亮按钮`: 浅亮状态的文字为按钮背景颜色，背景则为对应的浅色。

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Button color="primary" variant="text">
        文字按钮
      </Button>
      <Button color="primary">描边按钮</Button>
      <Button color="primary" variant="contained">
        填充按钮
      </Button>
      <Button color="primary" variant="light">
        浅亮按钮
      </Button>
    </Stack>
  );
};
```

## 按钮大小

按钮有大、中、小三种尺寸。

通过设置 `size` 为 large small full 分别把按钮设为大、小、通栏尺寸。若不设置 `size`，则尺寸为中等尺寸。

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="8px">
      <Stack direction="row" spacing="8px" style={{ width: '350px' }}>
        <Button size="small">小号按钮</Button>
        <Button size="medium">中号按钮</Button>
        <Button size="large">大号按钮</Button>
      </Stack>
      <Button size="full" style={{ width: '350px' }}>
        通栏按钮
      </Button>
      <Stack direction="row" spacing="8px" style={{ width: '350px' }}>
        <Button size="small" variant="contained" color="primary">
          小号按钮
        </Button>
        <Button size="medium" variant="contained" color="primary">
          中号按钮
        </Button>
        <Button size="large" variant="contained" color="primary">
          大号按钮
        </Button>
      </Stack>
      <Button
        size="full"
        variant="contained"
        color="primary"
        style={{ width: '350px' }}
      >
        通栏按钮
      </Button>
    </Stack>
  );
};
```

## 按钮色彩

按钮支持 `primary`、`success`、`info`、`warning`、`danger`、 `vip` 主题定义。若不设置color，则默认为`default`

```tsx
import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Button variant="contained">取消</Button>
      <Button color="primary" variant="contained">
        购票
      </Button>
      <Button color="success" variant="contained">
        影城
      </Button>
      <Button color="info" variant="contained">
        电影
      </Button>
      <Button color="warning" variant="contained">
        想看
      </Button>
      <Button color="danger" variant="contained">
        特惠
      </Button>
      <Button color="vip" variant="contained">
        会员
      </Button>
    </Stack>
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
    <Stack direction="row" spacing="8px">
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

因为相比纯文本来说用户对图标更敏感，所以有些时候你可能希望为某些按钮设置图标，以增强应用程序的用户体验。 例如，如果您有日期按钮，则可以使用日期图标对其进行标记。`startIcon` 位于子元素的前面，`endIcon` 位于子元素的后面。

```tsx
import React from 'react';
import { Button, Stack } from '@bifrostui/react';
import { CalendarOutlinedIcon, HeartFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
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

| 属性      | 说明                 | 类型                                                                            | 默认值     |
| --------- | -------------------- | ------------------------------------------------------------------------------- | ---------- |
| variant   | 按钮类型             | `outlined` \| `text` \| `contained` \| `light`                                  | `outlined` |
| color     | 按钮颜色             | `primary` \| `info` \| `success` \| `warning` \| `danger` \| `vip` \| `default` | `default`  |
| size      | 按钮大小             | `small` \| `medium` \| `large` \| `full`                                        | `medium`   |
| disabled  | 是否禁用             | boolean                                                                         | false      |
| startIcon | 在子元素前放在的内容 | React.ReactNode                                                                 | -          |
| endIcon   | 在子元素后放在的内容 | React.ReactNode                                                                 | -          |
| openType  | 微信开放能力         | string                                                                          | -          |
| onClick   | 点击按钮时的回调     | (event: MouseEvent) => void                                                     | -          |

其他属性见 [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes)

## 样式变量

| 属性                      | 说明                                    | 默认值                          | 全局变量                             |
| ------------------------- | --------------------------------------- | ------------------------------- | ------------------------------------ |
| --border-radius           | 圆角大小                                | 100px                           | --bui-button-border-radius           |
| --bg-color                | 背景颜色                                | --bui-color-neutral-5           | --bui-button-default-bg-color        |
| --text-color              | 按钮默认字体颜色                        | --bui-color-fg-muted            | --bui-button-text-color              |
| --default-border          | 默认边框，包含text和contained按钮的边框 | 1px solid transparent           | --bui-button-default-border          |
| --light-border            | light按钮的边框                         | 1px solid transparent           | --bui-button-light-border            |
| --outlined-default-border | outlined按钮的默认边框                  | 1px solid --bui-color-neutral-4 | --bui-button-outlined-default-border |
| --height                  | 按钮默认高度                            | 27px                            | --bui-button-height                  |
| --font-weight             | 按钮字重                                | --bui-font-weight-medium        | --bui-button-font-weight             |
| --icon-start-margin-right | 前置标签右边距                          | --bui-spacing-xs                | --bui-button-icon-start-margin-right |
| --icon-end-margin-left    | 前置标签左边距                          | --bui-spacing-xs                | --bui-button-icon-end-margin-left    |
| --disabled-opacity        | 禁用状态透明度                          | 0.5                             | --bui-button-disabled-opacity        |
| --small-padding           | 小按钮内边距                            | 0 11px                          | --bui-button-small-padding           |
| --small-height            | 小按钮高度                              | 24px                            | --bui-button-small-height            |
| --medium-padding          | 中按钮内边距                            | 0 14px                          | --bui-button-medium-padding          |
| --large-padding           | 大按钮内边距                            | 0 14px                          | --bui-button-large-padding           |
| --large-height            | 大按钮高度                              | 33px                            | --bui-button-large-height            |
| --full-font-size          | 满屏按钮字号                            | --bui-title-size-4              | --bui-button-full-font-size          |
| --full-height             | 满屏按钮高度                            | 42px                            | --bui-button-full-height             |
