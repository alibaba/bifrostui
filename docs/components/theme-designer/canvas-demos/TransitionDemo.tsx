import { Button, Transition, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? 'OPEN' : 'CLOSE'}
      </Button>
      <Transition in={open} timeout={1000}>
        {(status) => (
          <>
            <div>Status:{status}</div>
            <div
              style={{
                transition: `opacity 1000ms linear`,
                opacity: status.match(/exit/) ? 0 : 1,
              }}
            >
              FADE
            </div>
          </>
        )}
      </Transition>
    </Stack>
  );
};