---
group: 基本输入
name: Slider 滑动输入条
---

# Slider 滑动输入条

滑动输入条，用于在给定的范围内选择一个值。

## 代码演示

### 基础用法

使用 `value` 和 `onChange` 控制滑动输入条。

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(18);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} onChange={handleChange} />
    </Stack>
  );
};
```

### 最大最小值

使用 `min` 和 `max` 滑动限制输入条的值范围。

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(29);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} min={10} max={60} onChange={handleChange} />
    </Stack>
  );
};
```

### 自定义步长

通过 `step` 可自定义步长，`step` 应是 max-min 的整数倍。

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} step={10} onChange={handleChange} />
    </Stack>
  );
};
```

### 始终展示提示气泡

启用 `tipVisible`，提示气泡将总是展示，否则只有滑动时展示。

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(29);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} tipVisible onChange={handleChange} />
    </Stack>
  );
};
```

### 双滑块

当 `value` 或 `defaultValue` 类型为`[number, number]`时，会启用双滑块模式。

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[number, number]>([0, 20]);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} onChange={handleChange} />
    </Stack>
  );
};
```

### 禁止前后按钮交错

双滑块时，可以使用 `disableSwap` 禁止前后按钮交错。

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[number, number]>([0, 20]);
  const handleChange = (e, data) => {
    console.log('123', data.value);
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} disableSwap onChange={handleChange} />
    </Stack>
  );
};
```

### 开始/结束图标

通过 `startIcon` 可自定义前按钮图标，通过 `endIcon` 可自定义后按钮图标。

```tsx
import React from 'react';
import { Slider, SliderValue, Stack } from '@bifrostui/react';
import { StarFilledIcon, StarOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const defaultValue: SliderValue = [20, 60];
  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider
        startIcon={<StarFilledIcon htmlColor="#ff335c" />}
        endIcon={<StarOutlinedIcon htmlColor="#00d68f" />}
        defaultValue={defaultValue}
      />
    </Stack>
  );
};
```

### 禁用

使用 `disabled` 禁用组件。

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider defaultValue={50} disabled />
    </Stack>
  );
};
```

### 气泡提示格式化

使用 `tooltipRender` 可自定义提示气泡。

```tsx
import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

const tooltipRender = (value) => {
  const temp = Math.floor(value);
  const hour = temp >= 10 ? temp : `0${temp}`;
  const min = value % 1 === 0 ? '00' : '30';
  return `${hour}:${min}`;
};

export default () => {
  const [value, setValue] = useState(24);
  const handleChange = (e, data) => {
    setValue(data?.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider
        min={0}
        max={24}
        step={0.5}
        value={value}
        tooltipRender={tooltipRender}
        onChange={handleChange}
      />
    </Stack>
  );
};
```

## API

| 属性          | 说明                                            | 类型                                                                                 | 默认值 |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------ | ------ |
| defaultValue  | 设置初始取值，当组件非受控时使用                | number \| [number, number]                                                           | -      |
| value         | 设置当前值,当组件受控时使用                     | number \| [number, number]                                                           | -      |
| min           | 最小值                                          | number                                                                               | 0      |
| max           | 最大值                                          | number                                                                               | 100    |
| step          | 步长，取值必须大于 0，并且可被 (max - min) 整除 | number                                                                               | 1      |
| tipVisible    | 提示气泡是否总是可见                            | boolean                                                                              | false  |
| tooltipRender | 自定义提示气泡                                  | (value: number) => React.ReactNode                                                   | -      |
| disabled      | 是否禁用                                        | boolean                                                                              | false  |
| startIcon     | 开始图标                                        | React.ReactNode                                                                      | -      |
| endIcon       | 结束图标                                        | React.ReactNode                                                                      | -      |
| disableSwap   | 禁止开始图标和结束图标交错                      | boolean                                                                              | false  |
| onChange      | 改变时的回调                                    | (event: React.SyntheticEvent,data: {value: SliderValue;buttonIndex: number}) => void | -      |

## 样式变量

| 属性                    | 说明             | 默认值                     | 全局变量                           |
| ----------------------- | ---------------- | -------------------------- | ---------------------------------- |
| --line-color            | 线条前景色       | --bui-color-primary        | -                                  |
| --line-bg-color         | 线条背景色       | --bui-color-border-default | -                                  |
| --width                 | 滑动输入条宽度   | 100%                       | --bui-slider-width                 |
| --height                | 滑动输入条高度   | 2px                        | --bui-slider-height                |
| --padding               | 滑动输入条内边距 | 19px 0                     | --bui-slider-padding               |
| --button-width          | 滑动按钮宽度     | 100%                       | --bui-slider-button-width          |
| --button-height         | 滑动按钮高度     | 2px                        | --bui-slider-button-height         |
| --button-font-size      | 滑动按钮字体大小 | --line-color               | -                                  |
| --button-border-radius  | 滑动按钮边框圆角 | 50%                        | --bui-slider-button-border-radius  |
| --tooltip-font-size     | 提示气泡字体大小 | --bui-text-size-3          | -                                  |
| --tooltip-color         | 提示气泡字体颜色 | --bui-color-white          | -                                  |
| --tooltip-bg-color      | 提示气泡背景颜色 | --line-color               | -                                  |
| --tooltip-width         | 提示气泡宽度     | 46px                       | --bui-slider-tooltip-width         |
| --tooltip-height        | 提示气泡高度     | 24px                       | --bui-slider-tooltip-height        |
| --tooltip-line-height   | 提示气泡行高     | 24px                       | --bui-slider-tooltip-line-height   |
| --tooltip-border-radius | 提示气泡边框圆角 | 24px                       | --bui-slider-tooltip-border-radius |
