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