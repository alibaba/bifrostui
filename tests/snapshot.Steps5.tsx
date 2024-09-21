import React from 'react';
import { Stack, Step, Steps } from '@bifrostui/react';
import {
  AccessTimeCircleFilledIcon,
  ErrorCircleOutlinedIcon,
  HeartFilledIcon,
  LocationFilledIcon,
} from '@bifrostui/icons';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="标题 1"
          subtitle="副标题 1"
          icon={<HeartFilledIcon color="primary" />}
          description="这是一段描述文案"
        />
        <Step
          key={2}
          title="标题 2"
          subtitle="副标题 2"
          status="active"
          icon={<LocationFilledIcon color="primary" />}
          description="这是一段描述文案"
        />
        <Step
          key={3}
          title="标题 3"
          subtitle="副标题 3"
          status="error"
          icon={<ErrorCircleOutlinedIcon color="primary" />}
          description="这是一段描述文案"
        />
        <Step
          key={4}
          title="标题 4"
          subtitle="副标题 4"
          status="wait"
          icon={<AccessTimeCircleFilledIcon color="primary" />}
          description="这是一段描述文案"
        />
      </Steps>
    </Stack>
  );
};