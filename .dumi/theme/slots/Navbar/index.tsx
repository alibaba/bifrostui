/* eslint-disable @typescript-eslint/no-use-before-define */
import { Link, useLocation, useNavData } from 'dumi';
import NavbarExtra from 'dumi/theme/slots/NavbarExtra';
import React, { useState, type FC } from 'react';
import './index.less';

const NavbarItem: FC<{
  data: ReturnType<typeof useNavData>[0];
  isActive?: boolean;
}> = ({ data, isActive }) => {
  const { pathname } = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(() => {
    return data.children?.some((item) => {
      const activePath = item.activePath || item.link;

      return activePath && pathname.startsWith(activePath);
    });
  });
  const NestedNav = data.children && (
    <ul
      className="dumi-default-navbar-dropdown"
      data-collapsed={isCollapsed || undefined}
    >
      <NavbarContent data={data.children} isDropdown />
    </ul>
  );
  // user custom nav has no activePath, so fallback to link
  const activePath = data.activePath || data.link;
  // When inside a dropdown, use the pre-computed best-match flag to avoid
  // multiple items being active when their paths share a common prefix.
  const active =
    isActive !== undefined
      ? isActive
      : !!(activePath && pathname.startsWith(activePath));
  const extraProps = active ? { className: 'active' } : {};

  const handleMobileToggle = (e: React.MouseEvent) => {
    if (data.children && window.innerWidth <= 800) {
      e.preventDefault();
      e.stopPropagation();
      setIsCollapsed((v) => !v);
    }
  };

  return data.link ? (
    <>
      <Link to={data.link} {...extraProps} onClick={handleMobileToggle}>
        {data.title}
      </Link>
      {NestedNav}
    </>
  ) : (
    <>
      <span
        onClick={(e) => {
          e.stopPropagation();
          setIsCollapsed((v) => !v);
        }}
        {...extraProps}
      >
        {data.title}
      </span>
      {NestedNav}
    </>
  );
};

const NavbarContent: FC<{
  data: ReturnType<typeof useNavData>;
  isDropdown?: boolean;
}> = ({ data, isDropdown = false }) => {
  const { pathname } = useLocation();

  // Within a dropdown, find the single best match (longest activePath prefix)
  // so that only one item is ever marked active at a time.
  const bestMatchPath = isDropdown
    ? data.reduce<string | null>((best, item) => {
        const ap = item.activePath || item.link;
        if (!ap || !pathname.startsWith(ap)) return best;
        if (!best || ap.length > best.length) return ap;
        return best;
      }, null)
    : null;

  return (
    <>
      {data.map((item) => {
        const ap = item.activePath || item.link;
        const isActive = isDropdown ? ap === bestMatchPath : undefined;
        return (
          <li key={item.activePath || item.link || item.title}>
            {item.link && /^(\w+:)\/\/|^(mailto|tel):/.test(item.link) ? (
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            ) : (
              <NavbarItem data={item} isActive={isActive} />
            )}
          </li>
        );
      })}
    </>
  );
};

// ============================= Theme =============================
const Navbar: FC = () => {
  const nav = useNavData();

  return (
    <ul className="dumi-default-navbar">
      <NavbarContent data={nav} />
      <NavbarExtra />
    </ul>
  );
};

export default Navbar;
