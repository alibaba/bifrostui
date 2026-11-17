import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { throttle, useForkRef, useTouchEmulator } from '@bifrostui/utils';
import { CloseLargeIcon } from '@bifrostui/icons';
import IconButton from '../IconButton';
import { useLocaleText } from '../locales';
import ScrollView from '../ScrollView';
import { CitySelectorCoreProps } from './CitySelector.types';
import Selector from './Selector';

import './index.less';

// 误差偏移量
const DEVIATION_HEIGHT = '6vmin';

// 字母分组（A-Z / a-z）的读屏名统一写成“字母A”：字母在句尾才按字母名读，
const isSingleLetter = (name) =>
  typeof name === 'string' && /^[a-zA-Z]$/.test(name);

const toGroupLabel = (name, letterLabel?) =>
  isSingleLetter(name)
    ? letterLabel?.replace('{letter}', name.toUpperCase())
    : name;

const prefixCls = 'bui-city-selector';

const CitySelector = React.forwardRef<HTMLDivElement, CitySelectorCoreProps>(
  (props, ref) => {
    const {
      selectedCityGroupName: selectedCityGroupLocaleName,
      currentCityGroupName: currentCityGroupLocaleName,
      hotCitiesGroupName: hotCitiesGroupLocaleName,
      located,
      current,
      hot,
      close: closeLabel,
      groupIndexLabel,
      letterGroupLabel,
    } = useLocaleText('citySelector');
    const {
      className,
      title: pageTitle,
      selectedCity,
      selectedCityGroupName = selectedCityGroupLocaleName,
      currentCity,
      currentCityGroupName = currentCityGroupLocaleName,
      hotCities,
      hotCitiesGroupName = hotCitiesGroupLocaleName,
      cities,
      disableIndex,
      touchHandler,
      height,
      onSelect,
      onClose,
      ...others
    } = props;

    const GPS_TYPE = {
      title: located,
      label: currentCityGroupName,
      code: 'GPS',
    };
    const CURRENT_TYPE = {
      title: current,
      label: selectedCityGroupName,
      code: 'CRRT',
    };

    const HOT_CITY_TYPE = {
      title: hot,
      label: hotCitiesGroupName,
      code: 'HOT',
    };

    const cityRef = useRef(null);
    const nodeRef = useForkRef(ref, cityRef);
    useTouchEmulator(cityRef.current);
    const [codeGroup, setCodeGroup] = useState([]);
    const [codeShow, setCodeShow] = useState(false);
    const [targetId, setTargetId] = useState('');

    // 提取字母
    useEffect(() => {
      if (
        !cities ||
        cities?.length === 0 ||
        codeGroup.length !== 0 ||
        disableIndex
      )
        return;

      const newGroup = [];
      if (selectedCity) {
        newGroup.push(CURRENT_TYPE);
      }
      if (currentCity) {
        newGroup.push(GPS_TYPE);
      }
      if (hotCities?.length > 0) {
        newGroup.push(HOT_CITY_TYPE);
      }
      cities.forEach((item) => {
        if (item?.groupName) {
          newGroup.push(item.groupName.toUpperCase());
        }
      });
      setCodeGroup(newGroup);
    }, [cities, selectedCity, currentCity, hotCities]);

    // 计算每个code的top
    useEffect(() => {
      if (codeGroup.length === 0) return;
      setCodeShow(true);
    }, [codeGroup]);

    const selectHandler = (e, city) => {
      onSelect(e, { city });
    };

    const scrollToCode = (targetCode) => {
      if (!targetCode) return;
      setTargetId((oldCode) => {
        if (targetCode !== oldCode) return targetCode;
        return oldCode;
      });
    };

    const touchCbk = (e: React.SyntheticEvent) => {
      e.stopPropagation();
      touchHandler?.(e, scrollToCode, codeGroup);
    };

    const codeClickHandler = (rightCode) => {
      setTargetId(rightCode);
    };

    const scrollHandler = throttle(() => {
      if (targetId) {
        setTargetId(undefined);
      }
    }, 500);

    const closeHandler = (e: React.SyntheticEvent) => {
      onClose?.(e);
    };

    const renderTitle = (title, titleCode?) => {
      const parseTitle = (titleCode || title).toUpperCase();
      return (
        <div
          className="select-city-title"
          id={disableIndex ? '' : parseTitle}
          aria-hidden={isSingleLetter(parseTitle) || undefined}
        >
          {title?.toUpperCase()}
        </div>
      );
    };

    const renderCity = (citys, title, titleCode?) => {
      return (
        <div>
          {renderTitle(title, titleCode)}
          <div className="select-city-buttons">
            {citys.map((city, index) => {
              return (
                <Selector key={index} city={city} onSelect={selectHandler} />
              );
            })}
          </div>
        </div>
      );
    };

    return (
      <div className={clsx(prefixCls, className)} ref={nodeRef} {...others}>
        {pageTitle ? (
          <div className={`${prefixCls}-title`}>
            {pageTitle}
            <IconButton
              className={`${prefixCls}-btn-close`}
              onClick={closeHandler}
              aria-label={closeLabel}
            >
              <CloseLargeIcon />
            </IconButton>
          </div>
        ) : null}
        <ScrollView
          scrollIntoView={targetId}
          scrollY
          className={clsx(`${prefixCls}-scroll-view-container tph`, {
            'container-has-title': pageTitle,
          })}
          onScroll={scrollHandler}
        >
          <div className={`${prefixCls}-all-city`}>
            {/* 当前城市 */}
            {selectedCity
              ? renderCity(
                  [selectedCity],
                  selectedCityGroupName,
                  CURRENT_TYPE.code,
                )
              : null}
            {/* 定位城市 */}
            {currentCity
              ? renderCity([currentCity], currentCityGroupName, GPS_TYPE.code)
              : null}
            {/* 热门城市 */}
            {hotCities?.length > 0
              ? renderCity(hotCities, hotCitiesGroupName, HOT_CITY_TYPE.code)
              : null}
            {cities?.length > 0 ? (
              <div className={`${prefixCls}-list-container`}>
                {cities.map((item, cityGroupIndex) => {
                  if (!item?.groupName) return null;
                  const groupLabel = toGroupLabel(
                    item.groupName,
                    letterGroupLabel,
                  );
                  return (
                    <div key={cityGroupIndex}>
                      {renderTitle(item.groupName, item.groupName)}
                      <ul
                        className={`${prefixCls}-list`}
                        role="listbox"
                        aria-label={groupLabel}
                      >
                        {item.cities.map((city, cityIndex) => {
                          return (
                            <li
                              className={`${prefixCls}-list-item`}
                              key={cityIndex}
                              role="option"
                              aria-selected={
                                selectedCity?.code === city.code || undefined
                              }
                              onClick={(e) => {
                                selectHandler(e, city);
                              }}
                            >
                              {city.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </ScrollView>
        {codeGroup?.length > 0 && height ? (
          <div
            className={clsx(`${prefixCls}-index-container`, {
              'left-in': codeShow,
              'city-index-has-title': pageTitle,
            })}
          >
            <ul
              onTouchMove={touchCbk}
              className={`${prefixCls}-index-list`}
              role="listbox"
              aria-label={groupIndexLabel}
            >
              {codeGroup.map((item, chartIndex) => {
                const indexLabel = toGroupLabel(
                  item.label || item,
                  letterGroupLabel,
                );
                return (
                  <li
                    className={`${prefixCls}-index-item`}
                    key={chartIndex}
                    data-code={item.code || item}
                    role="option"
                    aria-selected={targetId === (item.code || item)}
                    aria-label={indexLabel}
                    onClick={() => {
                      codeClickHandler(item.code || item);
                    }}
                    style={{
                      maxHeight: `calc((${height} - ${DEVIATION_HEIGHT}) / ${codeGroup.length})`,
                    }}
                  >
                    {item.title || item}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    );
  },
);

CitySelector.displayName = 'BuiCitySelector';

export default CitySelector;
