import React, { useEffect, useState, type FC } from 'react';
import './index.less';

const VersionSelect: FC = () => {
  const latestVersion = { label: 'v1.x', publicPath: '/', rootPath: '/' };
  // 本地开发环境只显示latest版本
  const otherVersions =
    process.env.NODE_ENV === 'development'
      ? []
      : [{ label: 'beta', publicPath: '/beta/', rootPath: '/beta' }];
  const versions = [latestVersion, ...otherVersions];

  const [version, setVersion] = useState<any>({});

  useEffect(() => {
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
    <div className="version-select" onClick={() => {}}>
      {version.label}
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
            {v.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default VersionSelect;
