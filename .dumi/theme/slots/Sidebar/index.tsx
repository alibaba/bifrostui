import { NavLink, useLocation, useRouteMeta, useSidebarData } from 'dumi';
import Toc from 'dumi/theme/slots/Toc';
import React, { type FC } from 'react';
import './index.less';

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const meta = useRouteMeta();
  const sidebar = useSidebarData();
  

  if (!sidebar) return null;

  return (
    <div className="dumi-default-sidebar">
      {sidebar.map((item, i) => (
        <dl className="dumi-default-sidebar-group" key={String(i)}>
          {item.title && <dt>{item.title}</dt>}
          {item.children.map((child) => {
            const title = child.title.split(' ');            
            return (
              <dd key={child.link}>
                <NavLink to={child.link} title={child.title} end>
                  {title[0]} <span className='dumi-default-sidebar-group-cn'>{title[1]}</span>
                </NavLink>
              </dd>
            )
          }
          )}
        </dl>
      ))}
    </div>
  );
};

export default Sidebar;
