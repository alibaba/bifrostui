import { Rating, Stack } from '@bifrostui/react';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState(3);
  return (
    <Stack>
      <Rating
        value={value}
        onChange={(_, data) => {
          setValue(data.value);
        }}
      />
    </Stack>
  );
};