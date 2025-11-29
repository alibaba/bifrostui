---
group: Basic Input
name: Input
---

# Input

A wrapper for user input content that encapsulates basic input functionality.

## Basic Usage

Supports passthrough for the basic attributes of the `input` tag. If the attributes you want to passthrough are not listed in this document, place them in the `inputProps` field to ensure they are passed through to the inner `input` tag.

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

## Start Icon

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

## End Icon

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

## Clear Button

When `clearable` is enabled, a clear button is displayed when there is input content and the input is focused. In uncontrolled mode, it also clears the input content.

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
        Uncontrolled will also clear the input:
      </div>
      <Input clearable defaultValue="Will clear content" />
    </>
  );
};
```

## Disabled State

Disable the input using `disabled`.

```tsx
import { Input } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return <Input disabled placeholder="Please enter content" />;
};
```

## Controlled/Uncontrolled

A component is controlled if `value` is provided. For an uncontrolled component, use `inputRef` to get the element and control the value of the `input`.

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
          Decrease by 10 (modifying defaultValue is ineffective)
        </Button>
        <br />
        <Button onClick={multiplyTwo}>
          Multiply by 2 (modifying value via DOM is effective)
        </Button>
        <br />
        <Input inputRef={reduceRef} defaultValue={defaultValue} />
      </div>
    </div>
  );
};
```

## Specifying Type

H5: Specify the input type using `type`, the value of which should be a standard [HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types).

Mini Program: The `type` values vary across different channels. Refer to [Mini Program input type](https://developers.weixin.qq.com/miniprogram/dev/component/input.html).

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
      placeholder="number type"
      value={value}
      onChange={handleChange}
    />
  );
};
```

## Accessibility

Default accessibility attributes are supported as follows:

- When `disabled=true`, the aria-disabled attribute is automatically added.
- When `placeholder` exists, the aria-placeholder attribute is automatically added.
- When `inputProps.required=true`, the aria-required attribute is automatically added.
- When `inputProps.readOnly=true`, the aria-readonly attribute is automatically added.
- For more accessibility attributes, you can set them through the `inputProps` attribute, e.g., inputProps={{ 'aria-label': 'Input label' }}.

## API

| Property     | Description                                                                                             | Type                                                                   | Default |
| ------------ | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------- |
| defaultValue | Default content of the input when the component is uncontrolled                                         | string                                                                 | -       |
| value        | Content of the input when the component is controlled                                                   | string                                                                 | -       |
| inputProps   | Standard properties for the inner `<input>` tag                                                         | React.InputHTMLAttributes<HTMLInputElement\>                           | -       |
| inputRef     | Ref for the inner `<input>` tag                                                                         | React.Ref<HTMLInputElement\>                                           | -       |
| name         | Name identifier for the `<input>`                                                                       | string                                                                 | -       |
| type         | Type identifier for the `<input>`, should be a valid HTML5 input type or type supported by Mini Program | string                                                                 | text    |
| clearable    | Whether to show the clear icon, which clears the input upon clicking                                    | boolean                                                                | false   |
| startIcon    | Sets a leading icon for the input                                                                       | ReactNode                                                              | -       |
| endIcon      | Sets a trailing icon for the input; both icons display if clearable=true                                | ReactNode                                                              | -       |
| placeholder  | Placeholder content                                                                                     | string                                                                 | -       |
| disabled     | Whether the input is disabled                                                                           | boolean                                                                | false   |
| onClear      | Callback for clicking the clear icon, also clears input in uncontrolled mode                            | (e: React.MouseEvent<HTMLDivElement\>) => void                         | -       |
| onChange     | Callback when the input content changes                                                                 | (e: React.ChangeEvent<HTMLInputElement\>,data: {value:string}) => void | -       |
| onFocus      | Callback when focused                                                                                   | (e: React.FocusEvent<HTMLInputElement\>) => void                       | -       |
| onBlur       | Callback when blurred                                                                                   | (e: React.FocusEvent<HTMLInputElement\>) => void                       | -       |

## Style Variables

| Property                      | Description                    | Default Value                     |
| ----------------------------- | ------------------------------ | --------------------------------- |
| --bui-input-height            | Input height                   | `32px`                            |
| --bui-input-padding           | Input padding                  | `4px 10px`                        |
| --bui-input-border-radius     | Input border radius            | `var(--bui-shape-radius-default)` |
| --bui-input-icon-start-margin | Leading icon margin            | `0 3px 0 0`                       |
| --bui-input-icon-end-margin   | Trailing icon margin           | `0 0 0 3px`                       |
| --bui-input-bg-color          | Input background color         | `transparent`                     |
| --bui-input-disabled-bg-color | Background color when disabled | `rgba(0, 0, 0, 0.04)`             |
| --bui-input-clear-color       | Clear button color             | `#ced1d6`                         |
| --bui-input-clear-font-size   | Clear button font size         | `var(--bui-title-size-3)`         |
