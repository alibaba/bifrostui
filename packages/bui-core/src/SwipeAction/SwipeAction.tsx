import React, {
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  useMemo,
} from 'react';
import clsx from 'clsx';
import {
  useTouch,
  touchEmulator,
  isMini,
  getBoundingClientRect,
  throttle,
} from '@bifrostui/utils';
import BuiSwipeActionContext from './SwipeActionContext';
import {
  SwipeActionProps,
  SwipeActionRef,
  SideTypeEnum,
  DragPhaseEnum,
} from './SwipeAction.types';
import './SwipeAction.less';

const classPrefix = 'bui-swipe-action';

const SwipeAction = React.forwardRef<SwipeActionRef, SwipeActionProps>(
  (props, ref) => {
    const {
      className,
      children,
      rightActions,
      leftActions,
      disabled,
      closeOnClickActionItem = true,
      closeOnClickContainer = false,
      onActionsReveal = () => {},
      ...others
    } = props;
    const touch = useTouch();
    const rootRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const contentRef = useRef(null);
    const [translateX, setTranslateX] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const startingX = useRef(0);
    const currentX = useRef(0);
    // 标记是否正在拖动
    const isDragging = useRef(false);
    // 上一次移动定格状态时的translateX
    let pretranslateX = 0;
    // 拖动阶段标记
    let dragPhase = DragPhaseEnum.START;
    // 有效拖动的阈值
    const dragThreshold = 5;
    const leftWidthCache = useRef(0);
    const rightWidthCache = useRef(0);

    const getWidth = (
      ref: React.RefObject<HTMLDivElement>,
    ): Promise<number> => {
      if (!ref.current) return Promise.resolve(0);
      return new Promise((resolve) => {
        if (isMini) {
          getBoundingClientRect(ref.current).then((rect) => {
            if (rect) {
              resolve(rect.width || 0);
            }
          });
        } else {
          resolve(ref.current.offsetWidth);
        }
      });
    };

    const getLefRefWidth = async () => {
      if (leftRef.current && leftActions && !leftWidthCache.current) {
        leftWidthCache.current = await getWidth(leftRef);
      }
      return leftWidthCache.current;
    };
    const getRightRefWidth = async () => {
      if (rightRef.current && rightActions && !rightWidthCache.current) {
        rightWidthCache.current = await getWidth(rightRef);
      }
      return rightWidthCache.current;
    };

    const initRefWidth = () => {
      getLefRefWidth();
      getRightRefWidth();
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      // console.log('handleTouchStart', isOpen, closeOnClickContainer);
      dragPhase = DragPhaseEnum.START;
      // 判断e.target的id是否是content-mask
      const isMaskEle = (e.target as HTMLElement).id === 'content-mask';
      if (isDragging.current || disabled || isMaskEle) return;
      touch.start(e);
      isDragging.current = true;
      startingX.current = touch.deltaX.current - translateX;
    };

    const handleTouchMove = throttle(
      async (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging.current || disabled) return;
        if (dragPhase === DragPhaseEnum.START) {
          dragPhase = DragPhaseEnum.MOVE;
        }
        touch.move(e);
        currentX.current = touch.deltaX.current - startingX.current;
        if (Math.abs(currentX.current) < dragThreshold) return;
        const leftWidth = await getLefRefWidth();
        const rightWidth = await getRightRefWidth();
        // 限制最多拖动到各自方向的宽度
        currentX.current = Math.max(
          -rightWidth,
          Math.min(leftWidth, currentX.current),
        );
        setTranslateX(currentX.current);
      },
      100,
    );

    const emitActionsReveal = (targetX: number, stop: boolean = false) => {
      const isSpecial = targetX === pretranslateX && targetX !== 0;
      // 如果当前不需要触发任何操作，直接返回
      if ((targetX === pretranslateX && !isSpecial) || stop) return;
      let resStr: SideTypeEnum | null = null;
      const shouldOpen =
        (targetX > 0 && pretranslateX <= 0) ||
        (targetX < 0 && pretranslateX >= 0) ||
        isSpecial;
      // 判断左右侧并设置 `isOpen` 状态
      if (shouldOpen) {
        if (targetX > 0) {
          resStr = SideTypeEnum.LEFT;
        } else if (targetX < 0) {
          resStr = SideTypeEnum.RIGHT;
        }
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
      // 如果结果字符串为空，并且 targetX 为 0 且 pretranslateX 不为 0 时，保持 resStr 为 null 以不触发 onActionsReveal
      if (resStr) {
        onActionsReveal?.({ side: resStr });
      }
    };

    const handleTouchEnd = async (
      e?: React.MouseEvent | React.TouchEvent | MouseEvent,
    ) => {
      if (!isDragging.current) return;
      if (dragPhase === DragPhaseEnum.MOVE) {
        dragPhase = DragPhaseEnum.END;
      }
      const leftWidth = await getLefRefWidth();
      const rightWidth = await getRightRefWidth();
      const threshold = 0.5; // 超过50%宽度即认为是打开状态
      let targetX = 0;
      isDragging.current = false;
      if (Math.abs(currentX.current) < dragThreshold) return;
      if (currentX.current > leftWidth * threshold) {
        targetX = leftWidth;
      } else if (currentX.current < -rightWidth * threshold) {
        targetX = -rightWidth;
      }
      // 小程序端拖动阶段和浏览器有差异所以这里要|| isMini
      if (dragPhase === DragPhaseEnum.END || isMini) {
        emitActionsReveal(targetX);
        console.log('handleTouchEnd：', targetX, e);
        setTranslateX(targetX);
        pretranslateX = targetX;
      }
      currentX.current = 0;
    };

    const close = () => {
      setTranslateX(0);
      pretranslateX = 0;
      setIsOpen(false);
    };

    useEffect(() => {
      initRefWidth();
      if (!contentRef.current) return;
      const removeTouchEmulator = touchEmulator(contentRef.current);
      return () => {
        removeTouchEmulator();
      };
    }, []);

    useEffect(() => {
      contentRef?.current?.addEventListener('touchstart', handleTouchStart);
      contentRef?.current?.addEventListener('touchmove', handleTouchMove);
      contentRef?.current?.addEventListener('touchend', handleTouchEnd);
      contentRef?.current?.addEventListener('touchcancel', handleTouchEnd);
      if (!isMini && document) {
        // 监听鼠标抬起事件
        document.addEventListener('mouseup', handleTouchEnd);
      }
      return () => {
        contentRef?.current?.removeEventListener(
          'touchstart',
          handleTouchStart,
        );
        contentRef?.current?.removeEventListener('touchmove', handleTouchMove);
        contentRef?.current?.removeEventListener('touchend', handleTouchEnd);
        contentRef?.current?.removeEventListener('touchcancel', handleTouchEnd);
        if (!isMini && document) {
          document.removeEventListener('mouseup', handleTouchEnd);
        }
      };
    }, []);

    useImperativeHandle(ref, () => ({
      show: async (params) => {
        let targetX = 0;
        if (params && params.side === SideTypeEnum.RIGHT) {
          targetX = -(await getRightRefWidth());
        } else {
          targetX = await getLefRefWidth();
        }
        setTranslateX(targetX);
        pretranslateX = targetX;
        emitActionsReveal(targetX);
      },
      close,
      // 获取当前是否打开
      open: isOpen,
      ref: rootRef.current,
    }));

    const outClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (translateX !== 0 && closeOnClickContainer) {
        close();
      }
    };

    const SwipeActionContext = useMemo(
      () => ({ closeOnClickActionItem, close }),
      [closeOnClickActionItem],
    );

    return (
      <BuiSwipeActionContext.Provider value={SwipeActionContext}>
        <div
          className={clsx(`${classPrefix}`, className)}
          ref={rootRef}
          {...others}
        >
          <div
            className={`${classPrefix}-track`}
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
            }}
          >
            <div
              className={`${classPrefix}-actions ${classPrefix}-actions-left`}
              ref={leftRef}
            >
              {leftActions}
            </div>
            <div
              className={`${classPrefix}-content-container`}
              ref={contentRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
            >
              {isOpen && closeOnClickContainer && (
                <div
                  className={`${classPrefix}-content-mask`}
                  id="content-mask"
                  onClick={outClickHandle}
                />
              )}
              {children}
            </div>
            <div
              className={`${classPrefix}-actions ${classPrefix}-actions-right`}
              ref={rightRef}
            >
              {rightActions}
            </div>
          </div>
        </div>
      </BuiSwipeActionContext.Provider>
    );
  },
);

SwipeAction.displayName = 'BuiSwipeAction';

export default SwipeAction;
