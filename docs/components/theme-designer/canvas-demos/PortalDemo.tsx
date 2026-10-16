import React, { useState } from 'react';
import { Portal, Button } from '@bifrostui/react';

export default () => {
  const [rederPortal, setRederPortal] = useState(false);
  return (
    <>
      <Button onClick={() => setRederPortal(!rederPortal)}>
        {rederPortal ? '卸载' : '挂载'}Portal子节点
      </Button>
      {rederPortal && (
        <Portal>
          <div>挂载在页面根节点上</div>
        </Portal>
      )}
    </>
  );
};