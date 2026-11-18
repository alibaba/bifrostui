import { Card, CardHeader, Stack } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title={<div>美味小食</div>} />
        </Card>
      </Stack>
    </Stack>
  );
};
