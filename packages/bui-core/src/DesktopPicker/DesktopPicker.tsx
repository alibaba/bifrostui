import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { isMini, throttle } from '@bifrostui/utils';
import getNewDirection, { directionMap } from './getDirectionLocation';
import Fade from '../Fade';
import Slide from '../Slide';
import { DesktopPickerProps } from './DesktopPicker.types';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import './index.less';

const prefixCls = 'bui-desktop-picker';

const DesktopPicker: React.FC<DesktopPickerProps> = (props) => {
  const {
    isOpen,
    containerRef,
    parentRef,
    children,
    defaultDirection = 'bottom',
    backdrop = true,
    onClose,
  } = props;
  const childrenRef = React.useRef<HTMLDivElement>(null);
  const [contentPosition, setContentPosition] = useState<'bottom' | 'top'>(
    'bottom',
  );
  /**
   * 获取内容方向
   */
  const getContentDirection = throttle(() => {
    const newDirection = getNewDirection({
      rootOffset: parentRef?.current?.getBoundingClientRect(),
      arrowDirection: defaultDirection,
      tipOffset: childrenRef?.current?.getBoundingClientRect(),
      containerOffset: containerRef?.current?.getBoundingClientRect(),
    });
    setContentPosition(newDirection?.newArrowDirection);
  }, 100);
  // 监听滚动和resize事件
  useEffect(() => {
    getContentDirection();
    if (containerRef) {
      containerRef?.current?.addEventListener('scroll', getContentDirection);
    } else if (!isMini) {
      window.addEventListener('scroll', getContentDirection);
      window.addEventListener('resize', getContentDirection);
    }
    return () => {
      window?.removeEventListener?.('scroll', getContentDirection);
      window?.removeEventListener?.('resize', getContentDirection);
      containerRef?.current?.removeEventListener('scroll', getContentDirection);
    };
  }, [isOpen, containerRef]);
  return (
    <>
      <Fade
        in={isOpen}
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
          ref={childrenRef}
        >
          <Slide
            in={isOpen}
            direction={directionMap[contentPosition] as any}
            timeout={{
              enter: 150,
              exit: 150,
            }}
          >
            {children}
          </Slide>
        </div>
      </Fade>
      {backdrop &&
        (isMini ? (
          <Backdrop invisible open={isOpen} onClick={() => onClose(false)} />
        ) : (
          <Portal>
            <Backdrop invisible open={isOpen} onClick={() => onClose(false)} />
          </Portal>
        ))}
    </>
  );
};
DesktopPicker.displayName = 'BUIDesktopPicker';

export default DesktopPicker;
