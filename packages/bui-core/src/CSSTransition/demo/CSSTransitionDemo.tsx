import React, { useState } from 'react';
import { Button, Alert, CSSTransition } from '@bifrostui/react';
import './index.less';

const StackDemo = () => {
  const [open, setOpen] = useState(true);

  const transitionClasses = {
    enter: 'slide-enter',
    enterActive: 'slide-enter-active',
    enterDone: 'slide-enter-done',
    exit: 'slide-exit',
    exitActive: 'slide-exit-active',
    exitDone: 'slide-exit-done',
  };

  return (
    <div
      style={{
        width: '300px',
        height: '100px',
        overflow: 'hidden',
      }}
    >
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? 'Exit' : 'Enter'}
      </Button>
      <CSSTransition
        in={open}
        timeout={300}
        unmountOnExit={false}
        classNames={transitionClasses}
      >
        <Alert className="my-node" color="success">
          过渡过程中会修改className
        </Alert>
      </CSSTransition>
    </div>
  );
};

export default StackDemo;
