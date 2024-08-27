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
