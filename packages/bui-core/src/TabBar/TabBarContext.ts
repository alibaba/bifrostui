import { ThemeColor } from '@bifrostui/types';
import { createContext, Context, SyntheticEvent } from 'react';

export interface TabBarState {
  /**
   * 当前选中的标签索引值
   * @default 0
   */
  currentIndex?: number;
  /**
   * 选中文案颜色
   * @default 'primary'
   */
  activeColor?: ThemeColor | 'vip';
  /**
   * 默认文案颜色
   * @default 'neutral'
   */
  color?: ThemeColor | 'vip';
  /**
   * 变化时回调函数
   */
  onChange?: (
    e: SyntheticEvent,
    data: {
      value: number;
    },
  ) => void;
}

const TabBarContext: Context<TabBarState> = createContext({});

export default TabBarContext;
