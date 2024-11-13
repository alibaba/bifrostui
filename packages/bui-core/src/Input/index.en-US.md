---
group: Basic input
name: Input box
---

# Input box

User input content is the encapsulation of the basic input box.

## Code demonstration

### Basic Usage

Support the basic attribute transparency of the 'input' tag. If the attribute to be transparently passed is not in the document, it will only be passed to the internal 'input' tag by placing it in the 'inputProps' field.

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

### Start icon

You can customize the start icon through 'startIcon'.

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

### End icon

You can customize the end icon through 'endIcon'.

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

### Clear button

After enabling 'clearable', a clear button will be displayed when there is input content in the input box and it is in focus state. Uncontrolled state will also clear the input box content.

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

### Disabled status

Use 'disabled' to disable the input box.

```tsx
import { Input } from '@bifrostui/react';
import React from 'react';

export default () => {
  return <Input disabled placeholder="请填写内容" />;
};
```

### Controlled/Uncontrolled

Determine whether it is a controlled component based on whether 'value' is passed in. Uncontrolled components can control the value of 'input' by obtaining elements through 'inputRef'.

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

### Specify type type

H5：通过 type 可指定输入框类型，type 的值应为标准 [HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)

Mini program: The value of 'type' varies in different channels, please refer to [Mini program input type]（ https://developers.weixin.qq.com/miniprogram/dev/component/input.html )

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

| attribute    | explain                                                                                                              | type                                                                   | Default value |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------- |
| defaultValue | The default content of the input box is used when the component is uncontrolled                                      | string                                                                 | -             |
| value        | Input box content, used when the component is controlled                                                             | string                                                                 | -             |
| inputProps   | inside `<input>` Standard attributes of tags                                                                         | React.InputHTMLAttributes<HTMLInputElement\>                           | -             |
| inputRef     | inside `<input>` Label's ref                                                                                         | React.Ref<HTMLInputElement\>                                           | -             |
| name         | `<input>` Name identification                                                                                        | string                                                                 | -             |
| type         | `<input>` The type identifier should be a valid HTML5 input type value or a type value supported by the mini program | string                                                                 | text          |
| clearable    | Is the clear icon displayed? Clicking on the clear icon will clear the input box                                     | boolean                                                                | false         |
| startIcon    | Input with icon, set front icon                                                                                      | ReactNode                                                              | -             |
| endIcon      | Input with icon, set the back icon. If clearable=true, both icons will be displayed                                  | ReactNode                                                              | -             |
| placeholder  | Occupation Content                                                                                                   | string                                                                 | -             |
| disabled     | Do you want to disable it                                                                                            | boolean                                                                | false         |
| onClear      | Clicking on the clear icon callback will also clear the input box content in an uncontrolled state                   | (e: React.SyntheticEvent) => void                                      | -             |
| onChange     | Callback when input box content changes                                                                              | (e: React.ChangeEvent<HTMLInputElement\>,data: {value:string}) => void | -             |
| onFocus      | Callback during focusing                                                                                             | (e: React.SyntheticEvent) => void                                      | -             |
| onBlur       | Callback when out of focus                                                                                           | (e: React.SyntheticEvent) => void                                      | -             |

## Style variables

| attribute                   | explain                         | Default value              | global variable                       |
| --------------------------- | ------------------------------- | -------------------------- | ------------------------------------- |
| --height                    | height                          | 32px                       | --bui-input-height                    |
| --padding                   | padding                         | 4px 10px                   | --bui-input-padding                   |
| --border-radius             | fillet                          | --bui-shape-radius-default | --bui-input-border-radius             |
| --icon-start-margin-right   | Right margin of the head button | 3px                        | --bui-input-icon-start-margin-right   |
| --icon-end-margin-left      | Left margin of the tail button  | 3px                        | --bui-input-icon-end-margin-left      |
| --background-color          | Background color                | transparent                | --bui-input-background-color          |
| --disabled-background-color | Disable background color        | rgba(0, 0, 0, 0.04)        | --bui-input-disabled-background-color |
