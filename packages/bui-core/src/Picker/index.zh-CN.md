---
group: 反馈
name: Picker 选择器
---

# Picker 选择器

提供多个选项集合供用户选择其中一项。需要注意的是，处于惯性滚动过程中不允许确认关闭选择器。

## 代码演示

### 基础选择器

使用`open`控制选择器的打开/关闭，点击遮罩层等关闭的事件会通过`onClose`回调返回

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

### 设置标题

使用`title`属性可指定选择器标题。

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

### 多列模式

通过`options`属性传入二维数组，可以实现多列选择器。

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

### 级联模式

通过`options`属性子项中的`children`字段，可以实现级联选择器。

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

### 异步获取数据源

异步获取`options`数据源。

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

### 选中指定选项

通过`value`属性可指定默认选中的选项。

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

### 透传属性到内容DOM上

可通过`contentProps`属性透传合法的属性到内部内容DOM元素上。

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

### 确认选择

通过监听`onConfirm`，可获取确认按钮点击的回调事件，该事件结束后会触发`onClose`事件。

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

### 纠正回调函数中的参数

若传入的 `value` 不是 `options` 的等长子集，在关闭选择器时会自动纠正回调函数中的 `value` 字段，使其为 `options` 中存在的选项。

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

### 值改变时的回调

通过监听`onOptionChange`，可获取实时获取每列值改变时的回调事件。

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

### 取消选择

通过监听`onCancel`，可获取取消按钮点击的回调事件，该事件结束后会触发`onClose`事件。

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

### 自定义样式

通过[样式变量](#样式变量)提供的Tokens，可实现自定义样式。

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

| 属性           | 说明                     | 类型                                                                                                                                                                        | 默认值 |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| open           | 是否展示选择器           | boolean                                                                                                                                                                     | false  |
| title          | 标题                     | string                                                                                                                                                                      | -      |
| options        | 列表数据                 | IPickerOptionItem[][] \| ICascadePickerOptionItem[]                                                                                                                         | []     |
| value          | 选中的值                 | (string \| number)[]                                                                                                                                                        | -      |
| contentProps   | 抽屉内容DOM节点上的Props | React.HTMLAttributes\<HTMLDivElement\>                                                                                                                                      | -      |
| onConfirm      | 点击确认按钮时候回调     | (e: React.MouseEvent<HTMLDivElement\>,data: { value: (string \| number)[]; options: ICascadePickerChildOptionItem[][]}) => void                                             | -      |
| onOptionChange | 选项值变更时的回调       | (e: React.TransitionEvent<HTMLDivElement\>,data: { value: (string \| number)[];options: ICascadePickerChildOptionItem[][];currentOption: ICascadePickerOptionItem}) => void | -      |
| onCancel       | 点击取消按钮时候回调     | (e: React.MouseEvent<HTMLDivElement\>) => void                                                                                                                              | -      |
| onClose        | 关闭选择器时执行         | (e: React.MouseEvent<HTMLDivElement\>,data: {from: string;value: (string \| number)[];options: ICascadePickerChildOptionItem[][]}) => void                                  | -      |

### PickerPanel

| 属性         | 说明               | 类型                                                                                                                        | 默认值 |
| ------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------- | ------ |
| options      | 单列面板的列表数据 | ICascadePickerChildOptionItem[]                                                                                             | []     |
| defaultValue | 单列面板的默认值   | string \| number                                                                                                            | -      |
| columnIndex  | 列索引             | number                                                                                                                      | -      |
| onSelect     | 点击选项时的回调   | (e: React.TransitionEvent<HTMLDivElement\>,data: {columnOption: ICascadePickerChildOptionItem;columnIndex: number}) => void | -      |

#### IPickerOptionItem

| 属性  | 说明             | 类型             | 默认值 |
| ----- | ---------------- | ---------------- | ------ |
| label | 选项的文字内容   | string \| number | -      |
| value | 选项对应唯一的值 | string \| number | -      |

#### ICascadePickerOptionItem

| 属性     | 说明               | 类型                       | 默认值 |
| -------- | ------------------ | -------------------------- | ------ |
| label    | 选项的文字内容     | string \| number           | -      |
| value    | 选项对应唯一的值   | string \| number           | -      |
| children | 用于级联选项，必须 | ICascadePickerOptionItem[] | -      |

#### ICascadePickerChildOptionItem

| 属性     | 说明               | 类型                       | 默认值 |
| -------- | ------------------ | -------------------------- | ------ |
| label    | 选项的文字内容     | string \| number           | -      |
| value    | 选项对应唯一的值   | string \| number           | -      |
| children | 用于级联选项，可选 | ICascadePickerOptionItem[] | -      |

`Picker` 继承自 `Drawer` 其他属性见 [Drawer API](/cores/drawer?#API)

### 样式变量

| 属性                     | 说明                                        | 默认值                     | 全局变量                            |
| ------------------------ | ------------------------------------------- | -------------------------- | ----------------------------------- |
| --header-height          | 选择器头部高度                              | 50px                       | --bui-picker-header-height          |
| --header-padding         | 选择器头部内边距                            | 0 var(--bui-spacing-lg)    | --bui-picker-header-padding         |
| --cancel-height          | 取消按钮高度                                | 100%                       | --bui-picker-cancel-height          |
| --cancel-line-height     | 取消按钮行高                                | 50px                       | --bui-picker-cancel-line-height     |
| --confirm-height         | 确认按钮高度                                | 100%                       | --bui-picker-confirm-height         |
| --confirm-line-height    | 确认按钮行高                                | 50px                       | --bui-picker-confirm-line-height    |
| --panel-container-height | 选择器容器高度                              | 260px                      | --bui-picker-panel-height           |
| --indicator-top          | 指示器距离顶部距离                          | 108px                      | --bui-picker-indicator-top          |
| --indicator-border-color | 指示器描边颜色                              | --bui-color-border-default | --bui-picker-indicator-border-color |
| --option-height          | 选项高度，与indicator同高，必须使用内联传入 | 36px                       | --bui-picker-option-height          |

#### --option-height 为什么要使用内联方式传入

Picker组件逻辑层需要动态获取`--option-height`的值，用于计算滑动面板的高度，若不在内联style中传入，tsx中无法获取到该值。
