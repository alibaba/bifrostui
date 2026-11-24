import React, { useEffect, useState, type FC } from 'react';
import {
  getVersions,
  latestVersion,
  otherVersions,
  type VersionItem,
} from './versions';
import './index.less';

const VersionSelect: FC = () => {
  const versions = getVersions();

  const [version, setVersion] = useState<VersionItem>({} as VersionItem);

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

  const clickVersionItem = (v: VersionItem) => {
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
