import { useForkRef, useDidMountEffect } from '@bifrostui/utils';
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
      enter = true,
      exit = true,
      timeout: _timeout,
      delay: _delay = 0,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      nextTick = setTimeout,
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
    const innerNodeRef = useRef<HTMLElement>(null);
    const nodeRef = useForkRef(innerNodeRef, ref);
    const timeout =
      typeof _timeout === 'object'
        ? { ..._timeout }
        : { enter: _timeout, exit: _timeout, appear: _timeout };

    const delay =
      typeof _delay === 'object'
        ? _delay
        : { enter: _delay, exit: _delay, appear: _delay };

    // Apply delay to timeout
    if (timeout.enter !== undefined) timeout.enter += delay.enter || 0;
    if (timeout.exit !== undefined) timeout.exit += delay.exit || 0;
    if (timeout.appear !== undefined) timeout.appear += delay.appear || 0;
    const nextCallback = useRef(null);
    const appearStatus = useRef(inProp && appear ? ENTERING : null);
    const isMountedRef = useRef(true);

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
        if (active && isMountedRef.current) {
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
      if (!isMountedRef.current) return;
      setStatus(nextState);
      setNextCallback(callback);
      nextTick(() => {
        if (isMountedRef.current) {
          nextCallback?.current?.();
        }
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
        safeSetState(EXITED, async () => {
          if (unmountOnExit) setStatus(UNMOUNTED);
          await onExited?.(innerNodeRef?.current);
        });
        return;
      }
      await onExit?.(innerNodeRef?.current);
      safeSetState(EXITING, async () => {
        await onExiting?.(innerNodeRef?.current);
        onTransitionEnd(timeout.exit, () => {
          safeSetState(EXITED, async () => {
            if (unmountOnExit) setStatus(UNMOUNTED);
            await onExited?.(innerNodeRef?.current);
          });
        });
      });
    };

    const updateStatus = (nextStatus, mounting) => {
      if (nextStatus !== null) {
        cancelNextCallback();
        if (nextStatus === ENTERING) {
          if (unmountOnExit || mountOnEnter) {
            forceReflow(innerNodeRef?.current);
          }
          performEnter(mounting);
        } else if (nextStatus === EXITING) {
          performExit();
        }
      }
    };
    useEffect(() => {
      // React StrictMode（仅 dev）会对 effect 做「执行 → 清理 → 再执行」的双重调用。
      // 清理函数把 isMountedRef 置为 false，而重新执行时不会自动恢复，导致重挂载后
      // 所有 safeSetState 都被守卫拦截（第一行 if (!isMountedRef.current) return），
      // appear 进场动画永远停在 exited —— 表现为 Modal/Fade 遮罩 opacity 恒为 0。
      isMountedRef.current = true;
      // 另外，这里的 nextTick 直接使用 setTimeout，不走 setNextCallback，
      // 因此 cancelNextCallback() 无法取消。用局部 cancelled 标志把这次
      // bootstrap 定时器绑定到当前 effect 实例，避免 StrictMode 下 Timer A
      // 在第二次挂载后仍然触发，进而导致 onEnter 等回调被调用两次。
      let cancelled = false;
      nextTick(() => {
        if (cancelled) return;
        updateStatus(appearStatus.current, true);
      });

      return () => {
        cancelled = true;
        isMountedRef.current = false;
        cancelNextCallback();
      };
    }, []);

    useDidMountEffect(() => {
      let nextStatus = null;
      if (inProp) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else if (status === ENTERING || status === ENTERED) {
        nextStatus = EXITING;
      }
      if (inProp && status === UNMOUNTED) {
        safeSetState(EXITED, () => {
          updateStatus(nextStatus, false);
        });
      } else {
        updateStatus(nextStatus, false);
      }
    }, [inProp]);

    if (status === UNMOUNTED) return null;
    if (typeof children === 'function') {
      return children(status as TransitionStatus, {
        ...childProps,
        ref: nodeRef,
      });
    }
    const onlyChild = React.Children.only(children) as React.ReactElement<any>;
    return React.cloneElement(onlyChild, {
      ...childProps,
      ref: nodeRef,
    } as any);
  },
);

TransitionCore.displayName = 'BuiTransitionCore';

export default TransitionCore;
