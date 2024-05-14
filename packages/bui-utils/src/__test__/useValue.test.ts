import { act, renderHook } from 'testing';
import useValue from '../hooks/useValue';

describe('useValue', () => {
  test('should use the controlled value when provided', () => {
    const controlledValue = 'controlled';
    const defaultValue = 'default';

    const { result } = renderHook(() =>
      useValue({ value: controlledValue, defaultValue }),
    );

    const [value] = result.current;

    expect(value).toBe(controlledValue);
  });

  test('should use the default value when not controlled', () => {
    const defaultValue = 'default';

    const { result } = renderHook(() => useValue({ defaultValue }));

    const [value] = result.current;

    expect(value).toBe(defaultValue);
  });

  test('should trigger change and update value', () => {
    const defaultValue = 'default';
    const newValue = 'new value';

    const onChangeMock = jest.fn();

    const { result } = renderHook(() =>
      useValue({ defaultValue, onChange: onChangeMock }),
    );

    const [, triggerChange] = result.current;

    act(() => {
      triggerChange(undefined, newValue);
    });

    expect(onChangeMock).toHaveBeenCalledWith(undefined, { value: newValue });

    const [updatedValue] = result.current;

    expect(updatedValue).toBe(newValue);
  });
});
