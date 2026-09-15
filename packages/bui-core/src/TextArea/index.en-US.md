---
group: Basic Input
name: TextArea
---

# TextArea

Text input field, used for entering long content.

## Code Examples

### Basic Usage

Supports base attributes of the `textarea` tag passed through. If attributes to be passed are not listed in this document, place them in the `textareaProps` field to be passed through to the internal `textarea` tag.

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

The `showCount` property controls the display of the input character count, generally used in conjunction with `maxLength`.

```tsx
import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="Max 10 characters"
        onChange={(e, data) => setValue(data?.value)}
        maxLength={10}
        showCount
      />
    </Stack>
  );
};
```

### Controlled/Uncontrolled

Determine controlled component status by the presence of the `value` prop. Uncontrolled components can control the `textarea` value via the `textareaRef`.

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
          Decrease by 10 (does not affect defaultValue)
        </Button>
        <br />
        <Button onClick={multiplyTwo}>
          Multiply by 2 (affects value via DOM)
        </Button>
        <br />
        <TextArea textareaRef={reduceRef} defaultValue={defaultValue} />
      </div>
    </Stack>
  );
};
```

### Auto Focus

Control automatic focus with the `autoFocus` field.

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
        {autoFocus ? 'Unfocus' : 'Focus'}
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

### Auto Expand

Control automatic height adjustment with the `autoSize` field. Passing `boolean` allows unlimited height expansion. This feature is not supported in Alipay mini programs.

```tsx
import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="Overflowing content auto expands"
        onChange={(e, data) => setValue(data?.value)}
        autoSize={true}
      />
    </Stack>
  );
};
```

### Custom Max/Min Height

Control automatic height adjustment with the `autoSize` field. When passing an `object`, height size can be controlled, and scrolling is enabled above the maximum value. This feature is not supported in Alipay mini programs.

```tsx
import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="Overflowing content auto expands"
        onChange={(e, data) => setValue(data?.value)}
        autoSize={{ minHeight: 50, maxHeight: 100 }}
      />
    </Stack>
  );
};
```

## API

|   Property    |                                         Description                                          |                                    Type                                     | Default |
| :-----------: | :------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :-----: |
|     value     |                        Content of the input, used in controlled mode                         |                                   string                                    |    -    |
| defaultValue  |                   Default content of the input, used in uncontrolled mode                    |                                   string                                    |    -    |
| textareaProps |                     Standard attributes of the internal `<textarea>` tag                     |                TextareaHTMLAttributes<HTMLTextAreaElement\>                 |    -    |
|  textareaRef  |                             Ref of the internal `<textarea>` tag                             |                       React.Ref<HTMLTextAreaElement\>                       |    -    |
|     name      |                         Name attribute of the internal `<textarea>`                          |                                   string                                    |    -    |
|  placeholder  |                                     Placeholder content                                      |                                   string                                    |    -    |
|   disabled    |                                       Disabled status                                        |                                   boolean                                   |  false  |
|     rows      |                                        Number of rows                                        |                                   number                                    |    2    |
|   maxLength   |                                    Maximum content length                                    |                                   number                                    |    -    |
|   autoSize    | Auto-adjust height; can be true/false or an object: {minHeight?: number; maxHeight?: number} |                           boolean \| AutoSizeType                           |  false  |
|   autoFocus   |                                      Auto focus status                                       |                                   boolean                                   |  false  |
|   showCount   |                                   Display character count                                    |                                   boolean                                   |  false  |
|   onChange    |                             Callback executed on content change                              | (e: React.ChangeEvent<HTMLTextAreaElement\>, data: {value: string}) => void |    -    |

### Accessibility Attributes

The TextArea component supports the following accessibility attributes for enhanced accessibility:

|   Attribute   |                   Description                    |  Type   | Default |
| :-----------: | :----------------------------------------------: | :-----: | :-----: |
|  aria-label   |              ARIA label description              | string  |    -    |
|  aria-hidden  |          Whether the element is hidden           | boolean |    -    |
| aria-details  | Details of the element in the accessibility tree | string  |    -    |
| aria-required |         Whether the element is required          | boolean |    -    |
| aria-readonly |         Whether the element is read-only         | boolean |    -    |
| aria-rowindex |        Row index for a multiline textbox         | number  |    -    |
| aria-colcount |    Number of columns for a multiline textbox     | number  |    -    |

## Style Variables

| Variable Name                          | Description                     | Default Value                                               |
| -------------------------------------- | ------------------------------- | ----------------------------------------------------------- |
| --bui-textarea-border-radius           | Border radius of the textarea   | `var(--bui-shape-radius-label)`                             |
| --bui-textarea-width                   | Width of the textarea           | `100%`                                                      |
| --bui-textarea-bg-color                | Background color                | `var(--bui-color-bg-default)`                               |
| --bui-textarea-text-color              | Text color                      | `var(--bui-color-fg-subtle)`                                |
| --bui-textarea-count-bg-color          | Background color of the counter | `var(--bui-textarea-bg-color, var(--bui-color-bg-default))` |
| --bui-textarea-count-color             | Text color of the counter       | `var(--bui-color-fg-subtle)`                                |
| --bui-textarea-text-font-size          | Text font size                  | `var(--bui-text-size-2)`                                    |
| --bui-textarea-count-font-size         | Font size of the counter        | `var(--bui-title-size-3)`                                   |
| --bui-textarea-padding                 | Padding                         | `8px`                                                       |
| --bui-textarea-count-padding           | Padding of the counter          | `0 4px`                                                     |
| --bui-textarea-placeholder-color       | Placeholder color               | `#ced1d6`                                                   |
| --bui-textarea-placeholder-line-height | Line height of the placeholder  | `1.3`                                                       |
