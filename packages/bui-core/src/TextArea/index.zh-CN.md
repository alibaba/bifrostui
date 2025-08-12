---
group: 基本输入
name: TextArea 文本框
---

# TextArea 文本框

文本输入框，用于输入较长内容时使用。

## 基本用法

支持`textarea`标签的基础属性透传，若要透传的属性不在该文档中，放入`textareaProps`字段中才会透传至内部`textarea`标签。

```tsx
import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };

  return (
    <Stack alignItems="stretch">
      <TextArea value={value} placeholder="默认" onChange={handleChange} />
    </Stack>
  );
};
```

### 显示文字个数

`showCount`会控制展示输入的字数，一般可搭配`maxLength`使用。

```tsx
import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="最多输入10个字"
        onChange={(e, data) => setValue(data?.value)}
        maxLength={10}
        showCount
      />
    </Stack>
  );
};
```

### 受控/非受控

根据是否传入 `value` 来判断是否为受控组件，非受控组件可通过 `textareaRef` 获取元素来控制 `textarea` 的 value。

```tsx
import { Button, Stack, TextArea } from '@bifrostui/react';
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
    const textarea = reduceRef.current;
    textarea.value = Number(textarea.value) * 2;
  };

  return (
    <Stack alignItems="stretch">
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
        <TextArea value={value} onChange={(e, data) => setValue(data.value)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        非受控组件：
        <br />
        <Button onClick={reduceTen}>数量减10(操作defaultValue无效)</Button>
        <br />
        <Button onClick={multiplyTwo}>数量乘2(通过DOM操作value有效)</Button>
        <br />
        <TextArea textareaRef={reduceRef} defaultValue={defaultValue} />
      </div>
    </Stack>
  );
};
```

### 自动聚焦

通过 `autoFocus` 字段控制是否自动聚焦。

```tsx
import { Stack, TextArea, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('123');
  const [autoFocus, setAutoFocus] = useState(false);

  return (
    <Stack alignItems="stretch">
      <Button
        onClick={() => {
          setAutoFocus(!autoFocus);
        }}
      >
        {autoFocus ? '失' : '聚'}焦
      </Button>
      <TextArea
        value={value}
        autoFocus={autoFocus}
        onChange={(e, data) => setValue(data?.value)}
      />
    </Stack>
  );
};
```

### 自动撑高

通过 `autoSize` 字段控制是否自动撑高，该字段传入 `boolean` 时不限制高度大小，传入 `object` 时可控制高度大小，超出最大值可滚动。该功能不支持支付宝小程序。

```tsx
import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="文案过多会自动撑高"
        onChange={(e, data) => setValue(data?.value)}
        autoSize={{ minHeight: 50, maxHeight: 100 }}
      />
    </Stack>
  );
};
```

## API

|     属性      |                                          说明                                          |                                    类型                                    | 默认值 |
| :-----------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------: | :----: |
|     value     |                                 输入框内容，受控时使用                                 |                                   string                                   |   -    |
| defaultValue  |                              默认输入框内容，非受控时使用                              |                                   string                                   |   -    |
| textareaProps |                             内部`<textarea>`标签的标准属性                             |                TextareaHTMLAttributes<HTMLTextAreaElement\>                |   -    |
|  textareaRef  |                               内部`<textarea>`标签的 ref                               |                      React.Ref<HTMLTextAreaElement\>                       |   -    |
|     name      |                                内部`<textarea>`名称标识                                |                                   string                                   |   -    |
|  placeholder  |                                        占位内容                                        |                                   string                                   |   -    |
|   disabled    |                                        是否禁用                                        |                                  boolean                                   | false  |
|     rows      |                                       文本框行数                                       |                                   number                                   |   2    |
|   maxLength   |                                      内容最大长度                                      |                                   number                                   |   -    |
|   autoSize    | 自适应内容高度，可设置为 true \| false 或对象：{minHeight?: number;maxHeight?: number} |                                  boolean                                   | false  |
|   autoFocus   |                                      是否自动聚焦                                      |                                  boolean                                   | false  |
|   showCount   |                                        展示字数                                        |                                  boolean                                   | false  |
|   onChange    |                                 文本框内容变化时的回调                                 | (e: React.ChangeEvent<HTMLTextAreaElement\>,data: {value: string}) => void |   -    |

## 样式变量

| 变量名                                 | 说明           | 默认值                                                              |
| -------------------------------------- | -------------- | ------------------------------------------------------------------- |
| --bui-textarea-border-radius           | 文本域圆角     | `var(--bui-shape-radius-label)`                                     |
| --bui-textarea-width                   | 文本域宽度     | `100%`                                                              |
| --bui-textarea-background-color        | 背景颜色       | `var(--bui-color-bg-default)`                                       |
| --bui-textarea-text-color              | 文字颜色       | `var(--bui-color-fg-subtle)`                                        |
| --bui-textarea-count-background-color  | 计数器背景色   | `var(--bui-textarea-background-color, var(--bui-color-bg-default))` |
| --bui-textarea-count-color             | 计数器文字颜色 | `var(--bui-color-fg-subtle)`                                        |
| --bui-textarea-text-font-size          | 文字大小       | `var(--bui-text-size-2)`                                            |
| --bui-textarea-count-font-size         | 计数器字体大小 | `var(--bui-title-size-3)`                                           |
| --bui-textarea-padding                 | 内边距         | `8px`                                                               |
| --bui-textarea-count-padding           | 计数器内边距   | `0 4px`                                                             |
| --bui-textarea-placeholder-color       | 占位符颜色     | `#ced1d6`                                                           |
| --bui-textarea-placeholder-line-height | 占位符行高     | `1.3`                                                               |
