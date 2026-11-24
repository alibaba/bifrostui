import React, { useState } from 'react';
import { Button, Slide, Stack } from '@bifrostui/react';

const directions: Array<'down' | 'left' | 'right' | 'up'> = [
  'down',
  'left',
  'right',
  'up',
];

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        点击改变in属性
      </Button>
      <Stack>
        {directions.map((direction, index) => (
          <div style={{ overflow: 'hidden' }}>
            <Slide
              in={open}
              direction={direction}
              timeout={{
                enter: 800,
                exit: 1000,
                // @ts-ignore
              }}
              delay={200 * index}
            >
              <div>滑动效果{direction}</div>
            </Slide>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};