import React from 'react';
import { render } from 'testing';
import Swiper from '../Swiper';
import SwiperItem from '../SwiperItem';

describe('Swiper', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Swiper>
        <SwiperItem>
          <div className="demo-text demo-text-1">1</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-text demo-text-2">2</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-text demo-text-3">3</div>
        </SwiperItem>
      </Swiper>,
    );
    expect(container.querySelector('.swiper-slide')).not.toBeNull();
  });
  it('can be vertical', () => {
    const { container } = render(
      <Swiper vertical>
        <SwiperItem>
          <div className="demo-text demo-text-1">1</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-text demo-text-2">2</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-text demo-text-3">3</div>
        </SwiperItem>
      </Swiper>,
    );
    expect(container.querySelector('.swiper-vertical')).not.toBeNull();
  });
  it('can be circular', () => {
    const { container } = render(
      <Swiper circular>
        <SwiperItem>
          <div className="demo-text demo-text-1">1</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-text demo-text-2">2</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-text demo-text-3">3</div>
        </SwiperItem>
      </Swiper>,
    );
    expect(container.querySelector('.swiper-slide-duplicate')).not.toBeNull();
  });
  it('can set indicator color', () => {
    const { container } = render(
      <Swiper
        indicatorDots
        indicatorColor="#123456"
        indicatorActiveColor="#654321"
      >
        <SwiperItem>
          <div className="demo-text demo-text-1">1</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-text demo-text-2">2</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-text demo-text-3">3</div>
        </SwiperItem>
      </Swiper>,
    );
    expect(container.querySelector('.bui-swiper')).toHaveStyle(
      '--indicator-color: #123456; --indicator-color-active: #654321',
    );
  });
  it('can set margin', () => {
    const { container } = render(
      <Swiper previousMargin="20px" nextMargin="30px">
        <SwiperItem>
          <div className="demo-text demo-text-1">1</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-text demo-text-2">2</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-text demo-text-3">3</div>
        </SwiperItem>
      </Swiper>,
    );
    expect(container.querySelector('.bui-swiper')).toHaveStyle(
      'padding: 0px 30px 0px 20px',
    );
  });
  // swiper在单测环境中不工作，所以无法测试内部逻辑
  // see: https://github.com/nolimits4web/swiper/issues/5722
  // it('can slide to current state', async () => {
  //   const { container, rerender } = render(
  //     <Swiper current={0} duration={0}>
  //       <SwiperItem>
  //         <div className="demo-text demo-text-1">1</div>
  //       </SwiperItem>
  //       <SwiperItem>
  //         <div className="demo-text demo-text-2">2</div>
  //       </SwiperItem>
  //       <SwiperItem>
  //         <div className="demo-text demo-text-3">3</div>
  //       </SwiperItem>
  //     </Swiper>,
  //   );
  //   await waitFor(() => {
  //     expect(container.querySelector('.swiper-slide-active')).not.toBeNull();
  //   });
  //   rerender(
  //     <Swiper current={1} duration={0}>
  //       <SwiperItem>
  //         <div className="demo-text demo-text-1">1</div>
  //       </SwiperItem>
  //       <SwiperItem>
  //         <div className="demo-text demo-text-2">2</div>
  //       </SwiperItem>
  //       <SwiperItem>
  //         <div className="demo-text demo-text-3">3</div>
  //       </SwiperItem>
  //     </Swiper>,
  //   );
  //   await waitFor(() => {
  //     expect(
  //       container.querySelector('.swiper-slide-active .demo-text-2'),
  //     ).not.toBeNull();
  //   });
  // });
});
