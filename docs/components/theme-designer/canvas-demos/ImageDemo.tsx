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