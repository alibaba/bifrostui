import { Popover } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Popover
      title="This is a title"
      content="This is a content"
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      <span>click显示</span>
    </Popover>
  );
};
