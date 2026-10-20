import Taro from '@tarojs/taro';
import React, { forwardRef, useLayoutEffect, useState, useMemo } from 'react';
import { PortalProps } from './Portal.types';
import PortalCore from './PortalCore';

export const Portal = forwardRef<HTMLElement, PortalProps>((props, ref) => {
  const { disablePortal } = props;
  const [rootWrapperElement, setRootWrapperElement] = useState<HTMLElement>();

  const initialPageInfo = useMemo(() => {
    const currentPages = Taro.getCurrentPages() || [];
    const currentPage = currentPages[currentPages.length - 1];
    return {
      path: currentPage?.$taroPath,
    };
  }, []);

  useLayoutEffect(() => {
    let root;
    if (!disablePortal && initialPageInfo.path) {
      const { path } = initialPageInfo;
      const rootElement = document.getElementById(path) as HTMLElement;
      // Taro的document.getElementById 能获取到小程序页面堆栈里的所有元素，所以portalId需要加上页面标识区分
      const elementWithSid = rootElement as HTMLElement & { sid?: string };
      const portalId = elementWithSid?.sid
        ? `${elementWithSid.sid}_portalId`
        : `${path}_portalId`;
      const portalWrapperElement = document.getElementById(portalId);
      // Taro删除楼层时候会影响兄弟元素render，放在Portal插入的元素删除时候影响页面的render，Portal经常会用在弹窗、浮层等场景，弹窗关闭，会导致页面重新render可能会导致表现回到初始态，在根节点插入一个view再插入Portal子元素  https://docs.taro.zone/docs/optimized#1-%E5%88%A0%E9%99%A4%E6%A5%BC%E5%B1%82%E8%8A%82%E7%82%B9%E8%A6%81%E8%B0%A8%E6%85%8E%E5%A4%84%E7%90%86
      if (!portalWrapperElement) {
        const view = document.createElement('view');
        view.id = portalId;
        rootElement?.appendChild(view);
        root = view;
      } else {
        root = portalWrapperElement;
      }
    }
    setRootWrapperElement(root);
  }, [disablePortal, initialPageInfo.path]);

  return <PortalCore {...props} ref={ref} rootElement={rootWrapperElement} />;
});

Portal.displayName = 'BuiPortal';
export default Portal;
