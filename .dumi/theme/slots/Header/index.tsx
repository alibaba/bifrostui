import { ReactComponent as IconClose } from '@ant-design/icons-svg/inline-svg/outlined/close.svg';
import { ReactComponent as IconMenu } from '@ant-design/icons-svg/inline-svg/outlined/menu.svg';
import { useRouteMeta, useSiteData, useLocation } from 'dumi';
import ColorSwitch from 'dumi/theme/slots/ColorSwitch';
import HeaderExtra from 'dumi/theme/slots/HeaderExtra';
import LangSwitch from 'dumi/theme/slots/LangSwitch';
import Logo from 'dumi/theme/slots/Logo';
import VersionSelect from 'dumi/theme/slots/VersionSelect';
import Navbar from 'dumi/theme/slots/Navbar';
import RtlSwitch from 'dumi/theme/slots/RtlSwitch';
import SearchBar from 'dumi/theme/slots/SearchBar';
import ThemeSwitch from 'dumi/theme/slots/ThemeSwitch';
import React, { useState, useEffect, type FC } from 'react';
import './index.less';

const Header: FC = () => {
  const { frontmatter } = useRouteMeta();
  const [showMenu, setShowMenu] = useState(false);
  const { themeConfig } = useSiteData();
  const { pathname } = useLocation();
  const isHomePage =
    pathname === '/' || pathname === '/index-en' || Boolean(frontmatter.hero);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) return undefined;
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHomePage]);

  return (
    <div
      className="dumi-default-header"
      data-static={(isHomePage && !scrolled) || undefined}
      data-mobile-active={showMenu || undefined}
      onClick={() => setShowMenu(false)}
    >
      <div className="dumi-default-header-content">
        <section className="dumi-default-header-left">
          <Logo />
          <VersionSelect />
        </section>
        <section className="dumi-default-header-right">
          <SearchBar />
          <Navbar />
          <div className="dumi-default-header-actions">
            <LangSwitch />
            <ThemeSwitch />
            {themeConfig.prefersColor.switch && <ColorSwitch />}
          </div>
          <RtlSwitch />
          <HeaderExtra />
        </section>
        <button
          type="button"
          className="dumi-default-header-menu-btn"
          onClick={(ev) => {
            ev.stopPropagation();
            setShowMenu((v) => !v);
          }}
        >
          {showMenu ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </div>
  );
};

export default Header;
