import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        基础用法
      </Button>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        contentProps={{ style: { lineHeight: '20vh', textAlign: 'center' } }}
      >
        抽屉正文
      </Drawer>
    </Stack>
  );
};