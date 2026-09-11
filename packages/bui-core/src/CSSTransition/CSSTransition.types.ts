import { TransitionProps } from '../Transition';

type IClassNames =
  | string
  | {
      enter?: string;
      enterActive?: string;
      enterDone?: string;
      exit?: string;
      exitActive?: string;
      exitDone?: string;
    };

export interface CSSTransitionProps extends TransitionProps {
  /*
   * classNames={{
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   */
  classNames?: IClassNames;
}
