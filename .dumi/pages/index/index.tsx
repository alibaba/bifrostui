import * as React from 'react';
import { Button } from '@bifrostui/react';
import { usePrefersColor, useNavigate, useIntl, history } from 'dumi';
import { motion } from 'motion/react';
import Tpp from './user-icon/tpp';
import Dm from './user-icon/dm';
import ButtonDemo from '../../../docs/components/theme-designer/canvas-demos/ButtonDemo';
import TabsDemo from '../../../docs/components/theme-designer/canvas-demos/TabsDemo';
import SwitchDemo from '../../../docs/components/theme-designer/canvas-demos/SwitchDemo';
import BadgeDemo from '../../../docs/components/theme-designer/canvas-demos/BadgeDemo';
import TagDemo from '../../../docs/components/theme-designer/canvas-demos/TagDemo';
import ProgressDemo from '../../../docs/components/theme-designer/canvas-demos/ProgressDemo';
import InputDemo from '../../../docs/components/theme-designer/canvas-demos/InputDemo';
import CheckboxDemo from '../../../docs/components/theme-designer/canvas-demos/CheckboxDemo';
import logoMiaoya from './logos/miaoya.png';
import logoMaizuo from './logos/maizuo.png';
import logoKuaidapiao from './logos/kuaidapiao.png';
import logoAliyu from './logos/aliyu.png';
import './index.less';
import locales from './locales';

const CAROUSEL_ITEMS = [
  { name: 'Button', path: '/cores/button', Demo: ButtonDemo },
  { name: 'Tabs', path: '/cores/tabs', Demo: TabsDemo },
  { name: 'Switch', path: '/cores/switch', Demo: SwitchDemo },
  { name: 'Badge', path: '/cores/badge', Demo: BadgeDemo },
  { name: 'Tag', path: '/cores/tag', Demo: TagDemo },
  { name: 'Progress', path: '/cores/progress', Demo: ProgressDemo },
  { name: 'Input', path: '/cores/input', Demo: InputDemo },
  { name: 'Checkbox', path: '/cores/checkbox', Demo: CheckboxDemo },
];

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: false },
};

