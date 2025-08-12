import { ReactComponent as IconSidebar } from '@ant-design/icons-svg/inline-svg/outlined/align-left.svg';
import animateScrollTo from 'animated-scroll-to';
import {
  Helmet,
  useIntl,
  useLocation,
  useOutlet,
  useRouteMeta,
  useSidebarData,
  useSiteData,
  usePrefersColor,
} from 'dumi';
import Content from 'dumi/theme/slots/Content';
import Features from 'dumi/theme/slots/Features';
import Header from 'dumi/theme/slots/Header';
import Hero from 'dumi/theme/slots/Hero';
import Sidebar from 'dumi/theme/slots/Sidebar';
import Toc from 'dumi/theme/slots/Toc';
import React, { useEffect, useState, type FC } from 'react';
import En from '@bifrostui/react/locales/en-US';
import CN from '@bifrostui/react/locales/zh-CN';
import { ThemeProvider } from '@bifrostui/react';
import clsx from 'clsx';
import './index.less';

const DocLayout: FC = () => {
  const intl = useIntl();
  const outlet = useOutlet();
  const sidebar = useSidebarData();
  const { hash, pathname } = useLocation();
  const { loading, hostname, themeConfig } = useSiteData();
  const [activateSidebar, updateActivateSidebar] = useState(false);
  const { frontmatter: fm } = useRouteMeta();
  const [color] = usePrefersColor();
  fm.toc = 'content';

  // const curColor = themeConfig.switch ? 'dark' : 'light';

  const showSidebar = fm.sidebar !== false && sidebar?.length > 0;
  const hideToc = fm.title === 'bifrostui' && fm.filename === 'docs/index.md';

  // handle hash change or visit page hash after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');

    if (id) {
      setTimeout(() => {
        const elm = document.getElementById(decodeURIComponent(id));

        if (elm) {
          // animated-scroll-to instead of native scroll
          animateScrollTo(elm.offsetTop - 80, {
            maxDuration: 300,
          });
        }
      }, 1);
    }
  }, [loading, hash]);

  return (
    <div
      className="dumi-default-doc-layout"
      data-mobile-sidebar-active={activateSidebar || undefined}
      onClick={() => updateActivateSidebar(false)}
    >
      <Helmet>
        <html
          lang={intl.locale.replace(/-.+$/, '')}
          data-color-mode={color}
          data-theme="default"
        />
        {fm.title && <title>{fm.title}</title>}
        {fm.title && <meta property="og:title" content={fm.title} />}
        {fm.description && <meta name="description" content={fm.description} />}
        {fm.description && (
          <meta property="og:description" content={fm.description} />
        )}
        {fm.keywords && (
          <meta name="keywords" content={fm.keywords.join(',')} />
        )}
        {fm.keywords &&
          fm.keywords.map((keyword) => (
            <meta key={keyword} property="article:tag" content={keyword}></meta>
          ))}
        {hostname && <link rel="canonical" href={hostname + pathname} />}
      </Helmet>
      <ThemeProvider locale={intl.locale === 'en-US' ? En : CN}>
        <Header />
        <Hero />
        <Features />
        {showSidebar && (
          <div className="dumi-default-doc-layout-mobile-bar">
            <button
              type="button"
              className="dumi-default-sidebar-btn"
              onClick={(ev) => {
                ev.stopPropagation();
                updateActivateSidebar((v) => !v);
              }}
            >
              <IconSidebar />
              {intl.formatMessage({ id: 'layout.sidebar.btn' })}
            </button>
          </div>
        )}
        <main
          className={clsx('dumi-default-doc-layout-content', {
            'home-page': pathname === '/index-en' || pathname === '/',
          })}
        >
          <div className="left">{showSidebar && <Sidebar />}</div>
          <div className="right">
            <div className="top">
              <div className="main">
                <Content>{outlet}</Content>
              </div>
              {!hideToc && (
                <div className="side">
                  {fm.toc === 'content' && (
                    <div className="dumi-default-doc-layout-toc-wrapper">
                      <Toc />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
};

export default DocLayout;
