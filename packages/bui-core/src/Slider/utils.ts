import { SliderValue } from './Slider.types';

/**
 * 格式化数据
 * @returns undefined | number[]
 */
export const formatValue = (value: SliderValue) => {
  if (value === undefined) return value;

  return Array.isArray(value) ? value : [value, 0];
};

/**
 * 从小到大排序
 */
export const sortValue = (v: [number, number]): [number, number] => {
  if (!v) return v;
  return v.slice().sort((a, b) => a - b) as [number, number];
};

/**
 * 是否为相同值
 */
export const isSameValue = (newValue: SliderValue, oldValue: SliderValue) =>
  JSON.stringify(newValue) === JSON.stringify(oldValue);
