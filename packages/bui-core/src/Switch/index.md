---
group: 基本输入
name: Switch 开关
---

# Switch 开关

只需轻点按钮，用户就可以触发动作或做出选择。

## 代码演示

### 基础使用

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
| checked           | 是否选中                         | boolean                                                       | -         |
| defaultChecked    | 默认是否选中，当组件非受控时使用 | boolean                                                       | -         |
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

| 属性       | 说明     | 默认值 |
| ---------- | -------- | ------ |
| --bg-color | 背景颜色 | #ccc   |
