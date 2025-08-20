---
group: Basic Input
name: TextArea
---

# TextArea

A text input box used for entering longer content.

## Code Examples

### Basic Usage

Supports passing through basic attributes of the `textarea` tag. If an attribute is not listed in this documentation, it should be placed in the `textareaProps` field to be passed through to the internal `textarea` tag.

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
      <TextArea value={value} placeholder="Default" onChange={handleChange} />
    </Stack>
  );
};
```

### Display Character Count

The `showCount` property controls the display of the number of characters entered. It is usually used in conjunction with `maxLength`.

```tsx
import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="Maximum 10 characters"
        onChange={(e, data) => setValue(data?.value)}
        maxLength={10}
        showCount
      />
    </Stack>
  );
};
```

### Controlled/Uncontrolled

Whether a component is controlled or uncontrolled is determined by whether `value` is passed. For uncontrolled components, you can control the `textarea`'s value using `textareaRef` to get the element.

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
        Controlled Component:
        <Button onClick={addTen}>Increase by 10</Button>
        <br />
        <TextArea value={value} onChange={(e, data) => setValue(data.value)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        Uncontrolled Component:
        <br />
        <Button onClick={reduceTen}>
          Decrease by 10 (changing defaultValue has no effect)
        </Button>
        <br />
        <Button onClick={multiplyTwo}>
          Multiply by 2 (DOM manipulation of value is effective)
        </Button>
        <br />
        <TextArea textareaRef={reduceRef} defaultValue={defaultValue} />
      </div>
    </Stack>
  );
};
```

### Auto Focus

Control whether the `textarea` is automatically focused using the `autoFocus` field.

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
        {autoFocus ? 'Blur' : 'Focus'}
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

### Auto Resize

Control whether the `textarea` automatically resizes using the `autoSize` field. When `autoSize` is a `boolean`, there is no height limit. When it is an `object`, you can control the height, and if it exceeds the maximum, it becomes scrollable. This feature is not supported in Alipay Mini Programs.

```tsx
import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="Excess text will auto-resize"
        onChange={(e, data) => setValue(data?.value)}
        autoSize={{ minHeight: 50, maxHeight: 100 }}
      />
    </Stack>
  );
};
```

## API

|   Property    |                                                Description                                                 |                                    Type                                    | Default |
| :-----------: | :--------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------: | :-----: |
|     value     |                                    Input content, used when controlled                                     |                                   string                                   |    -    |
| defaultValue  |                               Default input content, used when uncontrolled                                |                                   string                                   |    -    |
| textareaProps |                            Standard properties of the internal `<textarea>` tag                            |                TextareaHTMLAttributes<HTMLTextAreaElement\>                |    -    |
|  textareaRef  |                                   Ref for the internal `<textarea>` tag                                    |                      React.Ref<HTMLTextAreaElement\>                       |    -    |
|     name      |                               Name identifier for the internal `<textarea>`                                |                                   string                                   |    -    |
|  placeholder  |                                            Placeholder content                                             |                                   string                                   |    -    |
|   disabled    |                                      Whether the textarea is disabled                                      |                                  boolean                                   |  false  |
|     rows      |                                       Number of rows in the textarea                                       |                                   number                                   |    2    |
|   maxLength   |                                       Maximum length of the content                                        |                                   number                                   |    -    |
|   autoSize    | Adaptive content height, can be set to true \| false or an object: {minHeight?: number;maxHeight?: number} |                                  boolean                                   |  false  |
|   autoFocus   |                                    Whether the textarea is auto-focused                                    |                                  boolean                                   |  false  |
|   showCount   |                                   Whether to display the character count                                   |                                  boolean                                   |  false  |
|   onChange    |                          Callback function for when the textarea content changes                           | (e: React.ChangeEvent<HTMLTextAreaElement\>,data: {value: string}) => void |    -    |

## Style Variables

| Property                  | Description                                               | Default                  | Global Variable                        |
| ------------------------- | --------------------------------------------------------- | ------------------------ | -------------------------------------- |
| --border-radius           | Border radius                                             | --bui-shape-radius-label | --bui-textarea-border-radius           |
| --width                   | Width                                                     | 100%                     | --bui-textarea-width                   |
| --bg-color                | Background color of the textarea                          | --bui-color-bg-default   | --bui-textarea-bg-color                |
| --text-color              | Text color of the textarea                                | --bui-color-fg-subtle    | --bui-textarea-text-color              |
| --count-bg-color          | Background color of the count bar                         | --bui-color-bg-default   | --bui-textarea-bg-color                |
| --count-text-color        | Text color of the count bar                               | --bui-color-fg-subtle    | --bui-textarea-count-color             |
| --text-font-size          | Font size of the textarea                                 | --bui-text-size-2        | --bui-textarea-text-font-size          |
| --count-font-size         | Font size of the count bar                                | --bui-title-size-3       | --bui-textarea-count-font-size         |
| --content-padding         | Padding of the textarea                                   | 8px                      | --bui-textarea-padding                 |
| --count-padding           | Padding of the count bar                                  | 4px                      | --bui-textarea-count-padding           |
| --placeholder-color       | Placeholder text color                                    | #ced1d6                  | --bui-textarea-placeholder-color       |
| --placeholder-line-height | Placeholder line height (not applicable in Mini Programs) | 1.3                      | --bui-textarea-placeholder-line-height |
