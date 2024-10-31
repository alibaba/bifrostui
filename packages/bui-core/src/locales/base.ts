export interface BaseLang {
  cancel: string; // dialog picker
  confirm: string; // dialog picker
  weekdays: Array<string>; // calendar
  placeholder: string; // input textarea
  select: string; // selector
  selectedCityGroupName: string; // citySelector
  currentCityGroupName: string; // citySelector
  hotCitiesGroupName: string; // citySelector
  gpsType: {
    // citySelector
    title: string;
    code: string;
  };
  currentType: {
    // citySelector
    title: string;
    code: string;
  };
  hotCityType: {
    // citySelector
    title: string;
    code: string;
  };
}
