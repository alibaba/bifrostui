---
group: 基本输入
name: Select 下拉选择器
---

# Select 下拉选择器

Select 组件用于从选项列表收集用户提供的信息。
目前 Select 组件仅支持`单项选择`，更多功能敬请期待我们解锁。

## 代码演示

### 基础用法

通过组合`SelectOption`组件，达到下拉选择效果。

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### 占位符

支持通过`placeholder`配置选择框默认展示内容。

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select placeholder="下拉选择">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### 初始化默认值

支持通过 `defaultValue` 属性，初始选中值。

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### 受控/非受控

通过是否传入`value`来区分是否为受控组件:
受控情况业务通过 `onChange` 回调控制组件 value;
非受控情况可通过 `inputRef`获取组件 value;

```tsx
import { Alert, Button, Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const [curValue, setCurValue] = useState('');
  const selectRef = useRef(null);
  const [alert, setAlert] = useState(false);

  return (
    <>
      {alert && (
        <Alert color="success">{`选择器A值：${curValue || ''}; 选择器B值: ${
          selectRef.current.value
        }`}</Alert>
      )}
      <Stack
        spacing="20px"
        alignItems="stretch"
        style={{ background: '#eee', padding: '50px' }}
      >
        <Select
          placeholder="选择器A"
          value={curValue}
          onChange={(e, { value = '' }) => {
            setCurValue(value);
          }}
        >
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Select placeholder="选择器B" inputRef={selectRef}>
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Button
          onClick={(e) => {
            setAlert(true);
            setTimeout(() => {
              setAlert(false);
            }, 1000);
          }}
        >
          提交
        </Button>
      </Stack>
    </>
  );
};
```

### 禁用

提供 `disabled` 属性来禁止用户操作。
您可以通过在`Select`上设置`disabled` 全部禁止操作，也可以在`SelectOption`上设置`disabled`对某个选项禁止操作。

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack
      spacing="20px"
      alignItems="stretch"
      style={{ background: '#eee', padding: '50px' }}
    >
      <Select disabled placeholder="禁用">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
      <Select defaultValue={1}>
        {options.map((item, index) => (
          <SelectOption
            key={index}
            value={item.value}
            label={item.label}
            disabled={index === 2}
          />
        ))}
      </Select>
    </Stack>
  );
};
```

### 受控展开/收起

通过受控open属性来控制选择器展开/收起

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select open={open} onOpen={handleOpen} onClose={handleClose}>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### 定制图标

提供自定义图标能力，可以通过`icon`属性来定制图标。

```tsx
import React from 'react';
import { Select, SelectOption, Stack } from '@bifrostui/react';
import { ArrowDownwardIcon } from '@bifrostui/icons';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select icon={<ArrowDownwardIcon />} placeholder="自定义图标">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

#### 定制选项展示内容

当您不想使用`label`做为选项`SelectOptions`展示内容时，可通过`children`来定制选项展示内容。

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((option, index) => {
          const { value, label } = option;

          return (
            <SelectOption value={value} label={label} key={index}>
              选项 - {label}
            </SelectOption>
          );
        })}
      </Select>
    </Stack>
  );
};
```

### 定制选择器展示结果

`label`支持 `ReactNode`类型，当您想定制选择器`Select`展示内容，可以通过`SelectOption`组件属性：`label`与`children`，两者配合使用实现定制化。

```tsx
import React from 'react';
import { Select, SelectOption, Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((option, index) => {
          const { value, label } = option;
          const customLabel = (
            <Stack direction="row" spacing="10px">
              <SettingsOutlinedIcon />
              {label}
            </Stack>
          );

          return (
            <SelectOption label={customLabel} value={value} key={index}>
              选项-{label}
            </SelectOption>
          );
        })}
      </Select>
    </Stack>
  );
};
```

### 事件

Select 组件除了提供基础的`onChange`回调，还提供选项`展开`、`折叠`时的事件回调。

```tsx
import { Alert, Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const [curValue, setCurValue] = useState('初始化');

  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Alert color="info">当前状态：{curValue}</Alert>
      <Select
        onOpen={() => {
          setCurValue('打开下拉选择器');
        }}
        onClose={() => {
          setCurValue('关闭下拉选择器');
        }}
        placeholder="下拉选择"
      >
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### 指定滚动父容器

通过scrollContainer指定滚动父容器，默认是() => document.body
指定后，下拉框的展示方向会自动根据滚动父容器进行计算

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useRef } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const ref = useRef();

  return (
    <Stack
      ref={ref}
      alignItems="stretch"
      style={{
        display: 'block',
        height: '300px',
        padding: '50px',
        background: '#eee',
        overflowY: 'scroll',
      }}
    >
      <div style={{ height: '150px' }}></div>
      <Select scrollContainer={() => ref.current}>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
      <div style={{ height: '500px' }}></div>
    </Stack>
  );
};
```

### API

##### SelectProps

| 属性          | 说明                            | 类型                                            | 默认值 |
| ------------- | ------------------------------- | ----------------------------------------------- | ------ |
| inputRef      | 选择器 inputRef                 | Ref                                             | -      |
| inputProps    | 选择器 `<input/>` 标签透传属性  | React.InputHTMLAttributes                       | -      |
| BackdropProps | 蒙层 `<Backdrop/>` 标签透传属性 | React.DivHTMLAttributes                         | -      |
| name          | 选择器 `<input/>` 标签名称标识  | string                                          | -      |
| value         | 选择器选中值                    | string ｜ number                                | -      |
| defaultValue  | 选择器默认值                    | string ｜ number                                | -      |
| placeholder   | 选择器占位内容                  | ReactNode                                       | -      |
| icon          | 选择器图标                      | ReactNode                                       | -      |
| disabled      | 选择器是否不可点击              | boolean                                         | false  |
| open          | 选择器下拉选项是否打开          | boolean                                         | false  |
| onChange      | 选中某一项时的回调              | (e:SyntheticEvent, data:{value:string}) => void | -      |
| onOpen        | 展开下拉框时的回调              | () => void                                      | -      |
| onClose       | 折叠下拉框时的回调              | () => void                                      | -      |

##### SelectOptionProps

| 属性     | 说明         | 类型             | 默认值 |
| -------- | ------------ | ---------------- | ------ |
| label    | 选项回填内容 | ReactNode        | -      |
| value    | 选项值       | string ｜ number | -      |
| disabled | 选项可点击态 | boolean          | false  |

### 样式变量

| 属性                          | 说明                 | 默认值                  | 全局变量                              |
| ----------------------------- | -------------------- | ----------------------- | ------------------------------------- |
| --height                      | 选择器高度           | 27px                    | --bui-select-height                   |
| --mini-width                  | 选择器最小宽度       | 100px                   | --bui-select-mini-width               |
| --font-size                   | 选择器字体大小       | var(--bui-title-size-3) | --bui-select-font-size                |
| --padding                     | 选择器内边距         | 100px                   | --bui-select-mini-width               |
| --option-container-padding    | 下拉框整体内边距     | 3px 0                   | --bui-select-option-container-padding |
| --option-container-margin-top | 下拉框整体顶部外边距 | 6px                     | --bui-select-option-margin-top        |
| --option-padding              | 下拉框单个选项内边距 | 0 14px                  | --bui-select-option-padding           |
| --option-margin               | 下拉框单个选项外边距 | 0 3px                   | --bui-select-option-margin            |
| --option-height               | 下拉框单个选项高度   | 27px                    | --bui-select-option-height            |
