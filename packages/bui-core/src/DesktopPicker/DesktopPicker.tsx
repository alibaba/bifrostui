import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { getNewDirectionLocation, isMini, throttle } from '@bifrostui/utils';
import Fade from '../Fade';
import Slide from '../Slide';
import { DesktopPickerProps } from './DesktopPicker.types';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import './index.less';

const prefixCls = 'bui-desktop-picker';

const DesktopPicker: React.FC<DesktopPickerProps> = (props) => {
  const { isOpen, parentRef, children, onClose } = props;
  const childrenRef = React.useRef<HTMLDivElement>(null);

  const [contentPosition, setContentPosition] = useState('bottom');
  /**
   * 获取内容方向
   */
  const getContentDirection = throttle(() => {
    const newDirection = getNewDirectionLocation({
      rootOffset: parentRef?.current?.getBoundingClientRect(),
      arrowDirection: 'bottom',
      tipOffset: childrenRef?.current?.getBoundingClientRect(),
      arrowLocation: null,
    });
    setContentPosition(newDirection.newArrowDirection);
  }, 100);
  // 监听滚动和resize事件
  useEffect(() => {
    if (isMini) {
      return null;
    }
    if (isOpen) {
      window.addEventListener('scroll', getContentDirection);
      window.addEventListener('resize', getContentDirection);
    } else {
      window.removeEventListener('scroll', getContentDirection);
      window.removeEventListener('resize', getContentDirection);
    }
    return () => {
      window.removeEventListener('scroll', getContentDirection);
      window.removeEventListener('resize', getContentDirection);
    };
  }, [isOpen]);
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
            timeout={{
              enter: 150,
              exit: 150,
            }}
          >
            {children}
          </Slide>
        </div>
      </Fade>
      <Portal>
        <Backdrop invisible open={isOpen} onClick={() => onClose(false)} />
      </Portal>
    </>
  );
};
DesktopPicker.displayName = 'BUIDesktopPicker';

export default DesktopPicker;
