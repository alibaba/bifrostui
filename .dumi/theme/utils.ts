export function isZhCN(pathname: string) {
  return /-en\/?$/.test(pathname);
}

export function getLocalizedPathname(
  path: string,
  zhCN?: boolean,
  search?: string,
  hash?: {
    zhCN?: string;
    enUS?: string;
  },
) {
  const pathname = path.startsWith('/') ? path : `/${path}`;
  let fullPath: string;
  if (!zhCN) {
    fullPath = /\/?index-en/.test(pathname) ? '/' : pathname.replace('-en', '');
  } else if (pathname === '/') {
    fullPath = '/index-en';
  } else if (pathname.endsWith('/')) {
    fullPath = pathname.replace(/\/$/, '-en/');
  } else {
    fullPath = `${pathname}-en`;
    fullPath = fullPath.replace(/(-en)+/, '-en');
  }

  if (hash) {
    const localHash = hash[zhCN ? 'zhCN' : 'enUS'];
    fullPath += `#${localHash}`;
  }

  return { pathname: fullPath, search };
}

export function isLocalStorageNameSupported() {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    console.error(
      'Your web browser does not support storing settings locally.',
      error,
    );
    return false;
  }
}
