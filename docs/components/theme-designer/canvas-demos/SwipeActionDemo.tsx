import {
  SwipeAction,
  Stack,
  List,
  Divider,
  ListItem,
  SwipeActionItem,
} from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const leftActions = [
    {
      key: 'delete-left',
      text: '删除',
      color: 'danger',
    },
  ];
  const rightActions = [
    {
      key: 'delete-right',
      color: 'info',
      text: '登录',
    },
  ];

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>基础使用</ListItem>}
      >
        <SwipeAction
          leftActions={leftActions.map((item) => (
            <SwipeActionItem color={item.color} key={item.key} id={item.key}>
              {item.text}
            </SwipeActionItem>
          ))}
        >
          <span>右滑</span>
        </SwipeAction>
        <Divider direction="horizontal" />
        <SwipeAction
          rightActions={rightActions.map((item) => (
            <SwipeActionItem color={item.color} key={item.key} id={item.key}>
              {item.text}
            </SwipeActionItem>
          ))}
        >
          <span>左滑</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};