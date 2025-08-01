import { Button, Fade, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  const ref = useRef();
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
          console.log(ref);
        }}
      >
        点击改变in
      </Button>
      <Fade
        appear={false}
        in={open}
        timeout={{
          enter: 2000,
          exit: 1000,
        }}
      >
        <div ref={ref}>淡入淡出In</div>
      </Fade>
    </Stack>
  );
};