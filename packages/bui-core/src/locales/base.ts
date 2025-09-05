export interface BaseLang {
  dialog?: {
    cancel?: string;
    ok?: string;
    placeholder?: string;
  };
  picker?: {
    cancel?: string;
    confirm?: string;
  };
  calendar?: {
    Monday?: string;
    Tuesday?: string;
    Wednesday?: string;
    Thursday?: string;
    Friday?: string;
    Saturday?: string;
    Sunday?: string;
  };
  input?: {
    placeholder?: string;
  };
  textarea?: {
    placeholder?: string;
    remaining?: string;
    characters?: string;
  };
  selector?: {
    select?: string;
  };
  citySelector?: {
    selectedCityGroupName?: string;
    currentCityGroupName?: string;
    hotCitiesGroupName?: string;
    located?: string;
    current?: string;
    hot?: string;
    gpsType?: Record<string, string>;
    currentType?: Record<string, string>;
    hotCityType?: Record<string, string>;
  };
  desktopDatePicker?: {
    month?: Record<number, string>;
  };
  datePicker?: {
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
  };
  countdown?: {
    remain?: {
      year?: string;
      month?: string;
      day?: string;
      hour?: string;
      minute?: string;
      second?: string;
    };
    remainTime?: string;
    hasEnd?: string;
    willEnd?: string;
    timer?: string;
  };
  progress?: {
    notStarted?: string;
    justBegun?: string;
    gettingStarted?: string;
    inProgress?: string;
    moreThanHalfway?: string;
    almostComplete?: string;
    complete?: string;
    nearingCompletion?: string;
  };
}
