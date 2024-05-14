import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type SliderValue = number | [number, number];

export type SliderProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 设置初始取值，类型为number时，使用单滑块，类型为[number, number]时，使用双滑块
       * 当组件非受控时使用
       */
      defaultValue?: SliderValue;
      /**
       * 设置当前值，类型为number时，使用单滑块，类型为[number, number]时，使用双滑块
       * 当组件受控时使用
       */
      value?: SliderValue;
      /**
       * 最小值，默认为0
       */
      min?: number;
      /**
       * 最大值，默认为100
       */
      max?: number;
      /**
       * 步长，取值必须大于 0，并且可被 (max - min) 整除
       * 默认值 1
       */
      step?: number;
      /**
       * 提示气泡是否总是可见，默认为false，滑动时才可见
       */
      tipVisible?: boolean;
      /**
       * 自定义提示气泡，默认：(value) => value
       */
      tooltipRender?: (value: number) => React.ReactNode;
      /**
       * 是否禁用，默认false
       */
      disabled?: boolean;
      /**
       * 开始图标
       */
      startIcon?: React.ReactNode;
      /**
       * 结束图标
       */
      endIcon?: React.ReactNode;
      /**
       * 禁止开始图标和结束图标交错，默认false，可以交错
       */
      disableSwap?: boolean;
      /**
       * 改变时的回调
       */
      onChange?: (
        event: React.SyntheticEvent,
        data: {
          value: SliderValue;
          buttonIndex: number;
        },
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;
