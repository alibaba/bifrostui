import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import {
  getStylesAndLocation,
  isMini,
  throttle,
  useForkRef,
  useUniqueId,
} from '@bifrostui/utils';
import Fade from '../Fade';
import Slide from '../Slide';
import { DesktopPickerProps } from './DesktopPicker.types';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import './index.less';

function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

const prefixCls = 'bui-desktop-picker';

export const directionMap = {
  top: 'up',
  bottom: 'down',
};

const DesktopPicker = React.forwardRef<HTMLDivElement, DesktopPickerProps>(
  (props, ref) => {
    const {
      classNames,
      open,
      container,
      children,
      defaultDirection = 'bottom',
      content,
      onClose,
    } = props;
    const locatorRef = useRef(null);
    const rootRef = useForkRef(ref, locatorRef);
    const childrenRef = React.useRef<HTMLDivElement>(null);

    const ttId = useUniqueId();
    const dataId = `${prefixCls}-tt-${ttId}`;
    const [contentPosition, setContentPosition] = useState<'bottom' | 'top'>(
      'bottom',
    );
    /**
     * 获取内容方向
     */
    const getContentDirection = throttle(() => {
      const curScrollRoot = getContainer(container);
      const result = getStylesAndLocation({
        scrollRoot: curScrollRoot,
        childrenRef: locatorRef,
        arrowDirection: defaultDirection,
        arrowLocation: 'none',
        selector: `[data-id="${dataId}"]`,
        offsetSpacing: 0,
      });
      if (!result) return;
      const { newArrowDirection } = result;
      setContentPosition(newArrowDirection);
    }, 100);
    // 监听滚动和resize事件
    // eslint-disable-next-line consistent-return
    useEffect(() => {
      if (!isMini && open) {
        getContentDirection();
        const containerDom = getContainer(container);
        if (containerDom) {
          containerDom?.addEventListener('scroll', getContentDirection);
        } else {
          window.addEventListener('scroll', getContentDirection);
          window.addEventListener('resize', getContentDirection);
        }
        return () => {
          window?.removeEventListener?.('scroll', getContentDirection);
          window?.removeEventListener?.('resize', getContentDirection);
          containerDom?.removeEventListener('scroll', getContentDirection);
        };
      }
    }, [open, container]);
    return (
      <div ref={rootRef} className={clsx(prefixCls, classNames)}>
        {children}
        <Fade
          in={open}
          timeout={{
            enter: 150,
            exit: 0,
          }}
        >
          <Slide
            in={open}
            direction={directionMap[contentPosition] as any}
            timeout={{
              enter: 150,
              exit: 150,
            }}
          >
            <div
              className={clsx(
                `${prefixCls}-container`,
                `${prefixCls}-container-${contentPosition}`,
              )}
              data-id={dataId}
              ref={childrenRef}
            >
              {content}
            </div>
          </Slide>
        </Fade>
        {isMini ? (
          <Backdrop invisible open={open} onClick={() => onClose(false)} />
        ) : (
          <Portal>
            <Backdrop invisible open={open} onClick={() => onClose(false)} />
          </Portal>
        )}
      </div>
    );
  },
);
DesktopPicker.displayName = 'BUIDesktopPicker';

export default DesktopPicker;
