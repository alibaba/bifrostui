import { useForkRef } from '@bifrostui/utils';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { TransitionCoreProps, TransitionStatus } from './Transition.types';

const TransitionCore = forwardRef<HTMLElement, TransitionCoreProps>(
  (props, ref) => {
    const {
      appear,
      in: inProp,
      children,
      mountOnEnter,
      unmountOnExit,
      enter,
      exit,
      timeout: _timeout,
      delay: _delay,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      nextTick,
      ...childProps
    } = props;
    const UNMOUNTED = 'unmounted';
    const EXITED = 'exited';
    const ENTERING = 'entering';
    const ENTERED = 'entered';
    const EXITING = 'exiting';
    const [status, setStatus] = useState(() => {
      if (inProp) return appear ? EXITED : ENTERED;
      return mountOnEnter || unmountOnExit ? UNMOUNTED : EXITED;
    });
    const innerNodeRef = useRef();
    const nodeRef = useForkRef(innerNodeRef, ref);
    const timeout =
      typeof _timeout === 'object'
        ? { ..._timeout }
        : { enter: _timeout, exit: _timeout };
    const delay =
      typeof _delay === 'object' ? _delay : { enter: _delay, exit: _delay };
    timeout.enter += delay.enter;
    timeout.exit += delay.exit;
    const nextCallback = useRef(null);
    const appearStatus = useRef(inProp && appear ? ENTERING : null);
    const isFirstRender = useRef(false);

    const cancelNextCallback = () => {
      if (nextCallback.current !== null) {
        nextCallback.current?.cancel();
        nextCallback.current = null;
      }
    };
    const forceReflow = (node: Element) => node?.scrollTop;

    const setNextCallback = (callback) => {
      let active = true;

      nextCallback.current = (event) => {
        if (active) {
          active = false;
          nextCallback.current = null;
          callback(event);
        }
      };
      nextCallback.current.cancel = () => {
        active = false;
      };

      return nextCallback.current;
    };

    const onTransitionEnd = (timeoutArg, callback) => {
      if (timeoutArg !== null) {
        setNextCallback(callback);
        setTimeout(nextCallback.current, timeoutArg);
      }
    };
    const safeSetState = (nextState, callback) => {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      setStatus(nextState);
      setNextCallback(callback);
      nextTick(() => {
        nextCallback?.current?.();
      });
    };
    const performEnter = async (mounting) => {
      if (!enter && !mounting) {
        safeSetState(ENTERED, async () => {
          await onEntered?.(innerNodeRef?.current);
        });
        return;
      }
      if (onEnter) await onEnter?.(innerNodeRef?.current);
      safeSetState(ENTERING, async () => {
        await onEntering?.(innerNodeRef?.current);
        onTransitionEnd(timeout.enter, () => {
          safeSetState(ENTERED, async () => {
            await onEntered?.(innerNodeRef?.current);
          });
        });
      });
    };

    const performExit = async () => {
      if (!exit) {
        safeSetState(unmountOnExit ? UNMOUNTED : EXITED, async () => {
          await onExited?.(innerNodeRef?.current);
        });
        return;
      }
      await onExit?.(innerNodeRef?.current);
      safeSetState(EXITING, async () => {
        await onExiting?.(innerNodeRef?.current);
        onTransitionEnd(timeout.exit, () => {
          safeSetState(unmountOnExit ? UNMOUNTED : EXITED, async () => {
            await onExited?.(innerNodeRef?.current);
          });
        });
      });
    };

    const updateStatus = (nextStatus, mounting) => {
      if (nextStatus !== null) {
        cancelNextCallback();
        if (nextStatus === ENTERING) {
          performEnter(mounting);
        } else if (nextStatus === EXITING) {
          performExit();
        }
      }
    };
    useEffect(() => {
      nextTick(() => updateStatus(appearStatus.current, true));
      return () => {
        cancelNextCallback();
      };
    }, []);

    useEffect(() => {
      const isMounted = status !== UNMOUNTED;
      if (!isFirstRender.current) {
        isFirstRender.current = true;
        return;
      }
      let nextStatus = null;
      if (inProp) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else if (status === ENTERING || status === ENTERED) {
        nextStatus = EXITING;
      }
      if (isMounted) updateStatus(nextStatus, false);
      else
        safeSetState(inProp ? 'EXITED' : 'ENTERED', () => {
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
          forceReflow(innerNodeRef?.current);
          updateStatus(nextStatus, false);
        });
    }, [inProp]);

    if (status === UNMOUNTED) return null;
    return typeof children === 'function'
      ? children(status as TransitionStatus, { ...childProps, ref: nodeRef })
      : React.cloneElement(React.Children.only(children), {
          ...childProps,
          ref: nodeRef,
        });
  },
);

TransitionCore.displayName = 'BuiTransitionCore';
TransitionCore.defaultProps = {
  enter: true,
  exit: true,
  nextTick: setTimeout,
};
export default TransitionCore;
