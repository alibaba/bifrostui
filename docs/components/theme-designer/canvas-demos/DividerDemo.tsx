import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      左边
      <Divider style={{ margin: '0 6px' }} />
      右边
    </Stack>
  );
};