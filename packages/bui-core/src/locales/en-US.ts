import { BaseLang } from './base';

const enUS: BaseLang = {
  dialog: {
    cancel: 'Cancel',
    confirm: 'Confirm',
    placeholder: 'Placeholder',
  },
  picker: {
    cancel: 'Cancel',
    confirm: 'Confirm',
  },
  calendar: {
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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
};

export default enUS;
