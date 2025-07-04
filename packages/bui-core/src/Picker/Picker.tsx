import clsx from 'clsx';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Drawer from '../Drawer';
import PickerPanel from './PickerPanel';
import { useLocaleText } from '../locales';
import { PickerProps, ICascadePickerChildOptionItem } from './Picker.types';
import { formatOptions, pickerPanelType, safeData } from './utils';
import './Picker.less';

const prefixCls = 'bui-picker';

const checkDisabled = (values, columns) =>
  values.find(
    (value, index) =>
      columns?.[index]?.find((column) => column?.value === value)?.disabled,
  );

const Picker = React.forwardRef<HTMLDivElement, PickerProps>((props, ref) => {
  const {
    className,
    open = false,
    title,
    options = [],
    value,
    confirmText: propConfirmText,
    cancelText: propCancelText,
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

  const disabled = checkDisabled(internalValue, columns);

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

  const confirm = (e: React.MouseEvent<HTMLDivElement>) => {
    const isMoving = rollerRefs.current.some((roller) => roller?.isMoving);
    // 处于惯性滚动中，或者处于禁用状态，不允许确认关闭选择器
    if (isMoving || disabled) return;

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

  const cancel = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const updateItem = (
    e: React.TransitionEvent<HTMLDivElement>,
    columnOption: ICascadePickerChildOptionItem,
    columnIndex: number,
  ) => {
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
          colOption = {
            ...(colOption?.children?.[0] || {}),
          } as ICascadePickerChildOptionItem;
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
          columnIndex,
        });
      } else {
        // value为引用类型，防止取消时外部value被修改
        const result = [...internalValue];
        result[columnIndex] = columnOption.value;
        setInternalValue(result);
        onOptionChange?.(e, {
          value: result,
          options: options as ICascadePickerChildOptionItem[][],
          currentOption: columnOption,
          columnIndex,
        });
      }
    }
  };

  const handleSelect = (
    e: React.TransitionEvent<HTMLDivElement>,
    {
      columnIndex,
      columnOption,
    }: { columnIndex: number; columnOption: ICascadePickerChildOptionItem },
  ) => {
    updateItem(e, columnOption, columnIndex);
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>, data) => {
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
            {propCancelText || cancelText}
          </div>
          {title && <div className={`${prefixCls}-title`}>{title}</div>}
          <div
            className={clsx(`${prefixCls}-confirm`, {
              [`${prefixCls}-confirm-disabled`]: disabled,
            })}
            onClick={confirm}
          >
            {propConfirmText || confirmText}
          </div>
        </div>

        <div className={`${prefixCls}-container`}>
          {columns.map((column, index) => (
            <PickerPanel
              ref={setRefs(index)}
              key={index}
              options={column}
              columnIndex={index}
              value={internalValue?.[index]}
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
