import { OverrideProps } from '@bifrostui/types';

export type itemType = {
  /** Item名 */
  name: string;
};

export type allItemType = {
  /** Item列表 */
  items: itemType[];
  /** 组名 */
  groupName?: string;
  /** 索引字母 */
  indexName?: string;
  /** 索引Code */
  indexCode?: string;
  /** 是否平铺 */
  isFlat?: boolean;
};

export type ItemSelectorProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
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
          group: allItemType;
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
