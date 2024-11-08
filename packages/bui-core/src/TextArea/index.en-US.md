---
group: Basic input
name: TextArea Text Box
---

# TextArea Text Box

Text input box, used for inputting longer content.

## Code demonstration

### Basic Usage

The basic attribute transparency of the 'textarea' tag is supported. If the attribute to be transparently passed is not in the document, it will only be passed to the internal 'textarea' tag by placing it in the 'textarea Properties' field.

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

### Display the number of words

ShowCount 'controls the number of words displayed as input and can generally be used in conjunction with' maxLength '.

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

### Controlled/Uncontrolled

Determine whether it is a controlled component based on whether 'value' is passed in. Uncontrolled components can control the value of 'textarea' by obtaining elements through 'textareaRef'.

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

### Auto focus

Control whether to auto focus through the 'autoFocus' field.

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

### Automatic lifting

Control whether to automatically raise through the 'autoSize' field. When passing this field to 'boolean', there is no limit on the height size. When passing it to 'object', the height size can be controlled. If it exceeds the maximum value, it can be scrolled. This function does not support Alipay applet.

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

|   attribute   |                                              explain                                               |                                    type                                    | Default value |
| :-----------: | :------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------: | :-----------: |
|     value     |                              Input box content, used when controlled                               |                                   string                                   |       -       |
| defaultValue  |                         Default input box content, used when uncontrolled                          |                                   string                                   |       -       |
| textareaProps |                          inside `<textarea>` Standard attributes of tags                           |                TextareaHTMLAttributes<HTMLTextAreaElement\>                |       -       |
|  textareaRef  |                                  inside `<textarea>` Label's ref                                   |                      React.Ref<HTMLTextAreaElement\>                       |       -       |
|     name      |                              inside `<textarea>` Name identification                               |                                   string                                   |       -       |
|  placeholder  |                                         Occupation Content                                         |                                   string                                   |       -       |
|   disabled    |                                     Do you want to disable it                                      |                                  boolean                                   |     false     |
|     rows      |                                  Number of lines in the text box                                   |                                   number                                   |       2       |
|   maxLength   |                                     Maximum length of content                                      |                                   number                                   |       -       |
|   autoSize    | Adaptive content height, can be set to true\|false 或对象：{minHeight?: number;maxHeight?: number} |                                  boolean                                   |     false     |
|   autoFocus   |                                    Does it automatically focus                                     |                                  boolean                                   |     false     |
|   showCount   |                                         Display word count                                         |                                  boolean                                   |     false     |
|   onChange    |                         Callback when the content of the text box changes                          | (e: React.ChangeEvent<HTMLTextAreaElement\>,data: {value: string}) => void |       -       |

## Style variables

| attribute                 | explain                       | Default value          | global variable                        |
| ------------------------- | ----------------------------- | ---------------------- | -------------------------------------- |
| --width                   | width                         | 100%                   | --bui-textarea-width                   |
| --bg-color                | Background color of input box | --bui-color-bg-default | -                                      |
| --text-color              | Input box font color          | --bui-color-fg-subtle  | --bui-textarea-text-color              |
| --count-bg-color          | Count column background color | --bui-color-bg-default | -                                      |
| --count-text-color        | Count column font color       | --bui-color-fg-subtle  | --bui-textarea-count-color             |
| --text-font-size          | Font size of input box        | --bui-text-size-2      | --bui-textarea-text-font-size          |
| --count-font-size         | Font size of input box        | --bui-text-size-2      | --bui-textarea-count-color             |
| --content-padding         | Input box margin              | 8px                    | --bui-textarea-padding                 |
| --count-padding           | Count column margin           | 4px                    | --bui-textarea-count-padding           |
| --placeholder-line-height | Occupation symbol row height  | 1.3                    | --bui-textarea-placeholder-line-height |
