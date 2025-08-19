---
group: 基本输入
name: Switch 开关
---

# Switch 开关

只需轻点按钮，用户就可以触发动作或做出选择。

## 基础使用

`Switch`基础用法。Switch 默认颜色为`primary`，默认大小为`medium`。

```tsx
import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack>
      <Switch />
    </Stack>
  );
};
```

### 有默认值

### 色彩

`Switch`组件提供了 5 种主题颜色：`primary`、`info`、`success`、`warning`、`danger`，可通过`color`来设置组件主题色。`color`属性默认值`primary`。

```tsx
import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack spacing="5px">
      <Switch color="primary" defaultChecked />
      <Switch color="info" defaultChecked />
      <Switch color="success" defaultChecked />
      <Switch color="warning" defaultChecked />
      <Switch color="danger" defaultChecked />
    </Stack>
  );
};
```

### 大小

可通过`size`来规定组件大小，可选值有`small`、`medium`、`large`。默认为`medium`。

```tsx
import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Switch size="small" />
      <Switch size="medium" />
      <Switch size="large" />
    </Stack>
  );
};
```

### 带有文字和图标

通过`checkedChildren`和`unCheckedChildren`来自定义状态文字或图标。

```tsx
import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
import { MoonOutlinedIcon, SunOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Switch defaultChecked checkedChildren="开" unCheckedChildren="关" />
      <Switch
        defaultChecked
        checkedChildren={<MoonOutlinedIcon htmlColor="#fff" />}
        unCheckedChildren={<SunOutlinedIcon htmlColor="#fff" />}
      />
      <Switch
        defaultChecked
        checkedChildren={<MoonOutlinedIcon htmlColor="#fff" />}
        unCheckedChildren={<SunOutlinedIcon htmlColor="#fff" />}
        size="large"
      />
    </Stack>
  );
};
```

### 受控使用

通过`checked` 和 `onChange` 自定义组件选中状态。

```tsx
import React, { useState } from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (e, data) => {
    setChecked(data?.checked);
    console.log('onChange', data);
  };
  return (
    <Stack>
      <Switch checked={checked} onChange={handleChange} />
    </Stack>
  );
};
```

### 给内部 input 标签透传属性

通过`inputProps`传入的 input 属性可透传至内部`input`标签。

```tsx
import React, { useState } from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (e, data) => {
    setChecked(data?.checked);
    console.log('onChange', data);
  };
  return (
    <Stack>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ className: 'my-input' }}
      />
    </Stack>
  );
};
```

### 不可用状态

通过`disabled`指定 `Switch`为禁用状态。

```tsx
import React from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="5px">
      <Switch disabled />
      <Switch defaultChecked disabled />
    </Stack>
  );
};
```

## API

| 属性              | 说明                             | 类型                                                          | 默认值    |
| ----------------- | -------------------------------- | ------------------------------------------------------------- | --------- |
| checked           | 是否选中                         | boolean                                                       | false     |
| defaultChecked    | 默认是否选中，当组件非受控时使用 | boolean                                                       | false     |
| inputRef          | 内部`<input>`标签的 ref          | React.Ref<HTMLInputElement\>                                  | -         |
| inputProps        | 内部`<input>`标签的标准属性      | React.InputHTMLAttributes<HTMLInputElement\>                  | -         |
| name              | 内部`<input>`名称标识            | string                                                        | -         |
| checkedChildren   | 选中时的内容                     | ReactNode                                                     | -         |
| unCheckedChildren | 选未中时的内容                   | ReactNode                                                     | -         |
| disabled          | 是否禁用                         | boolean                                                       | false     |
| size              | 大小                             | `small` \| `medium` \| `large`                                | `medium`  |
| color             | 颜色                             | `info` \| `primary` \| `success` \| `warning` \| `danger`     | `primary` |
| onChange          | 变化时的回调函数                 | (e: React.SyntheticEvent,data: { checked: boolean;},) => void | -         |

其他属性见 [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)

## 样式变量

| 变量名                               | 说明                   | 默认值                   |
| ------------------------------------ | ---------------------- | ------------------------ |
| --bui-switch-bg-color                | 背景颜色               | `#ccc`                   |
| --bui-switch-padding                 | 内边距                 | `0`                      |
| --bui-switch-border-radius           | 边框圆角               | `15px`                   |
| --bui-switch-small-width             | 小尺寸宽度             | `24px`                   |
| --bui-switch-small-height            | 小尺寸高度             | `16px`                   |
| --bui-switch-small-font-size         | 小尺寸字体大小         | `9px`                    |
| --bui-switch-controller-small-width  | 小尺寸控制器宽度       | `12px`                   |
| --bui-switch-controller-small-height | 小尺寸控制器高度       | `12px`                   |
| --bui-switch-width                   | 中尺寸宽度             | `44px`                   |
| --bui-switch-height                  | 中尺寸高度             | `22px`                   |
| --bui-switch-font-size               | 中尺寸字体大小         | `var(--bui-text-size-3)` |
| --bui-switch-controller-width        | 中尺寸控制器宽度       | `18px`                   |
| --bui-switch-controller-height       | 中尺寸控制器高度       | `18px`                   |
| --bui-switch-checked-controller-left | 选中状态控制器左侧位置 | `calc(100% - 20px)`      |
| --bui-switch-controller-left         | 控制器左侧位置         | `2px`                    |
| --bui-switch-large-width             | 大尺寸宽度             | `51px`                   |
| --bui-switch-large-height            | 大尺寸高度             | `30px`                   |
| --bui-switch-large-font-size         | 大尺寸字体大小         | `var(--bui-text-size-3)` |
| --bui-switch-controller-large-width  | 大尺寸控制器宽度       | `24px`                   |
| --bui-switch-controller-large-height | 大尺寸控制器高度       | `24px`                   |
