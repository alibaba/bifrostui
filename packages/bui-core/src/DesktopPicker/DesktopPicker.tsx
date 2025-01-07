import clsx from 'clsx';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import {
  getStylesAndLocation,
  isMini,
  useForkRef,
  getRootElement,
} from '@bifrostui/utils';
import { DesktopPickerProps } from './DesktopPicker.types';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import './index.less';

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
    const [contentPosition, setContentPosition] = useState<'bottom' | 'top'>(
      'bottom',
    );

    const [layerStyle, setLayerStyle] = useState({});
    /**
     * 获取内容方向
     */
    const getContentDirection = async () => {
      const curScrollRoot = getRootElement(container);
      const result = await getStylesAndLocation({
        scrollRoot: (container && curScrollRoot) as Element,
        childrenRef: nodeRef,
        arrowDirection: defaultDirection,
        arrowLocation: 'none',
        offsetSpacing: 0,
        tipRef: contentRef,
      });
      if (!result) return;
      const { newArrowDirection, styles, childrenStyle } = result;
      setLayerStyle({ ...styles, width: childrenStyle?.width });
      setContentPosition(newArrowDirection);
    };

    // 监听滚动和resize事件
    // eslint-disable-next-line consistent-return
    useEffect(() => {
      if (!isMini && open) {
        getContentDirection();
        const containerDom = getRootElement(container || window);
        containerDom.addEventListener('scroll', getContentDirection);
        window.addEventListener('resize', getContentDirection);
        window?.addEventListener?.('click', (e) => {
          if (!nodeRef.current?.contains(e.target as Node)) {
            onClose(null, { value: !open });
          }
        });
        return () => {
          containerDom.removeEventListener('scroll', getContentDirection);
          window?.removeEventListener?.('resize', getContentDirection);
          window?.removeEventListener?.('click', () => {
            onClose(null, { value: !open });
          });
        };
      }
      if (isMini && open) {
        getContentDirection();
      }
    }, [container, open]);

    const renderContent = () => {
      return (
        <div
          className={clsx(
            `${prefixCls}-container`,
            `${prefixCls}-container-${contentPosition}`,
          )}
          style={{
            ...layerStyle,
            display: open ? 'block' : 'none',
          }}
          ref={contentRef}
        >
          {content}
        </div>
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
