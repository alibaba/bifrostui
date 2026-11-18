---
group: Feedback

name: Picker Selector
---

# Picker Selector

Provides multiple sets of options for the user to choose one from, supporting single column, multi-column, cascading, and other modes. Suitable for forms, filtering, and similar scenarios. **Note: During inertia scrolling, the selector cannot be closed by confirmation.**

## Basic Usage

Use `open` to control the opening/closing of the picker. Events like closing via the mask layer will be returned through the `onClose` callback.

```tsx
import React, { useState, useEffect } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState<(string | number)[]>([2]);

  useEffect(() => {
    console.log(val);
  }, [val]);

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        value={val}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: 'Monday',
            },
            {
              value: 2,
              label: 'Tuesday',
            },
            {
              value: 3,
              label: 'Wednesday',
            },
            {
              value: 4,
              label: 'Thursday',
            },
            {
              value: 5,
              label: 'Friday',
            },
            {
              value: 6,
              label: 'Saturday',
            },
            {
              value: 7,
              label: 'Sunday',
            },
          ],
        ]}
      />
    </Stack>
  );
};
```

## Custom Labels

Customize header text through `title`, `confirmText`, and `cancelText`.

```tsx
import React, { useState } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        title="Please Select"
        confirmText="Yes"
        cancelText="No"
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: 'Monday',
            },
            {
              value: 2,
              label: 'Tuesday',
            },
            {
              value: 3,
              label: 'Wednesday',
            },
            {
              value: 4,
              label: 'Thursday',
            },
            {
              value: 5,
              label: 'Friday',
            },
            {
              value: 6,
              label: 'Saturday',
            },
            {
              value: 7,
              label: 'Sunday',
            },
          ],
        ]}
      />
    </Stack>
  );
};
```

## Multi-Column Mode

Implement multi-column selection by passing a two-dimensional array to `options`.

```tsx
import React, { useState } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: 'Monday',
            },
            {
              value: 2,
              label: 'Tuesday',
            },
            {
              value: 3,
              label: 'Wednesday',
            },
            {
              value: 4,
              label: 'Thursday',
            },
            {
              value: 5,
              label: 'Friday',
            },
            {
              value: 6,
              label: 'Saturday',
            },
            {
              value: 7,
              label: 'Sunday',
            },
          ],
          [
            {
              value: 1,
              label: 'Morning',
            },
            {
              value: 2,
              label: 'Noon',
            },
            {
              value: 3,
              label: 'Afternoon',
            },
          ],
        ]}
      />
    </Stack>
  );
};
```

## Cascading Mode

Implement cascading selection through the `children` field of `options` sub-items.

```tsx
import React, { useState } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          {
            value: 1,
            label: 'Beijing',
            children: [
              {
                value: 1,
                label: 'Chaoyang District',
                children: [
                  {
                    value: 1,
                    label: 'Chaoyang Street',
                  },
                ],
              },
              {
                value: 2,
                label: 'Haidian District',
              },
              {
                value: 3,
                label: 'Daxing District',
              },
              {
                value: 4,
                label: 'Dongcheng District',
              },
              {
                value: 5,
                label: 'Xicheng District',
              },
              {
                value: 6,
                label: 'Fengtai District',
              },
            ],
          },
          {
            value: 2,
            label: 'Shanghai',
            children: [
              {
                value: 1,
                label: 'Huangpu District',
              },
              {
                value: 2,
                label: 'Changning District',
              },
              {
                value: 3,
                label: 'Putuo District',
              },
              {
                value: 4,
                label: 'Yangpu District',
              },
              {
                value: 5,
                label: 'Pudong New Area',
              },
              {
                value: 6,
                label: 'Xuhui District',
                children: [
                  {
                    value: 1,
                    label: 'Longyao Road',
                  },
                  {
                    value: 2,
                    label: 'Yunjin Road',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};
```

## Asynchronous Data Sources

Support asynchronous loading of `options`.

