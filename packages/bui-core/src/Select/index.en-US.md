---
group: Basic Input
name: Select Dropdown Selector
---

# Select Dropdown Selector

The Select component is used to collect information provided by users from a list of options.
Currently, the Select component only supports `single selection`, with more features coming soon.

## Code Demonstrations

### Basic Usage

By combining the `SelectOption` component, you can achieve a dropdown selection effect.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

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

Supports configuring the default display content of the selection box via `placeholder`.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

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
      <Select placeholder="Dropdown Selection">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### Initializing Default Value

Supports setting the initial selected value using the `defaultValue` attribute.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

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

Determine if it's a controlled component by whether `value` is passed:

- For controlled components, business logic controls the component value via the `onChange` callback;
- For uncontrolled components, the component value can be obtained through `inputRef`.

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

Provides a `disabled` attribute to prevent user operations.
You can disable all operations on the `Select` or disable specific options by setting `disabled` on `SelectOption`.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

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

### Controlled Expansion/Collapse

Control the expansion and collapse of the selector using the controlled `open` property.

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

Supports custom icons via the `icon` attribute.

```tsx
import React from 'react';
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

When you do not want to use `label` as the display content for `SelectOptions`, you can customize the display content using `children`.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

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

### Customizing Selector Display Result

`label` supports `ReactNode` type. To customize the display content of the `Select`, you can use the `label` and `children` properties of the `SelectOption` component together.

```tsx
import React from 'react';
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

In addition to the basic `onChange` callback, the Select component also provides event callbacks for when options are expanded or collapsed.

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
      <Alert color="info">Current Status: {curValue}</Alert>
      <Select
        onOpen={() => {
          setCurValue('Opened Dropdown Selector');
        }}
        onClose={() => {
          setCurValue('Closed Dropdown Selector');
        }}
        placeholder="Dropdown Selection"
      >
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};
```

### Specifying Scroll Parent Container

Specify the scroll parent container using `scrollContainer`, which defaults to `() => document.body`.
After specifying, the dropdown direction will be automatically calculated based on the scroll parent container.
Only supported in H5.

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

### Overriding Styles via Class Names

Passing the `className` attribute allows you to override styles.
The `className` will be mounted on the root component and will also be mounted on the dropdown container in the form of `className-option-container`.

```tsx
import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

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

| Property      | Description                          | Type                                             | Default |
| ------------- | ------------------------------------ | ------------------------------------------------ | ------- |
| inputRef      | Selector inputRef                    | Ref                                              | -       |
| inputProps    | Props passed to `<input/>` tag       | React.InputHTMLAttributes                        | -       |
| BackdropProps | Props passed to `<Backdrop/>` tag    | React.DivHTMLAttributes                          | -       |
| name          | Name identifier for `<input/>` tag   | string                                           | -       |
| value         | Selected value                       | string ｜ number                                 | -       |
| defaultValue  | Default value                        | string ｜ number                                 | -       |
| placeholder   | Placeholder content                  | ReactNode                                        | -       |
| icon          | Selector icon                        | ReactNode                                        | -       |
| disabled      | Whether the selector is clickable    | boolean                                          | false   |
| open          | Whether the dropdown is open         | boolean                                          | false   |
| onChange      | Callback when an item is selected    | (e: SyntheticEvent, data:{value:string}) => void | -       |
| onOpen        | Callback when the dropdown expands   | () => void                                       | -       |
| onClose       | Callback when the dropdown collapses | () => void                                       | -       |

##### SelectOptionProps

| Property | Description     | Type             | Default |
| -------- | --------------- | ---------------- | ------- |
| label    | Fill content    | ReactNode        | -       |
| value    | Option value    | string ｜ number | -       |
| disabled | Clickable state | boolean          | false   |

### Style Variables

| Property                      | Description                 | Default Value           | Global Variable                       |
| ----------------------------- | --------------------------- | ----------------------- | ------------------------------------- |
| --height                      | Selector height             | 27px                    | --bui-select-height                   |
| --mini-width                  | Minimum width               | 100px                   | --bui-select-mini-width               |
| --font-size                   | Font size                   | var(--bui-title-size-3) | --bui-select-font-size                |
| --padding                     | Padding                     | 100px                   | --bui-select-mini-width               |
| --option-container-padding    | Overall padding of dropdown | 3px 0                   | --bui-select-option-container-padding |
| --option-container-margin-top | Top margin of dropdown      | 6px                     | --bui-select-option-margin-top        |
| --option-padding              | Padding of each option      | 0 14px                  | --bui-select-option-padding           |
| --option-margin               | Margin of each option       | 0 3px                   | --bui-select-option-margin            |
| --option-height               | Height of each option       | 27px                    | --bui-select-option-height            |
