import React from 'react';
import Backdrop from '../../Backdrop';

export const basicBackdropDemo = () => {
  return <Backdrop open />;
};

export const invisibleBackdropDemo = () => {
  return <Backdrop open invisible />;
};

// 默认导出所有 demo
export default {
  basicBackdropDemo,
  invisibleBackdropDemo,
};
