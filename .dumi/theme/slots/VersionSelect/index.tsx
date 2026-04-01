import React, { useEffect, useState, type FC } from 'react';
import './index.less';

const VersionSelect: FC = () => {
  const latestVersion = { label: 'v1.x', publicPath: '/', rootPath: '/' };
  // 本地开发环境只显示latest版本
  const otherVersions =
    process.env.NODE_ENV === 'development'
      ? []
      : [
          { label: 'alpha', publicPath: '/alpha/', rootPath: '/alpha' },
          { label: 'beta', publicPath: '/beta/', rootPath: '/beta' },
        ];
  const versions = [latestVersion, ...otherVersions];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [version, setVersion] = useState<any>({});

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const pathname = location.pathname || latestVersion.rootPath;
    const isLatest =
      (pathname.length === 1 && pathname === latestVersion.rootPath) ||
      (pathname.length > 1 &&
        otherVersions.every((v) => !pathname.startsWith(v.rootPath)));

    const defaultVersion = isLatest
      ? latestVersion
      : otherVersions.find((v) => pathname.startsWith(v.rootPath));

    setVersion(defaultVersion);
  }, []);

  const clickVersionItem = (v) => {
    setVersion(v);
  };

  if (!version?.rootPath) return null;

  return (
    <div className="version-select">
      <span className="version-label">{version.label}</span>
      <div className="version-select-arrow" />
      <div className="versions-container">
        {versions.map((v) => (
          <a
            key={v.label}
            className={`version-item ${v.label === version.label ? 'version-item-active' : ''}`}
            onClick={() => {
              clickVersionItem(v);
            }}
            href={v.publicPath}
          >
            <span className="version-label">{v.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VersionSelect;
