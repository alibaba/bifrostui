import React from 'react';

interface IEasing {
  easeInOut: string;
  easeIn: string;
  easeOut: string;
  sharp: string;
}

interface IDuration {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
}

export const easing: IEasing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

export const duration: IDuration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  /** 标准 */
  standard: 300,
  /** 用在复杂动画场景 */
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
};

interface ComponentProps {
  easing: string | { enter?: string; exit?: string } | undefined;
  style: React.CSSProperties | undefined;
  timeout: number | { enter?: number; exit?: number };
  delay: number | { enter?: number; exit?: number };
}

interface Options {
  mode:
    | 'enter'
    | 'exit'
    | 'unmounted'
    | 'exited'
    | 'entering'
    | 'entered'
    | 'exiting';
}

interface TransitionOptions {
  duration: string | number;
  easing: string | undefined;
  delay: string | number;
}

export function getTransitionProps(
  props: ComponentProps,
  options: Options,
): TransitionOptions {
  const { timeout, easing: easingProps, style = {}, delay } = props;
  let { mode } = options;
  if (mode !== 'enter' && mode !== 'exit')
    mode = mode === 'entering' || mode === 'entered' ? 'enter' : 'exit';

  return {
    duration:
      style.transitionDuration ??
      (typeof timeout === 'number' ? timeout : timeout[mode] || 0),
    easing:
      style.transitionTimingFunction ??
      (typeof easingProps === 'object' ? easingProps[mode] : easingProps),
    delay:
      style.transitionDelay ??
      (typeof delay === 'number' ? delay : delay[mode] || 0),
  };
}

function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}

interface IInputTransition {
  easing: IEasing;
  duration: IDuration;
  delay: number;
}
type ITransitionProps = string | string[];

export function createTransitions(
  inputTransitions: Partial<IInputTransition> = {},
) {
  const mergedEasing = {
    ...easing,
    ...inputTransitions.easing,
  };

  const mergedDuration = {
    ...duration,
    ...inputTransitions.duration,
  };

  const create = (
    props: ITransitionProps = ['all'],
    options?: Partial<{
      duration: number | string;
      easing: string;
      delay: number | string;
    }>,
  ) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0,
    } = options;

    return (Array.isArray(props) ? props : [props])
      .map(
        (animatedProp) =>
          `${animatedProp} ${
            typeof durationOption === 'string'
              ? durationOption
              : formatMs(durationOption)
          } ${easingOption} ${
            typeof delay === 'string' ? delay : formatMs(delay)
          }`,
      )
      .join(',');
  };

  return {
    create,
    ...inputTransitions,
    easing: mergedEasing,
    duration: mergedDuration,
  };
}
