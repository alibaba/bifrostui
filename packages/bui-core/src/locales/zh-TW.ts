import { BaseLang } from './base';

const zhTW: BaseLang = {
  dialog: {
    cancel: '取消',
    ok: '確認',
    placeholder: '請輸入內容',
  },
  picker: {
    cancel: '取消',
    confirm: '確認',
  },
  calendar: {
    Monday: '一',
    Tuesday: '二',
    Wednesday: '三',
    Thursday: '四',
    Friday: '五',
    Saturday: '六',
    Sunday: '日',
  },
  citySelector: {
    selectedCityGroupName: '目前城市',
    currentCityGroupName: '定位城市',
    hotCitiesGroupName: '熱門城市',
    located: '定位',
    current: '目前',
    hot: '熱門',
  },
  desktopDatePicker: {
    month: {
      1: '1月',
      2: '2月',
      3: '3月',
      4: '4月',
      5: '5月',
      6: '6月',
      7: '7月',
      8: '8月',
      9: '9月',
      10: '10月',
      11: '11月',
      12: '12月',
    },
  },
  datePicker: {
    year: '年',
    month: '月',
    day: '日',
    hour: '時',
    minute: '分',
    second: '秒',
  },
  countdown: {
    remain: {
      year: '年',
      month: '個月',
      day: '天',
      hour: '小時',
      minute: '分鐘',
      second: '秒',
    },
    remainTime: '剩餘時間',
    hasEnd: '倒數計時已結束',
    willEnd: '即將結束',
    timer: '倒數計時器',
  },
  progress: {
    labelName: '進度條',
    notStarted: '未開始',
    justBegun: '剛剛開始',
    gettingStarted: '開始進行',
    inProgress: '進行中',
    moreThanHalfway: '過半完成',
    nearingCompletion: '接近完成',
    almostComplete: '即將完成',
    complete: '已完成',
  },
  textarea: {
    labelName: '文本區域',
    placeholder: '請輸入內容',
    remaining: '剩餘',
    characters: '個字',
  },
};

export default zhTW;
