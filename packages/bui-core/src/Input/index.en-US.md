---
group: Basic input
name: Input
---

# Input

User input content is the encapsulation of the basic input box.

## Code demonstration

### Basic Usage

Support`input` the basic attribute of the signature should be transparently transmitted. if the attribute to be transparently transmitted is not in the document, please place it in`inputProps`, it will only be transmitted internally within the paragraph`input` sign.

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

Adopt`startIcon`you can customize the start icon.

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

Adopt`endIcon`you can customize the end icon.

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

Enable`clearable`afterwards, when there is input content in the input box and the focus state is displayed, a clear button will be displayed, and the input box content will also be cleared in the uncontrolled state.

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

Use`disabled`the input box can be disabled.

```tsx
import { Input } from '@bifrostui/react';
import React from 'react';

export default () => {
  return <Input disabled placeholder="请填写内容" />;
};
```

### Controlled/Uncontrolled

According to whether it is transmitted or not`value`to determine whether it is a controlled component, uncontrolled components can be identified through`inputRef`get elements to control`input`the value.

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

H5: Through`type`can specify input box type,`type`the value should be the standard [HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)

Mini program:`type`the value may vary in different channels, please refer to [小程序 input type](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)

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

| attribute    | explain                                                                                                           | type                                                                   | Default value |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------- |
| defaultValue | The default content of the input box is used when the component is uncontrolled                                   | string                                                                 | -             |
| value        | Input box content, used when the component is controlled                                                          | string                                                                 | -             |
| inputProps   | Standard properties of internal<input>tags                                                                        | React.InputHTMLAttributes<HTMLInputElement\>                           | -             |
| inputRef     | Ref for internal<input>tag                                                                                        | React.Ref<HTMLInputElement\>                                           | -             |
| name         | `<input>` Name identifier                                                                                         | string                                                                 | -             |
| type         | `<input>` Type identifier, should be a valid HTML5 input type value or a type value supported by the mini program | string                                                                 | text          |
| clearable    | Is the clear icon displayed? Clicking on the clear icon will clear the input box                                  | boolean                                                                | false         |
| startIcon    | Input with icon, set front icon                                                                                   | ReactNode                                                              | -             |
| endIcon      | Input with icon, set the back icon. If clearable=true, both icons will be displayed                               | ReactNode                                                              | -             |
| placeholder  | Occupation Content                                                                                                | string                                                                 | -             |
| disabled     | Do you want to disable it                                                                                         | boolean                                                                | false         |
| onClear      | Clicking on the clear icon callback will also clear the input box content in an uncontrolled state                | (e: React.SyntheticEvent) => void                                      | -             |
| onChange     | Callback when input box content changes                                                                           | (e: React.ChangeEvent<HTMLInputElement\>,data: {value:string}) => void | -             |
| onFocus      | Callback during focusing                                                                                          | (e: React.SyntheticEvent) => void                                      | -             |
| onBlur       | Callback when out of focus                                                                                        | (e: React.SyntheticEvent) => void                                      | -             |

## Style variables

| attribute                   | explain                          | Default value       | global variable                       |
| --------------------------- | -------------------------------- | ------------------- | ------------------------------------- |
| --height                    | height                           | 32px                | --bui-input-height                    |
| --padding                   | padding                          | 4px 10px            | --bui-input-padding                   |
| --icon-start-margin-right   | Head button right margin         | 3px                 | --bui-input-icon-start-margin-right   |
| --icon-end-margin-left      | Tail button left margin          | 3px                 | --bui-input-icon-end-margin-left      |
| --disabled-background-color | Disabled status background color | rgba(0, 0, 0, 0.04) | --bui-input-disabled-background-color |
