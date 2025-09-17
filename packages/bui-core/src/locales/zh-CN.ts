import { BaseLang } from './base';

const zhCN: BaseLang = {
  dialog: {
    cancel: '取消',
    ok: '确定',
    placeholder: '请输入内容',
  },
  picker: {
    cancel: '取消',
    confirm: '确认',
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
    selectedCityGroupName: '当前城市',
    currentCityGroupName: '定位城市',
    hotCitiesGroupName: '热门城市',
    located: '定位',
    current: '当前',
    hot: '热门',
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
    hour: '时',
    minute: '分',
    second: '秒',
  },
  countdown: {
    remain: {
      year: '年',
      month: '个月',
      day: '天',
      hour: '小时',
      minute: '分钟',
      second: '秒',
    },
    remainTime: '剩余时间',
    hasEnd: '倒计时已结束',
    willEnd: '即将结束',
    timer: '倒计时器',
  },
  progress: {
    labelName: '进度条',
    notStarted: '未开始',
    justBegun: '刚刚开始',
    gettingStarted: '开始进行',
    inProgress: '进行中',
    moreThanHalfway: '过半完成',
    nearingCompletion: '接近完成',
    almostComplete: '即将完成',
    complete: '已完成',
  },
  textarea: {
    labelName: '文本区域',
    placeholder: '请输入内容',
    remaining: '剩余',
    characters: '个字',
  },
};

export default zhCN;
