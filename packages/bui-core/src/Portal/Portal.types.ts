import React from 'react';

export interface PortalCoreProps {
  /**
   * container中渲染的元素
   */
  children?: React.ReactNode;
  /**
   * children内容将会被append到container中
   * 默认是页面的根节点
   */
  container?: Element | (() => Element | null) | null;
  /**
   * 禁止Portal，children将被渲染在父节点中
   * @default false
   */
  disablePortal?: boolean;
  /**
   * 页面根节点
   */
  rootElement?: Element;
  /**
   * 挂载成功的回调方法
   */
  onRootElementMouted?: (e: Element) => void;
}

export type PortalProps = Omit<PortalCoreProps, 'rootElement'>;
