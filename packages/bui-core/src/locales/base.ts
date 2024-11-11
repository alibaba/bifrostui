export interface BaseLang {
  dialog: {
    cancel: string;
    confirm: string;
    placeholder: string;
  };
  picker: {
    cancel: string;
    confirm: string;
  };
  calendar: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
  citySelector: {
    selectedCityGroupName: string;
    currentCityGroupName: string;
    hotCitiesGroupName: string;
    located: string;
    current: string;
    hot: string;
  };
}
