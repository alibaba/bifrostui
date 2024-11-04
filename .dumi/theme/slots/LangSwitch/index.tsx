import { ReactComponent as IconDown } from '@ant-design/icons-svg/inline-svg/outlined/down.svg';
import {
  history,
  Link,
  useIntl,
  useLocale,
  useLocation,
  useSiteData,
} from 'dumi';
import React, { useEffect, useState, type FC } from 'react';
import './index.less';
import * as utils from '../../utils';

type ILocaleItem = ReturnType<typeof useSiteData>['locales'][0];

function getTargetLocalePath({
  pathname,
  current,
  target,
}: {
  pathname: string;
  current: ILocaleItem;
  target: ILocaleItem;
}) {
  const clearPath =
    'base' in current
      ? // handle '/en-US/a' => '/a' or '/en-US' => '' => '/'
        pathname.replace(current.base.replace(/\/$/, ''), '') || '/'
      : pathname.replace(new RegExp(`${current.suffix}$`), '');

  return 'base' in target
    ? `${
        // for `/` base, strip duplicated leading slash
        target.base.replace(/\/$/, '')
      }${clearPath}`
        // for `/` clearPath, strip duplicated ending slash
        .replace(/([^/])\/$/, '$1')
    : `${clearPath}${target.suffix}`;
}

const SingleSwitch: FC<{ locale: ILocaleItem; current: ILocaleItem }> = ({
  locale,
  current,
}) => {
  // debugger;
  const { pathname, search } = useLocation();
  const currentProtocol = `${window.location.protocol}//`;
  const currentHref = window.location.href.slice(currentProtocol.length);
  const [path, setPath] = useState(() =>
    getTargetLocalePath({ pathname, current, target: locale }),
  );

  if (utils.isLocalStorageNameSupported()) {
    localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
  }
  // window.location.href =
  //   currentProtocol +
  //   currentHref.replace(
  //     window.location.pathname,
  //     utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname), search)
  //       .pathname,
  //   );
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   setPath(getTargetLocalePath({ pathname, current, target: locale }));
  // }, [pathname, current.id, locale.id]);
  useEffect(() => {
    setPath(
      utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname), search)
        .pathname,
    );
  }, [current.id, locale.id, pathname]);

  return (
    <Link className="dumi-default-lang-switch" to={path}>
      {locale.name}
    </Link>
  );
};

const LangSwitch: FC = () => {
  const { locales } = useSiteData();
  const { locale } = useIntl();
  const current = useLocale();

  // do not render in single language
  if (locales.length <= 1) return null;

  return locales.length > 2 ? (
    <div className="dumi-default-lang-select">
      <select
        defaultValue={locale}
        onChange={(ev) => {
          history.push(
            getTargetLocalePath({
              pathname: history.location.pathname,
              current,
              target: locales.find(({ id }) => id === ev.target.value)!,
            }),
          );
        }}
      >
        {locales.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <IconDown />
    </div>
  ) : (
    // single language switch
    <SingleSwitch
      locale={locales.find(({ id }) => id === locale)!}
      current={current}
    />
  );
};

export default LangSwitch;
