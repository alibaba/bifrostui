---
group: 基本输入
name: Input 输入框
---

# Input 输入框

用户输入内容，是对基础输入框的封装。

## 代码演示

### 基本用法

支持`input`标签的基础属性透传，若要透传的属性不在该文档中，放入`inputProps`字段中才会透传至内部`input`标签。

```tsx
import { Input } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };

  return (
    <Input value={value} placeholder="请填写内容" onChange={handleChange} />
  );
};
```

### 开始图标

通过 `startIcon` 可以自定义开始图标。

```tsx
import React, { useState } from 'react';
import { Input } from '@bifrostui/react';
import { SearchOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };
  return (
    <Input
      value={value}
      placeholder="请填写内容"
      startIcon={<SearchOutlinedIcon htmlColor="#959aa5" />}
      onChange={handleChange}
    />
  );
};
```

### 结束图标

通过 `endIcon` 可以自定义结束图标。

```tsx
import React, { useState } from 'react';
import { Input } from '@bifrostui/react';
import { SearchOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };
  return (
    <Input
      value={value}
      placeholder="请填写内容"
      endIcon={<SearchOutlinedIcon htmlColor="#959aa5" />}
      onChange={handleChange}
    />
  );
};
```

### 清除按钮

启用 `clearable` 后，当输入框有输入内容且聚焦状态下会展示清除按钮，非受控状态也会清除输入框内容。

```tsx
import { Input } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };

  const handleClear = (e) => {
    console.log('clear:', e);
  };

  return (
    <>
      <Input
        value={value}
        clearable
        onClear={handleClear}
        placeholder="请填写内容"
        onChange={handleChange}
      />
      <div style={{ margin: '20px 0 10px' }}>非受控也会清空输入框：</div>
      <Input clearable defaultValue="会清空内容" />
    </>
  );
};
```

### 禁用状态

使用 `disabled` 可禁用输入框。

```tsx
import { Input } from '@bifrostui/react';
import React from 'react';

export default () => {
  return <Input disabled placeholder="请填写内容" />;
};
```

### 受控/非受控

根据是否传入 `value` 来判断是否为受控组件，非受控组件可通过 `inputRef` 获取元素来控制 `input` 的 value。

```tsx
import { Button, Input } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [value, setValue] = useState('0');
  const [defaultValue, setDefaultValue] = useState('100');
  const reduceRef = useRef(null);

  const addTen = () => {
    setValue((prev) => `${Number(prev) + 10}`);
  };

  const reduceTen = () => {
    setDefaultValue((prev) => `${Number(prev) - 10}`);
  };

  const multiplyTwo = () => {
    const input = reduceRef.current;
    input.value = Number(input.value) * 2;
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '40px',
        }}
      >
        受控组件：
        <Button onClick={addTen}>数量加10</Button>
        <br />
        <Input value={value} onChange={(e, data) => setValue(data.value)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        非受控组件：
        <br />
        <Button onClick={reduceTen}>数量减10(操作defaultValue无效)</Button>
        <br />
        <Button onClick={multiplyTwo}>数量乘2(通过DOM操作value有效)</Button>
        <br />
        <Input inputRef={reduceRef} defaultValue={defaultValue} />
      </div>
    </div>
  );
};
```

### 指定 type 类型

H5：通过 `type` 可指定输入框类型，`type` 的值应为标准 [HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)

小程序：`type` 值在不同渠道实现有所不同，可参考[小程序 input type](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)

```tsx
import { Input } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };
  return (
    <Input
      type="number"
      placeholder="number类型"
      value={value}
      onChange={handleChange}
    />
  );
};
```

## API

| 属性         | 说明                                                                        | 类型                                                                   | 默认值 |
| ------------ | --------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------ |
| defaultValue | 输入框默认内容，当组件非受控时使用                                          | string                                                                 | -      |
| value        | 输入框内容，当组件受控时使用                                                | string                                                                 | -      |
| inputProps   | 内部`<input>`标签的标准属性                                                 | React.InputHTMLAttributes<HTMLInputElement\>                           | -      |
| inputRef     | 内部`<input>`标签的 ref                                                     | React.Ref<HTMLInputElement\>                                           | -      |
| name         | `<input>`名称标识                                                           | string                                                                 | -      |
| type         | `<input>`类型标识，应该为有效的 HTML5 input type 值 或 小程序支持的 type 值 | string                                                                 | text   |
| clearable    | 是否展示清除图标，点击清除图标后会清空输入框                                | boolean                                                                | false  |
| startIcon    | 带图标的 input，设置前置图标                                                | ReactNode                                                              | -      |
| endIcon      | 带图标的 input，设置后置图标，若 clearable=true，则两个图标都会展示         | ReactNode                                                              | -      |
| placeholder  | 占位内容                                                                    | string                                                                 | -      |
| disabled     | 是否禁用                                                                    | boolean                                                                | false  |
| onClear      | 点击清除图标的回调，非受控状态也会清除输入框内容                            | (e: React.SyntheticEvent) => void                                      | -      |
| onChange     | 输入框内容变化时的回调                                                      | (e: React.ChangeEvent<HTMLInputElement\>,data: {value:string}) => void | -      |
| onFocus      | 聚焦时的回调                                                                | (e: React.SyntheticEvent) => void                                      | -      |
| onBlur       | 失焦时的回调                                                                | (e: React.SyntheticEvent) => void                                      | -      |

## 样式变量

| 属性                        | 说明           | 默认值                     | 全局变量                              |
| --------------------------- | -------------- | -------------------------- | ------------------------------------- |
| --height                    | 高度           | 32px                       | --bui-input-height                    |
| --padding                   | 内边距         | 4px 10px                   | --bui-input-padding                   |
| --border-radius             | 圆角           | --bui-shape-radius-default | --bui-input-border-radius             |
| --icon-start-margin-right   | 头部按钮右边距 | 3px                        | --bui-input-icon-start-margin-right   |
| --icon-end-margin-left      | 尾部按钮左边距 | 3px                        | --bui-input-icon-end-margin-left      |
| --background-color          | 背景色         | transparent                | --bui-input-background-color          |
| --disabled-background-color | 禁用状态背景色 | rgba(0, 0, 0, 0.04)        | --bui-input-disabled-background-color |