```tsx
import React, { useState, useEffect } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const mockData = [
    {
      value: 1,
      label: 'Beijing',
      children: [
        {
          value: 1,
          label: 'Chaoyang District',
          children: [
            {
              value: 1,
              label: 'Chaoyang Street',
            },
          ],
        },
        {
          value: 2,
          label: 'Haidian District',
        },
        {
          value: 3,
          label: 'Daxing District',
        },
        {
          value: 4,
          label: 'Dongcheng District',
        },
        {
          value: 5,
          label: 'Xicheng District',
        },
        {
          value: 6,
          label: 'Fengtai District',
        },
      ],
    },
    {
      value: 2,
      label: 'Shanghai',
    },
  ];
  const [val, setVal] = useState<(string | number)[]>([]);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setOptions(mockData);
    }, 1000);
  }, []);

  const handleChange = (e, { value }) => {
    const shanghai = [
      {
        value: 1,
        label: 'Huangpu District',
      },
      {
        value: 2,
        label: 'Changning District',
      },
      {
        value: 3,
        label: 'Putuo District',
      },
      {
        value: 4,
        label: 'Yangpu District',
      },
      {
        value: 5,
        label: 'Pudong New Area',
      },
      {
        value: 6,
        label: 'Xuhui District',
        children: [
          {
            value: 1,
            label: 'Longyao Road',
          },
          {
            value: 2,
            label: 'Yunjin Road',
          },
        ],
      },
    ];
    if (value?.[0] === 2) {
      setTimeout(() => {
        setOptions((prev) => {
          const data = prev;
          data[1].children = shanghai;
          return [...data];
        });
      }, 50);
    }
    setVal(value);
  };

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        value={val}
        onOptionChange={handleChange}
        options={options}
      />
    </Stack>
  );
};
```

## Select Specific Option

Specify the default selected item with `value`.

```tsx
import React, { useState } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        value={[2, 6, 2]}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          {
            value: 1,
            label: 'Beijing',
            children: [
              {
                value: 1,
                label: 'Chaoyang District',
                children: [
                  {
                    value: 1,
                    label: 'Chaoyang Street',
                  },
                ],
              },
              {
                value: 2,
                label: 'Haidian District',
              },
              {
                value: 3,
                label: 'Daxing District',
              },
              {
                value: 4,
                label: 'Dongcheng District',
              },
              {
                value: 5,
                label: 'Xicheng District',
              },
              {
                value: 6,
                label: 'Fengtai District',
              },
            ],
          },
          {
            value: 2,
            label: 'Shanghai',
            children: [
              {
                value: 1,
                label: 'Huangpu District',
              },
              {
                value: 2,
                label: 'Changning District',
              },
              {
                value: 3,
                label: 'Putuo District',
              },
              {
                value: 4,
                label: 'Yangpu District',
              },
              {
                value: 5,
                label: 'Pudong New Area',
              },
              {
                value: 6,
                label: 'Xuhui District',
                children: [
                  {
                    value: 1,
                    label: 'Longyao Road',
                  },
                  {
                    value: 2,
                    label: 'Yunjin Road',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};
```

## Pass Attributes to Content DOM

Pass properties to the content area via `contentProps`.

```tsx
import React, { useState } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        contentProps={{
          style: {
            height: 400,
          },
        }}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: 'Monday',
            },
            {
              value: 2,
              label: 'Tuesday',
            },
            {
              value: 3,
              label: 'Wednesday',
            },
            {
              value: 4,
              label: 'Thursday',
            },
            {
              value: 5,
              label: 'Friday',
            },
            {
              value: 6,
              label: 'Saturday',
            },
            {
              value: 7,
              label: 'Sunday',
            },
          ],
        ]}
      />
    </Stack>
  );
};
```

## Confirm Selection

Listen for the `onConfirm` event to get confirmation button click events. After this event, the `onClose` event will be triggered.

```tsx
import React, { useState } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState<(string | number)[]>([]);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        onConfirm={(e, data) => {
          console.log('onConfirm', e, data);
          const { value } = data;
          setVal(value);
        }}
        value={val}
        onClose={(e, data) => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: 'Beijing',
            children: [
              {
                value: 1,
                label: 'Chaoyang District',
                children: [
                  {
                    value: 1,
                    label: 'Chaoyang Street',
                  },
                ],
              },
              {
                value: 2,
                label: 'Haidian District',
              },
              {
                value: 3,
                label: 'Daxing District',
              },
              {
                value: 4,
                label: 'Dongcheng District',
              },
              {
                value: 5,
                label: 'Xicheng District',
              },
              {
                value: 6,
                label: 'Fengtai District',
              },
            ],
          },
          {
            value: 2,
            label: 'Shanghai',
            children: [
              {
                value: 1,
                label: 'Huangpu District',
              },
              {
                value: 2,
                label: 'Changning District',
              },
              {
                value: 3,
                label: 'Putuo District',
              },
              {
                value: 4,
                label: 'Yangpu District',
              },
              {
                value: 5,
                label: 'Pudong New Area',
              },
              {
                value: 6,
                label: 'Xuhui District',
                children: [
                  {
                    value: 1,
                    label: 'Longyao Road',
                  },
                  {
                    value: 2,
                    label: 'Yunjin Road',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};
```

