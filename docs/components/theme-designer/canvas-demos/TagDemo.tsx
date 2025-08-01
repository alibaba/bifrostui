import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Tag>默认标签</Tag>
      <Tag variant="contained">填充标签</Tag>
      <Tag variant="subtle">浅亮标签</Tag>
    </Stack>
  );
};