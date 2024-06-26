import { useSidebarData, useSiteData } from 'dumi';
import React, { type FC, type ReactNode } from 'react';
import './heti.scss';
import './index.less';

const Content: FC<{ children: ReactNode }> = (props) => {
  const sidebar = useSidebarData();
  const { themeConfig } = useSiteData();
  
  return (
    <div
      className="dumi-default-content"
      data-no-sidebar={!sidebar || undefined}
      data-no-footer={themeConfig.footer === false || undefined}
    >
      {props.children}
    </div>
  );
};

export default Content;
