import React, { useState, useEffect, type FC } from 'react';
import './index.less';

const THEME_STORAGE_KEY = 'bui-site-theme';

const THEMES = [
  { value: 'pioneer', color: '#ff5000', label: '活力橙' },
  { value: 'default', color: '#ff335c', label: '经典' },
];

const ThemeSwitch: FC = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem(THEME_STORAGE_KEY) ||
        document.querySelector('html')?.getAttribute('data-theme') ||
        'pioneer'
      );
    }
    return 'pioneer';
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = () => setOpen(false);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleSwitch = (theme: string) => {
    setCurrentTheme(theme);
    setOpen(false);
    document.querySelector('html')?.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  };

  const current = THEMES.find((t) => t.value === currentTheme) || THEMES[0];

  return (
    <div
      className="dumi-default-theme-switch"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="theme-switch-trigger"
        onClick={() => setOpen(!open)}
        type="button"
        data-tooltip="切换主题"
      >
        <span className="theme-dot" style={{ background: current.color }} />
        <span
          className="theme-switch-ring ring-1"
          style={{ borderColor: current.color }}
        />
        <span
          className="theme-switch-ring ring-2"
          style={{ borderColor: current.color }}
        />
      </button>
      {open && (
        <div className="theme-switch-dropdown">
          {THEMES.map((t) => (
            <button
              key={t.value}
              className={`theme-switch-option ${t.value === currentTheme ? 'active' : ''}`}
              onClick={() => handleSwitch(t.value)}
              type="button"
            >
              <span className="theme-dot" style={{ background: t.color }} />
              <span className="theme-switch-option-label">{t.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
