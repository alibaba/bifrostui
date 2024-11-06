import { BaseLang } from './base';

const zhCN: BaseLang = {
  dialog: {
    cancel: '取消',
    confirm: '确定',
    placeholder: '请输入内容',
  },
  picker: {
    cancel: '取消',
    confirm: '确定',
  },
  calendar: {
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
  },
  input: {
    placeholder: '请输入内容',
  },
  textarea: {
    placeholder: '请输入内容',
  },
  selector: {
    select: '请选择',
  },
  citySelector: {
    selectedCityGroupName: '当前城市',
    currentCityGroupName: '定位城市',
    hotCitiesGroupName: '热门城市',
    gpsType: {
      title: '定位',
      code: 'GPS',
    },
    currentType: {
      title: '当前',
      code: 'CRRT',
    },
    hotCityType: {
      title: '热门',
      code: 'HOT',
    },
  },
};

export default zhCN;
