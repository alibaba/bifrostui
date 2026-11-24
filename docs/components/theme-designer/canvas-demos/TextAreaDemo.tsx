import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };

  return (
    <Stack alignItems="stretch">
      <TextArea value={value} placeholder="默认" onChange={handleChange} />
    </Stack>
  );
};