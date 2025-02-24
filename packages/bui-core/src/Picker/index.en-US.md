---
group: feedback
name: Picker selector
---

# Picker selector

Provide multiple sets of options for users to choose from. It should be noted that it is not allowed to confirm the closure of the selector during inertial scrolling.

## Code demonstration

### Basic selector

Use 'open' to control the selector's on/off, and events such as clicking on the mask layer to close it will be returned through the 'onClose' callback

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
        打开选择器
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

### Custom Text

You can customize the text by configuring `title`, `confirmText`, and `cancelText`.

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

By passing the 'options' property into a two-dimensional array, a multi column selector can be implemented.

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

Cascade selectors can be implemented through the 'children' field in the 'options' attribute sub item.

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

Asynchronous retrieval of 'options' data source.

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

The 'value' attribute allows you to specify the default selected option.

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

Legitimate attributes can be passed transparently to internal content DOM elements through the 'contentProps' attribute.

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

By listening to 'onConfirm', the callback event for clicking the confirm button can be obtained, and the 'onClose' event will be triggered after the event ends.

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

### Correct the parameters in the callback function

If the passed 'value' is not an equal subset of 'options', the' value 'field in the callback function will be automatically corrected when the selector is closed, making it an option that exists in' options'.

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

By monitoring 'onOptionChange', real-time callback events can be obtained for each column value change.

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

By monitoring 'onCancel', the callback event for the cancel button click can be obtained, and the 'onClose' event will be triggered after the event ends.

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

### disabled options

By setting the `disabled` property of an `option` to true, you can disable the specified option. When in a disabled state, the option will not trigger the `onConfirm` event but will trigger the `onOptionChange` event. You can determine whether the current option is disabled by checking the `currentOption.disabled` property returned in the event.

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
        onOptionChange={(e, { currentOption }) => {
          console.log('onOptionChange', currentOption.disabled);
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
                    disabled: true,
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
                disabled: true,
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

### custom style

Custom styles can be achieved through the Tokens provided by [Style Variables] (# Style Variables).

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

| attribute      | explain                                   | type                                                                                                                                                                                                | Default value |
| -------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| open           | Do you want to display the selector       | boolean                                                                                                                                                                                             | false         |
| title          | title                                     | string                                                                                                                                                                                              | -             |
| confirmText    | Confirmation text content                 | string                                                                                                                                                                                              | Confirm       |
| cancelText     | Cancellation text content                 | string                                                                                                                                                                                              | Cancel        |
| options        | List data                                 | IPickerOptionItem[][] \|ICascadePickerOptionItem[]                                                                                                                                                  | []            |
| value          | Selected values                           | (string \|number)[]                                                                                                                                                                                 | -             |
| contentProps   | Props on drawer content DOM node          | React.HTMLAttributes\<HTMLDivElement\>                                                                                                                                                              | -             |
| onConfirm      | Callback when clicking the confirm button | (e: React.MouseEvent<HTMLDivElement\>,data: { value: (string \|number)[]; options: ICascadePickerChildOptionItem[][]}) => void                                                                      | -             |
| onOptionChange | Callback when option value changes        | (e: React.TransitionEvent<HTMLDivElement\>,data: { value: (string \|number)[];options: ICascadePickerChildOptionItem[][];currentOption: ICascadePickerChildOptionItem;columnIndex: number}) => void | -             |
| onCancel       | Callback when clicking the cancel button  | (e: React.MouseEvent<HTMLDivElement\>) => void                                                                                                                                                      | -             |
| onClose        | Execute when closing the selector         | (e: React.MouseEvent<HTMLDivElement\>,data: {from: string;value: (string \|number)[];options: ICascadePickerChildOptionItem[][]}) => void                                                           | -             |

### PickerPanel

| attribute   | explain                                 | type                                                                                                                        | Default value |
| ----------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------- |
| options     | List data of a single column panel      | ICascadePickerChildOptionItem[]                                                                                             | []            |
| value       | selected value for single column panels | string \|number                                                                                                             | -             |
| columnIndex | Li Suo Yin                              | number                                                                                                                      | -             |
| onSelect    | Callback when clicking on an option     | (e: React.TransitionEvent<HTMLDivElement\>,data: {columnOption: ICascadePickerChildOptionItem;columnIndex: number}) => void | -             |

#### IPickerOptionItem

| attribute | explain                             | type            | Default value |
| --------- | ----------------------------------- | --------------- | ------------- |
| label     | Text content of options             | string \|number | -             |
| value     | Options correspond to unique values | string \|number | -             |

#### ICascadePickerOptionItem

| attribute | explain                              | type                       | Default value |
| --------- | ------------------------------------ | -------------------------- | ------------- |
| label     | Text content of options              | string \|number            | -             |
| value     | Options correspond to unique values  | string \|number            | -             |
| children  | Used for cascading options, required | ICascadePickerOptionItem[] | -             |

#### ICascadePickerChildOptionItem

| attribute | explain                                  | type                       | Default value |
| --------- | ---------------------------------------- | -------------------------- | ------------- |
| label     | Text content of options                  | string \|number            | -             |
| value     | Options correspond to unique values      | string \|number            | -             |
| children  | Used for cascading options, not required | ICascadePickerOptionItem[] | -             |

Picker inherits from Drawer. Other properties can be found in the Drawer API (/ores/Drawer? # API)

### Style variables

| attribute                | explain                                                                      | Default value              | global variable                     |
| ------------------------ | ---------------------------------------------------------------------------- | -------------------------- | ----------------------------------- |
| --header-height          | Selector head height                                                         | 50px                       | --bui-picker-header-height          |
| --header-padding         | Select the inner margin of the head of the selector                          | 0 var(--bui-spacing-lg)    | --bui-picker-header-padding         |
| --cancel-height          | Cancel button height                                                         | 100%                       | --bui-picker-cancel-height          |
| --cancel-line-height     | Cancel button row height                                                     | 50px                       | --bui-picker-cancel-line-height     |
| --confirm-height         | Confirm button height                                                        | 100%                       | --bui-picker-confirm-height         |
| --confirm-line-height    | Confirm button row height                                                    | 50px                       | --bui-picker-confirm-line-height    |
| --panel-container-height | Select container height                                                      | 260px                      | --bui-picker-panel-height           |
| --indicator-top          | Indicator distance from top                                                  | 108px                      | --bui-picker-indicator-top          |
| --indicator-border-color | Indicator stroke color                                                       | --bui-color-border-default | --bui-picker-indicator-border-color |
| --option-height          | Option height, at the same height as the indicator, must be passed in inline | 36px                       | --bui-picker-option-height          |

#### --Why is option height passed in inline

The logic layer of the Picker component needs to dynamically obtain the value of '--option-height' to calculate the height of the sliding panel. If it is not passed in the inline style, this value cannot be obtained in tsx.
