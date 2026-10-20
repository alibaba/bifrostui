import { OverrideProps } from '@bifrostui/types';
import * as React from 'react';
import { FadeProps } from '../Fade/Fade.types';
import { TransitionProps } from '../Transition';

export interface BackdropTypeMap<D extends React.ElementType = 'div', P = {}> {
  props: P & {
    /**
     * 是否展示
     * - default:false
     */
    open?: boolean;
    /**
     * 是否透明不可见
     * - default:false
     */
    invisible?: boolean;
    transitionDuration?: TransitionProps['timeout'];
  } & Omit<FadeProps, 'children'>;
  defaultComponent: D;
}

export type BackdropProps<
  D extends React.ElementType = BackdropTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<BackdropTypeMap<D, P>, D>;
