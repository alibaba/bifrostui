import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step key={1} title="第一步" subtitle="副标题 1" />
        <Step key={2} title="第二步" subtitle="副标题 2" />
        <Step key={3} title="第三步" subtitle="副标题 3" />
      </Steps>
      <Steps labelPlacement="vertical">
        <Step key={1} title="第一步" subtitle="副标题 1" />
        <Step key={2} title="第二步" subtitle="副标题 2" />
        <Step key={3} title="第三步" subtitle="副标题 3" />
      </Steps>
    </Stack>
  );
};