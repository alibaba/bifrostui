import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleChange = (e, data) => {
    console.log(e, data);
  };

  return (
    <Stack>
      <div style={{ width: '120px' }}>
        <Steps onChange={handleChange}>
          <Step key={1} title="第一步" />
          <Step key={2} title="第二步" />
          <Step key={3} title="第三步" />
        </Steps>
      </div>
    </Stack>
  );
};