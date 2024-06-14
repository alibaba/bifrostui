import { OverrideProps } from '@bifrostui/types';
import React from 'react';
import { ITabItem, TabChangeEvent } from './Tabs.types';

export type TabProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P &
      Partial<Omit<ITabItem, 'title'>> & {
        /**
         * 点击Tab的回调
         */
        onClick?: TabChangeEvent;
      };
    defaultComponent: D;
  },
  D
>;