const scaleReveal = {
  initial: { opacity: 0, scale: 0.92, y: 40 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: false, margin: '-100px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const slideFromLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const slideFromRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const blurFadeIn = {
  initial: { opacity: 0, filter: 'blur(10px)', y: 20 },
  whileInView: { opacity: 1, filter: 'blur(0px)', y: 0 },
  viewport: { once: false, margin: '-60px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const HomePage = () => {
  const [color] = usePrefersColor();
  const { locale } = useIntl();
  const current = locale === 'zh-CN' ? 'zhCN' : 'enUS';
  const navigate = useNavigate();
  const basePath = (history as any).basename || '/';
  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('bui-site-theme') || 'pioneer';
    }
    return 'pioneer';
  });

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      const t =
        document.documentElement.getAttribute('data-theme') || 'pioneer';
      setTheme(t);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bui-home">
      {/* Hero Section */}
      <section className="bui-home-hero">
        <div className="bui-home-hero-content">
          <motion.div
            className="bui-home-hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <h1 className="bui-home-hero-title">
              <span className="bui-home-hero-title-brand">BUI</span>
              <br />
              {locales[current].description}
            </h1>
            <p className="bui-home-hero-subtitle">
              {locales[current].subtitle}
            </p>
            <div className="bui-home-hero-actions">
              <Button
                size="large"
                variant="contained"
                color="primary"
                className="bui-home-hero-btn-primary"
                onClick={() => navigate('/guide/introduce')}
              >
                {locales[current].start}
              </Button>
              <Button
                size="large"
                variant="outlined"
                color="primary"
                className="bui-home-hero-btn-secondary"
                onClick={() => navigate('/cores/button')}
              >
                {locales[current].viewComponents}
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="bui-home-hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <div className="bui-home-hero-card">
              <div className="bui-home-hero-card-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="card-title">App.tsx</span>
              </div>
              <div className="bui-home-hero-card-body">
                <div className="code-line">
                  <span className="token-keyword">import</span>
                  {' { Button } '}
                  <span className="token-keyword">from</span>
                  <span className="token-string">{" '@bifrostui/react'"}</span>
                </div>
                <div className="code-line" />
                <div className="code-line">
                  <span className="token-keyword">export default</span>
                  {' () => ('}
                </div>
                <div className="code-line">
                  {'  <'}
                  <span className="token-tag">Button</span>
                  {' color="primary" size="large">'}
                </div>
                <div className="code-line">{'    Hello BifrostUI'}</div>
                <div className="code-line">
                  {'  </'}
                  <span className="token-tag">Button</span>
                  {'>'}
                </div>
                <div className="code-line">)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bui-home-highlights">
        <motion.div className="bui-home-highlights-grid" {...staggerContainer}>
          {locales[current].highlights.map((item, i) => (
            <motion.div
              className="bui-home-highlight-card"
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: -2,
                transition: {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1] as const,
                },
              }}
            >
              <div
                className="bui-home-highlight-glow"
                style={{ background: item.color }}
              />
              <div className="bui-home-highlight-header">
                <div
                  className="bui-home-highlight-icon"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}18, ${item.color}08)`,
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="bui-home-highlight-badge"
                  style={{ color: item.color, borderColor: `${item.color}30` }}
                >
                  {item.extra}
                </span>
              </div>
              <div
                className="bui-home-highlight-value"
                style={{ color: item.color }}
              >
                {item.value}
              </div>
              <h3 className="bui-home-highlight-title">{item.title}</h3>
              <p className="bui-home-highlight-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Theme Designer Section */}
      <motion.section className="bui-home-theme-designer" {...slideFromLeft}>
        <motion.h2 className="bui-home-section-title" {...blurFadeIn}>
          {current === 'zhCN'
            ? '定制主题，随心所欲'
            : 'Customize Themes Freely'}
        </motion.h2>
        <motion.p
          className="bui-home-section-desc"
          {...blurFadeIn}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          {current === 'zhCN'
            ? '内置可视化主题定制器，实时预览效果，一键生成主题配置，轻松打造品牌专属风格'
            : 'Built-in visual theme designer with real-time preview, one-click config generation'}
        </motion.p>
        <motion.div
          className="bui-home-theme-designer-preview"
          {...scaleReveal}
        >
          <iframe
            key={`${color}-${theme}`}
            src={`${basePath}guide/theme-designer?embed=1`}
            title="Theme Designer"
            className="bui-home-theme-designer-iframe"
          />
          <div className="bui-home-theme-designer-overlay">
            <div className="bui-home-theme-designer-ripple" />
            <Button
              size="large"
              variant="contained"
              color="primary"
              className="bui-home-resource-btn"
              onClick={() => navigate('/guide/theme-designer')}
            >
              {current === 'zhCN' ? '体验主题定制' : 'Try Theme Designer'}
            </Button>
          </div>
        </motion.div>
      </motion.section>

      {/* Component Carousel Section */}
      <motion.section
        className="bui-home-component-carousel"
        {...slideFromRight}
      >
        <motion.h2 className="bui-home-section-title" {...blurFadeIn}>
          {current === 'zhCN' ? '组件丰富，选用自如' : 'Rich Components'}
        </motion.h2>
        <motion.p
          className="bui-home-section-desc"
          {...blurFadeIn}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          {current === 'zhCN'
            ? '58+ 精心打磨的跨端组件，覆盖表单、展示、反馈、导航等常见场景'
            : '58+ polished cross-platform components covering forms, display, feedback & navigation'}
        </motion.p>
        <div className="bui-home-carousel-track">
          <div className="bui-home-carousel-inner">
            {[...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS].map((comp, i) => (
              <div
                key={`${comp.name}-${i}`}
                className="bui-home-carousel-card"
                onClick={() => navigate(comp.path)}
              >
                <div className="bui-home-carousel-card-name">{comp.name}</div>
                <div className="bui-home-carousel-card-demo">
                  <comp.Demo />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Users Section */}
      <motion.section className="bui-home-users" {...blurFadeIn}>
        <motion.h2
          className="bui-home-users-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {locales[current].usersTitle}
        </motion.h2>
        <div className="bui-home-users-list">
          <Tpp color={color === 'light' ? '#bbb' : '#5F6672'} />
          <Dm color={color === 'light' ? '#bbb' : '#5F6672'} />
          <img src={logoMiaoya} alt="妙鸭" className="bui-home-users-logo" />
          <img src={logoMaizuo} alt="麦座" className="bui-home-users-logo" />
          <img
            src={logoKuaidapiao}
            alt="快达票"
            className="bui-home-users-logo"
          />
          <img src={logoAliyu} alt="阿里鱼" className="bui-home-users-logo" />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bui-home-footer">
        <div className="bui-home-footer-content">
          Open-source MIT Licensed | Copyright © 2023-present Powered by BUI
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
