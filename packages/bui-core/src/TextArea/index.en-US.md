---
group: Basic Input
name: TextArea Text Box
---

# TextArea Text Box

A text input box used for entering longer content.

## Code Demonstrations

### Basic Usage

Supports the passing through of basic attributes of the `textarea` tag. Attributes not documented here should be placed in the `textareaProps` field to pass them through to the internal `textarea` tag.

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

### Displaying Character Count

The `showCount` attribute controls the display of the number of characters entered and can be used with `maxLength`.

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

Determine if it is a controlled component by whether a `value` is passed. For uncontrolled components, use `textareaRef` to control the `textarea`'s value.

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
          Decrease by 10 (changing defaultValue does not work)
        </Button>
        <br />
        <Button onClick={multiplyTwo}>
          Multiply by 2 (DOM manipulation of value works)
        </Button>
        <br />
        <TextArea textareaRef={reduceRef} defaultValue={defaultValue} />
      </div>
    </Stack>
  );
};
```

### Auto Focus

Control whether to auto-focus using the `autoFocus` field.

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
        {autoFocus ? 'Lose' : 'Gain'} Focus
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

Control auto-resizing using the `autoSize` field. When `boolean`, it adjusts without height limits; when `object`, it allows setting minimum and maximum heights. This feature is not supported in Alipay Mini Programs.

```tsx
import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="Text will expand automatically if too long"
        onChange={(e, data) => setValue(data?.value)}
        autoSize={{ minHeight: 50, maxHeight: 100 }}
      />
    </Stack>
  );
};
```

## API

| Property      | Description                                                        | Type                                                                       | Default |
| ------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------- | ------- |
| value         | The content of the input box, used for controlled components       | string                                                                     | -       |
| defaultValue  | Default content of the input box, used for uncontrolled components | string                                                                     | -       |
| textareaProps | Standard properties of the internal `<textarea>` tag               | TextareaHTMLAttributes<HTMLTextAreaElement>                                | -       |
| textareaRef   | Ref for the internal `<textarea>` tag                              | React.Ref<HTMLTextAreaElement>                                             | -       |
| name          | Name identifier for the internal `<textarea>`                      | string                                                                     | -       |
| placeholder   | Placeholder text                                                   | string                                                                     | -       |
| disabled      | Whether the input box is disabled                                  | boolean                                                                    | false   |
| rows          | Number of rows in the text area                                    | number                                                                     | 2       |
| maxLength     | Maximum length of the content                                      | number                                                                     | -       |
| autoSize      | Adjust height based on content, can be true \| false or an object  | boolean \| {minHeight?: number;maxHeight?: number}                         | false   |
| autoFocus     | Whether to auto-focus                                              | boolean                                                                    | false   |
| showCount     | Show character count                                               | boolean                                                                    | false   |
| onChange      | Callback function triggered when the text area content changes     | (e: React.ChangeEvent<HTMLTextAreaElement>, data: {value: string}) => void | -       |

## Style Variables

| Property                  | Description             | Default Value            | Global Variable                        |
| ------------------------- | ----------------------- | ------------------------ | -------------------------------------- |
| --border-radius           | Border radius           | --bui-shape-radius-label | --bui-textarea-border-radius           |
| --width                   | Width                   | 100%                     | --bui-textarea-width                   |
| --bg-color                | Background color        | --bui-color-bg-default   | --bui-textarea-background-color        |
| --text-color              | Font color              | --bui-color-fg-subtle    | --bui-textarea-text-color              |
| --count-bg-color          | Count bar background    | --bui-color-bg-default   | --bui-textarea-background-color        |
| --count-text-color        | Count bar font color    | --bui-color-fg-subtle    | --bui-textarea-count-color             |
| --text-font-size          | Font size               | --bui-text-size-2        | --bui-textarea-text-font-size          |
| --count-font-size         | Count bar font size     | --bui-title-size-3       | --bui-textarea-count-font-size         |
| --content-padding         | Padding inside the box  | 8px                      | --bui-textarea-padding                 |
| --count-padding           | Count bar padding       | 4px                      | --bui-textarea-count-padding           |
| --placeholder-color       | Placeholder font color  | #ced1d6                  | --bui-textarea-placeholder-color       |
| --placeholder-line-height | Placeholder line height | 1.3                      | --bui-textarea-placeholder-line-height |
