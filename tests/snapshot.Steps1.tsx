import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps direction="horizontal">
        <Step key={1} title="第一步" />
        <Step key={2} title="第二步" />
        <Step key={3} title="第三步" />
      </Steps>
    </Stack>
  );
};