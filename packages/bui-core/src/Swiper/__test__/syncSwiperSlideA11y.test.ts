import type { Swiper as SwiperClass } from 'swiper';
import { syncSwiperSlideA11y } from '../Swiper';

const createSlide = (visible: boolean) => {
  const el = document.createElement('div');
  el.className = visible ? 'swiper-slide swiper-slide-visible' : 'swiper-slide';
  return el;
};

describe('syncSwiperSlideA11y', () => {
  it('marks non-visible slides as aria-hidden and inert', () => {
    const visible = createSlide(true);
    const hidden = createSlide(false);
    const swiper = {
      slides: [visible, hidden],
    } as unknown as SwiperClass;

    syncSwiperSlideA11y(swiper);

    expect(visible.getAttribute('aria-hidden')).toBe('false');
    expect(hidden.getAttribute('aria-hidden')).toBe('true');
    expect(visible.hasAttribute('inert')).toBe(false);
    expect(hidden.hasAttribute('inert')).toBe(true);
  });

  it('toggles attributes when visibility class changes', () => {
    const slide = createSlide(true);
    const swiper = { slides: [slide] } as unknown as SwiperClass;

    syncSwiperSlideA11y(swiper);
    expect(slide.getAttribute('aria-hidden')).toBe('false');
    expect(slide.hasAttribute('inert')).toBe(false);

    slide.classList.remove('swiper-slide-visible');
    syncSwiperSlideA11y(swiper);
    expect(slide.getAttribute('aria-hidden')).toBe('true');
    expect(slide.hasAttribute('inert')).toBe(true);

    slide.classList.add('swiper-slide-visible');
    syncSwiperSlideA11y(swiper);
    expect(slide.getAttribute('aria-hidden')).toBe('false');
    expect(slide.hasAttribute('inert')).toBe(false);
  });

  it('does nothing when swiper or slides are missing', () => {
    expect(() => syncSwiperSlideA11y(null)).not.toThrow();
    expect(() =>
      syncSwiperSlideA11y({ slides: [] } as unknown as SwiperClass),
    ).not.toThrow();
  });
});
