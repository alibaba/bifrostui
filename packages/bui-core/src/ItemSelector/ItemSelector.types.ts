import { OverrideProps } from '@bifrostui/types';

export type itemType = {
  /** Item名 */
  name: string;
  /** Item名id */
  code: string;
};

export type allItemType = {
  /** Item列表 */
  items: itemType[];
  /** 索引字母 */
  groupName: string;
};

export type ItemSelectorProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /** 当前Item信息 */
      selectedItem?: itemType;
      /** 当前Item栏的title */
      selectedItemGroupName?: string;
      /** 定位Item信息 */
      currentItem?: itemType;
      /** 定位Item栏的title */
      currentItemGroupName?: string;
      /** 热门Item信息 */
      hotItems?: itemType[];
      /** 热门Item栏的title */
      hotItemsGroupName?: string;
      /** Item列表 */
      items: allItemType[];
      /** 禁用展示索引 默认false 即展示索引 */
      disableIndex?: boolean;
      /** 头部标题 */
      title?: string;
      /** 选择Item回调 */
      onSelect: (
        e: React.SyntheticEvent,
        data: {
          item: itemType;
        },
      ) => void;
      /** 和title配合使用，头部右侧的关闭回调 */
      onClose?: (e: React.SyntheticEvent) => void;
    };
    defaultComponent: D;
  },
  D
>;

export type ItemSelectorCoreProps = ItemSelectorProps & {
  touchHandler: any;
  height?: string;
};
