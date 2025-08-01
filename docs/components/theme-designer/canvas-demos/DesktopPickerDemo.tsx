import { DesktopPicker, Stack, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <DesktopPicker
          open={open}
          content={<div style={{ height: '100px' }}>浮层内容</div>}
          onClose={() => setOpen(false)}
        >
          <Button style={{ width: '100px' }} onClick={() => setOpen(!open)}>
            demo
          </Button>
        </DesktopPicker>
      </div>
    </Stack>
  );
};