import { OverrideProps } from '@bifrostui/types';

export type cityType = {
  /** 城市名 */
  name: string;
  /** 城市名id */
  code: string;
};

export type allCityItemType = {
  /** 城市列表 */
  cities: cityType[];
  /** 索引字母 */
  groupName: string;
};

export type CitySelectorProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /** 当前城市信息 */
      selectedCity?: cityType;
      /** 当前城市栏的title */
      selectedCityGroupName?: string;
      /** 定位城市信息 */
      currentCity?: cityType;
      /** 定位城市栏的title */
      currentCityGroupName?: string;
      /** 热门城市信息 */
      hotCities?: cityType[];
      /** 热门城市栏的title */
      hotCitiesGroupName?: string;
      /** 城市列表 */
      cities: allCityItemType[];
      /** 禁用展示索引 默认false 即展示索引 */
      disableIndex: boolean;
      /** 头部标题 */
      title?: string;
      /** 选择城市回调 */
      onSelect: (
        e: React.SyntheticEvent,
        data: {
          city: cityType;
        },
      ) => void;
      /** 和title配合使用，头部右侧的关闭回调 */
      onClose?: (e: React.SyntheticEvent) => void;
    };
    defaultComponent: D;
  },
  D
>;

export type CitySelectorCoreProps = CitySelectorProps & {
  touchHandler: any;
  height?: string;
};
