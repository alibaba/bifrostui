import clsx from 'clsx';
import React, { useRef, SyntheticEvent } from 'react';
import { useUniqueId } from '@bifrostui/utils';
import { Input } from '../Input';
import { Button } from '../Button';
import { useLocaleText } from '../locales';
import { DialogProps } from './Dialog.types';
import Modal from '../Modal';
import { useTheme } from '../ThemeProvider';
import './index.less';

const prefixCls = 'bui-dialog';

/**
 * Dialog组件 - 既可以作为组件使用，也可以函数式调用
 */
const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const {
    open,
    onOk,
    onCancel,
    title,
    content,
    type = 'confirm',
    okText,
    cancelText,
    placeholder,
    InputProps,
    className,
    theme,
    ...others
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const titleId = useUniqueId();
  const contentId = useUniqueId();

  const themeConfig = useTheme(theme);
  const {
    cancel,
    ok,
    placeholder: placeholderLocaleName,
  } = useLocaleText('dialog', themeConfig);

  // alert 模式只显示确认按钮
  const isAlertMode = type === 'alert';
  const isPromptMode = type === 'prompt';

  // 处理确认按钮点击
  const handleOk = (event: React.MouseEvent<HTMLButtonElement>) => {
    const inputValue = inputRef.current?.value || '';
    onOk?.(event, { value: inputValue });
  };

  // 处理取消按钮点击
  const handleCancel = (event: SyntheticEvent<Element, Event>) => {
    onCancel?.(event);
  };

  // 渲染操作按钮区域
  const actionsNode = (
    <div className={`${prefixCls}-actions`}>
      {!isAlertMode && (
        <Button
          variant="text"
          onClick={handleCancel}
          className={`${prefixCls}-actions-btn`}
        >
          {cancelText || cancel}
        </Button>
      )}
      <Button
        variant="text"
        color="primary"
        onClick={handleOk}
        className={`${prefixCls}-actions-btn`}
      >
        {okText || ok}
      </Button>
    </div>
  );

  // 渲染输入框（仅在prompt模式下显示）
  const inputNode = isPromptMode && (
    <Input
      {...InputProps}
      inputRef={inputRef}
      className={`${prefixCls}-input`}
      placeholder={placeholder || placeholderLocaleName}
      autoFocus
      aria-describedby={content ? contentId : undefined}
    />
  );

  const ariaLabelledBy = title ? titleId : undefined;
  const ariaDescribedBy = content ? contentId : undefined;

  return (
    <Modal
      {...others}
      open={open}
      ref={ref}
      className={clsx(prefixCls, `${prefixCls}-${type}`, className)}
      onClose={!isAlertMode ? handleCancel : undefined}
    >
      <div
        className={`${prefixCls}-container`}
        role={type === 'alert' ? 'alertdialog' : 'dialog'}
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
      >
        {title && (
          <h1 id={titleId} className={`${prefixCls}-title`}>
            {title}
          </h1>
        )}
        {content && (
          <div id={contentId} className={`${prefixCls}-content`}>
            {content}
          </div>
        )}
        {inputNode}
        {actionsNode}
      </div>
    </Modal>
  );
});

Dialog.displayName = 'BuiDialog';

export default Dialog;
