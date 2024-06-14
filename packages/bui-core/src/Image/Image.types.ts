import { OverrideProps } from '@bifrostui/types';
import React, { ReactNode } from 'react';

export type ImageProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 图片地址
       */
      src?: string;

      /**
       * 是否懒加载图片
       */
      lazy?: boolean;

      alt?: string;
      /**
       * 加载失败的占位
       */
      fallback?: ReactNode;

      /**
       * 加载时的占位
       */
      placeholder?: ReactNode | boolean;

      /**
       * 图片宽度
       */
      width?: string | number;

      /**
       * 图高度
       */
      height?: string | number;

      /**
       * 图片裁剪、缩放的模式
       * 'widthFix'和'heightFix'仅小程序使用
       */
      fit?:
        | 'contain'
        | 'cover'
        | 'fill'
        | 'none'
        | 'scale-down'
        | 'widthFix'
        | 'heightFix';

      /**
       * 默认不解析 webP 格式，只支持网络资源
       */
      webp?: boolean;

      /**
       * 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单。
       * 支持识别的码：小程序码
       * 仅小程序支持识别的码：微信个人码、微信群码、企业微信个人码、 企业微信群码与企业微信互通群码；
       */
      showMenu?: boolean;
      imgProps?: React.HTMLAttributes<HTMLImageElement>;
    };
    defaultComponent: D;
  },
  D
>;
