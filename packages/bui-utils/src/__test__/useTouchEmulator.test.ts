import { renderHook } from 'testing';
import useTouchEmulator from '../hooks/useTouchEmulator';

describe('useTouchEmulator', () => {
  test('touch event in browser', () => {
    const div = document.createElement('div');
    renderHook(() => {
      // @ts-ignore
      useTouchEmulator(div);
    });

    const mousedown = new MouseEvent('mousedown', {
      cancelable: true,
      bubbles: true,
    });

    const mousemove = new MouseEvent('mousemove', {
      cancelable: true,
      bubbles: true,
    });
    const touchMove = vi.fn();
    div.addEventListener('touchmove', touchMove, false);

    div.dispatchEvent(mousedown);
    div.dispatchEvent(mousemove);
    expect(touchMove).toBeCalled();
  });
});
