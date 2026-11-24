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
  const { hash, pathname, search } = useLocation();
  const { loading, hostname } = useSiteData();
  const [activateSidebar, setActivateSidebar] = useState(false);
  const { frontmatter: fm } = useRouteMeta();
  const [color] = usePrefersColor();
  fm.toc = 'content';

  useEffect(() => {
    const saved = localStorage.getItem('bui-site-theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'pioneer');
    }
  }, []);

  const isEmbed = new URLSearchParams(search).get('embed') === '1';
  const isHomePage =
    pathname === '/' || pathname === '/index-en' || pathname === '/index-en/';
  const showSidebar =
    !isHomePage && fm.sidebar !== false && sidebar?.length > 0;
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

  if (isEmbed) {
    return (
      <div className="dumi-default-doc-layout dumi-embed-mode">
        <Helmet>
          <html
            lang={intl.locale.replace(/-.+$/, '')}
            data-color-mode={color}
            data-embed="1"
          />
        </Helmet>
        <ThemeProvider locale={intl.locale === 'en-US' ? En : CN}>
          <main className="dumi-default-doc-layout-content">
            <div className="right">
              <div className="top">
                <div className="main">
                  <Content>{outlet}</Content>
                </div>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </div>
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      className="dumi-default-doc-layout"
      data-mobile-sidebar-active={activateSidebar || undefined}
      onClick={() => setActivateSidebar(false)}
    >
      <Helmet>
        <html lang={intl.locale.replace(/-.+$/, '')} data-color-mode={color} />
        {fm.title && <title>{fm.title}</title>}
        {fm.title && <meta property="og:title" content={fm.title} />}
        {fm.description && <meta name="description" content={fm.description} />}
        {fm.description && (
          <meta property="og:description" content={fm.description} />
        )}
        {fm.keywords && (
          <meta name="keywords" content={fm.keywords.join(',')} />
        )}
        {fm.keywords?.map((keyword) => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}
        {hostname && <link rel="canonical" href={hostname + pathname} />}
      </Helmet>
      <ThemeProvider locale={intl.locale === 'en-US' ? En : CN}>
        {isHomePage && (
          <div className="bui-home-hero-bg">
            <div className="bui-home-hero-gradient" />
            <div className="bui-home-hero-grid" />
            <div className="bui-home-hero-glow" />
          </div>
        )}
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
                setActivateSidebar((v) => !v);
              }}
            >
              <IconSidebar />
              {intl.formatMessage({ id: 'layout.sidebar.btn' })}
            </button>
          </div>
        )}
        <main
          className={clsx('dumi-default-doc-layout-content', {
            'home-page': isHomePage,
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
