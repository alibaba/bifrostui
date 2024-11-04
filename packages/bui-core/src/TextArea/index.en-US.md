---
group: Basic input
name: TextArea
---

# TextArea

Text input box, used for inputting longer content.

## Code demonstration

### Basic Usage

Support`textarea`the basic attribute of the signature should be transparently transmitted. if the attribute to be transparently transmitted is not in the document, please place it in`textareaProps`it will only be transmitted internally within the paragraph`textarea`sign.

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

`showCount`control the number of words in the display input, which can generally be combined with`maxLength`use it.

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

According to whether it is transmitted or not`value`to determine whether it is a controlled component, uncontrolled components can be identified through`textareaRef`get elements to control`textarea`the value.

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

Adopt`autoFocus`field controls whether to automatically focus.

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

Adopt`autoSize`whether the field control automatically raises, this field is passed in`boolean`time does not limit the height size, input`object`the height can be controlled, and if it exceeds the maximum value, it can be scrolled. this function does not support alipay applet.

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

|   attribute   |                                                explain                                                 |                                    type                                    | Default value |
| :-----------: | :----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------: | :-----------: |
|     value     |                                Input box content, used when controlled                                 |                                   string                                   |       -       |
| defaultValue  |                           Default input box content, used when uncontrolled                            |                                   string                                   |       -       |
| textareaProps |                             Standard properties of internal<textarea>tags                              |                TextareaHTMLAttributes<HTMLTextAreaElement\>                |       -       |
|  textareaRef  |                                  The ref of the internal<textarea>tag                                  |                      React.Ref<HTMLTextAreaElement\>                       |       -       |
|     name      |                               Internal `<textarea>` Name Identification                                |                                   string                                   |       -       |
|  placeholder  |                                           Occupation Content                                           |                                   string                                   |       -       |
|   disabled    |                                       Do you want to disable it                                        |                                  boolean                                   |     false     |
|     rows      |                                    Number of lines in the text box                                     |                                   number                                   |       2       |
|   maxLength   |                                       Maximum length of content                                        |                                   number                                   |       -       |
|   autoSize    | Adaptive content height, can be set to true\|False or object: {minHeight?: number; maxHeight?: number} |                                  boolean                                   |     false     |
|   autoFocus   |                                      Does it automatically focus                                       |                                  boolean                                   |     false     |
|   showCount   |                                           Display word count                                           |                                  boolean                                   |     false     |
|   onChange    |                           Callback when the content of the text box changes                            | (e: React.ChangeEvent<HTMLTextAreaElement\>,data: {value: string}) => void |       -       |

## Style variables

| attribute          | explain                       | Default value          | global variable               |
| ------------------ | ----------------------------- | ---------------------- | ----------------------------- |
| --bg-color         | Background color of input box | --bui-color-bg-default | -                             |
| --text-color       | Input box font color          | --bui-color-fg-subtle  | --bui-textarea-text-color     |
| --count-bg-color   | Count column background color | --bui-color-bg-default | -                             |
| --count-text-color | Count column font color       | --bui-color-fg-subtle  | --bui-textarea-count-color    |
| --text-font-size   | Font size of input box        | --bui-text-size-2      | --bui-textarea-text-font-size |
| --count-font-size  | Font size of input box        | --bui-text-size-2      | --bui-textarea-count-color    |
| --content-padding  | Input box margin              | 8px                    | --bui-textarea-padding        |
| --count-padding    | Count column margin           | 4px                    | --bui-textarea-count-padding  |
