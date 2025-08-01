import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="9px" flexWrap="wrap">
      <Button color="primary" variant="text">
        Text
      </Button>
      <Button color="primary">Outlined</Button>
      <Button color="primary" variant="contained">
        Contained
      </Button>
      <Button color="primary" variant="subtle">
        Subtle
      </Button>
    </Stack>
  );
};