import clsx from 'clsx';
import React, { forwardRef, useEffect, useRef } from 'react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Swiper as SwiperReact, SwiperRef } from 'swiper/react';
import './Swiper.less';
import { SwiperProps } from './Swiper.types';

const Swiper = forwardRef<SwiperRef, SwiperProps>((props, ref) => {
  const {
    autoplay = false,
    circular = false,
    current = 0,
    displayMultipleItems = 1,
    duration = 500,
    interval = 5000,
    spaceBetween,
    vertical,
    children,
    indicatorDots,
    indicatorColor,
    indicatorActiveColor,
    previousMargin,
    nextMargin,
    style,
    className,
    onChange,
    onAnimationFinish,
    ...others
  } = props;

  const defaultIndicatorColor = indicatorColor || 'rgba(255, 255, 255, .4)';
  const defaultIndicatorActiveColor =
    indicatorActiveColor || 'var(--bui-color-bg-view)';
  const cls = clsx(`bui-swiper`, className);
  const sty = {
    paddingTop: vertical ? previousMargin : 0,
    paddingRight: vertical ? 0 : nextMargin,
    paddingBottom: vertical ? nextMargin : 0,
    paddingLeft: vertical ? 0 : previousMargin,
    overflow: 'hidden',
    ...style,
  };

  const swiperInstance = useRef<any>();
  const isInit = useRef(true);
  useEffect(() => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }
    swiperInstance?.current?.slideTo?.(current);
  }, [current]);
  return (
    <SwiperReact
      modules={[Pagination, Autoplay, EffectFade]}
      loop={circular}
      autoplay={
        autoplay ? { delay: interval, disableOnInteraction: false } : false
      }
      speed={duration}
      slidesPerView={displayMultipleItems}
      direction={vertical ? 'vertical' : 'horizontal'}
      pagination={indicatorDots ? { clickable: true } : false}
      initialSlide={current}
      onSlideChange={(swiper) => {
        onChange?.({
          detail: {
            current: swiper.realIndex,
          },
          type: 'change',
          target: swiper,
        });
      }}
      onSlideChangeTransitionEnd={(swiper) => {
        onAnimationFinish?.({
          detail: {
            current: swiper.realIndex,
          },
          type: 'animationfinish',
          target: swiper,
        });
      }}
      spaceBetween={spaceBetween}
      {...others}
      onSwiper={(o) => {
        swiperInstance.current = o;
      }}
      style={{
        ...sty,
        '--indicator-color': defaultIndicatorColor,
        '--indicator-color-active': defaultIndicatorActiveColor,
      }}
      className={cls}
      ref={ref}
    >
      {children}
    </SwiperReact>
  );
});

Swiper.displayName = 'BuiSwiper';

export default Swiper;
