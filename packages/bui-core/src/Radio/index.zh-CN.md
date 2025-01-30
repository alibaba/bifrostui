---
group: 基本输入
name: Radio 单选框
---

# Radio 单选框

单选框，使用户能够从一组选项中选择一个选项。

## 基本用法

通过 `checked` 和 `onChange` 控制状态。

```tsx
import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
      >
        Radio
      </Radio>
    </Stack>
  );
};
```

## 给内部 input 标签透传属性

通过 `inputProps` 传入的 input 属性可透传至内部`input`标签。

```tsx
import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        inputProps={{
          className: 'my-input',
        }}
      >
        Radio
      </Radio>
    </Stack>
  );
};
```

## 内部 input 标签 name 和 value

`name` 和 `value` 可直接透传至内部`input`标签，不会被 `inputProps` 传入的同名属性覆盖。

```tsx
import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        name="myRadio"
        value="tpp"
      >
        Radio
      </Radio>
    </Stack>
  );
};
```

## 文案位置

通过 `labelPlacement` 可控制文案在复选框图标的位置。

```tsx
import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Radio
          labelPlacement="top"
          checked={checked1}
          onChange={(e, { checked }) => {
            setChecked1(checked);
          }}
        >
          文案在上边
        </Radio>
        <Radio
          labelPlacement="right"
          checked={checked2}
          onChange={(e, { checked }) => {
            setChecked2(checked);
          }}
        >
          文案在右边
        </Radio>
        <Radio
          labelPlacement="bottom"
          checked={checked3}
          onChange={(e, { checked }) => {
            setChecked3(checked);
          }}
        >
          文案在下边
        </Radio>
        <Radio
          labelPlacement="left"
          checked={checked4}
          onChange={(e, { checked }) => {
            setChecked4(checked);
          }}
        >
          文案在左边
        </Radio>
      </div>
    </Stack>
  );
};
```

## 自定义图标

通过 `icon` 可自定义为选中状态图标，`checkedIcon` 可自定义选中状态图标。

```tsx
import React, { useState } from 'react';
import { Radio, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        icon={<HeartOutlinedIcon htmlColor="#ccc" />}
        checkedIcon={<HeartFilledIcon color="primary" />}
      >
        Radio
      </Radio>
    </Stack>
  );
};
```

## 禁用状态

使用`disabled`禁用组件，`RadioGroup.disabled` 可整组禁用。

```tsx
import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked] = useState(false);
  return (
    <Stack>
      <Radio checked={checked} disabled>
        Radio
      </Radio>
    </Stack>
  );
};
```

## Radio 组

`RadioGroup` 和 `Radio` 组合，可实现复选框组，且此时的 `Radio` 应该传入 `value` 属性。

```tsx
import { Radio, RadioGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');
  const handleGroupChange = (e, data) => {
    console.log('handleGroupChange', e, data);
    setValue(data.value);
  };
  return (
    <Stack>
      <RadioGroup value={value} onChange={handleGroupChange}>
        <Radio value="水门桥">水门桥</Radio>
        <Radio value="淘票票">淘票票</Radio>
        <Radio value="喜洋洋">喜洋洋</Radio>
      </RadioGroup>
    </Stack>
  );
};
```

## 受控的 Radio

通过 `value` 控制 `RadioGroup` 组件，通过 `checked` 控制 `Radio` 组件。

```tsx
import { Button, Radio, RadioGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('淘票票');
  const [checked, setChecked] = useState(true);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            const data = value ? '' : '淘票票';
            setValue(data);
          }}
        >
          {value.length ? '取消' : '选择'} 淘票票
        </Button>
        <RadioGroup value={value}>
          <Radio value="水门桥">水门桥</Radio>
          <Radio value="淘票票">淘票票</Radio>
          <Radio value="喜洋洋">喜洋洋</Radio>
        </RadioGroup>
      </div>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? '取消' : '选中'}
        </Button>
        <Radio checked={checked}>淘票票</Radio>
      </div>
    </Stack>
  );
};
```

## 使用默认值

使用 `defaultValue` 指定 `RadioGroup` 组件默认值，使用 `defaultChecked` 指定 `Radio` 组件默认值。

```tsx
import { Radio, RadioGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>RadioGroup：</div>
        <RadioGroup defaultValue="淘票票">
          <Radio value="水门桥">水门桥</Radio>
          <Radio value="淘票票">淘票票</Radio>
          <Radio value="喜洋洋">喜洋洋</Radio>
        </RadioGroup>
      </div>

      <div>
        <div>Radio：</div>
        <Radio defaultChecked>淘票票</Radio>
      </div>
    </Stack>
  );
};
```

## API

### RadioGroup

| 属性         | 说明                               | 类型                                                    | 默认值 |
| ------------ | ---------------------------------- | ------------------------------------------------------- | ------ |
| defaultValue | 默认选中的选项，当组件非受控时使用 | string                                                  | -      |
| value        | 指定选中的选项，当组件受控时使用   | string                                                  | -      |
| disabled     | 整组是否禁用                       | boolean                                                 | false  |
| onChange     | 变化时的回调函数                   | (e: React.SyntheticEvent,data: {value: string}) => void | -      |

### Radio

| 属性           | 说明                                     | 类型                                                       | 默认值  |
| -------------- | ---------------------------------------- | ---------------------------------------------------------- | ------- |
| defaultChecked | 默认是否选中，当组件非受控时使用         | boolean                                                    | -       |
| checked        | 是否选中，当组件受控时使用               | boolean                                                    | -       |
| inputProps     | 内部`<input>`标签的标准属性              | React.InputHTMLAttributes<HTMLInputElement\>               | -       |
| inputRef       | 内部`<input>`标签的 ref                  | React.Ref<HTMLInputElement\>                               | -       |
| name           | `<input>`名称标识                        | string                                                     | -       |
| value          | 组件的值，若使用 RadioGroup 应传入该属性 | string                                                     | -       |
| disabled       | 是否禁用                                 | boolean                                                    | false   |
| icon           | 未选中状态图标                           | ReactNode                                                  | -       |
| checkedIcon    | 选中状态图标                             | ReactNode                                                  | -       |
| labelPlacement | 文案位置                                 | `left` \| `top` \| `right` \| `bottom`                     | `right` |
| onChange       | 变化时的回调函数                         | (e: React.SyntheticEvent,data: {checked: boolean}) => void | -       |

## 样式变量

| 属性              | 说明         | 默认值                   | 全局变量                   |
| ----------------- | ------------ | ------------------------ | -------------------------- |
| --label-color     | 文案字体颜色 | --bui-color-fg-default   | --bui-radio-label-color    |
| --label-font-size | 文案字体大小 | --bui-text-size-1        | -bui-radio-label-font-size |
| --icon-font-size  | 图标字体大小 | --bui-title-size-2       | --bui-radio-icon-font-size |
| --icon-padding    | 图标内边距   | --bui-radio-icon-padding | 5px                        |
