import { ChangeEvent, useCallback, useRef, useState, useEffect } from 'react';

type Options<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (e: ChangeEvent<HTMLElement>, data: Record<string, any>) => void;
  config?: {
    name?: string;
    state?: string;
  };
};

export default function useValue<T>(options: Options<T>) {
  const { value, defaultValue, onChange, config = {} } = options;
  const { state, name } = config;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const initialDefaultValue = useRef(defaultValue);

  const isControlled = value !== undefined;

  // 异常情况
  useEffect(() => {
    if (
      !isControlled &&
      JSON.stringify(defaultValue) !==
        JSON.stringify(initialDefaultValue.current) &&
      state &&
      name
    ) {
      console.error(
        [
          `BUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` +
            `To suppress this warning opt to use a controlled ${name}.`,
        ].join('\n'),
      );
    }
  }, [defaultValue]);

  const triggerChange = useCallback(
    (e, val) => {
      setInternalValue(val);
      onChange?.(e, { value: val });
    },
    [onChange],
  );

  return [isControlled ? value : internalValue, triggerChange] as const;
}
