import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        打开弹窗
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '300px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            overflowY: 'auto',
          }}
        >
          <div style={{ textAlign: 'center' }}>测试弹窗</div>
        </div>
      </Modal>
    </Stack>
  );
};