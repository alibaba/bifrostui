---
group: Data Display
name: Image
---

# Image

Based on the img tag, it adds Placeholder and Fallback capabilities, supports native lazy loading across multiple platforms, and provides a more complete image component.

## Code Demos

### Basic Usage

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

Customize the fill mode using the `fit` parameter. `widthFix` and `heightFix` are only available for mini-programs.

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

Properties passed directly to `Image` will appear on the top-level div. If you need to pass properties to the `img` element, use `imgProps`.

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

When an image fails to load, it displays the fallback. The default fallback is the same as the placeholder. If neither is provided, there is no fallback capability. You can also provide a custom fallback object.

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

## Placeholder

When an image is still loading, it shows a placeholder via the `placeholder` parameter. Passing `true` shows a gray background, or you can provide a custom placeholder element.

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

| Property    | Description                                  | Type                                                                            | Default |
| ----------- | -------------------------------------------- | ------------------------------------------------------------------------------- | ------- |
| src         | Image URL                                    | string                                                                          | -       |
| lazy        | Use native lazy loading                      | boolean                                                                         | false   |
| alt         | Alternative text                             | string                                                                          | -       |
| fallback    | Placeholder for failed load                  | ReactNode                                                                       | -       |
| placeholder | Placeholder during loading                   | ReactNode \| boolean                                                            | -       |
| width       | Image width                                  | string \| number                                                                | -       |
| height      | Image height                                 | string \| number                                                                | -       |
| fit         | Width and height fitting mode                | `contain`\| `cover`\| `fill`\| `none`\| `scale-down`\| `widthFix`\| `heightFix` | `fill`  |
| webp        | Parse webp                                   | boolean                                                                         | false   |
| showMenu    | (Mini-program) Long press menu configuration | boolean                                                                         | false   |
| imgProps    | Pass-through parameters to img               | React.HTMLAttributes\<HTMLImageElement\>                                        | -       |

## Style Variables

| Property                   | Description                          | Default Value            | Global Variable              |
| -------------------------- | ------------------------------------ | ------------------------ | ---------------------------- |
| --default-background-color | Default placeholder background color | rgba(127, 127, 127, 0.2) | --bui-image-default-bg-color |
