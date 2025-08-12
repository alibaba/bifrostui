import { isMini } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { useLayoutEffect, useState } from 'react';
import { ImageProps } from './Image.types';
import './index.less';

const prefixCls = 'bui-image';

const Image = React.forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      fit = 'fill',
      src = '',
      lazy = false,
      style,
      webp,
      alt,
      showMenu,
      width,
      height,
      fallback = null,
      className,
      placeholder = false,
      onClick,
      onLoad,
      onError,
      imgProps,
      ...others
    },
    ref,
  ) => {
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);

    /**
     * 小程序mode映射
     */
    const modeEnum = {
      none: 'center', // 被替换的内容将保持其原有的尺寸居中裁切展示
      contain: 'aspectFit', // 被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。 整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配
      cover: 'aspectFill', // 被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。
      fill: 'scaleToFill', // 被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不匹配，那么该对象将被拉伸以适应内容框
      'scale-down': 'aspectFit', // 内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。
      widthFix: 'widthFix', // 【微信小程序】缩放模式，宽度不变，高度自动变化，保持原图宽高比不变。
      heightFix: 'heightFix', // 【微信小程序】缩放模式，高度不变，宽度自动变化，保持原图宽高比不变。
    };

    useLayoutEffect(() => {
      setLoaded(false);
      setFailed(false);
    }, [src]);

    function defaultIconWrap(icon: React.ReactNode) {
      return <div className={`${prefixCls}-default-icon-wrap`}>{icon}</div>;
    }

    const defaultIcon = defaultIconWrap(
      <div className={`${prefixCls}-default-icon-item`} />,
    );

    const defaultPlaceholder =
      placeholder === false
        ? []
        : (placeholder !== true && defaultIconWrap(placeholder)) || defaultIcon;

    const defaultFallback =
      (fallback && defaultIconWrap(fallback)) || defaultPlaceholder;
    const miniAttr = {
      webp,
      lazyLoad: lazy,
      'lazy-load': lazy,
      mode: fit && modeEnum[fit],
      showMenuByLongpress: showMenu,
    };
    const imgEle = (
      <img
        src={src}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setFailed(true);
          onError?.(e);
        }}
        alt={alt}
        {...imgProps}
        // @ts-ignore
        style={{ objectFit: fit, ...(imgProps?.style || {}) }}
        className={clsx(
          `${prefixCls}-img`,
          // 无占位且不onFail时直接展示img本体
          (loaded || (placeholder === false && !failed)) &&
            `${prefixCls}-loaded`,
          imgProps?.className,
        )}
        {...(isMini ? miniAttr : {})}
      />
    );

    function renderImgEle() {
      return (
        <>
          {(failed && defaultFallback) ||
            (!loaded && defaultPlaceholder) ||
            null}
          {imgEle}
        </>
      );
    }

    return (
      <div
        ref={ref}
        onClick={onClick}
        style={{ width, height, ...style }}
        className={clsx(prefixCls, className)}
        {...others}
      >
        {renderImgEle()}
      </div>
    );
  },
);

Image.displayName = 'BuiImage';

export default Image;
