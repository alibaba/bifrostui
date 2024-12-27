import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import {
  getStylesAndLocation,
  isMini,
  throttle,
  useForkRef,
  useUniqueId,
  getRootElement,
} from '@bifrostui/utils';
import Fade from '../Fade';
import Slide from '../Slide';
import { DesktopPickerProps } from './DesktopPicker.types';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import './index.less';

// TODO 放到utils库
function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

const prefixCls = 'bui-desktop-picker';

// TODO 需要export?
export const directionMap = {
  top: 'up',
  bottom: 'down',
};

// TODO 下拉框应与锚定元素等宽，参考Select optionStyle
const DesktopPicker = React.forwardRef<HTMLDivElement, DesktopPickerProps>(
  (props, ref) => {
    // TODO others 未透传
    const {
      classNames, // TODO 删除
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
    // TODO 删除eslint注释
    // eslint-disable-next-line consistent-return
    useEffect(() => {
      if (!isMini && open) {
        getContentDirection();
        // TODO 类型
        const containerDom = getRootElement(container || window);
        containerDom.addEventListener('scroll', getContentDirection);
        window.addEventListener('resize', getContentDirection);
        return () => {
          window?.removeEventListener?.('resize', getContentDirection);
          containerDom.removeEventListener('scroll', getContentDirection);
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
              // TODO 等北异重构完，改为ref
              data-id={dataId}
              ref={childrenRef}
            >
              {content}
            </div>
          </Slide>
        </Fade>
        {/* TODO Backdrop和下拉框（container）都需要Portal到根元素，参考Select */}
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
