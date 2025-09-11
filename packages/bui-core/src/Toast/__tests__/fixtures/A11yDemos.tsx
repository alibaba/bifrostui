import React from 'react';
import { Button } from '../../../Button';
import Toast from '../../FunctionalToast';

export const ToastDemo = () => {
  const [toast] = Toast.useToast();

  return (
    <Button
      onClick={() => {
        toast({
          message: 'Hello World',
          duration: 0,
        });
      }}
    >
      基础 Toast
    </Button>
  );
};
