import { BaseLang } from './base';

const zhCN: BaseLang = {
  cancel: '取消', // actionsheet dialog picker
  confirm: '确认', // dialog picker
  weekdays: ['日', '一', '二', '三', '四', '五', '六'],
  placeholder: '请输入内容', // input textarea用
  select: '请选择',
  selectedCityGroupName: '当前城市',
  currentCityGroupName: '定位城市',
  hotCitiesGroupName: '热门城市',
  gpsType: {
    title: '定位',
    code: 'GPS',
  },
  currentType: {
    // citySelector
    title: '当前',
    code: 'CRRT',
  },
  hotCityType: {
    // citySelector
    title: '热门',
    code: 'HOT',
  },
};

export default zhCN;
