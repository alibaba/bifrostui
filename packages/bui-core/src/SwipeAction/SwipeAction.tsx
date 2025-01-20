import React, {
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  useMemo,
} from 'react';
import clsx from 'clsx';
import Taro from '@tarojs/taro';
import {
  useTouch,
  touchEmulator,
  isMini,
  getBoundingClientRect,
} from '@bifrostui/utils';
import BuiSwipeActionContext from './SwipeActionContext';
import { SwipeActionProps, SwipeActionRef } from './SwipeAction.types';
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
      // TODO 未定义
      closeOnAction = true,
      closeOnTouchContainer = false,
      onActionsReveal = () => {},
      ...others
    } = props;
    const touch = useTouch();
    // TODO 删除
    const componentId = useRef(Math.random().toString(36).substr(2, 9));
    const rootRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const contentRef = useRef(null);
    const [translateX, setTranslateX] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [onActionsRevealRes, setOnActionsRevealRes] = useState('');
    let startingX = 0;
    let currentX = 0;
    let timer;
    // 标记是否正在拖动
    let isDragging = false;

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      // 判断e.target的id是否是content-mask
      const isMaskEle = e.target.id === 'content-mask';
      if (isDragging || disabled || isMaskEle) return;
      touch.start(e);
      isDragging = true;
      startingX = touch.deltaX.current - translateX;
    };

    const handleTouchMove = async (e: React.TouchEvent<HTMLDivElement>) => {
      if (!isDragging || disabled) return;
      touch.move(e);
      currentX = touch.deltaX.current - startingX;
      const leftWidth = await getWidth(leftRef);
      const rightWidth = await getWidth(rightRef);
      // 限制最多拖动到各自方向的宽度
      currentX = Math.max(-rightWidth, Math.min(leftWidth, currentX));
      setTranslateX(currentX);
    };

    const handleTouchEnd = (e?: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging) return;
      console.log('handleTouchEnd', e);
      isDragging = false;
      endDrag();
    };

    const endDrag = async () => {
      const leftWidth = await getWidth(leftRef);
      const rightWidth = await getWidth(rightRef);
      const threshold = 0.5; // 超过50%宽度即认为是打开状态
      let targetX = 0;
      if (currentX > leftWidth * threshold) {
        targetX = leftWidth;
      } else if (currentX < -rightWidth * threshold) {
        targetX = -rightWidth;
      }
      // TODO check 小程序是否可用
      requestAnimationFrame(() => {
        setTranslateX(targetX);
      });
      // targetX > 5 才认为是有效拖动
      if (Math.abs(targetX) < 5) return;
      // TODO 'left' ， 'right' 抽成枚举
      setOnActionsRevealRes(targetX > 0 ? 'left' : 'right');
      // TODO 有动效？需要setTimeout？
      timer = setTimeout(() => {
        touch.reset();
      }, 100);
    };

    const close = () => {
      setTranslateX(0);
      isDragging = false;
    };

    useEffect(() => {
      if (!contentRef.current) return;
      const removeTouchEmulator = touchEmulator(contentRef.current);
      return () => {
        removeTouchEmulator();
      };
    }, [contentRef.current]);

    useEffect(() => {
      // 拖动结束 通过判断translateX的值是否为0来判断是否打开
      if (!isDragging) {
        // TODO isOpen与translateX完全等效
        setIsOpen(translateX !== 0);
      } else {
        setIsOpen(false);
      }
      // TODO isDragging 非状态，监听不生效
    }, [translateX, isDragging]);

    useEffect(() => {
      // 拖动结束 通过判断translateX的值是否为0来判断是否打开
      // TODO setTimeout delete
      setTimeout(() => {
        // TODO onActionsRevealRes是冗余状态，可以使用 translateX 替代
        if (isOpen) {
          onActionsReveal?.(onActionsRevealRes);
        }
      }, 300);
    }, [isOpen, onActionsRevealRes]);

    useEffect(() => {
      contentRef?.current?.addEventListener('touchstart', handleTouchStart);
      contentRef?.current?.addEventListener('touchmove', handleTouchMove);
      contentRef?.current?.addEventListener('touchend', handleTouchEnd);
      contentRef?.current?.addEventListener('touchcancel', handleTouchEnd);
      if (!isMini && document) {
        // 监听鼠标抬起事件
        // TODO 类型错误 handleTouchEnd
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
        clearTimeout(timer);
      };
    }, []);

    useImperativeHandle(ref, () => ({
      show: async (side = 'right') => {
        if (side === 'right') {
          setTranslateX(-(await getWidth(rightRef)));
        } else {
          setTranslateX(await getWidth(leftRef));
        }
      },
      close,
      // 获取当前是否打开
      open: isOpen,
      ref: rootRef,
    }));

    const getWidth = (ref: React.RefObject<HTMLDivElement>) => {
      // TODO return 类型不一致
      if (!ref.current) return 0;
      return new Promise(async (resolve) => {
        if (isMini) {
          // TODO 调用utils中的 getBoundingClientRect
          const query = Taro.createSelectorQuery();
          query
            .select(`#${ref.current.id}`)
            .boundingClientRect()
            .exec((rect) => {
              if (rect[0]) {
                // TODO ts 报错 类型“{}”上不存在属性“width” & 保护
                const refSizeRes = rect[0];
                resolve(refSizeRes.width);
              }
            });
        } else {
          resolve(ref.current.offsetWidth);
        }
      });
    };

    const outClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (translateX !== 0 && closeOnTouchContainer) {
        close();
      }
    };

    const SwipeActionContext = useMemo(
      () => ({ closeOnAction, close }),
      [closeOnAction],
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
              transition: 'transform 0.3s ease',
            }}
          >
            <div
              className={`${classPrefix}-actions ${classPrefix}-actions-left`}
              ref={leftRef}
              // TODO 作用是什么，删除?
              id={`leftRefId-${componentId.current}`}
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
              // onClick={(e) => {
              //   if (isOpen && closeOnTouchContainer) {
              //     outClickHandle(e);
              //   }
              // }}
            >
              {/* TODO 多余的dom，删除，事件绑定到`${classPrefix}-content-container` */}
              {isOpen && closeOnTouchContainer ? (
                <div
                  className={`${classPrefix}-content-mask`}
                  id="content-mask"
                  onClick={outClickHandle}
                ></div>
              ) : null}

              {/* TODO 多余的DOM 删除 */}
              <div
                className={`${classPrefix}-content`}
                style={{ pointerEvents: translateX !== 0 ? 'none' : 'auto' }}
              >
                {children}
              </div>
            </div>
            <div
              className={`${classPrefix}-actions ${classPrefix}-actions-right`}
              ref={rightRef}
              id={`rightRefId-${componentId.current}`}
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
