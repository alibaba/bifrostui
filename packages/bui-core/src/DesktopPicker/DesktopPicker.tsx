import clsx from 'clsx';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import {
  getStylesAndLocation,
  isMini,
  throttle,
  useForkRef,
  useUniqueId,
  getRootElement,
} from '@bifrostui/utils';
import Fade from '../Fade';
import { DesktopPickerProps } from './DesktopPicker.types';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import './index.less';
import Slide from '../Slide';

const prefixCls = 'bui-desktop-picker';

const DesktopPicker = React.forwardRef<HTMLDivElement, DesktopPickerProps>(
  (props, ref) => {
    const {
      className,
      open,
      container,
      children,
      defaultDirection = 'bottom',
      content,
      onClose,
      ...others
    } = props;
    const locatorRef = useRef<HTMLDivElement>(null);
    const rootRef = useForkRef(ref, locatorRef);
    const contentRef = useRef<HTMLDivElement>(null);
    const nodeRef = useRef<HTMLDivElement>(null);
    const renderChildren = React.cloneElement(children as ReactElement, {
      ref: nodeRef,
    });
    const ttId = useUniqueId();
    const dataId = `${prefixCls}-tt-${ttId}`;
    const [contentPosition, setContentPosition] = useState<'bottom' | 'top'>(
      'bottom',
    );

    const [layerStyle, setLayerStyle] = useState({});
    /**
     * 获取内容方向
     */
    const getContentDirection = throttle(() => {
      const curScrollRoot = getRootElement(container);
      const result = getStylesAndLocation({
        scrollRoot: curScrollRoot as Element,
        childrenRef: nodeRef,
        arrowDirection: defaultDirection,
        arrowLocation: 'none',
        selector: `[data-id="${dataId}"]`,
        offsetSpacing: 0,
      });
      if (!result) return;

      const { newArrowDirection, styles, childrenStyle } = result;
      setLayerStyle({ ...styles, width: childrenStyle.width });
      setContentPosition(newArrowDirection);
    }, 100);

    // 监听滚动和resize事件
    // eslint-disable-next-line consistent-return
    useEffect(() => {
      if (!isMini && open) {
        getContentDirection();
        const containerDom = getRootElement(container || window);
        containerDom.addEventListener('scroll', getContentDirection);
        window.addEventListener('resize', getContentDirection);
        return () => {
          window?.removeEventListener?.('resize', getContentDirection);
          containerDom.removeEventListener('scroll', getContentDirection);
        };
      }
    }, [container, open]);

    const renderContent = () => {
      return (
        <Fade
          in={open}
          timeout={{
            enter: 150,
            exit: 0,
          }}
        >
          <Slide
            in={open}
            direction={contentPosition === 'bottom' ? 'down' : 'up'}
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
              style={{
                ...layerStyle,
                display: open ? 'block' : 'none',
              }}
              // TODO 等北异重构完，改为ref
              data-id={dataId}
              ref={contentRef}
            >
              {content}
            </div>
          </Slide>
        </Fade>
      );
    };
    return (
      <>
        <div ref={rootRef} className={clsx(prefixCls, className)} {...others}>
          {renderChildren}
          {isMini && renderContent()}
        </div>
        {isMini && (
          <Backdrop
            invisible
            open={open}
            onClick={(e) => onClose(e, { value: false })}
          />
        )}
        {!isMini && <Portal>{renderContent()}</Portal>}
      </>
    );
  },
);
DesktopPicker.displayName = 'BUIDesktopPicker';

export default DesktopPicker;
