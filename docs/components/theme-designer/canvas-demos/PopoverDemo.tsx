import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover
      title="This is a title"
      content="This is a content"
      placement="topLeft"
    >
      <span>click显示</span>
    </Popover>
  );
};