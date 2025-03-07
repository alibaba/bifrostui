import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { throttle, useForkRef, useTouchEmulator } from '@bifrostui/utils';
import ScrollView from '../ScrollView';
import { ItemSelectorCoreProps, ItemGroup } from './ItemSelector.types';
import Selector from './Selector';

import './ItemSelector.less';

// 误差偏移量
const DEVIATION_HEIGHT = '6vmin';

const prefixCls = 'bui-item-selector';

const ItemSelector = React.forwardRef<HTMLDivElement, ItemSelectorCoreProps>(
  (props, ref) => {
    const {
      className,
      title: pageTitle,
      items,
      disableIndex,
      touchHandler,
      height,
      onSelect,
      onClose,
      ...others
    } = props;

    const itemRef = useRef(null);
    const nodeRef = useForkRef(ref, itemRef);
    useTouchEmulator(itemRef.current);
    const [codeGroup, setCodeGroup] = useState([]);
    const [codeShow, setCodeShow] = useState(false);
    const [targetId, setTargetId] = useState('');

    const getGroupName = (item: ItemGroup): string => item.groupName || '';
    const getIdxName = (item: ItemGroup): string =>
      typeof item.indexName === 'string' ? item.indexName : getGroupName(item);
    const getIdxCode = (item: ItemGroup): string =>
      typeof item.indexCode === 'string' ? item.indexCode : getIdxName(item);
    const renderTitle = (item) => {
      const title = getGroupName(item);
      return title ? (
        <div
          className="select-item-title"
          id={disableIndex ? '' : getIdxCode(item)}
        >
          {title}
        </div>
      ) : null;
    };

    // 提取字母
    useEffect(() => {
      if (
        !items ||
        items?.length === 0 ||
        codeGroup.length !== 0 ||
        disableIndex
      ) {
        return;
      }
      setCodeGroup(
        items.map((item) => {
          return {
            name: getIdxName(item),
            code: getIdxCode(item),
          };
        }),
      );
    }, [items]);

    // 计算每个code的top
    useEffect(() => {
      if (codeGroup.length === 0) return;
      setCodeShow(true);
    }, [codeGroup]);

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
            {items?.length > 0 ? (
              <div className={`${prefixCls}-list-container`}>
                {items.map((item, itemGroupIndex) => {
                  if (!item?.groupName) return null;
                  return (
                    <div key={itemGroupIndex}>
                      {renderTitle(item)}
                      {item.isFlat ? (
                        <div className="select-item-buttons">
                          {item.items.map((it, index) => {
                            return (
                              <Selector
                                key={index}
                                item={it}
                                onSelect={(e) => {
                                  onSelect(e, { item: it, group: item });
                                }}
                              />
                            );
                          })}
                        </div>
                      ) : (
                        <ul className={`${prefixCls}-list`}>
                          {item.items.map((it, itemIndex) => {
                            return (
                              <li
                                className={`${prefixCls}-list-item`}
                                key={itemIndex}
                                onClick={(e) => {
                                  onSelect(e, { item: it, group: item });
                                }}
                              >
                                {it.name}
                              </li>
                            );
                          })}
                        </ul>
                      )}
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
              {codeGroup.map((item, idx) => {
                return item.name ? (
                  <li
                    className={`${prefixCls}-index-item`}
                    key={idx}
                    data-code={item.code}
                    onClick={() => {
                      codeClickHandler(item.code);
                    }}
                    style={{
                      maxHeight: `calc((${height} - ${DEVIATION_HEIGHT}) / ${codeGroup.length})`,
                    }}
                  >
                    {item.name}
                  </li>
                ) : null;
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
