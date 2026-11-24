import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };

  return (
    <Stack>
      <Button onClick={openActionSheet}>基础使用</Button>
      <ActionSheet onClose={closeActionSheet} open={isOpen}>
        <ActionSheetItem>复制</ActionSheetItem>
        <ActionSheetItem>修改</ActionSheetItem>
        <ActionSheetItem>删除</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};