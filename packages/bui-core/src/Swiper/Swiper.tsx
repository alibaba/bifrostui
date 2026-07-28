import clsx from 'clsx';
import React, { forwardRef, useEffect, useRef } from 'react';
import {
  Autoplay,
  EffectFade,
  Pagination,
  type Swiper as SwiperClass,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Swiper as SwiperReact, SwiperRef } from 'swiper/react';
import { SwiperProps } from './Swiper.types';
import './index.less';

/**
 * Keep non-visible slides out of the accessibility tree so mobile screen
 * readers do not announce every card at once.
 * Relies on `swiper-slide-visible` from `watchSlidesProgress`.
 */
export function syncSwiperSlideA11y(swiper?: SwiperClass | null) {
  if (!swiper?.slides?.length) return;

  swiper.slides.forEach((slideEl) => {
    const el = slideEl as HTMLElement & { inert?: boolean };
    const visible = el.classList.contains('swiper-slide-visible');
    el.setAttribute('aria-hidden', visible ? 'false' : 'true');
    // inert blocks focus/interaction for PC keyboard users; pair with aria-hidden
    if (visible) {
      el.removeAttribute('inert');
      el.inert = false;
    } else {
      el.setAttribute('inert', '');
      el.inert = true;
    }
  });
}

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
    onSwiper,
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

  const swiperInstance = useRef<SwiperClass>(null);
  const isInit = useRef(true);

  useEffect(() => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }
    if (circular) {
      swiperInstance?.current?.slideToLoop?.(current);
    } else {
      swiperInstance?.current?.slideTo?.(current);
    }
  }, [current, circular]);

  useEffect(() => {
    if (swiperInstance?.current) {
      if (autoplay) {
        swiperInstance?.current?.autoplay.start();
      } else {
        swiperInstance?.current?.autoplay.stop();
      }
    }
  }, [autoplay]);

  return (
    <SwiperReact
      modules={[Pagination, Autoplay, EffectFade]}
      loop={circular}
      autoplay={{ delay: interval, disableOnInteraction: false }}
      speed={duration}
      slidesPerView={displayMultipleItems}
      direction={vertical ? 'vertical' : 'horizontal'}
      pagination={indicatorDots ? { clickable: true } : false}
      initialSlide={current}
      onSlideChange={(swiper) => {
        syncSwiperSlideA11y(swiper);
        onChange?.({
          detail: {
            current: swiper.realIndex,
          },
          type: 'change',
          target: swiper,
        });
      }}
      onSlideChangeTransitionEnd={(swiper) => {
        syncSwiperSlideA11y(swiper);
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
      watchSlidesProgress
      onSwiper={(instance) => {
        swiperInstance.current = instance;
        syncSwiperSlideA11y(instance);
        onSwiper?.(instance);
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
