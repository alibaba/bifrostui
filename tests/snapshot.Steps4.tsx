import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="标题 1"
          subtitle="副标题 1"
          status="error"
          description="这是一段描述文案"
        />
        <Step
          key={2}
          title="标题 2"
          subtitle="副标题 2"
          status="finish"
          description="这是一段描述文案"
        />
        <Step
          key={3}
          title="标题 3"
          subtitle="副标题 3"
          status="active"
          description="这是一段描述文案"
        />
        <Step
          key={4}
          title="标题 4"
          subtitle="副标题 4"
          status="wait"
          description="这是一段描述文案"
        />
      </Steps>
    </Stack>
  );
};