import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast('提示内容');
        }}
      >
        toast
      </Button>
    </Stack>
  );
};