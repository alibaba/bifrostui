import { Link } from 'dumi';
import React, { type FC } from 'react';
import './index.less';

const Logo: FC = () => {
  const lang =
    (window.localStorage && localStorage.getItem('locale')) === 'zh-CN'
      ? 'zh-CN'
      : 'en-US';
  return (
    <Link
      className="dumi-default-logo"
      to={lang === 'zh-CN' ? '/' : '/index-en'}
    >
      <svg
        className="dumi-default-logo-icon"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="bui-logo-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--bui-color-primary, #ff5000)" />
            <stop offset="100%" stopColor="#ff335c" />
          </linearGradient>
        </defs>
        <rect
          x="4"
          y="4"
          width="14"
          height="32"
          rx="7"
          fill="url(#bui-logo-grad)"
        />
        <rect
          x="22"
          y="4"
          width="14"
          height="18"
          rx="7"
          fill="url(#bui-logo-grad)"
          opacity="0.7"
        />
        <rect
          x="22"
          y="26"
          width="14"
          height="10"
          rx="5"
          fill="url(#bui-logo-grad)"
          opacity="0.4"
        />
      </svg>
      <span className="dumi-default-logo-text">BUI</span>
    </Link>
  );
};

export default Logo;
