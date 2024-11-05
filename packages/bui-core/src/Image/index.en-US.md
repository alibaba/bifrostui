---
group: Data Display
name: Image
---

# Image

On the basis of img tags, Placeholder and Fallback capabilities have been added, which are compatible with multi terminal native lazy loading and provide more comprehensive image components.

## Code demonstration

### Basic usage

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

## Multiple filling modes

Customize fill mode through fit parameter
`widthFix` and `heightFix` mini program available

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

## Styles and other HTML attributes

The properties directly passed to Image will appear on the top-level div
If it needs to be transmitted to img, it can be used`imgProps`

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

## Fallback state

When the image fails to load, it will display a fallback
The default fallback is the same as the placeholder, and if neither is passed in, there is no fallback capability.
You can also pass in a fallback object separately for customization.

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
        placeholder
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

## placeholder

When the image is still loading, the placeholder parameter will display the placeholder
Passing true will display a gray background, and custom placeholder elements can also be passed in

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
      <Stack direction="row" spacing="8px">
        <Image width={100} height={100} src={src} />
        <Image width={100} height={100} src={src} placeholder />
        <Image
          width={100}
          height={100}
          src={src}
          placeholder={
            <div style={{ background: 'red', width: '100%', height: '100%' }} />
          }
        />
      </Stack>
    </>
  );
};
```

## API

| attribute   | explain                                      | type                                                                            | Default value |
| ----------- | -------------------------------------------- | ------------------------------------------------------------------------------- | ------------- |
| src         | Image address                                | string                                                                          | -             |
| lazy        | Using native lazy loading                    | boolean                                                                         | false         |
| alt         | Alternative Text                             | string                                                                          | -             |
| fallback    | Occupancy during loading failure             | ReactNode                                                                       | -             |
| placeholder | Occupancy during loading                     | ReactNode \| boolean                                                            | -             |
| width       | image width                                  | string \| number                                                                | -             |
| height      | Image height                                 | string \| number                                                                | -             |
| fit         | Width height adaptation method               | `contain`\| `cover`\| `fill`\| `none`\| `scale-down`\| `widthFix`\| `heightFix` | `fill`        |
| webp        | Analyzing Webp                               | boolean                                                                         | false         |
| showMenu    | (Mini Program) Long press menu configuration | boolean                                                                         | false         |
| imgProps    | Parameters transmitted transparently to img  | React.HTMLAttributes\<HTMLImageElement\>                                        | -             |

## Style variables

| attribute                  | explain                              | Default value            | global variable                      |
| -------------------------- | ------------------------------------ | ------------------------ | ------------------------------------ |
| --default-background-color | Default placeholder background color | rgba(127, 127, 127, 0.2) | --bui-image-default-background-color |
