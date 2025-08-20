import { CollapsePanel } from '@bifrostui/react';
import React from 'react';

export default () => {
  const text = `
    狗是一种家养动物。
    它以忠诚和忠诚而闻名，
    在世界各地的许多家庭中，它都是受欢迎的客人。
  `;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      items={[
        {
          key: '1',
          label: '这是面板标题1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '这是面板标题2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '这是面板标题3',
          children: <p>{text}</p>,
        },
      ]}
    />
  );
};