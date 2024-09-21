import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleChange = (e, data) => {
    console.log(e, data);
  };

  return (
    <Stack>
      <Steps direction="horizontal" current={1} onChange={handleChange}>
        <Step
          key={1}
          title="第一步"
          status="error"
          description="这是一段描述文案"
          disabled
        />
        <Step key={2} title="第二步" />
        <Step
          key={3}
          title="第三步"
          subtitle="副标题 3"
          description="这是一段描述文案"
          disabled
        />
      </Steps>
    </Stack>
  );
};