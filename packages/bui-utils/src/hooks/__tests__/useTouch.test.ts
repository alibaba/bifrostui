import { renderHook } from '@testing-library/react-hooks';
import useTouch from '../useTouch';

describe('useTouch', () => {
  let touch;

  beforeEach(() => {
    renderHook(() => {
      touch = useTouch();
    });
  });

  it('should reset touch values', () => {
    touch.start({ touches: [{ clientX: 0, clientY: 0 }] });
    touch.move({ touches: [{ clientX: 20, clientY: 20 }] });
    touch.end();
    touch.reset();

    expect(touch.deltaX.current).toBe(0);
    expect(touch.deltaY.current).toBe(0);
    expect(touch.offsetX.current).toBe(0);
    expect(touch.offsetY.current).toBe(0);
    expect(touch.delta.current).toBe(0);
    expect(touch.direction.current).toBe('');
    expect(touch.last.current).toBe(false);
  });

  it('should set the correct direction', () => {
    expect(touch.direction.current).toBe('');
    touch.start({ touches: [{ clientX: 0, clientY: 0 }] });
    touch.move({ touches: [{ clientX: 20, clientY: 10 }] });
    expect(touch.direction.current).toBe('horizontal');
    touch.reset();
    touch.start({ touches: [{ clientX: 0, clientY: 0 }] });
    touch.move({ touches: [{ clientX: 10, clientY: 20 }] });
    expect(touch.direction.current).toBe('vertical');
  });

  it('should return true for isVertical if direction is vertical', () => {
    touch.direction.current = 'vertical';
    expect(touch.isVertical()).toBe(true);
  });

  it('should return true for isHorizontal if direction is horizontal', () => {
    touch.direction.current = 'horizontal';
    expect(touch.isHorizontal()).toBe(true);
  });
});
