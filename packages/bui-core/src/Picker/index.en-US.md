---
group: feedback
name: Picker
---

# Picker

Provide multiple sets of options for users to choose from. It should be noted that it is not allowed to confirm the closure of the selector during inertial scrolling.

## Code demonstration

### Basic selector

Use`open` the opening/closing of the selector, clicking on the mask layer, and other events to close it will pass through`onClose` adjust back

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
        打开选择器
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
              label: '周一',
            },
            {
              value: 2,
              label: '周二',
            },
            {
              value: 3,
              label: '周三',
            },
            {
              value: 4,
              label: '周四',
            },
            {
              value: 5,
              label: '周五',
            },
            {
              value: 6,
              label: '周六',
            },
            {
              value: 7,
              label: '周日',
            },
          ],
        ]}
      />
    </Stack>
  );
};
```

### Set Title

Use`title` the selector title can be specified.

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
        打开选择器
      </Button>
      <Picker
        open={open}
        title="请选择"
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: '周一',
            },
            {
              value: 2,
              label: '周二',
            },
            {
              value: 3,
              label: '周三',
            },
            {
              value: 4,
              label: '周四',
            },
            {
              value: 5,
              label: '周五',
            },
            {
              value: 6,
              label: '周六',
            },
            {
              value: 7,
              label: '周日',
            },
          ],
        ]}
      />
    </Stack>
  );
};
```

### Multi column mode

Adopt`options` sex can be passed into a two-dimensional array to implement a multi column selector.

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
        打开选择器
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
              label: '周一',
            },
            {
              value: 2,
              label: '周二',
            },
            {
              value: 3,
              label: '周三',
            },
            {
              value: 4,
              label: '周四',
            },
            {
              value: 5,
              label: '周五',
            },
            {
              value: 6,
              label: '周六',
            },
            {
              value: 7,
              label: '周日',
            },
          ],
          [
            {
              value: 1,
              label: '上午',
            },
            {
              value: 2,
              label: '中午',
            },
            {
              value: 3,
              label: '下午',
            },
          ],
        ]}
      />
    </Stack>
  );
};
```

### concatenated mode

Adopt`options` in the sub item`children` segments can implement cascaded selectors.

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
        打开选择器
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
            label: '北京',
            children: [
              {
                value: 1,
                label: '朝阳区',
                children: [
                  {
                    value: 1,
                    label: '朝阳街',
                  },
                ],
              },
              {
                value: 2,
                label: '海淀区',
              },
              {
                value: 3,
                label: '大兴区',
              },
              {
                value: 4,
                label: '东城区',
              },
              {
                value: 5,
                label: '西城区',
              },
              {
                value: 6,
                label: '丰台区',
              },
            ],
          },
          {
            value: 2,
            label: '上海',
            children: [
              {
                value: 1,
                label: '黄埔区',
              },
              {
                value: 2,
                label: '长宁区',
              },
              {
                value: 3,
                label: '普陀区',
              },
              {
                value: 4,
                label: '杨浦区',
              },
              {
                value: 5,
                label: '浦东新区',
              },
              {
                value: 6,
                label: '徐汇区',
                children: [
                  {
                    value: 1,
                    label: '龙耀路',
                  },
                  {
                    value: 2,
                    label: '云锦路',
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

### Asynchronous acquisition of data source

Asynchronous retrieval`options` according to the source.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState, useEffect } from 'react';

export default () => {
  const mockData = [
    {
      value: 1,
      label: '北京',
      children: [
        {
          value: 1,
          label: '朝阳区',
          children: [
            {
              value: 1,
              label: '朝阳街',
            },
          ],
        },
        {
          value: 2,
          label: '海淀区',
        },
        {
          value: 3,
          label: '大兴区',
        },
        {
          value: 4,
          label: '东城区',
        },
        {
          value: 5,
          label: '西城区',
        },
        {
          value: 6,
          label: '丰台区',
        },
      ],
    },
    {
      value: 2,
      label: '上海',
    },
  ];
  const [val, setVal] = useState([]);
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
        label: '黄埔区',
      },
      {
        value: 2,
        label: '长宁区',
      },
      {
        value: 3,
        label: '普陀区',
      },
      {
        value: 4,
        label: '杨浦区',
      },
      {
        value: 5,
        label: '浦东新区',
      },
      {
        value: 6,
        label: '徐汇区',
        children: [
          {
            value: 1,
            label: '龙耀路',
          },
          {
            value: 2,
            label: '云锦路',
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
        打开选择器
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

### Select the specified option

Adopt`value` you can specify the default selected option.

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
        打开选择器
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
            label: '北京',
            children: [
              {
                value: 1,
                label: '朝阳区',
                children: [
                  {
                    value: 1,
                    label: '朝阳街',
                  },
                ],
              },
              {
                value: 2,
                label: '海淀区',
              },
              {
                value: 3,
                label: '大兴区',
              },
              {
                value: 4,
                label: '东城区',
              },
              {
                value: 5,
                label: '西城区',
              },
              {
                value: 6,
                label: '丰台区',
              },
            ],
          },
          {
            value: 2,
            label: '上海',
            children: [
              {
                value: 1,
                label: '黄埔区',
              },
              {
                value: 2,
                label: '长宁区',
              },
              {
                value: 3,
                label: '普陀区',
              },
              {
                value: 4,
                label: '杨浦区',
              },
              {
                value: 5,
                label: '浦东新区',
              },
              {
                value: 6,
                label: '徐汇区',
                children: [
                  {
                    value: 1,
                    label: '龙耀路',
                  },
                  {
                    value: 2,
                    label: '云锦路',
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

### Translucent attributes to the content DOM

Can be done through`contentProps` transmitting legitimate attributes to internal content dom elements through sexual transparency.

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
        打开选择器
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
              label: '周一',
            },
            {
              value: 2,
              label: '周二',
            },
            {
              value: 3,
              label: '周三',
            },
            {
              value: 4,
              label: '周四',
            },
            {
              value: 5,
              label: '周五',
            },
            {
              value: 6,
              label: '周六',
            },
            {
              value: 7,
              label: '周日',
            },
          ],
        ]}
      />
    </Stack>
  );
};
```

