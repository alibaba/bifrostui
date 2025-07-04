import React from 'react';
import clsx from 'clsx';
import { ArrowDownwardLargeIcon } from '@bifrostui/icons';
import { useValue } from '@bifrostui/utils';
import CollapseItem from './CollapsePanelItem';
import {
  CollapsePanelProps,
  CollapsePanelItemProps,
} from './CollapsePanel.types';
import './index.less';

const prefixCls = 'bui-collapse-panel';

const CollapsePanel = React.forwardRef<HTMLDivElement, CollapsePanelProps>(
  (props, ref) => {
    const {
      className,
      style,
      accordion = false,
      activeKeys,
      defaultActiveKeys,
      items,
      children,
      arrowIcon,
      onChange,
      ...others
    } = props;
    // 如果有受控的 activeKey，则使用它，否则使用内部状态
    // const currentOpenKeys = activeKeys !== undefined ? activeKeys : openKeys;
    const [openKeys, setOpenKeys] = useValue<(number | string)[]>({
      defaultValue: defaultActiveKeys || [],
      value: activeKeys,
    });

    const handleClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      target: CollapsePanelItemProps,
    ) => {
      const targetKey = target?.key;
      let newOpenKeys: (number | string)[] = [];

      if (accordion) {
        // 手风琴模式：单个打开
        newOpenKeys = openKeys.includes(targetKey) ? [] : [targetKey];
      } else {
        // 非手风琴模式：多个打开
        newOpenKeys = openKeys.includes(targetKey)
          ? openKeys.filter((k) => k !== targetKey)
          : [targetKey, ...openKeys];
      }

      setOpenKeys(event, newOpenKeys);
      onChange?.(event, { activeKeys: newOpenKeys });
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
              active={openKeys.includes(item.key)}
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
            active: openKeys.includes(child.key),
            onClick: (e) => handleClick(e, child),
          };
          return React.cloneElement(child, newProps);
        }
        return child;
      });

      return enhancedChildren;
    };

    if (items == null && children == null) {
      return null;
    }

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

export default CollapsePanel;
