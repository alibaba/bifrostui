import React, { useRef } from 'react';
import clsx from 'clsx';
import { Input } from '../Input';
import { Button } from '../Button';
import { DialogProps } from './Dialog.types';
import Modal from '../Modal';
import './index.less';

const prefixCls = 'bui-dialog';

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const {
    open,
    onOk,
    onClose,
    header,
    message,
    type,
    confirmText,
    cancelText,
    placeholder,
    InputProps,
    className,
    ...others
  } = props;

  const InputRef = useRef(null);

  const footerNode = (
    <div className={`${prefixCls}-footer`}>
      <Button
        variant="text"
        onClick={onClose}
        className={`${prefixCls}-button`}
      >
        {cancelText || '取消'}
      </Button>
      <Button
        variant="text"
        color="primary"
        onClick={() => {
          onOk(InputRef?.current?.value);
        }}
        className={`${prefixCls}-button`}
      >
        {confirmText || '确定'}
      </Button>
    </div>
  );

  const inputNode = type === 'prompt' && (
    <Input
      {...InputProps}
      inputRef={InputRef}
      className={`${prefixCls}-input`}
      placeholder={`${placeholder || '请在此处输入'}`}
    />
  );

  if (!open) return null;

  return (
    <Modal
      {...others}
      open
      className={clsx(prefixCls, className)}
      disablePortal
      onClose={onClose}
      ref={ref}
    >
      <div className={`${prefixCls}-body`}>
        {header && <h1 className={`${prefixCls}-title`}>{header}</h1>}
        {message && <div className={`${prefixCls}-desc`}>{message}</div>}
        {inputNode}
        {footerNode}
      </div>
    </Modal>
  );
});

Dialog.displayName = 'BuiDialog';

export default Dialog;
