import clsx from 'clsx';
import React, {
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  getStylesAndLocation,
  isMini,
  getRootContainer,
  useDidMountEffect,
} from '@bifrostui/utils';
import { DesktopPickerProps } from './DesktopPicker.types';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import calcAfterMounted from './utils/calcAfterMounted';
import './index.less';

const prefixCls = 'bui-desktop-picker';

// transform方向映射, 向上向下原点位置会变
const directionMap = {
  bottom: 'top',
  top: 'bottom',
};

const DesktopPicker = React.forwardRef<HTMLDivElement, DesktopPickerProps>(
  (props, ref) => {
    const {
      className,
      open,
      container,
      children,
      defaultDirection = 'bottom',
      inheritWidth = true,
      content,
      miniBackdropInvisible = false,
      onClose,
      onMount,
      onUnmounted,
      containerWidth = 'auto',
      BackdropProps,
      prefix = '',
      ...others
    } = props;
    const contentRef = useRef<HTMLDivElement>(null);
    const nodeRef = useRef<HTMLDivElement>(null);
    const renderChildren = React.cloneElement(children as ReactElement, {
      ref: nodeRef,
      style: {
        flex: 1,
      },
    });
    const [contentPosition, setContentPosition] = useState<'bottom' | 'top'>(
      'bottom',
    );
    const [transform, setTransform] = useState<boolean>(false);

    /**
     * 获取内容方向
     *
     */
    const getContentDirection = async () => {
      const curScrollRoot = getRootContainer(container);
      const result = await getStylesAndLocation({
        scrollRoot: (container && curScrollRoot) as Element,
        childrenRef: nodeRef,
        arrowDirection: defaultDirection,
        arrowLocation: 'none',
        offsetSpacing: 0,
        tipRef: contentRef,
      });
      if (!result) return;
      const { newArrowDirection, styles, childrenStyle }: any = result;
      const element = contentRef.current;
      element.style.transform = styles?.transform;
      element.style.visibility = styles?.visibility;
      element.style.top = styles?.top;
      element.style.left = styles?.left;
      if (inheritWidth) {
        element.style.width = childrenStyle?.width;
      }
      setContentPosition(newArrowDirection);
    };

    // 监听滚动和resize事件
    // eslint-disable-next-line consistent-return
    useEffect(() => {
      if (!isMini && open) {
        const addEventListenerClick = (e) => {
          if (!nodeRef.current?.contains(e.target as Node)) {
            onClose(null, { value: !open });
          }
        };
        getContentDirection();
        const containerDom = getRootContainer(container, window);
        containerDom.addEventListener('scroll', getContentDirection);
        window.addEventListener('resize', getContentDirection);
        window.addEventListener('click', addEventListenerClick);
        return () => {
          containerDom.removeEventListener('scroll', getContentDirection);
          window.removeEventListener('resize', getContentDirection);
          window.removeEventListener('click', addEventListenerClick);
        };
      }
      if (isMini && open) {
        calcAfterMounted(getContentDirection);
      }
    }, [container, open]);

    const renderContent = () => {
      // transform && open共同控制，open控制transform，单个open控制容易导致transform无法执行
      return (
        <div
          className={clsx(
            `${prefixCls}-container`,
            `${prefixCls}-${contentPosition}`,
          )}
          style={{
            width: containerWidth,
          }}
          ref={contentRef}
        >
          <div
            className={`${prefixCls}-container-${transform && open ? 'open' : 'close'} ${prefixCls}-container-content`}
            style={{
              transformOrigin: `${directionMap[contentPosition]} center`,
            }}
            onTransitionEnd={() => {
              if (!open) {
                setTransform(false);
              }
            }}
          >
            {content}
          </div>
        </div>
      );
    };

    // 第一次渲染容器，第二次渲染内容执行动画
    useEffect(() => {
      if (open) {
        // 小程序渲染不稳定
        calcAfterMounted(() => {
          setTransform(true);
        });
      }
    }, [open]);

    // 判断是否渲染容器，等待动画执行结束再卸载
    const renderContainer = useMemo(() => {
      return open || transform;
    }, [open, transform]);

    // 第一次渲染不执行，执行后续动作回调
    useDidMountEffect(() => {
      if (!renderContainer) {
        onUnmounted?.();
      } else {
        onMount?.();
      }
    }, [renderContainer]);

    return (
      <>
        <div ref={ref} className={clsx(prefixCls, className)} {...others}>
          {prefix}
          {renderChildren}
        </div>
        {!isMini && renderContainer && <Portal>{renderContent()}</Portal>}
        {isMini && renderContainer && (
          <Portal>
            {renderContent()}
            {!miniBackdropInvisible && (
              <Backdrop
                {...BackdropProps}
                invisible
                open={open}
                onClick={(e) => onClose(e, { value: !open })}
              />
            )}
          </Portal>
        )}
      </>
    );
  },
);
DesktopPicker.displayName = 'BUIDesktopPicker';

export default DesktopPicker;
