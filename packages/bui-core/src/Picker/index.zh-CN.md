---
group: 反馈
name: Picker 选择器
---

# Picker 选择器

提供多个选项集合供用户选择其中一项，支持单列、多列、级联等多种模式。适用于表单、筛选等场景。**注意：处于惯性滚动过程中不允许确认关闭选择器。**

## 基础用法

使用`open`控制选择器的打开/关闭，点击遮罩层等关闭的事件会通过`onClose`回调返回。

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

## 自定义文案

通过 `title`、`confirmText`、`cancelText` 自定义头部文案。

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
        打开选择器
      </Button>
      <Picker
        open={open}
        title="请选择"
        confirmText="是"
        cancelText="否"
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

## 多列模式

通过 `options` 传二维数组实现多列选择。

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

## 级联模式

通过 `options` 子项的 `children` 字段实现级联选择。

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

## 异步获取数据源

支持异步加载 `options`。

```tsx
import React, { useState, useEffect } from 'react';
import { Button, Picker, Stack } from '@bifrostui/react';

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

## 选中指定选项

通过 `value` 指定默认选中项。

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

## 透传属性到内容 DOM

通过 `contentProps` 透传属性到内容区。

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
        打开选择器
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

## 确认选择

监听 `onConfirm` 获取确认按钮点击事件，该事件结束后会触发`onClose`事件。

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

## 纠正回调函数中的参数

关闭选择器时，若 `value` 不是 `options` 的等长子集，会自动纠正回调中的 `value` 字段。

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

## 值改变时的回调

监听 `onOptionChange` 获取每列值变更事件。

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

## 取消选择

监听 `onCancel` 获取取消按钮点击事件，该事件结束后会触发`onClose`事件。

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

## 禁用选项

通过 `option.disabled` 实现禁用，禁用项不会触发 `onConfirm`事件，但会触发`onOptionChange`事件，可以根据返回的`currentOption.disabled`来判断当前选项是否被禁用。

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

## 自定义样式

通过[样式变量](#样式变量)提供的Tokens，自定义样式。

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
        打开选择器
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

## 无障碍访问

- 主要无障碍特性包括：
  - 外层弹窗使用 `role="dialog"`、`aria-modal="true"`、`aria-label`。
  - 操作栏加 `role="toolbar"` 和 `aria-label`。
  - 标题加 `role="heading"` 和 `aria-level`。
  - 头部按钮带 `aria-label`、`tabIndex`、`type="button"`。
  - 选项容器加 `role="listbox"` 和 `aria-label`，每个选项为 `role="option"`，带 `aria-disabled`。
- 建议自定义 `PickerPanel` 时也补充必要的无障碍属性。

## API

### Picker

| 属性           | 说明             | 类型                                                                                                                                                                                                        | 默认值  |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| open           | 是否展示选择器   | `boolean`                                                                                                                                                                                                   | `false` |
| title          | 标题             | `string`                                                                                                                                                                                                    | -       |
| confirmText    | 确认文本内容     | `string`                                                                                                                                                                                                    | `确认`  |
| cancelText     | 取消文本内容     | `string`                                                                                                                                                                                                    | `取消`  |
| options        | 列表数据         | `IPickerOptionItem[][] \| ICascadePickerOptionItem[]`                                                                                                                                                       | `[]`    |
| value          | 选中的值         | `(string \| number)[]`                                                                                                                                                                                      | -       |
| contentProps   | 内容区 DOM 属性  | `React.HTMLAttributes<HTMLDivElement>`                                                                                                                                                                      | -       |
| onConfirm      | 点击确认按钮回调 | `(e: React.MouseEvent<HTMLDivElement>, data: { value: (string \| number)[]; options: ICascadePickerChildOptionItem[][]; }) => void`                                                                         | -       |
| onOptionChange | 选项值变更时回调 | `(e: React.TransitionEvent<HTMLDivElement>, data: { value: (string \| number)[]; options: ICascadePickerChildOptionItem[][]; currentOption: ICascadePickerChildOptionItem; columnIndex: number; }) => void` | -       |
| onCancel       | 点击取消按钮回调 | `(e: React.MouseEvent<HTMLDivElement>) => void`                                                                                                                                                             | -       |
| onClose        | 关闭选择器时回调 | `(e: React.MouseEvent<HTMLDivElement>, data: { from: string; value: (string \| number)[]; options: ICascadePickerChildOptionItem[][]; }) => void`                                                           | -       |

### PickerPanel

| 属性        | 说明               | 类型                                                                                                                              | 默认值 |
| ----------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------ |
| options     | 单列面板的列表数据 | `ICascadePickerChildOptionItem[]`                                                                                                 | `[]`   |
| value       | 默认值             | `string \| number`                                                                                                                | -      |
| columnIndex | 列索引             | `number`                                                                                                                          | -      |
| open        | 是否展示选择器     | `boolean`                                                                                                                         | -      |
| onSelect    | 选择选项时的回调   | `(e: React.TransitionEvent<HTMLDivElement>, data: { columnOption: ICascadePickerChildOptionItem; columnIndex: number; }) => void` | -      |

### 数据结构类型

#### IPickerOptionItem

| 属性     | 说明           | 类型               | 默认值 |
| -------- | -------------- | ------------------ | ------ |
| label    | 选项的文字内容 | `string \| number` | -      |
| value    | 选项唯一值     | `string \| number` | -      |
| disabled | 是否禁用       | boolean            | -      |

#### ICascadePickerChildOptionItem

| 属性     | 说明                                     | 类型                              | 默认值 |
| -------- | ---------------------------------------- | --------------------------------- | ------ |
| label    | 选项的文字内容                           | `string \| number`                | -      |
| value    | 选项唯一值                               | `string \| number`                | -      |
| children | 用于级联选项，子节点可能没有children属性 | `ICascadePickerChildOptionItem[]` | -      |

#### ICascadePickerOptionItem

| 属性     | 说明                                     | 类型                              | 默认值 |
| -------- | ---------------------------------------- | --------------------------------- | ------ |
| label    | 选项的文字内容                           | `string \| number`                | -      |
| value    | 选项唯一值                               | `string \| number`                | -      |
| children | 用于级联选项，根节点必须含有children属性 | `ICascadePickerChildOptionItem[]` | -      |

> `Picker` 继承自 `Drawer` 其他属性见 [Drawer API](/cores/drawer?#api)

## 样式变量

### Picker

| 全局变量                         | 说明           | 默认值                    |
| -------------------------------- | -------------- | ------------------------- |
| --bui-picker-header-height       | 头部高度       | `50px`                    |
| --bui-picker-header-padding      | 头部内边距     | `0 var(--bui-spacing-lg)` |
| --bui-picker-cancel-height       | 取消按钮高度   | `100%`                    |
| --bui-picker-cancel-line-height  | 取消按钮行高   | `50px`                    |
| --bui-picker-confirm-height      | 确认按钮高度   | `100%`                    |
| --bui-picker-confirm-line-height | 确认按钮行高   | `50px`                    |
| --bui-picker-panel-height        | 面板高度       | `260px`                   |
| --bui-picker-indicator-top       | 指示器顶部位置 | `108px`                   |
| --bui-picker-option-height       | 选项高度       | `36px`                    |
| --bui-picker-option-font-size    | 选项字体大小   | `var(--bui-title-size-4)` |
