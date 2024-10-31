import { BaseLang } from './base';

const zhTW: BaseLang = {
  cancel: '取消', // actionsheet dialog picker
  confirm: '確認', // dialog picker
  weekdays: ['日', '一', '二', '三', '四', '五', '六'],
  placeholder: '請輸入內容', // input textarea用
  select: '請選擇',
  selectedCityGroupName: '当前城市',
  currentCityGroupName: '定位城市',
  hotCitiesGroupName: '熱門城市',
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
    title: '熱門',
    code: 'HOT',
  },
};

export default zhTW;
