import { OverrideProps } from '@bifrostui/types';
import React from 'react';
import { OnChangeEvent } from './Steps.types';

export type StatusProps = 'wait' | 'active' | 'finish' | 'error';

export type StepProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 标题
       */
      title?: React.ReactNode;
      /**
       * 副标题
       */
      subtitle?: React.ReactNode;
      /**
       * 步骤的详情描述
       */
      description?: React.ReactNode;
      /**
       * 步骤图标
       */
      icon?: React.ReactNode;
      /**
       * 当前步骤的状态 'wait' | 'active' | 'finish' | 'error'
       */
      status?: StatusProps;
      /**
       * 是否禁止点击
       * 默认 false
       */
      disabled?: boolean;
      onClick?: OnChangeEvent;
    };
    defaultComponent: D;
  },
  D
>;
