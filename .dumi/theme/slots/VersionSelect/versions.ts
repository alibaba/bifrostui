export interface VersionItem {
  /** 版本展示名称 */
  label: string;
  /** 部署根路径（带尾斜杠），可直接用于跳转或拼接资源前缀 */
  publicPath: string;
  /** 版本前缀（不带尾斜杠），用于匹配当前 pathname 所处的版本 */
  rootPath: string;
}

/** 最新（正式）版本，部署在站点根路径 */
export const latestVersion: VersionItem = {
  label: 'v1.x',
  publicPath: '/',
  rootPath: '/',
};

/** 除 latest 外的其它版本，部署在各自的子路径下 */
export const otherVersions: VersionItem[] = [
  { label: 'alpha', publicPath: '/alpha/', rootPath: '/alpha' },
  { label: 'beta', publicPath: '/beta/', rootPath: '/beta' },
];

/**
 * 本地开发环境只显示 latest 版本，其它环境显示全部版本。
 */
export const getVersions = (): VersionItem[] =>
  process.env.NODE_ENV === 'development'
    ? [latestVersion]
    : [latestVersion, ...otherVersions];

/**
 * 根据当前 pathname 推导所处版本的 base 前缀（带尾斜杠）。
 * 例如 /alpha/xxx -> /alpha/，/beta/xxx -> /beta/，其它 -> /。
 * 用于原生 <iframe src> 等无法经过路由自动补 base 的场景。
 */
export const getBasePathByPathname = (pathname: string): string => {
  const matched = otherVersions.find((v) => pathname.startsWith(v.rootPath));
  return matched ? matched.publicPath : latestVersion.publicPath;
};