## Correct Parameters in Callback

When closing the picker, if `value` is not a subset of the same length as `options`, the `value` field in the callback will be automatically corrected.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState<(string | number)[]>([2, 100]);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        onConfirm={(e, data) => {
          console.log('onConfirm', e, data);
          const { value } = data;
          setVal(value);
        }}
        value={val}
        onClose={(e, data) => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: 'Beijing',
            children: [
              {
                value: 1,
                label: 'Chaoyang District',
                children: [
                  {
                    value: 1,
                    label: 'Chaoyang Street',
                  },
                ],
              },
              {
                value: 2,
                label: 'Haidian District',
              },
              {
                value: 3,
                label: 'Daxing District',
              },
              {
                value: 4,
                label: 'Dongcheng District',
              },
              {
                value: 5,
                label: 'Xicheng District',
              },
              {
                value: 6,
                label: 'Fengtai District',
              },
            ],
          },
          {
            value: 2,
            label: 'Shanghai',
            children: [
              {
                value: 1,
                label: 'Huangpu District',
              },
              {
                value: 2,
                label: 'Changning District',
              },
              {
                value: 3,
                label: 'Putuo District',
              },
              {
                value: 4,
                label: 'Yangpu District',
              },
              {
                value: 5,
                label: 'Pudong New Area',
              },
              {
                value: 6,
                label: 'Xuhui District',
                children: [
                  {
                    value: 1,
                    label: 'Longyao Road',
                  },
                  {
                    value: 2,
                    label: 'Yunjin Road',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};
```

## Callback on Value Change

Listen for `onOptionChange` to get the event when each column's value changes.

```tsx
import React, { useState } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        onClose={(e, data) => {
          setOpen(false);
        }}
        onOptionChange={(e, data) => {
          console.log('onOptionChange', e, data);
        }}
        options={[
          {
            value: 1,
            label: 'Beijing',
            children: [
              {
                value: 1,
                label: 'Chaoyang District',
                children: [
                  {
                    value: 1,
                    label: 'Chaoyang Street',
                  },
                ],
              },
              {
                value: 2,
                label: 'Haidian District',
              },
              {
                value: 3,
                label: 'Daxing District',
              },
              {
                value: 4,
                label: 'Dongcheng District',
              },
              {
                value: 5,
                label: 'Xicheng District',
              },
              {
                value: 6,
                label: 'Fengtai District',
              },
            ],
          },
          {
            value: 2,
            label: 'Shanghai',
            children: [
              {
                value: 1,
                label: 'Huangpu District',
              },
              {
                value: 2,
                label: 'Changning District',
              },
              {
                value: 3,
                label: 'Putuo District',
              },
              {
                value: 4,
                label: 'Yangpu District',
              },
              {
                value: 5,
                label: 'Pudong New Area',
              },
              {
                value: 6,
                label: 'Xuhui District',
                children: [
                  {
                    value: 1,
                    label: 'Longyao Road',
                  },
                  {
                    value: 2,
                    label: 'Yunjin Road',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};
```

## Cancel Selection

Listen for the `onCancel` event when the cancel button is clicked. After this event, the `onClose` event will be triggered.

```tsx
import React, { useState } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        onCancel={(e) => {
          console.log('onCancel', e);
        }}
        onClose={() => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: 'Beijing',
            children: [
              {
                value: 1,
                label: 'Chaoyang District',
                children: [
                  {
                    value: 1,
                    label: 'Chaoyang Street',
                  },
                ],
              },
              {
                value: 2,
                label: 'Haidian District',
              },
              {
                value: 3,
                label: 'Daxing District',
              },
              {
                value: 4,
                label: 'Dongcheng District',
              },
              {
                value: 5,
                label: 'Xicheng District',
              },
              {
                value: 6,
                label: 'Fengtai District',
              },
            ],
          },
          {
            value: 2,
            label: 'Shanghai',
            children: [
              {
                value: 1,
                label: 'Huangpu District',
              },
              {
                value: 2,
                label: 'Changning District',
              },
              {
                value: 3,
                label: 'Putuo District',
              },
              {
                value: 4,
                label: 'Yangpu District',
              },
              {
                value: 5,
                label: 'Pudong New Area',
              },
              {
                value: 6,
                label: 'Xuhui District',
                children: [
                  {
                    value: 1,
                    label: 'Longyao Road',
                  },
                  {
                    value: 2,
                    label: 'Yunjin Road',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};
```

## Disable Options

Use `option.disabled` to disable options. Disabled items will not trigger the `onConfirm` event but will trigger the `onOptionChange` event. You can check the current option's disabled status via `currentOption.disabled`.

```tsx
import React, { useState } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        open={open}
        onCancel={(e) => {
          console.log('onCancel', e);
        }}
        onClose={() => {
          setOpen(false);
        }}
        onOptionChange={(e, { currentOption }) => {
          console.log('onOptionChange', currentOption.disabled);
        }}
        options={[
          {
            value: 1,
            label: 'Beijing',
            children: [
              {
                value: 1,
                label: 'Chaoyang District',
                children: [
                  {
                    value: 1,
                    label: 'Chaoyang Street',
                    disabled: true,
                  },
                ],
              },
              {
                value: 2,
                label: 'Haidian District',
              },
              {
                value: 3,
                label: 'Daxing District',
              },
              {
                value: 4,
                label: 'Dongcheng District',
                disabled: true,
              },
              {
                value: 5,
                label: 'Xicheng District',
              },
              {
                value: 6,
                label: 'Fengtai District',
              },
            ],
          },
          {
            value: 2,
            label: 'Shanghai',
            children: [
              {
                value: 1,
                label: 'Huangpu District',
              },
              {
                value: 2,
                label: 'Changning District',
              },
              {
                value: 3,
                label: 'Putuo District',
              },
              {
                value: 4,
                label: 'Yangpu District',
              },
              {
                value: 5,
                label: 'Pudong New Area',
              },
              {
                value: 6,
                label: 'Xuhui District',
                children: [
                  {
                    value: 1,
                    label: 'Longyao Road',
                  },
                  {
                    value: 2,
                    label: 'Yunjin Road',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};
```

## Custom Styles

Customize styles using the Tokens provided by [Style Variables](#样式变量).

```tsx
import React, { useState } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Picker
      </Button>
      <Picker
        style={{
          '--bui-picker-panel-height': '500px',
          '--bui-picker-indicator-top': '207px',
          '--bui-picker-option-height': '70px',
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: 'Beijing',
            children: [
              {
                value: 1,
                label: 'Chaoyang District',
                children: [
                  {
                    value: 1,
                    label: 'Chaoyang Street',
                  },
                ],
              },
              {
                value: 2,
                label: 'Haidian District',
              },
              {
                value: 3,
                label: 'Daxing District',
              },
              {
                value: 4,
                label: 'Dongcheng District',
              },
              {
                value: 5,
                label: 'Xicheng District',
              },
              {
                value: 6,
                label: 'Fengtai District',
              },
            ],
          },
          {
            value: 2,
            label: 'Shanghai',
            children: [
              {
                value: 1,
                label: 'Huangpu District',
              },
              {
                value: 2,
                label: 'Changning District',
              },
              {
                value: 3,
                label: 'Putuo District',
              },
              {
                value: 4,
                label: 'Yangpu District',
              },
              {
                value: 5,
                label: 'Pudong New Area',
              },
              {
                value: 6,
                label: 'Xuhui District',
                children: [
                  {
                    value: 1,
                    label: 'Longyao Road',
                  },
                  {
                    value: 2,
                    label: 'Yunjin Road',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};
```

## Accessibility

- Main accessibility features include:
  - The outer dialog uses `role="dialog"`, `aria-modal="true"`, `aria-label`.
  - The toolbar uses `role="toolbar"` and `aria-label`.
  - The title uses `role="heading"` and `aria-level`.
  - The header buttons include `aria-label`, `tabIndex`, `type="button"`.
  - The options container uses `role="listbox"` and `aria-label`, where each option has `role="option"` and `aria-disabled`.
- It is recommended to add necessary accessibility attributes when customizing `PickerPanel`.

## API

### Picker

| Attribute      | Description                       | Type                                                                                                                                                                                                        | Default   |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| open           | Whether the picker is displayed   | `boolean`                                                                                                                                                                                                   | `false`   |
| title          | Title                             | `string`                                                                                                                                                                                                    | -         |
| confirmText    | Text for the confirm button       | `string`                                                                                                                                                                                                    | `Confirm` |
| cancelText     | Text for the cancel button        | `string`                                                                                                                                                                                                    | `Cancel`  |
| options        | List data                         | `IPickerOptionItem[][] \| ICascadePickerOptionItem[]`                                                                                                                                                       | `[]`      |
| value          | Selected value                    | `(string \| number)[]`                                                                                                                                                                                      | -         |
| contentProps   | DOM attributes for content area   | `React.HTMLAttributes<HTMLDivElement>`                                                                                                                                                                      | -         |
| onConfirm      | Callback for confirm button click | `(e: React.MouseEvent<HTMLDivElement>, data: { value: (string \| number)[]; options: ICascadePickerChildOptionItem[][]; }) => void`                                                                         | -         |
| onOptionChange | Callback on option value change   | `(e: React.TransitionEvent<HTMLDivElement>, data: { value: (string \| number)[]; options: ICascadePickerChildOptionItem[][]; currentOption: ICascadePickerChildOptionItem; columnIndex: number; }) => void` | -         |
| onCancel       | Callback for cancel button click  | `(e: React.MouseEvent<HTMLDivElement>) => void`                                                                                                                                                             | -         |
| onClose        | Callback when the picker closes   | `(e: React.MouseEvent<HTMLDivElement>, data: { from: string; value: (string \| number)[]; options: ICascadePickerChildOptionItem[][]; }) => void`                                                           | -         |

### PickerPanel

| Attribute   | Description                         | Type                                                                                                                              | Default |
| ----------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| options     | List data for single column panel   | `ICascadePickerChildOptionItem[]`                                                                                                 | `[]`    |
| value       | Default value                       | `string \| number`                                                                                                                | -       |
| columnIndex | Column index                        | `number`                                                                                                                          | -       |
| open        | Whether the picker is displayed     | `boolean`                                                                                                                         | -       |
| onSelect    | Callback when an option is selected | `(e: React.TransitionEvent<HTMLDivElement>, data: { columnOption: ICascadePickerChildOptionItem; columnIndex: number; }) => void` | -       |

### Data Structure Types

#### IPickerOptionItem

| Attribute | Description                    | Type               | Default |
| --------- | ------------------------------ | ------------------ | ------- |
| label     | Option text content            | `string \| number` | -       |
| value     | Unique value for option        | `string \| number` | -       |
| disabled  | Whether the option is disabled | boolean            | -       |

#### ICascadePickerChildOptionItem

| Attribute | Description                                                           | Type                              | Default |
| --------- | --------------------------------------------------------------------- | --------------------------------- | ------- |
| label     | Option text content                                                   | `string \| number`                | -       |
| value     | Unique value for option                                               | `string \| number`                | -       |
| children  | Used for cascading options, some children may not have this attribute | `ICascadePickerChildOptionItem[]` | -       |

#### ICascadePickerOptionItem

| Attribute | Description                                                     | Type                              | Default |
| --------- | --------------------------------------------------------------- | --------------------------------- | ------- |
| label     | Option text content                                             | `string \| number`                | -       |
| value     | Unique value for option                                         | `string \| number`                | -       |
| children  | Used for cascading options, root nodes must have this attribute | `ICascadePickerChildOptionItem[]` | -       |

> `Picker` directly inherits from `Drawer`; for other attributes see [Drawer API](/cores/drawer?#api)

## Style Variables

### Picker

| Global Variable                  | Description                | Default Value             |
| -------------------------------- | -------------------------- | ------------------------- |
| --bui-picker-header-height       | Header height              | `50px`                    |
| --bui-picker-header-padding      | Header padding             | `0 var(--bui-spacing-lg)` |
| --bui-picker-cancel-height       | Cancel button height       | `100%`                    |
| --bui-picker-cancel-line-height  | Cancel button line height  | `50px`                    |
| --bui-picker-confirm-height      | Confirm button height      | `100%`                    |
| --bui-picker-confirm-line-height | Confirm button line height | `50px`                    |
| --bui-picker-panel-height        | Panel height               | `260px`                   |
| --bui-picker-indicator-top       | Indicator top position     | `108px`                   |
| --bui-picker-option-height       | Option height              | `36px`                    |
| --bui-picker-option-font-size    | Option font size           | `var(--bui-title-size-4)` |
