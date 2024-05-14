import { createTransitions, easing, getTransitionProps } from '../transitions';

describe('getTransitionProps', () => {
  test('should return transition props for enter mode', () => {
    const props = {
      timeout: 500,
      easing: 'easeIn',
      style: {},
      delay: 0,
    };
    const result = getTransitionProps(props, { mode: 'enter' });
    const expected = {
      duration: 500,
      easing: 'easeIn',
      delay: 0,
    };
    expect(result).toEqual(expected);
  });

  test('should return transition props for exit mode', () => {
    const props = {
      timeout: { enter: 300, exit: 800 },
      easing: { enter: 'easeIn', exit: 'easeOut' },
      style: {},
      delay: 0,
    };
    const result = getTransitionProps(props, {
      mode: 'exit',
    });
    const expected = {
      duration: 800,
      easing: 'easeOut',
      delay: 0,
    };
    expect(result).toEqual(expected);
  });

  test('should prioritize style properties over props', () => {
    const props = {
      timeout: { enter: 300, exit: 800 },
      easing: { enter: 'easeIn', exit: 'easeOut' },
      style: {
        transitionDuration: '500ms',
        transitionTimingFunction: 'easeInOut',
        transitionDelay: '200ms',
      },
      delay: 0,
    };
    const result = getTransitionProps(props, {
      mode: 'exit',
    });

    const expected = {
      duration: '500ms',
      easing: 'easeInOut',
      delay: '200ms',
    };

    expect(result).toEqual(expected);
  });
});

describe('createTransitions', () => {
  test('should create transitions with custom options', () => {
    const transitions = createTransitions({ easing });
    const options = {
      duration: 500,
      easing: 'easeIn',
      delay: '200',
    };
    const result = transitions.create('opacity', options);
    const expected = 'opacity 500ms easeIn 200';
    expect(result).toBe(expected);
  });
});

describe('create', () => {
  test('should create transitions for single property', () => {
    const { create } = createTransitions();
    const result = create('opacity', {
      duration: 500,
      easing: easing.easeIn,
      delay: '200',
    });
    const expected = 'opacity 500ms cubic-bezier(0.4, 0, 1, 1) 200';
    expect(result).toBe(expected);
  });
});
