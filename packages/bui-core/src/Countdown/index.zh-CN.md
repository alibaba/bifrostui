---
group: 数据展示
name: Countdown 倒计时
---

# Countdown 倒计时

用于实时展示倒计时数值。

## 基本用法

通过 `remainingTime` 控制倒计时剩余时长，与 `endTimestamp` 字段二选一。

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown remainingTime={24 * 60 * 60 * 1000} format="HH:mm:ss" />
    </Stack>
  );
};
```

### 结束时间戳

通过 `endTimestamp` 指定倒计时结束时间点，与 `remainingTime` 字段二选一，优先级比 `remainingTime` 高。

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown endTimestamp={4102415999000} format="YY:MM:DD:HH:mm:ss" />
    </Stack>
  );
};
```

### 计算服务器时间戳

通过 `serverTimestamp` 设置服务器时间戳，可与 `endTimestamp` 配合使用，该属性可用来防止本地时间被修改而导致倒计时错误的场景。

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        serverTimestamp={Date.now() - 10 * 1000}
        endTimestamp={4102415999000}
        format="YY:MM:DD:HH:mm:ss"
      />
    </Stack>
  );
};
```

### 格式化倒计时

通过 `format` 可设置倒计时格式化后的形式，默认值为 `HH:mm:ss`。

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        endTimestamp={4102415999000}
        format="YY年MM月DD日HH时mm分ss秒SSS毫秒"
      />
    </Stack>
  );
};
```

### 倒计时单位样式

通过 `unitStyle` 可设置倒计时单位样式。

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        endTimestamp={4102415999000}
        format="YY年MM月DD日HH时mm分ss秒"
        unitStyle={{
          color: 'var(--bui-color-primary)',
          fontWeight: 600,
          fontSize: '16px',
        }}
      />
    </Stack>
  );
};
```

### 倒计时数值样式

可通过 `valueStyle` 定制倒计时第一、二位数值的样式。

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        valueStyle={[
          {
            color: 'var(--bui-color-primary)',
            fontWeight: 600,
            fontSize: '16px',
          },
          {
            color: 'var(--bui-color-primary)',
            fontWeight: 600,
            fontSize: '20px',
          },
        ]}
      />
    </Stack>
  );
};
```

### 倒计时时间片的样式

可通过 `timeSliceStyle` 定制倒计时每个时间片的样式。

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        format="HH时mm分ss秒"
        timeSliceStyle={{
          backgroundColor: 'var(--bui-color-bg-default)',
          padding: '4px',
          borderRadius: '4px',
          marginRight: '4px',
        }}
      />
    </Stack>
  );
};
```

### 倒计时结束事件

倒计时结束时会触发 `onFinish` 事件。

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  const finish = () => {
    console.log('倒计时已结束！');
  };

  return (
    <Stack>
      <Countdown remainingTime={10 * 1000} onFinish={finish} />
    </Stack>
  );
};
```

### 倒计时变化事件

倒计时变化时会触发 `onChange` 事件。

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  const change = (data) => {
    console.log('正在倒计时，当前数据', data);
  };

  return (
    <Stack>
      <Countdown remainingTime={10 * 1000} onChange={change} />
    </Stack>
  );
};
```

### 自定义倒计时内容

可通过 `renderContent` 自定义渲染倒计时组件内容。

```tsx
import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        renderContent={({ hours, minutes, seconds }) => {
          return (
            <span>
              距离倒计时结束还剩{hours}小时{minutes}分钟{seconds}秒
            </span>
          );
        }}
      />
    </Stack>
  );
};
```

## API

### Countdown

| 属性            | 说明                                                                                         | 类型                                    | 默认值   |
| --------------- | -------------------------------------------------------------------------------------------- | --------------------------------------- | -------- |
| remainingTime   | 倒计时剩余时间，是一个时间段（单位毫秒），与endTimestamp互斥                                 | number                                  | 0        |
| endTimestamp    | 倒计时结束时间戳，是一个时间点，与remainingTime互斥，优先级比remainingTime高                 | number                                  | -        |
| serverTimestamp | 服务器时间戳，是一个时间点，可与endTimestamp配合使用                                         | number                                  | -        |
| format          | 格式化倒计时展示，参考 dayjs                                                                 | string                                  | HH:mm:ss |
| unitStyle       | 时间单位的样式                                                                               | CSSProperties                           | -        |
| valueStyle      | 倒计时位数的样式，用于定制第一、第二位数字的样式                                             | CSSProperties[]                         | -        |
| timeSliceStyle  | 各时间区块的样式，用于定制各个时间块的样式，若第一、第二位数字的样式相同，则可替代valueStyle | CSSProperties                           | -        |
| onFinish        | 倒计时完成时触发                                                                             | () => void                              | -        |
| onChange        | 倒计时时间变化时触发                                                                         | (data: { value: CurrentTime }) => void; | -        |
| renderContent   | 自定义渲染内容                                                                               | (data: CurrentTime) => React.ReactNode; | -        |

#### CurrentTime

| 属性          | 说明                 | 类型   | 默认值 |
| ------------- | -------------------- | ------ | ------ |
| total         | 剩余总时间，单位毫秒 | number | -      |
| years         | 剩余年数             | string | -      |
| months        | 剩余月数             | string | -      |
| days          | 剩余天数             | string | -      |
| hours         | 剩余小时             | string | -      |
| minutes       | 剩余分钟             | string | -      |
| seconds       | 剩余秒数             | string | -      |
| hoursWithDays | 剩余整数天余下的小时 | string | -      |

## 样式变量

| 属性                | 说明         | 默认值                   | 全局变量                          |
| ------------------- | ------------ | ------------------------ | --------------------------------- |
| --font-size         | 文案字体大小 | --bui-text-size-1        | --bui-countdown-font-size         |
| --color             | 文案字体颜色 | --bui-color-fg-default   | --bui-countdown-color             |
| --font-weight       | 文案字体字重 | --bui-font-weight-normal | --bui-countdown-font-weight       |
| --slice-unit-margin | 分隔符间距   | 0 2px                    | --bui-countdown-slice-unit-margin |
