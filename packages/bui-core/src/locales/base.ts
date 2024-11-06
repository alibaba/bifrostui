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
    weekdays: Array<string>;
  };
  input: {
    placeholder: string;
  };
  textarea: {
    placeholder: string;
  };
  selector: {
    select: string;
  };
  citySelector: {
    selectedCityGroupName: string;
    currentCityGroupName: string;
    hotCitiesGroupName: string;
    gpsType: {
      title: string;
      code: string;
    };
    currentType: {
      title: string;
      code: string;
    };
    hotCityType: {
      title: string;
      code: string;
    };
  };
}
