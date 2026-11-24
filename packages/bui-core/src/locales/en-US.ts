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
    labelName: 'TextArea',
    placeholder: 'Placeholder',
    remaining: 'Remaining',
    characters: 'Characters',
  },
  selector: {
    select: 'Please select',
  },
  citySelector: {
    selectedCityGroupName: 'Selected City',
    currentCityGroupName: 'Current City',
    hotCitiesGroupName: 'Hot Cities',
    // 索引条短名，与 zh-CN 保持同一套扁平字段（原来这里是 gpsType/currentType/hotCityType 对象，组件取不到）
    located: 'Current',
    current: 'Selected',
    hot: 'Hot',
    close: 'Close',
    groupIndexLabel: 'City group index',
    letterGroupLabel: 'Letter {letter}',
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
      year: 'Year',
      month: 'Month',
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      second: 'Second',
    },
    remainTime: 'Remaining Time',
    hasEnd: 'Countdown has ended',
    willEnd: 'About to end',
    timer: 'Timer',
  },
  progress: {
    labelName: 'Progress Bar',
    notStarted: 'Not started',
    justBegun: 'Just begun',
    gettingStarted: 'Getting started',
    inProgress: 'In progress',
    moreThanHalfway: 'More than halfway',
    nearingCompletion: 'Nearing completion',
    almostComplete: 'Almost complete',
    complete: 'Complete',
  },
};

export default enUS;
