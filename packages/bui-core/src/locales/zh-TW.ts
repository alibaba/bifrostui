import { BaseLang } from './base';

const zhTW: BaseLang = {
  dialog: {
    cancel: '取消',
    confirm: '確認',
    placeholder: '請輸入內容',
  },
  picker: {
    cancel: '取消',
    confirm: '確認',
  },
  calendar: {
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
  },
  input: {
    placeholder: '請輸入內容',
  },
  textarea: {
    placeholder: '請輸入內容',
  },
  selector: {
    select: '請選擇',
  },
  citySelector: {
    selectedCityGroupName: '当前城市',
    currentCityGroupName: '定位城市',
    hotCitiesGroupName: '熱門城市',
    gpsType: {
      title: '定位',
      code: 'GPS',
    },
    currentType: {
      title: '当前',
      code: 'CRRT',
    },
    hotCityType: {
      title: '熱門',
      code: 'HOT',
    },
  },
};

export default zhTW;
