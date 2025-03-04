import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { throttle, useForkRef, useTouchEmulator } from '@bifrostui/utils';
import { useLocaleText } from '../locales';
import ScrollView from '../ScrollView';
import { ItemSelectorCoreProps } from './ItemSelector.types';
import Selector from './Selector';

import './ItemSelector.less';

// 误差偏移量
const DEVIATION_HEIGHT = '6vmin';

const prefixCls = 'bui-item-selector';

const ItemSelector = React.forwardRef<HTMLDivElement, ItemSelectorCoreProps>(
  (props, ref) => {
    const {
      selectedItemGroupName: selectedItemGroupLocaleName,
      currentItemGroupName: currentItemGroupLocaleName,
      hotItemsGroupName: hotItemsGroupLocaleName,
      located,
      current,
      hot,
    } = useLocaleText('citySelector');
    const {
      className,
      title: pageTitle,
      selectedItem,
      selectedItemGroupName = selectedItemGroupLocaleName,
      currentItem,
      currentItemGroupName = currentItemGroupLocaleName,
      hotItems,
      hotItemsGroupName = hotItemsGroupLocaleName,
      items,
      disableIndex,
      touchHandler,
      height,
      onSelect,
      onClose,
      ...others
    } = props;

    const GPS_TYPE = {
      title: located,
      code: 'GPS',
    };
    const CURRENT_TYPE = {
      title: current,
      code: 'CRRT',
    };

    const HOT_ITEM_TYPE = {
      title: hot,
      code: 'HOT',
    };

    const itemRef = useRef(null);
    const nodeRef = useForkRef(ref, itemRef);
    useTouchEmulator(itemRef.current);
    const [codeGroup, setCodeGroup] = useState([]);
    const [codeShow, setCodeShow] = useState(false);
    const [targetId, setTargetId] = useState('');

    // 提取字母
    useEffect(() => {
      if (
        !items ||
        items?.length === 0 ||
        codeGroup.length !== 0 ||
        disableIndex
      )
        return;

      const newGroup = [];
      if (selectedItem) {
        newGroup.push(CURRENT_TYPE);
      }
      if (currentItem) {
        newGroup.push(GPS_TYPE);
      }
      if (hotItems) {
        newGroup.push(HOT_ITEM_TYPE);
      }
      items.forEach((item) => {
        newGroup.push(item.groupName.toUpperCase());
      });
      setCodeGroup(newGroup);
    }, [items, selectedItem, currentItem, hotItems]);

    // 计算每个code的top
    useEffect(() => {
      if (codeGroup.length === 0) return;
      setCodeShow(true);
    }, [codeGroup]);

    const selectHandler = (e, item) => {
      onSelect(e, { item });
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

    const renderTitile = (title, titleCode?) => {
      const parseTitle = (titleCode || title).toUpperCase();
      return (
        <div className="select-item-title" id={disableIndex ? '' : parseTitle}>
          {title?.toUpperCase()}
        </div>
      );
    };

    const renderItem = (allItems, title, titleCode?) => {
      return (
        <div>
          {renderTitile(title, titleCode)}
          <div className="select-item-buttons">
            {allItems.map((item, index) => {
              return (
                <Selector key={index} item={item} onSelect={selectHandler} />
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
            <div className={`${prefixCls}-btn-close`} onClick={closeHandler}>
              &#x2715;
            </div>
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
          <div className={`${prefixCls}-all-item`}>
            {/* 当前Item */}
            {selectedItem
              ? renderItem(
                  [selectedItem],
                  selectedItemGroupName,
                  CURRENT_TYPE.code,
                )
              : null}
            {/* 定位Item */}
            {currentItem
              ? renderItem([currentItem], currentItemGroupName, GPS_TYPE.code)
              : null}
            {/* 热门Item */}
            {hotItems?.length > 0
              ? renderItem(hotItems, hotItemsGroupName, HOT_ITEM_TYPE.code)
              : null}
            {items?.length > 0 ? (
              <div className={`${prefixCls}-list-container`}>
                {items.map((item, itemGroupIndex) => {
                  if (!item?.groupName) return null;
                  return (
                    <div key={itemGroupIndex}>
                      {renderTitile(item.groupName, item.groupName)}
                      <ul className={`${prefixCls}-list`}>
                        {item.items.map((it, itemIndex) => {
                          return (
                            <li
                              className={`${prefixCls}-list-item`}
                              key={itemIndex}
                              onClick={(e) => {
                                selectHandler(e, item);
                              }}
                            >
                              {it.name}
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
              'item-index-has-title': pageTitle,
            })}
          >
            <ul onTouchMove={touchCbk} className={`${prefixCls}-index-list`}>
              {codeGroup.map((item, chartIndex) => {
                return (
                  <li
                    className={`${prefixCls}-index-item`}
                    key={chartIndex}
                    data-code={item.code || item}
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

ItemSelector.displayName = 'BuiItemSelector';

export default ItemSelector;
