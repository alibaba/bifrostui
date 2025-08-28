import { isMini, useForkRef, useValue } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { TextAreaProps } from './TextArea.types';
import './index.less';

const prefixCls = 'bui-textarea';
const DEFAULT_ROWS = 2;

const TextArea = React.forwardRef<HTMLDivElement, TextAreaProps>(
  (props, ref) => {
    const {
      className,
      value,
      defaultValue = '',
      textareaProps,
      textareaRef,
      name,
      placeholder,
      disabled,
      rows = DEFAULT_ROWS, // 默认行数
      maxLength,
      autoSize = false, // 是否自适应高度
      autoFocus = false, // 是否自动聚焦
      showCount = false, // 是否展示字数统计
      // 无障碍属性
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
      'aria-details': ariaDetails,
      'aria-required': ariaRequired,
      'aria-readonly': ariaReadonly,
      'aria-rowcount': ariaRowcount,
      'aria-rowindex': ariaRowindex,
      'aria-colcount': ariaColcount,
      onChange,
      ...others
    } = props;

    // 受控/非受控 value 处理
    const [textAreaValue, triggerChange] = useValue({
      value,
      defaultValue,
      onChange,
    });
    // 小程序初始化高度锁
    const initLock = useRef(false);
    // textarea dom 引用
    const internalRef = useRef<HTMLTextAreaElement>(null);
    // 合并外部和内部ref
    const handleInputRef = useForkRef(internalRef, textareaRef);

    // 自动聚焦
    useEffect(() => {
      if (autoFocus && internalRef.current) {
        internalRef.current.focus();
      }
    }, [autoFocus]);

    // 处理自适应高度的最大/最小高度
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

    // H5 下自适应高度
    useEffect(() => {
      if (!autoSize || isMini) return;

      const textArea = internalRef.current;
      if (!textArea) return;
      textArea.style.height = 'auto';
      let height = textArea.scrollHeight;
      height = handleAutoHeight(height);
      textArea.style.height = `${height}px`;
    }, [textAreaValue, autoSize]);

    // 小程序下自适应高度处理
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

    // 组装原生属性，兼容小程序和H5
    let nativeProps: Record<string, any> = {
      [isMini ? 'maxlength' : 'maxLength']: maxLength ?? -1,
    };

    // 添加无障碍属性到原生属性中
    const accessibilityProps = {
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
      'aria-details': ariaDetails,
      'aria-required': ariaRequired,
      'aria-readonly': ariaReadonly,
      'aria-rowcount': ariaRowcount,
      'aria-rowindex': ariaRowindex,
      'aria-colcount': ariaColcount,
    };

    // 过滤掉 undefined 的无障碍属性
    Object.keys(accessibilityProps).forEach((key) => {
      if (accessibilityProps[key] !== undefined) {
        nativeProps[key] = accessibilityProps[key];
      }
    });

    if (isMini) {
      nativeProps = {
        ...nativeProps,
        onLineChange: handleLineChange, // 小程序行高变化事件
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
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          {...textareaProps}
          onChange={(e) => {
            // 受控/非受控统一触发
            triggerChange(e, e.target.value);
            textareaProps?.onChange?.(e);
          }}
          onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            // 小程序中无onChange事件，通过onInput模拟
            if (showCount) {
              const remaining = maxLength - e.target.value.length;
              // 动态更新 aria-description
              e.target.setAttribute('aria-description', `剩余 ${remaining} 字`);
            }
            if (isMini) {
              triggerChange(e, e.target.value);
            }
            textareaProps?.onInput?.(e);
          }}
          className={clsx(`${prefixCls}-content`, textareaProps?.className)}
        />

        {/* 字数统计 */}
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

export default TextArea;
