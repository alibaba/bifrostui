import React, { useState } from 'react';
import clsx from 'clsx';
import { ArrowDownwardLargeIcon } from '@bifrostui/icons';
import CollapseItem from './CollapsePanelItem';
import {
  CollapsePanelProps,
  CollapsePanelItemProps,
} from './CollapsePanel.types';
import './CollapsePanel.less';

const prefixCls = 'bui-collapse-panel';

const CollapsePanel = React.forwardRef<HTMLDivElement, CollapsePanelProps>(
  (props, ref) => {
    const {
      className,
      style,
      accordion,
      activeKeys,
      defaultActiveKeys,
      items,
      children,
      arrowIcon,
      onChange,
      ...others
    } = props;
    const [openKeys, setOpenKeys] = useState(
      defaultActiveKeys || activeKeys || [],
    );
    // 如果有受控的 activeKey，则使用它，否则使用内部状态
    const currentOpenKeys = activeKeys !== undefined ? activeKeys : openKeys;

    const handleClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      target: CollapsePanelItemProps,
    ) => {
      const targetKey = target?.key;
      let newOpenKeys: string[] = [];

      if (accordion) {
        // 手风琴模式：单个打开
        newOpenKeys = currentOpenKeys.includes(targetKey) ? [] : [targetKey];
      } else {
        // 非手风琴模式：多个打开
        newOpenKeys = currentOpenKeys.includes(targetKey)
          ? currentOpenKeys.filter((k) => k !== targetKey)
          : [targetKey, ...currentOpenKeys];

        setOpenKeys(newOpenKeys);
      }

      setOpenKeys(newOpenKeys);
      onChange?.(newOpenKeys);
      target?.onClick?.(event);
    };

    const getArrowIcon = () => {
      if (arrowIcon) {
        return arrowIcon;
      }
      return <ArrowDownwardLargeIcon />;
    };

    const renderList = () => {
      if (Array.isArray(items)) {
        return items.map((item) => {
          const { key, ...otherProps } = item;
          return (
            <CollapseItem
              key={key}
              icon={getArrowIcon()}
              active={currentOpenKeys.includes(item.key)}
              {...otherProps}
              onClick={(e) => handleClick(e, item)}
            />
          );
        });
      }

      const enhancedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const newProps = {
            icon: getArrowIcon(),
            active: currentOpenKeys.includes(child.key),
            onClick: (e) => handleClick(e, child),
          };
          return React.cloneElement(child, newProps);
        }
        return child;
      });

      return enhancedChildren;
    };

    return (
      <div
        className={clsx(prefixCls, className)}
        style={style}
        ref={ref}
        {...others}
      >
        <div className={`${prefixCls}-list`}>{renderList()}</div>
      </div>
    );
  },
);

CollapsePanel.displayName = 'BuiCollapsePanel';
CollapsePanel.defaultProps = {
  accordion: false,
};

export default CollapsePanel;
