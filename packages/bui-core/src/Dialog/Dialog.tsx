import React, { useImperativeHandle, useRef } from 'react';
import clsx from 'clsx';
import { Input } from '../Input';
import { Button } from '../Button';
import { DialogProps } from './Dialog.types';
import Modal from '../Modal';
import './index.less';
import { useTheme } from '../ThemeProvider';

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
    theme,
    ...others
  } = props;

  const InputRef = useRef(null);
  const themeConfig = useTheme(theme);
  useImperativeHandle(ref, () => {
    return { theme: themeConfig };
  });
  console.log(themeConfig, '测试看看');
  const footerNode = (
    <div className={`${prefixCls}-body-footer`}>
      <Button
        variant="text"
        onClick={onClose}
        className={`${prefixCls}-body-button`}
      >
        {cancelText || '取消'}
      </Button>
      <Button
        variant="text"
        color="primary"
        onClick={() => {
          onOk(InputRef?.current?.value);
        }}
        className={`${prefixCls}-body-button`}
      >
        {confirmText || '确定'}
      </Button>
    </div>
  );

  const inputNode = type === 'prompt' && (
    <Input
      {...InputProps}
      inputRef={InputRef}
      className={`${prefixCls}-body-input`}
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
        {header && <h1 className={`${prefixCls}-body-title`}>{header}</h1>}
        {message && <div className={`${prefixCls}-body-desc`}>{message}</div>}
        {inputNode}
        {footerNode}
      </div>
    </Modal>
  );
});

Dialog.displayName = 'BuiDialog';

export default Dialog;
