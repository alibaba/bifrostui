import clsx from 'clsx';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Drawer from '../Drawer';
import PickerPanel from './PickerPanel';
import { useLocaleText } from '../locales';
import { IPickerOptionItem, PickerProps } from './Picker.types';
import { formatOptions, pickerPanelType, safeData } from './utils';
import './Picker.less';

const prefixCls = 'bui-picker';

const Picker = React.forwardRef<HTMLDivElement, PickerProps>((props, ref) => {
  const {
    className,
    open = false,
    title,
    options = [],
    value,
    contentProps,
    onConfirm,
    onOptionChange,
    onCancel,
    onClose,
    ...others
  } = props;
  const pickerType = pickerPanelType(options);
  const rollerRefs = useRef([]);
  const [columns, setColumns] = useState([]);
  const [internalValue, setInternalValue] = useState([]);
  const { cancel: cancelText, confirm: confirmText } = useLocaleText('picker');

  useEffect(() => {
    if (!open) return;

    // 初始化默认选中数据
    const formatted = formatOptions(value, options);
    const initialValue = [];
    (formatted || []).forEach((item) => {
      initialValue.push(item?.[0]?.value);
    });
    const defaultValue = value?.length ? value : initialValue;
    if (defaultValue?.length) {
      setInternalValue(defaultValue);
    }
  }, [open, value, options]);

  useEffect(() => {
    if (options?.length) {
      const formatted = formatOptions(value, options);
      setColumns(formatted);
    }
  }, [value, options]);

  const confirm = (e) => {
    const isMoving = rollerRefs.current.some((roller) => roller?.isMoving);
    // 处于惯性滚动中，不允许确认关闭选择器
    if (isMoving) return;

    const { safeValue } = safeData({
      value: internalValue,
      formatted: columns,
      options,
    });
    const payload = {
      value: safeValue,
      options: columns,
    };

    onConfirm?.(e, payload);
    onClose?.(e, {
      from: 'confirm',
      ...payload,
    });
  };

  const cancel = (e) => {
    onCancel?.(e);
    const { safeValue } = safeData({
      value: internalValue,
      formatted: columns,
      options,
    });
    const payload = {
      value: safeValue,
      options: columns,
    };
    onClose?.(e, {
      from: 'cancel',
      ...payload,
    });
  };

  const updateItem = (e, columnOption, columnIndex) => {
    const columnValues = internalValue?.slice(0, columnIndex) || [];
    let colIndex = columnIndex;
    let colOption = columnOption;
    if (colOption && Object.keys(colOption).length) {
      if (columnValues[columnIndex] === columnOption.value) return;

      if (pickerType === 'cascade') {
        columnValues[colIndex] = colOption.value || '';
        while (colOption?.children?.[0]) {
          columnValues[colIndex + 1] = colOption.children[0].value;
          colIndex += 1;
          colOption = { ...(colOption?.children?.[0] || {}) };
        }
        // 当前改变列的下一列 children 值为空
        if (colOption?.children?.length) {
          columnValues[columnIndex + 1] = '';
        }
        const conbineValues = [
          ...(internalValue?.slice(0, columnIndex) || []),
          ...columnValues.slice(columnIndex),
        ];
        const formatted = formatOptions(conbineValues, options);
        setColumns(formatted);
        setInternalValue(conbineValues);
        onOptionChange?.(e, {
          value: conbineValues,
          options: formatted,
          currentOption: columnOption,
        });
      } else {
        // value为引用类型，防止取消时外部value被修改
        const result = [...internalValue];
        result[columnIndex] = columnOption.value;
        setInternalValue(result);
        onOptionChange?.(e, {
          value: result,
          options: options as IPickerOptionItem[][],
          currentOption: columnOption,
        });
      }
    }
  };

  const handleSelect = (e, { columnIndex, columnOption }) => {
    updateItem(e, columnOption, columnIndex);
  };

  const handleClose = (e, data) => {
    const { safeValue } = safeData({
      value: internalValue,
      formatted: columns,
      options,
    });
    onClose?.(e, {
      value: safeValue,
      options: columns,
      ...data,
    });
  };

  const setRefs = useCallback(
    (index: number) => (e: HTMLDivElement) => {
      if (e) rollerRefs.current[index] = e;
    },
    [],
  );

  return (
    <Drawer
      ref={ref}
      open={open}
      className={clsx(prefixCls, className)}
      onClose={handleClose}
      {...others}
    >
      <div
        {...contentProps}
        className={clsx(`${prefixCls}-content`, contentProps?.className)}
      >
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-cancel`} onClick={cancel}>
            {cancelText}
          </div>
          {title && <div className={`${prefixCls}-title`}>{title}</div>}
          <div className={`${prefixCls}-confirm`} onClick={confirm}>
            {confirmText}
          </div>
        </div>

        <div className={`${prefixCls}-container`}>
          {columns.map((column, index) => (
            <PickerPanel
              ref={setRefs(index)}
              key={index}
              options={column}
              columnIndex={index}
              defaultValue={internalValue?.[index]}
              onSelect={handleSelect}
              pickerStyle={others?.style}
            />
          ))}
        </div>
      </div>
    </Drawer>
  );
});

Picker.displayName = 'BuiPicker';

export default Picker;
