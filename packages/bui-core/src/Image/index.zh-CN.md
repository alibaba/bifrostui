---
group: 数据展示
name: Image 图片
---

# Image 图片

在img标签的基础上增加了Placeholder和Fallback能力，兼容多端原生懒加载，更完善的图片组件。

## 基础使用

```tsx
import React from 'react';
import { Image, Stack } from '@bifrostui/react';

const src =
  'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

export default () => {
  return (
    <Stack>
      <Image width={100} height={100} src={src} />
    </Stack>
  );
};
```

## 多种填充模式

通过fit参数自定义填充模式
`widthFix`和`heightFix`仅小程序可用

```tsx
import React from 'react';
import { Image, Stack } from '@bifrostui/react';

const src =
  'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Image src={src} fit="contain" alt="contain" width={100} height={100} />
      <Image src={src} fit="cover" alt="cover" width={100} height={100} />
      <Image src={src} fit="fill" alt="fill" width={100} height={100} />
      <Image src={src} fit="none" alt="none" width={100} height={100} />
      <Image
        src={src}
        fit="scale-down"
        alt="scale-down"
        width={100}
        height={100}
      />
    </Stack>
  );
};
```

## 样式及其他HTML属性

直接传给Image的属性会出现在顶层的div上
如果需要传到img上，可以使用`imgProps`

```tsx
import React from 'react';
import { Image, Stack } from '@bifrostui/react';

const src =
  'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Image
        src={src}
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 4 }}
      />
      <Image
        src={src}
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 8 }}
      />
      <Image
        src={src}
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 32 }}
      />
    </Stack>
  );
};
```

## fallback 状态

当图片加载失败时，会展示fallback
默认fallback与placeholder相同，如果均未传入则没有fallback能力。
也可以单独传入fallback对象进行自定义。

```tsx
import React from 'react';
import { Image, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Image
        src="https://localhost:3000/failed"
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 4 }}
        placeholder={true}
      />
      <Image
        src="https://localhost:3000/failed"
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 4 }}
        fallback={<>MY FALLBACK</>}
      />
    </Stack>
  );
};
```

## 占位符

当图片还在加载中时，通过placeholder参数会展示占位
传true则展示一个灰底，也可传入自定义的占位元素

```tsx
import React, { useState } from 'react';
import { Image, Button, Stack } from '@bifrostui/react';

export default () => {
  const [random, setOpen] = useState(0);
  const src = `https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg?t=${random}`;
  return (
    <>
      <Button
        onClick={() => {
          setOpen(() => Math.random());
        }}
      >
        重新加载
      </Button>
      {
        <Stack direction="row" spacing="8px">
          <Image width={100} height={100} src={src} />
          <Image width={100} height={100} src={src} placeholder={true} />
          <Image
            width={100}
            height={100}
            src={src}
            placeholder={
              <div
                style={{ background: 'red', width: '100%', height: '100%' }}
              />
            }
          />
        </Stack>
      }
    </>
  );
};
```

## API

| 属性        | 说明                   | 类型                                                                            | 默认值 |
| ----------- | ---------------------- | ------------------------------------------------------------------------------- | ------ |
| src         | 图片地址               | string                                                                          | -      |
| lazy        | 使用原生懒加载         | boolean                                                                         | false  |
| alt         | 替代文本               | string                                                                          | -      |
| fallback    | 加载失败时的占位       | ReactNode                                                                       | -      |
| placeholder | 加载中的占位           | ReactNode \| boolean                                                            | -      |
| width       | 图片宽度               | string \| number                                                                | -      |
| height      | 图片高度               | string \| number                                                                | -      |
| fit         | 宽高适配方式           | `contain`\| `cover`\| `fill`\| `none`\| `scale-down`\| `widthFix`\| `heightFix` | `fill` |
| webp        | 解析webp               | boolean                                                                         | false  |
| showMenu    | （小程序）长按菜单配置 | boolean                                                                         | false  |
| imgProps    | 透传到img的参数        | React.HTMLAttributes\<HTMLImageElement\>                                        | -      |

## 样式变量

| 全局变量                     | 说明           | 默认值                     |
| ---------------------------- | -------------- | -------------------------- |
| --bui-image-default-bg-color | 默认占位背景色 | `rgba(127, 127, 127, 0.2)` |
