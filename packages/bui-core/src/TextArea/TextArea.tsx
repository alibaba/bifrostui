import { isMini, useForkRef, useValue } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { TextAreaProps } from './TextArea.types';
import './TextArea.less';
import { useTheme } from '../ThemeProvider';

const prefixCls = 'bui-textarea';
const DEFAULT_ROWS = 2;

const TextArea = React.forwardRef<HTMLDivElement, TextAreaProps>(
  (props, ref) => {
    const {
      className,
      value,
      defaultValue,
      textareaProps,
      textareaRef,
      name,
      placeholder,
      disabled,
      rows,
      maxLength,
      autoSize,
      autoFocus,
      showCount,
      onChange,
      ...others
    } = props;

    const { locale } = useTheme();
    const [textAreaValue, triggerChange] = useValue({
      value,
      defaultValue,
      onChange,
    });
    const initLock = useRef(false);
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const handleInputRef = useForkRef(internalRef, textareaRef);

    // autoFocus
    useEffect(() => {
      if (autoFocus && internalRef.current) {
        internalRef.current.focus();
      }
    }, [internalRef]);

    const handleAutoHeight = (height) => {
      if (typeof autoSize === 'object') {
        const { maxHeight, minHeight } = autoSize;
        if (maxHeight !== undefined) {
          return Math.min(height, maxHeight);
        }
        if (minHeight !== undefined) {
          return Math.max(height, minHeight);
        }
      }
      return height;
    };

    // H5 autoSize
    useEffect(() => {
      if (!autoSize || isMini) return;

      const textArea = internalRef.current;
      if (!textArea) return;
      textArea.style.height = 'auto';
      let height = textArea.scrollHeight;
      height = handleAutoHeight(height);
      textArea.style.height = `${height}px`;
    }, [textAreaValue, autoSize]);

    // miniprogram autoSize
    const handleLineChange = (e) => {
      if (!isMini) return;
      const textArea = internalRef.current;
      const { height, lineCount } = e?.detail || {};
      const line = lineCount <= 1 ? rows : lineCount;
      // 总高度 = 行数 * 单行高度
      let textAreaHeight = line * (height / lineCount + 4);
      textAreaHeight = handleAutoHeight(textAreaHeight);
      // autoSize=false也需要初始化小程序textarea高度
      if (!initLock.current && !autoSize && rows === DEFAULT_ROWS) {
        textArea.style.height = `${textAreaHeight}px`;
        initLock.current = true;
        return;
      }
      if (autoSize) {
        textArea.style.height = `${textAreaHeight}px`;
      }
    };

    let nativeProps: Record<string, any> = {
      [isMini ? 'maxlength' : 'maxLength']: maxLength ?? -1,
    };
    if (isMini) {
      nativeProps = {
        ...nativeProps,
        onLineChange: handleLineChange,
        placeholderClass: 'bui-mini-placeholder',
        autoFocus,
        focus: autoFocus,
      };
    }
    return (
      <div
        className={clsx(
          prefixCls,
          {
            [`${prefixCls}-disabled`]: disabled,
          },
          className,
        )}
        ref={ref}
        {...others}
      >
        <textarea
          ref={handleInputRef}
          {...nativeProps}
          name={name}
          value={textAreaValue}
          placeholder={
            placeholder === undefined
              ? locale?.textarea?.placeholder
              : placeholder
          }
          disabled={disabled}
          rows={rows}
          {...textareaProps}
          onChange={(e) => {
            triggerChange(e, e.target.value);
            textareaProps?.onChange?.(e);
          }}
          onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            // 小程序中无onChange事件，通过onInput模拟
            if (isMini) {
              triggerChange(e, e.target.value);
            }
            textareaProps?.onInput?.(e);
          }}
          className={clsx(`${prefixCls}-content`, textareaProps?.className)}
        />

        {showCount && (
          <div className={`${prefixCls}-count`}>
            {maxLength === undefined
              ? textAreaValue.length
              : `${textAreaValue.length}/${maxLength}`}
          </div>
        )}
      </div>
    );
  },
);

TextArea.displayName = 'BuiTextArea';
TextArea.defaultProps = {
  defaultValue: '',
  rows: DEFAULT_ROWS,
  autoSize: false,
  autoFocus: false,
  showCount: false,
};

export default TextArea;
