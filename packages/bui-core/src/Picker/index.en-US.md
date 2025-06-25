---
group: Feedback
name: Picker Selector
---

# Picker Selector

Provides a set of multiple options for users to choose one. Note that during inertial scrolling, it is not allowed to confirm and close the selector.

## Code Demonstrations

### Basic Selector

Use `open` to control the opening/closing of the selector. Clicking events like closing via the mask layer will return through the `onClose` callback.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState, useEffect } from 'react';

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
        Open Selector
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

### Setting Title

The `title` attribute can be used to specify the title of the selector.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Selector
      </Button>
      <Picker
        open={open}
        title="Please Select"
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

### Multi-column Mode

By passing a two-dimensional array via the `options` property, you can implement a multi-column selector.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Selector
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

### Cascading Mode

Using the `children` field in the sub-items of the `options` property can achieve cascading selectors.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Selector
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
                    label: 'Yunjing Road',
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

### Asynchronous Data Source Retrieval

Asynchronously retrieve the `options` data source.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState, useEffect } from 'react';

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
            label: 'Yunjing Road',
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
        Open Selector
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

### Selecting Specific Options

You can specify the default selected option using the `value` property.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Selector
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
                    label: 'Yunjing Road',
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

### Passing Attributes to Content DOM

You can pass valid attributes to internal content DOM elements via the `contentProps` attribute.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Selector
      </Button>
      <Picker
        open={open}
        contentProps={{
          style: {
            height: '400px',
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

### Confirm Selection

By listening to `onConfirm`, you can obtain the callback event when the confirmation button is clicked. After this event ends, the `onClose` event will be triggered.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

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
        Open Selector
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
                    label: 'Yunjing Road',
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

### Correcting Parameters in Callbacks

If the passed `value` is not a subset of equal length to `options`, the `value` field in callbacks will be automatically corrected upon closing the selector to match an existing option in `options`.

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
        Open Selector
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
                    label: 'Yunjing Road',
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

### Callback on Value Change

By listening to `onOptionChange`, you can obtain real-time callbacks whenever the value of each column changes.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Selector
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
                    label: 'Yunjing Road',
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

### Cancel Selection

By listening to `onCancel`, you can obtain the callback event when the cancel button is clicked. This event ends with the triggering of the `onClose` event.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Selector
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
                    label: 'Yunjing Road',
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

### Customizing Styles

Through the Tokens provided by [style variables](#style-variables), you can customize styles.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Selector
      </Button>
      <Picker
        style={{
          '--panel-container-height': '500px',
          '--indicator-top': '207px',
          '--option-height': '70px',
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
                    label: 'Yunjing Road',
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

## API

### Picker

| Property       | Description                             | Type                                                                                                                                                                        | Default |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| open           | Whether to display the selector         | boolean                                                                                                                                                                     | false   |
| title          | Title                                   | string                                                                                                                                                                      | -       |
| options        | List data                               | IPickerOptionItem[][] \| ICascadePickerOptionItem[]                                                                                                                         | []      |
| value          | Selected value                          | (string \| number)[]                                                                                                                                                        | -       |
| contentProps   | Props on the drawer content DOM         | React.HTMLAttributes\<HTMLDivElement\>                                                                                                                                      | -       |
| onConfirm      | Callback when confirm button is clicked | (e: React.MouseEvent<HTMLDivElement\>,data: { value: (string \| number)[]; options: ICascadePickerChildOptionItem[][]}) => void                                             | -       |
| onOptionChange | Callback when option value changes      | (e: React.TransitionEvent<HTMLDivElement\>,data: { value: (string \| number)[];options: ICascadePickerChildOptionItem[][];currentOption: ICascadePickerOptionItem}) => void | -       |
| onCancel       | Callback when cancel button is clicked  | (e: React.MouseEvent<HTMLDivElement\>) => void                                                                                                                              | -       |
| onClose        | Executed when closing the selector      | (e: React.MouseEvent<HTMLDivElement\>,data: {from: string;value: (string \| number)[];options: ICascadePickerChildOptionItem[][]}) => void                                  | -       |

### PickerPanel

| Property     | Description                       | Type                                                                                                                        | Default |
| ------------ | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| options      | Single-column panel list data     | ICascadePickerChildOptionItem[]                                                                                             | []      |
| defaultValue | Single-column panel default value | string \| number                                                                                                            | -       |
| columnIndex  | Column index                      | number                                                                                                                      | -       |
| onSelect     | Callback when option is clicked   | (e: React.TransitionEvent<HTMLDivElement\>,data: {columnOption: ICascadePickerChildOptionItem;columnIndex: number}) => void | -       |

#### IPickerOptionItem

| Property | Description                    | Type             | Default |
| -------- | ------------------------------ | ---------------- | ------- |
| label    | Option text content            | string \| number | -       |
| value    | Unique value for the option    | string \| number | -       |
| disabled | Whether the option is disabled | boolean          | -       |

#### ICascadePickerOptionItem

| Property | Description                   | Type                       | Default |
| -------- | ----------------------------- | -------------------------- | ------- |
| label    | Option text content           | string \| number           | -       |
| value    | Unique value for the option   | string \| number           | -       |
| children | For cascade options, required | ICascadePickerOptionItem[] | -       |

#### ICascadePickerChildOptionItem

| Property | Description                   | Type                       | Default |
| -------- | ----------------------------- | -------------------------- | ------- |
| label    | Option text content           | string \| number           | -       |
| value    | Unique value for the option   | string \| number           | -       |
| children | For cascade options, optional | ICascadePickerOptionItem[] | -       |

`Picker` inherits other properties from `Drawer`. See [Drawer API](/cores/drawer?#API)

### Style Variables

| Property                 | Description                                             | Default Value              | Global Variable                       |
| ------------------------ | ------------------------------------------------------- | -------------------------- | ------------------------------------- |
| --header-height          | Selector header height                                  | 50px                       | --bui-picker-header-height            |
| --header-padding         | Selector header padding                                 | 0 var(--bui-spacing-lg)    | --bui-picker-header-padding           |
| --cancel-height          | Cancel button height                                    | 100%                       | --bui-picker-cancel-height            |
| --cancel-line-height     | Cancel button line height                               | 50px                       | --bui-picker-cancel-line-height       |
| --confirm-height         | Confirm button height                                   | 100%                       | --bui-picker-confirm-height           |
| --confirm-line-height    | Confirm button line height                              | 50px                       | --bui-picker-confirm-line-height      |
| --panel-container-height | Selector container height                               | 260px                      | --bui-picker-panel-height             |
| --indicator-top          | Distance from top to indicator                          | 108px                      | --bui-picker-indicator-top            |
| --indicator-border-color | Indicator border color                                  | --bui-color-border-default | --bui-picker-indicator-border-color   |
| --option-height          | Option height, same as indicator height, must be inline | 36px                       | --bui-picker-option-height            |
| -                        | The opacity of the confirm button when disabled         | 0.38                       | --bui-picker-confirm-disabled-opacity |
| -                        | The opacity of the option when disabled                 | 0.38                       | --bui-picker-option-disabled-opacity  |

#### Why Use Inline Style for `--option-height`

The Picker component's logic layer needs to dynamically retrieve the value of `--option-height` to calculate the scrollable panel height. If it is not passed inline in the style, the value cannot be obtained in tsx.
