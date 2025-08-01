import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickConfirm = async () => {
    const res = await Dialog({
      header: '标题',
      message: '这是描述内容',
    });
    if (res) {
      Toast({ message: '点击了确认', position: 'bottom' });
    } else {
      Toast({ message: '点击了取消', position: 'bottom' });
    }
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={() => Dialog('是否提交申请')}>默认为confirm</Button>
      <Button
        onClick={() =>
          Dialog.confirm({
            header: '标题',
            message: '详细描述',
          })
        }
      >
        confirm
      </Button>
      <Button onClick={handleClickConfirm}>等待confirm完成</Button>
    </Stack>
  );
};