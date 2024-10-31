import { BaseLang } from './base';

const enUS: BaseLang = {
  cancel: 'Cancel', // actionsheet dialog picker
  confirm: 'Confirm', // dialog picker
  weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  placeholder: 'Placeholder', // input textarea用
  select: 'Please select ',
  selectedCityGroupName: 'Selected City',
  currentCityGroupName: 'Current City',
  hotCitiesGroupName: 'Hot Cities',
  gpsType: {
    title: 'Current',
    code: 'GPS',
  },
  currentType: {
    // citySelector
    title: 'Selected',
    code: 'CRRT',
  },
  hotCityType: {
    // citySelector
    title: 'Hot',
    code: 'HOT',
  },
};

export default enUS;
