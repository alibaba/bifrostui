import { OverrideProps } from '@bifrostui/types';
import React from 'react';
import { ImageProps } from '../Image/Image.types';

export type AvatarProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /** 图像地址 */
      src?: ImageProps['src'];
      /**
       * 图像无法显示时的替代文本
       */
      alt?: ImageProps['alt'];
      /**
       * 加载时占位
       */
      placeholder?: ImageProps['placeholder'];
      /**
       * 懒加载
       */
      lazy?: ImageProps['lazy'];
      /**
       * 图片裁剪、缩放的模式
       */
      fit?: ImageProps['fit'];
      /**
       * 透传ImageProps
       */
      ImageProps?: ImageProps;
      /**
       * 头像形状
       */
      variant?: 'rounded' | 'square';
      /**
       * 头像大小
       */
      size?: 'large' | 'medium' | 'small' | 'xsmall';
      /**
       * 图像头像加载失败回调
       */
      onError?: ImageProps['onError'];
      /**
       * 图像头像加载回调
       */
      onLoad?: ImageProps['onLoad'];
    };
    defaultComponent: D;
  },
  D
>;
