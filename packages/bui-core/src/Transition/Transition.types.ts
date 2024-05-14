import React, { ReactElement } from 'react';

type EnterHandler = (node?: HTMLElement) => void;

type ExitHandler = (node?: HTMLElement) => void;

interface TransitionActions {
  /**
   * Normally a component is not transitioned if it is shown when the
   * `<Transition>` component mounts. If you want to transition on the first
   * mount set  appear to true, and the component will transition in as soon
   * as the `<Transition>` mounts. Note: there are no specific "appear" states.
   * appear only adds an additional enter transition.
   */
  appear?: boolean | undefined;

  /**
   * Enable or disable enter transitions.
   */
  enter?: boolean | undefined;

  /**
   * Enable or disable exit transitions.
   */
  exit?: boolean | undefined;
}

export type TransitionStatus =
  | 'unmounted'
  | 'exited'
  | 'entering'
  | 'entered'
  | 'exiting';

export type TransitionChildren =
  | ReactElement
  | ((
      status: TransitionStatus,
      childProps?: Record<string, unknown>,
    ) => ReactElement);

export interface TransitionCoreProps
  extends TransitionActions,
    Omit<React.HTMLAttributes<ReactElement>, 'children'> {
  /**
   * Show the component; triggers the enter or exit states
   */
  in?: boolean | undefined;

  /**
   * By default the child component is mounted immediately along with the
   * parent Transition component. If you want to "lazy mount" the component on
   * the first `in={true}` you can set `mountOnEnter`. After the first enter
   * transition the component will stay mounted, even on "exited", unless you
   * also specify `unmountOnExit`.
   */
  mountOnEnter?: boolean | undefined;

  /**
   * By default the child component stays mounted after it reaches the
   * 'exited' state. Set `unmountOnExit` if you'd prefer to unmount the
   * component after it finishes exiting.
   */
  unmountOnExit?: boolean | undefined;

  /**
   * Callback fired before the "entering" status is applied. An extra
   * parameter `isAppearing` is supplied to indicate if the enter stage is
   * occurring on the initial mount
   */
  onEnter?: EnterHandler | undefined;

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * isAppearing is supplied to indicate if the enter stage is occurring on
   * the initial mount
   */
  onEntering?: EnterHandler | undefined;

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * isAppearing is supplied to indicate if the enter stage is occurring on
   * the initial mount
   */
  onEntered?: EnterHandler | undefined;

  /**
   * Callback fired before the "exiting" status is applied.
   */
  onExit?: ExitHandler | undefined;

  /**
   * Callback fired after the "exiting" status is applied.
   */
  onExiting?: ExitHandler | undefined;

  /**
   * Callback fired after the "exited" status is applied.
   */
  onExited?: ExitHandler | undefined;

  /**
   * A function child can be used instead of a React element. This function is
   * called with the current transition status ('entering', 'entered',
   * 'exiting',  'exited', 'unmounted'), which can be used to apply context
   * specific props to a component.
   * ```jsx
   *    <Transition in={this.state.in} timeout={150}>
   *        {state => (
   *            <MyComponent className={`fade fade-${state}`} />
   *        )}
   *    </Transition>
   * ```
   */
  children?: TransitionChildren | undefined;

  delay?:
    | number
    | {
        appear?: number | undefined;
        enter?: number | undefined;
        exit?: number | undefined;
      }
    | undefined;

  timeout?:
    | number
    | {
        appear?: number | undefined;
        enter?: number | undefined;
        exit?: number | undefined;
      }
    | undefined;
  nextTick?: typeof setTimeout | ((callback?: any) => void);
}

export type TransitionProps = Omit<TransitionCoreProps, 'nextTick'>;