### Confirm selection

By monitoring`onConfirm`，the callback event that can obtain the confirmation button click will be triggered after the event ends`onClose` item.

```tsx
import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState([]);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        打开选择器
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
            label: '北京',
            children: [
              {
                value: 1,
                label: '朝阳区',
                children: [
                  {
                    value: 1,
                    label: '朝阳街',
                  },
                ],
              },
              {
                value: 2,
                label: '海淀区',
              },
              {
                value: 3,
                label: '大兴区',
              },
              {
                value: 4,
                label: '东城区',
              },
              {
                value: 5,
                label: '西城区',
              },
              {
                value: 6,
                label: '丰台区',
              },
            ],
          },
          {
            value: 2,
            label: '上海',
            children: [
              {
                value: 1,
                label: '黄埔区',
              },
              {
                value: 2,
                label: '长宁区',
              },
              {
                value: 3,
                label: '普陀区',
              },
              {
                value: 4,
                label: '杨浦区',
              },
              {
                value: 5,
                label: '浦东新区',
              },
              {
                value: 6,
                label: '徐汇区',
                children: [
                  {
                    value: 1,
                    label: '龙耀路',
                  },
                  {
                    value: 2,
                    label: '云锦路',
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

### Callback when value changes

By monitoring`onOptionChange`，real time callback events can be obtained for each column value change.

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
        打开选择器
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
            label: '北京',
            children: [
              {
                value: 1,
                label: '朝阳区',
                children: [
                  {
                    value: 1,
                    label: '朝阳街',
                  },
                ],
              },
              {
                value: 2,
                label: '海淀区',
              },
              {
                value: 3,
                label: '大兴区',
              },
              {
                value: 4,
                label: '东城区',
              },
              {
                value: 5,
                label: '西城区',
              },
              {
                value: 6,
                label: '丰台区',
              },
            ],
          },
          {
            value: 2,
            label: '上海',
            children: [
              {
                value: 1,
                label: '黄埔区',
              },
              {
                value: 2,
                label: '长宁区',
              },
              {
                value: 3,
                label: '普陀区',
              },
              {
                value: 4,
                label: '杨浦区',
              },
              {
                value: 5,
                label: '浦东新区',
              },
              {
                value: 6,
                label: '徐汇区',
                children: [
                  {
                    value: 1,
                    label: '龙耀路',
                  },
                  {
                    value: 2,
                    label: '云锦路',
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

### Cancel selection

By monitoring`onCancel`，can obtain the callback event of the cancel button click, which will trigger after the event ends`onClose` item.

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
        打开选择器
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
            label: '北京',
            children: [
              {
                value: 1,
                label: '朝阳区',
                children: [
                  {
                    value: 1,
                    label: '朝阳街',
                  },
                ],
              },
              {
                value: 2,
                label: '海淀区',
              },
              {
                value: 3,
                label: '大兴区',
              },
              {
                value: 4,
                label: '东城区',
              },
              {
                value: 5,
                label: '西城区',
              },
              {
                value: 6,
                label: '丰台区',
              },
            ],
          },
          {
            value: 2,
            label: '上海',
            children: [
              {
                value: 1,
                label: '黄埔区',
              },
              {
                value: 2,
                label: '长宁区',
              },
              {
                value: 3,
                label: '普陀区',
              },
              {
                value: 4,
                label: '杨浦区',
              },
              {
                value: 5,
                label: '浦东新区',
              },
              {
                value: 6,
                label: '徐汇区',
                children: [
                  {
                    value: 1,
                    label: '龙耀路',
                  },
                  {
                    value: 2,
                    label: '云锦路',
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

| attribute      | explain                                   | type                                                                                                                                                                       | Default value |
| -------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| open           | Do you want to display the selector       | boolean                                                                                                                                                                    | false         |
| title          | title                                     | string                                                                                                                                                                     | -             |
| options        | List data                                 | IPickerOptionItem[][] \| ICascadePickerOptionItem[]                                                                                                                        | []            |
| value          | Selected values                           | (string \| number)[]                                                                                                                                                       | -             |
| contentProps   | Props on drawer content DOM node          | React.HTMLAttributes\<HTMLDivElement\>                                                                                                                                     | -             |
| onConfirm      | Callback when clicking the confirm button | (e: React.SyntheticEvent,data: { value: (string \| number)[]; options: ICascadePickerOptionItem[]}) => void                                                                | -             |
| onOptionChange | Callback when option value changes        | (e: React.SyntheticEvent,data: { value: (string \| number)[];options: IPickerOptionItem[][] \|ICascadePickerOptionItem[];currentOption: ICascadePickerOptionItem}) => void | -             |
| onCancel       | Callback when clicking the cancel button  | (e: React.SyntheticEvent) => void                                                                                                                                          | -             |
| onClose        | Execute when closing the selector         | (e: React.SyntheticEvent,data: {from: string;value: (string \| number)[];options: IPickerOptionItem[][] \|ICascadePickerOptionItem[]}) => void                             | -             |

### PickerPanel

| attribute    | explain                                 | type                                                                                                                        | Default value |
| ------------ | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------- |
| options      | List data of a single column panel      | IPickerOptionItem[][] \| ICascadePickerOptionItem[]                                                                         | []            |
| defaultValue | Default values for single column panels | string \| number                                                                                                            | -             |
| columnIndex  | Li Suo Yin                              | number                                                                                                                      | -             |
| onSelect     | Callback when clicking on an option     | (e: React.SyntheticEvent,data: {columnOption: IPickerOptionItem[] \| ICascadePickerOptionItem;columnIndex: number}) => void | -             |

#### IPickerOptionItem

| attribute | explain                             | type             | Default value |
| --------- | ----------------------------------- | ---------------- | ------------- |
| label     | Text content of options             | string \| number | -             |
| value     | Options correspond to unique values | string \| number | -             |

#### ICascadePickerOptionItem

| attribute | explain                             | type                       | Default value |
| --------- | ----------------------------------- | -------------------------- | ------------- |
| label     | Text content of options             | string \| number           | -             |
| value     | Options correspond to unique values | string \| number           | -             |
| children  | Used for cascading options          | ICascadePickerOptionItem[] | -             |

`Picker`inherited from`Drawer`other attributes can be found in the [Drawer API](/cores/drawer?#API)

### Style variables

| attribute                | explain                     | Default value                     | global variable |
| ------------------------ | --------------------------- | --------------------------------- | --------------- |
| --cancel-color           | Cancel button font color    | --bui-color-fg-default            | -               |
| --cancel-font-size       | Cancel button font size     | var(--bui-title-size-4, 15px)     | -               |
| --confirm-color          | Confirm button font color   | --bui-color-primary               | -               |
| --confirm-font-size      | Confirm button font size    | var(--bui-title-size-4, 15px)     | -               |
| --title-color            | Title font color            | --bui-color-fg-default            | -               |
| --title-font-size        | Title font size             | var(--bui-title-size-3, 16px)     | -               |
| --title-font-weight      | Title word duplication      | ar(--bui-font-weight-medium, 500) | -               |
| --panel-container-height | Select container height     | 260px                             | -               |
| --indicator-top          | Indicator distance from top | 108px                             | -               |
| --indicator-height       | Indicator height            | 36px                              | -               |
| --indicator-border-color | Indicator stroke color      | --bui-color-border-default        | -               |
| --option-color           | Option font color           | --bui-color-fg-default            | -               |
| --option-font-size       | Option font size            | --bui-title-size-4                | -               |
| --option-height          | Option height               | 36px                              | -               |
