---

group: Data Display
name: Image

# Image

Enhances the img tag with Placeholder and Fallback capabilities, supports native lazy loading across multiple platforms, providing a more comprehensive image component.

## Basic Usage

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

## Various Fill Modes

Customize fill mode using the fit parameter.
`widthFix` and `heightFix` are only available for mini-programs.

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

## Styles and Other HTML Attributes

The attributes passed directly to the Image component will apply to the top-level div.
If you need to pass attributes to the img element, use `imgProps`.

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

## Fallback State

When an image fails to load, a fallback will be shown.
By default, the fallback is the same as the placeholder; if neither is provided, the fallback capability is absent.
You can also provide a custom fallback object.

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
      <Image
        src="https://localhost:3000/failed"
        fit="fill"
        height={100}
        style={{ borderRadius: 4 }}
        fallback={
          <Image
            src={
              'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg'
            }
            fit="cover"
            width={150}
            height={150}
          />
        }
      />
    </Stack>
  );
};
```

## Placeholder

When the image is loading, the placeholder parameter will display a placeholder.
Passing true will display a gray background, or you can provide a custom placeholder element.

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
        Reload
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

| Property    | Description                      | Type                                                                            | Default |
| ----------- | -------------------------------- | ------------------------------------------------------------------------------- | ------- |
| src         | Image URL                        | string                                                                          | -       |
| lazy        | Use native lazy loading          | boolean                                                                         | false   |
| alt         | Alternative text                 | string                                                                          | -       |
| fallback    | Placeholder when loading fails   | ReactNode                                                                       | -       |
| placeholder | Placeholder during loading       | ReactNode \| boolean                                                            | -       |
| width       | Image width                      | string \| number                                                                | -       |
| height      | Image height                     | string \| number                                                                | -       |
| fit         | Fill mode                        | `contain`\| `cover`\| `fill`\| `none`\| `scale-down`\| `widthFix`\| `heightFix` | `fill`  |
| webp        | Parse webp                       | boolean                                                                         | false   |
| showMenu    | (Mini-program) Long press menu   | boolean                                                                         | false   |
| imgProps    | Attributes passed to img element | React.HTMLAttributes\<HTMLImageElement\>                                        | -       |

## Style Variables

| Global Variable              | Description                          | Default                    |
| ---------------------------- | ------------------------------------ | -------------------------- |
| --bui-image-default-bg-color | Default placeholder background color | `rgba(127, 127, 127, 0.2)` |
