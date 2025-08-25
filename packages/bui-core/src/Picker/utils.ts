import {
  IPickerOptionItem,
  ICascadePickerOptionItem,
  ICascadePickerChildOptionItem,
} from './Picker.types';

/**
 * 根据第一列数据判断选择器类型
 */
export const pickerPanelType = (
  options: (IPickerOptionItem[] | ICascadePickerOptionItem)[] = [],
) => {
  const firstColumn: IPickerOptionItem[] | ICascadePickerOptionItem =
    options[0];

  // 多列模式
  if (Array.isArray(firstColumn)) {
    return 'multiple';
  }

  // 级联模式
  if (firstColumn?.children) {
    return 'cascade';
  }

  // 单列模式
  return 'single';
};

/**
 * 格式化级联模式数据
 */
export const formatCascade = (
  columns: ICascadePickerOptionItem[],
  values?: (number | string)[],
) => {
  const result: ICascadePickerChildOptionItem[][] = [];
  let columnOptions: ICascadePickerChildOptionItem = {
    label: '',
    value: '',
    children: columns,
  };

  let columnIndex = 0;
  while (columnOptions?.children) {
    const options: ICascadePickerChildOptionItem[] = columnOptions.children;
    const value = values?.[columnIndex];
    let index = options.findIndex((item) => item.value === value);
    if (index === -1) index = 0;
    columnOptions = columnOptions.children[index];
    columnIndex += 1;
    result.push(options);
  }

  return result;
};

/**
 * 统一options数据格式
 */
export const formatOptions = (
  internalValue: (number | string)[],
  options = [],
) => {
  const panelType = pickerPanelType(options as ICascadePickerOptionItem[]);
  if (panelType === 'multiple') return options;
  if (panelType === 'cascade')
    return formatCascade(options as ICascadePickerOptionItem[], internalValue);
  return options;
};

/**
 * 在格式化后的数据源中是否存在等长子项的value
 */
export const existSameLengthValue = (
  value: unknown[],
  formatted: { value: string | number; [index: string]: unknown }[][],
) => {
  const result = formatted.every((item, idx) =>
    item.some((i) => value?.[idx] === i?.value),
  );
  return result;
};

/**
 * 关闭选择器时，纠正value和格式化数据
 * 取决于formatted后的options有几列，若value为格式化后数据源（formatted）的等长子集，则取value，否则执行纠正逻辑
 */
export const safeData = ({ value, formatted, options }) => {
  let safeValue = [];
  let safeFormattedValue = [];

  const existValidChildren = existSameLengthValue(value, formatted);

  if (existValidChildren) {
    safeValue = value;
    safeFormattedValue = formatted;
  } else {
    formatted.forEach((item, index) => {
      const childIndex = item.findIndex((i) => i.value === value[index]);
      safeValue[index] = item?.[childIndex]?.value || item?.[0]?.value;
    });
    safeFormattedValue = formatOptions(safeValue, options);
  }

  return {
    safeValue,
    safeFormattedValue,
  };
};
