import React from 'react';
import { ItemSelector } from '@bifrostui/react';

const items = [
  {
    groupName: '当前城市',
    indexName: '当前',
    indexCode: 'CRT',
    isFlat: true,
    items: [
      {
        code: '310100',
        name: '上海',
      },
    ],
  },
  {
    groupName: '定位城市',
    indexName: '定位',
    indexCode: 'POS',
    isFlat: true,
    items: [
      {
        code: '110100',
        name: '北京',
      },
    ],
  },
  {
    groupName: '热门城市',
    indexName: '常用',
    indexCode: 'HOT',
    isFlat: true,
    items: [
      {
        code: '110100',
        name: '北京',
      },
      {
        code: '310100',
        name: '上海',
      },
      {
        code: '440100',
        name: '广州',
      },
    ],
  },
  {
    groupName: 'A',
    items: [
      {
        code: '610900',
        name: '安康',
      },
      {
        code: '210300',
        name: '鞍山',
      },
    ],
  },
  {
    groupName: 'B',
    items: [
      {
        code: '652800',
        name: '巴音郭楞',
      },
      {
        code: '511900',
        name: '巴中',
      },
    ],
  },
  {
    groupName: 'C',
    items: [
      {
        code: '130900',
        name: '沧州',
      },
      {
        code: '220100',
        name: '长春',
      },
    ],
  },
  {
    groupName: 'D',
    items: [
      {
        code: '532900',
        name: '大理',
      },
      {
        code: '210200',
        name: '大连',
      },
    ],
  },
];

export default () => {
  const onSelect = (e, item) => {
    console.log(item);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <ItemSelector
      items={items}
      onSelect={onSelect}
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};