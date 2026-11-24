---
group: Basic Input
name: Select Dropdown Selector
---

# Select Dropdown Selector

The Select component is used to collect user information from a list of options. Currently, the Select component only supports `single selection`. More features are coming soon.

## Basic Usage

Achieve dropdown functionality by combining the `SelectOption` component.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import * as React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### Placeholder

Support configuring default display content in the select box via `placeholder`.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import * as React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select placeholder="Choose an option">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### Initialize Default Value

Support initializing the selected value via the `defaultValue` attribute.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import * as React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### Controlled/Uncontrolled

Distinguish whether it is a controlled component by whether `value` is passed in:
In a controlled case, the business controls the component value via the `onChange` callback;
In an uncontrolled case, the component value can be obtained via `inputRef`.

```tsx
import { Alert, Button, Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const [curValue, setCurValue] = useState('');
  const selectRef = useRef(null);
  const [alert, setAlert] = useState(false);

  return (
    <>
      {alert && (
        <Alert color="success">{`Selector A value: ${curValue || ''}; Selector B value: ${
          selectRef.current.value
        }`}</Alert>
      )}
      <Stack
        spacing="20px"
        alignItems="stretch"
        style={{ background: '#eee', padding: '50px' }}
      >
        <Select
          placeholder="Selector A"
          value={curValue}
          onChange={(e, { value = '' }) => {
            setCurValue(value);
          }}
        >
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Select placeholder="Selector B" inputRef={selectRef}>
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Button
          onClick={(e) => {
            setAlert(true);
            setTimeout(() => {
              setAlert(false);
            }, 1000);
          }}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
};
```

### Disabled

Provide a `disabled` attribute to prevent user interaction.
You can disable all interactions by setting `disabled` on the `Select`, or disable a specific option by setting `disabled` on a `SelectOption`.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import * as React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack
      spacing="20px"
      alignItems="stretch"
      style={{ background: '#eee', padding: '50px' }}
    >
      <Select disabled placeholder="Disabled">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
      <Select defaultValue={1}>
        {options.map((item, index) => (
          <SelectOption
            key={index}
            value={item.value}
            label={item.label}
            disabled={index === 2}
          />
        ))}
      </Select>
    </Stack>
  );
};
```

### Controlled Open/Close

Control the dropdown's open/close state with the controlled `open` attribute.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select open={open} onOpen={handleOpen} onClose={handleClose}>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### Custom Icons

Provide the capability to customize icons through the `icon` attribute.

```tsx
import * as React from 'react';
import { Select, SelectOption, Stack } from '@bifrostui/react';
import { ArrowDownwardIcon } from '@bifrostui/icons';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select icon={<ArrowDownwardIcon />} placeholder="Custom Icon">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

#### Custom Option Display Content

When you do not want to use `label` as the display content of the option `SelectOptions`, you can customize the option display content through `children`.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import * as React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((option, index) => {
          const { value, label } = option;

          return (
            <SelectOption value={value} label={label} key={index}>
              Option - {label}
            </SelectOption>
          );
        })}
      </Select>
    </Stack>
  );
};
```

### Custom Select Display Results

`label` supports the `ReactNode` type. When you want to customize the `Select` display content, you can use the `label` and `children` attributes of the `SelectOption` component to achieve customization.

```tsx
import * as React from 'react';
import { Select, SelectOption, Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((option, index) => {
          const { value, label } = option;
          const customLabel = (
            <Stack direction="row" spacing="10px">
              <SettingsOutlinedIcon />
              {label}
            </Stack>
          );

          return (
            <SelectOption label={customLabel} value={value} key={index}>
              Option-{label}
            </SelectOption>
          );
        })}
      </Select>
    </Stack>
  );
};
```

### Events

The Select component not only provides a basic `onChange` callback but also event callbacks for when options `expand` or `collapse`.

```tsx
import { Alert, Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const [curValue, setCurValue] = useState('Initialized');

  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Alert color="info">Current State: {curValue}</Alert>
      <Select
        onOpen={() => {
          setCurValue('Dropdown Opened');
        }}
        onClose={() => {
          setCurValue('Dropdown Closed');
        }}
        placeholder="Select an option"
      >
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### Specify Scroll Parent Container

Use scrollContainer to specify the scroll parent container. By default, the scroll parent container is the page. After specifying, the display direction of the dropdown will be automatically calculated based on the scroll parent container.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useRef } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const ref = useRef();

  return (
    <Stack
      ref={ref}
      alignItems="stretch"
      style={{
        display: 'block',
        height: '150px',
        padding: '10px 50px',
        background: '#eee',
        overflowY: 'scroll',
      }}
    >
      <div style={{ height: '50px' }}></div>
      <Select scrollContainer={() => ref.current}>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
      <div style={{ height: '200px' }}></div>
    </Stack>
  );
};
```

### Override Styles with Class Name

Override styles by passing the `className` attribute.
className will be mounted on the root component and on the dropdown container as `className-option-container`.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import * as React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

/**
  .custom-classname {
    color: red;
  }
  .custom-classname-option-container {
    color: blue;
  }
*/

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select className="custom-classname test-classname">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### API

##### SelectProps

| Property      | Description                                   | Type                                            | Default |
| ------------- | --------------------------------------------- | ----------------------------------------------- | ------- |
| inputRef      | Selector inputRef                             | Ref                                             | -       |
| inputProps    | Pass-through attributes for `<input/>` tag    | React.InputHTMLAttributes                       | -       |
| BackdropProps | Pass-through attributes for `<Backdrop/>` tag | React.DivHTMLAttributes                         | -       |
| name          | Name identifier for `<input/>` tag            | string                                          | -       |
| value         | Selected value of the selector                | string ｜ number                                | -       |
| defaultValue  | Default value of the selector                 | string ｜ number                                | -       |
| placeholder   | Placeholder content of the selector           | ReactNode                                       | -       |
| icon          | Icon of the selector                          | ReactNode                                       | -       |
| disabled      | Whether the selector is disabled              | boolean                                         | false   |
| open          | Whether dropdown options are open             | boolean                                         | false   |
| onChange      | Callback when selecting an option             | (e:SyntheticEvent, data:{value:string}) => void | -       |
| onOpen        | Callback when the dropdown expands            | () => void                                      | -       |
| onClose       | Callback when the dropdown collapses          | () => void                                      | -       |

##### SelectOptionProps

| Property | Description            | Type             | Default |
| -------- | ---------------------- | ---------------- | ------- |
| label    | Option fill content    | ReactNode        | -       |
| value    | Option value           | string ｜ number | -       |
| disabled | Option clickable state | boolean          | false   |

## Style Variables

| Global Variable                         | Description                           | Default Value            |
| --------------------------------------- | ------------------------------------- | ------------------------ |
| --bui-select-height                     | Height of the selector                | `32px`                   |
| --bui-select-min-width                  | Minimum width of the selector         | `100px`                  |
| --bui-select-font-size                  | Font size of the selector             | `var(--bui-text-size-1)` |
| --bui-select-selector-container-padding | Padding of the selector container     | `0 14px`                 |
| --bui-select-option-main-padding        | Main padding of the option container  | `3px 0`                  |
| --bui-select-option-padding             | Padding of the option                 | `0 14px`                 |
| --bui-select-option-border-radius       | Border radius of the option           | `5px`                    |
| --bui-select-option-margin              | Margin of the option                  | `0 3px`                  |
| --bui-select-option-height              | Height of the option                  | `32px`                   |
| --bui-select-option-active-bg-color     | Active background color of the option | `#fff2f0`                |

```

```
