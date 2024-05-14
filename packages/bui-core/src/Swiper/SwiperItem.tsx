import { SwiperSlide, SwiperSlideProps } from 'swiper/react';
import clsx from 'clsx';
import React from 'react';

const SwiperItem = (props: SwiperSlideProps) => {
  const { className, style, children, ...restProps } = props;
  const cls = clsx('swiper-slide', className);
  return (
    <SwiperSlide className={cls} style={style} {...restProps}>
      {children}
    </SwiperSlide>
  );
};

// make swiper happy
// child.type.displayName.includes('SwiperSlide');
// -> swiper/react/get-children.js
SwiperItem.displayName = 'BuiSwiperItem-SwiperSlide';

export default SwiperItem;
