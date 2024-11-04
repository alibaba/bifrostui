---
group: 基本输入
name: Rating 评分
---

# Rating 评分

评分组件提供对评价进行展示。也允许用户快速的评分操作。

## 代码演示

### 基础使用

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React, { useRef } from 'react';
export default () => {
  const ref = useRef(null);
  return (
    <Stack spacing="8px">
      <Rating />
      <Rating defaultValue={3} ref={ref} />
    </Stack>
  );
};
```

### 受控使用

通过`value` 和 `onChange` 自定义评分选中值

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState(3);
  return (
    <Stack>
      <Rating
        value={value}
        onChange={(_, data) => {
          setValue(data.value);
        }}
      />
    </Stack>
  );
};
```

### 半选

通过 `allowHalf` 指定 `Rating` 支持半选状态。

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating allowHalf />
      <Rating defaultValue={3} allowHalf />
    </Stack>
  );
};
```

### 只读

通过 `readOnly` 指定 `Rating` 为只读。

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating readOnly />
      <Rating defaultValue={3} readOnly />
    </Stack>
  );
};
```

### 大小

通过 `size` 指定 `Rating` 的大小

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating size="xsmall" defaultValue={3} />
      <Rating size="small" defaultValue={3} />
      <Rating size="medium" defaultValue={3} />
      <Rating size="large" defaultValue={3} />
    </Stack>
  );
};
```

### 数量

通过 `count` 指定 `Rating` 的展示图标个数

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack>
      <Rating defaultValue={3} count={8} />
    </Stack>
  );
};
```

### 禁用

通过 `disabled` 指定 `Rating` 为禁用状态

```tsx
import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating defaultValue={3} disabled />
    </Stack>
  );
};
```

### 自定义图标

通过`icon` 和 `emptyIcon` 可以将星星替换为其他字符，比如表情、字母，数字，字体图标甚至中文，`icon`为选中态图标，`emptyIcon`为未选中态图标

```tsx
import { Rating, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack spacing="8px">
      <Rating checkedIcon={<HeartFilledIcon color="info" />} defaultValue={3} />
      <Rating checkedIcon="A" icon="B" defaultValue={3} />
      <Rating
        checkedIcon={<HeartOutlinedIcon color="success" />}
        icon={<HeartFilledIcon color="primary" />}
        defaultValue={3}
      />
    </Stack>
  );
};
```

## API

| 属性         | 说明                    | 类型                                                                          | 默认值                                  |
| ------------ | ----------------------- | ----------------------------------------------------------------------------- | --------------------------------------- |
| count        | 评分总数                | number                                                                        | 5                                       |
| value        | 当前评分                | number                                                                        | -                                       |
| defaultValue | 默认评分 非受控状态使用 | number                                                                        | -                                       |
| size         | 大小                    | `xsmall`\| `small` \| `medium` \| `large`                                     | `medium`                                |
| disabled     | 是否禁用                | boolean                                                                       | false                                   |
| readOnly     | 是否只读                | boolean                                                                       | false                                   |
| allowHalf    | 是否允许半选            | boolean                                                                       | false                                   |
| icon         | 未选中态图标            | React.ReactNode                                                               | <StarFilledIcon htmlColor="#ced1d6" \/> |
| checkedIcon  | 选中态图标              | React.ReactNode                                                               | <StarFilledIcon color="warning" \/>     |
| disableClear | 是否禁止点击后清空      | boolean                                                                       | false                                   |
| name         | 单选输入元素的name属性  | string                                                                        | -                                       |
| onChange     | 选择评分的回调          | (ev?: React.ChangeEvent<HTMLInputElement\>\,data?: { value: number }) => void | -                                       |
