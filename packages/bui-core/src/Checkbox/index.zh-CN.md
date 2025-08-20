---
group: 基本输入
name: Checkbox 复选框
---

# Checkbox 复选框

复选框，在展示一系列选项时，为用户提供可选多项或取消已选项。

## 基本用法

通过 `checked` 和 `onChange` 控制状态。

```tsx
import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};
```

## 给内部 input 标签透传属性

通过 `inputProps` 传入的 input 属性可透传至内部`input`标签。

```tsx
import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        inputProps={{
          className: 'my-input',
        }}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};
```

## 内部 input 标签 name 和 value

`name` 和 `value` 可直接透传至内部`input`标签，不会被 `inputProps` 传入的同名属性覆盖。

```tsx
import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        name="myCheckbox"
        value="tpp"
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};
```

## 文案位置

通过 `labelPlacement` 可控制文案在复选框图标的位置。

```tsx
import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Checkbox
          labelPlacement="top"
          checked={checked1}
          onChange={(e, { checked }) => {
            setChecked1(checked);
          }}
        >
          文案在上边
        </Checkbox>
        <Checkbox
          labelPlacement="right"
          checked={checked2}
          onChange={(e, { checked }) => {
            setChecked2(checked);
          }}
        >
          文案在右边
        </Checkbox>
        <Checkbox
          labelPlacement="bottom"
          checked={checked3}
          onChange={(e, { checked }) => {
            setChecked3(checked);
          }}
        >
          文案在下边
        </Checkbox>
        <Checkbox
          labelPlacement="left"
          checked={checked4}
          onChange={(e, { checked }) => {
            setChecked4(checked);
          }}
        >
          文案在左边
        </Checkbox>
      </div>
    </Stack>
  );
};
```

## 自定义图标

通过 `icon` 可自定义为选中状态图标，`checkedIcon` 可自定义选中状态图标。

```tsx
import React, { useState } from 'react';
import { Checkbox, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        icon={<HeartOutlinedIcon htmlColor="#ccc" />}
        checkedIcon={<HeartFilledIcon color="primary" />}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};
```

## 禁用状态

使用`disabled`禁用组件，`CheckboxGroup.disabled` 可整组禁用。

```tsx
import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked] = useState(false);
  return (
    <Stack>
      <Checkbox checked={checked} disabled>
        Checkbox
      </Checkbox>
    </Stack>
  );
};
```

#### Checkbox 组

`CheckboxGroup` 和 `Checkbox` 组合，可实现复选框组，且此时的 `Checkbox` 应该传入 `value` 属性。

```tsx
import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState([]);
  const handleGroupChange = (e, data) => {
    console.log('handleGroupChange', e, data);
    setValue(data.value);
  };
  return (
    <Stack>
      <CheckboxGroup value={value} onChange={handleGroupChange}>
        <Checkbox value="水门桥">水门桥</Checkbox>
        <Checkbox value="淘票票">淘票票</Checkbox>
        <Checkbox value="喜洋洋">喜洋洋</Checkbox>
      </CheckboxGroup>
    </Stack>
  );
};
```

## 受控的 Checkbox

通过 `value` 控制 `CheckboxGroup` 组件，通过 `checked` 控制 `Checkbox` 组件。

```tsx
import { Button, Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(['水门桥', '淘票票', '喜洋洋']);
  const [checked, setChecked] = useState(true);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            const data = value.length ? [] : ['水门桥', '淘票票', '喜洋洋'];
            setValue(data);
          }}
        >
          {value.length ? 'Uncheck' : 'Check'} All
        </Button>
        <CheckboxGroup value={value}>
          <Checkbox value="水门桥">水门桥</Checkbox>
          <Checkbox value="淘票票">淘票票</Checkbox>
          <Checkbox value="喜洋洋">喜洋洋</Checkbox>
        </CheckboxGroup>
      </div>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? '取消' : '选中'}
        </Button>
        <Checkbox checked={checked}>淘票票</Checkbox>
      </div>
    </Stack>
  );
};
```

## 使用默认值

使用 `defaultValue` 指定 `CheckboxGroup` 组件默认值，使用 `defaultChecked` 指定 `Checkbox` 组件默认值。

```tsx
import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>CheckboxGroup：</div>
        <CheckboxGroup defaultValue={['水门桥', '淘票票', '喜洋洋']}>
          <Checkbox value="水门桥">水门桥</Checkbox>
          <Checkbox value="淘票票">淘票票</Checkbox>
          <Checkbox value="喜洋洋">喜洋洋</Checkbox>
        </CheckboxGroup>
      </div>

      <div>
        <div>Checkbox：</div>
        <Checkbox defaultChecked>淘票票</Checkbox>
      </div>
    </Stack>
  );
};
```

## API

### CheckboxGroup

| 属性         | 说明                               | 类型                                                      | 默认值 |
| ------------ | ---------------------------------- | --------------------------------------------------------- | ------ |
| defaultValue | 默认选中的选项，当组件非受控时使用 | string[]                                                  | -      |
| value        | 指定选中的选项，当组件受控时使用   | string[]                                                  | -      |
| disabled     | 整组是否禁用                       | boolean                                                   | false  |
| onChange     | 变化时的回调函数                   | (e: React.SyntheticEvent,data: {value: string[]}) => void | -      |

### Checkbox

| 属性           | 说明                                        | 类型                                                      | 默认值  |
| -------------- | ------------------------------------------- | --------------------------------------------------------- | ------- |
| defaultChecked | 默认是否选中，当组件非受控时使用            | boolean                                                   | false   |
| checked        | 是否选中，当组件受控时使用                  | boolean                                                   | false   |
| inputProps     | 内部`<input>`标签的标准属性                 | React.InputHTMLAttributes<HTMLInputElement\>              | -       |
| inputRef       | 内部`<input>`标签的 ref                     | React.Ref<HTMLInputElement\>                              | -       |
| name           | `<input>`名称标识                           | string                                                    | -       |
| value          | 组件的值，若使用 CheckboxGroup 应传入该属性 | string                                                    | -       |
| disabled       | 是否禁用                                    | boolean                                                   | false   |
| icon           | 未选中状态图标                              | ReactNode                                                 | -       |
| checkedIcon    | 选中状态图标                                | ReactNode                                                 | -       |
| labelPlacement | 文案位置                                    | `left` \| `top` \| `right` \| `bottom`                    | `right` |
| onChange       | 变化时的回调函数                            | (e: React.SyntheticEvent,data: {checked:boolean}) => void | -       |

## 样式变量

| 全局变量                        | 说明           | 默认值                        |
| ------------------------------- | -------------- | ----------------------------- |
| --bui-checkbox-label-color      | 标签文字颜色   | `var(--bui-color-fg-default)` |
| --bui-checkbox-label-font-size  | 标签文字大小   | `var(--bui-text-size-1)`      |
| --bui-checkbox-icon-font-size   | 图标大小       | `var(--bui-title-size-2)`     |
| --bui-checkbox-disabled-opacity | 禁用状态透明度 | `0.5`                         |
| --bui-checkbox-icon-padding     | 图标内边距     | `5px`                         |
