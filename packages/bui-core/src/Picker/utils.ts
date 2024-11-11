import { IPickerOptionItem, ICascadePickerOptionItem } from './Picker.types';

/**
 * 根据第一列数据判断选择器类型
 */
export const pickerPanelType = (options = []) => {
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
  const result: ICascadePickerOptionItem[][] = [];
  let columnOptions: ICascadePickerOptionItem = {
    label: '',
    value: '',
    children: columns,
  };

  let columnIndex = 0;
  while (columnOptions?.children) {
    const options: ICascadePickerOptionItem[] = columnOptions.children;
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
export const formatOptions = (internalValue, options = []) => {
  const panelType = pickerPanelType(options);
  switch (panelType) {
    case 'multiple':
      return options;
    case 'cascade':
      return formatCascade(options, internalValue);
    default:
      return options;
  }
};

/**
 * 在格式化后的数据源中是否存在等长子项的value
 */
export const existSameLengthValue = (value, formatted) => {
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
  let safeFormatted = [];

  const existValidChildren = existSameLengthValue(value, formatted);

  if (existValidChildren) {
    safeValue = value;
    safeFormatted = formatted;
  } else {
    formatted.forEach((item, index) => {
      const childIndex = item.findIndex((i) => i.value === value[index]);
      safeValue[index] = item?.[childIndex]?.value || item?.[0]?.value;
    });
    safeFormatted = formatOptions(safeValue, options);
  }

  return {
    safeValue,
    safeFormatted,
  };
};
