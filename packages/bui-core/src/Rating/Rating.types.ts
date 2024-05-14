import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type RatingSize = 'xsmall' | 'small' | 'medium' | 'large';
export type RatingProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 大小 'xsmall' | 'small' | 'medium' | 'large'
       * @default 'medium'
       */
      size?: RatingSize;
      /**
       * 是否禁止点击后清空
       * @default false
       */
      disableClear?: boolean;
      /**
       * 是否允许半选
       * @default false
       */
      allowHalf?: boolean;
      /**
       * 是否允许禁用
       * @default false
       */
      disabled?: boolean;
      /**
       * 未选中态图标
       * @default <StarFilledIcon htmlColor="#ced1d6" />
       */
      icon?: React.ReactNode;
      /**
       * 选中态图标
       * @default <StarFilledIcon color="warning" />
       */
      checkedIcon?: React.ReactNode;
      /**
       * 评分总数
       * @default 5
       */
      count?: number;
      /**
       * 是否只读
       * @default false
       */
      readOnly?: boolean;
      /**
       * 当前评分
       */
      value?: number;
      /**
       * 默认评分 非受控状态使用
       */
      defaultValue?: number;
      /**
       * input的name属性
       */
      name?: string;
      /**
       * 评分回调
       */
      onChange?: (
        ev?: React.SyntheticEvent,
        data?: {
          value: number;
        },
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;
