import React, { useRef } from 'react';
import clsx from 'clsx';
import { Input } from '@bifrostui/react';
import { DialogProps, Dispatch, Render } from './Dialog.types';
import Modal from '../Modal';
import './index.less';

const prefixCls = 'bui-dialog';

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const {
    visible,
    onCancel,
    onConfirm,
    dispatch,
    custom,
    header,
    desc,
    footer,
    type,
    confirmText,
    cancelText,
    placeholder,
    ...others
  } = props;

  const InputRef = useRef(null);

  const dialogDispatch: Dispatch = async (action) => {
    if (dispatch) {
      dispatch(action);
    } else if (action === false) {
      onCancel && onCancel();
    } else if (action === true) {
      onConfirm && onConfirm(InputRef?.current?.value);
    }
  };

  const renderNode = (node: Render) =>
    typeof node === 'function' ? node(dialogDispatch) : node;
  const customNode = custom && renderNode(custom);
  const titleNode = header && renderNode(header);
  const descNode = desc && renderNode(desc);
  const footerNode = !footer ? (
    <>
      <a onClick={onCancel} className={`${prefixCls}-button`}>
        {cancelText ? cancelText : '取消'}
      </a>
      <a
        onClick={() => {
          onConfirm(InputRef?.current?.value);
        }}
        className={`${prefixCls}-button`}
      >
        {confirmText ? confirmText : '确定'}
      </a>
    </>
  ) : (
    renderNode(footer)
  );

  const inputNode = type === 'prompt' && (
    <Input
      inputRef={InputRef}
      className={`${prefixCls}-input`}
      placeholder={`${placeholder || '请在此处输入'}`}
    />
  );

  if (!visible) return null;

  return (
    <Modal
      {...others}
      className={clsx(prefixCls)}
      open={props.visible}
      disablePortal
      onClose={onCancel}
    >
      <div
        ref={ref}
        className={clsx(`${prefixCls}-main`)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${prefixCls}-body`}>
          {customNode ? (
            customNode
          ) : (
            <>
              {titleNode && (
                <h1 className={`${prefixCls}-title`}>{titleNode}</h1>
              )}
              {descNode && (
                <div className={`${prefixCls}-desc`}>{descNode}</div>
              )}
              {inputNode}
            </>
          )}
          {!!footerNode && (
            <div className={`${prefixCls}-footer`}>{footerNode}</div>
          )}
        </div>
      </div>
    </Modal>
  );
});

Dialog.displayName = 'BuiDialog';

export default Dialog;
