---
group: Basic Input
name: Input Text Box
---

# Input Text Box

User input content, it is a wrapper for the basic input box.

## Code Examples

### Basic Usage

Supports the transmission of basic properties of the `input` tag. If the properties to be transmitted are not in this document, place them in the `inputProps` field to transmit them to the internal `input` tag.

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
      value={value}
      placeholder="Please enter content"
      onChange={handleChange}
    />
  );
};
```

### Start Icon

Customize the start icon using `startIcon`.

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
      placeholder="Please enter content"
      startIcon={<SearchOutlinedIcon htmlColor="#959aa5" />}
      onChange={handleChange}
    />
  );
};
```

### End Icon

Customize the end icon using `endIcon`.

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
      placeholder="Please enter content"
      endIcon={<SearchOutlinedIcon htmlColor="#959aa5" />}
      onChange={handleChange}
    />
  );
};
```

### Clear Button

Enabling `clearable` will display a clear button when the input box has content and is focused. In uncontrolled state, it also clears the input box content.

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
        placeholder="Please enter content"
        onChange={handleChange}
      />
      <div style={{ margin: '20px 0 10px' }}>
        Uncontrolled will also clear the input box:
      </div>
      <Input clearable defaultValue="Will clear content" />
    </>
  );
};
```

### Disabled State

Use `disabled` to disable the input box.

```tsx
import { Input } from '@bifrostui/react';
import React from 'react';

export default () => {
  return <Input disabled placeholder="Please enter content" />;
};
```

### Controlled/Uncontrolled

Determine whether it is a controlled component based on whether `value` is passed. Uncontrolled components can control the `input` value by obtaining the element through `inputRef`.

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
        Controlled component:
        <Button onClick={addTen}>Increase by 10</Button>
        <br />
        <Input value={value} onChange={(e, data) => setValue(data.value)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        Uncontrolled component:
        <br />
        <Button onClick={reduceTen}>
          Decrease by 10 (manipulating defaultValue is ineffective)
        </Button>
        <br />
        <Button onClick={multiplyTwo}>
          Multiply by 2 (DOM manipulation of value is effective)
        </Button>
        <br />
        <Input inputRef={reduceRef} defaultValue={defaultValue} />
      </div>
    </div>
  );
};
```

### Specifying type Attribute

HTML5: Use `type` to specify the input box type. The value of `type` should be a standard [HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)

Mini Program: The value of `type` varies across different channels; refer to [Mini Program input type](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)

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
      placeholder="Number type"
      value={value}
      onChange={handleChange}
    />
  );
};
```

## API

| Property     | Description                                                                                   | Type                                                                   | Default |
| ------------ | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------- |
| defaultValue | Default content of the input box, used when the component is uncontrolled                     | string                                                                 | -       |
| value        | Content of the input box, used when the component is controlled                               | string                                                                 | -       |
| inputProps   | Standard attributes for the internal `<input>` tag                                            | React.InputHTMLAttributes<HTMLInputElement\>                           | -       |
| inputRef     | Ref for the internal `<input>` tag                                                            | React.Ref<HTMLInputElement\>                                           | -       |
| name         | Name identifier for `<input>`                                                                 | string                                                                 | -       |
| type         | Type identifier for `<input>`, should be a valid HTML5 input type value or Mini Program type  | string                                                                 | text    |
| clearable    | Whether to show the clear icon, clicking the clear icon will clear the input box              | boolean                                                                | false   |
| startIcon    | Set the start icon for an input with icons                                                    | ReactNode                                                              | -       |
| endIcon      | Set the end icon for an input with icons, both icons will be displayed if `clearable=true`    | ReactNode                                                              | -       |
| placeholder  | Placeholder content                                                                           | string                                                                 | -       |
| disabled     | Whether to disable                                                                            | boolean                                                                | false   |
| onClear      | Callback when the clear icon is clicked, uncontrolled state also clears the input box content | (e: React.MouseEvent<HTMLDivElement\>) => void                         | -       |
| onChange     | Callback when the input box content changes                                                   | (e: React.ChangeEvent<HTMLInputElement\>,data: {value:string}) => void | -       |
| onFocus      | Callback when focused                                                                         | (e: React.FocusEvent<HTMLInputElement\>) => void                       | -       |
| onBlur       | Callback when unfocused                                                                       | (e: React.FocusEvent<HTMLInputElement\>) => void                       | -       |

## Style Variables

| Property                    | Description                | Default Value              | Global Variable                       |
| --------------------------- | -------------------------- | -------------------------- | ------------------------------------- |
| --height                    | Height                     | 32px                       | --bui-input-height                    |
| --padding                   | Padding                    | 4px 10px                   | --bui-input-padding                   |
| --border-radius             | Border Radius              | --bui-shape-radius-default | --bui-input-border-radius             |
| --icon-start-margin-right   | Right Margin of Start Icon | 3px                        | --bui-input-icon-start-margin-right   |
| --icon-end-margin-left      | Left Margin of End Icon    | 3px                        | --bui-input-icon-end-margin-left      |
| --background-color          | Background Color           | transparent                | --bui-input-background-color          |
| --disabled-background-color | Disabled Background Color  | rgba(0, 0, 0, 0.04)        | --bui-input-disabled-background-color |
