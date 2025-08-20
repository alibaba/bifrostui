import { Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Breadcrumb
      items={[
        {
          title: '首页',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/';
          },
        },
        {
          title: '组件',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/cores/button';
          },
        },
        {
          title: '面包屑',
        },
      ]}
    />
  );
};