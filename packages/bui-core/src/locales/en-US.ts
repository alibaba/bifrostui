import { BaseLang } from './base';

const enUS: BaseLang = {
  dialog: {
    cancel: 'Cancel',
    ok: 'OK',
    placeholder: 'Placeholder',
  },
  picker: {
    cancel: 'Cancel',
    confirm: 'Confirm',
  },
  calendar: {
    Monday: 'Mon',
    Tuesday: 'Tue',
    Wednesday: 'Wed',
    Thursday: 'Thu',
    Friday: 'Fri',
    Saturday: 'Sat',
    Sunday: 'Sun',
  },
  input: {
    placeholder: 'Placeholder',
  },
  textarea: {
    placeholder: 'Placeholder',
  },
  selector: {
    select: 'Please select',
  },
  citySelector: {
    selectedCityGroupName: 'Selected City',
    currentCityGroupName: 'Current City',
    hotCitiesGroupName: 'Hot Cities',
    gpsType: {
      title: 'Current',
      code: 'GPS',
    },
    currentType: {
      title: 'Selected',
      code: 'CRRT',
    },
    hotCityType: {
      title: 'Hot',
      code: 'HOT',
    },
  },
  desktopDatePicker: {
    month: {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'Jun',
      7: 'Jul',
      8: 'Aug',
      9: 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec',
    },
  },
  datePicker: {
    year: 'Year',
    month: 'Month',
    day: 'Day',
    hour: 'Hour',
    minute: 'Minute',
    second: 'Second',
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
};

export default enUS;
